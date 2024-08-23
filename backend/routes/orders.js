const express = require('express');
const { getTotalSales, getSalesGrowthRate } = require('../controllers/ordersController');
const router = express.Router();

router.get('/total-sales', getTotalSales);
router.get('/sales-growth', getSalesGrowthRate);

module.exports = router;
