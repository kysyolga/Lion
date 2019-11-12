$(document).ready(function() {
// head-menu__search
$('.head-menu__search svg').click(function(e) {
    e.preventDefault();
    if ($('.head-menu__search--item').hasClass('head-menu__search--item-active')) {
      $('.head-menu__search--item').fadeOut("slow");
      $('.head-menu__search--item').removeClass('head-menu__search--item-active');
    } else {
      $('.head-menu__search--item').fadeIn("slow");
      $('.head-menu__search--item').addClass('head-menu__search--item-active');
      
    }
    
  });

  $(document).click( function(event){
    if( $(event.target).closest($('.head-menu__search')).length) 
      return;
    $('.head-menu__search--item').fadeOut("slow");
    $('.head-menu__search--item').removeClass('head-menu__search--item-active');

    event.stopPropagation();
  });




});

