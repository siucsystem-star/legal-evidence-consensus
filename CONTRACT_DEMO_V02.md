# Contract review demonstration 0.2

This extension makes the limits of evidence review visible through a fictional
service agreement and amendment. The current fee matches; an old citation does
not; a 30-minute acknowledgement promise loses support when its severity-one
condition is removed. Two further cases use the same effective date with
different knowledge horizons. All documents, annotations and cases are authored
for the demonstration, in English. No client contract or Matt research material
is redistributed.

## Run it

Use the dependencies already pinned in `legal-evidence-consensus-workflow/bun.lock`
(Bun 1.4.4 used in this review). From that directory:

```sh
bun install --frozen-lockfile --ignore-scripts
bun run typecheck
bun run test:admission
bun run test:contract
bun run demo:contract
```

Open `docs/contract-demo.html` locally. It displays an actual generated report;
clicking a case changes the displayed stored result, not a live calculation.
The generator checks its output against the developer-authored expectations.

From the repository root, run the actual CRE simulator (CLI 1.26.0 / SDK 1.16.0
used; a configured CRE account and network access are needed):

```sh
cre workflow simulate legal-evidence-consensus-workflow --target contract-settings --non-interactive --trigger-index 0
cre workflow simulate legal-evidence-consensus-workflow --target contract-http-settings --non-interactive --trigger-index 0
```

Neither command broadcasts a transaction. The first uses embedded package bytes;
the second fetches the same package via HTTPS from an immutable Git commit. The
source is restricted to this repository and exact file path. A failed request,
unexpected status, wrong length, changed digest or invalid signature raises an
error, with no fallback to an embedded successful result. The installed CLI
requires an RPC setting even though this extension uses no EVM capability.

## What changed, and what did not

`contract-review.ts` is a new, deliberately limited structured checker. It is
not an update of the frozen Reality Floor governor, nor evidence that all of
Reality Floor is integrated into CRE. The historical v0.1 entry point, 15 defect
codes, sealed vectors, original admission logic and existing Sepolia anchor are
preserved. The two workflow targets remain separate and can be reproduced.

The extension checks the complete new payload's Ed25519 signature against a
pinned **demonstration public key**, plus exact envelope and document hashes.
The ephemeral private key was not saved. That establishes continuity with this
published package, not the identity or consent of a real contracting party.
This new signature scope differs from v0.1's signed registry-root attestation.

The checker compares manually structured claims against manually structured
facts, their exact quotations, units, conditions and two dates. It recognizes
only closed wording templates for monthly fees and acknowledgement delays.
It does not extract or understand arbitrary contractual language. An extra
free-text promise outside those templates is reported as outside scope even
when the attached numeric annotations match. No implicit unit conversion or
general reasoning about logical equivalence is performed.

The new labels are local to this demonstration:

| Result | Meaning |
|---|---|
| `MATCHES_REGISTER` | Matches the applicable registered fact and checked fields |
| `DOES_NOT_MATCH_REGISTER` | A supported comparison found a mismatch |
| `INSUFFICIENT_EVIDENCE` | Required evidence is missing, ambiguous or inapplicable |
| `OUTSIDE_SUPPORTED_SCOPE` | The input exceeds the declared schema or templates |

They are **not** official Reality Floor verdicts or decisions on admissibility
in a court. Every result keeps independent reading, corroboration and legal
validity as `NOT_ASSESSED`; full-document coverage is `NOT_MEASURED`. A source
being correctly quoted does not establish that its content is true.

## Verification and external review

The 12 expectations were fixed locally before the first candidate execution.
This is a developer-authored freeze, not independent preregistration or a
trusted timestamp. The 37 extension tests exercise quotation and condition
errors, temporal cases, tampering, real signature checks, malformed input and
transport failures. Node's separate crypto implementation also verifies the
complete payload signature. The 13 existing admission tests still pass.
These counts are engineering checks, not field accuracy or legal validation.

`review-packet/` supplies two blank reader sheets, the source text, a shuffled
set of cases and instructions. No external reading is completed or implied.
The full public repository contains expectations, so blinding depends on
procedural separation, not access control. Return independent readings before
consulting generated results; preserve disagreements.

See `docs/contract-report.json` for the full machine-readable result and
`docs/contract-demo.html` for the English walkthrough. The new report digest
is **not** the digest in the historical Sepolia transaction. No new onchain
publication, DON deployment or multi-node consensus is claimed.

Public v0.1 video (historical demonstration):
<https://drive.google.com/file/d/1ekUsWUq6MSm7QSFwHmPCXrOdXgb_QH8F/view?usp=sharing>.
The filename and 27,203,766-byte size match the previously inspected local
video; the Drive viewer was accessible without signing in on October 23.
That older video does not demonstrate the new contract checker.

Reference for the HTTP capability:
<https://docs.chain.link/cre/guides/workflow/using-http-client/get-request-ts>.
Event-specific bounty eligibility is still unconfirmed.
