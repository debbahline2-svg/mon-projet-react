const express = require('express');
const router = express.Router();
const { ajouterProduit } = require('../controllers/panierController');

router.post('/ajouter', ajouterProduit);

module.exports = router;