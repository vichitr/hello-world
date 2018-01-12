$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('#mydetails').height($('#intro-details').height());
	if (screen.width > 600)
	{
		$('#grey-screen').height($('#intro-details').height() - 5);
	}
});
$(window).scroll(function() {
	if(($('#whoiam').offset().top - $(window).scrollTop() <= 25)) {
		$('.barcolor').removeClass('white-text').addClass('purple-text').addClass('text-accent-3');
	}
	else {
		$('.barcolor').removeClass('purple-text').removeClass('text-accent-3').addClass('white-text');
	}
});
