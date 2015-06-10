// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    // Do something
			
			if(scroll<1)
			{
				$("#fixbar").css('border-bottom', '0');
				
			}
			else
			{
				$("#fixbar").css('border-bottom', '1px solid rgba(255,255,255,.1)');
			}

			if(scroll<280)
			{
				$("#slogo").css('opacity', 0);

			}
			else
			{
								$("#slogo").css('opacity', 1);

			}
		});
		// your functions go here
	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);