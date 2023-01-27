// show the list when clicking one burger menu (xs, sm)
$('.header-right > a').click(function() {
    $('.hamburger-menu').addClass('active');
});

// hide the list when clicking on 'x' (xs, sm)
$('.hamburger-menu a.close').click(function () {
    $('.hamburger-menu').removeClass('active');
});

// hovering a <li> gets an effect
$('ul li').mouseenter(function() {
    $(this).fadeOut(100).fadeIn(100);
});