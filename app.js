const http = require("http");
const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("le premier middelware");
  next(); //permet de continuer vers le prochain middelwar
});

app.use("/production", (req, res, next) => {
  //use nous permet d'ajouter une nouvelle fonction middelware
  console.log(" le deuxieme middelware");
  res.send("<h1> page de production <h1>");
});

app.use("/", (req, res, next) => {
  //use nous permet d'ajouter une nouvelle fonction middelware
  console.log("le troisieme middelware");
  res.send("<h1> hello from express<h1>");
});

app.listen(3000); // il configure le serveur et le mets a l ecoute au meme temps
// const server = http.createServer(app);
// server.listen(3000);
