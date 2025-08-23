
const display = document.getElementById("display");

function appendToDisplay(btn){
    display.value += btn;
}

function calculate(){
    try{
   display.value = eval(display.value);
}
catch(error){
    display.value = "error"
}
}
function clearDisplay(){
    display.value = "";
}