(window.webpackJsonp=window.webpackJsonp||[]).push([[16,24,31,32,33],{256:function(t,a,e){},287:function(t,a,e){},288:function(t,a,e){"use strict";e(256)},289:function(t,a,e){},290:function(t,a,e){},335:function(t,a,e){"use strict";e.r(a);var s={name:"ApiPropAlert",props:{alert:{type:Object}}},r=(e(288),e(12)),n=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"api-prop-alert",class:"alert-"+t.alert.type},[e("div",{staticClass:"api-prop-alert__message prop-description"},["updated"===t.alert.type?e("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#information-fill",alt:"Prop updated information icon"}}):t._e(),t._v(" "),"deprecated"===t.alert.type?e("cdr-icon",{staticClass:"api-prop-alert-icon",attrs:{use:"#warning-fill",alt:"Prop deprecated warning icon"}}):t._e(),t._v("\n    "+t._s(t.alert.description)+"\n  ")],1)])}),[],!1,null,null,null);a.default=n.exports},364:function(t,a,e){"use strict";e(287)},365:function(t,a,e){"use strict";e(289)},366:function(t,a,e){"use strict";e(290)},437:function(t,a,e){"use strict";e.r(a);var s={name:"ApiEvent",props:["apiData"]},r=(e(364),e(12)),n=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.apiData,(function(a,s){return e("div",{key:a.text,staticClass:"api-event"},[e("cdr-row",{attrs:{gutter:"none"}},[e("cdr-col",{attrs:{span:"12 6@sm"}},[a.name?e("div",[e("p",{staticClass:"event-name",attrs:{"aria-labelledby":"eventName"+s}},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"event-label",attrs:{id:"eventName"+s}},[t._v("name")])]):t._e()]),t._v(" "),e("cdr-col",{attrs:{span:"12 6@sm"}},[a.arguments?e("div",[e("p",{staticClass:"event-type",attrs:{"aria-labelledby":"eventType"+s}},[t._v(t._s(a.arguments))]),t._v(" "),e("p",{staticClass:"event-label",attrs:{id:"eventType"+s}},[t._v("arguments")])]):t._e()]),t._v(" "),e("cdr-col",{attrs:{span:"12"}},[e("p",{staticClass:"event-description",attrs:{"aria-lable":"event description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])],1)],1)})),0)}),[],!1,null,null,null);a.default=n.exports},438:function(t,a,e){"use strict";e.r(a);var s={name:"ApiProp",props:["apiData"],components:{ApiPropAlert:e(335).default}},r=(e(365),e(12)),n=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.apiData,(function(a,s){return e("div",{key:a.text,staticClass:"api-prop"},[e("cdr-row",{attrs:{gutter:"none"}},[a.alert?e("cdr-col",{attrs:{span:"12"}},[e("api-prop-alert",{attrs:{alert:a.alert}})],1):t._e(),t._v(" "),e("cdr-col",{attrs:{span:"12 4@sm"}},[e("div",{staticClass:"prop-wrap"},[e("p",{staticClass:"prop-name",attrs:{"aria-labelledby":"propName"+s}},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"prop-label",attrs:{id:"propName"+s}},[t._v("name")])])]),t._v(" "),e("cdr-col",{attrs:{span:"12 4@sm"}},[e("div",{staticClass:"prop-wrap"},[e("p",{staticClass:"prop-type",attrs:{"aria-labelledby":"propType"+s}},[t._v(t._s(a.type))]),t._v(" "),e("p",{staticClass:"prop-label",attrs:{id:"propType1"}},[t._v("type")])])]),t._v(" "),e("cdr-col",{attrs:{span:"12 4@sm"}},[e("div",{staticClass:"prop-wrap"},[e("p",{staticClass:"prop-default",attrs:{"aria-labelledby":"propDefault"+s}},[t._v(t._s(a.default))]),t._v(" "),e("p",{staticClass:"prop-label",attrs:{id:"propDefault"+s}},[t._v("default")])])]),t._v(" "),e("cdr-col",{attrs:{span:"12"}},[e("p",{staticClass:"prop-description",attrs:{"aria-lable":"prop description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])],1)],1)})),0)}),[],!1,null,null,null);a.default=n.exports},439:function(t,a,e){"use strict";e.r(a);var s={name:"ApiEvent",props:["apiData","slotsGettingStartedLink"]},r=(e(366),e(12)),n=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.slotsGettingStartedLink?e("p",[t._v("Find more information about using Slots in the article "),e("cdr-link",{attrs:{href:t.$withBase("/getting-started/as-a-developer/#add-content-using-slots")}},[t._v("Getting Started as a Developer.")])],1):t._e(),t._v(" "),t._l(t.apiData,(function(a,s){return e("div",{key:a.text,staticClass:"api-slot"},[e("cdr-row",{attrs:{gutter:"none"}},[e("cdr-col",{attrs:{span:"12"}},[e("div",[e("p",{staticClass:"slot-name",attrs:{"aria-labelledby":"slotName"+s}},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"slot-label",attrs:{id:"slotName"+s}},[t._v("name ")])])]),t._v(" "),e("cdr-col",{attrs:{span:"12"}},[e("p",{staticClass:"slot-description",attrs:{"aria-label":"slot description"}},[t._v("\n          "+t._s(a.description)+"\n        ")])])],1)],1)}))],2)}),[],!1,null,null,null);a.default=n.exports},705:function(t,a,e){"use strict";e.r(a);var s=e(437),r=e(438),n=e(439),i={name:"CdrDocApi",functional:!0,props:{type:{type:String,required:!0,validator:t=>["prop","slot","event","installation"].indexOf(t)>-1},apiData:{type:Array,required:!1},slotsGettingStartedLink:{type:Boolean,default:!0}},render:function(t,a){return t(function(){let t;switch(a.props.type){case"prop":t=r.default;break;case"slot":t=n.default;break;case"event":t=s.default}return t}(),{props:a.props})}},l=e(12),p=Object(l.a)(i,void 0,void 0,!1,null,null,null);a.default=p.exports}}]);