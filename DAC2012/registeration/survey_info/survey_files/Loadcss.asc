/* reset */

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td { margin: 0; padding: 0; border: 0; outline: 0; font-weight: inherit; font-style: inherit; font-size: 100%; font-family: inherit; vertical-align: baseline;}

body {line-height: 1; color: black; background: white;}

ol, ul {list-style: none;}

a {text-decoration: none; color: inherit;}

/* header */

#ad, #headContent, #topNav, .mainContentArea, #sponsors, #copyright
{
    width: 970px;
	margin-left: auto;
	margin-right: auto;
}
#contentContainer > div
{
    width: 970px;
	margin-left: auto;
	margin-right: auto;
}

.mainContentArea
{
    display:block;
}

#adSpace {
	padding: 10px 0px 20px 0px;
	text-align: center;
}

#headContainer {
	background-image: url("stylesheets/img/headBg.gif");
	background-repeat: repeat-x;
	height: 157px;
}

		#headContent {
			position: relative;
			top: 0px;
			left: 0px;
			font: 11px/17px arial, sans-serif;
			color: #999999;
			text-transform: uppercase;
		}
		
		#headContent a { cursor: pointer; }

				#utility {
					position: absolute;
					top: 0px;
					right: 0px;
					width: 700px;
					text-align: right;
					margin-right: 12px;
				}

						#utility div {
							display: inline-block;
						}

						#whatWhereWhen {
							font: 12px/25px arial,sans-serif;
							margin-top: 2px;
							font-weight: bolder;
						}
						
								#whatWhereWhen span {
									font-weight: bolder;
								}
						
						#utilityNav {
							margin-right: 10px; 
						}
						
								#utilityNav * {
									display: inline;
								}
								
								#utilityNav li {
									margin-left: 6px;
								}
								
								#utilityNav li a 
								{
									margin-right: 6px;
									font: bold 11px/17px arial, sans-serif;
			                        color: #999999;
								}
								
								#utilityNav li a:hover {
									color: #666666;
									text-decoration: underline;
								}

						#search { }
						
								.search span 
                                {
                                    display: inline-block;
                                    margin-top: 1px;
                                }
                                .searchBtn span
                                {
                                    display: inline;
                                    margin-top: 0px;
                                }
								.search .rdfd_
								{
									display: none;
								}
								.search .riTextBox
								{
                                    padding: 2px 1px 1px 8px !important;
                                    margin-right: -1px;
                                    font: 11px/16px arial,sans-serif !important;
                                }
                                .searchBtn
								{
                                    margin-top: 1px;
                                }
                                .search input {
                                    width: 185px;
                                    border-top: 1px solid #aaaaaa;
                                    border-left: 1px solid #eeeeee;
                                    border-right: 1px solid #eeeeee;
                                    padding: 1px;
                                    color: #666666;
                                }
								
								#searchBtn, .searchBtn {
									display: inline-block;
									background-image: url("stylesheets/img/searchArrow.gif");
									background-position: top left;
									background-repeat: no-repeat;
									height: 19px;
									width: 20px;
									vertical-align: top;
								}
								
								#searchBtn:hover, .searchBtn:hover {
									background-position: 0px -38px;
								}
								
								#searchBtn:active, .searchBtn:active {
									background-position: 0px -19px;
								}

						#followUs {
							height: 38px;
							padding-top: 17px;
							margin-right: 5px;
						}
						
						#followUs span {
							margin-top: -8px;
							margin-right: 7px;
						}
						
						#followUs img {
							margin: 0px 0px 0px 0px;
							vertical-align: bottom;
						}


				#logo {
					position: absolute;
					top: 0px;
					left: 0px;
				}
				
		#headContainer #topNav {
			position: relative;
			top: 112px;
			width: auto;
			height: 43px;
			text-align: center;
			white-space: nowrap;
		}
			
				#topNav li {
					display: inline;
				}
				
				#topNav li a 
				{
					padding: 10px 12px 10px 13px;
					margin: 0px 1px;
					font: 16px/47px helvetica, arial, sans-serif;
					font-weight: 300;
					color: #999999;
					text-transform: uppercase;
				}
				
				#topNav li a:hover, #topNav li a.active {
					background-image: url("stylesheets/img/topNavOnBg.gif");
					background-repeat: repeat-x;
					color: #333333;
				}
		
#footContainer {
	height: 100px;
	background-position: bottom;
	background-image: url("stylesheets/img/footBg.gif");
	background-repeat: repeat-x;
	margin: 23px 0px 21px 0px;
}

		#footContainer a 
		{
			cursor: pointer;
			font: 10px helvetica, arial, sans-serif;
			color: #666666;
		}
		
		#footContainer a:hover {
			text-decoration: underline;
		}
		
		#sponsors {
		    height:56px;
		    margin-bottom:16px;
		}
		
		#sponsors img {
		    margin-bottom: 14px;
		}

		#copyright {
			display: block;
			font: 10px helvetica, arial, sans-serif;
			color: #666666;
			position:relative;
			left: 10px;
		}

		#footNav { display: inline-block; }
		
				#footNav * { display: inline; }
				#footNav li {
					margin-left: 4px;
					text-transform: uppercase;
				}

				#footNav a
				{
					margin-right: 4px;
				}

