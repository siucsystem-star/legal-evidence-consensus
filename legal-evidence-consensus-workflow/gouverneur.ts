/**
 * PORT P7 — VERDICT (chemin de LECTURE et de GOUVERNANCE)
 *
 * Référence gelée : reality_floor_core_v031g_rev3.py
 *                 = dbeb2db4091c904e835d82fae08686566fedc0f033647d4dc02c28d5456fe4cd
 * Couplage : NOTE_COUPLAGE_P6_P7.md
 *          = 4c44526da029e71b68c3a444683b04b48164a789949de386d8c9fa949c1edf11
 *
 * PORTÉ : Vue, moteur_resolution, Mesureur, statut, table des verdicts.
 * NON PORTÉ : Constructeur, RegistreAppendOnly, génération de signature.
 *             Le chemin d'ÉCRITURE reste en Python.
 */

// ── Les 15 codes de défaut ──────────────────────────────────────────────
export const INCOMPATIBILITE_ETAT_VIVANT = "INCOMPATIBILITE_ETAT_VIVANT";
export const VALEUR_PERIMEE = "VALEUR_PERIMEE";
export const VALEUR_NON_ENCORE_VALIDE = "VALEUR_NON_ENCORE_VALIDE";
export const VALEUR_NON_CONNAISSABLE_A_T = "VALEUR_NON_CONNAISSABLE_A_T";
export const VALEUR_CORRIGEE_RETRO = "VALEUR_CORRIGEE_RETRO";
export const SOURCE_INCONNUE = "SOURCE_INCONNUE";
export const SOURCE_MAL_ATTRIBUEE = "SOURCE_MAL_ATTRIBUEE";
export const PREUVE_NON_CONCORDANTE = "PREUVE_NON_CONCORDANTE";
export const PREUVE_ABSENTE = "PREUVE_ABSENTE";
export const SECTION_NON_CONCORDANTE = "SECTION_NON_CONCORDANTE";
export const CATEGORIE_NON_CONCORDANTE = "CATEGORIE_NON_CONCORDANTE";
export const HORS_BESOIN = "HORS_BESOIN";
export const ABSENCE_D_ANCRAGE = "ABSENCE_D_ANCRAGE";
export const AMBIGUITE_D_ANCRAGE = "AMBIGUITE_D_ANCRAGE";
export const CONFLIT_D_ETAT = "CONFLIT_D_ETAT";

export const FAUTE = "FAUTE";
export const ACCEPTABLE_AVEC_CONDITION = "ACCEPTABLE_AVEC_CONDITION";
export const CONFORME = "CONFORME";

/** Exactement trois codes. Ni plus, ni moins. */
const CONDITIONS_NON_BLAMANTES: Record<string, boolean> = {};
CONDITIONS_NON_BLAMANTES[ABSENCE_D_ANCRAGE] = true;
CONDITIONS_NON_BLAMANTES[HORS_BESOIN] = true;
CONDITIONS_NON_BLAMANTES[VALEUR_CORRIGEE_RETRO] = true;

export const AUTORISE = "AUTORISE";
export const REFORMULER = "REFORMULER";
export const BLOQUE = "BLOQUE";

const SUPERSESSION = "SUPERSESSION";

export const VERDICT_DE_STATUT: Record<string, string> = {};
VERDICT_DE_STATUT[CONFORME] = AUTORISE;
VERDICT_DE_STATUT[ACCEPTABLE_AVEC_CONDITION] = REFORMULER;
VERDICT_DE_STATUT[FAUTE] = BLOQUE;

// ── Prédicats ───────────────────────────────────────────────────────────
function nonVide(x: unknown): boolean {
  return typeof x === "string" && x.trim().length > 0;
}

/** G3 : retire les doublons en conservant l'ordre de PREMIÈRE apparition. */
function dedup(defauts: string[]): string[] {
  const vus: string[] = [];
  for (let i = 0; i < defauts.length; i++) {
    const d = defauts[i] as string;
    if (vus.indexOf(d) === -1) vus.push(d);
  }
  return vus;
}

export type EntE = {
  cle: string; valeur: string; categorie: string; source_id: string;
  doc_hash: string; section: string; extrait: string;
  valid_from: number; valid_until: number | null; known_from: number;
  seq: number; relation: string;
};

