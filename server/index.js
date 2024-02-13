const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 7025;

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// Catch-all route that serves the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});