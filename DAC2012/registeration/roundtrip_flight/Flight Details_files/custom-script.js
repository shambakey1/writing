//Baynote custom.js for Expedia
//2:34 PM 09/02/2010
//Version 0.0.0
function bnCustomSearchPolicyCheck() {
	return true;
}

var BN_BASE_URL = "http://www.expedia.com/pub/agent.dll";

//JS StringBuffer
function baynote_StringBuffer() {
	this.buffer=[];
}

//Append a string to the current buffer
baynote_StringBuffer.prototype.append = function append(string) {
	this.buffer.push(string);
	return this;
};

//Return the buffer as a string
baynote_StringBuffer.prototype.toString=function toString() {
	return this.buffer.join("");
};
/************************************************
*	baynote_urlFactory
*
*	Construct a meaningful, useable URL from the
*	current page context.
*	Sets baynote_tag.url to that constructed URL.
*
***********************************************/
function baynote_urlFactory(tag) {
	var currentUrl = window.location.href;

	// Keep "daily" pages and htx scripts as is
	if (currentUrl.indexOf("expedia.com/daily/") != -1 || currentUrl.indexOf(".htx") != -1) {
		tag.url = currentUrl;
		return;
	}

	// Get the qscr value
	var qscrValue = baynote_getQscrValue();
		
	// If we know this qscr, then start to collect the info
	if (qscrValue) {
	    switch (qscrValue) {
		/*// Hotel search
		case "htwv":
			baynote_htwv(tag);
			break;*/
		// Hotel Detail
		case "dspv":
			baynote_dspv(tag);
			break;
		// Vacation package property detail
	/*	case "cmfd":
		case "cmhi":
		case "cmpk":
			baynote_cmhi(tag);
			break;*/
		// Vacation package search
		//case "cmsh":
		//	baynote_cmsh(tag);
		//	break;
		// Activity detail
		case "tsdt":
			baynote_tsdt(tag);
			break;
		// Activity search
		case "tshw":
			baynote_tshw(tag);
			break;
		/* Cruises are out for now - can't work around 
			excessively large URL param
		// Cruise detail
		case "ksif":
			baynote_ksif();
			break;
		// Cruise search
		case "kruz":
			baynote_kruz();
			break;
		
		// Flight search
		case "fexp":
			baynote_fexp(tag);
			break;*/
	    }
	}

	// If baynote_tag.url has not been set by one of the above helper functions,
	// then this page is unknown and should not be recommended
	// **this is no longer true as expedia is changing their site.**
	//if (!tag.url) {
	//	tag.url = baynote_addURLParam(currentUrl, "bn_ignore", "true");
	//}
}
/************************************************
*	baynote_getUrlParamValue
*
*	Get the value of a URL parameter
*
*	Parameters
*		paramName:	the name of the parameter
*
*	Return
*		String that is the parameter value or the
*		empty string if it is not found.
*
***********************************************/
function baynote_getUrlParamValue(paramName) {
 var url = window.location.href;
 var regex = new RegExp("[\\?&\/]"+paramName+"=([^&#\/]*)");
 var match = regex.exec(url);

 if (!match){ return "";}
 else{ return match[1];}
}
/************************************************
*	baynote_addURLParam
*
*	Appends the specified parameter with the
*	specified value to the url
*
*	Return
*		A new URL with the specified 
*		parameter and value appended.
*
***********************************************/
function baynote_addURLParam(url, paramName, value) {
  if (!url){ return url;}
      
  var urlLength = url.length;
  var newUrl = new baynote_StringBuffer();
  var insertedChar;
  var baseUrl = url;
  var baseUrlLength = urlLength;
  var anchor = null;
      
  var anchorIndex = url.indexOf('#');                 
  if (anchorIndex >= 0) {
      baseUrl = url.substring(0, anchorIndex);
      if (baseUrl == ""){ return url;}
      baseUrlLength = baseUrl.length;
      anchor = url.substring(anchorIndex, urlLength);
  }

  var lastChar = baseUrl.charAt(baseUrlLength - 1);        
  if (lastChar == '?' || lastChar == '&') {
      insertedChar = null;
  } else if (baseUrl.indexOf('?') >= 0) {
      insertedChar = '&';
  } else {
      insertedChar = '?';
  }
              
  newUrl.append(baseUrl);
  if (insertedChar){ newUrl.append(insertedChar);}
  newUrl.append(paramName);
  newUrl.append('=');
  newUrl.append(value);            
  if (anchor){ newUrl.append(anchor);}

  return newUrl.toString();
}
/************************************************
*	baynote_getQscrValue
*
*	Get the value of the URL parameter "qscr". 
*	This parameter identifies the type of page
*	we are on.  Sometimes found in 'qsfr' 
*	instead.
*
*	Return
*		String that is the "qscr" value or the
*		empty string if it is not found.
*
***********************************************/
function baynote_getQscrValue() {
	var qscrValue = baynote_getUrlParamValue("qscr");
	if (qscrValue) {return qscrValue;}

	var qsfrValue = baynote_getUrlParamValue("qsfr");
	if (qsfrValue) {return qsfrValue;} 

	return "";
}
/************************************************
*	baynote_getCommentedValue(name, node)
*
*	Recursively spelunk the DOM to find a comment 
*	that holds the name:value and return value.
*
*	Parameters
*		name:	The name of the comment
*		node:	the DOM node to search
*		level:	The depth of the search
*
*	Return
*		String that is the value paired with name
*		 or the empty string if it is not found.
*
***********************************************/
function baynote_getCommentedValue(name, node) {
	// If we are called without a starting point return the empty string
	if (!node) {return "";}

	var nodeName = node.nodeName;
	// Look for this to be a comment
	if (nodeName && (nodeName == "#comment")) {
		var nodeValue = node.nodeValue;
		if (nodeValue) {
			// Check to see if it has name in the comment
			if ((nodeValue.indexOf(':') != -1) && (nodeValue.indexOf(name) != -1)) {
				var commentName = nodeValue.substring(0, nodeValue.indexOf(':')).replace(/^\s+|\s+$/g,"");
				if (commentName == name) {
					var index = nodeValue.indexOf(":");
					var commentValue = nodeValue.substring(index + 1, nodeValue.length);
					// Extract the value and clean it up
					if (commentValue) {
						return (commentValue.replace(/^\s+|\s+$/g,""));
					}
				}
			}
		}
	}
		
	// Didn't find it, process node's children
	var children = node.childNodes;
	for (var i = 0; i < children.length; i++) {
		var retVal = baynote_getCommentedValue(name, children[i]);
		if (retVal){ return retVal;}
	}

	return "";
}
/************************************************
 *	baynote_getCommentTagValue(tagId)
 *
 *	Find a <COMMENT ID=tagId>  and return the 
 *	value of the value attribute.
 *
 *	Parameters
 *		tagId:	The ID of the comment tag
 *
 *	Return
 *		String that is the value of the value 
 *		attribute or the empty string if it is 
 *		not found.
 *
 ***********************************************/
