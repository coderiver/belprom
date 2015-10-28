$(document).ready(function() {
	
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	$(".js-menu-mob").on("click", function(event) {
		$(".menu-mob").toggleClass("is-active").slideToggle(200);
		event.stopPropagation();
		return false;
	});
	$(".menu-mob").on("click", function(event) {
	  event.stopPropagation();
	});

	console.log($('body').html());
});