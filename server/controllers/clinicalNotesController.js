const db = require('../database/db-connector');

// SELECT all records for clinical notes
exports.selectAll = (req, res) => {
    let query = 'SELECT clinicalNoteID, lengthOfVisit, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM ClinicalNotes JOIN Visits ON ClinicalNotes.visitID = Visits.visitID  JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching clinical notes:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Clinical Notes: SELECT records from Clinical Notes based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT clinicalNoteID, lengthOfVisit, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM ClinicalNotes JOIN Visits ON ClinicalNotes.visitID = Visits.visitID  JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'clinicalNoteID':
            query += 'clinicalNoteID = ?';
            queryParams.push(userInput);
            break;
        case 'visitID':
            query += 'ClinicalNotes.visitID = ?'
            queryParams.push(userInput);
            break;
        case 'patientFullName':
            const newPatientUserInput = userInput.split(' ');
            query = 'SELECT clinicalNoteID, lengthOfVisit, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM ClinicalNotes JOIN Visits ON ClinicalNotes.visitID = Visits.visitID JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID WHERE Patients.patientFirstName = ? and Patients.patientLastName = ?';
            queryParams.push(newPatientUserInput[0], newPatientUserInput[1])
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

// Clinical Notes: SELECT records from Visits that have not been associated with a Clinical Note yet
exports.selectiveInsert = (req, res) => {
    let query = 'SELECT CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM Visits LEFT JOIN ClinicalNotes on Visits.visitID = ClinicalNotes.visitID LEFT JOIN Providers on Visits.providerID = Providers.providerID LEFT JOIN Patients on Visits.patientID = Patients.patientID WHERE ClinicalNotes.visitID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

/*
Clinical Notes Page:  Logic to INSERT, or add, a new clinical note 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
exports.create = (req, res) => {
    let attributes = [
        req.body.clinicalNoteID,
        req.body.lengthOfVisit,
        req.body.visitID
    ]
    let query = 'INSERT INTO ClinicalNotes (clinicalNoteID, lengthOfVisit, visitID) VALUES (?)';
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO ClinicalNotes (clinicalNoteID, lengthOfVisit, visitID) VALUES (" + req.body.clinicalNoteID + ", " + req.body.lengthOfVisit + ", " + req.body.visitID + ")");
            return res.json({ data });
        }
    })
};