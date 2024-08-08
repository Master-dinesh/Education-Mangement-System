// JavaScript for toggling popup and community buttons
document.addEventListener("DOMContentLoaded", function() {
    const joinBtn = document.querySelector(".join-btn");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");
    const toggleBtn = document.querySelector(".toggle-btn");
    const communityButtons = document.querySelector(".community-buttons");
  
    joinBtn.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  
    toggleBtn.addEventListener("click", function() {
      communityButtons.classList.toggle("expanded");
      toggleBtn.classList.toggle("rotated");
    });
  });
  // This function is carousel Slider 
  document.getElementById('carouselToggle').addEventListener('click', function() {
    var carouselElement = document.querySelector('#Slider_images');
    var carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
    var toggleIcon = document.getElementById('toggleIcon');

    if (this.getAttribute('data-state') === 'playing') {
        carouselInstance.pause();
        this.setAttribute('data-state', 'paused');
        toggleIcon.src = '../img/Slider/play.png'; // Change to play icon
    } else {
        carouselInstance.cycle();
        this.setAttribute('data-state', 'playing');
        toggleIcon.src = '../img/Slider/pause.png'; // Change to pause icon
    }
});
