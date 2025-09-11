
const box = document.getElementById("box");

x = 0;
y = 0;
const movement = 10;

document.addEventListener("keydown", event => { 
    if(event.key.startsWith("Arrow")){
        console.log(event.key);
     switch(event.key){
        
        case "ArrowUp":
            y -= movement;
            break;
        case "ArrowDown":
            y += movement;
            break;
        case "ArrowLeft":
            x -= movement;
            break;
        case "ArrowRight":
            x += movement;
            break;
     }
      box.style.top = `${y}px`;
      
      box.style.left = `${x}px`;
    
}
})


