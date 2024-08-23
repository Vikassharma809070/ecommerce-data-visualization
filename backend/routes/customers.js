const express = require('express');
const { getNewCustomers, getRepeatCustomers, getGeoDistribution, getCLVByCohorts } = require('../controllers/customersController');
const router = express.Router();

router.get('/new-customers', getNewCustomers);
router.get('/repeat-customers', getRepeatCustomers);
router.get('/geo-distribution', getGeoDistribution);
router.get('/clv-cohorts', getCLVByCohorts);

module.exports = router;
