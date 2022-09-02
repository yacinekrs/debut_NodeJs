const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("le premier middelware");
  next(); //permet de continuer vers le prochain middelwar
});

app.use((req, res, next) => {
  console.log("le deuxieme middelware");
  next();
});
const server = http.createServer(app);

server.listen(3000);
