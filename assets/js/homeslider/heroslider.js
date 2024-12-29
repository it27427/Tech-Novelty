var heroSlider = new Swiper('.heroSlider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: false,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      // slidesPerView: 3
      slidesPerView: 'auto'
    }
  }
});
