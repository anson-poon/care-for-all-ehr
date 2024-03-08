const db = require('../database/db-connector');

// SELECT all records for Patient Provider Relationships
exports.selectAll = (req, res) => {
    let query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Patients JOIN Patients_has_Providers ON Patients.patientID = Patients_has_Providers.patientID JOIN Providers ON Providers.providerID = Patients_has_Providers.providerID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching patient provider relationships:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Patient Provider Intersection: SELECT records from Patient Provider Intersection based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Patients JOIN Patients_has_Providers ON Patients.patientID = Patients_has_Providers.patientID JOIN Providers ON Providers.providerID = Patients_has_Providers.providerID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'patientID':
            query += 'Patients.patientID = ?';
            queryParams.push(userInput);
            break;
        case 'providerID':
            query += 'Providers.providerID = ?';
            queryParams.push(userInput);
            break;
        case 'patientFullName':
            const newPatientUserInput = userInput.split(' ');
            query += 'Patients.patientFirstName = ? and Patients.patientLastName = ?';
            queryParams.push(newPatientUserInput[0], newPatientUserInput[1])
            break;
        case 'providerFullName':
            const newProviderUserInput = userInput.split(' ');
            query += 'Providers.providerFirstName = ? and Providers.providerLastName = ?';
            queryParams.push(newProviderUserInput[0], newProviderUserInput[1])
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
Patients_has_Providers Page:  Logic to DELETE a record based on patientID and providerID
Code citation:  Code modified from base of DELETE code for Patient Index page
*/
exports.delete = (req, res) => {
    let patientID = req.params.patientID;
    let providerID = req.params.providerID;
    db.pool.query("DELETE FROM Patients_has_Providers WHERE patientID = ? AND providerID = ?", [patientID, providerID], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("DELETE FROM Patients_has_Providers WHERE patientID = " + patientID + " " + "AND" + " " + "providerID = " + providerID);
            res.send(data); // Proceed with deletion of the specific row from Provider Index
        }
    })
};

/*
Patients_has_Providers Page:  Logic to UPDATE a record based on patientID
Code citation:  Technique Group 70 used to learn to update data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.update = (req, res) => {
    let oldPatientID = req.params.patientID;
    let oldProviderID = req.params.providerID;
    let newPatientID = req.body.newPatientID;
    let newProviderID = req.body.newProviderID;
    db.pool.query("UPDATE Patients_has_Providers SET patientID = ?, providerID = ? WHERE Patients_has_Providers.patientID = ? AND Patients_has_Providers.providerID = ?", [newPatientID, newProviderID, oldPatientID, oldProviderID], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to update data' });
        } else {
            console.log("UPDATE Patients_has_Providers SET patientID = " + newPatientID + " providerID = " + newProviderID + " WHERE patientID = " + oldPatientID + " " + "AND providerID = " + oldProviderID)
            res.send(result); // Proceed with updating the specific entity's instance attributes
        }
    })
};

/*
Patients_has_Providers Page:  Logic to INSERT, or add, a new record to entity
Code citation:  Technique Group 70 used to learn to insert data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.create = (req, res) => {
    let query = "INSERT INTO Patients_has_Providers (patientID, providerID) VALUES (?)";
    let attributes = [
        req.body.patientID,
        req.body.providerID,
    ]
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO Patients_has_Providers (patientID, providerID) VALUES ("
                + req.body.patientID + ", " + req.body.providerID + ")");
            return res.json({ data });
        }
    })
};