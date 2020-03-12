$(document).ready(function() {
  var now = moment().format("LLLL");
  console.log(now);
  $("#currentDay").append(now);

    
  var hours = moment().format("h");
  var hours = ["7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];
  
//   ".present" is pink $("inputBox").css("background-color", ); 
// save color changes
  // css classes ".past" is white  / ".present" is pink   / ".future" is green #77dd77
  for (var i = 0; i < hours.length; i++) {
    var colorTime;
    if (moment().hour() === parseInt(hours[i])) {
      colorTime = "present"; 
      
    }
      else if (moment().hour() < parseInt(hours[i])) {
      colorTime = "future";
    } 
     else if (moment().hour() > parseInt(hours[i])) {
      colorTime = "past";
    }
    var inputBox = $(`<div class="input-group mb-3"${colorTime}'><div class="input-group-prepend">
    <span class="input-group-text" id="timePlans">${hours[i]}:00</span>
      </div>

      <input type="text" class="form-control user-input ${colorTime}">
      <div class="input-group-append">
        <span class="input-group-text">
        <button class = "saveBtn"  data-time="${hours[i]}"><i class= 'fas fa-save'></i>
        </span>
      </div>
      </div>`);
    $(".plannerContainer").append(inputBox);
  }

//   $(inputBox).mouseover(function(){
//       $("inputBox").css("background-color", "#ff6961");
//     }
//     // $("inputBox").mouseout(function(){
//     //   $("inputBox").css("background-color", "#d3d3d3");
//     // }
//   console.log(inputBox);

  var displayHours = 0;
  var amPm = "";
  if ((hours) > 12) {
    displayHours = hours.length + 12;
    amPm = "pm";
  } else {
    displayHours = hours;
    amPm = "am";
    console.log(displayHours);
    console.log(amPm);
  }

 
  // function renderUserInput() {
    
  // }
  //  renderUserInput();
  
   
  // // This function handles events where one button is clicked
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var timePlans =JSON.stringify(hours[i]);
    console.log("Save button has been clicked");
    var userInput = $("#timePlans-input").val();;
    console.log(userInput);
    timePlans = ("");
    if (timePlans === null) {
      return;
    }
    timePlans.textContent = userInput;
   localStorage.setItem("saveBtn" , userInput);
  })
  //   var userInput = $("9-input").val();;
  //   console.log(userInput);
  //  localStorage.setItem("data-time=${hours[i]}", userInput)

    // Render a new li for each todo
    // Return from function early if submitted todoText is blank
}); 


