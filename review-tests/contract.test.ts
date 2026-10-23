import { describe, test, expect } from "bun:test";
import { readFileSync } from "node:fs";
import { createPublicKey, verify as nodeVerify } from "node:crypto";
import { ed25519 } from "../legal-evidence-consensus-workflow/node_modules/@noble/curves/ed25519.js";
import { bytesToHex, utf8ToBytes } from "../legal-evidence-consensus-workflow/node_modules/@noble/hashes/utils.js";
import { CONTRACT_ENVELOPE_UTF8 } from "../legal-evidence-consensus-workflow/contract-embedded";
import { CONTRACT_POLICY } from "../legal-evidence-consensus-workflow/contract-policy";
import { CONTRACT_CLAIMS } from "../legal-evidence-consensus-workflow/contract-scenarios";
import { admitContractPackage, renderClaim, reviewContract, reviewHttpResponse } from "../legal-evidence-consensus-workflow/contract-review";
import { fetchContractReport, runContractWorkflow } from "../legal-evidence-consensus-workflow/contract-runtime";
import { canon, sha } from "../legal-evidence-consensus-workflow/rapport";
import type { Claim } from "../legal-evidence-consensus-workflow/contract-types";

const clone = <T>(x: T): T => JSON.parse(JSON.stringify(x));
const expected = JSON.parse(readFileSync(new URL("../examples/contract-demo/expected-results.json", import.meta.url), "utf8")).cases;
const rendered = () => reviewContract(CONTRACT_ENVELOPE_UTF8, clone(CONTRACT_CLAIMS));
const flip = (x: string) => (x[0] === "0" ? "1" : "0") + x.slice(1);

// Explicitly test-only policies allow deeper structural gates to be reached.
// The production entry always uses CONTRACT_POLICY, with no caller override.
function signedMutation(change: (pack: any) => void) {
  const pack = JSON.parse(JSON.parse(CONTRACT_ENVELOPE_UTF8).payloadUtf8); change(pack);
  const payloadUtf8 = JSON.stringify(pack);
  const testKey = new Uint8Array(32).fill(17);
  const body = JSON.stringify({ payloadUtf8, signatureHex: bytesToHex(ed25519.sign(utf8ToBytes(payloadUtf8), testKey)) });
  return { body, policy: { ...CONTRACT_POLICY, envelopeSha256: sha(body), envelopeUtf8Bytes: utf8ToBytes(body).length,
    payloadSha256: sha(payloadUtf8), publicKeyHex: bytesToHex(ed25519.getPublicKey(testKey)) } };
}

describe("Contract scenarios fixed before execution", () => {
  for (const item of expected) test(item.id + " -> " + item.outcome, () => {
    const result = rendered().claims.find(c => c.id === item.id)!;
    expect(result.outcome).toBe(item.outcome); expect(result.reasons).toEqual([item.reason]);
  });
  test("omitting a condition remains a defect even though value and units agree", () => {
    const result = rendered().claims.find(c => c.id === "omitted-condition")!;
    expect(result.claim.value).toBe(result.comparedFact!.value);
    expect(result.claim.unit).toBe(result.comparedFact!.unit);
    expect(result.reasons).toEqual(["CONDITION_OMITTED"]);
  });
  test("the same effective date has different supported fees at different knowledge horizons", () => {
    const cases = rendered().claims;
    const before = cases.find(c => c.id === "before-amendment-known")!;
    const after = cases.find(c => c.id === "retrospective-view")!;
    expect(before.claim.effectiveAt).toBe(after.claim.effectiveAt);
    expect(before.comparedFact!.value).toBe(8400); expect(after.comparedFact!.value).toBe(9100);
  });
  test("a correct current number cannot launder a superseded citation", () => {
    const claim = { ...CONTRACT_CLAIMS[1]!, value: 9100, text: "The monthly service fee is CAD 9,100." };
    expect(reviewContract(CONTRACT_ENVELOPE_UTF8, [claim]).claims[0]!.reasons).toEqual(["SOURCE_SUPERSEDED"]);
  });
  test("unsupported free text cannot be accepted through matching annotations", () => {
    const claim = { ...CONTRACT_CLAIMS[0]!, text: "The fee is CAD 9,100 and all other obligations are waived." };
    expect(reviewContract(CONTRACT_ENVELOPE_UTF8, [claim]).claims[0]!.outcome).toBe("OUTSIDE_SUPPORTED_SCOPE");
  });
  test("invalid dates and unknown keys never yield a matching result", () => {
    for (const change of [{ effectiveAt: "2026-02-30" }, { knowledgeAt: "tomorrow" }, { key: "__proto__" }, { value: Number.NaN }, { extra: "unreviewed" }]) {
      const claim = { ...CONTRACT_CLAIMS[0]!, ...change } as Claim;
      expect(reviewContract(CONTRACT_ENVELOPE_UTF8, [claim]).claims[0]!.outcome).toBe("OUTSIDE_SUPPORTED_SCOPE");
    }
  });
  test("a quotation from the wrong section is not accepted", () => {
    const claim = { ...CONTRACT_CLAIMS[4]!, section: "2.1" };
    expect(reviewContract(CONTRACT_ENVELOPE_UTF8, [claim]).claims[0]!.reasons).toEqual(["CITATION_NOT_FOUND"]);
  });
  test("the report never upgrades unperformed reading, corroboration or legal validity", () => {
    for (const result of rendered().claims) {
      expect(result.checks.independentReading).toBe("NOT_ASSESSED");
      expect(result.checks.corroboration).toBe("NOT_ASSESSED");
      expect(result.checks.legalValidity).toBe("NOT_ASSESSED");
      expect(result.checks.fullDocumentCoverage).toBe("NOT_MEASURED");
    }
  });
});

