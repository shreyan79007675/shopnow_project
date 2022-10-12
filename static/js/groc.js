let carts=document.querySelectorAll('.add-cart');

let products=[
  {
    name: 'AASHIRVAAD66',
    tag: 'Iodized Salt  (1 kg)',
    price: 21,
    inCart: 0
  },
  {
    name: 'AASHIRVAAD',
    tag: 'Chilli Powder  (500 g)',
    price: 45,
    inCart: 0
  },
  {
    name: 'AASHIRVAAD',
    tag: 'Turmeric Powder  (200 g)',
    price: 60,
    inCart: 0
  },
  {
    name: 'Weikfield',
    tag: 'Cornflour  (500 g)',
    price: 140,
    inCart: 0
  },
  {
    name: 'AASHIRVAAD',
    tag: 'Superior MP Atta  (10 kg)',
    price: 493,
    inCart: 0
  },
  {
    name: 'KOHINOOR',
    tag: 'Charminar Rice (Long Grain)  (5 kg)',
    price: 584,
    inCart: 0
  },
  {
    name: 'AASHIRVAAD',
    tag: 'Instant Mix - Gulab Jamun 500 g',
    price: 449,
    inCart: 0
  },
  {
    name: 'MADHUR',
    tag: 'Sugar  (5 kg)',
    price: 145,
    inCart: 0
  },
  {
    name: '24 mantra',
    tag: 'ORGANIC Organic Kesari Masoor Dal (Split)  (500 g)',
    price: 65,
    inCart: 0
  },
  {
    name: 'AASHIRVAAD',
    tag: 'Organic Moong Dal (Split)  (500 g)',
    price: 74,
    inCart: 0
  },
  {
    name: '24 Mantra',
    tag: 'Organic Masoor Dal (Whole)  (500 g)',
    price: 74,
    inCart: 0
  },
  {
    name: 'AASHIRVAAD',
    tag: 'Organic Urad Dal (Split)  (500 g)',
    price: 80,
    inCart: 0
  },
  {
    name: 'Vim',
    tag: 'Dish Cleaning Gel  (Lemon, 0.25 L)',
    price: 150,
    inCart: 0
  },
  {
    name: 'Clinic Plus',
    tag: 'Strong & Long Health Shampoo  (1 L)',
    price: 170,
    inCart: 0
  },
  {
    name: 'Pears',
    tag: 'Pure & Gentle Bathing Bar  (8 x 125 g)',
    price: 80,
    inCart: 0
  },
  {
    name: 'Freedom',
    tag: 'Refined Sunflower Oil Can  (5 L)',
    price: 450,
    inCart: 0
  }
];

for(let i = 0 ; i < carts.length ; i++){
  carts[i].addEventListener('click', () => {
      cartNumbers(products[i]);
      totalCost(products[i]);
  })
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cardNumbers');

  productNumbers=parseInt(productNumbers);

  if (productNumbers){
    document.querySelector('.nav-item span').textContent=productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cardNumbers');

  productNumbers=parseInt(productNumbers);

  if (productNumbers){
    localStorage.setItem('cardNumbers',productNumbers+1);
    document.querySelector('.nav-item span').textContent=productNumbers+1;
  }
  else{
    localStorage.setItem('cardNumbers',1);
    document.querySelector('.nav-item span').textContent=1;

  }

  setItems(product);

}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null){
    if(cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems,
        [product.tag] : product
      }
    }
    cartItems[product.tag].inCart +=1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }

  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');
  console.log("My cartcost is",cartCost);

  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost+product.price);
  }else {
    localStorage.setItem("totalCost",product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');


  if( cartItems && productContainer){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <span> ${item.name} </span>
      </div>
      <div class="price">
      ${item.price}</div>
      <div class="quantity">
        <span>${item.inCart}</span>
      </div>
      <div class="total">
        $${item.inCart * item.price},00
      <div>
      `;
    });

    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class = "basketTotalTitle" >
          Basket Total
        </h4>
        <h4 class = "basketTotal" >
          $${cartCost},00
        </h4>
      </div>
    `;
  }

}

onLoadCartNumbers();
displayCart();
