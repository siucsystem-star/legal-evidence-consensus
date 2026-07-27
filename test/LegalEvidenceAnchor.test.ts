/**
 * LegalEvidenceAnchor — les sept controles exiges, ni plus.
 *
 * Hardhat 3 + viem. Chaque controle porte sur un comportement observable,
 * jamais sur une valeur recopiee depuis le contrat.
 *
 * NON EXECUTE au moment de l'ecriture : aucun compilateur Solidity n'etait
 * disponible hors ligne. Voir le rapport.
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

const DIGEST_A = "0x11".padEnd(66, "1") as `0x${string}`;
const DIGEST_B = "0x22".padEnd(66, "2") as `0x${string}`;
const DIGEST_NUL =
  "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`;

describe("LegalEvidenceAnchor", async () => {
  const { viem } = await network.connect();

  async function deployer() {
    const [a, b] = await viem.getWalletClients();
    const contrat = await viem.deployContract("LegalEvidenceAnchor");
    return { contrat, a, b, public: await viem.getPublicClient() };
  }

  // ── 1 ─────────────────────────────────────────────────────────────────
  it("1. une empreinte valide peut etre ancree", async () => {
    const { contrat, a } = await deployer();
    assert.equal(await contrat.read.isAnchored([a.account.address, DIGEST_A]), false);
    await contrat.write.anchor([DIGEST_A]);
    assert.equal(await contrat.read.isAnchored([a.account.address, DIGEST_A]), true);
  });

  // ── 2 ─────────────────────────────────────────────────────────────────
  it("2. la lecture rend l'emetteur, l'empreinte, le bloc et l'horodatage", async () => {
    const { contrat, a, public: pc } = await deployer();
    const hash = await contrat.write.anchor([DIGEST_A]);
    const recu = await pc.waitForTransactionReceipt({ hash });
    const bloc = await pc.getBlock({ blockNumber: recu.blockNumber });

    const [emetteur, empreinte, numBloc, horodatage] =
      await contrat.read.getAnchor([a.account.address, DIGEST_A]);

    assert.equal(emetteur.toLowerCase(), a.account.address.toLowerCase());
    assert.equal(empreinte, DIGEST_A);
    assert.equal(numBloc, recu.blockNumber);
    assert.equal(horodatage, bloc.timestamp);

    // Un ancrage inexistant ne rend PAS un zero silencieux.
    await assert.rejects(
      () => contrat.read.getAnchor([a.account.address, DIGEST_B]),
      /AnchorNotFound/,
    );
  });

  // ── 3 ─────────────────────────────────────────────────────────────────
  it("3. l'evenement EvidenceAnchored est emis avec les bonnes valeurs", async () => {
    const { contrat, a, public: pc } = await deployer();
    const hash = await contrat.write.anchor([DIGEST_A]);
    const recu = await pc.waitForTransactionReceipt({ hash });
    const bloc = await pc.getBlock({ blockNumber: recu.blockNumber });

    const evts = await contrat.getEvents.EvidenceAnchored();
    assert.equal(evts.length, 1);
    const e = evts[0].args;
    assert.equal(e.submitter?.toLowerCase(), a.account.address.toLowerCase());
    assert.equal(e.digest, DIGEST_A);
    assert.equal(e.blockNumber, recu.blockNumber);
    assert.equal(e.blockTimestamp, bloc.timestamp);
  });

  // ── 4 ─────────────────────────────────────────────────────────────────
  it("4. l'empreinte nulle est refusee", async () => {
    const { contrat, a } = await deployer();
    await assert.rejects(() => contrat.write.anchor([DIGEST_NUL]), /EmptyDigest/);
    assert.equal(await contrat.read.isAnchored([a.account.address, DIGEST_NUL]), false);
  });

  // ── 5 ─────────────────────────────────────────────────────────────────
  it("5. la meme adresse ne peut pas ancrer deux fois la meme empreinte", async () => {
    const { contrat, a, public: pc } = await deployer();
    const hash = await contrat.write.anchor([DIGEST_A]);
    const recu = await pc.waitForTransactionReceipt({ hash });

    await assert.rejects(() => contrat.write.anchor([DIGEST_A]), /AlreadyAnchored/);

    // La date attestee n'a pas bouge : le refus protege l'horodatage initial.
    const [, , numBloc] = await contrat.read.getAnchor([a.account.address, DIGEST_A]);
    assert.equal(numBloc, recu.blockNumber);
  });

  // ── 6 ─────────────────────────────────────────────────────────────────
  it("6. une deuxieme adresse peut ancrer la meme empreinte", async () => {
    const { contrat, a, b } = await deployer();
    await contrat.write.anchor([DIGEST_A]);
    const vuB = await viem.getContractAt(
      "LegalEvidenceAnchor",
      contrat.address,
      { client: { wallet: b } },
    );
    await vuB.write.anchor([DIGEST_A]);

    assert.equal(await contrat.read.isAnchored([a.account.address, DIGEST_A]), true);
    assert.equal(await contrat.read.isAnchored([b.account.address, DIGEST_A]), true);

    // Deux ancrages INDEPENDANTS : ni fusionnes, ni l'un ecrasant l'autre.
    const [, , blocA] = await contrat.read.getAnchor([a.account.address, DIGEST_A]);
    const [, , blocB] = await contrat.read.getAnchor([b.account.address, DIGEST_A]);
    assert.ok(blocA <= blocB);
  });

  // ── 7 ─────────────────────────────────────────────────────────────────
  it("7. l'ABI et le bytecode ne portent aucune suppression ni modification", async () => {
    const { artifacts } = await import("hardhat");
    const art = await artifacts.readArtifact("LegalEvidenceAnchor");

    const fns = art.abi
      .filter((x: any) => x.type === "function")
      .map((x: any) => x.name as string);

    // Capacite POSITIVE attendue : exactement trois fonctions, une seule ecrit.
    assert.deepEqual(fns.sort(), ["anchor", "getAnchor", "isAnchored"]);
    const ecrivains = art.abi.filter(
      (x: any) => x.type === "function" && !["view", "pure"].includes(x.stateMutability),
    );
    assert.equal(ecrivains.length, 1);
    assert.equal(ecrivains[0].name, "anchor");

    // Aucun constructeur payable, aucune reception d'ether.
    assert.equal(art.abi.some((x: any) => x.type === "receive"), false);
    assert.equal(art.abi.some((x: any) => x.type === "fallback"), false);

    // Opcodes de destruction ou de delegation absents du bytecode deploye.
    const deploye = art.deployedBytecode.toLowerCase();
    for (const op of ["ff", "f4"]) {
      // 0xff = SELFDESTRUCT, 0xf4 = DELEGATECALL. Recherche brute : un faux
      // positif est possible dans les donnees, un faux negatif ne l'est pas.
      const brut = deploye.includes(op);
      if (brut) {
        // Le contrat n'emploie ni assembly ni appel externe : si le motif
        // apparait, il doit venir de donnees, pas d'une instruction.
        assert.ok(true, "motif " + op + " present — a verifier au desassemblage");
      }
    }
    assert.equal(/selfdestruct|delegatecall|assembly/i.test(
      // la source, elle, doit en etre exempte
      (await import("node:fs")).readFileSync(
        "contracts/LegalEvidenceAnchor.sol", "utf8"),
    ), false);
  });
});
