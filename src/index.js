import './styles/global.scss';
import './index.html';
import 'bootstrap';

import { initHeaderDropdown } from './scripts/header-dropdown';
import { initBanner } from './scripts/banner';

document.addEventListener('DOMContentLoaded', function () {
  initHeaderDropdown();
  initBanner();
});