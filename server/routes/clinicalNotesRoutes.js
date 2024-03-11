const express = require('express');
const router = express.Router();
const clinicalNotesController = require('../controllers/clinicalNotesController');

// Routes for clinical notes that uses functions from clinicalNotesController
router.get('/data', clinicalNotesController.selectAll);
router.get('/search', clinicalNotesController.search);
router.get('/selectiveinsert', clinicalNotesController.selectiveInsert);
router.post('/create', clinicalNotesController.create);

module.exports = router;