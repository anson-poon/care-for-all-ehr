/*
Code citation: db-connector file starter code obtained from course guide: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database
*/

require('dotenv').config()

// ./database/db-connector.js

// Get an instance of mysql we can use in the app
var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    database        : process.env.DB_DATABASE
})

// Export it for use in our applicaiton
module.exports.pool = pool;

// var connection = mysql.createConnection({
//     connectionLimit : 10,
//     host            : 'classmysql.engr.oregonstate.edu',
//     user            : process.env.DB_USER,
//     password        : process.env.DB_PASSWORD,
//     database        : process.env.DB_DATABASE
// })