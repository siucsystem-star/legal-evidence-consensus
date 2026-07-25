# Reality Floor — Note de classification Git de `portee.ts`

**Date :** 2026-07-25  
**Statut :** EXCEPTION EXACT-BYTE VALIDÉE

## Observation

- fichier : `legal-evidence-consensus-workflow/portee.ts`;
- UTF-8 strict : valide;
- fins de ligne réelles : LF;
- BOM : absent;
- octets NUL : 1;
- position de l’octet NUL : 3288;
- position caractère : 3238;
- ligne : 75;
- colonne : 26;
- ligne visible :
  `const k = x.cle + "[NUL]" + x.categorie;`

## Interprétation

Le NUL est un séparateur intentionnel entre `cle` et `categorie`.

Il était déjà présent dans la source P8 v0.7 scellée et exécutée avec une parité
QuickJS/WASM de 93/93. La copie est identique octet pour octet à cette source.

## Conséquence Git

La classification `i/-text w/-text` est attendue. Elle n’indique ni corruption
ni fins de ligne incorrectes.

Le fichier doit être préservé sans normalisation Git au moyen de la règle :

`legal-evidence-consensus-workflow/portee.ts -text -eol`

Aucune modification du NUL n’est autorisée.
