var OpinionLab = (function(){
	var custom_var,_sp='%3A\\/\\/',_rp='%3A//',_poE=0.0,_poX=0.0,_sH=screen.height,_d=document,_w=window,_ht=escape(_w.location.href),_hr=_d.referrer,_tm=(new Date()).getTime(),_kp=0,_sW=screen.width;

	function _fC(_u){
		_aT=_sp+',\\/,\\.,-,_,'+_rp+',%2F,%2E,%2D,%5F';
		_aA=_aT.split(',');
		for(i=0;i<5;i++){
			eval('_u=_u.replace(/'+_aA[i]+'/g,_aA[i+5])')
		}
		return _u
	};
	
	function _fPe(){
		if(Math.random()>=1.0-_poE){
			O_LC();
			_poX=0.0
		}
	};

	function _fPx(){
		if(Math.random()>=1.0-_poX)
			O_LC()
	};
	
	function _populateCustomVar(){
		var t = '';
		var g = '';
		
		if (typeof(s_exp) != 'undefined'){
			t = (typeof(s_exp.prop11) != 'undefined') ? s_exp.prop11 : '';
			g = (typeof(s_exp.prop12) != 'undefined') ? s_exp.prop12 : '';
		} 
		else{
			t = (typeof(s_prop11) != 'undefined') ? s_prop11 : '';
			g = (typeof(s_prop12) != 'undefined') ? s_prop12 : '';
		}
		
		custom_var = g + '|' + t;
	};
		
	function _replacePageName(){
		var page_name = null;
		
		page_name = (typeof(s_exp) != 'undefined') ? escape(s_exp.pageName)+'.html' :
						(typeof(s_pageName) != 'undefined') ? escape(s_pageName)+'.html' : null;
		
		if(page_name){
			_domain=_ht.replace('https%3A//', '').replace('http%3A//','');
			_ht=_ht.substr(0,_ht.indexOf('%3A//'))+'%3A//'+_domain.substr(0,_domain.indexOf('/'))+'\/'+page_name;	
			
			if (typeof(bIsCAFR) != 'undefined') {
				if (bIsCAFR == true) {
					_lG='fr-CA.';
					_rp='%3A//'+_lG
				}
			}
		}
	};
	
	return {
		O_LC:function(){
			_replacePageName();
			_populateCustomVar();
			_w.open('https://secure.opinionlab.com/ccc01/comment_card.asp?time1='+_tm+'&time2='+(new Date()).getTime()+'&prev='+_fC(escape(_hr))+'&referer='+_fC(_ht)+'&height='+_sH+'&width='+_sW+'&custom_var='+custom_var,'comments','width=535,height=192,screenX='+((_sW-535)/2)+',screenY='+((_sH-192)/2)+',top='+((_sH-192)/2)+',left='+((_sW-535)/2)+',resizable=yes,copyhistory=yes,scrollbars=no')
		}
	,	O_GoT:function(_p){
			_d.write('<a href=\'javascript:O_LC()\'>'+_p+'</a>');
		}
	};
})();