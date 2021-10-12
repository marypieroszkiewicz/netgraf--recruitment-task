document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------- */
  /* ----- TOGGLE HEADER MENU ----- */
  /* ---------------------------------------------------- */

  const btn = document.querySelector('#btnToggle');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('menu--show');
    this.classList.toggle('btn-toggle--toggled');
  });


  /* ---------------------------------------------------- */
  /* ----- TOGGLE SEARCH FORM ----- */
  /* ---------------------------------------------------- */

  const formToggle = document.querySelector('.menu__link-right--loupe');
  formToggle.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.search').classList.toggle('search--open');
  });


  /* ---------------------------------------------------- */
  /* ----- SLIDER ----- */
  /* ---------------------------------------------------- */

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   hide: true,
    // },
  });

})