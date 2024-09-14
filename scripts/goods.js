const goodsStore = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
];

const form = document.querySelector('.form');
const dicountCheckbox = document.querySelector('#discount');
const discountInput = document.querySelector('#discont');
const tableSumField = document.querySelector('.table-sum');
const modalSumField = document.querySelector('.modal-sum');

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
        <button class="btn-container__btn btn-container__btn_no_picture"></button>
        <button class="btn-container__btn btn-container__btn_edit"></button>
        <button class="btn-container__btn btn-container__btn_delete"></button>
      </div>
    </td>
  </tr>`;

  return templateRow;
};

const calcSum = (item) => {
  const count = item.count.localName === 'input' ? item.count.value : item.count;
  const price = item.price.localName === 'input' ? item.price.value : item.price;
  const discont = item.discont.localName === 'input' ? item.discont.value : item.discont;
  
  let sum = 0;
  if (discont === "0" || !discont) {
    sum = count * price;
  } else {
    sum = count * price - 
    (count * price * (discont / 100));
  };
  
  return sum;
};

const calcItemSum = item => {
  item.totalPrice = calcSum(item);
};

const calcTableSum = (data) => {
  const sum = data.reduce((sum, item) => sum + calcSum(item), 0);

  tableSumField.textContent = `$ ${sum}`;

  return sum;
};

const calcModalSum = (form) => {
  const sum = calcSum(form);
  modalSumField.textContent = `$ ${sum}`;

  return sum;
};

const deleteItem = (item) => {
  item.remove();

  const goodsId = +item.querySelector('.js-id').textContent;

  goodsStore.forEach((item, itemIndx, arr) => {
    if (item.id === goodsId) {
      arr.splice(itemIndx, 1);
    };
  });

  calcTableSum(goodsStore);
};

const btnControl = (btnContainers) => {
  btnContainers.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.classList.contains('btn-container__btn_delete')) {
        deleteItem(e.target.closest('tr'));
      };
    });
  });
};

const renderGoods = data => {
  const tableBody = document.querySelector('.tbody');
  tableBody.innerHTML = '';

  data.map(item => {
    calcItemSum(item);
    tableBody.insertAdjacentHTML('beforeend', createRow(item));
  });

  const btnContainers = tableBody.querySelectorAll('.btn-container');
  btnControl(btnContainers);
  calcTableSum(data);
};

renderGoods(goodsStore);

// Discount control


const discountControl = (form) => {
  form.addEventListener('click', e => {
    if (e.target === dicountCheckbox && !dicountCheckbox.checked) {      
      discountInput.disabled = true;
      discountInput.required = false;
      discountInput.value = '';
    };
    if (e.target === dicountCheckbox && dicountCheckbox.checked) {      
      discountInput.disabled = false;
      discountInput.required = true;
    };
  });
};

const addGoodsStore = (store, data) => {
  store.push(data);
};



const formControl = form => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newGoods = Object.fromEntries(formData);

    newGoods.id = Math.floor(Math.random() * 100000000 + 1);
    newGoods.totalPrice = calcModalSum(form);
    
    addGoodsStore(goodsStore, newGoods);
    form.reset();
    form.discont.disabled = true;
    modalSumField.textContent = `$ 0.00`;
    renderGoods(goodsStore);
  });

  form.addEventListener('change', e => {
    if (e.target === form.count ||
        e.target === form.price ||
        e.target === form.discont) {
          calcModalSum(form);
        };
  });
};

discountControl(form);
formControl(form);
