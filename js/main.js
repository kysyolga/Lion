$(document).ready(function() {

  // Error
  (function () {
    if (typeof EventTarget !== "undefined") {
        let func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.func = func;
            if(typeof capture !== "boolean"){
                capture = capture || {};
                capture.passive = false;
            }
            this.func(type, fn, capture);
        };
    };
}());

  // Tabs
    $( "#tabs" ).tabs();
    $('.banner-item').slick({
        dots: true
    });

    let hover= [$(".card"), $(".our-values__box--item"), $(".card-blog--box")];
    let hoverItem= [".cover-item-galery", ".our-values__box--link", ".cover-item-galery"];

    for(let i = 0; i < hover.length; i++) {
      hover[i].hover( 
        function() {
        $(this).find(hoverItem[i]).fadeIn();
        },
        function() {
            $(this).find(hoverItem[i]).fadeOut();
        });
    }

// portfolo details

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true
});

// social link portfolioDetails
$('.portfolio-box__details--share').click(function() {
  if($(this).hasClass('portfolio-box__details--share-active')) {
    $('.social-before__item').animate({
      left: '-29%'
    }, 1500);
    $('.portfolio-box__details--share-menu').animate({
      "opacity": 0
    }, 1500);
    $('.social-before').animate({
      "opacity": 0
    }, 1500);
    $(this).removeClass('portfolio-box__details--share-active');
    
  } else {
    $('.portfolio-box__details--share-menu').css({
      'display': "block",
      "opacity": 1
    });
    $('.social-before').css({
      "opacity": 1
    });
    $('.social-before__item').animate({
      left: '19%'
    }, 1500);
    $(this).addClass('portfolio-box__details--share-active');
  }
});





});

