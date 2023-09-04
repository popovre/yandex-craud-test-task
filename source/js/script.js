import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const initSlider = () => {
  const swiper = new Swiper(".swiper",{
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".events__slider-right",
        prevEl: ".events__slider-left"
    },
    breakpoints: {
        650: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        450: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        375: {
            slidesPerView: 1,
        }
    }
  });
}

console.log(document.querySelector('main').offsetWidth)

