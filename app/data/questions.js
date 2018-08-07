var questions = [
    {question: "Your mind is always buzzing with unexplored ideas and plans."},
    {question: "Generally speaking, you rely more on your experience than your imagination."},
    {question: "You find it easy to stay relaxed and focused even when there is some pressure."},
    {question: "You rarely do something just out of sheer curiosity."},
    {question: "People can rarely upset you."},
    {question: "It is often difficult for you to relate to other people’s feelings."},
    {question: "In a discussion, truth should be more important than people’s sensitivities."},
    {question: "You rarely get carried away by fantasies and ideas."},
    {question: "You think that everyone’s views should be respected regardless of whether they are supported by facts or not."},
    {question: "You feel more energetic after spending time with a group of people."},
]
module.exports = questions;
// $(document).ready(function(){
//     for (var i = 0; i < questions.length; i++) {
//         $("#questionsfield").append('<h3><strong>Question: '+(i+1)+'</strong></h3><h4>'+questions[i].question+'</h4><select class="chosen-select" id=q'+(i+1)+' style="width: 157px;"style="display: none;" ><option value=""></option><option value="1">1 (Strongly Disagree)</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5 (Strongly Agree)</option></select><div class"chosen-container chosen-container-single" style="width: 157px"; title="" id="q'+(i+1)+'_chosen"><a class="chosen-single chosen-default"><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"></div><ul class="chosen-results"></ul></div></div>')
//     }
//     var config = {
//         ".chosen-select": {},
//         ".chosen-select-deselect": {
//             allow_single_deselect: true
//         },
//         ".chosen-select-no-single": {
//             disable_search_threshold: 10
//         },
//         ".chosen-select-no-results": {
//             no_results_text: "Oops, nothing found!"
//         },
//         ".chosen-select-width": {
//             width: "95%"
//         }
//         };
    
//         for (var selector in config) {
//         $(selector).chosen(config[selector]);
//         }
    
//         // Capture the form inputs
//         $("#submit").on("click", function(event) {
//         event.preventDefault();
    
//         // Form validation
//         function validateForm() {
//             var isValid = true;
//             $(".form-control").each(function() {
//             if ($(this).val() === "") {
//                 isValid = false;
//             }
//             });
    
//             $(".chosen-select").each(function() {
    
//             if ($(this).val() === "") {
//                 isValid = false;
//             }
//             });
//             return isValid;
//         }
    
//         // If all required fields are filled
//         if (validateForm()) {
//             // Create an object for the user"s data
//             var userData = {
//             name: $("#name").val(),
//             photo: $("#photo").val(),
//             scores: [
//                 $("#q1").val(),
//                 $("#q2").val(),
//                 $("#q3").val(),
//                 $("#q4").val(),
//                 $("#q5").val(),
//                 $("#q6").val(),
//                 $("#q7").val(),
//                 $("#q8").val(),
//                 $("#q9").val(),
//                 $("#q10").val()
//             ]
//             };
    
//             // AJAX post the data to the friends API.
//             $.post("/data/friends", userData, function(data) {
    
//             // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//             $("#match-name").text(data.name);
//             $("#match-img").attr("src", data.photo);
    
//             // Show the modal with the best match
//             $("#results-modal").modal("toggle");
    
//             });
//         } else {
//             alert("Please fill out all fields before submitting!");
//         }
//         });
// })