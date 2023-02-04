const path = require('path');// pour le cheminement

const express = require('express');//importer le package express

const router = express.Router();// creer un nouvel objet routeur pour gerer les requete

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  //join nous retourne un chemin concatener a partir de ses parametre
  //1st parametre __dirname contient le chemin absolu vers ce projet 
  //on a utilisé ../ prsq dirname pointe sur le dossier ou on l'a utilise
  //cest pour ca faut revenir en arriere pour pointer sur
});

module.exports = router;
