
let radius;
const PI = 3.14159;


document.getElementById("btn").onclick = function() {
   radius = document.getElementById("text").value;
   circumfrence = 2 * PI * radius;
    document.getElementById("result").textContent = (`radius is ${circumfrence}`)
}