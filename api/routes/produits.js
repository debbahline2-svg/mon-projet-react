const express = require('express');
const router = express.Router();
const {
    getAllProduits,
    getProduitById,
    createProduit,
    updateProduit,
    deleteProduit
} = require('../controllers/produitController');

router.get('/', getAllProduits);
router.get('/:id', getProduitById);
router.post('/', createProduit);
router.put('/:id', updateProduit);
router.delete('/:id', deleteProduit);

module.exports = router;