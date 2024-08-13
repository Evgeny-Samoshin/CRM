const btnShowModal = document.querySelector('.js-show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal__close-btn');

btnShowModal.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

modal.addEventListener('click', e => {
  e.stopPropagation();
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

btnCloseModal.addEventListener('click', () => {
  overlay.classList.add('hidden');
});