import { describe, test, expect } from "bun:test";
import { test as creTest, newTestRuntime, EvmMock, HttpActionsMock } from "../legal-evidence-consensus-workflow/node_modules/@chainlink/cre-sdk/dist/sdk/test/index.js";
import { EVMClient } from "../legal-evidence-consensus-workflow/node_modules/@chainlink/cre-sdk/dist/index.js";
import { keccak_256 } from "../legal-evidence-consensus-workflow/node_modules/@noble/hashes/sha3.js";
import { bytesToHex, hexToBytes, utf8ToBytes } from "../legal-evidence-consensus-workflow/node_modules/@noble/hashes/utils.js";
import { ANCHOR_V01, GET_ANCHOR_SELECTOR, decodeGetAnchor, encodeGetAnchor, evaluateAnchor } from "../legal-evidence-consensus-workflow/anchor-check";
import { ANCHORED_RUN_SCOPE, runAnchoredWorkflow } from "../legal-evidence-consensus-workflow/anchor-runtime";
import { admettreInstantane } from "../legal-evidence-consensus-workflow/admission";
import { V } from "../legal-evidence-consensus-workflow/vecteurs_p8_v07";
import { CONTRACT_ENVELOPE_UTF8 } from "../legal-evidence-consensus-workflow/contract-embedded";
import { CONTRACT_CLAIMS } from "../legal-evidence-consensus-workflow/contract-scenarios";
import { reviewContract } from "../legal-evidence-consensus-workflow/contract-review";

/**
 * Reply observed on 2026-10-29 from a public Sepolia RPC, eth_call at "finalized",
 * for getAnchor(0xbf60…b18f, 9f694a38…ddcf) on 0xEbdc…dAba3. Recorded as a fixture;
 * the live read is performed by `cre workflow simulate` with the anchor-check target.
 */
const OBSERVED_REPLY_HEX =
  "000000000000000000000000bf6013d4ced10ecf794527a60af7cd57a73ab18f" +
  "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf" +
  "0000000000000000000000000000000000000000000000000000000000ad4e20" +
  "000000000000000000000000000000000000000000000000000000006a669320";
const reply = () => hexToBytes(OBSERVED_REPLY_HEX);
const withWord = (i: number, hex: string) => hexToBytes(OBSERVED_REPLY_HEX.slice(0, i * 64) + hex + OBSERVED_REPLY_HEX.slice((i + 1) * 64));
const A = V as any;
const snapshot = () => admettreInstantane(A.INSTANTANE_E1_V2.instantane_utf8, A.INSTANTANE_E1_V2.cle_publique_pem);
const config = {
  schedule: "*/30 * * * * *", source: "http" as const, chainSelectorName: "ethereum-testnet-sepolia",
  sourceUrl: "https://raw.githubusercontent.com/siucsystem-star/legal-evidence-consensus/bfb17839e61f4c7e57d4d29e10a29ff9ca7a9590/examples/contract-demo/signed-package.json",
};

describe("Sepolia anchor read-back: encoding and pinned values", () => {
  test("the selector is keccak256('getAnchor(address,bytes32)')[0:4]", () => {
    expect(GET_ANCHOR_SELECTOR).toBe(bytesToHex(keccak_256(utf8ToBytes("getAnchor(address,bytes32)")).slice(0, 4)));
    expect(GET_ANCHOR_SELECTOR).toBe("fdd436c0");
  });
  test("the pinned chain selector is the SDK's Sepolia selector", () => {
    expect(ANCHOR_V01.chainSelector).toBe((EVMClient as any).SUPPORTED_CHAIN_SELECTORS["ethereum-testnet-sepolia"]);
  });
  test("call data is selector + left-padded address + digest", () => {
    const data = encodeGetAnchor(ANCHOR_V01.submitter, ANCHOR_V01.digest);
    expect(data).toBe("0xfdd436c0" + "000000000000000000000000bf6013d4ced10ecf794527a60af7cd57a73ab18f" + ANCHOR_V01.digest);
  });
  test("malformed or empty inputs are refused before any call", () => {
    expect(() => encodeGetAnchor("0x1234", ANCHOR_V01.digest)).toThrow("ADDRESS_FORMAT");
    expect(() => encodeGetAnchor(ANCHOR_V01.submitter, "0x" + ANCHOR_V01.digest)).toThrow("DIGEST_FORMAT");
    expect(() => encodeGetAnchor(ANCHOR_V01.submitter, "0".repeat(64))).toThrow("EMPTY_DIGEST");
  });
  test("the admitted v0.1 snapshot recomputes to the anchored digest", () => {
    const s = snapshot();
    expect(s.snapshotSha256).toBe(ANCHOR_V01.digest); expect(s.eventsVerified).toBe(44); expect(s.signatureVerified).toBe(true);
  });
});

