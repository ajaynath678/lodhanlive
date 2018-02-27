function slideOverTo(elementID) {
    $('html, body').animate({scrollTop: ($(elementID).offset().top-95)},500);
}

function scrollFunction() {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
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
