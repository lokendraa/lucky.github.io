

$('.count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
    duration: 1000,
    easing: 'swing',
    step: function (now) {
      $this.text(Math.ceil(now));
    }
  });
});
