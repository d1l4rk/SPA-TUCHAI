function setLine(tab){
  var tabWidth = $(tab).outerWidth();
  var tabPos = $(tab).position();
  $(".indicator-line").css({
    "width": tabWidth,
    "left": tabPos.left
  });
};

function lineMove(){
  $('.tab').each(function (){
    var scrollPos = $(document).scrollTop();
    var linkRef = $($(this).attr("data-attr-scroll"));
    var refPos = linkRef.position().top;
    var refHeight = linkRef.height();
    if(refPos <= scrollPos && refPos + refHeight > scrollPos){
      $('.tab').removeClass("active-tab");
      $(this).addClass("active-tab");
      setLine(this);
    };
  });
};

jQuery(document).ready(function($) {
  $(".tab").click(function(event) {
      event.preventDefault(); 

      var defaultAnchorOffset = 0;

      var anchor = $(this).attr('data-attr-scroll');

      var anchorOffset = $(anchor).attr('data-scroll-offset');
      if (!anchorOffset)
          anchorOffset = defaultAnchorOffset; 

      // $('html,body').animate({ 
      //     scrollTop: $(anchor).offset().top - anchorOffset
      // }, 500);        
  });
});
$(function(){
  $('a[data-attr-scroll^="#"]:not([data-attr-scroll="#"])').click(function(){
    $("html, body").animate({
      //IMPORTANT: One extra pixel to pass the line!
      scrollTop: $($(this).attr("data-attr-scroll")).position().top + 1
    }, 650);
    return false;
  });
});




//Run function:
$(document).ready(function(){
  //On document load:
  lineMove();
  //On window scroll or resize:
  $(window).on("scroll resize", lineMove);
});
