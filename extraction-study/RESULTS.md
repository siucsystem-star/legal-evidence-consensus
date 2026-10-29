# Extraction study v1 — results

**Single preregistered run, 2026-10-29.** Three rule-based extractors, tested on
the 102 contracts of the official CUAD test split. These contracts were never
used during development and their texts were never viewed.

## Order of events (verifiable)

| Step | When (UTC) | Evidence |
|---|---|---|
| Protocol, code and data fingerprints committed, then pushed to GitHub | commit time 21:07:29 (author-set, not independent) | commit `ea1b82d`, `PREREGISTRATION.json` |
| SHA-256 of `PREREGISTRATION.json` anchored on Ethereum Sepolia | 2026-10-29 22:06:36 | tx [`0x325df835…a4f0`](https://sepolia.etherscan.io/tx/0x325df835678f8c8dab42488b32269a9ea3765ee9407e6979d27f1a846b90a4f0), block 12022397 |
| Single test run | 2026-10-29 22:07:36 | `RESULTS_TEST_V1.json`, SHA-256 `71203bd1…eb9d` |

Anchored digest: `e8de656a26eb2f07304712f84cb6a53eb92cde9cd474bc9c436e1ca26106d96c`
(`sha256sum extraction-study/PREREGISTRATION.json`). Contract
`0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3`, submitter
`0xbf6013d4CeD10ecf794527a60AF7cd57A73ab18f` (the same address as the July
anchor). Before the run, `run-test.ts` checked every frozen file, the test
split and the Bun version against the preregistration.

## Results on the 102 test contracts

| Clause type | Precision | Recall | F1 | Dev. F1 (408) |
|---|---|---|---|---|
| Governing law | **0.97** (70/72), 95 % CI 0.90–0.99 | **0.84** (70/83), CI 0.75–0.91 | **0.90** | 0.94 |
| Renewal term | **1.00** (18/18), CI 0.82–1.00 | **0.69** (18/26), CI 0.50–0.84 | **0.82** | 0.74 |
| Notice period to stop renewal | **0.67** (10/15), CI 0.42–0.85 | **0.63** (10/16), CI 0.39–0.82 | **0.65** | 0.67 |

*Precision:* when the extractor says "here is the clause", how often it points
at a sentence the legal experts marked. *Recall:* of the clauses the experts
marked, how many it found. CI: 95 % Wilson interval.

Descriptive value checks: for every true positive, the extracted value (a
jurisdiction or a duration) appears in the expert's span — 70/70, 18/18,
10/10. These checks are lenient and not independent.

## Reading the result honestly

- **Governing law transfers well.** Precision stays at 0.97 on unseen
  contracts; recall falls from 0.91 to 0.84.
- **The preregistered expectation held for two of three clause types.** We
  expected lower test scores. Renewal term scored *higher* than in development
  (F1 0.82 vs 0.74). With 26 positive contracts the interval is wide
  (recall 0.50–0.84); we read this as noise, not as improvement.
- **Notice periods remain the weak point:** one finding in three is wrong.
- **Errors are published.** 31 contract-level errors (13 governing law, 8
  renewal, 10 notice) are listed in `RESULTS_TEST_V1.json`, with every
  prediction and its offsets, so anyone can audit or rescore the run.
- **Generous matching.** A predicted sentence (median about 200–290
  characters) counts if it overlaps an expert span by one character. A stricter
  rule would lower the numbers.

## What this does and does not show

It shows that three narrow, deterministic rules find specific clauses in real
contracts at the measured rates, and that the protocol was fixed and timestamped
before the measurement. It does not show general contract understanding, legal
correctness of any clause, or performance on other clause types, other
jurisdictions or other document sources.

## Disclosures

- Before the anchor, an independent review of the frozen package found a bug
  (compound numbers such as "twenty-four" were mis-read). It was fixed and the
  preregistration regenerated **before** anchoring; no test data was involved.
- While anchoring through Remix, two unrelated copies of the contract were
  deployed by mistake (`0x173b…5b5f`, `0x64a7…a616`) and one attempt, routed by
  the wallet through an account-upgrade path, reverted (`0x8cde…c13d`). None of
  these touched the official contract or the anchored digest; the only anchor
  is the transaction above.

## Reproduce

```sh
git clone https://github.com/TheAtticusProject/cuad.git
(cd cuad && git checkout 67faa0e6023b04fcaae6cc09497ab00e5d63a2a2 && unzip data.zip -d data)
python3 -I extraction-study/prepare-cuad.py cuad/data split/
bun run extraction-study/evaluate.ts split/test.json
```

CUAD: The Atticus Project, CC BY 4.0. Short contract excerpts in
`RESULTS_TEST_V1.json` (error listings) come from CUAD and keep that licence
and attribution.
