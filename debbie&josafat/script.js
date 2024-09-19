window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const image = document.querySelector('.parallax-image');

    // Adjust this factor to control how much slower the image scrolls (e.g., 0.5)
    const scrollFactor = 0.5;

    // Adjust the image position dynamically
    image.style.transform = `translate(-50%, calc(-50% + ${scrollY * scrollFactor}px))`;
  });