.light {
	color: #999999;
}
.dark {
	color: #666666;
}
.black {
	color: #080707;
}
.hidden {
	display: none;
}
.core 
{
    width: 970px;
    margin-left: auto;
    margin-right: auto;
}

/* structure */

.breadcrumbs
{
    display: block;
}

.columns > div
{
    display: inline-block;
    vertical-align: top;
}

* html .columns div
{
    display: inline-block;
    vertical-align: top;
}

#leftNavContainer
{
    width:179px;
    background-color: #f3f3f3;
    padding:0px;
    height: auto;
}

.leftNav
{
    width: 179px;
    height: 97%;
}

#pageBodyContainer
{
    width:470px;
    padding:4px 23px 0px;
    display: inline-block;
    vertical-align: top;
}

#fullPageBodyContainer
{
	width:759px;
	padding:4px 0px 0px 23px;
	display:inline-block;
	vertical-align: top;
}

#promoContainer
{
    width:266px;
    padding-top:62px;
    display: inline-block;
}


/* fonts */

/* general (non-cms) fonts */

body {
    font: normal 12px/17px arial,sans-serif;
    color: #656363;
}

p, span {
    font: normal 12px/17px arial,sans-serif;
    color: #656363;
    margin: 4px 0;
}

a {
    font: normal 12px/17px arial,sans-serif;
    color: #de640d;
    text-decoration: none;
}

a:hover, a:active
{
    color: #666666;
}

hr
{
    border: 0px solid #dfdfdf;
    border-bottom-width: 1px;
}

strong
{
    font-weight: bold;
}

em
{
    font-style: italic;
}


.breadcrumbs
{
    font: bold 9px/11px arial,sans-serif;
    color: #666666;
    margin: 10px 0px 5px 7px;
}

.breadcrumbs a, .breadcrumbsLink {
    font: bold 9px/17px arial,sans-serif;
    color: #000000;
    cursor: pointer;
    text-transform: uppercase;
    margin: 0px 5px;
}

.breadcrumbs a:hover, .breadcrumbs a:active, .breadcrumbsLink:hover, .breadcrumbsLink:active, .breadcrumbs a.active
{
    color: #666666;
}

.pageTitle, h1 {
    font: 37px/43px "HelveticaNeue Light",arial,sans-serif;
    color: #de640d;
    margin: 5px 0px 14px 10px;
}

.pageTitle strong, h1 strong, .pageTitleStrong
{
   font: bold 37px "HelveticaNeue Bold",arial,sans-serif;
}


.columns {
    background: transparent url("stylesheets/img/leftNavBg.gif") repeat-y top left;
}
.leftNav
{
    background-color: #f3f3f3;
    font: bold 11px helvetica,arial,sans-serif;
    color: #666666;
    width: 179px;
    list-style-image:none;
    list-style-position:outside;
    list-style-type:none;
}

.leftNav li ul
{
    background-color: #d5d5d5;
    padding-bottom: 6px;
    padding-top: 4px;
    position: relative;
    border-bottom: 1px solid #ffffff;
    margin-top: -2px;
}

.leftNavLink, .leftNav a
{
    font: bold 11px helvetica,arial,sans-serif;
    line-height: normal;
    color: #666666;
    display: block;
    width: auto;
    text-transform: uppercase;
    white-space: normal;
    padding: 8px 24px 6px 10px;
    background: #f3f3f3 url("stylesheets/img/leftNavArrow.gif") no-repeat right bottom;
    cursor: pointer;
}

a.leftNavLinkActive, .leftNavLink:hover, .leftNavLink:active, .leftNav a:hover, .leftNav a:active, .leftNav a.active, .rtSelected .navseconditem
{
    background-color: #d5d5d5;
    background-image: url("stylesheets/img/leftNavArrowActive.gif");
    color: #333333;
}

.leftNav li li
{
    margin-left: 5px;
    margin-right: 5px;
}

.leftNavSubLink, .leftNav li li a
{
    font: normal 11px/17px helvetica,arial,sans-serif;
    color: #333333;
    background-color: #b2b2b2;
    line-height: 14px;
    padding: 2px 16px 1px 4px;
    margin-top: 1px;
    text-transform: none;
    border: none;
}

.leftNav li li a
{
    color: #333333;
    text-transform: none;
    background: none;
}

.leftNav.RadTreeView .rtSp, .leftNav.RadTreeView .rtMinus { display:none; margin: 0px; }

.leftNav.RadTreeView .rtUL .rtUL { padding: 4px 0 6px 0; }

