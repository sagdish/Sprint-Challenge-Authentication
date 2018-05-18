const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({ username, password })
    .then(newUser => {
      res.status(201).json({ newby: newUser });
    })
    .catch(err =>{
      res.status(500).json({serverError: err });
    });
};

const getAllUsers = (req, res) => {
  User.find()
    .then(allUsers => {
      //res.status(200).json(allUsers);
      res.send(allUsers);
    })
    .catch(err =>{
      res.status(500).json({serverError: err });
    });
};

module.exports = {
  createUser,
  getAllUsers,
};