export type Affirmation = {
  cle: string; valeur: string; categorie: string; source_citee: string | null;
  t_raisonnement: number; etiquette: string;
  section_citee: string | null; extrait_cite: string | null; doc_hash_cite: string | null;
};

export type Mesure = {
  affirmation: Affirmation; defauts: string[]; detail: string;
  fautes: string[]; conditions: string[]; statut: string; verdict: string;
};

/** Python : _eqkey — la classe d'équivalence d'une entrée. */
function eqkey(e: EntE): string {
  return JSON.stringify([e.cle, e.valeur, e.categorie, e.source_id, e.section,
    e.extrait, e.doc_hash, e.valid_from, e.valid_until, e.known_from, e.relation]);
}

type PickRes = { rep: EntE | null; ens: EntE[]; amb: boolean };

/** Python : _pick_ex_aequo. `agg` vaut "max" ou "min". */
function pickExAequo(cands: EntE[], keyf: (e: EntE) => number[], agg: string): PickRes {
  if (cands.length === 0) return { rep: null, ens: [], amb: false };
  let best = keyf(cands[0] as EntE);
  for (let i = 1; i < cands.length; i++) {
    const k = keyf(cands[i] as EntE);
    const c = cmp(k, best);
    if ((agg === "max" && c > 0) || (agg === "min" && c < 0)) best = k;
  }
  const tops: EntE[] = [];
  for (let i = 0; i < cands.length; i++) {
    if (cmp(keyf(cands[i] as EntE), best) === 0) tops.push(cands[i] as EntE);
  }
  const classes: Record<string, boolean> = {};
  for (let i = 0; i < tops.length; i++) classes[eqkey(tops[i] as EntE)] = true;
  if (Object.keys(classes).length === 1) return { rep: tops[0] as EntE, ens: tops, amb: false };
  return { rep: null, ens: [], amb: true };
}

/** Comparaison lexicographique de tuples, comme Python. */
function cmp(a: number[], b: number[]): number {
  const n = a.length < b.length ? a.length : b.length;
  for (let i = 0; i < n; i++) {
    const x = a[i] as number;
    const y = b[i] as number;
    if (x < y) return -1;
    if (x > y) return 1;
  }
  return a.length - b.length;
}

export type Resolution = {
  verdict: string; top: EntE[]; rep: EntE | null; ensemble: EntE[];
};

const INFINI = Number.POSITIVE_INFINITY;

/**
 * MOTEUR TEMPOREL v0.3.1f — fermeture canonique (valid_from, known_from).
 * `eff_end` combine valid_until et la supersession par (vf, kf).
 */
