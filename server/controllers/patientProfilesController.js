const db = require('../database/db-connector');

// SELECT all records for Patient Profiles
exports.selectAll = (req, res) => {
    let query = 'SELECT patientProfileID, patientPhoneNumber, emailAddress, dateOfBirth, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID FROM PatientProfiles JOIN Patients ON PatientProfiles.patientID = Patients.patientID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching patient profiles:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Patient Profiles:  SELECT records from PatientProfiles based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT patientProfileID, patientPhoneNumber, emailAddress, dateOfBirth, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID FROM PatientProfiles JOIN Patients ON PatientProfiles.patientID = Patients.patientID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'patientProfileID':
            query += 'patientProfileID = ?';
            queryParams.push(userInput);
            break;
        case 'patientPhoneNumber':
            query += 'patientPhoneNumber = ?';
            queryParams.push(userInput);
            break;
        case 'emailAddress':
            query += 'emailAddress = ?';
            queryParams.push(userInput);
            break;
        case 'dateOfBirth':
            query += 'dateOfBirth = ?';
            queryParams.push(userInput);
            break;
        case 'patientID':
            query += 'PatientProfiles.patientID = ?';
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
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

// Patient Profiles: SELECT records from Patients that have not been associated with a Patient Profile yet
exports.selectiveInsert = (req, res) => {
    let query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID FROM Patients LEFT JOIN PatientProfiles ON PatientProfiles.patientID = Patients.patientID WHERE PatientProfiles.patientID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

/* 
PatientProfiles Page:  Logic to DELETE a record based on patientID
Code citation:  Technique Group 70 used to learn to delete data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.delete = (req, res) => {
    let patientID = req.params.patientID;
    db.pool.query("DELETE FROM PatientProfiles WHERE patientID = ?", [patientID], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("DELETE FROM PatientProfiles WHERE patientID = " + patientID);
            res.send(data); // Proceed with deletion of the specific row from PatientProfiles
        }
    })
};

/*
PatientProfiles Page:  Logic to INSERT, or add, a new record to entity
Code citation:  Technique Group 70 used to learn to insert data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.create = (req, res) => {
    let query = "INSERT INTO PatientProfiles (patientProfileID, patientPhoneNumber, emailAddress, dateOfBirth, patientID) VALUES (?)";
    let attributes = [
        req.body.patientProfileID,
        req.body.patientPhoneNumber,
        req.body.emailAddress,
        req.body.dateOfBirth,
        req.body.patientID
    ]
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO PatientProfiles (patientID, patientPhoneNumber, emailAddress, dateOfBirth) VALUES ("
                + req.body.patientID + ", " + req.body.patientPhoneNumber + ", " + req.body.emailAddress + ", " + req.body.dateOfBirth + ")");
            return res.json({ data });
        }
    })
};

/*
PatientProfiles Page:  Logic to UPDATE a record based on patientID
Code citation:  Technique Group 70 used to learn to update data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.update = (req, res) => {
    let patientID = req.body.patientID;
    if ((patientID === 'NULL') || (patientID === 'null')) {
        patientID = null;
    };
    let oldPatientID = req.params.patientID;
    let patientPhoneNumber = req.body.patientPhoneNumber;
    let emailAddress = req.body.emailAddress;
    let dateOfBirth = req.body.dateOfBirth;
    db.pool.query("UPDATE PatientProfiles SET patientPhoneNumber = ?, emailAddress = ?, dateOfBirth = ?, patientID = ? WHERE PatientProfiles.patientID = ?", [patientPhoneNumber, emailAddress, dateOfBirth, patientID, oldPatientID], (err, result) => {
        if (err) {
            console.log(oldPatientID, patientID)
            console.log(err)
            res.status(500).json({ error: 'Failed to update data' });
        } else {
            console.log("UPDATE PatientProfiles SET patientPhoneNumber = " + patientPhoneNumber + " emailAddress = " + emailAddress + " dateOfBirth = " + dateOfBirth + " patientID = " + patientID + " WHERE patientID = " + oldPatientID)
            res.send(result); // Proceed with updating the specific entity's instance attributes
        }
    })
};