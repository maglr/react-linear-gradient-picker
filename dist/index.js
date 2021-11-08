!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.linearGradientPicker=t(require("react")):e.linearGradientPicker=t(e.react)}(global,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=24)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(13)()},function(e,t,r){var n=r(10),o=r(11),i=r(8),a=r(12);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(16);e.exports=function(e,t){if(null==e)return{};var r,o,i=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){"undefined"!=typeof self&&self,e.exports=function(){return r={},e.m=t=[function(e,t,r){"use strict";function n(e){return parseInt(e.repeat(3-e.length),16)}r.r(t);var o=new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),i=new RegExp(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){return Number(e)}r=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return(e=o.exec(e)||i.exec(e))?{r:n(e[1]),g:n(e[2]),b:n(e[3]),a:t}:void 0};var c=new RegExp(/\d+/g),l=[{regexps:[o,i],handler:r},{regexps:[c],handler:function(e){var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e.match(c)),r=t[0],n=t[1],o=t[2];return e=t.slice(3).join(".")||1,t=e,[r,n,o].every((function(e){return 0<=e&&e<=255}))&&(!t||0<=t&&t<=1)?{r:u(r),g:u(n),b:u(o),a:u(e)}:void 0}}],s=function(e,t){var r=l.find((function(t){return t.regexps.some((function(t){return t.test(e)}))}));if(!r)throw new Error("Stop color - ".concat(e," does not follow one of the accepted formats Hex / Rgb / Rgba "));return function(e){var t=e.r,r=e.g,n=e.b;return 1!==(e=void 0===(e=e.a)?1:e)?"rgba(".concat(t,", ").concat(r,", ").concat(n,", ").concat(e,")"):"rgb(".concat(t,", ").concat(r,", ").concat(n,")")}(t=r.handler(e,t))},f=function(e){return null!=e};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return Number("".concat(e).trim().endsWith("%")?e.trim().replace("%",""):e)}function m(e){return e<=0||Math.abs(e)<=S?0:e}function b(e){return{x:m(Math.cos(e)),y:m(Math.sin(e))}}function y(e){return e*Math.PI/180}var v,g=function(e){var t,r=e.x1,n=e.x2,o=e.y1,i=e.y2;return r=(t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}([r,n,o,i].map(d),4))[0],n=t[1],o=t[2],e=n-r,0==(t=(i=t[3])-o)?n<r?270:90:0==e?i<o?0:180:function(e){return e<(1<arguments.length&&void 0!==arguments[1]?arguments[1]:0)?360+e:(2<arguments.length&&void 0!==arguments[2]?arguments[2]:360)<e?e-360:e}(180*(e=Math.atan2(t,e))/Math.PI+90)},h="style",O="stop-color",x="stop-opacity",j=["x1","x2","y1","y2"],w=function(e){return Array.from(e.querySelectorAll("stop")).map((function(e){var t=P(e.getAttribute("offset"));return e=function(e){var t=e.getAttribute(O);if(t){var r=e.getAttribute(x);return s(t,r)}return r=e.getAttribute(h),(e=document.createElement("div")).setAttribute("style",r),e=(r=e.style)[O],r=r[x],e?s(e,r):void 0}(e),{offset:Number(t),color:e}}))},S=Math.pow(2,-52),P=function(e){return(e=e.toString().trim()).endsWith("%")?Number(e.replace("%","")):100*Number(e)};function E(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)),n}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)),n}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){var n,o;n=e,t=r[o=t],o in n?Object.defineProperty(n,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[o]=t})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={string:function(e){var t;if(!(e=(v=v||new DOMParser).parseFromString(e,"image/svg+xml").querySelector("linearGradient")))throw new Error("Couldn't parse svg string into linearGradient SVGElement");return D(D({},(t=e,j.reduce((function(e,r){return Object.assign(e,C({},r,t.getAttribute(r)))}),{}))),{},{stops:w(e).filter((function(e){var t=e.offset;return e=e.color,f(t)&&f(e)}))})},object:function(e){return A(A({},e),{},{stops:e.stops.map((function(e){var t=e.offset,r=e.color;return e=e.opacity,{offset:P(t),color:s(r,e)}}))})}};r={getBackground:function(e){var t=_(e);if(!(t=R[t]))throw new Error("Cannot parse non JSON / SVG String input");return t=(e=t(e)).stops||e.children,{angle:e=g(e),background:(t=(e={angle:e,stops:t}).angle,1===(e=e.stops).length?e[0].color:"linear-gradient(".concat(t,"deg, ").concat(e.map((function(e){return"".concat(e.color," ").concat(e.offset,"%")})).join(", "),")"))}},getGradientCords:function(e){e=(t=function(){var e=(360-(0<arguments.length&&void 0!==arguments[0]?arguments[0]:0))%360;return{startPoint:b(y(90-e)),endPoint:b(y(270-e))}}(e)).startPoint;var t=t.endPoint;return{x1:e.x,y1:e.y,x2:t.x,y2:t.y}}},t.default=r}],e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=0);function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t,r}()},function(e,t,r){var n=r(17),o=r(18),i=r(8),a=r(19);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(9);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){"use strict";var n=r(14);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(9);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t),r.d(t,"GradientPicker",(function(){return fe})),r.d(t,"GradientPickerPopover",(function(){return be})),r.d(t,"AnglePicker",(function(){return I})),r.d(t,"getGradientPreview",(function(){return y}));var n=function(e,t){return e.offset-t.offset},o=function(e){return e.sort(n)},i=function(){},a=function(e){return e<0?360+e:e>360?e-360:e},u=function(e){if(!e)return{y:0,x:0};var t=e.getBoundingClientRect(),r=t.top,n=t.left;return{y:r+t.height/2,x:n+t.width/2}},c=function(e,t,r){var n=t-r.y,o=e-r.x,i=Math.atan2(n,o);return Math.round(i*(180/Math.PI))+90},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e%t;if(0===r)return e;var n=r>t/2?t-r:-1*r;return e+n},s=r(3),f=r.n(s),p=r(6),d=r.n(p);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:90,r=d.a.getGradientCords(t),n=d.a.getBackground(b(b({},r),{},{stops:e})),o=n.background;return{gradient:r,background:o,angle:t}},v=r(2),g=r.n(v),h=r(0),O=r.n(h),x=r(1),j=r.n(x);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){f()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=Object(x.shape)({id:x.number.isRequired,color:x.string.isRequired,offset:x.number.isRequired,isActive:x.bool.isRequired,pointX:x.number}),E=Object(x.shape)({min:x.number.isRequired,max:x.number.isRequired,drop:x.number}),D=Object(x.shape)({id:x.number,color:x.string.isRequired,offset:x.string.isRequired,opacity:x.number}),C={stop:P.isRequired,limits:E.isRequired,onPosChange:x.func.isRequired,onDeleteColor:x.func.isRequired,onDragStart:x.func,onDragEnd:x.func},_={width:x.number.isRequired,stops:Object(x.arrayOf)(P),limits:E,disabled:x.bool,onPosChange:x.func.isRequired,onAddColor:x.func.isRequired,onDeleteColor:x.func.isRequired,onDragStart:x.func,onDragEnd:x.func},M={width:x.number.isRequired,height:x.number.isRequired,palette:Object(x.arrayOf)(D).isRequired},A={onPaletteChange:x.func.isRequired,paletteHeight:x.number,width:x.number,stopRemovalDrop:x.number,maxStops:x.number,minStops:x.number,flatStyle:x.bool,palette:Object(x.arrayOf)(D)},R={angle:x.number.isRequired,setAngle:x.func.isRequired,size:x.number,snap:x.number},k=S(S(S({},A),R),{},{showAnglePicker:x.bool,open:x.bool.isRequired,setOpen:x.func.isRequired,trigger:x.func}),q="touchstart",T={MOUSE:{stop:function(e){e.preventDefault(),e.stopPropagation()},coordinates:function(e){return{clientX:e.clientX,clientY:e.clientY}},dragEvent:{name:"mousemove"},dragEndEvent:{name:"mouseup"}},TOUCH:{stop:i,coordinates:function(e){var t=g()(e.touches,1)[0];return{clientX:t.clientX,clientY:t.clientY}},dragEvent:{name:"touchmove",options:{cancelable:!0,passive:!0}},dragEndEvent:{name:"touchend"}}},F=function(e){var t=e.onDragStart,r=void 0===t?i:t,n=e.onDrag,o=e.onDragEnd,a=void 0===o?i:o,u=Object(h.useState)({}),c=g()(u,2),l=c[0],s=c[1],f=Object(h.useState)(!1),p=g()(f,2),d=p[0],m=p[1],b=function(e,t){m(!0),l.handler=t,r(t.coordinates(e))},y=function(){m(!1),a(l.change),s({})},v=function(e){var t=l.handler;d&&(l.change=n(t.coordinates(e)))};return Object(h.useEffect)((function(){var e=l.handler;if(e){var t=e.dragEvent,r=e.dragEndEvent;return d&&(document.addEventListener(t.name,v,r.options),document.addEventListener(r.name,y)),function(){document.removeEventListener(t.name,v,r.options),document.removeEventListener(r.name,y)}}}),[d]),[function(e){var t=function(e){return e.type===q}(e)?T.TOUCH:T.MOUSE;t.stop(e),e.button||b(e,t)},b,y]},N=(r(15),function(e){var t=e.angle,r=e.setAngle,n=e.size,o=void 0===n?48:n,i=e.snap,s=void 0===i?5:i,f=Object(h.useRef)(),p={height:o,width:o},d=function(e){var t=e.clientX,n=e.clientY,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=u(f.current),p=c(t,n,i),d=a(p),m=o?l(d,s):d;return r(m),m},m=F({onDragStart:function(e){return d(e,!0)},onDrag:d,onDragEnd:function(e){if(e){var t=l(e,s);r(t)}}}),b=g()(m,1)[0];return O.a.createElement("div",{className:"ap",ref:f,onMouseDown:b,onTouchStart:b,style:p},O.a.createElement("span",{className:"apc",style:{transform:"rotate(".concat(t,"deg)"),height:o}},O.a.createElement("i",{className:"aph"})))});N.propTypes=R;var I=N,G=r(4),U=r.n(G),X=r(7),Y=r.n(X),B=r(5),H=r.n(B),L=function(e){var t=e.limits,r=e.stop,n=e.initialPos,o=e.colorStopRef,i=e.onPosChange,a=e.onDragStart,u=e.onDragEnd,c=e.onDeleteColor,l=Object(h.useState)(n),s=g()(l,2),f=s[0],p=s[1],d=F({onDragStart:function(e){var t=e.clientX;p(t),a(r.id)},onDrag:function(e){var n,a=e.clientX,u=e.clientY,l=r.id,s=r.offset,p=t.min,d=t.max,m=(n=o).current?n.current.getBoundingClientRect().top:0;if(Math.abs(u-m)>t.drop)return c(l);var b=function(e,t,r){return Math.max(Math.min(e,r),t)}(s-f+a,p,d);i({id:l,offset:b})},onDragEnd:function(){return u(r.id)}});return[g()(d,1)[0]]},W=(r(20),function(e){var t=e.stop,r=e.limits,n=e.onPosChange,o=e.onDeleteColor,a=e.onDragStart,u=void 0===a?i:a,c=e.onDragEnd,l=void 0===c?i:c,s=e.showStopColorOpacity,f=Object(h.useRef)(),p=L({stop:t,limits:r,onPosChange:n,onDragStart:u,onDragEnd:l,onDeleteColor:o,colorStopRef:f}),d=g()(p,1)[0],m=t.offset,b=t.color,y=t.isActive,v=t.opacity,x=void 0===v?1:v;return O.a.createElement("div",{className:y?"cs active":"cs",ref:f,style:{left:m},onMouseDown:d,onTouchStart:d},O.a.createElement("div",{style:{backgroundColor:b}}),s&&O.a.createElement("div",{className:"with-opacity",style:{backgroundColor:b,opacity:x}}))});W.propTypes=C;var $=W,z=["width","stops","disabled","onAddColor"],V=function(e,t){return{width:e,height:17,position:"relative",cursor:t?"default":"crosshair"}},J=function(e){var t=e.width,r=e.stops,n=e.disabled,o=void 0!==n&&n,i=e.onAddColor,a=U()(e,z);return O.a.createElement("div",{className:"csh",style:V(t,o),onMouseDown:function(e){if(e.preventDefault(),!e.button){var t=e.clientX-e.target.getBoundingClientRect().left;i({offset:t})}}},r.map((function(e){return O.a.createElement($,H()({key:e.id,stop:e},a))})))};J.propTypes=_;var K=J,Q=function(){return""+Math.random().toString(36).substr(2,9)},Z=function(e){var t=e.palette,r=e.width,n=e.height,i=o(t),a=Object(h.useMemo)(Q,[t.length]);return O.a.createElement("div",{className:"palette",style:{width:r,height:n}},O.a.createElement("svg",{width:"100%",height:"100%"},O.a.createElement("defs",null,O.a.createElement("linearGradient",{id:a,x1:"0",y1:"0.5",x2:"1",y2:"0.5"}," ",i.map((function(e){var t=e.id,r=e.offset,n=e.color,o=e.opacity,i=void 0===o?1:o;return O.a.createElement("stop",{key:t,offset:r,style:{stopColor:n,stopOpacity:i}})})))),O.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#".concat(a,")")})))};Z.propTypes=M;var ee=Z,te=[{value:"#000000",name:"black"},{value:"#808080",name:"gray"},{value:"#C0C0C0",name:"silver"},{value:"#FFFFFF",name:"white"},{value:"#FF0000",name:"red"},{value:"#800000",name:"maroon"},{value:"#FFFF00",name:"yellow"},{value:"#808000",name:"olive"},{value:"#00FF00",name:"lime"},{value:"#008000",name:"green"},{value:"#00FFFF",name:"aqua"},{value:"#008080",name:"teal"},{value:"#0000FF",name:"blue"},{value:"#000080",name:"navy"},{value:"#FF00FF",name:"fuchsia"},{value:"#800080",name:"purple"}],re=(r(21),function(e){var t=e.onSelect;return O.a.createElement("div",{className:"cp"},te.map((function(e){var r=e.value,n=e.name;return O.a.createElement("div",{onClick:function(){return t(r)},key:n,title:n,style:{backgroundColor:r}})})))});re.propTypes={color:j.a.string.isRequired,onSelect:j.a.func.isRequired};var ne=re,oe=(r(22),["offset","id"]);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){f()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){return Math.max.apply(Math,Y()(e.map((function(e){return e.id}))))+1},ce=function(e){var t=e.palette,r=e.activeId,n=e.width;return t.map((function(e){return ae(ae({},e),{},{id:e.id,offset:n*e.offset-5,isActive:e.id===r})}))},le=function(e,t){var r=e.find((function(e){return e.id===t}))||e[0];return ae(ae({},r),{},{offset:Number(r.offset)})},se=function(e){var t=e.palette,r=e.paletteHeight,n=void 0===r?32:r,a=e.width,u=void 0===a?220:a,c=e.stopRemovalDrop,l=void 0===c?50:c,s=e.minStops,f=void 0===s?2:s,p=e.maxStops,d=void 0===p?5:p,m=e.children,b=e.flatStyle,y=void 0!==b&&b,v=e.onPaletteChange,x=e.onColorStopSelect,j=void 0===x?i:x,w=e.showStopColorOpacity,S=void 0!==w&&w,P=t=function(e){return e.map((function(e,t){return ae(ae({},e),{},{id:e.id||t+1})}))}(t),E=g()(P,1)[0],D=Object(h.useState)(E.id),C=g()(D,2),_=C[0],M=C[1],A=Object(h.useMemo)((function(){return{min:-5,max:u-5,drop:l}}),[u]);Object(h.useEffect)((function(){j(le(t,_))}),[_]);var R=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t=t.map((function(t){return _===t.id?ae(ae({},t),{},{color:e,opacity:r}):t})),k(t)},k=function(e){var t=o(e).map((function(e){var t=e.offset,r=e.id;return ae(ae({},U()(e,oe)),{},{id:r,offset:Number(t).toFixed(3),active:r===_})}));v(t)},q=u-5,T=t.length>=d;return O.a.createElement("div",{className:"gp"},O.a.createElement(ee,{width:q,height:n,palette:t}),O.a.createElement(K,{width:q,disabled:T,stops:ce({palette:t,width:q,activeId:_}),limits:A,onPosChange:function(e){var r=e.id,n=e.offset,o=t.map((function(e){return r===e.id?ae(ae({},e),{},{offset:(n+5)/u}):e}));k(o)},onAddColor:function(e){var r=e.offset;if(!(t.length>=d)){var n=le(t,_).color,o={id:ue(t),offset:r/u,color:n},i=[].concat(Y()(t),[o]);M(o.id),k(i)}},onDeleteColor:function(e){if(!(t.length<=f)){var r=t.filter((function(t){return t.id!==e})),n=r.reduce((function(e,t){return t.offset<e.offset?t:e}),r[0]).id;M(n),k(r)}},onDragStart:function(e){M(e)},showStopColorOpacity:S}),function(){var e=le(t,_),r=ae(ae({color:e.color,opacity:e.opacity},y&&{width:u,className:"gp-flat"}),{},{onSelect:R});if(!m)return O.a.createElement(ne,r);var n=O.a.Children.only(m);return O.a.cloneElement(n,r)}())};se.propTypes=A;var fe=se,pe=(r(23),["palette","open","setOpen","trigger","showAnglePicker","angle","setAngle"]),de=function(e,t){return O.a.createElement("div",{className:"trigger",onClick:t},O.a.createElement("div",{className:"inner",style:{background:e}}))},me=function(e){var t=e.palette,r=e.open,n=void 0!==r&&r,o=e.setOpen,i=e.trigger,a=void 0===i?de:i,u=e.showAnglePicker,c=void 0!==u&&u,l=e.angle,s=e.setAngle,f=U()(e,pe),p=y(t,l).background,d=function(e){s(e=(e=e>360?e-360:e)<0?e+360:e)};return O.a.createElement("div",{className:"gpw"},a(p,(function(){return o(!n)})),n&&O.a.createElement(O.a.Fragment,null,O.a.createElement("div",{className:"overlay",onClick:function(){return o(!1)}}),O.a.createElement("div",{className:"popover"},O.a.createElement(fe,H()({},f,{palette:t,flatStyle:!0})),c&&O.a.createElement("div",{className:"angle-holder"},O.a.createElement(I,{angle:l,setAngle:s,size:32}),O.a.createElement("div",{className:"angle-inputs"},O.a.createElement("span",{onClick:function(){return d(l-1)}},"−"),O.a.createElement("input",{value:"".concat(l,"°"),disabled:!0}),O.a.createElement("span",{onClick:function(){return d(l+1)}},"+"))))))};me.propTypes=k;var be=me}])}));
//# sourceMappingURL=index.js.map