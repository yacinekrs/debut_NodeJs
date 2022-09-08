const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //use nous permet d'ajouter une nouvelle fonction middelware
  console.log("le troisieme middelware");
  res.send("<h1> hello from express<h1>");
});

module.exports = router;
