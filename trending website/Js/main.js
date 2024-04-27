jQuery(document).ready(function($){
    $('.owl-carousel').owlCarousel({
        items:1,
        center:false,
        autoWidth:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        pagination:false,
        dots: false,
        nav: false,
        response: {
            600:{
                items:1,
            },
        }

    });

    $(document).on('click', '.casestudies_images', function(){
        $( '.casestudies_images').removeClass('active');
        $(this).addClass('active');
    } );
    

});
AOS.init();