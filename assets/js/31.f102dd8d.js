(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{266:function(e,o,t){},435:function(e,o,t){"use strict";o.__esModule=!0;var n=t(436);o.getParameters=n.getParameters},436:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(437);o.getParameters=function(e){return o=JSON.stringify(e),n.compressToBase64(o).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var o}},437:function(e,o,t){var n,r=function(){var e=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function r(e,o){if(!n[e]){n[e]={};for(var t=0;t<e.length;t++)n[e][e.charAt(t)]=t}return n[e][o]}var i={compressToBase64:function(e){if(null==e)return"";var t=i._compress(e,6,function(e){return o.charAt(e)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:i._decompress(e.length,32,function(t){return r(o,e.charAt(t))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return e(o+32)})+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,function(o){return e.charCodeAt(o)-32})},compressToUint8Array:function(e){for(var o=i.compress(e),t=new Uint8Array(2*o.length),n=0,r=o.length;n<r;n++){var c=o.charCodeAt(n);t[2*n]=c>>>8,t[2*n+1]=c%256}return t},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var t=new Array(o.length/2),n=0,r=t.length;n<r;n++)t[n]=256*o[2*n]+o[2*n+1];var c=[];return t.forEach(function(o){c.push(e(o))}),i.decompress(c.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,function(e){return t.charAt(e)})},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),i._decompress(e.length,32,function(o){return r(t,e.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return e(o)})},_compress:function(e,o,t){if(null==e)return"";var n,r,i,c={},s={},p="",a="",d="",l=2,u=3,h=2,f=[],m=0,_=0;for(i=0;i<e.length;i+=1)if(p=e.charAt(i),Object.prototype.hasOwnProperty.call(c,p)||(c[p]=u++,s[p]=!0),a=d+p,Object.prototype.hasOwnProperty.call(c,a))d=a;else{if(Object.prototype.hasOwnProperty.call(s,d)){if(d.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,_==o-1?(_=0,f.push(t(m)),m=0):_++;for(r=d.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r>>=1}else{for(r=1,n=0;n<h;n++)m=m<<1|r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r=0;for(r=d.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r>>=1}0==--l&&(l=Math.pow(2,h),h++),delete s[d]}else for(r=c[d],n=0;n<h;n++)m=m<<1|1&r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r>>=1;0==--l&&(l=Math.pow(2,h),h++),c[a]=u++,d=String(p)}if(""!==d){if(Object.prototype.hasOwnProperty.call(s,d)){if(d.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,_==o-1?(_=0,f.push(t(m)),m=0):_++;for(r=d.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r>>=1}else{for(r=1,n=0;n<h;n++)m=m<<1|r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r=0;for(r=d.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r>>=1}0==--l&&(l=Math.pow(2,h),h++),delete s[d]}else for(r=c[d],n=0;n<h;n++)m=m<<1|1&r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(r=2,n=0;n<h;n++)m=m<<1|1&r,_==o-1?(_=0,f.push(t(m)),m=0):_++,r>>=1;for(;;){if(m<<=1,_==o-1){f.push(t(m));break}_++}return f.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,function(o){return e.charCodeAt(o)})},_decompress:function(o,t,n){var r,i,c,s,p,a,d,l=[],u=4,h=4,f=3,m="",_=[],g={val:n(0),position:t,index:1};for(r=0;r<3;r+=1)l[r]=r;for(c=0,p=Math.pow(2,2),a=1;a!=p;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),c|=(s>0?1:0)*a,a<<=1;switch(c){case 0:for(c=0,p=Math.pow(2,8),a=1;a!=p;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),c|=(s>0?1:0)*a,a<<=1;d=e(c);break;case 1:for(c=0,p=Math.pow(2,16),a=1;a!=p;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),c|=(s>0?1:0)*a,a<<=1;d=e(c);break;case 2:return""}for(l[3]=d,i=d,_.push(d);;){if(g.index>o)return"";for(c=0,p=Math.pow(2,f),a=1;a!=p;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),c|=(s>0?1:0)*a,a<<=1;switch(d=c){case 0:for(c=0,p=Math.pow(2,8),a=1;a!=p;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),c|=(s>0?1:0)*a,a<<=1;l[h++]=e(c),d=h-1,u--;break;case 1:for(c=0,p=Math.pow(2,16),a=1;a!=p;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),c|=(s>0?1:0)*a,a<<=1;l[h++]=e(c),d=h-1,u--;break;case 2:return _.join("")}if(0==u&&(u=Math.pow(2,f),f++),l[d])m=l[d];else{if(d!==h)return null;m=i+i.charAt(0)}_.push(m),l[h++]=i+m.charAt(0),i=m,0==--u&&(u=Math.pow(2,f),f++)}}};return i}();void 0===(n=function(){return r}.call(o,t,o,e))||(e.exports=n)},438:function(e,o,t){"use strict";var n=t(266);t.n(n).a},453:function(e,o,t){"use strict";t.r(o);var n=t(435),r='import Vue from "vue";\nimport App from "./App";\n\nimport "@rei/cedar/dist/cdr-fonts.css";\nimport "@rei/cedar/dist/cedar.css";\n\nnew Vue({\nel: "#app",\ncomponents: { App },\ntemplate: "<App/>"\n});';function i(e,o,t){return'\n<template>\n  <div style="margin: 32px;">\n    '.concat(e.code,"\n  </div>\n</template>\n\n<script>\n  ").concat(function(e,o){return"\nimport { ".concat(e.components,' } from "@rei/cedar";\n\nexport default {\n  name: "App",\n  components: {\n    ').concat(e.components,"\n  },\n  data() {\n    return ").concat(o?JSON.stringify(o):"{}","\n  }\n};")}(e,o),"\n<\/script>\n\n<style>\n  ").concat(e.styleTag||"","\n</style>")}var c={name:"CdrDocCodeSnippet",props:{copyButton:{default:!0,type:Boolean},lineNumbers:{default:!0,type:Boolean},maxHeight:{default:!0,type:Boolean},repositoryHref:{default:!1,type:[String,Boolean]},sandboxData:{default:!1,type:[Object,Boolean]},sandboxHref:{default:!1,type:[String,Boolean]},codeToggle:{default:!1,type:Boolean},hideCode:{default:!1,type:Boolean},model:{type:Object,default:function(){}}},data:function(){return{copied:!1,copyError:!1,copyNotSupported:!1,codeHidden:!1,hideCodeToggleText:"Hide code",repositoryRoot:"https://github.com/rei/rei-cedar/tree/19.02.1"}},created:function(){this.codeHidden=this.hideCode,this.setCodeToggleText()},computed:{sandboxHrefComputed:function(){return this.sandboxHref||function(e,o){if(!e.components)return!1;var t,c="Cedar Example Sandbox",s={files:{"index.js":{content:r},"App.vue":{content:i(e,o)},"package.json":{content:{name:c,description:"https://rei.github.io/rei-cedar-docs/",dependencies:{"@rei/cedar":"^2.0.0-alpha.0",lodash:"^4.17.4",vue:"^2.5.22"}}},"index.html":{content:(t=c,'<!DOCTYPE html>\n  <html>\n\n  <head>\n  \t<meta charset="utf-8">\n  \t<meta name="viewport" content="width=device-width,initial-scale=1.0">\n  \t<title>'.concat(t,'</title>\n  \t<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed" rel="stylesheet">\n  </head>\n  \n  <body>\n  \t<div id="app"></div>\n  </body>\n  \n  </html>'))}}};return"https://codesandbox.io/api/v1/sandboxes/define?parameters=".concat(Object(n.getParameters)(s))}(this.sandboxData,this.model)}},methods:{setCodeToggleText:function(){this.hideCodeToggleText=this.codeHidden?"Show code":"Hide code"},toggleCodeDisplay:function(){this.codeHidden=!this.codeHidden,this.setCodeToggleText()},copyToClipBoard:function(){var e=this.$refs.source.querySelector("code"),o=document.createElement("textarea");o.style.height="0",o.style.width="0",o.style.position="absolute",o.style.left="-99999px",o.tabIndex=-1,this.$refs.codeWrap.appendChild(o),o.textContent=e.textContent,o.select();try{document.execCommand("copy")?this.triggerCopySuccess():this.triggerCopyError()}catch(e){this.triggerCopyNotSupported()}this.$refs.codeWrap.removeChild(o)},triggerCopySuccess:function(){var e=this;this.copied=!0,this.copyError=!1,this.copyNotSupported=!1,setTimeout(function(){e.copied=!1},2e3)},triggerCopyError:function(){this.copied=!1,this.copyError=!0,this.copyNotSupported=!1},triggerCopyNotSupported:function(){this.copied=!1,this.copyError=!1,this.copyNotSupported=!0}}},s=(t(438),t(2)),p=Object(s.a)(c,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"cdr-doc-code-snippet",class:{"cdr-doc-code-snippet--show-copied-notification":e.copied,"cdr-doc-code-snippet--no-line-numbers":!e.lineNumbers,"cdr-doc-code-snippet--code-hidden":e.codeHidden,"cdr-doc-code-snippet--no-max-height":!e.maxHeight}},[e.copyButton?t("div",{staticClass:"cdr-doc-code-snippet__actions"},[t("div",{staticClass:"cdr-doc-code-snippet__copy-action cdr-doc-code-snippet__action",on:{click:e.copyToClipBoard}},[t("button",{staticClass:"cdr-doc-code-snippet__copy-button"},[t("img",{staticClass:"cdr-doc-code-snippet__action-icon",attrs:{src:e.$withBase("/Copy@2x.png"),alt:"Copy to clipboard"}})]),e._v(" "),t("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover"},[e._v("\n        Copy to clipboard\n      ")]),e._v(" "),t("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--copied-notification",attrs:{"aria-live":"polite"}},[e.copied?t("span",{staticClass:"cdr-doc-code-snippet__tooltip-message"},[e._v("\n          Copied!\n        ")]):e._e(),e._v(" "),e.copyError?t("span",{staticClass:"cdr-doc-code-snippet__tooltip-message"},[e._v("\n          Could not copy to clipboard.\n        ")]):e._e(),e._v(" "),e.copyNotSupported?t("span",{staticClass:"cdr-doc-code-snippet__tooltip-message"},[e._v("\n          This browser does not support automatic copying to clipboard.\n        ")]):e._e()])]),e._v(" "),t("div",{staticClass:"cdr-doc-code-snippet__action-wrapper"},[e.repositoryHref?t("a",{staticClass:"cdr-doc-code-snippet__action",attrs:{href:e.repositoryRoot+e.repositoryHref,target:"_blank",rel:"noopener noreferrer"}},[t("img",{staticClass:"cdr-doc-code-snippet__action-icon",attrs:{src:e.$withBase("/GitHub@2x.png"),alt:"View source in repository"}})]):e._e(),e._v(" "),t("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover"},[e._v("\n        View in repository\n      ")])]),e._v(" "),e.sandboxHrefComputed?t("div",{staticClass:"cdr-doc-code-snippet__action-wrapper"},[t("a",{staticClass:"cdr-doc-code-snippet__action",attrs:{href:e.sandboxHrefComputed,target:"_blank",rel:"noopener noreferrer"}},[t("img",{staticClass:"cdr-doc-code-snippet__action-icon",attrs:{src:e.$withBase("/CodeSandbox@2x.png"),alt:"View in code sandbox"}})]),e._v(" "),t("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover"},[e._v("\n        View in sandbox\n      ")])]):e._e(),e._v(" "),e.codeToggle?t("button",{staticClass:"cdr-doc-snippet__hide-code-toggle",on:{click:e.toggleCodeDisplay}},[e._v(e._s(e.hideCodeToggleText))]):e._e()]):e._e(),e._v(" "),t("div",{ref:"codeWrap",staticClass:"cdr-doc-code-snippet__code-wrap"},[t("div",{ref:"source",staticClass:"cdr-doc-code-snippet__code"},[e._t("default")],2)])])},[],!1,null,null,null);o.default=p.exports}}]);