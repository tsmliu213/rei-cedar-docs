(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{314:function(t,n,e){"use strict";var i=e(168),c=e(167),r=e(7),l=e(25),s=e(99),a=e(169),u=e(14),o=e(170),p=e(67),h=e(3),d=[].push,f=Math.min,v=!h((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(l(this)),r=void 0===e?4294967295:e>>>0;if(0===r)return[];if(void 0===t)return[i];if(!c(t))return n.call(i,t,r);for(var s,a,u,o=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,h+"g");(s=p.call(v,i))&&!((a=v.lastIndex)>f&&(o.push(i.slice(f,s.index)),s.length>1&&s.index<i.length&&d.apply(o,s.slice(1)),u=s[0].length,f=a,o.length>=r));)v.lastIndex===s.index&&v.lastIndex++;return f===i.length?!u&&v.test("")||o.push(""):o.push(i.slice(f)),o.length>r?o.slice(0,r):o}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var c=l(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,c,e):i.call(String(c),n,e)},function(t,c){var l=e(i,t,this,c,i!==n);if(l.done)return l.value;var p=r(t),h=String(this),d=s(p,RegExp),g=p.unicode,x=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),b=new d(v?p:"^(?:"+p.source+")",x),m=void 0===c?4294967295:c>>>0;if(0===m)return[];if(0===h.length)return null===o(b,h)?[h]:[];for(var I=0,O=0,w=[];O<h.length;){b.lastIndex=v?O:0;var _,y=o(b,v?h:h.slice(O));if(null===y||(_=f(u(b.lastIndex+(v?0:O)),h.length))===I)O=a(h,O,g);else{if(w.push(h.slice(I,O)),w.length===m)return w;for(var j=1;j<=y.length-1;j++)if(w.push(y[j]),w.length===m)return w;O=I=_}}return w.push(h.slice(I)),w}]}),!v)},369:function(t,n,e){},460:function(t,n,e){"use strict";var i=e(369);e.n(i).a},534:function(t,n,e){"use strict";e.r(n);e(166),e(173),e(69),e(65),e(314);var i=e(73),c={name:"TypeInset",props:{prop:Object},computed:{pad:function(){var t=this.prop.value;if(t.indexOf(" ")<=0)return"".concat(t," ").concat(t);if(t.indexOf("*")>0){var n=t.split(") "),e=Object(i.a)(n,2),c=e[0],r=e[1];return"".concat(c,") ").concat(r)}var l=t.split(" "),s=Object(i.a)(l,2),a=s[0],u=s[1];return"".concat(a," ").concat(u)},inset:function(){var t=this.prop.value;if(t.indexOf(" ")<=0)return this.getInset(t,t,"-".concat(t),"-".concat(t));if(t.indexOf("*")>0){var n=t.split(") "),e=Object(i.a)(n,2),c=e[0],r=e[1],l="".concat(c.slice(0,5),"-").concat(c.slice(5),")");return this.getInset("".concat(c,")"),r,l,"-".concat(r))}var s=t.split(" "),a=Object(i.a)(s,2),u=a[0],o=a[1];return this.getInset(u,o,"-".concat(u),"-".concat(o))}},methods:{getInset:function(t,n,e,i){return"inset ".concat(i," ").concat(e," 0 rgb(199, 220, 191), inset ").concat(n," ").concat(t," 0 rgb(199, 220, 191)")}}},r=(e(460),e(40)),l=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("td",[e("div",{staticClass:"inset-example",style:{boxShadow:t.inset,padding:t.pad}},[t._v("content")])]),t._v(" "),e("td",[t._v(t._s(t.prop.name))]),t._v(" "),e("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=l.exports}}]);