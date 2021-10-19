
jQuery.fn.flexymenu = function(options){
	var settings = {
		 speed	 			: 300     				// dropdown speed (ms)
		,type	 			: "horizontal"    		// menu type arrangement
		,align	 			: "left"  				// menu alignment
		,indicator	 		: false     			// indicator that indicates a submenu
		,hideClickOut		: true     				// hide submenus when click outside menu
	}
	$.extend( settings, options );
	
	var bigScreen = false;
	var menu = $(this);
	var lastScreenWidth = window.innerWidth;
	
	if(settings.type == "vertical"){
		$(menu).addClass("vertical");
		if(settings.align == "right"){
			$(menu).addClass("right");
		}
	}
	
	if(settings.indicator == true){
		$(menu).find("li").each(function(){
			if($(this).children("ul").length > 0){
				$(this).append("<span class='indicator'>+</span>");
			}
		});
	}
	$(menu).prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");
	
	screenSize();
	
	$(window).resize(function() {
		if(lastScreenWidth <= 1024 && window.innerWidth > 1024){
			unbindEvents();
			hideCollapse();
			bindHover();
			if(settings.type == "horizontal" && settings.align == "right" && bigScreen == false){
				rightAlignMenu();
				bigScreen = true;
			}
		}
		if(lastScreenWidth > 1024 && window.innerWidth <= 1024){
			unbindEvents();
			showCollapse();
			bindClick();
			if(bigScreen == true){
				rightAlignMenu();
				bigScreen = false;
			}
		}
		lastScreenWidth = window.innerWidth;
	});
	
	function screenSize(){
		if(window.innerWidth <= 1024){
			showCollapse();
			bindClick();
			if(bigScreen == true){
				rightAlignMenu();
				bigScreen = false;
			}
		}
		else{
			hideCollapse();
			bindHover();
			if(settings.type == "horizontal" && settings.align == "right" && bigScreen == false){
				rightAlignMenu();
				bigScreen = true;
			}
		}
	}
	
	function bindHover(){
		if (navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0){						
			$(menu).find("a").on("click touchstart", function(e){
				e.stopPropagation(); 
				e.preventDefault();
				window.location.href = $(this).attr("href");
				$(this).parent("li").siblings("li").find("ul").stop(true, true).fadeOut(settings.speed);
				if($(this).siblings("ul").css("display") == "none"){
					$(this).siblings("ul").stop(true, true).fadeIn(settings.speed);
				}
				else{
					$(this).siblings("ul").stop(true, true).fadeOut(settings.speed);
					$(this).siblings("ul").find("ul").stop(true, true).fadeOut(settings.speed);
				}
			});
			
			if(settings.hideClickOut == true){
				$(document).bind("click.menu touchstart.menu", function(ev){
					if($(ev.target).closest(menu).length == 0){
						$(menu).find("ul").fadeOut(settings.speed);
					}
				});
			}
		}
		else{
			$(menu).find("li").bind("mouseenter", function(){
				$(this).children("ul").stop(true, true).fadeIn(settings.speed);
			}).bind("mouseleave", function(){
				$(this).children("ul").stop(true, true).fadeOut(settings.speed);
			});
		}
	}
	
	function bindClick(){
		$(menu).find("li:not(.showhide)").each(function(){
			if($(this).children("ul").length > 0){
				$(this).children("a").on("click", function(){
					if($(this).siblings("ul").css("display") == "none"){
						$(this).siblings("ul").slideDown(settings.speed);
					}
					else{
						$(this).siblings("ul").slideUp(settings.speed);
					}
				});
			}
		});
	}
	
	function showCollapse(){
		$(menu).children("li:not(.showhide)").hide(0);
		$(menu).children("li.showhide").show(0).bind("click", function(){
			if($(menu).children("li").is(":hidden")){
				$(menu).children("li").slideDown(settings.speed);
			}
			else{
				$(menu).children("li:not(.showhide)").slideUp(settings.speed);
				$(menu).children("li.showhide").show(0);
			}
		});
	}
	
	function hideCollapse(){
		$(menu).children("li").show(0);
		$(menu).children("li.showhide").hide(0);
	}	
	
	function rightAlignMenu() {
		$(menu).children("li").addClass("right");
		var menuItems = $(menu).children("li");
		$(menu).children("li:not(.showhide)").detach();
		for(var i = menuItems.length; i >= 1; i--){
			$(menu).append(menuItems[i]);
		}		
	}
	
	function unbindEvents(){
		$(menu).find("li, a").unbind();
		$(document).unbind("click.menu touchstart.menu");
		$(menu).find("ul").hide(0);
	}
}
