(window.webpackJsonp=window.webpackJsonp||[]).push([[16,25,32,33,34],{183:function(t,a,e){},209:function(t,a,e){},210:function(t,a,e){"use strict";e(183)},211:function(t,a,e){},212:function(t,a,e){},243:function(t,a,e){"use strict";e.r(a);var s={name:"ApiPropAlert",props:{alert:{type:Object}}},i=(e(210),e(4)),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"api-prop-alert",class:"alert-"+t.alert.type},[e("div",{staticClass:"api-prop-alert__message prop-description"},["updated"===t.alert.type?e("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#information-fill",alt:"Prop updated information icon"}}):t._e(),t._v(" "),"deprecated"===t.alert.type?e("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#warning-fill",alt:"Prop deprecated warning icon"}}):t._e(),t._v("\n    "+t._s(t.alert.description)+"\n  ")],1)])}),[],!1,null,null,null);a.default=r.exports},267:function(t,a,e){"use strict";e(209)},268:function(t,a,e){"use strict";e(211)},269:function(t,a,e){"use strict";e(212)},329:function(t,a,e){"use strict";e.r(a);var s={name:"ApiEvent",props:["apiData"]},i=(e(267),e(4)),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.apiData,(function(a,s){return e("div",{key:a.text,staticClass:"api-event"},[e("cdr-grid",{staticClass:"api-event__grid",attrs:{gutter:"none"}},[e("div",{staticClass:"api-event__grid--item"},[a.name?e("div",[e("p",{staticClass:"event-name",attrs:{"aria-labelledby":"eventName"+s}},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"event-label",attrs:{id:"eventName"+s}},[t._v("name")])]):t._e()]),t._v(" "),e("div",{staticClass:"api-event__grid--item"},[a.arguments?e("div",[e("p",{staticClass:"event-type",attrs:{"aria-labelledby":"eventType"+s}},[t._v(t._s(a.arguments))]),t._v(" "),e("p",{staticClass:"event-label",attrs:{id:"eventType"+s}},[t._v("arguments")])]):t._e()]),t._v(" "),e("div",{staticClass:"api-event__grid--full"},[e("p",{staticClass:"event-description",attrs:{"aria-lable":"event description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])])],1)})),0)}),[],!1,null,null,null);a.default=r.exports},330:function(t,a,e){"use strict";e.r(a);var s={name:"ApiProp",props:["apiData"],components:{ApiPropAlert:e(243).default}},i=(e(268),e(4)),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.apiData,(function(a,s){return e("div",{key:a.text,staticClass:"api-prop"},[e("cdr-grid",{staticClass:"api-prop__grid",attrs:{gutter:"none"}},[a.alert?e("div",{staticClass:"api-prop__grid--full"},[e("api-prop-alert",{attrs:{alert:a.alert}})],1):t._e(),t._v(" "),e("div",{staticClass:"api-prop__grid--item"},[e("div",{staticClass:"prop-wrap"},[e("p",{staticClass:"prop-name",attrs:{"aria-labelledby":"propName"+s}},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"prop-label",attrs:{id:"propName"+s}},[t._v("name")])])]),t._v(" "),e("div",{staticClass:"api-prop__grid--item"},[e("div",{staticClass:"prop-wrap"},[e("p",{staticClass:"prop-type",attrs:{"aria-labelledby":"propType"+s}},[t._v(t._s(a.type))]),t._v(" "),e("p",{staticClass:"prop-label",attrs:{id:"propType1"}},[t._v("type")])])]),t._v(" "),e("div",{staticClass:"api-prop__grid--item"},[e("div",{staticClass:"prop-wrap"},[e("p",{staticClass:"prop-default",attrs:{"aria-labelledby":"propDefault"+s}},[t._v(t._s(a.default))]),t._v(" "),e("p",{staticClass:"prop-label",attrs:{id:"propDefault"+s}},[t._v("default")])])]),t._v(" "),e("div",{staticClass:"api-prop__grid--full"},[e("p",{staticClass:"prop-description",attrs:{"aria-lable":"prop description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])])],1)})),0)}),[],!1,null,null,null);a.default=r.exports},331:function(t,a,e){"use strict";e.r(a);var s={name:"ApiEvent",props:["apiData","slotsGettingStartedLink"]},i=(e(269),e(4)),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.slotsGettingStartedLink?e("p",[t._v("Find more information about using Slots in the article "),e("cdr-link",{attrs:{href:t.$withBase("/getting-started/as-a-developer/#add-content-using-slots")}},[t._v("Getting Started as a Developer.")])],1):t._e(),t._v(" "),t._l(t.apiData,(function(a,s){return e("div",{key:a.text,staticClass:"api-slot"},[e("cdr-grid",{staticClass:"api-slot__grid",attrs:{gutter:"none"}},[a.alert?e("div",[e("api-prop-alert",{attrs:{alert:a.alert}})],1):t._e(),t._v(" "),e("div",[e("div",[e("p",{staticClass:"slot-name",attrs:{"aria-labelledby":"slotName"+s}},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"slot-label",attrs:{id:"slotName"+s}},[t._v("name ")])])]),t._v(" "),e("div",[e("p",{staticClass:"slot-description",attrs:{"aria-label":"slot description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])])],1)}))],2)}),[],!1,null,null,null);a.default=r.exports},522:function(t,a,e){"use strict";e.r(a);var s=e(329),i=e(330),r=e(331),l={name:"CdrDocApi",functional:!0,props:{type:{type:String,required:!0,validator:t=>["prop","slot","event","installation"].indexOf(t)>-1},apiData:{type:Array,required:!1},slotsGettingStartedLink:{type:Boolean,default:!0}},render:function(t,a){return t(function(){let t;switch(a.props.type){case"prop":t=i.default;break;case"slot":t=r.default;break;case"event":t=s.default}return t}(),{props:a.props})}},p=e(4),n=Object(p.a)(l,void 0,void 0,!1,null,null,null);a.default=n.exports}}]);