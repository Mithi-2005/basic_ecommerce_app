const express = require('express');
const router = express.Router();
const productHandler = require('../handlers/product.handler');

router.get('/products', productHandler.getProducts);
router.post('/products', productHandler.createProduct);

module.exports = router;
