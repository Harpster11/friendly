// Relate Dependencies, Path Package to find file directory

var path = require("path");


// ROUTING
module.exports = function(app) {

    //build a get route for the survey page
    
    app.get("/survey", function(req, res){
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    // generic home page get route
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

}