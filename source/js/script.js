const DESKTOPWIDTH = 1440;

const main = document.querySelector("main");

const initSwiper = () => {
  const swiper = new Swiper(".swiper", {
    init: true,
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".events__slider-right",
      prevEl: ".events__slider-left",
    },
    breakpoints: {
      950: {
        slidesPerView: 2,
        spaceBetween: 200,
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 200,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },

    on: {
      resize: function () {
        if (main.offsetWidth >= DESKTOPWIDTH) {
          swiper.destroy(false, true);
        }
      },
    },
  });
};

if (!window.matchMedia(`(min-width: ${DESKTOPWIDTH}px)`).matches) {
  initSwiper();
}

window.addEventListener("resize", function () {
  if (!window.matchMedia(`(min-width: ${DESKTOPWIDTH}px)`).matches) {
    initSwiper();
  }
});
