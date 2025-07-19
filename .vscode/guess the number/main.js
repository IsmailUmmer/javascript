let min = 1;
let max = 100;
let  random = Math.floor(Math.random() * (max - min+1)+ min);
console.log(random);

running = true;
let chance = 0; 

while(running){
    let guess = window.prompt(`guess a number between ${min} and ${max}`);
     guess = Number(guess);
    
      if (isNaN(guess)){
        window.alert("enter a number");
      }
      else if(guess < random){
        window.alert("too low");
        chance++;

      }
      else if(guess > random){
        window.alert("too high");
        chance++;
        
      }
      else{
        window.alert(`you guessed the right number in ${chance} chances`)
        running = false
      }
      
    
}
