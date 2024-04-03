const { query } = require("../db/connectionToDB");

async function getAll() {
  const results = await query(`SELECT * FROM Books`);
  return results;
}

async function post(book) {
  const results = await query(
    `INSERT INTO Books (book_title, book_description, book_price, book_cover_link) VALUES ("${book.book_title}", "${book.book_description}", ${book.book_price}, "${book.book_cover_link}")`
  );
  return results;
}

async function put(id, book) {
  const results = await query(
    `UPDATE Books SET book_title = "${book.book_title}", book_description = "${book.book_description}", book_price = ${book.book_price}, book_cover_link = "${book.book_cover_link}" WHERE id = ${id}`
  );
  return results;
}

module.exports = {
  getAll,
  post,
  put,
};
