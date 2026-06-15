const users = require('../models/user.model');

function getAllUsers() {
  return users;
}

function createUser(name, email) {
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email
  };
  users.push(newUser);
  return newUser;
}

function findUserById(id) {
  return users.find(u => u.id === parseInt(id));
}

module.exports = {
  getAllUsers,
  createUser,
  findUserById
};
