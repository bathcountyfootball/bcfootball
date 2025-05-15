/*
Student Name: Kristie Jones 
File Name: script.js
*/
const animatedText = document.getElementById('animatedText');
let colorIndex = 0;

function changeColor() {
    const colors = ['red', 'white']; // Add more colors as needed
    animatedText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

// Change text color every 1000 milliseconds (1 second)
setInterval(changeColor, 1000);

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// All images together
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}


// 3 columns side by side
function three() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.msFlex = "25%";  // IE10
      elements[i].style.flex = "25%";
    }
  }
  // Add active class to the current button (highlight it)
var header = document.getElementById("gridheader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Set the target date
const targetDate = new Date("2025-12-31T23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "🚀 Launched!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // run once on load
