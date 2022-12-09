var answer;
var tries;
var attempsOutput;
var winMessage;
var itIsSmall;
var itIsBigger;
// Seize 
var lostMessage = "Game over";
var tentatives = document.getElementById("tentatives");
var message = document.getElementById("message")

answer = Math.floor(Math.random() * 50+1);
tries =10;
function writeattempts () {
    tentatives.innerHTML = tries;
}


function onSubmit (){
    --tries;
    attempsOutput = 10 - tries;

    if(tries > 0){
        var userInput = document.getElementById("deviner-input").value;

        if(isNaN(userInput) || userInput== undefined){
            alert("Please Enter a Number!")
        } else {
            isCorrect(userInput)
        }
        userInput.value = ""
    } else {
        message.innerHTML = lostMessage
        tentatives.innerHTML = 0;
    }
}

function isCorrect(userInput) {
        
     itIsSmall = "My number is lees than" + " " + userInput + " , try again!"
     itIsBigger = "My number is greater than" + " " + userInput + " , try again!"
        if (userInput == answer){
            if(tries >= 8){
                winMessage = 'Bravo! !!!'
            } else {
                winMessage = "Congratulations, you won after " + attempsOutput + " " + "tries" ;
            }
            message.innerHTML = winMessage

        } else if (userInput > answer){
            message.innerHTML = itIsSmall
            writeattempts() 

        } else if (userInput < answer){
            message.innerHTML = itIsBigger
            writeattempts() 

        } 

}
