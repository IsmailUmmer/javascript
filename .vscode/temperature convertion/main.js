
const textbox = document.getElementById("textbox");
const toCelsius = document.getElementById("toCelsius");
const toFarenhiet = document.getElementById("toFarenhiet");
const result = document.getElementById("result");
let temp;

function convert(){
    if (toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "celsius"; 
    }
    else if(toFarenhiet.checked){
        temp = Number(textbox.value);
        temp = (temp*9/5)+32;
        result.textContent = `${temp} farenhiet`;
    }
    else{
      result.textContent = "please select a unit";
    }
    }