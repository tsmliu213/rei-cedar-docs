(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{424:function(e,t,n){},597:function(e,t,n){var s=n(598),i=n(80),a=n(599),r=n(75);e.exports=function(e,t,n){e=r(e),t=i(t);var c=e.length,o=n=void 0===n?c:s(a(n),0,c);return(n-=t.length)>=0&&e.slice(n,o)==t}},598:function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},599:function(e,t,n){var s=n(600);e.exports=function(e){var t=s(e),n=t%1;return t==t?n?t-n:t:0}},600:function(e,t,n){var s=n(601);e.exports=function(e){return e?(e=s(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},601:function(e,t,n){var s=n(23),i=n(24),a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}},602:function(e,t,n){"use strict";n(424)},633:function(e,t,n){"use strict";n.r(t);var s=n(332),i=n(271),a=n.n(i),r=n(597),c=n.n(r),o={name:"TokensSpace",props:{type:{type:String,default:""}},data:()=>({isInset:!1}),computed:{hasContent(){return 0!==Object.keys(this.spaceTokensByType).length},allSpaceTokens(){const e=[];Object.keys(s).forEach(t=>{e.push(...s[t].spacing)});return a()(e,["attributes.deprecated",!1])},spaceTokensByType(){return"inset"===this.type?(this.isInset=!0,a()(this.allSpaceTokens,e=>e.name.includes("inset")&&!e.name.includes("squish")&&!e.name.includes("stretch"))):"inset-squish"===this.type?(this.isInset=!0,a()(this.allSpaceTokens,e=>e.name.includes("inset")&&e.name.includes("squish")&&!(c()(e.name,"top-bottom")||c()(e.name,"left-right")))):"inset-stretch"===this.type?(this.isInset=!0,a()(this.allSpaceTokens,e=>e.name.includes("inset")&&e.name.includes("stretch")&&!(c()(e.name,"top-bottom")||c()(e.name,"left-right")))):a()(this.allSpaceTokens,e=>!e.name.includes("inset"))}},methods:{insetPieces(e){return"inset-squish"===this.type?a()(this.allSpaceTokens,t=>t.name.includes(e)&&t.name.includes("squish")&&(c()(t.name,"top-bottom")||c()(t.name,"left-right"))):"inset-stretch"===this.type?a()(this.allSpaceTokens,t=>t.name.includes(e)&&t.name.includes("stretch")&&(c()(t.name,"top-bottom")||c()(t.name,"left-right"))):[]}}},u=(n(602),n(12)),l=Object(u.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasContent?n("div",[e._t("default"),e._v(" "),e._l(e.spaceTokensByType,(function(t){return n("div",{staticClass:"stack-2"},[n("tokens-space-example",{attrs:{name:t.name,"is-inset":e.isInset}}),e._v(" "),n("cdr-table",{staticClass:"space-token-table"},[n("tbody",[n("tr",[n("td",[e.insetPieces(t.name).length>0?n("b",[e._v(e._s(t.name))]):n("span",[e._v(e._s(t.name))])]),e._v(" "),n("td",[e._v(e._s(t.value))])]),e._v(" "),e._l(e.insetPieces(t.name),(function(t){return n("tr",[n("td",[e._v(e._s(t.name)+" ")]),e._v(" "),n("td",[e._v(e._s(t.value))])])}))],2)])],1)}))],2):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);