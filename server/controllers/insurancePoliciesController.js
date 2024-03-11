const db = require('../database/db-connector');

/* Controller with functions used by the Insurance Policies Routes */

// SELECT all records for patient index
exports.selectAll = (req, res) => {
    let query = 'SELECT insuranceID, insuranceType, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID FROM InsurancePolicies JOIN Patients ON InsurancePolicies.patientID = Patients.patientID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching insurance policies:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Insurance Policies: SELECT records from Patient Provider Intersection based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT insuranceID, insuranceType, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID FROM InsurancePolicies JOIN Patients ON InsurancePolicies.patientID = Patients.patientID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'insuranceID':
            query += 'insuranceID = ?';
            queryParams.push(userInput);
            break;
        case 'insuranceType':
            query += 'insuranceType = ?'
            queryParams.push(userInput);
            break;
        case 'patientID':
            query += 'Patients.patientID = ?'
            queryParams.push(userInput);
            break;
        case 'patientFullName':
            const newPatientUserInput = userInput.split(' ');
            query += 'Patients.patientFirstName = ? and Patients.patientLastName = ?';
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

// Insurance Policies: SELECT DISTINCT patientIDs with first and last name for use in CREATE function
exports.selectiveInsert = (req, res) => {
    let query = 'SELECT DISTINCT(CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")")) as patientID FROM InsurancePolicies JOIN Patients ON InsurancePolicies.patientID = Patients.patientID';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

/*
Insurance Policy Page:  Logic to INSERT, or add, a new insurance policy 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
exports.create = (req, res) => {
    let attributes = [
        req.body.insuranceID,
        req.body.insuranceType,
        req.body.patientID
    ]
    let query = 'INSERT INTO InsurancePolicies (insuranceID, insuranceType, patientID) VALUES (?)';
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO InsurancePolicies (insuranceID, insuranceType, patientID) VALUES (" + req.body.insuranceID + ", " + req.body.insuranceType + ", " + req.body.patientID + ")");
            return res.json({ data });
        }
    })
};