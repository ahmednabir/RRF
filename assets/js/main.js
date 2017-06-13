







(function ($) {
	"use strict";

    jQuery(document).ready(function($){

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
