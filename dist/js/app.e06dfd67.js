(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-18ed0920":"d7a680d3","chunk-3783f1aa":"bfda4881"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-test-medicine/dist/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},a=[],u=n("2877"),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),s=c.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"greeting"},[n("span",{staticClass:"greeting__welcome-text"},[e._v("Добро пожаловать в игру")]),e._m(0),n("router-link",{staticClass:"button greeting__button",attrs:{to:"/main-page",tag:"button"}},[e._v(" Начать ")])],1)])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"greeting__game-name"},[e._v(" Помоги "),n("span",{staticClass:"upper"},[e._v("фармацевту")])])}],d={},m=Object(u["a"])(d,f,p,!1,null,null,null),h=m.exports;r["a"].use(l["a"]);var v=[{path:"/",name:"Home",component:h},{path:"/main-page",name:"MainPage",component:function(){return n.e("chunk-18ed0920").then(n.bind(null,"4385"))}},{path:"/results",name:"FinishPage",component:function(){return n.e("chunk-3783f1aa").then(n.bind(null,"c813"))}}],g=new l["a"]({routes:v}),b=g,_=n("2f62");r["a"].use(_["a"]);var y=new _["a"].Store({state:{med1Count:0,med2Count:0,med3Count:0},mutations:{increaceMed1Count:function(e){e.med1Count++},increaceMed2Count:function(e){e.med2Count++},increaceMed3Count:function(e){e.med3Count++},cleanState:function(e){e.med1Count=0,e.med2Count=0,e.med3Count=0}},getters:{},actions:{}});n("fce9");r["a"].config.productionTip=!1,new r["a"]({router:b,store:y,render:function(e){return e(s)}}).$mount("#app")},fce9:function(e,t,n){}});
//# sourceMappingURL=app.e06dfd67.js.map