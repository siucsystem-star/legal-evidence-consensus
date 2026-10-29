/**
 * The single preregistered run on the CUAD test split.
 *
 *   bun run extraction-study/run-test.ts <test.json> <out.json>
 *
 * Refuses to run unless every frozen file and the test split match the
 * hashes in PREREGISTRATION.json (LF-normalized, as stored in Git).
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { score } from "./evaluate";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const lf = (p: string) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");
const sha = (s: string | Buffer) => createHash("sha256").update(s).digest("hex");

export function verifyFrozen(testPath: string) {
  const prereg = JSON.parse(readFileSync(resolve(here, "PREREGISTRATION.json"), "utf8"));
  for (const [rel, expected] of Object.entries(prereg.frozen_files as Record<string, string>)) {
    const got = sha(lf(resolve(root, rel)));
    if (got !== expected) throw new Error(`FROZEN_FILE_CHANGED: ${rel} ${got} != ${expected}`);
  }
  const testHash = sha(readFileSync(testPath));
  if (testHash !== prereg.data.derived_test_json_sha256) throw new Error(`TEST_SPLIT_MISMATCH: ${testHash}`);
  return prereg;
}

if (import.meta.main) {
  const [testPath, outPath] = process.argv.slice(2);
  if (!testPath || !outPath) throw new Error("usage: run-test.ts <test.json> <out.json>");
  if (existsSync(outPath)) throw new Error("ONE_RUN_ONLY: " + outPath + " already exists");
  const prereg = verifyFrozen(testPath);
  if (`Bun ${Bun.version}` !== prereg.runtime) throw new Error(`RUNTIME_MISMATCH: Bun ${Bun.version} != ${prereg.runtime}`);
  const docs = JSON.parse(readFileSync(testPath, "utf8"));
  const { results, errors, predictions } = score(docs);
  const out = {
    study: "LEC extraction study v1 — single preregistered test run",
    run_at_utc: new Date().toISOString(),
    preregistration_sha256: sha(readFileSync(resolve(here, "PREREGISTRATION.json"))),
    test_contracts: docs.length, results,
    errors_by_contract: errors,
    predictions,
    reminder: prereg.limits,
  };
  const body = JSON.stringify(out, null, 2) + "\n";
  writeFileSync(outPath, body);
  console.log(JSON.stringify(results, null, 2));
  console.log("results_sha256", sha(body));
}
