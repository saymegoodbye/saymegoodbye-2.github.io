$(document).ready(function () {
    $(document).scroll(function(e){
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 216){
            $('.nav').removeClass('static-top').addClass('fixed-top');
        } else {
            $('.nav').removeClass('fixed-top').addClass('static-top');
        }
    });
});