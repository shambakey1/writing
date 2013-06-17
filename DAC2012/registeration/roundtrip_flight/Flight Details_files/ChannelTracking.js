//configuration  --- can be put into separate file
//first flag indicates clear seoid
//second flag - null indicates check for SEMCID, true is to clear the cookie, false is don't clear the cookie
var SEO_SOURCES = {
    "www.google.":[true,null],
    "search.yahoo.com": [true, null],
    "wrs.yahoo.com":[true,null],
    "rc12.overture.com":[true,false],
    "bing.com/search":[true,null],
    "terra.es":[true,null],
    "ya.com":[true,null],
    "ricerca.virgilio.it":[true,null],
    "iltrovatore.it":[true,null],
	//IP address that iltrovatore search results come up on
    "213.215.201.230":[true,null],
    "orange.fr":[true,null],
    "lycos.":[true,null],
    "ask.com":[true,null],
    "search.aol.":[true,null],
    "askjeeves.":[true,null],
    "myway.com":[true,null],
    "altavista":[true,null],
    "baidu":[true, null]
};

var CHANNEL_TYPES = ["AFF","OLA","EML","MDP","SEM","OFF","MSN", "ICM","MCI", "SEO", "AFM"]
//end configuration


function tracking_array_contains(_array, obj) {
    var i = _array.length;
    while (i--) {
       if (_array[i] === obj) {
          return true;
       }
    }
    return false;
}


var tpid = GetP1CookieTpid();
var eapid = GetCookieValue("iEAPID", 0);


var ChannelType = "";
var ChannelID = "";
var ASPPersistentCookie = "";

//if not cookie, create a blank one
if (!GetASPPersistentCookie() > "") {
    SetASPPersistentCookie("v.1,0||||||||||||");
}

//grab previous cookie values of importance
var previousChannelID = GetCookieValue("aspp", 1, "|");
var previousChannelType = GetCookieValue("aspp", 10, "|");

var referrerAddress = document.referrer;

//if not AFF or WPK then if you came from SEO or FR, clear cookie
if (referrerAddress != "")
{
    
    // only applies to FR, DE and AT POSs
    //if ((tpid == 20) || (tpid == 6) || ((tpid == 6) && (eapid == 10122)))
	if (previousChannelID.slice(0,3).toLowerCase() != "wpk" && (tpid == 20 || 
		previousChannelType.toLowerCase() != "aff"))
    {
        // flag for remove SEOCID or not 
        // (need to be cleared if referrer is Goggle or Yahoo)
        var clearSeocid = false;
        // flag for clear cookie or not 
        // (need to be cleared if referrer is Goggle or Yahoo normal search /not sponsored link/)
        var clearCookie = false;

        //determine if you came from valid SEO source
        for (var site in SEO_SOURCES) {
            if (referrerAddress.toLowerCase().indexOf(site) > -1) {
                clearSeocid = SEO_SOURCES[site][0];
                if (SEO_SOURCES[site][1] == null) {
                    clearCookie = (referrerAddress.toLowerCase().indexOf("semcid") == -1);
                }
                else { clearCookie = SEO_SOURCES[site][1]; }
            }
        } 
        
        if (clearCookie)
        {
            // clear the cookie value
            SetASPPersistentCookie("v.1,0||||||||||||");
        }
        
        if (clearSeocid)
        {
            var urlAndQueryAttributes = window.location.toString().split("?");
            if (urlAndQueryAttributes.length > 1)
            {
                var url = urlAndQueryAttributes[0];
                var queryAttributes = urlAndQueryAttributes[1].split("&");
				var relocate = false;
                for (var index = 0; index < queryAttributes.length; index++)
                {
                    if (queryAttributes[index].toLowerCase().indexOf("seocid") == -1)
                    {
                        url += (index == 0) ? "?" : "&";
                        url += queryAttributes[index];
                    }
					else 
					{
						relocate = true;
					}
                }
				if( true == relocate )
				{
					window.location = url;
				}
            }
        }
    }
}

var ChannelType = GetChannelType();

if (ChannelType >"") {

    ChannelID = GetChannelID(ChannelType + "CID");

    if ((ChannelID > ""))
    {
        ASPPersistentCookie = GetASPPersistentCookie();

        if (!ASPPersistentCookie>"")
        {
            SetASPPersistentCookie("v.1,0||||||||||||");
            ASPPersistentCookie = GetASPPersistentCookie();
        }

        if (!IsLockedCode(previousChannelType,previousChannelID, ChannelType, ChannelID) ) {


            var expires = new Date(new Date().setTime(new Date().getTime() + 30 * 24 * 60 * 60 * 1000));  //Add 30 Days
            var expYear = expires.getFullYear().toString();
            var expMonth = (expires.getMonth() + 1).toString();
            if (expMonth.length < 2)
                expMonth = "0" + expMonth;
            var expDay = expires.getDate().toString();
            if (expDay.length < 2)
                expDay = "0" + expDay;
            var ChannelExpiry = expYear + expMonth + expDay
            var ASPPValues = ASPPersistentCookie.split("|");
            ASPPValues[1] = ChannelID;
            ASPPValues[10] = ChannelType;
            ASPPValues[11] = ChannelExpiry;

            ASPPersistentCookie = "";

            for (i = 0; i < ASPPValues.length; i++) {
                ASPPersistentCookie += ASPPValues[i] + "|";
            }
            ASPPersistentCookie = ASPPersistentCookie.substring(0, ASPPersistentCookie.length - 1);
            SetASPPersistentCookie(ASPPersistentCookie);
        }
    }  
}

