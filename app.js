const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminrouter = require("./routes/admin");
const boutiquerouter = require("./routes/boutique");
const res = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminrouter);
app.use(boutiquerouter);

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.listen(3000); // il configure le serveur et le mets a l ecoute au meme temps
// const server = http.createServer(app);
// server.listen(3000);

// app.use("/", (req, res, next) => {
//   console.log("le premier middelware");
//   next(); //permet de continuer vers le prochain middelwar
// });
