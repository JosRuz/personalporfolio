document.addEventListener("mousemove", function(event) {
    const text1 = document.getElementById('JOSUE');
    const text2 = document.getElementById('RUIZ');
  
    const bodyWidth = document.body.offsetWidth;
    const mouseX = event.clientX;
  
    const offset = 50; // Adjust this value for the parallax effect
  
    const text1Offset = (mouseX / bodyWidth * offset) - (offset / 2);
    const text2Offset = (mouseX / bodyWidth * -offset) + (offset / 2);
  
    text1.style.transform = `translateX(${text1Offset}%)`;
    text2.style.transform = `translateX(${text2Offset}%)`;
  });
  