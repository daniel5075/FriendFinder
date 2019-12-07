var friends = require("../data/friends");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference=100
        };
        var userData = req.body;
        var userName = userData.name
        var userScores = userData.scores
    });
};