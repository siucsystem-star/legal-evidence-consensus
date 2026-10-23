import { ed25519 } from "@noble/curves/ed25519.js";
import { hexToBytes, utf8ToBytes } from "@noble/hashes/utils.js";
import { canon, sha } from "./rapport";
import { CONTRACT_POLICY } from "./contract-policy";
import type { Claim, ClaimResult, ContractPackage, ContractReport, Fact, PackagePolicy } from "./contract-types";

const SCOPE = "Synthetic documents and manually authored facts/claims; closed wording templates only. " +
  "Signature authenticates a local demonstration key, not a contracting party. " +
  "No legal validity, independent reading, corroboration, DON consensus or chain write is established.";
const KEY_UNITS: Record<string, string> = { monthly_fee: "CAD/month", acknowledgement_delay: "minutes" };
const own = (value: object, key: string) => Object.prototype.hasOwnProperty.call(value, key);
function requireValue(value: unknown, code: string): asserts value {
  if (!value) throw new Error("CONTRACT_PACKAGE_REJECTED:" + code);
}
function shape(value: unknown, keys: string[]): asserts value is Record<string, any> {
  requireValue(value && typeof value === "object" && !Array.isArray(value), "SCHEMA");
  requireValue(Object.keys(value).sort().join("|") === [...keys].sort().join("|"), "SCHEMA");
}
function date(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const timestamp = Date.parse(value + "T00:00:00Z");
  return Number.isFinite(timestamp) && new Date(timestamp).toISOString().slice(0, 10) === value;
}
function string(value: unknown): value is string { return typeof value === "string" && value.length > 0; }

/** Checks pinned bytes and a signature over the COMPLETE payload before parsing it. */
export function admitContractPackage(envelopeUtf8: string, policy: PackagePolicy = CONTRACT_POLICY): ContractPackage {
  requireValue(utf8ToBytes(envelopeUtf8).length === policy.envelopeUtf8Bytes, "LENGTH");
  requireValue(sha(envelopeUtf8) === policy.envelopeSha256, "HASH");
  let envelope: any;
  try { envelope = JSON.parse(envelopeUtf8); } catch { throw new Error("CONTRACT_PACKAGE_REJECTED:JSON"); }
  shape(envelope, ["payloadUtf8", "signatureHex"]);
  requireValue(typeof envelope.payloadUtf8 === "string" && typeof envelope.signatureHex === "string", "ENVELOPE");
  requireValue(sha(envelope.payloadUtf8) === policy.payloadSha256, "PAYLOAD_HASH");
  requireValue(/^[0-9a-f]{128}$/.test(envelope.signatureHex) && /^[0-9a-f]{64}$/.test(policy.publicKeyHex), "KEY_OR_SIGNATURE_ENCODING");
  let verified = false;
  try { verified = ed25519.verify(hexToBytes(envelope.signatureHex), utf8ToBytes(envelope.payloadUtf8), hexToBytes(policy.publicKeyHex), { zip215: false }); } catch { verified = false; }
  requireValue(verified, "SIGNATURE");
  let pack: any;
  try { pack = JSON.parse(envelope.payloadUtf8); } catch { throw new Error("CONTRACT_PACKAGE_REJECTED:PAYLOAD_JSON"); }
  shape(pack, ["schema", "packageId", "origin", "annotation", "sources", "facts"]);
  requireValue(pack.schema === "LEC-CONTRACT-PACKAGE-0.2" && pack.packageId === policy.packageId && pack.origin === "SYNTHETIC_DEMO" && pack.annotation === "MANUALLY_AUTHORED", "IDENTITY");
  requireValue(Array.isArray(pack.sources) && pack.sources.length > 0 && pack.sources.length <= 20 && Array.isArray(pack.facts) && pack.facts.length > 0 && pack.facts.length <= 100, "COLLECTIONS");
  const sourceIds = new Set<string>(), factIds = new Set<string>();
  for (const source of pack.sources) {
    shape(source, ["id", "title", "text", "sha256"]);
    requireValue(string(source.id) && string(source.title) && string(source.text) && string(source.sha256), "SOURCE");
    requireValue(!sourceIds.has(source.id), "DUPLICATE_SOURCE"); sourceIds.add(source.id);
    requireValue(sha(source.text) === source.sha256, "SOURCE_HASH");
  }
  for (const fact of pack.facts) {
    shape(fact, ["id", "key", "value", "unit", "condition", "sourceId", "section", "quote", "validFrom", "knownFrom", "supersedes"]);
    requireValue(string(fact.id) && string(fact.key) && string(fact.unit) && string(fact.sourceId) && string(fact.section) && string(fact.quote) && (fact.condition === null || string(fact.condition)) && (fact.supersedes === null || string(fact.supersedes)), "FACT");
    requireValue(!factIds.has(fact.id), "DUPLICATE_FACT"); factIds.add(fact.id);
    requireValue(Number.isSafeInteger(fact.value) && fact.value >= 0 && date(fact.validFrom) && date(fact.knownFrom), "FACT_VALUE_OR_DATE");
    const source = pack.sources.find((s: any) => s.id === fact.sourceId);
    requireValue(source && source.text.includes(fact.section + " " + fact.quote), "FACT_CITATION");
  }
  for (const fact of pack.facts) {
    if (fact.supersedes === null) continue;
    const previous = pack.facts.find((f: Fact) => f.id === fact.supersedes);
    requireValue(previous && previous.key === fact.key && previous.validFrom < fact.validFrom && previous.knownFrom <= fact.knownFrom, "SUPERSESSION");
  }
  return pack as ContractPackage;
}

