// Baynote Search Box for Expedia
// Last updated: 11/15/2010
var BaynoteEnabled=true;
var bn_response;
function baynote_handleFocus() {
    var b = document.getElementById("baynote_q");
    var a = document.getElementById("baynote_isDefault");
    if (a.value == "1") {
        a.value = "0";
        b.value = ""
    }
}
function baynote_handleBlur() {
    var b = document.getElementById("baynote_q");
    var a = document.getElementById("baynote_isDefault");
    if (b.value.length == 0) {
        b.value = "Search Expedia";
        a.value = "1"
    }
};
/*
// replaced by baynote_inline_handleSubmit() below form html
function baynote_handleSubmit() {
    var c = (document.getElementById("baynote_isDefault").value == "1") ? "" : document.getElementById("baynote_q").value;
    var b = document.getElementById("baynote_st").value;
    var e = document.getElementById("baynote_cn").value;
    var d = document.getElementById("baynote_cc").value;
    var a = "http://search.expedia.com/socialsearch/query?st=" + b + "&cn=" + e + "&cc=" + d + "&q=" + c;
    if (window.parent) {
        window.parent.document.location = a
    } else {
        window.location = a
    }
}
*/
function baynote_showSearchBox() {
    if (document.getElementById("baynote_searchBox")) {
        document.getElementById("baynote_searchBox").style.display = "block"
    }
}
function baynote_validateSearchBox() {
    if (typeof(BaynoteEnabled) != "undefined" && BaynoteEnabled) {
        if (window.location.href.indexOf("https://") == -1) {
			var bn_timeout = setInterval(function() {
				if (typeof bnWaitForCustomerStatus == 'function') {
					bnWaitForCustomerStatus(function(){
						bn_live=true;
						var times = 3;
						var bn_custom_timeout = setInterval(function() {
							if (typeof bnCustomSearchPolicyCheck != 'function' && times > 0) {
								times--;
							} else if (times == 0) {
								clearInterval(bn_custom_timeout);
							} else {
								bn_search_allowed = bnCustomSearchPolicyCheck();
								bn_response = bn_live && bn_search_allowed;
								if (bn_response) {
									baynote_showSearchBox();
								}
								clearInterval(bn_custom_timeout);
							}
						}, 200);
					});
					clearInterval(bn_timeout);
				}
			}, 200);
		}
	}
}