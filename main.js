'use strict'
function showNav() {
    var element = document.getElementById("nav-items");
    element.classList.toggle("show-items");
  }



  


document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const slideCount = slides.length;

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].classList.add("active");
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});