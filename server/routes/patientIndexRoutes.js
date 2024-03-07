const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientIndexController');
const db = require('../database/db-connector');

router.get('/data', patientController.selectAll);
router.get('/search', patientController.search);
// router.get('/create' patientController.create);
// router.get('/update' patientController.update);
// router.get('/delete' patientController.delete);

module.exports = router;