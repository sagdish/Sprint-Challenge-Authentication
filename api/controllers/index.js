const { getAllJokes } = require('./jokes');
const { login } = require('./login');
const { createUser, getAllUsers } = require('./user');

module.exports = {
  getAllJokes,
  login,
  createUser,
  getAllUsers,
};
