/*
Code citation:
Group 70 obtained skeleton code to run React app with Node and Express by following this guide:  https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b.
Skeleton code was updated to be relevant to the project's build.
package.json also included skeleton code for start and build script from the tutorial above.
The skeleton code in package.json was updated to relevant to this project's architecture.
*/

// Use .env file for user credential to connect to MySQL database 
require('dotenv').config();

/*
Require db-connector file that provides information on how to connect to MySQL database
Code citation: starter code obtained from course guide: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database
*/
const db = require('./database/db-connector');

// Use env port or default port on flip server of OSU
const PORT = process.env.PORT || 5786;

// Require path for serving react static/build files
const path = require("path");

// Instantiate express application, and allow application to obtain information from and transfer information to MySQL database
const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors())

const patientIndexRoute = require('./routes/patientIndexRoutes');
// const patientProfileRoute = require('./routes/patientProfileRoutes');

app.use('/patient-index', patientIndexRoute);
// app.use('/patient-profile', patientProfileRoute);

// All Pages:  SELECT method to get all records for each page
app.get('/sqlData', (req, res) => {
    console.log(req.query);
    let query = 'SELECT * FROM ';

    switch (req.query.table) {
        // case 'Patients':
        //     query += 'Patients';
        //     break;
        case 'PatientProfiles':
            query += 'PatientProfiles';
            break;
        case 'InsurancePolicies':
            query = 'SELECT insuranceID, insuranceType, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID FROM InsurancePolicies JOIN Patients ON InsurancePolicies.patientID = Patients.patientID';
            break;
        case 'Providers':
            query += 'Providers';
            break;
        case 'ProviderProfiles':
            query += 'ProviderProfiles';
            break;
        case 'Patients_has_Providers':
            query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Patients JOIN Patients_has_Providers ON Patients.patientID = Patients_has_Providers.patientID JOIN Providers ON Providers.providerID = Patients_has_Providers.providerID';
            break;
        case 'Visits':
            query = 'SELECT visitID, visitDateTime, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID, CONCAT(InsurancePolicies.insuranceID, " ", "(", InsurancePolicies.insuranceType, ")") as insuranceID FROM Visits as visitAttributes JOIN Patients on visitAttributes.patientID = Patients.patientID  JOIN Providers on visitAttributes.providerID = Providers.providerID  JOIN InsurancePolicies on visitAttributes.insuranceID = InsurancePolicies.insuranceID';
            break;
        case 'InsuranceNotes':
            query = 'SELECT insuranceNoteID, reimbursementCode, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM InsuranceNotes JOIN Visits ON InsuranceNotes.visitID = Visits.visitID  JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID';
            break;
        case 'ClinicalNotes':
            query = 'SELECT clinicalNoteID, lengthOfVisit, CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM ClinicalNotes JOIN Visits ON ClinicalNotes.visitID = Visits.visitID  JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID';
            break;
        case 'ClinicalFindings':
            query = 'SELECT clinicalFindingID, chiefComplaint, patientBloodPressure, patientHeartRate, patientTemperature, patientRespiratoryRate, narrativeTreatmentPlan, CONCAT(ClinicalNotes.clinicalNoteID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as clinicalNoteID FROM ClinicalFindings JOIN ClinicalNotes ON ClinicalFindings.clinicalNoteID = ClinicalNotes.clinicalNoteID JOIN Visits ON ClinicalNotes.visitID = Visits.visitID JOIN Providers ON Visits.providerID = Providers.providerID JOIN Patients ON Visits.patientID = Patients.patientID';
            break;
        default:
            return res.status(400).json({ error: 'Invalid table' });
    }
    db.pool.query(query, (err, data, fields) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(data); // Send the fetched data as JSON response
        }
    });
});

// Clinical Findings: SELECT records from Clinical Notes that have not been associated with a Clinical Findings note yet
app.get('/sqlData/searchClinicalNotesWithoutClinicalFindings', (req, res) => {
    let query = 'SELECT CONCAT(ClinicalNotes.clinicalNoteID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as clinicalNoteID FROM ClinicalNotes LEFT JOIN ClinicalFindings ON ClinicalNotes.clinicalNoteID =  ClinicalFindings.clinicalNoteID LEFT JOIN Visits on ClinicalNotes.visitID = Visits.visitID LEFT JOIN Providers on Visits.providerID = Providers.providerID  LEFT JOIN Patients on Visits.patientID = Patients.patientID WHERE ClinicalFindings.clinicalNoteID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
});

