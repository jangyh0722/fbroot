
$(".nav").hover(function(){
	$(this).index();
		$(".dept"+$(this).index()).stop().slideToggle(100);
	$(".dept"+$(this).index()).hover(function(){
		$(".dept"+$(this).index()).stop().slideToggle(100);
	})
})
