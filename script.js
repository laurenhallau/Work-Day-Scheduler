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
    var value = $("#textAreaTenAM").val();
    var time = "TenAM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonElevenAM").click(function () {
    console.log("User clicked save at 11am");
    var value = $("#textAreaElevenAM").val();
    var time = "ElevenAM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonTwelvePM").click(function () {
    console.log("User clicked save at 12pm");
    var value = $("#textAreaTwelvePM").val();
    var time = "TwelvePM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonOnePM").click(function () {
    console.log("User clicked save at 1pm");
    var value = $("#textAreaOnePM").val();
    var time = "OnePM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonTwoPM").click(function () {
    console.log("User clicked save at 2pm");
    var value = $("#textAreaTwoPM").val();
    var time = "TwoPM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonThreePM").click(function () {
    console.log("User clicked save at 3pm");
    var value = $("#textAreaThreePM").val();
    var time = "ThreePM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonFourPM").click(function () {
    console.log("User clicked save at 4pm");
    var value = $("#textAreaFourPM").val();
    var time = "FourPM";
    console.log(value);
    localStorage.setItem(time, value);
})

$("#saveButtonFivePM").click(function () {
    console.log("User clicked save at 5pm");
    var value = $("#textAreaFivePM").val();
    var time = "FivePM";
    console.log(value);
    localStorage.setItem(time, value);
})
// function for timeblocks color code
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

console.log(localStorage.getItem("TenAM"));
$("#textAreaTenAM").val(localStorage.getItem("TenAM"));

console.log(localStorage.getItem("ElevenAM"));
$("#textAreaElevenAM").val(localStorage.getItem("ElevenAM"));

console.log(localStorage.getItem("TwelvePM"));
$("#textAreaTwelvePM").val(localStorage.getItem("TwelvePM"));

console.log(localStorage.getItem("OnePM"));
$("#textAreaOnePM").val(localStorage.getItem("OnePM"));

console.log(localStorage.getItem("TwoPM"));
$("#textAreaTwoPM").val(localStorage.getItem("TwoPM"));

console.log(localStorage.getItem("ThreePM"));
$("#textAreaThreePM").val(localStorage.getItem("ThreePM"));

console.log(localStorage.getItem("FourPM"));
$("#textAreaFourPM").val(localStorage.getItem("FourPM"));

console.log(localStorage.getItem("FivePM"));
$("#textAreaFivePM").val(localStorage.getItem("FivePM"));
})