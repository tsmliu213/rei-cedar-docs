(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{178:function(n,t,r){},21:function(n,t,r){var o=r(31)("wks"),e=r(32),c=r(7).Symbol,i="function"==typeof c;(n.exports=function(n){return o[n]||(o[n]=i&&c[n]||(i?c:e)("Symbol."+n))}).store=o},22:function(n,t,r){var o=r(9),e=r(41);n.exports=r(4)?function(n,t,r){return o.f(n,t,e(1,r))}:function(n,t,r){return n[t]=r,n}},23:function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},24:function(n,t){var r=n.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},25:function(n,t,r){var o=r(7),e=r(22),c=r(27),i=r(32)("src"),a=r(69),u=(""+a).split("toString");r(24).inspectSource=function(n){return a.call(n)},(n.exports=function(n,t,r,a){var s="function"==typeof r;s&&(c(r,"name")||e(r,"name",t)),n[t]!==r&&(s&&(c(r,i)||e(r,i,n[t]?""+n[t]:u.join(String(t)))),n===o?n[t]=r:a?n[t]?n[t]=r:e(n,t,r):(delete n[t],e(n,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[i]||a.call(this)})},267:function(n,t,r){"use strict";var o=r(33),e=r(268)(5),c=!0;"find"in[]&&Array(1).find(function(){c=!1}),o(o.P+o.F*c,"Array",{find:function(n){return e(this,n,arguments.length>1?arguments[1]:void 0)}}),r(84)("find")},268:function(n,t,r){var o=r(47),e=r(68),c=r(46),i=r(39),a=r(269);n.exports=function(n,t){var r=1==n,u=2==n,s=3==n,f=4==n,l=6==n,p=5==n||l,v=t||a;return function(t,a,d){for(var _,h,y=c(t),x=e(y),b=o(a,d,3),g=i(x.length),w=0,m=r?v(t,g):u?v(t,0):void 0;g>w;w++)if((p||w in x)&&(h=b(_=x[w],w,y),n))if(r)m[w]=h;else if(h)switch(n){case 3:return!0;case 5:return _;case 6:return w;case 2:m.push(_)}else if(f)return!1;return l?-1:s||f?f:m}}},269:function(n,t,r){var o=r(270);n.exports=function(n,t){return new(o(n))(t)}},27:function(n,t){var r={}.hasOwnProperty;n.exports=function(n,t){return r.call(n,t)}},270:function(n,t,r){var o=r(5),e=r(271),c=r(21)("species");n.exports=function(n){var t;return e(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!e(t.prototype)||(t=void 0),o(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},271:function(n,t,r){var o=r(35);n.exports=Array.isArray||function(n){return"Array"==o(n)}},272:function(n,t,r){"use strict";var o=r(178);r.n(o).a},28:function(n,t){var r=Math.ceil,o=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?o:r)(n)}},31:function(n,t,r){var o=r(24),e=r(7),c=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(n.exports=function(n,t){return c[n]||(c[n]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:r(48)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},314:function(n,t,r){"use strict";r.r(t);r(11),r(267);var o={name:"CdrDocColorSwatch",props:{tokenName:{type:String,default:"$clean-slate"},showNames:{type:Boolean,default:!0}},computed:{tokenData:function(){var n=this;return tokens.foundations.find(function(t){return t.name===n.tokenName})},hex:function(){return this.tokenData.value},rgb:function(){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}}},e=(r(272),r(2)),c=Object(e.a)(o,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"cdr-doc-color-swatch"},[r("div",{staticClass:"cdr-doc-color-swatch__sample",style:{backgroundColor:n.hex}}),n._v(" "),n.showNames?r("span",{staticClass:"cdr-doc-color-swatch__token-name"},[n._v("\n    $"+n._s(n.tokenName)+"\n  ")]):n._e(),n._v(" "),r("div",{staticClass:"cdr-doc-color-swatch__values"},[r("span",{staticClass:"cdr-doc-color-swatch__hex"},[n._v("\n      "+n._s(n.hex)+"\n    ")]),n._v(" "),r("span",{staticClass:"cdr-doc-color-swatch__rgb"},[r("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[n._v("\n        r"+n._s(n.rgb.r)+"\n      ")]),n._v(" "),r("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[n._v("\n        g"+n._s(n.rgb.g)+"\n      ")]),n._v(" "),r("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[n._v("\n        b"+n._s(n.rgb.b)+"\n      ")])])])])},[],!1,null,null,null);t.default=c.exports},32:function(n,t){var r=0,o=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++r+o).toString(36))}},33:function(n,t,r){var o=r(7),e=r(24),c=r(22),i=r(25),a=r(47),u=function(n,t,r){var s,f,l,p,v=n&u.F,d=n&u.G,_=n&u.S,h=n&u.P,y=n&u.B,x=d?o:_?o[t]||(o[t]={}):(o[t]||{}).prototype,b=d?e:e[t]||(e[t]={}),g=b.prototype||(b.prototype={});for(s in d&&(r=t),r)l=((f=!v&&x&&void 0!==x[s])?x:r)[s],p=y&&f?a(l,o):h&&"function"==typeof l?a(Function.call,l):l,x&&i(x,s,l,n&u.U),b[s]!=l&&c(b,s,p),h&&g[s]!=l&&(g[s]=l)};o.core=e,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,n.exports=u},35:function(n,t){var r={}.toString;n.exports=function(n){return r.call(n).slice(8,-1)}},39:function(n,t,r){var o=r(28),e=Math.min;n.exports=function(n){return n>0?e(o(n),9007199254740991):0}},41:function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},46:function(n,t,r){var o=r(23);n.exports=function(n){return Object(o(n))}},47:function(n,t,r){var o=r(60);n.exports=function(n,t,r){if(o(n),void 0===t)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,o){return n.call(t,r,o)};case 3:return function(r,o,e){return n.call(t,r,o,e)}}return function(){return n.apply(t,arguments)}}},48:function(n,t){n.exports=!1},60:function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},68:function(n,t,r){var o=r(35);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==o(n)?n.split(""):Object(n)}},69:function(n,t,r){n.exports=r(31)("native-function-to-string",Function.toString)},84:function(n,t,r){var o=r(21)("unscopables"),e=Array.prototype;null==e[o]&&r(22)(e,o,{}),n.exports=function(n){e[o][n]=!0}}}]);