/**
 * LEGAL EVIDENCE CONSENSUS — point d'entrée CRE v0.1
 *
 * Ce fichier n'implémente AUCUNE règle. Il câble les modules déjà scellés :
 *   gouverneur.ts  — les 15 codes de défaut et `mesurer` (chemin de lecture P7)
 *   portee.ts      — `Portee` / `composer` (chemin d'affichage P6)
 *   rapport.ts     — sérialisation canonique et empreintes (P8)
 *   vecteurs_p8_v07.ts — l'instantané E1 v2 scellé et ses cas
 *   admission_fixture_v01.ts — la fixture d'admission préenregistrée
 *
 * Le verdict et les défauts affichés proviennent de `mesurer()`. Rien n'est
 * recopié depuis les vecteurs : ceux-ci servent d'oracle de comparaison, et
 * la comparaison est reportée telle qu'elle tombe.
 *
 * PORTÉE DE CETTE EXÉCUTION
 *   mononœud — aucun consensus BFT
 *   aucun ancrage blockchain — aucune écriture EVM, aucun contrat
 *   aucune requête réseau — l'instantané et la clé publique sont embarqués
 */
import { CronCapability, handler, Runner, type Runtime } from "@chainlink/cre-sdk";
import { Vue, mesurer, type Affirmation, type EntE } from "./gouverneur";
import { Portee, autorisation, composer, type Gouvernee, type Lot } from "./portee";
import {
  canon, sha, claimId, empreinteLot, batirRapport, serialiser, empreinteRapport,
  octets, type GouverneeLot, type LigneRapport,
} from "./rapport";
import { V } from "./vecteurs_p8_v07";
import { ADMISSION_FIXTURE_V01 } from "./admission_fixture_v01";

export type Config = { schedule: string };

export const PORTEE_EXECUTION =
  "SIMULATION MONONŒUD — aucun consensus BFT, aucun ancrage blockchain, " +
  "aucune écriture EVM, aucune requête réseau.";

export type ResultatCas = {
  claim_id: string;
  cas: string;
  cle: string;
  categorie: string;
  verdict: string;
  defauts: string[];
  concorde_avec_oracle: boolean;
  empreinte_lot: string;
  sha256_rapport: string;
  octets_rapport: number;
  affichage: string;
};

export type ResultatSimulation = {
  bloc: "LEC-V01";
  portee: string;
  preuve: {
    instantane_sha256_calcule: string;
    instantane_sha256_scelle: string;
    instantane_concorde: boolean;
    racine_plancher_declaree: string;
    admission_fixture_sha256_attendu: string;
    admission_fixture_concorde: boolean;
    admission_signature_couvre_attestation: boolean;
    admission_signature_couvre_instantane_complet: boolean;
  };
  cas: ResultatCas[];
  gouverneur_appele: number;
  concordance_oracle: string;
};

/**
 * Exécute la chaîne réelle claim -> gouverneur -> portée -> rapport.
 * Fonction PURE : aucune dépendance au runtime CRE, ce qui permet de la
 * vérifier hors simulateur sans dupliquer la logique.
 */
