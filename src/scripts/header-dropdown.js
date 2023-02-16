const CITIES = ['Санкт-Петербург', 'Москва', 'Нижний Новгород', 'Ростов-на-Дону'];
const headerDropdownSelectors = {
  item: '#headerDropdown .dropdown-item',
  itemActive: 'dropdown-item_active',
  targetText: '#headerDropdown .dropdown__target-text'
};

export function runHeaderDropdown() {
  const optionsHeaderDropdown = document.querySelectorAll(headerDropdownSelectors.item);
  const activeCityNode = document.querySelector(headerDropdownSelectors.targetText);

  function setActiveCity(index = 0) {
    [...optionsHeaderDropdown].forEach(item => {
      item.classList.remove(headerDropdownSelectors.itemActive);

      if (Number(index) === Number(item.dataset.value)) {
        item.classList.add(headerDropdownSelectors.itemActive);
      }
    });

    activeCityNode.innerHTML = CITIES[index];
  }

  setActiveCity();

  [...optionsHeaderDropdown].forEach(item => item.addEventListener('click', function() {
    setActiveCity(this.dataset.value);
  }));
}