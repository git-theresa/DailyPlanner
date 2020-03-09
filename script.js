$( document ).ready(function(){
    var now = moment().format("LLLL");
    console.log(now);
   $("#currentDay").append(now);


    for (var i = 0; i < 8; i++) {
    var inputBox = $("<input>");
    console.log(inputBox);
    $(inputBox).attr("class", "input-group form-control mb-3", "type", "text");
    $(".plannerContainer").append(inputBox);
    // $(".plannerContainer").append(columnInputDiv);
    // $(".plannerContainer").append(columnHourDiv);
    // $(".plannerContainer").append(columnSaveDiv);
   
    var columnInputDiv = $("<div>");
    columnInputDiv.attr("class","col-md-6");

    

    var columnSaveDiv = $("<div>");
    columnSaveDiv.attr("col-md-2");
 

    var saveBtn = $("<i>");
    saveBtn.attr("class","input-group-append  input-group-text btn-primary fa fa-save");
    console.log(saveBtn);
    inputBox.after(saveBtn);
   
    
  var hour = document.createElement("input");
  hour.setAttribute("class", "input-group-prepend data-time");
  console.log(hour);
  inputBox.before(hour);
   
}    

var currentHour = moment().format("h");
var displayHour = 0;
var amPm= "";



var rowDiv = $("<div>");
rowDiv.attr("class", "row");
rowDiv.attr("class", "inputRow");
rowDiv.attr("class", "hour-index", currentHour);

var columnHourDiv = $("<div>");
    columnHourDiv.addClass("col-md-2");
var columnHourSpan = $("<span>");
columnHourSpan.attr("class", currentHour);

if (currentHour > 12) {
displayHour = currentHour - 12;
amPm = "pm";
}
else{
        displayHour = currentHour;
    amPm = "am";
};

columnHourSpan.text("${displayHour}${amPm");
rowDiv.append(columnHourDiv);
columnHourDiv.append(columnHourSpan);
    // // This function handles events where one button is clicked
    // $("saveBtn").on("click", function(event) {
    //     // Preventing the buttons default behavior when clicked (which is submitting a form)
    //     event.preventDefault();
    //     // This line grabs the input from the textbox
    //     var movie = $("#movie-input").val().trim();
    //     var toDo = $("user-input").val().trim();
    //     // Adding the movie from the textbox to our array
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