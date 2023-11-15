function play(){
    let compChoice;
    let userName;
    let userChoice;
    let messageWin;
    let messageLose;
    let messageDraw;

    userName=document.getElementById("userName").value;
    messageWin="Congratulation "+userName+", you win!";
    messageLose=userName+", you lose";
    messageDraw="It's a draw";

    userChoice=document.getElementById("userChoice").value.toLowerCase();
    compChoice=(Math.floor(Math.random() * 10))%3+1;

    if (userChoice=="rock"){
        if (compChoice==1){
            document.getElementById("gameResult").innerHTML=messageDraw;
        }
        else if(compChoice==2){
            document.getElementById("gameResult").innerHTML=messageLose;
        }
        else{
            document.getElementById("gameResult").innerHTML=messageWin;
        }

    }
    else if (userChoice=="paper"){
        if (compChoice==1){
            document.getElementById("gameResult").innerHTML=messageWin;
        }
        else if(compChoice==2){
            document.getElementById("gameResult").innerHTML=messageDraw;
        }
        else{
            document.getElementById("gameResult").innerHTML=messageLose;
        }

    }
    else if (userChoice=="scissors"){
        if (compChoice==1){
            document.getElementById("gameResult").innerHTML=messageLose;
        }
        else if(compChoice==2){
            document.getElementById("gameResult").innerHTML=messageWin;
        }
        else{
            document.getElementById("gameResult").innerHTML=messageDraw;
        }

    }
    else{
        alert("Invalid input. Try again")
    }
    
}