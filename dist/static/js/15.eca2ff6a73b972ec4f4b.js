webpackJsonp([15],{306:function(e,t,n){n(825);var r=n(113)(n(669),n(915),null,null);e.exports=r.exports},331:function(e,t,n){"use strict";function r(e){return"[object Array]"===w.call(e)}function o(e){return"[object ArrayBuffer]"===w.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===w.call(e)}function p(e){return"[object File]"===w.call(e)}function d(e){return"[object Blob]"===w.call(e)}function h(e){return"[object Function]"===w.call(e)}function m(e){return l(e)&&h(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function A(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)g(arguments[n],e);return t}function _(e,t,n){return g(t,function(t,r){e[r]=n&&"function"==typeof t?x(t,n):t}),e}var x=n(342),C=n(364),w=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:a,isArrayBufferView:i,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:A,forEach:g,merge:b,extend:_,trim:y}},333:function(e,t,n){e.exports=n(347)},335:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(331),a=n(361),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(338):void 0!==t&&(e=n(338)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,n(114))},338:function(e,t,n){"use strict";var r=n(331),o=n(353),a=n(356),i=n(362),s=n(360),u=n(341),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(355);e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",y=e.auth.password||"";p.Authorization="Basic "+c(v+":"+y)}if(d.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,l,a),d=null}},d.onerror=function(){l(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var A=n(358),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?A.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},339:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},340:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},341:function(e,t,n){"use strict";var r=n(352);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},342:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},347:function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(331),a=n(342),i=n(349),s=n(335),u=r(s);u.Axios=i,u.create=function(e){return r(o.merge(s,e))},u.Cancel=n(339),u.CancelToken=n(348),u.isCancel=n(340),u.all=function(e){return Promise.all(e)},u.spread=n(363),e.exports=u,e.exports.default=u},348:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(339);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},349:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(335),a=n(331),i=n(350),s=n(351);r.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},350:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(331);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},351:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(331),a=n(354),i=n(340),s=n(335),u=n(359),c=n(357);e.exports=function(e){return r(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},352:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},353:function(e,t,n){"use strict";var r=n(341);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},354:function(e,t,n){"use strict";var r=n(331);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},355:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",s=0,u=a;o.charAt(0|s)||(u="=",s%1);i+=u.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},356:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(331);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},357:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},358:function(e,t,n){"use strict";var r=n(331);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},359:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},360:function(e,t,n){"use strict";var r=n(331);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},361:function(e,t,n){"use strict";var r=n(331);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},362:function(e,t,n){"use strict";var r=n(331),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},363:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},364:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},669:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),o=n(33),a=n(27),i=n(333);n.n(i);t.default={mounted:function(){this.retrieve()},data:function(){return{user:o.a.user,config:a.default,errorMessage:null,data:null}},methods:{redirect:function(e){r.a.push(e)},retrieve:function(){var e=this,t={condition:[{value:this.user.userID,column:"account_id",clause:"="},{value:"completed",column:"status",clause:"="},{value:this.$route.params.orderNumber,column:"order_number",clause:"="}],account_id:this.user.userID};this.APIRequest("checkouts/retrieve_summary",t).then(function(t){t.data.length>0?e.data=t.data[0]:e.data=null})}}}},765:function(e,t,n){t=e.exports=n(300)(),t.push([e.i,".holder{width:100%;float:left;margin-top:25px;margin-bottom:50px}.holder .thank-you-header{height:200px;width:100%;float:left;background:#22b173;color:#fff;text-align:center;border-top-right-radius:5px;border-top-left-radius:5px}.holder .thank-you-header h1,.holder .thank-you-header h2,.holder .thank-you-header label,.thank-you-item{width:100%;float:left}.thank-you-item{height:50px;line-height:50px;border-bottom:1px solid #eee;padding-left:10px}.thank-you-item label{width:33%;float:left}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/checkout/ThankYou.vue"],names:[],mappings:"AACA,QACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,kBAAoB,CACrB,AACD,0BACC,aAAc,AACb,WAAY,AACZ,WAAY,AACZ,mBAAoB,AACpB,WAAY,AACZ,kBAAmB,AACnB,4BAA6B,AAC7B,0BAA4B,CAC7B,AASD,0GAPC,WAAY,AACZ,UAAY,CAaZ,AAPD,gBACC,YAAa,AAGZ,iBAAkB,AAClB,6BAA8B,AAC9B,iBAAmB,CACpB,AACD,sBACC,UAAW,AACX,UAAY,CACZ",file:"ThankYou.vue",sourcesContent:["\n.holder{\n  width: 100%;\n  float: left;\n  margin-top: 25px;\n  margin-bottom: 50px;\n}\n.holder .thank-you-header{\n\theight: 200px;\n  width: 100%;\n  float: left;\n  background: #22b173;\n  color: #fff;\n  text-align: center;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n.holder .thank-you-header h1, .holder .thank-you-header h2{\n\twidth: 100%;\n\tfloat: left;\n}\n.holder .thank-you-header label{\n\tfloat: left;\n\twidth: 100%;\n}\n.thank-you-item{\n\theight: 50px;\n  width: 100%;\n  float: left;\n  line-height: 50px;\n  border-bottom: solid 1px #eee;\n  padding-left: 10px;\n}\n.thank-you-item label{\n\twidth: 33%;\n\tfloat: left;\n}\n\n"],sourceRoot:""}])},825:function(e,t,n){var r=n(765);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(301)("4db3acb0",r,!0)},915:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!==e.data?n("div",{staticClass:"holder"},[n("span",{staticClass:"thank-you-header"},[n("h1",{staticStyle:{"line-height":"125px"}},[e._v("Thank you for your order, "+e._s(e.user.username)+"!")]),e._v(" "),n("label",[n("b",[e._v("Order # "+e._s(e.data.order_number))])]),e._v(" "),n("label",[e._v("We've sent an email for your receipt and payment notification at "+e._s(e.user.email)+".")])]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._l(e.data.templates,function(t,r){return null!==e.data.templates?n("span",{staticClass:"thank-you-item"},[n("label",[e._v("Template: "+e._s(t.template.title))]),e._v(" "),n("label",[e._v("1")]),e._v(" "),n("label",[e._v(e._s(t.price))])]):e._e()}),e._v(" "),null!==e.data.employees?n("span",{staticClass:"thank-you-item"},[n("label",[e._v("ID's")]),e._v(" "),n("label",[e._v(e._s(e.data.employees.length))]),e._v(" "),n("label",[e._v("100")])]):e._e(),e._v(" "),n("span",{staticClass:"thank-you-item"},[n("label"),e._v(" "),n("label",[e._v("Subtotal")]),e._v(" "),n("label",{staticClass:"pull-right",staticStyle:{"padding-right":"10px"}},[e._v("PHP "+e._s(e.data.sub_total))])]),e._v(" "),n("span",{staticClass:"thank-you-item"},[n("label"),e._v(" "),n("label",[e._v("Tax")]),e._v(" "),n("label",{staticClass:"pull-right",staticStyle:{"padding-right":"10px"}},[e._v("PHP "+e._s(e.data.tax))])]),e._v(" "),n("span",{staticClass:"thank-you-item"},[n("label"),e._v(" "),e._m(2),e._v(" "),n("label",{staticClass:"pull-right",staticStyle:{"padding-right":"10px"}},[n("b",[e._v("PHP "+e._s(e.data.total))])])]),e._v(" "),n("span",{staticClass:"thank-you-item"},[n("label"),e._v(" "),n("label",[e._v("Payment Method")]),e._v(" "),null!==e.data.method.stripe?n("label",{staticClass:"pull-right",staticStyle:{"padding-right":"10px"}},[n("i",{staticClass:"fa fa-credit-card"}),e._v("********"+e._s(e.data.method.stripe.last4))]):e._e(),e._v(" "),"cod"===e.data.method.payload?n("label",{staticClass:"pull-right",staticStyle:{"padding-right":"10px"}},[e._v(e._s(e.data.method.payload_value))]):e._e(),e._v(" "),null!==e.data.method.paypal?n("label",{staticClass:"pull-right",staticStyle:{"padding-right":"10px"}},[n("i",{staticClass:"fa fa-paypal"}),e._v(" "+e._s(e.data.method.paypal.email))]):e._e()])],2):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"thank-you-item"},[n("label",[n("b",[e._v("Summary")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"thank-you-item"},[n("label",[n("b",[e._v("Products")])]),e._v(" "),n("label",[n("b",[e._v("Quantity")])]),e._v(" "),n("label",[n("b",[e._v("Price")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("b",[e._v("Total")])])}]}}});
//# sourceMappingURL=15.eca2ff6a73b972ec4f4b.js.map