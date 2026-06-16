const express = require('express');
const router = express.Router();
const userHandler = require('../handlers/user.handler');

router.get('/users', userHandler.getUsers);
router.get('/users/:id', userHandler.getUserById);
router.post('/users', userHandler.createUser);
router.put('/users/:id', userHandler.updateUser);
router.delete('/users/:id', userHandler.deleteUser);

module.exports = router;
