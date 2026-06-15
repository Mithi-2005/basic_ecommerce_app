const orders = require('../models/order.model');
const userService = require('./user.service');
const productService = require('./product.service');

function getAllOrders() {
  return orders;
}

function createOrder(userId, items) {
  const user = userService.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  let totalPrice = 0;
  const orderItems = [];

  for (let item of items) {
    const product = productService.findProductById(item.productId);
    if (!product) {
      throw new Error("Product with ID " + item.productId + " not found");
    }

    const priceAtPurchase = product.price;
    const quantity = item.quantity || 1;
    totalPrice += priceAtPurchase * quantity;

    orderItems.push({
      productId: product.id,
      name: product.name,
      price: priceAtPurchase,
      quantity: quantity
    });
  }

  const newOrder = {
    id: orders.length + 1,
    userId: parseInt(userId),
    items: orderItems,
    totalPrice: parseFloat(totalPrice.toFixed(2)),
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  return newOrder;
}

module.exports = {
  getAllOrders,
  createOrder
};
