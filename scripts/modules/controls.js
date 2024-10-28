import { goodsStore } from '../goods.js';
import { calcTableSum } from "./calculate.js";

import { tableBody, modalSumField } from './elements.js';

import { calcModalSum } from "./calculate.js";
import { addGoodsStore } from './serviceData.js';
import { renderGoods } from './render.js';

export const modalControl = (btnShowModal, btnCloseModal, overlay) => {
  btnShowModal.addEventListener('click', () => {
    overlay.classList.remove('hidden');
  });
  
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target === btnCloseModal) {
      overlay.classList.add('hidden');
    };
  });
};

const deleteItem = (item) => {
  item.remove();

  const goodsId = +item.querySelector('.js-id').textContent;

  goodsStore.forEach((item, itemIndx, arr) => {
    if (item.id === goodsId) {
      arr.splice(itemIndx, 1);
    };
  });
console.log(goodsStore);

  calcTableSum(goodsStore);
};

export const btnControl = (btnContainers) => {
  btnContainers.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.classList.contains('btn-container__btn_delete')) {
        deleteItem(e.target.closest('tr'));
      };
      if (e.target.dataset.pic) {
        const url = e.target.dataset.pic;
        const posX = screen.width/2 - 300;
        const posY = screen.height/2 - 300;
        const newWindow = open('about:blank', '', `width=600,height=600,top=${posY},left=${posX}`);
        newWindow.document.body.innerHTML = `
        <img src="${url}" alt="goods img">
        `
      }
    });
  });
};

export const discountControl = (form) => {
  form.addEventListener('click', e => {
    if (e.target === form.discount && !form.discount.checked) {
      form.discont.disabled = true;
      form.discont.required = false;
      form.discont.value = '';
    };
    if (e.target === form.discount && form.discount.checked) {
      form.discont.disabled = false;
      form.discont.required = true;
    };
  });
};

export const formControl = form => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newGoods = Object.fromEntries(formData);

    newGoods.id = Math.floor(Math.random() * 100000000 + 1);
    newGoods.images = {};
    newGoods.images.small = '../../img/600.jpg';
    newGoods.images.big = '../../img/600.jpg';

    addGoodsStore(goodsStore, newGoods);
    form.reset();
    form.discont.disabled = true;
    modalSumField.textContent = `$ 0.00`;
    renderGoods(tableBody, goodsStore);
  });

  form.addEventListener('change', e => {
    if (e.target === form.count ||
      e.target === form.price ||
      e.target === form.discont) {
      calcModalSum(form.count.value, form.price.value, form.discont.value);
    };
  });
};
