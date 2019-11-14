const db = require('../../data/dbConfig');

function findUsers() {
  return db('users');
}

function findUserBy(filter) {
  return db('users').where(filter);
}

function addUser(newUser) {
  return db('users')
    .insert(newUser)
    .returning('*');
}

function updateUser(id, updatedUser) {
  return db('users')
    .where({ id })
    .update(updatedUser)
    .returning('*');
}

function removeUser(id) {
  return db('users')
    .where({ id })
    .del();
}

module.exports = { findUsers, findUserBy, addUser, updateUser, removeUser };
