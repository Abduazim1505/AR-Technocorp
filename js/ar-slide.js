$(document).ready(function(){
    // section silck
    // $('.homeslider').on('init', function () {
    //     $('.homeslider').css({visibility: 'visible'});
    // });
    // // $('.slick-frame').slick();
    $('.homeslider').slick({
        dots: true, // bottom - button
        arrows: true, // right/left - button
    // section silck
    
    // auto slide
        autoplay: true,
        autoplaySpeed: 3000
    // /auto slide
    });
});