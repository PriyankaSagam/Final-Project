const express = require('express');
const router = express.Router();
const ordersController = require('../../controllers/api/orders.cjs');


// Route to get all products
router.post('/', ordersController.saveCartItems);

module.exports = router;