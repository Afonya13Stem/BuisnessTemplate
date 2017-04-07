$(function() {

	// Custom JS
	$(".rslides").responsiveSlides({
		auto: false,
		nav: true,
		speed: 800,
        namespace: "centered-btns"	
    });

	$(document).ready(function(){
		$('.moveTo, .headerWrapp__scrollItem, .headerBtn').click(function(e){
			e.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top + 60;

			$('body,html').animate({scrollTop: top}, 1500);
			$('input[name=menu').prop('checked', false)
		});
	});

	$(window).resize(function(){
		if(screen.width < 420){
			$('.btn-subscribe').attr('value','Join');
			$('.btn-subscribe').text('Join');
		}else{
			$('.btn-subscribe').attr('value','Subscribe');
			$('.btn-subscribe').text('Subscribe');
		}	
	});

	$(window).resize(function(){
		if(screen.width < 640){
			$('.emailSubscribe__input').attr('placeholder','Enter your Email');
		}else{
			$('.emailSubscribe__input').attr('placeholder','Enter Your email adress for newsletter');

		}
	});
});
