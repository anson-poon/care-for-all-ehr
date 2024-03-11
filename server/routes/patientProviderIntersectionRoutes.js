const express = require('express');
const router = express.Router();
const patientProviderIntersectionController = require('../controllers/patientProviderIntersectionController');

// Routes for patient-provider intersection that uses functions from patientProviderIntersectionController
router.get('/data', patientProviderIntersectionController.selectAll);
router.get('/search', patientProviderIntersectionController.search);
router.post('/create', patientProviderIntersectionController.create);
router.put('/update/:patientID/:providerID', patientProviderIntersectionController.update);
router.delete('/delete/:patientID/:providerID', patientProviderIntersectionController.delete);

module.exports = router;