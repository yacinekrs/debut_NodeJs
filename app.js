const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));//pour analyser les requete rentrante
app.use(express.static(path.join(__dirname, 'public')))// a revoir la definition de statique et public(pourquoi ca marche le faite de mettre le link dans html et c est tout)

app.use('/admin', adminRoutes);// "/admin" c'est pour dire que uniquement les path qui commence avec admin qui peuvent y'acceder
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));// pour gerer les pages introuvable
    //404 c est le code d'etat des pages introuvable
});

app.listen(3000);// il configure le serveur et le mets a l ecoute au meme temps
// const server = http.createServer(app);
// server.listen(3000);
