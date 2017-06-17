







(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
         $(".logo-carousel").owlCarousel({
            items: Uint16Array,
            margin:30,
            loop:true,
            dots:false,
            nav:false,
            autoplay: true,
            smartSpeed: 800,
       });
        
       $(".case-study-carousel").owlCarousel({
            items: 3,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
            smartSpeed: 800,
       });

       $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
            smartSpeed: 800,
       });

    }); // you missing this syntax in your main.js file

    jQuery(window).load(function(){
        
    });

}(jQuery));	
