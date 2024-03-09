const db = require('../database/db-connector');

// SELECT all records for clinical findings
exports.selectAll = (req, res) => {
    let query = 'SELECT clinicalFindingID, chiefComplaint, patientBloodPressure, patientHeartRate, patientTemperature, patientRespiratoryRate, narrativeTreatmentPlan, CONCAT(ClinicalNotes.clinicalNoteID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as clinicalNoteID FROM ClinicalFindings JOIN ClinicalNotes ON ClinicalFindings.clinicalNoteID = ClinicalNotes.clinicalNoteID JOIN Visits ON ClinicalNotes.visitID = Visits.visitID JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching clinical findings:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Clinical Findings: SELECT records from Clinical Findings based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT clinicalFindingID, chiefComplaint, patientBloodPressure, patientHeartRate, patientTemperature, patientRespiratoryRate, narrativeTreatmentPlan, CONCAT(ClinicalNotes.clinicalNoteID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as clinicalNoteID FROM ClinicalFindings JOIN ClinicalNotes ON ClinicalFindings.clinicalNoteID = ClinicalNotes.clinicalNoteID JOIN Visits ON ClinicalNotes.visitID = Visits.visitID JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'clinicalFindingID':
            query += 'ClinicalFindings.clinicalFindingID = ?';
            queryParams.push(userInput);
            break;
        case 'clinicalNoteID':
            query += 'ClinicalFindings.clinicalNoteID = ?';
            queryParams.push(userInput);
            break;
        case 'patientFullName':
            const newPatientUserInput = userInput.split(' ');
            query = 'SELECT clinicalFindingID, chiefComplaint, patientBloodPressure, patientHeartRate, patientTemperature, patientRespiratoryRate, narrativeTreatmentPlan, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as clinicalNoteID FROM ClinicalFindings JOIN ClinicalNotes ON ClinicalFindings.clinicalNoteID = ClinicalNotes.clinicalNoteID JOIN Visits ON ClinicalNotes.visitID = Visits.visitID JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID WHERE Patients.patientFirstName = ? AND Patients.patientLastName = ?';
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

// Clinical Findings: SELECT records from Clinical Notes that have not been associated with a Clinical Findings note yet
exports.selectiveInsert = (req, res) => {
    let query = 'SELECT CONCAT(ClinicalNotes.clinicalNoteID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as clinicalNoteID FROM ClinicalNotes LEFT JOIN ClinicalFindings ON ClinicalNotes.clinicalNoteID =  ClinicalFindings.clinicalNoteID LEFT JOIN Visits on ClinicalNotes.visitID = Visits.visitID LEFT JOIN Providers on Visits.providerID = Providers.providerID  LEFT JOIN Patients on Visits.patientID = Patients.patientID WHERE ClinicalFindings.clinicalNoteID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

/*
Clinical Findings Page:  Logic to INSERT, or add, a new clinical findings note 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
exports.create = (req, res) => {
    let attributes = [
        req.body.clinicalFindingID,
        req.body.chiefComplaint,
        req.body.patientBloodPressure,
        req.body.patientHeartRate,
        req.body.patientTemperature,
        req.body.patientRespiratoryRate,
        req.body.narrativeTreatmentPlan,
        req.body.clinicalNoteID
    ]
    let query = 'INSERT INTO ClinicalFindings (clinicalFindingID, chiefComplaint, patientBloodPressure, patientHeartRate, patientTemperature, patientRespiratoryRate, narrativeTreatmentPlan, clinicalNoteID) VALUES (?)';
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO ClinicalFindings (clinicalFindingID, chiefComplaint, patientBloodPressure, patientHeartRate, patientTemperature, patientRespiratoryRate, narrativeTreatmentPlan, clinicalNoteID) VALUES (" + req.body.clinicalFindingID + ", " + req.body.chiefComplaint + ", " + req.body.patientBloodPressure + ", " + req.body.patientHeartRate + ", " + req.body.patientRespiratoryRate + ", " + req.body.narrativeTreatmentPlan + ", " + req.body.clinicalNoteID + ")");
            return res.json({ data });
        }
    })
};