export function moteurResolution(
  candidats: EntE[], t: number, horizon: number, espace?: EntE[],
): Resolution {
  const esp = espace ? espace : candidats;
  const supers: EntE[] = [];
  for (let i = 0; i < esp.length; i++) {
    const s = esp[i] as EntE;
    if (s.known_from <= horizon && s.relation === SUPERSESSION) supers.push(s);
  }

  function effEnd(e: EntE): number {
    const ends: number[] = [];
    if (e.valid_until !== null && e.valid_until !== undefined) ends.push(e.valid_until);
    const clos: number[] = [];
    for (let i = 0; i < supers.length; i++) {
      const s = supers[i] as EntE;
      if (cmp([s.valid_from, s.known_from], [e.valid_from, e.known_from]) > 0) {
        clos.push(s.valid_from);
      }
    }
    if (clos.length > 0) {
      let m = clos[0] as number;
      for (let i = 1; i < clos.length; i++) if ((clos[i] as number) < m) m = clos[i] as number;
      ends.push(m);
    }
    if (ends.length === 0) return INFINI;
    let mn = ends[0] as number;
    for (let i = 1; i < ends.length; i++) if ((ends[i] as number) < mn) mn = ends[i] as number;
    return mn;
  }

  const actifs: EntE[] = [];
  for (let i = 0; i < candidats.length; i++) {
    const e = candidats[i] as EntE;
    if (e.valid_from <= t && e.known_from <= horizon && t < effEnd(e)) actifs.push(e);
  }
  if (actifs.length > 0) {
    let vfMax = (actifs[0] as EntE).valid_from;
    for (let i = 1; i < actifs.length; i++) {
      const v = (actifs[i] as EntE).valid_from;
      if (v > vfMax) vfMax = v;
    }
    const seg: EntE[] = [];
    for (let i = 0; i < actifs.length; i++) {
      if ((actifs[i] as EntE).valid_from === vfMax) seg.push(actifs[i] as EntE);
    }
    let kfMax = (seg[0] as EntE).known_from;
    for (let i = 1; i < seg.length; i++) {
      const k = (seg[i] as EntE).known_from;
      if (k > kfMax) kfMax = k;
    }
    const top: EntE[] = [];
    for (let i = 0; i < seg.length; i++) {
      if ((seg[i] as EntE).known_from === kfMax) top.push(seg[i] as EntE);
    }
    return { verdict: "courant", top: top, rep: top[0] as EntE, ensemble: top };
  }

  const futurs: EntE[] = [];
  const nonConn: EntE[] = [];
  const expires: EntE[] = [];
  for (let i = 0; i < candidats.length; i++) {
    const e = candidats[i] as EntE;
    if (e.valid_from > t) futurs.push(e);
    if (e.valid_from <= t && e.known_from > t) nonConn.push(e);
    if (e.valid_from <= t && t >= effEnd(e)) expires.push(e);
  }
  if (expires.length > 0) {
    const p = pickExAequo(expires, function (e) { return [e.valid_from, e.known_from]; }, "max");
    return { verdict: p.amb ? "ambigu" : "expire", top: [], rep: p.rep, ensemble: p.ens };
  }
  if (futurs.length > 0 && nonConn.length === 0) {
    const p = pickExAequo(futurs, function (e) { return [e.valid_from]; }, "min");
    return { verdict: p.amb ? "ambigu" : "futur", top: [], rep: p.rep, ensemble: p.ens };
  }
  if (nonConn.length > 0 && futurs.length === 0) {
    const p = pickExAequo(nonConn, function (e) { return [e.known_from]; }, "min");
    return { verdict: p.amb ? "ambigu" : "non_connaissable", top: [], rep: p.rep, ensemble: p.ens };
  }
  if (futurs.length === 0 && nonConn.length === 0 && expires.length === 0) {
    return { verdict: "aucun", top: [], rep: null, ensemble: [] };
  }
  return { verdict: "ambigu", top: [], rep: null, ensemble: [] };
}

// ── VUE : lecture de l'instantané ───────────────────────────────────────
export class Vue {
  private ev: Array<{ type: string; data: string; seq: number }>;

  constructor(snapshotJson: string) {
    const d = JSON.parse(snapshotJson) as { events: Array<{ type: string; data: string; seq: number }> };
    this.ev = d.events;
  }

  sourcesAdmises(): Record<string, boolean> {
    const s: Record<string, boolean> = {};
    for (let i = 0; i < this.ev.length; i++) {
      const e = this.ev[i] as { type: string; data: string };
      if (e.type === "DECL_SOURCE") s[(JSON.parse(e.data) as { source_id: string }).source_id] = true;
    }
    return s;
  }

  besoinsActifs(): Record<string, boolean> {
    const s: Record<string, boolean> = {};
    for (let i = 0; i < this.ev.length; i++) {
      const e = this.ev[i] as { type: string; data: string };
      if (e.type === "DECL_BESOIN") s[(JSON.parse(e.data) as { categorie: string }).categorie] = true;
    }
    return s;
  }

  entrees(cle: string): EntE[] {
    const out: EntE[] = [];
    for (let i = 0; i < this.ev.length; i++) {
      const e = this.ev[i] as { type: string; data: string; seq: number };
      if (e.type !== "ANCRAGE") continue;
      const p = JSON.parse(e.data) as Record<string, unknown>;
      if (p["cle"] !== cle) continue;
      out.push({
        cle: p["cle"] as string, valeur: p["valeur"] as string,
        categorie: p["categorie"] as string, source_id: p["source_id"] as string,
        doc_hash: p["doc_hash"] as string, section: p["section"] as string,
        extrait: p["extrait"] as string, valid_from: p["valid_from"] as number,
        valid_until: (p["valid_until"] === undefined ? null : p["valid_until"]) as number | null,
        known_from: p["known_from"] as number, seq: e.seq,
        relation: (p["relation"] === undefined ? SUPERSESSION : p["relation"]) as string,
      });
    }
    return out;
  }

