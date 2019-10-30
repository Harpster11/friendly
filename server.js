// Call express and path node modules

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json'}));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

app.use(bodyParser.text({ type: 'text/html'}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

// var app = express();

// // Sets an initial port. We"ll use this later in our listener
// var PORT = process.env.PORT || 8080;



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================



