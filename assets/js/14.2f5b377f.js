(window.webpackJsonp=window.webpackJsonp||[]).push([[14,17,22,24,31,55],{154:function(t,e,s){},164:function(t,e,s){"use strict";s.d(e,"b",(function(){return c})),s.d(e,"c",(function(){return l})),s.d(e,"a",(function(){return d})),s.d(e,"d",(function(){return h}));const i=/#.*$/,a=/\.(md|html)$/,n=/\/$/,r=/^(https?:|mailto:)/;function o(t){return t.replace(i,"").replace(a,"")}function c(t){return r.test(t)}function l(t){return/^mailto:/.test(t)}function d(t){if(c(t))return t;const e=t.match(i),s=e?e[0]:"",a=o(t);return n.test(a)?t:a+".html"+s}function h(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},166:function(t,e,s){},169:function(t,e,s){"use strict";s(154)},180:function(t,e,s){"use strict";s.r(e);var i=s(164),a={props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)}},methods:{isExternal:i.b,isMailto:i.c}},n=(s(169),s(4)),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isExternal(t.link)?s("a",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{href:t.link,target:t.isMailto(t.link)?null:"_blank",rel:t.isMailto(t.link)?null:"noopener noreferrer"}},[t._v(t._s(t.item.text))]):s("router-link",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{to:t.link,exact:"/"===t.link}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=r.exports},181:function(t,e,s){},190:function(t,e,s){"use strict";s(166)},202:function(t,e,s){"use strict";s.r(e);s(190);var i=s(4),a=Object(i.a)({},(function(t,e){var s=e._c;return s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),e._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])}),[],!0,null,null,null);e.default=a.exports},204:function(t,e,s){},207:function(t,e,s){"use strict";s(181)},208:function(t,e,s){},242:function(t,e,s){"use strict";s.r(e);var i=s(202),a=s(347),n=s(346),r=s(164),o=s(180),c={components:{OutboundLink:i.default,NavLink:o.default,CdrAccordion:a.a,CdrAccordionGroup:n.a},data:()=>({navGroup:[]}),created(){this.navSyncByPath()},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){let e=this.$page.path;const s=this.$router.options.routes,i=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(a=>{const n=t[a],r=i[a]&&i[a].label||n.lang;let o;return n.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,a),s.some(t=>t.path===o)||(o=a)),{text:r,link:o}})};return[...this.userNav,a]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(r.d)(t),{items:(t.items||[]).map(r.d)}))},groupLinks(){return this.userLinks.filter(t=>"links"===t.type)},singleLinks(){return this.userLinks.filter(t=>"link"===t.type)},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:"https://github.com/"+t},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const i=e[s];if(new RegExp(i,"i").test(t))return i}return"Source"}},methods:{showNavGroup(t){return t.toLowerCase().replace(" ","-")===this.$page.path.split("/")[1]},navToggle(t){if(this.navGroup[t])this.$set(this.navGroup,t,!1);else for(let e=0;e<this.navGroup.length;e+=1)(t===e||this.navGroup[e])&&this.$set(this.navGroup,e,t===e)},navSyncByPath(){this.userLinks.forEach((t,e)=>{let s=!1;this.showNavGroup(t.text)&&(s=!0),this.$set(this.navGroup,e,s)})}},watch:{$route(t,e){"/"!==t.path&&e.path.split("/")[1]!==t.path.split("/")[1]&&this.navSyncByPath()}}},l=(s(207),s(4)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.userLinks.length||t.repoLink?s("nav",{staticClass:"nav-links cdr-doc-nav-links"},[t.groupLinks.length>0?s("cdr-accordion-group",t._l(t.groupLinks,(function(e,i){return s("cdr-accordion",{key:e.text+"-"+i,staticClass:"nav-item cdr-accordion-nav",attrs:{id:e.text.replace(" ","-").toLowerCase(),level:"2",opened:t.navGroup[i]},on:{"accordion-toggle":function(e){return t.navToggle(i)}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n        "+t._s(e.text)+"\n      ")]},proxy:!0}],null,!0)},[t._v(" "),s("ul",{staticClass:"nav-dropdown cdr-doc-side-navigation__child-links"},t._l(e.items,(function(t){return s("li",{staticClass:"dropdown-item"},[s("nav-link",{staticClass:"cdr-doc-side-navigation__child-link",attrs:{item:t}})],1)})),0)])})),1):t._e(),t._v(" "),t._l(t.singleLinks,(function(t){return s("NavLink",{staticClass:"cdr-doc-side-navigation__parent-link",attrs:{item:t}})})),t._v(" "),t.repoLink?s("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),s("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=d.exports},249:function(t,e,s){"use strict";s(204)},252:function(t,e,s){"use strict";s(208)},306:function(t,e,s){},330:function(t,e,s){"use strict";s.r(e);var i={components:{NavLink:s(180).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},a=(s(249),s(4)),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"hero stack-4"},[t.data.heroImage?s("cdr-img",{staticClass:"hero__image",attrs:{src:t.$withBase(t.data.heroImage),ratio:"2-1",crop:"y-center x-center",cover:"",alt:"hero"}}):t._e(),t._v(" "),s("div",{staticClass:"hero__container align-center"},[s("cdr-text",{staticClass:"stack-1 hero-heading"},[t._v(t._s(t.data.heroTitle))]),t._v(" "),s("p",{staticClass:"hero__description"},[t._v(t._s(t.data.heroDescription))])],1)],1),t._v(" "),s("div",{staticClass:"container"},[s("cdr-grid",{staticClass:"home-grid stack-4"},[s("div",[s("cdr-img",{staticClass:"getting-started-image",attrs:{src:t.$withBase("home/gettingstarted_icon.png"),ratio:"16-9",cover:"",radius:"rounded"}})],1),t._v(" "),s("div",[s("div",[s("h2",{staticClass:"home-heading"},[t._v("Getting Started")]),t._v(" "),s("p",{staticClass:"home-subheading"},[t._v("Learn how to start using Cedar components with handy onboarding guides.")]),t._v(" "),s("cdr-grid",{staticClass:"home-grid--sub-grid",attrs:{gutter:"small"}},[s("div",[s("cdr-button",{attrs:{tag:"a",href:t.$withBase("/resources/for-designers/"),modifier:"secondary"}},[t._v("\n                View Designer Guide\n              ")])],1),t._v(" "),s("div",[s("cdr-button",{attrs:{tag:"a",href:t.$withBase("/resources/for-developers/"),modifier:"secondary"}},[t._v("\n                View Developer Guide\n              ")])],1)])],1)])]),t._v(" "),s("div",{staticClass:"home-hr stack-4",attrs:{role:"presentation"}}),t._v(" "),s("cdr-grid",{staticClass:"home-grid stack-4"},[s("div",[s("div",{staticClass:"align-center"},[s("cdr-img",{staticClass:"home-start-image",attrs:{src:t.$withBase("home/foundation_icon.png"),ratio:"square",radius:"rounded",cover:""}}),t._v(" "),s("h2",{staticClass:"home-heading"},[t._v("Foundation")]),t._v(" "),s("cdr-text",{staticClass:"stack-1"},[t._v("Build cohesive digital experiences with the basic design elements that comprise the Cedar visual language.")]),t._v(" "),s("cdr-link",{attrs:{href:t.$withBase("/foundation/color/"),modifier:"standalone"}},[t._v("Start with color")])],1)]),t._v(" "),s("div",[s("div",{staticClass:"align-center"},[s("cdr-img",{staticClass:"home-start-image",attrs:{src:t.$withBase("home/components_icon.png"),ratio:"square",radius:"rounded",cover:""}}),t._v(" "),s("h2",{staticClass:"home-heading"},[t._v("Components")]),t._v(" "),s("cdr-text",{staticClass:"stack-1"},[t._v("Use components as building blocks to create new digital products - usage, visual guidelines, and code included.")]),t._v(" "),s("cdr-link",{attrs:{href:t.$withBase("/components/buttons/"),modifier:"standalone"}},[t._v("Start with buttons")])],1)])]),t._v(" "),s("div",{staticClass:"home-hr-tree stack-4"},[s("cdr-img",{staticClass:"home-hr-tree__image",attrs:{src:t.$withBase("home/hr_tree.png"),role:"presentation"}})],1),t._v(" "),s("h2",{staticClass:"home-heading align-center stack-4"},[t._v("Resources")]),t._v(" "),s("cdr-grid",{staticClass:"home-grid stack-4"},[s("div",[s("div",{staticClass:"home-card"},[s("cdr-grid",{staticClass:"home-grid--card-grid"},[s("div",{attrs:{span:"9"}},[s("div",[s("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Cedar Design Libraries")]),t._v(" "),s("cdr-link",{attrs:{href:t.$withBase("/resources/for-designers/#design-toolkits"),modifier:"standalone"}},[t._v("Learn more about the toolkit")])],1)]),t._v(" "),s("div",{staticStyle:{"justify-items":"end"}},[s("div",[s("cdr-img",{staticClass:"home-resource-icon",attrs:{src:t.$withBase("sketch_icon.png")}})],1)])])],1)]),t._v(" "),s("div",[s("div",{staticClass:"home-card"},[s("cdr-grid",{staticClass:"home-grid--card-grid"},[s("div",{attrs:{span:"9"}},[s("div",[s("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Vue.js components")]),t._v(" "),s("cdr-link",{attrs:{href:"https://www.npmjs.com/package/@rei/cedar",target:"_blank",modifier:"standalone"}},[t._v("View the NPM repository")])],1)]),t._v(" "),s("div",{staticStyle:{"justify-items":"end"}},[s("div",[s("cdr-img",{staticClass:"home-resource-icon",attrs:{src:t.$withBase("vue_icon.png")}})],1)])])],1)]),t._v(" "),s("div",[s("div",{staticClass:"home-card"},[s("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Contribute to Cedar")]),t._v(" "),s("cdr-text",{staticClass:"stack-1"},[t._v("The Cedar team welcomes contributions from the community. Learn how to become a pilot contributor.  ")]),t._v(" "),s("cdr-link",{attrs:{href:t.$withBase("/about/contributing-to-cedar/"),modifier:"standalone"}},[t._v("Help build Cedar")])],1)]),t._v(" "),s("div",[s("div",{staticClass:"home-card"},[s("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Feedback & support")]),t._v(" "),s("cdr-text",{staticClass:"stack-1"},[t._v("Questions, ideas, or comments? Your feedback can help improve Cedar. ")]),t._v(" "),s("cdr-link",{attrs:{href:t.$withBase("/about/cedar-design-system/get-in-touch//"),modifier:"standalone"}},[t._v("Get in touch")])],1)])])],1)])}),[],!1,null,null,null);e.default=n.exports},331:function(t,e,s){"use strict";s.r(e);var i={components:{NavLinks:s(242).default}},a=(s(252),s(4)),n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"cdr-doc-side-navigation__items navbar"},[e("router-link",{staticClass:"home-link cdr-doc-side-navigation__logo-wrap",attrs:{to:this.$localePath}},[this.$site.themeConfig.logo?e("img",{staticClass:"logo cdr-doc-side-navigation__logo",attrs:{src:this.$withBase(this.$site.themeConfig.logo),alt:this.$siteTitle}}):this._e()]),this._v(" "),e("div",{staticClass:"links"},[e("NavLinks")],1)],1)}),[],!1,null,null,null);e.default=n.exports},383:function(t,e,s){"use strict";s(306)},433:function(t,e,s){"use strict";s.r(e);var i=s(348),a=s.n(i),n=s(282);const r="//satchel.rei.com/media/common/back-to-top.png";var o={name:"BackToTopBtn",data:()=>({active:!1,src:r}),mounted(){this.checkScroll();(new Image).src=r,window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:Object(n.b)(500,(function(){this.checkScroll()})),checkScroll(){const t=document.documentElement.offsetHeight,e=parseInt(window.innerHeight,10),s=parseInt(window.pageYOffset||document.documentElement.scrollTop,10);this.active=t>=4*e&&s>=e+.5*e}},render(t){return t("button",{attrs:{disabled:!this.active,tabindex:this.active?void 0:-1},class:["back-to-top-btn",this.active?"back-to-top-btn-show":""],on:this.$listeners},[t("img",{attrs:{src:r,alt:"back to top"}})])}},c=s(330),l=s(331),d=(s(0),s(1)),h=s(305),u=s(189);Object.keys(u).forEach(t=>{d.a.component(t,u[t]),h.a.component(t,u[t])});var v={components:{Home:c.default,Navbar:l.default,BackToTopBtn:o},data:()=>({iconSprite:a.a,sideNavOpen:!1,isStaging:!1,url:"",prodEquivalentUrl:""}),computed:{pageClasses(){return[this.$page.frontmatter.pageClass]},menuClass(){return"cdr-doc-page-shell__side-navigation "+(this.sideNavOpen?"cdr-doc-page-shell__side-navigation--open":"")},bodyClass(){return"cdr-doc-page-shell__body "+(this.sideNavOpen?"cdr-doc-page-shell__body--no-scroll":"")}},created(){this.$ssrContext&&(this.$ssrContext.title=this.$title,this.$ssrContext.lang=this.$lang,this.$ssrContext.description=this.$page.description||this.$description)},mounted(){this.currentMetaTags=[],this.updateMeta(),window.addEventListener("resize",Object(n.a)(250,()=>{this.sideNavOpen=!1})),this.navigateToHash(),this.url=window.document.location.href,this.prodEquivalentUrl=this.url.replace("cedar-docs.rei-cloud.com","rei.github.io"),this.isStaging=!!this.url.includes("cedar-docs.rei-cloud")},beforeDestroy(){this.updateMetaTags(null,this.currentMetaTags)},watch:{$route(){this.sideNavOpen=!1},$page(t,e){t.key!==e.key&&this.navigateToHash()}},methods:{navigateToHash(){this.$route.hash&&setTimeout(()=>{const t=document.getElementById(this.$route.hash.slice(1));t&&t.scrollIntoView&&t.scrollIntoView(!0)},500)},toggleSideNav(){this.sideNavOpen=!this.sideNavOpen},scrollToTop(){window.scrollTo(0,0)},updateMeta(){document.title=this.$title,document.documentElement.lang=this.$lang;const t=[{name:"description",content:this.$description},...this.$page.frontmatter.meta||[]];this.currentMetaTags=this.updateMetaTags(t,this.currentMetaTags)},updateMetaTags(t,e){if(e&&e.forEach(t=>{document.head.removeChild(t)}),t)return t.map(t=>{const e=document.createElement("meta");return Object.keys(t).forEach(s=>{e.setAttribute(s,t[s])}),document.head.appendChild(e),e})}}},g=(s(383),s(4)),p=Object(g.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container",class:t.pageClasses},[s("div",{staticStyle:{display:"none"},domProps:{innerHTML:t._s(t.iconSprite)}}),t._v(" "),s("div",{staticClass:"cdr-doc-page-shell"},[s("cdr-button",{staticClass:"cdr-doc-intro__hamburger",attrs:{"icon-only":!0,"with-background":!0,size:"large"},on:{click:t.toggleSideNav}},[s("cdr-icon",{attrs:{use:"#navigation-menu"}})],1),t._v(" "),s("div",{class:t.menuClass},[s("div",{staticClass:"cdr-doc-side-navigation"},[s("Navbar")],1)]),t._v(" "),s("div",{class:t.bodyClass},[t.isStaging?s("cdr-banner",{attrs:{type:"warning"},scopedSlots:t._u([{key:"icon-left",fn:function(){return[s("icon-warning-fill")]},proxy:!0}],null,!1,457837627)},[t._v(" "),s("span",[s("span",{staticStyle:{"font-weight":"500"}},[t._v("Cedar Design System documentation staging. For internal use only.")]),t._v(" "),s("cdr-link",{attrs:{href:t.prodEquivalentUrl}},[t._v("Return to production")])],1)]):t._e(),t._v(" "),t.$page.frontmatter.layout_type?s("div",{staticClass:"custom-layout"},[s(t.$page.frontmatter.layout_type,{tag:"component"})],1):t.$page.frontmatter.home?s("Home"):t._e()],1)],1),t._v(" "),s("back-to-top-btn",{on:{click:t.scrollToTop}})],1)}),[],!1,null,null,null);e.default=p.exports}}]);