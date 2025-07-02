// change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Show / Hide faq Answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // Change Icon

    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }

  });
});

// Swiper Slide

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // When window width is >= 600px
  breakpoints: {
    600: {
      slidesPerView: 2
    }
  }
});

// Navbar Show / Hide Menu

const menu = document.querySelector('.nav__menu');
const openMenu = document.querySelector('#open-menu-btn');
const closeMenu = document.querySelector('#close-menu-btn');

openMenu.addEventListener('click', () => {
  menu.style.display = 'flex' ;
  closeMenu.style.display = 'inline-block';
  openMenu.style.display = 'none';
});

// Close nav menu

const closeNav = () => {
  menu.style.display = 'none';
  closeMenu.style.display = 'none';
  openMenu.style.display = 'inline-block';
};

closeMenu.addEventListener('click', closeNav);
