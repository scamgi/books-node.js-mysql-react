const { query } = require("../db/connectionToDB");

async function getAll() {
  const results = await query(`SELECT * FROM Books`);
  return results;
}

module.exports = {
  getAll,
};
