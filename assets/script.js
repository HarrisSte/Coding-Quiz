//Variables
var header = document.querySelector(".mainHeader");
var score = document.querySelector("score");
var submitButton = document.getElementById("submitButton");

var questionsHeader = document.getElementById("questionsHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("answer");
var answerResponse = document.getElementById("answerResponse");

var finalScore = document.getElementById("finalScore");
var quizQuestions = document.getElementById("quizQuestions");
var questionButton = document.querySelector(".questionButton");

var challengePage = document.getElementById("challengePage");
var finalScore = document.getElementById("finalScorePage");
var highScoreButtons = document.getElementById("highScoreButtons");

var initialButton = document.getElementById("initialButton");
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");

var allDone = document.getElementById("quizComplete");
var allDoneButtons = document.getElementById("form-inline");

var timer = document.getElementById("timer");

//Starting page

//Multiple-choice questions - 6 total
//Try to show correct answers
var quizQuestions = [
  {
    questionsHeader: "What is an example of a Boolean response?",
    one: "banana", correct: false,
    two: "true/false", correct: true,
    three: "London", correct: false,
    four: "Paris", correct: false,
    correct: "true/false",
  },

  {
    questionsHeader: "What is the purpose of HTML?",
    one: "Setting the structure of the application", correct: true,
    two: "true/false", correct: false,
    three: "London", correct: false,
    four: "Paris", correct: false,
    correct: "Setting the structure of the application",
  },

  {
    questionsHeader: "What is an example of a fruit ?",
    one: "banana", correct: false,
    two: "true/false", correct: true,
    three: "London", correct: false,
    four: "Paris", correct: false,
    correct: "true/false",
  },

  {
    questionsHeader: "What is an example of a fruit ?",
    one: "banana", correct: false,
    two: "true/false", correct: true,
    three: "London", correct: false,
    four: "Paris", correct: false,
    correct: "true/false",
  },

  {
    questionsHeader: "What is an example of a fruit ?",
    one: "banana", correct: false,
    two: "true/false", correct: true,
    three: "London", correct: false,
    four: "Paris", correct: false,
    correct: "true/false",
  },

  {
    questionsHeader: "What is an example of a fruit ?",
    one: "banana", correct: false,
    two: "true/false", correct: true,
    three: "London", correct: false,
    four: "Paris", correct: false,
    correct: "true/false",
  },
];

var startScore = 0;
var questionIndex = 0;

//Initial page when first starting - set attributes
function codeQuiz() {
  challengePage.style.display = "block";
  mainHeader.style.display = "block";
  quizQuestions.style.display = "none";
  finalScore.style.display = "none";

  var startScore = 0;
  timer.textContent = "Time: " + startScore;
}

function resetVariables() {
  startScore = 0;
  questionIndex = 0;
}

//starting the quiz to bring you to questions
function startQuiz() {
  challengePage.style.display = "none";
  quizQuestions.style.display = "block";

  secondsLeft = 90;

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
      clearInterval(timerInterval);
      finalScore();
    }
  }, 1000);
}

//Try to get questions to show up
function showQuestions() {
  var q = quizQuestions[questionIndex];

  questionsHeader.innerHTML = q.questionsHeader;
  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);
  questionsHeader.innerHTML = q.questionsHeader;
  choice2.innerHTML = q.two;
  choice2.setAttribute("data-answer", q.two);
  questionsHeader.innerHTML = q.questionsHeader;
  choice3.innerHTML = q.three;
  choice3.setAttribute("data-answer", q.three);
  questionsHeader.innerHTML = q.questionsHeader;
  choice4.innerHTML = q.four;
  choice4.setAttribute("data-answer", q.four);
  questionsHeader.innerHTML = q.questionsHeader;
}

//EL when user clicks
showQuestions();
choice1.addEventListener("click", function (event) {
  checkAnswer(event);
});
choice2.addEventListener("click", function (event) {
  checkAnswer(event);
});
choice3.addEventListener("click", function (event) {
  checkAnswer(event);
});
choice4.addEventListener("click", function (event) {
  checkAnswer(event);
});

//Try to fix check answer
function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (quizQuestions[questionIndex].correct === answer) {
    correctAnswer = answer;
  }
  if (answer === correctAnswer) {
    answerResponse.textContent = "Correct!";
  } else {
    answerResponse.textContent = "Incorrect!";
    secondsLeft -= 10;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
  }
  if (quizQuestions.length === questionIndex + 1) {
    showFinalScore();
  }
  questionIndex++;
  showQuestions();
}

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

//addeventListers for answers when clicked
submitButton.addEventListener("click", function () {
  startQuiz();
});
