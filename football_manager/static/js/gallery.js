// Jquery Browser Detection
(function() {
    "use strict";
    var matched, browser;
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };
    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};
    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }
    jQuery.browser = browser;
    jQuery.sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }
        jQuery.extend( true, jQuerySub, this );
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init( selector, context ) {
            if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
                context = jQuerySub( context );
            }
            return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };
})();

// Gallery Filters

var bw = document.body.clientWidth;

jQuery.fn.dysaniagrid = function (options) { 
var selector = jQuery(this);
     var settings = jQuery.extend({
            galleryid: '#gridbox1'
        }, options);
selector.find("li a").on("click", function (event) {
    event.preventDefault();    
    var filter = jQuery(this).data('filter');
    var item = jQuery(settings.galleryid).find("li");
    selector.find("li a").removeClass('active');
    jQuery(this).addClass('active');
    item.each(function () {
    if(filter === 'all') {
        item.removeClass('no-effect');
        item.css('cursor', 'pointer');
        if (jQuery.browser.msie && parseInt((jQuery.browser.version), 10) <= 9){
            item.css('visibility', 'visible');     
        }
            if (bw <= 480) {
            jQuery(this).css('display', 'block');   
        }
    }
    else if (jQuery(this).filter("[data-filter~=" + filter + "]").length) {      
        jQuery(this).removeClass('no-effect');
        jQuery(this).css('cursor', 'pointer');
        if (jQuery.browser.msie && parseInt((jQuery.browser.version), 10) <= 9){
            jQuery(this).css('visibility', 'visible');     
        }
        if (bw <= 480) {
            jQuery(this).css('display', 'block');   
        }
    }
    else {
        jQuery(this).addClass('no-effect');
        jQuery(this).css('cursor', 'default');
        if (jQuery.browser.msie && parseInt((jQuery.browser.version), 10) <= 9){
            jQuery(this).css('visibility', 'hidden');     
        }
        if (bw <= 480) {
            jQuery(this).css('display', 'none'); 
        }
    }
    });
});
};