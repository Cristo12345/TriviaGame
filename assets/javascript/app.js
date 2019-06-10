
// time remaining in countdown, when it hits 0, end the quiz
var timeLeft = 15;

//variables to store number correct answers
var correctAnswers = 0;



// function to perform end game results
function endGame() {
    
    //iterate through our questions and grab each form with the name of choice1, choice2, choice3
    for (let i = 1; i < 4; i++) {
        // using vanilla JS because I had trouble grabbing the inputs' names with JQuery
        var radios = document.getElementsByName("choice"+i);
        console.log("radios", radios);

        // for loop to go through each array and check the user input as well as the input with the "correct" value
        for (let j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value === "correct" && radio.checked) {
                correctAnswers++;
            }
            
        }
    }





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



