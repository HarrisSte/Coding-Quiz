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
var highScoreList = document.getElementById("highScoreList");

var initialButton = document.getElementById("initialButton");
var initialInput = document.getElementById("initialInput");

var timer = document.getElementById("timer");
var secondsLeft = 90;
var timerInterval;
var questionIndex = 0;

//Multiple-choice questions - 6 total
var quizQuestions = [
  {
    question: "What is an example of a Boolean response?",
    one: "A sequence of text",
    two: "True/false",
    three: "use of numbers",
    four: "An array with quotes",
    correct: "True/false",
  },
  {
    question: "What is the purpose of HTML?",
    one: "Setting the structure of the application",
    two: "It adds all the stlying and colors to the application",
    three: "Nothing, it really just is a placeholder",
    four: "It allows us to traverse the DOM",
    correct: "Setting the structure of the application",
  },
  {
    question: "Where do you put your script.js file?",
    one: "At the beginning of the index.html file",
    two: "In the middle of the style.css file",
    three: "At the end of the index.html file",
    four: "Nowhere, it connects automatically",
    correct: "At the end of the index.html file",
  },
  {
    question: "JavaScript allows us to...?",
    one: "Setting the structure of the application",
    two: "Add functionality to our web application",
    three: "Move through the styling of our web application",
    four: "All of the above",
    correct: "Add functionality to our web application",
  },
  {
    question: "GitLab is a _______ repo where we can store our _______ code",
    one: "SSD/HDD",
    two: "PC/cloud",
    three: "remote/local",
    four: "local/remote",
    correct: "remote/local",
  },
  {
    question: "Functions within JavaScript are...",
    one: "types of methods",
    two: "a set of instructions on what we want the code to do",
    three: "what allow us to .stringify",
    four: "There is no such thing as functions in JavaScript",
    correct: "a set of instructions on what we want the code to do",
  },
];

//Initial page when first starting: hides/shows 'pages'
function codeQuiz() {
  challengePage.style.display = "block";
  questionsPage.style.display = "none";
  finalScorePage.style.display = "none";
  highScorePage.style.display = "none";

  timer.textContent = "Time: " + secondsLeft;
}

//Resets quiz to starting state
function resetVariables() {
  questionIndex = 0;
  secondsLeft = 90;
  highScoreList.innerHTML = "";
  initialInput.value = "";
}

//Starting the quiz to bring you to questions: instructions are hidden & timer begins to count down
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

  showQuestions();
}

//eventListeners to lister for when user clicks on an answer choice
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

//
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

//For loop to check answer selection: if incorrect, will deduct 10 seconds from timer
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

//Moves to end of quiz where score is shown, user enters initials, and highscores are displayed
function showScore() {
  questionsPage.style.display = "none";

  finalScore.textContent = "Your score is " + secondsLeft;
  finalScorePage.style.display = "block";
}

function showHighScores(initials, score) {
  finalScorePage.style.display = "none";
  highScorePage.style.display = "block";

  var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
  var currentScore = {
    initials: initials,
    score: score,
  };

  highScoreArray.push(currentScore);
  localStorage.setItem("highScore", JSON.stringify(highScoreArray));

  for (var index = 0; index < highScoreArray.length; index++) {
    var userScore = highScoreArray[index];

    var userScoreElement = document.createElement("li");
    userScoreElement.textContent =
      "Initials " + userScore.initials + " : Score " + userScore.score;
    highScoreList.appendChild(userScoreElement);
  }
}

//eventListeners for entire application: startign quiz, initials, highscores, & go back btn
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
  highScoreList.innerHTML = "";
});

goBack.addEventListener("click", function () {
  resetVariables();
  codeQuiz();
});

//Starts application at the beginning and quiz is reset
codeQuiz();
