$( document ).ready(function(){
    var now = moment().format("LLLL");
    console.log(now);
   $("#currentDay").append(now);


 for (var i = 0; i < 8; i++) {
    var inputBox = $("<input>");
    console.log(inputBox);
$(".plannerContainer").append(inputBox);
$(inputBox).attr("class", "row");
    var saveMe = $("<button>");
$("inputBox").append($(saveMe));
console.log(saveMe);






}
});