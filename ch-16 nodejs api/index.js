const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parse = url.parse(req.url, true);
  const endPoint = parse.pathname;

  if (endPoint !== "/products") {
    res.statusCode = 404;
    res.end("EndPoint Not Found");
    return;
  }

  const method = req.method;
  if (method === "GET") {
    // res.statusCode = 200; / remove this
    res.writeHead(200,{"content-type":"application/json"})
    return res.end(JSON.stringify({message:"Here is your fetched data"}));
  }

  if (method === "POST") {
    res.statusCode = 200;
    return res.end("Here is your stored data");
  }

  if (method === "PUT") {
    res.statusCode = 200;
    return res.end("Here is your updated data");
  }

  if (method === "DELETE") {
    res.statusCode = 200;
    return res.end("Here is your deleted data");
  }
  res.statusCode = 405;
  res.end("Method not allowed");
});
server.listen(8000);
