var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// function to determine if the game has started
$(document).on('keydown', function(){
    if (!started){
        nextSequence();
        $("#level-title").text("Level "+ level);
        started = true;
    } 
});

// Getting users color
$(".btn").on('click', function(){
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

//Function to process the logic of the game, To check if the button clicked, matches with the random button selected.
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success!");

        // condition to check if user click in array is the same as gamePattern
        if(userClickedPattern.length === gamePattern.length){
            // call the nextsequence after 10000milliseconds
            setTimeout(function(){
                nextSequence();
            }, 1000)
        }
    }
    else{
        var wrongAnswerSound = new Audio("./sounds/wrong.mp3");
        wrongAnswerSound.play();
        $("body").addClass("game-over");
    }

}


//Button colours being added to the array
function nextSequence(){
    userClickedPattern= [];
    level++;
    $("#level-title").text("Level "+ level);


    var randomNumber = (Math.floor(Math.random()*4) + 1) - 1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).delay(100).fadeOut().fadeIn("slow");
    playSound(randomChosenColour);


}

// Fuction To add animation once a button has been clicked
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    }, 300)
}

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

