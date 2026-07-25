# Reality Floor — Clarification de la sémantique de signature v0.1

**Document :** `ADMISSION_SIGNATURE_SEMANTICS_CLARIFICATION_V01_2026-07-25.md`
**Date :** 2026-07-25
**Projet :** Legal Evidence Consensus by Coherix
**Statut :** CLARIFICATION PRÉALABLE À L’INTÉGRATION VERTICALE P0–P8

## 1. Motif

L’architecture historique et le gel du périmètre décrivent une vérification
Ed25519 effectuée directement sur les octets complets de l’instantané.

L’examen des artefacts réellement exécutés montre que cette formulation est
inexacte pour les instantanés E1 existants.

La présente clarification ne modifie aucun artefact historique. Elle précise le
contrat réellement démontrable pour le nouveau workflow vertical.

## 2. Faits observés

Pour l’instantané E1 v2 utilisé par P8 v0.7 :

- longueur de l’instantané : 20 345 octets UTF-8;
- SHA-256 de l’instantané :
  `9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf`;
- nombre d’événements : 44;
- racine déclarée :
  `b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e`;
- longueur de la charge signée canonique : 147 octets;
- SHA-256 de cette charge :
  `1424f0bf4179dab1f0766e72eedf784e2e6feb190424573355f3e7854e27546a`;
- vérification Ed25519 de la charge canonique : vraie;
- vérification Ed25519 des 20 345 octets complets : fausse;
- la signature est elle-même embarquée dans l’instantané;
- les 44 événements recalculés correspondent à leurs empreintes;
- la dernière empreinte d’événement correspond à la racine déclarée.

La charge Ed25519 canonique contient exactement :

- `n_events`;
- `registry_id`;
- `root`.

## 3. Sémantique corrigée

La signature Ed25519 authentifie l’attestation canonique de l’identité du
registre, du nombre d’événements et de sa racine.

Elle ne signe pas directement l’ensemble des octets du fichier JSON.

Le contenu est relié à cette racine par la chaîne d’empreintes des événements.
L’identité octet pour octet de l’instantané distribué est contrôlée séparément
par son SHA-256 préenregistré.

## 4. Ordre d’admission vertical v0.1

Le workflow vertical doit appliquer l’ordre suivant :

1. recevoir les octets UTF-8 exacts;
2. vérifier leur longueur attendue;
3. calculer leur SHA-256;
4. comparer ce SHA-256 à l’empreinte préenregistrée;
5. vérifier Ed25519 sur la charge d’attestation canonique détachée;
6. seulement ensuite analyser le JSON;
7. comparer les champs analysés aux métadonnées signées;
8. vérifier la signature embarquée contre la signature détachée;
9. recalculer les 44 empreintes d’événements dans leur ordre;
10. vérifier les séquences et les liens `prev_hash`;
11. vérifier que la dernière empreinte égale la racine signée;
12. seulement ensuite construire la vue et exécuter P5–P8.

Toute divergence arrête l’admission. Aucun verdict applicatif n’est produit.

## 5. Témoins négatifs obligatoires

Le harnais doit confirmer le rejet de chacun des cas suivants :

- empreinte d’instantané altérée;
- signature altérée d’un bit;
- charge d’attestation altérée;
- signature embarquée différente;
- séquence d’événement incorrecte;
- `prev_hash` incorrect;
- empreinte d’événement incorrecte;
- racine finale différente.

## 6. Portée de la preuve

Cette chaîne établit, sur les artefacts scellés :

- l’identité exacte de l’instantané par SHA-256 préenregistré;
- l’intégrité de la chaîne des événements;
- l’authenticité Ed25519 de l’attestation de racine;
- la correspondance entre le contenu recalculé et la racine signée.

Elle n’établit pas :

- une signature directe des 20 345 octets complets;
- la vérité juridique du contenu;
- un consensus BFT;
- une validité générale au-delà des artefacts et témoins exercés.

## 7. Décision

Le workflow vertical ne réutilisera pas silencieusement la formulation
« signature sur les mêmes octets ».

La communication publique utilisera plutôt :

> The workflow verifies the exact snapshot hash, reconstructs and validates the
> complete event-hash chain, and verifies the Ed25519-signed canonical root
> attestation before deterministic governance is allowed to run.

Les documents historiques restent inchangés. Cette clarification gouverne la
nouvelle intégration verticale P0–P8.
