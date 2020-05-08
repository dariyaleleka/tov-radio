"use strict";

//================================================================//
//*********** main.js
//*********** © Dariya Leleka - code
//*********** Описание поведения основного меню
//*********** 
//*********** 
//================================================================//
window.addEventListener('load', function () {
  var btn = document.querySelector('.menu-btn');
  btn.addEventListener('click', function () {
    this.classList.toggle('is-active');
  });
});

window.onload = function () {
  document.getElementById('buttonnav').onclick = function () {
    openbox('header__menu', this);
    return false;
  };

  function openbox(id, buttonnav) {
    var div = document.getElementById(id);
    console.log(div);

    if (div.style.marginTop === '-280px') {
      div.style.marginTop = '0'; // div.style.display = 'flex';

      div.style.opacity = '1'; // div.style.height = '0';
    } else {
      div.style.marginTop = '-280px'; // div.style.display = 'none';

      div.style.opacity = '0';
    }
  }
};

var nav = $('.header');
var hh = $('.header').height();
console.log(hh);
$(window).scroll(function () {
  if ($(this).scrollTop() >= '1') {
    nav.addClass('menu-sticky'); // groups.css('padding-top', '70px');
  } else {
    nav.removeClass('menu-sticky');
  }
}); //================================================================//
//*********** main.js
//*********** © Dariya Leleka - code
//*********** Описание поведения slider
//*********** 
//*********** 
//================================================================//

$(document).ready(function () {
  $('.main-slider__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    appendArrows: $('.first-slider__arrows'),
    prevArrow: '<a id="prev" href="#" type="button"><img src="assets/img/arrow-l.svg" alt="#"></a>',
    nextArrow: '<a id="prev" href="#" type="button"><img src="assets/img/arrow-r.svg" alt="#"></a>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top - 60
  }, 800);
});
//# sourceMappingURL=main.js.map
