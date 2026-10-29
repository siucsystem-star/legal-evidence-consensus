[English version](README.md)

# Legal Evidence Consensus — Reality Floor

**Une citation exacte peut encore appuyer une conclusion fausse.** Un tarif vrai
en mars, un délai promis seulement pour les incidents de sévérité 1, un avenant
que personne ne connaissait encore : la source est intacte, la signature vérifie,
et l'affirmation construite dessus reste fausse. Ce prototype confronte des
affirmations juridiques structurées à une preuve signée et versionnée dans le
temps, dit exactement *pourquoi* une affirmation concorde ou non, et dit aussi
clairement ce qu'il n'a **pas** vérifié.

## Pour le jury — commencer ici

| Quoi | Où |
|---|---|
| Visite des 12 cas (contrat et avenant fictifs, en anglais) | [`docs/contract-demo.html`](https://siucsystem-star.github.io/legal-evidence-consensus/contract-demo.html) · [vidéo légendée](docs/Legal_Evidence_Consensus_v0.3_Walkthrough.mp4) |
| Fonctionnement, reproduction, limites | [`CONTRACT_DEMO_V02.md`](CONTRACT_DEMO_V02.md) |
| Un workflow CRE : preuve HTTP + relecture Sepolia | [plus bas](#un-workflow-cre--preuve-http--relecture-sepolia-03) |
| Ce qui est démontré, et ce qui ne l'est pas | [`CURRENT_STATUS_FR.md`](CURRENT_STATUS_FR.md) |
| Vidéo v0.1 (simulation CRE, Etherscan) | [Google Drive](https://drive.google.com/file/d/1ekUsWUq6MSm7QSFwHmPCXrOdXgb_QH8F/view?usp=sharing) |

**Les deux horloges.** Les cas 09 et 10 portent sur le *même jour* (2 avril 2026)
et concordent tous deux — avec des tarifs différents. L'avenant prend effet le
1er avril mais n'est connu que le 5 avril. Avec ce qu'on savait le 2 avril, le
tarif appuyé est de 8 400 $ CA; avec ce qu'on savait au 1er mai, il est de
9 100 $ CA. Les deux réponses sont justes pour leur horizon de connaissance, et
le contrôleur ne les confond jamais.

## Un workflow CRE : preuve HTTP + relecture Sepolia (0.3)

`anchor-check-settings` exécute un seul workflow Chainlink CRE qui touche deux
systèmes externes :

1. **HTTP** — récupère le paquet contractuel 0.2 signé depuis un commit Git
   immuable, vérifie son empreinte exacte et sa signature Ed25519, puis examine
   les 12 affirmations structurées (aucun repli vers des données embarquées).
2. **EVM (Ethereum Sepolia)** — admet l'instantané scellé v0.1 (empreinte des
   octets, attestation de racine signée, 44 événements), puis relit son ancrage
   existant par un appel `getAnchor` en lecture seule au dernier bloc finalisé,
   et exige que l'émetteur, l'empreinte, le bloc et l'horodatage concordent
   exactement.

```bash
cd legal-evidence-consensus-workflow
bun install --frozen-lockfile --ignore-scripts
bun run test:anchor
cd ..
cre workflow simulate legal-evidence-consensus-workflow --target anchor-check-settings --non-interactive --trigger-index 0
```

Lecture seule : aucune transaction, aucun portefeuille, aucun secret. L'ancrage
Sepolia porte **l'empreinte de l'instantané v0.1**; l'empreinte du rapport 0.2
n'est pas ancrée. Simulation mononœud; aucun consensus DON revendiqué.

---

*La description initiale du projet v0.1 suit.*

## v0.1 — description initiale

Distinguer *« quelqu'un l'a affirmé »* de *« une preuve l'appuie »*, et ancrer la
distinction de façon que personne — nous compris — ne puisse la réécrire après coup.

## Le problème

Dans un dossier juridique, deux phrases se ressemblent et ne valent pas la même chose :

> « On m'a dit que le plancher supporte 60 tonnes. »
> « Le plancher supporte 60 tonnes. »

La première rapporte une déclaration. La seconde énonce un fait. Un système qui
les traite pareil transforme une rumeur en donnée — silencieusement, et souvent
au moment où quelqu'un s'apprête à décider.

## La proposition

Reality Floor gouverne une affirmation contre un **instantané de preuve scellé**,
admis par son empreinte préenregistrée, sa chaîne d’événements et l’attestation
canonique de racine signée en Ed25519. Le gouverneur rend un verdict — `AUTORISE`, `REFORMULER` ou
`BLOQUE` — accompagné de codes de défaut nommés parmi quinze : `VALEUR_PERIMEE`,
`SOURCE_INCONNUE`, `PREUVE_NON_CONCORDANTE`, `SECTION_NON_CONCORDANTE`, etc.

Le rapport produit est sérialisé de façon canonique, donc son SHA-256 est
reproductible octet pour octet. Dans la démonstration Sepolia existante,
l’empreinte de **l’instantané** a été ancrée manuellement. Les empreintes des
rapports sont produites localement ; leur ancrage par le workflow n’est pas revendiqué.

## Le chemin réellement démontré

```
Simulation CRE mononœud :
instantané -> SHA-256 + attestation Ed25519 + 44 empreintes d’événements
        -> gouverneur -> portée d’affichage -> rapports canoniques + SHA-256

Démonstration Sepolia manuelle distincte :
SHA-256 de l’instantané -> LegalEvidenceAnchor -> relecture publique
```

Chaque étape du parcours présenté a été réellement exécutée. Les données de démonstration sont explicitement identifiées comme telles, et l'ancrage Sepolia a été effectué séparément du workflow CRE.

## Les deux cas de démonstration

Les deux portent sur la même clé, `tarif_service_principal`, contre le même
instantané scellé. Seule l'affirmation change.

| cas | verdict | codes de défaut | affichage |
|---|---|---|---|
| `vivant` | `AUTORISE` | aucun | « Affirmation conforme au plancher. » |
| `perime` | `BLOQUE` | `VALEUR_PERIMEE` | « Affirmation retenue (hallucination temporelle (valeur remplacée)). » |

Le second cas est le cœur de la démonstration : la valeur citée a réellement
existé, puis a été remplacée. Elle n'est pas fausse — elle est **périmée**. Un
système qui ne modélise pas le temps ne voit pas la différence.

Concordance avec l'oracle scellé : **2/2**.

## Reproduire

### La simulation CRE

```bash
cd legal-evidence-consensus-workflow
bun install --frozen-lockfile
cd ..
cre workflow simulate legal-evidence-consensus-workflow --target staging-settings
```

La sortie donne, pour chaque cas : identifiant, verdict, codes de défaut,
empreinte du lot, SHA-256 du rapport, et la concordance avec l'oracle. Elle
rappelle à chaque exécution qu'il s'agit d'une simulation mononœud sans ancrage.

### Contrôles d’admission

```bash
cd legal-evidence-consensus-workflow
bun run typecheck
bun run test:admission
cd ..
```

Les 13 contrôles couvrent notamment les octets altérés, les signatures détachée
et embarquée invalides, l’attestation modifiée, les séquences/liens/empreintes
d’événements incorrects et une racine finale différente. Les tests intégrés
exigent un rejet avant tout verdict. La signature est recalculée à chaque
exécution ; le booléen historique `verifies` n’est pas une vérification.
Les empreintes des deux rapports valides restent identiques.

### Le contrat et ses 7 tests

```bash
npm ci
npx hardhat compile
npx hardhat test
```

Les sept contrôles portent sur : ancrage d'une empreinte valide ; lecture exacte
de l'émetteur, de l'empreinte, du bloc et de l'horodatage ; émission de
l'événement ; refus de l'empreinte nulle ; refus du doublon par la même adresse ;
ancrage indépendant par une seconde adresse ; absence de toute fonction de
suppression ou de modification dans l'ABI.

## Sur la chaîne

- **Contrat** `LegalEvidenceAnchor` — [`0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3`](https://sepolia.etherscan.io/address/0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3)
- **Premier ancrage** — [`0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d`](https://sepolia.etherscan.io/tx/0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d)
- Bloc `11357728`, 2026-07-26T23:07:12Z, Ethereum Sepolia (chainId `11155111`)

Le digest ancré est **égal au SHA-256 de l'instantané de preuve scellé** que
consomme le workflow. Le lien est vérifiable hors ligne : voir `anchors/`.

Le contrat n'a que trois fonctions, dont une seule écrit. Aucune suppression,
aucune modification, aucun propriétaire, aucune mise à niveau.

## Limites

- **Simulation mononœud. Aucun consensus BFT.** Un seul nœud a exécuté le
  workflow ; rien n'a été répliqué ni voté.
- **L'ancrage ne prouve pas la vérité du contenu.** Il établit qu'une adresse a
  soumis cette empreinte à ce bloc — une datation attribuée, rien de plus. Ni
  validité juridique, ni provenance réelle, ni identité humaine derrière
  l'adresse.
- **L'ancrage borne le plus tard, jamais le plus tôt.** Il ne dit pas que
  l'instantané existait avant ce bloc.
- **Sepolia est un réseau de test** : aucune valeur, aucune garantie de
  pérennité de l'historique.
- La vérification de source Sourcify est **rapportée par Remix**, non revérifiée
  indépendamment.

## Structure utile

```
contracts/LegalEvidenceAnchor.sol      le contrat d'ancrage
test/LegalEvidenceAnchor.test.ts       les 7 contrôles
scripts/                               déploiement et lecture (viem)
anchors/                               reçus du premier ancrage, JSON et Markdown
legal-evidence-consensus-workflow/
    main.ts                            point d'entrée CRE
    gouverneur.ts                      15 codes de défaut, verdicts
    portee.ts                          ce qui est affiché ou masqué
    rapport.ts                         sérialisation canonique et empreintes
    vecteurs_p8_v07.ts                 instantané scellé + oracle (ne pas modifier)
    admission_fixture_v01.ts           fixture d'admission préenregistrée
SCOPE_FREEZE_… / AUDIT_… (dépôt parent) gels de périmètre et audits datés
CURRENT_STATUS.md / _FR.md             état actuel, distinct des audits datés
```

## Statut

Prototype de recherche pour le BLI Legal Tech Hackathon 2. Voir
[`CURRENT_STATUS_FR.md`](CURRENT_STATUS_FR.md) pour ce qui est démontré et ce qui ne
l'est pas.

## Licence

Copyright (c) 2026 Systèmes de cohérence Coherix inc. **Tous droits réservés.**

Ce dépôt est publié pour être **lu et vérifié**, non réutilisé.

Sont permis : le lire ; le consulter et le forker à l'intérieur de GitHub, comme
le prévoient les conditions d'utilisation de GitHub ; le cloner ou le télécharger
et effectuer les copies techniques nécessaires pour installer ses dépendances et
l'exécuter localement, aux seules fins de contrôler les résultats énoncés ; en
citer de courts extraits avec attribution.

Republier, mettre en miroir ou redistribuer hors d'un fork GitHub, modifier,
intégrer à un autre projet ou utiliser comme données d'entraînement exigent une
autorisation écrite préalable. **Aucune licence de brevet n'est accordée.**

Les dépendances tierces demeurent régies par leurs propres licences ; le présent
avis ne les remplace pas.

Être lisible publiquement n'est pas être open source. Ce dépôt ne porte aucune
licence approuvée par l'OSI, et c'est une décision, pas un oubli. Texte complet :
[`LICENSE`](LICENSE).