.leftNavSubLink span, .leftNav li li span, .leftNav li li a span
{
    font: normal 11px/17px helvetica,arial,sans-serif;
    color: #333333;
    margin-top: 4px;
    margin-left: 5px;
    margin-right: 5px;
}

.leftNav li li a.active
{
    background: #f3f3f3 none;
}

.leftNavSubLink:hover, .leftNavSubLinkActive, .leftNav li li a:hover, .leftNav li li:active a, .leftNav li li a:active, .rtSelected .navthirditem, .rtSelected .navfourthitem
{
    background: #f3f3f3 url("stylesheets/img/leftNavArrowSublinkActive.png") no-repeat right;
}

/* Correcting for telerik styles */

.leftNav.RadTreeView .rtTop, .leftNav.RadTreeView .rtMid, .leftNav.RadTreeView .rtBot
{
    padding: 0px;
    border-bottom: 1px solid #ffffff;
}
.leftNav.RadTreeView .rtIn
{
    margin: 0px;
    padding: 8px 24px 6px 10px;
    
    /* thisfix */
    border-width: 0px;
}
.leftNav.RadTreeView .rtHover .rtIn, .leftNav.RadTreeView .rtSelected .rtIn
{
    background-position: bottom right;
    background-repeat: no-repeat;
    border-width: 0px; 
    padding: 8px 24px 6px 10px;
}
.leftNav.RadTreeView .rtUL .rtLI .rtUL
{
    padding: 4px 0px 6px;
}
.leftNav.RadTreeView .rtUL .rtLI .rtUL .rtLI
{
    padding: 0px;
}
.leftNav.RadTreeView .rtUL .rtLI .rtUL .rtLI .rtTop, .leftNav.RadTreeView .rtUL .rtLI .rtUL .rtLI .rtMid, .leftNav.RadTreeView .rtUL .rtLI .rtUL .rtLI .rtBot
{
    border-width: 0px;
}
.leftNav.RadTreeView .rtUL .rtLI .rtUL .rtLI .rtIn
{
    padding: 2px 16px 1px 4px;
    margin-top: 1px;
    border-width: 0px;
}
.leftNav.RadTreeView .rtUL .rtUL .rtUL
{
	/*thisfix*/
    border:1px solid #f3f3f3;
}
.leftNav.RadTreeView .rtUL .rtLI .rtUL .rtLI .rtIn
{
    padding-left: 2px 16px 1px 10px;
}



/* CMS styles */

h2 {
    font: normal 23px arial,sans-serif;
    color: #333333;
}
.headline {
    font: normal 23px arial,sans-serif;
    color: #333333;
}

h3 {
    font: normal 18px/21px arial,sans-serif;
    color: #656363;
    margin-bottom: 4px;
}
.subheadline {
    font: normal 18px/21px arial,sans-serif;
    color: #868585;
    margin-bottom: 4px;
}

.subheadline2 {
    font: normal 18px/21px arial,sans-serif;
    color: #868585;
}

.subheadlineLeadIn {
    font: bold 18px/21px arial,sans-serif;
    color: #de640d;
}

h4 {
    font: normal 18px/21px arial,sans-serif;
    color: #868585;
    display: block;
}
.sectionHead {
    font: normal 18px/21px arial,sans-serif;
    color: #868585;
    display: block;
}

a.btn 
{
    font: bold 12px/21px arial,sans-serif;
    color: #ffffff !important;
    background-color: #e2792d;
    text-transform: uppercase;
    padding: 2px 10px 0px;
    display: inline-block;
    cursor: pointer;
}
a.btn:hover, a.btn:active
{
    background-color: #b2b2b2;
    color: #ffffff !important;
}

.button
{
    font: bold 12px/21px arial,sans-serif;
    color: #ffffff !important;
    background-color: #e2792d;
    text-transform: uppercase;
    padding: 2px 10px 0px;
    display: inline-block;
    cursor: pointer;
}
 
#pageBodyContainer img
{
    margin: 5px 16px 16px 0px;
    float: left;
}



/* Body Promo styles */

.bodyPromo
{
    padding: 12px 16px;
    background-color: #f3f3f3;
    font: normal 12px/19px arial,sans-serif;
    color: #666666;
    margin-bottom: 8px;
}

.bodyPromo h2 {
    font: bold 14px/15px arial,sans-serif;
    color: #000000;
}
.bodyPromoTitle {
    font: bold 14px/15px arial,sans-serif;
    color: #000000;
} 

.bodyPromoText
{
    font: normal 12px/19px arial,sans-serif;
    color: #666666;
}

.bodyPromo a 
{
    font: bold 12px/21px arial,sans-serif;
    color: #de640d;
}
a.bodyPromoLink
{
    font: bold 12px/21px arial,sans-serif;
    color: #de640d;
}
a.bodyPromoLink:hover, a.bodyPromoLink:active, .bodyPromo a:hover, .bodyPromo a:active
{
    color: #666666;
}
.bodyPromo a.btn
{
    color: #ffffff;
    margin: 8px 0px;
}

