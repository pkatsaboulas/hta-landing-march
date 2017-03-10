$(function(){
	
	
	$('header .btn_primary').on('click', function(){
        
        var _top = $('.contact-form').offset().top;

        $('body, html').animate({ scrollTop: _top });

	});
	
	
});


