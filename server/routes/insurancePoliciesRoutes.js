const express = require('express');
const router = express.Router();
const insurancePoliciesController = require('../controllers/insurancePoliciesController');
const db = require('../database/db-connector');

router.get('/data', insurancePoliciesController.selectAll);
router.get('/search', insurancePoliciesController.search);
router.post('/create', insurancePoliciesController.create);

module.exports = router;