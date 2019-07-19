<<<<<<< HEAD

   $(document).ready(function(){
    $('select').formSelect();
  });
      
=======
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

  
>>>>>>> 081b4e1d79de427b0a3c7e0b9311bdee3ee286ec
