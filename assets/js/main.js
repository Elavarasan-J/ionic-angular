(function() {
  $(document).on('click', '.review-btn', function(e) {
    e.preventDefault();
    return $('html,body').animate({
      scrollTop: $("#review-form-wrap").offset().top
    }, 1000);
  });

  $(document).on('click', '.btn-upload', function(e) {
    e.preventDefault();
    return $(this).next().trigger('click');
  });

}).call(this);
