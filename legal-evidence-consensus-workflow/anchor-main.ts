import { Runner } from "@chainlink/cre-sdk";
import { initAnchoredWorkflow, type AnchorConfig } from "./anchor-runtime";
export async function main() { const runner = await Runner.newRunner<AnchorConfig>(); await runner.run(initAnchoredWorkflow); }
