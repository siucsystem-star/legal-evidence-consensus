// Reality Floor - admission fixture v0.1.
// Preregistered before admission implementation. Do not adjust to fit the code.

export const ADMISSION_FIXTURE_V01 = {
  version: "1.0",
  status: "PREREGISTERED_BEFORE_ADMISSION_CODE",
  sourceVectors: {
    file: "vecteurs_p8_v07.ts",
    sha256: "a5831317aea8f6b6ed35332d186a26b65ddbcdc3945bba3f5648f0e762447ac6",
  },
  snapshot: {
    utf8Bytes: 20345,
    sha256: "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
  },
  publicKey: {
    pemSha256: "b3f72ceda7bc25d4e1f93932851e48442f07b5d8fdc8ef3c5af2a1250dca8765",
    rawBytes: 32,
  },
  signedAttestation: {
    canonicalUtf8:
      '{"n_events": 44, "registry_id": "1c0291e9-894d-4889-b963-1974c1083743", "root": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e"}',
    utf8Bytes: 147,
    sha256: "1424f0bf4179dab1f0766e72eedf784e2e6feb190424573355f3e7854e27546a",
    signatureHex:
      "86007aef00385ec87760aa21d721c9be90d63ad7ffb989b70b0f5ca21723f87ef9b9f496fdc38c3d27ba0ff1247ea7e0a85de7777f742cc933592b244f6dac0c",
    verifies: true,
    verifiesAgainstFullSnapshot: false,
  },
  registry: {
    registryId: "1c0291e9-894d-4889-b963-1974c1083743",
    nEvents: 44,
    root: "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
  },
  eventChain: {
    firstPreviousHash: "GENESIS",
    finalEventHash:
      "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
  },
  requiredNegativeWitnesses: [
    "ALTERED_SNAPSHOT_HASH",
    "ALTERED_SIGNATURE_BIT",
    "ALTERED_ATTESTATION_PAYLOAD",
    "DIFFERENT_EMBEDDED_SIGNATURE",
    "INVALID_EVENT_SEQUENCE",
    "INVALID_PREVIOUS_HASH",
    "INVALID_EVENT_HASH",
    "DIFFERENT_FINAL_ROOT",
  ],
  expectedNetworkRequests: 0,
  expectedEvmWrites: 0,
} as const;
