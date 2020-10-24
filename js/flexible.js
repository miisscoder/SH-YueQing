$(function ($) {
    var tid;
    function refreshRem() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var widthDesign = 2285 ;
         if (width < 1000 )  {
            var rem = width * 100 / widthDesign;
            $('html').css('font-size', rem + 'px');
        }

        if ($('.form').height() + $('.header').height() < height) {
            $('.form').css('height', (height - $('.header').height()) + 'px');
        }

        if ($('body').hasClass('game')) {
            $('.image').css('height', $('.image img')[0].clientHeight + 'px');
            var w = $('.puzzle')[0].clientWidth;
            $('.piece-1').css('width', (w / 3 - 1 * 2) + 'px');
            $('.piece-2').css('width', (w / 3 * 2 - 1 * 2) + 'px');
        }
    }

    refreshRem();

    if (window.addEventListener) {
        window.addEventListener("resize", function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }, false);
        window.addEventListener("pageshow", function (e) {
            if (e.persisted) { // 浏览器后退的时候重新计算
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);
    } else {
        window.attachEvent("resize", function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        });
        window.attachEvent("pageshow", function (e) {
            if (e.persisted) { // 浏览器后退的时候重新计算
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        });
    }
    
});