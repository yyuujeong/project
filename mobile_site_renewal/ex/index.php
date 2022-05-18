<?php
include_once('../g5/common.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrme=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://vldrn215.dothome.co.kr/ex/css/reset.css">
    <link rel="stylesheet" href="http://vldrn215.dothome.co.kr/ex/css/main.css">
</head>
<body>  
  <h1 class="lg"><a href="http://vldrn215.dothome.co.kr/ex/index.php"><img src="http://vldrn215.dothome.co.kr/ex/img/logo.png"></a></h1>
  <p class="aa"><a href="http://vldrn215.dothome.co.kr/g5/bbs/board.php?bo_table=freebd">게시판</a></p>

  <div id="main_image">
    <img src="http://vldrn215.dothome.co.kr/ex/img/board.jpg" alt="img1">
  </div>

  <div class="bd">
    <? echo latest("basic", "freebd",5,25); ?>
  </div>

  <footer class="ft">
    <p class="text">
      본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 홈페이지의 일부 내용과 기타 이미지 등은 그 출처가 따로 있음을 밝힙니다.
    </p>
  </footer>
</body>
</html>