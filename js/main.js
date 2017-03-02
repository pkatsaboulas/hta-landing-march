$(function(){
	
	
	function scrollStuff(){
		
		var $top = $(window).scrollTop();

	}

	$(window).on('load', function(){

		scrollStuff();

	});

	$(window).on('resize', function(){

		scrollStuff();

	});

	$(window).on('scroll', scrollStuff);
	
	
});


