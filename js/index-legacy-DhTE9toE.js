!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e;function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var e,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),u=new C(r||[]);return a(i,"_invoke",{value:O(t,n,u)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var d="suspendedStart",y="suspendedYield",v="executing",g="completed",m={};function w(){}function b(){}function x(){}var j={};f(j,c,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(I([])));S&&S!==o&&i.call(S,c)&&(j=S);var L=x.prototype=w.prototype=Object.create(j);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,n){function r(o,a,u,c){var l=h(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function O(t,n,r){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=P(u,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=h(t,n,r);if("normal"===l.type){if(o=r.done?g:y,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=g,r.method="throw",r.arg=l.arg)}}}function P(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=h(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function t(){for(;++o<n.length;)if(i.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(n)+" is not iterable")}return b.prototype=x,a(L,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},_(k.prototype),f(k.prototype,l,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),f(L,s,"Generator"),f(L,c,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},r}function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}System.register(["./index-legacy-DQbE9N6t.js","./index-legacy-Dh74zTvE.js","./index-legacy-sr8k5w8j.js","./index-legacy-CVlulFEq.js","./index-legacy-DTUKjkQ6.js","./index-legacy-BylB44n2.js","./index-legacy-QoV3-9G-.js","./index-legacy-DkpWKVSY.js","./use-method-legacy-DoRxaFu3.js","./vue-legacy-Cowg1EAB.js","./arco-legacy-DmTh9LTc.js","./index-legacy-kUEiIK1y.js"],(function(t,o){"use strict";var i,a,u,c,l,s,f,p,h,d,y,v,g,m,w,b,x,j,E,S,L,_;return{setters:[function(t){i=t.default},function(t){a=t._},null,function(t){u=t.default},null,null,null,null,function(t){c=t.u},function(t){l=t.r,s=t.i,f=t.z,p=t.e,h=t.j,d=t.v,y=t.C,v=t.h,g=t.m,m=t.Y,w=t.y,b=t.l},function(t){x=t.B,j=t.n,E=t.F,S=t.r,L=t.T,_=t.s},null],execute:function(){var o=document.createElement("style");o.textContent=".split-pane[data-v-3ace7b9a]{padding:10px;height:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.split-pane .form_[data-v-3ace7b9a]{height:104px}.split-pane .text-area[data-v-3ace7b9a]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:auto}\n",document.head.appendChild(o);var k,O,P=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),T=(k=["",""],O=["",""],Object.freeze(Object.defineProperties(k,{raw:{value:Object.freeze(O)}})));var A=function(){function t(){for(var e=this,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tag=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return"function"==typeof t?e.interimTag.bind(e,t):"string"==typeof t?e.transformEndResult(t):(t=t.map(e.transformString.bind(e)),e.transformEndResult(t.reduce(e.processSubstitutions.bind(e,r))))},r.length>0&&Array.isArray(r[0])&&(r=r[0]),this.transformers=r.map((function(t){return"function"==typeof t?t():t})),this.tag}return P(t,[{key:"interimTag",value:function(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return this.tag(T,t.apply(void 0,[e].concat(r)))}},{key:"processSubstitutions",value:function(t,e,n){var r=this.transformSubstitution(t.shift(),e);return"".concat(e,r,n)}},{key:"transformString",value:function(t){return this.transformers.reduce((function(t,e){return e.onString?e.onString(t):t}),t)}},{key:"transformSubstitution",value:function(t,e){return this.transformers.reduce((function(t,n){return n.onSubstitution?n.onSubstitution(t,e):t}),t)}},{key:"transformEndResult",value:function(t){return this.transformers.reduce((function(t,e){return e.onEndResult?e.onEndResult(t):t}),t)}}]),t}(),C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(e){if(""===t)return e.trim();if("start"===(t=t.toLowerCase())||"left"===t)return e.replace(/^\s*/,"");if("end"===t||"right"===t)return e.replace(/\s*$/,"");throw new Error("Side not supported: "+t)}}};var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(e){if("initial"===t){var n=e.match(/^[^\S\n]*(?=\S)/gm),r=n&&Math.min.apply(Math,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(n.map((function(t){return t.length}))));if(r){var o=new RegExp("^.{"+r+"}","gm");return e.replace(o,"")}return e}if("all"===t)return e.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+t)}}},N=function(t,e){return{onEndResult:function(n){if(null==t||null==e)throw new Error("replaceResultTransformer requires at least 2 arguments.");return n.replace(t,e)}}},R=function(t,e){return{onSubstitution:function(n,r){if(null==t||null==e)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==n?n:n.toString().replace(t,e)}}},V={separator:"",conjunction:"",serial:!1},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return{onSubstitution:function(e,n){if(Array.isArray(e)){var r=e.length,o=t.separator,i=t.conjunction,a=t.serial,u=n.match(/(\n?[^\S\n]+)$/);if(e=u?e.join(o+u[1]):e.join(o+" "),i&&r>1){var c=e.lastIndexOf(o);e=e.slice(0,c)+(a?o:"")+" "+i+e.slice(c+1)}}return e}}},z=function(t){return{onSubstitution:function(e,n){return"string"==typeof e&&e.includes(t)&&(e=e.split(t)),e}}},F=function(t){return null!=t&&!Number.isNaN(t)&&"boolean"!=typeof t};new A(G({separator:","}),I,C),new A(G({separator:",",conjunction:"and"}),I,C),new A(G({separator:",",conjunction:"or"}),I,C);var q=new A(z("\n"),(function(){return{onSubstitution:function(t){return Array.isArray(t)?t.filter(F):F(t)?t:""}}}),G,I,C);function M(){var t=c().copyToClipboard,o=s("reload"),i=l({style:{height:"100%",width:"100%",border:"1px solid #E5E6EB"}}),a=l({description:"",prefix:"",snippet:""}),u=l("");function p(){var t;return t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f((function(){var t,n,r,o,i,c,l,s;u.value=(r=a.value.snippet,o=a.value.prefix,i=a.value.description,c=r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').split("\n"),l=c.length,s=c.map((function(t,e){return'"'.concat(t,e===l-1?'"':'",')})),q(e||(t=['\n                  "','":{ \n                    "description": "','",\n                    "prefix": "','",\n                    "body": [ \n                      '," \n                    ] \n                  }\n              "],n||(n=t.slice(0)),e=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),i,i,o,s.join("\n")))}));case 1:case"end":return t.stop()}}),t)})),p=function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))},p.apply(this,arguments)}return{copyToClipboard:t,reset:function(){o()},splitProps:i,formModel:a,snippetsPrettier:u,editorOnChange:function(){return p.apply(this,arguments)}}}new A(z("\n"),G,I,C,R(/&/g,"&amp;"),R(/</g,"&lt;"),R(/>/g,"&gt;"),R(/"/g,"&quot;"),R(/'/g,"&#x27;"),R(/`/g,"&#x60;")),new A(N(/(?:\n(?:\s*))+/g," "),C),new A(N(/(?:\n\s*)/g,""),C),new A(G({separator:","}),N(/(?:\s+)/g," "),C),new A(G({separator:",",conjunction:"or"}),N(/(?:\s+)/g," "),C),new A(G({separator:",",conjunction:"and"}),N(/(?:\s+)/g," "),C),new A(G,I,C),new A(G,N(/(?:\s+)/g," "),C),new A(I,C),new A(I("all"),C);var U={class:"sl-layout-content"},Y={class:"split-pane"},B={class:"text-area"},$={class:"split-pane"};t("default",a(p({__name:"index",setup:function(t){var e=M(),n=e.copyToClipboard,r=e.reset,o=e.splitProps,a=e.formModel,c=e.snippetsPrettier,l=e.editorOnChange;return function(t,e){var s=x,f=j,p=E,k=S,O=L,P=u,T=_,A=i;return v(),h("div",U,[d(A,null,{title:y((function(){return e[4]||(e[4]=[g("p",null,"VScode 代码片段配置",-1)])})),extra:y((function(){return[d(s,{type:"primary",onClick:m(r)},{default:y((function(){return e[5]||(e[5]=[w("重置")])})),_:1},8,["onClick"]),d(s,{class:"sl-margin-left-10",type:"primary",status:"success",onClick:e[0]||(e[0]=function(t){return m(n)(m(c))})},{default:y((function(){return e[6]||(e[6]=[w("复制")])})),_:1})]})),default:y((function(){return[d(T,{style:b(m(o).style),size:"400px"},{first:y((function(){return[g("div",Y,[d(k,{model:m(a),class:"form_"},{default:y((function(){return[d(p,{label:"描述"},{default:y((function(){return[d(f,{modelValue:m(a).description,"onUpdate:modelValue":e[1]||(e[1]=function(t){return m(a).description=t}),placeholder:"Description...",onInput:m(l)},null,8,["modelValue","onInput"])]})),_:1}),d(p,{label:"快捷键"},{default:y((function(){return[d(f,{modelValue:m(a).prefix,"onUpdate:modelValue":e[2]||(e[2]=function(t){return m(a).prefix=t}),placeholder:"Tab trigger...",onInput:m(l)},null,8,["modelValue","onInput"])]})),_:1})]})),_:1},8,["model"]),g("div",B,[d(O,{modelValue:m(a).snippet,"onUpdate:modelValue":e[3]||(e[3]=function(t){return m(a).snippet=t}),placeholder:"Your snippet...","allow-clear":"","auto-size":{minRows:10},onInput:m(l)},null,8,["modelValue","onInput"])])])]})),second:y((function(){return[g("div",$,[d(P,{lang:"html",code:m(c)},null,8,["code"])])]})),_:1},8,["style"])]})),_:1})])}}}),[["__scopeId","data-v-3ace7b9a"]]))}}}))}();
