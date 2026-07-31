const Panier = require('../models/Panier');

async function ajouterProduit(req, res) {
    try {
        const { userId, produit } = req.body;

        let panier = await Panier.findOne({ userId });
        if (!panier) {
            panier = new Panier({ userId, items: [produit] });
        } else {
            panier.items.push(produit);
        }
        await panier.save();

        res.status(200).json({ message: 'Produit ajouté !' });
    } catch (err) {
        console.error('Erreur ajout panier :', err.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

module.exports = { ajouterProduit };