//This will be the moment.js function
$(document).ready(function () {
    console.log(moment()); //testing
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('LLL'));


//Saving information when save button is clicked- One for each hour. text id 
// Save buttons for each hour.  The origin textarea id is passed with the appointment details
$("#saveButtonNineAM").click(function () {
    console.log("User clicked save at 9am");
    var value = $("#textAreaNineAM").val();
    var time = "NineAM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonTenAM").click(function () {
    console.log("User clicked save at 10am");
})

$("#saveButtonElevenAM").click(function () {
    console.log("User clicked save at 11am");
})

$("#saveButtonTwelvePM").click(function () {
    console.log("User clicked save at 12pm");
})

$("#saveButtonOnePM").click(function () {
    console.log("User clicked save at 1pm");
})

$("#saveButtonTwoPM").click(function () {
    console.log("User clicked save at 2pm");
})

$("#saveButtonThreePM").click(function () {
    console.log("User clicked save at 3pm");
})

$("#saveButtonFourPM").click(function () {
    console.log("User clicked save at 4pm");
})

$("#saveButtonFivePM").click(function () {
    console.log("User clicked save at 5pm");
})

function hourChecker() {
    var currentHour = moment().hours();
    console.log(currentHour);
    //running a function for each class named 'row'
    $(".row").each(function() {
    var blockHour = parseInt($(this).attr("id"));
    if (blockHour < currentHour) {
        console.log("past");
        $(this).addClass("past");
    }
    else if (blockHour === currentHour) {
        console.log("present");
        $(this).addClass("present");
    }
    else {
        console.log("future");
        $(this).addClass("future");
    }
    
    })
}
hourChecker();

console.log(localStorage.getItem("NineAM"));
$("#textAreaNineAM").val(localStorage.getItem("NineAM"));

})