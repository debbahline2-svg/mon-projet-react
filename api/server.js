const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { testConnection } = require('./db');
const { connectNoSQL } = require('./db-nosql');

const produitsRoutes = require('./routes/produits');
const avisRoutes = require('./routes/avis');
const reservationsRoutes = require('./routes/reservations');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.status(200).json({ status: 'API is running' }));

app.use('/api/produits', produitsRoutes);
app.use('/api/avis', avisRoutes);
app.use('/api/reservations', reservationsRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route non trouvée' }));

app.listen(PORT, async () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    await testConnection();
    await connectNoSQL();
});

module.exports = app;