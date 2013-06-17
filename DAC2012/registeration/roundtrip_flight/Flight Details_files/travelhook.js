try
{

  var th_StaticStart = new Date();
  var thsver = '6.60';
  var thsrn = Math.floor(Math.random() * 1000000);
  var th_domain = 'extras.expedia.com';

  function getEndvrTUID() 
  {
     var p1 = THGetCookie("p1");
     var s1 = THGetCookie("s1");
     if(p1 == null) p1="";
     if(s1 == null) s1="";

     var tuid="";
     if(p1.indexOf("adinf=") != -1) 
     {
       tuid = getAdinf(p1);
     }
     else if(s1.indexOf("adinf=") != -1) 
     {
       tuid = getAdinf(s1);
     }
     else 
     {
       // Its an old cookie!!! call the old cookie format
       tuid = getOldEndvrTUID(); 
     }
     
     if (tuid == null) tuid ="";
     
     return tuid;
  }

  function getAdinf(p1cookie) 
  {
     var tuid=""
     var adinfarr = p1cookie.split("`");
     if(adinfarr.length > 0) 
     {
       for(var i=0; i<adinfarr.length; i++) 
       {
         if (adinfarr[i].indexOf("adinf=") != -1) 
         {
           var atuidarr = adinfarr[i].split("|");
           if(atuidarr[3] != null) 
           {
             tuid = atuidarr[3];
           }
         }
       }
     }
     return tuid;
  }
      
  function getOldEndvrTUID() 
  {
    var strTUID = "";
    var adinstr = THGetCookie("adinf");
    if (adinstr != null) 
    {
      var adinfarr = adinstr.split("|");
      if(adinfarr[3] != null)
	    strTUID = adinfarr[3];
    }
    return strTUID;
  }

  function hasTUID() 
  {
    return getEndvrTUID().length > 0;
  }

  function getEndvrGUID() 
  {
      var strGUID = "";
      var mc1str = THGetCookie("MC1");
      if (mc1str != null) 
      {
        var mc1strarr = mc1str.split("=");
        if(mc1strarr[1] != null)
          strGUID = mc1strarr[1];
      }
      return strGUID;
  }

  function THGetUserType() 
  {
    var strUserType = "";
    var adinstr = THGetCookie("adinf");
    if (adinstr != null) 
    {
      var adinfarr = adinstr.split("|");
      if(adinfarr[1] != null)
	    strUserType = adinfarr[1];
    }
    return strUserType;
  }

  function THGetCookie(c_name) 
  {
 	    if (document.cookie.length>0) 
	    {
		    c_start=document.cookie.indexOf(c_name + "=");
		    if (c_start!=-1) 
		    {
			    c_start=c_start + c_name.length+1;
			    c_end=document.cookie.indexOf(";",c_start);
			    if (c_end==-1)
				    c_end=document.cookie.length;

			    return unescape(document.cookie.substring(c_start,c_end));
		    }
	    }
	    return null;
  }

  function THBrowserValid()
  {
    if(THGetCookie('th_DevTest') != null && THGetCookie('th_DevTest') != "")
    	return true;
    var agt=navigator.userAgent.toLowerCase();
    var is_major = parseInt(navigator.appVersion);
    var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
    var is_ie3    = (is_ie && (is_major < 4));
    var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
    var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
    var is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
    // IE 6 and up
    if(is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5) return true;
    var is_ff =  (navigator.userAgent.indexOf("Firefox")!=-1);
    // FF (Moz 5 and up)
    if(is_ff && is_major >= 5) return true;
    // Safari 3 and up
    var is_saf = (navigator.userAgent.indexOf("Safari")!=-1);
    if(is_saf && is_major >= 3) return true;
    // Google chrome 
    var is_gc = (navigator.userAgent.indexOf("Chrome")!=-1);
    if(is_gc) return true;

   return false;
  }

  function THGetTravelers(Span)
  {
	var travelers = "";
	var Start;
	var list = Span.getElementsByTagName("H5");
	if (list.length > 0)
	{
		var s = list.item(0).innerHTML;
		Start = s.indexOf('</B>');
		if(Start == -1) Start = s.indexOf('</b>');
		if(Start != -1)
		{
			var End = s.indexOf("-", Start);
			if(End == -1) End = s.length;
			travelers = s.substring(Start + 4, End);
			travelers = travelers.replace(/^\s*|\s*$/g,"");
		}
	}
	return travelers;
  }
  function THGetItinNum()
  {
	var r = "";
	var itid;
	var Start;
	r = document.body.innerHTML;
	if (r)
	{
		Start = r.indexOf("itid=", 0);
		if(Start > 0)
		{
			Start += 5;
			var End = r.indexOf('&', Start);
			if(End - Start > 15) End = r.indexOf('"', Start);
			if(End - Start <= 15)
			{
				itid = r.substring(Start, End);
			}
		}
	}
	return itid;

  }
  function th_CallTealeaf(script)
  {
	if(document.URL.indexOf("expedia.com") >= 0)
	{
		var tealeaf_Script = document.createElement("script");
		var thspsrn = Math.floor(Math.random() * 1000000);
		tealeaf_Script.src = '/daily/promos/tealeafblank.asp?thScript=' + script + '&thrn=' + thspsrn;
		document.body.insertBefore(tealeaf_Script, document.body.firstChild);
	}
  }

var pg;
  function THCheckPage()
  {
    
	if(document.getElementById("THTopCall")) return;

      if(document.getElementById("pageId"))
      {
        if(document.getElementById("pageId").value)
          pg = document.getElementById("pageId").value;
        else
          pg = document.getElementById("pageId").title;
      }
      else if(document.getElementById("PageId"))
      {
        if(document.getElementById("PageId").value)
          pg = document.getElementById("PageId").value;
        else
          pg = document.getElementById("PageId").title;
      }
      else
      {
      	var Comments = document.getElementsByTagName("COMMENT");
      	for(i =0;i<Comments.length;i++)
      		if(Comments.item(i).title.indexOf('HTX') == 0) { pg = Comments.item(i).title; break; }
      }

      if(pg == "HTX_HOTRESV" || pg == "HTX_HOTRESV_ESR") th_CallTealeaf('prestatic');


    if(THBrowserValid())
    {
          var Orig = "";
        if(document.getElementById("TravelHookOrig")) 
          Orig = document.getElementById("TravelHookOrig").getAttribute("value");
       
        var Dest = "";
        if(document.getElementById("TravelHookDest")) 
          Dest = document.getElementById("TravelHookDest").getAttribute("value");

	var Region = "";
	var RegDrpDown = document.getElementById("amenityRegion");
	if(!RegDrpDown) RegDrpDown = document.getElementById("l_Message_HotelNeighbourControl1_l_result_AreaFilter_List");
	if(!RegDrpDown) RegDrpDown = document.getElementById("rid");
	if(RegDrpDown) Region = RegDrpDown.value;

	if(THGetCookie("th_TestDomain")) th_domain = THGetCookie("th_TestDomain");

      var Pages = {};
      if (document.URL.indexOf("www.expedia.com") >= 0 ||
          document.URL.indexOf("us.expediacustomer.com") >= 0 ||
          document.URL.indexOf("msntravel.expedia.com") >= 0 ||
          document.URL.indexOf("ca.expediacustomer.com") >= 0 ||
          document.URL.indexOf("www.expedia.ca") >= 0 ||
          document.URL.indexOf("uk.expediacustomer.com") >= 0 ||
          document.URL.indexOf("www.expedia.co.uk") >= 0 ||
          document.URL.indexOf("www.expedia-aarp.com") >= 0 ||
          document.URL.indexOf("fr.expediacustomer.com") >= 0 ||
          document.URL.indexOf("www.expedia.fr") >= 0 ||
          document.URL.indexOf("de.expediacustomer.com") >= 0 ||
          document.URL.indexOf("www.expedia.de") >= 0 ||
          document.URL.indexOf("it.expediacustomer.com") >= 0 ||
          document.URL.indexOf("www.expedia.it") >= 0 ||
          document.URL.indexOf("expus.hf01.sb.karmalab.net") >= 0 ||
          document.URL.indexOf("ukeurostarplanet.wwte.com") >= 0 ||
          document.URL.indexOf("freurostarplanet.wwte.com") >= 0 ||
	  THGetCookie("th_TestDomain")
	)
      {


	var CI = "";
	if(document.getElementById("date1")) CI = document.getElementById("date1").getAttribute("value");
	if(document.getElementById("inpStartDate")) CI = document.getElementById("inpStartDate").getAttribute("value");

	var CO = "";
	if(document.getElementById("date2")) CO = document.getElementById("date2").getAttribute("value");
	if(document.getElementById("inpEndDate")) CO = document.getElementById("inpEndDate").getAttribute("value");

 	var SV = "0";
	if(document.getElementById("star")) SV = document.getElementById("star").getAttribute("value");
	if(document.getElementById("inpHotelClass")) SV = document.getElementById("inpHotelClass").getAttribute("value");

     // Search Pages
        Pages["HTX_FLTAAP"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_BUS"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_BUS_OUT"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_BUS_RTN"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_BUS_INCBF_OUT"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_BUS_INCBF_RTN"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_INCBF_OUT"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_INCBF_RTN"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_OUT"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_RTN"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTBP1"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTBP1_BUS"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTBP1_BUS_INCBF"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTBP1_BUS_ONLYBF"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTBP1_INCBF"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTBP1_ONLYBF"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTBP1_CMB"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";
        Pages["HTX_FLTAAP_CMB"] = th_domain + "/Offers/js/ResultsScrape.js?thsads=false";

        Pages["page.Flights-Search-OneWay"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flights-Search-OneWay-Top"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flights-Search-Out"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flights-Search-Return"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flights-Search-RoundTrip"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flight-Search-OneWay"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flight-Search-OneWay-Top"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flight-Search-Out"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flight-Search-Return"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";
        Pages["page.Flight-Search-RoundTrip"] = th_domain + "/Offers/Scrape/FlightSearchMonitor.js?thsads=false";


	// Hotels
        Pages["HTX_HOTVFIND"] = th_domain + "/Hotels/Delivery/TopBanner.aspx?D=" + Dest + "&CI=" + CI + "&CO=" + CO + "&SV=" + SV + "&RID=" + Region + "&thsads=false";
        Pages["page.HotelSearchResults"] = th_domain + "/Hotels/Delivery/TopBanner.aspx?D=" + Dest + "&CI=" + CI + "&CO=" + CO + "&SV=" + SV + "&RID=" + Region + "&thsads=false";
        Pages["daily/shared/products/hotels/result"] = th_domain + "/offers/js/Hotels/ResultsScrapeUK.js?thsads=false";
        Pages["page.Hotel-Search-Map"] = th_domain + "/Hotels/Scrape/HotelSearchMonitor.js?thsads=false";
		

	if(document.getElementById("TH_bid_placement_1"))
	        Pages["page.Hotel-Search"] = th_domain + "/Hotels/Scrape/HotelSearchMonitor.js?thsads=false";
	else
	        Pages["page.Hotel-Search"] = th_domain + "/Hotels/Delivery/TopBanner.aspx?D=" + Dest + "&CI=" + CI + "&CO=" + CO + "&SV=" + SV + "&RID=" + Region + "&thsads=false";

	// Packages
	Pages["HTX_CMBSRCH_MD"] = th_domain + "/Offers/js/Package/MultiDestScrape.js?thsads=false";
        Pages["HTX_CMBFIND"] = th_domain + "/offers/js/Package/PackageResultsScrape.js?thsads=false";
        Pages["HTX_CMBPAGE"] = th_domain + "/offers/js/Package/PackageDetailsScrape.js?thsads=false";
        Pages["HTX_CMBHCHG"] = th_domain + "/offers/js/Package/HotelResultsScrape.js?thsads=false";
		Pages["HTX_CMBHCHG_MAP"] = th_domain + "/offers/js/Package/HotelMapChangeScrape.js?thsads=false";
		Pages["HTX_CMBHCHG_AREAMAP"] = th_domain + "/offers/js/Package/HotelMapChangeScrape.js?thsads=false";
        Pages["HTX_CMBHCHG_FLIGHTS_FIRST"] = th_domain + "/offers/js/Package/HotelResultsScrape.js?thsads=false";
        Pages["HTX_CMBHOINF_OVER"] = th_domain + "/offers/js/Package/InfoSiteScrape.js?thsads=false";
        Pages["HTX_CMBHOINF_LOCA"] = th_domain + "/offers/js/Package/InfoSiteScrape.js?thsads=false";
        Pages["HTX_CMBHOINF_PROP"] = th_domain + "/offers/js/Package/InfoSiteScrape.js?thsads=false";
        Pages["HTX_CMBHOINF_ROOM"] = th_domain + "/offers/js/Package/RoomsRatesScrape.js?thsads=false";
        Pages["HTX_CMBHOINF_MEDIA"] = th_domain + "/offers/js/Package/InfoSiteScrape.js?thsads=false";
        Pages["HTX_CMBHOINF_REVIEW"] = th_domain + "/offers/js/Package/InfoSiteScrape.js?thsads=false";
        Pages["HTX_CMBHOINF_THEMES"] = th_domain + "/offers/js/Package/InfoSiteScrape.js?thsads=false";
		//Germany
        Pages["daily/shared/products/packages/result"] = th_domain + "/offers/js/Package/PackageResultsScrapeDE.js?thsads=false";
		//Price Change
		Pages["HTX_CMBPCHG"] = th_domain + "/offers/js/Package/PriceChangeScrape.js?thsads=false";
		//Change Pkg Car
		Pages["HTX_CARCOMBO_PKGCARPRICEVIEW"] = th_domain + "/offers/js/Package/ChangeCarScrape.js?thsads=false";
		Pages["HTX_CARCOMBO_PKGCARSIZEVIEW"] = th_domain + "/offers/js/Package/ChangeCarScrape.js?thsads=false";
		Pages["HTX_CARCOMBO_PKGVENDORVIEW"] = th_domain + "/offers/js/Package/ChangeCarScrape.js?thsads=false";
		

	// Flight First Package
	Pages["HTX_FLTPAAP_DEPART_FLIGHTS_FIRST"] = th_domain + "/Offers/js/Package/FlightFirstScrape.js?thsads=false";
	Pages["HTX_FLTPAAP_RETURN_FLIGHTS_FIRST"] = th_domain + "/Offers/js/Package/FlightFirstScrape.js?thsads=false";
	Pages["HTX_FLTPTRIP_FLIGHTS_FIRST"] = th_domain + "/Offers/js/Package/FlightFirstScrape.js?thsads=false";


	// Cars
        Pages["HTX_CARAVAIL2_VENDORVIEW"] = th_domain + "/offers/js/Car/ResultsScrape.js?thsads=false";
        Pages["HTX_CARAVAIL2_SINGLEVENDORVIEW"] = th_domain + "/offers/js/Car/ResultsScrape.js?thsads=false";
        Pages["HTX_CARAVAIL2_CARPRICEVIEW"] = th_domain + "/offers/js/Car/ResultsScrape.js?thsads=false";
        Pages["HTX_CARAVAIL2_CARSIZEVIEW"] = th_domain + "/offers/js/Car/ResultsScrape.js?thsads=false";
        Pages["daily/shared/products/cars/result/totalpriceview"] = th_domain + "/offers/js/Car/ResultsScrapeEU.js?thsads=false";
        Pages["daily/shared/products/cars/result/sizeview"] = th_domain + "/offers/js/Car/ResultsScrapeEU.js?thsads=false";
        Pages["daily/shared/products/cars/result/vendorview"] = th_domain + "/offers/js/Car/ResultsScrapeEU.js?thsads=false";
        Pages["daily/shared/products/cars/result/listview"] = th_domain + "/offers/js/Car/ResultsScrapeEU.js?thsads=false";

	// Maps
        Pages["HTX_MAPS_VIEWMAP"] = th_domain + "/offers/js/Maps/MapScrape.js?thsads=false";

	// Login
	Pages["HTX_LOGIN"] = th_domain + "/Offers/js/LoginScrape.js?thsads=false";

      }

		// Sams Club
      if (document.URL.indexOf("travel.samsclub.com") >= 0 ||
          document.URL.indexOf("10.95.13.23") >= 0)
      {
		Pages["HTX_CRZ_RESULTS"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=CruiseSearch";	
		Pages["HTX_CRZ_INFO_ITIN"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_CABN"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_DECK"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_AMEN"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_REVS"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_PHOT"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=Itinerary";	
		Pages["HTX_CRZ_CABIN_CATEGORY"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=CabinSelect";	
		Pages["HTX_CRZ_RATE_DETAILS"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=PackageDetails";	
		Pages["HTX_CKO_PURCH_PREF_BDPAGE"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=BillingDelivery";	
		Pages["HTX_CRZ_PRCH_CONF"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=Confirmation";	
		Pages["HTX_ITNHEAD_STD"] = th_domain + "/Delivery/scrape.aspx?cid=1&pn=TripItinerary";	
	  }
	  else if (document.URL.indexOf("aarp") >= 0 ||
        	  document.URL.indexOf("10.96.73.221") >= 0)
	  {
		Pages["HTX_CRZ_RESULTS"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=CruiseSearch";	
		Pages["HTX_CRZ_INFO_ITIN"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_CABN"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_DECK"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_AMEN"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_REVS"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=Itinerary";	
		Pages["HTX_CRZ_INFO_PHOT"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=Itinerary";	
		Pages["HTX_CRZ_CABIN_CATEGORY"] = th_domain + "/Delivery/scrape.aspx?cid=2&pn=CabinSelect";	
        	Pages["HTX_CKO_PURCH_PREF_BDPAGE"] = th_domain + "/Offers/js/BillingScrape.js?thsads=false";
		// Itinerary Page
        	Pages["HTX_ITNHEAD_STD"] = th_domain + "/Offers/js/ItineraryScrape.js?thsads=false";
	  }
	  else
	  {
		Pages["HTX_CRZ_RESULTS"] = th_domain + "/Offers/js/Cruise/ResultsScrape.js?thsads=false";	
		Pages["HTX_CRZ_INFO_ITIN"] = th_domain + "/Offers/js/Cruise/ItineraryScrape.js?thsads=false";	
		Pages["HTX_CRZ_INFO_CABN"] = th_domain + "/Offers/js/Cruise/ItineraryScrape.js?thsads=false";	
		Pages["HTX_CRZ_INFO_DECK"] = th_domain + "/Offers/js/Cruise/ItineraryScrape.js?thsads=false";	
		Pages["HTX_CRZ_INFO_AMEN"] = th_domain + "/Offers/js/Cruise/ItineraryScrape.js?thsads=false";	
		Pages["HTX_CRZ_INFO_REVS"] = th_domain + "/Offers/js/Cruise/ItineraryScrape.js?thsads=false";	
		Pages["HTX_CRZ_INFO_PHOT"] = th_domain + "/Offers/js/Cruise/ItineraryScrape.js?thsads=false";	
		Pages["HTX_CRZ_TRVL"] = th_domain + "/Offers/js/Cruise/TravelerScrape.js?thsads=false";	
		Pages["HTX_CRZ_CABIN"] = th_domain + "/Offers/js/Cruise/CabinScrape.js?thsads=false";	
		Pages["HTX_CRZ_CABIN_CATEGORY"] = th_domain + "/Offers/js/Cruise/CabinSelectScrape.js?thsads=false";	
		Pages["HTX_CRZ_RATE_DETAILS"] = th_domain + "/Offers/js/Cruise/PackageDetailsScrape.js?thsads=false";	
		Pages["HTX_CRZ_ERR_PHONE_SALES"] = th_domain + "/Offers/js/Cruise/ErrorPageScrape.js?thsads=false";	
        	Pages["HTX_CKO_PURCH_PREF_BDPAGE"] = th_domain + "/Offers/js/BillingScrape.js?thsads=false";
		// Itinerary Page
        	Pages["HTX_ITNHEAD_STD"] = th_domain + "/Offers/js/ItineraryScrape.js?thsads=false";
	  }


      // Rooms & Rates page
      Pages["HTX_HOTVPAGE_ROOM"] = th_domain + "/Offers/js/Hotels/RoomsRatesScrape.js?thsads=false";

      // Infosite pages
		// Current Infosite Pages
		Pages["HTX_HOTVPAGE_LOCA"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["HTX_HOTVPAGE_MEDIA"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["HTX_HOTVPAGE_OVER"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["HTX_HOTVPAGE_PROP"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["HTX_HOTVPAGE_REVIEW"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["HTX_HOTVPAGE_THEMES"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		  
		//TravelGuide
		Pages["page.TravelGuides.Hotels.City"] = th_domain + "/Offers/js/Hotels/TravelGuideScrape.js?thsads=false";
		// New E3 Infosite Pages
		Pages["page.Hotels.Infosite.Maps"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["page.Hotels.Infosite.Reviews"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["page.Hotels.Infosite.Information"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["page.Hotels.Infosite.Pictures"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["page.Hotels.Infosite.Details"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
		Pages["page.Hotels.Infosite.RoomsRates"] = th_domain + "/Offers/js/Hotels/InfoSiteScrape.js?thsads=false"; 
      
      // Rate details page
      Pages["HTX_HOTDTLS_UPSEL"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      Pages["HTX_HOTDTLS_UPSL"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      Pages["HTX_HOTDTLS"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      Pages["HTX_HOTDTLS_NEWUPSL_CHG"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      Pages["HTX_HOTDTLS_NEWUPSL"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      Pages["HTX_HOTDTLS_RATE_CHG"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      Pages["HTX_HOTDTLS_UPSL_CHG"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      Pages["HTX_HOTDTLS_GDS"] = th_domain + "/Offers/js/Hotels/RateDetailsScrape.js?thsads=false";
      
      // Flight Details Page
      Pages["HTX_FLTDETLS"] = th_domain + "/Offers/js/FlightDetailsScrape.js?thsads=false";
      Pages["HTX_FLTDETLS_WXSELL"] = th_domain + "/Offers/js/FlightDetailsScrape.js?thsads=false";
      Pages["HTX_FLTDETLS_WALTFLTXSELL"] = th_domain + "/Offers/js/FlightDetailsScrape.js?thsads=false";

      // Car details page
      Pages["HTX_CARDTAIL"] = th_domain + "/Offers/js/Car/CarDetailsScrapeEU.js?thsads=false";
      Pages["HTX_CARDTAIL_TPBR"] = th_domain + "/Offers/js/Car/CarDetailsScrape.js?thsads=false";
      Pages["HTX_CARDTAIL_TP"] = th_domain + "/Offers/js/Car/CarDetailsScrape.js?thsads=false";

      // Login page
      Pages["HTX_ACNTADD"] = th_domain + "/Offers/js/AccountAdd.js?thsads=false";

      // Saved Itineraries
      Pages["HTX_ITNLITN"] = th_domain + "/Offers/js/SavedItinerariesScrape.js?thsads=false";

      // Account Overview
      Pages["HTX_PSGRINFO"] = th_domain + "/Offers/js/AccountOverviewScrape.js?thsads=false";
	  
	  // Account Main Contact
	  Pages["HTX_PSGREDIT"] = th_domain + "/Offers/js/MainContactScrape.js?thsads=false";

	// Activities Page
      Pages["HTX_CKO_ADDON"] = th_domain + "/Offers/js/ActivitiesScrape.js?thsads=false";

     // Billing & Checkout Pages
	if(document.getElementById("s_bot_full_det"))
	{
        	Pages["HTX_CKO_PURCH_PREF_BDPAGE"] = th_domain + "/Offers/js/CheckoutScrape.js?thsads=false";
		Pages["HTX_CKO_FULLDETAILS"] = th_domain + "/Offers/js/CheckoutScrape.js?thsads=false";
		Pages["HTX_CKO_TRAVPREF"] = th_domain + "/Offers/js/CheckoutScrape.js?thsads=false";
	}
	else
	{      
		Pages["HTX_CKO_TRAVPREF"] = th_domain + "/Offers/js/TripPrefScrape.js?thsads=false";
		Pages["HTX_CKO_FULLDETAILS"] = th_domain + "/Offers/js/BillingScrape.js?thsads=false";
	}

      // Confirmation Page
      Pages["HTX_PRCHFLTS"] = th_domain + "/Offers/js/ConfirmationScrape.js?thsads=false";

      Pages["HTX_CARRESCF"] = th_domain + "/Offers/js/Car/ConfirmationScrape.js?thsads=false";
      Pages["HTX_CARCONF"] = th_domain + "/Offers/js/Car/ConfirmationScrape.js?thsads=false";

      Pages["HTX_CRZCONF"] = th_domain + "/Offers/js/Cruise/ConfirmationScrape.js?thsads=false";

/*      Pages["HTX_EXCHWIZ_CONF"] = th_domain + "/Offers/js/ConfirmationScrape.js?thsads=false";
      Pages["HTX_TSPURCHASE_STP"] = th_domain + "/Offers/js/ConfirmationScrape.js?thsads=false";
      Pages["HTX_HOTCONF"] = th_domain + "/Offers/js/ConfirmationScrape.js?thsads=false";
      Pages["HTX_TSHOPCONF"] = th_domain + "/Offers/js/ConfirmationScrape.js?thsads=false";
      Pages["HTX_CMBCONF"] = th_domain + "/Offers/js/ConfirmationScrape.js?thsads=false";
      Pages["HTX_TRNCONF"] = th_domain + "/Offers/js/ConfirmationScrape.js?thsads=false";
*/
		// Hotels Confirmation
      Pages["HTX_HOTRESV"] = th_domain + "/Hotels/Delivery/confirmation.aspx?D=" + Dest + "&thsads=false";
      Pages["HTX_HOTRESV_ESR"] = th_domain + "/Hotels/Delivery/confirmation.aspx?D=" + Dest + "&thsads=false";

		// Package Confirmation
      Pages["HTX_CMBPRCH"] = th_domain + "/Package/Delivery/confirmation.aspx?D=" + Dest + "&thsads=false";

      var iProtocol=document.location.toString().indexOf("https")!=-1?"https":"http";


      if(pg == "HTX_HOTRESV" || pg == "HTX_HOTRESV_ESR" || pg == "HTX_CMBPRCH")
	{
		th_CallTealeaf('static');
		var htid = 0;
        	if(document.getElementById("TravelHookHtid0")) 
          		htid = document.getElementById("TravelHookHtid0").getAttribute("value");
		var QS = "&CI0=1/1/1900&CO0=1/1/1900&HN0=***&HID0=" + htid + "&ETD=" + getEndvrTUID() + "&EGD=" + getEndvrGUID() + "&EUT=" + THGetUserType() + "&I=" + THGetItinNum();
		var Span;
		for(iHotel=0;iHotel<6;iHotel++)
			if(document.getElementById("lighthoteldetails" + (iHotel+26))) { QS += "&T0=" + THGetTravelers(document.getElementById("lighthoteldetails" + (iHotel+26))); break; }
		Pages[pg] += QS;
	}

      if ( !Pages[pg] )
      {
        var ttl = document.title;
        var j=document.createElement("script");
        j.src= iProtocol+'://' + th_domain + '/Offers/js/JSHandler.aspx?PageID='+escape(pg)+'&Title='+ escape(ttl) + '&thsver=' + thsver + '&rn=' + thsrn;
        j.id = "THSCallBack";
        j.version = thsver;
        document.body.insertBefore(j,document.body.firstChild);
      }
      else if (Pages[pg] && Pages[pg] != "None" && navigator.cookieEnabled)
      {
        var j=document.createElement("script");
        j.src=iProtocol+'://' + Pages[pg] + '&thsver=' + thsver;
        j.id = "THSCallBack";
		j.charset = "UTF-8";
        j.version = thsver;
		j.TUID = getEndvrTUID();
		j.GUID = getEndvrGUID();
		j.UserType = THGetUserType();

        document.body.insertBefore(j,document.body.firstChild);
      }
      

    }
  }

  THCheckPage();

  var th_StaticEnd = new Date();

  
}
catch(er)
{

}