function baynote_getCommentTagValue(tagId) {
	var tagBn = document.getElementById(tagId);
	if (!tagBn) {return "";}
	
	var value = tagBn.attributes.getNamedItem("value").value;
	return value;
}
/************************************************
 *	baynote_htwv()
 *
 *	Build the URL for a dateless hotel search
 *
 *	URL Parameters
 *		qscr:	htwv - known
 *		loid:	Found in a comment
 *		stat:	1 - known
 *		rdct:	1 - known
 *
 ***********************************************/
function baynote_htwv(tag) {
	var loid = baynote_getCommentedValue("loid", document);
	if (!loid) {return;}
	tag.url = BN_BASE_URL + "/qscr=htwv/loid=" +
			loid + "/stat=1/rdct=1/";
}
/************************************************
 *	baynote_dspv()
 *
 *	Build the URL for a hotel detail page
 *
 *	URL Parameters
 *		qscr:	dspv - known
 *		htid:	Found in a the form field 
 *				HDtl.htid
 *		crti:	int - found in a comment as <!--crti:value-->
 *		rdct:	1 - known
 *
 ***********************************************/
function baynote_dspv(tag) {
	var form = document.HDtl;
	if (!form){ return;}

	var htidField = form.htid;
	if (!htidField){ return;}
	var htidValue = htidField.value;

	var crti = baynote_getCommentedValue("crti", document);
	if (!crti){ crti = "0";}

	tag.url = BN_BASE_URL + "/qscr=dspv/htid=" + htidValue + 
			"/crti=" + crti + "/rdct=1/";
}
/************************************************
 *	baynote_cmhi()
 *
 *	Build the URL for a hotel detail page in 
 *	Vacation Packages
 *
 *	URL Parameters
 *		qscr:	cmhi - known
 *		htid:	Found in a the form field 
 *				HDtl.htid
 *		crti:	int - found in a comment as <--crti:value-->
 *		rdct:	1 - known
 *
 ***********************************************/
