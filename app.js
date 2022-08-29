const http = require("http");

const server = http.createServer((req, rep) => {
  const url = req.url;
  const method = req.method; // pour verfier si cest la bonne methode ou pas ('POST' ou 'GET')
});

server.listen(3000);
