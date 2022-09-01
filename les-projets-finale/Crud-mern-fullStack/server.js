const express = require("express");
const app = express();

// Important la connexion mongobd
const fileMongo = require("./conexion");

app.get("/", (req, res) => {
  res.end("bienvenue dans le monde du back-end node.js");
});

// configuration serveur
app.listen(5000, function () {
  console.log("le serveur node1122 tourne correctement");
});
