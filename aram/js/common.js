$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$('.s_portfolio li').click(function(){
		$('.s_portfolio li').removeClass('active');
		$(this).addClass('active');
	})

	function heightDetect(){
		$('.main_head').css('height',$(window).height())
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect()
	});
	$(".toggle_menu, .menu_item").click(function() {
  		$(".sandwich").toggleClass("active");
  		$(".top_menu").fadeToggle(600);
  		$(".top_menu li a").toggleClass('fadeInUp animated');
  		$(".name").toggleClass('opacity');
	});

	$('.name h1').animated('fadeInDown','fadeOutUp');
	$('.name p').animated('fadeInUp', 'fadeOutDown');

	$('.section_header').animated('fadeInUp','fadeOutDown');

	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup({type:'inline'});



	$('.animate-left').animated('fadeInLeft', 'fadeOutDown');
	$('.animate-right').animated('fadeInRight', 'fadeOutDown');
	$('.animate-center').animated('flipInY', 'zoomOut');

	$('.left .resume_item').animated('fadeInLeft', 'fadeOutDown');
	$('.right .resume_item').animated('fadeInRight', 'fadeOutDown');


	$('.portfolio_item').each(function(i){
		$(this).find('a').attr('href','#work_' + i);
		$(this).find('.port_item_desc').attr('id','work_' + i);
	})

	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_menu ul a").mPageScroll2id();

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});