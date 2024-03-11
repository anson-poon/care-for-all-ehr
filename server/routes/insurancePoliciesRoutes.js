const express = require('express');
const router = express.Router();
const insurancePoliciesController = require('../controllers/insurancePoliciesController');

// Routes for insurance policies that uses functions from insurancePoliciesController
router.get('/data', insurancePoliciesController.selectAll);
router.get('/search', insurancePoliciesController.search);
router.get('/selectiveinsert', insurancePoliciesController.selectiveInsert);
router.post('/create', insurancePoliciesController.create);

module.exports = router;