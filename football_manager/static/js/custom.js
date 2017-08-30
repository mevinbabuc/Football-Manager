/* MAIN MENU */
var ww = document.body.clientWidth;

jQuery(document).ready(function() {
  "use strict";
	jQuery('body').find("#mainmenu li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		}
	});
	
	jQuery('body').find(".toggleMenu").click(function(e) {
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery('body').find("#mainmenu").toggle();
	});
    adjustMenu();
});
  
jQuery(window).load(function () {
     jQuery('body').find("#mainmenu").css('pointer-events', 'auto');
});

jQuery(window).bind('resize orientationchange', function() {
  "use strict";
	ww = document.body.clientWidth;
	adjustMenu();
    if (ww < 900) {
        jQuery('body').find('#submenu').hide();
        jQuery('body').find('#submenu-login').hide();
    }
    else {
        jQuery('body').find('#submenu').show();
        jQuery('body').find('#submenu-login').show();
    }
});

var adjustMenu = function() {
  "use strict";
	if (ww < 900) {
		jQuery('body').find(".toggleMenu").css("display", "inline-block");
		if (!jQuery('body').find(".toggleMenu").hasClass("active")) {
			jQuery('body').find("#mainmenu").hide();
		} else {
			jQuery('body').find("#mainmenu").show();
		}
		jQuery('body').find("#mainmenu li").unbind('mouseenter mouseleave');
		jQuery('body').find("#mainmenu li a.parent").unbind('click').bind('click', function(e) {
			e.preventDefault();
			jQuery(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 900) {
		jQuery('body').find(".toggleMenu").css("display", "none");
		jQuery('body').find("#mainmenu").show();
		jQuery('body').find("#mainmenu li").removeClass("hover");
		jQuery('body').find("#mainmenu li a").unbind('click');
		jQuery('body').find("#mainmenu li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		jQuery(this).toggleClass('hover');
        jQuery(this).toggleClass('activelink');
        jQuery(this).find("ul").toggleClass('animatedfast');
        jQuery(this).find("ul").toggleClass('fadeInUp');
		});
        jQuery('body').find("#mainmenu ul li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            jQuery(this).toggleClass('hover');
            jQuery(this).find("ul li").toggleClass('animatedfast');
            jQuery(this).find("ul li").toggleClass('fadeInLeft');
		});
	}
};

jQuery("body").find('#mobile-menu').on("click", function (e) {
    e.preventDefault();
    jQuery('body').find('#submenu').toggle();
    jQuery('body').find('#submenu-login').toggle();
});

/* BACK TO TOP BUTTON */

jQuery(document).ready(function() {
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
    });
});

/////////////////* Info Boxes */////////////////////////

jQuery('body').find('.message-close').on("click", function () { 
   jQuery(this).parent().fadeOut();
});