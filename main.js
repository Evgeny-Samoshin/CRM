import { goodsStore } from "./scripts/goods.js";

import {
  tableBody,
  form,
  btnShowModal,
  btnCloseModal,
  overlay
} from './scripts/modules/elements.js';

import { renderGoods } from "./scripts/modules/render.js";
import { modalControl, discountControl, formControl } from "./scripts/modules/controls.js";

{
  const init = () => {
    renderGoods(tableBody, goodsStore);
    discountControl(form);
    formControl(form);
    modalControl(btnShowModal, btnCloseModal, overlay);
  };

  document.addEventListener('DOMContentLoaded', () => {
    init();
  });
};

