/* global $ */

'use strict';

(function() {

  // vertical centering
  var setPadding = function() {
    var padding = ($('body').height() - $('.main').height()) / 2;
    padding = Math.max(padding, 50);
    $('.main').css({
      'padding-top': Math.max(padding, 50)
    });
  };

  function setItemHeight() {
    var height = Math.max.apply(null, $('.item').map(function() {
      return $(this).height();
    }));
    $('.item').height(height);
  }

  $(document).ready(function() {
    setPadding();
    $(window).on('resize', setPadding);
    setItemHeight();
    $(window).on('resize', setItemHeight);
  });

  var onload = function() {
    cnt += 1;
    if (cnt === 2) {
      $('html').addClass('ready');
    }
  };

  /*
   * Preload images
   */
  var cnt = 0;

  var imgs = [new Image(), new Image()];
  imgs[0].onload = onload;
  imgs[1].onload = onload;

  imgs[0].src = 'img/background-blur.jpg';
  imgs[1].src = 'img/TRwebLogo.svg';

  // change the highlighted nav link and move the background
  $('.navbar-brand').click(function() {
    var slideTo = $(this).data('slideTo');
    $('.navbar-brand').removeClass('active');
    $(this).addClass('active');
    $('body')
      .removeClass('slide0 slide1 slide2')
      .addClass('slide' + slideTo);
  });


}());
