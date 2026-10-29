/**
 * Deterministic clause extractors for three CUAD categories.
 *
 * No model, no network, no randomness: the same text always yields the same
 * output. Each extractor returns at most ONE finding per contract: the first
 * sentence that satisfies its rule, with exact character offsets into the
 * original text and a normalized value. Developed on the CUAD training split
 * only (see PROTOCOL.md).
 */

export type Category = "Governing Law" | "Renewal Term" | "Notice Period To Terminate Renewal";
export const CATEGORIES: Category[] = ["Governing Law", "Renewal Term", "Notice Period To Terminate Renewal"];

export type Finding = { category: Category; start: number; end: number; quote: string; value: string | null };

/** English number words 1-99, plus "one hundred [and] twenty", etc., up to 399. */
const UNITS = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
  "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
export const NUM_WORDS: Record<string, number> = {};
UNITS.forEach((w, i) => { NUM_WORDS[w] = i + 1; });
TENS.forEach((t, i) => {
  NUM_WORDS[t] = (i + 2) * 10;
  UNITS.slice(0, 9).forEach((u, j) => { NUM_WORDS[`${t}-${u}`] = (i + 2) * 10 + j + 1; NUM_WORDS[`${t} ${u}`] = (i + 2) * 10 + j + 1; });
});
for (const [h, hv] of [["one", 100], ["two", 200], ["three", 300]] as const) {
  NUM_WORDS[`${h} hundred`] = hv;
  for (const [w, v] of Object.entries({ ...NUM_WORDS })) {
    if (v < 100) { NUM_WORDS[`${h} hundred ${w}`] = hv + v; NUM_WORDS[`${h} hundred and ${w}`] = hv + v; }
  }
}
const NUM_ALTS = Object.keys(NUM_WORDS).sort((a, b) => b.length - a.length).map(w => w.replace(/ /g, "\\s+"));
const NUM = `(?:\\d{1,3}|${NUM_ALTS.join("|")})`;
const UNIT = "(?:calendar |business )?(?:day|month|year)s?";
/** "thirty (30) days", "30 days", "one-year", "twenty-four (24) month". Never starts inside a hyphenated word. */
const DURATION = new RegExp(`(?<![\\w-])(${NUM})(?:\\s*\\(\\s*(\\d{1,3})\\s*\\))?[\\s-]*(${UNIT})\\b`, "i");

function normDuration(m: RegExpMatchArray | null): string | null {
  if (!m) return null;
  const raw = m[1]!.toLowerCase().replace(/\s+/g, " ");
  // A parenthesized figure, when present, is the authoritative number.
  const n = m[2] ? Number(m[2]) : /^\d+$/.test(raw) ? Number(raw) : NUM_WORDS[raw];
  if (n === undefined) return null;
  const unit = m[3]!.toLowerCase().replace(/^(calendar|business) /, "").replace(/s$/, "");
  return `${n} ${unit}${n === 1 ? "" : "s"}`;
}

