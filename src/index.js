import './styles/global.scss';
import 'bootstrap';

import { runHeaderDropdown } from './scripts/header-dropdown';

document.addEventListener("DOMContentLoaded", function(){
  runHeaderDropdown();
});