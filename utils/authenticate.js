const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.SECRET;
  if (token) {
    jwt.verify(token, secret, (err, decodeToken) => {
      if (err) {
        res.status(401).json({ message: 'YOU SHALL NOT PASS' });
      } else {
        req.user = decodeToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'YOU SHALL NOT PASS' });
  }
};
