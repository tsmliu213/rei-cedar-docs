(window.webpackJsonp=window.webpackJsonp||[]).push([[8,19,42,56],{226:function(t,n,e){var r=e(227),u=e(228),o=e(231),i=RegExp("['’]","g");t.exports=function(t){return function(n){return r(o(u(n).replace(i,"")),t,"")}}},227:function(t,n){t.exports=function(t,n,e,r){var u=-1,o=null==t?0:t.length;for(r&&o&&(e=t[++u]);++u<o;)e=n(e,t[u],u,t);return e}},228:function(t,n,e){var r=e(229),u=e(75),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=u(t))&&t.replace(o,r).replace(i,"")}},229:function(t,n,e){var r=e(230)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},230:function(t,n){t.exports=function(t){return function(n){return null==t?void 0:t[n]}}},231:function(t,n,e){var r=e(232),u=e(233),o=e(75),i=e(234);t.exports=function(t,n,e){return t=o(t),void 0===(n=e?void 0:n)?u(t)?i(t):r(t):t.match(n)||[]}},232:function(t,n){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},233:function(t,n){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},234:function(t,n){var e="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+e+"]",u="\\d+",o="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",a="[^\\ud800-\\udfff"+e+u+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+i+"|"+a+")",l="(?:"+s+"|"+a+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",d="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,f].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),v="(?:"+[o,c,f].join("|")+")"+d,_=RegExp([s+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,s,"$"].join("|")+")",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,s+p,"$"].join("|")+")",s+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,v].join("|"),"g");t.exports=function(t){return t.match(_)||[]}},247:function(t,n,e){var r=e(226)((function(t,n,e){return t+(e?"-":"")+n.toLowerCase()}));t.exports=r},248:function(t,n,e){var r=e(249),u=e(250),o=Object.prototype.hasOwnProperty,i=u((function(t,n,e){o.call(t,e)?t[e].push(n):r(t,e,[n])}));t.exports=i},249:function(t,n,e){var r=e(77);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},250:function(t,n,e){var r=e(251),u=e(252),o=e(76),i=e(3);t.exports=function(t,n){return function(e,a){var c=i(e)?r:u,f=n?n():{};return c(e,t,o(a,2),f)}}},251:function(t,n){t.exports=function(t,n,e,r){for(var u=-1,o=null==t?0:t.length;++u<o;){var i=t[u];n(r,i,e(i),t)}return r}},252:function(t,n,e){var r=e(253);t.exports=function(t,n,e,u){return r(t,(function(t,r,o){n(u,t,e(t),o)})),u}},253:function(t,n,e){var r=e(307),u=e(310)(r);t.exports=u},260:function(t,n,e){},271:function(t,n,e){var r=e(78),u=e(374),o=e(76),i=e(3);t.exports=function(t,n){return(i(t)?r:u)(t,o(n,3))}},275:function(t,n,e){"use strict";e.r(n);var r={name:"MixinToken"},u=e(12),o=Object(u.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td"),this._v(" "),n("td"),this._v(" "),n("td",[this._v("mixin")])])}],!1,null,null,null);n.default=o.exports},276:function(t,n,e){"use strict";e.r(n);var r=e(247),u=e.n(r),o={name:"MixinTypography",props:{prop:[Array,Object]},methods:{mixinStyles(t){let n={};return t.forEach(t=>{n[t.property]=t.value}),n}},computed:{mixinName(){return u()(this.prop[0].mixin)},isDeprecated(){return this.prop[0].attributes.deprecated}}},i=e(12),a=Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("td",[e("span",{style:t.mixinStyles(t.prop)},[t._v("Get outside with REI")])]),t._v(" "),e("td",[t.isDeprecated?e("p",[t._v("---DEPRECATED---")]):t._e(),t._v("\n    "+t._s(t.mixinName)+"\n  ")]),t._v(" "),e("td",[t._v("mixin")])])}),[],!1,null,null,null);n.default=a.exports},306:function(t,n,e){"use strict";e(260)},307:function(t,n,e){var r=e(308),u=e(38);t.exports=function(t,n){return t&&r(t,n,u)}},308:function(t,n,e){var r=e(309)();t.exports=r},309:function(t,n){t.exports=function(t){return function(n,e,r){for(var u=-1,o=Object(n),i=r(n),a=i.length;a--;){var c=i[t?a:++u];if(!1===e(o[c],c,o))break}return n}}},310:function(t,n,e){var r=e(39);t.exports=function(t,n){return function(e,u){if(null==e)return e;if(!r(e))return t(e,u);for(var o=e.length,i=n?o:-1,a=Object(e);(n?i--:++i<o)&&!1!==u(a[i],i,a););return e}}},311:function(t,n,e){},338:function(t,n,e){"use strict";e.r(n);var r={name:"TypeMixin",props:{prop:Object}},u=(e(306),e(12)),o=Object(u.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("td"),t._v(" "),e("td",[t._v(t._s(t.prop.name))]),t._v(" "),e("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=o.exports},339:function(t,n,e){"use strict";e.r(n);var r=e(270),u=e.n(r),o=e(275),i=e(276),a={name:"PropSorter",functional:!0,props:{prop:[Array,Object]},render:(t,n)=>t("text"===(u()(n.props.prop[0],"docs.example")?n.props.prop[0].docs.example:"token")?i.default:o.default,{...n},n.children)},c=e(12),f=Object(c.a)(a,void 0,void 0,!1,null,null,null);n.default=f.exports},374:function(t,n,e){var r=e(253);t.exports=function(t,n){var e=[];return r(t,(function(t,r,u){n(t,r,u)&&e.push(t)})),e}},375:function(t,n,e){"use strict";e(311)},448:function(t,n,e){"use strict";e.r(n);var r=e(450),u=e(339),o=e(338),i=e(248),a=e.n(i),c=e(271),f=e.n(c),s=e(270),p=e.n(s),l={name:"TokensCategory",props:{categoryData:Array,categoryTitle:String},components:{TokenSorter:r.default,MixinSorter:u.default,TypeMixin:o.default},computed:{typeData(){const t=a()(this.categoryData,"docs.type");return"colors"===this.categoryTitle?{text:t.text,background:t.background,border:t.border,icon:t.icon,...t}:t}},methods:{mixinTokens(t){const n=f()(t,t=>p()(t,"mixin"));return a()(n,"mixin")},otherTokens:t=>f()(t,t=>!p()(t,"mixin"))}},x=(e(375),e(12)),d=Object(x.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cdr-container "},[e("h3",{staticClass:"category-title"},[t._v(t._s(t.categoryTitle))]),t._v(" "),t._l(t.typeData,(function(n,r){return e("div",{key:r},["undefined"!==r?e("h4",{staticClass:"type-title"},[t._v(t._s(r))]):t._e(),t._v(" "),t.otherTokens(n).length>0?e("cdr-table",{staticClass:"prop-table",attrs:{"data-backstop":"capture"}},[e("tbody",{staticClass:"prop-tbody"},t._l(t.otherTokens(n),(function(t,n){return e("token-sorter",{key:n,attrs:{prop:t}})})),1)]):t._e(),t._v(" "),Object.keys(t.mixinTokens(n)).length>0?t._l(t.mixinTokens(n),(function(n,r){return e("cdr-table",{key:r,staticClass:"prop-table mixins",attrs:{"data-backstop":"capture"}},[e("tbody",{staticClass:"prop-tbody"},[e("mixin-sorter",{attrs:{prop:n}}),t._v(" "),t._l(n,(function(t,n){return e("type-mixin",{key:"mixin"+t.name+n,attrs:{prop:t}})}))],2)])})):t._e()],2)}))],2)}),[],!1,null,null,null);n.default=d.exports}}]);