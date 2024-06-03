import fetchChistes from './fetch_chistes.js';

fetchChistes();

const button = document.querySelector('#next-joke');
button?.addEventListener('click', e => {
  e.preventDefault();
  fetchChistes();
});
