import menu from '../../menu.json';
import courseTemplate from '../templates/course-template-item.hbs';

export const buildMainMenu = () => {
  const checkbox = document.querySelector('input.js-switch-input');
  const body = document.querySelector('body');
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const locallyStoredTheme = localStorage.getItem('Theme');

  if (locallyStoredTheme) {
    const currentTheme = body.classList;
    currentTheme.value = locallyStoredTheme;

    if (body.classList.value === Theme.DARK) {
      checkbox.setAttribute('checked', 'true');
    }
  }

  const menuListContainer = document.querySelector('ul.js-menu');

  function buildMenu(menu) {
    const markup = menu.map(item => courseTemplate(item)).join('');
    menuListContainer.insertAdjacentHTML('beforeend', markup);
  }

  buildMenu(menu);

  checkbox.addEventListener('change', addTheme);

  function addTheme(event) {
    if (body.classList.value === Theme.DARK) {
      body.classList.remove(Theme.DARK);
      body.classList.add(Theme.LIGHT);
      localStorage.setItem('Theme', body.classList.value);
    } else {
      body.classList.remove(Theme.LIGHT);
      body.classList.add(Theme.DARK);
      localStorage.setItem('Theme', body.classList.value);
    }
  }
};
