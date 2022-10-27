const express = require("express"); //importer le package express
const path = require('path')

const router = express.Router(); // creer un nouvel objet routeur pour gerer les requete

router.get("/", (req, res, next) => {
  console.log("le troisieme middelware");
  res.sendFile(path.join(__dirname, '../', 'views', 'boutique.html'));
});

module.exports = router;
