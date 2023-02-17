import Swiper from 'swiper';

const saleProductSliderSelectors = {
  slider: '.card__poster[data-slider="productSlider"]',
  pagination: '.swiper-pagination'
};

export function initSaleProductSlider() {
  new Swiper(saleProductSliderSelectors.slider, {
    spaceBetween: 10,
    pagination: {
      el: `${saleProductSliderSelectors.slider} ${saleProductSliderSelectors.pagination}`,
      clickable: true,
    },
  });
}