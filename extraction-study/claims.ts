/**
 * Checks a structured claim against the fact extracted from a real contract.
 * Same discipline as the 0.2 checker: every answer carries the quote it rests
 * on, and an absent fact is reported as missing evidence, never as a match.
 */
import type { Category, Finding } from "./extract";

export type ExtractedClaim = { category: Category; value: string };
export type ClaimCheck = {
  outcome: "MATCHES_EXTRACTED_FACT" | "DOES_NOT_MATCH_EXTRACTED_FACT" | "NO_EXTRACTED_EVIDENCE";
  claimed: string; extracted: string | null; quote: string | null;
  limits: string;
};

const norm = (v: string) => v.toLowerCase().replace(/^the\s+/, "").replace(/\s+/g, " ").trim();

export function checkClaim(claim: ExtractedClaim, finding: Finding | null): ClaimCheck {
  const limits = "Compared with an automatically extracted clause, not a legal reading of the whole contract.";
  if (!finding || !finding.value || finding.value === "[redacted]") {
    return { outcome: "NO_EXTRACTED_EVIDENCE", claimed: claim.value, extracted: finding?.value ?? null, quote: finding?.quote ?? null, limits };
  }
  if (finding.category !== claim.category) throw new Error("CLAIM_CATEGORY_MISMATCH");
  const same = norm(claim.value) === norm(finding.value);
  return {
    outcome: same ? "MATCHES_EXTRACTED_FACT" : "DOES_NOT_MATCH_EXTRACTED_FACT",
    claimed: claim.value, extracted: finding.value, quote: finding.quote.replace(/\s+/g, " ").trim(), limits,
  };
}
