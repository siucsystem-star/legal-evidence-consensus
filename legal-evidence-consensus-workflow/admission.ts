/** Read-only admission for the preregistered E1 v2 fixture.
 * No governance decision is allowed before this function returns.
 * Event hashing follows reality_floor_core_v031g_rev3.py::calc_hash:
 * SHA256(`${seq}|${type}|${data}|${previousHash}`).
 */
import { ed25519 } from "@noble/curves/ed25519.js";
import { bytesToHex, hexToBytes, utf8ToBytes } from "@noble/hashes/utils.js";
import { ADMISSION_FIXTURE_V01 } from "./admission_fixture_v01";
import { canon, sha } from "./rapport";

export type AdmissionPolicy = {
  snapshot: { utf8Bytes: number; sha256: string };
  publicKey: { pemSha256: string; rawBytes: number };
  signedAttestation: { canonicalUtf8: string; utf8Bytes: number; sha256: string; signatureHex: string };
  registry: { registryId: string; nEvents: number; root: string };
  eventChain: { firstPreviousHash: string; finalEventHash: string };
};

export function requireAdmission(condition: unknown, code: string): asserts condition {
  if (!condition) throw new Error("ADMISSION_REJECTED:" + code);
}

// Pure JavaScript SPKI decoding; Buffer/atob are not assumed in QuickJS/WASM.
function ed25519PublicKey(pem: string): Uint8Array {
  const match = /^-----BEGIN PUBLIC KEY-----\r?\n([A-Za-z0-9+/=\r\n]+)-----END PUBLIC KEY-----\r?\n?$/.exec(pem);
  requireAdmission(match, "PUBLIC_KEY_ENCODING");
  const encoded = match[1]!.replace(/[\r\n]/g, "");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const decoded: number[] = [];
  let accumulator = 0, bits = 0;
  for (const character of encoded) {
    if (character === "=") break;
    const digit = alphabet.indexOf(character);
    requireAdmission(digit >= 0, "PUBLIC_KEY_ENCODING");
    accumulator = (accumulator << 6) | digit;
    bits += 6;
    if (bits >= 8) { bits -= 8; decoded.push((accumulator >> bits) & 255); }
  }
  const der = new Uint8Array(decoded);
  requireAdmission(der.length === 44 && bytesToHex(der.slice(0, 12)) === "302a300506032b6570032100", "PUBLIC_KEY_ALGORITHM");
  return der.slice(12);
}

export function admettreInstantane(snapshotUtf8: string, publicKeyPem: string, policy: AdmissionPolicy = ADMISSION_FIXTURE_V01) {
  const snapshotBytes = utf8ToBytes(snapshotUtf8);
  requireAdmission(snapshotBytes.length === policy.snapshot.utf8Bytes, "SNAPSHOT_LENGTH");
  const snapshotSha256 = sha(snapshotUtf8);
  requireAdmission(snapshotSha256 === policy.snapshot.sha256, "SNAPSHOT_HASH");
  requireAdmission(sha(publicKeyPem) === policy.publicKey.pemSha256, "PUBLIC_KEY_HASH");
  const publicKey = ed25519PublicKey(publicKeyPem);
  requireAdmission(publicKey.length === policy.publicKey.rawBytes, "PUBLIC_KEY_LENGTH");

  const attestation = policy.signedAttestation;
  const attestationBytes = utf8ToBytes(attestation.canonicalUtf8);
  requireAdmission(attestationBytes.length === attestation.utf8Bytes, "ATTESTATION_LENGTH");
  requireAdmission(sha(attestation.canonicalUtf8) === attestation.sha256, "ATTESTATION_HASH");
  requireAdmission(/^[0-9a-f]{128}$/i.test(attestation.signatureHex), "SIGNATURE_ENCODING");
  const signature = hexToBytes(attestation.signatureHex);
  let verified = false;
  try { verified = ed25519.verify(signature, attestationBytes, publicKey, { zip215: false }); } catch { verified = false; }
  requireAdmission(verified, "SIGNATURE_INVALID");

  // Parse only after the exact byte hash and detached signature were checked.
  let parsed: any;
  try { parsed = JSON.parse(snapshotUtf8); } catch { throw new Error("ADMISSION_REJECTED:SNAPSHOT_JSON"); }
  requireAdmission(parsed && typeof parsed === "object" && !Array.isArray(parsed), "SNAPSHOT_SHAPE");
  requireAdmission(parsed.registry_id === policy.registry.registryId, "REGISTRY_ID");
  requireAdmission(parsed.n_events === policy.registry.nEvents && Number.isSafeInteger(parsed.n_events), "EVENT_COUNT");
  requireAdmission(parsed.declared_root === policy.registry.root, "DECLARED_ROOT");
  requireAdmission(canon({ registry_id: parsed.registry_id, n_events: parsed.n_events, root: parsed.declared_root }) === attestation.canonicalUtf8, "ATTESTATION_BINDING");
  requireAdmission(parsed.signature_hex === attestation.signatureHex, "EMBEDDED_SIGNATURE");
  requireAdmission(Array.isArray(parsed.events) && parsed.events.length === parsed.n_events, "EVENT_COUNT");

  let previous = policy.eventChain.firstPreviousHash;
  for (let i = 0; i < parsed.events.length; i++) {
    const event = parsed.events[i];
    requireAdmission(event && typeof event === "object" && !Array.isArray(event), "EVENT_SHAPE");
    requireAdmission(Number.isSafeInteger(event.seq) && event.seq === i + 1, "EVENT_SEQUENCE");
    requireAdmission(typeof event.type === "string" && typeof event.data === "string" && typeof event.prev_hash === "string" && typeof event.hash === "string", "EVENT_TYPES");
    requireAdmission(event.prev_hash === previous, "EVENT_PREVIOUS_HASH");
    const expected = sha(event.seq + "|" + event.type + "|" + event.data + "|" + previous);
    requireAdmission(event.hash === expected, "EVENT_HASH");
    previous = expected;
  }
  requireAdmission(previous === parsed.declared_root && previous === policy.eventChain.finalEventHash, "FINAL_ROOT");
  return { snapshotSha256, root: parsed.declared_root as string, eventsVerified: parsed.events.length as number,
    signatureVerified: verified, fullSnapshotSignatureVerified: ed25519.verify(signature, snapshotBytes, publicKey, { zip215: false }) };
}
