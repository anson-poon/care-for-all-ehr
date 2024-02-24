/*
Code citation:
Group 70 obtained skeleton code to run React app with Node and Express by following this guide:  https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b.
Skeleton code was updated to be relevant to the project's build.
package.json also included skeleton code for start and build script from the tutorial above.
The skeleton code in package.json was updated to relevant to this project's architecture.
*/

require('dotenv').config();

/*
Define routes for react app
*/
const path = require("path");
const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors())

/*
Define route for database
Code citation: starter code obtained from course guide: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database
*/
const db = require('./database/db-connector');

/*
Use env port or default port on flip server of OSU
*/
const PORT = process.env.PORT || 5786;

/*
Connect to database test
Code citation: starter code obtained from course guide: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database
*/

app.get('/test', function(req, res)
{
  // Define our queries
  let query1 = 'DROP TABLE IF EXISTS diagnostic;';
  let query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
  let query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
  let query4 = 'SELECT * FROM diagnostic;';

  // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

  // DROP TABLE...
  db.pool.query(query1, function (err, results, fields){

      // CREATE TABLE...
      db.pool.query(query2, function(err, results, fields){

          // INSERT INTO...
          db.pool.query(query3, function(err, results, fields){

              // SELECT *...
              db.pool.query(query4, function(err, results, fields){

                  // Send the results to the browser
                  res.send(JSON.stringify(results));
              });
          });
      });
  });
});

app.get('/sqlData', (req, res) => {
    let query = 'SELECT * FROM Patients'
    db.pool.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(rows); // Send the fetched data as JSON response
        }
    });
})

// technique to delete data credited to https://codewithmarish.com/post/full-stack-crud-app
app.delete("/sqlDataDelete/:patientID", (req, res) => {
    let patientID = req.params.patientID;
    let query = 'DELETE FROM Patients WHERE patientID = ?';
    db.pool.query(query, [patientID], (err, data) => {
      if (err) {
        res.status(500).json({ error: 'Failed to delete data' });
      } else {
        return res.json({data});
      }
    })
});

// logic for UPDATE
// technique to update data learned from https://github.com/safak/youtube2022/blob/react-mysql/client/src/pages/Update.jsx
app.put("/sqlDataUpdate/:patientID", (req, res) => {
    const patientID = req.params.patientID;
    const patientFirstName = req.body.patientFirstName;
    const patientLastName = req.body.patientLastName;
    db.pool.query("UPDATE Patients SET patientFirstName = ?, patientLastName = ? WHERE patientID = ?", [patientFirstName, patientLastName, patientID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    );
})

// logic for INSERT
// technique to insert data learned from https://github.com/dhanavishnu13/CRUD_with_React_Node.js_MySQL/blob/main/frontend/src/pages/Add.jsx
app.post("/sqlDataInsert",(req,res)=>{
    let query ="INSERT INTO Patients (patientID, patientFirstName, patientLastName) VALUES (?)";
    let attributes = [
        req.body.patientID,
        req.body.patientFirstName,
        req.body.patientLastName,
    ]
    db.pool.query(query,[attributes],(err,data)=>{
        if(err) {
            res.status(500).json({ error: 'Failed to delete data' });
        } else {    
            return res.json({data});
        }
    })

});


/*
React app to use files from following pathways of flip server
*/
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

/* 
If above routes are unable to locate relevant files, then:
Catch-all route that serves the static React app
*/
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

/*
Terminal message to inform developer the server running React app is up and running
*/
app.listen(PORT, () => {
    console.log(`Node server is now running on port ${PORT}`);
});