[English version](CURRENT_STATUS.md)

# État courant

Date : 29 octobre 2026 (section 0.3 ajoutée; les sections 0.2 et v0.1 datent du
23 octobre). Le parcours historique v0.1, la démonstration contractuelle 0.2 et
le workflow ancré 0.3 restent séparés. Les audits et gels historiques restent datés.

## 0.3 — un workflow CRE, preuve HTTP + relecture Sepolia

Nouveau point d'entrée `anchor-main.ts`, cible `anchor-check-settings`. Il
récupère le paquet 0.2 signé par HTTPS depuis un commit immuable et examine les
12 affirmations (logique 0.2 inchangée), puis admet l'instantané scellé v0.1 et
relit son ancrage Sepolia existant par un **appel en lecture seule** `getAnchor`
au dernier bloc finalisé. Émetteur, empreinte, bloc et horodatage doivent tous
concorder.

**Lecture seule** : aucune transaction, aucun portefeuille, aucun secret, aucun
nouveau déploiement. L'ancrage porte l'empreinte de l'instantané v0.1; celle du
rapport 0.2 n'est pas ancrée.

**21 nouveaux tests passent**, dont le gestionnaire réel sous l'environnement de
test du SDK CRE (capacités HTTP et EVM simulées), la propagation d'un écart ou
d'un revert, et « un paquet altéré échoue avant toute lecture de chaîne ». Les
13 tests d'admission et les 37 tests contractuels passent toujours (71 au total,
zéro échec). La vérification TypeScript passe. Le workflow se compile en WASM
avec `cre-compile` (Javy), validation de compatibilité comprise. L'appel encodé
a été exécuté contre Sepolia par un RPC public (`eth_call` au bloc `finalized`,
29 octobre 2026); la réponse concorde avec le reçu du 26 juillet et sert de
fixture aux tests. Simulation `cre workflow simulate` de cette cible : voir
[VERIFICATION_ANCHOR_V03.json](VERIFICATION_ANCHOR_V03.json).

Aucun fichier gelé n'est modifié : gouverneur, portée, rapport, vecteurs
scellés, admission, contrat, tests du contrat, logique 0.2, `bun.lock` et licence.

## Extension contractuelle 0.2 — exécutée

Un contrat et un avenant fictifs en anglais fournissent 3 faits annotés et 12
affirmations structurées manuellement : tarif courant/périmé, citation absente ou
incorrecte, condition omise/modifiée, unité différente, deux horizons temporels
et formulation non prise en charge. Les empreintes exactes et la signature du
payload complet sont vérifiées avec une clé de démonstration, sans authentifier
un véritable signataire de contrat.

**50 tests passent : 37 nouveaux et 13 tests d'admission existants, zéro échec.**
La vérification TypeScript passe. Les simulations CRE/WASM réelles, embarquée et
HTTP, produisent le même rapport que le JSON local. HTTP reçoit un paquet figé
sur un commit GitHub, avec arrêt sur défaut et sans repli vers un succès embarqué.

L'interface anglaise du rapport a été vérifiée sur ordinateur et mobile pour les
12 cas, sans erreur de page ni débordement horizontal. Elle affiche un résultat
enregistré, sans nouvelle analyse à chaque clic. Deux fiches de lecture externes
vierges sont préparées; **aucune lecture externe n'est achevée**. Une visite
vidéo silencieuse de 58 secondes présente les captures du rapport calculé. Le
29 octobre, une version légendée de 71 secondes (écran titre, une légende par
cas, écran final; images d'origine non masquées) a été ajoutée dans
`docs/Legal_Evidence_Consensus_v0.3_Walkthrough.mp4`. Elle ne montre pas
l'exécution CRE 0.3.

Voir [le guide de reproduction](CONTRACT_DEMO_V02.md) et
[les preuves techniques](VERIFICATION_CONTRACT_V02.json).

## Historique v0.1 préservé

Le correctif d'admission du 23 octobre vérifie les octets de l'instantané,
l'attestation de racine Ed25519 et les 44 événements avant gouvernance.
L'extension ne modifie ni le gouverneur gelé, ni ses vecteurs, ni l'admission,
ni les modules portée/rapport, le contrat Solidity, ses tests ou la licence.
La simulation historique a été rejouée : 2/2, mêmes empreintes de rapports et
même WASM. Le résultat P8 93/93 reste historique, non rejoué ici. Les 7 tests
Hardhat du contrat inchangé avaient passé dans la revue précédente du 23 octobre.

L'ancrage Sepolia historique porte l'instantané v0.1, pas le nouveau rapport.
Aucune transaction nouvelle, aucun déploiement DON et aucun consensus BFT.

## Vidéos, dépôt et limites

La [vidéo v0.1 historique](https://drive.google.com/file/d/1ekUsWUq6MSm7QSFwHmPCXrOdXgb_QH8F/view?usp=sharing) est identifiée : même nom et même taille
de 27 203 766 octets que le fichier local examiné; sa page Drive s'ouvre sans
connexion. Elle ne présente pas les ajouts 0.2. La vidéo légendée est dans `docs/`.

Échéance DoraHacks : **31 octobre 2026 à 21 h 01 (UTC−4)**, soit le 1er novembre
à 01 h 01 UTC, selon la page de l'événement consultée le 29 octobre. L'événement
affiche une prime Chainlink « Best workflow with CRE », qui demande un workflow
CRE reliant au moins une blockchain à une API ou source externe, avec une
simulation réussie en ligne de commande; la cible 0.3 est conçue
pour cette exigence.
L'admissibilité relève du commanditaire et n'est pas revendiquée ici.

Ce contrôleur limité n'est pas une validation officielle Reality Floor. Il ne
comprend pas des contrats arbitraires et n'extrait pas automatiquement leurs
faits. Lecture indépendante, corroboration et validité juridique restent
NOT_ASSESSED; couverture intégrale NOT_MEASURED. Sources synthétiques, pas de
données ou code de Matt redistribués. Licence existante inchangée : tous droits
réservés, avec ses permissions de vérification; pas de licence open source OSI.
