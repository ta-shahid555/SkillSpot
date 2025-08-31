// for carousel section
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // optional: remove when out of view
      }
    });
  }, {
    threshold: 0.5 // how much visible to trigger
  });

  document.querySelectorAll('.animate-on-visible').forEach(el => {
    observer.observe(el);
  });
});



// for course slider 
document.addEventListener('DOMContentLoaded', function () {
    var auctionSlider = new Swiper('.course-slider', {
      slidesPerView: 3, 
      spaceBetween: 25,
      loop: true,
      navigation: {
        nextEl: '.course-slider-next',
        prevEl: '.course-slider-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 1000,
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
});



// for enrollment and stats section 
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const increment = target / 200;

      const update = () => {
        const current = +counter.innerText.replace(/[+,]/g, '');
        if (current < target) {
          counter.innerText = Math.ceil(current + increment).toLocaleString() + '+';
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toLocaleString() + "+";
        }
      };

      update();
      observer.unobserve(counter); // Run once
    }
  });
}, {
  threshold: 0.5,
});

document.querySelectorAll('.count').forEach(el => observer.observe(el));



// for testimonial slider
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonial-swiper", {
    loop: true,
    loopedSlides: 6, // 👈 Number of original slides (not clones)
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

});



// for logo section
document.addEventListener("DOMContentLoaded", function () {
  const marqueeWrapper = document.querySelector(".js-marquee-wrapper");
  let scrollAmount = 0;

  function animateMarquee() {
    scrollAmount -= 1;
    marqueeWrapper.style.transform = `translateX(${scrollAmount}px)`;

    // Reset when scrolled full width
    if (Math.abs(scrollAmount) >= marqueeWrapper.scrollWidth / 2) {
      scrollAmount = 0;
    }

    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();
});

