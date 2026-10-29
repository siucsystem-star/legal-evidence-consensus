/**
 * LEGAL EVIDENCE CONSENSUS 0.3 — one CRE workflow, two external systems.
 *
 *   1. HTTP  : fetch the signed 0.2 contract package from an immutable Git
 *              commit and review its 12 structured claims (unchanged 0.2 logic).
 *   2. EVM   : admit the sealed v0.1 snapshot (byte hash, Ed25519 root
 *              attestation, 44 event hashes), then read back its existing
 *              Sepolia anchor with a view call at the last finalized block.
 *
 * Read-only. No transaction, no wallet, no secret. The 0.2 report digest is
 * NOT anchored; the anchor read concerns the v0.1 snapshot digest only.
 * A failure in either step raises an error; there is no partial success.
 */
import {
  CronCapability, EVMClient, HTTPClient, LAST_FINALIZED_BLOCK_NUMBER, consensusIdenticalAggregation,
  encodeCallMsg, handler, type Runtime,
} from "@chainlink/cre-sdk";
import { fetchContractReport, type ContractConfig } from "./contract-runtime";
import type { ContractReport } from "./contract-types";
import { admettreInstantane } from "./admission";
import { V } from "./vecteurs_p8_v07";
import { ANCHOR_V01, encodeGetAnchor, evaluateAnchor, type AnchorCheck } from "./anchor-check";

export type AnchorConfig = ContractConfig & { chainSelectorName: string };

export type AnchoredRunResult = {
  schema: "LEC-ANCHORED-RUN-0.3";
  contractReview: { packageSha256: string; reportSha256: string; outcomes: Record<string, string> };
  snapshot: { sha256: string; eventHashesVerified: number; rootAttestation: "VERIFIED" };
  anchor: AnchorCheck;
  scope: string;
};

export const ANCHORED_RUN_SCOPE =
  "SINGLE-NODE SIMULATION: no DON consensus. Read-only: no blockchain write, no transaction. " +
  "The Sepolia record concerns the v0.1 snapshot digest; the 0.2 report digest is not anchored.";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function runAnchoredWorkflow(runtime: Runtime<AnchorConfig>): string {
  const config = runtime.config;
  if (config.source !== "http") throw new Error("ANCHOR_CONFIG_REJECTED:HTTP_SOURCE_REQUIRED");
  if (config.chainSelectorName !== ANCHOR_V01.chainSelectorName) throw new Error("ANCHOR_CONFIG_REJECTED:SEPOLIA_ONLY");

  // 1. External API: signed package over HTTPS, pinned commit, no fallback.
  const raw = new HTTPClient().sendRequest(runtime, fetchContractReport, consensusIdenticalAggregation<string>())(config).result();
  const report = JSON.parse(raw) as ContractReport;

  // 2. Blockchain: admit the sealed snapshot locally, then read its anchor.
  const A = V as any;
  const admission = admettreInstantane(A.INSTANTANE_E1_V2.instantane_utf8, A.INSTANTANE_E1_V2.cle_publique_pem);
  if (admission.signatureVerified !== true) throw new Error("ANCHOR_CHECK_REJECTED:ROOT_ATTESTATION");
  const reply = new EVMClient(ANCHOR_V01.chainSelector).callContract(runtime, {
    call: encodeCallMsg({
      from: ZERO_ADDRESS, to: ANCHOR_V01.contract, data: encodeGetAnchor(ANCHOR_V01.submitter, admission.snapshotSha256),
    }),
    blockNumber: LAST_FINALIZED_BLOCK_NUMBER,
  }).result();
  const anchor = evaluateAnchor(admission.snapshotSha256, reply.data);

  runtime.log("LEGAL EVIDENCE CONSENSUS 0.3 — HTTP evidence review + Sepolia anchor read-back");
  runtime.log("[HTTP] package hash: " + report.packageSha256);
  for (const result of report.claims) runtime.log("[HTTP] " + result.id + " | " + result.outcome + " | " + result.reasons.join(", "));
  runtime.log("[HTTP] report SHA-256: " + report.reportSha256);
  runtime.log("[EVM] snapshot SHA-256 (recomputed, admitted): " + admission.snapshotSha256);
  runtime.log("[EVM] " + anchor.status + " | contract " + anchor.contract + " | block " + anchor.blockNumber +
    " | timestamp " + anchor.blockTimestamp + " | tx " + anchor.transaction);
  runtime.log("[EVM] establishes: " + anchor.establishes);
  runtime.log("[EVM] does not establish: " + anchor.doesNotEstablish);
  runtime.log(ANCHORED_RUN_SCOPE);

  const result: AnchoredRunResult = {
    schema: "LEC-ANCHORED-RUN-0.3",
    contractReview: {
      packageSha256: report.packageSha256, reportSha256: report.reportSha256,
      outcomes: Object.fromEntries(report.claims.map(c => [c.id, c.outcome])),
    },
    snapshot: { sha256: admission.snapshotSha256, eventHashesVerified: admission.eventsVerified, rootAttestation: "VERIFIED" },
    anchor, scope: ANCHORED_RUN_SCOPE,
  };
  return JSON.stringify(result);
}

export const initAnchoredWorkflow = (config: AnchorConfig) =>
  [handler(new CronCapability().trigger({ schedule: config.schedule }), runAnchoredWorkflow)];
