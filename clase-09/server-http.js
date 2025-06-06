// const http = require("http");
import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end('<h1>Hola</h1>');
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
