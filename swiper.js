// swiper slide side-bar

var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
     dynamicBullests:true,
     clickble:true

    },
autoplay:{
  delay:2000,

},
loop : true,



  });



// swiper slide side-bar

var swiper = new Swiper(".sale-sec", {
 
    slidesPerView: 5,
    spaceBetween:10,
autoplay:{
  delay:2000,

},
navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"

},

loop : true,
breakpoints:{
1600:{
  slidesPerView :5,

},
900:{
  slidesPerView :4,

},

700:{
  slidesPerView :3,
  spaceBetween:20,
},
0:{
  slidesPerView :2,

}

}


  });


var swiper = new Swiper(".product_swip", {
 
    slidesPerView: 4,
    spaceBetween:10,
autoplay:{
  delay:2000,

},
navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"

},

loop : true,

breakpoints:{
  1600:{
    slidesPerView :4,
  
  },
  1200:{
    slidesPerView :3,
  
  },
  900:{
    slidesPerView :3,
  
  },
  
  700:{
    slidesPerView :3,
    spaceBetween:20,
  },
  0:{
    slidesPerView :2,
  
  }
}
  });



