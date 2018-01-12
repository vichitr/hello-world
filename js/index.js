$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('#mydetails').height($('#intro-details').height());
	if (screen.width > 600)
	{
		$('#grey-screen').height($('#intro-details').height() - 25);
	}
});
