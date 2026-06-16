const orderService = require('../services/order.service');

async function getOrders(req, res) {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createOrder(req, res) {
  const { userId, items } = req.body;

  if (!userId || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "userId and non-empty items array are required" });
  }

  try {
    const newOrder = await orderService.createOrder(userId, items);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getOrders,
  createOrder
};
