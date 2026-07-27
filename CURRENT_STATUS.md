[Version française](CURRENT_STATUS_FR.md)

# Current status

**Date:** 2026-07-27
**Applies to:** the head of `main` on that date. Commit hashes are visible in the
Git history; this document does not restate its own.

Earlier audits and scope freezes — `AUDIT_CRE_BASELINE_2026-07-25.md`,
`SCOPE_FREEZE_LEGAL_EVIDENCE_CONSENSUS_V01_2026-07-25.md` and the other dated
documents — describe the state of the project **at their date**. They have not
been rewritten. This document is the current state; where the two differ, this
one governs.

## Done and verified locally

- **Governor ported and executed.** 15 defect codes, verdicts `AUTORISE` /
  `REFORMULER` / `BLOQUE`. The output depends on the input: an altered value
  yields `INCOMPATIBILITE_ETAT_VIVANT`, an invented source `SOURCE_INCONNUE`, a
  fabricated excerpt `PREUVE_NON_CONCORDANTE`.
- **P8 v0.7 parity: 93/93, 0 failures**, under `cre workflow simulate`.
- **CRE workflow v0.1 executable**, with entry point, configuration, and **2/2**
  agreement with the sealed oracle.
- **Reproducible digest chain**: canonically serialised report, SHA-256
  identical byte for byte.
- **`LegalEvidenceAnchor` contract**: 7 of 7 tests passed under Hardhat before
  deployment. Solidity 0.8.28, EVM Cancun, optimizer enabled, 200 runs.
- **The anchored digest equals the SHA-256 of the sealed snapshot**, and the
  value expected by `ADMISSION_FIXTURE_MANIFEST_V01.json`, preregistered
  **before** deployment. Verified offline.
- **Repository hygiene**: `.env` and `secrets.yaml` excluded; no key and no
  private RPC URL in any tracked file.

## Publicly demonstrated

- **Contract deployed on Ethereum Sepolia**:
  `0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3`
- **First anchor confirmed**, transaction
  `0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d`,
  block `11357728`, 2026-07-26T23:07:12Z, status `success`.
- Receipts in `anchors/`, in JSON and Markdown.
- Source verification: Sourcify `successful` **as reported by Remix** — reported
  by the tool, not independently re-verified.

## Not demonstrated

- **No BFT consensus.** Every execution is single-node. Nothing was replicated,
  nothing was voted on, no DON was used.
- **No legal validity.** The system does not say what is admissible, nor what
  carries evidentiary weight.
- **Anchoring does not prove the content is true**, nor the real provenance of
  the document, nor the human identity behind the submitting address.
- **No chain read or write from the CRE workflow.** The workflow produces the
  digest; the anchoring was done separately. The automatic junction does not
  exist.
- **No real legal corpus governed end to end.** The sealed CanLII Dunsmuir
  record exists in the parent repository but is not consumed by the workflow.
- **No validation under real-world conditions.** The published paper says so
  itself: validation in deployment remains an open research direction.
- **No interface.** The demonstration runs on the command line.
- **All rights reserved.** A licence decision has been made: no reuse right is
  granted. The repository is publicly readable and is **not** open source.
  Nothing here may be copied, modified or reused without written permission, and
  no patent licence is granted. See `LICENSE`.

## Minimum next steps for submission

1. Remove or explain `my-calculator-workflow/` — **done**, removed in commit
   `c31523c`.
2. Choose a licence — **done**. All rights reserved; see `LICENSE`.
3. Push the repository to GitHub — **done**:
   <https://github.com/siucsystem-star/legal-evidence-consensus>
4. Record a short demonstration: the CRE simulation on both cases, then the
   anchoring transaction on Etherscan. **Remaining.**
5. Submit on DoraHacks, deadline 2026-11-01. **Remaining.**

Nothing on this list requires new development. What is missing is publication,
not research.

## `my-calculator-workflow/` — removed

The original CRE "hello world" template was removed in commit `c31523c`. Before
removal it was verified to have **no reference** in `project.yaml`, in the LEC
workflow, in `hardhat.config.ts`, in `scripts/` or in `test/`. The only remaining
mention is in `AUDIT_CRE_BASELINE_2026-07-25.md`, which describes it as the
starting template — a dated document, still accurate for its date.
