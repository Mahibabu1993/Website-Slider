var main = function() {
	var int = self.setInterval(function() {
		$('.arrow-next').trigger('click');
	}, 3000);
  
	$(".slide, .dot, .arrow-next, .arrow-prev").hover(function() {
		clearInterval(int);
	}, function () {
		int = setInterval(function() {
			$('.arrow-next').trigger('click');
		}, 3000);
	});
	
	$('.dot').click(function() {
		var index = $('.dot').index(this) + 1;
	
		var currentSlide = $('.active-slide');
		var nextSlide = $('.slide:nth-child('+index+')');
	
		var currentDot = $('.active-dot');
		var nextDot = $('.dot:nth-child('+index+')');
	
		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');
	
		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

  
	$('.arrow-next').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextSlide.length === 0) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}
    
		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});


	$('.arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevSlide.length === 0) {
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}
    
		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

}

$(document).ready(main);