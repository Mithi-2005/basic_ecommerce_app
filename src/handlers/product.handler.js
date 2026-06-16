const productService = require('../services/product.service');

async function getProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createProduct(req, res) {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const numericPrice = parseFloat(price);
  if (isNaN(numericPrice) || numericPrice < 0) {
    return res.status(400).json({ error: "Price must be a positive number" });
  }

  try {
    const newProduct = await productService.createProduct(name, numericPrice);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProductById(req, res) {
  try {
    const product = await productService.findProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
