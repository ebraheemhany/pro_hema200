// open and close filter
let filter = document.querySelector(".filter");
function open_close_filter(){
    filter.classList.toggle("active")

}



fetch('item.json')
  .then(response => response.json())
  .then(data => {
    

    const products_div = document.getElementById("products_div");
all_product_json = data;


data.forEach(product => {
  

    

    products_div.innerHTML +=`

<div class="product swiper-slide">

<div class="icons">
    <span>
        <i onclick="addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i>
   

    </span>

</div>



<div class="img-product">
<img src="${product.img}">
<img class="img-hover" src="${product.img_hover}">

</div>

<h3 class="name-product">
    <a href="#">"${product.name}"</a>
</h3>
    
<div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    

    </div>
    <div class="price">
    <p><span>"$${product.price}"</span></p>
 
    </div>
    
    
    </div> 
`

   



    


});

  })     







