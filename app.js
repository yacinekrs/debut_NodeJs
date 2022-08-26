const http = require("http");

const server = http.createServer((req, rep) => {
  console.log("c est fait ta fait une requete http");
});

server.listen(3000);
