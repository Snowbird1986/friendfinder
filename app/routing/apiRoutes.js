var friends = require("../data/friends");
var questions = require("../data/questions");
module.exports = function(app) {
    app.get("/data/friends", function(req, res) {
        return res.json(friends);
      });
    app.get("/data/questions", function(req, res) {
        return res.json(questions);
      });
    app.post("/data/friends", function(req, res) {
        var newFriendScoresArray=req.body.scores
        console.log(newFriendScoresArray)
          // app.get("/data/friends", function(req, res) {
          //   var friendComparisons= []
          //   for(i=0;i<res.length; i++){
          //     res[i].scores.forEach((e1)=>newFriendScoresArray.forEach((e2)=>{
          //       comparisons=[]
          //       comparison=Math.abs(e1-e2)
          //       comparisons.push(comparison)
          //       console.log(comparisons)
          //       friendComparisons.push(sum(comparisons))
          //     }));
          //   }
          //   bestMatch = Math.min(friendComparisons) 
          // });
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
      });
}