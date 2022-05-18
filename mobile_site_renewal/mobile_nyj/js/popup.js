$(function() {       	
   if($.cookie("pop") != "no") $(".pop_wrap").show();
   $(".pop_wrap area:eq(0)").on("click", function() {
      $(".pop_wrap").fadeOut("fast");
      //return false;
   });

   //하루동안~
   $(".pop_wrap area:eq(1)").on("click", function() {
      $cookie("pop", "no", {  //클릭한 경우 쿠키의 value값을 no로 setting
         expires: 1  //만료일: 하루
      });
      $(".pop_wrap").fadeOut("fast");  
      return false;
   });

});