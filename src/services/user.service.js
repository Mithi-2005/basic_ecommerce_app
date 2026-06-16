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

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  getAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser
};
