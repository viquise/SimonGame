var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = []
var userClickedPattern = [];
var started = false;
var level = 0;


function nextSequence(){
    var randomNumber = (Math.floor(Math.random()*4) + 1) - 1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).delay(100).fadeOut().fadeIn("slow");
    playSound(randomChosenColour);
    if (started == true){
        $("#level-title").text("Level "+ level);
    }

}

$(".btn").on('click', function(){
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

});

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    }, 300)
}


// nextSequence();
$(document).on('keyup', function(){
    started = true;
    if (started){
        nextSequence();
        started = false;
    }
});

// while (started==true) {
//     nextSequence();
// }

