const express = require('express');
const router = express.Router();
const visitsController = require('../controllers/visitsController');
const db = require('../database/db-connector');

router.get('/data', visitsController.selectAll);
router.get('/search', visitsController.search);
router.post('/create', visitsController.create);

module.exports = router;