.bpLinkHeadline
{
    font: bold 14px/21px arial,sans-serif;
    color: #de640d;
}
.bpBoldText
{
    font: bold 12px/21px arial,sans-serif;
    color: #656363;
}



/* Promo styles */

.promo 
{
    border: 1px solid #e8e8e8;
    padding: 8px 14px 12px;
    margin: 0px 0px 7px;
    width: 236px;
    color: #7e7c7c;
    font: normal 11px/15px helvetica,arial,sans-serif;
}

.promo h2 {
    font: 18px/24px arial,sans-serif;
    color: #666666
}
.promoTitle {
    font: 18px/24px arial,sans-serif;
    color: #666666
}

.promo p 
{
    margin: 3px 0px 10px;
}

a.promoBtn {
    font: bold 17px/22px "Arial Narrow","Helvetica Condensed","Univers Condensed",arial,sans-serif;
    color: #333333 !important;
    background: #e2792d url("stylesheets/img/promoBtnArrow.png") no-repeat right bottom;
    text-transform: uppercase;
    padding: 4px 24px 2px 10px;
    width: auto;
    display: block;
    cursor: pointer;
    vertical-align: top;
    margin: 4px 0px;
}

a.promoBtnWhite {
    font: bold 17px/22px "Arial Narrow","Helvetica Condensed","Univers Condensed",arial,sans-serif;
    color: #333333 !important;
    background: #e2792d url("stylesheets/img/promoBtnArrow.png") no-repeat right bottom;
    text-transform: uppercase;
    padding: 4px 24px 2px 10px;
    width: auto;
    display: block;
    cursor: pointer;
    vertical-align: top;
    margin: 4px 0px;
}
.promo a.btn, .promo a.btn.white {
    font: bold 17px/22px "Arial Narrow","Helvetica Condensed","Univers Condensed",arial,sans-serif;
    color: #333333 !important;
    background: #e2792d url("stylesheets/img/promoBtnArrow.png") no-repeat right bottom;   
    text-transform: uppercase;
    padding: 4px 24px 2px 10px;
    width: auto;
    display: block;
    cursor: pointer;
    vertical-align: top;
    margin: 4px 0px;
}
a.promoBtn:hover, .promo a.btn:hover, .promoBtn.active, .promo a.btn:active, a.promoBtnWhite:hover, a.promoBtnWhite:active, .promo a.btn.white:hover, .promo a.btn.white:active, .promo a.btn.white.active
{
    color: #333333 !important;
    background-color: #b2b2b2;
}

/*.promo a.btn.gray 
{
   color: #000000 !important;
   background: #b2b2b2 url("img/promoBtnArrow.png") no-repeat right bottom;
}
a.promoBtnGray
{
   color: #000000 !important;
   background: #b2b2b2 url("img/promoBtnArrow.png") no-repeat right bottom;
}
a.promoBtnGray:hover, .promo a.btn.gray:hover, a.promoBtnGray:active, .promo a.btn.gray:active, .promo a.btn.gray.active
{
   color: #ffffff !important;
   background: #000000 url("img/promoBtnArrow.png") no-repeat right bottom;
}*/

a.promoBtnSmall
{
    background-color:#E2792D;
    background-image:url(stylesheets/img/leftNavArrowActive.png);
    background-position:right 6px;
    background-repeat:no-repeat;
    color:#ffffff !important;
    display:block;
    font-weight:bold;
    line-height:20px;
    padding-left:6px;
    padding-right:20px;
    text-transform:uppercase;
    margin-bottom: 6px;
}

a.promoBtnSmall:hover
{
    background-color: #b2b2b2;
}
    
.promoSubtext{
    display: inline;
    font: normal 11px/15px helvetica,arial,sans-serif;
    color: #7e7c7c;
}
.promo h3{
    display: inline;
    font: normal 11px/15px helvetica,arial,sans-serif;
    color: #7e7c7c;
}

.promo img{
    margin-top: 6px;
}

.promo a {
    font: normal 12px/21px arial,sans-serif;
    color: #de640d;
}

.promo a:hover 
{
    color: #666666;
}

.registerBtn
{
    display:block;
    width: auto;
    height: 52px;
    background: transparent url("stylesheets/img/registerBtnMultistate.png") no-repeat;
    margin: 12px 0px;
}
.registerBtn:hover
{
    background-position: 0px -52px;
}
.registerBtn:active
{
    background-position: 0px -104px;
}


