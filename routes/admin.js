const express = require("express");

const router = express.Router(); // creer un nouvel objet routeur pour gerer les requete

router.get("/ajout-produit", (req, res, next) => {
  //use nous permet d'ajouter une nouvelle fonction middelware
  console.log(" le deuxieme middelware");
  res.send(
    "<form action='/produit' method='POST'><input type='text' name='title'><button type='submit'> ajouter </button></form>"
  );
});
router.post("/produit", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
