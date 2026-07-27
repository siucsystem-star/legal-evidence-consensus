[English version](README.md)

# Legal Evidence Consensus — Reality Floor

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
horodaté et signé. Le gouverneur rend un verdict — `AUTORISE`, `REFORMULER` ou
`BLOQUE` — accompagné de codes de défaut nommés parmi quinze : `VALEUR_PERIMEE`,
`SOURCE_INCONNUE`, `PREUVE_NON_CONCORDANTE`, `SECTION_NON_CONCORDANTE`, etc.

Le rapport produit est sérialisé de façon canonique, donc son SHA-256 est
reproductible octet pour octet. C'est cette empreinte qui est ancrée.

## Le chemin réellement démontré

```
instantané de preuve scellé  (SHA-256 9f694a38…, signé Ed25519, 44 événements)
        ↓
gouverneur  (mesurer → verdict + codes de défaut)
        ↓
portée      (ce qui est affiché, ce qui reste masqué)
        ↓
rapport canonique → SHA-256 reproductible
        ↓
simulation CRE  (Chainlink CRE, mononœud)
        ↓   ← étape manuelle distincte : le workflow n'appelle pas la chaîne
empreinte ancrée sur Ethereum Sepolia
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
bun install
cd ..
cre workflow simulate legal-evidence-consensus-workflow --target staging-settings
```

La sortie donne, pour chaque cas : identifiant, verdict, codes de défaut,
empreinte du lot, SHA-256 du rapport, et la concordance avec l'oracle. Elle
rappelle à chaque exécution qu'il s'agit d'une simulation mononœud sans ancrage.

### Le contrat et ses 7 tests

```bash
npm install
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
