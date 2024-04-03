const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write('{"message" : "All ok."}');
  res.end();
});

server.listen(process.env.PORT || PORT, () => {
  console.log("Server at http://localhost:5000");
});
