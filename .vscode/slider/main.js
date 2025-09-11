const slides = document.querySelectorAll(".images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");    
let slideIndex = 0;
let interalId = null;
console.log(slides)
document.addEventListener("DOMContentLoaded", initiliseSlider);

function initiliseSlider(){
   slides[slideIndex].classList.add("displayslide");
   interalId =setInterval(nextslide, 3000);
}
function showslide(index){
    if(index>= slides.length){
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length-1;
    }
  slides.forEach(slides => slides.classList.remove("displayslide"));
  slides[slideIndex].classList.add("displayslide");
}
slides[slideIndex].classList.add("displayslide");
function prevslide(){

}
function nextslide(){
   slideIndex++;
   showslide(slideIndex);
}

