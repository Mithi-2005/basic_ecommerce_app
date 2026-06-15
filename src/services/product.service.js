const products = require('../models/product.model');

function getAllProducts() {
  return products;
}

function createProduct(name, price) {
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: parseFloat(price)
  };
  products.push(newProduct);
  return newProduct;
}

function findProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

module.exports = {
  getAllProducts,
  createProduct,
  findProductById
};