.cntdwn { margin: 3px -6px 0px -4px; }
.cntdwn .section
{
    display: inline-block;
    padding: 5px 2px 2px 2px;
    text-align: center;
    height: 63px;
    margin: 0px;
    background: #ffffff url("stylesheets/img/countdownBg.gif") repeat-x;
}
.section.days { width: 67px; padding: 5px 1px 2px; }
.section.hours { width: 93px;  }
.section.seconds { width: 50px; }
.cntdwn .num, .cntdwn .unit, .cntdwn .colon
{
    font: bold 30px/40px arial black, sans-serif;
    margin: 0px;
}
.cntdwn .colon
{
    background-image: none;
    color: #bdbdbd;
    padding: 0px;
    vertical-align: 17px;
    margin: 0px -2px;
}
.cntdwn .days .num
{
    color: #de640d;
}
.cntdwn .hours .num
{
    color: #444444;
}
.cntdwn .seconds .num
{
    color: #868585;
}
.cntdwn .unit
{
    font: bold 9px arial, sans-serif;
    color: #999999;
    letter-spacing: 0px;
}


/* debug panel */

#debugPanel 
{
    position:fixed;
    top: 0px;
    left: 0px;
    
    background-color: #aaaaaa;

}

/* cms */

.edithelp
{
	font-size: 10px;
	padding-top: 20px;
	vertical-align: bottom;
}

input.nicebutton 
{
	border:1px solid #D5D5D5;
	border-top:1px solid #dad5c3;
	border-bottom: 1px solid #898061;
	border-right: 1px solid #b7b099;
	border-left: 1px solid #b7b099;
	font-family: Verdana, Arial;
	font-size:10px;
	font-weight:bold;
	color:#cc6600;
	background-image:url(images/buttonBg.gif);
	background-position:top;
	background-color:white;
	height:20px;
	width:80px;
	vertical-align: middle;
	margin-bottom: 1px;
}

input.nicebuttonhigh
{
	border:1px solid #D5D5D5;
	border-top:1px solid #dad5c3;
	border-bottom: 1px solid #898061;
	border-right: 1px solid #b7b099;
	border-left: 1px solid #b7b099;
	font-family: Verdana, Arial;
	font-size:10px;
	font-weight:bold;
	color:#aa5500;
	background-image:url(images/buttonBgHigh.gif);
	background-position:top;
	background-color:white;
	height:20px;
	width:80px;
	vertical-align: middle;
}

div.buttondiv input 
{
	margin: 10px 10px;
	width: 140px;	
	float: none;
}

div.buttondiv
{
	font-family: Verdana, Arial;
	font-size:12px;
	font-weight:bold;
	color:#666666;
	margin: 0px 10px;
}

div.buttondiv a
{
	font-family: Verdana, Arial;
	font-size:10px;
	font-weight:bold;
	color:#666666;
	margin: 0px 10px;
}

div.labeldiv input 
{
	margin: 0px 0px;
	width: 140px;	
	font-size:11px;
	font-weight:normal;
	color:#222222;
}

div.labeldiv input.big
{
	margin: 0px 0px;
	width: 200px;	
	font-size:11px;
	font-weight:normal;
	color:#222222;
}

div.labeldiv input.vbig
{
	margin: 0px 0px;
	width: 400px;	
	font-size:11px;
	font-weight:normal;
	color:#222222;
}

div.labeldiv
{
	clear: both;
}

div.labeldiv span 
{
	font-family: Verdana, Arial;
	font-size:10px;
	font-weight:bold;
	color:#666666;
	margin: 0px 10px;
}

span.formerror
{
	font-family: Verdana, Arial;
	font-size:11px;
	font-weight: bold;
	color: #ed1c24;
}

div.colorwindow
{
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=60); /* IE */
	-moz-opacity: 0.6; /* Mozilla */
	opacity: 0.6; /* CSS3 */
	background-image: url("images/edited.gif");
}

div.subWrapper
{
	padding-left: 20px;
	padding-top:20px;
	text-align: left;
}

div.subWrapper br
{
	line-height: 24px;
}

div.subWrapper select
{
	margin-bottom: 5px;
	
}

div.smalldiv input
{
	text-align: left;
	width: 120px !important;
	margin: 0px 0px;
	width: 140px;	
	font-size:11px;
	font-weight:normal !important;
	text-align: left;
	color:#222222;
}

div.comments
{
	font-size: 9px;
}

div.comments a
{
	font-size: 9px;
}

div.comments br
{
	line-height: 13px !important;
}

a.commentslinks
{
	padding-left: 5px;
	padding-right: 5px;
}

a.nolink
{
	text-decoration: none !important;
	color: #000000 !important;
}

div.commentslabel
{
	font-size: 9px;
	width:170px;
	float: left;
}

.dragdisabled
{
		font-family: Arial, Tahoma;
	font-size: 12px; 
	background-color: #efefef;
}

fieldset
{
	border-width: 0px;
}

.rade_toolbar.Telerik .InsertDocumentRequest
{
     background-image: url('../images/InsertDocumentRequest.gif');
}

li.rtLI
{
	line-height: 14px;
}

