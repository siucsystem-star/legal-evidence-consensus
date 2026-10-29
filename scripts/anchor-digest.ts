/**
 * Anchors one SHA-256 digest in the existing LegalEvidenceAnchor contract on Sepolia.
 *
 *   bun run scripts/anchor-digest.ts <digest 0x… 32 bytes>          (checks only, sends nothing)
 *   bun run scripts/anchor-digest.ts <digest 0x… 32 bytes> --send   (sends the transaction)
 *
 * Reads SEPOLIA_RPC_URL and CRE_ETH_PRIVATE_KEY from the environment (Bun loads
 * .env from the current folder). The key is used only to sign; it is never printed.
 * Refuses to send unless the network is Sepolia (chainId 11155111), the contract
 * is the published one, the digest is not already anchored by this address, and
 * the account has test ETH.
 */
import { createPublicClient, createWalletClient, http, parseAbi, formatEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const CONTRACT = "0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3" as const;
const ABI = parseAbi([
  "function anchor(bytes32 digest)",
  "function isAnchored(address submitter, bytes32 digest) view returns (bool)",
  "function getAnchor(address submitter, bytes32 digest) view returns (address anchoredBy, bytes32 anchoredDigest, uint64 blockNumber, uint64 blockTimestamp)",
]);

const [digest, flag] = process.argv.slice(2);
if (!digest || !/^0x[0-9a-f]{64}$/.test(digest) || /^0x0{64}$/.test(digest)) {
  throw new Error("usage: anchor-digest.ts <0x + 64 lowercase hex> [--send]");
}
const RPC = process.env.SEPOLIA_RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com";
const RAW = process.env.CRE_ETH_PRIVATE_KEY;
if (!RAW) throw new Error("CRE_ETH_PRIVATE_KEY is not set — nothing sent.");
// Tolerate surrounding quotes, spaces and a Windows line ending; never print the key itself.
const KEY = RAW.trim().replace(/^["']|["']$/g, "").trim();
const hex = KEY.startsWith("0x") ? KEY.slice(2) : KEY;
if (!/^[0-9a-fA-F]{64}$/.test(hex)) {
  console.log("CRE_ETH_PRIVATE_KEY does not look like a private key (the key is not shown):");
  console.log("  length after 0x:", hex.length, "(expected 64)");
  console.log("  only hex digits:", /^[0-9a-fA-F]*$/.test(hex));
  console.log("  starts with 0x :", KEY.startsWith("0x"));
  throw new Error("STOP: invalid CRE_ETH_PRIVATE_KEY format — nothing sent.");
}

const account = privateKeyToAccount(("0x" + hex) as `0x${string}`);
const pub = createPublicClient({ chain: sepolia, transport: http(RPC) });

const chainId = await pub.getChainId();
const code = await pub.getBytecode({ address: CONTRACT });
const balance = await pub.getBalance({ address: account.address });
const already = await pub.readContract({ address: CONTRACT, abi: ABI, functionName: "isAnchored", args: [account.address, digest as `0x${string}`] });

console.log("network chainId :", chainId, chainId === 11155111 ? "(Sepolia)" : "(NOT SEPOLIA)");
console.log("contract        :", CONTRACT, code && code !== "0x" ? "(deployed)" : "(NO CODE)");
console.log("signer address  :", account.address);
console.log("test ETH        :", formatEther(balance));
console.log("digest          :", digest);
console.log("already anchored:", already);

if (chainId !== 11155111) throw new Error("STOP: not Sepolia.");
if (!code || code === "0x") throw new Error("STOP: no contract at the address.");
if (already) throw new Error("STOP: this address already anchored this digest.");
if (balance === 0n) throw new Error("STOP: no test ETH.");

if (flag !== "--send") {
  console.log("\nChecks passed. Nothing sent. Re-run with --send to anchor.");
  process.exit(0);
}

const wallet = createWalletClient({ account, chain: sepolia, transport: http(RPC) });
const hash = await wallet.writeContract({ address: CONTRACT, abi: ABI, functionName: "anchor", args: [digest as `0x${string}`] });
console.log("\ntransaction     :", hash);
const receipt = await pub.waitForTransactionReceipt({ hash });
console.log("status          :", receipt.status, "block", receipt.blockNumber.toString());
const rec = await pub.readContract({ address: CONTRACT, abi: ABI, functionName: "getAnchor", args: [account.address, digest as `0x${string}`] });
console.log("read back       :", rec[0], rec[1], "block", rec[2].toString(), "timestamp", rec[3].toString());
console.log("https://sepolia.etherscan.io/tx/" + hash);
