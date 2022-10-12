let carts=document.querySelectorAll('.add-cart');

let products=[
  {
    name: 'Wrogn',
    tag: 'hoodie',
    price: 951,
    inCart: 0
  },
  {
    name: 'U.S. Polo Assn. Denim Co.',
    tag: 'shirt',
    price: 2799,
    inCart: 0
  },
  {
    name: 'Calvin Klein Jeans',
    tag: 'tshirt',
    price: 1959,
    inCart: 0
  },
  {
    name: 'GANT',
    tag: 'pant',
    price: 14999,
    inCart: 0
  },
  {
    name: 'KASSUALLY',
    tag: 'top (1)',
    price: 493,
    inCart: 0
  },
  {
    name: 'Athena',
    tag: 'top (2)',
    price: 584,
    inCart: 0
  },
  {
    name: 'Roadster',
    tag: 'top (3)',
    price: 449,
    inCart: 0
  },
  {
    name: 'Orchid Blues',
    tag: 'top (4)',
    price: 584,
    inCart: 0
  },
  {
    name: 'PUMA Motorsport',
    tag: 'f (1)',
    price: 10449,
    inCart: 0
  },
  {
    name: 'Crocs',
    tag: 'f (2)',
    price: 4995,
    inCart: 0
  },
  {
    name: 'Puma',
    tag: 'f (3)',
    price: 2099,
    inCart: 0
  },
  {
    name: 'EAKLVB',
    tag: 'f (4)',
    price: 10252,
    inCart: 0
  },
  {
    name: 'Casio',
    tag: 'a (1)',
    price: 28995,
    inCart: 0
  },
  {
    name: 'Ted Smith',
    tag: 'a (2)',
    price: 801,
    inCart: 0
  },
  {
    name: 'Puma',
    tag: 'a (3)',
    price: 749,
    inCart: 0
  },
  {
    name: 'Roadster',
    tag: 'a (4)',
    price: 330,
    inCart: 0
  },
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
  },
  {
    name: 'AASHIRVAAD',
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
        ₹${item.inCart * item.price}.00
      <div>
      `;
    });

    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class = "basketTotalTitle" >
          Basket Total
        </h4>
        <h4 class = "basketTotal" >
          ₹${cartCost}.00
        </h4>
      </div>
    `;
  }

}









onLoadCartNumbers();
displayCart();
//        <img src="./static/images/${item.tag}.jpeg">
