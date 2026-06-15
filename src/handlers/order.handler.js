const orderService = require('../services/order.service');

function getOrders(req, res) {
  const orders = orderService.getAllOrders();
  res.json(orders);
}

function createOrder(req, res) {
  const { userId, items } = req.body;

  if (!userId || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "userId and non-empty items array are required" });
  }

  try {
    const newOrder = orderService.createOrder(userId, items);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getOrders,
  createOrder
};
