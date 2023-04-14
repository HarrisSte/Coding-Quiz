//Variables
var header = document.querySelector(".header");
var score = document.querySelector("score");
var submitButton = document.getElementById("submitButton");

var questionsHeader = document.getElementByIdI("questionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var choice5 = document.getElementById("five");
var choice6 = document.getElementById("six");
var answerResponse = document.getElementById("answerResponse");

var finalScore = document.getElementById("finalScore");

//Countdown timer
const timeH = document.querySelector("h1");
let timeSecond = 90;

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function endTime() {
  timeH.innerHTML = "Out of time!";
}

//Starting page

//Multiple-choice questions - 6 total

//addeventListers for answers when clicked
