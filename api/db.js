// db.js
// Connexion à la base MySQL via un pool de connexions (plus performant qu'une connexion unique)

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Fonction utilitaire pour tester la connexion au démarrage
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connexion MySQL réussie');
        connection.release();
    } catch (error) {
        console.error('❌ Erreur de connexion MySQL:', error.message);
    }
}

module.exports = { pool, testConnection };
