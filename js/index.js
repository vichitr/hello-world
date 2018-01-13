$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('#intro-details').height($('#mydetails').height());
	if (screen.width > 600)
	{
		$('#grey-screen').height($('#intro-details').height() - 20);
	}
});
$(window).scroll(function() {
	if(($('#whoiam').offset().top - $(window).scrollTop() <= 25)) {
		$('.barcolor').removeClass('white-text').addClass('purple-text').addClass('text-accent-2');
		if($('#ftr').offset().top() - $(window).scrollTop() > 0 ) {
			$('.barcolor').removeClass('purple-text').removeClass('text-accent-2').addClass('white-text');
		}
	}
	else {
		$('.barcolor').removeClass('purple-text').removeClass('text-accent-2').addClass('white-text');
	}
});
