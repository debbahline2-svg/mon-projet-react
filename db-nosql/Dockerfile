// db-nosql.js
// Connexion à la base MongoDB via Mongoose

const mongoose = require('mongoose');
require('dotenv').config();

async function connectNoSQL() {
try {
await mongoose.connect(process.env.MONGO_URI);
console.log('✅ Connexion MongoDB réussie');
} catch (error) {
console.error('❌ Erreur de connexion MongoDB:', error.message);
}
}

module.exports = { connectNoSQL };