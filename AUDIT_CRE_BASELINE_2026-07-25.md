# Reality Floor — CRE Baseline Audit

**Document:** `AUDIT_CRE_BASELINE_2026-07-25.md`  
**Date:** 2026-07-25  
**Project:** Legal Evidence Consensus by Coherix  
**Status:** BASELINE CONFIRMED — TEMPLATE ONLY

## 1. Purpose

This audit records the exact state of `onchain-calculator` before development of
the Reality Floor CRE workflow.

The audit was performed without modifying source code, making a CanLII request,
writing to a blockchain, or exposing secret values.

## 2. Environment

- Windows / PowerShell
- CRE CLI: `1.26.0`
- Chainlink CRE TypeScript SDK: `1.16.0`
- Bun: `1.3.14`
- TypeScript: `5.9.3`
- Newer CRE CLI detected: `1.27.0`
- Update decision: deferred until official compatibility and release information
  are sufficiently clear.

## 3. Existing workflow

Workflow directory:

`my-calculator-workflow`

Current behavior:

- cron trigger every 30 seconds;
- logs `Hello world! Workflow triggered.`;
- returns `Hello world!`;
- no legal evidence input;
- no Reality Floor validation;
- no HTTP capability;
- no CRE evidence consensus logic;
- no EVM read;
- no EVM write;
- no smart-contract address;
- no receipt or evidence-manifest generation;
- no `PASS`, `CONFLICTING`, or `NON_VERIFIABLE` result.

Conclusion:

> The current workflow is the original CRE Hello World template.

## 4. Local validation

Existing template tests:

- tests executed: 3;
- passed: 3;
- failed: 0.

TypeScript validation:

- command: `bun run typecheck`;
- result: PASS;
- compiler errors: 0.

The template is therefore a clean and working technical starting point.

## 5. Blockchain configuration

Both `staging-settings` and `production-settings` currently reference:

- chain: `ethereum-testnet-sepolia`;
- RPC: public Sepolia endpoint.

No smart contract or EVM operation is configured.

The production target is not a real production configuration and must not be
represented as one.

## 6. Secrets and repository safety

- `.env` exists.
- Variable name detected: `CRE_ETH_PRIVATE_KEY`.
- Its value was not recorded or displayed.
- The value is not a standard 64-hexadecimal-character EVM private key.
- It remains classified as private configuration.
- `secrets.yaml` contains only the empty `secretsNames` declaration.
- Both workflow targets currently use an empty `secrets-path`.
- The project is not inside a Git repository.
- Existing `.gitignore` contains only `*.env`.
- Before any public repository is created, exclusions must cover at minimum:
  `.env`, `.env.*`, `secrets.yaml`, `node_modules`, generated CRE build files,
  logs, private evidence, and private keys.

## 7. Packaging state

`package.json` is still generic:

- name: `typescript-simple-template`;
- version: `1.0.0`;
- private: `true`;
- license: `UNLICENSED`;
- CRE dependency: `@chainlink/cre-sdk`;
- no EVM helper dependency is presently declared.

A public name, licence, README, and dependency policy remain to be decided.

## 8. Frozen baseline hashes

- `.gitignore`  
  `99e5f1f86d5214b765fda656bf46f87649a619b56656189d87422ee0088e748e`
- `project.yaml`  
  `0f82d0b0d1f0b83869be1586bab6100d210d0c26b9d5a78367d0f8779344bb56`
- `secrets.yaml`  
  `7b6f82299aa825c2792f3170bac93f096f77a7f4e0eb910d90106bc6afb24e26`
- `my-calculator-workflow/bun.lock`  
  `4ee96d1c17f31daede9e013fda64eeac9ec11c8e36ae0b558657644d8c491ab4`
- `my-calculator-workflow/config.production.json`  
  `7073c97672655796fe37a5f6bb0bea45fb5b6c4b953a730f64cf2b82706cbbfe`
- `my-calculator-workflow/config.staging.json`  
  `7073c97672655796fe37a5f6bb0bea45fb5b6c4b953a730f64cf2b82706cbbfe`
- `my-calculator-workflow/main.test.ts`  
  `98d73aa0c496a50c9af505e9b12220f79468a35876b0e9d65ca6e8ef981a0427`
- `my-calculator-workflow/main.ts`  
  `5baf56612e0407f92be4bd51e05a1bb632fe8c2db9ec32f1fd02ab9945121ca9`
- `my-calculator-workflow/package.json`  
  `17ee0800945a45de71853c1098b89367d11546cabeda3015a7a752921f1c825b`
- `my-calculator-workflow/README.md`  
  `15979b711543b4f94753bee7da7cd19f95e170736ff37b9b44c1ec4a7458f5c9`
- `my-calculator-workflow/tsconfig.json`  
  `6b178a766bc62529e1003e42c23ea59d6c6098650ce13dc0e7c35ef4c8df3038`
- `my-calculator-workflow/workflow.yaml`  
  `516556bf48d36191febffc7303dca430051dd23d07c7c7533259f2a0b87d24f7`

Excluded from the public baseline:

- `.env`;
- `node_modules`;
- `.cre_build_tmp.js`.

## 9. Audit decision

> The CRE environment is healthy and reproducible, but the Reality Floor
> workflow has not yet been implemented.

The project is ready for scope definition and controlled development.

It is not yet ready for final DoraHacks submission or for the Chainlink CRE
bounty.

## 10. Next gate

Before editing code:

1. freeze the v0.1 use case;
2. define inputs, outputs, and non-claims;
3. define `PASS`, `CONFLICTING`, and `NON_VERIFIABLE`;
4. define trust boundaries and fail-closed behavior;
5. choose the smallest defensible CRE-to-Sepolia demonstration;
6. preregister tests and stop conditions.
