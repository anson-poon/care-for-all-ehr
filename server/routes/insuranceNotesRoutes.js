const express = require('express');
const router = express.Router();
const insuranceNotesController = require('../controllers/insuranceNotesController');
const db = require('../database/db-connector');

router.get('/data', insuranceNotesController.selectAll);
router.get('/search', insuranceNotesController.search);
router.get('/selectiveinsert', insuranceNotesController.selectiveInsert);
router.post('/create', insuranceNotesController.create);

module.exports = router;