  cands(cle: string, categorie: string): EntE[] {
    const t = this.entrees(cle);
    const out: EntE[] = [];
    for (let i = 0; i < t.length; i++) {
      if ((t[i] as EntE).categorie === categorie) out.push(t[i] as EntE);
    }
    return out;
  }

  etat(cle: string, categorie: string, t: number, horizon: number): [string, EntE[]] {
    const cands = this.cands(cle, categorie);
    const r = moteurResolution(cands, t, horizon, cands);
    if (r.verdict === "courant") {
      const vals: Record<string, boolean> = {};
      for (let i = 0; i < r.top.length; i++) vals[(r.top[i] as EntE).valeur] = true;
      if (Object.keys(vals).length > 1) return ["conflit", r.top];
      return ["actif", r.top];
    }
    return ["aucun", []];
  }

  stateKnownAt(cle: string, categorie: string, t: number): [string, EntE[]] {
    return this.etat(cle, categorie, t, t);
  }

  stateReconstructedAt(cle: string, categorie: string, t: number): [string, EntE[]] {
    return this.etat(cle, categorie, t, INFINI);
  }

  /** Python : apparier. Retourne [ref, defaut, ensemble]. */
  apparier(a: Affirmation): [EntE | null, string | null, EntE[]] {
    const toutes = this.entrees(a.cle);
    const allV: EntE[] = [];
    for (let i = 0; i < toutes.length; i++) {
      if ((toutes[i] as EntE).valeur === a.valeur) allV.push(toutes[i] as EntE);
    }
    if (allV.length === 0) return [null, INCOMPATIBILITE_ETAT_VIVANT, []];

    let narrow = allV;
    const champs: Array<[string, unknown]> = [
      ["categorie", a.categorie], ["source_id", a.source_citee],
      ["section", a.section_citee], ["extrait", a.extrait_cite],
      ["doc_hash", a.doc_hash_cite],
    ];
    for (let c = 0; c < champs.length; c++) {
      const nom = (champs[c] as [string, unknown])[0];
      const val = (champs[c] as [string, unknown])[1];
      if (val === null || val === undefined) continue;
      const f: EntE[] = [];
      for (let i = 0; i < narrow.length; i++) {
        const e = narrow[i] as unknown as Record<string, unknown>;
        if (e[nom] === val) f.push(narrow[i] as EntE);
      }
      // Python : `if f: narrow = f` — un filtre VIDE laisse narrow inchangé.
      if (f.length > 0) narrow = f;
    }

    const cats: Record<string, boolean> = {};
    for (let i = 0; i < narrow.length; i++) cats[(narrow[i] as EntE).categorie] = true;
    const noms = Object.keys(cats);
    const cat = noms.length === 1 ? (noms[0] as string) : a.categorie;
    const espace = this.cands(a.cle, cat);
    const r = moteurResolution(narrow, a.t_raisonnement, a.t_raisonnement, espace);

    if (r.verdict === "courant") {
      const classes: Record<string, boolean> = {};
      for (let i = 0; i < r.top.length; i++) classes[eqkey(r.top[i] as EntE)] = true;
      if (Object.keys(classes).length === 1) return [r.top[0] as EntE, null, r.top];
      return [null, AMBIGUITE_D_ANCRAGE, []];
    }
    if (r.verdict === "expire" || r.verdict === "futur" || r.verdict === "non_connaissable") {
      return [r.rep, null, r.ensemble];
    }
    return [null, AMBIGUITE_D_ANCRAGE, []];
  }
}

// ── MESUREUR ────────────────────────────────────────────────────────────
function fabriquer(a: Affirmation, defauts: string[], details: string[]): Mesure {
  const d = dedup(defauts);
  const fautes: string[] = [];
  const conditions: string[] = [];
  for (let i = 0; i < d.length; i++) {
    const c = d[i] as string;
    if (CONDITIONS_NON_BLAMANTES[c]) conditions.push(c);
    else fautes.push(c);
  }
  const statut = fautes.length > 0 ? FAUTE
    : (conditions.length > 0 ? ACCEPTABLE_AVEC_CONDITION : CONFORME);
  return {
    affirmation: a, defauts: d, detail: details.join(" ; "),
    fautes: fautes, conditions: conditions, statut: statut,
    verdict: VERDICT_DE_STATUT[statut] as string,
  };
}

