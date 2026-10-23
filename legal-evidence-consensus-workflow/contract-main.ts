import { Runner } from "@chainlink/cre-sdk";
import { initContractWorkflow, type ContractConfig } from "./contract-runtime";
export async function main() { const runner = await Runner.newRunner<ContractConfig>(); await runner.run(initContractWorkflow); }
