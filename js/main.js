

	$('.numbers').one('inview', function (event, visible) {

		if (visible === true) {

			$('.numbers .number').each(function () {
				var element = $(this);
				var duration = element.attr('data-duration');
				var count = element.attr('data-count')
				var id = element.attr('id');
				var numAnim = new countUp(id, 0, count, 0, duration);
				numAnim.start();

			})
		}

	})
	
	$('.heading > h1').one('inview', function(event, visible){
		$(this).addClass('animate fadeInRight');
	});
	
	$('.heading > div').one('inview', function(event, visible){
		$(this).addClass('animate fadeInLeft');
	});
	
	$('.process-item').one('inview', function(event, visible){
		$(this).addClass('animate fadeInLeft');
	});
	
	$('.service-item').one('inview', function(event, visible){
		$(this).addClass('animate');
	})
	
	$('.adress-element').one('inview', function(event, visible){
		$(this).addClass('animate fadeInUp');
	})
	
	$('.about-item').one('inview', function(event, visible){
		$(this).addClass('animate fadeInUp');
	})

