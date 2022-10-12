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
