// controllers/produitController.js
const { pool } = require('../db');

async function getAllProduits(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM produits');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

async function getProduitById(req, res) {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM produits WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

async function createProduit(req, res) {
    try {
        const { nom, prix, description } = req.body;

        if (!nom || prix === undefined) {
            return res.status(400).json({ message: 'Les champs "nom" et "prix" sont obligatoires' });
        }
        if (typeof prix !== 'number' || prix < 0) {
            return res.status(400).json({ message: 'Le prix doit être un nombre positif' });
        }

        const [result] = await pool.query(
            'INSERT INTO produits (nom, prix, description) VALUES (?, ?, ?)',
            [nom, prix, description || null]
        );

        res.status(201).json({ id: result.insertId, nom, prix, description });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

async function updateProduit(req, res) {
    try {
        const { id } = req.params;
        const { nom, prix, description } = req.body;

        if (!nom || prix === undefined) {
            return res.status(400).json({ message: 'Les champs "nom" et "prix" sont obligatoires' });
        }

        const [result] = await pool.query(
            'UPDATE produits SET nom = ?, prix = ?, description = ? WHERE id = ?',
            [nom, prix, description || null, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }

        res.status(200).json({ id, nom, prix, description });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

async function deleteProduit(req, res) {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM produits WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }

        res.status(200).json({ message: 'Produit supprimé avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

module.exports = { getAllProduits, getProduitById, createProduit, updateProduit, deleteProduit };