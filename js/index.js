$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('#intro-details').height($('#mydetails').height());
	if (screen.width > 600)
	{
		$('#grey-screen').height($('#intro-details').height() - 25);
	}
});
$(window).scroll(function() {
	if(($('#whoiam').offset().top - $(window).scrollTop() <= 35) && ($('.get-in-touch').offset().top() - $(window).scrollTop() > 40)) {
		$('#barcolor').removeClass('white-text').addClass('purple-text').addClass('text-accent-3');
	}
	else {
		$('#barcolor').removeClass('purple-text').removeClass('text-accent-3').addClass('white-text');
	}
});
