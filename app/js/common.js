// let owlCarousel = require('owl.carousel');

$(document).ready ( function () {
    
    $('#phone__car').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:false,
    });
    
    $('#team__car').owlCarousel({
        items: 3,
        dots:true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            770:{
                items:3
            }
        }
    });
    
    // Menu nav toggle (burger)
    
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        
    });
});