function baynote_cmhi(tag) {
	var form = document.PTOL;
	if (!form) {return;}

	var htidField = form.htid;
	if (!htidField){ return;}
	var htidValue = htidField.value;

	form = document.HDtl;
	if (!form){ return;}

	var crti = baynote_getCommentedValue("crti", document);
	if (!crti){ crti = "0";}

	tag.url = BN_BASE_URL + "/qscr=cmhi/rdct=1/htid=" + 
		htidValue + "/crti=" + crti + "/";
}
/************************************************
 *	baynote_tsdt()
 *
 *	Build the URL for an Activity detail page
 *
 *	URL Parameters
 *		qscr:	tsdt - known
 *		loid:	int - MainForm.loid
 *		wtid:	int - MainForm.wtid
 *		stat:	int - MainForm.stat
 *		ofid:	int - MainForm.ofid
 *		rdct:	1 - known
 *
 ***********************************************/
function baynote_tsdt(tag) {
	var form = document.MainForm;
	if (!form){ return;}

	var loidField = form.loid;
	if (!loidField){ return;}
	var loidValue = loidField.value;

	var wtidField = form.wtid;
	if (!wtidField){ return;}
	var wtidValue = wtidField.value;

	var statField = form.stat;
	if (!statField) {return;}
	var statValue = statField.value;

	var ofidField = form.ofid;
	if (!ofidField) {return;}
	var ofidValue = ofidField.value;
	
	tag.url = BN_BASE_URL + "/qscr=tsdt/loid=" + 
		loidValue + "/ofid=" + ofidValue + "/stat=" + statValue + 
		"/wtid=" + wtidValue + "/rdct=1/";
}
/************************************************
 *	baynote_tshw()
 *
 *	Build the URL for a dateless activity search
 *
 *	URL Parameters
 *		qscr:	tshw - known
 *		loid:	int - Dtls.loid
 *		stat:	1 - known
 *		rdct:	1 - known
 *
 ***********************************************/
function baynote_tshw(tag) {
	var form = document.Dtls;
	if (!form){ return;}

	var loidField = form.loid;
	if (!loidField){ return;}
	var loidValue = loidField.value;

	tag.url = BN_BASE_URL + "/qscr=tshw/loid=" + 
			loidValue + "/stat=1/rdct=1/";
}
/************************************************
 *	baynote_fexp()
 *
 *	Build the URL for a dateless flight search
 *
 *	URL Parameters
 *		qscr:	fexp - known
 *		city1:	string - 
 *				<comment id=TravelHookOrig value=city1>
 *		citd1:	string - 
 *				<comment id=TravelHookDest value=city2>
 *		flag:	q - known
 *		rdct:	1 - known
 *
 ***********************************************/
function baynote_fexp(tag) {
	var city1 = baynote_getCommentTagValue("TravelHookOrig");
	if (!city1){ return;}

	var city2 = baynote_getCommentTagValue("TravelHookDest");
	if (!city2){ return;}

	tag.url = BN_BASE_URL + "/qscr=fexp/city1=" + 
				city1 + "/citd1=" + city2 + "/flag=q/rdct=1/";
}

