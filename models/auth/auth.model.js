const db = require('../../data/dbConfig');

function findUsers() {
  return db('users').returning([
    'id',
    'email',
    'username',
    'created_at',
    'updated_at',
  ]);
}

function findUserBy(filter) {
  return db('users').where(filter);
}

function addUser(newUser) {
  return db('users')
    .insert(newUser)
    .returning(['id', 'email', 'username', 'created_at', 'updated_at']);
}

function updateUser(id, updatedUser) {
  return db('users')
    .where({ id })
    .update(updatedUser)
    .returning(['id', 'email', 'username', 'created_at', 'updated_at']);
}

function removeUser(id) {
  return db('users')
    .where({ id })
    .del();
}

module.exports = { findUsers, findUserBy, addUser, updateUser, removeUser };
