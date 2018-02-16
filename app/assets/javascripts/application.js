// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap.js
//= require bootstrap.min

$(document).ready(function(){
    // Activate carousel
    $("#myCarousel").carousel();

    // Enable carousel control
	$(".left").click(function(){
    	$("#myCarousel").carousel('prev');
    });
    $(".right").click(function(){
    	$("#myCarousel").carousel('next');
    });

    // Enable carousel indicators
    $(".slide-one").click(function(){
    	$("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function(){
    	$("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function(){
    	$("#myCarousel").carousel(2);
    });
});