/************************************************
 *	baynote_cmsh()
 *
 *	Build the URL for a Vacation Package search
 *
 *	URL Parameters
 *		qscr:			cmsh - known
 *		CMBTX_0_rgnm:	string - 
 *						<comment id=TravelHookOrig value=city1>
 *		subm:			1 - known
 *		rdct:			1 - known
 *
 ***********************************************/
function baynote_cmsh(tag) {
	var cmbtx = baynote_getCommentTagValue("TravelHookDest");
	if (!cmbtx){ return;}
	tag.url = BN_BASE_URL + "/qscr=cmsh/CMBTX_0_rgnm=" + 
			cmbtx + "/subm=1/rdct=1/";
}

/************************************************
 *	baynote_setGuid()
 *
 *	Extract the 128-bit GUID from the 
 *	expedia.com:MC1 cookie and hash it into 
 *	64-bit number for Baynote.
 *
 *	Parameters
 *		none
 *
 *	Return
 *		none
 *
 ***********************************************/
function baynote_getGuid() {
	var success = false;
         var mc1 = bnSystem.getCookieValue("MC1");

	// If we found the cookie, get the GUID and hash it for Baynote
         if (mc1 &&  mc1.indexOf("GUID=") == 0) {
                 // Cut the GUID into four pieces
                 var guid = mc1.substring(5, mc1.length);
                 var h1Len = guid.length >> 1;
                 var firstHalf = guid.substring(0, h1Len);
                 var q1Len = firstHalf.length >> 1;
                 var part1 = firstHalf.substring(0, q1Len);
                 var part2 = firstHalf.substring(q1Len, firstHalf.length);
                 var secondHalf = guid.substring(h1Len, guid.length);
                 var q2Len = secondHalf.length >> 1;
                 var part3 = secondHalf.substring(0, q2Len);
                 var part4 = secondHalf.substring(q2Len, secondHalf.length);
                 // XOR the two parts for two 32-ish bit ints. Truncate the high 3 bits of
                 // the first value to avoid 64-bit overflow. Truncate the high bit in the
                 // second value to keep it positive.
                 var firstValue = (parseInt(part1, 16) ^ parseInt(part2, 16)) & 0x1FFFFFFF;
                 var secondValue = (parseInt(part3, 16) ^ parseInt(part4, 16)) & 0x7FFFFFFF;
                 // Concatenate them for a 64-ish bit int.
                 var finalValue = "" + firstValue + secondValue;

                 // Set the Baynote UID
                 return finalValue;
	}
	
	return "ANONYMOUS";
}
/**
 *	baynote_getMetaValue(metaName)
 *
 *	Extract the value of the content element of a <meta> tag.  This
 *	performs a case insensensitive comparison of the name.
 *
 *	Parameter
 *	---------
 *	metaName - String The name of the <meta> tag from which to get the
 *				value.
 *
 *	Returns
 *	-------
 *	String - The value of the content attribute of the meta key or the
 *				empty string.
 *
 */
function baynote_getMetaValue(metaName) {
	if (!metaName){ return "";}
	var metas = document.getElementsByTagName('meta');
	for (var i = 0; i < metas.length; i++) {
		if (metas[i].name.toLowerCase() == metaName.toLowerCase()) {
			return metas[i].content;
		}
	}
	return "";
}
/**
 *	baynote_getSummaryFromParagraphs()
 *
 *	Get a usable summary from <p> tags in a page.  It will build a 
 *	summary at of between 80 and 180 characters.  All HTML will be
 *	stripped out.
 *
 *	Returns
 *	-------
 *	String - The summary up to 180 characters long or the empty string
 *
 */
function baynote_getSummaryFromParagraph() {
	var summary = "";
	var paragraphs = document.getElementsByTagName("p");
	if (!paragraphs){ return "";}
	
	for (var i = 0; i < paragraphs.length; i++) {
		if (!paragraphs[i]){ return "";}
		if (paragraphs[i].innerHTML != "") {
			if (summary != ""){ summary = summary + " ";}
			summary = summary + baynote_removeHtml(paragraphs[i].innerHTML);
			if (summary.length > 180){ summary = summary.substring(0,180);}
		}
		if (summary.length > 80){ return summary;}
	}
	return summary;
}
/**
 *	baynote_removeHtml(raw)
 *
 *	Clean up a string by removing any HTML or patial HTML, new lines,
 *	and spaces from both ends.
 *
 *	Parameter
 *	---------
 *	raw - String The raw string to be cleaned.
 *
 *	Returns
 *	-------
 *	String - The cleaned input string
 *
 */
