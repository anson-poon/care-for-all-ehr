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

// Define routes for entities
const patientIndexRoute = require('./routes/patientIndexRoutes');
const patientProfilesRoute = require('./routes/patientProfilesRoutes');
const insurancePoliciesRoute = require('./routes/insurancePoliciesRoutes');
const providerIndexRoute = require('./routes/providerIndexRoutes');
const providerProfileRoute = require('./routes/providerProfilesRoutes');
const patientProviderIntersectionRoute = require('./routes/patientProviderIntersectionRoutes');
const visitRoute = require('./routes/visitsRoutes');
const insuranceNoteRoute = require('./routes/insuranceNotesRoutes');
const clinicalNoteRoute = require('./routes/clinicalNotesRoutes');
const clinicalFindingRoute = require('./routes/clinicalFindingsRoutes');

// Instantiates routes to entities for use by express application
app.use('/patient-index', patientIndexRoute);
app.use('/patient-profiles', patientProfilesRoute);
app.use('/insurance-policies', insurancePoliciesRoute);
app.use('/provider-index', providerIndexRoute);
app.use('/provider-profiles', providerProfileRoute);
app.use('/patient-provider-intersection', patientProviderIntersectionRoute);
app.use('/visits', visitRoute);
app.use('/insurance-notes', insuranceNoteRoute);
app.use('/clinical-notes', clinicalNoteRoute);
app.use('/clinical-findings', clinicalFindingRoute);

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