li.rtLI li.rtLI
{
	padding-left: 5px;
}

li.rtLI li.rtLI li.rtLI
{
	padding-left: 10px;
}

li.rtLI li.rtLI li.rtLI li.rtLI
{
	padding-left: 15px;
}


#pushpanel, #pushhomepanel
{
    background-color: #F8F8F8;
}
.buttondiv
{
    padding-top: 16px;
}
.RadWindow .rwControlButtons .rwCloseButton span
{
    margin: 0px;
}




div.container
{
	text-align: left;
}



div.radwindow_Telerik table.titlebarcontrols a.windowicon 
{
	background: transparent url();
}


div.content:after
{
   content: "."; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;
}

div.clear
{
    content: "."; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;
}

span.InsertYouTube
{
        background-image: url(../images/Insert YouTube.gif) !important;
}

span.ApplyClass
{
	margin: 0px;
}


.hpSidePromo
{
	width:170px;height:150px;background-color:#f7f7f7;margin:0px 0px 4px;padding:10px 6px 6px;overflow:hidden;font:normal 12px Arial,sans-serif;color:#656363;
}

.hpTabPromos div
{
	border: 1px solid #e8e8e8;
	padding: 12px;
	background-color: #f7f7f7;
	min-height:390px;
}

.hpPromos
{
	vertical-align:top;
	display:inline-block;
}

.hpTabPromosDiv
{
	float:left;
	width:474px;
	margin-right:10px;
	vertical-align:top;
}




/* CMS CONTENT */

/* CMS CONTENT: contentContainer */

.contentContainer
{
	
}

.contentContainer ul li
{
	list-style: disc outside none;
	margin-left: 16px;
}

.contentContainer ol li
{
	list-style: decimal outside none;
	margin-left: 16px;
}


/* CMS CONTENT: promoContainer */

.promoContainer
{
	
}

.promoContainer ul li
{
	list-style: disc inside none;	
}

.promoContainer ol li
{
	list-style: decimal inside none;
}


/* CMS CONTENT: hpTabPromos */

.hpTabPromos td
{
	vertical-align: top;
}
.hpTabPromos a.promoBtn, .hpTabPromos a.promoBtnWhite
{
	width: 222px;
	display: inline-block;
}
.hpTabPromos span.subheadline
{
	font-size: 16px;
	color: #666666;
	margin-bottom: 8px;
}

.hpTabPromos ul li
{
	list-style: disc inside none;	
}

.hpTabPromos ol li
{
	list-style: decimal inside none;
}


/* CMS CONTENT: hpSidePromo */

.hpSidePromo img
{
	margin-bottom: 8px;
	margin-top: 4px;
}
.hpSidePromo a.promoBtnWhite
{
	margin-top: 10px;
}

.hpSidePromo ul li
{
	list-style: disc inside none;	
}

.hpSidePromo ol li
{
	list-style: decimal inside none;
}



/* AddUser page */
div.labeldiv input.nicebutton
{
	color: #cc6600;
	font-size: 10px;
	font-weight: bold;
}


.baseline
{
	vertical-align: baseline;
}


/* Non-accordion summary items */
.summarytitle
{
	font: 14px bold arial,sans-serif;
	color: #454545;
	text-transform: uppercase;
}

/* Accordion */
div.RadPanelBar
{
	padding-top: 25px;
}
.RadPanelBar ul.rpRootGroup
{
	border-style: none;
}
.rpLink
{
    background-color: #f3f3f3;
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: normal !important;
    font-family: Arial,sans-serif !important;
    text-decoration: none !important;
    border-bottom: none !important;
}
.rpExpandable:hover
{
    background-color: #d5d5d5 !important;
    color: #333333 !important;
    font-size: 12px !important;
    font-weight: bold !important;
    font-family: Arial,sans-serif !important;
    text-decoration: none !important;
}
.ClickedCssClass.rpExpanded, .ClickedCssClass.rpExpanded.rpLink:hover
{
	background-color: #E2792D !important;
	font-weight: bold;
}
.ClickedCssClass.rpExpanded span, .ClickedCssClass.rpExpanded.rpLink:hover span
{
	color: #ffffff !important;
    text-decoration: none;
}
.SelectedCssClass span.rpText
{
    font-size: 12px;
    padding-bottom: 15px !important;
    padding-left: 15px !important;
    padding-top: 10px !important;
    padding-right: 20px !important;
    line-height: 1.2em;
}
.RadPanelBar .rpOut
{
    border-bottom: solid 1px #ffffff !important;
    padding: 2px 10px 1px !important;
    margin: 0px;
}


fieldset
{
	display: table;
}

.labela, .labelb, .inputa, .inputb
{
	display: inline-block;
	width: 200px;
	font: 11px/13px normal Verdana,Arial,Sans-Serif;
}

.inputa, .inputb
{
	background-color: #ebebeb;
	border: 1px solid #d0d0d0;
	color: #333333;
	margin-bottom: 14px;
}

