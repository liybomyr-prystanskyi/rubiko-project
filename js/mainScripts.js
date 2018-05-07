

$(".scrollTo").on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1000);
});

$(".we-are-team").click(function(){
    $(this).parent().toggleClass('style-for-inner');
    $(this).parent().parent().toggleClass('style-for-box');
});

$(document).ready(function(){
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});



$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        fade: true,
        autoplay:true,
        autoplaySpeed:3000
    });

    $('.all-logo-company').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });

});
