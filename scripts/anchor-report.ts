/**
 * Ancrage d'une empreinte Legal Evidence Consensus sur Sepolia.
 *
 * Ce script ne calcule aucune preuve.
 * Il ne juge aucun contenu.
 * Il publie uniquement une empreinte bytes32 deja produite hors chaine.
 *
 * Usage :
 *   npx hardhat run scripts/anchor-report.ts --network sepolia
 *
 * Variables requises :
 *   SEPOLIA_RPC_URL
 *   CRE_ETH_PRIVATE_KEY
 *   LEGAL_EVIDENCE_ANCHOR_ADDRESS
 *   LEGAL_EVIDENCE_DIGEST
 */

import { readFileSync } from "node:fs";
import { createWalletClient, createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const RPC = process.env.SEPOLIA_RPC_URL;
const KEY = process.env.CRE_ETH_PRIVATE_KEY;
const CONTRACT = process.env.LEGAL_EVIDENCE_ANCHOR_ADDRESS;
const DIGEST = process.env.LEGAL_EVIDENCE_DIGEST;

if (!RPC) throw new Error("SEPOLIA_RPC_URL absent.");
if (!KEY) throw new Error("CRE_ETH_PRIVATE_KEY absent.");
if (!CONTRACT) throw new Error("LEGAL_EVIDENCE_ANCHOR_ADDRESS absent.");
if (!DIGEST) throw new Error("LEGAL_EVIDENCE_DIGEST absent.");

const art = JSON.parse(
  readFileSync(
    "artifacts/contracts/LegalEvidenceAnchor.sol/LegalEvidenceAnchor.json",
    "utf8",
  ),
);

const compte = privateKeyToAccount(KEY as `0x${string}`);

const wallet = createWalletClient({
  account: compte,
  chain: sepolia,
  transport: http(RPC),
});

const publique = createPublicClient({
  chain: sepolia,
  transport: http(RPC),
});

console.log("emetteur :", compte.address);
console.log("contrat  :", CONTRACT);
console.log("digest   :", DIGEST);

const tx = await wallet.writeContract({
  address: CONTRACT as `0x${string}`,
  abi: art.abi,
  functionName: "anchor",
  args: [DIGEST as `0x${string}`],
});

console.log("transaction :", tx);

const recu = await publique.waitForTransactionReceipt({
  hash: tx,
});

console.log("bloc       :", recu.blockNumber.toString());
console.log("statut     :", recu.status);

console.log("");
console.log("Ce que cela etablit :");
console.log("Cette adresse a soumis cette empreinte a ce bloc.");
console.log("");
console.log("Ce que cela n'etablit pas :");
console.log("La verite du contenu, la validite juridique ou");
console.log("la provenance reelle du document.");