.inputb
{
	margin-left: 44px;
}

.labelb
{
	padding-left: 48px;
}

.inputa
{
}

.inputb
{
}

/* sitemap */
div.sitemap 
{ 
	margin-left: 20px;
}

div.sitemap, div.sitemap a
{
	text-decoration: none;
	text-align: left;
	font-weight: normal;
	display: block;
}

div.sitemap a.first 
{
	padding-left: 0px;
}

div.sitemap a.second
{
	padding-left: 20px;
}

div.sitemap a.third 
{
	padding-left: 40px;
}

div.sitemap a.fourth 
{
	padding-left: 60px;
}
.sitemap .second, .sitemap .third, .sitemap .fourth
{
	background-image: url("stylesheets/img/sitemapLines.png");
	background-repeat: no-repeat;
	background-position: left top;
	line-height: 16px;
}
div.sitemap a.second.last2nd
{
	background-position: 0px -16px;
}
div.sitemap a.third
{
	background-position: 0px -32px;
}
div.sitemap a.third.last2nd
{
	background-position: 0px -48px;
}
div.sitemap a.third.last3rd
{
	background-position: 0px -64px;
}
div.sitemap a.third.last2nd.last3rd
{
	background-position: 0px -80px;
}
div.sitemap a.fourth
{
	background-position: 0px -96px;
}
div.sitemap a.fourth.last2nd
{
	background-position: 0px -112px;
}
div.sitemap a.fourth.last3rd
{
	background-position: 0px -128px;
}
div.sitemap a.fourth.last2nd.last3rd
{
	background-position: 0px -144px;
}
div.sitemap a.fourth.last4th
{
	background-position: 0px -160px;
}
div.sitemap a.fourth.last2nd.last4th
{
	background-position: 0px -176px;
}
div.sitemap a.fourth.last3rd.last4th
{
	background-position: 0px -192px;
}
div.sitemap a.fourth.last2nd.last3rd.last4th
{
	background-position: 0px -208px;
}



.editContentPanel
{
	margin-left: 16px;
}


H4.documentListTitle
{
	font-family: Arial !important;
	font-weight: bold !important;
	font-size: 12px !important;
	color: #de640d !important;
	
}

A.documentListMore,A.documentListMore:visited
{
	font-family: Arial;
	font-size: 11px;
	color: #de640d;
	font-style:italic;
}
A.documentListMore:hover
{
	font-family: Arial;
	font-size: 11px;
	color: #111111;
	font-style:italic;
}


A.titleLink,A.titleLink:visited
{
	font-family: Arial !important;
	font-weight: bold !important;
	font-size: 13px !important;
	color: #de640d;
	
}
A.titleLink:hover
{
	
	color: #111111;
	
}

H2.panelArticle
{
	font-family: Arial;
	font-size: 23px;
	color: #333333;
	padding-top:0px;
	margin-top:0px;
	margin-bottom:0px;
	padding-bottom:25px;

}

 H3.panelArticle
{
	font-family: Arial;
	font-size: 18px;
	color: #868585;
	padding-top:0px;
	margin-top:0px;
	margin-bottom:0px;
	padding-bottom:15px;
}


div.documentTag
{
	padding-bottom:10px;
	padding-top:8px;
}

SPAN.documentListAuthor
{
	color: #de640d;
	font-style:italic;
}

div.documentSeparator
{
	height:1px;
	padding:0px;
	margin-top:15px;
	margin-bottom:15px;
	background-color:#dfdfdf;
	
}


/* IE 7 */

/* general */
*+html .ieInlineBlock, *+html a.btn, *+html #utility div, *+html #searchBtn, *+html #footNav, *+html .columns > div, *+html #pageBodyContainer, *+html #fullPageBodyContainer, *+html #promoContainer, *+html .cntdwn .section, *+html .hpPromos, *+html .hpTabPromosDiv, *+html .hpTabPromos a.promoBtn, *+html .hpTabPromos a.promoBtnWhite {
	display:inline;	
}
*+html #followUs span 
{
	vertical-align: -4px;
}

*+html #utilityNav { vertical-align:1px;}
*+html .searchBtn { margin-top: 3px; }


/* leftNav */
*+html .RadTreeView.leftNav .rtUL
{
	margin-top: -3px;	
}
*+html .RadTreeView.leftNav .rtUL .rtLI
{
	margin-top: -3px;	
}
*+html .RadTreeView.leftNav .rtUL .rtUL .rtLI
{
	margin-top: 0px;	
}
*+html .RadTreeView.leftNav .rtUL .rtUL .rtUL
{
	padding: 4px 0px;
	margin-bottom: 2px;	
}







.compressedListHeader
{
	background-color: #868585;
	color: #FFFFFF !important;
	padding-left:2px !important;
	padding-right:2px !important;
	padding-top:2px !important;
	
}

