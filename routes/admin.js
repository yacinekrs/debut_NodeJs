
const path = require('path');

const express = require('express');

const router = express.Router();

// elle est atteinte que par /admin/ajout-produit => GET
router.get('/add-product', (req, res, next) => {
  //console.log(" le deuxieme middelware");
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// elle est atteinte que par /admin/ajout-produit =>  POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;// il nous permet d'importer les routes sur dautre fichier
