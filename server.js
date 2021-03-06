// Dependencies
const express = require("express");
const fs = require("fs");

// Set up Express app and PORT
var app = express();
var PORT = process.env.PORT || 3002

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

