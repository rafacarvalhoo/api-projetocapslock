const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(express.json());

const banco = new sqlite3.Database("./banco.db");

banco.run(`
    CREATE TABLE IF NOT EXISTS ordens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cliente TEXT,
        descricao TEXT,
        tecnico TEXT
    )
`);

app.listen(3000, function() {
    console.log("Servidor funcionando!");
});
