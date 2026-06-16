const User = require('../models/user.model');

async function getAllUsers() {
  return await User.find();
}

async function createUser(name, email) {
  const newUser = new User({
    name: name,
    email: email
  });
  return await newUser.save();
}

async function findUserById(id) {
  return await User.findById(id);
}

module.exports = {
  getAllUsers,
  createUser,
  findUserById
};
