
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'sentinel',
          password: '$2y$12$1bJGNPdCsW.jO2cGxPLlK.m31RaDBeYU/DR8v6T8dqd5dtKF5ayAC',
          email: 'mail@trashcan.com'
        },
        {
          username: 'ravenLOL',
          password: '$2y$12$jg0MUCcwbJUlQkfSgbPPu.VmT8kPbSlf4G7CHYlS2lsYxjwSHG2m6',
          email: 'pretty.kitty@cats.org'
        },
        {
          username: 'gabicorn11',
          password: '$2y$12$AXIiWeYRxkuwYx/k9oVq6eqi7nsamxxuNi9GUNddhTckE.QwoE9pG',
          email: 'gabby@rainbow.net'
        }
      ]);
    });
};
