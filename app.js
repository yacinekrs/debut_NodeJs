const http = require("http");

const server = http.createServer((req, rep) => {
  rep.setHeader("Cotent-Type", "text/html"); // le type du contenu de la reponse est html
  rep.write("<html>");
  rep.write("<head><title> ma premiere page </title><head>");
  rep.write("<body><h1> Helle world de serveur node.js <h1></body>");
  rep.write("<body><h2> Helle world de serveur node.js <h2></body>");
  rep.write("</html>");
  rep.end;
});

server.listen(3000);
