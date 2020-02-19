let owlCarousel = require('owl.carousel');

console.log(owlCarousel, 'fsgr');



$(document).ready(function(){
    $('.love__item').hover(
        function() {
            $( this ).removeClass('love_i');
        }, function() {
            $( this ).addClass('love_i');
        }
    );
});