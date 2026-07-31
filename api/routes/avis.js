const express = require('express');
const router = express.Router();
const { createAvis, getAvisByProduit } = require('../controllers/avisController');

router.post('/', createAvis);
router.get('/:produitId', getAvisByProduit);

module.exports = router;