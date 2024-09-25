window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const image = document.querySelector('.parallax-image');

    // Adjust this factor to control how much slower the image scrolls (e.g., 0.5)
    const scrollFactor = 0.5;

    // Adjust the image position dynamically
    image.style.transform = `translate(-50%, calc(-50% + ${scrollY * scrollFactor}px))`;
  });

// Set the wedding date
var weddingDate = new Date("March 22, 2025 18:00:00").getTime();

// Update the countdown every second
var countdownFunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = weddingDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "The Wedding Has Started!";
  }
}, 1000);


let currentSlide = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel img').length;

  // Ensure the slide index wraps around
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Calculate the offset for sliding
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');

}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);

let submitted = false;

function formSubmitHandler() {
  if (submitted) {
    document.getElementById("form-message").style.display = "block";
    document.getElementById("custom-form").style.display = "none";
  }
}

document.getElementById("custom-form").addEventListener("submit", formSubmitHandler);
