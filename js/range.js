$(document).ready(function() {

  // прокрутка range
  $(window).on('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('.bars-line--item').offset().top + $('.bars-line--item').height() ;
    if (scroll_pos > element_pos) {
        $('.bars-line--item').addClass('add-anim');
    };
  
  });

});
