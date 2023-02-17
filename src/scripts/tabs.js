const tabsSelectors = {
  link: '#sale .tabs__link',
  linkActive: 'tabs__link_active',
  content: '#sale .tabs__content',
  prev: '#sale .sale__slider-button-prev',
  next: '#sale .sale__slider-button-next',
  disabled: 'swiper-button-disabled'
};

const TYPES = ['rings', 'earrings', 'bracelets', 'watch'];

export function initSaleTabs() {
  const tabLinks = document.querySelectorAll(tabsSelectors.link);
  const tabContent = document.querySelectorAll(tabsSelectors.content);
  const prevButton = document.querySelector(tabsSelectors.prev);
  const nextButton = document.querySelector(tabsSelectors.next);

  let index = 0;
  const tabsLength = tabLinks.length;

  function openTabContent(type = 'rings') {
    index = TYPES.indexOf(type);

    for (let i = 0; i < tabsLength; i++) {
      tabContent[i].style.display = 'none';
      tabLinks[i].className = tabLinks[i].className.replace(` ${tabsSelectors.linkActive}`, '');
      
      if (tabLinks[i].dataset.type === type) {
        tabContent[i].style.display = 'block';
        tabLinks[i].className += ` ${tabsSelectors.linkActive}`;
      }
    }

    prevButton.className = prevButton.className.replace(` ${tabsSelectors.disabled}`, '');
    nextButton.className = nextButton.className.replace(` ${tabsSelectors.disabled}`, '');

    if (type === 'rings') prevButton.className += ` ${tabsSelectors.disabled}`;
    if (type === 'watch') nextButton.className += ` ${tabsSelectors.disabled}`;
  }

  openTabContent();

  [...tabLinks].forEach(item => item.addEventListener('click', function() {
    openTabContent(this.dataset.type);
  }));

  prevButton.addEventListener('click', () => {
    if (index > 0) index -= 1;

    openTabContent(TYPES[index]);
  });

  nextButton.addEventListener('click', () => {
    if (index < tabsLength -1) index += 1;

    openTabContent(TYPES[index]);
  });
}