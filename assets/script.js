//Variables
var header = document.querySelector(".header");
var score = document.querySelector("score");
var submitButton = document.getElementById("submitButton");

var questionsHeader = document.getElementById("questionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var choice5 = document.getElementById("five");
var choice6 = document.getElementById("six");

var answerResponse = document.getElementById("answerResponse");
var quizQuestions = document.getElementById("quizQuestions");
var questionButton = document.querySelector(".questionButton");

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
var quizQuestions = [
  {
    questionHeader: "What is an example of a Boolean response?",
    choices: ["banana", "true/false", "London", "Random"],
    answer: 2,
  },

  {
    questionHeader: "What is an example of a fruit ?",
    choices: ["banana", "true/false", "London", "Random"],
    answer: 1,
  },
];

var startScore = 0;
var questionIndex = 0;

//Initial page when first starting - set attributes
function codeQuiz() {
    challengePage.style.display = 'block';
    header.style.display = 'block';
    quizQuestions.style.display = 'none';
    finalScore.style.display = 'none';
}
//addeventListers for answers when clicked
submitButton.addEventListener("click",function () {
    startQuiz();
    
})