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
        // console.log(newFriendScoresArray)
        // app.get("/data/friends", function(req, res) {
        var friendComparisons= []
        for(i=0;i<friends.length; i++){
          comparisons=[]
          for(j=0;j<friends[i].scores.length; j++){
            // console.log(friends[i].scores[j])
            
            // console.log(newFriendScoresArray[j])
            comparison=Math.abs(friends[i].scores[j]-newFriendScoresArray[j])
            comparisons.push(comparison) 
          }
          // console.log(comparisons)
            summedComparisons =comparisons.reduce(function(total,number){
              return total + number
            })
            // console.log(summedComparisons)
            friendComparisons.push(summedComparisons);
        }
        // console.log(friendComparisons)
        // console.log(Math.min.apply(null,friendComparisons))
        bestMatchValue=Math.min.apply(null,friendComparisons)
        bestMatchIndex=friendComparisons.indexOf(bestMatchValue)
        // console.log(bestMatchIndex)
        bestMatch = friends[bestMatchIndex]
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.json(bestMatch);
      });

}