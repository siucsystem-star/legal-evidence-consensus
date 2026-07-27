# Legal Evidence Consensus — premier ancrage Sepolia

**Document :** `ANCHOR_RECEIPT_SEPOLIA_V01_2026-07-26.md`
**Date :** 2026-07-26
**Statut :** PREMIER ANCRAGE CONFIRMÉ

## Les faits

| | |
|---|---|
| réseau | Ethereum Sepolia, chainId `11155111` |
| contrat | `0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3` |
| transaction | `0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d` |
| statut | `success` |
| fonction | `anchor(bytes32)` |
| événement | `EvidenceAnchored` |
| émetteur | `0xbf6013d4CeD10ecf794527a60AF7cd57A73ab18f` |
| digest | `0x9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf` |
| bloc | `11357728` |
| horodatage | `1785107232` — 2026-07-26T23:07:12Z |

Explorateur :
<https://sepolia.etherscan.io/tx/0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d>

## Construction

Solidity `0.8.28`, EVM Cancun, optimiseur activé, `runs: 200`.
Tests locaux : **7/7 passés sous Hardhat avant le déploiement**.
Vérification de source : **Sourcify successful**, selon Remix — rapporté par
l'outil, non revérifié indépendamment ici.

Source ancrée dans le dépôt : `contracts/LegalEvidenceAnchor.sol`,
SHA-256 `5fabe7a29a7b855cc2f5934e2226b22eb5fd9bc808da4c4884c574e54f966d78`.
L'ABI ne porte que trois fonctions — `anchor`, `getAnchor`, `isAnchored` — dont
une seule écrit. Aucune suppression, aucune modification, aucun propriétaire.

## Ce que le digest résume

Le digest ancré **n'est pas un nombre arbitraire**. Il est égal, octet pour
octet, au SHA-256 de l'instantané de preuve scellé utilisé par le workflow CRE :

- fichier : `INSTANTANE_E1_V2_SCELLE/instantane_e1_v2.json` — 20 345 octets ;
- racine déclarée : `b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e` ;
- même valeur attendue par `ADMISSION_FIXTURE_MANIFEST_V01.json`, préenregistré
  le 25 juillet, **avant** ce déploiement.

Vérifié localement au moment d'écrire ce reçu, sans aucun appel réseau.

## Ce que l'ancrage établit

Que l'adresse `0xbf6013d4…` a soumis ce digest à ce contrat, au bloc
`11357728`. C'est une **datation attribuée** : une borne temporelle supérieure,
publique et non réécrivable.

## Ce que l'ancrage n'établit pas

- que le contenu résumé par le digest est vrai, exact ou complet ;
- une validité juridique, une admissibilité ou une force probante ;
- la provenance réelle du document, ni l'identité humaine derrière l'adresse ;
- que l'empreinte a été calculée sur le document prétendu ;
- un consensus BFT sur le **contenu** — la chaîne constate une transaction,
  elle ne vérifie pas ce que l'empreinte résume ;
- que l'instantané existait **avant** ce bloc : l'ancrage borne le plus tard,
  jamais le plus tôt ;
- la qualité de la gouvernance menée hors chaîne.

Une empreinte ancrée par une adresse honnête et une empreinte ancrée par une
adresse malveillante sont indiscernables ici.

## Portée du réseau

Sepolia est un réseau de test : aucune valeur économique, et aucune garantie de
pérennité de l'historique. Un ancrage de test ne se présente pas comme un
ancrage de production.
