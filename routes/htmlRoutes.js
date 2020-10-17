// Dependencies
const path = require("path");

module.exports = (app) => {
    // GET route to index.html -- point to public/index.html by using res.sendFile
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // GET route to notes.html -- point to public/notes.html by using res.sendFile
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
};