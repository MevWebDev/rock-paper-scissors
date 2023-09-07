let yourScore = 0;
let opponentScore = 0;
const text = "Who will win?";

function rock(){
    let choice = 1;
    
    let opponent = getRandom(1,3)
    
    if(opponent === 1){
        
        
        
    }
    else if (opponent === 2){
        
        opponentScore += 1;
        
        
    }
    else {
        
        yourScore += 1;
        
        
    }
    
    picks(choice,opponent);
    score();
    checkScore();
    

}
function paper(){
    let choice = 2;
    
    let opponent = getRandom(1,3)
    
    if(opponent === 1){
        yourScore += 1;
        
        
        
    }
    else if (opponent === 2){
        
        
        
        
    }
    else {
        
        opponentScore += 1;
        
        
    }
    picks(choice,opponent);
    score();
    checkScore();
}
function scissors(){
    let choice = 3;
    
    let opponent = getRandom(1,3)
    
    if(opponent === 1){
        
        opponentScore += 1;
        
        
        
    }
    else if (opponent === 2){
        
        yourScore += 1;
        
        
    }
    else {
        
        
    }
    picks(choice,opponent);
    score();
    checkScore();
}
function getRandom(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)

}



function checkScore(){
    if (yourScore === 5){
        
        
        document.getElementById("result").innerHTML = "You won :D";
        startGame();
        
    }
    else if(opponentScore === 5){
        
        
        document.getElementById("result").innerHTML = " You lost :(";
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
    
    
    yourScore = 0;
    opponentScore = 0;
    document.getElementById("yourPick").innerHTML = "?"
    document.getElementById("enemyPick").innerHTML = "?";
    score();

}
function picks(choice,opponent){
    if(choice === 1){
        document.getElementById("yourPick").innerHTML = "✊";
    }
    else if (choice === 2)
    {
        document.getElementById("yourPick").innerHTML = "🖐";
    }
    else {
        document.getElementById("yourPick").innerHTML = "✌️";
    }
    if (opponent === 1){
        document.getElementById("enemyPick").innerHTML = "✊";
    }
    else if (opponent === 2){
        document.getElementById("enemyPick").innerHTML = "🖐";
    }
    else {
        
        document.getElementById("enemyPick").innerHTML = "✌️";
    }
}





