const testRoutes = require('./test/test.routes');
const authRoutes = require('./auth/auth.routes');

module.exports = server => {
  server.use('/', testRoutes);
  server.use('/api/auth', authRoutes);
};
