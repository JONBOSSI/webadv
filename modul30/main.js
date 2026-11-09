
var noon = 12;
var wakeupTime;
var sleepTime;
var dsTime;

function showCurrentTime() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    clock.innerText = clockTime;
    changeimage();
}

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);


function changeimage() {
    var time = new Date().getHours();

    var image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBzoQ-9dAOUu85BfqX4opPv_8_nEqNn0ZaE9HXuerRQ&s=10";

    var imageHtml = document.getElementById('timeimage');

    if (time == wakeupTime) {
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNX21NEzC9Js7yurXkDKIh4Llf9TIgFY_adWHdC0iaA&s=10";
    }
    else if (time == sleepTime) {
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGZK3wXl0-3SBycODo98uh3YqrUjZabA6gl5oJnp7NQ&s=10";
    }

    imageHtml.src = image;
}

function updateClock() {
    var wakeupTimeSelector = document.getElementById("WakeupTimeSelector");
    wakeupTime = wakeupTimeSelector.value;

    var sleepTimeSelector = document.getElementById("SleepTimeSelector");
    sleepTime = sleepTimeSelector.value;

    var dsTimeSelector = document.getElementById("DSTimeSelector");
    dsTime = dsTimeSelector.value;
}

var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", updateClock);

showCurrentTime();
