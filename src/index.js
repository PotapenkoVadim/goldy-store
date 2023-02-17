import './styles/global.scss';
import './index.html';
import 'bootstrap';

import Swiper, { Navigation, Pagination } from 'swiper';
import { initHeaderDropdown } from './scripts/header-dropdown';
import { initBanner } from './scripts/banner';
import { initSaleTabs } from './scripts/tabs';
import { initSaleProductSlider } from './scripts/sale-product-slider';

document.addEventListener('DOMContentLoaded', function () {
  Swiper.use([Navigation, Pagination]);

  initHeaderDropdown();
  initBanner();
  initSaleTabs();
  initSaleProductSlider();
});
