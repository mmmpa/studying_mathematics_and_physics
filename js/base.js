/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

/**
 * Vue.js v0.11.5
 * (c) 2015 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.Vue=e():t.Vue=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){function n(t){this._init(t)}var r=i(11),s=r.extend;s(n,i(1)),n.options={directives:i(12),filters:i(13),partials:{},transitions:{},components:{}};var o=n.prototype;Object.defineProperty(o,"$data",{get:function(){return this._data},set:function(t){this._setData(t)}}),s(o,i(2)),s(o,i(3)),s(o,i(4)),s(o,i(5)),s(o,i(6)),s(o,i(7)),s(o,i(8)),s(o,i(9)),s(o,i(10)),t.exports=r.Vue=n},function(t,e,i){function n(t){return new Function("return function "+s.camelize(t,!0)+" (options) { this._init(options) }")()}function r(t){c.forEach(function(e){t[e]=function(t,i){return i?void(this.options[e+"s"][t]=i):this.options[e+"s"][t]}}),t.component=function(t,e){return e?(s.isPlainObject(e)&&(e.name=t,e=s.Vue.extend(e)),void(this.options.components[t]=e)):this.options.components[t]}}var s=i(11),o=i(14);e.util=s,e.nextTick=s.nextTick,e.config=i(15),e.compiler={compile:i(16),transclude:i(17)},e.parsers={path:i(18),text:i(19),template:i(20),directive:i(21),expression:i(22)},e.cid=0;var a=1;e.extend=function(t){t=t||{};var e=this,i=n(t.name||"VueComponent");return i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.cid=a++,i.options=o(e.options,t),i["super"]=e,i.extend=e.extend,r(i),i},e.use=function(t){var e=s.toArray(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),this};var c=["directive","filter","partial","transition"];r(e)},function(t,e,i){var n=i(14);e._init=function(t){t=t||{},this.$el=null,this.$parent=t._parent,this.$root=t._root||this,this.$={},this.$$={},this._watcherList=[],this._watchers={},this._userWatchers={},this._directives=[],this._isVue=!0,this._events={},this._eventsCount={},this._eventCancelled=!1,this._isBlock=!1,this._blockStart=this._blockEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=!1,this._children=[],this._childCtors={},this._transCpnts=null,t=this.$options=n(this.constructor.options,t,this),this._data=t.data||{},this._initScope(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}},function(t,e,i){function n(t,e,i){if(i){var n,s,o,a;for(s in i)if(n=i[s],h.isArray(n))for(o=0,a=n.length;a>o;o++)r(t,e,s,n[o]);else r(t,e,s,n)}}function r(t,e,i,n){var r=typeof n;if("function"===r)t[e](i,n);else if("string"===r){var s=t.$options.methods,o=s&&s[n];o&&t[e](i,o)}}function s(){this._isAttached=!0,this._children.forEach(o),this._transCpnts&&this._transCpnts.forEach(o)}function o(t){!t._isAttached&&l(t.$el)&&t._callHook("attached")}function a(){this._isAttached=!1,this._children.forEach(c),this._transCpnts&&this._transCpnts.forEach(c)}function c(t){t._isAttached&&!l(t.$el)&&t._callHook("detached")}var h=i(11),l=h.inDoc;e._initEvents=function(){var t=this.$options;n(this,"$on",t.events),n(this,"$watch",t.watch)},e._initDOMHooks=function(){this.$on("hook:attached",s),this.$on("hook:detached",a)},e._callHook=function(t){var e=this.$options[t];if(e)for(var i=0,n=e.length;n>i;i++)e[i].call(this);this.$emit("hook:"+t)}},function(t,e,i){function n(){}var r=i(11),s=i(49),o=i(23);e._initScope=function(){this._initData(),this._initComputed(),this._initMethods(),this._initMeta()},e._initData=function(){for(var t,e=this._data,i=Object.keys(e),n=i.length;n--;)t=i[n],r.isReserved(t)||this._proxy(t);s.create(e).addVm(this)},e._setData=function(t){t=t||{};var e=this._data;this._data=t;var i,n,o;for(i=Object.keys(e),o=i.length;o--;)n=i[o],r.isReserved(n)||n in t||this._unproxy(n);for(i=Object.keys(t),o=i.length;o--;)n=i[o],this.hasOwnProperty(n)||r.isReserved(n)||this._proxy(n);e.__ob__.removeVm(this),s.create(t).addVm(this),this._digest()},e._proxy=function(t){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(i){e._data[t]=i}})},e._unproxy=function(t){delete this[t]},e._digest=function(){for(var t=this._watcherList.length;t--;)this._watcherList[t].update();var e=this._children;for(t=e.length;t--;){var i=e[t];i.$options.inherit&&i._digest()}},e._initComputed=function(){var t=this.$options.computed;if(t)for(var e in t){var i=t[e],s={enumerable:!0,configurable:!0};"function"==typeof i?(s.get=r.bind(i,this),s.set=n):(s.get=i.get?r.bind(i.get,this):n,s.set=i.set?r.bind(i.set,this):n),Object.defineProperty(this,e,s)}},e._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=r.bind(t[e],this)},e._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)this._defineMeta(e,t[e])},e._defineMeta=function(t,e){var i=new o;Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:function(){return s.target&&s.target.addDep(i),e},set:function(t){t!==e&&(e=t,i.notify())}})}},function(t,e,i){var n=i(11),r=i(24),s=i(16),o=i(17);e._compile=function(t){var e=this.$options,i=e._parent;if(e._linkFn)this._initElement(t),e._linkFn(this,t);else{var r=t;if(e._asComponent){var a=e._content=n.extractContent(r),c=i.$options;c._skipAttrs=e.paramAttributes;var h=s(r,c,!0,!0);if(c._skipAttrs=null,a){var l=i._children.length,u=s(a,c,!0);this._contentUnlinkFn=u(i,a),this._transCpnts=i._children.slice(l)}t=o(t,e),this._initElement(t),this._containerUnlinkFn=h(i,t)}else t=o(t,e),this._initElement(t);var f=s(t,e);f(this,t),e.replace&&n.replace(r,t)}return t},e._initElement=function(t){t instanceof DocumentFragment?(this._isBlock=!0,this.$el=this._blockStart=t.firstChild,this._blockEnd=t.lastChild,this._blockFragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},e._bindDir=function(t,e,i,n){this._directives.push(new r(t,e,this,i,n))},e._destroy=function(t,e){if(!this._isBeingDestroyed){this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var i,n=this.$parent;for(n&&!n._isBeingDestroyed&&(i=n._children.indexOf(this),n._children.splice(i,1)),i=this._children.length;i--;)this._children[i].$destroy();for(this._containerUnlinkFn&&this._containerUnlinkFn(),this._contentUnlinkFn&&this._contentUnlinkFn(),i=0;i<this._directives.length;i++)this._directives[i]._teardown();for(i in this._userWatchers)this._userWatchers[i].teardown();this.$el&&(this.$el.__vue__=null);var r=this;t&&this.$el?this.$remove(function(){r._cleanup()}):e||this._cleanup()}},e._cleanup=function(){this._data.__ob__.removeVm(this),this._data=this._watchers=this._userWatchers=this._watcherList=this.$el=this.$parent=this.$root=this._children=this._transCpnts=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off()}},function(t,e,i){var n=i(11),r=i(25),s=i(18),o=i(19),a=i(21),c=i(22),h=/[^|]\|[^|]/;e.$get=function(t){var e=c.parse(t);return e?e.get.call(this,this):void 0},e.$set=function(t,e){var i=c.parse(t,!0);i&&i.set&&i.set.call(this,this,e)},e.$add=function(t,e){this._data.$add(t,e)},e.$delete=function(t){this._data.$delete(t)},e.$watch=function(t,e,i,n){var s=this,o=i?t+"**deep**":t,a=s._userWatchers[o],c=function(t,i){e.call(s,t,i)};return a?a.addCb(c):a=s._userWatchers[o]=new r(s,t,c,{deep:i,user:!0}),n&&c(a.value),function(){a.removeCb(c),a.active||(s._userWatchers[o]=null)}},e.$eval=function(t){if(h.test(t)){var e=a.parse(t)[0];return e.filters?n.applyFilters(this.$get(e.expression),n.resolveFilters(this,e.filters).read,this):this.$get(e.expression)}return this.$get(t)},e.$interpolate=function(t){var e=o.parse(t),i=this;return e?1===e.length?i.$eval(e[0].value):e.map(function(t){return t.tag?i.$eval(t.value):t.value}).join(""):t},e.$log=function(t){var e=t?s.get(this._data,t):this._data;e&&(e=JSON.parse(JSON.stringify(e))),console.log(e)}},function(t,e,i){function n(t,e,i,n,o,a){e=s(e);var c=!h.inDoc(e),l=n===!1||c?o:a,u=!c&&!t._isAttached&&!h.inDoc(t.$el);return t._isBlock?r(t,e,l,i):l(t.$el,e,t,i),u&&t._callHook("attached"),t}function r(t,e,i,n){for(var r,s=t._blockStart,o=t._blockEnd;r!==o;)r=s.nextSibling,i(s,e,t),s=r;i(o,e,t,n)}function s(t){return"string"==typeof t?document.querySelector(t):t}function o(t,e,i,n){e.appendChild(t),n&&n()}function a(t,e,i,n){h.before(t,e),n&&n()}function c(t,e,i){h.remove(t),i&&i()}var h=i(11),l=i(50);e.$appendTo=function(t,e,i){return n(this,t,e,i,o,l.append)},e.$prependTo=function(t,e,i){return t=s(t),t.hasChildNodes()?this.$before(t.firstChild,e,i):this.$appendTo(t,e,i),this},e.$before=function(t,e,i){return n(this,t,e,i,a,l.before)},e.$after=function(t,e,i){return t=s(t),t.nextSibling?this.$before(t.nextSibling,e,i):this.$appendTo(t.parentNode,e,i),this},e.$remove=function(t,e){var i=this._isAttached&&h.inDoc(this.$el);i||(e=!1);var n,s=this,a=function(){i&&s._callHook("detached"),t&&t()};return this._isBlock&&!this._blockFragment.hasChildNodes()?(n=e===!1?o:l.removeThenAppend,r(this,this._blockFragment,n,a)):(n=e===!1?c:l.remove)(this.$el,this,a),this}},function(t,e,i){function n(t,e,i){var n=t.$parent;if(n&&i&&!s.test(e))for(;n;)n._eventsCount[e]=(n._eventsCount[e]||0)+i,n=n.$parent}var r=i(11);e.$on=function(t,e){return(this._events[t]||(this._events[t]=[])).push(e),n(this,t,1),this},e.$once=function(t,e){function i(){n.$off(t,i),e.apply(this,arguments)}var n=this;return i.fn=e,this.$on(t,i),this},e.$off=function(t,e){var i;if(!arguments.length){if(this.$parent)for(t in this._events)i=this._events[t],i&&n(this,t,-i.length);return this._events={},this}if(i=this._events[t],!i)return this;if(1===arguments.length)return n(this,t,-i.length),this._events[t]=null,this;for(var r,s=i.length;s--;)if(r=i[s],r===e||r.fn===e){n(this,t,-1),i.splice(s,1);break}return this},e.$emit=function(t){this._eventCancelled=!1;var e=this._events[t];if(e){for(var i=arguments.length-1,n=new Array(i);i--;)n[i]=arguments[i+1];i=0,e=e.length>1?r.toArray(e):e;for(var s=e.length;s>i;i++)e[i].apply(this,n)===!1&&(this._eventCancelled=!0)}return this},e.$broadcast=function(t){if(this._eventsCount[t]){for(var e=this._children,i=0,n=e.length;n>i;i++){var r=e[i];r.$emit.apply(r,arguments),r._eventCancelled||r.$broadcast.apply(r,arguments)}return this}},e.$dispatch=function(){for(var t=this.$parent;t;)t.$emit.apply(t,arguments),t=t._eventCancelled?null:t.$parent;return this};var s=/^hook:/},function(t,e,i){var n=i(11);e.$addChild=function(t,e){e=e||n.Vue,t=t||{};var i,r=this,s=void 0!==t.inherit?t.inherit:e.options.inherit;if(s){var o=r._childCtors;if(i=o[e.cid],!i){var a=e.options.name,c=a?n.camelize(a,!0):"VueComponent";i=new Function("return function "+c+" (options) {this.constructor = "+c+";this._init(options) }")(),i.options=e.options,i.prototype=this,o[e.cid]=i}}else i=e;t._parent=r,t._root=r.$root;var h=new i(t);return this._children.push(h),h}},function(t,e,i){function n(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}var r=i(11),s=i(16);e.$mount=function(t){if(!this._isCompiled){if(t){if("string"==typeof t){if(t=document.querySelector(t),!t)return}}else t=document.createElement("div");return this._compile(t),this._isCompiled=!0,this._callHook("compiled"),r.inDoc(this.$el)?(this._callHook("attached"),this._initDOMHooks(),n.call(this)):(this._initDOMHooks(),this.$once("hook:attached",n)),this}},e.$destroy=function(t,e){this._destroy(t,e)},e.$compile=function(t){return s(t,this.$options,!0)(this,t)}},function(t,e,i){var n=i(26),r=n.extend;r(e,n),r(e,i(27)),r(e,i(28)),r(e,i(29)),r(e,i(30))},function(t,e,i){e.text=i(31),e.html=i(32),e.attr=i(33),e.show=i(34),e["class"]=i(35),e.el=i(36),e.ref=i(37),e.cloak=i(38),e.style=i(39),e.partial=i(40),e.transition=i(41),e.on=i(42),e.model=i(51),e.component=i(43),e.repeat=i(44),e["if"]=i(45),e["with"]=i(46),e.events=i(47)},function(t,e,i){var n=i(11);e.json={read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,Number(e)||2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},e.capitalize=function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},e.uppercase=function(t){return t||0===t?t.toString().toUpperCase():""},e.lowercase=function(t){return t||0===t?t.toString().toLowerCase():""};var r=/(\d{3})(?=\d)/g;e.currency=function(t,e){if(t=parseFloat(t),!t&&0!==t)return"";e=e||"$";var i=Math.floor(Math.abs(t)).toString(),n=i.length%3,s=n>0?i.slice(0,n)+(i.length>3?",":""):"",o="."+t.toFixed(2).slice(-2);return(0>t?"-":"")+e+s+i.slice(n).replace(r,"$1,")+o},e.pluralize=function(t){var e=n.toArray(arguments,1);return e.length>1?e[t%10-1]||e[e.length-1]:e[0]+(1===t?"":"s")};var s={enter:13,tab:9,"delete":46,up:38,left:37,right:39,down:40,esc:27};e.key=function(t,e){if(t){var i=s[e];return i||(i=parseInt(e,10)),function(e){return e.keyCode===i?t.call(this,e):void 0}}},e.key.keyCodes=s,n.extend(e,i(48))},function(t,e,i){function n(t,e){var i,r,o;for(i in e)r=t[i],o=e[i],t.hasOwnProperty(i)?s.isObject(r)&&s.isObject(o)&&n(r,o):t.$add(i,o);return t}function r(t){if(t){var e;for(var i in t)e=t[i],s.isPlainObject(e)&&(e.name=i,t[i]=s.Vue.extend(e))}}var s=i(11),o=s.extend,a=Object.create(null);a.data=function(t,e,i){if(i){var r="function"==typeof e?e.call(i):e,s="function"==typeof t?t.call(i):void 0;return r?n(r,s):s}return e?"function"!=typeof e?t:t?function(){return n(e.call(this),t.call(this))}:e:t},a.el=function(t,e,i){if(i||!e||"function"==typeof e){var n=e||t;return i&&"function"==typeof n?n.call(i):n}},a.created=a.ready=a.attached=a.detached=a.beforeCompile=a.compiled=a.beforeDestroy=a.destroyed=a.paramAttributes=function(t,e){return e?t?t.concat(e):s.isArray(e)?e:[e]:t},a.directives=a.filters=a.partials=a.transitions=a.components=function(t,e,i,n){var r=Object.create(i&&i.$parent?i.$parent.$options[n]:s.Vue.options[n]);if(t)for(var a,c=Object.keys(t),h=c.length;h--;)a=c[h],r[a]=t[a];return e&&o(r,e),r},a.watch=a.events=function(t,e){if(!e)return t;if(!t)return e;var i={};o(i,t);for(var n in e){var r=i[n],a=e[n];r&&!s.isArray(r)&&(r=[r]),i[n]=r?r.concat(a):[a]}return i},a.methods=a.computed=function(t,e){if(!e)return t;if(!t)return e;var i=Object.create(t);return o(i,e),i};var c=function(t,e){return void 0===e?t:e};t.exports=function h(t,e,i){function n(n){var r=a[n]||c;o[n]=r(t[n],e[n],i,n)}r(e.components);var s,o={};if(e.mixins)for(var l=0,u=e.mixins.length;u>l;l++)t=h(t,e.mixins[l],i);for(s in t)n(s);for(s in e)t.hasOwnProperty(s)||n(s);return o}},function(t){t.exports={prefix:"v-",debug:!1,silent:!1,proto:!0,interpolate:!0,async:!0,warnExpressionErrors:!0,_delimitersChanged:!0};var e=["{{","}}"];Object.defineProperty(t.exports,"delimiters",{get:function(){return e},set:function(t){e=t,this._delimitersChanged=!0}})},function(t,e,i){function n(t,e,i){var n=t.nodeType;return 1===n&&"SCRIPT"!==t.tagName?r(t,e,i):3===n&&y.interpolate?o(t,e):void 0}function r(t,e,i){var n,r,o;if(i||t.__vue__||(r=t.tagName.toLowerCase(),o=r.indexOf("-")>0&&e.components[r],o&&t.setAttribute(y.prefix+"component",r)),(o||t.hasAttributes())&&(i||(n=p(t,e)),!n)){var a=m(t,e,i);n=a.length?s(a):null}if("TEXTAREA"===t.tagName){var c=n;n=function(t,e){e.value=t.$interpolate(e.value),c&&c(t,e)},n.terminal=!0}return n}function s(t){return function(e,i){for(var n,r,s,o=t.length;o--;)if(n=t[o],n._link)n._link(e,i);else for(s=n.descriptors.length,r=0;s>r;r++)e._bindDir(n.name,i,n.descriptors[r],n.def)}}function o(t,e){var i=w.parse(t.nodeValue);if(!i)return null;for(var n,r,s=document.createDocumentFragment(),o=0,h=i.length;h>o;o++)r=i[o],n=r.tag?a(r,e):document.createTextNode(r.value),s.appendChild(n);return c(i,s,e)}function a(t,e){function i(i){t.type=i,t.def=e.directives[i],t.descriptor=$.parse(t.value)[0]}var n;return t.oneTime?n=document.createTextNode(t.value):t.html?(n=document.createComment("v-html"),i("html")):t.partial?(n=document.createComment("v-partial"),i("partial")):(n=document.createTextNode(" "),i("text")),n}function c(t,e){return function(i,n){for(var r,s,o,a=e.cloneNode(!0),c=g.toArray(a.childNodes),h=0,l=t.length;l>h;h++)r=t[h],s=r.value,r.tag&&(o=c[h],r.oneTime?(s=i.$eval(s),r.html?g.replace(o,x.parse(s,!0)):o.nodeValue=s):i._bindDir(r.type,o,r.descriptor,r.def));g.replace(n,a)}}function h(t,e){for(var i,r,s,o=[],a=0,c=t.length;c>a;a++)s=t[a],i=n(s,e),r=i&&i.terminal||"SCRIPT"===s.tagName||!s.hasChildNodes()?null:h(s.childNodes,e),o.push(i,r);return o.length?l(o):null}function l(t){return function(e,i){for(var n,r,s,o=0,a=0,c=t.length;c>o;a++){n=i[a],r=t[o++],s=t[o++];var h=g.toArray(n.childNodes);r&&r(e,n),s&&s(e,h)}}}function u(t,e,i){for(var n,r,s,o=[],a=e.length;a--;)if(n=e[a],/[A-Z]/.test(n),r=t.getAttribute(n),null!==r){s={name:n,value:r};var c=w.parse(r);if(c){if(t.removeAttribute(n),c.length>1)continue;s.dynamic=!0,s.value=c[0].value}o.push(s)}return f(o,i)}function f(t,e){var i=e.directives["with"];return function(e,n){for(var r,s,o=t.length;o--;)r=t[o],s=g.camelize(r.name.replace(k,"")),r.dynamic?e._bindDir("with",n,{arg:s,expression:r.value},i):e.$set(s,r.value)}}function d(){}function p(t,e){if(null!==g.attr(t,"pre"))return d;for(var i,n,r=0;3>r;r++)if(n=C[r],i=g.attr(t,n))return v(t,n,i,e)}function v(t,e,i,n){var r=$.parse(i)[0],s=n.directives[e],o=function(t,i){t._bindDir(e,i,r,s)};return o.terminal=!0,o}function m(t,e,i){for(var n,r,s,o,a,c=g.toArray(t.attributes),h=c.length,l=[];h--;)if(n=c[h],r=n.name,0===r.indexOf(y.prefix)){if(o=r.slice(y.prefix.length),i&&("with"===o||"component"===o))continue;a=e.directives[o],a&&l.push({name:o,descriptors:$.parse(n.value),def:a})}else y.interpolate&&(s=_(t,r,n.value,e),s&&l.push(s));return l.sort(b),l}function _(t,e,i,n){if(!(n._skipAttrs&&n._skipAttrs.indexOf(e)>-1)){var r=w.parse(i);if(r){for(var s=n.directives.attr,o=r.length,a=!0;o--;){var c=r[o];c.tag&&!c.oneTime&&(a=!1)}return{def:s,_link:a?function(t,n){n.setAttribute(e,t.$interpolate(i))}:function(t,i){var n=w.tokensToExp(r,t),o=$.parse(e+":"+n)[0];t._bindDir("attr",i,o,s)}}}}}function b(t,e){return t=t.def.priority||0,e=e.def.priority||0,t>e?1:-1}var g=i(11),y=i(15),w=i(19),$=i(21),x=i(20);t.exports=function(t,e,i,r){var s=!i&&e.paramAttributes,o=s?u(t,s,e):null,a=t instanceof DocumentFragment?null:n(t,e,r),c=a&&a.terminal||"SCRIPT"===t.tagName||!t.hasChildNodes()?null:h(t.childNodes,e);return function(t,e){var n=t._directives.length;o&&o(t,e);var r=g.toArray(e.childNodes);if(a&&a(t,e),c&&c(t,r),i){var s=t._directives.slice(n);return function(){for(var e=s.length;e--;)s[e]._teardown();e=t._directives.indexOf(s[0]),t._directives.splice(e,s.length)}}}};var k=/^data-/,C=["repeat","if","component"];d.terminal=!0},function(t,e,i){function n(t,e){var i=e.template,n=c.parse(i,!0);if(n){var s=e._content||a.extractContent(t);if(e.replace){if(n.childNodes.length>1)return r(n,s),n;var o=n.firstChild;return a.copyAttributes(t,o),r(o,s),o}return t.appendChild(n),r(t,s),t}}function r(t,e){var i=s(t),n=i.length;if(n){for(var r,c,h,l,u;n--;)r=i[n],e?(c=r.getAttribute("select"),c?(h=e.querySelectorAll(c),r.content=a.toArray(h.length?h:r.childNodes)):u=r):r.content=a.toArray(r.childNodes);for(n=0,l=i.length;l>n;n++)r=i[n],r!==u&&o(r,r.content);u&&o(u,a.toArray(e.childNodes))}}function s(t){return a.isArray(t)?h.apply([],t.map(s)):t.querySelectorAll?a.toArray(t.querySelectorAll("content")):[]}function o(t,e){for(var i=t.parentNode,n=0,r=e.length;r>n;n++)i.insertBefore(e[n],t);i.removeChild(t)}var a=i(11),c=i(20);t.exports=function(t,e){return"TEMPLATE"===t.tagName&&(t=c.parse(t)),e&&e.template&&(t=n(t,e)),t instanceof DocumentFragment&&(a.prepend(document.createComment("v-start"),t),t.appendChild(document.createComment("v-end"))),t};var h=[].concat},function(t,e,i){function n(){}function r(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function s(t){function e(){var e=t[d+1];return"inSingleQuote"===p&&"'"===e||"inDoubleQuote"===p&&'"'===e?(d++,s=e,v.append(),!0):void 0}for(var i,s,o,a,c,h,l,f=[],d=-1,p="beforePath",v={push:function(){void 0!==o&&(f.push(o),o=void 0)},append:function(){void 0===o?o=s:o+=s}};p;)if(d++,i=t[d],"\\"!==i||!e()){if(a=r(i),l=u[p],c=l[a]||l["else"]||"error","error"===c)return;if(p=c[0],h=v[c[1]]||n,s=void 0===c[2]?i:c[2],h(),"afterPath"===p)return f}}function o(t){return l.test(t)?"."+t:+t===t>>>0?"["+t+"]":'["'+t.replace(/"/g,'\\"')+'"]'}var a=i(11),c=i(52),h=new c(1e3),l=/^[$_a-zA-Z]+[\w$]*$/,u={beforePath:{ws:["beforePath"],ident:["inIdent","append"],"[":["beforeElement"],eof:["afterPath"]},inPath:{ws:["inPath"],".":["beforeIdent"],"[":["beforeElement"],eof:["afterPath"]},beforeIdent:{ws:["beforeIdent"],ident:["inIdent","append"]},inIdent:{ident:["inIdent","append"],0:["inIdent","append"],number:["inIdent","append"],ws:["inPath","push"],".":["beforeIdent","push"],"[":["beforeElement","push"],eof:["afterPath","push"]},beforeElement:{ws:["beforeElement"],0:["afterZero","append"],number:["inIndex","append"],"'":["inSingleQuote","append",""],'"':["inDoubleQuote","append",""]},afterZero:{ws:["afterElement","push"],"]":["inPath","push"]},inIndex:{0:["inIndex","append"],number:["inIndex","append"],ws:["afterElement"],"]":["inPath","push"]},inSingleQuote:{"'":["afterElement"],eof:"error","else":["inSingleQuote","append"]},inDoubleQuote:{'"':["afterElement"],eof:"error","else":["inDoubleQuote","append"]},afterElement:{ws:["afterElement"],"]":["inPath","push"]}};e.compileGetter=function(t){var e="return o"+t.map(o).join("");return new Function("o",e)},e.parse=function(t){var i=h.get(t);return i||(i=s(t),i&&(i.get=e.compileGetter(i),h.put(t,i))),i},e.get=function(t,i){return i=e.parse(i),i?i.get(t):void 0},e.set=function(t,i,n){if("string"==typeof i&&(i=e.parse(i)),!i||!a.isObject(t))return!1;for(var r,s,o=0,c=i.length-1;c>o;o++)r=t,s=i[o],t=t[s],a.isObject(t)||(t={},r.$add(s,t));return s=i[o],s in t?t[s]=n:t.$add(s,n),!0}},function(t,e,i){function n(t){return t.replace(v,"\\$&")}function r(){d._delimitersChanged=!1;var t=d.delimiters[0],e=d.delimiters[1];l=t.charAt(0),u=e.charAt(e.length-1);var i=n(l),r=n(u),s=n(t),o=n(e);c=new RegExp(i+"?"+s+"(.+?)"+o+r+"?","g"),h=new RegExp("^"+i+s+".*"+o+r+"$"),a=new f(1e3)}function s(t,e,i){return t.tag?e&&t.oneTime?'"'+e.$eval(t.value)+'"':i?t.value:o(t.value):'"'+t.value+'"'}function o(t){if(m.test(t)){var e=p.parse(t)[0];if(e.filters){t=e.expression;for(var i=0,n=e.filters.length;n>i;i++){var r=e.filters[i],s=r.args?',"'+r.args.join('","')+'"':"";t='this.$options.filters["'+r.name+'"].apply(this,['+t+s+"])"}return t}return"("+t+")"}return"("+t+")"}var a,c,h,l,u,f=i(52),d=i(15),p=i(21),v=/[-.*+?^${}()|[\]\/\\]/g;e.parse=function(t){d._delimitersChanged&&r();var e=a.get(t);if(e)return e;if(!c.test(t))return null;for(var i,n,s,o,l,u,f=[],p=c.lastIndex=0;i=c.exec(t);)n=i.index,n>p&&f.push({value:t.slice(p,n)}),o=i[1].charCodeAt(0),l=42===o,u=62===o,s=l||u?i[1].slice(1):i[1],f.push({tag:!0,value:s.trim(),html:h.test(i[0]),oneTime:l,partial:u}),p=n+i[0].length;return p<t.length&&f.push({value:t.slice(p)}),a.put(t,f),f},e.tokensToExp=function(t,e){return t.length>1?t.map(function(t){return s(t,e)}).join("+"):s(t[0],e,!0)};var m=/[^|]\|[^|]/},function(t,e,i){function n(t){var e=a.get(t);if(e)return e;var i=document.createDocumentFragment(),n=t.match(l),r=u.test(t);if(n||r){var s=n&&n[1],o=h[s]||h._default,c=o[0],f=o[1],d=o[2],p=document.createElement("div");for(p.innerHTML=f+t.trim()+d;c--;)p=p.lastChild;for(var v;v=p.firstChild;)i.appendChild(v)}else i.appendChild(document.createTextNode(t));return a.put(t,i),i}function r(t){var e=t.tagName;return"TEMPLATE"===e&&t.content instanceof DocumentFragment?t.content:n("SCRIPT"===e?t.textContent:t.innerHTML)}var s=i(11),o=i(52),a=new o(1e3),c=new o(1e3),h={_default:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};h.td=h.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],h.option=h.optgroup=[1,'<select multiple="multiple">',"</select>"],h.thead=h.tbody=h.colgroup=h.caption=h.tfoot=[1,"<table>","</table>"],h.g=h.defs=h.symbol=h.use=h.image=h.text=h.circle=h.ellipse=h.line=h.path=h.polygon=h.polyline=h.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var l=/<([\w:]+)/,u=/&\w+;/,f=s.inBrowser?function(){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}():!1,d=s.inBrowser?function(){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}():!1;e.clone=function(t){var e,i,n,r=t.cloneNode(!0);if(f&&(i=t.querySelectorAll("template"),i.length))for(n=r.querySelectorAll("template"),e=n.length;e--;)n[e].parentNode.replaceChild(i[e].cloneNode(!0),n[e]);if(d)if("TEXTAREA"===t.tagName)r.value=t.value;else if(i=t.querySelectorAll("textarea"),i.length)for(n=r.querySelectorAll("textarea"),e=n.length;e--;)n[e].value=i[e].value;return r},e.parse=function(t,i,s){var o,a;return t instanceof DocumentFragment?i?t.cloneNode(!0):t:("string"==typeof t?s||"#"!==t.charAt(0)?a=n(t):(a=c.get(t),a||(o=document.getElementById(t.slice(1)),o&&(a=r(o),c.put(t,a)))):t.nodeType&&(a=r(t)),a&&i?e.clone(a):a)}},function(t,e,i){function n(){_.raw=s.slice(p,a).trim(),void 0===_.expression?_.expression=s.slice(v,a).trim():b!==p&&r(),(0===a||_.expression)&&m.push(_)}function r(){var t,e=s.slice(b,a).trim();if(e){t={};var i=e.match(k);t.name=i[0],t.args=i.length>1?i.slice(1):null}t&&(_.filters=_.filters||[]).push(t),b=a+1}var s,o,a,c,h,l,u,f,d,p,v,m,_,b,g,y=i(11),w=i(52),$=new w(1e3),x=/^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/,k=/[^\s'"]+|'[^']+'|"[^"]+"/g;e.parse=function(t){var e=$.get(t);if(e)return e;for(s=t,h=l=!1,u=f=d=p=v=0,b=0,m=[],_={},g=null,a=0,c=s.length;c>a;a++)if(o=s.charCodeAt(a),h)39===o&&(h=!h);else if(l)34===o&&(l=!l);else if(44!==o||d||u||f)if(58!==o||_.expression||_.arg)if(124===o&&124!==s.charCodeAt(a+1)&&124!==s.charCodeAt(a-1))void 0===_.expression?(b=a+1,_.expression=s.slice(v,a).trim()):r();else switch(o){case 34:l=!0;break;case 39:h=!0;break;case 40:d++;break;case 41:d--;break;case 91:f++;break;case 93:f--;break;case 123:u++;break;case 125:u--}else g=s.slice(p,a).trim(),x.test(g)&&(v=a+1,_.arg=y.stripQuotes(g)||g);else n(),_={},p=v=b=a+1;return(0===a||p!==a)&&n(),$.put(t,m),m}},function(t,e,i){function n(t){var e=$.length;return $[e]=t.replace(m,"\\n"),'"'+e+'"'}function r(t){var e=t.charAt(0),i=t.slice(1);return w.test(i)?t:(i=i.indexOf('"')>-1?i.replace(b,s):i,e+"scope."+i)}function s(t,e){return $[e]}function o(t,e){$.length=0;var i=t.replace(_,n).replace(v,"");i=(" "+i).replace(y,r).replace(b,s);var o=c(i);return o?{get:o,body:i,set:e?h(i):null}:void 0}function a(t){var e,i;return t.indexOf("[")<0?(i=t.split("."),e=u.compileGetter(i)):(i=u.parse(t),e=i.get),{get:e,set:function(t,e){u.set(t,i,e)}}}function c(t){try{return new Function("scope","return "+t+";")}catch(e){}}function h(t){try{return new Function("scope","value",t+"=value;")}catch(e){}}function l(t){t.set||(t.set=h(t.body))}var u=(i(11),i(18)),f=i(52),d=new f(1e3),p="Math,break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,undefined,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield",v=/\s/g,m=/\n/g,_=/[\{,]\s*[\w\$_]+\s*:|'[^']*'|"[^"]*"/g,b=/"(\d+)"/g,g=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\])*$/,y=/[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,w=new RegExp("^("+p.replace(/,/g,"\\b|")+"\\b)"),$=[];e.parse=function(t,e){t=t.trim();var i=d.get(t);if(i)return e&&l(i),i;var n=g.test(t)&&"Math."!==t.slice(0,5)?a(t):o(t,e);return d.put(t,n),n},e.pathTestRE=g},function(t){function e(){this.id=++i,this.subs=[]}var i=0,n=e.prototype;n.addSub=function(t){this.subs.push(t)},n.removeSub=function(t){if(this.subs.length){var e=this.subs.indexOf(t);e>-1&&this.subs.splice(e,1)}},n.notify=function(){for(var t=0,e=this.subs;t<e.length;t++)e[t].update()},t.exports=e},function(t,e,i){function n(t,e,i,n,s){this.name=t,this.el=e,this.vm=i,this.raw=n.raw,this.expression=n.expression,this.arg=n.arg,this.filters=r.resolveFilters(i,n.filters),this._locked=!1,this._bound=!1,this._bind(s)}var r=i(11),s=i(15),o=i(25),a=i(19),c=i(22),h=n.prototype;h._bind=function(t){if("cloak"!==this.name&&this.el.removeAttribute&&this.el.removeAttribute(s.prefix+this.name),"function"==typeof t?this.update=t:r.extend(this,t),this._watcherExp=this.expression,this._checkDynamicLiteral(),this.bind&&this.bind(),this._watcherExp&&(this.update||this.twoWay)&&(!this.isLiteral||this._isDynamicLiteral)&&!this._checkStatement()){var e=this,i=this._update=this.update?function(t,i){e._locked||e.update(t,i)}:function(){},n=this.vm._watchers[this.raw];n&&"repeat"!==this.name?n.addCb(i):n=this.vm._watchers[this.raw]=new o(this.vm,this._watcherExp,i,{filters:this.filters,twoWay:this.twoWay,deep:this.deep}),this._watcher=n,null!=this._initValue?n.set(this._initValue):this.update&&this.update(n.value)}this._bound=!0},h._checkDynamicLiteral=function(){var t=this.expression;if(t&&this.isLiteral){var e=a.parse(t);if(e){var i=a.tokensToExp(e);this.expression=this.vm.$get(i),this._watcherExp=i,this._isDynamicLiteral=!0}}},h._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!c.pathTestRE.test(t)){var e=c.parse(t).get,i=this.vm,n=function(){e.call(i,i)};return this.filters&&(n=r.applyFilters(n,this.filters.read,i)),this.update(n),!0}},h._checkParam=function(t){var e=this.el.getAttribute(t);return null!==e&&this.el.removeAttribute(t),e},h._teardown=function(){if(this._bound){this.unbind&&this.unbind();var t=this._watcher;t&&t.active&&(t.removeCb(this._update),t.active||(this.vm._watchers[this.raw]=null)),this._bound=!1,this.vm=this.el=this._watcher=null}},h.set=function(t,e){if(this.twoWay&&(e&&(this._locked=!0),this._watcher.set(t),e)){var i=this;r.nextTick(function(){i._locked=!1})}},t.exports=n},function(t,e,i){function n(t,e,i,n){this.vm=t,t._watcherList.push(this),this.expression=e,this.cbs=[i],this.id=++l,this.active=!0,n=n||{},this.deep=n.deep,this.user=n.user,this.deps=Object.create(null),n.filters&&(this.readFilters=n.filters.read,this.writeFilters=n.filters.write);var r=c.parse(e,n.twoWay);this.getter=r.get,this.setter=r.set,this.value=this.get()}function r(t){var e,i,n;for(e in t)if(i=t[e],s.isArray(i))for(n=i.length;n--;)r(i[n]);else s.isObject(i)&&r(i)}var s=i(11),o=i(15),a=i(49),c=i(22),h=i(53),l=0,u=n.prototype;u.addDep=function(t){var e=t.id;this.newDeps[e]||(this.newDeps[e]=t,this.deps[e]||(this.deps[e]=t,t.addSub(this)))},u.get=function(){this.beforeGet();var t,e=this.vm;try{t=this.getter.call(e,e)}catch(i){o.warnExpressionErrors}return this.deep&&r(t),t=s.applyFilters(t,this.readFilters,e),this.afterGet(),t},u.set=function(t){var e=this.vm;t=s.applyFilters(t,this.writeFilters,e,this.value);try{this.setter.call(e,e,t)}catch(i){o.warnExpressionErrors}},u.beforeGet=function(){a.target=this,this.newDeps={}},u.afterGet=function(){a.target=null;for(var t in this.deps)this.newDeps[t]||this.deps[t].removeSub(this);this.deps=this.newDeps},u.update=function(){!o.async||o.debug?this.run():h.push(this)},u.run=function(){if(this.active){var t=this.get();if(t!==this.value||Array.isArray(t)||this.deep){var e=this.value;this.value=t;for(var i=this.cbs,n=0,r=i.length;r>n;n++){i[n](t,e);var s=r-i.length;s&&(n-=s,r-=s)}}}},u.addCb=function(t){this.cbs.push(t)},u.removeCb=function(t){var e=this.cbs;if(e.length>1){var i=e.indexOf(t);i>-1&&e.splice(i,1)}else t===e[0]&&this.teardown()
},u.teardown=function(){if(this.active){if(!this.vm._isBeingDestroyed){var t=this.vm._watcherList;t.splice(t.indexOf(this))}for(var e in this.deps)this.deps[e].removeSub(this);this.active=!1,this.vm=this.cbs=this.value=null}},t.exports=n},function(t,e){e.isReserved=function(t){var e=t.charCodeAt(0);return 36===e||95===e},e.toString=function(t){return null==t?"":t.toString()},e.toNumber=function(t){return isNaN(t)||null===t||"boolean"==typeof t?t:Number(t)},e.stripQuotes=function(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?!1:t.slice(1,-1)};var i=/[-_](\w)/g,n=/(?:^|[-_])(\w)/g;e.camelize=function(t,e){var r=e?n:i;return t.replace(r,function(t,e){return e?e.toUpperCase():""})},e.bind=function(t,e){return function(){return t.apply(e,arguments)}},e.toArray=function(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n},e.extend=function(t,e){for(var i in e)t[i]=e[i];return t},e.isObject=function(t){return t&&"object"==typeof t};var r=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===r.call(t)},e.isArray=function(t){return Array.isArray(t)},e.define=function(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}},function(t,e){function i(t){var e=[],i=document.createTextNode("0"),n=0;return new t(function(){for(var t=e.length,i=0;t>i;i++)e[i]();e=e.slice(t)}).observe(i,{characterData:!0}),function(t){e.push(t),i.nodeValue=n=++n%2}}e.hasProto="__proto__"in{};var n,r=Object.prototype.toString,s=e.inBrowser="undefined"!=typeof window&&"[object Object]"!==r.call(window);if(n="undefined"!=typeof MutationObserver?i(MutationObserver):"undefined"!=typeof WebkitMutationObserver?i(WebkitMutationObserver):setTimeout,e.nextTick=function(t,e){e?n(function(){t.call(e)},0):n(t,0)},e.isIE9=s&&navigator.userAgent.indexOf("MSIE 9.0")>0,s&&!e.isIE9){var o=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,a=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;e.transitionProp=o?"WebkitTransition":"transition",e.transitionEndEvent=o?"webkitTransitionEnd":"transitionend",e.animationProp=a?"WebkitAnimation":"animation",e.animationEndEvent=a?"webkitAnimationEnd":"animationend"}},function(t,e,i){var n=i(15),r="undefined"!=typeof document&&document.documentElement;e.inDoc=function(t){return r&&r.contains(t)},e.attr=function(t,e){e=n.prefix+e;var i=t.getAttribute(e);return null!==i&&t.removeAttribute(e),i},e.before=function(t,e){e.parentNode.insertBefore(t,e)},e.after=function(t,i){i.nextSibling?e.before(t,i.nextSibling):i.parentNode.appendChild(t)},e.remove=function(t){t.parentNode.removeChild(t)},e.prepend=function(t,i){i.firstChild?e.before(t,i.firstChild):i.appendChild(t)},e.replace=function(t,e){var i=t.parentNode;i&&i.replaceChild(e,t)},e.copyAttributes=function(t,e){if(t.hasAttributes())for(var i=t.attributes,n=0,r=i.length;r>n;n++){var s=i[n];e.setAttribute(s.name,s.value)}},e.on=function(t,e,i){t.addEventListener(e,i)},e.off=function(t,e,i){t.removeEventListener(e,i)},e.addClass=function(t,e){if(t.classList)t.classList.add(e);else{var i=" "+(t.getAttribute("class")||"")+" ";i.indexOf(" "+e+" ")<0&&t.setAttribute("class",(i+e).trim())}},e.removeClass=function(t,e){if(t.classList)t.classList.remove(e);else{for(var i=" "+(t.getAttribute("class")||"")+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");t.setAttribute("class",i.trim())}},e.extractContent=function(t){var e,i;if(t.hasChildNodes())for(i=document.createElement("div");e=t.firstChild;)i.appendChild(e);return i}},function(t,e,i){i(30);e.resolveFilters=function(t,e,i){if(e){var n=i||{};return e.forEach(function(e){var i=t.$options.filters[e.name];if(i){var r,s,o=e.args;"function"==typeof i?r=i:(r=i.read,s=i.write),r&&(n.read||(n.read=[]),n.read.push(function(e){return o?r.apply(t,[e].concat(o)):r.call(t,e)})),s&&(n.write||(n.write=[]),n.write.push(function(e,i){return o?s.apply(t,[e,i].concat(o)):s.call(t,e,i)}))}}),n}},e.applyFilters=function(t,e,i,n){if(!e)return t;for(var r=0,s=e.length;s>r;r++)t=e[r].call(i,t,n);return t}},function(t,e,i){i(15)},function(t,e,i){var n=i(11);t.exports={bind:function(){this.attr=3===this.el.nodeType?"nodeValue":"textContent"},update:function(t){this.el[this.attr]=n.toString(t)}}},function(t,e,i){var n=i(11),r=i(20);t.exports={bind:function(){8===this.el.nodeType&&(this.nodes=[])},update:function(t){t=n.toString(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)n.remove(this.nodes[e]);var i=r.parse(t,!0,!0);this.nodes=n.toArray(i.childNodes),n.before(i,this.el)}}},function(t){function e(t){t||0===t?this.el.setAttribute(this.arg,t):this.el.removeAttribute(this.arg)}function i(t){null!=t?this.el.setAttributeNS(n,this.arg,t):this.el.removeAttributeNS(n,"href")}var n="http://www.w3.org/1999/xlink",r=/^xlink:/;t.exports={priority:850,bind:function(){var t=this.arg;this.update=r.test(t)?i:e}}},function(t,e,i){var n=i(50);t.exports=function(t){var e=this.el;n.apply(e,t?1:-1,function(){e.style.display=t?"":"none"},this.vm)}},function(t,e,i){var n=i(11),r=n.addClass,s=n.removeClass;t.exports=function(t){if(this.arg){var e=t?r:s;e(this.el,this.arg)}else this.lastVal&&s(this.el,this.lastVal),t&&(r(this.el,t),this.lastVal=t)}},function(t){t.exports={isLiteral:!0,bind:function(){this.vm.$$[this.expression]=this.el},unbind:function(){delete this.vm.$$[this.expression]}}},function(t,e,i){i(11);t.exports={isLiteral:!0,bind:function(){var t=this.el.__vue__;t&&(t._refID=this.expression)}}},function(t,e,i){var n=i(15);t.exports={bind:function(){var t=this.el;this.vm.$once("hook:compiled",function(){t.removeAttribute(n.prefix+"cloak")})}}},function(t,e,i){function n(t){if(u[t])return u[t];var e=r(t);return u[t]=u[e]=e,e}function r(t){t=t.replace(h,"$1-$2").toLowerCase();var e=s.camelize(t),i=e.charAt(0).toUpperCase()+e.slice(1);if(l||(l=document.createElement("div")),e in l.style)return t;for(var n,r=o.length;r--;)if(n=a[r]+i,n in l.style)return o[r]+t}var s=i(11),o=["-webkit-","-moz-","-ms-"],a=["Webkit","Moz","ms"],c=/!important;?$/,h=/([a-z])([A-Z])/g,l=null,u={};t.exports={deep:!0,update:function(t){if(this.arg)this.setProp(this.arg,t);else if("object"==typeof t){this.cache||(this.cache={});for(var e in t)this.setProp(e,t[e]),t[e]!=this.cache[e]&&(this.cache[e]=t[e],this.setProp(e,t[e]))}else this.el.style.cssText=t},setProp:function(t,e){if(t=n(t))if(null!=e&&(e+=""),e){var i=c.test(e)?"important":"";i&&(e=e.replace(c,"").trim()),this.el.style.setProperty(t,e,i)}else this.el.style.removeProperty(t)}}},function(t,e,i){var n=i(11),r=i(20),s=i(45);t.exports={isLiteral:!0,compile:s.compile,teardown:s.teardown,bind:function(){var t=this.el;this.start=document.createComment("v-partial-start"),this.end=document.createComment("v-partial-end"),8!==t.nodeType&&(t.innerHTML=""),"TEMPLATE"===t.tagName||8===t.nodeType?n.replace(t,this.end):t.appendChild(this.end),n.before(this.start,this.end),this._isDynamicLiteral||this.insert(this.expression)},update:function(t){this.teardown(),this.insert(t)},insert:function(t){var e=this.vm.$options.partials[t];e&&this.compile(r.parse(e))}}},function(t){t.exports={priority:1e3,isLiteral:!0,bind:function(){this.el.__v_trans={id:this.expression,fns:this.vm.$options.transitions[this.expression]}}}},function(t,e,i){var n=i(11);t.exports={acceptStatement:!0,priority:700,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){n.on(t.el.contentWindow,t.arg,t.handler)},n.on(this.el,"load",this.iframeBind)}},update:function(t){if("function"==typeof t){this.reset();var e=this.vm;this.handler=function(i){i.targetVM=e,e.$event=i;var n=t(i);return e.$event=null,n},this.iframeBind?this.iframeBind():n.on(this.el,this.arg,this.handler)}},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&n.off(t,this.arg,this.handler)},unbind:function(){this.reset(),n.off(this.el,"load",this.iframeBind)}}},function(t,e,i){var n=i(11),r=i(20);t.exports={isLiteral:!0,bind:function(){if(!this.el.__vue__)if(this.ref=document.createComment("v-component"),n.replace(this.el,this.ref),this.keepAlive=null!=this._checkParam("keep-alive"),this.refID=n.attr(this.el,"ref"),this.keepAlive&&(this.cache={}),this._isDynamicLiteral)this.readyEvent=this._checkParam("wait-for"),this.transMode=this._checkParam("transition-mode");else{this.resolveCtor(this.expression);var t=this.build();t.$before(this.ref),this.setCurrent(t)}},resolveCtor:function(t){this.ctorId=t,this.Ctor=this.vm.$options.components[t]},build:function(){if(this.keepAlive){var t=this.cache[this.ctorId];if(t)return t}var e=this.vm,i=r.clone(this.el);if(this.Ctor){var n=e.$addChild({el:i,_asComponent:!0},this.Ctor);return this.keepAlive&&(this.cache[this.ctorId]=n),n}},unbuild:function(){var t=this.childVM;t&&!this.keepAlive&&t.$destroy(!1,!0)},remove:function(t,e){var i=this.keepAlive;t?t.$remove(function(){i||t._cleanup(),e&&e()}):e&&e()},update:function(t){if(t){this.resolveCtor(t),this.unbuild();var e=this.build(),i=this;this.readyEvent?e.$once(this.readyEvent,function(){i.swapTo(e)}):this.swapTo(e)}else this.unbuild(),this.remove(this.childVM),this.unsetCurrent()},swapTo:function(t){var e=this,i=this.childVM;switch(this.unsetCurrent(),this.setCurrent(t),e.transMode){case"in-out":t.$before(e.ref,function(){e.remove(i)});break;case"out-in":e.remove(i,function(){t.$before(e.ref)});break;default:e.remove(i),t.$before(e.ref)}},setCurrent:function(t){this.childVM=t;var e=t._refID||this.refID;e&&(this.vm.$[e]=t)},unsetCurrent:function(){var t=this.childVM;this.childVM=null;var e=t&&t._refID||this.refID;e&&(this.vm.$[e]=null)},unbind:function(){if(this.unbuild(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}}},function(t,e,i){function n(t,e){for(var i=(t._blockEnd||t.$el).nextSibling;!i.__vue__&&i!==e;)i=i.nextSibling;return i.__vue__}function r(t){if(!c(t))return t;for(var e,i=Object.keys(t),n=i.length,r=new Array(n);n--;)e=i[n],r[n]={key:e,value:t[e]};return this.converted=!0,r}function s(t){for(var e=-1,i=new Array(t);++e<t;)i[e]=e;return i}var o=i(11),a=o.isObject,c=o.isPlainObject,h=i(19),l=i(22),u=i(20),f=i(16),d=i(17),p=i(14),v=0;t.exports={bind:function(){this.id="__v_repeat_"+ ++v,this.filters||(this.filters={});var t=o.bind(r,this);this.filters.read?this.filters.read.unshift(t):this.filters.read=[t],this.ref=document.createComment("v-repeat"),o.replace(this.el,this.ref),this.template="TEMPLATE"===this.el.tagName?u.parse(this.el,!0):this.el,this.checkIf(),this.checkRef(),this.checkComponent(),this.idKey=this._checkParam("track-by")||this._checkParam("trackby"),this.cache=Object.create(null)},checkIf:function(){null!==o.attr(this.el,"if")},checkRef:function(){var t=o.attr(this.el,"ref");this.refID=t?this.vm.$interpolate(t):null;var e=o.attr(this.el,"el");this.elId=e?this.vm.$interpolate(e):null},checkComponent:function(){var t=o.attr(this.el,"component"),e=this.vm.$options;if(t){this._asComponent=!0;var i=h.parse(t);if(i){var n=h.tokensToExp(i);this.ctorGetter=l.parse(n).get}else{var r=this.Ctor=e.components[t];if(!this.el.hasChildNodes()&&!this.el.hasAttributes()){var s=p(r.options,{},{$parent:this.vm});this.template=d(this.template,s),this._linkFn=f(this.template,s,!1,!0)}}}else this.Ctor=o.Vue,this.inherit=!0,this.template=d(this.template),this._linkFn=f(this.template,e)},update:function(t){"number"==typeof t&&(t=s(t)),this.vms=this.diff(t||[],this.vms),this.refID&&(this.vm.$[this.refID]=this.vms),this.elId&&(this.vm.$$[this.elId]=this.vms.map(function(t){return t.$el}))},diff:function(t,e){var i,r,s,o,a,c=this.idKey,h=this.converted,l=this.ref,u=this.arg,f=!e,d=new Array(t.length);for(o=0,a=t.length;a>o;o++)i=t[o],r=h?i.value:i,s=!f&&this.getVm(r),s?(s._reused=!0,s.$index=o,h&&(s.$key=i.key),c&&(u?s[u]=r:s._setData(r))):(s=this.build(i,o),s._new=!0),d[o]=s,f&&s.$before(l);if(f)return d;for(o=0,a=e.length;a>o;o++)s=e[o],s._reused||(this.uncacheVm(s),s.$destroy(!0));var p,v;for(o=d.length;o--;)s=d[o],p=d[o+1],p?s._reused?(v=n(s,l),v!==p&&s.$before(p.$el,null,!1)):s.$before(p.$el):s._reused||s.$before(l),s._new=!1,s._reused=!1;return d},build:function(t,e){var i=t,n={$index:e};this.converted&&(n.$key=i.key);var r=this.converted?t.value:t,s=this.arg,o=!c(r)||s;t=o?{}:r,s?t[s]=r:o&&(n.$value=r);var a=this.Ctor||this.resolveCtor(t,n),h=this.vm.$addChild({el:u.clone(this.template),_asComponent:this._asComponent,_linkFn:this._linkFn,_meta:n,data:t,inherit:this.inherit},a);return this.cacheVm(r,h),h},resolveCtor:function(t,e){var i,n=Object.create(this.vm);for(i in t)o.define(n,i,t[i]);for(i in e)o.define(n,i,e[i]);var r=this.ctorGetter.call(n,n),s=this.vm.$options.components[r];return s},unbind:function(){if(this.refID&&(this.vm.$[this.refID]=null),this.vms)for(var t,e=this.vms.length;e--;)t=this.vms[e],this.uncacheVm(t),t.$destroy()},cacheVm:function(t,e){var i,n=this.idKey,r=this.cache;n?(i=t[n],r[i]||(r[i]=e)):a(t)?(i=this.id,t.hasOwnProperty(i)?null===t[i]&&(t[i]=e):o.define(t,this.id,e)):r[t]?r[t].push(e):r[t]=[e],e._raw=t},getVm:function(t){if(this.idKey)return this.cache[t[this.idKey]];if(a(t))return t[this.id];var e=this.cache[t];if(e){for(var i=0,n=e[i];n&&(n._reused||n._new);)n=e[++i];return n}},uncacheVm:function(t){var e=t._raw;this.idKey?this.cache[e[this.idKey]]=null:a(e)?(e[this.id]=null,t._raw=null):this.cache[e].pop()}}},function(t,e,i){var n=i(11),r=i(16),s=i(20),o=i(50);t.exports={bind:function(){var t=this.el;t.__vue__?this.invalid=!0:(this.start=document.createComment("v-if-start"),this.end=document.createComment("v-if-end"),n.replace(t,this.end),n.before(this.start,this.end),"TEMPLATE"===t.tagName?this.template=s.parse(t,!0):(this.template=document.createDocumentFragment(),this.template.appendChild(t)),this.linker=r(this.template,this.vm.$options,!0))},update:function(t){this.invalid||(t?this.insert():this.teardown())},insert:function(){this.unlink||this.compile(this.template)},compile:function(t){var e=this.vm,i=s.clone(t),r=e._children.length;this.unlink=this.linker?this.linker(e,i):e.$compile(i),o.blockAppend(i,this.end,e),this.children=e._children.slice(r),this.children.length&&n.inDoc(e.$el)&&this.children.forEach(function(t){t._callHook("attached")})},teardown:function(){this.unlink&&(o.blockRemove(this.start,this.end,this.vm),this.children&&n.inDoc(this.vm.$el)&&this.children.forEach(function(t){t._isDestroyed||t._callHook("detached")}),this.unlink(),this.unlink=null)}}},function(t,e,i){var n=i(11),r=i(25);t.exports={priority:900,bind:function(){var t=this.vm,e=t.$parent,i=this.arg||"$data",s=this.expression;if(this.el!==t.$el);else if(e){var o=!1,a=function(){o=!0,n.nextTick(c)},c=function(){o=!1};this.parentWatcher=new r(e,s,function(e){o||(a(),t.$set(i,e))}),t.$set(i,this.parentWatcher.value),this.childWatcher=new r(t,i,function(t){o||(a(),e.$set(s,t))})}else;},unbind:function(){this.parentWatcher&&(this.parentWatcher.teardown(),this.childWatcher.teardown())}}},function(t,e,i){i(11);t.exports={bind:function(){var t=this.el.__vue__;if(t&&this.vm===t.$parent){var e=this.vm[this.expression];t.$on(this.arg,e)}}}},function(t,e,i){function n(t,e){if(r.isObject(t)){for(var i in t)if(n(t[i],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}var r=i(11),s=i(18);e.filterBy=function(t,e,i,o){i&&"in"!==i&&(o=i);var a=r.stripQuotes(e)||this.$get(e);return a?(a=(""+a).toLowerCase(),o=o&&(r.stripQuotes(o)||this.$get(o)),t.filter(function(t){return o?n(s.get(t,o),a):n(t,a)})):t},e.orderBy=function(t,e,i){var n=r.stripQuotes(e)||this.$get(e);if(!n)return t;var o=1;return i&&("-1"===i?o=-1:33===i.charCodeAt(0)?(i=i.slice(1),o=this.$get(i)?1:-1):o=this.$get(i)?-1:1),t.slice().sort(function(t,e){return t=s.get(t,n),e=s.get(e,n),t===e?0:t>e?o:-o})}},function(t,e,i){function n(t,e){t.__proto__=e}function r(t,e,i){for(var n,r=i.length;r--;)n=i[r],o.define(t,n,e[n])}function s(t,e){if(this.id=++u,this.value=t,this.active=!0,this.deps=[],o.define(t,"__ob__",this),e===f){var i=a.proto&&o.hasProto?n:r;i(t,h,l),this.observeArray(t)}else e===d&&this.walk(t)}var o=i(11),a=i(15),c=i(23),h=i(54),l=Object.getOwnPropertyNames(h);i(55);var u=0,f=0,d=1;s.target=null;var p=s.prototype;s.create=function(t){return t&&t.hasOwnProperty("__ob__")&&t.__ob__ instanceof s?t.__ob__:o.isArray(t)?new s(t,f):o.isPlainObject(t)&&!t._isVue?new s(t,d):void 0},p.walk=function(t){for(var e,i,n=Object.keys(t),r=n.length;r--;)e=n[r],i=e.charCodeAt(0),36!==i&&95!==i&&this.convert(e,t[e])},p.observe=function(t){return s.create(t)},p.observeArray=function(t){for(var e=t.length;e--;)this.observe(t[e])},p.convert=function(t,e){var i=this,n=i.observe(e),r=new c;n&&n.deps.push(r),Object.defineProperty(i.value,t,{enumerable:!0,configurable:!0,get:function(){return i.active&&s.target&&s.target.addDep(r),e},set:function(t){if(t!==e){var n=e&&e.__ob__;if(n){var s=n.deps;s.splice(s.indexOf(r),1)}e=t;var o=i.observe(t);o&&o.deps.push(r),r.notify()}}})},p.notify=function(){for(var t=this.deps,e=0,i=t.length;i>e;e++)t[e].notify()},p.addVm=function(t){(this.vms=this.vms||[]).push(t)},p.removeVm=function(t){this.vms.splice(this.vms.indexOf(t),1)},t.exports=s},function(t,e,i){var n=i(11),r=i(56),s=i(57);e.append=function(t,e,i,n){o(t,1,function(){e.appendChild(t)},i,n)},e.before=function(t,e,i,r){o(t,1,function(){n.before(t,e)},i,r)},e.remove=function(t,e,i){o(t,-1,function(){n.remove(t)},e,i)},e.removeThenAppend=function(t,e,i,n){o(t,-1,function(){e.appendChild(t)},i,n)},e.blockAppend=function(t,i,r){for(var s=n.toArray(t.childNodes),o=0,a=s.length;a>o;o++)e.before(s[o],i,r)},e.blockRemove=function(t,i,n){for(var r,s=t.nextSibling;s!==i;)r=s.nextSibling,e.remove(s,n),s=r};var o=e.apply=function(t,e,i,o,a){var c=t.__v_trans;if(!c||!o._isCompiled||o.$parent&&!o.$parent._isCompiled)return i(),void(a&&a());var h=c.fns;h?s(t,e,i,c,h,o,a):n.transitionEndEvent?r(t,e,i,c,a):(i(),a&&a())}},function(t,e,i){var n=(i(11),{_default:i(58),radio:i(59),select:i(60),checkbox:i(61)});t.exports={priority:800,twoWay:!0,handlers:n,bind:function(){var t=this.filters;t&&t.read&&!t.write;var e,i=this.el,r=i.tagName;if("INPUT"===r)e=n[i.type]||n._default;else if("SELECT"===r)e=n.select;else{if("TEXTAREA"!==r)return;e=n._default}e.bind.call(this),this.update=e.update,this.unbind=e.unbind}}},function(t){function e(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap={}}var i=e.prototype;i.put=function(t,e){var i={key:t,value:e};return this._keymap[t]=i,this.tail?(this.tail.newer=i,i.older=this.tail):this.head=i,this.tail=i,this.size===this.limit?this.shift():void this.size++},i.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0),t},i.get=function(t,e){var i=this._keymap[t];if(void 0!==i)return i===this.tail?e?i:i.value:(i.newer&&(i===this.head&&(this.head=i.newer),i.newer.older=i.older),i.older&&(i.older.newer=i.newer),i.newer=void 0,i.older=this.tail,this.tail&&(this.tail.newer=i),this.tail=i,e?i:i.value)},t.exports=e},function(t,e,i){function n(){c=[],h=[],l={},u=!1,f=!1}function r(){f=!0,s(c),s(h),n()}function s(t){for(var e=0;e<t.length;e++)t[e].run()}var o=i(11),a=10,c=[],h=[],l={},u=!1,f=!1;e.push=function(t){var e=t.id;if(!e||!l[e]||f){if(l[e]){if(l[e]++,l[e]>a)return}else l[e]=1;if(f&&!t.user)return void t.run();(t.user?h:c).push(t),u||(u=!0,o.nextTick(r))}}},function(t,e,i){var n=i(11),r=Array.prototype,s=Object.create(r);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=r[t];n.define(s,t,function(){for(var i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":r=n;break;case"unshift":r=n;break;case"splice":r=n.slice(2)}return r&&o.observeArray(r),o.notify(),s})}),n.define(r,"$set",function(t,e){return t>=this.length&&(this.length=t+1),this.splice(t,1,e)[0]}),n.define(r,"$remove",function(t){return"number"!=typeof t&&(t=this.indexOf(t)),t>-1?this.splice(t,1)[0]:void 0}),t.exports=s},function(t,e,i){var n=i(11),r=Object.prototype;n.define(r,"$add",function(t,e){if(!this.hasOwnProperty(t)){var i=this.__ob__;if(!i||n.isReserved(t))return void(this[t]=e);if(i.convert(t,e),i.vms)for(var r=i.vms.length;r--;){var s=i.vms[r];s._proxy(t),s._digest()}else i.notify()}}),n.define(r,"$delete",function(t){if(this.hasOwnProperty(t)){delete this[t];var e=this.__ob__;if(e&&!n.isReserved(t))if(e.vms)for(var i=e.vms.length;i--;){var r=e.vms[i];r._unproxy(t),r._digest()}else e.notify()}})},function(t,e,i){function n(t,e,i,n,s){f.push({el:t,dir:e,cb:s,cls:n,op:i}),d||(d=!0,a.nextTick(r))}function r(){document.documentElement.offsetHeight;f.forEach(s),f=[],d=!1}function s(t){function e(t,e){n.event=t;var r=n.callback=function(o){o.target===i&&(a.off(i,t,r),n.event=n.callback=null,e&&e(),s&&s())};a.on(i,t,r)}var i=t.el,n=i.__v_trans,r=t.cls,s=t.cb,c=t.op,l=o(i,n,r);if(t.dir>0)1===l?(h(i,r),s&&e(a.transitionEndEvent)):2===l?e(a.animationEndEvent,function(){h(i,r)}):(h(i,r),s&&s());else if(l){var u=1===l?a.transitionEndEvent:a.animationEndEvent;e(u,function(){c(),h(i,r)})}else c(),h(i,r),s&&s()}function o(t,e,i){var n=e.cache&&e.cache[i];if(n)return n;var r=t.style,s=window.getComputedStyle(t),o=r[l]||s[l];if(o&&"0s"!==o)n=1;else{var a=r[u]||s[u];a&&"0s"!==a&&(n=2)}return n&&(e.cache||(e.cache={}),e.cache[i]=n),n}var a=i(11),c=a.addClass,h=a.removeClass,l=a.transitionProp+"Duration",u=a.animationProp+"Duration",f=[],d=!1;t.exports=function(t,e,i,r,s){var o=r.id||"v",l=o+"-enter",u=o+"-leave";r.callback&&(a.off(t,r.event,r.callback),h(t,l),h(t,u),r.event=r.callback=null),e>0?(c(t,l),i(),n(t,e,null,l,s)):(c(t,u),n(t,e,i,u,s))}},function(t){t.exports=function(t,e,i,n,r,s,o){n.cancel&&(n.cancel(),n.cancel=null),e>0?(r.beforeEnter&&r.beforeEnter.call(s,t),i(),r.enter?n.cancel=r.enter.call(s,t,function(){n.cancel=null,o&&o()}):o&&o()):r.leave?n.cancel=r.leave.call(s,t,function(){n.cancel=null,i(),o&&o()}):(i(),o&&o())}},function(t,e,i){var n=i(11);t.exports={bind:function(){function t(){e.set(s?n.toNumber(i.value):i.value,!0)}var e=this,i=this.el,r=null!=this._checkParam("lazy"),s=null!=this._checkParam("number"),o=!1;this.cpLock=function(){o=!0},this.cpUnlock=function(){o=!1,t()},n.on(i,"compositionstart",this.cpLock),n.on(i,"compositionend",this.cpUnlock),this.listener=this.filters||"range"===i.type?function(){if(!o){var r;try{r=i.value.length-i.selectionStart}catch(s){}0>r||(t(),n.nextTick(function(){var t=e._watcher.value;if(e.update(t),null!=r){var s=n.toString(t).length-r;i.setSelectionRange(s,s)}}))}}:function(){o||t()},this.event=r?"change":"input",n.on(i,this.event,this.listener),!r&&n.isIE9&&(this.onCut=function(){n.nextTick(e.listener)},this.onDel=function(t){(46===t.keyCode||8===t.keyCode)&&e.listener()},n.on(i,"cut",this.onCut),n.on(i,"keyup",this.onDel)),(i.hasAttribute("value")||"TEXTAREA"===i.tagName&&i.value.trim())&&(this._initValue=s?n.toNumber(i.value):i.value)},update:function(t){this.el.value=n.toString(t)},unbind:function(){var t=this.el;n.off(t,this.event,this.listener),n.off(t,"compositionstart",this.cpLock),n.off(t,"compositionend",this.cpUnlock),this.onCut&&(n.off(t,"cut",this.onCut),n.off(t,"keyup",this.onDel))}}},function(t,e,i){var n=i(11);t.exports={bind:function(){var t=this,e=this.el;this.listener=function(){t.set(e.value,!0)},n.on(e,"change",this.listener),e.checked&&(this._initValue=e.value)},update:function(t){this.el.checked=t==this.el.value},unbind:function(){n.off(this.el,"change",this.listener)}}},function(t,e,i){function n(t){function e(t){l.isArray(t)&&(i.el.innerHTML="",r(i.el,t),i._watcher&&i.update(i._watcher.value))}var i=this;this.optionWatcher=new u(this.vm,t,e,{deep:!0}),e(this.optionWatcher.value)}function r(t,e){for(var i,n,s=0,o=e.length;o>s;s++)i=e[s],i.options?(n=document.createElement("optgroup"),n.label=i.label,r(n,i.options)):(n=document.createElement("option"),"string"==typeof i?n.text=n.value=i:(n.text=i.text,n.value=i.value)),t.appendChild(n)}function s(){for(var t,e=this.el.options,i=0,n=e.length;n>i;i++)e[i].hasAttribute("selected")&&(this.multiple?(t||(t=[])).push(e[i].value):t=e[i].value);t&&(this._initValue=this.number?l.toNumber(t):t)}function o(t){return Array.prototype.filter.call(t.options,a).map(c)}function a(t){return t.selected}function c(t){return t.value||t.text}function h(t,e){for(var i=t.length;i--;)if(t[i]==e)return i;return-1}var l=i(11),u=i(25);t.exports={bind:function(){var t=this,e=this.el,i=this._checkParam("options");i&&n.call(this,i),this.number=null!=this._checkParam("number"),this.multiple=e.hasAttribute("multiple"),this.listener=function(){var i=t.multiple?o(e):e.value;i=t.number?l.toNumber(i):i,t.set(i,!0)},l.on(e,"change",this.listener),s.call(this)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var i,n=this.multiple&&l.isArray(t),r=e.options,s=r.length;s--;)i=r[s],i.selected=n?h(t,i.value)>-1:t==i.value},unbind:function(){l.off(this.el,"change",this.listener),this.optionWatcher&&this.optionWatcher.teardown()}}},function(t,e,i){var n=i(11);t.exports={bind:function(){var t=this,e=this.el;this.listener=function(){t.set(e.checked,!0)},n.on(e,"change",this.listener),e.checked&&(this._initValue=e.checked)},update:function(t){this.el.checked=!!t},unbind:function(){n.off(this.el,"change",this.listener)}}}])});
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:cap[1]==="pre"||cap[1]==="script"||cap[1]==="style",text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=escape(this.smartypants(cap[0]));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&([#\w]+);/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());