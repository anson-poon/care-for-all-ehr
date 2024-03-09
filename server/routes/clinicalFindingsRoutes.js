const express = require('express');
const router = express.Router();
const clinicalFindingsController = require('../controllers/clinicalFindingsController');
const db = require('../database/db-connector');

router.get('/data', clinicalFindingsController.selectAll);
router.get('/search', clinicalFindingsController.search);
router.get('/selectiveinsert', clinicalFindingsController.selectiveInsert);
router.post('/create', clinicalFindingsController.create);

module.exports = router;