// VECTEURS P8 v0.7 — genere depuis les fichiers SCELLES. NE PAS MODIFIER A LA MAIN.
// Oracle P8 : VECTEURS_P8_V07 (lie a l'instantane E1 v2 persiste).
// V06 demeure l'artefact HISTORIQUE et n'est pas embarque ici comme oracle actif.
// Empreintes verifiees a la generation :
//   9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf  instantane_e1_v2.json
//   b3f72ceda7bc25d4e1f93932851e48442f07b5d8fdc8ef3c5af2a1250dca8765  cle_publique_e1_v2.pem
//   b9eb6eb376b5a728485032c7f0463f18237eef68c1375d5c7b1e25ab50ce3319  VECTEURS_P8_V07_E1_V2.json
//   b42e8b45e008760b1f7b71c77845a1ed8e8e18eb02dd14606cc485dea3633398  VECTEURS_PARITE_V01.json
//   d50e594175c18ba3508fc27f48ddc7843b007ffcc12ed5e97b6da368d3be00f9  VECTEURS_GOUVERNANCE_V02.json
//   280dfa4ce2b3c229915b3811d5cf10e127e33b9b53a4935308dbece4676c6db5  VECTEURS_P8_V06.json

export const V = {
 "INSTANTANE_E1_V2": {
  "cle_publique_pem": "-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEA/3gM+wljFzAAW5oqijLR6uM5V75ytZs5fH4EMphVM4c=\n-----END PUBLIC KEY-----\n",
  "declared_root": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
  "instantane_utf8": "{\"declared_root\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"events\": [{\"data\": \"{\\\"doc_hash\\\": \\\"dd5e5506770d583f6254884de7a08d37fa65acc9f1ce3b61d6592ee4a9f53ced\\\", \\\"source_id\\\": \\\"DOC-4A\\\"}\", \"hash\": \"385c402641506612092385a3e13fbf29da0f7e8f111f718d3977585d4e662a0b\", \"prev_hash\": \"GENESIS\", \"seq\": 1, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"691bbd7aa8d7f43260a9f57afb078a5328d13f43469db348c1ae147aa149fd4e\\\", \\\"source_id\\\": \\\"DOC-4B\\\"}\", \"hash\": \"2e048683f9711cb163193b91f085dd90c9a6a030f2de6f0f7e7ac5db76546d79\", \"prev_hash\": \"385c402641506612092385a3e13fbf29da0f7e8f111f718d3977585d4e662a0b\", \"seq\": 2, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"fcfd6d956ffd908d2fe1de38cbe46ff2f0432d88e8269bace3b04ec8fe758c73\\\", \\\"source_id\\\": \\\"DOC-4C\\\"}\", \"hash\": \"35255540e8872596477d0e915f41cea9bb787752d3e2b70b5fafd714b45d825c\", \"prev_hash\": \"2e048683f9711cb163193b91f085dd90c9a6a030f2de6f0f7e7ac5db76546d79\", \"seq\": 3, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"source_id\\\": \\\"DOC-4D\\\"}\", \"hash\": \"66be386402ab8d62d4dec2cd75eaf5fc303c545ea61844f487996b0a88a9a96e\", \"prev_hash\": \"35255540e8872596477d0e915f41cea9bb787752d3e2b70b5fafd714b45d825c\", \"seq\": 4, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"source_id\\\": \\\"DOC-4E\\\"}\", \"hash\": \"b626a3b5425e2044e72565c918f9a63e49484739ee127dc13e884c65753043c5\", \"prev_hash\": \"66be386402ab8d62d4dec2cd75eaf5fc303c545ea61844f487996b0a88a9a96e\", \"seq\": 5, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\"}\", \"hash\": \"afcb2e88fb6e8c7f1ffad1eb9d49b15c56bd9efd4e79f41926ff7757095dd1be\", \"prev_hash\": \"b626a3b5425e2044e72565c918f9a63e49484739ee127dc13e884c65753043c5\", \"seq\": 6, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\"}\", \"hash\": \"9a39a878af3719b5a3e1c4cb17284988f0912b3e046eaed7c379d3b2bfaecdcd\", \"prev_hash\": \"afcb2e88fb6e8c7f1ffad1eb9d49b15c56bd9efd4e79f41926ff7757095dd1be\", \"seq\": 7, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.fenetre\\\"}\", \"hash\": \"8b40304c6afc9680f9d79e639535a3aeb4b7884d009dbb1959828721708451b1\", \"prev_hash\": \"9a39a878af3719b5a3e1c4cb17284988f0912b3e046eaed7c379d3b2bfaecdcd\", \"seq\": 8, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\"}\", \"hash\": \"c9e8d3a16675f0c6dea296b38dd277b6478f126f30346a59718272d23cd65414\", \"prev_hash\": \"8b40304c6afc9680f9d79e639535a3aeb4b7884d009dbb1959828721708451b1\", \"seq\": 9, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"dd5e5506770d583f6254884de7a08d37fa65acc9f1ce3b61d6592ee4a9f53ced\\\", \\\"extrait\\\": \\\"migrer vers la version 4.2\\\", \\\"known_from\\\": 20260210, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avis\\\", \\\"source_id\\\": \\\"DOC-4A\\\", \\\"valeur\\\": \\\"4.2\\\", \\\"valid_from\\\": 20260210, \\\"valid_until\\\": null}\", \"hash\": \"d55da5efb3fe4deeb002c1bf3fb80366099c69274c2d3d971a08e4134357139c\", \"prev_hash\": \"c9e8d3a16675f0c6dea296b38dd277b6478f126f30346a59718272d23cd65414\", \"seq\": 10, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"fcfd6d956ffd908d2fe1de38cbe46ff2f0432d88e8269bace3b04ec8fe758c73\\\", \\\"extrait\\\": \\\"la version recommandée est la 4.3\\\", \\\"known_from\\\": 20260303, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r1\\\", \\\"source_id\\\": \\\"DOC-4C\\\", \\\"valeur\\\": \\\"4.3\\\", \\\"valid_from\\\": 20260303, \\\"valid_until\\\": null}\", \"hash\": \"18a5824ffa0e0e67a2487871f96c15baa38dea8b6463d6a9b6ef1cb910997335\", \"prev_hash\": \"d55da5efb3fe4deeb002c1bf3fb80366099c69274c2d3d971a08e4134357139c\", \"seq\": 11, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"extrait\\\": \\\"La version validée par l'équipe sécurité est la 4.3.1\\\", \\\"known_from\\\": 20260321, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r2\\\", \\\"source_id\\\": \\\"DOC-4D\\\", \\\"valeur\\\": \\\"4.3.1\\\", \\\"valid_from\\\": 20260321, \\\"valid_until\\\": null}\", \"hash\": \"0679bac6d05a9e768529a2fcc4715921027ec6ae1b07227d97474159a31221e8\", \"prev_hash\": \"18a5824ffa0e0e67a2487871f96c15baa38dea8b6463d6a9b6ef1cb910997335\", \"seq\": 12, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\", \\\"cle\\\": \\\"paie_compatibilite\\\", \\\"doc_hash\\\": \\\"691bbd7aa8d7f43260a9f57afb078a5328d13f43469db348c1ae147aa149fd4e\\\", \\\"extrait\\\": \\\"Module Paie : compatible jusqu'à la version 4.2 inclusivement, via l'interface de paie standard\\\", \\\"known_from\\\": 20260101, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"matrice\\\", \\\"source_id\\\": \\\"DOC-4B\\\", \\\"valeur\\\": \\\"jusqu'à 4.2 via l'interface de paie standard\\\", \\\"valid_from\\\": 20260101, \\\"valid_until\\\": null}\", \"hash\": \"77af56d917887f534660a01bf86b1234595d70b6c034d628428ed576e1ec8b59\", \"prev_hash\": \"0679bac6d05a9e768529a2fcc4715921027ec6ae1b07227d97474159a31221e8\", \"seq\": 13, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\", \\\"cle\\\": \\\"paie_compatibilite\\\", \\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"extrait\\\": \\\"le connecteur Paie v2, livré à partir de la version 4.3, remplace l'interface de paie standard\\\", \\\"known_from\\\": 20260321, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r2\\\", \\\"source_id\\\": \\\"DOC-4D\\\", \\\"valeur\\\": \\\"connecteur Paie v2 à partir de la version 4.3\\\", \\\"valid_from\\\": 20260321, \\\"valid_until\\\": null}\", \"hash\": \"42fb58ccc951ad68dbef2ba0be423d7f0d9d8fa6628de16ff95777073cca42eb\", \"prev_hash\": \"77af56d917887f534660a01bf86b1234595d70b6c034d628428ed576e1ec8b59\", \"seq\": 14, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.fenetre\\\", \\\"cle\\\": \\\"fenetre_maintenance\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"la fenêtre de maintenance du samedi, entre 22 h et 2 h\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"samedi 22 h à 2 h\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"03a89e30c5e79039f323194c2460f50174f3a9f0f1765bac0b7cca52c6400c4c\", \"prev_hash\": \"42fb58ccc951ad68dbef2ba0be423d7f0d9d8fa6628de16ff95777073cca42eb\", \"seq\": 15, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\", \\\"cle\\\": \\\"sauvegarde_avant\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"Une sauvegarde complète et vérifiée est obligatoire avant toute migration\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"sauvegarde complète et vérifiée obligatoire\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"10e1027e6a0e3a07e1f6ef0f58e1baa5aa37bb48b3de4aa4c093f9cb319246d1\", \"prev_hash\": \"03a89e30c5e79039f323194c2460f50174f3a9f0f1765bac0b7cca52c6400c4c\", \"seq\": 16, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\", \\\"cle\\\": \\\"sauvegarde_conservation\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"les copies de sauvegarde sont conservées quatre-vingt-dix (90) jours\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"90 jours\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"929862c380e2e5d4d9128f0a43802b10fc09e2d178bc63e5310228c3e98ce46d\", \"prev_hash\": \"10e1027e6a0e3a07e1f6ef0f58e1baa5aa37bb48b3de4aa4c093f9cb319246d1\", \"seq\": 17, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"f506ea550f887d52c44f79973b84a054957ca9cd0e7b442147a3555f942c55b2\\\", \\\"source_id\\\": \\\"DOC-5A\\\"}\", \"hash\": \"77dfc398235954655c8e80e0d5e4d1dfdba5eec1731b601dee5bfa38665bf5e9\", \"prev_hash\": \"929862c380e2e5d4d9128f0a43802b10fc09e2d178bc63e5310228c3e98ce46d\", \"seq\": 18, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"source_id\\\": \\\"DOC-5B\\\"}\", \"hash\": \"ef951d9622172ce683adae628a27bcb782c50dc472d98ab21743c8179f85a5b1\", \"prev_hash\": \"77dfc398235954655c8e80e0d5e4d1dfdba5eec1731b601dee5bfa38665bf5e9\", \"seq\": 19, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"2f77e5a73bf2b4b51dfb128e87d6d11e10e0fa16f8c10608708e83a9b89e5f83\\\", \\\"source_id\\\": \\\"DOC-5C\\\"}\", \"hash\": \"b546dda44500c484c321ab7631e5587c086cc0e4db9993fbd87eb9e70cdb6bd3\", \"prev_hash\": \"ef951d9622172ce683adae628a27bcb782c50dc472d98ab21743c8179f85a5b1\", \"seq\": 20, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"904fc10012ba095e13e6c67bdc600376e8320ee64104a40222185dc36fb55949\\\", \\\"source_id\\\": \\\"DOC-5D\\\"}\", \"hash\": \"44c6c8b36d8dd61524e4e9de18002785653d8bf34bc14327b945544b9e537976\", \"prev_hash\": \"b546dda44500c484c321ab7631e5587c086cc0e4db9993fbd87eb9e70cdb6bd3\", \"seq\": 21, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\"}\", \"hash\": \"cd041e2c4d67e52c733cd1beb318864ae9d640a450686f5d3ade3b5cce679287\", \"prev_hash\": \"44c6c8b36d8dd61524e4e9de18002785653d8bf34bc14327b945544b9e537976\", \"seq\": 22, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\"}\", \"hash\": \"133ded638191a047ca44b41dfb962749ee700a47614d988cdc1b0759fa4f8b8e\", \"prev_hash\": \"cd041e2c4d67e52c733cd1beb318864ae9d640a450686f5d3ade3b5cce679287\", \"seq\": 23, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_max_jours\\\", \\\"doc_hash\\\": \\\"2f77e5a73bf2b4b51dfb128e87d6d11e10e0fa16f8c10608708e83a9b89e5f83\\\", \\\"extrait\\\": \\\"le télétravail est limité à deux (2) jours par semaine\\\", \\\"known_from\\\": 20260201, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"memo_rappel\\\", \\\"source_id\\\": \\\"DOC-5C\\\", \\\"valeur\\\": \\\"2 jours par semaine\\\", \\\"valid_from\\\": 20260201, \\\"valid_until\\\": null}\", \"hash\": \"c9cb1f1cb889653d6b05110a8f8c869c8d73dac091f18080a9d645b32142e3da\", \"prev_hash\": \"133ded638191a047ca44b41dfb962749ee700a47614d988cdc1b0759fa4f8b8e\", \"seq\": 24, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_max_jours\\\", \\\"doc_hash\\\": \\\"f506ea550f887d52c44f79973b84a054957ca9cd0e7b442147a3555f942c55b2\\\", \\\"extrait\\\": \\\"peut télétravailler jusqu'à trois (3) jours par semaine\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pol_tt_2026\\\", \\\"source_id\\\": \\\"DOC-5A\\\", \\\"valeur\\\": \\\"3 jours par semaine\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"4b54553681ddca27f027464adda9c55aff26aff2e32326c4ac89c9e30e04872d\", \"prev_hash\": \"c9cb1f1cb889653d6b05110a8f8c869c8d73dac091f18080a9d645b32142e3da\", \"seq\": 25, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"admissibilite_probatoire\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"Ne sont pas admissibles au télétravail régulier : les employés en période probatoire\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"non admissible au télétravail régulier\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"5e4fe25a292ba88d54e13f9847840ce9fff76e83723db5c018a2b32ab769c054\", \"prev_hash\": \"4b54553681ddca27f027464adda9c55aff26aff2e32326c4ac89c9e30e04872d\", \"seq\": 26, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"probation_duree\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"les six premiers mois suivant l'embauche\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"six premiers mois suivant l'embauche\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"d86bc60704c0c3d8d63e975ae70a015ceb762c2a4b4a00e3678808b863219adf\", \"prev_hash\": \"5e4fe25a292ba88d54e13f9847840ce9fff76e83723db5c018a2b32ab769c054\", \"seq\": 27, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"date_embauche_tremblay\\\", \\\"doc_hash\\\": \\\"904fc10012ba095e13e6c67bdc600376e8320ee64104a40222185dc36fb55949\\\", \\\"extrait\\\": \\\"embauchée le 16 mars 2026\\\", \\\"known_from\\\": 20260608, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"courriel_gestionnaire\\\", \\\"source_id\\\": \\\"DOC-5D\\\", \\\"valeur\\\": \\\"16 mars 2026\\\", \\\"valid_from\\\": 20260316, \\\"valid_until\\\": null}\", \"hash\": \"3be6b5b8e820ca16225a2c930922361733c7081ed6b7f70abcd656e6612784fc\", \"prev_hash\": \"d86bc60704c0c3d8d63e975ae70a015ceb762c2a4b4a00e3678808b863219adf\", \"seq\": 28, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_exception_probatoire_autorite\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"uniquement par décision du comité RH, sur recommandation écrite du gestionnaire\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"décision du comité RH sur recommandation écrite du gestionnaire\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"de43bdde0d7e179cb137ecfa8480ca660db0aa3c87a61489fb3f2845f92272e8\", \"prev_hash\": \"3be6b5b8e820ca16225a2c930922361733c7081ed6b7f70abcd656e6612784fc\", \"seq\": 29, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"source_id\\\": \\\"DOC-6A\\\"}\", \"hash\": \"d69bcc38e05d1c5fa4cfb6ed2e4c303d776add2205829123a75c3b6b772d0b27\", \"prev_hash\": \"de43bdde0d7e179cb137ecfa8480ca660db0aa3c87a61489fb3f2845f92272e8\", \"seq\": 30, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"source_id\\\": \\\"DOC-6B\\\"}\", \"hash\": \"cbf4e315da8bc225114628f18dd95a9e52db9f36a825b4a1766ae4ba261f38fa\", \"prev_hash\": \"d69bcc38e05d1c5fa4cfb6ed2e4c303d776add2205829123a75c3b6b772d0b27\", \"seq\": 31, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"1825e1bc7964086bd7413dc4336a416ce6a5bac91a13d014032c4044fb2b008d\\\", \\\"source_id\\\": \\\"DOC-6C\\\"}\", \"hash\": \"c457c9d16300b0c618e5ff03f96d1525b871d051f8b7974470e5a1058feedafc\", \"prev_hash\": \"cbf4e315da8bc225114628f18dd95a9e52db9f36a825b4a1766ae4ba261f38fa\", \"seq\": 32, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"f4ac925d42fbd3a4073104ef6535b719b56aedfa2420dc569827048637a9a68c\\\", \\\"source_id\\\": \\\"DOC-6D\\\"}\", \"hash\": \"3f2ab28b95cbfe44549c3fd28d27b1f0e84ff22b402a9456f8cffd84a280418e\", \"prev_hash\": \"c457c9d16300b0c618e5ff03f96d1525b871d051f8b7974470e5a1058feedafc\", \"seq\": 33, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\"}\", \"hash\": \"d1d2e5b846b3338bebdb911afd566c880cd790f54675db34e12a54e3547c3a83\", \"prev_hash\": \"3f2ab28b95cbfe44549c3fd28d27b1f0e84ff22b402a9456f8cffd84a280418e\", \"seq\": 34, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\"}\", \"hash\": \"934c54daa8b1eda72452baaeaf235d4a115c68e4daed5793d9e69caf8f862852\", \"prev_hash\": \"d1d2e5b846b3338bebdb911afd566c880cd790f54675db34e12a54e3547c3a83\", \"seq\": 35, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.preavis\\\"}\", \"hash\": \"4961a713586810773599dd43479a1be647de59898a42f7d3818514036f9fa5ad\", \"prev_hash\": \"934c54daa8b1eda72452baaeaf235d4a115c68e4daed5793d9e69caf8f862852\", \"seq\": 36, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.resiliation\\\"}\", \"hash\": \"0031fbdeadb883d120ef74e8fd7a1421c6c64d9a31db9ef3f3ce07cdcc203f4b\", \"prev_hash\": \"4961a713586810773599dd43479a1be647de59898a42f7d3818514036f9fa5ad\", \"seq\": 37, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_service_principal\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"Le tarif mensuel du service principal est de 8 400 $\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"8 400 $ par mois\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"59cc95d1311f0265c92bf552ae0fb6f2acd429216835300abccd9db0bf47dd1e\", \"prev_hash\": \"0031fbdeadb883d120ef74e8fd7a1421c6c64d9a31db9ef3f3ce07cdcc203f4b\", \"seq\": 38, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_service_principal\\\", \\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"extrait\\\": \\\"le tarif mensuel du service principal est porté à 9 100 $\\\", \\\"known_from\\\": 20250215, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avenant_2\\\", \\\"source_id\\\": \\\"DOC-6B\\\", \\\"valeur\\\": \\\"9 100 $ par mois\\\", \\\"valid_from\\\": 20250401, \\\"valid_until\\\": null}\", \"hash\": \"4a9fce458bcf496a41ff1d2fc2a06e2870ae93b0e82c36c475aa7fcc5981e48c\", \"prev_hash\": \"59cc95d1311f0265c92bf552ae0fb6f2acd429216835300abccd9db0bf47dd1e\", \"seq\": 39, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_optionnels_validite\\\", \\\"doc_hash\\\": \\\"1825e1bc7964086bd7413dc4336a416ce6a5bac91a13d014032c4044fb2b008d\\\", \\\"extrait\\\": \\\"les tarifs des services optionnels de la présente grille demeurent en vigueur\\\", \\\"known_from\\\": 20250201, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"grille\\\", \\\"source_id\\\": \\\"DOC-6C\\\", \\\"valeur\\\": \\\"grille 2024 en vigueur\\\", \\\"valid_from\\\": 20250201, \\\"valid_until\\\": null}\", \"hash\": \"591c432448daf5508eb5f6ceee41cca57d2098685e26016b751a5660558875bc\", \"prev_hash\": \"4a9fce458bcf496a41ff1d2fc2a06e2870ae93b0e82c36c475aa7fcc5981e48c\", \"seq\": 40, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\", \\\"cle\\\": \\\"duree_initiale_contrat\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"pour une durée de vingt-quatre (24) mois\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"24 mois\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"a1161b95afda42fa2fc63e46c8d6863f6df75275e8208f062e0c9bf8f639ee3a\", \"prev_hash\": \"591c432448daf5508eb5f6ceee41cca57d2098685e26016b751a5660558875bc\", \"seq\": 41, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\", \\\"cle\\\": \\\"prolongation_duree_contrat\\\", \\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"extrait\\\": \\\"La durée initiale du contrat est prolongée de six (6) mois\\\", \\\"known_from\\\": 20250215, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avenant_2\\\", \\\"source_id\\\": \\\"DOC-6B\\\", \\\"valeur\\\": \\\"6 mois\\\", \\\"valid_from\\\": 20250215, \\\"valid_until\\\": null}\", \"hash\": \"c91b6d4b7bc862dee30f2b277914b97de4477c15bb95ae69c9cf7911d80cbed6\", \"prev_hash\": \"a1161b95afda42fa2fc63e46c8d6863f6df75275e8208f062e0c9bf8f639ee3a\", \"seq\": 42, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.preavis\\\", \\\"cle\\\": \\\"preavis_delai\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"sauf préavis écrit de non-renouvellement reçu au moins quatre-vingt-dix (90) jours avant l'échéance\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"au moins 90 jours avant l'échéance\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"dba1f0d800c9238d0d6f8e349c693f05bf00a8dd4b2fd5ad4d2d473f40551d17\", \"prev_hash\": \"c91b6d4b7bc862dee30f2b277914b97de4477c15bb95ae69c9cf7911d80cbed6\", \"seq\": 43, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.resiliation\\\", \\\"cle\\\": \\\"resiliation_manquement\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"la résiliation exige une mise en demeure écrite et un délai de correction de trente (30) jours\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"mise en demeure écrite et délai de correction de 30 jours\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"prev_hash\": \"dba1f0d800c9238d0d6f8e349c693f05bf00a8dd4b2fd5ad4d2d473f40551d17\", \"seq\": 44, \"type\": \"ANCRAGE\"}], \"n_events\": 44, \"registry_id\": \"1c0291e9-894d-4889-b963-1974c1083743\", \"signature_hex\": \"86007aef00385ec87760aa21d721c9be90d63ad7ffb989b70b0f5ca21723f87ef9b9f496fdc38c3d27ba0ff1247ea7e0a85de7777f742cc933592b244f6dac0c\"}",
  "sha256_cle_publique": "b3f72ceda7bc25d4e1f93932851e48442f07b5d8fdc8ef3c5af2a1250dca8765",
  "sha256_instantane": "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf"
 },
 "VECTEURS_GOUVERNANCE_V02": {
  "P5_adaptation": {
   "cas": [
    {
     "categorie_canonique": "contrat.tarif",
     "claim_brut": {
      "categorie": "contrat.tarif",
      "cle": "tarif_service_principal",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "avenant_2",
      "source_id": "DOC-6B",
      "valeur": "9 100 $ par mois"
     },
     "cle_canonique": "tarif_service_principal",
     "etiquette": "exact — aucun residu",
     "extrait_brut": "le tarif mensuel du service principal est porté à 9 100 $",
     "extrait_canonique": "le tarif mensuel du service principal est porté à 9 100 $",
     "justification": "valeur brute == valeur canonique après normalisation mécanique seule",
     "known_from": 20250215,
     "noyau_canonique": {
      "categorie": "contrat.tarif",
      "cle": "tarif_service_principal",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "avenant_2",
      "source_id": "DOC-6B",
      "valeur": "9 100 $ par mois"
     },
     "residus_non_gouvernes": [],
     "section_canonique": "avenant_2",
     "sha256_claim_brut": "7a710aa7ee6e9359c824a4e5a221fddc66458e2a150149374aa70be25c114a97",
     "source_id_canonique": "DOC-6B",
     "statut": "CORRESPONDANCE_EXACTE",
     "transformations_appliquees": [
      "nombres_et_devises"
     ],
     "valeur_canonique": "9 100 $ par mois",
     "valid_from": 20250401
    },
    {
     "categorie_canonique": "contrat.tarif",
     "claim_brut": {
      "categorie": "contrat.tarif",
      "cle": "tarif_service_principal",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "avenant_2",
      "source_id": "DOC-6B",
      "valeur": "9 100 $ par mois (a compter du 13e mois)"
     },
     "cle_canonique": "tarif_service_principal",
     "etiquette": "avec residu — periode ajoutee",
     "extrait_brut": "le tarif mensuel du service principal est porté à 9 100 $",
     "extrait_canonique": "le tarif mensuel du service principal est porté à 9 100 $",
     "justification": "fait canonique identifié ; la valeur brute porte en plus un contenu qui n'est PAS une différence mécanique — conservé, NI validé NI réfuté",
     "known_from": 20250215,
     "noyau_canonique": {
      "categorie": "contrat.tarif",
      "cle": "tarif_service_principal",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "avenant_2",
      "source_id": "DOC-6B",
      "valeur": "9 100 $ par mois"
     },
     "residus_non_gouvernes": [
      "a compter du 13e mois"
     ],
     "section_canonique": "avenant_2",
     "sha256_claim_brut": "9c00cf06f9aa1b81f5ecd151035c2b1ca0cac04d627977868a962192cb0842ae",
     "source_id_canonique": "DOC-6B",
     "statut": "CORRESPONDANCE_CANONIQUE_AVEC_RESIDU",
     "transformations_appliquees": [
      "espaces_ponctuation",
      "nombres_et_devises"
     ],
     "valeur_canonique": "9 100 $ par mois",
     "valid_from": 20250401
    },
    {
     "categorie_canonique": null,
     "claim_brut": {
      "categorie": "contrat.tarif",
      "cle": "tarif_service_principal",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "x",
      "source_id": "DOC-INEXISTANT",
      "valeur": "9 100 $ par mois"
     },
     "cle_canonique": null,
     "etiquette": "non resolu — source inconnue",
     "extrait_brut": "le tarif mensuel du service principal est porté à 9 100 $",
     "extrait_canonique": null,
     "justification": "source_id « DOC-INEXISTANT » : aucun fait ancré sous cette source",
     "known_from": null,
     "noyau_canonique": null,
     "residus_non_gouvernes": [],
     "section_canonique": null,
     "sha256_claim_brut": "1616fc6602c77677fe9b8739faf799dc378356101dc659bd6a9c6cc49b363c8c",
     "source_id_canonique": null,
     "statut": "NON_RESOLU",
     "transformations_appliquees": [],
     "valeur_canonique": null,
     "valid_from": null
    },
    {
     "categorie_canonique": null,
     "claim_brut": {
      "categorie": "contrat.tarif",
      "cle": "MAUVAISE",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "avenant_2",
      "source_id": "DOC-6B",
      "valeur": "9 100 $ par mois"
     },
     "cle_canonique": null,
     "etiquette": "non resolu — cle fausse, categorie juste (cumulatif)",
     "extrait_brut": "le tarif mensuel du service principal est porté à 9 100 $",
     "extrait_canonique": null,
     "justification": "aucun fait de DOC-6B dont la preuve corresponde à l'extrait cité",
     "known_from": null,
     "noyau_canonique": null,
     "residus_non_gouvernes": [],
     "section_canonique": null,
     "sha256_claim_brut": "a7d68da5974a62ce766b129331d23f10843d96c4f42f7ff269fb4eaee4561e89",
     "source_id_canonique": null,
     "statut": "NON_RESOLU",
     "transformations_appliquees": [
      "nombres_et_devises"
     ],
     "valeur_canonique": null,
     "valid_from": null
    },
    {
     "categorie_canonique": "contrat.tarif",
     "claim_brut": {
      "categorie": "contrat.tarif",
      "cle": "tarif_service_principal",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "avenant_2",
      "source_id": "DOC-6B",
      "valeur": "9 100 $ par mois"
     },
     "cle_canonique": "tarif_service_principal",
     "etiquette": "transformations — devise et espaces",
     "extrait_brut": "le tarif mensuel du service principal est porté à 9 100 $",
     "extrait_canonique": "le tarif mensuel du service principal est porté à 9 100 $",
     "justification": "valeur brute == valeur canonique après normalisation mécanique seule",
     "known_from": 20250215,
     "noyau_canonique": {
      "categorie": "contrat.tarif",
      "cle": "tarif_service_principal",
      "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
      "section": "avenant_2",
      "source_id": "DOC-6B",
      "valeur": "9 100 $ par mois"
     },
     "residus_non_gouvernes": [],
     "section_canonique": "avenant_2",
     "sha256_claim_brut": "7a710aa7ee6e9359c824a4e5a221fddc66458e2a150149374aa70be25c114a97",
     "source_id_canonique": "DOC-6B",
     "statut": "CORRESPONDANCE_EXACTE",
     "transformations_appliquees": [
      "nombres_et_devises"
     ],
     "valeur_canonique": "9 100 $ par mois",
     "valid_from": 20250401
    }
   ],
   "statuts_possibles": [
    "CORRESPONDANCE_EXACTE",
    "CORRESPONDANCE_CANONIQUE_AVEC_RESIDU",
    "NON_RESOLU",
    "AMBIGU"
   ],
   "temoin_negatif": {
    "pourquoi": "un statut invente doit faire echouer le harnais",
    "statut_faux": "CORRESPONDANCE_INVENTEE"
   }
  },
  "P6_portee": {
   "cas": [
    {
     "claim": "vivant",
     "defauts_internes": [],
     "lignes": [
      "• Affirmation non affichée."
     ],
     "non_affichees": 1,
     "portee": "PORTEE_VIDE — rien n'est autorise",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": false,
     "sha256_texte_public": "1ea01bc32b29d4fe6517d5c8e020e0d2192ed5b1583baf1645b577923f6d4431",
     "texte_public": "• Affirmation non affichée.",
     "verdict_interne": "AUTORISE",
     "verdicts_reveles": 0
    },
    {
     "claim": "vivant",
     "defauts_internes": [],
     "lignes": [
      "• Affirmation conforme au plancher."
     ],
     "non_affichees": 0,
     "portee": "verdict seul",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": false,
     "sha256_texte_public": "ccce3042cb5d5fede11d166d8c45675c1ea38c70434e0d4dcc1185f8d127aff3",
     "texte_public": "• Affirmation conforme au plancher.",
     "verdict_interne": "AUTORISE",
     "verdicts_reveles": 1
    },
    {
     "claim": "vivant",
     "defauts_internes": [],
     "lignes": [
      "• Affirmation conforme au plancher."
     ],
     "non_affichees": 0,
     "portee": "verdict + motif",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": false,
     "sha256_texte_public": "ccce3042cb5d5fede11d166d8c45675c1ea38c70434e0d4dcc1185f8d127aff3",
     "texte_public": "• Affirmation conforme au plancher.",
     "verdict_interne": "AUTORISE",
     "verdicts_reveles": 1
    },
    {
     "claim": "vivant",
     "defauts_internes": [],
     "lignes": [
      "• Affirmation conforme au plancher — tarif_service_principal : 9 100 $ par mois."
     ],
     "non_affichees": 0,
     "portee": "verdict + motif + valeur",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": true,
     "sha256_texte_public": "12b95f24c4c640d51082b96cbc739ecf39e5bfa086cf9c7ebd304a6743b93725",
     "texte_public": "• Affirmation conforme au plancher — tarif_service_principal : 9 100 $ par mois.",
     "verdict_interne": "AUTORISE",
     "verdicts_reveles": 1
    },
    {
     "claim": "vivant",
     "defauts_internes": [],
     "lignes": [
      "• Affirmation conforme au plancher — tarif_service_principal : 9 100 $ par mois [DOC-6B#avenant_2]."
     ],
     "non_affichees": 0,
     "portee": "tout, provenance comprise",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": true,
     "revele_valeur_vivante_9100": true,
     "sha256_texte_public": "efed61a347dfd7e5415ff31654524b8802886fb8475fc88e6359a80b3a0f3b5e",
     "texte_public": "• Affirmation conforme au plancher — tarif_service_principal : 9 100 $ par mois [DOC-6B#avenant_2].",
     "verdict_interne": "AUTORISE",
     "verdicts_reveles": 1
    },
    {
     "claim": "perime",
     "defauts_internes": [
      "VALEUR_PERIMEE"
     ],
     "lignes": [
      "• Affirmation non affichée."
     ],
     "non_affichees": 1,
     "portee": "PORTEE_VIDE — rien n'est autorise",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": false,
     "sha256_texte_public": "1ea01bc32b29d4fe6517d5c8e020e0d2192ed5b1583baf1645b577923f6d4431",
     "texte_public": "• Affirmation non affichée.",
     "verdict_interne": "BLOQUE",
     "verdicts_reveles": 0
    },
    {
     "claim": "perime",
     "defauts_internes": [
      "VALEUR_PERIMEE"
     ],
     "lignes": [
      "• Affirmation retenue."
     ],
     "non_affichees": 0,
     "portee": "verdict seul",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": false,
     "sha256_texte_public": "26ba8ca07b87e985c6c5572f2519aac2a92e82dc1991ce97cc13d53ae40f60cb",
     "texte_public": "• Affirmation retenue.",
     "verdict_interne": "BLOQUE",
     "verdicts_reveles": 1
    },
    {
     "claim": "perime",
     "defauts_internes": [
      "VALEUR_PERIMEE"
     ],
     "lignes": [
      "• Affirmation retenue (hallucination temporelle (valeur remplacée))."
     ],
     "non_affichees": 0,
     "portee": "verdict + motif",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": false,
     "sha256_texte_public": "403dfba4511fa5929ca5753ae0ebab116f1945c8d52ab0fcb3cd86bc112add72",
     "texte_public": "• Affirmation retenue (hallucination temporelle (valeur remplacée)).",
     "verdict_interne": "BLOQUE",
     "verdicts_reveles": 1
    },
    {
     "claim": "perime",
     "defauts_internes": [
      "VALEUR_PERIMEE"
     ],
     "lignes": [
      "• Affirmation retenue (hallucination temporelle (valeur remplacée)) — tarif_service_principal : 9 100 $ par mois."
     ],
     "non_affichees": 0,
     "portee": "verdict + motif + valeur",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": false,
     "revele_valeur_vivante_9100": true,
     "sha256_texte_public": "868b2cd12f9fccf6057fe793809000e8b7aba454c70c892774affe1adf9a0753",
     "texte_public": "• Affirmation retenue (hallucination temporelle (valeur remplacée)) — tarif_service_principal : 9 100 $ par mois.",
     "verdict_interne": "BLOQUE",
     "verdicts_reveles": 1
    },
    {
     "claim": "perime",
     "defauts_internes": [
      "VALEUR_PERIMEE"
     ],
     "lignes": [
      "• Affirmation retenue (hallucination temporelle (valeur remplacée)) — tarif_service_principal : 9 100 $ par mois [DOC-6B#avenant_2]."
     ],
     "non_affichees": 0,
     "portee": "tout, provenance comprise",
     "rendue": true,
     "revele_detail_interne_du_noyau": false,
     "revele_provenance": true,
     "revele_valeur_vivante_9100": true,
     "sha256_texte_public": "8f3259b8f86c92cd6a7d7a969709b8bf372baffbddaca2e012ecf517bc84ec51",
     "texte_public": "• Affirmation retenue (hallucination temporelle (valeur remplacée)) — tarif_service_principal : 9 100 $ par mois [DOC-6B#avenant_2].",
     "verdict_interne": "BLOQUE",
     "verdicts_reveles": 1
    }
   ],
   "drapeaux_autorisation": [
    "reveler_verdict",
    "reveler_motif",
    "restituer_valeur",
    "afficher_provenance"
   ],
   "invariant_oracle": "sous PORTEE_VIDE et sous « verdict seul » et « verdict + motif », la valeur vivante 9 100 $ ne doit JAMAIS apparaitre, y compris pour le claim PERIME dont le detail du noyau la contient.",
   "invariants_verifies": {
    "detail_interne_du_noyau_dans_une_sortie_publique": 0,
    "fuites_illegitimes": 0,
    "sous_PORTEE_VIDE": "aucune valeur, aucun verdict",
    "sous_verdict_plus_motif": "motif = libelle du CODE via TYPES_GOUVERNES, jamais le detail du noyau. Le claim perime affiche « hallucination temporelle (valeur remplacee) » sans reveler 9 100 $.",
    "sous_verdict_seul": "verdict seul, aucun motif, aucune valeur",
    "valeur_reclamee_fausse_jamais_repetee": true
   },
   "semantique_de_restituer_valeur": {
    "ce_qu_il_faut_savoir": "un titulaire de restituer_valeur sur une cle apprend sa valeur vivante quelle que soit la valeur qu'il reclame. C'est le comportement voulu d'un systeme correctif, mais il doit etre CONNU de qui accorde la portee.",
    "ce_que_cela_n_est_pas": "ce n'est PAS une fuite : restituer_valeur est une autorisation EXPLICITE, accordee par couple (cle, categorie). La portee EST le controle. Sans elle, ni 8 400 ni 9 100 n'apparaissent.",
    "consequence": "restituer_valeur signifie « donner la BONNE valeur du registre », pas « renvoyer la valeur reclamee ». Pour un claim perime de 8 400 $, la sortie affiche 9 100 $ — la valeur vivante.",
    "constat": "entree_ancree provient de state_known_at(cle, categorie, t) — l'ETAT VIVANT — et NON de l'entree appariee par apparier(). Verifie dans rf_gouverneur_rev7._resoudre.",
    "le_port_doit_reproduire": "cette semantique exactement, y compris la source de entree_ancree",
    "point_favorable": "la valeur FAUSSE reclamee (8 400 $) n'apparait dans AUCUNE sortie. Le systeme ne repete jamais le faux claim."
   },
   "table_motifs": {
    "ABSENCE_D_ANCRAGE": "aucune entrée ancrée pour cette clé",
    "AMBIGUITE_D_ANCRAGE": "ancrage ambigu (plusieurs candidats non équivalents)",
    "CATEGORIE_NON_CONCORDANTE": "catégorie non concordante",
    "CONFLIT_D_ETAT": "conflit d'état ancré",
    "HORS_BESOIN": "hors des besoins déclarés",
    "INCOMPATIBILITE_ETAT_VIVANT": "contradiction avec l'état vivant",
    "PREUVE_ABSENTE": "citation absente",
    "PREUVE_NON_CONCORDANTE": "citation non concordante avec la preuve ancrée",
    "SECTION_NON_CONCORDANTE": "section non concordante",
    "SOURCE_INCONNUE": "provenance fabriquée (source hors registre)",
    "SOURCE_MAL_ATTRIBUEE": "provenance mal attribuée",
    "VALEUR_CORRIGEE_RETRO": "valeur corrigée rétroactivement (condition non blâmante)",
    "VALEUR_NON_CONNAISSABLE_A_T": "anachronisme (non connaissable à t)",
    "VALEUR_NON_ENCORE_VALIDE": "hallucination temporelle (valeur pas encore en vigueur)",
    "VALEUR_PERIMEE": "hallucination temporelle (valeur remplacée)"
   },
   "temoin_negatif": {
    "pourquoi": "un texte public contenant « 9 100 » sous portee non autorisee DOIT faire echouer le harnais",
    "texte_faux": "• Affirmation retenue (hallucination temporelle) — 9 100 $ par mois."
   }
  },
  "P8_rapport": {
   "cas": [
    {
     "claim": "vivant",
     "octets": 363,
     "rapport": {
      "empreinte_lot": "30e3f167f84a1090478c3596aadc066f0a8d6d749b1ceb0c53df4d04c3ee5631",
      "gouvernees": [
       {
        "categorie": "contrat.tarif",
        "cle": "tarif_service_principal",
        "defauts": [],
        "verdict": "AUTORISE"
       }
      ],
      "non_affichees": 0,
      "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
      "t_raisonnement": 20260716,
      "verdicts_reveles": 1
     },
     "rapport_serialise": "{\"empreinte_lot\": \"30e3f167f84a1090478c3596aadc066f0a8d6d749b1ceb0c53df4d04c3ee5631\", \"gouvernees\": [{\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"defauts\": [], \"verdict\": \"AUTORISE\"}], \"non_affichees\": 0, \"racine_plancher\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"t_raisonnement\": 20260716, \"verdicts_reveles\": 1}",
     "sha256_rapport": "c1e32a37b83114d2827aa6fe1a3ec7f2b7df7d94969b676a3f621a0876a176ca"
    },
    {
     "claim": "perime",
     "octets": 377,
     "rapport": {
      "empreinte_lot": "49f47b5ef30754500c1cafc3d8e61c60737446dfc239c28979470456dbc46cf1",
      "gouvernees": [
       {
        "categorie": "contrat.tarif",
        "cle": "tarif_service_principal",
        "defauts": [
         "VALEUR_PERIMEE"
        ],
        "verdict": "BLOQUE"
       }
      ],
      "non_affichees": 0,
      "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
      "t_raisonnement": 20260716,
      "verdicts_reveles": 1
     },
     "rapport_serialise": "{\"empreinte_lot\": \"49f47b5ef30754500c1cafc3d8e61c60737446dfc239c28979470456dbc46cf1\", \"gouvernees\": [{\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"defauts\": [\"VALEUR_PERIMEE\"], \"verdict\": \"BLOQUE\"}], \"non_affichees\": 0, \"racine_plancher\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"t_raisonnement\": 20260716, \"verdicts_reveles\": 1}",
     "sha256_rapport": "52a6d2beda3db0ae7a67b9cac83a48904dec0ca09eab5af06625cecfd9a183dd"
    }
   ],
   "serialisation": "json.dumps(obj, ensure_ascii=False, sort_keys=True) — identique a _canon",
   "temoin_negatif": {
    "pourquoi": "un rapport dont UN octet differe DOIT donner un autre SHA",
    "sha_attendu_different": "1a2582195d9b4d5c860f293efc0cfcf26cb9fc5e66b11be97dbc37dce87571f7"
   }
  },
  "couverture_des_codes": {
   "exerces": [
    "ABSENCE_D_ANCRAGE",
    "AMBIGUITE_D_ANCRAGE",
    "CATEGORIE_NON_CONCORDANTE",
    "CONFLIT_D_ETAT",
    "HORS_BESOIN",
    "INCOMPATIBILITE_ETAT_VIVANT",
    "PREUVE_ABSENTE",
    "PREUVE_NON_CONCORDANTE",
    "SECTION_NON_CONCORDANTE",
    "SOURCE_INCONNUE",
    "SOURCE_MAL_ATTRIBUEE",
    "VALEUR_CORRIGEE_RETRO",
    "VALEUR_NON_CONNAISSABLE_A_T",
    "VALEUR_NON_ENCORE_VALIDE",
    "VALEUR_PERIMEE"
   ],
   "non_exerces": [],
   "note": "un code non exerce n'est PAS revendique comme couvert. V01 seul en laissait trois de cote ; V02 les ajoute par registre auxiliaire.",
   "total": 15
  },
  "deduplication_g3": {
   "cas": {
    "affirmation": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "doc_hash_cite": "0000000000000000000000000000000000000000000000000000000000000000",
     "extrait_cite": "extrait faux",
     "section_citee": "avenant_2",
     "source_citee": "DOC-6B",
     "t_raisonnement": 20260716,
     "valeur": "9 100 $ par mois"
    },
    "conditions": [],
    "defauts": [
     "PREUVE_NON_CONCORDANTE"
    ],
    "detail_du_noyau": "extrait ≠ preuve ancrée ; doc_hash cité ≠ version ancrée ; ancrage courant à t=20260716",
    "fautes": [
     "PREUVE_NON_CONCORDANTE"
    ],
    "statut": "FAUTE",
    "verdict": "BLOQUE"
   },
   "occurrences_attendues_de_PREUVE_NON_CONCORDANTE": 1,
   "pourquoi": "le Mesureur ajoute PREUVE_NON_CONCORDANTE DEUX FOIS quand l'extrait ET le doc_hash divergent. G3 doit rendre UNE occurrence, dans l'ordre de premiere apparition. V01 ne testait que l'ORDRE de codes DIFFERENTS.",
   "temoin_negatif": {
    "liste_fausse": [
     "PREUVE_NON_CONCORDANTE",
     "PREUVE_NON_CONCORDANTE"
    ],
    "pourquoi": "une liste NON dedupliquee aurait deux occurrences ; le harnais doit la refuser"
   }
  },
  "reference": {
   "complete": "VECTEURS_GOUVERNANCE_V01.json",
   "contrat": "1bf56b8482ee1a083ab9eeb6970bf3d77e16ef2aa1bc11994c0528a614e29b1f",
   "genere_avant_toute_ligne_du_port": true,
   "methode": "aucune sortie n'est predite ; tout est ENREGISTRE depuis le Python gele",
   "sha256_p0p4": "b42e8b45e008760b1f7b71c77845a1ed8e8e18eb02dd14606cc485dea3633398",
   "sha256_v01": "3ee0098700a59ebb21a4452d702ad55f7ec60a06c2ee26dfc3241a535f003872"
  },
  "registre_auxiliaire": {
   "cas": [
    {
     "affirmation": {
      "categorie": "cat",
      "cle": "k_retro",
      "doc_hash_cite": null,
      "extrait_cite": "valeur A",
      "section_citee": "S",
      "source_citee": "DX",
      "t_raisonnement": 15,
      "valeur": "A"
     },
     "code_vise": "VALEUR_CORRIGEE_RETRO",
     "conditions": [
      "VALEUR_CORRIGEE_RETRO"
     ],
     "defauts": [
      "VALEUR_CORRIGEE_RETRO"
     ],
     "detail_du_noyau": "reconstruction « B »",
     "etiquette": "VALEUR_CORRIGEE_RETRO",
     "fautes": [],
     "pourquoi": "su a t=15 : « A » ; reconstruit aujourd'hui : « B ». Code NON BLAMANT.",
     "statut": "ACCEPTABLE_AVEC_CONDITION",
     "verdict": "REFORMULER"
    },
    {
     "affirmation": {
      "categorie": "cat",
      "cle": "k_conflit",
      "doc_hash_cite": null,
      "extrait_cite": "ex aequo P et Q",
      "section_citee": "S",
      "source_citee": "DX",
      "t_raisonnement": 20,
      "valeur": "P"
     },
     "code_vise": "CONFLIT_D_ETAT",
     "conditions": [],
     "defauts": [
      "CONFLIT_D_ETAT"
     ],
     "detail_du_noyau": "ex æquo de valeurs distinctes dans (clé, catégorie)",
     "etiquette": "CONFLIT_D_ETAT",
     "fautes": [
      "CONFLIT_D_ETAT"
     ],
     "pourquoi": "P et Q strictement ex aequo sur (vf=10, kf=10)",
     "statut": "FAUTE",
     "verdict": "BLOQUE"
    },
    {
     "affirmation": {
      "categorie": "cat",
      "cle": "k_ambigu",
      "doc_hash_cite": null,
      "extrait_cite": "ex aequo P et Q",
      "section_citee": "S",
      "source_citee": "DX",
      "t_raisonnement": 20,
      "valeur": "D"
     },
     "code_vise": "AMBIGUITE_D_ANCRAGE",
     "conditions": [],
     "defauts": [
      "AMBIGUITE_D_ANCRAGE"
     ],
     "detail_du_noyau": "appariement ambigu",
     "etiquette": "AMBIGUITE_D_ANCRAGE",
     "fautes": [
      "AMBIGUITE_D_ANCRAGE"
     ],
     "pourquoi": "deux ancrages EX AEQUO sur (vf=10,kf=10) mais d extraits differents : deux classes d equivalence au sommet. Le claim cite un extrait reel de la section qui n a servi a ancrer NI l une NI l autre, pour que le filtrage ne reduise pas.",
     "statut": "FAUTE",
     "verdict": "BLOQUE"
    },
    {
     "affirmation": {
      "categorie": "cat",
      "cle": "k_retro",
      "doc_hash_cite": null,
      "extrait_cite": "valeur A",
      "section_citee": "S",
      "source_citee": "DX",
      "t_raisonnement": 25,
      "valeur": "B"
     },
     "code_vise": "(aucun)",
     "conditions": [],
     "defauts": [],
     "detail_du_noyau": "ancrage courant à t=25",
     "etiquette": "controle du controle : cas nominal du registre auxiliaire",
     "fautes": [],
     "pourquoi": "sans lui, un registre qui echouerait sur TOUT passerait les 3 tests",
     "statut": "CONFORME",
     "verdict": "AUTORISE"
    }
   ],
   "cle_publique_pem": "-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEAWRyyQ6n6k4WKzXlVI2AHFwiqpoEZmxgK170Z6CqCJlg=\n-----END PUBLIC KEY-----\n",
   "construit_avec": "le meme Constructeur gele, aucun rejet silencieux",
   "instantane_utf8": "{\"declared_root\": \"d05caabf7e1ce215aafda2056a3abf236002ca3307e2f6dc1d7a6cc6859d6e7c\", \"events\": [{\"data\": \"{\\\"doc_hash\\\": \\\"cf50f14fcd42862b584847181db0fd8f759feec0bd09a3962117019ac97fe014\\\", \\\"source_id\\\": \\\"DX\\\"}\", \"hash\": \"9ecb9d2a45c1971ff43e7ae3c69767f8faa168a143a8925fa75eeaa9d052ff2e\", \"prev_hash\": \"GENESIS\", \"seq\": 1, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"cat\\\"}\", \"hash\": \"92bd8810c56629968bdb0ad89f4a6f6f263579b8dc62f24c6dfa0bcfaf479919\", \"prev_hash\": \"9ecb9d2a45c1971ff43e7ae3c69767f8faa168a143a8925fa75eeaa9d052ff2e\", \"seq\": 2, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"cat\\\", \\\"cle\\\": \\\"k_retro\\\", \\\"doc_hash\\\": \\\"cf50f14fcd42862b584847181db0fd8f759feec0bd09a3962117019ac97fe014\\\", \\\"extrait\\\": \\\"valeur A\\\", \\\"known_from\\\": 10, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"S\\\", \\\"source_id\\\": \\\"DX\\\", \\\"valeur\\\": \\\"A\\\", \\\"valid_from\\\": 10, \\\"valid_until\\\": null}\", \"hash\": \"6702a2651877d0a0f8089ca70aa8ab690742dae64b85a7de0624c53a428b5415\", \"prev_hash\": \"92bd8810c56629968bdb0ad89f4a6f6f263579b8dc62f24c6dfa0bcfaf479919\", \"seq\": 3, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"cat\\\", \\\"cle\\\": \\\"k_retro\\\", \\\"doc_hash\\\": \\\"cf50f14fcd42862b584847181db0fd8f759feec0bd09a3962117019ac97fe014\\\", \\\"extrait\\\": \\\"valeur A\\\", \\\"known_from\\\": 20, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"S\\\", \\\"source_id\\\": \\\"DX\\\", \\\"valeur\\\": \\\"B\\\", \\\"valid_from\\\": 12, \\\"valid_until\\\": null}\", \"hash\": \"2f7500821d1e0b3765d8516e95c006137c7d34ecb5f76deebc624fe3c5ca2100\", \"prev_hash\": \"6702a2651877d0a0f8089ca70aa8ab690742dae64b85a7de0624c53a428b5415\", \"seq\": 4, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"cat\\\", \\\"cle\\\": \\\"k_conflit\\\", \\\"doc_hash\\\": \\\"cf50f14fcd42862b584847181db0fd8f759feec0bd09a3962117019ac97fe014\\\", \\\"extrait\\\": \\\"ex aequo P et Q\\\", \\\"known_from\\\": 10, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"S\\\", \\\"source_id\\\": \\\"DX\\\", \\\"valeur\\\": \\\"P\\\", \\\"valid_from\\\": 10, \\\"valid_until\\\": null}\", \"hash\": \"a9d85a93a4fe9c617e9419452eae5befbf4bc299f2320d9504f5a40bc9b77d65\", \"prev_hash\": \"2f7500821d1e0b3765d8516e95c006137c7d34ecb5f76deebc624fe3c5ca2100\", \"seq\": 5, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"cat\\\", \\\"cle\\\": \\\"k_conflit\\\", \\\"doc_hash\\\": \\\"cf50f14fcd42862b584847181db0fd8f759feec0bd09a3962117019ac97fe014\\\", \\\"extrait\\\": \\\"ex aequo P et Q\\\", \\\"known_from\\\": 10, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"S\\\", \\\"source_id\\\": \\\"DX\\\", \\\"valeur\\\": \\\"Q\\\", \\\"valid_from\\\": 10, \\\"valid_until\\\": null}\", \"hash\": \"55398bd5a85524699801be500d2fd86eb5071f8dde0cbff1c94b8551a8705dfe\", \"prev_hash\": \"a9d85a93a4fe9c617e9419452eae5befbf4bc299f2320d9504f5a40bc9b77d65\", \"seq\": 6, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"cat\\\", \\\"cle\\\": \\\"k_ambigu\\\", \\\"doc_hash\\\": \\\"cf50f14fcd42862b584847181db0fd8f759feec0bd09a3962117019ac97fe014\\\", \\\"extrait\\\": \\\"double ancrage D.\\\", \\\"known_from\\\": 10, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"S\\\", \\\"source_id\\\": \\\"DX\\\", \\\"valeur\\\": \\\"D\\\", \\\"valid_from\\\": 10, \\\"valid_until\\\": null}\", \"hash\": \"b25aa023e0b2bc485c12e99cbc041a7b741936afaa994c0f88d2ca8ff987eb35\", \"prev_hash\": \"55398bd5a85524699801be500d2fd86eb5071f8dde0cbff1c94b8551a8705dfe\", \"seq\": 7, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"cat\\\", \\\"cle\\\": \\\"k_ambigu\\\", \\\"doc_hash\\\": \\\"cf50f14fcd42862b584847181db0fd8f759feec0bd09a3962117019ac97fe014\\\", \\\"extrait\\\": \\\"valeur A\\\", \\\"known_from\\\": 10, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"S\\\", \\\"source_id\\\": \\\"DX\\\", \\\"valeur\\\": \\\"D\\\", \\\"valid_from\\\": 10, \\\"valid_until\\\": null}\", \"hash\": \"d05caabf7e1ce215aafda2056a3abf236002ca3307e2f6dc1d7a6cc6859d6e7c\", \"prev_hash\": \"b25aa023e0b2bc485c12e99cbc041a7b741936afaa994c0f88d2ca8ff987eb35\", \"seq\": 8, \"type\": \"ANCRAGE\"}], \"n_events\": 8, \"registry_id\": \"425229f0-a776-4eab-8c1c-02efb996ebef\", \"signature_hex\": \"15dd279fc64c192f3ab977d4d92143482dad047373894a182f2e0b61c4730d5fe1c1c02f00ef3aba0a108c578a956059b5d362481a162dc0ca2724249c758d09\"}",
   "motif": "l'instantane E1 scelle NE PEUT PAS declencher VALEUR_CORRIGEE_RETRO, CONFLIT_D_ETAT ni AMBIGUITE_D_ANCRAGE : aucune paire ex aequo, aucune (cle,valeur) dupliquee, aucune correction retroactive. Etabli par sondage.",
   "sha256_instantane": "ffd5e4ec64101105d030cee842dfeb52e003454de59a21588d5ed598b97cf5ce"
  }
 },
 "VECTEURS_P8_V06_HISTORIQUE": {
  "cas": [
   {
    "affirmation": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "doc_hash_cite": null,
     "extrait_cite": "le tarif mensuel du service principal est porté à 9 100 $",
     "section_citee": "avenant_2",
     "source_citee": "DOC-6B",
     "t_raisonnement": 20260716,
     "valeur": "9 100 $ par mois"
    },
    "claim": "vivant",
    "claim_brut": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
     "section": "avenant_2",
     "source_id": "DOC-6B",
     "valeur": "9 100 $ par mois"
    },
    "claim_id": "c1-a8f57521e3b4",
    "claim_id_charge_canonique": "{\"claim\": {\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"extrait\": \"le tarif mensuel du service principal est porté à 9 100 $\", \"section\": \"avenant_2\", \"source_id\": \"DOC-6B\", \"valeur\": \"9 100 $ par mois\"}, \"t_raisonnement\": 20260716}",
    "claim_id_formule": "c{index}-sha256(canon({claim, t_raisonnement}))[:12], index base 1",
    "defauts": [],
    "empreinte_affirmation": "a1e353b58d5a56c8ac641e6db8a6179f767233c6942175e1cfbe9c69398f0700",
    "empreinte_entree": "1257c222147a02d55601f98b728e9fc780def3b3d43e01ddb9ac1944f85db8d4",
    "empreinte_gouvernee": "87797946ff43f236dc0330f2cba8596d91def84bcaf29ab658b1abc8dd28881a",
    "empreinte_lot": "f79ae76c2ab576b1a31b473a1f8d28b0f6b4895bf84fba599808e5e53ee3c4b0",
    "empreinte_plancher": "68d2f0739e3a58c0c24c32b5fa0ade86266a9debe94f4ff08db83911a2f20963",
    "entree_ancree": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "section": "avenant_2",
     "seq": 39,
     "source_id": "DOC-6B",
     "valeur": "9 100 $ par mois"
    },
    "non_affichees": 0,
    "octets": 363,
    "plancher_verifie": true,
    "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
    "rapport": {
     "empreinte_lot": "f79ae76c2ab576b1a31b473a1f8d28b0f6b4895bf84fba599808e5e53ee3c4b0",
     "gouvernees": [
      {
       "categorie": "contrat.tarif",
       "cle": "tarif_service_principal",
       "defauts": [],
       "verdict": "AUTORISE"
      }
     ],
     "non_affichees": 0,
     "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
     "t_raisonnement": 20260716,
     "verdicts_reveles": 1
    },
    "rapport_serialise": "{\"empreinte_lot\": \"f79ae76c2ab576b1a31b473a1f8d28b0f6b4895bf84fba599808e5e53ee3c4b0\", \"gouvernees\": [{\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"defauts\": [], \"verdict\": \"AUTORISE\"}], \"non_affichees\": 0, \"racine_plancher\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"t_raisonnement\": 20260716, \"verdicts_reveles\": 1}",
    "sha256_instantane": "68d2f0739e3a58c0c24c32b5fa0ade86266a9debe94f4ff08db83911a2f20963",
    "sha256_rapport": "ddd8037f5df80e08943d7d9749f0e5b9aa3e265fbd2470d7d4e777212c9e47fc",
    "verdict": "AUTORISE",
    "verdicts_reveles": 1
   },
   {
    "affirmation": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "doc_hash_cite": null,
     "extrait_cite": "Le tarif mensuel du service principal est de 8 400 $",
     "section_citee": "contrat",
     "source_citee": "DOC-6A",
     "t_raisonnement": 20260716,
     "valeur": "8 400 $ par mois"
    },
    "claim": "perime",
    "claim_brut": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "extrait": "Le tarif mensuel du service principal est de 8 400 $",
     "section": "contrat",
     "source_id": "DOC-6A",
     "valeur": "8 400 $ par mois"
    },
    "claim_id": "c1-e9c1dea3fbbc",
    "claim_id_charge_canonique": "{\"claim\": {\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"extrait\": \"Le tarif mensuel du service principal est de 8 400 $\", \"section\": \"contrat\", \"source_id\": \"DOC-6A\", \"valeur\": \"8 400 $ par mois\"}, \"t_raisonnement\": 20260716}",
    "claim_id_formule": "c{index}-sha256(canon({claim, t_raisonnement}))[:12], index base 1",
    "defauts": [
     "VALEUR_PERIMEE"
    ],
    "empreinte_affirmation": "004a3649f138f72eedc7fde276765c3636bcd2910289e7700a579f439605f2fb",
    "empreinte_entree": "1257c222147a02d55601f98b728e9fc780def3b3d43e01ddb9ac1944f85db8d4",
    "empreinte_gouvernee": "7fcfcb5252b946882ce7d1f48b488073c9bbc15f985c5473630cf824ae089f70",
    "empreinte_lot": "f47eed1867c30d44695d7d128aee2a525e4e4caf2838f41deb5c8191b5bf222a",
    "empreinte_plancher": "68d2f0739e3a58c0c24c32b5fa0ade86266a9debe94f4ff08db83911a2f20963",
    "entree_ancree": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "section": "avenant_2",
     "seq": 39,
     "source_id": "DOC-6B",
     "valeur": "9 100 $ par mois"
    },
    "non_affichees": 0,
    "octets": 377,
    "plancher_verifie": true,
    "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
    "rapport": {
     "empreinte_lot": "f47eed1867c30d44695d7d128aee2a525e4e4caf2838f41deb5c8191b5bf222a",
     "gouvernees": [
      {
       "categorie": "contrat.tarif",
       "cle": "tarif_service_principal",
       "defauts": [
        "VALEUR_PERIMEE"
       ],
       "verdict": "BLOQUE"
      }
     ],
     "non_affichees": 0,
     "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
     "t_raisonnement": 20260716,
     "verdicts_reveles": 1
    },
    "rapport_serialise": "{\"empreinte_lot\": \"f47eed1867c30d44695d7d128aee2a525e4e4caf2838f41deb5c8191b5bf222a\", \"gouvernees\": [{\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"defauts\": [\"VALEUR_PERIMEE\"], \"verdict\": \"BLOQUE\"}], \"non_affichees\": 0, \"racine_plancher\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"t_raisonnement\": 20260716, \"verdicts_reveles\": 1}",
    "sha256_instantane": "68d2f0739e3a58c0c24c32b5fa0ade86266a9debe94f4ff08db83911a2f20963",
    "sha256_rapport": "17bdca20973507bbbc6a9b5fe84920fd84ade87623e12374018abbea5c19fcd8",
    "verdict": "BLOQUE",
    "verdicts_reveles": 1
   }
  ],
  "chaine_des_empreintes": {
   "empreinte_affirmation": "_sha(_canon({cle, valeur, categorie, source_citee, t_raisonnement, section_citee, extrait_cite, doc_hash_cite}))",
   "empreinte_entree": "_sha(_canon({cle, valeur, categorie, source_id, section, seq})) ou « AUCUNE » si None",
   "empreinte_gouvernee": "_sha(_canon({claim_id, empreinte_affirmation, t_raisonnement, verdict, defauts, entree, racine_plancher}))",
   "empreinte_lot": "_sha(_canon({racine, plancher, verifie, gouvernees}))",
   "note_plancher": "plancher = empreinte_plancher = sha256 des OCTETS de l'instantane"
  },
  "invalidation": {
   "champs_invalides": [
    "empreinte_lot",
    "rapport.empreinte_lot",
    "rapport_serialise",
    "sha256_rapport",
    "octets"
   ],
   "champs_toujours_valides": [
    "racine_plancher",
    "t_raisonnement",
    "gouvernees[].cle",
    "gouvernees[].categorie",
    "gouvernees[].verdict",
    "gouvernees[].defauts",
    "non_affichees",
    "verdicts_reveles"
   ],
   "cible": "VECTEURS_GOUVERNANCE_V02.json §P8_rapport",
   "motif": "le generateur V02 appelait REG.construire() : l'instantane portait une signature Ed25519 et une cle publique engendrees a neuf a chaque execution, et empreinte_lot incorpore le SHA-256 de ces octets",
   "v02_non_modifie": true
  },
  "piege_cle_publique": {
   "avertissement_typescript": "en TS cette confusion ne leverait AUCUNE exception : le defaut y serait SILENCIEUX",
   "constat": "la cle publique est stockee en JSON comme CHAINE ; l'API du noyau attend des OCTETS",
   "symptome_en_python": "clé publique invalide (TypeError) -> presente comme un refus d'authenticite"
  },
  "reference": {
   "arret_bloc_p8": "7be27af9c302c6295d10695d60f97451b63059da2d7a656ebcec33875c0fff4f",
   "complete": "VECTEURS_GOUVERNANCE_V02.json",
   "contrat": "1bf56b8482ee1a083ab9eeb6970bf3d77e16ef2aa1bc11994c0528a614e29b1f",
   "methode": "aucune sortie n'est predite ; tout est ENREGISTRE depuis le Python gele, execute sur l'instantane DEJA SCELLE — aucun registre n'est reconstruit",
   "preenregistre_avant_port": false,
   "provenance_honnete": "V06 est POSTERIEUR a la premiere simulation P8 (47/53) et redige en connaissance de la divergence observee. Il ne doit jamais etre presente comme un oracle preenregistre.",
   "sha256_p0p4": "b42e8b45e008760b1f7b71c77845a1ed8e8e18eb02dd14606cc485dea3633398",
   "sha256_v02": "d50e594175c18ba3508fc27f48ddc7843b007ffcc12ed5e97b6da368d3be00f9"
  },
  "temoin_negatif": {
   "pourquoi": "un rapport dont UN octet differe DOIT donner un autre SHA",
   "sha_attendu_different": "f0d13f65bfa6ac96ef121bda0b6246e0bb6c1ac10f0f2f6f89d76ed7278956d5"
  }
 },
 "VECTEURS_P8_V07": {
  "cas": [
   {
    "affirmation": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "doc_hash_cite": null,
     "extrait_cite": "le tarif mensuel du service principal est porté à 9 100 $",
     "section_citee": "avenant_2",
     "source_citee": "DOC-6B",
     "t_raisonnement": 20260716,
     "valeur": "9 100 $ par mois"
    },
    "claim": "vivant",
    "claim_brut": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "extrait": "le tarif mensuel du service principal est porté à 9 100 $",
     "section": "avenant_2",
     "source_id": "DOC-6B",
     "valeur": "9 100 $ par mois"
    },
    "claim_id": "c1-a8f57521e3b4",
    "claim_id_charge_canonique": "{\"claim\": {\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"extrait\": \"le tarif mensuel du service principal est porté à 9 100 $\", \"section\": \"avenant_2\", \"source_id\": \"DOC-6B\", \"valeur\": \"9 100 $ par mois\"}, \"t_raisonnement\": 20260716}",
    "claim_id_formule": "c{index}-sha256(canon({claim, t_raisonnement}))[:12], index base 1",
    "defauts": [],
    "empreinte_affirmation": "a1e353b58d5a56c8ac641e6db8a6179f767233c6942175e1cfbe9c69398f0700",
    "empreinte_entree": "1257c222147a02d55601f98b728e9fc780def3b3d43e01ddb9ac1944f85db8d4",
    "empreinte_gouvernee": "87797946ff43f236dc0330f2cba8596d91def84bcaf29ab658b1abc8dd28881a",
    "empreinte_lot": "d541f23cdaf45bc1ff55b2bd875eeb7d96a662400a8de25519f86daaa5abbe57",
    "empreinte_plancher": "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
    "entree_ancree": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "section": "avenant_2",
     "seq": 39,
     "source_id": "DOC-6B",
     "valeur": "9 100 $ par mois"
    },
    "non_affichees": 0,
    "octets": 363,
    "plancher_verifie": true,
    "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
    "rapport": {
     "empreinte_lot": "d541f23cdaf45bc1ff55b2bd875eeb7d96a662400a8de25519f86daaa5abbe57",
     "gouvernees": [
      {
       "categorie": "contrat.tarif",
       "cle": "tarif_service_principal",
       "defauts": [],
       "verdict": "AUTORISE"
      }
     ],
     "non_affichees": 0,
     "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
     "t_raisonnement": 20260716,
     "verdicts_reveles": 1
    },
    "rapport_serialise": "{\"empreinte_lot\": \"d541f23cdaf45bc1ff55b2bd875eeb7d96a662400a8de25519f86daaa5abbe57\", \"gouvernees\": [{\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"defauts\": [], \"verdict\": \"AUTORISE\"}], \"non_affichees\": 0, \"racine_plancher\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"t_raisonnement\": 20260716, \"verdicts_reveles\": 1}",
    "sha256_instantane": "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
    "sha256_rapport": "0bc0513053145ee16f2a9d714775248cba50cd8d8062ae8a870f27635aba7946",
    "verdict": "AUTORISE",
    "verdicts_reveles": 1
   },
   {
    "affirmation": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "doc_hash_cite": null,
     "extrait_cite": "Le tarif mensuel du service principal est de 8 400 $",
     "section_citee": "contrat",
     "source_citee": "DOC-6A",
     "t_raisonnement": 20260716,
     "valeur": "8 400 $ par mois"
    },
    "claim": "perime",
    "claim_brut": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "extrait": "Le tarif mensuel du service principal est de 8 400 $",
     "section": "contrat",
     "source_id": "DOC-6A",
     "valeur": "8 400 $ par mois"
    },
    "claim_id": "c1-e9c1dea3fbbc",
    "claim_id_charge_canonique": "{\"claim\": {\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"extrait\": \"Le tarif mensuel du service principal est de 8 400 $\", \"section\": \"contrat\", \"source_id\": \"DOC-6A\", \"valeur\": \"8 400 $ par mois\"}, \"t_raisonnement\": 20260716}",
    "claim_id_formule": "c{index}-sha256(canon({claim, t_raisonnement}))[:12], index base 1",
    "defauts": [
     "VALEUR_PERIMEE"
    ],
    "empreinte_affirmation": "004a3649f138f72eedc7fde276765c3636bcd2910289e7700a579f439605f2fb",
    "empreinte_entree": "1257c222147a02d55601f98b728e9fc780def3b3d43e01ddb9ac1944f85db8d4",
    "empreinte_gouvernee": "7fcfcb5252b946882ce7d1f48b488073c9bbc15f985c5473630cf824ae089f70",
    "empreinte_lot": "29c4bd30dba4bf2bf8b81940c1f75f7e8170caeb55a55c2af7d3a0c6a01f54e6",
    "empreinte_plancher": "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
    "entree_ancree": {
     "categorie": "contrat.tarif",
     "cle": "tarif_service_principal",
     "section": "avenant_2",
     "seq": 39,
     "source_id": "DOC-6B",
     "valeur": "9 100 $ par mois"
    },
    "non_affichees": 0,
    "octets": 377,
    "plancher_verifie": true,
    "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
    "rapport": {
     "empreinte_lot": "29c4bd30dba4bf2bf8b81940c1f75f7e8170caeb55a55c2af7d3a0c6a01f54e6",
     "gouvernees": [
      {
       "categorie": "contrat.tarif",
       "cle": "tarif_service_principal",
       "defauts": [
        "VALEUR_PERIMEE"
       ],
       "verdict": "BLOQUE"
      }
     ],
     "non_affichees": 0,
     "racine_plancher": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
     "t_raisonnement": 20260716,
     "verdicts_reveles": 1
    },
    "rapport_serialise": "{\"empreinte_lot\": \"29c4bd30dba4bf2bf8b81940c1f75f7e8170caeb55a55c2af7d3a0c6a01f54e6\", \"gouvernees\": [{\"categorie\": \"contrat.tarif\", \"cle\": \"tarif_service_principal\", \"defauts\": [\"VALEUR_PERIMEE\"], \"verdict\": \"BLOQUE\"}], \"non_affichees\": 0, \"racine_plancher\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"t_raisonnement\": 20260716, \"verdicts_reveles\": 1}",
    "sha256_instantane": "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
    "sha256_rapport": "db76ff76e0fa4d4457abae2b3ce265de6e7d8493f8ebc96723dad0d3b9fd8ff5",
    "verdict": "BLOQUE",
    "verdicts_reveles": 1
   }
  ],
  "chaine_des_empreintes": {
   "empreinte_affirmation": "_sha(_canon({cle, valeur, categorie, source_citee, t_raisonnement, section_citee, extrait_cite, doc_hash_cite}))",
   "empreinte_entree": "_sha(_canon({cle, valeur, categorie, source_id, section, seq})) ou « AUCUNE » si None",
   "empreinte_gouvernee": "_sha(_canon({claim_id, empreinte_affirmation, t_raisonnement, verdict, defauts, entree, racine_plancher}))",
   "empreinte_lot": "_sha(_canon({racine, plancher, verifie, gouvernees}))",
   "note_plancher": "plancher = empreinte_plancher = sha256 des OCTETS de l'instantane"
  },
  "identite_cryptographique": {
   "cle_privee": "DÉTRUITE — jamais écrite ; engendrée en mémoire, disparue avec le processus",
   "consequence": "aucune extension ni re-signature n'est possible sous la MÊME identité cryptographique. Un registre successeur resterait possible uniquement avec une NOUVELLE clé et un protocole de rotation explicite, à définir. Aucun tel protocole n'existe aujourd'hui."
  },
  "piege_cle_publique": {
   "avertissement_typescript": "en TS cette confusion ne leverait AUCUNE exception : le defaut y serait SILENCIEUX",
   "constat": "la cle publique est stockee en JSON comme CHAINE ; l'API du noyau attend des OCTETS",
   "symptome_en_python": "clé publique invalide (TypeError) -> presente comme un refus d'authenticite"
  },
  "reference": {
   "cle_publique": "INSTANTANE_E1_V2_SCELLE/cle_publique_e1_v2.pem",
   "instantane": "INSTANTANE_E1_V2_SCELLE/instantane_e1_v2.json",
   "methode": "aucune sortie n'est predite ; tout est ENREGISTRE depuis le Python gele, execute sur l'instantane DEJA SCELLE — construire() n'est JAMAIS appele",
   "preenregistre_avant_jonction": true,
   "preenregistre_avant_port": false,
   "provenance_honnete": "V07 succede a V06. Le port P8 existait deja lors de sa production : preenregistre_avant_port vaut false. Il est en revanche scelle AVANT toute ligne de code de jonction.",
   "sha256_cle_publique": "b3f72ceda7bc25d4e1f93932851e48442f07b5d8fdc8ef3c5af2a1250dca8765",
   "sha256_instantane": "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
   "sha256_v06_historique": "280dfa4ce2b3c229915b3811d5cf10e127e33b9b53a4935308dbece4676c6db5"
  },
  "remplacement_de_references": {
   "ancienne_empreinte_plancher": "68d2f0739e3a58c0c24c32b5fa0ade86266a9debe94f4ff08db83911a2f20963",
   "champs_dont_les_valeurs_V06_cessent_d_etre_ACTIVES": [
    "empreinte_plancher",
    "sha256_instantane",
    "empreinte_lot",
    "rapport.empreinte_lot",
    "rapport_serialise",
    "sha256_rapport",
    "octets"
   ],
   "champs_inchanges_entre_V06_et_V07": [
    "racine_plancher",
    "claim_id",
    "empreinte_affirmation",
    "empreinte_entree",
    "empreinte_gouvernee",
    "verdict",
    "defauts",
    "non_affichees",
    "verdicts_reveles"
   ],
   "nouvelle_empreinte_plancher": "9f694a38f1870501557f23c2f29e8d5033e46635376a426662407d5348a8ddcf",
   "v06_non_declare_retroactivement_invalide": true,
   "v06_non_modifie": true,
   "v06_reste_artefact_historique": true
  },
  "temoin_negatif": {
   "pourquoi": "un rapport dont UN octet differe DOIT donner un autre SHA",
   "sha_attendu_different": "114ff89663f95e9cb5852e2086a6aa54685018c3b7f06af59a57b368ebd635f4"
  }
 },
 "VECTEURS_PARITE_V01": {
  "P0_P2_instantane": {
   "charge_signee_hex": "7b226e5f6576656e7473223a2034342c202272656769737472795f6964223a202239323636643962302d373363642d343765322d396562372d646434613236333962323139222c2022726f6f74223a202262313736366164366363323631376435353266323631313737383433376364343665653065626565373764633736323233613334656332363238393262363165227d",
   "charge_signee_utf8": "{\"n_events\": 44, \"registry_id\": \"9266d9b0-73cd-47e2-9eb7-dd4a2639b219\", \"root\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\"}",
   "cle_publique_pem": "-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEA0V5BZEBfpNB37TUaPBaaUeCCKgG/SKRn2g/8m9aqSBo=\n-----END PUBLIC KEY-----\n",
   "declared_root": "b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e",
   "instantane_octets": 20345,
   "instantane_utf8": "{\"declared_root\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"events\": [{\"data\": \"{\\\"doc_hash\\\": \\\"dd5e5506770d583f6254884de7a08d37fa65acc9f1ce3b61d6592ee4a9f53ced\\\", \\\"source_id\\\": \\\"DOC-4A\\\"}\", \"hash\": \"385c402641506612092385a3e13fbf29da0f7e8f111f718d3977585d4e662a0b\", \"prev_hash\": \"GENESIS\", \"seq\": 1, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"691bbd7aa8d7f43260a9f57afb078a5328d13f43469db348c1ae147aa149fd4e\\\", \\\"source_id\\\": \\\"DOC-4B\\\"}\", \"hash\": \"2e048683f9711cb163193b91f085dd90c9a6a030f2de6f0f7e7ac5db76546d79\", \"prev_hash\": \"385c402641506612092385a3e13fbf29da0f7e8f111f718d3977585d4e662a0b\", \"seq\": 2, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"fcfd6d956ffd908d2fe1de38cbe46ff2f0432d88e8269bace3b04ec8fe758c73\\\", \\\"source_id\\\": \\\"DOC-4C\\\"}\", \"hash\": \"35255540e8872596477d0e915f41cea9bb787752d3e2b70b5fafd714b45d825c\", \"prev_hash\": \"2e048683f9711cb163193b91f085dd90c9a6a030f2de6f0f7e7ac5db76546d79\", \"seq\": 3, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"source_id\\\": \\\"DOC-4D\\\"}\", \"hash\": \"66be386402ab8d62d4dec2cd75eaf5fc303c545ea61844f487996b0a88a9a96e\", \"prev_hash\": \"35255540e8872596477d0e915f41cea9bb787752d3e2b70b5fafd714b45d825c\", \"seq\": 4, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"source_id\\\": \\\"DOC-4E\\\"}\", \"hash\": \"b626a3b5425e2044e72565c918f9a63e49484739ee127dc13e884c65753043c5\", \"prev_hash\": \"66be386402ab8d62d4dec2cd75eaf5fc303c545ea61844f487996b0a88a9a96e\", \"seq\": 5, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\"}\", \"hash\": \"afcb2e88fb6e8c7f1ffad1eb9d49b15c56bd9efd4e79f41926ff7757095dd1be\", \"prev_hash\": \"b626a3b5425e2044e72565c918f9a63e49484739ee127dc13e884c65753043c5\", \"seq\": 6, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\"}\", \"hash\": \"9a39a878af3719b5a3e1c4cb17284988f0912b3e046eaed7c379d3b2bfaecdcd\", \"prev_hash\": \"afcb2e88fb6e8c7f1ffad1eb9d49b15c56bd9efd4e79f41926ff7757095dd1be\", \"seq\": 7, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.fenetre\\\"}\", \"hash\": \"8b40304c6afc9680f9d79e639535a3aeb4b7884d009dbb1959828721708451b1\", \"prev_hash\": \"9a39a878af3719b5a3e1c4cb17284988f0912b3e046eaed7c379d3b2bfaecdcd\", \"seq\": 8, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\"}\", \"hash\": \"c9e8d3a16675f0c6dea296b38dd277b6478f126f30346a59718272d23cd65414\", \"prev_hash\": \"8b40304c6afc9680f9d79e639535a3aeb4b7884d009dbb1959828721708451b1\", \"seq\": 9, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"dd5e5506770d583f6254884de7a08d37fa65acc9f1ce3b61d6592ee4a9f53ced\\\", \\\"extrait\\\": \\\"migrer vers la version 4.2\\\", \\\"known_from\\\": 20260210, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avis\\\", \\\"source_id\\\": \\\"DOC-4A\\\", \\\"valeur\\\": \\\"4.2\\\", \\\"valid_from\\\": 20260210, \\\"valid_until\\\": null}\", \"hash\": \"d55da5efb3fe4deeb002c1bf3fb80366099c69274c2d3d971a08e4134357139c\", \"prev_hash\": \"c9e8d3a16675f0c6dea296b38dd277b6478f126f30346a59718272d23cd65414\", \"seq\": 10, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"fcfd6d956ffd908d2fe1de38cbe46ff2f0432d88e8269bace3b04ec8fe758c73\\\", \\\"extrait\\\": \\\"la version recommandée est la 4.3\\\", \\\"known_from\\\": 20260303, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r1\\\", \\\"source_id\\\": \\\"DOC-4C\\\", \\\"valeur\\\": \\\"4.3\\\", \\\"valid_from\\\": 20260303, \\\"valid_until\\\": null}\", \"hash\": \"18a5824ffa0e0e67a2487871f96c15baa38dea8b6463d6a9b6ef1cb910997335\", \"prev_hash\": \"d55da5efb3fe4deeb002c1bf3fb80366099c69274c2d3d971a08e4134357139c\", \"seq\": 11, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"extrait\\\": \\\"La version validée par l'équipe sécurité est la 4.3.1\\\", \\\"known_from\\\": 20260321, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r2\\\", \\\"source_id\\\": \\\"DOC-4D\\\", \\\"valeur\\\": \\\"4.3.1\\\", \\\"valid_from\\\": 20260321, \\\"valid_until\\\": null}\", \"hash\": \"0679bac6d05a9e768529a2fcc4715921027ec6ae1b07227d97474159a31221e8\", \"prev_hash\": \"18a5824ffa0e0e67a2487871f96c15baa38dea8b6463d6a9b6ef1cb910997335\", \"seq\": 12, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\", \\\"cle\\\": \\\"paie_compatibilite\\\", \\\"doc_hash\\\": \\\"691bbd7aa8d7f43260a9f57afb078a5328d13f43469db348c1ae147aa149fd4e\\\", \\\"extrait\\\": \\\"Module Paie : compatible jusqu'à la version 4.2 inclusivement, via l'interface de paie standard\\\", \\\"known_from\\\": 20260101, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"matrice\\\", \\\"source_id\\\": \\\"DOC-4B\\\", \\\"valeur\\\": \\\"jusqu'à 4.2 via l'interface de paie standard\\\", \\\"valid_from\\\": 20260101, \\\"valid_until\\\": null}\", \"hash\": \"77af56d917887f534660a01bf86b1234595d70b6c034d628428ed576e1ec8b59\", \"prev_hash\": \"0679bac6d05a9e768529a2fcc4715921027ec6ae1b07227d97474159a31221e8\", \"seq\": 13, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\", \\\"cle\\\": \\\"paie_compatibilite\\\", \\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"extrait\\\": \\\"le connecteur Paie v2, livré à partir de la version 4.3, remplace l'interface de paie standard\\\", \\\"known_from\\\": 20260321, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r2\\\", \\\"source_id\\\": \\\"DOC-4D\\\", \\\"valeur\\\": \\\"connecteur Paie v2 à partir de la version 4.3\\\", \\\"valid_from\\\": 20260321, \\\"valid_until\\\": null}\", \"hash\": \"42fb58ccc951ad68dbef2ba0be423d7f0d9d8fa6628de16ff95777073cca42eb\", \"prev_hash\": \"77af56d917887f534660a01bf86b1234595d70b6c034d628428ed576e1ec8b59\", \"seq\": 14, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.fenetre\\\", \\\"cle\\\": \\\"fenetre_maintenance\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"la fenêtre de maintenance du samedi, entre 22 h et 2 h\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"samedi 22 h à 2 h\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"03a89e30c5e79039f323194c2460f50174f3a9f0f1765bac0b7cca52c6400c4c\", \"prev_hash\": \"42fb58ccc951ad68dbef2ba0be423d7f0d9d8fa6628de16ff95777073cca42eb\", \"seq\": 15, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\", \\\"cle\\\": \\\"sauvegarde_avant\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"Une sauvegarde complète et vérifiée est obligatoire avant toute migration\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"sauvegarde complète et vérifiée obligatoire\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"10e1027e6a0e3a07e1f6ef0f58e1baa5aa37bb48b3de4aa4c093f9cb319246d1\", \"prev_hash\": \"03a89e30c5e79039f323194c2460f50174f3a9f0f1765bac0b7cca52c6400c4c\", \"seq\": 16, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\", \\\"cle\\\": \\\"sauvegarde_conservation\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"les copies de sauvegarde sont conservées quatre-vingt-dix (90) jours\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"90 jours\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"929862c380e2e5d4d9128f0a43802b10fc09e2d178bc63e5310228c3e98ce46d\", \"prev_hash\": \"10e1027e6a0e3a07e1f6ef0f58e1baa5aa37bb48b3de4aa4c093f9cb319246d1\", \"seq\": 17, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"f506ea550f887d52c44f79973b84a054957ca9cd0e7b442147a3555f942c55b2\\\", \\\"source_id\\\": \\\"DOC-5A\\\"}\", \"hash\": \"77dfc398235954655c8e80e0d5e4d1dfdba5eec1731b601dee5bfa38665bf5e9\", \"prev_hash\": \"929862c380e2e5d4d9128f0a43802b10fc09e2d178bc63e5310228c3e98ce46d\", \"seq\": 18, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"source_id\\\": \\\"DOC-5B\\\"}\", \"hash\": \"ef951d9622172ce683adae628a27bcb782c50dc472d98ab21743c8179f85a5b1\", \"prev_hash\": \"77dfc398235954655c8e80e0d5e4d1dfdba5eec1731b601dee5bfa38665bf5e9\", \"seq\": 19, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"2f77e5a73bf2b4b51dfb128e87d6d11e10e0fa16f8c10608708e83a9b89e5f83\\\", \\\"source_id\\\": \\\"DOC-5C\\\"}\", \"hash\": \"b546dda44500c484c321ab7631e5587c086cc0e4db9993fbd87eb9e70cdb6bd3\", \"prev_hash\": \"ef951d9622172ce683adae628a27bcb782c50dc472d98ab21743c8179f85a5b1\", \"seq\": 20, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"904fc10012ba095e13e6c67bdc600376e8320ee64104a40222185dc36fb55949\\\", \\\"source_id\\\": \\\"DOC-5D\\\"}\", \"hash\": \"44c6c8b36d8dd61524e4e9de18002785653d8bf34bc14327b945544b9e537976\", \"prev_hash\": \"b546dda44500c484c321ab7631e5587c086cc0e4db9993fbd87eb9e70cdb6bd3\", \"seq\": 21, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\"}\", \"hash\": \"cd041e2c4d67e52c733cd1beb318864ae9d640a450686f5d3ade3b5cce679287\", \"prev_hash\": \"44c6c8b36d8dd61524e4e9de18002785653d8bf34bc14327b945544b9e537976\", \"seq\": 22, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\"}\", \"hash\": \"133ded638191a047ca44b41dfb962749ee700a47614d988cdc1b0759fa4f8b8e\", \"prev_hash\": \"cd041e2c4d67e52c733cd1beb318864ae9d640a450686f5d3ade3b5cce679287\", \"seq\": 23, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_max_jours\\\", \\\"doc_hash\\\": \\\"2f77e5a73bf2b4b51dfb128e87d6d11e10e0fa16f8c10608708e83a9b89e5f83\\\", \\\"extrait\\\": \\\"le télétravail est limité à deux (2) jours par semaine\\\", \\\"known_from\\\": 20260201, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"memo_rappel\\\", \\\"source_id\\\": \\\"DOC-5C\\\", \\\"valeur\\\": \\\"2 jours par semaine\\\", \\\"valid_from\\\": 20260201, \\\"valid_until\\\": null}\", \"hash\": \"c9cb1f1cb889653d6b05110a8f8c869c8d73dac091f18080a9d645b32142e3da\", \"prev_hash\": \"133ded638191a047ca44b41dfb962749ee700a47614d988cdc1b0759fa4f8b8e\", \"seq\": 24, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_max_jours\\\", \\\"doc_hash\\\": \\\"f506ea550f887d52c44f79973b84a054957ca9cd0e7b442147a3555f942c55b2\\\", \\\"extrait\\\": \\\"peut télétravailler jusqu'à trois (3) jours par semaine\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pol_tt_2026\\\", \\\"source_id\\\": \\\"DOC-5A\\\", \\\"valeur\\\": \\\"3 jours par semaine\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"4b54553681ddca27f027464adda9c55aff26aff2e32326c4ac89c9e30e04872d\", \"prev_hash\": \"c9cb1f1cb889653d6b05110a8f8c869c8d73dac091f18080a9d645b32142e3da\", \"seq\": 25, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"admissibilite_probatoire\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"Ne sont pas admissibles au télétravail régulier : les employés en période probatoire\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"non admissible au télétravail régulier\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"5e4fe25a292ba88d54e13f9847840ce9fff76e83723db5c018a2b32ab769c054\", \"prev_hash\": \"4b54553681ddca27f027464adda9c55aff26aff2e32326c4ac89c9e30e04872d\", \"seq\": 26, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"probation_duree\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"les six premiers mois suivant l'embauche\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"six premiers mois suivant l'embauche\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"d86bc60704c0c3d8d63e975ae70a015ceb762c2a4b4a00e3678808b863219adf\", \"prev_hash\": \"5e4fe25a292ba88d54e13f9847840ce9fff76e83723db5c018a2b32ab769c054\", \"seq\": 27, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"date_embauche_tremblay\\\", \\\"doc_hash\\\": \\\"904fc10012ba095e13e6c67bdc600376e8320ee64104a40222185dc36fb55949\\\", \\\"extrait\\\": \\\"embauchée le 16 mars 2026\\\", \\\"known_from\\\": 20260608, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"courriel_gestionnaire\\\", \\\"source_id\\\": \\\"DOC-5D\\\", \\\"valeur\\\": \\\"16 mars 2026\\\", \\\"valid_from\\\": 20260316, \\\"valid_until\\\": null}\", \"hash\": \"3be6b5b8e820ca16225a2c930922361733c7081ed6b7f70abcd656e6612784fc\", \"prev_hash\": \"d86bc60704c0c3d8d63e975ae70a015ceb762c2a4b4a00e3678808b863219adf\", \"seq\": 28, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_exception_probatoire_autorite\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"uniquement par décision du comité RH, sur recommandation écrite du gestionnaire\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"décision du comité RH sur recommandation écrite du gestionnaire\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"de43bdde0d7e179cb137ecfa8480ca660db0aa3c87a61489fb3f2845f92272e8\", \"prev_hash\": \"3be6b5b8e820ca16225a2c930922361733c7081ed6b7f70abcd656e6612784fc\", \"seq\": 29, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"source_id\\\": \\\"DOC-6A\\\"}\", \"hash\": \"d69bcc38e05d1c5fa4cfb6ed2e4c303d776add2205829123a75c3b6b772d0b27\", \"prev_hash\": \"de43bdde0d7e179cb137ecfa8480ca660db0aa3c87a61489fb3f2845f92272e8\", \"seq\": 30, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"source_id\\\": \\\"DOC-6B\\\"}\", \"hash\": \"cbf4e315da8bc225114628f18dd95a9e52db9f36a825b4a1766ae4ba261f38fa\", \"prev_hash\": \"d69bcc38e05d1c5fa4cfb6ed2e4c303d776add2205829123a75c3b6b772d0b27\", \"seq\": 31, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"1825e1bc7964086bd7413dc4336a416ce6a5bac91a13d014032c4044fb2b008d\\\", \\\"source_id\\\": \\\"DOC-6C\\\"}\", \"hash\": \"c457c9d16300b0c618e5ff03f96d1525b871d051f8b7974470e5a1058feedafc\", \"prev_hash\": \"cbf4e315da8bc225114628f18dd95a9e52db9f36a825b4a1766ae4ba261f38fa\", \"seq\": 32, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"f4ac925d42fbd3a4073104ef6535b719b56aedfa2420dc569827048637a9a68c\\\", \\\"source_id\\\": \\\"DOC-6D\\\"}\", \"hash\": \"3f2ab28b95cbfe44549c3fd28d27b1f0e84ff22b402a9456f8cffd84a280418e\", \"prev_hash\": \"c457c9d16300b0c618e5ff03f96d1525b871d051f8b7974470e5a1058feedafc\", \"seq\": 33, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\"}\", \"hash\": \"d1d2e5b846b3338bebdb911afd566c880cd790f54675db34e12a54e3547c3a83\", \"prev_hash\": \"3f2ab28b95cbfe44549c3fd28d27b1f0e84ff22b402a9456f8cffd84a280418e\", \"seq\": 34, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\"}\", \"hash\": \"934c54daa8b1eda72452baaeaf235d4a115c68e4daed5793d9e69caf8f862852\", \"prev_hash\": \"d1d2e5b846b3338bebdb911afd566c880cd790f54675db34e12a54e3547c3a83\", \"seq\": 35, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.preavis\\\"}\", \"hash\": \"4961a713586810773599dd43479a1be647de59898a42f7d3818514036f9fa5ad\", \"prev_hash\": \"934c54daa8b1eda72452baaeaf235d4a115c68e4daed5793d9e69caf8f862852\", \"seq\": 36, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.resiliation\\\"}\", \"hash\": \"0031fbdeadb883d120ef74e8fd7a1421c6c64d9a31db9ef3f3ce07cdcc203f4b\", \"prev_hash\": \"4961a713586810773599dd43479a1be647de59898a42f7d3818514036f9fa5ad\", \"seq\": 37, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_service_principal\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"Le tarif mensuel du service principal est de 8 400 $\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"8 400 $ par mois\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"59cc95d1311f0265c92bf552ae0fb6f2acd429216835300abccd9db0bf47dd1e\", \"prev_hash\": \"0031fbdeadb883d120ef74e8fd7a1421c6c64d9a31db9ef3f3ce07cdcc203f4b\", \"seq\": 38, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_service_principal\\\", \\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"extrait\\\": \\\"le tarif mensuel du service principal est porté à 9 100 $\\\", \\\"known_from\\\": 20250215, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avenant_2\\\", \\\"source_id\\\": \\\"DOC-6B\\\", \\\"valeur\\\": \\\"9 100 $ par mois\\\", \\\"valid_from\\\": 20250401, \\\"valid_until\\\": null}\", \"hash\": \"4a9fce458bcf496a41ff1d2fc2a06e2870ae93b0e82c36c475aa7fcc5981e48c\", \"prev_hash\": \"59cc95d1311f0265c92bf552ae0fb6f2acd429216835300abccd9db0bf47dd1e\", \"seq\": 39, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_optionnels_validite\\\", \\\"doc_hash\\\": \\\"1825e1bc7964086bd7413dc4336a416ce6a5bac91a13d014032c4044fb2b008d\\\", \\\"extrait\\\": \\\"les tarifs des services optionnels de la présente grille demeurent en vigueur\\\", \\\"known_from\\\": 20250201, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"grille\\\", \\\"source_id\\\": \\\"DOC-6C\\\", \\\"valeur\\\": \\\"grille 2024 en vigueur\\\", \\\"valid_from\\\": 20250201, \\\"valid_until\\\": null}\", \"hash\": \"591c432448daf5508eb5f6ceee41cca57d2098685e26016b751a5660558875bc\", \"prev_hash\": \"4a9fce458bcf496a41ff1d2fc2a06e2870ae93b0e82c36c475aa7fcc5981e48c\", \"seq\": 40, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\", \\\"cle\\\": \\\"duree_initiale_contrat\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"pour une durée de vingt-quatre (24) mois\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"24 mois\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"a1161b95afda42fa2fc63e46c8d6863f6df75275e8208f062e0c9bf8f639ee3a\", \"prev_hash\": \"591c432448daf5508eb5f6ceee41cca57d2098685e26016b751a5660558875bc\", \"seq\": 41, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\", \\\"cle\\\": \\\"prolongation_duree_contrat\\\", \\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"extrait\\\": \\\"La durée initiale du contrat est prolongée de six (6) mois\\\", \\\"known_from\\\": 20250215, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avenant_2\\\", \\\"source_id\\\": \\\"DOC-6B\\\", \\\"valeur\\\": \\\"6 mois\\\", \\\"valid_from\\\": 20250215, \\\"valid_until\\\": null}\", \"hash\": \"c91b6d4b7bc862dee30f2b277914b97de4477c15bb95ae69c9cf7911d80cbed6\", \"prev_hash\": \"a1161b95afda42fa2fc63e46c8d6863f6df75275e8208f062e0c9bf8f639ee3a\", \"seq\": 42, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.preavis\\\", \\\"cle\\\": \\\"preavis_delai\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"sauf préavis écrit de non-renouvellement reçu au moins quatre-vingt-dix (90) jours avant l'échéance\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"au moins 90 jours avant l'échéance\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"dba1f0d800c9238d0d6f8e349c693f05bf00a8dd4b2fd5ad4d2d473f40551d17\", \"prev_hash\": \"c91b6d4b7bc862dee30f2b277914b97de4477c15bb95ae69c9cf7911d80cbed6\", \"seq\": 43, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.resiliation\\\", \\\"cle\\\": \\\"resiliation_manquement\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"la résiliation exige une mise en demeure écrite et un délai de correction de trente (30) jours\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"mise en demeure écrite et délai de correction de 30 jours\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"prev_hash\": \"dba1f0d800c9238d0d6f8e349c693f05bf00a8dd4b2fd5ad4d2d473f40551d17\", \"seq\": 44, \"type\": \"ANCRAGE\"}], \"n_events\": 44, \"registry_id\": \"9266d9b0-73cd-47e2-9eb7-dd4a2639b219\", \"signature_hex\": \"8558774d2443c2e4ec84eae76d18f81c7b08b38973f5b541d88f38a6aca9d76dbcb3d7700a0a83bfe5f404e309eea4376ed0e8566f60eb3bf95a1ec3cfe6d40c\"}",
   "n_events": 44,
   "note": "La signature porte sur payload_signature(registry_id, n_events, root), PAS sur l'instantane entier. Le TS doit reconstruire EXACTEMENT ces octets-la pour verifier.",
   "registry_id": "9266d9b0-73cd-47e2-9eb7-dd4a2639b219",
   "sha256_charge_signee": "760f2bf0521ce152f6e29f79083658b602da96b4b86e117db7d2a70ebf62fe98",
   "sha256_instantane": "68d2f0739e3a58c0c24c32b5fa0ade86266a9debe94f4ff08db83911a2f20963",
   "signature_hex": "8558774d2443c2e4ec84eae76d18f81c7b08b38973f5b541d88f38a6aca9d76dbcb3d7700a0a83bfe5f404e309eea4376ed0e8566f60eb3bf95a1ec3cfe6d40c",
   "verification_python": [
    true,
    "authentique : chaîne reliée à la racine + signature Ed25519 valide sous la clé épinglée"
   ]
  },
  "P1_sha256": [
   {
    "entree_utf8": "",
    "etiquette": "vide",
    "octets_hex": "",
    "sha256_attendu": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
   },
   {
    "entree_utf8": "abc",
    "etiquette": "ascii simple",
    "octets_hex": "616263",
    "sha256_attendu": "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
   },
   {
    "entree_utf8": "revisee en V2 — echeance a 9 100 $",
    "etiquette": "accents francais",
    "octets_hex": "7265766973656520656e20563220e280942065636865616e636520612039203130302024",
    "sha256_attendu": "faa07d8a5b83e7bdf8fc964fbfc435d71c5b8a824062f6fb00a2906686d93956"
   },
   {
    "entree_utf8": "« samedi, 22 h a 2 h »",
    "etiquette": "guillemets typographiques",
    "octets_hex": "c2ab2073616d6564692c203232206820612032206820c2bb",
    "sha256_attendu": "b669477a407550bce9a330a4a705e12aafbaf9a7231cd7aee1619dd1a9486da6"
   },
   {
    "entree_utf8": "l'equipe securite",
    "etiquette": "apostrophe courbe",
    "octets_hex": "6c27657175697065207365637572697465",
    "sha256_attendu": "629deff282302676b14b302c1cbe29cc54605f2710d4c8b6bce0fa074330e7be"
   },
   {
    "entree_utf8": "période probatoire · à compter du 13ᵉ mois",
    "etiquette": "multi-octets",
    "octets_hex": "70c3a972696f64652070726f6261746f69726520c2b720c3a020636f6d70746572206475203133e1b589206d6f6973",
    "sha256_attendu": "a8f107a4936a59b986ce126192494f4fa4adea4cda6b0ad70482d746aa94bb50"
   },
   {
    "entree_utf8": "clause 🔒 scellee",
    "etiquette": "emoji hors BMP",
    "octets_hex": "636c6175736520f09f9492207363656c6c6565",
    "sha256_attendu": "2e6969b6b47c82ed6157b946543608a202fe59daea7d6763cde69dd6625718c7"
   },
   {
    "entree_utf8": "ligne1\nligne2",
    "etiquette": "saut de ligne",
    "octets_hex": "6c69676e65310a6c69676e6532",
    "sha256_attendu": "8fc1e3b40481784836b47e02f1c52f41b4968b48d9689a71864a7b460de9bd55"
   },
   {
    "entree_utf8": "a\tb",
    "etiquette": "tabulation",
    "octets_hex": "610962",
    "sha256_attendu": "894891f8b78a9945b0aa07e70d5f71f10b1f1990af127de561cc0ac36024c188"
   },
   {
    "entree_utf8": "a|b|c",
    "etiquette": "barre verticale (separateur de calc_hash)",
    "octets_hex": "617c627c63",
    "sha256_attendu": "a52dd81bfd5e4e66d96b9f598382f6cbf8c5c3897654e6ae9055e03620fcf38e"
   },
   {
    "entree_utf8": "chemin\\vers\\fichier",
    "etiquette": "antislash",
    "octets_hex": "6368656d696e5c766572735c66696368696572",
    "sha256_attendu": "141d992759ce0846c7b8306c4855a0de9e5c878534cc86ccd7a610ed8a6c7b58"
   },
   {
    "entree_utf8": "il a dit \"oui\"",
    "etiquette": "guillemet droit",
    "octets_hex": "696c20612064697420226f756922",
    "sha256_attendu": "e13c456138e9776e8f500ee686ef764c127d05feba61cdb2e9f186c487a79796"
   },
   {
    "entree_utf8": "9 100 $",
    "etiquette": "espace insecable U+00A0",
    "octets_hex": "39203130302024",
    "sha256_attendu": "dea4ef84bc05c9d634b8aa4f4e7dec08b525fef0b655deee2929f127a5c1aaf4"
   },
   {
    "entree_utf8": "9 100 $",
    "etiquette": "espace fine insecable U+202F",
    "octets_hex": "39203130302024",
    "sha256_attendu": "dea4ef84bc05c9d634b8aa4f4e7dec08b525fef0b655deee2929f127a5c1aaf4"
   },
   {
    "entree_utf8": "null",
    "etiquette": "null-ish literal",
    "octets_hex": "6e756c6c",
    "sha256_attendu": "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b"
   },
   {
    "entree_utf8": "9007199254740991",
    "etiquette": "chiffres longs",
    "octets_hex": "39303037313939323534373430393931",
    "sha256_attendu": "f40b423c2dd95ff2b2f027e22208f438cf7242862e5e746860e697308c9add26"
   }
  ],
  "P4_canon": [
   {
    "canon_attendu": "{}",
    "canon_octets_hex": "7b7d",
    "etiquette": "objet vide",
    "objet": {},
    "sha256_du_canon": "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a"
   },
   {
    "canon_attendu": "{\"a\": 1}",
    "canon_octets_hex": "7b2261223a20317d",
    "etiquette": "une cle",
    "objet": {
     "a": 1
    },
    "sha256_du_canon": "f9d86028c6e0d64e225186f96acb69338b2c59764df79162107f5c4bb34d1310"
   },
   {
    "canon_attendu": "{\"a\": 1, \"b\": 2}",
    "canon_octets_hex": "7b2261223a20312c202262223a20327d",
    "etiquette": "deux cles a trier",
    "objet": {
     "a": 1,
     "b": 2
    },
    "sha256_du_canon": "d8497d9d82770a70729261095aa98f7ef5154d7af499f8037b6ca250296785a6"
   },
   {
    "canon_attendu": "{\"B\": 3, \"Z\": 1, \"a\": 2}",
    "canon_octets_hex": "7b2242223a20332c20225a223a20312c202261223a20327d",
    "etiquette": "tri non alphabetique naif",
    "objet": {
     "B": 3,
     "Z": 1,
     "a": 2
    },
    "sha256_du_canon": "573ab661321b4d28a1ac7402b88b6adf372217b756f19a4cccfaa93effc8cf1b"
   },
   {
    "canon_attendu": "{\"a\": [1, 2, {\"y\": 2, \"z\": 1}], \"x\": {\"c\": 3, \"d\": 4}}",
    "canon_octets_hex": "7b2261223a205b312c20322c207b2279223a20322c20227a223a20317d5d2c202278223a207b2263223a20332c202264223a20347d7d",
    "etiquette": "imbrique",
    "objet": {
     "a": [
      1,
      2,
      {
       "y": 2,
       "z": 1
      }
     ],
     "x": {
      "c": 3,
      "d": 4
     }
    },
    "sha256_du_canon": "bfde1087bd1ddb097ef79f4c58e353a4a5bfc5963437e7867f6346b01e6f9416"
   },
   {
    "canon_attendu": "{\"cle\": \"revisee en V2\", \"valeur\": \"echeance\"}",
    "canon_octets_hex": "7b22636c65223a20227265766973656520656e205632222c202276616c657572223a202265636865616e6365227d",
    "etiquette": "accents non echappes",
    "objet": {
     "cle": "revisee en V2",
     "valeur": "echeance"
    },
    "sha256_du_canon": "30353a166b4d002819cd3d09a01be69838e3ff9959b66199a43059ab177030e6"
   },
   {
    "canon_attendu": "{\"k\": \"clause 🔒\"}",
    "canon_octets_hex": "7b226b223a2022636c6175736520f09f9492227d",
    "etiquette": "unicode hors BMP",
    "objet": {
     "k": "clause 🔒"
    },
    "sha256_du_canon": "1985969952ae1f029a36512792722a46c23f9fe6ec8e7159920c1c9d80a39425"
   },
   {
    "canon_attendu": "{\"k\": \"il a dit \\\"oui\\\"\"}",
    "canon_octets_hex": "7b226b223a2022696c206120646974205c226f75695c22227d",
    "etiquette": "chaine avec guillemet",
    "objet": {
     "k": "il a dit \"oui\""
    },
    "sha256_du_canon": "ac53d3acf606833bf67256277b4c04c74111f3b598edadfd4a3b0525d5fe56ba"
   },
   {
    "canon_attendu": "{\"k\": \"a\\\\b\"}",
    "canon_octets_hex": "7b226b223a2022615c5c62227d",
    "etiquette": "chaine avec antislash",
    "objet": {
     "k": "a\\b"
    },
    "sha256_du_canon": "f163e18022b0c34db010bdc87a26ebd6a0f877593cfbdbc99320f361c7d7127c"
   },
   {
    "canon_attendu": "{\"k\": \"l1\\nl2\"}",
    "canon_octets_hex": "7b226b223a20226c315c6e6c32227d",
    "etiquette": "chaine avec saut de ligne",
    "objet": {
     "k": "l1\nl2"
    },
    "sha256_du_canon": "6935b991d2a2c7b00f086d59ba852986080df7d6b8d4b9ad145fded38340e02c"
   },
   {
    "canon_attendu": "{\"f\": false, \"n\": null, \"t\": true}",
    "canon_octets_hex": "7b2266223a2066616c73652c20226e223a206e756c6c2c202274223a20747275657d",
    "etiquette": "booleens et null",
    "objet": {
     "f": false,
     "n": null,
     "t": true
    },
    "sha256_du_canon": "f555ff7fdba4f36070eecba4785bec7202ddba683c26ac7d346fe6d88addca9c"
   },
   {
    "canon_attendu": "{\"max\": 9007199254740991, \"min\": -9007199254740991}",
    "canon_octets_hex": "7b226d6178223a20393030373139393235343734303939312c20226d696e223a202d393030373139393235343734303939317d",
    "etiquette": "entiers limites plage sure",
    "objet": {
     "max": 9007199254740991,
     "min": -9007199254740991
    },
    "sha256_du_canon": "93381f54e3a3ffe0a9b854f68b00f16b068334f4d836039cb92b3c4b82e3bc7d"
   },
   {
    "canon_attendu": "{\"n\": -1, \"z\": 0}",
    "canon_octets_hex": "7b226e223a202d312c20227a223a20307d",
    "etiquette": "zero et negatif",
    "objet": {
     "n": -1,
     "z": 0
    },
    "sha256_du_canon": "2a1c956600ed59b0e0812dca35a69f3da78f8b9efc0fb6a4d39f8f4155202f79"
   },
   {
    "canon_attendu": "{\"a\": []}",
    "canon_octets_hex": "7b2261223a205b5d7d",
    "etiquette": "tableau vide",
    "objet": {
     "a": []
    },
    "sha256_du_canon": "6b97326c2e11a7f6a4917e81dc947e0183d8ffa8fd42bf089d18f0ac810dcc88"
   },
   {
    "canon_attendu": "{\"a\": [\"x\", \"y\"]}",
    "canon_octets_hex": "7b2261223a205b2278222c202279225d7d",
    "etiquette": "tableau de chaines",
    "objet": {
     "a": [
      "x",
      "y"
     ]
    },
    "sha256_du_canon": "239de514407b796cf4b0c4766fedf62efa151d5c7218d3fcadaf0c00c03561dd"
   },
   {
    "canon_attendu": "{\"autre cle\": 2, \"une cle\": 1}",
    "canon_octets_hex": "7b22617574726520636c65223a20322c2022756e6520636c65223a20317d",
    "etiquette": "cles avec espaces",
    "objet": {
     "autre cle": 2,
     "une cle": 1
    },
    "sha256_du_canon": "f758a9c64e398e50a15831dfe5ee16bb37b6147c0464e4a287a1953888566967"
   },
   {
    "canon_attendu": "{\"n_events\": 7, \"registry_id\": \"abc-123\", \"root\": \"0000000000000000000000000000000000000000000000000000000000000000\"}",
    "canon_octets_hex": "7b226e5f6576656e7473223a20372c202272656769737472795f6964223a20226162632d313233222c2022726f6f74223a202230303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030227d",
    "etiquette": "payload_signature reel",
    "objet": {
     "n_events": 7,
     "registry_id": "abc-123",
     "root": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    "sha256_du_canon": "fce53db4f37c5454780e96cee1bc32319611611051b0fda60fbea28dc387251f"
   }
  ],
  "calc_hash": [
   {
    "attendu": "d356330ad22fdfc2c86784e3601044ede976f42a0facf7798ff2d556b7c093e3",
    "data": "{}",
    "etiquette": "genesis-like",
    "prev_hash": "0000000000000000000000000000000000000000000000000000000000000000",
    "seq": 0,
    "type": "GENESIS"
   },
   {
    "attendu": "2d3b4a572b5149e99eda8132f274252c37f82300eecf79151dad9212733d7c76",
    "data": "{\"a\": 1}",
    "etiquette": "ancrage simple",
    "prev_hash": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    "seq": 1,
    "type": "ANCRAGE"
   },
   {
    "attendu": "181722066d40bc261986cbce5e848373b21f0930b9f6ca94b01245f262126db7",
    "data": "{\"v\": \"revisee\"}",
    "etiquette": "data avec accents",
    "prev_hash": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "seq": 2,
    "type": "ANCRAGE"
   },
   {
    "attendu": "f89682be28da050d40f3b5d25ffee1eab0e4b6db32a37ec17ef1cf6903f61a56",
    "data": "{\"v\": \"a|b\"}",
    "etiquette": "data contenant une barre",
    "prev_hash": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "seq": 3,
    "type": "ANCRAGE"
   }
  ],
  "entiers_plage_sure": [
   {
    "attendu": "accepte",
    "note": "max safe = 2**53-1",
    "valeur": 9007199254740991
   },
   {
    "attendu": "accepte",
    "note": "min safe",
    "valeur": -9007199254740991
   },
   {
    "attendu": "rejete",
    "note": "max safe + 1",
    "valeur": 9007199254740992
   },
   {
    "attendu": "rejete",
    "note": "min safe - 1",
    "valeur": -9007199254740992
   },
   {
    "attendu": "rejete",
    "note": "devient ...992 en JS",
    "valeur": 9007199254740993
   },
   {
    "attendu": "accepte",
    "note": "controle : horodatage reel du registre E1",
    "valeur": 20250401
   }
  ],
  "reference": {
   "genere_avant_tout_typescript": true,
   "note": "cas choisis difficiles a dessein ; un jeu commode n'etablirait rien",
   "noyau": "reality_floor_core_v031g_rev3.py",
   "sha256_noyau": "dbeb2db4091c904e835d82fae08686566fedc0f033647d4dc02c28d5456fe4cd"
  },
  "temoins_negatifs": [
   {
    "etiquette": "registry_id altere d'un caractere",
    "instantane_utf8": "{\"declared_root\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"events\": [{\"data\": \"{\\\"doc_hash\\\": \\\"dd5e5506770d583f6254884de7a08d37fa65acc9f1ce3b61d6592ee4a9f53ced\\\", \\\"source_id\\\": \\\"DOC-4A\\\"}\", \"hash\": \"385c402641506612092385a3e13fbf29da0f7e8f111f718d3977585d4e662a0b\", \"prev_hash\": \"GENESIS\", \"seq\": 1, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"691bbd7aa8d7f43260a9f57afb078a5328d13f43469db348c1ae147aa149fd4e\\\", \\\"source_id\\\": \\\"DOC-4B\\\"}\", \"hash\": \"2e048683f9711cb163193b91f085dd90c9a6a030f2de6f0f7e7ac5db76546d79\", \"prev_hash\": \"385c402641506612092385a3e13fbf29da0f7e8f111f718d3977585d4e662a0b\", \"seq\": 2, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"fcfd6d956ffd908d2fe1de38cbe46ff2f0432d88e8269bace3b04ec8fe758c73\\\", \\\"source_id\\\": \\\"DOC-4C\\\"}\", \"hash\": \"35255540e8872596477d0e915f41cea9bb787752d3e2b70b5fafd714b45d825c\", \"prev_hash\": \"2e048683f9711cb163193b91f085dd90c9a6a030f2de6f0f7e7ac5db76546d79\", \"seq\": 3, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"source_id\\\": \\\"DOC-4D\\\"}\", \"hash\": \"66be386402ab8d62d4dec2cd75eaf5fc303c545ea61844f487996b0a88a9a96e\", \"prev_hash\": \"35255540e8872596477d0e915f41cea9bb787752d3e2b70b5fafd714b45d825c\", \"seq\": 4, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"source_id\\\": \\\"DOC-4E\\\"}\", \"hash\": \"b626a3b5425e2044e72565c918f9a63e49484739ee127dc13e884c65753043c5\", \"prev_hash\": \"66be386402ab8d62d4dec2cd75eaf5fc303c545ea61844f487996b0a88a9a96e\", \"seq\": 5, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\"}\", \"hash\": \"afcb2e88fb6e8c7f1ffad1eb9d49b15c56bd9efd4e79f41926ff7757095dd1be\", \"prev_hash\": \"b626a3b5425e2044e72565c918f9a63e49484739ee127dc13e884c65753043c5\", \"seq\": 6, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\"}\", \"hash\": \"9a39a878af3719b5a3e1c4cb17284988f0912b3e046eaed7c379d3b2bfaecdcd\", \"prev_hash\": \"afcb2e88fb6e8c7f1ffad1eb9d49b15c56bd9efd4e79f41926ff7757095dd1be\", \"seq\": 7, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.fenetre\\\"}\", \"hash\": \"8b40304c6afc9680f9d79e639535a3aeb4b7884d009dbb1959828721708451b1\", \"prev_hash\": \"9a39a878af3719b5a3e1c4cb17284988f0912b3e046eaed7c379d3b2bfaecdcd\", \"seq\": 8, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\"}\", \"hash\": \"c9e8d3a16675f0c6dea296b38dd277b6478f126f30346a59718272d23cd65414\", \"prev_hash\": \"8b40304c6afc9680f9d79e639535a3aeb4b7884d009dbb1959828721708451b1\", \"seq\": 9, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"dd5e5506770d583f6254884de7a08d37fa65acc9f1ce3b61d6592ee4a9f53ced\\\", \\\"extrait\\\": \\\"migrer vers la version 4.2\\\", \\\"known_from\\\": 20260210, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avis\\\", \\\"source_id\\\": \\\"DOC-4A\\\", \\\"valeur\\\": \\\"4.2\\\", \\\"valid_from\\\": 20260210, \\\"valid_until\\\": null}\", \"hash\": \"d55da5efb3fe4deeb002c1bf3fb80366099c69274c2d3d971a08e4134357139c\", \"prev_hash\": \"c9e8d3a16675f0c6dea296b38dd277b6478f126f30346a59718272d23cd65414\", \"seq\": 10, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"fcfd6d956ffd908d2fe1de38cbe46ff2f0432d88e8269bace3b04ec8fe758c73\\\", \\\"extrait\\\": \\\"la version recommandée est la 4.3\\\", \\\"known_from\\\": 20260303, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r1\\\", \\\"source_id\\\": \\\"DOC-4C\\\", \\\"valeur\\\": \\\"4.3\\\", \\\"valid_from\\\": 20260303, \\\"valid_until\\\": null}\", \"hash\": \"18a5824ffa0e0e67a2487871f96c15baa38dea8b6463d6a9b6ef1cb910997335\", \"prev_hash\": \"d55da5efb3fe4deeb002c1bf3fb80366099c69274c2d3d971a08e4134357139c\", \"seq\": 11, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.version\\\", \\\"cle\\\": \\\"version_cible\\\", \\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"extrait\\\": \\\"La version validée par l'équipe sécurité est la 4.3.1\\\", \\\"known_from\\\": 20260321, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r2\\\", \\\"source_id\\\": \\\"DOC-4D\\\", \\\"valeur\\\": \\\"4.3.1\\\", \\\"valid_from\\\": 20260321, \\\"valid_until\\\": null}\", \"hash\": \"0679bac6d05a9e768529a2fcc4715921027ec6ae1b07227d97474159a31221e8\", \"prev_hash\": \"18a5824ffa0e0e67a2487871f96c15baa38dea8b6463d6a9b6ef1cb910997335\", \"seq\": 12, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\", \\\"cle\\\": \\\"paie_compatibilite\\\", \\\"doc_hash\\\": \\\"691bbd7aa8d7f43260a9f57afb078a5328d13f43469db348c1ae147aa149fd4e\\\", \\\"extrait\\\": \\\"Module Paie : compatible jusqu'à la version 4.2 inclusivement, via l'interface de paie standard\\\", \\\"known_from\\\": 20260101, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"matrice\\\", \\\"source_id\\\": \\\"DOC-4B\\\", \\\"valeur\\\": \\\"jusqu'à 4.2 via l'interface de paie standard\\\", \\\"valid_from\\\": 20260101, \\\"valid_until\\\": null}\", \"hash\": \"77af56d917887f534660a01bf86b1234595d70b6c034d628428ed576e1ec8b59\", \"prev_hash\": \"0679bac6d05a9e768529a2fcc4715921027ec6ae1b07227d97474159a31221e8\", \"seq\": 13, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"migration.module\\\", \\\"cle\\\": \\\"paie_compatibilite\\\", \\\"doc_hash\\\": \\\"b8a65d8bc25a51021b48103810eda780fc9ac7b521fa979940edff58f4d539a4\\\", \\\"extrait\\\": \\\"le connecteur Paie v2, livré à partir de la version 4.3, remplace l'interface de paie standard\\\", \\\"known_from\\\": 20260321, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"correctif_r2\\\", \\\"source_id\\\": \\\"DOC-4D\\\", \\\"valeur\\\": \\\"connecteur Paie v2 à partir de la version 4.3\\\", \\\"valid_from\\\": 20260321, \\\"valid_until\\\": null}\", \"hash\": \"42fb58ccc951ad68dbef2ba0be423d7f0d9d8fa6628de16ff95777073cca42eb\", \"prev_hash\": \"77af56d917887f534660a01bf86b1234595d70b6c034d628428ed576e1ec8b59\", \"seq\": 14, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.fenetre\\\", \\\"cle\\\": \\\"fenetre_maintenance\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"la fenêtre de maintenance du samedi, entre 22 h et 2 h\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"samedi 22 h à 2 h\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"03a89e30c5e79039f323194c2460f50174f3a9f0f1765bac0b7cca52c6400c4c\", \"prev_hash\": \"42fb58ccc951ad68dbef2ba0be423d7f0d9d8fa6628de16ff95777073cca42eb\", \"seq\": 15, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\", \\\"cle\\\": \\\"sauvegarde_avant\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"Une sauvegarde complète et vérifiée est obligatoire avant toute migration\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"sauvegarde complète et vérifiée obligatoire\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"10e1027e6a0e3a07e1f6ef0f58e1baa5aa37bb48b3de4aa4c093f9cb319246d1\", \"prev_hash\": \"03a89e30c5e79039f323194c2460f50174f3a9f0f1765bac0b7cca52c6400c4c\", \"seq\": 16, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"exploitation.sauvegarde\\\", \\\"cle\\\": \\\"sauvegarde_conservation\\\", \\\"doc_hash\\\": \\\"2c4b71b9a22cfbd23c1070ff8f69513f69e689aa19a428ab9d5596da373fbd37\\\", \\\"extrait\\\": \\\"les copies de sauvegarde sont conservées quatre-vingt-dix (90) jours\\\", \\\"known_from\\\": 20260401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pe11\\\", \\\"source_id\\\": \\\"DOC-4E\\\", \\\"valeur\\\": \\\"90 jours\\\", \\\"valid_from\\\": 20260401, \\\"valid_until\\\": null}\", \"hash\": \"929862c380e2e5d4d9128f0a43802b10fc09e2d178bc63e5310228c3e98ce46d\", \"prev_hash\": \"10e1027e6a0e3a07e1f6ef0f58e1baa5aa37bb48b3de4aa4c093f9cb319246d1\", \"seq\": 17, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"f506ea550f887d52c44f79973b84a054957ca9cd0e7b442147a3555f942c55b2\\\", \\\"source_id\\\": \\\"DOC-5A\\\"}\", \"hash\": \"77dfc398235954655c8e80e0d5e4d1dfdba5eec1731b601dee5bfa38665bf5e9\", \"prev_hash\": \"929862c380e2e5d4d9128f0a43802b10fc09e2d178bc63e5310228c3e98ce46d\", \"seq\": 18, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"source_id\\\": \\\"DOC-5B\\\"}\", \"hash\": \"ef951d9622172ce683adae628a27bcb782c50dc472d98ab21743c8179f85a5b1\", \"prev_hash\": \"77dfc398235954655c8e80e0d5e4d1dfdba5eec1731b601dee5bfa38665bf5e9\", \"seq\": 19, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"2f77e5a73bf2b4b51dfb128e87d6d11e10e0fa16f8c10608708e83a9b89e5f83\\\", \\\"source_id\\\": \\\"DOC-5C\\\"}\", \"hash\": \"b546dda44500c484c321ab7631e5587c086cc0e4db9993fbd87eb9e70cdb6bd3\", \"prev_hash\": \"ef951d9622172ce683adae628a27bcb782c50dc472d98ab21743c8179f85a5b1\", \"seq\": 20, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"904fc10012ba095e13e6c67bdc600376e8320ee64104a40222185dc36fb55949\\\", \\\"source_id\\\": \\\"DOC-5D\\\"}\", \"hash\": \"44c6c8b36d8dd61524e4e9de18002785653d8bf34bc14327b945544b9e537976\", \"prev_hash\": \"b546dda44500c484c321ab7631e5587c086cc0e4db9993fbd87eb9e70cdb6bd3\", \"seq\": 21, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\"}\", \"hash\": \"cd041e2c4d67e52c733cd1beb318864ae9d640a450686f5d3ade3b5cce679287\", \"prev_hash\": \"44c6c8b36d8dd61524e4e9de18002785653d8bf34bc14327b945544b9e537976\", \"seq\": 22, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\"}\", \"hash\": \"133ded638191a047ca44b41dfb962749ee700a47614d988cdc1b0759fa4f8b8e\", \"prev_hash\": \"cd041e2c4d67e52c733cd1beb318864ae9d640a450686f5d3ade3b5cce679287\", \"seq\": 23, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_max_jours\\\", \\\"doc_hash\\\": \\\"2f77e5a73bf2b4b51dfb128e87d6d11e10e0fa16f8c10608708e83a9b89e5f83\\\", \\\"extrait\\\": \\\"le télétravail est limité à deux (2) jours par semaine\\\", \\\"known_from\\\": 20260201, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"memo_rappel\\\", \\\"source_id\\\": \\\"DOC-5C\\\", \\\"valeur\\\": \\\"2 jours par semaine\\\", \\\"valid_from\\\": 20260201, \\\"valid_until\\\": null}\", \"hash\": \"c9cb1f1cb889653d6b05110a8f8c869c8d73dac091f18080a9d645b32142e3da\", \"prev_hash\": \"133ded638191a047ca44b41dfb962749ee700a47614d988cdc1b0759fa4f8b8e\", \"seq\": 24, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_max_jours\\\", \\\"doc_hash\\\": \\\"f506ea550f887d52c44f79973b84a054957ca9cd0e7b442147a3555f942c55b2\\\", \\\"extrait\\\": \\\"peut télétravailler jusqu'à trois (3) jours par semaine\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"pol_tt_2026\\\", \\\"source_id\\\": \\\"DOC-5A\\\", \\\"valeur\\\": \\\"3 jours par semaine\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"4b54553681ddca27f027464adda9c55aff26aff2e32326c4ac89c9e30e04872d\", \"prev_hash\": \"c9cb1f1cb889653d6b05110a8f8c869c8d73dac091f18080a9d645b32142e3da\", \"seq\": 25, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"admissibilite_probatoire\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"Ne sont pas admissibles au télétravail régulier : les employés en période probatoire\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"non admissible au télétravail régulier\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"5e4fe25a292ba88d54e13f9847840ce9fff76e83723db5c018a2b32ab769c054\", \"prev_hash\": \"4b54553681ddca27f027464adda9c55aff26aff2e32326c4ac89c9e30e04872d\", \"seq\": 26, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"probation_duree\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"les six premiers mois suivant l'embauche\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"six premiers mois suivant l'embauche\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"d86bc60704c0c3d8d63e975ae70a015ceb762c2a4b4a00e3678808b863219adf\", \"prev_hash\": \"5e4fe25a292ba88d54e13f9847840ce9fff76e83723db5c018a2b32ab769c054\", \"seq\": 27, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.admissibilite\\\", \\\"cle\\\": \\\"date_embauche_tremblay\\\", \\\"doc_hash\\\": \\\"904fc10012ba095e13e6c67bdc600376e8320ee64104a40222185dc36fb55949\\\", \\\"extrait\\\": \\\"embauchée le 16 mars 2026\\\", \\\"known_from\\\": 20260608, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"courriel_gestionnaire\\\", \\\"source_id\\\": \\\"DOC-5D\\\", \\\"valeur\\\": \\\"16 mars 2026\\\", \\\"valid_from\\\": 20260316, \\\"valid_until\\\": null}\", \"hash\": \"3be6b5b8e820ca16225a2c930922361733c7081ed6b7f70abcd656e6612784fc\", \"prev_hash\": \"d86bc60704c0c3d8d63e975ae70a015ceb762c2a4b4a00e3678808b863219adf\", \"seq\": 28, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"rh.teletravail\\\", \\\"cle\\\": \\\"teletravail_exception_probatoire_autorite\\\", \\\"doc_hash\\\": \\\"839f595b471b0ee36200269d4ec2f8ae8fc3ba5b9a707f5f5a5c26af0c12a5fc\\\", \\\"extrait\\\": \\\"uniquement par décision du comité RH, sur recommandation écrite du gestionnaire\\\", \\\"known_from\\\": 20260501, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"annexe_a\\\", \\\"source_id\\\": \\\"DOC-5B\\\", \\\"valeur\\\": \\\"décision du comité RH sur recommandation écrite du gestionnaire\\\", \\\"valid_from\\\": 20260501, \\\"valid_until\\\": null}\", \"hash\": \"de43bdde0d7e179cb137ecfa8480ca660db0aa3c87a61489fb3f2845f92272e8\", \"prev_hash\": \"3be6b5b8e820ca16225a2c930922361733c7081ed6b7f70abcd656e6612784fc\", \"seq\": 29, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"source_id\\\": \\\"DOC-6A\\\"}\", \"hash\": \"d69bcc38e05d1c5fa4cfb6ed2e4c303d776add2205829123a75c3b6b772d0b27\", \"prev_hash\": \"de43bdde0d7e179cb137ecfa8480ca660db0aa3c87a61489fb3f2845f92272e8\", \"seq\": 30, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"source_id\\\": \\\"DOC-6B\\\"}\", \"hash\": \"cbf4e315da8bc225114628f18dd95a9e52db9f36a825b4a1766ae4ba261f38fa\", \"prev_hash\": \"d69bcc38e05d1c5fa4cfb6ed2e4c303d776add2205829123a75c3b6b772d0b27\", \"seq\": 31, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"1825e1bc7964086bd7413dc4336a416ce6a5bac91a13d014032c4044fb2b008d\\\", \\\"source_id\\\": \\\"DOC-6C\\\"}\", \"hash\": \"c457c9d16300b0c618e5ff03f96d1525b871d051f8b7974470e5a1058feedafc\", \"prev_hash\": \"cbf4e315da8bc225114628f18dd95a9e52db9f36a825b4a1766ae4ba261f38fa\", \"seq\": 32, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"doc_hash\\\": \\\"f4ac925d42fbd3a4073104ef6535b719b56aedfa2420dc569827048637a9a68c\\\", \\\"source_id\\\": \\\"DOC-6D\\\"}\", \"hash\": \"3f2ab28b95cbfe44549c3fd28d27b1f0e84ff22b402a9456f8cffd84a280418e\", \"prev_hash\": \"c457c9d16300b0c618e5ff03f96d1525b871d051f8b7974470e5a1058feedafc\", \"seq\": 33, \"type\": \"DECL_SOURCE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\"}\", \"hash\": \"d1d2e5b846b3338bebdb911afd566c880cd790f54675db34e12a54e3547c3a83\", \"prev_hash\": \"3f2ab28b95cbfe44549c3fd28d27b1f0e84ff22b402a9456f8cffd84a280418e\", \"seq\": 34, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\"}\", \"hash\": \"934c54daa8b1eda72452baaeaf235d4a115c68e4daed5793d9e69caf8f862852\", \"prev_hash\": \"d1d2e5b846b3338bebdb911afd566c880cd790f54675db34e12a54e3547c3a83\", \"seq\": 35, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.preavis\\\"}\", \"hash\": \"4961a713586810773599dd43479a1be647de59898a42f7d3818514036f9fa5ad\", \"prev_hash\": \"934c54daa8b1eda72452baaeaf235d4a115c68e4daed5793d9e69caf8f862852\", \"seq\": 36, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.resiliation\\\"}\", \"hash\": \"0031fbdeadb883d120ef74e8fd7a1421c6c64d9a31db9ef3f3ce07cdcc203f4b\", \"prev_hash\": \"4961a713586810773599dd43479a1be647de59898a42f7d3818514036f9fa5ad\", \"seq\": 37, \"type\": \"DECL_BESOIN\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_service_principal\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"Le tarif mensuel du service principal est de 8 400 $\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"8 400 $ par mois\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"59cc95d1311f0265c92bf552ae0fb6f2acd429216835300abccd9db0bf47dd1e\", \"prev_hash\": \"0031fbdeadb883d120ef74e8fd7a1421c6c64d9a31db9ef3f3ce07cdcc203f4b\", \"seq\": 38, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_service_principal\\\", \\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"extrait\\\": \\\"le tarif mensuel du service principal est porté à 9 100 $\\\", \\\"known_from\\\": 20250215, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avenant_2\\\", \\\"source_id\\\": \\\"DOC-6B\\\", \\\"valeur\\\": \\\"9 100 $ par mois\\\", \\\"valid_from\\\": 20250401, \\\"valid_until\\\": null}\", \"hash\": \"4a9fce458bcf496a41ff1d2fc2a06e2870ae93b0e82c36c475aa7fcc5981e48c\", \"prev_hash\": \"59cc95d1311f0265c92bf552ae0fb6f2acd429216835300abccd9db0bf47dd1e\", \"seq\": 39, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.tarif\\\", \\\"cle\\\": \\\"tarif_optionnels_validite\\\", \\\"doc_hash\\\": \\\"1825e1bc7964086bd7413dc4336a416ce6a5bac91a13d014032c4044fb2b008d\\\", \\\"extrait\\\": \\\"les tarifs des services optionnels de la présente grille demeurent en vigueur\\\", \\\"known_from\\\": 20250201, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"grille\\\", \\\"source_id\\\": \\\"DOC-6C\\\", \\\"valeur\\\": \\\"grille 2024 en vigueur\\\", \\\"valid_from\\\": 20250201, \\\"valid_until\\\": null}\", \"hash\": \"591c432448daf5508eb5f6ceee41cca57d2098685e26016b751a5660558875bc\", \"prev_hash\": \"4a9fce458bcf496a41ff1d2fc2a06e2870ae93b0e82c36c475aa7fcc5981e48c\", \"seq\": 40, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\", \\\"cle\\\": \\\"duree_initiale_contrat\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"pour une durée de vingt-quatre (24) mois\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"24 mois\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"a1161b95afda42fa2fc63e46c8d6863f6df75275e8208f062e0c9bf8f639ee3a\", \"prev_hash\": \"591c432448daf5508eb5f6ceee41cca57d2098685e26016b751a5660558875bc\", \"seq\": 41, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.duree\\\", \\\"cle\\\": \\\"prolongation_duree_contrat\\\", \\\"doc_hash\\\": \\\"dffa7b408a3f94ed3b071f74bbfe04f87b776af49a550b26f08bbf778be5734c\\\", \\\"extrait\\\": \\\"La durée initiale du contrat est prolongée de six (6) mois\\\", \\\"known_from\\\": 20250215, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"avenant_2\\\", \\\"source_id\\\": \\\"DOC-6B\\\", \\\"valeur\\\": \\\"6 mois\\\", \\\"valid_from\\\": 20250215, \\\"valid_until\\\": null}\", \"hash\": \"c91b6d4b7bc862dee30f2b277914b97de4477c15bb95ae69c9cf7911d80cbed6\", \"prev_hash\": \"a1161b95afda42fa2fc63e46c8d6863f6df75275e8208f062e0c9bf8f639ee3a\", \"seq\": 42, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.preavis\\\", \\\"cle\\\": \\\"preavis_delai\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"sauf préavis écrit de non-renouvellement reçu au moins quatre-vingt-dix (90) jours avant l'échéance\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"au moins 90 jours avant l'échéance\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"dba1f0d800c9238d0d6f8e349c693f05bf00a8dd4b2fd5ad4d2d473f40551d17\", \"prev_hash\": \"c91b6d4b7bc862dee30f2b277914b97de4477c15bb95ae69c9cf7911d80cbed6\", \"seq\": 43, \"type\": \"ANCRAGE\"}, {\"data\": \"{\\\"categorie\\\": \\\"contrat.resiliation\\\", \\\"cle\\\": \\\"resiliation_manquement\\\", \\\"doc_hash\\\": \\\"17d7ffee1897978e985e6f9cb7ee95bbe6ad4cc268caca5c8dd7bbce21237fa7\\\", \\\"extrait\\\": \\\"la résiliation exige une mise en demeure écrite et un délai de correction de trente (30) jours\\\", \\\"known_from\\\": 20240401, \\\"relation\\\": \\\"SUPERSESSION\\\", \\\"section\\\": \\\"contrat\\\", \\\"source_id\\\": \\\"DOC-6A\\\", \\\"valeur\\\": \\\"mise en demeure écrite et délai de correction de 30 jours\\\", \\\"valid_from\\\": 20240401, \\\"valid_until\\\": null}\", \"hash\": \"b1766ad6cc2617d552f2611778437cd46ee0ebee77dc76223a34ec262892b61e\", \"prev_hash\": \"dba1f0d800c9238d0d6f8e349c693f05bf00a8dd4b2fd5ad4d2d473f40551d17\", \"seq\": 44, \"type\": \"ANCRAGE\"}], \"n_events\": 44, \"registry_id\": \"9266d9b0-73cd-47e2-9eb7-dd4a2639b21x\", \"signature_hex\": \"8558774d2443c2e4ec84eae76d18f81c7b08b38973f5b541d88f38a6aca9d76dbcb3d7700a0a83bfe5f404e309eea4376ed0e8566f60eb3bf95a1ec3cfe6d40c\"}",
    "verification_attendue": [
     false,
     "signature invalide"
    ]
   },
   {
    "doit_differer_de": "68d2f0739e3a58c0c24c32b5fa0ade86266a9debe94f4ff08db83911a2f20963",
    "etiquette": "un octet inverse a la position 100",
    "sha256_attendu": "e7b994489c2ab503255c21e1df7d8eb31e5510ffcc0c479d25fd960acd4b339a"
   }
  ]
 }
} as const;
