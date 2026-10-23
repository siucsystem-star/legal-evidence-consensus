/** Synthetic, manually annotated contract demo. Not an RF core verdict schema. */
export type Source = { id: string; title: string; text: string; sha256: string };
export type Fact = {
  id: string; key: string; value: number; unit: string; condition: string | null;
  sourceId: string; section: string; quote: string; validFrom: string;
  knownFrom: string; supersedes: string | null;
};
export type ContractPackage = {
  schema: "LEC-CONTRACT-PACKAGE-0.2"; packageId: string;
  origin: "SYNTHETIC_DEMO"; annotation: "MANUALLY_AUTHORED";
  sources: Source[]; facts: Fact[];
};
export type PackagePolicy = {
  envelopeSha256: string; envelopeUtf8Bytes: number; payloadSha256: string;
  publicKeyHex: string; packageId: string;
};
export type Claim = {
  id: string; text: string; key: string; value: number; unit: string;
  condition: string | null; sourceId: string | null; section: string | null;
  quote: string | null; effectiveAt: string; knowledgeAt: string;
};
export type Outcome = "MATCHES_REGISTER" | "DOES_NOT_MATCH_REGISTER" |
  "INSUFFICIENT_EVIDENCE" | "OUTSIDE_SUPPORTED_SCOPE";
export type ClaimResult = {
  id: string; claim: Claim; outcome: Outcome; reasons: string[]; explanation: string;
  comparedFact: Fact | null; citedSource: Source | null;
  checks: {
    packageIntegrity: "VERIFIED"; packageSignature: "VERIFIED_DEMO_KEY";
    temporal: "CHECKED" | "NOT_REACHED"; conditions: "CHECKED" | "NOT_REACHED";
    wording: "CONTROLLED_TEMPLATE" | "NOT_SUPPORTED";
    independentReading: "NOT_ASSESSED"; corroboration: "NOT_ASSESSED";
    legalValidity: "NOT_ASSESSED"; fullDocumentCoverage: "NOT_MEASURED";
  };
};
export type ContractReport = {
  schema: "LEC-CONTRACT-REPORT-0.2"; packageId: string;
  packageSha256: string; payloadSha256: string; claims: ClaimResult[];
  scope: string; reportSha256: string;
};
