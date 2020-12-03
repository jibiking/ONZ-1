// ヘッダーメニュー
$(function () {
	var bp = 600;
	var $menu = $("#t-navi").children(".t-menu");
	var $button = $("#t-navi").children(".navi-toggle");
	
	$button.on('click', function() {
		$(this).toggleClass("on");
		$menu.fadeToggle(300);
	});
	$menu.on("click", function() {
		$button.removeClass("on");
		$(this).fadeOut(300);
	});
	
    var is_pc = true;

    function switch_pc() {
        var win_w = window.innerWidth;
        if ( win_w > bp ) {
            if ( !is_pc ) {
                is_pc = true;
				$button.removeClass("on");
				$menu.hide();
            }
        } else {
            if ( is_pc ) {
                is_pc = false;
            }
        }
    }    
});


// scroll

$(function(){
	$("a[href^=#]").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		$("html,body").animate({
			scrollTop: HashOffset
		}, 500);
		return false;
	});
});

// ループ スライダー
$(function() {
    $('#loopslider').each(function() {
        var loopsliderWidth = $(this).width();
        var loopsliderHeight = $(this).height();
        $(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');
        var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
        var listCount = $('#loopslider_wrap').children('ul').children('li').length;
        var loopWidth = (listWidth) * (listCount);
        $('#loopslider_wrap').css({
            top: '0',
            left: '0',
            width: ((loopWidth) * 2),
            height: (loopsliderHeight),
            overflow: 'hidden',
            position: 'absolute'
        });
        $('#loopslider_wrap ul').css({
            width: (loopWidth)
        });
        loopsliderPosition();
        function loopsliderPosition() {
            $('#loopslider_wrap').css({
                left: '0'
            });
            $('#loopslider_wrap').stop().animate({
                left: '-' + (loopWidth) + 'px'
            }, 50000, 'linear');
            setTimeout(function() {
                loopsliderPosition();
            }, 50000);
        };
        $('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');
    });
});



// srider-pro

$( document ).ready(function( $ ) {
  $('#wide').sliderPro({
    width: 960,//横幅
    height: 400,//縦幅
    arrows: true,//左右の矢印
    buttons: true,//ナビゲーションボタンを出す
    slideDistance:0,//スライド同士の距離
    visibleSize: '100%',//前後のスライドを表示
    slideAnimationDuration:1000,
    autoplayDelay:3000,
  });
});


// srider-pro shop

$( document ).ready(function( $ ) {
  $('#thumb-h').sliderPro({
    width:960,//横幅
    height:480,
    buttons: false,//ナビゲーションボタン
    shuffle: true,//スライドのシャッフル
    thumbnailWidth: 151,//サムネイルの横幅
    thumbnailHeight: 80,//サムネイルの縦幅
    slideDistance:0,//スライド同士の距離
    breakpoints: {
      480: {//表示方法を変えるサイズ
        thumbnailWidth: 90,
        thumbnailHeight: 40
      }
    }
  });
});