describe("Full-payload integrity and citation admission", () => {
  test("embedded and published package bytes agree", () => {
    expect(readFileSync(new URL("../examples/contract-demo/signed-package.json", import.meta.url), "utf8")).toBe(CONTRACT_ENVELOPE_UTF8);
    expect(admitContractPackage(CONTRACT_ENVELOPE_UTF8).facts.length).toBe(3);
  });
  test("Node crypto independently verifies the complete payload signature", () => {
    const envelope = JSON.parse(CONTRACT_ENVELOPE_UTF8);
    const spki = Buffer.concat([Buffer.from("302a300506032b6570032100", "hex"), Buffer.from(CONTRACT_POLICY.publicKeyHex, "hex")]);
    const key = createPublicKey({ key: spki, type: "spki", format: "der" });
    expect(nodeVerify(null, Buffer.from(envelope.payloadUtf8), key, Buffer.from(envelope.signatureHex, "hex"))).toBe(true);
    expect(nodeVerify(null, Buffer.from(envelope.payloadUtf8 + " "), key, Buffer.from(envelope.signatureHex, "hex"))).toBe(false);
  });
  test("altered bytes fail before any claim result exists", () => {
    expect(() => reviewContract(CONTRACT_ENVELOPE_UTF8.replace("8,400", "8,401"), CONTRACT_CLAIMS)).toThrow("CONTRACT_PACKAGE_REJECTED:HASH");
    expect(() => reviewContract(CONTRACT_ENVELOPE_UTF8 + "\n", CONTRACT_CLAIMS)).toThrow("CONTRACT_PACKAGE_REJECTED:LENGTH");
  });
  test("an invalid signature is rejected even with a refreshed outer checksum", () => {
    const envelope = JSON.parse(CONTRACT_ENVELOPE_UTF8); envelope.signatureHex = flip(envelope.signatureHex);
    const body = JSON.stringify(envelope), policy = { ...CONTRACT_POLICY, envelopeSha256: sha(body), envelopeUtf8Bytes: utf8ToBytes(body).length };
    expect(() => admitContractPackage(body, policy)).toThrow("CONTRACT_PACKAGE_REJECTED:SIGNATURE");
  });
  test("an altered payload is rejected after refreshing both checksums", () => {
    const envelope = JSON.parse(CONTRACT_ENVELOPE_UTF8); envelope.payloadUtf8 += " ";
    const body = JSON.stringify(envelope), policy = { ...CONTRACT_POLICY, envelopeSha256: sha(body), envelopeUtf8Bytes: utf8ToBytes(body).length, payloadSha256: sha(envelope.payloadUtf8) };
    expect(() => admitContractPackage(body, policy)).toThrow("CONTRACT_PACKAGE_REJECTED:SIGNATURE");
  });
  for (const [name, code, mutation] of [
    ["duplicate source", "DUPLICATE_SOURCE", (p: any) => p.sources.push(p.sources[0])],
    ["duplicate fact", "DUPLICATE_FACT", (p: any) => p.facts.push(p.facts[0])],
    ["altered source hash", "SOURCE_HASH", (p: any) => p.sources[0].text += "changed"],
    ["invented quotation", "FACT_CITATION", (p: any) => p.facts[0].quote = "A fabricated quotation."],
    ["supersession of different key", "SUPERSESSION", (p: any) => p.facts[1].supersedes = "ack-v1"],
    ["unexpected schema field", "SCHEMA", (p: any) => p.trusted = true],
  ] as const) test(name + " rejected even in a signed test payload", () => {
    const changed = signedMutation(mutation);
    expect(() => admitContractPackage(changed.body, changed.policy)).toThrow("CONTRACT_PACKAGE_REJECTED:" + code);
  });
});

