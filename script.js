const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  slidesPerView : 3,
  autoplay: {
    delay : 1500,
    stopOnLastSlide : false,
    disableOnInteraction : true
  },
  breakpoints: {
    320 : {
      slidesPerView: 2
    },
    480 : {
      slidesPerView: 2
    }
  }
});