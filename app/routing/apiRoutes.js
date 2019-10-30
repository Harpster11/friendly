

var friends = require("../data/friends.js");
// requiring our friends.js logic for processing friends and connecting API routes to the node module
module.exports = function(app) {
// Run get request to send the friends list in a JSON package
    app.get("/api/friends", function(req, res) {

        res.json(friends);
    });
// run a post route to send the best match to the server
    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);
// request survey answers from the client and setup the scores variable
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

// build logic to calculate the difference between the user data and the previous survey data
        var totalDifference = 0;

        for (var i=0; i <friends.length; i++) {

                console.log(friends[i]);
                totalDifference = 0;

                for (var k = 0; k < friends[i].scores[k]; k++) {
                    totalDifference += Math.abs(parseInt(userScores[k]) - parseInt(friends[i].scores[k]));

                    if (totalDifference <= bestMatch.friendDifference) {

                        bestMatch.name = friends[i].name;
                        bestMatch.photo = friends[i].photo;
                        bestMatch.friendDifference = totalDifference;
                    }
                }
        }

        friends.push(userData);

        res.json(bestMatch);
    });
}