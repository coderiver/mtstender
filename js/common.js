$(document).ready(function() {

//main slider
function main_slider() {
	var wnd_height = $(window).height();	
	var el = $('.js-m-slider');
	if (el.length > 0) {
		el.height(wnd_height);
		var el_pic = el.find('.m-slider__pic');
		var el_content = el.find('.m-slider__content');
		el_next = el.find('.m-slider__next');
		el_prev = el.find('.m-slider__prev');
		el_pager = el.find('.m-slider__pager');
		el_pic_item = el.find('.m-slider__pic-item');
		el_pic_items = el.find('.m-slider__pic');
		el_content_item = el.find('.m-slider__item');
		el_content_items = el.find('.m-slider__content');
		el_pic_items.cycle({
			fx: 'fade',
		  timeout: 6000,
		  prev: el_prev,
		  next: el_next,
		  pager: el_pager,
		  slides: el_pic_item
		});
		el_content_items.cycle({
			fx: 'fade',
		  timeout: 6000,
		  prev: el_prev,
		  next: el_next,
		  pager: el_pager,
		  slides: el_content_item,
		  pagerTemplate: ''
		});
	};
	
}
main_slider();

//top search
function top_search() {
	var el = $('.js-top-search');
	var top_content = $('.top__content');
	el.hover(function(){
		top_content.addClass('is-move');
	}, function(){
		top_content.removeClass('is-move');
	});
}
top_search();

//nav
function nav() {
	var nav = $('.js-nav');
	nav.find('li').hover(function(){
		$(this).find('.nav__sub').slideDown();
	}, function(){
		$(this).find('.nav__sub').slideUp();
	});
}
nav();

//accordeon
function accordeon() {
	var el = $('.js-accos');
	var item = el.find('.accos__item');
	var content = el.find('.accos__text');
	el.find('.accos__head').click(function(){
		if (!$(this).parent().hasClass('is-active')) {
			item.removeClass('is-active');
			$(this).parent().addClass('is-active');
			content.slideUp();
			$(this).next().slideDown();
		};
	});
}
accordeon();

$(window).resize(function(){
	main_slider();
});

});