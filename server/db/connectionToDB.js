const mysql = require("mysql2/promise");

async function query(sql, params) {
  const connection = await mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "books_nodejs_react",
    connectTimeout: 60000,
  });

  const [results] = await connection.execute(sql, params);
  return results;
}

module.exports = {
  query,
};
