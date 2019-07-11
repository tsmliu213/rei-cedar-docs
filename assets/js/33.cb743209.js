(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,o){var a=o(33),n=o(24),r=o(6);e.exports=function(e,t){var o=(n.Object||{})[e]||Object[e],c={};c[e]=t(o),a(a.S+a.F*r(function(){o(1)}),"Object",c)}},274:function(e,t,o){},440:function(e,t,o){"use strict";var a=o(274);o.n(a).a},467:function(e,t,o){"use strict";o.r(t);var a=o(215),n=(o(36),o(88),o(195)),r=(o(82),{name:"CdrDocExampleCodePair",props:{backgroundToggle:{type:Boolean,default:!0},backgroundColors:{type:Object,default:function(){return{}}},backgroundColor:{type:String,default:"light"},interactive:{type:Boolean,default:!0},label:{type:[String,Boolean],default:!1},showExampleLabels:{type:Boolean,default:!0},copyButton:{default:!0,type:Boolean},lineNumbers:{default:!0,type:Boolean},codeMaxHeight:{default:!1,type:Boolean},repositoryHref:{default:!1,type:[String,Boolean]},sandboxHref:{default:!1,type:[String,Boolean]},sandboxData:{default:!1,type:[Object,Boolean]},sandboxTitle:{default:!1,type:[String,Boolean]},codeToggle:{default:!0,type:Boolean},hideCode:{default:!0,type:Boolean},model:{type:Object,default:function(){}}},data:function(){return{exampleCount:0,backgroundToggleStates:{},templateSources:{},slotNames:[]}},computed:{instanceId:function(){return this._uid},sandboxCode:function(){var e=this;return this.slotNames.map(function(t){return e.templateSources[t]}).join("\n<br>\n")}},beforeMount:function(){var e=this;for(var t in this.$slots)this.backgroundColors[t]?this.$set(this.backgroundToggleStates,t,this.backgroundColors[t]):this.$set(this.backgroundToggleStates,t,this.backgroundColor);this.slotNames=Object.keys(this.$slots),this.exampleCount=Object.keys(this.$slots).length;var o=function(t){var o=e.extractCodeNodeFromVnodeTree(e.$slots[t][0]),r=e.getStoredTemplateSourceForExample(t,o),c=e.model;e.$options.components["cdr-doc-html-example-".concat(t,"-").concat(e.instanceId)]=Object(a.a)({data:function(){return Object(a.a)({},c)}},n.a.compile("<div>".concat(r,"</div>")))};for(var r in this.$slots)o(r)},methods:{getStoredTemplateSourceForExample:function(e,t){var o=this.templateSources[e];return o||(o=this.extractTextFromVnode(t,""),this.templateSources[e]=o),o},extractTextFromVnode:function(e,t){var o=this,a=t;if(e.text)a+=e.text;else{if(!e.children)return"";e.children.forEach(function(e){a+=o.extractTextFromVnode(e,"")})}return a},extractCodeNodeFromVnodeTree:function(e){var t=this,o=!1;return"code"===e.tag?o=e:e.children&&e.children.some(function(e){return!1!==(o=t.extractCodeNodeFromVnodeTree(e))}),o}}}),c=(o(440),o(2)),d=Object(c.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cdr-doc-example-code-pair",class:{"cdr-doc-example-code-pair--not-interactive":!e.interactive}},[e._l(e.$slots,function(t,a){return o("div",{staticClass:"cdr-doc-example-code-pair__item",class:"cdr-doc-example-code-pair__item-background--"+e.backgroundToggleStates[a]},[e.backgroundToggle?o("div",{staticClass:"cdr-doc-example-code-pair__item-background-toggle"},[o("label",{staticClass:"cdr-doc-item-background-toggle__button",class:{"cdr-doc-item-background-toggle__button--active":"light"===e.backgroundToggleStates[a]}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.backgroundToggleStates[a],expression:"backgroundToggleStates[slotLabel]"}],staticClass:"cdr-doc-item-background-toggle__input",attrs:{type:"radio",value:"light"},domProps:{checked:e._q(e.backgroundToggleStates[a],"light")},on:{change:function(t){return e.$set(e.backgroundToggleStates,a,"light")}}}),e._v("\n          Light\n      ")]),e._v(" "),o("label",{staticClass:"cdr-doc-item-background-toggle__button",class:{"cdr-doc-item-background-toggle__button--active":"dark"===e.backgroundToggleStates[a]}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.backgroundToggleStates[a],expression:"backgroundToggleStates[slotLabel]"}],staticClass:"cdr-doc-item-background-toggle__input",attrs:{type:"radio",value:"dark"},domProps:{checked:e._q(e.backgroundToggleStates[a],"dark")},on:{change:function(t){return e.$set(e.backgroundToggleStates,a,"dark")}}}),e._v("\n        Dark\n      ")])]):e._e(),e._v(" "),e.exampleCount>1&&e.showExampleLabels||e.label?o("span",{staticClass:"cdr-doc-example-code-pair__item-label"},[e._v("\n      "+e._s(e.label||a)+"\n    ")]):e._e(),e._v(" "),o("div",{staticClass:"cdr-doc-example-code-pair__item-example"},[o("cdr-doc-html-example-"+a+"-"+e.instanceId,{tag:"component"})],1)])}),e._v(" "),o("cdr-doc-code-snippet",{attrs:{"copy-button":e.copyButton,"line-numbers":e.lineNumbers,"max-height":e.codeMaxHeight,"repository-href":e.repositoryHref,"sandbox-href":e.sandboxHref,"sandbox-data":Object.assign({},e.sandboxData,{code:e.sandboxCode}),model:e.model,"code-toggle":e.codeToggle,"hide-code":e.hideCode}},[e._t(e.slotNames[0])],2)],2)},[],!1,null,null,null);t.default=d.exports},88:function(e,t,o){var a=o(46),n=o(57);o(107)("keys",function(){return function(e){return n(a(e))}})}}]);