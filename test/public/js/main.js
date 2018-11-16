/*********  MY WORK 영역의 사진 리스트 노출  *********/
function modalMake0(){
for(var i=1; i<9; i++){
    html = '<li>';
    html += '<img src="../img/p' + i + '.jpg" alt="img">';
    html += '</li>';
    $("#pic").append(html);
}}
modalMake0();

/********  스크롤 시에도 메뉴 상단고정, 모바일 버전 시 드롭 메뉴 노출  **********/
$(window).scroll(function(){
	var gap = $("html, body").scrollTop();
	if(gap > 150) {
		if($(".navs").hasClass("dn_bg") == false) {
			$(".navs").css({"top":"-60px"}).addClass("dn_bg");
			$(".navs").stop().animate({"top":"0px"}, 500);
		}
	}
	else {
		$(".navs").css({"top":"-60px"}).removeClass("dn_bg");
		$(".navs").stop().animate({"top":"0px"}, 500);
	}
});
$(".fa-bars").click(function(){
	$(".navs_sub").stop().slideToggle(100);
});

/********  TOP버튼 클릭 시 화면 맨 위로 이동  *********/
function goTop(){
	$( 'html, body' ).stop().animate( { scrollTop : '0' } )  
}

/*******  각 메뉴 클릭 시 해당화면으로 자동 스크롤  ********/
$("#menu0").click(function(){
	var position = $("#window0").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu1").click(function(){
	var position = $("#window1").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu2").click(function(){
	var position = $("#window2").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu3").click(function(){
	var position = $("#window3").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu4").click(function(){
	var position = $("#window4").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu5").click(function(){
	var position = $("#window5").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu6").click(function(){
	var position = $("#window6").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu7").click(function(){
	var position = $("#window7").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});