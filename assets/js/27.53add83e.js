(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{343:function(e,n,i){},482:function(e){e.exports=JSON.parse('[{"name":"cdr-banner","notes":["CdrBanner should be paired with an icon preceding the text"],"docs":"https://rei.github.io/rei-cedar-docs/components/banner/","examples":[{"name":"success","html":"<div class=\\"cdr-banner-success\\">\\n  success!\\n</div>","scss":["@include cdr-banner-base-mixin;","@include cdr-banner-success-mixin;"]},{"name":"info","html":"<div class=\\"cdr-banner-info\\">\\n  info!\\n</div>","scss":["@include cdr-banner-base-mixin;","@include cdr-banner-info-mixin;"]},{"name":"warning","html":"<div class=\\"cdr-banner-warning\\">\\n  warning!\\n</div>","scss":["@include cdr-banner-base-mixin;","@include cdr-banner-warning-mixin;"]},{"name":"error","html":"<div class=\\"cdr-banner-error\\">\\n  error!\\n</div>","scss":["@include cdr-banner-base-mixin;","@include cdr-banner-error-mixin;"]}]},{"name":"cdr-breadcrumb","notes":["current page should not be rendered in breadcrumbs"],"docs":"https://rei.github.io/rei-cedar-docs/components/breadcrumb/","examples":[{"name":"default","html":"<a href=\\"cdr-breadcrumb-default\\">\\n  breadcrumb\\n</a>","scss":["@include cdr-breadcrumb-item-mixin;","@include cdr-breadcrumb-item-linked-mixin;","@include cdr-breadcrumb-base-text-mixin;"]}]},{"name":"cdr-button","notes":["All Cedar buttons must use the \'base\' mixin as well as either the \'primary\' or \'secondary\' mixin. Additional modifiers can be added as well.","Button mixins should ideally be applied to HTML \'button\' elements, but may also work on other HTML tags (i.e, div, a, span, etc.)"],"docs":"https://rei.github.io/rei-cedar-docs/components/buttons/","examples":[{"name":"primary","html":"<button class=\\"cdr-button-primary\\">primary</button>","scss":["@include cdr-button-base-mixin;","@include cdr-button-primary-mixin;"]},{"name":"secondary","html":"<button class=\\"cdr-button-secondary\\">secondary</button>","scss":["@include cdr-button-base-mixin;","@include cdr-button-secondary-mixin;"]},{"name":"sale","html":"<button class=\\"cdr-button-sale\\">\\n  sale\\n</button>","scss":["@include cdr-button-base-mixin;","@include cdr-button-sale-mixin;"]},{"name":"dark","html":"<button class=\\"cdr-button-dark\\">\\n  dark\\n</button>","scss":["@include cdr-button-base-mixin;","@include cdr-button-dark-mixin;"]},{"name":"primary-small","html":"<button class=\\"cdr-button-primary-small\\">\\n  primary-small\\n</button>","scss":["@include cdr-button-base-mixin;","@include cdr-button-primary-mixin;","@include cdr-button-small-mixin;"]},{"name":"secondary-medium","html":"<button class=\\"cdr-button-secondary-medium\\">\\n  secondary-medium\\n</button>","scss":["@include cdr-button-base-mixin;","@include cdr-button-secondary-mixin;","@include cdr-button-medium-mixin;"]},{"name":"primary-large","html":"<button class=\\"cdr-button-primary-large\\">\\n  primary-large\\n</button>","scss":["@include cdr-button-base-mixin;","@include cdr-button-primary-mixin;","@include cdr-button-large-mixin;"]}]},{"name":"cdr-card","notes":["CdrCard elements should always link to other content","use `@include cdr-card-link-mixin` on the linked element to make the entire card function as a click target"],"docs":"https://rei.github.io/rei-cedar-docs/components/card/","examples":[{"name":"default","html":"<div class=\\"cdr-card-default\\">\\n  <a href=\\"#\\" class=\\"link\\">default card</a>\\n</div>","scss":["@include cdr-card-base-mixin;",".link {\\n  @include cdr-card-link-mixin;\\n}"]}]},{"name":"cdr-chip","notes":["See the CdrChip docs page for more information on accessibility requirements for chips"],"docs":"https://rei.github.io/rei-cedar-docs/components/chips/","examples":[{"name":"default","html":"<button class=\\"cdr-chip-default\\">Default Chip</button>","scss":["@include cdr-chip-base-mixin;"]},{"name":"icon-left","html":"<button class=\\"cdr-chip-icon-left\\"><span class=\\"cdr-chip-icon-left-icon\\">🍔</span> Chip with Icon</button>","scss":["@include cdr-chip-base-mixin;",".cdr-chip-icon-left-icon { @include cdr-chip-icon-left-mixin; }"]},{"name":"icon-right","html":"<button class=\\"cdr-chip-icon-right\\">Chip with Icon <span class=\\"cdr-chip-icon-right-icon\\">🌮</span></button>","scss":["@include cdr-chip-base-mixin;",".cdr-chip-icon-right-icon { @include cdr-chip-icon-right-mixin; }"]}]},{"name":"cdr-form-error","notes":["Error messaging for form inputs"],"examples":[{"name":"default","html":"<div class=\\"cdr-form-error-default\\">\\n  <div class=\\"cdr-form-error-icon\\"></div> Form Error\\n</div>","scss":["@include cdr-form-error-base-mixin;",".cdr-form-error-icon {\\n  @include cdr-form-error-icon-mixin;\\n}"]}]},{"name":"cdr-form-group","notes":["Form groups should wrap a `legend` element and contain a group of logically related input elements."],"docs":"https://rei.github.io/rei-cedar-docs/components/form-group/","examples":[{"name":"default","html":"<fieldset class=\\"cdr-form-group-default\\">\\n  <legend>form group title</legend>\\n  <div class=\\"cdr-form-group-content\\"><input/><input/></div>\\n</fieldset>","scss":["@include cdr-form-group-base-mixin;",".cdr-form-group-content {\\n    @include cdr-form-group-content-mixin;\\n  }"]},{"name":"error","html":"<fieldset class=\\"cdr-form-group-error\\">\\n  <legend>form group title</legend>\\n  <div class=\\"cdr-form-group-content\\"><input/><input/></div>\\n</fieldset>","scss":["@include cdr-form-group-base-mixin;",".cdr-form-group-content {\\n    @include cdr-form-group-content-mixin;\\n    @include cdr-form-group-error-mixin;\\n  }"]}]},{"name":"cdr-grid","notes":["CdrGrid is a simple CSS grid wrapper component"],"docs":"https://rei.github.io/rei-cedar-docs/components/grid/","examples":[{"name":"default","html":"<div class=\\"cdr-grid-default\\"><div>a</div><div>b</div><div>c</div></div>","scss":["@include cdr-grid-base-mixin;","grid-template-columns: 1fr 1fr 1fr;"]},{"name":"gutter-none","html":"<div class=\\"cdr-grid-gutter-none\\"><div>a</div><div>b</div><div>c</div></div>","scss":["@include cdr-grid-base-mixin;","@include cdr-grid-gutter-none-mixin;","grid-template-columns: 1fr 1fr 1fr;"]},{"name":"guttter-small","html":"<div class=\\"cdr-grid-gutter-small\\"><div>a</div><div>b</div><div>c</div></div>","scss":["@include cdr-grid-base-mixin;","@include cdr-grid-gutter-small-mixin;","grid-template-columns: 1fr 1fr 1fr;"]},{"name":"guttter-medium","html":"<div class=\\"cdr-grid-guttter-medium\\"><div>a</div><div>b</div><div>c</div></div>","scss":["@include cdr-grid-base-mixin;","@include cdr-grid-gutter-medium-mixin;","grid-template-columns: 1fr 1fr 1fr;"]},{"name":"guttter-large","html":"<div class=\\"cdr-grid-gutter-large\\"><div>a</div><div>b</div><div>c</div></div>","scss":["@include cdr-grid-base-mixin;","@include cdr-grid-gutter-large-mixin;","grid-template-columns: 1fr 1fr 1fr;"]}]},{"name":"cdr-input","notes":["note that the vue component is a combination of the label and input examples"],"docs":"https://rei.github.io/rei-cedar-docs/components/input/","examples":[{"name":"default","html":"<input class=\\"cdr-input-default\\"/>","scss":["@include cdr-input-base-mixin;","@include cdr-input-primary-mixin;"]},{"name":"error","html":"<input class=\\"cdr-input-error\\"/>","scss":["@include cdr-input-base-mixin;","@include cdr-input-primary-mixin;","@include cdr-input-error-mixin;"]},{"name":"large","html":"<input class=\\"cdr-input-large\\"/>","scss":["@include cdr-input-base-mixin;","@include cdr-input-primary-mixin;","@include cdr-input-large-mixin;"]},{"name":"on-secondary-bg","html":"<input class=\\"cdr-input-on-secondary-bg\\"/>","scss":["@include cdr-input-base-mixin;","@include cdr-input-secondary-mixin;"]}]},{"name":"cdr-label-standalone","notes":["label element for text inputs and selects"],"examples":[{"name":"default","html":"<label class=\\"cdr-label-standalone-default\\">\\n  Default label\\n</label>","scss":["@include cdr-label-standalone-label-mixin;"]},{"name":"required","html":"<label class=\\"cdr-label-standalone-required\\">\\n  Required label *\\n</label>","scss":["@include cdr-label-standalone-label-mixin;"]},{"name":"optional","html":"<label class=\\"cdr-label-standalone-optional\\">\\n  Optional label <span class=\\"optional-label\\">(optional)</span>\\n</label>","scss":["@include cdr-label-standalone-label-mixin;",".optional-label {\\n    @include cdr-label-standalone-optional-mixin;\\n  }"]},{"name":"disabled","html":"<label class=\\"cdr-label-standalone-disabled\\">\\n  Disabled label\\n</label>","scss":["@include cdr-label-standalone-disabled-mixin;"]},{"name":"helper-text","html":"<div class=\\"cdr-label-standalone-helper-text\\">\\n  Helper text\\n</div>","scss":["@include cdr-label-standalone-helper-mixin;"]},{"name":"info","html":"<div class=\\"cdr-label-standalone-info\\">\\n  Info text\\n</div>","scss":["@include cdr-label-standalone-info-mixin;"]}]},{"name":"cdr-label-wrapper","notes":["Wrapper label element for radio and checkbox inputs","See also the CdrRadio and CdrCheckbox input examples"],"examples":[{"name":"default","html":"<label class=\\"cdr-label-wrapper-default\\">\\n  <input type=\\"checkbox\\"/> Default label\\n</label>","scss":["@include cdr-label-wrapper-base-mixin;","@include cdr-label-wrapper-primary-mixin;"]},{"name":"secondary-bg","html":"<label class=\\"cdr-label-wrapper-secondary-bg\\">\\n  <input type=\\"radio\\"/> Label on secondary background\\n</label>","scss":["@include cdr-label-wrapper-base-mixin;","@include cdr-label-wrapper-secondary-mixin;"]},{"name":"disabled","html":"<label class=\\"cdr-label-wrapper-disabled\\">\\n  <input type=\\"checkbox\\" disabled/> Disabled label\\n</label>","scss":["@include cdr-label-wrapper-base-mixin;","@include cdr-label-wrapper-disabled-mixin;"]}]},{"name":"cdr-link","notes":[],"docs":"https://rei.github.io/rei-cedar-docs/components/links/","examples":[{"name":"default","html":"<a href=\\"#\\" class=\\"cdr-link-default\\">\\n  link default\\n</a>","scss":["@include cdr-link-base-mixin;"]},{"name":"standalone","html":"<a href=\\"#\\" class=\\"cdr-link-standalone\\">\\n  link standalone\\n</a>","scss":["@include cdr-link-base-mixin;","@include cdr-link-standalone-mixin;"]}]},{"name":"cdr-list","notes":["Styles for the `inline` variations are not currently supported.","CdrList mixins assume that you are using <li> tags for the list items. See the mixin source in `/dist` if you need to customize that."],"docs":"https://rei.github.io/rei-cedar-docs/components/list/","examples":[{"name":"ordered","html":"<ol class=\\"cdr-list-ordered\\">\\n  <li>one</li>\\n  <li>two</li>\\n  <li>three</li>\\n</ol>","scss":["@include cdr-list-base-mixin;","@include cdr-list-ordered-mixin;"]},{"name":"unordered","html":"<ul class=\\"cdr-list-unordered\\">\\n  <li>one</li>\\n  <li>two</li>\\n  <li>three</li>\\n</ul>","scss":["@include cdr-list-base-mixin;","@include cdr-list-unordered-mixin;"]}]},{"name":"cdr-select","notes":["note that the vue component is a combination of the label and select examples"],"docs":"https://rei.github.io/rei-cedar-docs/components/select/","examples":[{"name":"default","html":"<select class=\\"cdr-select-default\\"/>","scss":["@include cdr-select-base-mixin;","@include cdr-select-primary-mixin;"]},{"name":"error","html":"<select class=\\"cdr-select-error\\"/>","scss":["@include cdr-select-base-mixin;","@include cdr-select-primary-mixin;","@include cdr-select-error-mixin;"]},{"name":"large","html":"<select class=\\"cdr-select-large\\"/>","scss":["@include cdr-select-base-mixin;","@include cdr-select-primary-mixin;","@include cdr-select-large-mixin;"]},{"name":"on-secondary-bg","html":"<select class=\\"cdr-select-on-secondary-bg\\"/>","scss":["@include cdr-select-base-mixin;","@include cdr-select-secondary-mixin;"]}]},{"name":"cdr-table","notes":["CdrTable is a simple wrapper component that applies styles to HTML tables"],"docs":"https://rei.github.io/rei-cedar-docs/components/table/","examples":[{"name":"default","html":"<table class=\\"cdr-table-default\\">\\n  <tr><th>Test head</th></tr>\\n  <tr><td>Test content</td></tr>\\n</table>","scss":["@include cdr-table-base-mixin;"]}]}]')},483:function(e,n,i){"use strict";i(343)},533:function(e,n,i){"use strict";i.r(n);var r=i(482),s={name:"component-variables-page",data:()=>({examplesData:r}),methods:{formatSCSS:(e,n)=>`.${e.name}-${n.name} {\n  ${n.scss.join("\n  ")}\n}`,formatName:e=>e.split("-").map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`).join("")},mounted(){this.$parent.$emit("update-toc")}},t=(i(483),i(4)),a=Object(t.a)(s,(function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",e._l(e.examplesData,(function(n){return i("div",{key:n.name},[i("h3",{attrs:{id:e.formatName(n.name)}},[e._v(e._s(e.formatName(n.name)))]),e._v(" "),n.notes?i("cdr-list",{attrs:{modifier:"unordered"}},e._l(n.notes,(function(n){return i("li",{key:n},[e._v(e._s(n))])})),0):e._e(),e._v(" "),i("table",{staticClass:"comp-vars-examples"},[e._m(0,!0),e._v(" "),e._l(n.examples,(function(r){return i("tr",{key:n.name+"-"+r.name},[i("td",{domProps:{innerHTML:e._s(r.html)}}),e._v(" "),i("td",[e._v(e._s(r.html))]),e._v(" "),i("td",[i("pre",[e._v(e._s(e.formatSCSS(n,r)))])])])}))],2)],1)})),0)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("tr",[n("th",[this._v("Example")]),n("th",[this._v("HTML")]),n("th",[this._v("SCSS")])])}],!1,null,null,null);n.default=a.exports}}]);