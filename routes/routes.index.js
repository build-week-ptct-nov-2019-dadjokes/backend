const testRoutes = require('./test/test.routes');
const authRoutes = require('./auth/auth.routes');
const userRoutes = require('./user/user.routes');
const jokeRoutes = require('./jokes/jokes.routes');

module.exports = server => {
  server.use('/', testRoutes);
  server.use('/api/auth', authRoutes);
  server.use('/api/user', userRoutes);
  server.use('/api/jokes', jokeRoutes);
};
