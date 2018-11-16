$(".navs, .navs_2").hover(function(){
	$(".navs_2").stop().slideToggle(300);
});

var cnt = 0;
var ban = $(".ban_roll").find("img").length;
var interval=setInterval(roll, 3000);
function roll(){
$(".ban_roll").stop().animate({"left": -(cnt*1000)+"px"}, 500,function(){
	if(cnt == ban -1)cnt= -1;
	cnt++;
});
}

	
