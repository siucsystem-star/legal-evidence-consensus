/**
 * Deploiement de LegalEvidenceAnchor sur Sepolia. PREPARE, NON EXECUTE.
 *
 * viem seulement — deja present dans l'outillage CRE du projet. Aucune
 * dependance nouvelle a l'execution : seul le compilateur en ajoute une.
 *
 * La cle privee n'est ni lue ni imprimee par ce script autrement que pour
 * signer : elle vient de l'environnement, jamais d'un fichier suivi par Git.
 */
import { readFileSync } from "node:fs";
import { createWalletClient, createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const RPC = process.env.SEPOLIA_RPC_URL;
const KEY = process.env.CRE_ETH_PRIVATE_KEY;

if (!RPC) throw new Error("SEPOLIA_RPC_URL absent — aucun appel emis.");
if (!KEY) throw new Error("CRE_ETH_PRIVATE_KEY absent — aucun appel emis.");

const art = JSON.parse(
  readFileSync(
    "artifacts/contracts/LegalEvidenceAnchor.sol/LegalEvidenceAnchor.json",
    "utf8",
  ),
);

const compte = privateKeyToAccount(KEY as `0x${string}`);
const wallet = createWalletClient({ account: compte, chain: sepolia, transport: http(RPC) });
const publique = createPublicClient({ chain: sepolia, transport: http(RPC) });

const hash = await wallet.deployContract({
  abi: art.abi,
  bytecode: art.bytecode as `0x${string}`,
  args: [],
});
console.log("transaction :", hash);

const recu = await publique.waitForTransactionReceipt({ hash });
console.log("adresse du contrat :", recu.contractAddress);
console.log("bloc               :", recu.blockNumber);
console.log("statut             :", recu.status);
console.log("");
console.log("RAPPEL : un ancrage atteste qu'une adresse a soumis une empreinte");
console.log("a un bloc donne. Il n'atteste ni la verite, ni la validite");
console.log("juridique, ni la provenance de ce que l'empreinte resume.");
