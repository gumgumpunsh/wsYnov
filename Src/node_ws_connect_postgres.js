var postgres = require('postgres');
require('dotenv').config();
const { Pool } = require('pg');

var con = postgres.createConnection({
    host: "wsynovbd-wsynov-34.a.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_kS0DK-44w3aXXZtEA61",
    port: 21260,
    database: "defaultdb",
});
con.connect()
    .then(() => {
        console.log('Connecté à la base de données PostgreSQL');
        // Requête SQL pour créer une table
        const sql = "CREATE TABLE IF NOT EXISTS ws_masks (id SERIAL PRIMARY KEY, address VARCHAR(255))";
        // Exécuter la requête SQL
        return con.query(sql);
    })
    .then(() => {
        console.log("Table créée !");
        // Fermer la connexion à la base de données PostgreSQL
        return con.end();
    })
    .catch(err => {
        console.error('Erreur lors de la connexion à la base de données PostgreSQL', err);
        // En cas d'erreur, fermer la connexion à la base de données PostgreSQL
        con.end();
    });