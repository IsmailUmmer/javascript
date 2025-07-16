
let count= 0;

const increse = document.getElementById("incresebtn");
const decrese = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const text = document.getElementById("text");


increse.onclick = function(){
    count++;
 text.textContent = count;
 console.log(count);
}
decrese.onclick = function(){
    count--;
 text.textContent = count;
 console.log(count);
}
reset.onclick = function(){
    count = 0;
 text.textContent = count;
 console.log(count);
}