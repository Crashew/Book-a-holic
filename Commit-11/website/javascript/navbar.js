
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
}


function logout(){
    location.assign('newlogin.html');
}


let burger= document.querySelector(".burger");
let burgerMenu= document.querySelector('.icons');
burger.addEventListener("click", ()=>{
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

