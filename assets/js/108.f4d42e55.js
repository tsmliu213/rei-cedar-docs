(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{600:function(e,t,s){"use strict";s.r(t);var i=s(4),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[s("p",[e._v("Cedar supports multiple tools and consumption methods. Reference the information below for an overview of the system parts and determine how to use Cedar in your project.")]),e._v(" "),s("h2",{attrs:{id:"cedar-tools-and-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cedar-tools-and-resources"}},[e._v("#")]),e._v(" Cedar Tools and Resources")]),e._v(" "),s("h3",{attrs:{id:"designer-toolkit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#designer-toolkit"}},[e._v("#")]),e._v(" Designer Toolkit")]),e._v(" "),s("p",[e._v("The Cedar UI toolkit is distributed through shared libraries in Figma, and includes all published components and foundational styles.")]),e._v(" "),s("p",[e._v("For more information about using the UI Toolkit, visit the "),s("RouterLink",{attrs:{to:"/getting-started/as-a-designer/"}},[e._v("Getting Started for Designers")]),e._v(" article.")],1),e._v(" "),s("h3",{attrs:{id:"design-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-tokens"}},[e._v("#")]),e._v(" Design Tokens")]),e._v(" "),s("p",[e._v("Design tokens are special variables used to maintain a scalable visual system for UI development and brand consistency. Cedar design tokens store the visual design attributes that define the foundation of REI’s visual language, including color, typography, and spacing.")]),e._v(" "),s("p",[e._v("Learn more about design tokens in the "),s("RouterLink",{attrs:{to:"/tokens/overview/"}},[e._v("Design Tokens Overview")]),e._v(" article.")],1),e._v(" "),s("h3",{attrs:{id:"components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),s("p",[e._v("Components use Cedar’s tokens and design foundations to distribute code templates that extend basic HTML elements and encapsulate reusable code.\nThese custom markup elements represent specific portions of the user interface. When used in your application, they will help ensure the UI remains consistent with REI’s digital display standards.")]),e._v(" "),s("p",[e._v("For example:\n"),s("code",[e._v("<cdr-link href=”rei.com”>CdrLink Component</cdr-link>")])]),e._v(" "),s("h3",{attrs:{id:"component-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-variables"}},[e._v("#")]),e._v(" Component Variables")]),e._v(" "),s("p",[e._v("Component variables are available for a subset of Cedar components. These SCSS or LESS mixins extend design tokens and define additional specific variables that are used to display Cedar components.")]),e._v(" "),s("p",[e._v("For example:\n"),s("code",[e._v("cdr-link-base-mixin")]),e._v(" would be used to style an element like a CdrLink component.")]),e._v(" "),s("p",[e._v("Learn more in the "),s("RouterLink",{attrs:{to:"/components/component-variables/"}},[e._v("Component Variables")]),e._v(" article.")],1),e._v(" "),s("h3",{attrs:{id:"documentation-site"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-site"}},[e._v("#")]),e._v(" Documentation Site")]),e._v(" "),s("p",[e._v("The documentation for each component and foundational style includes design guidelines, do’s and don’ts, considerations for accessibility, and API instructions for developers.")]),e._v(" "),s("h2",{attrs:{id:"dev-tools-comparison-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-tools-comparison-chart"}},[e._v("#")]),e._v(" Dev Tools Comparison Chart")]),e._v(" "),s("cdr-table",{staticClass:"table-vertical-align"},[s("thead",[s("tr",[s("th"),e._v(" "),s("th",[s("b",[e._v("Features")])]),e._v(" "),s("th",[s("b",[e._v("Requirements of usage")])])])]),e._v(" "),s("tbody",[s("tr",[s("th",[s("b",[e._v("Design Tokens")])]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Versioned and maintained by the design systems team")]),e._v(" "),s("li",[e._v("Semantic relationship to your content rather than to design")]),e._v(" "),s("li",[e._v("Represented in the UI Toolkit")]),e._v(" "),s("li",[e._v("Consistent release schedule")]),e._v(" "),s("li",[e._v("Up-to-date with digital brand standards")]),e._v(" "),s("li",[e._v("Distributed as SCSS, LESS, JSON, commonJS, or es6 module exports")]),e._v(" "),s("li",[e._v("Documented\n            "),s("ul",[s("li",[e._v("Usage")]),e._v(" "),s("li",[e._v("Design")]),e._v(" "),s("li",[e._v("API")])])]),e._v(" "),s("li",[e._v("Quick to implement")]),e._v(" "),s("li",[e._v("Compatible and can be combined with all other Cedar-distributed display assets")])])]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Usage requires a SCSS or LESS preprocessor for styles")]),e._v(" "),s("li",[e._v("Distributed as a pull model which your team integrates and maintains within your project")]),e._v(" "),s("li",[e._v("Users are required to stay within one major version of the current release")]),e._v(" "),s("li",[e._v("Support provided only for the current REI.com-supported browser matrix ")])])])]),e._v(" "),s("tr",[s("th",[s("b",[e._v("Vue components (recommended)")])]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Versioned and maintained by the design systems team")]),e._v(" "),s("li",[e._v("Represented in the UI Toolkit as a named symbol")]),e._v(" "),s("li",[e._v("Consistent release schedule")]),e._v(" "),s("li",[e._v("Self-contained and encapsulated markup, behavior, and styles")]),e._v(" "),s("li",[e._v("Up-to-date with digital brand standards")]),e._v(" "),s("li",[e._v("Documented\n            "),s("ul",[s("li",[e._v("Usage")]),e._v(" "),s("li",[e._v("Design")]),e._v(" "),s("li",[e._v("API")])])]),e._v(" "),s("li",[e._v("Meets WCAG AA standards for display and markup pertaining to the component without context to the page")]),e._v(" "),s("li",[e._v("Support for server and client rendering")]),e._v(" "),s("li",[e._v("Distributed as commonJS or es module exports")]),e._v(" "),s("li",[e._v("Precompiled assets do not require a CSS preprocessor")]),e._v(" "),s("li",[e._v("Tree-shakeable assets")]),e._v(" "),s("li",[e._v("Quick to implement")]),e._v(" "),s("li",[e._v("Compatible and can be combined with all other Cedar-distributed display assets")])])]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Requires Vue.js")]),e._v(" "),s("li",[e._v("Distributed as a pull model which your team integrates and maintains within your project")]),e._v(" "),s("li",[e._v("Support provided only for:\n            "),s("ul",[s("li",[e._v("Current and previous major versions")]),e._v(" "),s("li",[e._v("Standard micro site architecture framework, expectations, and standards")]),e._v(" "),s("li",[e._v("Current REI.com supported browser matrix")])])])])])]),e._v(" "),s("tr",[s("th",[s("b",[e._v("Component variables")])]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Versioned and maintained by the design systems team")]),e._v(" "),s("li",[e._v("Represented in the UI Toolkit as a named symbol")]),e._v(" "),s("li",[e._v("Consistent release schedule")]),e._v(" "),s("li",[e._v("Up-to-date with digital brand standards")]),e._v(" "),s("li",[e._v("Documented markup contract")]),e._v(" "),s("li",[e._v("Meets WCAG AA standards for specific proprietary display only")]),e._v(" "),s("li",[e._v("Distributed as SCSS or LESS mixins")]),e._v(" "),s("li",[e._v("Compatible and can be combined with all other Cedar-distributed display assets")])])]),e._v(" "),s("td",[s("ul",[s("li",[e._v("Requires SCSS or LESS preprocessor")]),e._v(" "),s("li",[e._v("Distributed as a pull model which your team integrates and maintains within your project")]),e._v(" "),s("li",[e._v("Support provided only for:\n            "),s("ul",[s("li",[e._v("Current and previous major versions")]),e._v(" "),s("li",[e._v("Current REI.com supported browser matrix")])])])])])])])])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);