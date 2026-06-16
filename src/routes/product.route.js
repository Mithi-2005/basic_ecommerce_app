const express = require('express');
const router = express.Router();
const productHandler = require('../handlers/product.handler');

router.get('/products', productHandler.getProducts);
router.get('/products/:id', productHandler.getProductById);
router.post('/products', productHandler.createProduct);
router.put('/products/:id', productHandler.updateProduct);
router.delete('/products/:id', productHandler.deleteProduct);

module.exports = router;
