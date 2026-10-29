[Version française](README_FR.md)

# Legal Evidence Consensus — Reality Floor

**A correct quote can still support the wrong conclusion.** A fee that was true
in March, a delay promised only for severity-one incidents, an amendment nobody
knew about yet: the source is intact, the signature verifies, and the statement
built on it is still wrong. This prototype checks structured legal claims
against signed, time-versioned evidence, says exactly *why* a claim does or does
not match, and says just as plainly what it did **not** check.

## For judges — start here

| What | Where |
|---|---|
| 12-case contract walkthrough (fictional agreement + amendment) | [live page](https://siucsystem-star.github.io/legal-evidence-consensus/contract-demo.html) ([source](docs/contract-demo.html)) · [captioned video, 69 s](docs/Legal_Evidence_Consensus_v0.3_Walkthrough.mp4) (report walkthrough; it does not show the CRE run) |
| How the checks work, reproduction, limits | [`CONTRACT_DEMO_V02.md`](CONTRACT_DEMO_V02.md) |
| **Measured on 102 real contracts** (preregistered, anchored before the run) | [below](#measured-on-real-contracts-preregistered-study) · [`extraction-study/RESULTS.md`](extraction-study/RESULTS.md) |
| One CRE workflow: HTTP evidence + Sepolia read-back | [below](#one-cre-workflow-http-evidence--sepolia-read-back-03) |
| What is demonstrated and what is not | [`CURRENT_STATUS.md`](CURRENT_STATUS.md) |
| Earlier v0.1 video (CRE simulation, Etherscan) | [Google Drive](https://drive.google.com/file/d/1ekUsWUq6MSm7QSFwHmPCXrOdXgb_QH8F/view?usp=sharing) |

**The two clocks (a bitemporal check).** Every fact carries two dates: when it
takes effect, and when it became known. Cases 09 and 10 ask about the *same day*
(2 April 2026) and both match — with different fees. The amendment took effect on 1 April but was
only known on 5 April. Asked with what was known on 2 April, the supported fee
is CAD 8,400; asked with what was known by 1 May, it is CAD 9,100. Both answers
are correct for their knowledge horizon, and the checker never mixes them.

## Measured on real contracts (preregistered study)

The demonstration above uses a fictional contract with hand-structured claims.
To measure the approach on real documents, three deterministic extractors (rules,
no AI model) were tested on **CUAD**, a public set of 510 commercial contracts
annotated clause by clause by legal experts (The Atticus Project, CC BY 4.0).

The rules were developed on 408 contracts only. The protocol, code and data
fingerprints were then frozen, committed, and their SHA-256 **anchored on
Ethereum Sepolia** ([tx](https://sepolia.etherscan.io/tx/0x325df835678f8c8dab42488b32269a9ea3765ee9407e6979d27f1a846b90a4f0),
2026-10-29 22:06:36 UTC). One minute later, a single run on the 102 untouched
test contracts produced:

| Clause type | Precision | Recall | F1 |
|---|---|---|---|
| Governing law | 0.97 (70/72) | 0.84 (70/83) | 0.90 |
| Renewal term | 1.00 (18/18) | 0.69 (18/26) | 0.82 |
| Notice period to stop renewal | 0.67 (10/15) | 0.63 (10/16) | 0.65 |

*Precision:* how often a found clause is the one experts marked. *Recall:* how
many marked clauses were found. Intervals, every error and every prediction are
published in [`extraction-study/`](extraction-study/RESULTS.md). This is the
project's own thesis applied to itself: the criterion was fixed and timestamped
before the result was seen. Three clause types only; rules, not language
understanding.

## One CRE workflow: HTTP evidence + Sepolia read-back (0.3)

`anchor-check-settings` is a single Chainlink CRE workflow that touches two
external systems:

1. **HTTP** — fetches the signed 0.2 contract package from an immutable Git
   commit, verifies its exact hash and Ed25519 signature, and reviews the 12
   structured claims (no fallback to embedded data on any failure).
2. **EVM (Ethereum Sepolia)** — admits the sealed v0.1 evidence snapshot (byte
   hash, signed root attestation, 44 event hashes), then reads back its existing
   anchor with a `getAnchor` view call at the last finalized block, and requires
   the on-chain submitter, digest, block and timestamp to match exactly.

```bash
cd legal-evidence-consensus-workflow
bun install --frozen-lockfile --ignore-scripts
bun run test:anchor
cd ..
cre workflow simulate legal-evidence-consensus-workflow --target anchor-check-settings --non-interactive --trigger-index 0
```

Read-only: no transaction, no wallet, no secret. The Sepolia record concerns the
**v0.1 snapshot digest**; the 0.2 report digest is not anchored. Single-node
simulation; no DON consensus is claimed. CLI simulation result for this target:
[`VERIFICATION_ANCHOR_V03.json`](VERIFICATION_ANCHOR_V03.json).

## Glossary

| Term | Meaning here |
|---|---|
| Chainlink CRE | Chainlink Runtime Environment: runs a workflow that can call web APIs and blockchains |
| Single-node simulation | the workflow ran once, on one machine, via the CRE command line; no network of nodes |
| DON / BFT consensus | a decentralized network of nodes agreeing on a result; **not** used here |
| Sepolia | Ethereum's public test network: real blocks and timestamps, no monetary value |
| Anchor | writing a SHA-256 fingerprint on-chain, which proves the data existed no later than that block |
| Snapshot | a signed, fixed set of facts that claims are checked against |
| Bitemporal | tracking both when a fact takes effect and when it became known |
| Reality Floor / governor | the project's earlier v0.1 rule engine (identifiers in French, translated below) |
| CUAD | Contract Understanding Atticus Dataset: real contracts annotated by legal experts |

---

*The original v0.1 project description follows.*

## v0.1 — original description

Telling *"someone claimed it"* apart from *"evidence supports it"*, and anchoring
that distinction so that no one — ourselves included — can rewrite it afterwards.

## The problem

In a legal file, two sentences look alike and are not worth the same:

> "I was told the floor holds 60 tonnes."
> "The floor holds 60 tonnes."

The first reports a statement. The second asserts a fact. A system that treats
them alike turns hearsay into data — silently, and often at the moment someone
is about to decide.

## The proposal

Reality Floor checks a claim against a **sealed evidence snapshot**. Before
reading anything, it verifies the snapshot's exact bytes, its chain of 44 event
fingerprints and an Ed25519 signature. Its rule engine (the *governor*) returns a
verdict — `AUTORISE` (authorised), `REFORMULER` (rephrase) or `BLOQUE` (blocked) —
with named defect codes drawn from fifteen, such as `VALEUR_PERIMEE` (stale value),
`SOURCE_INCONNUE` (unknown source), `PREUVE_NON_CONCORDANTE` (evidence does not
match) and `SECTION_NON_CONCORDANTE` (wrong section).

The resulting report is canonically serialised, so its SHA-256 is reproducible
byte for byte. In the existing Sepolia demonstration, the **snapshot digest**
was anchored manually; the report digests are generated locally and are not
claimed to have been anchored by the workflow.

*(Identifiers stay in French because they are the constants in the frozen code; English glosses are given in parentheses.)*

## The path actually demonstrated

```
CRE single-node simulation:
sealed snapshot -> byte hash + Ed25519 root attestation + 44 event hashes
        -> governor -> display scope -> canonical reports + report SHA-256

Separate manual Sepolia demonstration:
sealed snapshot SHA-256 -> LegalEvidenceAnchor -> public read-back
```

Every step of the path shown above was actually executed. The demonstration data
is explicitly identified as such, and the Sepolia anchoring was performed
separately from the CRE workflow.

## The two demonstration cases

Both concern the same key, `tarif_service_principal` (main service fee), against
the same sealed snapshot. Only the claim changes.

| case | verdict | defect codes | displayed |
|---|---|---|---|
| `vivant` (current) | `AUTORISE` (authorised) | none | "Affirmation conforme au plancher." — *claim consistent with the evidence* |
| `perime` (stale) | `BLOQUE` (blocked) | `VALEUR_PERIMEE` (stale value) | "Affirmation retenue (hallucination temporelle (valeur remplacée))." — *claim withheld: temporal error, value superseded* |

The second case is the heart of the demonstration: the quoted value did exist,
then was superseded. It is not false — it is **stale**. A system that does not
model time cannot see the difference.

Agreement with the sealed oracle: **2/2**.

## Reproducing

### The CRE simulation

```bash
cd legal-evidence-consensus-workflow
bun install --frozen-lockfile --ignore-scripts
cd ..
cre workflow simulate legal-evidence-consensus-workflow --target staging-settings
```

For each case the output gives: identifier, verdict, defect codes, batch digest,
report SHA-256, and agreement with the oracle. On every run it restates that this
is a single-node simulation with no anchoring.

### Admission checks

```bash
cd legal-evidence-consensus-workflow
bun run typecheck
bun run test:admission
cd ..
```

The 13 checks include valid admission, altered bytes, invalid detached and
embedded signatures, changed attestation payload, broken event sequence/links/
hashes, a mismatched final root, and integrated rejection before a verdict is
returned. The root attestation is verified cryptographically on every run;
the historical fixture's cached `verifies` flag is not treated as verification.
The two valid-case report hashes remain unchanged.

### The contract and its 7 tests

```bash
npm ci
npx hardhat compile
npx hardhat test
```

The seven checks cover: anchoring a valid digest; reading back the exact
submitter, digest, block and timestamp; event emission; rejection of the zero
digest; rejection of a duplicate by the same address; independent anchoring by a
second address; and the absence of any deletion or modification function in the
ABI.

## On chain

- **Contract** `LegalEvidenceAnchor` — [`0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3`](https://sepolia.etherscan.io/address/0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3)
- **First anchor** — [`0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d`](https://sepolia.etherscan.io/tx/0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d)
- Block `11357728`, 2026-07-26T23:07:12Z, Ethereum Sepolia (chainId `11155111`)

The anchored digest is **equal to the SHA-256 of the sealed evidence snapshot**
consumed by the workflow. The link is verifiable offline: see `anchors/`.

The contract has only three functions, one of which writes. No deletion, no
modification, no owner, no upgrade path.

## Limits

- **Single-node simulation. No BFT consensus.** One node ran the workflow;
  nothing was replicated or voted on.
- **Anchoring does not prove the content is true.** It establishes that an
  address submitted this digest at this block — an attributed timestamp, nothing
  more. No legal validity, no real provenance, no human identity behind the
  address.
- **Anchoring bounds the latest, never the earliest.** It does not say the
  snapshot existed before that block.
- **Sepolia is a test network**: no value, and no guarantee that its history
  will persist.
- Sourcify source verification is **as reported by Remix**, not independently
  re-verified.

## Repository structure that matters

```
contracts/LegalEvidenceAnchor.sol      the anchoring contract
test/LegalEvidenceAnchor.test.ts       the 7 checks
scripts/                               deployment and read (viem)
anchors/                               first-anchor receipts, JSON and Markdown
legal-evidence-consensus-workflow/
    main.ts                            CRE entry point
    gouverneur.ts                      15 defect codes, verdicts
    portee.ts                          what is shown or withheld
    rapport.ts                         canonical serialisation and digests
    vecteurs_p8_v07.ts                 sealed snapshot + oracle (do not modify)
    admission_fixture_v01.ts           preregistered admission fixture
SCOPE_FREEZE_… / AUDIT_… (parent repo) dated scope freezes and audits
CURRENT_STATUS.md / _FR.md             current state, distinct from dated audits
```

## Status

Research prototype for the BLI Legal Tech Hackathon 2. See
[`CURRENT_STATUS.md`](CURRENT_STATUS.md) for what is demonstrated and what is
not.

## Licence

Copyright (c) 2026 Systèmes de cohérence Coherix inc. **All rights reserved.**

This repository is published to be **read and verified**, not reused.

Permitted: reading it; viewing and forking it within GitHub, as the GitHub Terms
of Service provide; cloning or downloading it and making the technical copies
needed to install its dependencies and run it locally, for the sole purpose of
checking the stated results; and quoting short excerpts with attribution.

Republishing, mirroring or redistributing it outside a GitHub fork, modifying it,
reusing it in another project, and using it as machine-learning training data
require prior written permission. **No patent licence is granted.**

Third-party dependencies remain governed by their own licences; this notice does
not replace them.

Public readability is not open source. This repository carries no OSI-approved
licence, and that is a decision, not an oversight. Full terms: [`LICENSE`](LICENSE).
