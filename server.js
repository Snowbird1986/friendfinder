var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// var questions = [
//     {question: "Your mind is always buzzing with unexplored ideas and plans."},
//     {question: "Generally speaking, you rely more on your experience than your imagination."},
//     {question: "You find it easy to stay relaxed and focused even when there is some pressure."},
//     {question: "You rarely do something just out of sheer curiosity."},
//     {question: "People can rarely upset you."},
//     {question: "It is often difficult for you to relate to other people’s feelings."},
//     {question: "In a discussion, truth should be more important than people’s sensitivities."},
//     {question: "You rarely get carried away by fantasies and ideas."},
//     {question: "You think that everyone’s views should be respected regardless of whether they are supported by facts or not."},
//     {question: "You feel more energetic after spending time with a group of people."},
// ]

// var friends = [

// ]

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//   });
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
//   });

// app.get("/data/questions", function(req, res) {
//     return res.json(questions);
//   });
// app.get("/data/friends", function(req, res) {
//     return res.json(friends);
//   });

// app.post("/data/friends", function(req, res) {
//     var newFriend = req.body;
//     console.log(newFriend);
//     friends.push(newFriend);
//     res.json(newFriend);
//     });