function baynote_removeHtml(raw) {
	if (!raw) return;
	raw = raw.replace(/\<[^>]*\>/g, "");
	raw = raw.replace(/\<.*/, "");
	raw = raw.replace(/\&nbsp;/g, " ");
	raw = raw.replace(/^\s+/, "");
	raw = raw.replace(/\s+$/, "");
	raw = raw.replace(/\n/g, " ");
	return raw;
}
/**
 *	baynote_getSummary()
 *
 *	Get a usable summary first from the <meta> tag named "description"
 *	then build one from <p> tags.
 *
 *	Returns
 *	-------
 *	String - A best attempt at a summary.
 *
 */
function baynote_getSummary() {
	var summary = baynote_getMetaValue("description");
	if (summary != ""){ return summary;}
	else{ summary = baynote_getSummaryFromParagraph();}
	return summary;
}
/************************************************
 *	baynote_getPageId()
 *
 *	Find a <COMMENT ID=PageId>  and return the 
 *	value of the title attribute.
 *
 *	Return
 *		String that is the value of the title 
 *		attribute or the empty string if it is 
 *		not found.
 *
 ***********************************************/
function baynote_getPageId() {
	var tagId = document.getElementById("PageId");
	if (!tagId){ return "";}
	
	var value = tagId.attributes.getNamedItem("title").value;
	return value;
}
function myPreHandler(tag) { 
	
	if (typeof tag != 'undefined' &&  typeof tag.type != 'undefined' && tag.type==bnConstants.OBSERVER_TAG)   {	
		baynote_globals.cookiesDisabled = true;
		baynote_globals.checkStatus = false;
		var baynote_qscrValue = baynote_getQscrValue();
		if (baynote_qscrValue == "cars") {
			baynote_globals.skipLinkCount = true;
			baynote_globals.skipWordCount = true;
		}
		tag.userId = baynote_getGuid();
		tag.summary = baynote_getSummary();
		tag.docAttrs = new Object();
		tag.docAttrs.PageId = baynote_getPageId();
		baynote_urlFactory(tag);  // Sets baynote_tag.url to a useable URL
		if (window.location.href.indexOf("https://") == 0) {
			// baynote_tag.noshow();
		} else {
			//BaynoteAPI.execute("observer");  // Fire the observer
		}
		
	} // code that runs before the observer fires
  
	/*if (typeof tag != 'undefined' &&  typeof tag.type != 'undefined' && tag.type==bnConstants.GUIDE_TAG)   {	
		
		var query = BaynoteAPI.getURLParam("q");
		if (query != "") 
		tag.query = query;	
		
		var bn_locHref = BaynoteAPI.getFullURL();

		if(bn_locHref.match(/(https?)(:\/\/.*)(site.*)/) )  {
           	tag.url = bn_locHref.replace(/(https?)(:\/\/.*)(site.*)/, "$1://www.$3");
        } 
		
		if(bn_locHref.match(/(https?)(:\/\/)([0-9.]+)(.*)/))  {
	       tag.url = bn_locHref.replace(/(https?)(:\/\/)([0-9.]+)(.*)/, "$1://www.site.com$4");
		}
	
		//do stuff before recs have loaded
	}
*/	
    return true;      
} 

function myPostHandler(tag) {
/*
	if (typeof tag != 'undefined' &&  typeof tag.type != 'undefined' && tag.type==bnConstants.GUIDE_TAG)   {	
		//do stuff after recs have loaded
		}
*/
	return true;
}
   // register the event handler
baynote_globals.onBeforeTagShow.push(myPreHandler);
baynote_globals.onTagShow.push(myPostHandler); 
bnResourceManager.registerResource(baynote_globals.ScriptResourceId); 