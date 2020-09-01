$(function(){
   $(window).on('load', function(){
    $('.perloader').delay(500).fadeOut(500);
});  
    
 $('.back-top').click(function(){
     $('html,body').animate({scrollTop: 0},2000);
 });  
    
    $(window).scroll(function(){
     var scrolling = $(this).scrollTop();
     if(scrolling >100){
         $('.navbar').addClass('bg');
     }else{
         $('.navbar').removeClass('bg');
     }
 });   
    
    $(".typed").typed({
		strings: ["clean.", "and.", "minimal.","look."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	}); 
    
});