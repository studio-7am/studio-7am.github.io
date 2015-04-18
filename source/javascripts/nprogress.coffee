$(document).ready ->
  # Show the progress bar 
  NProgress.start()
  # Increase randomly
  interval = setInterval((->
    NProgress.inc()
    return
  ), 1000)
  # Trigger finish when page fully loaded
  jQuery(window).load ->
    clearInterval interval
    NProgress.done()
    return
  # Trigger bar when exiting the page
  jQuery(window).unload ->
    NProgress.start()
    return
  return

