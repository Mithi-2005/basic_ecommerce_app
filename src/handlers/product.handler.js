const productService = require('../services/product.service');

function getProducts(req, res) {
  const products = productService.getAllProducts();
  res.json(products);
}

function createProduct(req, res) {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const numericPrice = parseFloat(price);
  if (isNaN(numericPrice) || numericPrice < 0) {
    return res.status(400).json({ error: "Price must be a positive number" });
  }

  const newProduct = productService.createProduct(name, numericPrice);
  res.status(201).json(newProduct);
}

module.exports = {
  getProducts,
  createProduct
};
