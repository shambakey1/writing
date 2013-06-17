// fetch ad server url and attach popunder click triggers
// this function should be called onload, but a default window.onload get overridden
// instead it is called at the end, when just loading ad server info this is fine


function setupPopunder() {
    tAPopUnder.loadAdInfo();
    //initPopunderTriggers();
}

function initPopunderTriggers() {
    // elements that trigger popunders
    var idList = ['tab-flthotel', 'tab-hotels', 'tab-cars', 'tab-flights'];

    // add popunder click handlers
    for (var n in idList) {
        var linkObj = document.getElementById(idList[n]);
        if (linkObj != null) {
            linkObj.onclick = function (e) {
                tAPopUnder.iniPopUnder();
                return true;
            }
        }
    }
}

var tAPopUnder = {
    topWin: null,
    popUnderWin: null,
    //reference to opened window
    popWindowUpdated: false,
    initUrl: "/static/default/default/html/popunder.html",
    cookieName: 'taPopUnder',
    cookieExpireDays: 7,
    adInfoUrl: "/static/default/default/stubs/adserver.json",
    tABaseURL: "http://www.tripadvisor.com/HotelLander",
    cookieVersion: 1,
    contentUrl: '',
    xmlhttp: null,

    //find top and left of window for positioning popup
    winX: function () {
        return (document.all) ? window.screenLeft : window.screenX;
    },
    winY: function () {
        return (document.all) ? window.screenTop : window.screenY;
    },

    popWindow: function () {
        try {
            tAPopUnder.popUnderWin = window.open("about:blank", 'tripadvisor', 'width=780px,height=565px,left=' + (tAPopUnder.winX() + 20) + 'px,top=' + (tAPopUnder.winY() + 20) + 'px,menubar=yes,scrollbars=yes,toolbar=yes,resizable=yes');
        } catch(e) {}
        if (tAPopUnder.popUnderWin) {
            tAPopUnder.popUnderWin.blur();

            if (navigator.userAgent.toLowerCase().indexOf("applewebkit") > -1) {
                topWin.window.blur();
                topWin.window.focus();
            }

            // workaround for Firefox blocking focus change
            tAPopUnder.popUnderWin.Init = function (e) {
                with(e) {
                    Params = e.Params;
                    Main = function () {

                        if (typeof window.mozPaintCount != "undefined") {
                            var x = window.open("about:blank");
                            x.close();
                        }

                        var popURL = Params.PopURL;

                        try {
                            opener.window.focus();
                        } catch (err) {}

                        window.location = popURL;
                    }

                    Main();
                }
            };

            tAPopUnder.popUnderWin.Params = {
                PopURL: tAPopUnder.initUrl
            }

            tAPopUnder.popUnderWin.Init(tAPopUnder.popUnderWin);
        }
    },
    iniPopUnder: function () {
        // added to handle Firefox
        topWin = self;

        if (top != self) {
            try {
                if (top.document.location.toString()) {
                    topWin = top;
                }
            } catch (err) {}
        }

        //check for survey window and the a/b test first
        var test = document.getElementById('test843');
        if (!Srvy.srvy_pop && test) {
            var popCookieObj = tAPopUnder.getCookie(tAPopUnder.cookieName);
            // set next date to 24 hours later
            var nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + 1);
            nextDate = nextDate.getTime();

            var currentDate = new Date();
            var created = currentDate.getTime();

            if (!popCookieObj) {
                var exdate = new Date();
                exdate.setDate(exdate.getDate() + tAPopUnder.cookieExpireDays);
                tAPopUnder.popWindow();
                tAPopUnder.setCookie(tAPopUnder.cookieName, {
                    v: tAPopUnder.cookieVersion,
                    created: created,
                    nextDate: nextDate,
                    numOpened: 1
                }, exdate);
            } else {
                // pop up if it's been 24 hours, and less than 3 times in 7 days
                var cookieNextDate = new Date(parseInt(popCookieObj.nextDate));
                var cookieCreated = new Date(parseInt(popCookieObj.created));
                var opened = popCookieObj.numOpened;
                if (cookieNextDate < currentDate && opened < 2) {
                    var expires = new Date();
                    var now = new Date();
                    var differenceMSec = (now.getTime() - cookieCreated.getTime());
                    var fromNow = new Date();
                    fromNow.setDate(now.getDate() + tAPopUnder.cookieExpireDays);
                    expires.setTime(fromNow.getTime() - differenceMSec); //(currentDate + 7) - (currentDate - cookieCreated)
                    tAPopUnder.popWindow();
                    tAPopUnder.setCookie(tAPopUnder.cookieName, {
                        v: tAPopUnder.cookieVersion,
                        created: cookieCreated.getTime(),
                        nextDate: nextDate,
                        numOpened: parseInt(opened) + 1
                    }, expires);
                }
            }
        }
    },
    setCookie: function (c_name, object, exdate) {
        var value = tAPopUnder.objectToCookieString(object);
        document.cookie = c_name + "=" + escape(value) + ((exdate == null) ? "" : ";expires=" + exdate.toUTCString());
    },
    getCookie: function (c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return tAPopUnder.cookieStringToObject(unescape(document.cookie.substring(c_start, c_end)));
            }
        }
        return false;
    },
    cookieStringToObject: function (string) {
        var object = {};
        var array = string.split(',');
        for (var i = 0; i < array.length; i++) {
            var pair = array[i].split('=');
            object[pair[0]] = pair[1];
        }
        return object;
    },
    objectToCookieString: function (object) {
        var array = [];
        for (var propertyName in object) {
            array.push(propertyName + '=' + object[propertyName]);
        };
        return array.toString();
    },
    getPopUrl: function () {
        if (tAPopUnder.contentUrl && !tAPopUnder.popWindowUpdated) {
            var pageId = document.getElementById('pageId');
            //var regionId = document.getElementById('neighborhoodRegion');
            if (typeof (s_exp) == "object" && s_exp.prop4) { // omniture value used by hotels team
                var regionId = (/\D/.test(s_exp.prop4)) ? false : s_exp.prop4;
                var pageName = s_exp.pageName;
            }

            if (pageName == 'page.Hotel-Search') { // if regionId, this is a hotel search
                tAPopUnder.popWindowUpdated = true;

		if (regionId)
	                return tAPopUnder.contentUrl + '?mcid=13572&eid=' + regionId;
                else
			return false;
            } else { // otherwise, check for flight search
                var multiOrig = document.getElementById('dprt');
                var multiDest = document.getElementById('dest');
                var oneWayOrig = document.getElementById('dairportcode');
                var oneWayDest = document.getElementById('aairportcode');
                var roundTripOrig = document.getElementById('inpDepartureLocations0');
                var roundTripDest = document.getElementById('inpArrivalLocations0');
                var origCode = false;
                var destCode = false;

                if (roundTripOrig && roundTripDest) { // multi-stop flight search
                    var origin = roundTripOrig.value;
                    var indexOfBracketOrig = origin.indexOf("(");
                    origCode = origin.substring(indexOfBracketOrig + 1, indexOfBracketOrig + 4);
                    var destination = roundTripDest.value;
                    var indexOfBracketDest = destination.indexOf("(");
                    destCode = destination.substring(indexOfBracketDest + 1, indexOfBracketDest + 4);
                } else if (multiOrig && multiDest) { // multi-stop flight search
                    origCode = multiOrig.value;
                    destCode = multiDest.value;
                } else if (oneWayOrig && oneWayDest) { // one-way flight search
                    origCode = oneWayOrig.value;
                    destCode = oneWayDest.value;
                }

                if (destCode && origCode) {
                    tAPopUnder.popWindowUpdated = true;
                    return tAPopUnder.contentUrl + '?mcid=13572&orig=' + origCode + '&dest=' + destCode;
                }
                return false;
            }
        }

        return false;
    },
    loadAdInfo: function () {
        var xmlhttp;
        var pageId = document.getElementById('pageId');
        var reqUrl = tAPopUnder.adInfoUrl;

        if (pageId) {
            reqUrl += '?pageId=' + pageId.value;
        }

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                tAPopUnder.adInfoLoaded(xmlhttp);
            }
        }

        xmlhttp.open("GET", reqUrl, true);
        xmlhttp.send(null);
    },
    adInfoLoaded: function (req) {
        var resp = req.responseText;

        if (resp != '' && req.status == '200') {
            var infoObj = eval('(' + resp + ')');
            if (infoObj.url) {
                tAPopUnder.contentUrl = infoObj.url;
            }
        } else {
            tAPopUnder.contentUrl = null;
        }
    }
}

setupPopunder();
