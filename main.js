const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,

  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },


  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    paginationBulletMessage: '{{index}}',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // slidesPerView: 2,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      // spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,

      // spaceBetween: 400
    },

    1240: {
      slidesPerView: 2,
    }
  }

});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.nav__burger-menu-button').addEventListener('click', function () {
    document.querySelector('.nav__burger-menu').classList.toggle('nav__burger-menu-active')
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.nav__button-burger').addEventListener('click', function () {
    document.querySelector('.nav__burger-menu').classList.toggle('nav__burger-menu-active')
  })
})
