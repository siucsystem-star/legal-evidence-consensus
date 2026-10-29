/**
 * Scores the extractors against CUAD expert annotations, as defined in PROTOCOL.md.
 *
 *   bun run extraction-study/evaluate.ts <split.json> [--errors]
 *
 * The split file is produced by prepare-cuad.py from the official CUAD release.
 * --errors prints mismatches; it is used on the training split only.
 */
import { readFileSync } from "node:fs";
import { CATEGORIES, NUM_WORDS, extractAll, type Category, type Finding } from "./extract";

type Gold = { start: number; text: string };
type Doc = { title: string; text: string; gold: Partial<Record<Category, Gold[]>> };

/** Wilson score interval, 95 %. */
export function wilson(k: number, n: number): [number, number] | null {
  if (n === 0) return null;
  const z = 1.959963984540054, p = k / n, d = 1 + z * z / n;
  const c = (p + z * z / (2 * n)) / d, h = (z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))) / d;
  return [Math.max(0, c - h), Math.min(1, c + h)];
}

const overlaps = (f: Finding, g: Gold) => f.start < g.start + g.text.length && g.start < f.end;
const r4 = (x: number) => Math.round(x * 10000) / 10000;

export type Prediction = { title: string; category: Category; start: number; end: number; value: string | null; hit: boolean };

/** Every surface form of a number that may appear in an expert span: digits and English words. */
function numberForms(n: number, unit: string): string[] {
  const forms = [String(n), ...Object.entries(NUM_WORDS).filter(([, v]) => v === n).map(([w]) => w)];
  if (n === 1 && unit === "year") forms.push("annual", "annually", "yearly", "year to year", "year-to-year", "a year", "each year", "every year");
  if (n === 1 && unit === "month") forms.push("monthly", "month to month", "month-to-month", "a month");
  return forms;
}

export function score(docs: Doc[]) {
  const out: Record<string, unknown> = {};
  const errors: string[] = [];
  const predictions: Prediction[] = [];
  const found = docs.map(d => extractAll(d.text));
  for (const c of CATEGORIES) {
    let goldPos = 0, predicted = 0, tp = 0, valueChecked = 0, unitAgrees = 0, numberAndUnitAgrees = 0;
    const lengths: number[] = [];
    docs.forEach((d, i) => {
      const gold = d.gold[c] ?? [];
      const f = found[i]![c];
      if (gold.length) goldPos++;
      if (f) { predicted++; lengths.push(f.end - f.start); }
      const hit = !!f && gold.some(g => overlaps(f, g));
      if (f) predictions.push({ title: d.title, category: c, start: f.start, end: f.end, value: f.value, hit });
      if (hit) {
        tp++;
        valueChecked++; // a true positive without a value counts as not agreeing
        const v = f!.value?.toLowerCase() ?? null;
        const goldText = gold.map(g => g.text).join(" ").replace(/\s+/g, " ").toLowerCase();
        const n = v?.match(/^(\d+) (day|month|year)/);
        if (v === "[redacted]") { if (goldText.includes("*")) { unitAgrees++; numberAndUnitAgrees++; } }
        else if (n) {
          if (goldText.includes(n[2]!)) {
            unitAgrees++;
            if (numberForms(Number(n[1]), n[2]!).some(w => new RegExp(`(?<![\\w-])${w.replace(/ /g, "\\s+")}(?![\\w])`).test(goldText))) numberAndUnitAgrees++;
          }
        } else if (v && goldText.includes(v)) { unitAgrees++; numberAndUnitAgrees++; }
      } else if (f || gold.length) {
        errors.push(`[${c}] ${f ? (gold.length ? "WRONG-SPAN" : "FALSE-POS") : "MISSED"} ${d.title}\n  pred: ${f ? f.quote.replace(/\s+/g, " ").slice(0, 220) : "-"}\n  gold: ${gold.length ? gold[0]!.text.replace(/\s+/g, " ").slice(0, 220) : "-"}`);
      }
    });
    const precision = predicted ? tp / predicted : null, recall = goldPos ? tp / goldPos : null;
    lengths.sort((x, y) => x - y);
    out[c] = {
      contracts: docs.length, gold_positive: goldPos, predicted, true_positive: tp,
      precision: precision === null ? null : r4(precision), precision_ci95: wilson(tp, predicted)?.map(r4) ?? null,
      recall: recall === null ? null : r4(recall), recall_ci95: wilson(tp, goldPos)?.map(r4) ?? null,
      f1: precision === null || recall === null ? null : precision + recall === 0 ? 0 : r4(2 * precision * recall / (precision + recall)),
      value_checked: valueChecked,
      value_agrees_with_gold_text: unitAgrees,
      value_number_and_unit_in_gold_text: numberAndUnitAgrees,
      prediction_chars_median: lengths.length ? lengths[Math.floor(lengths.length / 2)] : null,
    };
  }
  return { results: out, errors, predictions };
}

if (import.meta.main) {
  const path = process.argv[2];
  if (!path) throw new Error("usage: evaluate.ts <split.json> [--errors]");
  const docs = JSON.parse(readFileSync(path, "utf8")) as Doc[];
  const { results, errors } = score(docs);
  console.log(JSON.stringify(results, null, 2));
  if (process.argv.includes("--errors")) console.log(errors.join("\n"));
}
