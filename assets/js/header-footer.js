// For scroll top
$(document).ready(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // Show button earlier
        $('.circle-container').addClass('active');
    } else {
        $('.circle-container').removeClass('active');
    }
  });

  // Scroll to the top when the button is clicked
  $('.circle-container').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 100); // Scroll to top in 300ms
  });
});


//for toggle button for mobile menu
const menuToggleButton = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.navbar-area .nav-left .main-menu');

// Event listener for the button click
menuToggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
});