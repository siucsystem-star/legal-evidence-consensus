[Version française](CURRENT_STATUS_FR.md)

# Current status

Date: October 29, 2026 (0.3 section added; the 0.2 and v0.1 sections below are
as of October 23). This document separates the original v0.1 workflow, the
contract demonstration 0.2 and the 0.3 anchored workflow. Historical freezes and
audits retain their meaning at their own dates; they have not been rewritten.

## 0.3 — one CRE workflow, HTTP evidence + Sepolia read-back

- New entry point `anchor-main.ts`, target `anchor-check-settings`. It fetches
  the signed 0.2 package over HTTPS from an immutable commit and reviews the 12
  claims (unchanged 0.2 logic), then admits the sealed v0.1 snapshot and reads
  its existing Sepolia anchor with a `getAnchor` **view call** at the last
  finalized block. Submitter, digest, block and timestamp must all match.
- **Read-only.** No transaction, no wallet, no secret, no new deployment. The
  anchor concerns the v0.1 snapshot digest; the 0.2 report digest is not anchored.
- **21 new tests pass**, including the real handler under the CRE SDK test
  runtime with HTTP and EVM capability mocks, mismatch and revert propagation,
  and "altered package fails before the chain is read". The 13 admission and 37
  contract tests still pass (71 total, 0 failures). Typecheck passes.
- The workflow compiles to WASM with the SDK's `cre-compile` (Javy), including
  its runtime-compatibility validation.
- The encoded call was executed against Ethereum Sepolia through a public RPC
  (`eth_call` at `finalized`, 2026-10-29); the reply matches the July 26 receipt
  and is recorded as the test fixture.
- **`cre workflow simulate` with this target passed** on October 29 (CRE CLI
  1.26.0, Bun 1.4.4, Windows): `ANCHOR_MATCHES_SNAPSHOT` at block 11357728,
  44 event hashes verified, 12/12 outcomes equal to the developer expectations,
  and the contract report SHA-256 identical to the October 23 record
  (`d3d6c1d2…`). Record: [VERIFICATION_ANCHOR_V03.json](VERIFICATION_ANCHOR_V03.json);
  log: [`review-evidence/`](review-evidence/CRE_SIMULATION_ANCHOR_CHECK_2026-10-29.txt).
- No frozen file is modified: governor, scope, report, sealed vectors, admission,
  contract, contract tests, 0.2 review logic, `bun.lock` and licence are unchanged.

## Contract demonstration 0.2 — executed

- A fictional English service agreement and amendment supply 3 manually
  annotated facts and 12 manually structured claims. The checker demonstrates
  current/superseded fees, missing or incorrect citations, omitted or changed
  conditions, incompatible units, two temporal horizons and unsupported wording.
- Exact package/document hashes and an Ed25519 signature over the complete
  payload are checked. The pinned key is a demonstration key, not a verified
  contracting-party identity.
- **37 new tests and 13 existing admission tests pass (50 total, 0 failures).**
  TypeScript checks pass. Node crypto separately verifies the payload signature.
- The **actual CRE/QuickJS-WASM simulator passes in embedded and HTTP modes**;
  both return the same full report as the locally generated JSON. HTTP fetches
  the package from an immutable Git commit and rejects failed or altered input
  without falling back to an embedded successful result.
- The generated English report viewer was checked across all 12 cases, on
  desktop and mobile, with no page errors or horizontal overflow. It displays
  stored results; it does not make a live model or legal assessment.
- A shuffled answer-free packet and two blank reader sheets are prepared.
  **External readings completed: 0** (as of October 29). Expectations are developer-authored.
- A silent 58-second walkthrough is generated from the report viewer's actual
  screenshots. It is a report walkthrough, not a live terminal recording. On
  October 29 the report viewer was restyled to the Coherix visual identity
  (layout and typography only; content, data and script unchanged, and
  `docs/contract-report.json` byte-identical), rechecked on desktop and mobile
  for all 12 cases with no page errors or horizontal overflow, and a captioned
  69-second walkthrough regenerated from it (title card, one caption per case,
  closing card) was added as `docs/Legal_Evidence_Consensus_v0.3_Walkthrough.mp4`.
  It does not show the 0.3 CRE run.

Reproduction and scope: [CONTRACT_DEMO_V02.md](CONTRACT_DEMO_V02.md).
Machine-readable evidence: [VERIFICATION_CONTRACT_V02.json](VERIFICATION_CONTRACT_V02.json).

## Preserved v0.1 workflow

The October 23 admission correction verifies pinned snapshot bytes, the detached
registry-root attestation and all 44 event hashes before governance. The original
governor, scope module, report module, sealed vectors, admission fixture, contract,
tests and licence are unchanged by the 0.2 extension.

The original CRE simulation was rerun: **2/2 oracle agreement**, identical prior
report hashes and WASM hash. The historical **P8 93/93** result remains a historical
result; that separate suite was not rerun in this review. The unchanged Solidity
contract passed its 7 Hardhat tests in the preceding October 23 review; no further
contract change or new deployment was made.

The existing Sepolia transaction manually anchors the **v0.1 snapshot digest**:
[transaction](https://sepolia.etherscan.io/tx/0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d).
It does not anchor the new contract report or package. No new blockchain
transaction, DON deployment or multi-node BFT consensus is claimed.

## Video and submission

The [historical v0.1 video](https://drive.google.com/file/d/1ekUsWUq6MSm7QSFwHmPCXrOdXgb_QH8F/view?usp=sharing) is now identified on Drive; filename and
27,203,766-byte size match the reviewed local file, and its viewer was reached
without signing in. It does not show the 0.2 extension. The captioned walkthrough
is in `docs/`.

The DoraHacks submission deadline is **2026-10-31 21:01 (UTC−4)**, i.e.
2026-11-01 01:01 UTC, as shown on the event page on October 29. The event lists
a Chainlink bounty, "Best workflow with CRE", which asks for a CRE workflow that
integrates at least one blockchain with an external API or data source and a
successful CLI simulation; the 0.3 target was built for that requirement and
its CLI simulation passed.
Eligibility is decided by the sponsor, not claimed here.

## Explicit limits

The new structured checker is separate from the official Reality Floor core.
It supports closed templates, not arbitrary contract interpretation or automatic
fact extraction. It keeps independent reading, corroboration and legal validity
as NOT_ASSESSED and full-document coverage as NOT_MEASURED. All sources are
synthetic; a correct quote or signature does not establish truth. No Matt research
code or data is redistributed. The public repository remains all rights reserved,
with its existing verification permissions; it is not OSI open source.
