[Version française](README_FR.md)

# Legal Evidence Consensus — Reality Floor

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

Reality Floor governs a claim against a **sealed evidence snapshot**, timestamped
and signed. The governor returns a verdict — `AUTORISE`, `REFORMULER` or
`BLOQUE` — together with named defect codes drawn from fifteen:
`VALEUR_PERIMEE`, `SOURCE_INCONNUE`, `PREUVE_NON_CONCORDANTE`,
`SECTION_NON_CONCORDANTE`, and others.

The resulting report is canonically serialised, so its SHA-256 is reproducible
byte for byte. That digest is what gets anchored.

*(Identifiers are kept in French: they are the actual constants in the code.)*

## The path actually demonstrated

```
sealed evidence snapshot  (SHA-256 9f694a38…, Ed25519-signed, 44 events)
        ↓
governor  (mesurer → verdict + defect codes)
        ↓
scope     (what is shown, what stays withheld)
        ↓
canonical report → reproducible SHA-256
        ↓
CRE simulation  (Chainlink CRE, single node)
        ↓   ← separate manual step: the workflow does not call the chain
digest anchored on Ethereum Sepolia
```

Every step of the path shown above was actually executed. The demonstration data
is explicitly identified as such, and the Sepolia anchoring was performed
separately from the CRE workflow.

## The two demonstration cases

Both concern the same key, `tarif_service_principal`, against the same sealed
snapshot. Only the claim changes.

| case | verdict | defect codes | displayed |
|---|---|---|---|
| `vivant` | `AUTORISE` | none | "Affirmation conforme au plancher." |
| `perime` | `BLOQUE` | `VALEUR_PERIMEE` | "Affirmation retenue (hallucination temporelle (valeur remplacée))." |

The second case is the heart of the demonstration: the quoted value did exist,
then was superseded. It is not false — it is **stale**. A system that does not
model time cannot see the difference.

Agreement with the sealed oracle: **2/2**.

## Reproducing

### The CRE simulation

```bash
cd legal-evidence-consensus-workflow
bun install
cd ..
cre workflow simulate legal-evidence-consensus-workflow --target staging-settings
```

For each case the output gives: identifier, verdict, defect codes, batch digest,
report SHA-256, and agreement with the oracle. On every run it restates that this
is a single-node simulation with no anchoring.

### The contract and its 7 tests

```bash
npm install
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

`my-calculator-workflow/` is the original CRE template. It takes no part in the
demonstration.

## Status

Research prototype for the BLI Legal Tech Hackathon 2. See
[`CURRENT_STATUS.md`](CURRENT_STATUS.md) for what is demonstrated and what is
not.

No licence has yet been chosen for this repository.
