/*
Code citation:
Group 70 obtained skeleton code to run React app with Node and Express by following this guide:  https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b.
Skeleton code was updated to be relevant to the project's build.
package.json also included skeleton code for start and build script from the tutorial above.
The skeleton code in package.json was updated to relevant to this project's architecture.
*/

/*
Define routes for react app
/* 
const path = require("path");
const express = require("express");
const app = express();

/*
Use following port on flip server of OSU
*/
const PORT = process.env.PORT || 62153;

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