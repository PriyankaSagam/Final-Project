const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/products.cjs');


// Route to get all products
router.get('/', productController.getAllProducts);

module.exports = router;