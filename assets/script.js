//Variables
var header = document.querySelector(".main-header");
var score = document.querySelector("score");
var submitButton = document.getElementById("submitButton");

var questionsHeader = document.getElementById("questionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var choice5 = document.getElementById("five");
var choice6 = document.getElementById("six");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");

var finalScore = document.getElementById("finalScore");
var quizQuestions = document.getElementById("quizQuestions");
var questionButton = document.querySelector(".questionButton");

var challengePage = document.getElementById("challengePage");
var finalScore = document.getElementById("finalScorePage");

var timer = document.getElementById("timer");

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

  {
    questionHeader: "What is an example of a fruit ?",
    choices: ["banana", "true/false", "London", "Random"],
    answer: 1,
  },

  {
    questionHeader: "What is an example of a fruit ?",
    choices: ["banana", "true/false", "London", "Random"],
    answer: 1,
  },

  {
    questionHeader: "What is an example of a fruit ?",
    choices: ["banana", "true/false", "London", "Random"],
    answer: 1,
  },

  {
    questionHeader: "What is an example of a fruit ?",
    choices: ["banana", "true/false", "London", "Random"],
    answer: 1,
  },
];

//Try to get questions to show up
function showQuestions() {
  var q = quizQuestions[questionIndex];
  questionsHeader.innerHTML = q = quizQuestions;
  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);
}

//EL when user clicks
showQuestions();
choice1.addEventListener("click", function (event) {
  checkAnswer(event);
});

//Countdown timer
// const timeH = document.querySelector("h1");
// let timeSecond = 90;

// displayTime(timeSecond);

// const countDown = setInterval(() => {
//   timeSecond--;
//   displayTime(timeSecond);
//   if (timeSecond <= 0 || timeSecond < 1) {
//     endTime();
//     clearInterval(countDown);
//   }
// }, 1000);

// function displayTime(second) {
//   const min = Math.floor(second / 60);
//   const sec = Math.floor(second % 60);
//   timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
// }

// function endTime() {
//   timeH.innerHTML = "Out of time!";
// }

var startScore = 0;
var questionIndex = 0;

//Initial page when first starting - set attributes
function codeQuiz() {
  challengePage.style.display = "block";
  header.style.display = "block";
  quizQuestions.style.display = "none";
  finalScore.style.display = "none";

  var startScore = 0;
  timer.textContent = "Time: " + startScore;
}
//starting the quiz to bring you to questions
function startQuiz() {
  challengePage.style.display = "none";
  quizQuestions.style.display = "none";

  secondsLeft = 90;

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}


//addeventListers for answers when clicked
submitButton.addEventListener("click", function () {
  startQuiz();
});
