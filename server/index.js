/*
Code citation:
Group 70 obtained skeleton code to run React app with Node and Express by following this guide:  https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b.
Skeleton code was updated to be relevant to the project's build.
package.json also included skeleton code for start and build script from the tutorial above.
The skeleton code in package.json was updated to relevant to this project's architecture.
*/

/*
Define routes for react app
*/
const path = require("path");
const express = require("express");
const app = express();

/*
Define route for database
Code citation: starter code obtained from course guide: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database
*/
const db = require('./database/db-connector');

/*
Use following port on flip server of OSU
*/
const PORT = process.env.PORT || 62153;

/*
Connect to database test
Code citation: starter code obtained from course guide: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database
*/
/*
app.get('/', function(req, res)
{
  // Define our queries
  query1 = 'DROP TABLE IF EXISTS diagnostic;';
  query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
  query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
  query4 = 'SELECT * FROM diagnostic;';

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
*/

/*
React app to use files from following pathways of flip server
*/
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

/* 
If above routes are unable to locate relevant files, then:
Catch-all route that serves the React app
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