const db = require('../database/db-connector');

/* Controller with functions used by the Insurance Notes Routes */

// SELECT all records for insurance notes
exports.selectAll = (req, res) => {
    let query = 'SELECT insuranceNoteID, reimbursementCode, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM InsuranceNotes JOIN Visits ON InsuranceNotes.visitID = Visits.visitID  JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching insurance notes:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Insurance Notes: SELECT records from Insurance Notes based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT insuranceNoteID, reimbursementCode, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM InsuranceNotes JOIN Visits ON InsuranceNotes.visitID = Visits.visitID  JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'insuranceNoteID':
            query += 'insuranceNoteID = ?';
            queryParams.push(userInput);
            break;
        case 'reimbursementCode':
            query += 'reimbursementCode = ?'
            queryParams.push(userInput);
            break;
        case 'visitID':
            query += 'InsuranceNotes.visitID = ?'
            queryParams.push(userInput);
            break;
        default:
            return res.status(400).json({ error: 'Invalid search query' });
    }
    db.pool.query(query, queryParams, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

// Insurance Notes: SELECT records from Visits that have not been associated with an Insurance Note yet
exports.selectiveInsert = (req, res) => {
    let query = 'SELECT CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM Visits  LEFT JOIN InsuranceNotes on Visits.visitID = InsuranceNotes.visitID  LEFT JOIN Providers on Visits.providerID = Providers.providerID LEFT JOIN Patients on Visits.patientID = Patients.patientID WHERE InsuranceNotes.visitID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

/*
Insurance Notes Page:  Logic to INSERT, or add, a new insurance note 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
exports.create = (req, res) => {
    let attributes = [
        req.body.insuranceNoteID,
        req.body.reimbursementCode,
        req.body.visitID
    ]
    let query = 'INSERT INTO InsuranceNotes (insuranceNoteID, reimbursementCode, visitID) VALUES (?)';
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO InsuranceNotes (insuranceNoteID, reimbursementCode, visitID) VALUES (" + req.body.insuranceNoteID + ", " + req.body.reimbursementCode + ", " + req.body.visitID + ")");
            return res.json({ data });
        }
    })
};