describe("Sepolia anchor read-back: strict evaluation", () => {
  test("the observed on-chain reply matches the snapshot and the published receipt", () => {
    const check = evaluateAnchor(snapshot().snapshotSha256, reply());
    expect(check.status).toBe("ANCHOR_MATCHES_SNAPSHOT");
    expect(check.blockNumber).toBe("11357728"); expect(check.blockTimestamp).toBe("1785107232");
    expect(decodeGetAnchor(reply()).anchoredBy).toBe(ANCHOR_V01.submitter.toLowerCase());
  });
  for (const [name, mutate, code] of [
    ["another submitter", () => withWord(0, "000000000000000000000000" + "11".repeat(20)), "SUBMITTER_MISMATCH"],
    ["another digest", () => withWord(1, "ab".repeat(32)), "DIGEST_MISMATCH"],
    ["another block", () => withWord(2, (11357729).toString(16).padStart(64, "0")), "BLOCK_MISMATCH"],
    ["another timestamp", () => withWord(3, (1785107233).toString(16).padStart(64, "0")), "TIMESTAMP_MISMATCH"],
    ["dirty address padding", () => withWord(0, "01" + OBSERVED_REPLY_HEX.slice(2, 64)), "ADDRESS_PADDING"],
    ["dirty uint64 padding", () => withWord(2, "01" + OBSERVED_REPLY_HEX.slice(130, 192)), "UINT64_PADDING"],
    ["a truncated reply", () => reply().slice(0, 127), "REPLY_LENGTH"],
    ["an empty reply", () => new Uint8Array(0), "REPLY_LENGTH"],
  ] as const) test(name + " is rejected", () => {
    expect(() => evaluateAnchor(ANCHOR_V01.digest, mutate())).toThrow(code);
  });
  test("a different snapshot digest is rejected even if the chain record is intact", () => {
    expect(() => evaluateAnchor("ab".repeat(32), reply())).toThrow("SNAPSHOT_DIGEST_NOT_THE_ANCHORED_ONE");
  });
  test("an altered snapshot never reaches the chain read", () => {
    const s: string = A.INSTANTANE_E1_V2.instantane_utf8; const i = 200;
    const altered = s.slice(0, i) + (s[i] === "a" ? "b" : "a") + s.slice(i + 1);
    expect(() => admettreInstantane(altered, A.INSTANTANE_E1_V2.cle_publique_pem)).toThrow();
  });
});

describe("Sepolia anchor read-back: the real CRE handler under the SDK test runtime", () => {
  const httpOk = () => ({ statusCode: 200, body: utf8ToBytes(CONTRACT_ENVELOPE_UTF8) });

  creTest("HTTP review and EVM read both succeed, read-only, at the last finalized block", () => {
    const calls: any[] = [];
    HttpActionsMock.testInstance().sendRequest = (req: any) => { expect(req.method).toBe("GET"); expect(req.url).toBe(config.sourceUrl); return httpOk() as any; };
    EvmMock.testInstance(ANCHOR_V01.chainSelector).callContract = (req: any) => { calls.push(req); return { data: reply() } as any; };
    const runtime: any = newTestRuntime(); runtime.config = config;
    const out = JSON.parse(runAnchoredWorkflow(runtime));
    expect(calls.length).toBe(1);
    expect(bytesToHex(calls[0].call.to)).toBe(ANCHOR_V01.contract.slice(2).toLowerCase());
    expect(bytesToHex(calls[0].call.data)).toBe(encodeGetAnchor(ANCHOR_V01.submitter, ANCHOR_V01.digest).slice(2));
    expect(Array.from(calls[0].blockNumber.absVal)).toEqual([3]); expect(BigInt(calls[0].blockNumber.sign)).toBe(-1n);
    expect(out.anchor.status).toBe("ANCHOR_MATCHES_SNAPSHOT");
    expect(out.contractReview.reportSha256).toBe(reviewContract(CONTRACT_ENVELOPE_UTF8, CONTRACT_CLAIMS).reportSha256);
    expect(Object.keys(out.contractReview.outcomes).length).toBe(12);
    expect(out.scope).toBe(ANCHORED_RUN_SCOPE);
    expect(runtime.getLogs().join("\n")).toContain("no blockchain write");
  });

  creTest("a mismatching chain record fails the whole run; no partial success", () => {
    HttpActionsMock.testInstance().sendRequest = () => httpOk() as any;
    EvmMock.testInstance(ANCHOR_V01.chainSelector).callContract = () => ({ data: withWord(1, "ab".repeat(32)) }) as any;
    const runtime: any = newTestRuntime(); runtime.config = config;
    expect(() => runAnchoredWorkflow(runtime)).toThrow("DIGEST_MISMATCH");
  });

  creTest("an RPC error (e.g. AnchorNotFound revert) propagates", () => {
    HttpActionsMock.testInstance().sendRequest = () => httpOk() as any;
    EvmMock.testInstance(ANCHOR_V01.chainSelector).callContract = () => { throw new Error("execution reverted: AnchorNotFound"); };
    const runtime: any = newTestRuntime(); runtime.config = config;
    expect(() => runAnchoredWorkflow(runtime)).toThrow("AnchorNotFound");
  });

  creTest("an altered HTTP package fails before the chain is read", () => {
    let evmCalls = 0;
    HttpActionsMock.testInstance().sendRequest = () => ({ statusCode: 200, body: utf8ToBytes(CONTRACT_ENVELOPE_UTF8.replace("8,400", "8,401")) }) as any;
    EvmMock.testInstance(ANCHOR_V01.chainSelector).callContract = () => { evmCalls++; return { data: reply() } as any; };
    const runtime: any = newTestRuntime(); runtime.config = config;
    expect(() => runAnchoredWorkflow(runtime)).toThrow("HASH");
    expect(evmCalls).toBe(0);
  });

  test("non-Sepolia or non-HTTP configurations are refused before any capability call", () => {
    expect(() => runAnchoredWorkflow({ config: { ...config, chainSelectorName: "ethereum-mainnet" } } as any)).toThrow("SEPOLIA_ONLY");
    expect(() => runAnchoredWorkflow({ config: { ...config, source: "embedded" } } as any)).toThrow("HTTP_SOURCE_REQUIRED");
  });
});
