const testRouter = require('express').Router();

function testRoute(req, res) {
  res.json({ api: 'Working' });
}

testRouter.get('/', testRoute);

module.exports = testRouter;
