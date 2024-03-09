const express = require('express');
const router = express.Router();
const providerProfilesController = require('../controllers/providerProfilesController');
const db = require('../database/db-connector');

router.get('/data', providerProfilesController.selectAll);
router.get('/search', providerProfilesController.search);
router.get('/selectiveinsert', providerProfilesController.selectiveInsert);
router.post('/create', providerProfilesController.create);
router.put('/update/:providerID', providerProfilesController.update);
router.delete('/delete/:providerID', providerProfilesController.delete);

module.exports = router;