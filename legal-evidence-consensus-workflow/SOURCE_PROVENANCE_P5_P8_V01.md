# Reality Floor — P5–P8 Source Provenance

**Document:** `SOURCE_PROVENANCE_P5_P8_V01.md`
**Date:** 2026-07-25
**Target:** `legal-evidence-consensus-workflow`
**Status:** VERIFIED CORE SEED — NOT YET EXECUTABLE

## Imported modules

The following modules were copied byte-for-byte from the sealed
`p8v07-workflow` source:

- `gouverneur.ts`
  - SHA-256:
    `2891fc1021cda4807f82095c5a5b1e7fb23ed5fe5b33a40865649df1594b6265`
- `portee.ts`
  - SHA-256:
    `ff9a5c58ea03a16c751808bbb72a81768ca4556b33260761a0d42e836a5887ec`
- `rapport.ts`
  - SHA-256:
    `42a0459d8aa22b3dda1e8c2418d3bbc7e68511e808d318fc977cd805e4575bc5`

The source P8 parity manifest has SHA-256:

`b19aebd09909d02ee8ce55a127346e04516adfe8bb7106b3da6c5e336151329a`

The recorded source result is 93/93 under QuickJS/WASM.

## Deliberately not imported at this gate

- `main.ts`;
- `vecteurs_p8_v07.ts`;
- snapshot or registry contents;
- workflow configuration;
- dependencies or `node_modules`;
- generated CRE artifacts;
- P0–P4 admission code;
- EVM write code;
- private configuration.

## Interpretation

This import preserves the validated deterministic governance, scope, and report
implementation as a starting point.

It does not yet establish a complete P0–P8 workflow, a new CRE simulation,
consensus, legal truth, an onchain write, or deployment readiness.
