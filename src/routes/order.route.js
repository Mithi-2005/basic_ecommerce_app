const express = require('express');
const router = express.Router();
const orderHandler = require('../handlers/order.handler');

router.get('/orders', orderHandler.getOrders);
router.post('/orders', orderHandler.createOrder);

module.exports = router;
