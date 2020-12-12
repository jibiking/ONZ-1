$(function(){

  // slide-menu
  // slick
  $('.fv__slide').slick({
    infinite: true,
    arrows: true,
    prevArrow:'<button class="arrow_l"></button>',
    nextArrow:'<button class="arrow_r"></button>',
    slidesToShow: 1,
    dots:true,
    centerMode: true, //要素を中央寄せ
    centerPadding:'240px', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
    responsive: [{
         breakpoint: 480,
              settings: {
                   centerMode: false,
         }
    }]
});
  // //slide-menu





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