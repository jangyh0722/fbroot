var now = 0;
var cnt = $(".banner .ban_roll").find("img").length;
var interval = setInterval(ban, 2000);

function ban(){
	$(".banner .ban_roll").stop().animate({"left":-(now*100)+"%"}, 500, function(){
		if(now == cnt - 1) now = -1;
		now++;
	});
}



	$(".dept_1").hover(function(){
		$(".dept_1 > .dept1").stop().slideToggle(300);
	});
	$(".dept_2").hover(function(){
		$(".dept_2 > .dept2").stop().slideToggle(300);
	});
		
	
