$(document).ready(function() {
  var now = moment().format("LLLL");
  console.log(now);
  $("#currentDay").append(now);

    var hours = moment().format("h");
  
  var hours = ["09", "10", "11", "12", "1", "2", "3", "4", "5"];
//   ".present" is pink $("inputBox").css("background-color", );
  for (var i = 0; i < hours.length; i++) {
    var colorTime;
    if (moment().hours() === hours[i]) {
      colorTime = "present";
    }
    else if (moment().hours() > hours[i]) {
      colorTime = "future";
    } 
     else if (moment().hours() < hours[i]) {
      colorTime = "past";
    }
    var inputBox = $(`<div class="input-group mb-3"${colorTime}'><div class="input-group-prepend">
    <span class="input-group-text">${hours[i]}:00</span>
      </div>

      <input type="text" class="form-control user-input ${colorTime}">
      <div class="input-group-append">
        <span class="input-group-text">
        <button class = "saveBtn" data-time="${hours[i]}"><i class= 'fas fa-save'></i>
        </span>
      </div>
      </div>`);
    $(".plannerContainer").append(inputBox);
  }
 // save color changes
  // css classes ".past" is white  / ".present" is pink   / ".future" is green #77dd77
//   $("inputBox").mouseover(function(){
//       $("inputBox").css("background-color", "#ff6961");
//     }
//     // $("inputBox").mouseout(function(){
//     //   $("inputBox").css("background-color", "#d3d3d3");
//     // }
//   console.log(inputBox);

  
  var displayHours = 0;
  var amPm = "";

  if (hours > 12) {
    displayHours = hours + 12;
    amPm = "pm";
  } else {
    displayHours = hours;
    amPm = "am";
    console.log(displayHours);
    console.log(amPm);
  }
 userInput = (" ");
  function renderUserInput() {
    var userInput = localStorage.getItem("userInput");
    if (userInput === null) {
      return;
    }
    userInputSpan.textContent = userInput;
    //renderUserInput();
  }
   
  // // This function handles events where one button is clicked
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();

    console.log("Save button has been clicked");
    var userInput = $(".userInput").val();
    console.log(userInput);


    localStorage.setItem($(this).attr("data-time"), userInput);

   
    renderUserInput();
  });
 

//  End of document.ready 
});
