$(document).ready(function() {
  $('header nav ul li:first-child').click(function(){
    $(this).parent().toggleClass('slideDown');
  });
});

$("p").mouseover(function(){
    $("p").css("background-color", "#f5f5f5");
});