const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("bienvenue dans le monde du back-end node.js");
});

// configuration serveur
app.listen(5000, function () {
  console.log("le serveur node1122 tourne correctement");
});
