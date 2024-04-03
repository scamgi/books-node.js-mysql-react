const { getAll, post } = require("../models/bookModel");
const { getPostData } = require("../utils");

async function getAllBooks(req, res) {
  const books = await getAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(books));
  res.end();
}

async function postBook(req, res) {
  const newBookString = await getPostData(req, res);
  const newBook = JSON.parse(newBookString);
  const results = await post(newBook);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(results));
  res.end();
}

module.exports = {
  getAllBooks,
  postBook,
};
