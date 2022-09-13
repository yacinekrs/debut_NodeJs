const express = require("express");
const router = express.Router(); // creer un nouvel objet routeur pour gerer les requete

// elle est atteinte que par /admin/ajout-produit => get
router.get("/ajout-produit", (req, res, next) => {
  //use nous permet d'ajouter une nouvelle fonction middelware
  console.log(" le deuxieme middelware");
  res.send(
    "<form action='/admin/ajout-produit' method='POST'><input type='text' name='title'><button type='submit'> ajouter </button></form>"
  );
});

// elle est atteinte que par /admin/ajout-produit => post
router.post("/ajout-produit", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
