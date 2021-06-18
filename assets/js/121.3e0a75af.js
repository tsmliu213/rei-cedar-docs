(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{612:function(e,t,r){"use strict";r.r(t);var a=r(4),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[r("h2",{attrs:{id:"update-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-steps"}},[e._v("#")]),e._v(" Update Steps")]),e._v(" "),r("p",[e._v("If you are not already on "),r("code",[e._v("@rei/cedar")]),e._v(" >= 2.x.x, you will first need to "),r("RouterLink",{attrs:{to:"/release-notes/summer-2019/"}},[e._v("upgrade your project")]),e._v(" to the single-package version of Cedar.")],1),e._v(" "),r("h3",{attrs:{id:"for-a-micro-site"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-a-micro-site"}},[e._v("#")]),e._v(" For a Micro-Site")]),e._v(" "),r("ul",[r("li",[e._v("Update to "),r("code",[e._v("@rei/cedar")]),e._v(" ^5.0.0")]),e._v(" "),r("li",[e._v("If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site.")])]),e._v(" "),r("h3",{attrs:{id:"for-a-component-package"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-a-component-package"}},[e._v("#")]),e._v(" For a Component Package")]),e._v(" "),r("ul",[r("li",[e._v("Update to "),r("code",[e._v("@rei/cedar")]),e._v(" ^5.0.0")]),e._v(" "),r("li",[e._v("Ensure your component is using "),r("code",[e._v("@rei/febs")]),e._v(" ^7.1.0 for it's prod and dev build systems")])]),e._v(" "),r("h2",{attrs:{id:"_5-2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-0"}},[e._v("#")]),e._v(" 5.2.0")]),e._v(" "),r("ul",[r("li",[e._v("Adds IconReturns, IconVirtualOutfitting, and IconStorefront components")]),e._v(" "),r("li",[e._v("Fixes CdrBreadcrumb text styling at "),r("code",[e._v("sm")]),e._v(" and "),r("code",[e._v("xs")]),e._v(" breakpoints")])]),e._v(" "),r("h2",{attrs:{id:"_5-1-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-0"}},[e._v("#")]),e._v(" 5.1.0")]),e._v(" "),r("ul",[r("li",[e._v("Fixes an issue with our ESM build that was breaking tree-shaking.")]),e._v(" "),r("li",[e._v("Sets "),r("code",[e._v("cdr-color-text-link-visited")]),e._v(" to the correct value. CdrLink does not currently have a "),r("code",[e._v("visited")]),e._v(" state.")]),e._v(" "),r("li",[e._v("Adds new tokens and utility classes for "),r("code",[e._v("cdr-space-three-x")]),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"_5-0-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-0"}},[e._v("#")]),e._v(" 5.0.0")]),e._v(" "),r("h2",{attrs:{id:"new-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),r("h3",{attrs:{id:"cedar-design-libraries-move-to-figma"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cedar-design-libraries-move-to-figma"}},[e._v("#")]),e._v(" Cedar Design Libraries Move to Figma")]),e._v(" "),r("p",[e._v("The UI Toolkit has migrated to Figma! Designers can find updated information in the "),r("RouterLink",{attrs:{to:"/getting-started/as-a-designer/"}},[e._v("getting started")]),e._v(" article. Additionally, Figma replaces Abstract in facilitating the design to development "),r("RouterLink",{attrs:{to:"/getting-started/hand-off/"}},[e._v("hand-off process")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"updated-brand-color-palette"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updated-brand-color-palette"}},[e._v("#")]),e._v(" Updated Brand Color Palette")]),e._v(" "),r("p",[e._v('Cedar components and design tokens have been updated to make use of the new brand palette. Any hardcoded color values in your application may need to be updated in order to stay in sync with the new brand palette. We have additionally removed the concept of "lightmode" and "darkmode" themes from Cedar to align with the brand palette updates. See the '),r("a",{attrs:{href:"#color-token-updates"}},[e._v("color token deprecation list")]),e._v(" for guidance on re-mapping existing color tokens.")]),e._v(" "),r("h3",{attrs:{id:"new-component-cdrtable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-component-cdrtable"}},[e._v("#")]),e._v(" New Component: CdrTable")]),e._v(" "),r("p",[e._v("We have added a component for tables. This component is more generic than the existing data table (which has been moved to fed components). See the "),r("RouterLink",{attrs:{to:"/components/table/"}},[e._v("CdrTable docs")]),e._v(" for more details and examples. Note that the "),r("a",{attrs:{href:"#cdrdatatable"}},[e._v("CdrDataTable component has been deprecated")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"new-component-cdrcard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-component-cdrcard"}},[e._v("#")]),e._v(" New Component: CdrCard")]),e._v(" "),r("p",[e._v("CdrCard is a simple wrapper component that allows for composing various card layouts, and now officially supported in the system. See the "),r("RouterLink",{attrs:{to:"/components/card/"}},[e._v("CdrCard docs")]),e._v(" for more details and usage guidelines.")],1),e._v(" "),r("h3",{attrs:{id:"cdrbutton-icon-only-variant"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrbutton-icon-only-variant"}},[e._v("#")]),e._v(" CdrButton Icon-Only Variant")]),e._v(" "),r("p",[e._v("We have added a new variant to CdrButton that allows you to render an icon-only button that has a background and border in order to make icon-only buttons more visible. See the "),r("RouterLink",{attrs:{to:"/components/buttons/#icon-only-with-background"}},[e._v("CdrButton docs")]),e._v(" for more details.")],1),e._v(" "),r("h3",{attrs:{id:"new-utility-classes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-utility-classes"}},[e._v("#")]),e._v(" New Utility Classes")]),e._v(" "),r("p",[e._v("Utility classes for foreground and background color are now available. See the "),r("RouterLink",{attrs:{to:"/components/utilities/#color"}},[e._v("utilities page")]),e._v(" for a full list.\nNote that the existing color utility classes have been "),r("a",{attrs:{href:"#color-utility-classes"}},[e._v("deprecated")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"cdraccordiongroup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdraccordiongroup"}},[e._v("#")]),e._v(" CdrAccordionGroup")]),e._v(" "),r("p",[e._v("We have added this wrapper component to better support the accessibility of accordion groups. Simply wrap your existing groups of accordions in this component and keyboard navigation will be taken care of. See the "),r("RouterLink",{attrs:{to:"/components/accordion/"}},[e._v("CdrAccordion docs")]),e._v(" for more details and examples.")],1),e._v(" "),r("h3",{attrs:{id:"cdrimg-event-handlers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrimg-event-handlers"}},[e._v("#")]),e._v(" CdrImg Event Handlers")]),e._v(" "),r("p",[e._v("We have updated CdrImg to accept event handlers. This is intended to support "),r("code",[e._v("onError")]),e._v(" event handlers. See the "),r("RouterLink",{attrs:{to:"/components/image/#error-event-handler"}},[e._v("CdrImg docs")]),e._v(" for more details and examples.")],1),e._v(" "),r("h3",{attrs:{id:"cdrmodal-fullscreen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal-fullscreen"}},[e._v("#")]),e._v(" CdrModal Fullscreen")]),e._v(" "),r("p",[e._v("CdrModal now shifts to a fullscreen view at the "),r("code",[e._v("xs")]),e._v(" breakpoint, and will otherwise render at "),r("code",[e._v("640px")]),e._v(" wide. Note that the "),r("code",[e._v("size")]),e._v(" property  "),r("a",{attrs:{href:"#cdrmodal-size-prop-removed"}},[e._v("has been removed from CdrModal")]),e._v(" in order to accomodate this update.")]),e._v(" "),r("h3",{attrs:{id:"cdrtabs-active-tab-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtabs-active-tab-property"}},[e._v("#")]),e._v(" CdrTabs active-tab Property")]),e._v(" "),r("p",[e._v("CdrTabs now accepts a property named "),r("code",[e._v("active-tab")]),e._v(' which allows for changing which tab content is "active" on the initial page load. See the '),r("RouterLink",{attrs:{to:"/components/tabs/#active-tab"}},[e._v("CdrTabs docs")]),e._v(" for more information.")],1),e._v(" "),r("h2",{attrs:{id:"bug-fixes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),r("h3",{attrs:{id:"cdrrating-medium-size"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrrating-medium-size"}},[e._v("#")]),e._v(" CdrRating Medium Size")]),e._v(" "),r("p",[e._v("Added missing medium responsive size modifier. Now all options can be used at all breakpoints for responsive sizing. The default size is still medium.")]),e._v(" "),r("h3",{attrs:{id:"cdraccordion-content-reflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdraccordion-content-reflow"}},[e._v("#")]),e._v(" CdrAccordion Content Reflow")]),e._v(" "),r("p",[e._v("CdrAccordion has been updated to better handle content reflows which may occur when a browser window is resized or when content is added or removed to an opened accordion.")]),e._v(" "),r("h3",{attrs:{id:"cdrtabs-mobile-underline"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtabs-mobile-underline"}},[e._v("#")]),e._v(" CdrTabs Mobile Underline")]),e._v(" "),r("p",[e._v("CdrTabs has been updated so that the active tab underline no longer causes window size issues on mobile when it is scrolled offscreen.")]),e._v(" "),r("h3",{attrs:{id:"accessibility-enhancements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessibility-enhancements"}},[e._v("#")]),e._v(" Accessibility Enhancements")]),e._v(" "),r("h4",{attrs:{id:"cdraccordion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdraccordion"}},[e._v("#")]),e._v(" CdrAccordion")]),e._v(" "),r("ul",[r("li",[e._v("Documentation updated with usage requirements.")]),e._v(" "),r("li",[e._v("The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.")]),e._v(" "),r("li",[e._v("Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.")])]),e._v(" "),r("h4",{attrs:{id:"cdrlink"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrlink"}},[e._v("#")]),e._v(" CdrLink")]),e._v(" "),r("ul",[r("li",[e._v("Documentation updated with usage requirements.")]),e._v(" "),r("li",[e._v("Color meets 4.5:1 contrast with background.")]),e._v(" "),r("li",[e._v("Color meets 3:1 contrast with surrounding text.")]),e._v(" "),r("li",[e._v("Hover and focus colors meet 3:1 contrast with surrounding text.")])]),e._v(" "),r("h4",{attrs:{id:"cdrbreadcrumb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrbreadcrumb"}},[e._v("#")]),e._v(" CdrBreadcrumb")]),e._v(" "),r("ul",[r("li",[e._v("A nav element labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.")]),e._v(" "),r("li",[e._v("The ellipsis button has added "),r("code",[e._v('aria-expanded="false"')]),e._v(" and updated screen reader text ensuring the users understand the number of items hidden in this control.")])]),e._v(" "),r("h4",{attrs:{id:"cdrbutton"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrbutton"}},[e._v("#")]),e._v(" CdrButton")]),e._v(" "),r("ul",[r("li",[e._v("Documentation updated with usage requirements.")]),e._v(" "),r("li",[e._v("Variants: color meets 3:1 contrast to background.")]),e._v(" "),r("li",[e._v("Variants: Hover and focus states meet 3:1 contrast to background and surrounding actionable elements.")]),e._v(" "),r("li",[e._v("Uses an ordered list structure.")])]),e._v(" "),r("h4",{attrs:{id:"cdrcheckbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrcheckbox"}},[e._v("#")]),e._v(" CdrCheckbox")]),e._v(" "),r("ul",[r("li",[e._v("Documentation updated with usage requirements.")]),e._v(" "),r("li",[e._v("Active, hover, and focus have increased border width to ensure contrast meets 3:1 with background and default actionable elements.")])]),e._v(" "),r("h4",{attrs:{id:"cdrmodal"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal"}},[e._v("#")]),e._v(" CdrModal")]),e._v(" "),r("ul",[r("li",[e._v("Focus on button click moves to modal panel.")])]),e._v(" "),r("h4",{attrs:{id:"cdrpagination"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrpagination"}},[e._v("#")]),e._v(" CdrPagination")]),e._v(" "),r("ul",[r("li",[e._v("Pagination component is wrapped with "),r("code",[e._v("<nav>")]),e._v(" element.")]),e._v(" "),r("li",[e._v("Changed "),r("code",[e._v("aria-label")]),e._v(" to "),r("code",[e._v("pagination")]),e._v(" rather than "),r("code",[e._v("pagination navigation")]),e._v(" as navigation would be read out twice.")]),e._v(" "),r("li",[e._v("Uses an ordered list structure.")])]),e._v(" "),r("h4",{attrs:{id:"cdrradio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrradio"}},[e._v("#")]),e._v(" CdrRadio")]),e._v(" "),r("ul",[r("li",[e._v("Documentation updated with usage requirements.")]),e._v(" "),r("li",[e._v("Active, hover, and focus have increased border width to ensure contrast meets 3:1 with background and default actionable elements.")])]),e._v(" "),r("h4",{attrs:{id:"cdrrating"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrrating"}},[e._v("#")]),e._v(" CdrRating")]),e._v(" "),r("ul",[r("li",[e._v("Documentation updated with usage requirements.")]),e._v(" "),r("li",[e._v("Star icon visual boundaries provide a minimum of 3:1 to the background.")]),e._v(" "),r("li",[e._v("Star icon visual boundaries provide a minimum of 3:1 fill to non-fill.")]),e._v(" "),r("li",[e._v("When images are disabled, star icons are replaced with Unicode characters .")]),e._v(" "),r("li",[e._v("Star icon is visible in high contrast mode.")]),e._v(" "),r("li",[e._v("Screen reader text has been updated for each variant possible:")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Use Case")]),e._v(" "),r("th",[e._v("Screen Reader Text")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("linked rating stars with average and count: has reviews")]),e._v(" "),r("td",[e._v("View the (x) reviews with an average rating of #.## out of 5 stars")])]),e._v(" "),r("tr",[r("td",[e._v("linked rating stars with count: has reviews")]),e._v(" "),r("td",[e._v('"View the (x) reviews with an average rating of #.## out of 5 stars"')])]),e._v(" "),r("tr",[r("td",[e._v("linked rating stars with count: no reviews")]),e._v(" "),r("td",[e._v('"No reviews yet; be the first!"')])]),e._v(" "),r("tr",[r("td",[e._v("rating stars with average and count: has reviews")]),e._v(" "),r("td",[e._v('"(x) reviews with an average rating of #.## out of 5 stars"')])]),e._v(" "),r("tr",[r("td",[e._v("rating stars with average and count: no reviews")]),e._v(" "),r("td",[e._v('"0 reviews"')])]),e._v(" "),r("tr",[r("td",[e._v("rating stars with count: has reviews")]),e._v(" "),r("td",[e._v('"(x) reviews with an average rating of #.## out of 5 stars"')])]),e._v(" "),r("tr",[r("td",[e._v("rating stars with count: no reviews")]),e._v(" "),r("td",[e._v('"0 reviews"')])])])]),e._v(" "),r("h4",{attrs:{id:"cdrtab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtab"}},[e._v("#")]),e._v(" CdrTab")]),e._v(" "),r("ul",[r("li",[e._v("Only the active tab is in the tab order. The user reaches the tabbed panel component by pressing the tab key until the active tab title receives focus.")]),e._v(" "),r("li",[e._v("Clicking on the tab title activates the tab and sets focus to the tab title.")]),e._v(" "),r("li",[e._v("Tab navigation will move from tab item to the associated panel.")]),e._v(" "),r("li",[e._v('The currently selected tab list item has the state aria-selected="true".')]),e._v(" "),r("li",[e._v("Uses an unordered list structure.")])]),e._v(" "),r("h2",{attrs:{id:"breaking-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking Changes")]),e._v(" "),r("h3",{attrs:{id:"ie11-support-dropped"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ie11-support-dropped"}},[e._v("#")]),e._v(" IE11 Support Dropped")]),e._v(" "),r("p",[e._v("Internet Explorer 11 has been removed from the REI browser support matrix. Cedar has been updated to no longer include IE11 related polyfills.")]),e._v(" "),r("h3",{attrs:{id:"unitless-js-tokens-for-spacing-and-breakpoints"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unitless-js-tokens-for-spacing-and-breakpoints"}},[e._v("#")]),e._v(" Unitless JS Tokens For Spacing and Breakpoints")]),e._v(" "),r("p",[e._v("The space ("),r("code",[e._v("cdr-space-...")]),e._v(") and breakpoint ("),r("code",[e._v("cdr-breakpoint-...")]),e._v(') tokens in the JS distributions of @rei/cdr-tokens have been made "unitless". Those tokens previously had to be manipulated in order to use them effectively in JavaScript, for example by doing: '),r("code",[e._v("CdrSpaceOneX.split('px')[0]")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"component-variables-now-export-mixins-only"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-variables-now-export-mixins-only"}},[e._v("#")]),e._v(" Component Variables Now Export Mixins Only")]),e._v(" "),r("p",[e._v("We have updated our "),r("a",{attrs:{href:"https://github.com/rei/rei-cedar-component-variables/",target:"_blank",rel:"noopener noreferrer"}},[e._v("component variables"),r("OutboundLink")],1),e._v(" package to export only the mixins for component styles and have excluded the individual variables used within those mixins. Component variables are intended for applying the Cedar component CSS styles in projects which cannot use the Vue components directly, which is satisfied by exporting the mixins. Because the individual styles applied by a mixin might change from release to release it was very difficult to manage and document updates to the individual variables in a way that allowed consumers to stay up to date with Cedar. If you were using individual variables from the component variables package, we recommend you either switch to using the full mixin, replace that variable with the appropriate "),r("RouterLink",{attrs:{to:"/tokens/all-tokens/"}},[e._v("Cedar token")]),e._v(" if one exists, or simply hardcoding the value.")],1),e._v(" "),r("h3",{attrs:{id:"cdraccordiongroup-wrapper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdraccordiongroup-wrapper"}},[e._v("#")]),e._v(" CdrAccordionGroup Wrapper")]),e._v(" "),r("p",[e._v("CdrAccordion components must now be wrapped inside an instance of CdrAccordionGroup to ensure that accordions meet accessibility requirements. See the "),r("RouterLink",{attrs:{to:"/components/accordion/"}},[e._v("CdrAccordion docs")]),e._v(" for more details and examples.")],1),e._v(" "),r("h3",{attrs:{id:"cdraccordion-level-prop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdraccordion-level-prop"}},[e._v("#")]),e._v(" CdrAccordion Level Prop")]),e._v(" "),r("p",[e._v("CdrAccordion has a new required prop: "),r("code",[e._v("level")]),e._v(". This prop is required in order to meet WCAG accessibility standards and should be set to the appropriate heading level for the context of your page. See the "),r("RouterLink",{attrs:{to:"/components/accordion/"}},[e._v("CdrAccordion docs")]),e._v(" for more details and examples.")],1),e._v(" "),r("h3",{attrs:{id:"cdrlink-theming-removed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrlink-theming-removed"}},[e._v("#")]),e._v(" CdrLink Theming Removed")]),e._v(" "),r("p",[e._v("CdrLink previously supported theming by setting an "),r("code",[e._v("on-dark")]),e._v(" or "),r("code",[e._v("on-light")]),e._v(" CSS class on a container element. Due to the new color scale this feature was not possible to support in a consistent way and has been removed.")]),e._v(" "),r("h3",{attrs:{id:"cdrbutton-ondark-removed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrbutton-ondark-removed"}},[e._v("#")]),e._v(" CdrButton OnDark Removed")]),e._v(" "),r("p",[e._v("CdrButton previously accepted a prop named "),r("code",[e._v("on-dark")]),e._v(" which could be used in conjunction with the "),r("code",[e._v("icon-only")]),e._v(" prop to render a button with a background. This was intended to be used on dark backgrounds to make the icon button more visible and accessible. Due to the new color scale this feature was not possible to continue supporting as is, and has been replaced with a new "),r("a",{attrs:{href:"#cdrbutton-icon-only-variant"}},[e._v("with-background")]),e._v(" property.")]),e._v(" "),r("h3",{attrs:{id:"cdrmodal-size-prop-removed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal-size-prop-removed"}},[e._v("#")]),e._v(" CdrModal Size Prop Removed")]),e._v(" "),r("p",[e._v("In order to support the CdrModal fullscreen functionality, we have removed its "),r("code",[e._v("size")]),e._v(" prop. CdrModal will now always display at "),r("code",[e._v("640px")]),e._v(" wide except when viewed in "),r("code",[e._v("xs")]),e._v(" screen sizes.")]),e._v(" "),r("h3",{attrs:{id:"cdrtabpanel-accessibility-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtabpanel-accessibility-requirements"}},[e._v("#")]),e._v(" CdrTabPanel Accessibility Requirements")]),e._v(" "),r("p",[e._v("In order to make the CdrTabs component meet accessibility requirements, you must now explicitly set both an "),r("code",[e._v("id")]),e._v(" and "),r("code",[e._v("aria-labelledby")]),e._v(" property on CdrTabPanel elements. These properties must be unique identifiers, but other than that their content is arbitrary, for example: "),r("code",[e._v('<cdr-tab-panel id="foo-tab-panel" aria-labelledby="foo-tab" name="foo">')]),e._v(". This allows us to wire up "),r("code",[e._v("aria-")]),e._v(" tags to correctly link the content of each tab to the header element that activates it.  See the "),r("RouterLink",{attrs:{to:"/components/tabs/#props"}},[e._v("CdrTabs docs")]),e._v(" for more information and examples of usage.")],1),e._v(" "),r("h2",{attrs:{id:"deprecations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deprecations"}},[e._v("#")]),e._v(" Deprecations")]),e._v(" "),r("h3",{attrs:{id:"cdrdatatable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrdatatable"}},[e._v("#")]),e._v(" CdrDataTable")]),e._v(" "),r("p",[e._v("The CdrDataTable component has been deprecated in favor of the new CdrTable component. CdrDataTable is a complex component which was difficult for developers to customize or enhance, whereas the new CdrTable component is a simple wrapper which applies styling to native HTML "),r("code",[e._v("<table>")]),e._v(" markup. The existing CdrDataTable component has been ported to the FEDCOMP repository and is now available in the REI private NPM registry as "),r("a",{attrs:{href:"https://git.rei.com/projects/FEDCOMP/repos/data-table/browse",target:"_blank",rel:"noopener noreferrer"}},[e._v("@rei/data-table"),r("OutboundLink")],1),e._v(". Note that "),r("code",[e._v("@rei/data-table")]),e._v(" replaces the "),r("code",[e._v("modifier")]),e._v(" property with individual "),r("code",[e._v("compact")]),e._v(" and "),r("code",[e._v("borderless")]),e._v(" boolean properties. Consumers of CdrDataTable should either replace their usage of that component with CdrTable, or install and use "),r("code",[e._v("@rei/data-table")]),e._v(" instead.")]),e._v(" "),r("h3",{attrs:{id:"color-token-updates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#color-token-updates"}},[e._v("#")]),e._v(" Color Token Updates")]),e._v(" "),r("p",[e._v("Legacy darkmode token variants have been deprecated. To update pages currently using darkmode tokens, consult your designer for a recommendation.")]),e._v(" "),r("p",[e._v("Note that Cedar design tokens should always be applied semantically, when re-mapping tokens take care to ensure that the token name matches it's purpose i.e, don't use a "),r("code",[e._v("border-input")]),e._v(" token for anything besides the border of an input element.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Deprecated Token")]),e._v(" "),r("th",[e._v("Equivalent Token")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("cdr-color-text-primary-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-primary-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-secondary-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-secondary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-secondary-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-disabled-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-disabled")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-disabled-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-link-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-link-rest")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-link-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-error-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-error")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-error-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-form-label-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-input-label")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-form-label-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-form-placeholder-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-input-placeholder")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-form-placeholder-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-form-disabled-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-text-input-disabled")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-text-form-disabled-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-icon-primary-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-icon-default")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-icon-primary-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-icon-emphasis-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-icon-emphasis")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-icon-emphasis-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-dark")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-darker")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-light")]),e._v(" "),r("td",[e._v("cdr-color-background-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-lighter")]),e._v(" "),r("td",[e._v("cdr-color-background-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-lightest")]),e._v(" "),r("td",[e._v("cdr-color-background-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-form-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-background-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-form-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-form-input-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-background-input-default")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-background-form-input-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-primary-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-border-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-primary-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-secondary-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-border-secondary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-secondary-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-disabled-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-border-input-default-disabled")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-disabled-darkmode")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-error-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-border-error")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-color-border-selected-lightmode")]),e._v(" "),r("td",[e._v("cdr-color-border-input-default-selected")])])])]),e._v(" "),r("h3",{attrs:{id:"color-utility-classes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#color-utility-classes"}},[e._v("#")]),e._v(" Color Utility Classes")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Deprecated utility")]),e._v(" "),r("th",[e._v("Equivalent utility")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("cdr-bg--light")]),e._v(" "),r("td",[e._v("cdr-color-background-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-bg--lighter")]),e._v(" "),r("td",[e._v("cdr-color-background-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-bg--lightest")]),e._v(" "),r("td",[e._v("cdr-color-background-primary")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-bg--dark")]),e._v(" "),r("td",[e._v("n/a")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-bg--darker")]),e._v(" "),r("td",[e._v("n/a")])])])]),e._v(" "),r("h3",{attrs:{id:"text-tokens"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#text-tokens"}},[e._v("#")]),e._v(" Text Tokens")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Deprecated token/mixin")]),e._v(" "),r("th",[e._v("Equivalent token/mixin")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("cdr-text-utility-n00")]),e._v(" "),r("td",[e._v("cdr-text-utility-sans-n00")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-text-utility-strong-n00")]),e._v(" "),r("td",[e._v("cdr-text-utility-sans-strong-n00")])])])]),e._v(" "),r("h3",{attrs:{id:"type-utility-classes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#type-utility-classes"}},[e._v("#")]),e._v(" Type Utility classes")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Deprecated class name")]),e._v(" "),r("th",[e._v("Equivalent class name")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("cdr-text-utility-n00")]),e._v(" "),r("td",[e._v("cdr-text--utility-sans-n00")])]),e._v(" "),r("tr",[r("td",[e._v("cdr-text-utility-strong-n00")]),e._v(" "),r("td",[e._v("cdr-text--utility-sans-strong-n00")])])])]),e._v(" "),r("h3",{attrs:{id:"cdrtext-modifiers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdrtext-modifiers"}},[e._v("#")]),e._v(" CdrText Modifiers")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Deprecated class name")]),e._v(" "),r("th",[e._v("Equivalent class name")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("utility-n00")]),e._v(" "),r("td",[e._v("utility-sans-n00")])]),e._v(" "),r("tr",[r("td",[e._v("utility-strong-n00")]),e._v(" "),r("td",[e._v("utility-sans-strong-n00")])])])]),e._v(" "),r("h2",{attrs:{id:"removals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#removals"}},[e._v("#")]),e._v(" Removals")]),e._v(" "),r("p",[e._v("In accordance with our deprecation policy, features that were deprecated in the "),r("RouterLink",{attrs:{to:"/release-notes/fall-2019/#deprecations"}},[e._v("Fall 2019 release")]),e._v(" have been removed from Cedar.")],1),e._v(" "),r("ul",[r("li",[e._v("The cdr-text modifiers for display, heading-small/medium/large, and subheading, as well as cdr-tokens mixins for "),r("code",[e._v("cdr-text-header-n")]),e._v(" and "),r("code",[e._v("spruce-display")]),e._v(" should be updated according to the typography mappings from the "),r("RouterLink",{attrs:{to:"/release-notes/winter-2020/#updated-deprecation-mappings"}},[e._v("Winter 2020 release")]),e._v(" rather than the ones in the Fall 2019 release notes.")],1),e._v(" "),r("li",[e._v("Alignment and display utilities should be re-mapped to their new naming structure.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);