/** Sentence spans: split on . ; or blank lines, keeping offsets. Abbreviations are tolerated. */
export function sentences(text: string): { start: number; end: number }[] {
  const out: { start: number; end: number }[] = [];
  const boundary = /(?<!\b(?:U\.S|Inc|Corp|Ltd|Co|No|Sec|St|Mr|Ms|Dr|i\.e|e\.g|U\.S\.A))\.(?=\s+["(\[]?[A-Z0-9])|\n\s*\n/g;
  let start = 0; let m: RegExpExecArray | null;
  while ((m = boundary.exec(text))) {
    const end = m.index + (m[0].startsWith(".") ? 1 : 0);
    if (end > start) out.push({ start, end });
    start = m.index + m[0].length;
  }
  if (start < text.length) out.push({ start, end: text.length });
  // trim leading whitespace from each span
  return out.map(s => { let a = s.start; while (a < s.end && /\s/.test(text[a]!)) a++; return { start: a, end: s.end }; })
    .filter(s => s.end - s.start > 15);
}

const squash = (s: string) => s.replace(/\s+/g, " ");

// ---- Governing law -------------------------------------------------------
const GOV_TRIGGER = /\b(?:governed|construed|interpreted|enforced|govern|governs|governing law|applicable law|laws? applicable|in accordance with the (?:internal |substantive )?laws?)\b/i;
const GOV_LAWS_OF = /\blaws?\s+(?:in force\s+)?(?:of|in)\s+(?:the\s+)?(?:(?:state|commonwealth|province|republic|kingdom|people's republic|federal republic|hong kong special administrative region)\s+of\s+)?([a-z][a-z.'-]*(?:\s+[a-z][a-z.'-]*){0,4})/gi;
const GOV_X_LAW = /\b(?:by|with|under)\s+((?:[A-Z][A-Za-z.'-]*)(?:\s+[A-Z][A-Za-z.'-]*)*)\s+law\b/;
const GOV_FIRST_STOP = /^(?:the|this|such|any|said|that|each|all|its|their|another|other|a|an|which|conflict|conflicts|united|jurisdiction|jurisdictions|country|countries|nation|place|applicable|relevant|local|governing|force|effect)$/i;
const GOV_CUT = new Set(["without", "excluding", "including", "applicable", "as", "and", "exclusive", "exclusively", "regardless",
  "notwithstanding", "other", "that", "which", "in", "for", "to", "shall", "will", "its", "their", "govern", "governs", "the",
  "regarding", "except", "but", "provided", "then", "hereto", "thereof", "herein", "on", "with", "without", "by", "or", "are",
  "is", "be", "excluding", "irrespective", "applicable", "apply", "applied", "if", "from", "u.s.a", "usa", "united"]);

const titleCase = (w: string) => w.split("-").map(p => p ? p[0]!.toUpperCase() + p.slice(1).toLowerCase() : p).join("-");

function govValue(s: string): string | null {
  const allCaps = s.replace(/[^A-Za-z]/g, "").length > 20 && s === s.toUpperCase();
  for (const m of s.matchAll(GOV_LAWS_OF)) {
    const words = m[1]!.split(/\s+/);
    if (GOV_FIRST_STOP.test(words[0]!)) continue;
    if (!allCaps && /^[a-z]/.test(words[0]!)) continue; // a jurisdiction is a proper noun
    const kept: string[] = [];
    for (const w of words) {
      const bare = w.replace(/[.,;:]+$/, "");
      if (kept.length && (GOV_CUT.has(bare.toLowerCase()) || (!allCaps && /^[a-z]/.test(bare) && bare !== "of"))) break;
      kept.push(bare);
      if (/[,;:]$/.test(w)) break;
    }
    while (kept.length && /^(?:of|and)$/i.test(kept[kept.length - 1]!)) kept.pop();
    if (!kept.length || GOV_FIRST_STOP.test(kept[0]!)) continue;
    const v = kept.join(" ");
    return allCaps || /^[a-z]/.test(v) ? kept.map(w => /^of$/i.test(w) ? "of" : titleCase(w)).join(" ") : v;
  }
  const x = s.match(GOV_X_LAW);
  if (x && !GOV_FIRST_STOP.test(x[1]!)) return x[1]!.trim();
  return null;
}

const GOV_STRONG = /\b(?:governed|construed|interpreted|govern|governs|in accordance with the (?:internal |substantive )?laws?)\b/i;

export function extractGoverningLaw(text: string): Finding | null {
  const spans = sentences(text);
  // Pass 1: a governing verb and a named jurisdiction after "laws of".
  for (const sp of spans) {
    const s = squash(text.slice(sp.start, sp.end));
    if (!GOV_STRONG.test(s)) continue;
    const value = govValue(s);
    if (!value) continue;
    return { category: "Governing Law", start: sp.start, end: sp.end, quote: text.slice(sp.start, sp.end), value };
  }
  // Pass 2: weaker triggers, still requiring a named jurisdiction.
  for (const sp of spans) {
    const s = squash(text.slice(sp.start, sp.end));
    if (!GOV_TRIGGER.test(s) || !/\blaws?\b/i.test(s)) continue;
    const value = govValue(s);
    if (!value) continue;
    return { category: "Governing Law", start: sp.start, end: sp.end, quote: text.slice(sp.start, sp.end), value };
  }
  return null;
}

// ---- Renewal term --------------------------------------------------------
const RENEW = /\b(?:renew(?:s|ed|al)?|extend(?:s|ed)?|extension)\b/i;
const RENEW_PERIOD = new RegExp(
  `\\b(?:renew(?:s|ed|able)?|extend(?:s|ed)?)\\b[^.;]{0,120}?\\b(?:for|by)\\b[^.;]{0,60}?${DURATION.source.replace(/^\\b/, "\\b")}`, "i");

export function extractRenewalTerm(text: string): Finding | null {
  for (const sp of sentences(text)) {
    const s = squash(text.slice(sp.start, sp.end));
    if (!TERM_CTX.test(s) || MUTUAL.test(s)) continue;
    if (RENEW.test(s)) {
      const m = s.match(RENEW_PERIOD);
      if (m) {
        const all = [...m[0].matchAll(new RegExp(DURATION.source, "gi"))];
        const value = normDuration(all.length ? all[all.length - 1]! : null);
        return { category: "Renewal Term", start: sp.start, end: sp.end, quote: text.slice(sp.start, sp.end), value };
      }
    }
    const p = periodic(s);
    if (p) return { category: "Renewal Term", start: sp.start, end: sp.end, quote: text.slice(sp.start, sp.end), value: p };
  }
  return null;
}

/** The sentence must be about the agreement's term, and not a renewal left to a future mutual agreement. */
const TERM_CTX = /\b(?:this agreement|the agreement|agreement shall|agreement will|the term|initial term|renewal term|term of this|then[- ]current term|the franchise|successor franchise)\b/i;
const MUTUAL = /\bmutual(?:ly)?\b[^.;]{0,30}\bagree|\bby mutual\b|\bmutual written\b/i;

/** Evergreen or periodic continuation without an explicit "renew for N" phrase. */
const PERIODIC: [RegExp, string][] = [
  [/\b(?:renew(?:s|ed|able)?|extend(?:s|ed)?|continu(?:e|es|ed|ance))\b[^.;]{0,80}?\b(?:annually|each year|every year|from year to year|year[- ]to[- ]year|annual (?:periods?|basis|terms?)|successive (?:annual|yearly) (?:periods?|terms?))\b/i, "1 year"],
  [/\b(?:renew(?:s|ed|able)?|extend(?:s|ed)?|continu(?:e|es|ed))\b[^.;]{0,80}?\b(?:month[- ]to[- ]month|monthly basis|successive monthly)\b/i, "1 month"],
  [/\bfrom year to year thereafter\b|\brenewed tacitly every year\b/i, "1 year"],
];
function periodic(s: string): string | null {
  for (const [re, v] of PERIODIC) if (re.test(s)) return v;
  const m = s.match(new RegExp(`\\b(?:automatically|shall|will)\\s+(?:continue|be extended|extend)\\b[^.;]{0,60}?\\bfor (?:an? )?(?:additional|further|successive|subsequent)\\b[^.;]{0,30}?${DURATION.source.replace(/^\\b/, "\\b")}`, "i"));
  if (m) { const d = [...m[0].matchAll(new RegExp(DURATION.source, "gi"))]; return normDuration(d.length ? d[d.length - 1]! : null); }
  return null;
}

// ---- Notice period to terminate renewal ----------------------------------
const NOTICE_CTX = /\b(?:renew(?:s|ed|al)?|non-renewal|expiration|extension|then[- ]current term|initial term)\b/i;
const NOTICE_PERIOD = new RegExp(
  `\\b(?:at least|not less than|no less than|no later than|minimum of|within|upon)\\s+${DURATION.source.replace(/^\\b/, "")}[^.;]{0,80}?\\b(?:prior|before|notice|in advance|preceding)\\b` +
  `|\\b${DURATION.source.replace(/^\\b/, "")}(?:'|’)?\\s*(?:prior\\s+)?(?:written\\s+)?notice\\b`, "i");

/** Insurance-policy notices, breach/cure terminations and renewal options are other clauses. */
const NOTICE_EXCLUDE = /\b(?:insurance|insurer|polic(?:y|ies)|certificate|breach(?:es|ed)?|cure[sd]?|default|bankrupt\w*|insolven\w*|option|elect(?:ion|s)? to renew|exercise)\b/i;
const NOTICE_OF_AT_LEAST = new RegExp(`\\bnotice\\b[^.;]{0,40}?\\b(?:of\\s+)?(?:at least|not less than|no less than)\\s+${DURATION.source.replace(/^\\b/, "")}`, "i");
const NOTICE_REDACTED = /\bnotice\b[^.;]{0,80}?\[\s*\*+\s*\][^.;]{0,30}?\b(?:prior|before|in advance)\b/i;

export function extractNoticePeriod(text: string): Finding | null {
  for (const sp of sentences(text)) {
    const s = squash(text.slice(sp.start, sp.end));
    if (!NOTICE_CTX.test(s) || !TERM_CTX.test(s) || NOTICE_EXCLUDE.test(s)) continue;
    if (!/\bnot(?:ice|ify|ification)|terminat|cancel|not to renew/i.test(s)) continue;
    const m = s.match(NOTICE_PERIOD) ?? s.match(NOTICE_OF_AT_LEAST);
    if (m) {
      const d = m[0].match(DURATION);
      return { category: "Notice Period To Terminate Renewal", start: sp.start, end: sp.end, quote: text.slice(sp.start, sp.end), value: normDuration(d) };
    }
    if (NOTICE_REDACTED.test(s)) {
      return { category: "Notice Period To Terminate Renewal", start: sp.start, end: sp.end, quote: text.slice(sp.start, sp.end), value: "[redacted]" };
    }
  }
  return null;
}

export function extractAll(text: string): Record<Category, Finding | null> {
  return {
    "Governing Law": extractGoverningLaw(text),
    "Renewal Term": extractRenewalTerm(text),
    "Notice Period To Terminate Renewal": extractNoticePeriod(text),
  };
}
