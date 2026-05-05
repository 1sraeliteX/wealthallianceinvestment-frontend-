/* global AOS Swiper jQuery $ */

'use strict';

AOS.init({
    duration: 1200,
    once: true
})

$(window).load(function() {
    $('.loader').delay(500).fadeOut('slow');
});

let myswiper = new Swiper('.swiper1', {
    simulateTouch: false,
    autoplay: { 
        delay: 10000,
    },
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: '.swiper-header-right',
        prevEl: '.swiper-header-left',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    // }
});

$(document).ready(function(){
    // Simplified navbar logic - no logo switching to prevent flashing
    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 50) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
})

$(function(){
    $('.tablist__item .tab__label').on('click', function(){
        let element = $(this).data('tablist');
        $('.tablist__content .active').removeClass('active').addClass('hide')
        $('.' + element).removeClass('hide').addClass('active')
    })
})

$('.counter').counterUp({
    triggerOnce: true,
    time:   3000,
})

let testimonial = new Swiper('.swiper2', {
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
        crossFade: false
    },
    direction: 'horizontal',
    autoplay: {
        delay: 5000,
    },
    loop: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.swiper-control-right',
        prevEl: '.swiper-control-left',
    },
});

$('#embrace').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: function(url) {        
                    var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                    if ( !m || !m[1] ) return null;
                    return m[1];
                },
                src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0&enablejsapi=1'
            }
            
        }
    }
});

$("#elevator").on("click", function() {
    $('html, body').animate({
           scrollTop: 0
        }, 1000);
})
   
$(document).ready(function() {
    
    $(window).scroll(function () {
    if ($(window).scrollTop() > 900) {
        $('#elevator').addClass('reveal');
            
    }
    if ($(window).scrollTop() < 1000) {
        $('#elevator').removeClass('reveal');
    }
    });
});

$('#swiper__body-1').on('inview', function (event, visible) {
    if (visible == true) {
        $('div #wel-h3-first').addClass("unhide animated fadeInDown").removeClass('hide');
        $('#wel-btn-first').addClass('animated fadeInUp unhide').removeClass('hide');
    } else {
        $('div #wel-h3-first').addClass('hide').removeClass('unhide');
        $('#wel-btn-first').addClass('hide').removeClass('unhide');
    }
});

$('#swiper__body-2').on('inview', function (event, visible) {
    if (visible == true) {
        $('div #wel-h3-sec').addClass("unhide animated fadeInRight").removeClass('hide');
        jQuery('#wel-h1-sec').addClass('unhide animate-h1').removeClass('hide');
        $('#wel-btn-sec').addClass('animated fadeInDown unhide').removeClass('hide');
        jQuery('#wel-para-sec').addClass('animated fadeIn unhide').removeClass('hide');
    } else {
        $('div #wel-h3-sec').addClass("hide").removeClass('unhide');
        jQuery('#wel-h1-sec').addClass('hide').removeClass('unhide');
        $('#wel-btn-sec').addClass('hide').removeClass('unhide');
        $('#wel-para-sec').addClass('hide').removeClass('unhide');
    }
});

$('.take-tour').click(function() {
    $('html,body').animate({
    scrollTop: $("#tored").offset().top},
    1000);
});

