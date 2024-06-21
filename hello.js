
//change cart
let cart = document.querySelector(".cart");

//open cart
function open_cart() {
cart.classList.add("active")

}
//close cart
function close_cart() {
cart.classList.remove("active")

}

// open menu
let menu = document.querySelector("#menu");
function open_menu() {
  menu.classList.add("active")
  
  }

function close_menu(){
  menu.classList.remove("active")
  
  }



// add item in cart
var all_product_json;

var item_in_cart = document.querySelector(".item_in_cart");
let product_cart=[];

function addToCart(id , btn){
product_cart.push(all_product_json[id]);
btn.classList.add("active");

getcartitmes()
}

// count sell product
let count_items = document.querySelector(".count_items");
let price_cart_head = document.querySelector(".price_cart_head");
let top_cart = document.querySelector(".top_cart span");
let price_cart_total = document.querySelector(".price_cart_total");
//  add product to cart
function getcartitmes(){
  let total_price =0;  
let iteme_c = "";
for(let i =0; i<product_cart.length;i++){
iteme_c += `

<div class="item_cart">
<img src="${product_cart[i].img}">
<div class="content">
<h4>"${product_cart[i].name}"</h4>
<p class="tem_price">"${product_cart[i].price}"</p>
</div>
<button onclick="remove_from_cart(${i})" class="delet_item">
    <i class="fa-solid fa-trash-can"></i>
</button>

</div>

`
total_price += product_cart[i].price;


}

item_in_cart.innerHTML = iteme_c;
price_cart_head.innerHTML = "$" + total_price;

count_items.innerHTML = product_cart.length
top_cart.innerHTML = "("+product_cart.length+ ")";
price_cart_total.innerHTML = "$" + total_price;
}


// remove item from cart
function remove_from_cart (index){
product_cart.splice(index , 1)
getcartitmes();

let addToCartButton = document.querySelectorAll(".fa-cart-plus");
for(let i=0;i<addToCartButton.length;i++){
addToCartButton[i].classList.remove("active")

product_cart.forEach(product => {

if(product.id == i){
addToCartButton[i].classList.add("active")

}

})


}

}

let back_to_top = document.querySelector(".back_to_top");
window.onscroll = function(){
if(this.scrollY >= 400){
  back_to_top.style.display ="block";

}else {
  back_to_top.style.display ="none"; 
}

}
back_to_top.onclick = function(){
window.scrollTo({
top :0,
behavior :"smooth"

})


}

// change item image
let BigImg = document.getElementById("BigImg");

function changeitemimage(img){
  BigImg.src = img;

}