if(location.search.indexOf("cntrkrdebug") > -1) {
 //show debug values
 alert("Previous Channel Type: " + previousChannelType + "\n Previous Channel ID: " + previousChannelID 
        + "\n Current Channel Type: " + ChannelType + "\n Current Channel ID: "+ ChannelID
        + "\n Cookie value: " + GetASPPersistentCookie());
}

function GetChannelType()   
{
    var tmp = location.search.substring(1).toUpperCase();
	if (tmp == "")
	{
		tmp = document.referrer.substring(document.referrer.indexOf("?")+1);
	}
    var i   = tmp.toUpperCase().indexOf("CID=");

    if ( i >= 3 )
    {
        var ct = tmp.substr(i-3,3).toUpperCase();
        
        if (!tracking_array_contains(CHANNEL_TYPES,ct))
        {
            if (tmp.indexOf("CID=") != tmp.lastIndexOf("CID="))
            {
                return (tmp.substr(tmp.lastIndexOf("CID=")-3,3));
            }
            else 
            { 
                return (""); 
            }
        }
        else
        {
            return (ct)
        }
    }
    return("");
}

function IsLockedCode(prevType, prevID, currentType, currentID) {
    return ( prevID.slice(0, 3) == "wpk" && currentID.slice(0,3) != "wpk" ); //only wpk for now
}

function GetChannelID(name)   
{
    var tmp = ( location.search.substring(1) );
	if (tmp == "")
	{
		tmp = document.referrer.substring(document.referrer.indexOf("?")+1);
	}
    var i   = tmp.toUpperCase().indexOf(name.toUpperCase()+"=");

    if ( i >= 0 )
    {
        tmp = tmp.substring( name.length+i+1 );
        i = tmp.indexOf("&");
        tmp = tmp.substring( 0, (i>=0) ? i : tmp.length );
        return  escape(tmp);
    }
    return("");
}

function GetASPPersistentCookie() {
    var start = document.cookie.indexOf("aspp=");
    var len = start+5;
    if ((!start) && ("aspp" != document.cookie.substring(0,4))) return null;
    if (start == -1) return null;
    var end = document.cookie.indexOf(";",len);
    if (end == -1) end = document.cookie.length;
    return document.cookie.substring(len,end);
}

function SetASPPersistentCookie(value) {
    var expires = new Date(new Date().setTime(new Date().getTime()+5*365*24*60*60*1000)); // 5 years
    document.cookie = escape("aspp") + "=" + value + "; expires=" + expires.toGMTString() + "; path=/";
    
    var domain = location.href.match( /:\/\/(www\.)?([^\/:]+)/ ); 
    if (domain > "")
    {
        domain = domain[2]?domain[2]:''; 
        document.cookie = escape("aspp") + "=" + value + "; expires=" + expires.toGMTString() + "; domain=." + domain + "; path=/";
    }
}

// this function is used to retrieve specific cookie values
function GetCookieValue(cookieName, index, splitter) {

    if (splitter == null) {
        splitter = ",";
    }
    cookieName = cookieName + "=";
    var start = document.cookie.indexOf(cookieName);
    var len = start + cookieName.length;
    if ((!start) && (cookieName != document.cookie.substring(0,cookieName.length))) return "";
    if (start == -1) return "";
    var end = document.cookie.indexOf(";",len);
    if (end == -1) end = document.cookie.length;
    
    var versionedValue = document.cookie.substring(len,end);
    var valueArray = versionedValue.split(splitter);
    
    if(valueArray[index] != null)
        return valueArray[index];
    else   
        return null;
}

// new function to parse P1 cookie to get TPID
function GetP1CookieTpid()
{
   var cookiename = "p1=";
   var start = document.cookie.indexOf(cookiename);
   var len = start + cookiename.length;
 
   if (start == -1) {
      return GetCookieValue("tpid",1);
   }
    var end = document.cookie.indexOf(";",len);
    if (end == -1) end = document.cookie.length;

   var valueArray = (document.cookie.substring(len,end)).split("`");

   for (var val = 0; val < valueArray.length; val++)
   {
     if ( valueArray[val].indexOf("tpid") != -1)
     {
        return valueArray[val].split(",")[1];
     }
   }
}
