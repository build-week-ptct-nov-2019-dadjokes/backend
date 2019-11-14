const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    id: user.id,
  };
  const secret = process.env.SECRET || 'Joke';
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;
