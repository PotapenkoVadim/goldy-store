import './styles/global.scss';
import './index.html';
import * as bootstrap from 'bootstrap';

import Swiper, { Navigation, Pagination } from 'swiper';
import { initHeaderDropdown } from './scripts/header-dropdown';
import { initBanner } from './scripts/banner';
import { initSaleTabs } from './scripts/tabs';
import { initSaleProductSlider } from './scripts/sale-product-slider';
import { initProductOfDaySlider } from './scripts/product-of-day-slider';

document.addEventListener('DOMContentLoaded', function () {
  Swiper.use([Navigation, Pagination]);

  initHeaderDropdown();
  initBanner();
  initSaleTabs();
  initSaleProductSlider();
  initProductOfDaySlider();

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
