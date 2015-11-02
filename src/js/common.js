$(document).ready(function() {

	$(".js-menu-mob").on("click", function(event) {
		$(".menu-mob").toggleClass("is-active").slideToggle(200);
		event.stopPropagation();
		return false;
	});
	$(".menu-mob").on("click", function(event) {
	  event.stopPropagation();
	});
	
	$('.js-category li').on('click', function(event) {
        $('.subcategory').slideUp(200);
		$(this).find('.subcategory').stop().slideToggle(200);
		event.stopPropagation();
		return false;
	});
	$(".subcategory li").on("click", function(event) {
		event.stopPropagation();
	});
});