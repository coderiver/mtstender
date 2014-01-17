$(document).ready(function() {

//main slider
function main_slider() {
	var wnd_height = $(window).height();	
	var el = $('.js-m-slider');
	el.height(wnd_height);
}
main_slider();

$(window).resize(function(){
	main_slider();
});

});