// Call express and path node modules

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

// var app = express;

// var PORT = process.env.PORT || 8080;

// var jsonParser = bodyParser.json();

// var urlencodedParser = bodyParser.urlencoded({ extended: false});

// // app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json({ type: 'application/*+json'}));

// app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

// app.use(bodyParser.text({ type: 'text/html'}))

// require("./app/routing/apiRoutes.js");
// require("./app/routing/html-routes.js")(app);

// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


