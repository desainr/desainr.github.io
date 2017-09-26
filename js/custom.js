$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    e.preventDefault();
    var pos = $(id).offset().top;
    $('body, html').animate({scrollTop: pos});
});
