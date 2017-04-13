(function(d) {
  "use strict";
  var base = "https://thlb.github.io/browser-support-embed/iframe/";
  
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

  function render(frame) {
    
    var ie = querydata(frame, 'ie');
    var firefox = querydata(frame, 'firefox');
	  var chrome = querydata(frame, 'chrome');
	  var opera = querydata(frame, 'opera');
	  var safari = querydata(frame, 'safari');
	  var theme = querydata(frame, 'theme');
	  var colors = querydata(frame, 'colors'); 
    
	  
    var width = querydata(frame, 'width');
    var height = querydata(frame, 'height');
    var target = querydata(frame, 'target');
	
    count += 1;
    var frameid = 'bsup-' + count;

    var iframe = d.createElement('iframe');
    iframe.setAttribute('id', frameid);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('scrolling', 0);
    iframe.setAttribute('allowtransparency', true);

    var url = base + 'iframe.html?theme=' + theme + '&ie=' + ie + '&colors=' + colors + '&firefox=' + firefox + '&chrome=' + chrome + '&opera=' + opera + '&safari=' + safari;

    iframe.src = url;
    iframe.width = width || Math.min(frame.parentNode.clientWidth || 400, 400);
    if (height) {
      iframe.height = height;
    }
    heighty(iframe);
    frame.parentNode.replaceChild(iframe, frame);
    return iframe;
  }

  var frames = queryclass('browser-sup');
  for (i = 0; i < frames.length; i++) {
    render(frames[i]);
  }

  d.body.className = 'ready';
})(document);