A.compressedListHeader
{
	color: #FFFFFF !important;
}

.compressedListAlt
{
	padding: 5px;
    background-color: #F7F7F7;
	}


.compressedLisItem
{
	padding: 9px 5px;
}

.compressedListItemHeader
{
	padding: 5px;
    font-weight: bold !important;


}

.compressedListItemHeader A
{
	font-weight: bold !important;
	
	

}

.compressedListItemHeader A:hover
{
	font-weight: bold !important;
	text-decoration: underline;
	color:#EFAA77 !important;
	

}

A.compressedListMore
{
	font-size: 11px;
}

 A.compressedListMore:hover
{
	font-size: 11px;
	color: #111111;
}

.hpSmalldate
{
	font-style: oblique;
	font-size: 11px;
	color: #868585;
}



/* IE 6 */

* html .ieInlineBlock, * html a.btn, * html #utility div, * html #searchBtn, * html #footNav, * html .columns div, * html #pageBodyContainer, * html #fullPageBodyContainer, * html #promoContainer, * html .cntdwn .section, * html .hpPromos, * html .hpTabPromosDiv, * html .hpTabPromos a.promoBtn, * html .hpTabPromos a.promoBtnWhite {
    display: inline;
}
* html .search input
{
    color: #8a8a8a;
}
* html .searchBtn 
{
    vertical-align: -1px;
}
* html .searchBtn span
{
    line-height: 15px;
}
* html #topNav a:hover, * html #topNav a.active 
{
    background-color: #ffffff;
}
.wrapper {width:800px; margin: 0 auto;}

.menubutton {background-image: url('/reglive/images/DACreg_btn.gif');background-repeat:no-repeat; color: #444444; height:22px; width:202px; z-index:1; }
.menubuttonOver {background-image: url('/reglive/images/DACreg_btn_over.gif');background-repeat:no-repeat; color: #fff; height:22px; width:202px;z-index:1;}
.regoption{font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; font-weight:bold; padding-top:2px; padding-left:8px;z-index:1; cursor:pointer}

.floatmenu{ position: absolute; width: 202px; right:10%; top: 220px;}
#floatHeader{ background-image: url('/reglive/images/DACreg_menu_top.gif');background-repeat:no-repeat;height:27px; width:202px;}
#floatFooter{ background-image: url('/reglive/images/DACreg_menu_btm.gif');background-repeat:no-repeat;height:4px; width:202px;}
.OnSiteBadgeMessage {word-spacing:3px;line-height: 120%;font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 14pt; font-weight:700; color:red;}
.borderbox {background-color: #FFF;}
.catcell {background-color:#EEE; color:#999;font-weight:900;vertical-align:bottom;}
.catdescript { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 8pt; font-style:italic; font-weight:400; line-height:12px; color:black }
.confcattable { background-color:#FFFFFF; }
.registerby { font-size: 8pt;padding:5px;}

.question {font-weight:bold; color:#000}
.answer {font-weight:normal; color:#666}
.error {  font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; font-weight:600;  color:red}
.details {background-color:#FFFFCC;position:relative;border:solid 1px #666666 ; top:10px; padding:6px; font-style:italic; font-family:Verdana, Arial, Helvetica; font-size:8pt; color:Gray; display:none}
.checkoutwrapper {width:70%;}
.total {  font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; font-weight:600;  color:#191970}
.ordercats {  font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; font-style:italic; font-weight:600; line-height:12px; color:gray}
.boldlabel {  font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; font-weight:500;  color:black}
.footerStyle {width:100%; text-align:center; margin-top:2px;}
.upsell { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10pt; font-weight:500; line-height:16px; color:black }



.accordionHeader
{
	border: 1px solid #2F4F4F;
	color:#333333;
	background-color: #ECECF4;
	font-family: Arial, Sans-Serif;
	font-size: 12px;
	font-weight: bold;
	padding: 5px;
	margin-top: 5px;
	cursor: pointer;
	text-transform: uppercase;
}
 

.accordionHeaderSelected
{
    border: 1px solid #2F4F4F;
    color: white;
    background-color: #e2792d;
	font-family: Arial, Sans-Serif;
	font-size: 12px;
	font-weight: bold;
    padding: 5px;
    margin-top: 5px;
    cursor: pointer;
    text-transform:uppercase;
}
 

.accordionContent
{
    background-color: #D3DEEF;
    border: 1px dashed #2F4F4F;
    border-top: none;
    padding: 5px;
    padding-top: 10px;
}







<!DOCTYPE html PUBLIC "-//W3C//Dtd XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/Dtd/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
	<HEAD>
		<title>Loadcss</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
	</HEAD>
	<body>
		<form name="Form1" method="post" action="Loadcss.aspx" id="Form1">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTUxMTcwNzgxMGRk/RIkVkrhIDnQeuaOcNPPMGGpp6w=" />

	
		</form>
	</body>
</HTML>