describe("CRE transport adapter and reproducibility", () => {
  const config = { schedule: "*/30 * * * * *", source: "http" as const, sourceUrl: "https://raw.githubusercontent.com/siucsystem-star/legal-evidence-consensus/" + "a".repeat(40) + "/examples/contract-demo/signed-package.json" };
  test("HTTP and embedded bytes produce the same report digest", () => {
    expect(reviewHttpResponse(200, utf8ToBytes(CONTRACT_ENVELOPE_UTF8), CONTRACT_CLAIMS)).toEqual(rendered());
  });
  test("404, truncation and altered content do not fall back to an embedded success", () => {
    expect(() => reviewHttpResponse(404, utf8ToBytes(CONTRACT_ENVELOPE_UTF8), CONTRACT_CLAIMS)).toThrow("STATUS_404");
    expect(() => reviewHttpResponse(200, utf8ToBytes(CONTRACT_ENVELOPE_UTF8.slice(1)), CONTRACT_CLAIMS)).toThrow("LENGTH");
    expect(() => reviewHttpResponse(200, utf8ToBytes(CONTRACT_ENVELOPE_UTF8.replace("8,400", "8,401")), CONTRACT_CLAIMS)).toThrow("HASH");
  });
  test("the actual fetch function sends GET and evaluates the received body", () => {
    let calls = 0;
    const requester = { sendRequest(request: any) { calls++; expect(request.method).toBe("GET"); expect(request.url).toBe(config.sourceUrl); return { result: () => ({ statusCode: 200, body: utf8ToBytes(CONTRACT_ENVELOPE_UTF8) }) }; } };
    expect(JSON.parse(fetchContractReport(requester as any, config))).toEqual(rendered()); expect(calls).toBe(1);
  });
  test("a network error propagates instead of producing a successful report", () => {
    const requester = { sendRequest() { throw new Error("NETWORK_UNAVAILABLE"); } };
    expect(() => fetchContractReport(requester as any, config)).toThrow("NETWORK_UNAVAILABLE");
  });
  test("arbitrary or mutable URLs are refused before a network call", () => {
    for (const sourceUrl of ["http://localhost/", config.sourceUrl.replace("a".repeat(40), "main"), "https://other.example/package.json"]) {
      expect(() => fetchContractReport({} as any, { ...config, sourceUrl })).toThrow("PINNED_REPOSITORY_URL_REQUIRED");
    }
  });
  test("the real embedded CRE handler returns all cases and logs its limits", () => {
    const logs: string[] = [];
    const runtime = { config: { ...config, source: "embedded" }, log: (s: string) => logs.push(s) };
    expect(JSON.parse(runContractWorkflow(runtime as any))).toEqual(rendered());
    expect(logs.some(x => x.includes("no DON consensus"))).toBe(true);
  });
  test("a report hash binds claim text, dates, results and limitations", () => {
    const report = rendered(), { reportSha256, ...body } = report;
    expect(sha(canon(body))).toBe(reportSha256);
    const claim = clone(CONTRACT_CLAIMS[0]!); claim.knowledgeAt = "2026-06-01";
    expect(reviewContract(CONTRACT_ENVELOPE_UTF8, [claim]).reportSha256).not.toBe(reviewContract(CONTRACT_ENVELOPE_UTF8, [CONTRACT_CLAIMS[0]!]).reportSha256);
    expect(renderClaim(CONTRACT_CLAIMS[0]!)).toBe(CONTRACT_CLAIMS[0]!.text);
  });
});
