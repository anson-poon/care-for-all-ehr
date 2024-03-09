const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerIndexController');
const db = require('../database/db-connector');

router.get('/data', providerController.selectAll);
router.get('/search', providerController.search);
router.post('/create', providerController.create);
router.put('/update/:providerID', providerController.update);
router.delete('/delete/:providerID', providerController.delete);

module.exports = router;