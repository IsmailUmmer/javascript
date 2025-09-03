

const box = document.getElementById("box");
 
box.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
    box.textContent = "ouch 😒";
})
box.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "dont click😜"
})
box.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "click me 😊"
})