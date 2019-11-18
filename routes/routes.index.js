const testRoutes = require('./test/test.routes');
const authRoutes = require('./auth/auth.routes');
const userRoutes = require('./user/user.routes');

module.exports = server => {
  server.use('/', testRoutes);
  server.use('/api/auth', authRoutes);
  server.use('/api/user', userRoutes);
};
