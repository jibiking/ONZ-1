$(function () {

  // slide-menu
  // slick
  $('.fv__slide').slick({
    infinite: true,
    arrows: true,
    prevArrow: '<button class="arrow_l"></button>',
    nextArrow: '<button class="arrow_r"></button>',
    slidesToShow: 1,
    dots: true,
    centerMode: true, //要素を中央寄せ
    centerPadding: '240px', //両サイドの見えている部分のサイズ
    autoplay: true, //自動再生
    responsive: [{
      breakpoint: 480,
      settings: {
        centerMode: false,
      }
    }]
  });
  // //slide-menu





  // shop

  $(".shop__card-item a").hover(function () {
      // over
      $(this).children(".shop__card-item-img_a").stop().animate({"opacity" : .1}, 300);
      $(this).children(".shop__card-item-img_h").stop().animate({"opacity" : 1}, 300);
    }, function () {
      // out
      $(this).children(".shop__card-item-img_h").stop().animate({"opacity" : 0}, 300);
      $(this).children(".shop__card-item-img_a").stop().animate({"opacity" : 1}, 300);
    }
  );

  // //shop


  // toTop
  $(".toTop").click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  // //toTop


  // slide-loop



  // //slide-loop


});