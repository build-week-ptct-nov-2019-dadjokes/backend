const bcrypt = require('bcryptjs');

const password = bcrypt.hashSync('password', 10);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'dad@jokes.com', username: 'dad', password },
        { email: 'mom@jokes.com', username: 'mom', password },
        { email: 'son@jokes.com', username: 'son', password },
      ]);
    });
};
