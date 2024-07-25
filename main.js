const productName = "Cisco Catalist 3750r";
const productQuantity = 1;
const productCategory = "Network equipment";
const productPrice = 4000;

console.log("Product Name: " + productName);

console.log("Total coast: " + productQuantity * productPrice + "$");

const modalTitle = document.querySelector('.modal__title');
const closeBtn = document.querySelector('.modal__close-btn');
const productId = document.querySelector('.product-id');
const modalForm = document.querySelector('.form');
const discountCheckbox = document.querySelector('#discount');
const discountValue = document.querySelector('#discountValue');
const totalCoast = document.querySelector('.total-cost__sum');