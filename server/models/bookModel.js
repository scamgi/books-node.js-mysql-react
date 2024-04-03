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

module.exports = {
  getAll,
  post,
};
