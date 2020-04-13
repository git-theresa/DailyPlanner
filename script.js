$(document).ready(function () {

var now = moment().format("LLLL");
// console.log(now);
$("#currentDay").append(now);

// var input = localStorage.getItem("timePlans", userInput);

var hours = moment().format("h");
var hours = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

//  classes ".past" is red  / ".present" is green   / ".future" is yellow
for (var i = 0; i < hours.length; i++) {
  var colorTime;
  if (moment().hour() === parseInt(hours[i]++)) {
    colorTime = "p-3 mb-2 bg-success text-white";
  } else if (moment().hour() < parseInt(hours[i])) {
    colorTime = "p-3 mb-2 bg-warning text-dark";
  } else if (moment().hour() > parseInt(hours[i]--)) {
    colorTime = "p-3 mb-2 bg-danger text-white";
  }

  var inputBox = $(`<div class="input-group mb-3" class="p-3 mb-2 bg-success text-white" class="p-3 mb-2 bg-warning text-dark" class="p-3 mb-2 bg-danger text-white"'><div class="input-group-prepend">
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

// var displayHours = 0;
// var amPm = "";
// if (hours < 12) {
//   displayHours = hours.length + 12;
//   amPm = "am";
// } else {
//   displayHours = hours;
//   amPm = "pm";
// }

// // This function handles events where one button is clicked


  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var timePlans = JSON.stringify(hours[i]);
    var userInput = $("#timePlans-input").val();;
    timePlans = "";
    if (timePlans === null) {
      return;
    }
    timePlans.textContent = userInput;
    localStorage.setItem("timePlans", userInput);
  });
});
