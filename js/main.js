$(function(){
	
	
	function scrollStuff(){
		var $top = $(window).scrollTop();

		if( $top > 60 ){
			$('header').addClass('active');
		} else{
			$('header').removeClass('active');
		}
	}

	$(window).on('load', function(){

		scrollStuff();

	});

	$(window).on('resize', function(){

		scrollStuff();

	});

	$(window).on('scroll', scrollStuff);
	
	
});


