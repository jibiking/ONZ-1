$(function(){
	// なめらかさと花びらの数を変更するにはこの2つのパラメータを操作してください
	var smooth = 20;// 64 > smooth > 16
	var num_flake = 1;// per 640*640px
	var field = $('.sakura-field').eq(0);
	if( field.css('position') == 'static' ){ field.css('position', 'relative');}
	var fw = field.width();
	var fh = field.height();
	num_flake = num_flake*fw*fh/409600;
	var flake = $('.sakura-flake');
	for(var i=0; i<num_flake; i++){
		flake.eq(0).clone(true).appendTo(field).css({'z-index':'255', 'position':'absolute', 'top':Math.floor(Math.random()*fh)+'px', 'left':Math.floor(Math.random()*fw)+'px'});
	}
	flake.eq(0).remove();
	flake = $('.sakura-flake');
	var flake_w = flake.eq(0).width();
	var flake_h = flake.eq(0).height();
	function setPos(n, x, w){
		var sakura_a = flake.eq(n);
// 元：花弁が舞い散る方向	var v_top = sakura_a.offset().top - (8 - 6/(Math.pow(x,2)+1))*smooth/64;
		var v_top = sakura_a.offset().top - (4 - 12/(Math.pow(x,2)+1))*smooth/64;
		var v_left = sakura_a.offset().left + (8*x + 12*w)*smooth/64;
		if( v_top < -flake_h ){ v_top = fh;
		}else if( v_top > fh ){ v_top = -flake_h;
		}else if( v_left < -flake_w ){ v_left = fw;
		}else if( v_left > fw ){ v_left = -flake_w; }
		sakura_a.offset({top:v_top, left:v_left});
	}
	var cnt = 0;
	setInterval(function(){
		cnt++;
		if( cnt >= 360*640/smooth ){ cnt = 0;}
		var m = (Math.cos(cnt*smooth/640*Math.PI/110)+1)*180;
		var w = Math.sin((cnt*smooth/64+32)*Math.PI/180); // -1 < x < 1
		for(var i=0; i<num_flake; i++){
			var x = Math.cos((i*360/num_flake+m)*Math.PI/180); // -1 < x < 1
			setPos(i, x, w);
		}
	}, smooth);
});
