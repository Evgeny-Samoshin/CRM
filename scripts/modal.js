const btnShowModal = document.querySelector('.js-show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal__close-btn');

btnShowModal.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', e => {
  if (e.target === overlay || e.target === btnCloseModal) {
    overlay.classList.add('hidden');
  };
});
