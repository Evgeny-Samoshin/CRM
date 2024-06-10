const productName = prompt('Введите наименование товара: ');
const productQuantity = +prompt('Введите количество товара: ');
const productCategory = prompt('Введите категорию товара: ');
const productPrice = +prompt('Введите цену товара: ');

console.log("Product Name: " + productName);

console.log("Total coast: " + productQuantity * productPrice + "$");

console.log(typeof productName);
console.log(typeof productQuantity);
console.log(typeof productCategory);
console.log(typeof productPrice);

console.log(`На складе ${productQuantity} единицы товара "${productName}" на сумму ${productQuantity * productPrice} $`);