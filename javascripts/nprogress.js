(function() {
  $(document).ready(function() {
    var interval;
    NProgress.start();
    interval = setInterval((function() {
      NProgress.inc();
    }), 1000);
    jQuery(window).load(function() {
      clearInterval(interval);
      NProgress.done();
    });
    jQuery(window).unload(function() {
      NProgress.start();
    });
  });

}).call(this);
