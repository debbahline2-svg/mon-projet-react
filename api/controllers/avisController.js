const Avis = require('../models/Avis');

async function createAvis(req, res) {
    try {
        const { produitId, auteur, note, commentaire } = req.body;

        if (!produitId || !auteur || !note) {
            return res.status(400).json({ message: 'produitId, auteur et note sont requis' });
        }

        const nouvelAvis = new Avis({ produitId, auteur, note, commentaire });
        await nouvelAvis.save();

        res.status(201).json({ message: 'Avis enregistré', avis: nouvelAvis });
    } catch (error) {
        console.error('Erreur création avis :', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

async function getAvisByProduit(req, res) {
    try {
        const { produitId } = req.params;
        const avis = await Avis.find({ produitId }).sort({ dateCreation: -1 });
        res.status(200).json(avis);
    } catch (error) {
        console.error('Erreur récupération avis :', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

module.exports = { createAvis, getAvisByProduit };