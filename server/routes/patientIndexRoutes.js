const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientIndexController');

// Routes for patient that uses functions from patientController
router.get('/data', patientController.selectAll);
router.get('/search', patientController.search);
router.post('/create', patientController.create);
router.put('/update/:patientID', patientController.update);
router.delete('/delete/:patientID', patientController.delete);

module.exports = router;