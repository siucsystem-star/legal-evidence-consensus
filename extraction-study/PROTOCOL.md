# Extraction study — preregistered protocol (v1)

**Question.** On real commercial contracts, how often do three deterministic
extractors find the clause that legal experts marked, and how often are they
wrong when they claim to have found it?

This protocol, the extractor code and the data fingerprints are frozen in
`PREREGISTRATION.json`. The SHA-256 of that file is anchored on Ethereum
Sepolia **before** the extractors are ever run on the test contracts.

## Data

- **CUAD v1** (Contract Understanding Atticus Dataset), The Atticus Project,
  CC BY 4.0. 510 commercial contracts from public SEC EDGAR filings, annotated
  by legal experts for 41 clause categories. Repository
  `TheAtticusProject/cuad`, commit `67faa0e6023b04fcaae6cc09497ab00e5d63a2a2`.
- **Split.** The authors' own test file (102 contracts) is the test set. The
  other 408 contracts are the development set. `prepare-cuad.py` rebuilds both
  from the official files and refuses inputs whose hashes differ.
- **Not redistributed.** The repository contains no CUAD text; anyone can
  rebuild the split from the official release.

## What was seen of the test set before freezing

On 2026-10-29, while inspecting the dataset, the number of test contracts with
an expert answer was printed once for every category (aggregate counts only).
No test contract text, expert span or extractor output on a test contract was
viewed. All development used the 408 development contracts.

## Categories and extractors

| CUAD category | Extractor | Normalized value |
|---|---|---|
| Governing Law | `extractGoverningLaw` | jurisdiction name, e.g. `New York` |
| Renewal Term | `extractRenewalTerm` | duration, e.g. `1 year` |
| Notice Period To Terminate Renewal | `extractNoticePeriod` | duration, e.g. `90 days`, or `[redacted]` |

Rules only: no model, no network, no randomness. Each extractor returns **at
most one** finding per contract, with exact character offsets into the contract
text: the first sentence that satisfies its rule. Governing Law makes two
passes: first sentences with a governing verb ("governed", "construed",
"interpreted", "govern(s)", "in accordance with the laws") and a named
jurisdiction; only if none is found, sentences with weaker triggers.

## Scoring

For each contract and category:

- **Gold positive**: CUAD lists at least one expert answer span.
- **Prediction**: the extractor returns a finding.
- **True positive**: the predicted sentence overlaps at least one expert span
  by at least one character.

Per category: precision = TP / predictions; recall = TP / gold positives;
F1 (reported as `null` when precision or recall is undefined); and 95 %
Wilson intervals for precision and recall. A prediction on a
contract without an expert span, or one that overlaps no expert span, counts
against precision; a gold positive without an overlapping prediction counts
against recall.

**Secondary, descriptive only.** For every true positive (one without a value
counts as not agreeing):

- `value_agrees_with_gold_text`: the jurisdiction name, or the duration unit,
  appears in the expert span text; `[redacted]` agrees when the span is redacted.
- `value_number_and_unit_in_gold_text`: for durations, the number (digits or
  English words, and for one year / one month also "annual(ly)", "yearly",
  "year to year", "monthly", "month to month") and the unit both appear.
- `prediction_chars_median`: median length of predicted sentences, to show
  how generous sentence-level overlap is.

These are not independent checks of the value. The run also records every
prediction (contract, category, offsets, value, hit) so it can be audited or
rescored without rerunning.

## Commitments

1. One run on the 102 test contracts, with the frozen files only, under the
   recorded Bun version. `run-test.ts` refuses to overwrite an existing result
   file and prints the SHA-256 of the result it writes.
2. All numbers published as they come out, including per-contract errors.
3. No success threshold is claimed in advance. We expect test results to be
   **lower** than development results, as rules tuned on one set usually
   generalize imperfectly.
4. Any change to a frozen file after the anchor voids this protocol. A new
   version would need its own preregistration and anchor, and both results
   would be reported.
5. Hashes are computed on the files as stored in Git (LF line endings); a
   Windows checkout must be normalized before hashing (`run-test.ts` does it).

## Limits declared now

- Three categories out of 41. Rules, not language understanding.
- Overlap scoring is generous: a whole sentence can overlap a shorter expert
  span. Values are only checked descriptively.
- CUAD labels are expert work, but one annotation per span; they are a
  reference, not ground truth beyond dispute.
- Development and test contracts come from the same source and period.
