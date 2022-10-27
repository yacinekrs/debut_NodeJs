const http = require("http"); //importer le package http
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminrouter = require("./routes/admin");
const boutiquerouter = require("./routes/boutique");
const res = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: false }));//pour analyser les requete rentrante

app.use("/admin", adminrouter);
app.use(boutiquerouter); // "/admin" c'est pour dire que uniquement les path qui commence avec admin qui peuvent y'acceder

app.use((req, res, next) => {
  res.status(404).send("Page not found"); // pour gerer les pages introuvable
  //404 c est le code d'etat des pages introuvable
});

app.listen(3000);// il configure le serveur et le mets a l ecoute au meme temps
// const server = http.createServer(app);
// server.listen(3000);


