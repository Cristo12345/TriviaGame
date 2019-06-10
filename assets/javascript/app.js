
// time remaining in countdown, when it hits 0, end the quiz
var timeLeft = 15;

//variables to store number correct answers
var correctAnswers = 0;



// function to perform end game results
function endGame() {
    $("#questions").empty();
    $("#questions").append("Correct Answers: " + correctAnswers);
    $("#questions").append("<br>");
    $("#questions").append("Incorrect Answers: " + (3 - correctAnswers));
}

var intervalID = setInterval(decrement, 1000);

// function to decrement time left and update the display
function decrement() {
    timeLeft--;
    $("#timeRemaining").html("Time Remaining: "+ timeLeft);
    if (timeLeft == 0) {
        clearInterval(intervalID);
        endGame();
    }
}

// timer for game 
// window.setTimeout(endGame, 15000);

