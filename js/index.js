$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('#intro-details').height($('#mydetails').height());
	if (screen.width > 600)
	{
		$('#grey-screen').height($('#intro-details').height() - 25);
	}
});
