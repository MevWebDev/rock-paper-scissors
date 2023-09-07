let yourScore = 0;
let opponentScore = 0;
const text = "Who will win?";

function rock(){
    let choice = 1;
    console.log(choice);
    let opponent = getRandom(1,3)
    console.log(opponent)
    if(opponent === 1){
        console.log(yourScore);
        console.log(opponentScore)
        
    }
    else if (opponent === 2){
        
        opponentScore += 1;
        console.log(yourScore);
        console.log(opponentScore)
    }
    else {
        
        yourScore += 1;
        console.log(yourScore);
        console.log(opponentScore)
    }
    score();
    checkScore();
    
    

}
function paper(){
    let choice = 2;
    console.log(choice);
    let opponent = getRandom(1,3)
    console.log(opponent)
    if(opponent === 1){
        yourScore += 1;
        console.log(yourScore);
        console.log(opponentScore)
        
    }
    else if (opponent === 2){
        
        
        console.log(yourScore);
        console.log(opponentScore)
    }
    else {
        
        opponentScore += 1;
        console.log(yourScore);
        console.log(opponentScore)
    }
    score();
    checkScore();
}
function scissors(){
    let choice = 3;
    console.log(choice);
    let opponent = getRandom(1,3)
    console.log(opponent)
    if(opponent === 1){
        
        opponentScore += 1;
        console.log(yourScore);
        console.log(opponentScore)
        
    }
    else if (opponent === 2){
        
        yourScore += 1;
        console.log(yourScore);
        console.log(opponentScore)
    }
    else {
        console.log(yourScore);
        console.log(opponentScore)
    }
    score();
    checkScore();
}
function getRandom(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)

}



function checkScore(){
    if (yourScore === 5){
        
        
        document.getElementById("result").innerHTML = "You won";
        document.getElementById("result").style.color = "green";
        startGame();
        
    }
    else if(opponentScore === 5){
        
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "You lost";
        startGame();       
    }
    else{
        document.getElementById("result").innerHTML = "";
    }
   
   
   
}
function score(){
    
    let yourScoreString = yourScore.toString();
    let opponentScoreString = opponentScore.toString()
    document.getElementById("yourScore").innerHTML = yourScoreString;
    document.getElementById("opponentScore").innerHTML = opponentScoreString;
}
function startGame(){
    
    document.getElementById("resultTitle").innerHTML = text;
    
    yourScore = 0;
    opponentScore = 0;
    score();

}





