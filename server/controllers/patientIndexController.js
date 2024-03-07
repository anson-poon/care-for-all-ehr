const db = require('../database/db-connector');

// SELECT all records for patient index
exports.selectAll = (req, res) => {
    let query = 'SELECT * FROM Patients';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching patients:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// SELECT records from Patients based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(`userChoice: ${userChoice}`);
    console.log(`userInput: ${userInput}`);

    let query = 'SELECT * FROM Patients WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'patientID':
            query += 'patientID = ?';
            queryParams.push(userInput);
            break;
        case 'patientFirstName':
            query += 'patientFirstName = ?';
            queryParams.push(userInput);
            break;
        case 'patientLastName':
            query += 'patientLastName = ?';
            queryParams.push(userInput);
            break;
        case 'patientFullName':
            const newUserInput = userInput.split(' ');
            query += 'patientFirstName = ? AND patientLastName = ?';
            queryParams.push(newUserInput[0], newUserInput[1])
            break;
        default:
            return res.status(400).json({ error: 'Invalid search query' });
    }
    db.pool.query(query, queryParams, (err, data) => {
        if (err) {
            console.error('Error searching data:', err);
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};
