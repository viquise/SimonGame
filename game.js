var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern= [];
gamePattern.push(randomChosenColour);
var userClickedPattern = [];


var chosenColor = $(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});

// Created a funcion to generate a random number from 0 to 3
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    randomNumber -= 1;
    return randomNumber
};
console.log(chosenColor);
console.log(gamePattern);

// Animating the Button
$("#"+randomChosenColour).delay(100).fadeOut().fadeIn('slow');


// Adding sounds to the Button
switch(randomChosenColour){
    case "red":
        var red = new Audio("./sounds/red.mp3");
        red.play();
    break;
    case "green":
        var green = new Audio("./sounds/green.mp3");
        green.play();
    break;
    case "blue":
        var blue = new Audio("./sounds/blue.mp3");
        blue.play();
    break;
    case "yellow":
        var yellow = new Audio("./sounds/yellow.mp3");
        yellow.play();
    break;
    default:
        var wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
    break;
}
