document.addEventListener("DOMContentLoaded", function() {
    const headerLanguage = document.querySelector('.header-language');
    const languageOptions = document.querySelector('.languageOptions');

    headerLanguage.addEventListener('mouseenter', function() {
        languageOptions.style.display = 'flex';
    });

    headerLanguage.addEventListener('mouseleave', function() {
        languageOptions.style.display = 'none';
    });
});

// ======nav two======
document.addEventListener("DOMContentLoaded", function() {
    const header__menu__dropdown = document.querySelector('.header__menu__dropdown');
    const pagesOptions = document.querySelector('.pagesOptions')
    pagesOptions.addEventListener('mouseenter', function() {
        header__menu__dropdown.style.display = 'flex';
    });

    pagesOptions.addEventListener('mouseleave', function() {
        header__menu__dropdown.style.display = 'none';
    });
});
// ============


  $(document).ready(function(){
    $(".categories__slider").owlCarousel({
      loop: true, // Loop through items
      margin: 10, // Margin between items
      nav: true, // Navigation buttons
      items: 4, // Number of items shown
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });
  });
  