var color=["blue","green","red","yellow"];
var userChosenColour=[];
var computerPattern=[];
var level=0;
var gameStarted=false;

$(document).keypress(function(level){
    if(!gameStarted){
        newSequence();
        gameStarted=true;
    }
})

$(".btn").click(function(){
   if (gameStarted){
    button_press=$(this).attr("id");
    gameSound(button_press);
    animatePress(button_press);
    userChosenColour.push(button_press)
    checkAnswer(userChosenColour.length-1)
   }

})

function checkAnswer(currentLevel){
    if (computerPattern[currentLevel]===userChosenColour[currentLevel]){
        if (computerPattern.length===userChosenColour.length){
            setTimeout(function(){
                newSequence();
            },1000)
        }
    }else{
        gameSound("wrong")

        gameOver();
        $("#level-title").text("Game Over, press any key to start");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },500)
       

    }
}

function animatePress(id_color){
    $("#"+id_color).addClass("pressed");
    setTimeout(function(){
        $("#"+id_color).removeClass("pressed")

    },100)
}




function newSequence(){
    level++;
    var comp_press=Math.floor(Math.random()*4);
    computerPattern.push(color[comp_press]);
    
    gameSound(color[comp_press]);
    $("#"+color[comp_press]).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#level-title").text("Level: "+level);
    userChosenColour=[];
    
}




function gameSound(sound){
    var audio=new Audio("./sounds/"+sound+".mp3");
    audio.play()
}

function gameOver(){
    level=0;
    computerPattern=[];
    userChosenColour=[];
    gameStarted=false;
}



