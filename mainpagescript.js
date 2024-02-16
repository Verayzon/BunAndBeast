let headertext = document.getElementById("headertext");
let grass = document.getElementById("grass");
let BACKGROUND = document.getElementById("BACKGROUND");
let marcus = document.getElementById("marcustxtbox");
let giene = document.getElementById("gienetxtbox");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  headertext.style.marginTop = value * 2.5 + "px";
  marcus.style.top = value * 2.5 + "px";
  giene.style.top = value * 2.5 + "px";
});

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let startDate = new Date(2022, 9, 11, 14, 1);
let startTime = startDate.getTime();

function addZeroes(value) {
  return value < 10 ? `0${value}` : value;
}

function count() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();

  let totalTime = todayTime - startTime;

  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;
  let oneYear = 365.25 * oneDay; // Approximate number of milliseconds in a year

  let yearsDone = Math.floor(totalTime / oneYear);
  let monthsDone = Math.floor((totalTime % oneYear) / (30 * oneDay)); // Approximate number of days in a month
  let daysDone = Math.floor((totalTime % (30 * oneDay)) / oneDay);
  let hoursDone = Math.floor((totalTime % oneDay) / oneHr);
  let minutesDone = Math.floor((totalTime % oneHr) / oneMin);
  let secondsDone = Math.floor((totalTime % oneMin) / 1000);

  year.textContent = addZeroes(yearsDone);
  month.textContent = addZeroes(monthsDone);
  day.textContent = addZeroes(daysDone);
  hour.textContent = addZeroes(hoursDone);
  minute.textContent = addZeroes(minutesDone);
  second.textContent = addZeroes(secondsDone);
}

let i = setInterval(count, 1000);
count();

const button = document.getElementById("musicbutton");
const audio = new Audio("lovebug.mp3");

// Set audio to loop
audio.loop = true;
audio.volume = 0.3;

// Add click event listener to the button
button.addEventListener("click", function () {
  // Check if audio is paused
  if (audio.paused) {
    // If paused, play audio
    audio.play();
    // Change button text
    button.textContent = "Pause...";
  } else {
    // If playing, pause audio
    audio.pause();
    // Change button text
    button.textContent = "Play!";
  }
});

// Listen for the end of the audio to loop it again

function showDialog() {
  var overlay = document.getElementById("overlay");
  var dialog = document.getElementById("dialog-dark-rounded");
  overlay.style.display = "block";
  dialog.style.display = "block";
}

// Function to hide the dialog and overlay
function hideDialog() {
  var overlay = document.getElementById("overlay");
  var dialog = document.getElementById("dialog-dark-rounded");
  overlay.style.display = "none";
  dialog.style.display = "none";
}

// Select the "No" radio button
var noRadioButton = document.getElementById("answer-no");

// Add click event listener to the "No" radio button
noRadioButton.addEventListener("click", function () {
  showDialog(); // Show the dialog and overlay when "No" is clicked
});
