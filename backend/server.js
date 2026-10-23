
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

const banco = new sqlite3.Database(path.join(__dirname, "banco.db"));

banco.run(`
    CREATE TABLE IF NOT EXISTS ordens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cliente TEXT,
        descricao TEXT,
        tecnico TEXT
    )
`);

app.get("/", function(req, res) {
    res.send("API do sistema de OS funcionando!");
});

app.post("/ordens", function(req, res) {
    let cliente = req.body.cliente;
    let descricao = req.body.descricao;
    let tecnico = req.body.tecnico;

    banco.run(
        "INSERT INTO ordens (cliente, descricao, tecnico) VALUES (?, ?, ?)",
        [cliente, descricao, tecnico],
        function(erro) {
            if (erro) {
                res.status(500).send("Erro ao cadastrar ordem");
            } else {
                res.send("Ordem cadastrada com sucesso!");
            }
        }
    );
});

app.get("/ordens", function(req, res) {
    banco.all("SELECT * FROM ordens", function(erro, linhas) {
        if (erro) {
            res.status(500).send("Erro ao consultar ordens");
        } else {
            res.json(linhas);
        }
    });
});

app.listen(3000, function() {
    console.log("Servidor funcionando!");
});
