(window.webpackJsonp=window.webpackJsonp||[]).push([[25,33],{183:function(t,a,p){},210:function(t,a,p){"use strict";p(183)},211:function(t,a,p){},243:function(t,a,p){"use strict";p.r(a);var r={name:"ApiPropAlert",props:{alert:{type:Object}}},s=(p(210),p(4)),i=Object(s.a)(r,(function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("div",{staticClass:"api-prop-alert",class:"alert-"+t.alert.type},[p("div",{staticClass:"api-prop-alert__message prop-description"},["updated"===t.alert.type?p("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#information-fill",alt:"Prop updated information icon"}}):t._e(),t._v(" "),"deprecated"===t.alert.type?p("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#warning-fill",alt:"Prop deprecated warning icon"}}):t._e(),t._v("\n    "+t._s(t.alert.description)+"\n  ")],1)])}),[],!1,null,null,null);a.default=i.exports},268:function(t,a,p){"use strict";p(211)},330:function(t,a,p){"use strict";p.r(a);var r={name:"ApiProp",props:["apiData"],components:{ApiPropAlert:p(243).default}},s=(p(268),p(4)),i=Object(s.a)(r,(function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("div",t._l(t.apiData,(function(a,r){return p("div",{key:a.text,staticClass:"api-prop"},[p("cdr-grid",{staticClass:"api-prop__grid",attrs:{gutter:"none"}},[a.alert?p("div",{staticClass:"api-prop__grid--full"},[p("api-prop-alert",{attrs:{alert:a.alert}})],1):t._e(),t._v(" "),p("div",{staticClass:"api-prop__grid--item"},[p("div",{staticClass:"prop-wrap"},[p("p",{staticClass:"prop-name",attrs:{"aria-labelledby":"propName"+r}},[t._v(t._s(a.name))]),t._v(" "),p("p",{staticClass:"prop-label",attrs:{id:"propName"+r}},[t._v("name")])])]),t._v(" "),p("div",{staticClass:"api-prop__grid--item"},[p("div",{staticClass:"prop-wrap"},[p("p",{staticClass:"prop-type",attrs:{"aria-labelledby":"propType"+r}},[t._v(t._s(a.type))]),t._v(" "),p("p",{staticClass:"prop-label",attrs:{id:"propType1"}},[t._v("type")])])]),t._v(" "),p("div",{staticClass:"api-prop__grid--item"},[p("div",{staticClass:"prop-wrap"},[p("p",{staticClass:"prop-default",attrs:{"aria-labelledby":"propDefault"+r}},[t._v(t._s(a.default))]),t._v(" "),p("p",{staticClass:"prop-label",attrs:{id:"propDefault"+r}},[t._v("default")])])]),t._v(" "),p("div",{staticClass:"api-prop__grid--full"},[p("p",{staticClass:"prop-description",attrs:{"aria-lable":"prop description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])])],1)})),0)}),[],!1,null,null,null);a.default=i.exports}}]);