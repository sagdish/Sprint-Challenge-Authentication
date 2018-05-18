const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, login, getAllUsers } = require('../controllers');

module.exports = server => {
  server.get('/api/jokes', authenticate, getAllJokes);
  server.get('/api/checkall', getAllUsers);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
};
