import { getCSSCustomProp } from './css-utils';

// Toggle behaviour
const toggleTheme = () => {
  const body = document.querySelector('body');
  body.classList.toggle('theme--dark');
  body.classList.toggle('theme--plain');
};

// Apply behaviour to whatever has the js-toggle-theme class
document
  .querySelectorAll('.js-toggle-theme')
  .forEach(elem => {
    elem.addEventListener('click', toggleTheme);
    elem.removeAttribute('hidden');
  });

// Set the initial theme based on OS preference
const setInitialTheme = () => {
  const theme = getCSSCustomProp('--theme');
  const body = document.querySelector('body');
  body.classList.replace('theme--plain', `theme--${theme}`);
};

setInitialTheme();
