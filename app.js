const http = require("http");

const server = http.createServer((req, rep) => {
  const url = req.url;
  if (url === "/") {
    rep.write("<html>");
    rep.write("<head><title>message</title><head>");
    rep.write(
      "<body><form action='/messge' methode><input type = 'text'> <button type='submit'>envoyer</button></form></body>"
    );
    rep.write("</html>");
    return rep.end();
  }
  rep.setHeader("Cotent-Type", "text/html"); // le type du contenu de la reponse est html
  rep.write("<html>");
  rep.write("<head><title> reponse serveur </title><head>");
  rep.write("<body><h1> Helle world de serveur node.js <h1></body>");
  rep.write("<body><h2> Helle world de serveur node.js <h2></body>");
  rep.write("</html>");
  rep.end();
});

server.listen(3000);
