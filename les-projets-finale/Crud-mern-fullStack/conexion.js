const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudmernstack");

const objet = mongoose.connection;

objet.on("connected", () => {
  console.log("MoogoDB ok");
});

objet.on("error", () => {
  console.log("MoogoDB error");
});

module.exports = mongoose;
