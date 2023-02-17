import Swiper from 'swiper';

const bannerSelectors = {
  slider: '#bannerSlider',
  prevButton: '#bannerSlider .slider-prev',
  nextButton: '#bannerSlider .slider-next',
  pagination: '#bannerSlider .swiper-pagination',
};

export function initBanner() {
  new Swiper(bannerSelectors.slider, {
    spaceBetween: 10,
    navigation: {
      nextEl: bannerSelectors.nextButton,
      prevEl: bannerSelectors.prevButton,
    },
    pagination: {
      el: bannerSelectors.pagination,
      clickable: true,
    },
  });
}
