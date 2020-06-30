
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'mail@trashcan.bin',
          password: '$2y$12$1bJGNPdCsW.jO2cGxPLlK.m31RaDBeYU/DR8v6T8dqd5dtKF5ayAC',
          f_name: 'Jesse',
          l_name: 'Marek',
          location: 'Hemet, CA',
          avatar: '',
          role_id: 1
        },
        {
          email: 'pretty.kitty@cats.org',
          password: '$2y$12$jg0MUCcwbJUlQkfSgbPPu.VmT8kPbSlf4G7CHYlS2lsYxjwSHG2m6',
          f_name: 'Catherine',
          l_name: 'Joy',
          location: 'Hemet, CA',
          avatar: '',
          hourly_rate: 12.50,
          role_id: 2
        },
        {
          email: 'gabby@unicornlover.net',
          password: '$2y$12$AXIiWeYRxkuwYx/k9oVq6eqi7nsamxxuNi9GUNddhTckE.QwoE9pG',
          f_name: 'Gabriella',
          l_name: 'Rose',
          location: 'Hemet, CA',
          avatar: '',
          role_id: 3
        }
      ]);
    });
};
