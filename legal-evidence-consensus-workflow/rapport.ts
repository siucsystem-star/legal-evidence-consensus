/**
 * PORT P8 — RAPPORT DÉTERMINISTE ET CHAÎNE D'EMPREINTES DU LOT
 *
 * Références gelées : rf_lot_rev6.py · rf_gouverneur_rev7.py
 * Formules : VECTEURS_ERRATUM_V04.json §A_independance_empreinte_lot
 *          = 7a5c00fb246c88a1e6aa1df597050e6be4b7a95c92656168b3b8eda6520d7359
 *
 * CHOIX DE CONCEPTION : `empreinte_lot` est CALCULÉE par le port, jamais prise en
 * entrée depuis les vecteurs. La prendre en entrée ferait de P8 un test creux —
 * on vérifierait qu'une valeur recopiée est égale à elle-même.
 *
 * `racine_plancher` est en revanche LUE de l'instantané (`declared_root`), comme le
 * fait rf_gouverneur_rev7. Elle relève du chemin de LECTURE : la recalculer
 * exigerait le chemin d'ÉCRITURE, hors périmètre du port.
 *
 * NOTE DE PORTABILITÉ (V04) : le `_canon` du LOT emploie `default=str`, absent du
 * `_canon` du noyau. Le domaine JSON v0.1 (chaînes, entiers sûrs, booléens, null,
 * tableaux, objets) rend ce cas inatteignable — la différence est déclarée, non masquée.
 */
import { sha256 } from "@noble/hashes/sha2.js";
import { bytesToHex, utf8ToBytes } from "@noble/hashes/utils.js";
import type { EntE } from "./gouverneur";

/** Sérialisation canonique : reproduit json.dumps(ensure_ascii=False, sort_keys=True)
 *  à l'octet près. Validée au spike P4 (17 vecteurs, 74/74). */
export function canon(v: unknown): string {
  if (v === null) return "null";
  const t = typeof v;
  if (t === "boolean" || t === "number" || t === "string") return JSON.stringify(v);
  if (Array.isArray(v)) {
    const p: string[] = [];
    for (let i = 0; i < v.length; i++) p.push(canon(v[i]));
    return "[" + p.join(", ") + "]";
  }
  if (t === "object") {
    const o = v as Record<string, unknown>;
    const keys = Object.keys(o).sort();
    const p: string[] = [];
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i] as string;
      p.push(JSON.stringify(k) + ": " + canon(o[k]));
    }
    return "{" + p.join(", ") + "}";
  }
  throw new Error("type non sérialisable : " + t);
}

export function sha(t: string): string {
  return bytesToHex(sha256(utf8ToBytes(t)));
}

export type AffirmationLot = {
  cle: string; valeur: string; categorie: string; source_citee: string | null;
  t_raisonnement: number; section_citee: string | null;
  extrait_cite: string | null; doc_hash_cite: string | null;
};

/** Python : empreinte_affirmation. */
export function empreinteAffirmation(a: AffirmationLot): string {
  return sha(canon({
    cle: a.cle, valeur: a.valeur, categorie: a.categorie,
    source_citee: a.source_citee, t_raisonnement: a.t_raisonnement,
    section_citee: a.section_citee, extrait_cite: a.extrait_cite,
    doc_hash_cite: a.doc_hash_cite,
  }));
}

/** Python : empreinte_entree. Rend « AUCUNE » si l'entrée est nulle. */
export function empreinteEntree(e: EntE | null): string {
  if (e === null) return "AUCUNE";
  return sha(canon({
    cle: e.cle, valeur: e.valeur, categorie: e.categorie,
    source_id: e.source_id, section: e.section, seq: e.seq,
  }));
}

export type GouverneeLot = {
  claim_id: string; affirmation: AffirmationLot; verdict: string;
  defauts: string[]; entree_ancree: EntE | null; racine_plancher: string;
};

/** Python : Gouvernee.empreinte / recalculer_empreinte. */
export function empreinteGouvernee(g: GouverneeLot): string {
  return sha(canon({
    claim_id: g.claim_id,
    empreinte_affirmation: empreinteAffirmation(g.affirmation),
    t_raisonnement: g.affirmation.t_raisonnement,
    verdict: g.verdict,
    defauts: g.defauts,
    entree: empreinteEntree(g.entree_ancree),
    racine_plancher: g.racine_plancher,
  }));
}

/** Python : LotGouverne.empreinte_lot / recalculer_empreinte_lot. */
export function empreinteLot(
  gouvernees: GouverneeLot[], racine: string, plancher: string, verifie: boolean,
): string {
  const emps: string[] = [];
  for (let i = 0; i < gouvernees.length; i++) {
    emps.push(empreinteGouvernee(gouvernees[i] as GouverneeLot));
  }
  return sha(canon({
    racine: racine, plancher: plancher, verifie: verifie, gouvernees: emps,
  }));
}

/**
 * Python : rf_liaison_rev5.claim_id.
 *
 * CORRECTION APRÈS DIVERGENCE (ARRET_BLOC_P8.txt = 7be27af9…). `claim_id`
 * n'est PAS une étiquette libre : le port l'avait figé à « c0 ». C'est une
 * valeur CALCULÉE, qui entre dans empreinte_gouvernee donc dans empreinte_lot.
 *
 * `claim` est le dictionnaire BRUT (cle, valeur, categorie, source_id,
 * section, extrait) — jamais l'affirmation adaptée. `index` commence à 1.
 */
export function claimId(index: number, claim: unknown, t: number): string {
  const charge = canon({ claim: claim, t_raisonnement: t });
  return "c" + index + "-" + sha(charge).substring(0, 12);
}

export type LigneRapport = {
  cle: string; categorie: string; verdict: string; defauts: string[];
};

export type Rapport = {
  racine_plancher: string; empreinte_lot: string; t_raisonnement: number;
  gouvernees: LigneRapport[]; non_affichees: number; verdicts_reveles: number;
};

/** Assemble le rapport d'audit. La sérialisation est celle de `canon`. */
export function batirRapport(
  racinePlancher: string, empLot: string, t: number,
  lignes: LigneRapport[], nonAffichees: number, verdictsReveles: number,
): Rapport {
  return {
    racine_plancher: racinePlancher, empreinte_lot: empLot, t_raisonnement: t,
    gouvernees: lignes, non_affichees: nonAffichees, verdicts_reveles: verdictsReveles,
  };
}

export function serialiser(r: Rapport): string { return canon(r); }
export function empreinteRapport(r: Rapport): string { return sha(canon(r)); }

/** Longueur en OCTETS UTF-8 — pas en unités UTF-16. */
export function octets(s: string): number { return utf8ToBytes(s).length; }
