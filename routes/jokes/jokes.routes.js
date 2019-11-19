const jokeRouter = require('express').Router();
const Jokes = require('../../models/jokes/jokes.model');
const restricted = require('../../utils/authenticate');

async function publicJokes(req, res) {
  try {
    const response = await Jokes.findJokeBy({ privateJoke: false });
    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function allJokes(req, res) {
  try {
    const response = await Jokes.findJokes();
    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function addJoke(req, res) {
  const newJoke = { ...req.body, created_by: req.user.id };
  try {
    const response = await Jokes.addJoke(newJoke);
    res.status(201).json(response[0]);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateJoke(req, res) {
  try {
    const foundJoke = await Jokes.findJokeBy({ id: req.params.id });
    if (foundJoke.length === 0) {
      return res.status(404).json({ message: 'Your DAD Joke was not found' });
    }
    if (foundJoke[0].created_by !== req.user.id) {
      return res
        .status(401)
        .json({ message: 'You may only EDIT your own jokes' });
    }
    const response = await Jokes.updateJoke(req.params.id, req.body);
    res.json(response[0]);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteJoke(req, res) {
  try {
    const foundJoke = await Jokes.findJokeBy({ id: req.params.id });
    if (foundJoke.length === 0) {
      return res.status(404).json({ message: 'Your DAD Joke was not found' });
    }
    if (foundJoke[0].created_by !== req.user.id) {
      return res
        .status(401)
        .json({ message: 'You may only DELETE your own jokes' });
    }
    const response = await Jokes.deleteJoke(req.params.id);
    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
}

jokeRouter
  .get('/public', publicJokes)
  .get('/', restricted, allJokes)
  .post('/', restricted, addJoke)
  .put('/:id', restricted, updateJoke)
  .delete('/:id', restricted, deleteJoke);

module.exports = jokeRouter;