export function executerCas(): ResultatSimulation {
  const A = V as any;
  const snap = A.INSTANTANE_E1_V2.instantane_utf8 as string;
  const vue = new Vue(snap);
  const racine = A.INSTANTANE_E1_V2.declared_root as string;
  const empreintePlancher = sha(snap);
  const O = A.VECTEURS_P8_V07;
  const T = O.cas[0].affirmation.t_raisonnement as number;

  const portee = new Portee([
    autorisation("tarif_service_principal", "contrat.tarif",
      { reveler_verdict: true, reveler_motif: true }),
  ]);

  const resultats: ResultatCas[] = [];
  let appels = 0;

  for (let i = 0; i < O.cas.length; i++) {
    const att = O.cas[i];
    const brut = att.claim_brut;
    const cid = claimId(1, brut, T);

    const a: Affirmation = {
      cle: brut.cle, valeur: brut.valeur, categorie: brut.categorie,
      source_citee: brut.source_id, t_raisonnement: T, etiquette: cid,
      section_citee: brut.section, extrait_cite: brut.extrait, doc_hash_cite: null,
    };

    // ── LE GOUVERNEUR EXISTANT, APPELÉ ICI ──
    const m = mesurer(vue, a);
    appels++;

    const sk = vue.stateKnownAt(a.cle, a.categorie, T);
    const ancree: EntE | null = sk[0] === "actif" ? (sk[1][0] as EntE) : null;

    const aff = {
      cle: a.cle, valeur: a.valeur, categorie: a.categorie,
      source_citee: a.source_citee, t_raisonnement: a.t_raisonnement,
      section_citee: a.section_citee, extrait_cite: a.extrait_cite,
      doc_hash_cite: a.doc_hash_cite,
    };
    const gl: GouverneeLot = {
      claim_id: cid, affirmation: aff, verdict: m.verdict, defauts: m.defauts,
      entree_ancree: ancree, racine_plancher: racine,
    };
    const empLot = empreinteLot([gl], racine, empreintePlancher, true);

    const g: Gouvernee = {
      claim_id: cid,
      affirmation: { cle: a.cle, categorie: a.categorie, valeur: a.valeur },
      verdict: m.verdict, defauts: m.defauts, entree_ancree: ancree,
    };
    const lot: Lot = {
      gouvernees: [g], racine_plancher: racine, empreinte_plancher: empreintePlancher,
      plancher_verifie: true, raison_plancher: "ok", empreinte_lot: empLot,
    };
    const rep = composer(lot, portee);

    const lignes: LigneRapport[] = [{
      cle: a.cle, categorie: a.categorie, verdict: m.verdict, defauts: m.defauts,
    }];
    const rapport = batirRapport(racine, empLot, T, lignes,
      rep.non_affichees, rep.verdicts_reveles);
    const ser = serialiser(rapport);

    resultats.push({
      claim_id: cid,
      cas: String(att.claim),
      cle: brut.cle,
      categorie: brut.categorie,
      verdict: m.verdict,
      defauts: m.defauts,
      concorde_avec_oracle:
        m.verdict === att.verdict && canon(m.defauts) === canon(att.defauts),
      empreinte_lot: empLot,
      sha256_rapport: empreinteRapport(rapport),
      octets_rapport: octets(ser),
      affichage: rep.lignes.join(" | "),
    });
  }

  const concordants = resultats.filter((r) => r.concorde_avec_oracle).length;

  return {
    bloc: "LEC-V01",
    portee: PORTEE_EXECUTION,
    preuve: {
      instantane_sha256_calcule: empreintePlancher,
      instantane_sha256_scelle: A.INSTANTANE_E1_V2.sha256_instantane,
      instantane_concorde: empreintePlancher === A.INSTANTANE_E1_V2.sha256_instantane,
      racine_plancher_declaree: racine,
      admission_fixture_sha256_attendu: ADMISSION_FIXTURE_V01.snapshot.sha256,
      admission_fixture_concorde:
        empreintePlancher === ADMISSION_FIXTURE_V01.snapshot.sha256,
      admission_signature_couvre_attestation:
        ADMISSION_FIXTURE_V01.signedAttestation.verifies,
      admission_signature_couvre_instantane_complet:
        ADMISSION_FIXTURE_V01.signedAttestation.verifiesAgainstFullSnapshot,
    },
    cas: resultats,
    gouverneur_appele: appels,
    concordance_oracle: concordants + "/" + resultats.length,
  };
}

export const onCronTrigger = (runtime: Runtime<Config>): string => {
  const r = executerCas();

  runtime.log("═══════════════════════════════════════════════════════════");
  runtime.log("LEGAL EVIDENCE CONSENSUS v0.1 — rapport de simulation");
  runtime.log(r.portee);
  runtime.log("───────────────────────────────────────────────────────────");
  runtime.log("PREUVE UTILISÉE — instantané E1 v2 scellé");
  runtime.log("  sha256 calculé  : " + r.preuve.instantane_sha256_calcule);
  runtime.log("  sha256 scellé   : " + r.preuve.instantane_sha256_scelle);
  runtime.log("  concordance     : " + (r.preuve.instantane_concorde ? "OUI" : "NON"));
  runtime.log("  racine plancher : " + r.preuve.racine_plancher_declaree);
  runtime.log("  fixture admission concorde : " +
    (r.preuve.admission_fixture_concorde ? "OUI" : "NON"));
  runtime.log("  la signature couvre l'attestation, PAS l'instantané complet : " +
    r.preuve.admission_signature_couvre_attestation + " / " +
    r.preuve.admission_signature_couvre_instantane_complet);
  runtime.log("───────────────────────────────────────────────────────────");

  for (const c of r.cas) {
    runtime.log("CAS « " + c.cas + " »");
    runtime.log("  identifiant   : " + c.claim_id);
    runtime.log("  clé / catég.  : " + c.cle + " / " + c.categorie);
    runtime.log("  DÉCISION      : " + c.verdict);
    runtime.log("  codes défaut  : " +
      (c.defauts.length ? c.defauts.join(", ") : "(aucun)"));
    runtime.log("  empreinte lot : " + c.empreinte_lot);
    runtime.log("  sha256 rapport: " + c.sha256_rapport +
      " (" + c.octets_rapport + " octets)");
    runtime.log("  concorde avec l'oracle scellé : " +
      (c.concorde_avec_oracle ? "OUI" : "NON"));
  }

  runtime.log("───────────────────────────────────────────────────────────");
  runtime.log("appels au gouverneur : " + r.gouverneur_appele);
  runtime.log("concordance oracle   : " + r.concordance_oracle);
  runtime.log("RAPPEL : " + r.portee);
  runtime.log("═══════════════════════════════════════════════════════════");

  return JSON.stringify(r);
};

export const initWorkflow = (config: Config) => {
  const cron = new CronCapability();
  return [handler(cron.trigger({ schedule: config.schedule }), onCronTrigger)];
};

export async function main() {
  const runner = await Runner.newRunner<Config>();
  await runner.run(initWorkflow);
}
