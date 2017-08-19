







(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
         $(".testimonials-carousel").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:true,
            autoplay: true,
            smartSpeed: 800,
             navText:["<i class='fa fa-arrow-right'></i>"],
       });
        
        
         
        
        
       

    }); // you missing this syntax in your main.js file

    jQuery(window).load(function(){
        
    });

}(jQuery));	


