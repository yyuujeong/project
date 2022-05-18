$(function() {
   //햄버거메뉴
   $(".btn").hide();
   $(".ham").click(function() {
      $(".btn").show();
      $(".menu").animate({
         marginLeft:"300px"
      }, 300);
   });

   // 메뉴상세
   $(".menu > ul > li > a").click(function() {
      if($(this).next().is(":visible")) {
         $(this).next().stop().slideUp(500);
         $(this).children("img").attr("src", "img/arrow-down.png");
      } else {
         $(".sub").stop().slideUp(500);
         $(".menu > ul > li > a").children("img").attr("src", "img/arrow-down.png");
         $(this).next().stop().slideDown(500);
         $(this).children("img").attr("src", "img/arrow-up.png");
      }
   });

   // 메뉴종료
   $(".btn").click(function() {
      $(".btn").hide();
      $(".menu").animate({
         marginLeft:"0px"
      }, 300);
   });


   //인디케이터
   $(".book_roll li a").on("click", function() {
      var strName = ($(this).parent().attr("id"));
      slideTarget(strName.substr(3,1)); // 함수호출
      return false;
   });
   function slideTarget(n) { // 인수 1개 받음
      var pos = Number(n) * - 100+"%";
      $(".ms").animate({left: pos}, 500, function() {
         $(".book_roll img").attr("src", "img/state_out.png");
         $(".book_roll img").eq(n).attr("src", "img/state_over.png");
      });
   };

   // 자동슬라이드
   var btnNum = 0;
   setInterval(function() {
      btnNum++;
      if(btnNum > 3) btnNum = 0;
      $(".book_roll li a").eq(btnNum).trigger("click")
   }, 3500);


   //더보기
   size_li = $('.mimg li').size();
   x = 4;   
   $('.mimg li:lt('+x+')').show(); //따옴표 잘보기
   $(".more").click(function() {
      x = (x + 4 <= size_li) ? x+4 : size_li;
      $(".mimg li:lt("+x+")").show();
   });

   //모달
   function modalOn() {
      $(".modal_back").addClass("back_on");
   }

   function modalOff() {
      $(".modal_back").removeClass("back_on");
   }

   $(".ham").click(function() {
      modalOn();
   });
   $(".cross").click(function() {
      modalOff();
   });

   
   var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",   //인디케이터
      paginationClickable: true,  //인디케이터 클릭하게 할거냐
      centeredSlides: true,   //흘러들어오는 슬라이드가 가운데 있게하겠냐
      autoplay: 2500,
      autoplayDisableOnInteraction: false
      //쓸어넘기거나 버튼 클릭 시 자동 슬라이드 정지(true일때)
   });


});