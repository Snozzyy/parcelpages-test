var e,n,t,r=globalThis,a={},o={},i=r.parcelRequire9b17;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return a[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},r.parcelRequire9b17=i),(0,i.register)("27Lyk",function(e,n){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,r=new Map;t=function(e,n){for(var t=0;t<n.length-1;t+=2)r.set(n[t],{baseUrl:e,path:n[t+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["bdmaO","index.2520d3ad.js","3X2dF","smile.8f5a3e29.png"]'));var u={};u=new URL("smile.8f5a3e29.png",import.meta.url).toString();var s={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},c={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},l=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],f={CSS:{},springs:{}};function d(e,n,t){return Math.min(Math.max(e,n),t)}function p(e,n){return e.indexOf(n)>-1}function v(e,n){return e.apply(null,n)}var h={arr:function(e){return Array.isArray(e)},obj:function(e){return p(Object.prototype.toString.call(e),"Object")},pth:function(e){return h.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||h.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return h.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return h.hex(e)||h.rgb(e)||h.hsl(e)},key:function(e){return!s.hasOwnProperty(e)&&!c.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function g(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map(function(e){return parseFloat(e)}):[]}function m(e,n){var t=g(e),r=d(h.und(t[0])?1:t[0],.1,100),a=d(h.und(t[1])?100:t[1],.1,100),o=d(h.und(t[2])?10:t[2],.1,100),i=d(h.und(t[3])?0:t[3],.1,100),u=Math.sqrt(a/r),s=o/(2*Math.sqrt(a*r)),c=s<1?u*Math.sqrt(1-s*s):0,l=s<1?(s*u+-i)/c:-i+u;function p(e){var t=n?n*e/1e3:e;return(t=s<1?Math.exp(-t*s*u)*(1*Math.cos(c*t)+l*Math.sin(c*t)):(1+l*t)*Math.exp(-t*u),0===e||1===e)?e:1-t}return n?p:function(){var n=f.springs[e];if(n)return n;for(var t=1/6,r=0,a=0;;)if(1===p(r+=t)){if(++a>=16)break}else a=0;var o=r*t*1e3;return f.springs[e]=o,o}}function y(e){return void 0===e&&(e=10),function(n){return Math.ceil(d(n,1e-6,1)*e)*(1/e)}}var b=function(){function e(e,n,t){return(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e}function n(e,n,t){return 3*(1-3*t+3*n)*e*e+2*(3*t-6*n)*e+3*n}return function(t,r,a,o){if(0<=t&&t<=1&&0<=a&&a<=1){var i=new Float32Array(11);if(t!==r||a!==o)for(var u=0;u<11;++u)i[u]=e(.1*u,t,a);return function(u){return t===r&&a===o||0===u||1===u?u:e(function(r){for(var o=0,u=1;10!==u&&i[u]<=r;++u)o+=.1;var s=o+(r-i[--u])/(i[u+1]-i[u])*.1,c=n(s,t,a);return c>=.001?function(t,r,a,o){for(var i=0;i<4;++i){var u=n(r,a,o);if(0===u)break;var s=e(r,a,o)-t;r-=s/u}return r}(r,s,t,a):0===c?s:function(n,t,r,a,o){var i,u,s=0;do(i=e(u=t+(r-t)/2,a,o)-n)>0?r=u:t=u;while(Math.abs(i)>1e-7&&++s<10)return u}(r,o,o+.1,t,a)}(u),r,o)}}}}(),x=(e={linear:function(){return function(e){return e}}},n={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Expo:function(){return function(e){return e?Math.pow(2,10*e-10):0}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=d(e,1,10),r=d(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin(2*Math.PI*(e-1-r/(2*Math.PI)*Math.asin(1/t))/r)}}},["Quad","Cubic","Quart","Quint"].forEach(function(e,t){n[e]=function(){return function(e){return Math.pow(e,t+2)}}}),Object.keys(n).forEach(function(t){var r=n[t];e["easeIn"+t]=r,e["easeOut"+t]=function(e,n){return function(t){return 1-r(e,n)(1-t)}},e["easeInOut"+t]=function(e,n){return function(t){return t<.5?r(e,n)(2*t)/2:1-r(e,n)(-2*t+2)/2}},e["easeOutIn"+t]=function(e,n){return function(t){return t<.5?(1-r(e,n)(1-2*t))/2:(r(e,n)(2*t-1)+1)/2}}}),e);function M(e,n){if(h.fnc(e))return e;var t=e.split("(")[0],r=x[t],a=g(e);switch(t){case"spring":return m(e,n);case"cubicBezier":return v(b,a);case"steps":return v(y,a);default:return v(r,a)}}function w(e){try{return document.querySelectorAll(e)}catch(e){return}}function O(e,n){for(var t=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in e){var i=e[o];n.call(r,i,o,e)&&a.push(i)}return a}function k(e){return e.reduce(function(e,n){return e.concat(h.arr(n)?k(n):n)},[])}function C(e){return h.arr(e)?e:(h.str(e)&&(e=w(e)||e),e instanceof NodeList||e instanceof HTMLCollection)?[].slice.call(e):[e]}function P(e,n){return e.some(function(e){return e===n})}function D(e){var n={};for(var t in e)n[t]=e[t];return n}function I(e,n){var t=D(e);for(var r in e)t[r]=n.hasOwnProperty(r)?n[r]:e[r];return t}function T(e,n){var t=D(e);for(var r in n)t[r]=h.und(e[r])?n[r]:e[r];return t}function B(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function E(e,n){return h.fnc(e)?e(n.target,n.id,n.total):e}function F(e,n){return e.getAttribute(n)}function S(e,n,t){if(P([t,"deg","rad","turn"],B(n)))return n;var r=f.CSS[n+t];if(!h.und(r))return r;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+t;var i=100/a.offsetWidth;o.removeChild(a);var u=i*parseFloat(n);return f.CSS[n+t]=u,u}function A(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?S(e,a,t):a}}function L(e,n){return h.dom(e)&&!h.inp(e)&&(!h.nil(F(e,n))||h.svg(e)&&e[n])?"attribute":h.dom(e)&&P(l,n)?"transform":h.dom(e)&&"transform"!==n&&A(e,n)?"css":null!=e[n]?"object":void 0}function N(e){if(h.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function H(e,n,t,r){switch(L(e,n)){case"transform":var a,o;return a=p(n,"scale")?1:0+(p(n,"translate")||"perspective"===n?"px":p(n,"rotate")||p(n,"skew")?"deg":void 0),o=N(e).get(n)||a,r&&(r.transforms.list.set(n,o),r.transforms.last=n),t?S(e,o,t):o;case"css":return A(e,n,t);case"attribute":return F(e,n);default:return e[n]||0}}function j(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=B(e)||0,a=parseFloat(n),o=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function q(e,n){if(h.col(e)){var t,r,a,o;return t=e,h.rgb(t)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t))?"rgba("+r[1]+",1)":t:h.hex(t)?(a=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,n,t,r){return n+n+t+t+r+r}),"rgba("+parseInt((o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))[1],16)+","+parseInt(o[2],16)+","+parseInt(o[3],16)+",1)"):h.hsl(t)?function(e){var n,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(e,n,t){return(t<0&&(t+=1),t>1&&(t-=1),t<1/6)?e+(n-e)*6*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}if(0==i)n=t=r=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;n=c(f,l,o+1/3),t=c(f,l,o),r=c(f,l,o-1/3)}return"rgba("+255*n+","+255*t+","+255*r+","+s+")"}(t):void 0}if(/\s/g.test(e))return e;var i=B(e),u=i?e.substr(0,e.length-i.length):e;return n?u+n:u}function _(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function R(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=_(n,o)),n=o}return r}function V(e){var n;if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*F(e,"r");case"rect":return 2*F(e,"width")+2*F(e,"height");case"line":return _({x:F(e,"x1"),y:F(e,"y1")},{x:F(e,"x2"),y:F(e,"y2")});case"polyline":return R(e);case"polygon":return n=e.points,R(e)+_(n.getItem(n.numberOfItems-1),n.getItem(0))}}function $(e,n){var t=n||{},r=t.el||function(e){for(var n=e.parentNode;h.svg(n)&&h.svg(n.parentNode);)n=n.parentNode;return n}(e),a=r.getBoundingClientRect(),o=F(r,"viewBox"),i=a.width,u=a.height,s=t.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function W(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(h.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:h.str(e)||n?r.split(t):[]}}function X(e){return O(e?k(h.arr(e)?e.map(C):C(e)):[],function(e,n,t){return t.indexOf(e)===n})}function U(e){var n=X(e);return n.map(function(e,t){return{target:e,id:t,total:n.length,transforms:{list:N(e)}}})}var Y={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){if(r.list.set(n,t),n===r.last||a){var o="";r.list.forEach(function(e,n){o+=n+"("+e+") "}),e.style.transform=o}}};function Z(e,n){U(e).forEach(function(e){for(var t in n){var r=E(n[t],e),a=e.target,o=B(r),i=H(a,t,o,e),u=j(q(r,o||B(i)),i);Y[L(a,t)](a,t,u,e.transforms,!0)}})}function G(e,n){var t=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map(function(e){return r(e)+e.duration})):n.duration,a.delay=t?Math.min.apply(Math,e.map(function(e){return r(e)+e.delay})):n.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map(function(e){return r(e)+e.duration-e.endDelay})):n.endDelay,a}var Q=0,z=[],J=function(){var e;function n(t){for(var r=z.length,a=0;a<r;){var o=z[a];o.paused?(z.splice(a,1),r--):(o.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){ee.suspendWhenDocumentHidden&&(K()?e=cancelAnimationFrame(e):(z.forEach(function(e){return e._onDocumentVisibility()}),J()))}),function(){e||K()&&ee.suspendWhenDocumentHidden||!(z.length>0)||(e=requestAnimationFrame(n))}}();function K(){return!!document&&document.hidden}function ee(e){void 0===e&&(e={});var n,t,r,a,o,i,u,l,f,p=0,v=0,g=0,y=0,b=null;function x(e){var n=window.Promise&&new Promise(function(e){return b=e});return e.finished=n,n}var w=(t=I(s,n=e),a=function(e,n){var t=[],r=n.keyframes;for(var a in r&&(n=T(function(e){for(var n=O(k(e.map(function(e){return Object.keys(e)})),function(e){return h.key(e)}).reduce(function(e,n){return 0>e.indexOf(n)&&e.push(n),e},[]),t={},r=0;r<n.length;r++)!function(r){var a=n[r];t[a]=e.map(function(e){var n={};for(var t in e)h.key(t)?t==a&&(n.value=e[t]):n[t]=e[t];return n})}(r);return t}(r),n)),n)h.key(a)&&t.push({name:a,tweens:function(e,n){var t=D(n);if(/^spring/.test(t.easing)&&(t.duration=m(t.easing)),h.arr(e)){var r=e.length;2!==r||h.obj(e[0])?h.fnc(n.duration)||(t.duration=n.duration/r):e={value:e}}var a=h.arr(e)?e:[e];return a.map(function(e,t){var r=h.obj(e)&&!h.pth(e)?e:{value:e};return h.und(r.delay)&&(r.delay=t?0:n.delay),h.und(r.endDelay)&&(r.endDelay=t===a.length-1?n.endDelay:0),r}).map(function(e){return T(e,t)})}(n[a],e)});return t}(r=I(c,n),n),u=G(i=O(k((o=U(n.targets)).map(function(e){return a.map(function(n){return function(e,n){var t=L(e.target,n.name);if(t){var r,a=n.tweens.map(function(t){var a=function(e,n){var t={};for(var r in e){var a=E(e[r],n);h.arr(a)&&1===(a=a.map(function(e){return E(e,n)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(t,e),o=a.value,i=h.arr(o)?o[1]:o,u=B(i),s=H(e.target,n.name,u,e),c=r?r.to.original:s,l=h.arr(o)?o[0]:c,f=B(l)||B(s),d=u||f;return h.und(i)&&(i=c),a.from=W(l,d),a.to=W(j(i,l),d),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=M(a.easing,a.duration),a.isPath=h.pth(o),a.isPathTargetInsideSVG=a.isPath&&h.svg(e.target),a.isColor=h.col(a.from.original),a.isColor&&(a.round=1),r=a,a}),o=a[a.length-1];return{type:t,property:n.name,animatable:e,tweens:a,duration:o.end,delay:a[0].delay,endDelay:o.endDelay}}}(e,n)})})),function(e){return!h.und(e)}),r),l=Q,Q++,T(t,{id:l,children:[],animatables:o,animations:i,duration:u.duration,delay:u.delay,endDelay:u.endDelay}));function C(){var e=w.direction;"alternate"!==e&&(w.direction="normal"!==e?"normal":"reverse"),w.reversed=!w.reversed,f.forEach(function(e){return e.reversed=w.reversed})}function P(e){return w.reversed?w.duration-e:e}function F(){p=0,v=P(w.currentTime)*(1/ee.speed)}function S(e,n){n&&n.seek(e-n.timelineOffset)}function A(e){for(var n=0,t=w.animations,r=t.length;n<r;){var a=t[n],o=a.animatable,i=a.tweens,u=i.length-1,s=i[u];u&&(s=O(i,function(n){return e<n.end})[0]||s);for(var c=d(e-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(c)?1:s.easing(c),f=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,m=0;m<h;m++){var y=void 0,b=s.to.numbers[m],x=s.from.numbers[m]||0;y=s.isPath?function(e,n,t){function r(t){void 0===t&&(t=0);var r=n+t>=1?n+t:0;return e.el.getPointAtLength(r)}var a=$(e.el,e.svg),o=r(),i=r(-1),u=r(1),s=t?1:a.w/a.vW,c=t?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*s;case"y":return(o.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}(s.value,l*b,s.isPathTargetInsideSVG):x+l*(b-x),p&&!(s.isColor&&m>2)&&(y=Math.round(y*p)/p),v.push(y)}var M=f.length;if(M){g=f[0];for(var k=0;k<M;k++){f[k];var C=f[k+1],P=v[k];isNaN(P)||(C?g+=P+C:g+=P+" ")}}else g=v[0];Y[a.type](o.target,a.property,g,o.transforms),a.currentValue=g,n++}}function N(e){w[e]&&!w.passThrough&&w[e](w)}function q(e){var n=w.duration,t=w.delay,r=n-w.endDelay,a=P(e);w.progress=d(a/n*100,0,100),w.reversePlayback=a<w.currentTime,f&&function(e){if(w.reversePlayback)for(var n=y;n--;)S(e,f[n]);else for(var t=0;t<y;t++)S(e,f[t])}(a),!w.began&&w.currentTime>0&&(w.began=!0,N("begin")),!w.loopBegan&&w.currentTime>0&&(w.loopBegan=!0,N("loopBegin")),a<=t&&0!==w.currentTime&&A(0),(a>=r&&w.currentTime!==n||!n)&&A(n),a>t&&a<r?(w.changeBegan||(w.changeBegan=!0,w.changeCompleted=!1,N("changeBegin")),N("change"),A(a)):w.changeBegan&&(w.changeCompleted=!0,w.changeBegan=!1,N("changeComplete")),w.currentTime=d(a,0,n),w.began&&N("update"),e>=n&&(v=0,w.remaining&&!0!==w.remaining&&w.remaining--,w.remaining?(p=g,N("loopComplete"),w.loopBegan=!1,"alternate"===w.direction&&C()):(w.paused=!0,!w.completed&&(w.completed=!0,N("loopComplete"),N("complete"),!w.passThrough&&"Promise"in window&&(b(),x(w)))))}return x(w),w.reset=function(){var e=w.direction;w.passThrough=!1,w.currentTime=0,w.progress=0,w.paused=!0,w.began=!1,w.loopBegan=!1,w.changeBegan=!1,w.completed=!1,w.changeCompleted=!1,w.reversePlayback=!1,w.reversed="reverse"===e,w.remaining=w.loop,y=(f=w.children).length;for(var n=y;n--;)w.children[n].reset();(w.reversed&&!0!==w.loop||"alternate"===e&&1===w.loop)&&w.remaining++,A(w.reversed?w.duration:0)},w._onDocumentVisibility=F,w.set=function(e,n){return Z(e,n),w},w.tick=function(e){g=e,p||(p=g),q((g+(v-p))*ee.speed)},w.seek=function(e){q(P(e))},w.pause=function(){w.paused=!0,F()},w.play=function(){w.paused&&(w.completed&&w.reset(),w.paused=!1,z.push(w),F(),J())},w.reverse=function(){C(),w.completed=!w.reversed,F()},w.restart=function(){w.reset(),w.play()},w.remove=function(e){et(X(e),w)},w.reset(),w.autoplay&&w.play(),w}function en(e,n){for(var t=n.length;t--;)P(e,n[t].animatable.target)&&n.splice(t,1)}function et(e,n){var t=n.animations,r=n.children;en(e,t);for(var a=r.length;a--;){var o=r[a],i=o.animations;en(e,i),i.length||o.children.length||r.splice(a,1)}t.length||r.length||n.pause()}ee.version="3.2.1",ee.speed=1,ee.suspendWhenDocumentHidden=!0,ee.running=z,ee.remove=function(e){for(var n=X(e),t=z.length;t--;)et(n,z[t])},ee.get=H,ee.set=Z,ee.convertPx=S,ee.path=function(e,n){var t=h.str(e)?w(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:$(t),totalLength:V(t)*(r/100)}}},ee.setDashoffset=function(e){var n=V(e);return e.setAttribute("stroke-dasharray",n),n},ee.stagger=function(e,n){void 0===n&&(n={});var t=n.direction||"normal",r=n.easing?M(n.easing):null,a=n.grid,o=n.axis,i=n.from||0,u="first"===i,s="center"===i,c="last"===i,l=h.arr(e),f=l?parseFloat(e[0]):parseFloat(e),d=l?parseFloat(e[1]):0,p=B(l?e[1]:e)||0,v=n.start||0+(l?f:0),g=[],m=0;return function(e,n,h){if(u&&(i=0),s&&(i=(h-1)/2),c&&(i=h-1),!g.length){for(var y=0;y<h;y++){if(a){var b=s?(a[0]-1)/2:i%a[0],x=s?(a[1]-1)/2:Math.floor(i/a[0]),M=y%a[0],w=Math.floor(y/a[0]),O=b-M,k=x-w,C=Math.sqrt(O*O+k*k);"x"===o&&(C=-O),"y"===o&&(C=-k),g.push(C)}else g.push(Math.abs(i-y));m=Math.max.apply(Math,g)}r&&(g=g.map(function(e){return r(e/m)*m})),"reverse"===t&&(g=g.map(function(e){return o?e<0?-1*e:-e:Math.abs(m-e)}))}var P=l?(d-f)/m:f;return v+Math.round(100*g[n])/100*P+p}},ee.timeline=function(e){void 0===e&&(e={});var n=ee(e);return n.duration=0,n.add=function(t,r){var a=z.indexOf(n),o=n.children;function i(e){e.passThrough=!0}a>-1&&z.splice(a,1);for(var u=0;u<o.length;u++)i(o[u]);var s=T(t,I(c,e));s.targets=s.targets||e.targets;var l=n.duration;s.autoplay=!1,s.direction=n.direction,s.timelineOffset=h.und(r)?l:j(r,l),i(n),n.seek(s.timelineOffset);var f=ee(s);i(f),o.push(f);var d=G(o,e);return n.delay=d.delay,n.endDelay=d.endDelay,n.duration=d.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},ee.easing=M,ee.penner=x,ee.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},console.log("test");const er=document.querySelector("img");er.src=(t=u)&&t.__esModule?t.default:t,ee({targets:er,translateX:300,direction:"alternate",loop:!0});
//# sourceMappingURL=index.2520d3ad.js.map
