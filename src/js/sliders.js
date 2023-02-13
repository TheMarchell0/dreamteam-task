import Swiper, { Navigation } from "swiper";

const _ = require("lodash");

Swiper.use([Navigation]);

const mainSlider = new Swiper(".js-main-slider", {
  loop: false,
  allowTouchMove: false,
  slidesPerGroup: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__navigation-next",
    prevEl: ".main-slider__navigation-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1439: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

let otherToursSlider;

window.addEventListener("resize", _.throttle(initToursSlider, 1000));

document.addEventListener("DOMContentLoaded", () => initToursSlider());

function initToursSlider() {
  if (
    (innerWidth <= 1024 && otherToursSlider) ||
    (innerWidth > 1024 && !otherToursSlider)
  ) {
    return;
  } else if (innerWidth <= 1024 && !otherToursSlider) {
    otherToursSlider = new Swiper(".js-other-tours-slider", {
      loop: false,
      spaceBetween: 24,
      slidesPerView: 2.1,
      allowTouchMove: false,

      // Navigation arrows
      navigation: {
        nextEl: ".other-tours__list-navigation-next",
        prevEl: ".other-tours__list-navigation-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 24,
        },
        767: {
          slidesPerView: 2.1,
        },
      },
    });
  } else if (innerWidth > 1024 && otherToursSlider) {
    otherToursSlider.destroy();
    otherToursSlider = undefined;
  }
}
