document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
  
    function showSlide(index) {
      const transformValue = -index * 100 + '%';
      slider.style.transform = 'translateX(' + transformValue + ')';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slider.children.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });