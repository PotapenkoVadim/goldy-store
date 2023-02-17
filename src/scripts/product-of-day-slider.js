import Swiper from 'swiper';

const productSliderSelectors = {
  slider: '#productOfDay',
  productSliders: '.product__poster[data-slider="product"]',
  prevButton: '.product__slider-button-prev',
  nextButton: '.product__slider-button-next'
};

export function initProductOfDaySlider() {
  new Swiper(productSliderSelectors.slider, {
    spaceBetween: 10,
    navigation: {
      nextEl: productSliderSelectors.nextButton,
      prevEl: productSliderSelectors.prevButton,
    },
  });

  new Swiper(productSliderSelectors.sliders, {
    spaceBetween: 10,
    navigation: {
      nextEl: '.product__button-next',
      prevEl: '.product__button-prev',
    },
  });
}