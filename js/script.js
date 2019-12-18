    $('.navigation-link').click(function(){
      var tableNumber = $(this).data('table');

      $('.main-menu__item').addClass('hide');
      $('#main-menu__item-' + tableNumber).removeClass('hide');
    }); 