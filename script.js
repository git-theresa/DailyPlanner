$(document).ready(function() {
    
  var now = moment().format("LLLL");
  console.log(now);
  $("#currentDay").append(now);

  var colorTime = "";
  var hours = ["09", "10", "11", "12", "1", "2", "3", "4", "5"];

  for (var i = 0; i < hours.length; i++) {
    var inputBox = $(`<div class="input-group mb-3 ${colorTime}"><div class="input-group-prepend">
    <span class="input-group-text">${hours[i]}:00</span>
      </div>
      <input type="text" class="form-control user-input ${colorTime}">
      <div class="input-group-append">
        <span class="input-group-text"><button class = "saveBtn" data-time="${hours[i]}"><i class= 'fas fa-save'></i></span>
      </div></div>`);
    $(".plannerContainer").append(inputBox);
  }
  console.log(inputBox);

  var hours = moment().format("h");
  var displayHour = 0;
  var amPm = "";

  if (hours > 12) {
    displayHour = hours + 12;
    amPm = "pm";
  } else {
    displayHours = hours;
    amPm = "am";
    console.log(displayHours);
    console.log(amPm);
  }

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
    var toDo = $(".user-input")
      .val()
      .trim();
    console.log(toDo);

    localStorage.setItem($(this).attr('data-time'), toDo)

    // save todo to localstorage

   // toDoList.push(toDo);
   // renderUserInput();
  });

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
  // }
  //      $("#timeBlocks").prepend(blocks);
});
