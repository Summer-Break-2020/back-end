
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {
          role: 'admin'
        },
        {
          role: 'cleaner'
        },
        {
          role: 'client'
        }
      ]);
    });
};