function currencyChange(){
    // var coin = document.getElementById('selected_coin').value

    $.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH&tsyms=USD`)
    .then(function(data){
        $('#btc-price').text(Object.values(data.BTC)[0]);$('#ltc-price').text(Object.values(data.LTC)[0]);
        $('#eth-price').text(Object.values(data.ETH)[0]);$('#bch-price').text(Object.values(data.BCH)[0]);
    })
}

$(function(){
    currencyChange()
    setInterval(function(){
        currencyChange()
    },5000)
})

function closer(){
    $('.duration').fadeOut()
}

function planActivator(active){
    $(active).fadeToggle(function () {
        $(this).find('.duration_box_cont').addClass('animated fadeIn')
    })
}

function selectorFunc(objecto){
    $(objecto).on('click', function () {
        $(objecto).removeClass('active-selector')
        $(objecto).find('.duration_select_but a').removeClass('coloured').addClass('gray')
        $(this).addClass('active-selector')
        $(this).find('.duration_select_but a').removeClass('gray').addClass('coloured')

        if ($(this).prop('id') == 'secondo') {
            $('.href_duration').prop('id', 'second')
        } else if ($(this).prop('id') == 'firsto') {
            $('.href_duration').prop('id', 'first')
        } else if ($(this).prop('id') == 'thirdo') {
            $('.href_duration2').prop('id', 'third')
        } else if ($(this).prop('id') == 'fourto') {
            $('.href_duration2').prop('id', 'fourt')
        } else if ($(this).prop('id') == 'fiveo')  {
            $('.href_duration2').prop('id', 'five')
        } else if ($(this).prop('id') == 'sixo') {
            $('.href_duration3').prop('id', 'six')
        } else if ($(this).prop('id') == 'sevento') {
            $('.href_duration3').prop('id', 'seven')
        } else if ($(this).prop('id') == 'eighto') {
            $('.href_duration3').prop('id', 'eight')
        } else if ($(this).prop('id') == 'nineo') {
            $('.href_duration3').prop('id', 'nine')
        } else if ($(this).prop('id') == 'teno') {
            $('.href_duration4').prop('id', 'ten')
        } else if ($(this).prop('id') == 'eleveno') {
            $('.href_duration4').prop('id', 'eleven')
        } else if ($(this).prop('id') == 'twelveo') {
            $('.href_duration4').prop('id', 'twelve')
        } else if ($(this).prop('id') == 'thirteeno') {
            $('.href_duration4').prop('id', 'thirteen')
        }
    })
}

$(document).on('click', '.href_duration', ()=>{
    if ($('.href_duration').prop('id') == 'second'){
        $('#percentage_first').text('5');
        $('#changed_per1').html('3 months <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration').prop('id') == 'first') {
        $('#percentage_first').text('7');
        $('#changed_per1').html('1 month <i class="fa fa-angle-down"></i>'); closer()
    }  
})

$('.href_duration2').on('click', function(){
    if ($(this).prop('id') == 'third') {
        $('#percentage_sec').text('9');
        $('#changed_per2').html('1 month <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration2').prop('id') == 'fourt') {
        $('#percentage_sec').text('7');
        $('#changed_per2').html('3 months <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration2').prop('id') == 'five') {
        $('#percentage_sec').text('5');
        $('#changed_per2').html('6 months <i class="fa fa-angle-down"></i>'); closer()
    }
})

$('.href_duration3').on('click', function () {
    if ($(this).prop('id') == 'six') {
        $('#percentage_third').text('11');
        $('#changed_per3').html('1 month <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration3').prop('id') == 'seven') {
        $('#percentage_third').text('7');
        $('#changed_per3').html('3 months <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration3').prop('id') == 'eight') {
        $('#percentage_third').text('5');
        $('#changed_per3').html('6 months <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration3').prop('id') == 'nine') {
        $('#percentage_third').text('3');
        $('#changed_per3').html('12 months <i class="fa fa-angle-down"></i>'); closer()
    }
})

$('.href_duration4').on('click', function () {
    if ($(this).prop('id') == 'ten') {
        $('#percentage_fourth').text('15');
        $('#changed_per4').html('1 month <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration4').prop('id') == 'eleven') {
        $('#percentage_fourth').text('12');
        $('#changed_per4').html('3 months <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration4').prop('id') == 'twelve') {
        $('#percentage_fourth').text('9');
        $('#changed_per4').html('6 months <i class="fa fa-angle-down"></i>'); closer()
    } else if ($('.href_duration4').prop('id') == 'thirteen') {
        $('#percentage_fourth').text('5');
        $('#changed_per4').html('12 months <i class="fa fa-angle-down"></i>'); closer()
    }
})

function miniChange(val,target) {
    var mini = $(val).val()
    $(target).prop('id', mini)
}
