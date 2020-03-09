$( document ).ready(function(){
    var now = moment().format("LLLL");
    console.log(now);
   $("#currentDay").append(now);


    for (var i = 0; i < 8; i++) {
    var $inputBox = $("<input>");
    console.log(inputBox);
    $(inputBox).attr("class", "input-group form-control mb-3");
    $(".plannerContainer").append(inputBox);
   
      
    var saveBtn = $("<button>");
    $(saveBtn).attr("class","input-group-append column-flex btn-primary input-group-append fa fa-save");
    console.log(saveBtn);
    $(".plannerContainer").append($(saveBtn)).after(inputBox);
     
    
  var hour = $("<input>");
  $(hour).attr("class", "input-group-prepend data-time");
  $("#hour").prepend($(inputBox)).before(inputBox);


    }
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

createTimeBlocks = () => {
    let blocks = "";
    for (let i = 0; i < workHours.length; i++) {
        const hourBlock = "" +
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">' + workHours[i] + '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="' + workHours[i] + '">' +
            '<div class="input-group-append">' +
            '<button class="btn btn-primary" data-time="' + workHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';
        blocks += hourBlock;
        console.log(hourBlock);
    }       
     $("#timeBlocks").prepend(blocks);
 

}

});