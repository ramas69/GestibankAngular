$(document).ready(function(){
    $('.slider').slider({
          indicators: false,
          height: 800
        });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){
      $(".scroll").click(function(){
        $("html,body").animate({scrollTop:$(".slides").offset().top},"1000");return false})})
          // Or with jQuery
        
          $(document).ready(function(){
            $('select').formSelect();
          });
  });

  