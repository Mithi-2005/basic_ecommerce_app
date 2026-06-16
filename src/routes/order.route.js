const express = require('express');
const router = express.Router();
const orderHandler = require('../handlers/order.handler');

router.get('/orders', orderHandler.getOrders);
router.get('/orders/:id', orderHandler.getOrderById);
router.post('/orders', orderHandler.createOrder);
router.put('/orders/:id', orderHandler.updateOrder);
router.delete('/orders/:id', orderHandler.deleteOrder);

module.exports = router;
