(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{298:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(37);function c(e){const t="àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;",n=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(n,e=>"aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------".charAt(t.indexOf(e))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},434:function(e,t,n){},618:function(e,t,n){"use strict";n(434)},643:function(e,t,n){"use strict";n.r(t);n(37);var c=n(298),r={name:"CdrDocTableOfContentsShell",props:{appendedNavItems:{type:Array,default:function(){return[]}},tabName:{type:[String,Boolean],default:!1},parentSelector:{type:String,default:"h1"},childSelector:{type:String,default:"h2"}},data:()=>({links:[{href:"#",text:"Click Me"}]}),computed:{parentSelectors(){return".cdr-doc-table-of-contents-shell "+this.parentSelector},childSelectors(){return".cdr-doc-table-of-contents-shell "+this.childSelector}},mounted(){this.createAnchorsFromContent(),this.$on("update-toc",()=>{this.createAnchorsFromContent()})},methods:{createAnchorsFromContent(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector);const e=`${this.parentSelectors}, ${this.childSelectors}`,t=document.querySelectorAll(e),n=[],r=[];for(let e=0;e<t.length;e++){const o=t[e];let s=o.getAttribute("id");const l=o.textContent.replace(/^# /,"");if(null===s&&(s=Object(c.a)(l)),s.match(/^[0-9]+/)&&(s="_"+s),-1!==r.indexOf(s)){const e=r.filter(e=>e.replace(/-[0-9]*$/,"")===s).length;s=`${s}-${e+1}`}o.setAttribute("id",s);const a={href:"#"+s,text:l};o.matches(this.childSelectors)&&(a.isChild=!0),r.push(s),n.push(a)}this.links=n}}},o=(n(618),n(12)),s=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"cdr-doc-table-of-contents-shell"},[t("cdr-doc-local-anchor-nav",{attrs:{"tab-name":this.tabName,"parent-selectors":this.parentSelectors,"child-selectors":this.childSelectors,links:this.links,"appended-items":this.appendedNavItems}}),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.default=s.exports}}]);