export function mesurer(v: Vue, a: Affirmation): Mesure {
  const defauts: string[] = [];
  const details: string[] = [];
  const sources = v.sourcesAdmises();
  const besoins = v.besoinsActifs();

  const srcOk = a.source_citee !== null && sources[a.source_citee] === true;
  if (!srcOk) {
    defauts.push(SOURCE_INCONNUE);
    details.push("source « " + a.source_citee + " » hors registre");
  }
  if (!besoins[a.categorie]) {
    defauts.push(HORS_BESOIN);
    details.push("catégorie « " + a.categorie + " » hors besoins actifs");
  }
  if (!nonVide(a.section_citee) || !nonVide(a.extrait_cite)) {
    defauts.push(PREUVE_ABSENTE);
    details.push("section/extrait manquants ou vides");
  }

  if (v.entrees(a.cle).length === 0) {
    defauts.push(ABSENCE_D_ANCRAGE);
    details.push("aucune entrée pour « " + a.cle + " »");
    return fabriquer(a, defauts, details);
  }

  const app = v.apparier(a);
  const ref = app[0];
  const resdef = app[1];
  if (resdef !== null) {
    defauts.push(resdef);
    details.push(resdef === INCOMPATIBILITE_ETAT_VIVANT ? "valeur absente" : "appariement ambigu");
    return fabriquer(a, defauts, details);
  }
  const R = ref as EntE;

  if (R.categorie !== a.categorie) {
    defauts.push(CATEGORIE_NON_CONCORDANTE);
    details.push("catégorie ancrée « " + R.categorie + " » ≠ « " + a.categorie + " »");
  }
  if (srcOk && a.source_citee !== null && R.source_id !== a.source_citee) {
    defauts.push(SOURCE_MAL_ATTRIBUEE);
    details.push("valeur portée par " + R.source_id);
  }
  if (nonVide(a.section_citee) && R.section !== a.section_citee) {
    defauts.push(SECTION_NON_CONCORDANTE);
    details.push("section « " + a.section_citee + " » ≠ « " + R.section + " »");
  }
  if (nonVide(a.extrait_cite) && R.extrait !== a.extrait_cite) {
    defauts.push(PREUVE_NON_CONCORDANTE);
    details.push("extrait ≠ preuve ancrée");
  }
  if (a.doc_hash_cite !== null && R.doc_hash !== a.doc_hash_cite) {
    // G3 : PREUVE_NON_CONCORDANTE peut être ajouté DEUX FOIS ici.
    defauts.push(PREUVE_NON_CONCORDANTE);
    details.push("doc_hash cité ≠ version ancrée");
  }

  const t = a.t_raisonnement;
  if (R.valid_from > t) {
    defauts.push(VALEUR_NON_ENCORE_VALIDE);
    details.push("effective à partir de " + R.valid_from + " > t=" + t);
  } else if (R.known_from > t) {
    defauts.push(VALEUR_NON_CONNAISSABLE_A_T);
    details.push("connu à kf=" + R.known_from + " > t=" + t);
  } else {
    const sk = v.stateKnownAt(a.cle, R.categorie, t);
    const stk = sk[0];
    const setk = sk[1];
    const seqs: Record<number, boolean> = {};
    for (let i = 0; i < setk.length; i++) seqs[(setk[i] as EntE).seq] = true;
    if (stk === "conflit") {
      defauts.push(CONFLIT_D_ETAT);
      details.push("ex æquo de valeurs distinctes dans (clé, catégorie)");
    } else if (stk === "actif" && seqs[R.seq]) {
      const sr = v.stateReconstructedAt(a.cle, R.categorie, t);
      const strec = sr[0];
      const setr = sr[1];
      if (strec === "conflit") {
        defauts.push(CONFLIT_D_ETAT);
        details.push("conflit à la reconstruction");
      } else if (strec === "actif" && (setr[0] as EntE).valeur !== a.valeur) {
        defauts.push(VALEUR_CORRIGEE_RETRO);
        details.push("reconstruction « " + (setr[0] as EntE).valeur + " »");
      } else {
        details.push("ancrage courant à t=" + t);
      }
    } else {
      const kv = stk === "actif" ? (setk[0] as EntE).valeur : "aucune/conflit";
      defauts.push(VALEUR_PERIMEE);
      details.push("ancrage périmé/fermé ; courant « " + kv + " »");
    }
  }
  return fabriquer(a, defauts, details);
}
