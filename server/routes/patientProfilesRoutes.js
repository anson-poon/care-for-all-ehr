const express = require('express');
const router = express.Router();
const patientProfilesController = require('../controllers/patientProfilesController');
const db = require('../database/db-connector');

router.get('/data', patientProfilesController.selectAll);
router.get('/search', patientProfilesController.search);
router.get('/selectiveinsert', patientProfilesController.selectiveInsert);
router.post('/create', patientProfilesController.create);
router.put('/update/:patientID', patientProfilesController.update);
router.delete('/delete/:patientID', patientProfilesController.delete);

module.exports = router;