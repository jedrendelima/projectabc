webpackJsonp([13],{328:function(t,e,n){n(844);var r=n(113)(n(708),n(938),"data-v-cd889fb8",null);t.exports=r.exports},333:function(t,e,n){"use strict";function r(t){return"[object Array]"===y.call(t)}function a(t){return"[object ArrayBuffer]"===y.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function i(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function c(t){return"number"==typeof t}function l(t){return void 0===t}function u(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===y.call(t)}function p(t){return"[object File]"===y.call(t)}function A(t){return"[object Blob]"===y.call(t)}function d(t){return"[object Function]"===y.call(t)}function h(t){return u(t)&&d(t.pipe)}function C(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function m(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,a=t.length;n<a;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function b(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)v(arguments[n],t);return e}function B(t,e,n){return v(e,function(e,r){t[r]=n&&"function"==typeof e?x(e,n):e}),t}var x=n(344),w=n(366),y=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:a,isBuffer:w,isFormData:o,isArrayBufferView:i,isString:s,isNumber:c,isObject:u,isUndefined:l,isDate:f,isFile:p,isBlob:A,isFunction:d,isStream:h,isURLSearchParams:C,isStandardBrowserEnv:g,forEach:v,merge:b,extend:B,trim:m}},335:function(t,e,n){t.exports=n(348)},337:function(t,e,n){"use strict";(function(e){function r(t,e){!a.isUndefined(t)&&a.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a=n(333),o=n(362),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(340):void 0!==e&&(t=n(340)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),a.isFormData(t)||a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)?t:a.isArrayBufferView(t)?t.buffer:a.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):a.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(t){s.headers[t]={}}),a.forEach(["post","put","patch"],function(t){s.headers[t]=a.merge(i)}),t.exports=s}).call(e,n(114))},340:function(t,e,n){"use strict";var r=n(333),a=n(354),o=n(357),i=n(363),s=n(361),c=n(343),l="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(356);t.exports=function(t){return new Promise(function(e,u){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var A=new XMLHttpRequest,d="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in A||s(t.url)||(A=new window.XDomainRequest,d="onload",h=!0,A.onprogress=function(){},A.ontimeout=function(){}),t.auth){var C=t.auth.username||"",m=t.auth.password||"";p.Authorization="Basic "+l(C+":"+m)}if(A.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),A.timeout=t.timeout,A[d]=function(){if(A&&(4===A.readyState||h)&&(0!==A.status||A.responseURL&&0===A.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in A?i(A.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?A.response:A.responseText,o={data:r,status:1223===A.status?204:A.status,statusText:1223===A.status?"No Content":A.statusText,headers:n,config:t,request:A};a(e,u,o),A=null}},A.onerror=function(){u(c("Network Error",t,null,A)),A=null},A.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",A)),A=null},r.isStandardBrowserEnv()){var g=n(359),v=(t.withCredentials||s(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;v&&(p[t.xsrfHeaderName]=v)}if("setRequestHeader"in A&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:A.setRequestHeader(e,t)}),t.withCredentials&&(A.withCredentials=!0),t.responseType)try{A.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&A.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&A.upload&&A.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){A&&(A.abort(),u(t),A=null)}),void 0===f&&(f=null),A.send(f)})}},341:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},342:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},343:function(t,e,n){"use strict";var r=n(353);t.exports=function(t,e,n,a,o){var i=new Error(t);return r(i,e,n,a,o)}},344:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},348:function(t,e,n){"use strict";function r(t){var e=new i(t),n=o(i.prototype.request,e);return a.extend(n,i.prototype,e),a.extend(n,e),n}var a=n(333),o=n(344),i=n(350),s=n(337),c=r(s);c.Axios=i,c.create=function(t){return r(a.merge(s,t))},c.Cancel=n(341),c.CancelToken=n(349),c.isCancel=n(342),c.all=function(t){return Promise.all(t)},c.spread=n(364),t.exports=c,t.exports.default=c},349:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new a(t),e(n.reason))})}var a=n(341);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},350:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new i,response:new i}}var a=n(337),o=n(333),i=n(351),s=n(352);r.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(a,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},351:function(t,e,n){"use strict";function r(){this.handlers=[]}var a=n(333);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){a.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},352:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var a=n(333),o=n(355),i=n(342),s=n(337),c=n(360),l=n(358);t.exports=function(t){return r(t),t.baseURL&&!c(t.url)&&(t.url=l(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=a.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(r(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},353:function(t,e,n){"use strict";t.exports=function(t,e,n,r,a){return t.config=e,n&&(t.code=n),t.request=r,t.response=a,t}},354:function(t,e,n){"use strict";var r=n(343);t.exports=function(t,e,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},355:function(t,e,n){"use strict";var r=n(333);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},356:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function a(t){for(var e,n,a=String(t),i="",s=0,c=o;a.charAt(0|s)||(c="=",s%1);i+=c.charAt(63&e>>8-s%1*8)){if((n=a.charCodeAt(s+=.75))>255)throw new r;e=e<<8|n}return i}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=a},357:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var a=n(333);t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(a.isURLSearchParams(e))o=e.toString();else{var i=[];a.forEach(e,function(t,e){null!==t&&void 0!==t&&(a.isArray(t)&&(e+="[]"),a.isArray(t)||(t=[t]),a.forEach(t,function(t){a.isDate(t)?t=t.toISOString():a.isObject(t)&&(t=JSON.stringify(t)),i.push(r(e)+"="+r(t))}))}),o=i.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},358:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},359:function(t,e,n){"use strict";var r=n(333);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,a,o,i){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},360:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},361:function(t,e,n){"use strict";var r=n(333);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(a.setAttribute("href",e),e=a.href),a.setAttribute("href",e),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");return e=t(window.location.href),function(n){var a=r.isString(n)?t(n):n;return a.protocol===e.protocol&&a.host===e.host}}():function(){return function(){return!0}}()},362:function(t,e,n){"use strict";var r=n(333);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},363:function(t,e,n){"use strict";var r=n(333),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(i[e]&&a.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},364:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},366:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},659:function(t,e,n){"use strict";e.a={currency:"₱",monthly:499,annually:4799,free:0}},707:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),a=n(33),o=n(27),i=n(659);e.default={data:function(){return{user:a.a.user,config:o.default,products:i.a}},methods:{redirect:function(t){r.a.push(t)}}}},708:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),a=n(33),o=n(27),i=n(335);n.n(i);e.default={mounted:function(){},data:function(){return{user:a.a.user,config:o.default,errorMessage:null,data:null,prevIndex:null}},components:{item:n(877)},methods:{redirect:function(t){r.a.push(t)}}}},766:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".holder[data-v-700a9b0e]{width:100%;float:left;margin-bottom:50px}.pricing-item[data-v-700a9b0e]{width:32%;float:left;min-height:500px;overflow-y:hidden}.pricing-item .header-item[data-v-700a9b0e]{border-top-right-radius:5px;border-top-left-radius:5px;text-align:center;color:#fff;border:1px solid inherit;float:left;width:100%}.pricing-item .header-item label[data-v-700a9b0e]{font-size:24px;padding-top:10px;padding-bottom:5px}.pricing-content-holder[data-v-700a9b0e]{width:100%;float:left;min-height:200px;overflow-y:hidden;border-left:1px solid #22b173;border-right:1px solid #22b173;border-bottom:1px solid #22b173}.pricing-content-holder .cost[data-v-700a9b0e]{width:100%;float:left;height:150px;text-align:right;color:#fff}.pricing-content-holder .center[data-v-700a9b0e]{height:250px}.cost .bottom-pricing[data-v-700a9b0e],.cost .top[data-v-700a9b0e]{width:100%;float:left;text-align:center}.cost .bottom-pricing[data-v-700a9b0e]{font-size:18px}.cost .top .value[data-v-700a9b0e]{font-size:80px;font-weight:600;float:left;width:100%}.cost .top .details[data-v-700a9b0e]{font-weight:600;font-size:16px;width:100%}.pricing-content-holder .other-details[data-v-700a9b0e]{width:100%;float:left;background:#22b173}.other-details .item[data-v-700a9b0e]{width:100%;float:left;text-align:center;font-size:20px;text-transform:uppercase;color:#fff;line-height:50px;height:50px}.pricing-content-holder .lead[data-v-700a9b0e]{width:100%;float:left;min-height:50px;overflow-y:hidden}.pricing-content-holder .lead .coupons[data-v-700a9b0e]{float:left;width:80%;height:50px;margin-left:10%;margin-right:10%;margin-bottom:10px}.pricing-content-holder .lead .coupon-message[data-v-700a9b0e]{width:100%;float:left;text-align:center;margin-top:10px;padding-bottom:10px}.lead .coupons input[data-v-700a9b0e]{width:70%!important;float:left;height:50px!important}.lead .coupons .button-holder[data-v-700a9b0e]{width:30%!important;float:left}.lead .coupons .button-holder button[data-v-700a9b0e]{height:50px!important;width:90%!important}.pricing-content-holder .lead .text[data-v-700a9b0e]{width:100%;float:left;font-size:14px;line-height:50px;padding-left:10%;border-bottom:1px solid #ddd;font-weight:400}.pricing-content-holder .lead .btn-whole[data-v-700a9b0e]{width:80%;text-align:center;float:left;margin:25px 10% 10px;height:50px!important}.bg-green[data-v-700a9b0e]{background:#22b173}@media (max-width:992px){.pricing-item[data-v-700a9b0e]{width:90%;margin-left:5%;margin-right:5%;margin-bottom:0}}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/plan/Item.vue"],names:[],mappings:"AACA,yBACC,WAAY,AACZ,WAAY,AACZ,kBAAoB,CACpB,AACD,+BACE,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,4CACE,4BAA6B,AAC7B,2BAA4B,AAC5B,kBAAmB,AACnB,WAAY,AACZ,yBAA0B,AAC1B,WAAY,AACZ,UAAY,CACb,AACD,kDACE,eAAgB,AAChB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,yCACE,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,8BAA+B,AAC/B,+BAAgC,AAChC,+BAAiC,CAClC,AACD,+CACE,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,iBAAkB,AAClB,UAAY,CACb,AACD,iDACE,YAAc,CACf,AAMD,mEAJE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CAOpB,AALD,uCAIE,cAAgB,CACjB,AACD,mCACE,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,qCACE,gBAAiB,AACjB,eAAgB,AAChB,UAAY,CACb,AACD,wDACE,WAAY,AACZ,WAAY,AACZ,kBAAoB,CACrB,AACD,sCACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,yBAA0B,AAC1B,WAAY,AACZ,iBAAkB,AAClB,WAAa,CACd,AACD,+CACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,iBAAmB,CACpB,AACD,wDACE,WAAY,AACZ,UAAW,AACX,YAAa,AACb,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,+DACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,sCACE,oBAAsB,AACtB,WAAY,AACZ,qBAAwB,CACzB,AACD,+CACE,oBAAsB,AACtB,UAAY,CACb,AACD,sDACE,sBAAwB,AACxB,mBAAsB,CACvB,AACD,qDACE,WAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,iBAAkB,AAClB,iBAAkB,AAClB,6BAA8B,AAC9B,eAAiB,CAClB,AACD,0DACE,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,qBAA0B,AAC1B,qBAAwB,CACzB,AACD,2BACE,kBAAoB,CACrB,AACD,yBACA,+BACI,UAAW,AACX,eAAgB,AAChB,gBAAiB,AACjB,eAAmB,CACtB,CACA",file:"Item.vue",sourcesContent:["\n.holder[data-v-700a9b0e]{\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tmargin-bottom: 50px;\n}\n.pricing-item[data-v-700a9b0e]{\r\n  width: 32%;\r\n  float: left;\r\n  min-height: 500px;\r\n  overflow-y: hidden;\n}\n.pricing-item .header-item[data-v-700a9b0e]{\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  border: solid 1px inherit;\r\n  float: left;\r\n  width: 100%;\n}\n.pricing-item .header-item label[data-v-700a9b0e]{\r\n  font-size: 24px;\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\n}\n.pricing-content-holder[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  min-height: 200px;\r\n  overflow-y: hidden;\r\n  border-left: solid 1px #22b173;\r\n  border-right: solid 1px #22b173;\r\n  border-bottom: solid 1px #22b173;\n}\n.pricing-content-holder .cost[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  height: 150px;\r\n  text-align: right;\r\n  color: #fff;\n}\n.pricing-content-holder .center[data-v-700a9b0e]{\r\n  height: 250px;\n}\n.cost .top[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.cost .bottom-pricing[data-v-700a9b0e] {\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 18px;\n}\n.cost .top .value[data-v-700a9b0e]{\r\n  font-size: 80px;\r\n  font-weight: 600;\r\n  float: left;\r\n  width: 100%;\n}\n.cost .top .details[data-v-700a9b0e]{\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  width: 100%;\n}\n.pricing-content-holder .other-details[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  background: #22b173;\n}\n.other-details .item[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  line-height: 50px;\r\n  height: 50px;\n}\n.pricing-content-holder .lead[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  min-height: 50px;\r\n  overflow-y: hidden;\n}\n.pricing-content-holder .lead .coupons[data-v-700a9b0e]{\r\n  float: left;\r\n  width: 80%;\r\n  height: 50px;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  margin-bottom: 10px;\n}\n.pricing-content-holder .lead .coupon-message[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  padding-bottom: 10px;\n}\n.lead .coupons input[data-v-700a9b0e]{\r\n  width: 70% !important;\r\n  float: left;\r\n  height: 50px !important;\n}\n.lead .coupons .button-holder[data-v-700a9b0e]{\r\n  width: 30% !important;\r\n  float: left;\n}\n.lead .coupons .button-holder button[data-v-700a9b0e]{\r\n  height: 50px !important;\r\n  width: 90% !important;\n}\n.pricing-content-holder .lead .text[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  font-size: 14px;\r\n  line-height: 50px;\r\n  padding-left: 10%;\r\n  border-bottom: solid 1px #ddd;\r\n  font-weight: 400;\n}\n.pricing-content-holder .lead .btn-whole[data-v-700a9b0e]{\r\n  width: 80%;\r\n  text-align: center;\r\n  float: left;\r\n  margin: 25px 10% 10px 10%;\r\n  height: 50px !important;\n}\n.bg-green[data-v-700a9b0e]{\r\n  background: #22b173;\n}\n@media (max-width: 992px){\n.pricing-item[data-v-700a9b0e]{\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n    margin-bottom: 0px;\n}\n}\r\n"],sourceRoot:""}])},781:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".template-holder[data-v-cd889fb8]{width:98%;float:left;margin-right:2%}.template-list[data-v-cd889fb8]{width:100%;float:left;margin-top:25px}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/plan/Plan.vue"],names:[],mappings:"AACA,kCACE,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,gCACE,WAAY,AACZ,WAAY,AACZ,eAAiB,CAClB",file:"Plan.vue",sourcesContent:["\n.template-holder[data-v-cd889fb8]{\r\n  width: 98%;\r\n  float: left;\r\n  margin-right: 2%;\n}\n.template-list[data-v-cd889fb8]{\r\n  width: 100%;\r\n  float: left;\r\n  margin-top: 25px;\n}\r\n"],sourceRoot:""}])},829:function(t,e,n){var r=n(766);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("6f71c3e7",r,!0)},844:function(t,e,n){var r=n(781);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("40c07555",r,!0)},877:function(t,e,n){n(829);var r=n(113)(n(707),n(923),"data-v-700a9b0e",null);t.exports=r.exports},923:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"holder"},[n("div",{staticClass:"pricing-item"},[n("span",{staticClass:"header-options option-false"}),t._v(" "),t._m(0),t._v(" "),n("span",{staticClass:"pricing-content-holder"},[n("span",{staticClass:"cost bg-green"},[n("span",{staticClass:"top"},[n("span",{staticClass:"value"},[t._v(t._s(t.products.currency+""+t.products.free))])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),n("span",{staticClass:"lead"},[n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.createPaypal("pause")}}},[t._v("\n            BUY THIS PLAN\n          ")]),t._v(" "),t._m(3),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Limited Storage\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Expire after 1 Month\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.createPaypal("pause")}}},[t._v("\n            BUY THIS PLAN\n          ")])])])]),t._v(" "),n("span",{staticClass:"pricing-item",staticStyle:{"margin-left":"2%"}},[t._m(4),t._v(" "),n("span",{staticClass:"pricing-content-holder"},[n("span",{staticClass:"cost bg-secondary"},[n("span",{staticClass:"top"},[n("span",{staticClass:"value"},[t._v(t._s(t.products.currency+""+t.products.monthly))])]),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._v(" "),n("span",{staticClass:"lead"},[n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.createPaypal("pause")}}},[t._v("\n            BUY THIS PLAN\n          ")]),t._v(" "),t._m(7),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Unlimited Storage\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Message to Clients\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Card Editor\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Notifications\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.createPaypal("pause")}}},[t._v("\n            BUY THIS PLAN\n          ")])])])]),t._v(" "),n("span",{staticClass:"pricing-item",staticStyle:{"margin-left":"2%"}},[t._m(8),t._v(" "),n("span",{staticClass:"pricing-content-holder"},[n("span",{staticClass:"cost bg-secondary"},[n("span",{staticClass:"top"},[n("span",{staticClass:"value"},[t._v(t._s(t.products.currency+""+t.products.annually))])]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),n("span",{staticClass:"lead"},[n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.createPaypal("pause")}}},[t._v("\n            BUY THIS PLAN\n          ")]),t._v(" "),t._m(11),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Unlimited Storage\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Message to Clients\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Card Editor\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Notifications\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.createPaypal("pause")}}},[t._v("\n            BUY THIS PLAN\n          ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"header-item bg-green"},[n("label",[t._v("FREE")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-pricing text-warning"},[n("b",[t._v("BASIC")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"other-details"},[n("span",{staticClass:"item bg-default"},[t._v("\n            Regular\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text text-danger"},[n("b",[t._v("FEATURES")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"header-item bg-secondary"},[n("label",[t._v("MONTHLY")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"bottom-pricing text-warning"},[n("b",[t._v("PREMIUM")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"other-details"},[n("span",{staticClass:"item bg-secondary"},[t._v("\n            Regular\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text text-danger"},[n("b",[t._v("FEATURES")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"header-item bg-secondary"},[n("label",[t._v("ANNUALLY")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"bottom-pricing text-warning"},[n("b",[t._v("PREMIUM")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"other-details"},[n("span",{staticClass:"item bg-secondary"},[t._v("\n            Save up to 20% per Month\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text text-danger"},[n("b",[t._v("FEATURES")])])}]}},938:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-holder"},[n("div",{staticClass:"template-list"},[n("item")],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=13.d98b723b386541796a63.js.map