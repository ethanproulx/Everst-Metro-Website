$(document).ready(function () {

    if (!window.console) console = {
        log: function () {}
    };


	/************** Scroll Navigation *********************/
	$('.navigation').singlePageNav({
        currentClass : 'active',
        filter: ':not(.external)'
    });


	/************** FlexSlider *********************/
    $('.flexslider').flexslider({
	    animation: "fade",
	    directionNav: false
	});


    /************** Responsive Navigation *********************/

	$('.menu-toggle-btn').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
    });




});