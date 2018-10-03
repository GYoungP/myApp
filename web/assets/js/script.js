$(document).ready(function() {


    /**
     *  UI 스크립트
     */
 myApp.init();


});

var myApp = {
    init: function () {
        myApp.header();
    },
    header: function () {
        var menu = $('.item');

        $(window).on('scroll',function () {
            var sct = $(window).scrollTop(),
                header = $('header')
            if(sct > 945) {
                header.addClass('is-active');
            }else {
                header.removeClass('is-active');
            }
        }),

        menu.hover(function () {
            $(this).find('.dropdown-item').stop().slideDown(600);
        },function () {
            $(this).find('.dropdown-item').stop().slideUp(200);
        });
    }




}
