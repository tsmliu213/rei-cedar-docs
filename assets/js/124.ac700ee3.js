(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{615:function(t,e,r){"use strict";r.r(e);var a=r(4),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[r("h2",{attrs:{id:"update-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-steps"}},[t._v("#")]),t._v(" Update Steps")]),t._v(" "),r("ul",[r("li",[t._v("Update to the latest version of the Cedar packages:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("package name")]),t._v(" "),r("th",[t._v("version")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("@rei/cedar")])]),t._v(" "),r("td",[t._v("^6.x.x")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("@rei/cdr-tokens")])]),t._v(" "),r("td",[t._v("^6.x.x")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("@rei/cdr-component-variables")])]),t._v(" "),r("td",[t._v("^4.x.x")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("@rei/cedar-icons")])]),t._v(" "),r("td",[t._v("^2.x.x")])])])]),t._v(" "),r("ul",[r("li",[t._v("If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.")])]),t._v(" "),r("h2",{attrs:{id:"_6-1-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1"}},[t._v("#")]),t._v(" 6.1.1")]),t._v(" "),r("ul",[r("li",[t._v("Adds "),r("code",[t._v("small")]),t._v(" and "),r("code",[t._v("medium")]),t._v(" options for the "),r("code",[t._v("gutter")]),t._v(" property of CdrRow. Note that CdrRow has built in responsive gutter behavior, and that the CdrGrid responsive properties target breakpoints and above rather than just specific breakpoints. For example, the default CdrGrid gutter behavior is "),r("code",[t._v('<cdr-row gutter="small small@sm medium@md medium@lg">')]),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"_6-1-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-0"}},[t._v("#")]),t._v(" 6.1.0")]),t._v(" "),r("ul",[r("li",[t._v("Adds new "),r("code",[t._v("IconMap")]),t._v(" component.")]),t._v(" "),r("li",[t._v("Removes deprecated media query mixin from "),r("code",[t._v("cdr-container")]),t._v(" mixin.")]),t._v(" "),r("li",[t._v("Includes correct "),r("code",[t._v("cdr-container")]),t._v(" mixins in LESS output.")]),t._v(" "),r("li",[t._v("Removes "),r("code",[t._v("min-height")]),t._v(" value on table cells.")]),t._v(" "),r("li",[t._v("Improves underline logic in CdrTabs, simplifies tab header markup.")]),t._v(" "),r("li",[t._v("Removes "),r("code",[t._v("id")]),t._v(" attribute from CdrModal close button.")])]),t._v(" "),r("h2",{attrs:{id:"_6-0-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-0"}},[t._v("#")]),t._v(" 6.0.0")]),t._v(" "),r("h2",{attrs:{id:"new-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[t._v("#")]),t._v(" New Features")]),t._v(" "),r("h3",{attrs:{id:"mixin-and-token-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mixin-and-token-usage"}},[t._v("#")]),t._v(" Mixin and Token Usage")]),t._v(" "),r("p",[t._v("To align with performance goals for the co-op, we have updated our guidance around the "),r("a",{attrs:{href:"../../components/utilities"}},[t._v("Cedar utility classes")]),t._v(" to recommend that customer facing projects instead  use "),r("a",{attrs:{href:"../../tokens/all-tokens"}},[t._v("Cedar tokens")]),t._v(" to apply styling.")]),t._v(" "),r("p",[t._v("Cedar utility class files often contain a large number of options, and only a small number of them are used in most projects. By using Cedar tokens instead of utility classes, you can ensure that your project is only loading the styles you are directly using. Special attention should be paid to the space ("),r("code",[t._v("@rei/cedar/dist/style/space.css")]),t._v(") and text ("),r("code",[t._v("@rei/cedar/dist/style/text.css")]),t._v(" or "),r("code",[t._v("@rei/cedar/dist/style/cdr-text.css")]),t._v(") utility class files as they are especially large.")]),t._v(" "),r("ul",[r("li",[t._v("The "),r("a",{attrs:{href:"../../components/text"}},[t._v("CdrText page")]),t._v(" has been updated to show examples of using mixins instead of the modifier/utilities.")]),t._v(" "),r("li",[t._v("CdrText related reset logic has been moved out of the CdrText CSS file and into the Cedar CSS reset file. The CdrText CSS file only needs to be loaded if you are using the "),r("code",[t._v("modifier")]),t._v(" property to style text.")]),t._v(" "),r("li",[t._v("We have deprecated the "),r("a",{attrs:{href:"#space-property-deprecated"}},[t._v("space property")]),t._v(" in the Cedar components.")]),t._v(" "),r("li",[t._v("We have added mixins for "),r("a",{attrs:{href:"#mixins-for-sr-only-and-cdr-container"}},[t._v("sr-only and cdr-container")]),t._v(" so that they can be used in place of the equivalent utility classes.")])]),t._v(" "),r("h3",{attrs:{id:"cdralert-component"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdralert-component"}},[t._v("#")]),t._v(" CdrAlert Component")]),t._v(" "),r("p",[t._v("CdrAlert is a simple wrapper component that allows for composing various alert layouts, and now officially supported in the system. See the "),r("RouterLink",{attrs:{to:"/components/alert/"}},[t._v("CdrAlert docs")]),t._v(" for more details and usage guidelines.")],1),t._v(" "),r("h3",{attrs:{id:"cdrformgroup-component"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrformgroup-component"}},[t._v("#")]),t._v(" CdrFormGroup Component")]),t._v(" "),r("p",[t._v("CdrFormGroup is a simple wrapper component for grouping together form elements with a common label. See the "),r("RouterLink",{attrs:{to:"/components/form-group/"}},[t._v("CdrFormGroup docs")]),t._v(" for more details and usage guidelines.")],1),t._v(" "),r("h3",{attrs:{id:"cdrbutton-icon-left-and-right-slots"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrbutton-icon-left-and-right-slots"}},[t._v("#")]),t._v(" CdrButton Icon Left and Right Slots")]),t._v(" "),r("p",[t._v("CdrButton has updated with 2 additional slots, "),r("code",[t._v("icon-left")]),t._v(" and "),r("code",[t._v("icon-right")]),t._v(", for rendering icons to the left or right of the button text. Using these slots ensures that the icon is properly spaced within the button and that its size adjusts with the button size. The original "),r("code",[t._v("icon")]),t._v(" slot can still be used for rendering "),r("code",[t._v("icon-only")]),t._v(" buttons. See the "),r("RouterLink",{attrs:{to:"/components/buttons/#slots"}},[t._v("CdrButton docs")]),t._v(" for more details.")],1),t._v(" "),r("h3",{attrs:{id:"cdrbutton-link-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrbutton-link-style"}},[t._v("#")]),t._v(" CdrButton Link Style")]),t._v(" "),r("p",[t._v("CdrButton has been updated to add new modifier: "),r("code",[t._v("link")]),t._v(". This is intended to visually style a CdrButton like a link, but with the same size and full-width options of a normal CdrButton. This allows for layouts which use links in the place of or alongside CdrButtons, while also providing an option for links with the bigger click target of a button. CdrLink should still be used for rendering a link inline with other text. See the "),r("RouterLink",{attrs:{to:"/components/buttons/#link-style"}},[t._v("CdrButton docs")]),t._v(" for more details.")],1),t._v(" "),r("h3",{attrs:{id:"cdrrating-rounding-logic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrrating-rounding-logic"}},[t._v("#")]),t._v(" CdrRating Rounding Logic")]),t._v(" "),r("p",[t._v('CdrRating has been updated to round the displayed rating to the nearest 1/10th rather than the nearest 1/4. Whole number values now display an empty decimal place. For example, an average rating of "3.71" now renders as "3.7" rather than "3.75", while a rating of "3" now renders as "3.0" rather than "3". Visually the star icons still render in 1/4 increments as they did previously.')]),t._v(" "),r("h3",{attrs:{id:"media-query-mixins-for-breakpoint-and-below"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#media-query-mixins-for-breakpoint-and-below"}},[t._v("#")]),t._v(" Media Query Mixins For Breakpoint And Below")]),t._v(" "),r("p",[t._v("We have updated our "),r("RouterLink",{attrs:{to:"/foundation/responsive/#scss-less-utilities"}},[t._v("media queries")]),t._v(" to add mixins that match below a given breakpoint. We have also renamed some of our existing media query mixins to follow this naming convention")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Mixin Name")]),t._v(" "),r("th",[t._v("Target")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("cdr-sm-mq-down")]),t._v(" "),r("td",[t._v("Below $cdr-breakpoint-sm")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-md-mq-down")]),t._v(" "),r("td",[t._v("Below $cdr-breakpoint-md")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-lg-mq-down")]),t._v(" "),r("td",[t._v("Below $cdr-breakpoint-lg")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("cdr-xs-mq-up")]),t._v(" "),r("td",[t._v("$cdr-breakpoint-xs and Above")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-sm-mq-up")]),t._v(" "),r("td",[t._v("$cdr-breakpoint-sm and Above")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-md-mq-up")]),t._v(" "),r("td",[t._v("$cdr-breakpoint-md and Above")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-lg-mq-up")]),t._v(" "),r("td",[t._v("$cdr-breakpoint-lg and Above")])])])]),t._v(" "),r("h3",{attrs:{id:"mixins-for-sr-only-and-cdr-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mixins-for-sr-only-and-cdr-container"}},[t._v("#")]),t._v(" Mixins for sr-only and cdr-container")]),t._v(" "),r("p",[t._v("Cedar tokens now includes mixins for the screen-reader only and container utility classes. This gives consumers the option of skipping loading the utility class files and instead just inlining the CSS that they need. The new mixins are named "),r("code",[t._v("cdr-display-sr-only")]),t._v(", "),r("code",[t._v("cdr-display-sr-focusable")]),t._v(", "),r("code",[t._v("cdr-container")]),t._v(", and "),r("code",[t._v("cdr-container-fluid")]),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"placeholder-selectors-for-scss-mixins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#placeholder-selectors-for-scss-mixins"}},[t._v("#")]),t._v(" Placeholder Selectors for SCSS Mixins")]),t._v(" "),r("p",[t._v("The SCSS distribution of Cedar tokens now includes "),r("a",{attrs:{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("placeholder selectors"),r("OutboundLink")],1),t._v(". If you are using the same mixin multiple times then switching to placeholder selectors will allow SCSS to include that style only once. The placeholder selectors have the same names as their mixin equivalents, but are invoked by using "),r("code",[t._v("@extend %mixin-name")]),t._v(" rather than "),r("code",[t._v("@include mixin-name")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v(".mixin-example {\n  @include cdr-display-sr-only;\n}\n\n.placeholder-example {\n  @extend %cdr-display-sr-only;\n}\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("h3",{attrs:{id:"cdrtabs-auto-height"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtabs-auto-height"}},[t._v("#")]),t._v(" CdrTabs Auto Height")]),t._v(" "),r("p",[t._v("CdrTabs previously required a static "),r("code",[t._v("height")]),t._v(" value to be set, with overflowing content rendered with a scrollbar. CdrTabs now accepts "),r("code",[t._v('height="auto"')]),t._v(" which allows for rendering tabs with variable height based on the size of it's content. See the "),r("RouterLink",{attrs:{to:"/components/tabs/#auto"}},[t._v("CdrTabs docs")]),t._v(" for more details.")],1),t._v(" "),r("h3",{attrs:{id:"cdrtabs-background-color"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtabs-background-color"}},[t._v("#")]),t._v(" CdrTabs Background Color")]),t._v(" "),r("p",[t._v("In order to support CdrTabs that are rendered on non-primary backgrounds, we have added a "),r("code",[t._v("background-color")]),t._v(" property that can be used to set the gradients inside CdrTabs to match it's background.")]),t._v(" "),r("h2",{attrs:{id:"deprecations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deprecations"}},[t._v("#")]),t._v(" Deprecations")]),t._v(" "),r("h3",{attrs:{id:"cdrcta-deprecated-and-merged-with-cdrbutton"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrcta-deprecated-and-merged-with-cdrbutton"}},[t._v("#")]),t._v(" CdrCta Deprecated and Merged with CdrButton")]),t._v(" "),r("p",[t._v("The CdrCta component has been deprecated and its functionality has been merged with CdrButton. The "),r("code",[t._v("sale")]),t._v(", "),r("code",[t._v("dark")]),t._v(", "),r("code",[t._v("elevated")]),t._v(", and right-aligned-icon styles from CdrCta have all been added as options in CdrButton. This was intended to provide more flexibility in constructing calls to action, while also adding additional styling options for rendering CdrButtons.")]),t._v(" "),r("p",[t._v("See the "),r("a",{attrs:{href:"../../components/buttons#button-with-link-tag"}},[t._v("CdrButton with link tag")]),t._v(" and "),r("a",{attrs:{href:"../../components/buttons#alternative-styles"}},[t._v("CdrButton alternative styles")]),t._v(" for more information.")]),t._v(" "),r("p",[t._v("In order to update existing instances of CdrCta to instead use CdrButton:")]),t._v(" "),r("ul",[r("li",[t._v("Pass the "),r("code",[t._v("icon-caret-left")]),t._v(" CdrIcon into the "),r("code",[t._v("icon-right")]),t._v(" slot. Note that this can be replaced with any icon, or the icon can be omitted completely.")]),t._v(" "),r("li",[t._v("Update the "),r("code",[t._v("ctaStyle")]),t._v(" property as needed and pass it into the "),r("code",[t._v("modifier")]),t._v(" prop of CdrButton")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("CdrCta "),r("code",[t._v("ctaStyle")])]),t._v(" "),r("th",[t._v("CdrButton "),r("code",[t._v("modifier")])])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("brand")]),t._v(" "),r("td",[t._v("primary")])]),t._v(" "),r("tr",[r("td",[t._v("light")]),t._v(" "),r("td",[t._v("secondary")])]),t._v(" "),r("tr",[r("td",[t._v("sale")]),t._v(" "),r("td",[t._v("sale")])]),t._v(" "),r("tr",[r("td",[t._v("dark")]),t._v(" "),r("td",[t._v("dark")])])])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('// "sale" CdrCta migrated to a CdrButton\n<cdr-cta cta-style="sale">Call To Action</cdr-cta>\n<cdr-button modifier="sale" tag="a" href="rei.com">\n  Call To Action <icon-caret-left slot="icon-right"/>\n</cdr-button>\n\n// "brand" CdrCta migrated to a CdrButton\n<cdr-cta cta-style="brand">Call To Action</cdr-cta>\n<cdr-button modifier="primary" tag="a" href="rei.com">\n  Call To Action <icon-caret-left slot="icon-right"/>\n</cdr-button>\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br")])]),r("h3",{attrs:{id:"cdrcta-tokens"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrcta-tokens"}},[t._v("#")]),t._v(" CdrCta Tokens")]),t._v(" "),r("p",[t._v("We have deprecated all of the "),r("code",[t._v("cta")]),t._v(" tokens and merged them with our "),r("code",[t._v("button")]),t._v(" tokens. The CTA tokens will be removed in the winter 2021 release. Mappings between the "),r("code",[t._v("CTA")]),t._v(" and "),r("code",[t._v("button")]),t._v(" tokens are listed below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Deprecated Token")]),t._v(" "),r("th",[t._v("Equivalent Token")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("cdr-color-text-cta-dark")]),t._v(" "),r("td",[t._v("cdr-color-text-button-dark")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-dark-hover")]),t._v(" "),r("td",[t._v("cdr-color-text-button-dark-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-dark-active")]),t._v(" "),r("td",[t._v("cdr-color-text-button-dark-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-dark-disabled")]),t._v(" "),r("td",[t._v("cdr-color-text-button-dark-disabled")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-dark-rest")]),t._v(" "),r("td",[t._v("cdr-color-background-button-dark-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-dark-active")]),t._v(" "),r("td",[t._v("cdr-color-background-button-dark-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-dark-hover")]),t._v(" "),r("td",[t._v("cdr-color-background-button-dark-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-dark-rest")]),t._v(" "),r("td",[t._v("cdr-color-border-button-dark-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-dark-active")]),t._v(" "),r("td",[t._v("cdr-color-border-button-dark-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-dark-active-inset")]),t._v(" "),r("td",[t._v("cdr-color-border-button-dark-active-inset")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-dark-hover")]),t._v(" "),r("td",[t._v("cdr-color-border-button-dark-hover")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-light")]),t._v(" "),r("td",[t._v("cdr-color-text-button-secondary")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-light-hover")]),t._v(" "),r("td",[t._v("cdr-color-text-button-secondary-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-light-active")]),t._v(" "),r("td",[t._v("cdr-color-text-button-secondary-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-light-disabled")]),t._v(" "),r("td",[t._v("cdr-color-text-button-secondary-disabled")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-light-rest")]),t._v(" "),r("td",[t._v("cdr-color-background-button-secondary-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-light-active")]),t._v(" "),r("td",[t._v("cdr-color-background-button-secondary-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-light-hover")]),t._v(" "),r("td",[t._v("cdr-color-background-button-secondary-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-light-disabled")]),t._v(" "),r("td",[t._v("cdr-color-background-button-secondary-disabled")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-light-rest")]),t._v(" "),r("td",[t._v("cdr-color-border-button-secondary-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-light-active")]),t._v(" "),r("td",[t._v("cdr-color-border-button-secondary-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-light-active-inset")]),t._v(" "),r("td",[t._v("cdr-color-border-button-secondary-active-inset")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-brand")]),t._v(" "),r("td",[t._v("cdr-color-text-button-primary")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-brand-hover")]),t._v(" "),r("td",[t._v("cdr-color-text-button-primary-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-brand-active")]),t._v(" "),r("td",[t._v("cdr-color-text-button-primary-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-brand-disabled")]),t._v(" "),r("td",[t._v("cdr-color-text-button-primary-disabled")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-brand-rest")]),t._v(" "),r("td",[t._v("cdr-color-background-button-primary-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-brand-active")]),t._v(" "),r("td",[t._v("cdr-color-background-button-primary-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-brand-hover")]),t._v(" "),r("td",[t._v("cdr-color-background-button-primary-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-brand-rest")]),t._v(" "),r("td",[t._v("cdr-color-border-button-primary-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-brand-active")]),t._v(" "),r("td",[t._v("cdr-color-border-button-primary-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-brand-active-inset")]),t._v(" "),r("td",[t._v("cdr-color-border-button-primary-active-inset")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-brand-hover")]),t._v(" "),r("td",[t._v("cdr-color-border-button-primary-hover")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-sale")]),t._v(" "),r("td",[t._v("cdr-color-text-button-sale")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-sale-hover")]),t._v(" "),r("td",[t._v("cdr-color-text-button-sale-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-sale-active")]),t._v(" "),r("td",[t._v("cdr-color-text-button-sale-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-text-cta-sale-disabled")]),t._v(" "),r("td",[t._v("cdr-color-text-button-sale-disabled")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-sale-rest")]),t._v(" "),r("td",[t._v("cdr-color-background-button-sale-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-sale-active")]),t._v(" "),r("td",[t._v("cdr-color-background-button-sale-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-sale-hover")]),t._v(" "),r("td",[t._v("cdr-color-background-button-sale-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-light-hover")]),t._v(" "),r("td",[t._v("cdr-color-border-button-secondary-hover")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-sale-rest")]),t._v(" "),r("td",[t._v("cdr-color-border-button-sale-rest")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-sale-active")]),t._v(" "),r("td",[t._v("cdr-color-border-button-sale-active")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-sale-active-inset")]),t._v(" "),r("td",[t._v("cdr-color-border-button-sale-active-inset")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-sale-hover")]),t._v(" "),r("td",[t._v("cdr-color-border-button-sale-hover")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-background-cta-default-disabled")]),t._v(" "),r("td",[t._v("cdr-color-background-button-default-disabled")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-color-border-cta-default-disabled")]),t._v(" "),r("td",[t._v("cdr-color-border-button-default-disabled")])])])]),t._v(" "),r("h3",{attrs:{id:"space-property-deprecated"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#space-property-deprecated"}},[t._v("#")]),t._v(" Space Property Deprecated")]),t._v(" "),r("p",[t._v("Many of the Cedar components accepted a "),r("code",[t._v("space")]),t._v(" property which applied a spacing utility class to that component. As part of our efforts to improve performance by de-coupling the utility classes from the components we have deprecated this property in all of our components. This change affects the following components: CdrButton, CdrCheckbox, CdrCta, CdrDataTable, CdrIcon, CdrInput, CdrLink, CdrList, CdrQuote, CdrRadio, CdrRating, CdrSelect, CdrText. Spacing utility classes can still be applied to any of these components by simply passing the utility class in via the "),r("code",[t._v("class")]),t._v(" prop instead of "),r("code",[t._v("space")]),t._v(", for example:")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('<cdr-button space="cdr-mb-space-one-x">Deprecated</cdr-button>\n<cdr-button class="cdr-mb-space-one-x">Supported</cdr-button>\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("h3",{attrs:{id:"cdrbutton-icon-utility-class-no-longer-needed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrbutton-icon-utility-class-no-longer-needed"}},[t._v("#")]),t._v(" CdrButton Icon Utility Class No Longer Needed")]),t._v(" "),r("p",[t._v("The functionality of the "),r("code",[t._v("cdr-button__icon")]),t._v(" utility class has been built directly into CdrButton. You can safely remove this class from any instances of CdrButton that uses CdrIcon.")]),t._v(" "),r("h3",{attrs:{id:"media-query-mixin-renaming"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#media-query-mixin-renaming"}},[t._v("#")]),t._v(" Media Query Mixin Renaming")]),t._v(" "),r("p",[t._v("In order to support adding the "),r("a",{attrs:{href:"#media-query-mixins-for-breakpoint-and-below"}},[t._v("breakpoint and below media queries")]),t._v(", we have renamed some of the existing media query mixins to follow that naming convention.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Deprecated Mixin")]),t._v(" "),r("th",[t._v("New Mixin")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("cdr-xs-mq")]),t._v(" "),r("td",[t._v("cdr-xs-mq-up")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-sm-mq")]),t._v(" "),r("td",[t._v("cdr-sm-mq-up")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-md-mq")]),t._v(" "),r("td",[t._v("cdr-md-mq-up")])]),t._v(" "),r("tr",[r("td",[t._v("cdr-lg-mq")]),t._v(" "),r("td",[t._v("cdr-lg-mq-up")])])])]),t._v(" "),r("h2",{attrs:{id:"bug-fixes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[t._v("#")]),t._v(" Bug Fixes")]),t._v(" "),r("h3",{attrs:{id:"cdrmodal-smooth-scroll"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal-smooth-scroll"}},[t._v("#")]),t._v(" CdrModal Smooth Scroll")]),t._v(" "),r("p",[t._v("CdrModal now renders its closing animation properly when the "),r("code",[t._v("scroll-behavior")]),t._v(" of the page is set to "),r("code",[t._v("smooth")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"breaking-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[t._v("#")]),t._v(" Breaking Changes")]),t._v(" "),r("h3",{attrs:{id:"cdricon-a11y-enhancements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdricon-a11y-enhancements"}},[t._v("#")]),t._v(" CdrIcon a11y Enhancements")]),t._v(" "),r("p",[t._v("We have improved the accessibility of the CdrIcon components by moving the "),r("code",[t._v('role="presentation"')]),t._v(" attribute from the root element onto the path element. The CdrIcon components now add "),r("code",[t._v('aria-hidden="true"')]),t._v(" to their root element by default. The meaning of the icon should either be explained by the visible text around it, or by including screenreader-only text using the "),r("code",[t._v("cdr-display-sr-only")]),t._v(" utility class or mixin. "),r("a",{attrs:{href:"../../components/icons#accessibility"}},[t._v("See the CdrIcon accessibility section")]),t._v(" for more details.")]),t._v(" "),r("h3",{attrs:{id:"cdrmodal-a11y-fix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal-a11y-fix"}},[t._v("#")]),t._v(" CdrModal a11y Fix")]),t._v(" "),r("p",[t._v("We have removed the "),r("code",[t._v('role="presentation"')]),t._v(" attribute from CdrModal as it is not needed for accessibility.")]),t._v(" "),r("h3",{attrs:{id:"warning-and-error-icons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#warning-and-error-icons"}},[t._v("#")]),t._v(" Warning and Error Icons")]),t._v(" "),r("p",[t._v('We have updated our icon library to use circular icons for "error" states and triangular icons for "warning" states.')]),t._v(" "),r("p",[t._v("To align with this we have made the following breaking changes to our "),r("a",{attrs:{href:"https://rei.github.io/cedar-icons/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon library"),r("OutboundLink")],1),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("old asset name")]),t._v(" "),r("th",[t._v("new asset name")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("warning-stroke.svg")]),t._v(" "),r("td",[t._v("error-stroke.svg")])]),t._v(" "),r("tr",[r("td",[t._v("warning-fill.svg")]),t._v(" "),r("td",[t._v("error-fill.svg")])]),t._v(" "),r("tr",[r("td",[t._v("warning-tri.svg")]),t._v(" "),r("td",[t._v("warning-fill.svg")])]),t._v(" "),r("tr",[r("td",[t._v("n/a")]),t._v(" "),r("td",[t._v("warning-stroke.svg")])])])]),t._v(" "),r("p",[t._v("We have also updated the Cedar icon components with the following breaking changes:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("old component name")]),t._v(" "),r("th",[t._v("new component name")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("IconWarningStroke")]),t._v(" "),r("td",[t._v("IconErrorStroke")])]),t._v(" "),r("tr",[r("td",[t._v("IconWarningFill")]),t._v(" "),r("td",[t._v("IconErrorFill")])]),t._v(" "),r("tr",[r("td",[t._v("IconWarningTri")]),t._v(" "),r("td",[t._v("IconWarningFill")])]),t._v(" "),r("tr",[r("td",[t._v("n/a")]),t._v(" "),r("td",[t._v("IconWarningStroke")])])])]),t._v(" "),r("h3",{attrs:{id:"cdrtokens-js-naming-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtokens-js-naming-format"}},[t._v("#")]),t._v(" CdrTokens JS Naming Format")]),t._v(" "),r("p",[t._v("In version 6.x.x of @rei/cdr-tokens we updated the naming format for the CJS output to be "),r("code",[t._v("PascalCase")]),t._v(" so that it matches the formatting of the ESM output. This was done to ensure that CJS and ESM interoperability works properly. Note that loading the CJS output of tokens directly is not recommended as it results in the entire tokens object being imported.")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// CJS import\nvar tokens = require('@rei/cdr-tokens');\nvar CdrColorTextPrimary = tokens.CdrColorTextPrimary;\n\n// ESM import\nimport { CdrColorTextPrimary } from '@rei/cdr-tokens';\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br")])]),r("h3",{attrs:{id:"removals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#removals"}},[t._v("#")]),t._v(" Removals")]),t._v(" "),r("p",[t._v("In accordance with our deprecation policy, features that were deprecated in the "),r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#deprecations"}},[t._v("Winter 2020 release")]),t._v(" have been removed from Cedar.")],1),t._v(" "),r("h4",{attrs:{id:"deprecated-cedar-tokens-and-text-utilities-removed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-cedar-tokens-and-text-utilities-removed"}},[t._v("#")]),t._v(" Deprecated Cedar Tokens and Text Utilities Removed")]),t._v(" "),r("p",[t._v("The following mixins and utility classes have been removed. See the linked deprecation mapping for information on updating:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#redwood-display"}},[t._v("redwood-display-N0")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#redwood-body"}},[t._v("redwood-body-N0")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#maple"}},[t._v("maple-utility-N0")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#spruce"}},[t._v("spruce-display-N0 and spruce-body-N0")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#headings"}},[t._v("cdr-text-display-N00, cdr-text-heading-N00, and cdr-text-subheading-N00")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#type-utility-classes"}},[t._v("cdr-text-body")])],1)])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);