[English version](CURRENT_STATUS.md)

# État actuel

**Date :** 2026-07-27
**S'applique à :** la tête de `main` à cette date. Les empreintes de commit sont
visibles dans l'historique Git ; ce document ne redit pas la sienne.

Les audits et gels de périmètre antérieurs — `AUDIT_CRE_BASELINE_2026-07-25.md`,
`SCOPE_FREEZE_LEGAL_EVIDENCE_CONSENSUS_V01_2026-07-25.md` et les autres documents
datés — décrivent l'état du projet **à leur date**. Ils n'ont pas été réécrits.
Le présent document est l'état actuel ; en cas d'écart, c'est lui qui fait foi.

## Terminé et vérifié localement

- **Gouverneur porté et exécuté.** 15 codes de défaut, verdicts `AUTORISE` /
  `REFORMULER` / `BLOQUE`. La sortie dépend de l'entrée : une valeur altérée
  donne `INCOMPATIBILITE_ETAT_VIVANT`, une source inventée `SOURCE_INCONNUE`, un
  extrait fabriqué `PREUVE_NON_CONCORDANTE`.
- **Parité P8 v0.7 : 93/93, 0 échec**, sous `cre workflow simulate`.
- **Workflow CRE v0.1 exécutable**, avec point d'entrée, configuration et
  concordance **2/2** avec l'oracle scellé.
- **Chaîne d'empreintes reproductible** : rapport sérialisé canonique, SHA-256
  identique octet pour octet.
- **Contrat `LegalEvidenceAnchor`** : 7 tests sur 7 passés sous Hardhat avant
  déploiement. Solidity 0.8.28, EVM Cancun, optimiseur activé, 200 runs.
- **Le digest ancré est égal au SHA-256 de l'instantané scellé**, et à la valeur
  attendue par `ADMISSION_FIXTURE_MANIFEST_V01.json`, préenregistré **avant** le
  déploiement. Vérifié hors ligne.
- **Hygiène du dépôt** : `.env` et `secrets.yaml` exclus, aucune clé ni URL RPC
  privée dans un fichier suivi.

## Démontré publiquement

- **Contrat déployé sur Ethereum Sepolia** :
  `0xEbdc99d629De5d19fBB18dD8A18Ab78091ddAba3`
- **Premier ancrage confirmé**, transaction
  `0x2a7636259f1e766ddf37fefc922159e544b44f918d05a145a2884a991574c34d`,
  bloc `11357728`, 2026-07-26T23:07:12Z, statut `success`.
- Reçus dans `anchors/`, en JSON et en Markdown.
- Vérification de source : Sourcify `successful` **selon Remix** — rapporté par
  l'outil, non revérifié indépendamment.

## Non démontré

- **Aucun consensus BFT.** Toutes les exécutions sont mononœud. Rien n'a été
  répliqué, rien n'a été voté, aucun DON n'a été utilisé.
- **Aucune validité juridique.** Le système ne dit pas ce qui est admissible, ni
  ce qui a force probante.
- **L'ancrage ne prouve pas la vérité du contenu**, ni la provenance réelle du
  document, ni l'identité humaine derrière l'adresse émettrice.
- **Aucune écriture ni lecture de la chaîne depuis le workflow CRE.** Le
  workflow produit l'empreinte ; l'ancrage a été fait séparément. La jonction
  automatique n'existe pas.
- **Aucun corpus juridique réel gouverné de bout en bout.** Le scellé CanLII
  Dunsmuir existe dans le dépôt parent mais n'est pas consommé par le workflow.
- **Aucune validation en conditions réelles.** L'article publié le dit lui-même :
  la validation en déploiement reste une question ouverte.
- **Aucune interface.** La démonstration passe par la ligne de commande.
- **Tous droits réservés.** La décision de licence est prise : aucun droit de
  réutilisation n'est accordé. Le dépôt est publiquement lisible et n'est **pas**
  open source. Rien ici ne peut être copié, modifié ou réutilisé sans
  autorisation écrite, et aucune licence de brevet n'est accordée. Voir
  `LICENSE`.

## Prochaine étape minimale pour la soumission

1. Retirer ou expliquer `my-calculator-workflow/` — **fait**, retiré au commit
   `c31523c`.
2. Choisir une licence — **fait**. Tous droits réservés ; voir `LICENSE`.
3. Pousser le dépôt sur GitHub — **fait** :
   <https://github.com/siucsystem-star/legal-evidence-consensus>
4. Enregistrer une démonstration courte : la simulation CRE sur les deux cas,
   puis la transaction d'ancrage sur Etherscan. **Reste à faire.**
5. Soumettre sur DoraHacks, date limite 2026-11-01. **Reste à faire.**

Rien dans cette liste n'exige de nouveau développement. Ce qui manque est de la
publication, pas de la recherche.

## `my-calculator-workflow/` — retiré

Le gabarit CRE « hello world » d'origine a été retiré au commit `c31523c`. Avant
retrait, il avait été vérifié qu'il n'existait **aucune référence** dans
`project.yaml`, dans le workflow LEC, dans `hardhat.config.ts`, dans `scripts/`
ni dans `test/`. La seule mention restante figure dans
`AUDIT_CRE_BASELINE_2026-07-25.md`, qui le décrit comme le gabarit de départ —
un document daté, qui reste exact pour sa date.