// Clinical Findings: SELECT records from Clinical Findings based on certain attributes
app.get('/sqlData/searchClinicalFindings', (req, res) => {
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
});

// Clinical Notes: SELECT records from Visits that have not been associated with a Clinical Note yet
app.get('/sqlData/searchVisitWithoutClinicalNote', (req, res) => {
    let query = 'SELECT CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM Visits LEFT JOIN ClinicalNotes on Visits.visitID = ClinicalNotes.visitID LEFT JOIN Providers on Visits.providerID = Providers.providerID LEFT JOIN Patients on Visits.patientID = Patients.patientID WHERE ClinicalNotes.visitID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
});

// Clinical Notes: SELECT records from Clinical Notes based on certain attributes
app.get('/sqlData/searchClinicalNotes', (req, res) => {
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
});

// Insurance Notes: SELECT records from Visits that have not been associated with an Insurance Note yet
app.get('/sqlData/searchVisitWithoutInsuranceNote', (req, res) => {
    let query = 'SELECT CONCAT(Visits.visitID, " { Visit on ", Visits.visitDateTime, " between Provider ID ", Visits.providerID, " [", Providers.providerFirstName, " ", Providers.providerLastName, "] and Patient ID ", Visits.patientID, " [", Patients.patientFirstName, " ", Patients.patientLastName, "] }" ) as visitID FROM Visits  LEFT JOIN InsuranceNotes on Visits.visitID = InsuranceNotes.visitID  LEFT JOIN Providers on Visits.providerID = Providers.providerID LEFT JOIN Patients on Visits.patientID = Patients.patientID WHERE InsuranceNotes.visitID IS NULL';
    db.pool.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to search data' });
        } else {
            return res.json(data);
        }
    })
});

// Insurance Notes: SELECT records from Insurance Notes based on certain attributes
app.get('/sqlData/searchInsuranceNotes', (req, res) => {
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
});

// Insurance Policies: SELECT records from Patient Provider Intersection based on certain attributes
app.get('/sqlData/searchInsurancePolicies', (req, res) => {
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
            query = 'SELECT insuranceID, insuranceType, CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID FROM InsurancePolicies JOIN Patients ON InsurancePolicies.patientID = Patients.patientID WHERE Patients.patientFirstName = ? and Patients.patientLastName = ?';
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
});

