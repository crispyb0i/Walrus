$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".showHide").click(function() {
    $("#hidePics").toggle();
    $("#showPics").toggle();
});
});
$(document).ready(function() {
  $("h1").click(function() {
    $("#secret").show();
});
});
$(document).ready(function() {
  $("#secret").click(function() {
    $("img").slideUp();
});
});
