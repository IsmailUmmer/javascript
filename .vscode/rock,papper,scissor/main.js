const result = document.getElementById("result"); 
const playerScoredisp = document.getElementById("playerScoredisp");
const computerScoredisp = document.getElementById("computerScoredisp");
const playerchoice= document.getElementById("playerchoice");
const computerchoice= document.getElementById("computerchoice");

let playerscore = 0;
let computerscore = 0;



function play(playerselect){
const game = ['rock','papper','scissor'];
const computerselect = game[Math.floor(Math.random()*3)];
console.log(computerselect);
    if(computerselect === playerselect){
       result.textContent = "That is a Tie";
    }
    else{
        switch (playerselect){
            case 'rock':
                computerselect == "scissor"? result.textContent ="you loose": result.textContent ="you win";
                break;
               
            case 'papper':
                computerselect == "scissor"? result.textContent ="you loose": result.textContent ="you win";
                break; 
            case 'scissor':
                computerselect == "rock"? result.textContent ="you loose": result.textContent ="you win";
                break;     
                
        }
     

    }
    
   playerchoice.textContent = `Player: ${playerselect}`
   computerchoice.textContent = `Computer : ${computerselect}`
 
   
    if(result.textContent === "you win"){
        result.classList.add('greentext');
        playerscore++;
       playerScoredisp.textContent = playerscore;
       playerScoredisp.classList.add('greentext');
     }
     else if(result.textContent === "you loose"){
        result.classList.add('redtext');  
        computerscore++;
        computerScoredisp.textContent = computerscore;
     }
     else{
           result.classList.remove('greentext', 'redtext');
     }
}
