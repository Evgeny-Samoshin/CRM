import { btnControl } from "./controls.js";
import { calcTableSum, calcItemSum } from "./calculate.js";

const createRow = obj => {
  const templateRow = `
  <tr>
    <td class="tbody__cell tbody__cell_black js-id">${obj.id}</td>
    <td class="tbody__cell tbody__cell_black">${obj.title}</td>
    <td class="tbody__cell tbody__cell_black">${obj.description}</td>
    <td class="tbody__cell tbody__cell_black">${obj.units}</td>
    <td class="tbody__cell tbody__cell_black">${obj.count}</td>
    <td class="tbody__cell tbody__cell_primary">$${obj.price}</td>
    <td class="tbody__cell tbody__cell_black">$${obj.totalPrice}</td>
    <td class="tbody__cell">
      <div class="btn-container">
        <button class="btn-container__btn btn-container__btn_no_picture" data-pic="${obj.images.small}"></button>
        <button class="btn-container__btn btn-container__btn_edit"></button>
        <button class="btn-container__btn btn-container__btn_delete"></button>
      </div>
    </td>
  </tr>`;

  return templateRow;
};

export const renderGoods = (tableBody, data) => {
  console.log(data);
  
  tableBody.innerHTML = '';

  data.map(item => {
    calcItemSum(item);
    tableBody.insertAdjacentHTML('beforeend', createRow(item));
  });

  const btnContainers = tableBody.querySelectorAll('.btn-container');
  btnControl(btnContainers);
  calcTableSum(data);
};