// Patient Provider Intersection: SELECT records from Patient Provider Intersection based on certain attributes
app.get('/sqlData/searchPatientProviderRelationships', (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let queryParams = [];
    let query = "";

    switch (userChoice) {
        case 'patientID':
            query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Patients JOIN Patients_has_Providers ON Patients.patientID = Patients_has_Providers.patientID JOIN Providers ON Providers.providerID = Patients_has_Providers.providerID WHERE Patients.patientID = ?';
            queryParams.push(userInput);
            break;
        case 'providerID':
            query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Patients JOIN Patients_has_Providers ON Patients.patientID = Patients_has_Providers.patientID JOIN Providers ON Providers.providerID = Patients_has_Providers.providerID WHERE Providers.providerID = ?';
            queryParams.push(userInput);
            break;
        case 'patientFullName':
            const newPatientUserInput = userInput.split(' ');
            query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Patients JOIN Patients_has_Providers ON Patients.patientID = Patients_has_Providers.patientID JOIN Providers ON Providers.providerID = Patients_has_Providers.providerID WHERE Patients.patientFirstName = ? and Patients.patientLastName = ?';
            queryParams.push(newPatientUserInput[0], newPatientUserInput[1])
            break;
        case 'providerFullName':
            const newProviderUserInput = userInput.split(' ');
            query = 'SELECT CONCAT(Patients.patientID, " ", "(", Patients.patientFirstName, " ", Patients.patientLastName, ")") as patientID, CONCAT(Providers.providerID, " ", "(", Providers.providerFirstName, " ", Providers.providerLastName, ")") as providerID FROM Patients JOIN Patients_has_Providers ON Patients.patientID = Patients_has_Providers.patientID JOIN Providers ON Providers.providerID = Patients_has_Providers.providerID WHERE Providers.providerFirstName = ? and Providers.providerLastName = ?';
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
});

// Patient Index:  SELECT records from Patients based on certain attributes
// app.get('/sqlData/searchPatient', (req, res) => {
//     const { userChoice, userInput } = req.query;

//     console.log(userChoice);
//     console.log(userInput);

//     let query = 'SELECT * FROM Patients WHERE ';
//     let queryParams = [];

//     switch (userChoice) {
//         case 'patientID':
//             query += 'patientID = ?';
//             queryParams.push(userInput);
//             break;
//         case 'patientFirstName':
//             query += 'patientFirstName = ?';
//             queryParams.push(userInput);
//             break;
//         case 'patientLastName':
//             query += 'patientLastName = ?';
//             queryParams.push(userInput);
//             break;
//         case 'patientFullName':
//             const newUserInput = userInput.split(' ');
//             query += 'patientFirstName = ? AND patientLastName = ?';
//             queryParams.push(newUserInput[0], newUserInput[1])
//             break;
//         default:
//             return res.status(400).json({ error: 'Invalid search query' });
//     }
//     db.pool.query(query, queryParams, (err, data) => {
//         if (err) {
//             res.status(500).json({ error: 'Failed to search data' });
//         } else {
//             return res.json(data);
//         }
//     })
// });

// Patient Profiles:  SELECT records from PatientProfiles based on certain attributes
app.get('/sqlData/searchPatientProfiles', (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT * FROM PatientProfiles WHERE ';
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
            query += 'patientID = ?';
            queryParams.push(userInput);
            break;
        // QUERY NEED FIX
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
})

// Providers Page:  SELECT records from Providers based on certain attributes
app.get('/sqlData/searchProvider', (req, res) => {
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
});

// ProviderProfiles: SELECT records from ProviderProfiles based on certain attributes 
app.get('/sqlData/searchProviderProfiles', (req, res) => {
    const { userChoice, userInput } = req.query;

    console.log(userChoice);
    console.log(userInput);

    let query = 'SELECT * FROM ProviderProfiles WHERE ';
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
            query += 'providerID = ?';
            queryParams.push(userInput);
            break;
        // QUERY NEED FIX
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
});

// Visits: SELECT records from Visits based on certain attributes
app.get('/sqlData/searchVisits', (req, res) => {
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
            query += 'visitDateTime = ?'
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
});

/* 
PatientProfiles Page:  Logic to DELETE a record based on patientID
Code citation:  Technique Group 70 used to learn to delete data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.delete("/sqlDataDeletePatientProfiles/:patientID", (req, res) => {
    let patientID = req.params.patientID;
    db.pool.query("DELETE FROM PatientProfiles WHERE patientID = ?", [patientID], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("DELETE FROM PatientProfiles WHERE patientID = " + patientID);
            res.send(data); // Proceed with deletion of the specific row from PatientProfiles
        }
    })
});

/* 
ProviderProfiles Page:  Logic to DELETE a record based on providerID
Code citation:  Technique Group 70 used to learn to delete data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.delete("/sqlDataDeleteProviderProfiles/:providerID", (req, res) => {
    let providerID = req.params.providerID;
    db.pool.query("DELETE FROM ProviderProfiles WHERE providerID = ?", [providerID], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("DELETE FROM ProviderProfiles WHERE providerID = " + providerID);
            res.send(data); // Proceed with deletion of the specific row from ProviderProfiles
        }
    })
});

/*
ProviderIndex Page:  Logic to DELETE a record based on providerID
Code citation:  Code modified from base of DELETE code for Patient Index page
*/
app.delete("/sqlDataDeletePI/:providerID", (req, res) => {
    let providerID = req.params.providerID;
    db.pool.query("DELETE FROM Providers WHERE providerID = ?", [providerID], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("DELETE FROM Providers WHERE providerID = " + providerID);
            res.send(data); // Proceed with deletion of the specific row from Provider Index
        }
    })
});

/*
Patients_has_Providers Page:  Logic to DELETE a record based on patientID and providerID
Code citation:  Code modified from base of DELETE code for Patient Index page
*/
app.delete("/sqlDataDeletePHP/:patientID/:providerID", (req, res) => {
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
});

