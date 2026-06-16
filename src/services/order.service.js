const Order = require('../models/order.model');
const userService = require('./user.service');
const productService = require('./product.service');

async function getAllOrders() {
  return await Order.find();
}

async function createOrder(userId, items) {
  const user = await userService.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  let totalPrice = 0;
  const orderItems = [];

  for (let item of items) {
    const product = await productService.findProductById(item.productId);
    if (!product) {
      throw new Error("Product with ID " + item.productId + " not found");
    }

    const priceAtPurchase = product.price;
    const quantity = item.quantity || 1;
    totalPrice += priceAtPurchase * quantity;

    orderItems.push({
      productId: product._id,
      name: product.name,
      price: priceAtPurchase,
      quantity: quantity
    });
  }

  const newOrder = new Order({
    userId: user._id,
    items: orderItems,
    totalPrice: parseFloat(totalPrice.toFixed(2))
  });

  return await newOrder.save();
}

async function findOrderById(id) {
  return await Order.findById(id);
}

async function updateOrder(id, data) {
  if (data.items) {
    let totalPrice = 0;
    const orderItems = [];

    for (let item of data.items) {
      const product = await productService.findProductById(item.productId);
      if (!product) {
        throw new Error("Product with ID " + item.productId + " not found");
      }

      const priceAtPurchase = product.price;
      const quantity = item.quantity || 1;
      totalPrice += priceAtPurchase * quantity;

      orderItems.push({
        productId: product._id,
        name: product.name,
        price: priceAtPurchase,
        quantity: quantity
      });
    }
    data.items = orderItems;
    data.totalPrice = parseFloat(totalPrice.toFixed(2));
  }

  return await Order.findByIdAndUpdate(id, data, { new: true });
}

async function deleteOrder(id) {
  return await Order.findByIdAndDelete(id);
}

module.exports = {
  getAllOrders,
  createOrder,
  findOrderById,
  updateOrder,
  deleteOrder
};
