(window.webpackJsonp=window.webpackJsonp||[]).push([[24,33],{194:function(t,a,r){},225:function(t,a,r){"use strict";r(194)},226:function(t,a,r){},268:function(t,a,r){"use strict";r.r(a);var p={name:"ApiPropAlert",props:{alert:{type:Object}}},s=(r(225),r(4)),e=Object(s.a)(p,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"api-prop-alert",class:"alert-"+t.alert.type},[r("div",{staticClass:"api-prop-alert__message prop-description"},["updated"===t.alert.type?r("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#information-fill",alt:"Prop updated information icon"}}):t._e(),t._v(" "),"deprecated"===t.alert.type?r("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#warning-fill",alt:"Prop deprecated warning icon"}}):t._e(),t._v("\n    "+t._s(t.alert.description)+"\n  ")],1)])}),[],!1,null,null,null);a.default=e.exports},294:function(t,a,r){"use strict";r(226)},367:function(t,a,r){"use strict";r.r(a);var p={name:"ApiProp",props:["apiData"],components:{ApiPropAlert:r(268).default}},s=(r(294),r(4)),e=Object(s.a)(p,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",t._l(t.apiData,(function(a,p){return r("div",{key:a.text,staticClass:"api-prop"},[r("cdr-row",{attrs:{gutter:"none"}},[a.alert?r("cdr-col",{attrs:{span:"12"}},[r("api-prop-alert",{attrs:{alert:a.alert}})],1):t._e(),t._v(" "),r("cdr-col",{attrs:{span:"12 4@sm"}},[r("div",{staticClass:"prop-wrap"},[r("p",{staticClass:"prop-name",attrs:{"aria-labelledby":"propName"+p}},[t._v(t._s(a.name))]),t._v(" "),r("p",{staticClass:"prop-label",attrs:{id:"propName"+p}},[t._v("name")])])]),t._v(" "),r("cdr-col",{attrs:{span:"12 4@sm"}},[r("div",{staticClass:"prop-wrap"},[r("p",{staticClass:"prop-type",attrs:{"aria-labelledby":"propType"+p}},[t._v(t._s(a.type))]),t._v(" "),r("p",{staticClass:"prop-label",attrs:{id:"propType1"}},[t._v("type")])])]),t._v(" "),r("cdr-col",{attrs:{span:"12 4@sm"}},[r("div",{staticClass:"prop-wrap"},[r("p",{staticClass:"prop-default",attrs:{"aria-labelledby":"propDefault"+p}},[t._v(t._s(a.default))]),t._v(" "),r("p",{staticClass:"prop-label",attrs:{id:"propDefault"+p}},[t._v("default")])])]),t._v(" "),r("cdr-col",{attrs:{span:"12"}},[r("p",{staticClass:"prop-description",attrs:{"aria-lable":"prop description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])],1)],1)})),0)}),[],!1,null,null,null);a.default=e.exports}}]);