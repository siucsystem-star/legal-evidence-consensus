import { CronCapability, handler, HTTPClient, consensusIdenticalAggregation, type HTTPSendRequester, type Runtime } from "@chainlink/cre-sdk";
import { CONTRACT_ENVELOPE_UTF8 } from "./contract-embedded";
import { CONTRACT_CLAIMS } from "./contract-scenarios";
import { CONTRACT_POLICY } from "./contract-policy";
import { reviewContract, reviewHttpResponse } from "./contract-review";
import type { ContractReport } from "./contract-types";

export type ContractConfig = { schedule: string; source: "embedded" | "http"; sourceUrl: string };

/** No fallback: a transport or admission error never becomes a successful report. */
export function fetchContractReport(requester: HTTPSendRequester, config: ContractConfig): string {
  if (!/^https:\/\/raw\.githubusercontent\.com\/siucsystem-star\/legal-evidence-consensus\/[0-9a-f]{40}\/examples\/contract-demo\/signed-package\.json$/.test(config.sourceUrl)) {
    throw new Error("CONTRACT_HTTP_REJECTED:PINNED_REPOSITORY_URL_REQUIRED");
  }
  const response = requester.sendRequest({ url: config.sourceUrl, method: "GET" }).result();
  return JSON.stringify(reviewHttpResponse(response.statusCode, response.body, CONTRACT_CLAIMS));
}

export function runContractWorkflow(runtime: Runtime<ContractConfig>): string {
  const config = runtime.config;
  let report: ContractReport;
  if (config.source === "embedded") report = reviewContract(CONTRACT_ENVELOPE_UTF8, CONTRACT_CLAIMS);
  else if (config.source === "http") {
    const raw = new HTTPClient().sendRequest(runtime, fetchContractReport, consensusIdenticalAggregation<string>())(config).result();
    report = JSON.parse(raw) as ContractReport;
  } else throw new Error("CONTRACT_CONFIG_REJECTED:SOURCE");
  runtime.log("LEGAL EVIDENCE CONSENSUS 0.2 — FICTIONAL CONTRACT DEMO");
  runtime.log("Source mode: " + config.source + "; package hash: " + CONTRACT_POLICY.envelopeSha256);
  for (const result of report.claims) {
    runtime.log(result.id + " | " + result.outcome + " | " + result.reasons.join(", "));
  }
  runtime.log("Report SHA-256: " + report.reportSha256);
  runtime.log(report.scope);
  runtime.log("SINGLE-NODE SIMULATION: no DON consensus, no blockchain write.");
  return JSON.stringify(report);
}

export const initContractWorkflow = (config: ContractConfig) => [handler(new CronCapability().trigger({ schedule: config.schedule }), runContractWorkflow)];

