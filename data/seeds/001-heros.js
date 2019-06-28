
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('heros').del()
    .then(function () {
      // Inserts seed entries
      return knex('heros').insert([
        { name: 'Captain Underpants' },
        { name: 'Flash' },
        { name: 'Batman' },
        { name: 'Superman' },
      ]);
    });
};
