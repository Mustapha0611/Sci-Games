$(document).ready(function () {
   $(".burger-nav").on("click", function(){
    $("#nav ul").toggleClass("open");
   }); 

   $(".tog").on("click", function () {
      $("body").toggleClass("night");
      $("#category ul li span").toggleClass("night");
      $("#nav ul li a").toggleClass("night");
  });

  $('.items').flyto({
   item      : 'li',
   target    : '.cart',
   button    : '.addtocart' 
});
});
