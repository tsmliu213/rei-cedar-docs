(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{377:function(t,n,a){},480:function(t,n,a){"use strict";var s=a(2),r=a(41).find,c=a(106),o=a(21),e=!0,i=o("find");"find"in[]&&Array(1).find((function(){e=!1})),s({target:"Array",proto:!0,forced:e||!i},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c("find")},481:function(t,n,a){"use strict";var s=a(377);a.n(s).a},539:function(t,n,a){"use strict";a.r(n);a(480),a(70),a(65);var s={name:"CdrDocColorSwatch",props:{tokenName:{type:String,default:"$clean-slate"},showNames:{type:Boolean,default:!0}},computed:{tokenData:function(){var t=this;return tokens.foundations.find((function(n){return n.name===t.tokenName}))},hex:function(){return this.tokenData.value},rgb:function(){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}}},r=(a(481),a(40)),c=Object(r.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"cdr-doc-color-swatch"},[a("div",{staticClass:"cdr-doc-color-swatch__sample",style:{backgroundColor:t.hex}}),t._v(" "),t.showNames?a("span",{staticClass:"cdr-doc-color-swatch__token-name"},[t._v("\n    $"+t._s(t.tokenName)+"\n  ")]):t._e(),t._v(" "),a("div",{staticClass:"cdr-doc-color-swatch__values"},[a("span",{staticClass:"cdr-doc-color-swatch__hex"},[t._v("\n      "+t._s(t.hex)+"\n    ")]),t._v(" "),a("span",{staticClass:"cdr-doc-color-swatch__rgb"},[a("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[t._v("\n        r"+t._s(t.rgb.r)+"\n      ")]),t._v(" "),a("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[t._v("\n        g"+t._s(t.rgb.g)+"\n      ")]),t._v(" "),a("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[t._v("\n        b"+t._s(t.rgb.b)+"\n      ")])])])])}),[],!1,null,null,null);n.default=c.exports}}]);