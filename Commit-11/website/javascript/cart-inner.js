let products= [
  {
      name: 'crooked kingdom',
      price: 170,
      inCart: 0,
      tag: 'product-1'
  },
  {
      name: 'the cruel prince',
      price: 190,
      inCart: 0,
      tag: 'product-2'
  },
  {
      name: 'one of us is lying',
      price: 260,
      inCart: 0,
      tag: 'product-3'
  },
  {
      name: 'a good girl\'s guide to murder',
      price: 120,
      inCart: 0,
      tag: 'product-4'
  },
  {
    name: 'it starts with us',
    price: 299,
    inCart: 0,
    tag: 'product-5'
  },
  {
      name: 'atomic habits',
      price: 135,
      inCart: 0,
      tag: 'product-6'
  },
  {
      name: 'the miracle morning',
      price: 165,
      inCart: 0,
      tag: 'product-7'
  },
  {
      name: 'the secret',
      price: 110,
      inCart: 0,
      tag: 'product-8'
  }
];


let carts= document.querySelectorAll('.add-cart');
for( let i=0; i<carts.length; i++){
  carts[i].addEventListener('click',() => {
    totalCost(products[i]);
      cartNumbers(products[i]);
      
   
  })
}

function cartNumbers(products){
  let productNumber= localStorage.getItem('cartNumbers');
  productNumber= parseInt(productNumber);
  if(productNumber){
      localStorage.setItem('cartNumbers',productNumber+1);
      document.querySelector('.shopping-cart span').textContent=productNumber+1;
  }
  else{
  localStorage.setItem('cartNumbers',1);
  document.querySelector('.shopping-cart span').textContent =1;
  }
  setItems(products);
}

function setItems(products){
 let cartItem=localStorage.getItem('productsInCart');
 cartItem= JSON.parse(cartItem);

 if(cartItem!=null){
  if(cartItem[products.tag] ==undefined ){
      cartItem={
          ...cartItem,
          [products.tag]:products
      }
  }
  cartItem[products.tag].inCart+=1;
 }
 else{
  products.inCart= 1;
  cartItem={
      [products.tag]: products
  }
 }
  localStorage.setItem("productsInCart",JSON.stringify(cartItem));
  console.log(cartItem);
  displayCart();
  
}

function onLoadCartNumbers(){
  let productNumber= localStorage.getItem('cartNumbers');
  if(productNumber){
      document.querySelector('.shopping-cart span').textContent=productNumber;
  }
}
function totalCost(products){
  let cartCost=localStorage.getItem('totalCost');

  if(cartCost !=null){
      cartCost=parseInt(cartCost);
      localStorage.setItem("totalCost",(cartCost + products.price));
  } else{
      localStorage.setItem('totalCost',products.price);

  }

}
function displayCart(){
  let cartCost=localStorage.getItem('totalCost');

  let cartItem= localStorage.getItem("productsInCart");

  cartItem= JSON.parse(cartItem);
  let productContainer=document.querySelector('.myproducts');
  if (cartItem && productContainer){
    productContainer.innerHTML='';
    Object.values(cartItem).map(item=>{
    productContainer.innerHTML += `
    <div class="myproducts">
      <div class="box">
        <i class="fas fa-trash"></i>
        <img src="./image/${item.tag}.jpg" alt="">
        <div class="content">
            <h3 class="product-title">${item.name}</h3>
            <div class="price">Price: ${item.price}</div>
            <div class="quantity">Quantity: ${item.inCart}</div>
            <div class=total>SubTotal: ${item.inCart*item.price}</div>
        </div>
      </div>
    </div>

    `
    });
    productContainer.innerHTML += `
    <div class="basketTotalContainer">
      <div class="box">
        <div class="content">
          <h4 class="basketTotalTitle">TOTAL : Rs.${cartCost}/-</h4>
        </div>
      </div>
    </div>
    
    `
  }
}


onLoadCartNumbers();