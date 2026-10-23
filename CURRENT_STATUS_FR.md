[English version](CURRENT_STATUS.md)

# État courant

Date : 23 octobre 2026. Le parcours historique v0.1 et la nouvelle démonstration
contractuelle 0.2 restent séparés. Les audits et gels historiques restent datés.

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
vidéo silencieuse de 58 secondes présente les captures du rapport calculé.

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
connexion. Elle ne présente pas les ajouts 0.2. La nouvelle vidéo est distincte.

Le dépôt DoraHacks reste à effectuer; conditions particulières de la prime et
heure limite de la plateforme restent à confirmer.

Ce contrôleur limité n'est pas une validation officielle Reality Floor. Il ne
comprend pas des contrats arbitraires et n'extrait pas automatiquement leurs
faits. Lecture indépendante, corroboration et validité juridique restent
NOT_ASSESSED; couverture intégrale NOT_MEASURED. Sources synthétiques, pas de
données ou code de Matt redistribués. Licence existante inchangée : tous droits
réservés, avec ses permissions de vérification; pas de licence open source OSI.
