/**
 * Lecture d'un ancrage apres deploiement. PREPARE, NON EXECUTE.
 *
 * Lecture seule : `eth_call`, aucune transaction, aucun gaz, aucune ecriture.
 *
 *   node scripts/read-anchor.ts <adresseContrat> <adresseEmetteur> <empreinte>
 */
import { readFileSync } from "node:fs";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const [contrat, emetteur, empreinte] = process.argv.slice(2);
if (!contrat || !emetteur || !empreinte) {
  throw new Error("usage: read-anchor.ts <contrat> <emetteur> <empreinte 0x…32 octets>");
}
const RPC = process.env.SEPOLIA_RPC_URL;
if (!RPC) throw new Error("SEPOLIA_RPC_URL absent — aucun appel emis.");

const art = JSON.parse(
  readFileSync(
    "artifacts/contracts/LegalEvidenceAnchor.sol/LegalEvidenceAnchor.json",
    "utf8",
  ),
);
const client = createPublicClient({ chain: sepolia, transport: http(RPC) });
const base = { address: contrat as `0x${string}`, abi: art.abi } as const;

const ancre = await client.readContract({
  ...base, functionName: "isAnchored",
  args: [emetteur as `0x${string}`, empreinte as `0x${string}`],
});
console.log("ancre :", ancre);

if (ancre) {
  const [par, dig, bloc, ts] = (await client.readContract({
    ...base, functionName: "getAnchor",
    args: [emetteur as `0x${string}`, empreinte as `0x${string}`],
  })) as [string, string, bigint, bigint];
  console.log("inscrit par  :", par);
  console.log("empreinte    :", dig);
  console.log("bloc         :", bloc.toString());
  console.log("horodatage   :", ts.toString(),
    "(" + new Date(Number(ts) * 1000).toISOString() + ")");
  console.log("");
  console.log("Ce que cela etablit : cette adresse a soumis cette empreinte a ce bloc.");
  console.log("Ce que cela n'etablit pas : la verite, la validite juridique, la");
  console.log("provenance reelle, ni l'exactitude du document resume par l'empreinte.");
}
