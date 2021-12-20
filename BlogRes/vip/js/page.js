 /**
 * jQuery Pagesajax v1.0
 * Client side pagination with jQuery
 * http://szelecom.com/Pagesajax
 *
 * Licensed under the SZ.Elec license.
 * Copyright 2016 Elecom
 */

jQuery(document).ready(function() {
    var echo_list = function(jQuerychildren, n) {
        var jQueryhiddenChildren = jQuerychildren.filter(":hidden");
        var cnt = jQueryhiddenChildren.length;
        for (var i = 0; i < n && i < cnt; i++) {
            jQueryhiddenChildren.eq(i).fadeIn();
        }
        return cnt - n; 
    }

    jQuery(".deanrankc dl").each(function() {
        var pagenum = jQuery(this).attr("pagenum") || 20;
        var jQuerychildren = jQuery(this).children();
        if (jQuerychildren.length > pagenum) {
            for (var i = pagenum; i < jQuerychildren.length; i++) {
                 jQuerychildren.eq(i).hide();
            }
            jQuery("<div class=\"deanmore_box\"><a id=\"deanmore\" class=\"deanaddmore\">点击加载更多<i class=\"icon-spinner\"></i></a></div><style>.echo_list{ width: 100%; max-height: 100%; overflow: visible}</style>").insertAfter(jQuery(this)).click(function() {
                if (echo_list(jQuerychildren, pagenum) <= 0) {
				    jQuery(this).html("<a id=\"more\" class=\"deanaddmore\">没有更多了...</a>");
                };
            });
        }
    });

});
