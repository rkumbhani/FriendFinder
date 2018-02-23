// dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express app setup
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// serve static content
app.use(express.static(path.join(__dirname, './app/public')));

// sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// require API route file and use express as the app we are passing into the function
require('./app/routing/apiRoutes.js')(app);

// require HTML route file and use express as the app we are passing into the function
require('./app/routing/htmlRoutes.js')(app);


// server begins listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});