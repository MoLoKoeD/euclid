let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click',

function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function (el) {

  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  });
});


let loupeNomain = document.querySelector('.header__btn-nomain');
let search = document.querySelector('.header__search');
let loupeMain = document.querySelector('.loupe');

loupeNomain.addEventListener('click',

function () {
  loupeNomain.classList.toggle('header__btn-nomain--active');
  search.classList.toggle('header__search--active');

});

loupeMain.addEventListener('click',

function () {
  loupeNomain.classList.remove('header__btn-nomain--active');
  search.classList.remove('header__search--active');

});


let swiper = new Swiper('.swiper', {
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  slidesPerView: 1,
  spaceBetween: 75,

  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },

  loop: true,

  });

let tabsBtn = document.querySelectorAll('.work__button');
let tabsItem = document.querySelectorAll('.work__content');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('work__button--active')
    });
    e.currentTarget.classList.add('work__button--active');

    tabsItem.forEach(function(element) {
      element.classList.remove('work__content--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active');
  });
});


