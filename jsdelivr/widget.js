function querystring() {
	"use strict";
	var href = window.location.href, kv;
	var params = href.slice(href.indexOf('?') + 1).split('&');
	var qs = [];
	var i;
	
	for (i = 0; i < params.length; i++) {
		kv = params[i].split('=');
		qs.push(kv[0]);
		qs[kv[0]] = kv[1];
	}
	return qs;
}

function status(value) {
	"use strict";
	value = (value === "") ? 'unk' : value;	
	
	switch(true){
		case (value === "yes"):
			return " valid";
		
		case (value === "no"):
			return " invalid";
		
		case (value === "unk"):
			return " unknown";
		
		default:
			return " valid";
	}
}

function getTooltip(value) {
	"use strict";
	var a;

	if(value === "yes" || value === "no" || value === "unk" || value === "" ){
		return false;
	}
	
	a = document.createElement('a');
	a.href = "#";
	a.setAttribute('data-tooltip', value);
	a.className = "tooltip";
	
	return a;

}

(function() {
	"use strict";
	var qs = querystring();
	var browsers = ["ie", "firefox", "chrome", "safari", "opera"]; 
	var div, ul, li, p, a;
	var bsr;
		
	div = document.createElement('div');
	div.className = "browser-support";
	p = document.createElement('p');
	p.innerHTML = 'Browser support';
	
	ul = document.createElement('ul');
	if(qs.theme){
		div.className += " " + qs.theme;  	
	}
	
	if(qs.colors){
		div.className += " color";
	}
	
	for(var b in browsers){
		bsr = browsers[b];
		qs[bsr] = (qs.indexOf(bsr) === -1) ? 'unk' : qs[bsr];
		a = getTooltip(qs[bsr]);
		li = document.createElement('li');
		li.className = bsr + status(qs[bsr]);
		if(a){
			li.appendChild(a);
		}
		ul.appendChild(li);
	}

div.appendChild(p);
div.appendChild(ul);
document.body.appendChild(div);

})();