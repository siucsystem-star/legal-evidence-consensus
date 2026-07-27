// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

/**
 * @title LegalEvidenceAnchor
 * @notice Ancre des empreintes `bytes32` produites hors chaine par Legal
 *         Evidence Consensus v0.1.
 *
 * CE QUE CE CONTRAT ETABLIT
 *   Qu'une adresse donnee a soumis une empreinte donnee, dans un bloc donne,
 *   a l'horodatage de ce bloc. Rien de plus.
 *
 * CE QU'IL N'ETABLIT PAS
 *   - que le document represente par l'empreinte est vrai, exact ou complet;
 *   - que l'empreinte a ete calculee sur le document qu'on pretend;
 *   - une quelconque validite juridique, admissibilite ou force probante;
 *   - la provenance reelle du document ou l'identite de son auteur;
 *   - un consensus BFT sur le CONTENU : la chaine constate une transaction,
 *     elle ne verifie pas ce que l'empreinte resume;
 *   - la qualite du travail de gouvernance mene hors chaine.
 *
 * Une empreinte ancree par une adresse honnete et une empreinte ancree par une
 * adresse malveillante sont indiscernables ici. L'ancrage est une DATATION
 * ATTRIBUEE, pas une validation.
 *
 * Aucun texte juridique, document, extrait ni donnee personnelle n'entre dans
 * ce contrat : uniquement 32 octets opaques.
 *
 * Immuable par construction : aucune fonction de suppression, de modification,
 * de proprietaire, de pause ou de mise a niveau n'existe.
 */
contract LegalEvidenceAnchor {
    /// @dev `exists` distingue l'absence d'un ancrage d'un ancrage au bloc 0.
    ///      Les trois champs tiennent dans un seul emplacement de stockage.
    struct AnchorRecord {
        bool exists;
        uint64 blockNumber;
        uint64 blockTimestamp;
    }

    /// @dev submitter => digest => enregistrement. Chaque adresse ancre pour
    ///      elle-meme : deux adresses peuvent ancrer la meme empreinte sans
    ///      se gener, et aucune ne parle au nom de l'autre.
    mapping(address => mapping(bytes32 => AnchorRecord)) private _anchors;

    /// @notice L'empreinte nulle est refusee : elle est indiscernable d'un
    ///         champ non renseigne et n'atteste de rien.
    error EmptyDigest();

    /// @notice Une adresse ne peut pas ancrer deux fois la meme empreinte :
    ///         le second ancrage n'ajouterait aucune information et deplacerait
    ///         la date attestee.
    error AlreadyAnchored(address submitter, bytes32 digest);

    /// @notice Lecture d'un ancrage inexistant. Ne jamais rendre un zero
    ///         silencieux, qui se lirait comme « ancre au bloc 0 ».
    error AnchorNotFound(address submitter, bytes32 digest);

    event EvidenceAnchored(
        address indexed submitter,
        bytes32 indexed digest,
        uint256 blockNumber,
        uint256 blockTimestamp
    );

    /**
     * @notice Inscrit `digest` au nom de `msg.sender`.
     * @dev L'emetteur est implicite : aucun parametre ne permet d'ancrer au
     *      nom d'un tiers.
     */
    function anchor(bytes32 digest) external {
        if (digest == bytes32(0)) revert EmptyDigest();

        AnchorRecord storage rec = _anchors[msg.sender][digest];
        if (rec.exists) revert AlreadyAnchored(msg.sender, digest);

        rec.exists = true;
        rec.blockNumber = uint64(block.number);
        rec.blockTimestamp = uint64(block.timestamp);

        emit EvidenceAnchored(msg.sender, digest, block.number, block.timestamp);
    }

    /// @notice Vrai si `submitter` a deja ancre `digest`.
    function isAnchored(address submitter, bytes32 digest) external view returns (bool) {
        return _anchors[submitter][digest].exists;
    }

    /**
     * @notice Rend l'ancrage complet, y compris ses cles, pour qu'une lecture
     *         se relise sans son contexte d'appel.
     * @dev Revert si l'ancrage n'existe pas.
     */
    function getAnchor(address submitter, bytes32 digest)
        external
        view
        returns (
            address anchoredBy,
            bytes32 anchoredDigest,
            uint64 blockNumber,
            uint64 blockTimestamp
        )
    {
        AnchorRecord storage rec = _anchors[submitter][digest];
        if (!rec.exists) revert AnchorNotFound(submitter, digest);
        return (submitter, digest, rec.blockNumber, rec.blockTimestamp);
    }
}
