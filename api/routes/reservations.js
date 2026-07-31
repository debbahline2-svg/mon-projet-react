const express = require('express');
const router = express.Router();
const { createReservation, getReservationsByUser } = require('../controllers/reservationController');

router.post('/', createReservation);
router.get('/utilisateur/:id', getReservationsByUser);

module.exports = router;