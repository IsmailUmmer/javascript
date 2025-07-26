let roll = document.getElementById("roll");
let full = document.getElementsByClassName("black");
let dice = document.getElementById("dice");

 
let randomNumber;
let max = 6;
let min = 1;
let rol1 = document.getElementById("rol1");

roll.onclick = function(){
    for(let i = 0; i < full.length; i++){
        full[i].style.display = "none";
    }
    randomNumber = Math.floor ((Math.random() * max) + min);
    document.getElementById("rtext").textContent = randomNumber;
    switch (randomNumber)  {
      case 1:
       rol1.style.display = "block";
       break;

      case 2:
        rol1.style.display = "block";
        rol2.style.display = "block";
        break;

       case 3 :
        for(let i = 0; i < 3; i++){
            full[i].style.display = "block";
        }
       break;

       case 4:
        for(let i = 0; i < 4; i++){
          full[i].style.display = "block";
      }
       break;

       case 5:
        for(let i = 0; i < 5; i++){
          full[i].style.display = "block";
       }
       break;

       case 6:
        for(let i = 0; i <= 6; i++){
          full[i].style.display = "block";
       }
      
       default:
        for(let i = 0; i < 6; i++){
          full[i].style.display = "none";
       }
      }
    }
    // roll.onclick == dice.onclick;
    dice.onclick = roll.onclick;