const express = require('express');
const router = express.Router();
const visitsController = require('../controllers/visitsController');

// Routes for visits that uses functions from visitsController
router.get('/data', visitsController.selectAll);
router.get('/search', visitsController.search);
router.post('/create', visitsController.create);

module.exports = router;