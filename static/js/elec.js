let carts=document.querySelectorAll('.add-cart');

let products=[
  {
    name: 'Apple',
    tag: 'pod (1)',
    price: 19500,
    inCart: 0
  },
  {
    name: 'boAt',
    tag: 'Airdopes 121v2 Bluetooth Truly Wireless in Ear Earbuds with Mic',
    price: 7000,
    inCart: 0
  },
  {
    name: 'JBL',
    tag: 'C115 Bluetooth Truly Wireless in Ear Earbuds with Mic',
    price: 2700,
    inCart: 0
  },
  {
    name: 'OnePlus',
    tag: 'Buds Z (Gray)',
    price: 3500,
    inCart: 0
  },
  {
    name: 'ASUS',
    tag: 'TUF Gaming F15 Laptop 15.6',
    price: 57000,
    inCart: 0
  },
  {
    name: 'Dell',
    tag: '14" (2021) Thin & Light FHD AG Display | i5 | 16GB | 512SSD',
    price: 54000,
    inCart: 0
  },
  {
    name: 'HP',
    tag: 'Pavilion 15 Ryzen 5 15.6-inch (39.6 cms)',
    price: 45000,
    inCart: 0
  },
  {
    name: 'Apple',
    tag: 'MacBook Pro (512GB) - Graphite',
    price: 139000,
    inCart: 0
  },
  {
    name: 'Apple',
    tag: 'iPhone 12 Pro Max (512GB) - Graphite',
    price: 120000,
    inCart: 0
  },
  {
    name: 'Samsung Galaxy',
    tag: 'Z Fold3 5G',
    price: 70000,
    inCart: 0
  },
  {
    name: 'OnePlus 9 Pro 5G',
    tag: '(Morning Mist, 12GB RAM, 256GB Storage)',
    price: 65000,
    inCart: 0
  },
  {
    name: 'Mi 11X Pro 5G',
    tag: '(Cosmic Black, 8GB RAM, 256GB Storage)',
    price: 63000,
    inCart: 0
  },
  {
    name: 'Samsung',
    tag: 'WD10T704DBX Washer Dryer Combo with AI Control & SmartThings Connectivity 10.5Kg',
    price: 28000,
    inCart: 0
  },
  {
    name: 'Samsung',
    tag: '657 L with Inverter Side-by-Side Refrigerator',
    price: 32000,
    inCart: 0
  },
  {
    name: 'LG',
    tag: '195 cms (77 inches) 4K Ultra HD Smart OLED TV',
    price: 28000,
    inCart: 0
  },
  {
    name: 'Sony Bravia',
    tag: '164 cm (65 inches) 4K Ultra HD Smart Certified Android LED TV',
    price: 46000,
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
//        <img src="./static/images/${item.tag}.jpeg">
