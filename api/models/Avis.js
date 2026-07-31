// models/Avis.js
// Schéma Mongoose pour les avis clients (données flexibles, adaptées au NoSQL)

const mongoose = require('mongoose');

const avisSchema = new mongoose.Schema({
    produitId: { type: Number, required: true }, // référence vers l'id MySQL du produit
    auteur: { type: String, required: true },
    note: { type: Number, min: 1, max: 5, required: true },
    commentaire: { type: String },
    dateCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Avis', avisSchema);