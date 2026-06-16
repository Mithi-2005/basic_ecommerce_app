const Product = require('../models/product.model');

async function getAllProducts() {
  return await Product.find();
}

async function createProduct(name, price) {
  const newProduct = new Product({
    name: name,
    price: price
  });
  return await newProduct.save();
}

async function findProductById(id) {
  return await Product.findById(id);
}

module.exports = {
  getAllProducts,
  createProduct,
  findProductById
};
