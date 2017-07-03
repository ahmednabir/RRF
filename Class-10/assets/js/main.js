







(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
         $(".homepage-slides").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:true,
            autoplay: true,
            smartSpeed: 800,
             navText:["<i class='fa fa-long-arrow-left'></i>" , "<i class='fa fa-long-arrow-right'></i>"],
       });
        
        
         
         $(".case-study-carousel").owlCarousel({
            items:4,
            loop:true,
            dots:true,
           // nav:true,
            autoplay: true,
            smartSpeed: 800,
             
       });
        
       

    }); // you missing this syntax in your main.js file

    jQuery(window).load(function(){
        
    });

}(jQuery));	


