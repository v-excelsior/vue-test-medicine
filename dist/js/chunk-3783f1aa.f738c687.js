(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3783f1aa"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),c=r("9112");for(var s in i){var a=n[s],u=a&&a.prototype;if(u&&u.forEach!==o)try{c(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),c=i("forEach"),s=o("forEach");t.exports=c&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),c=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"418a":function(t,e,r){t.exports=r.p+"img/results-bg.7c375c96.jpg"},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),c=r("ae40"),s=o("filter"),a=c("filter");n({target:"Array",proto:!0,forced:!s||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),c=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?i.f(t,c,o(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("c430"),s=r("83ab"),a=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),v=r("7b0b"),h=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),O=r("df75"),S=r("241c"),w=r("057f"),_=r("7418"),C=r("06cf"),j=r("9bf2"),P=r("d1e7"),L=r("9112"),E=r("6eeb"),x=r("5692"),T=r("f772"),k=r("d012"),A=r("90e3"),D=r("b622"),M=r("e538"),N=r("746f"),R=r("d44e"),V=r("69f3"),G=r("b727").forEach,F=T("hidden"),H="Symbol",J="prototype",I=D("toPrimitive"),$=V.set,B=V.getterFor(H),q=Object[J],Q=i.Symbol,W=o("JSON","stringify"),z=C.f,K=j.f,U=w.f,X=P.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=i.QObject,it=!nt||!nt[J]||!nt[J].findChild,ot=s&&f((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(q,e);n&&delete q[e],K(t,e,r),n&&t!==q&&K(q,e,n)}:K,ct=function(t,e){var r=Y[t]=m(Q[J]);return $(r,{type:H,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},at=function(t,e,r){t===q&&at(Z,e,r),p(t);var n=g(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,F)||K(t,F,y(1,{})),t[F][n]=!0),ot(t,n,r)):K(t,n,r)},ut=function(t,e){p(t);var r=h(e),n=O(r).concat(pt(r));return G(n,(function(e){s&&!lt.call(r,e)||at(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||r)},bt=function(t,e){var r=h(t),n=g(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var i=z(r,n);return!i||!l(Y,n)||l(r,F)&&r[F][n]||(i.enumerable=!0),i}},dt=function(t){var e=U(h(t)),r=[];return G(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},pt=function(t){var e=t===q,r=U(e?Z:h(t)),n=[];return G(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(a||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===q&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(q,e,{configurable:!0,set:r}),ct(e,t)},E(Q[J],"toString",(function(){return B(this).tag})),E(Q,"withoutSetter",(function(t){return ct(A(t),t)})),P.f=lt,j.f=at,C.f=bt,S.f=w.f=dt,_.f=pt,M.f=function(t){return ct(D(t),t)},s&&(K(Q[J],"description",{configurable:!0,get:function(){return B(this).description}}),c||E(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:Q}),G(O(rt),(function(t){N(t)})),n({target:H,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!s},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),W){var vt=!a||f((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!st(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,W.apply(null,i)}})}Q[J][I]||L(Q[J],I,Q[J].valueOf),R(Q,H),k[F]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),c=Object.defineProperty,s={},a=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:a,l=o(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,f,l)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),c=r("d039"),s=c((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),c=r("50c4"),s=r("65f0"),a=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,b=5==t||l;return function(d,p,v,h){for(var g,y,m=o(d),O=i(m),S=n(p,v,3),w=c(O.length),_=0,C=h||s,j=e?C(d,w):r?C(d,0):void 0;w>_;_++)if((b||_ in O)&&(g=O[_],y=S(g,_,m),t))if(e)j[_]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return _;case 2:a.call(j,g)}else if(f)return!1;return l?-1:u||f?f:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c813:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"results"},[r("router-link",{staticClass:"button results__button-home",attrs:{to:"/",tag:"button"}}),r("div",{staticClass:"results__data"},[r("div",{staticClass:"results__data-item"},[r("p",{staticClass:"percent"},[t._v(t._s(t.getPercent(t.med1Count))+" %")]),r("p",{staticClass:"name"},[t._v("Препарат 1")])]),r("div",{staticClass:"results__data-item"},[r("p",{staticClass:"percent"},[t._v(t._s(t.getPercent(t.med2Count))+" %")]),r("p",{staticClass:"name"},[t._v("Препарат 2")])]),r("div",{staticClass:"results__data-item"},[r("p",{staticClass:"percent"},[t._v(t._s(t.getPercent(t.med3Count))+" %")]),r("p",{staticClass:"name"},[t._v("Препарат 3")])])]),t._m(0),r("router-link",{staticClass:"button results__button-refresh",attrs:{to:"/main-page",tag:"button"}},[t._v(" Попробовать еще ")]),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"results-info"},[r("p",{staticClass:"results-info__label"},[t._v("Ваш результат:")]),r("p",{staticClass:"results-info__res"},[t._v("«Что я здесь делаю?»")]),r("p",{staticClass:"results-info__text"},[t._v(" Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов. ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-bg"},[n("img",{attrs:{src:r("418a")}})])}],o=r("5530"),c=r("2f62"),s={name:"ResultsPage",methods:{getPercent:function(t){return Math.floor(t/15*100)}},computed:Object(o["a"])({},Object(c["c"])(["med1Count","med2Count","med3Count"]))},a=s,u=r("2877"),f=Object(u["a"])(a,n,i,!1,null,null,null);e["default"]=f.exports},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),c=r("fc6a"),s=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),i=s.f,u=o(n),f={},l=0;while(u.length>l)r=i(n,e=u[l++]),void 0!==r&&a(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),c=r("06cf").f,s=r("83ab"),a=i((function(){c(1)})),u=!s||a;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return c(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3783f1aa.f738c687.js.map