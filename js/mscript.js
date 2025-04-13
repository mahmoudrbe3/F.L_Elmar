// M7R
jQuery(document).ready(function($){
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:40,
    nav:true,
	dots: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        667:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.owl-carousel2').owlCarousel({
    rtl:true,
    loop:true,
    margin:40,
    nav:true,
	dots: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        667:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa fa-chevron-left fa fa-chevron-down');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
$(".nav_bx .navbar-nav li").hover(function () {
$(".nav_bx .navbar-nav li ul.animated").addClass("animated flipInX");
});
$(".boxer").not(".retina, .boxer_fixed, .boxer_top, .boxer_format, .boxer_mobile, .boxer_object").boxer();
});
$(".scroll").click(function (event) {
   event.preventDefault();
   $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 2000);
});
$('[data-toggle="dropdown"]').dropdown();