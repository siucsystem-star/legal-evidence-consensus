import { describe, test, expect } from "bun:test";
import { admettreInstantane } from "../legal-evidence-consensus-workflow/admission";
import { executerCas } from "../legal-evidence-consensus-workflow/main";
import { ADMISSION_FIXTURE_V01 } from "../legal-evidence-consensus-workflow/admission_fixture_v01";
import { V } from "../legal-evidence-consensus-workflow/vecteurs_p8_v07";
import { canon, sha } from "../legal-evidence-consensus-workflow/rapport";

const snapshot = V.INSTANTANE_E1_V2.instantane_utf8;
const key = V.INSTANTANE_E1_V2.cle_publique_pem;
const policy = () => JSON.parse(JSON.stringify(ADMISSION_FIXTURE_V01));
const flip = (hex: string) => (hex.startsWith("0") ? "1" : "0") + hex.slice(1);

// Unit witnesses deliberately refresh only the outer byte-hash expectation to
// reach deeper checks. Production always uses the preregistered fixed policy.
function mutatedSnapshot(change: (s: any) => void) {
  const s = JSON.parse(snapshot); change(s);
  const bytes = canon(s); const p = policy();
  p.snapshot.sha256 = sha(bytes);
  p.snapshot.utf8Bytes = new TextEncoder().encode(bytes).length;
  return { bytes, p };
}

describe("Preregistered snapshot admission", () => {
  test("valid snapshot verifies 44 events and Ed25519 before governance", () => {
    const admitted = admettreInstantane(snapshot, key);
    expect(admitted.eventsVerified).toBe(44);
    expect(admitted.signatureVerified).toBe(true);
    expect(admitted.fullSnapshotSignatureVerified).toBe(false);
    const result = executerCas();
    expect(result.concordance_oracle).toBe("2/2");
    expect(result.cas.map(c => c.sha256_rapport)).toEqual([
      "0bc0513053145ee16f2a9d714775248cba50cd8d8062ae8a870f27635aba7946",
      "db76ff76e0fa4d4457abae2b3ce265de6e7d8493f8ebc96723dad0d3b9fd8ff5"
    ]);
  });
  test("altered snapshot hash is rejected", () => {
    const altered = snapshot.replace("1c0291e9", "0c0291e9");
    expect(() => admettreInstantane(altered,key)).toThrow("ADMISSION_REJECTED:SNAPSHOT_HASH");
  });
  test("one-bit detached signature change is rejected", () => {
    const p = policy(); p.signedAttestation.signatureHex = flip(p.signedAttestation.signatureHex);
    expect(() => admettreInstantane(snapshot,key,p)).toThrow("ADMISSION_REJECTED:SIGNATURE_INVALID");
  });
  test("altered attestation cannot pass using a refreshed payload hash", () => {
    const p = policy();
    p.signedAttestation.canonicalUtf8 = p.signedAttestation.canonicalUtf8.replace("1c0291e9", "0c0291e9");
    p.signedAttestation.sha256 = sha(p.signedAttestation.canonicalUtf8);
    expect(() => admettreInstantane(snapshot,key,p)).toThrow("ADMISSION_REJECTED:SIGNATURE_INVALID");
  });
  test("embedded and detached signatures must agree", () => {
    const {bytes,p}=mutatedSnapshot(s=>{s.signature_hex=flip(s.signature_hex);});
    expect(() => admettreInstantane(bytes,key,p)).toThrow("ADMISSION_REJECTED:EMBEDDED_SIGNATURE");
  });
  test("invalid event sequence is rejected", () => {
    const {bytes,p}=mutatedSnapshot(s=>{s.events[0].seq=2;});
    expect(() => admettreInstantane(bytes,key,p)).toThrow("ADMISSION_REJECTED:EVENT_SEQUENCE");
  });
  test("broken previous-event link is rejected", () => {
    const {bytes,p}=mutatedSnapshot(s=>{s.events[1].prev_hash="0".repeat(64);});
    expect(() => admettreInstantane(bytes,key,p)).toThrow("ADMISSION_REJECTED:EVENT_PREVIOUS_HASH");
  });
  test("stored event hash must match an independent recalculation", () => {
    const {bytes,p}=mutatedSnapshot(s=>{s.events[0].hash="0".repeat(64);});
    expect(() => admettreInstantane(bytes,key,p)).toThrow("ADMISSION_REJECTED:EVENT_HASH");
  });
  test("final event root must match the pinned root", () => {
    const p=policy(); p.eventChain.finalEventHash="0".repeat(64);
    expect(() => admettreInstantane(snapshot,key,p)).toThrow("ADMISSION_REJECTED:FINAL_ROOT");
  });
  test("different public key bytes are rejected", () => {
    expect(() => admettreInstantane(snapshot,key.replace("MCow","MCox"))).toThrow("ADMISSION_REJECTED:PUBLIC_KEY_HASH");
  });
  test("extra snapshot bytes are rejected", () => {
    expect(() => admettreInstantane(snapshot+"\n",key)).toThrow("ADMISSION_REJECTED:SNAPSHOT_LENGTH");
  });
  test("integrated workflow rejects altered bytes instead of returning verdicts", () => {
    const fixture=V.INSTANTANE_E1_V2 as any;
    try { fixture.instantane_utf8=snapshot+"\n"; expect(()=>executerCas()).toThrow("ADMISSION_REJECTED:SNAPSHOT_LENGTH"); }
    finally { fixture.instantane_utf8=snapshot; }
  });
  test("integrated workflow rejects an invalid signature instead of copying verifies=true", () => {
    const attestation=ADMISSION_FIXTURE_V01.signedAttestation as any;
    const original=attestation.signatureHex;
    try { attestation.signatureHex=flip(original); expect(()=>executerCas()).toThrow("ADMISSION_REJECTED:SIGNATURE_INVALID"); }
    finally { attestation.signatureHex=original; }
  });
});
