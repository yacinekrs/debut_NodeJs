const fs = require("fs");

if (url === "/") {
  rep.write("<html>");
  rep.write("<head><title>message</title><head>");
  rep.write(
    '<body><form action="/message" method="POST"><input type="text" name="mesg"><button type="submit">Send</button></form></body>'
  );
  rep.write("</html>");
  return rep.end();
}

if (url === "/message" && method === "POST") {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log(body);
  });
  return req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split("=")[1];
    fs.writeFile("message.txt", message, (err) => {
      rep.statusCode = 302; // code de redirection
      rep.setHeader("Location", "/");
      return rep.end();
    });
  });
}

rep.setHeader("Cotent-Type", "text/html"); // le type du contenu de la reponse est html
rep.write("<html>");
rep.write("<head><title> reponse serveur </title><head>");
rep.write("<body><h1> Helle world de serveur node.js <h1></body>");
rep.write("</html>");
rep.end();
