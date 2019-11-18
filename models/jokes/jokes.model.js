const db = require('../../data/dbConfig');

function findJokes() {
  return db('jokes');
}

function findJokeBy(filter) {
  return db('jokes')
    .where(filter)
    .returning('*');
}

function addJoke(newJoke) {
  return db('jokes')
    .insert(newJoke)
    .returning('*');
}

function updateJoke(id, updatedJoke) {
  return db('jokes')
    .where({ id })
    .update(updatedJoke)
    .returning('*');
}

function deleteJoke(id) {
  return db('jokes')
    .where({ id })
    .del();
}

module.exports = { findJokes, findJokeBy, addJoke, updateJoke, deleteJoke };
