// JavaScript Document


jQuery(document).ready(function() {
	
	"use strict";
		 
	// FLEXY MENU SETTING
	$(".flexy-menu").flexymenu({
		type: "vertical",
		indicator: true
	});
	
	// STICKY MENU
	var stickyNavTop = $('.header-section').offset().top;
  
	var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
		   
	if (scrollTop > stickyNavTop) {
		$('.header-section').addClass('sticky');
		} else {
			$('.header-section').removeClass('sticky');
		}
	};
	  
	stickyNav();
	  
	$(window).scroll(function() {
		stickyNav();
	});
		 
	// LAYERSLIDER SETTING
	$('#layerslider').layerSlider({
		skinsPath : 'layerslider/skins/',
		skin : 'v5',
		responsive : true,
		thumbnailNavigation : 'disabled',
		showCircleTimer: false,
		navPrevNext: false,
		navStartStop: true
	});
	
	// SYNCED SLIDER SETTING
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	  var width1 = $(".width1");
	  var width2 = $(".width2");
	 
	  sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		autoPlay: 4000,
		stopOnHover: true,
		navigation: false,
		pagination: false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
	  });
	 
	  width1.owlCarousel({
		items : 5,
		itemsDesktop      : [1024,5],
		itemsDesktopSmall     : [984,5],
		itemsTablet       : [767,5],
		itemsTabletSmall       : [719,3],
		itemsMobile       : [479,2],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });
	  
	  width2.owlCarousel({
		items : 7,
		itemsDesktop      : [1024,7],
		itemsDesktopSmall     : [984,5],
		itemsTablet       : [767,5],
		itemsTabletSmall       : [719,3],
		itemsMobile       : [479,2],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });
	 
	  function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	  }
	 
	  $("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	  });
	 
	  function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}
	 
		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}
		
	  }
	
	// SERVICE CAROUSEL SETTING
	var owl = $("#owl-service");
	owl.owlCarousel({
		itemsCustom : [
        [320, 1],
		[440, 2],
        [500, 2],
        [680, 3],
        [728, 3],
        [984, 4]
      ]
	});
	
	// TESTIMONIAL CAROUSEL SETTING
	var owl = $("#owl-testimonial");
	owl.owlCarousel({
		autoPlay: 3000,
		autoHeight: true,
		stopOnHover: true,
		itemsCustom : [
        [320, 1],
		[440, 1],
        [500, 1],
        [680, 1],
        [728, 1],
        [984, 1]
      ]
	});
	
	// TEAM CAROUSEL SETTING
	var owl = $("#owl-team");
	owl.owlCarousel({
		autoHeight: true,
		itemsCustom : [
        [320, 1],
		[440, 1],
        [500, 1],
        [680, 2],
        [728, 2],
        [984, 3]
      ]
	});
	
	// OUR CLIENTS CAROUSEL SETTING
	var owl = $("#owl-client");
	owl.owlCarousel({
		itemsCustom : [
        [320, 2],
		[440, 2],
        [500, 3],
        [680, 4],
        [728, 4],
        [984, 5]
      ]
	});
	
	// MEGAFOLIO PRO GALLERY SETTING
	var api=jQuery('.megafolio-container').megafoliopro(
        {
            filterChangeAnimation:"rotatescale",
            filterChangeSpeed:600,
            filterChangeRotate:99,
            filterChangeScale:0.6,          
            delay:20,
            paddingHorizontal:20,
            paddingVertical:20,
            layoutarray:[12]
        });
		
	var itemPage=jQuery('.megafolio-container.item-page').megafoliopro(
        {
            filterChangeAnimation:"rotatescale",
            filterChangeSpeed:600,
            filterChangeRotate:99,
            filterChangeScale:0.6,          
            delay:20,
            paddingHorizontal:20,
            paddingVertical:20,
            layoutarray:[12]
        });
		
	var related=jQuery('.megafolio-container.portfolio-related').megafoliopro(
        {
            filterChangeAnimation:"rotatescale",
            filterChangeSpeed:600,
            filterChangeRotate:99,
            filterChangeScale:0.6,          
            delay:20,
            paddingHorizontal:20,
            paddingVertical:20,
            layoutarray:[12]
        });
 
	// CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
	jQuery('.filter').click(function() {
        jQuery('.filter').each(function() { jQuery(this).removeClass("selected")});
        api.megafilter(jQuery(this).data('category'));
        jQuery(this).addClass("selected");
	});
	
	// COLORBOX SETTING
	$(".portfolio-popup").colorbox({
		inline:true,
		width:"450px"
	});
	
	function adjustStyle(width) {
		width = parseInt(width);
		if (width < 720) {
			$(".portfolio-popup").colorbox({
				inline:true,
				width:"300px"
			});
		}
	}

	$(function() {
		adjustStyle($(this).width());
		$(window).resize(function() {
			adjustStyle($(this).width());
		});
	});
	
	// FLEXSKIDER SETTING
	$(window).load(function() {
		$('.flexslider').flexslider({
			slideshowSpeed: 4000,
			animationSpeed: 800,
			pauseOnHover: true,
			controlNav: false,
			prevText: "",
			nextText: ""
		});
	});
	
	// SOCIAL SHARE BUTTON SETTING
	$('#shareme').sharrre({
		share: {
			twitter: true,
			facebook: true
		},
		template: '<div class="box"><h4 class="share-this">Share This</h4><a href="#" class="facebook"><img src="/images/social-media/top-social-media1.png" alt="facebook" /></a><a href="#" class="twitter"><img src="/images/social-media/top-social-media2.png" alt="tweet" /></a></div>',
		enableHover: false,
		enableTracking: true,
		render: function(api, options){
			$(api.element).on('click', '.twitter', function() {
				api.openPopup('twitter');
			});
			$(api.element).on('click', '.facebook', function() {
				api.openPopup('facebook');
			});
		}
	});
	
	// FIX VIDEO IFRAME Z-INDEX
	$('iframe').each(function(){
        var url = $(this).attr("src");
        if ($(this).attr("src").indexOf("?") > 0) {
        	$(this).attr({
        		"src" : url + "&wmode=transparent",
        		"wmode" : "Opaque"
        	});
        }
        else {
        	$(this).attr({
        		"src" : url + "?wmode=transparent",
        		"wmode" : "Opaque"
        	});
        }
    });
	
	//FANCYBOX
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	// TOOLTIP
	$('.tip').tooltip({
		"container": "body"
    });

	// PLACEHOLDER
	$.fn.placeholder();
	
	// EMAIL SUBMIT SETTING
	$("#email_submit").click(function() {
									
		$('#reply_message').removeClass();
		$('#reply_message').html('')
		var regEx = "";	 
								
		// validate Name				
		var name = $("input#name").val();  
		regEx=/^[A-Za-z .'-]+$/; 
		if (name == "" || name == "Name"  || !regEx.test(name)) { 
			$("input#name").val(''); 
			$("input#name").focus();  
			return false;  
		}
				
		// validate Email						  
		var email = $("input#email").val();  
		regEx=/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;											
		if (email == "" || email == "Email" || !regEx.test(email)) { 
			$("input#email").val(''); 
			$("input#email").focus();  
			return false;  
		}  
				
		// validate Subject				
		var mysubject = $("input#mysubject").val();  
		regEx=/^[A-Za-z .'-]+$/; 
		if (mysubject == "" || mysubject == "Mysubject"  || !regEx.test(mysubject)) { 
			$("input#mysubject").val(''); 
			$("input#mysubject").focus();  
			return false;  
		}
				
		// validate Comment			
		var comments = $("textarea#comments").val(); 
		if (comments == "" || comments == "Comments..." || comments.length < 2) { 
			$("textarea#comments").val(''); 
			$("textarea#comments").focus();  
			return false;  
		}  
									
		var dataString = 'name='+ $("input#name").val() + '&email=' + $("input#email").val() + '&mysubject='+ $("input#mysubject").val() + '&comments=' + $("textarea#comments").val();									
		$('#reply_message').addClass('email_loading');
				
		// Send form data to mailer.php 
		$.ajax({
			type: "POST",
			url: "mailer.php",
			data: dataString,
			success: function() {
				$('#reply_message').removeClass('email_loading');
				$('#reply_message').addClass('list3');
				$('#reply_message').html("Mail sent successfully")
				.hide()
				.fadeIn(1500);
				$('#form_contact')[0].reset();
					}
				});
			return false;
				
		});
		
	// GO TO TOP SETTING
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
		
	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})

});
