$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .aa').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .aa .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    // sticky navigation menu

    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main').addClass('navbar_fixed');
                } else {
                    $('.header_area .main').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

  });