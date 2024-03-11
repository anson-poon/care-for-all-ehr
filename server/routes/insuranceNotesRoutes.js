const express = require('express');
const router = express.Router();
const insuranceNotesController = require('../controllers/insuranceNotesController');

// Routes for insurance notes that uses functions from insuranceNotesController
router.get('/data', insuranceNotesController.selectAll);
router.get('/search', insuranceNotesController.search);
router.get('/selectiveinsert', insuranceNotesController.selectiveInsert);
router.post('/create', insuranceNotesController.create);

module.exports = router;