const db = require('../database/db-connector');

// SELECT all records for Provider Profiles
exports.selectAll = (req, res) => {
    let query = 'SELECT providerProfileID, title, specialty, providerPhoneNumber, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Providers JOIN ProviderProfiles ON ProviderProfiles.providerID = Providers.providerID';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching provider profiles:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// ProviderProfiles: SELECT records from ProviderProfiles based on certain attributes 
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT providerProfileID, title, specialty, providerPhoneNumber, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Providers JOIN ProviderProfiles ON ProviderProfiles.providerID = Providers.providerID WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'providerProfileID':
            query += 'providerProfileID = ?';
            queryParams.push(userInput);
            break;
        case 'title':
            query += 'title = ?';
            queryParams.push(userInput);
            break;
        case 'specialty':
            query += 'specialty = ?';
            queryParams.push(userInput);
            break;
        case 'providerPhoneNumber':
            query += 'providerPhoneNumber = ?';
            queryParams.push(userInput);
            break;
        case 'providerID':
            query += 'Providers.providerID = ?';
            queryParams.push(userInput);
            break;
        case 'providerFullName':
            const newPatientUserInput = userInput.split(' ');
            query += 'Providers.providerFirstName = ? AND Providers.providerLastName = ?';
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

// Provider Profiles: SELECT records from Providers that have not been associated with a Provider Profile yet
exports.selectiveInsert = (req, res) => {
    let query = 'SELECT CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Providers LEFT JOIN ProviderProfiles ON ProviderProfiles.providerID = Providers.providerID WHERE ProviderProfiles.providerID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
};

/* 
ProviderProfiles Page:  Logic to DELETE a record based on providerID
Code citation:  Technique Group 70 used to learn to delete data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.delete = (req, res) => {
    let providerID = req.params.providerID;
    db.pool.query("DELETE FROM ProviderProfiles WHERE providerID = ?", [providerID], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("DELETE FROM ProviderProfiles WHERE providerID = " + providerID);
            res.send(data); // Proceed with deletion of the specific row from ProviderProfiles
        }
    })
};

/*
ProviderProfiles Page:  Logic to UPDATE a record based on providerID
Code citation:  Technique Group 70 used to learn to update data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.update = (req, res) => {
    let providerID = req.params.providerID;
    let title = req.body.title;
    let specialty = req.body.specialty;
    let providerPhoneNumber = req.body.providerPhoneNumber;
    db.pool.query("UPDATE ProviderProfiles SET title = ?, specialty = ?, providerPhoneNumber = ? WHERE providerID = ?", [title, specialty, providerPhoneNumber, providerID], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to update data' });
        } else {
            console.log("UPDATE ProviderProfiles SET title = " + title + " specialty = " + specialty + " providerPhoneNumber = " + providerPhoneNumber + " WHERE providerID = " + providerID)
            res.send(result); // Proceed with updating the specific entity's instance attributes
        }
    })
};

/*
ProviderProfiles Page:  Logic to INSERT, or add, a new record to entity
Code citation:  Technique Group 70 used to learn to insert data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
exports.create = (req, res) => {
    let query = "INSERT INTO ProviderProfiles (providerProfileID, title, specialty, providerPhoneNumber, providerID) VALUES (?)";
    let attributes = [
        req.body.providerProfileID,
        req.body.title,
        req.body.specialty,
        req.body.providerPhoneNumber,
        req.body.providerID
    ]
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO ProviderProfiles (providerID, title, specialty, providerPhoneNumber) VALUES ("
                + req.body.providerID + ", " + req.body.title + ", " + req.body.specialty + ", " + req.body.providerPhoneNumber + ")");
            return res.json({ data });
        }
    })
};