/** Deliberately narrow rendering: no free-form extraction or semantic inference. */
export function renderClaim(claim: Pick<Claim, "key" | "value" | "unit" | "condition">): string | null {
  if (claim.key === "monthly_fee" && claim.condition === null && /^[A-Z]{3}\/month$/.test(claim.unit)) {
    return "The monthly service fee is " + claim.unit.slice(0, 3) + " " + String(claim.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".";
  }
  if (claim.key === "acknowledgement_delay" && ["minutes", "hours"].includes(claim.unit)) {
    return claim.condition === null ? "The provider must acknowledge every incident within " + claim.value + " " + claim.unit + "." :
      "For " + claim.condition + ", the provider must acknowledge the incident within " + claim.value + " " + claim.unit + ".";
  }
  return null;
}

function evaluate(pack: ContractPackage, claim: Claim): ClaimResult {
  const result: ClaimResult = {
    id: claim.id, claim, outcome: "INSUFFICIENT_EVIDENCE", reasons: [], explanation: "",
    comparedFact: null, citedSource: null,
    checks: { packageIntegrity: "VERIFIED", packageSignature: "VERIFIED_DEMO_KEY", temporal: "NOT_REACHED", conditions: "NOT_REACHED", wording: "NOT_SUPPORTED",
      independentReading: "NOT_ASSESSED", corroboration: "NOT_ASSESSED", legalValidity: "NOT_ASSESSED", fullDocumentCoverage: "NOT_MEASURED" }
  };
  const done = (outcome: ClaimResult["outcome"], reason: string, explanation: string) => {
    result.outcome = outcome; result.reasons = [reason]; result.explanation = explanation; return result;
  };
  const fields = ["id", "text", "key", "value", "unit", "condition", "sourceId", "section", "quote", "effectiveAt", "knowledgeAt"];
  if (!claim || typeof claim !== "object" || Array.isArray(claim) || Object.keys(claim).sort().join("|") !== fields.sort().join("|") ||
    !string(claim.id) || !string(claim.text) || !string(claim.key) || !string(claim.unit) || !Number.isSafeInteger(claim.value) || claim.value < 0 ||
    !(claim.condition === null || string(claim.condition)) || ![claim.sourceId, claim.section, claim.quote].every(x => x === null || string(x)) || !date(claim.effectiveAt) || !date(claim.knowledgeAt)) {
    return done("OUTSIDE_SUPPORTED_SCOPE", "CLAIM_SCHEMA", "The claim is outside the declared structured schema.");
  }
  if (!own(KEY_UNITS, claim.key) || renderClaim(claim) !== claim.text) {
    return done("OUTSIDE_SUPPORTED_SCOPE", "WORDING_NOT_SUPPORTED", "This wording is outside the closed templates. No judgment of its meaning was made.");
  }
  result.checks.wording = "CONTROLLED_TEMPLATE";
  if (claim.sourceId === null || claim.section === null || claim.quote === null) {
    return done("INSUFFICIENT_EVIDENCE", "CITATION_MISSING", "A source, section and exact quotation are required.");
  }
  const source = pack.sources.find(s => s.id === claim.sourceId);
  if (!source) return done("INSUFFICIENT_EVIDENCE", "SOURCE_UNKNOWN", "The cited source is absent from this package.");
  result.citedSource = source;
  if (!source.text.includes(claim.section + " " + claim.quote)) {
    return done("INSUFFICIENT_EVIDENCE", "CITATION_NOT_FOUND", "The quotation was not found under the cited section in the source.");
  }
  const known = pack.facts.filter(f => f.key === claim.key && f.knownFrom <= claim.knowledgeAt);
  const active = known.filter(f => f.validFrom <= claim.effectiveAt && !known.some(next => next.supersedes === f.id && next.validFrom <= claim.effectiveAt));
  result.checks.temporal = "CHECKED";
  if (active.length === 0) return done("INSUFFICIENT_EVIDENCE", "NO_APPLICABLE_FACT", "No fact is both effective at this date and known within the declared horizon.");
  if (active.length !== 1) return done("INSUFFICIENT_EVIDENCE", "AMBIGUOUS_REGISTER", "Several registered facts remain applicable. No winner is inferred.");
  const fact = active[0]!; result.comparedFact = fact;
  const citedFact = pack.facts.find(f => f.key === claim.key && f.sourceId === claim.sourceId && f.section === claim.section && f.quote === claim.quote);
  if (!citedFact || citedFact.knownFrom > claim.knowledgeAt) return done("INSUFFICIENT_EVIDENCE", "CITATION_NOT_APPLICABLE", "The citation does not identify a known annotated fact for this claim key.");
  if (citedFact.id !== fact.id) return done("DOES_NOT_MATCH_REGISTER", "SOURCE_SUPERSEDED", "This citation belongs to a fact superseded within the declared effective date and knowledge horizon.");
  if (claim.unit !== fact.unit) return done("DOES_NOT_MATCH_REGISTER", "UNIT_MISMATCH", "The declared units differ; no implicit conversion is performed.");
  result.checks.conditions = "CHECKED";
  if (claim.condition !== fact.condition) return done("DOES_NOT_MATCH_REGISTER", claim.condition === null ? "CONDITION_OMITTED" : "CONDITION_CHANGED", "The claim omits or changes the registered condition of application.");
  if (claim.value !== fact.value) return done("DOES_NOT_MATCH_REGISTER", "VALUE_MISMATCH", "The value differs from the applicable registered fact.");
  return done("MATCHES_REGISTER", "MATCH", "The structured claim matches this registered fact, citation, units, condition and two dates; this is not a legal opinion.");
}

/** Public entry accepts raw bytes and claims; no exposed bypass taking an unadmitted pack. */
export function reviewContract(envelopeUtf8: string, claims: Claim[]): ContractReport {
  const pack = admitContractPackage(envelopeUtf8);
  if (!Array.isArray(claims) || claims.length === 0 || claims.length > 100) throw new Error("CONTRACT_CLAIMS_REJECTED:COUNT");
  if (claims.some(c => !c || typeof c.id !== "string") || new Set(claims.map(c => c.id)).size !== claims.length) throw new Error("CONTRACT_CLAIMS_REJECTED:IDENTIFIERS");
  const body = { schema: "LEC-CONTRACT-REPORT-0.2" as const, packageId: pack.packageId,
    packageSha256: sha(envelopeUtf8), payloadSha256: CONTRACT_POLICY.payloadSha256,
    claims: claims.map(c => evaluate(pack, c)), scope: SCOPE };
  return { ...body, reportSha256: sha(canon(body)) };
}

export function reviewHttpResponse(status: number, body: Uint8Array, claims: Claim[]): ContractReport {
  if (status !== 200) throw new Error("CONTRACT_HTTP_REJECTED:STATUS_" + status);
  if (body.length !== CONTRACT_POLICY.envelopeUtf8Bytes) throw new Error("CONTRACT_HTTP_REJECTED:LENGTH");
  // Fatal decode prevents substitution of malformed UTF-8 with replacement characters.
  return reviewContract(new TextDecoder("utf-8", { fatal: true }).decode(body), claims);
}
