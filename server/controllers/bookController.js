const { getAll } = require("../models/bookModel");

async function getAllBooks(req, res) {
  const books = await getAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(books));
  res.end();
}

module.exports = {
  getAllBooks,
};
