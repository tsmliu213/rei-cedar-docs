(window.webpackJsonp=window.webpackJsonp||[]).push([[11,40],{183:function(t,e,n){var r=n(184),o=n(185),u=Object.prototype.hasOwnProperty,c=o((function(t,e,n){u.call(t,n)?t[n].push(e):r(t,n,[e])}));t.exports=c},184:function(t,e,n){var r=n(51);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},185:function(t,e,n){var r=n(186),o=n(187),u=n(50),c=n(2);t.exports=function(t,e){return function(n,f){var s=c(n)?r:o,a=e?e():{};return s(n,t,u(f,2),a)}}},186:function(t,e){t.exports=function(t,e,n,r){for(var o=-1,u=null==t?0:t.length;++o<u;){var c=t[o];e(r,c,n(c),t)}return r}},187:function(t,e,n){var r=n(188);t.exports=function(t,e,n,o){return r(t,(function(t,r,u){e(o,t,n(t),u)})),o}},195:function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},197:function(t,e,n){},211:function(t,e,n){var r=n(228)("toUpperCase");t.exports=r},228:function(t,e,n){var r=n(229),o=n(195),u=n(231),c=n(49);t.exports=function(t){return function(e){e=c(e);var n=o(e)?u(e):void 0,f=n?n[0]:e.charAt(0),s=n?r(n,1).join(""):e.slice(1);return f[t]()+s}}},229:function(t,e,n){var r=n(230);t.exports=function(t,e,n){var o=t.length;return n=void 0===n?o:n,!e&&n>=o?t:r(t,e,n)}},230:function(t,e){t.exports=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var u=Array(o);++r<o;)u[r]=t[r+e];return u}},231:function(t,e,n){var r=n(232),o=n(195),u=n(233);t.exports=function(t){return o(t)?u(t):r(t)}},232:function(t,e){t.exports=function(t){return t.split("")}},233:function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",u="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+r+"|"+o+")"+"?",a="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[u,c,f].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),i="(?:"+[u+r+"?",r,c,f,n].join("|")+")",p=RegExp(o+"(?="+o+")|"+i+a,"g");t.exports=function(t){return t.match(p)||[]}},234:function(t,e,n){var r=n(49),o=n(211);t.exports=function(t){return o(r(t).toLowerCase())}},237:function(t,e,n){"use strict";n(197)},270:function(t,e,n){"use strict";n.r(e);var r={name:"TypeColor",props:{prop:Object,description:Boolean}},o=(n(237),n(4)),u=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{width:"64"}},[n("div",{staticClass:"color-example",style:{backgroundColor:t.prop.value}})]),t._v(" "),n("td",[n("cdr-text",[n("b",[t._v(t._s(t.prop.name))])]),t._v(" "),t.prop.docs.description&&t.description?n("cdr-text",[t._v(t._s(t.prop.docs.description))]):t._e()],1),t._v(" "),n("td",{attrs:{width:"160"}},[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);e.default=u.exports},273:function(t,e,n){"use strict";var r={"cdr-text":"cdr-text_9-0-0"},o={name:"CdrText",props:{tag:{type:String,default:"p"}},data:()=>({s:r}),computed:{baseClass:()=>"cdr-text"},render(){return(0,arguments[0])(this.tag,{class:this.s[this.baseClass]},[this.$slots.default])}};e.a=o},348:function(t,e,n){},489:function(t,e,n){"use strict";n(348)},539:function(t,e,n){"use strict";n.r(e);var r=n(265),o=n(270),u=n(183),c=n.n(u),f=n(206),s=n.n(f),a=n(234),i=n.n(a),p=n(273),d={name:"TokensColor",components:{TokenTypeColor:o.default,CdrText:p.a},computed:{colorTokensByType(){const t=[];Object.keys(r).forEach(e=>{t.push(...r[e].colors)});const e=s()(t,["attributes.deprecated",!1]);return c()(e,"docs.type")}},methods:{makeCapital:t=>i()(t)}},l=(n(489),n(4)),v=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.colorTokensByType,(function(e,r){return[n("cdr-text",{attrs:{tag:"h2"}},[t._v(t._s(t.makeCapital(r))+" Color Tokens")]),t._v(" "),n("cdr-table",{attrs:{striped:""}},[n("tbody",[t._l(e,(function(t){return[n("token-type-color",{attrs:{prop:t,description:""}})]}))],2)])]}))],2)}),[],!1,null,null,null);e.default=v.exports}}]);