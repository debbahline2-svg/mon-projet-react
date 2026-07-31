const { pool } = require('../db');
const Reservation = require('../models/Reservation');

async function createReservation(req, res) {
    try {
        const { utilisateur_id, produit_id, date_debut, date_fin } = req.body;

        if (!utilisateur_id || !produit_id || !date_debut || !date_fin) {
            return res.status(400).json({ message: 'Tous les champs sont requis' });
        }

        const [produitRows] = await pool.query('SELECT * FROM produits WHERE id = ?', [produit_id]);
        if (produitRows.length === 0) {
            return res.status(404).json({ message: 'Produit introuvable' });
        }
        const produit = produitRows[0];

        const [reservationsExistantes] = await pool.query(
            'SELECT date_debut, date_fin FROM reservations WHERE produit_id = ?',
            [produit_id]
        );

        const nouvelleReservation = new Reservation(produit, date_debut, date_fin);

        if (!nouvelleReservation.datesValides()) {
            return res.status(400).json({ message: 'La date de fin doit être après la date de début' });
        }

        if (!nouvelleReservation.estDisponible(reservationsExistantes)) {
            return res.status(409).json({ message: 'Le produit est déjà réservé sur cette période' });
        }

        const prixTotal = nouvelleReservation.calculerPrixTotal();

        const [result] = await pool.query(
            `INSERT INTO reservations (utilisateur_id, produit_id, date_debut, date_fin, prix_total)
             VALUES (?, ?, ?, ?, ?)`,
            [utilisateur_id, produit_id, date_debut, date_fin, prixTotal]
        );

        res.status(201).json({ message: 'Réservation créée', reservationId: result.insertId, prixTotal });
    } catch (error) {
        console.error('Erreur création réservation :', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

async function getReservationsByUser(req, res) {
    try {
        const { id } = req.params;
        const [rows] = await pool.query(
            `SELECT r.id, r.date_debut, r.date_fin, r.prix_total,
                    p.nom AS produit_nom, p.categorie, p.image_url
             FROM reservations r
             JOIN produits p ON r.produit_id = p.id
             WHERE r.utilisateur_id = ?
             ORDER BY r.date_debut DESC`,
            [id]
        );
        res.json(rows);
    } catch (error) {
        console.error('Erreur récupération réservations :', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

module.exports = { createReservation, getReservationsByUser };