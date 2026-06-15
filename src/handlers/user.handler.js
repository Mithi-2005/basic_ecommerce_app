const userService = require('../services/user.service');

function getUsers(req, res) {
  const users = userService.getAllUsers();
  res.json(users);
}

function createUser(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = userService.createUser(name, email);
  res.status(201).json(newUser);
}

module.exports = {
  getUsers,
  createUser
};
