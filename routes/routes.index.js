const testRoutes = require('./test/test.routes');

module.exports = server => {
  server.use('/', testRoutes);
};
