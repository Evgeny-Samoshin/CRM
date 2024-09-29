import { tableSumField, modalSumField } from './elements.js';

export const calcSum = (count, price, discont) => {
  let sum = 0;
  if (discont === "0" || !discont) {
    sum = count * price;
  } else {
    sum = count * price - 
    (count * price * (discont / 100));
  };
  
  return sum;
};

export const calcItemSum = item => {
  item.totalPrice = calcSum(item.count, item.price, item.discont);
};

export const calcTableSum = (data) => {
  const sum = data.reduce((sum, item) => sum + calcSum(item.count, item.price, item.discont), 0);

  tableSumField.textContent = `$ ${sum}`;

  return sum;
};

export const calcModalSum = (count, price, discont) => {
  const sum = calcSum(count, price, discont);
  modalSumField.textContent = `$ ${sum}`;

  return sum;
};