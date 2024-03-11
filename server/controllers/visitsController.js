const db = require('../database/db-connector');

/* Controller with functions used by the Visits Routes */

// SELECT all records for visits
exports.selectAll = (req, res) => {
    let query = 'SELECT visitID, visitDateTime, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID, CONCAT(InsurancePolicies.insuranceID, " ", "(", InsurancePolicies.insuranceType, ")") as insuranceID FROM Visits as visitAttributes JOIN Patients on visitAttributes.patientID = Patients.patientID  JOIN Providers on visitAttributes.providerID = Providers.providerID  JOIN InsurancePolicies on visitAttributes.insuranceID = InsurancePolicies.insuranceID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching visits:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Visits: SELECT records from Visits based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT visitID, visitDateTime, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID, CONCAT(InsurancePolicies.insuranceID, " ", "(", InsurancePolicies.insuranceType, ")") as insuranceID FROM Visits as visitAttributes JOIN Patients on visitAttributes.patientID = Patients.patientID  JOIN Providers on visitAttributes.providerID = Providers.providerID JOIN InsurancePolicies on visitAttributes.insuranceID = InsurancePolicies.insuranceID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'visitID':
            query += 'visitID = ?';
            queryParams.push(userInput);
            break;
        case 'visitDateTime':
            query += 'visitDateTime = ?';
            queryParams.push(userInput);
            break;
        case 'providerID':
            query += 'Providers.providerID = ?'
            queryParams.push(userInput);
            break;
        case 'patientID':
            query += 'Patients.patientID = ?'
            queryParams.push(userInput);
            break;
        case 'insuranceID':
            query += 'InsurancePolicies.insuranceID = ?'
            console.log(query)
            queryParams.push(userInput);
            break;
        case 'patientFullName':
            const newPatientUserInput = userInput.split(' ');
            query += 'Patients.patientFirstName = ? AND Patients.patientLastName = ?';
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

/*
Visits Page:  Logic to INSERT, or add, a new visit 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
exports.create = (req, res) => {
    let attributes = [
        req.body.visitID,
        req.body.visitDateTime,
        req.body.providerID,
        req.body.patientID,
        req.body.insuranceID
    ]
    let query = 'INSERT INTO Visits (visitID, visitDateTime, providerID, patientID, insuranceID) VALUES (?)';
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO Visits (visitDateTime, providerID, patientID, insuranceID) VALUES (" + req.body.visitDateTime + ", " + req.body.providerID + ", " + req.body.patientID + ", " + req.body.insuranceID + ")");
            return res.json({ data });
        }
    })
};