(function(d) {
  "use strict";
  var base = "//cdn.jsdelivr.net/browser-support-embed/1.0.0/";

  var i, count = 0;

  function queryclass(name) {
    if (d.querySelectorAll) {
      return d.querySelectorAll('.' + name);
    }
    var elements = d.getElementsByTagName('div');
    var ret = [];
    for (i = 0; i < elements.length; i++) {
      if (~elements[i].className.split(' ').indexOf(name)) {
        ret.push(elements[i]);
      }
    }
    return ret;
  }

  function querydata(element, name) {
    return (element.getAttribute('data-' + name)) ? element.getAttribute('data-' + name) : '';
  }

  function heighty(iframe) {
    if (window.addEventListener) {
      window.addEventListener('message', function(e) {
        if (iframe.id === e.data.sender) {
          iframe.height = e.data.height;
        }
      }, false);
    }
  }

  function render(card, cardurl) {
    cardurl = base ;
    
    var ie = querydata(card, 'ie');
    var firefox = querydata(card, 'firefox');
	var chrome = querydata(card, 'chrome');
	var opera = querydata(card, 'opera');
	var safari = querydata(card, 'safari');
	var theme = querydata(card, 'theme');
	var colors = querydata(card, 'colors'); 
    
	count += 1;
    var width = querydata(card, 'width');
    var height = querydata(card, 'height');
    var target = querydata(card, 'target');
	
    var identity = 'ghcard-' + count;

    var iframe = d.createElement('iframe');
    iframe.setAttribute('id', identity);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('scrolling', 0);
    iframe.setAttribute('allowtransparency', true);

    var url = cardurl + 'index.html?theme=' + theme + '&ie=' + ie + '&colors=' + colors + '&firefox=' + firefox + '&chrome=' + chrome + '&opera=' + opera + '&safari=' + safari;

   
    iframe.src = url;
    iframe.width = width || Math.min(card.parentNode.clientWidth || 400, 400);
    if (height) {
      iframe.height = height;
    }
    heighty(iframe);
    card.parentNode.replaceChild(iframe, card);
    return iframe;
  }

  var cards = queryclass('browser-sup');
  for (i = 0; i < cards.length; i++) {
    render(cards[i]);
  }

  if (window.githubCard) {
    window.githubCard.render = render;
  }
  d.body.className = 'ready';
})(document);