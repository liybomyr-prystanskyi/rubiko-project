$(".scrollTo").on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1000);
});


$(document).ready(function() {
    $('.all-logo-company').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });
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

});









$(".we-are-team").click(function(){
    $(this).parent().toggleClass('style-for-inner');
    $(this).parent().parent().toggleClass('style-for-box');
});





setTimeout(function() {
    document.getElementsByClassName( 'progress-bar' )[0].style.width = '0%';
    document.getElementsByClassName( 'progress-bar' )[1].style.width = '20%';
    document.getElementsByClassName( 'progress-bar' )[2].style.width = '40%';
    document.getElementsByClassName( 'progress-bar' )[3].style.width = '60%';
    document.getElementsByClassName( 'progress-bar' )[4].style.width = '80%';
    document.getElementsByClassName( 'progress-bar' )[5].style.width = '100%';
}, 400 );

setTimeout(function() {
    document.getElementsByClassName( 'progress-bar' )[0].style.width = '15%';
    document.getElementsByClassName( 'progress-bar' )[1].style.width = '40%';
    document.getElementsByClassName( 'progress-bar' )[2].style.width = '20%';
    document.getElementsByClassName( 'progress-bar' )[3].style.width = '60%';
    document.getElementsByClassName( 'progress-bar' )[4].style.width = '80%';
    document.getElementsByClassName( 'progress-bar' )[5].style.width = '20%';
}, 1500 );

setTimeout(function() {
    document.getElementsByClassName( 'progress-bar' )[0].style.width = '50%';
    document.getElementsByClassName( 'progress-bar' )[1].style.width = '50%';
    document.getElementsByClassName( 'progress-bar' )[2].style.width = '50%';
    document.getElementsByClassName( 'progress-bar' )[3].style.width = '50%';
    document.getElementsByClassName( 'progress-bar' )[4].style.width = '50%';
    document.getElementsByClassName( 'progress-bar' )[5].style.width = '50%';
}, 3000 );

setTimeout(function() {
    document.getElementsByClassName( 'progress-bar' )[0].style.width = '0%';
    document.getElementsByClassName( 'progress-bar' )[1].style.width = '0%';
    document.getElementsByClassName( 'progress-bar' )[2].style.width = '0%';
    document.getElementsByClassName( 'progress-bar' )[3].style.width = '0%';
    document.getElementsByClassName( 'progress-bar' )[4].style.width = '0%';
    document.getElementsByClassName( 'progress-bar' )[5].style.width = '0%';
}, 4500 );


// makes the parallax elements
function parallaxIt() {
    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var $contents = [];
    var $backgrounds = [];

    // for each of content parallax element
    $('[data-type="content"]').each(function(index, e) {
        var $contentObj = $(this);

        $contentObj.__speed = ($contentObj.data('speed') || 1);
        $contentObj.__fgOffset = $contentObj.offset().top;
        $contents.push($contentObj);
    });

    // for each of background parallax element
    $('[data-type="background"]').each(function() {
        var $backgroundObj = $(this);

        $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
        $backgroundObj.__fgOffset = $backgroundObj.offset().top;
        $backgrounds.push($backgroundObj);
    });

    // update positions
    $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        $contents.forEach(function($contentObj) {
            var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

            $contentObj.css('top', yPos);
        })

        $backgrounds.forEach(function($backgroundObj) {
            var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

            $backgroundObj.css({
                backgroundPosition: '50% ' + yPos + 'px'
            });
        });
    });

    // triggers winodw scroll for refresh
    $fwindow.trigger('scroll');
};

parallaxIt();


