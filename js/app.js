
$(document).ready(function(){
	"use strict";

	$('#about').show();

	// Code for buttons to load each sections
	$('.bttn').on('click', function(event){
		document.location.href=$(this).attr('data');
	});

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


	$('ul.nav li a').on('click', function(event){
		// console.log('hahahah')
		event.preventDefault();
	
		$('body, html').animate({ scrollTop: 0 });
    	
		var $el = $(this);
	
        var id = $el.attr('href');
		
		id = id.replace("#","")
		route(id);	
	});


	var offsetTop = 108;

	function sticky_relocate() {
	    var window_top = $(window).scrollTop();
	    var div_top = $('#sticky-anchor').offset().top-70;
	    if (window_top > div_top) {
	        $('#sticky').addClass('stick');
	    } else {
	        $('#sticky').removeClass('stick');
	    }
	}
		
	$(function () {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});
		

   function route(id){			
		var $el = $( "a[href='#"+id+"']" ).parent()
		
		var title = $( "a[href='#"+id+"']" ).html()
		if( $el.hasClass('active') ){
            return;
        }	
		d3.select("#section-label")
			.html(title)
		
		
		$el.addClass('active')
			.siblings()
			.removeClass('active');
		$("#navbar").collapse('hide')

	
        $('section.graphic-section.selected').removeClass('selected');		
		$("#"+id).addClass('selected');							
		

		if(id === "about"){
            $('#about').show();
			$('#interactive').hide();
			$('#infographics').hide();
			$('#code').hide();
			$('#story').hide();
        }else if(id === "interactive"){
           $('#about').hide();
			$('#interactive').show();
			$('#infographics').hide();
			$('#code').hide();
			$('#story').hide();
        }else if(id === "infographics"){
           $('#about').hide();
			$('#interactive').hide();
			$('#infographics').show();
			$('#code').hide();
			$('#story').hide();
        }else if(id === "code"){
            $('#about').hide();
			$('#interactive').hide();
			$('#infographics').hide();
			$('#code').show();
			$('#story').hide();
        }else if(id === "story"){
           	$('#about').hide();
			$('#interactive').hide();
			$('#infographics').hide();
			$('#code').hide();
			$('#story').show();
        }
   }


	
});

  