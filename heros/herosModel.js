const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll,
};

async function insert(hero) {
  const [id] = await db('heros').insert(hero);
  return findById(id)
}

function remove(id) {
  return null;
}

function getAll() {
  return db('heros');
}
