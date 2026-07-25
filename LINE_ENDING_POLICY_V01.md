# Reality Floor — Line-Ending Policy v0.1

**Document:** LINE_ENDING_POLICY_V01.md
**Date:** 2026-07-25
**Status:** ACTIVE FOR NEW DEVELOPMENT

## Finding

The first local baseline commit was created while the effective Windows Git
setting was core.autocrlf=true and no .gitattributes file existed.

The Git index stored the tracked text files as LF, while the working tree
contained a mixture of LF, CRLF, and mixed files.

The three imported P5–P8 TypeScript modules were independently verified as
UTF-8 without BOM and LF-only before this policy was applied.

## Decision

- Repository-local core.autocrlf is set to false.
- Text files are checked out with LF through .gitattributes.
- Binary files are never line-ending normalized.
- Sealed evidence and canonical byte directories are treated as exact bytes.
- Existing global Git configuration is not modified.

## Provenance normalization

The newly created, uncommitted provenance document contained one CRLF ending
and 46 LF endings. It was normalized to LF before its first Git commit.

Pre-normalization SHA-256:

58779ec780e8fa7c92363ae73fa814e1f0f6223b0852abeaaa5faddb25d1e4c2

Post-normalization SHA-256:

4bee2d7fa4875ea8159299531751f7b4d5de7e58aec4a76a9744322faffb8e58

.gitattributes SHA-256:

a47fd232a5c29a5a9f14a4ed61dd6b169fae8a92738eece03471277ac71dd0dd

The three imported TypeScript module hashes remained unchanged.

## Scope

This policy prevents future platform-dependent line-ending drift. It does not
rewrite the historical baseline commit or alter any source logic.

## Exception scellée — `portee.ts`

`legal-evidence-consensus-workflow/portee.ts` contient volontairement un unique
octet NUL servant de séparateur entre `cle` et `categorie`.

Git peut donc le classifier comme binaire (`i/-text`). Cette classification est
attendue et ne constitue pas un échec de fins de ligne.

Ce fichier est conservé octet pour octet avec l’attribut `-text -eol`. Son
empreinte scellée doit demeurer :

`ff9a5c58ea03a16c751808bbb72a81768ca4556b33260761a0d42e836a5887ec`
