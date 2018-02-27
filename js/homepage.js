function slideOverTo(elementID) {
    $('html, body').animate({scrollTop: ($(elementID).offset().top-95)},500);
}

function scrollFunction() {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
        $('nav').addClass('shrink');
    } else {
        $('#back-to-top').fadeOut();
        $('nav').removeClass('shrink');
    }
}
function backToTop() {


    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');
}
