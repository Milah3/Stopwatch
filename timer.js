/* Stopwatch Timer using Js that displays on html
 * Author: Cigomba Miler
 **/
// variables to hold time values
let sec = 0;
let min = 0;
let hour = 0;
let mls = 0;

// variables to hold display values
let displaySec = 0;
let displayMin = 0;
let displayHour = 0;
let displayMls = 0;

// variable to hold setInterval() funtion
let interval = null;

// var to hold stopwatch status
let status = 'firstClick';



function Stopwatch() {
    mls++;
    if (mls / 99 === 1) {
        sec++;
        mls = 0;
    }
    if (sec / 60 === 1) {
        min++;
        sec = 0;
    }
    if (min / 60 === 1) {
        hour++;
        min = 0;
    }

    // Take care of leading zeros
    if (mls < 10) {
        displayMls = '0' + mls.toString();
    }
    else {
        displayMls = mls;
    }
    if (sec < 10) {
        displaySec = '0' + sec.toString();
    }
    else {
        displaySec = sec;
    }
    if (min < 10) {
        displayMin = '0' + min.toString();
    }
    else {
        displayMin = min;
    }
    if (hour < 10) {
        displayHour = '0' + hour.toString();
    }
    else {
        displayHour = hour;
    }

    document.getElementById('display').innerHTML = displayHour + ':' + displayMin + ':' + displaySec + ':' + displayMls;
}

function startStop() {
    if (status === 'firstClick') {
        interval = window.setInterval(Stopwatch, 10);
        document.getElementById('startStop').innerHTML = 'Stop';
        status = 'started';
    }
    else if (status === 'started') {
        window.clearInterval(interval);
        document.getElementById('startStop').innerHTML = 'Continue';
        status = 'stopped';
    }
    else if (status === 'stopped') {
        interval = window.setInterval(Stopwatch, 10);
        document.getElementById('startStop').innerHTML = 'Stop';
        status = 'started';
    }
}

// Function to reset the stopwatch
function reset() {
    mls = 0;
    sec = 0;
    status = 'firstClick';
    min = 0;
    hour = 0;
    window.clearInterval(interval);
    document.getElementById('display').innerHTML = '00:00:00:00';
    document.getElementById('startStop').innerHTML = 'Start';
}
