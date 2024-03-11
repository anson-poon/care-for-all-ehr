const db = require('../database/db-connector');

/* Controller with functions used by the Provider Index Routes */

// SELECT all records for provider index
exports.selectAll = (req, res) => {
    let query = 'SELECT * FROM Providers';
    db.pool.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching providers:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data);
        }
    });
};

// Providers Page:  SELECT records from Providers based on certain attributes
exports.search = (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT * FROM Providers WHERE ';
    let queryParams = [];

    switch (userChoice) {
        case 'providerID':
            query += 'providerID = ?';
            queryParams.push(userInput);
            break;
        case 'providerFirstName':
            query += 'providerFirstName = ?';
            queryParams.push(userInput);
            break;
        case 'providerLastName':
            query += 'providerLastName = ?';
            queryParams.push(userInput);
            break;
        case 'providerFullName':
            const newUserInput = userInput.split(' ');
            query += 'providerFirstName = ? AND providerLastName = ?';
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

/*
ProviderIndex Page:  Logic to DELETE a record based on providerID
Code citation:  Code modified from base of DELETE code for Patient Index page
*/
exports.delete = (req, res) => {
    let providerID = req.params.providerID;
    db.pool.query("DELETE FROM Providers WHERE providerID = ?", [providerID], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("DELETE FROM Providers WHERE providerID = " + providerID);
            res.send(data); // Proceed with deletion of the specific row from Provider Index
        }
    })
};

/*
ProviderIndex Page:  Logic to UPDATE a record based on providerID
Code citation:  Code modified from base of UPDATE code for Patient Index page
*/
exports.update = (req, res) => {
    let providerID = req.params.providerID;
    let providerFirstName = req.body.providerFirstName;
    let providerLastName = req.body.providerLastName;
    db.pool.query("UPDATE Providers SET providerFirstName = ?, providerLastName = ? WHERE providerID = ?", [providerFirstName, providerLastName, providerID], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to update data' });
        } else {
            console.log("UPDATE Providers SET providerFirstName = " + providerFirstName + " providerLastName = " + providerLastName + " WHERE providerID = " + providerID)
            res.send(result); // Proceed with updating the specific entity's instance attributes
        }
    })
};

/*
ProviderIndex Page:  Logic to INSERT, or add, a new record based on providerID
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
exports.create = (req, res) => {
    let providerID = req.body.providerID;
    let providerFirstName = req.body.providerFirstName;
    let providerLastName = req.body.providerLastName;
    db.pool.query("INSERT INTO Providers (providerID, providerFirstName, providerLastName) VALUES (?, ?, ?)", [providerID, providerFirstName, providerLastName], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to insert data' });
        } else {
            console.log("INSERT INTO Providers (providerFirstName, providerLastName) VALUES (" + providerFirstName + ", " + providerLastName + ")");
            res.send(result); // Proceed with updating the specific entity's instance attributes
        }
    })
};