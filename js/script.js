$(function(){

  // slide-menu
  var dir = -1;
  var interval = 3000;
  var duration = 700;
  var timer;
  $(".fv__slide").prepend($(".fv__slide li:last-child"));
  $(".fv__slide").css("left", -720);
  timer = setInterval(slideTimer, interval);

  function slideTimer(){
    if(dir == -1){

      $(".fv__slide").animate({"left" : "-=960px"},duration,
      function(){
        $(this).append($(".fv__slide li:first-child"));
        $(this).css("left", -720);
      });
    }else{
      $(".fv__slide").animate({"left" : "+=960px"},duration,
      function(){
        $(this).prepend($(".fv__slide li:last-child"));
        $(this).css("left", -720);
        dir = -1;
      });
    }
  }

  $(".arrow_l").click(function(){
    dir = 1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
  });

  $(".arrow_r").click(function(){
    dir = -1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
  });


  // //slide-menu未完成


  // shop

  $(".shop__card-item").hover(function () {
      // over
      $(".shop__card-item-img_a").animate({"opacity" : .2}, 300);
      $("shop__card-item-img_h").animate({"opacity" : 1}, 300);

    }, function () {
      // out
      $(".shop__card-item-img_h").css("opacity", 0);
      $(".shop__card-item-img_a").css("opacity", 1);
    }
  );

  // shop未完成


  // toTop
  $(".toTop").click(function (e) {
    $("html, body").animate({scrollTop : 0}, 500);
  });
  // //toTop


  // slide-loop
  


  // //slide-loop


});