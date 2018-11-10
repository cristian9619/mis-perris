jQuery(document).ready(function(){
	$('#demo1').skdslider({
		'delay':5000, 
		'animationSpeed': 2000
	});
	jQuery('#demo2').skdslider({
		slideSelector: '.slide',
		delay:5000, 
		animationSpeed: 1000,
		showNextPrev:true,
		showPlayButton:false,
		autoSlide:true,
		animationType:'sliding'
	});
});