/*
PatientIndex Page:  Logic to UPDATE a record based on patientID
Code citation:  Technique Group 70 used to learn to update data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.put("/sqlDataUpdate/:patientID", (req, res) => {
    let patientID = req.params.patientID;
    let patientFirstName = req.body.patientFirstName;
    let patientLastName = req.body.patientLastName;
    db.pool.query("UPDATE Patients SET patientFirstName = ?, patientLastName = ? WHERE patientID = ?", [patientFirstName, patientLastName, patientID], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to update data' });
        } else {
            console.log("UPDATE Patients SET patientFirstName = " + patientFirstName + " patientLastName = " + patientLastName + " WHERE patientID = " + patientID)
            res.send(result); // Proceed with updating the specific entity's instance attributes
        }
    })
});

/*
PatientProfiles Page:  Logic to UPDATE a record based on patientID
Code citation:  Technique Group 70 used to learn to update data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.put("/sqlDataUpdatePatientProfiles/:patientID", (req, res) => {
    let patientID = req.params.patientID;
    let patientPhoneNumber = req.body.patientPhoneNumber;
    let emailAddress = req.body.emailAddress;
    let dateOfBirth = req.body.dateOfBirth;
    db.pool.query("UPDATE PatientProfiles SET patientPhoneNumber = ?, emailAddress = ?, dateOfBirth = ? WHERE patientID = ?", [patientPhoneNumber, emailAddress, dateOfBirth, patientID], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to update data' });
        } else {
            console.log("UPDATE PatientProfiles SET patientPhoneNumber = " + patientPhoneNumber + " emailAddress = " + emailAddress + " dateOfBirth" + dateOfBirth + " WHERE patientID = " + patientID)
            res.send(result); // Proceed with updating the specific entity's instance attributes
        }
    })
});

/*
ProviderProfiles Page:  Logic to UPDATE a record based on providerID
Code citation:  Technique Group 70 used to learn to update data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.put("/sqlDataUpdateProviderProfiles/:providerID", (req, res) => {
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
});

/*
ProviderIndex Page:  Logic to UPDATE a record based on providerID
Code citation:  Code modified from base of UPDATE code for Patient Index page
*/
app.put("/sqlDataUpdatePI/:providerID", (req, res) => {
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
});

/*
Patients_has_Providers Page:  Logic to UPDATE a record based on patientID
Code citation:  Technique Group 70 used to learn to update data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.put("/sqlDataUpdatePHP/:patientID/:providerID", (req, res) => {
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
});


/*
PatientProfiles Page:  Logic to INSERT, or add, a new record to entity
Code citation:  Technique Group 70 used to learn to insert data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.post("/sqlDataInsertPatientProfiles", (req, res) => {
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
});

/*
Patients_has_Providers Page:  Logic to INSERT, or add, a new record to entity
Code citation:  Technique Group 70 used to learn to insert data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.post("/sqlDataInsertPatientHasProviders", (req, res) => {
    let query = "INSERT INTO Patients_has_Providers (patientID, providerID) VALUES (?)";
    let attributes = [
        req.body.patientID,
        req.body.providerID,
    ]
    db.pool.query(query, [attributes], (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {
            console.log("INSERT INTO Patients_has_Providers (patientID, providerID) VALUES ("
                + req.body.patientID + ", " + req.body.providerID + ")");
            return res.json({ data });
        }
    })
});

/*
ProviderProfiles Page:  Logic to INSERT, or add, a new record to entity
Code citation:  Technique Group 70 used to learn to insert data credited to https://github.com/safak/youtube2022/tree/react-mysql
*/
app.post("/sqlDataInsertProviderProfiles", (req, res) => {
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
});

/*
ProviderIndex Page:  Logic to INSERT, or add, a new record based on providerID
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
app.post("/sqlDataInsertPI", (req, res) => {
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
});

/*
Visits Page:  Logic to INSERT, or add, a new visit 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
app.post("/sqlDataInsertVisits", (req, res) => {
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
});

/*
Insurance Policy Page:  Logic to INSERT, or add, a new insurance policy 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
app.post("/sqlDataInsertInsurancePolicies", (req, res) => {
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
});

/*
Insurance Notes Page:  Logic to INSERT, or add, a new insurance note 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
app.post("/sqlDataInsertInsuranceNotes", (req, res) => {
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
});

/*
Clinical Notes Page:  Logic to INSERT, or add, a new clinical note 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
app.post("/sqlDataInsertClinicalNotes", (req, res) => {
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
});

/*
Clinical Findings Page:  Logic to INSERT, or add, a new clinical findings note 
Code citation:  Code modified from base of INSERT code for Patient Index page
*/
app.post("/sqlDataInsertClinicalFindings", (req, res) => {
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
});

// Define route for Express to serve static/build React version
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// Catch-all route that serves static React app if relevant files are not in above paths
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Terminal message to inform developer the Express server is running at port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});