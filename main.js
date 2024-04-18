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




function toggleReadMore(button) {
  var cardContent = button.previousElementSibling;
  var readMoreText = cardContent.querySelector(".read-more");

  if (readMoreText.style.display === "none" || readMoreText.style.display === "") {
    readMoreText.style.display = "inline";
    button.textContent = "Read Less";
    cardContent.style.height = "auto"; // Expand to fit content
  } else {
    readMoreText.style.display = "none";
    button.textContent = "Read More";
    cardContent.style.height = "100px"; // Collapse to initial height
  }
}

// Hide extra content initially
document.querySelectorAll(".read-more").forEach(function(element) {
  element.style.display = "none";
});



 // Carousel functionality
 document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.getElementById("carousel-inner");
  const pagination = document.getElementById("pagination");

  const totalSlides = carouselInner.children.length;
  let currentIndex = 0;

  // Function to navigate to a specific slide
  function goToSlide(index) {
    currentIndex = index;
    const offset = -index * 520; // Assuming each slide is 520px wide
    carouselInner.style.transform = `translateX(${offset}px)`;

    // Update pagination buttons
    const paginationButtons = Array.from(
      pagination.querySelectorAll("button")
    );
    paginationButtons.forEach((button, i) => {
      if (i === index) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Create pagination buttons
  for (let i = 0; i < totalSlides; i++) {
    const button = document.createElement("button");
    button.textContent = i + 1;
    button.addEventListener("click", () => goToSlide(i));
    pagination.appendChild(button);
  }

  // Go to the first slide initially
  goToSlide(0);
});