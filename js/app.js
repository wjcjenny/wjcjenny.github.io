
$(document).ready(function(){
	"use strict";

	// load flliping book
  //   var mobileLine = '<iframe src="http://dataviz.nbcnews.com/examples/timeline-flipbook/" style="width: 1px; min-width: 100%; *width: 100%;" width="100%" height="580" frameborder="0" scrolling="no"></iframe>';
  //   var pcLine = '<iframe src="http://dataviz.nbcnews.com/examples/timeline-flipbook/" style="width: 1px; min-width: 100%; *width: 100%;" width="100%" height="380" frameborder="0" scrolling="no"></iframe>';
    
  //   $('#special').html(pcLine);
  //   if($(window).width() < 768){
		// $('#special').html(mobileLine);
  //   }
    

	$('#about').show();
	
	// Code for buttons to load each sections
	$('.bttn').click(function(){
        $('.bttn').removeClass('active');
        $(this).addClass('active');
    });	

	$('#rect0').on( 'click', function() {
		$('#about').show();
		$('#interactive').hide();
		$('#infographics').hide();
		$('#code').hide();
		$('#story').hide();
  	});
	$('#rect1').on( 'click', function() {
		$('#about').hide();
		$('#interactive').show();
		$('#infographics').hide();
		$('#code').hide();
		$('#story').hide();
	});
	$('#rect2').on( 'click', function() {
		$('#about').hide();
		$('#interactive').hide();
		$('#infographics').show();
		$('#code').hide();
		$('#story').hide();
	});
	$('#rect3').on( 'click', function() {
		$('#about').hide();
		$('#interactive').hide();
		$('#infographics').hide();
		$('#code').show();
		$('#story').hide();
	});
	$('#rect4').on( 'click', function() {
		$('#about').hide();
		$('#interactive').hide();
		$('#infographics').hide();
		$('#code').hide();
		$('#story').show();
	});


	$('.more').click(function(){
        $(this).find('.hiddenDetail').slideToggle();                 
        var $element = $(this).find('.infoText');
        $element.text(function(i, text) {
            return text === 'Read more...' ? '...Read less': 'Read more...';
        });
    });

	
	// Code for dropdown to load each sections
	 $('#inds').on('change',function(){
        var index=$(this).find(':selected').index();
		
        if(index === 0){
            $('#about').show();
			$('#interactive').hide();
			$('#infographics').hide();
			$('#code').hide();
			$('#story').hide();
        }else if(index === 1){
           $('#about').hide();
			$('#interactive').show();
			$('#infographics').hide();
			$('#code').hide();
			$('#story').hide();
        }else if(index === 2){
           $('#about').hide();
			$('#interactive').hide();
			$('#infographics').show();
			$('#code').hide();
			$('#story').hide();
        }else if(index === 3){
            $('#about').hide();
			$('#interactive').hide();
			$('#infographics').hide();
			$('#code').show();
			$('#story').hide();
        }else if(index === 4){
           	$('#about').hide();
			$('#interactive').hide();
			$('#infographics').hide();
			$('#code').hide();
			$('#story').show();
        }
    });
});

  