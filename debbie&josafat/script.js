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
