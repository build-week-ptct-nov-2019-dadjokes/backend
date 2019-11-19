const userRouter = require('express').Router();
const Users = require('../../models/auth/auth.model');
const restricted = require('../../utils/authenticate');

async function updateUser(req, res) {
  try {
    const response = await Users.updateUser(req.user.id, req.body);
    res.json(response[0]);
  } catch (err) {
    res.status(500).json();
  }
}

async function deleteUser(req, res) {
  try {
    await Users.removeUser(req.user.id);
    res.json(req.user.id);
  } catch (err) {
    res.status(500).json(err);
  }
}

userRouter.put('/', restricted, updateUser).delete('/', restricted, deleteUser);

module.exports = userRouter;
