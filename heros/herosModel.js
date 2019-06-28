const db = require('../data/dbConfig.js');

module.exports = {
  add,
  update,
  remove,
  getAll,
  findById,
};

async function add(hero) {
  const [id] = await db('heros').insert(hero);
  return findById(id)
}

async function update(id, changes) {
  return null;
}

async function remove(id) {
   const deletedHero = await db('heros').where({id}).del();
  return findById(deletedHero)
}

function getAll() {
  return db('heros');
}

function findById(id) {
  return db('heros').where({id}).first()
}
