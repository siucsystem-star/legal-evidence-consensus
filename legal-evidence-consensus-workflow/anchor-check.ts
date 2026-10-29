/**
 * Read-only check of the existing Sepolia anchor (v0.1 sealed snapshot).
 *
 * The anchor transaction was made manually on 2026-07-26. This module does not
 * anchor anything: it encodes one `getAnchor(address,bytes32)` view call and
 * evaluates the ABI-encoded reply against the digest recomputed from the
 * sealed snapshot. Any mismatch raises an error; nothing falls back to the
 * values pinned below.
 *
 * What a matching read establishes: this address submitted this digest to this
 * contract at this block. It does not establish truth, legal validity, real
 * provenance, or that the snapshot existed before that block.
 */
import { keccak_256 } from "@noble/hashes/sha3.js";
import { bytesToHex, utf8ToBytes } from "@noble/hashes/utils.js";

/** Values from anchors/ANCHOR_RECEIPT_SEPOLIA_V01_2026-07-26.json. */
export const ANCHOR_V01 = {
  chainSelectorName: "ethereum-testnet-sepolia",
  chainSelector: 16015286601757825753n,
  contract: "0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3",
  submitter: "0xbf6013d4CeD10ecf794527a60AF7cd57A73ab18f",
  digest: "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
  blockNumber: 11357728n,
  blockTimestamp: 1785107232n,
  transaction: "0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d",
} as const;

export const GET_ANCHOR_SIGNATURE = "getAnchor(address,bytes32)";
export const GET_ANCHOR_SELECTOR = bytesToHex(keccak_256(utf8ToBytes(GET_ANCHOR_SIGNATURE)).slice(0, 4));

export type AnchorRead = {
  anchoredBy: string; anchoredDigest: string; blockNumber: bigint; blockTimestamp: bigint;
};
export type AnchorCheck = {
  status: "ANCHOR_MATCHES_SNAPSHOT";
  network: string; contract: string; submitter: string; digest: string;
  blockNumber: string; blockTimestamp: string; transaction: string;
  establishes: string; doesNotEstablish: string;
};

function reject(code: string): never { throw new Error("ANCHOR_CHECK_REJECTED:" + code); }
const word = (hex: string) => hex.padStart(64, "0");
const addressHex = (address: string) => {
  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) reject("ADDRESS_FORMAT");
  return address.slice(2).toLowerCase();
};
const digestHex = (digest: string) => {
  if (!/^[0-9a-f]{64}$/.test(digest)) reject("DIGEST_FORMAT");
  if (/^0+$/.test(digest)) reject("EMPTY_DIGEST");
  return digest;
};

/** ABI call data for getAnchor(submitter, digest), 0x-prefixed. */
export function encodeGetAnchor(submitter: string, digest: string): `0x${string}` {
  return ("0x" + GET_ANCHOR_SELECTOR + word(addressHex(submitter)) + digestHex(digest)) as `0x${string}`;
}

/** Strict decoder: exactly four static words, canonical padding only. */
export function decodeGetAnchor(data: Uint8Array): AnchorRead {
  if (data.length !== 128) reject("REPLY_LENGTH");
  const hex = bytesToHex(data);
  const w = (i: number) => hex.slice(i * 64, (i + 1) * 64);
  if (!/^0{24}$/.test(w(0).slice(0, 24))) reject("ADDRESS_PADDING");
  for (const i of [2, 3]) if (!/^0{48}$/.test(w(i).slice(0, 48))) reject("UINT64_PADDING");
  return {
    anchoredBy: "0x" + w(0).slice(24), anchoredDigest: w(1),
    blockNumber: BigInt("0x" + w(2)), blockTimestamp: BigInt("0x" + w(3)),
  };
}

/**
 * Compares the on-chain record with the digest recomputed from the sealed
 * snapshot bytes and with the published receipt. Every field must agree.
 */
export function evaluateAnchor(recomputedSnapshotSha256: string, reply: Uint8Array): AnchorCheck {
  if (digestHex(recomputedSnapshotSha256) !== ANCHOR_V01.digest) reject("SNAPSHOT_DIGEST_NOT_THE_ANCHORED_ONE");
  const read = decodeGetAnchor(reply);
  if (read.anchoredBy !== "0x" + addressHex(ANCHOR_V01.submitter)) reject("SUBMITTER_MISMATCH");
  if (read.anchoredDigest !== recomputedSnapshotSha256) reject("DIGEST_MISMATCH");
  if (read.blockNumber !== ANCHOR_V01.blockNumber) reject("BLOCK_MISMATCH");
  if (read.blockTimestamp !== ANCHOR_V01.blockTimestamp) reject("TIMESTAMP_MISMATCH");
  return {
    status: "ANCHOR_MATCHES_SNAPSHOT",
    network: ANCHOR_V01.chainSelectorName, contract: ANCHOR_V01.contract,
    submitter: ANCHOR_V01.submitter, digest: read.anchoredDigest,
    blockNumber: read.blockNumber.toString(), blockTimestamp: read.blockTimestamp.toString(),
    transaction: ANCHOR_V01.transaction,
    establishes: "This address submitted this digest to this contract at this block (an upper time bound).",
    doesNotEstablish: "Truth, legal validity, real provenance, the identity behind the address, or that the snapshot existed earlier.",
  };
}
