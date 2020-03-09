$( document ).ready(function(){
    var now = moment().format("LLLL");
    console.log(now);
   $("#currentDay").append(now);




// var columnHourDiv = $("<div>");
// columnHourDiv.addClass("col-md-2");
// var columnHourSpan = $("<span>");
// columnHourSpan.attr("class", currentHour);


// columnHourSpan.text(displayHour);
// // adjust column span text
// rowDiv.append(columnHourDiv);
// columnHourDiv.append(displayHour);

    for (var i = 0; i < 4; i++) {
var rowDiv = $("<div>");
rowDiv.attr("class", "row");
rowDiv = $("hour" + "inputBox" +  "saveBtn");
 console.log(rowDiv);

    var inputBox = $("<div>");
    console.log(inputBox);
    $(inputBox).attr("class", "input-group form-control mb-3  col-md-9", "type", "text");
    $(".plannerContainer").append(inputBox);
  
    var saveBtn = $("<i>");
    saveBtn.attr("class","input-group-append  input-group-text col-md-1  btn-primary fa fa-save");
    console.log(saveBtn);
    $(inputBox).after(saveBtn);
   
    
    var hour = $("<div>");
    hour.attr("class", "input-group-prepend col-md-2");
    console.log(hour);
    $(inputBox).after(hour);
//  $("hour").append(currentHour);
    }    

var currentHour = moment().format("h");
var displayHour = 0;
var amPm= "";

if (currentHour > 12) {
displayHour = currentHour + 12;
amPm = "pm";
}
else{
        displayHour = currentHour;
    amPm = "am";
    console.log(displayHour);
    console.log(amPm);
};


    // // This function handles events where one button is clicked
    // $("saveBtn").on("click", function(event) {
    //     // Preventing the buttons default behavior when clicked (which is submitting a form)
    //     event.preventDefault();
    //     // This line grabs the input from the textBox
    //     var movie = $("#movie-input").val().trim();
    //     var toDo = $("user-input").val().trim();
    //     // Adding the movie from the textBox to our array
    //     movies.push(movie);
    //     toDoList.push(toDo);
    //     // Calling renderButtons which handles the processing of our movie array
    //     renderButtons();

// createTimeBlocks = () => {
//     let blocks = "";
//     for (let i = 0; i < workHours.length; i++) {
//         const hourBlock = "" +
//             '<div class="input-group mb-3">' +
//             '<div class="input-group-prepend">' +
//             '<span class="input-group-text">' + workHours[i] + '</span>' +
//             '</div>' +
//             '<input type="text" class="form-control" id="' + workHours[i] + '">' +
//             '<div class="input-group-append">' +
//             '<button class="btn btn-primary" data-time="' + workHours[i] + '"><i class="fa fa-save"></i></button>' +
//             '</div>' +
//             '</div>';
//         blocks += hourBlock;
//         console.log(hourBlock);




//     }       
//      $("#timeBlocks").prepend(blocks);
 

// }

});