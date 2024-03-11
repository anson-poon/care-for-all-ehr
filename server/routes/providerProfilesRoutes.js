const express = require('express');
const router = express.Router();
const providerProfilesController = require('../controllers/providerProfilesController');

// Routes for provider profiles that uses functions from providerProfilesController
router.get('/data', providerProfilesController.selectAll);
router.get('/search', providerProfilesController.search);
router.get('/selectiveinsert', providerProfilesController.selectiveInsert);
router.post('/create', providerProfilesController.create);
router.put('/update/:providerID', providerProfilesController.update);
router.delete('/delete/:providerID', providerProfilesController.delete);

module.exports = router;