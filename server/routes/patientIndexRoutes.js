const express = require('express');
const router = express.Router();
const db = require('../database/db-connector');

router.get('/data', (req, res) => {
    let query = 'SELECT * FROM Patients';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching patients:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data); // Send the fetched data as JSON response
        }
    });
});

module.exports = router;