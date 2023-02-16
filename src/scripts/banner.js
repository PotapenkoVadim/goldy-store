import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const bannerSelectors = {
  slider: '#bannerSlider',
  prevButton: '#bannerSlider .banner__slider-prev',
  nextButton: '#bannerSlider .banner__slider-next',
  pagination: '#bannerSlider .swiper-pagination'
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
