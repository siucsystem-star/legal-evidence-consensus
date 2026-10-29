import { describe, expect, test } from "bun:test";
import { extractAll, extractGoverningLaw, extractNoticePeriod, extractRenewalTerm, sentences } from "./extract";
import { checkClaim } from "./claims";
import { score, wilson } from "./evaluate";

// Hand-written sentences in the style of commercial contracts. None comes from the CUAD test split.
const GOV = "1. Definitions. Terms are defined below. 12.3 This Agreement shall be governed by and construed in accordance with the laws of the State of New York, without giving effect to conflict of laws principles. 12.4 Notices.";
const GOV_CAPS = "THIS AGREEMENT SHALL BE GOVERNED BY THE LAWS OF THE COMMONWEALTH OF MASSACHUSETTS WITHOUT REGARD TO CONFLICTS OF LAW.";
const RENEW = "The Initial Term is three (3) years. Thereafter, this Agreement shall automatically renew for successive one (1) year periods unless either party provides written notice of non-renewal at least ninety (90) days prior to the expiration of the then-current term.";
const INSURANCE = "Each policy shall provide at least thirty (30) days' prior written notice to the other party of cancellation, non-renewal or material change of this Agreement's coverage.";

describe("deterministic extraction", () => {
  test("governing law: span, quote and jurisdiction", () => {
    const f = extractGoverningLaw(GOV)!;
    expect(f.value).toBe("New York");
    expect(GOV.slice(f.start, f.end)).toBe(f.quote);
    expect(f.quote.startsWith("12.3 This Agreement shall be governed")).toBe(true);
  });
  test("governing law in capitals is normalized", () => {
    expect(extractGoverningLaw(GOV_CAPS)!.value).toBe("Massachusetts");
  });
  test("'applicable law' without a named jurisdiction is not a governing-law clause", () => {
    expect(extractGoverningLaw("Supplier shall obtain all permits required by applicable law in connection with the Products.")).toBeNull();
  });
  test("renewal term and notice period come from the same evergreen sentence", () => {
    const all = extractAll(RENEW);
    expect(all["Renewal Term"]!.value).toBe("1 year");
    expect(all["Notice Period To Terminate Renewal"]!.value).toBe("90 days");
  });
  test("renewals left to a future mutual agreement are not counted", () => {
    expect(extractRenewalTerm("This Agreement may be renewed by mutual written agreement of the parties for successive one (1) year periods.")).toBeNull();
  });
  test("insurance-policy notices are not renewal notices", () => {
    expect(extractNoticePeriod(INSURANCE)).toBeNull();
  });
  test("redacted notice periods are found but carry no value", () => {
    const f = extractNoticePeriod("Following the Initial Term, this Agreement shall renew for one (1) year unless a Party delivers written notice of non-renewal [***] prior to the end of the then-current term.");
    expect(f!.value).toBe("[redacted]");
  });
  test("compound and parenthesized numbers are read whole", () => {
    expect(extractRenewalTerm("Thereafter, this Agreement shall automatically renew for successive twenty-four (24) month periods.")!.value).toBe("24 months");
    expect(extractRenewalTerm("Thereafter, this Agreement shall automatically renew for successive thirty-six months.")!.value).toBe("36 months");
    expect(extractNoticePeriod("This Agreement shall renew for one (1) year unless either party gives fourteen (14) days notice of non-renewal prior to the end of the then-current term.")!.value).toBe("14 days");
  });
  test("no randomness: identical input, identical output", () => {
    expect(JSON.stringify(extractAll(RENEW + " " + GOV))).toBe(JSON.stringify(extractAll(RENEW + " " + GOV)));
  });
  test("offsets survive irregular whitespace", () => {
    const text = "Recitals.\n\n   This  Agreement   shall be governed by\nthe laws of   England and Wales.";
    const f = extractGoverningLaw(text)!;
    expect(text.slice(f.start, f.end)).toBe(f.quote);
    expect(f.value).toBe("England");
  });
  test("sentence splitter keeps U.S. abbreviations together", () => {
    expect(sentences("The parties are U.S. companies located in Texas today. Second sentence here for testing.").length).toBe(2);
  });
});

describe("claims against extracted facts", () => {
  test("a matching claim cites the clause", () => {
    const r = checkClaim({ category: "Governing Law", value: "New York" }, extractGoverningLaw(GOV));
    expect(r.outcome).toBe("MATCHES_EXTRACTED_FACT"); expect(r.quote).toContain("laws of the State of New York");
  });
  test("a wrong jurisdiction does not match", () => {
    expect(checkClaim({ category: "Governing Law", value: "Delaware" }, extractGoverningLaw(GOV)).outcome).toBe("DOES_NOT_MATCH_EXTRACTED_FACT");
  });
  test("no extracted clause is missing evidence, not a match", () => {
    expect(checkClaim({ category: "Governing Law", value: "New York" }, null).outcome).toBe("NO_EXTRACTED_EVIDENCE");
  });
  test("a redacted value is never confirmed", () => {
    const f = extractNoticePeriod("This Agreement shall renew for one (1) year unless a Party delivers written notice of non-renewal [***] prior to the end of the then-current term.");
    expect(checkClaim({ category: "Notice Period To Terminate Renewal", value: "90 days" }, f).outcome).toBe("NO_EXTRACTED_EVIDENCE");
  });
});

describe("scoring rules", () => {
  test("Wilson interval matches known values", () => {
    const [lo, hi] = wilson(8, 10)!;
    expect(lo).toBeCloseTo(0.4902, 3); expect(hi).toBeCloseTo(0.9433, 3);
    expect(wilson(0, 0)).toBeNull();
  });
  test("a prediction counts only if it overlaps an expert span", () => {
    const text = GOV;
    const start = text.indexOf("This Agreement shall be governed");
    const hit = score([{ title: "a", text, gold: { "Governing Law": [{ start, text: text.slice(start, start + 40) }] } }]).results as any;
    expect(hit["Governing Law"].true_positive).toBe(1);
    const miss = score([{ title: "b", text, gold: { "Governing Law": [{ start: 0, text: "1. Definitions." }] } }]).results as any;
    expect(miss["Governing Law"].true_positive).toBe(0); expect(miss["Governing Law"].predicted).toBe(1);
  });
});
