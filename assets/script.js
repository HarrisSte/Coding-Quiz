//Variables for entire application
var viewHighScores = document.getElementById("viewHighScores");
var startQuizButton = document.getElementById("startQuizButton");

var questionsHeader = document.getElementById("questionsHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");

var finalScore = document.getElementById("finalScore");
var questionsPage = document.getElementById("questionsPage");
var questionButton = document.querySelector(".questionButton");

var challengePage = document.getElementById("challengePage");
var finalScorePage = document.getElementById("finalScorePage");
var highScorePage = document.getElementById("highScorePage");

var initialButton = document.getElementById("initialButton");
var initialInput = document.getElementById("initialInput");

var quizComplete = document.getElementById("quizComplete");
var allDoneButtons = document.getElementById("form-inline");

var timer = document.getElementById("timer");
var secondsLeft = 90;
var timerInterval;

//Multiple-choice questions - 6 total
var quizQuestions = [
  {
    question: "What is an example of a Boolean response?",
    one: "A sequence of text",
    correct: false,
    two: "True/false",
    correct: true,
    three: "use of numbers",
    correct: false,
    four: "An array with quotes",
    correct: false,
    correct: "True/false",
  },

  {
    question: "What is the purpose of HTML?",
    one: "Setting the structure of the application",
    correct: true,
    two: "It adds all the stlying and colors to the application",
    correct: false,
    three: "Nothing, it really just is a placeholder",
    correct: false,
    four: "It allows us to traverse the DOM",
    correct: false,
    correct: "Setting the structure of the application",
  },

  {
    question: "Where do you put your script.js file?",
    one: "At the beginning of the index.html file",
    correct: false,
    two: "In the middle of the style.css file",
    correct: false,
    three: "At the end of the index.html file",
    correct: true,
    four: "Nowhere, it connects automatically",
    correct: false,
    correct: "At the end of the index.html file",
  },

  {
    question: "JavaScript allows us to...?",
    one: "Setting the structure of the application",
    correct: true,
    two: "Add functionality to our web application",
    correct: true,
    three: "Move through the styling of our web application",
    correct: false,
    four: "All of the above",
    correct: false,
    correct: "Add functionality to our web application",
  },

  {
    question: "GitLab is a _______ repo where we can store our _______ code",
    one: "SSD/HDD",
    correct: false,
    two: "PC/cloud",
    correct: false,
    three: "remote/local",
    correct: true,
    four: "local/remote",
    correct: "remote/local",
  },

  {
    question: "Functions within JavaScript are...",
    one: "types of methods",
    correct: false,
    two: "a set of instructions on what we want the code to do",
    correct: true,
    three: "what allow us to .stringify",
    correct: false,
    four: "There is no such thing as functions in JavaScript",
    correct: false,
    correct: "a set of instructions on what we want the code to do",
  },
];

var startScore = 0;
var questionIndex = 0;

//Initial page when first starting - set attributes
function codeQuiz() {
  challengePage.style.display = "block";
  questionsPage.style.display = "none";
  finalScorePage.style.display = "none";
  highScorePage.style.display = "none";

  timer.textContent = "Time: " + secondsLeft;
}

function resetVariables() {
  startScore = 0;
  questionIndex = 0;
}

//starting the quiz to bring you to questions
function startQuiz() {
  challengePage.style.display = "none";
  questionsPage.style.display = "block";

  secondsLeft = 90;

  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

//Try to get questions to show up
function showQuestions() {
  var q = quizQuestions[questionIndex];

  questionsHeader.innerHTML = q.question;

  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);

  choice2.innerHTML = q.two;
  choice2.setAttribute("data-answer", q.two);

  choice3.innerHTML = q.three;
  choice3.setAttribute("data-answer", q.three);

  choice4.innerHTML = q.four;
  choice4.setAttribute("data-answer", q.four);
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
    clearInterval(timerInterval);
    showScore();
  } else {
    questionIndex++;
    showQuestions();
  }
}

//Move to end of the quiz: final/high-scores
function showScore() {
  questionsPage.style.display = "none";

  finalScore.textContent = "Your score is " + secondsLeft;
  finalScorePage.style.display = "block";
}

var highScoreArray = [];

function showHighScores(initials, score) {
  finalScorePage.style.display = "none";
  highScorePage.style.display = "block";

  var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];

  var localStorageArray = { score: secondsLeft, intials: getInitials };
  highScoreArray.push(localStorageArray);
  localStorage.setItem("highScore", JSON.stringify(highScoreArray));

  var highScore = (getInitials = ": " + secondsLeft);
}

//addeventListers for answers when clicked
startQuizButton.addEventListener("click", function () {
  startQuiz();
});

initialButton.addEventListener("click", function () {
  var initials = initialInput.value;
  var score = secondsLeft;
  showHighScores(initials, score);
});

resetHighScore.addEventListener("click", function () {
  localStorage.clear();
});

goBack.addEventListener("click", function () {
  $("#highScoreList").empty();
  $("#initialInput").val("");
  resetVariables();
  codeQuiz();
});

codeQuiz();
