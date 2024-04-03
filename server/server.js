const http = require("http");
const { getAllBooks } = require("./controllers/bookController");

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/books") {
    getAllBooks(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Route Not Found." }));
    res.end();
  }
});

server.listen(process.env.PORT || PORT, () => {
  console.log("Server at http://localhost:5000");
});
