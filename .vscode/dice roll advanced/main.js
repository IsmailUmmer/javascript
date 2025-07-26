




function roll(){
    noOfRoll=document.getElementById("noOfRoll").value;
    resultDice= document.getElementById("resultDice");
     
const values = [];
const images = [];

    for(i =0 ;i< noOfRoll;i++){
        const random = Math.floor(Math.random()*6) +1 ;
       values.push(random);

    }
    
};