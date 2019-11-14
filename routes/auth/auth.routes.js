const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../../models/auth/auth.model');
const generateToken = require('../../utils/token');
const validate = require('./validation');

async function register(req, res) {
  const { errors, isValid } = validate.validateRegisterInputs(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check Email
  const emailCheck = await Users.findUserBy({ email: req.body.email });
  if (emailCheck.length > 0) {
    return res
      .status(400)
      .json({ status: 400, error: 'Email has already been taken' });
  }
  // Check Username
  const usernameCheck = await Users.findUserBy({ username: req.body.username });
  if (usernameCheck.length > 0) {
    return res
      .status(400)
      .json({ status: 400, error: 'Username has already been taken' });
  }
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await Users.addUser(req.body);
    res
      .status(201)
      .json({ message: `Welcome to Dad Jokes ${user[0].username}` });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function login(req, res) {
  const { errors, isValid } = validate.validateLoginInputs(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const user = await Users.findUserBy({ username: req.body.username });
    if (user.length === 0) {
      return res.status(404).json({ code: 404, error: 'User Not Found' });
    }
    if (bcrypt.compareSync(req.body.password, user[0].password)) {
      const token = generateToken(user[0]);
      res.json({
        message: `Welcome back ${user[0].username}!`,
        token,
      });
    } else {
      return res.status(401).json({ code: 401, error: 'Invalid Credentials' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

authRouter.post('/register', register).post('/login', login);

module.exports = authRouter;
