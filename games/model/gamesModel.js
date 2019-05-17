const db = require('../../data/dbConfig');

const getAll = () => (
  db('games')
);

const add = async game => {
  const [id] = await getAll().insert(game, 'id');
  return getAll()
    .where({id})
    .first();
};

module.exports = {
  getAll,
  add
}
