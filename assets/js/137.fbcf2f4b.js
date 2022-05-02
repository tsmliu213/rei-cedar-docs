(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{532:function(e,t,a){"use strict";a.r(t);var s=a(4),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[a("p",[e._v("The Cedar UI Toolkit provides tools and processes to communicate Cedar component and token usage in Figma design assets. Designers using the Cedar Toolkit to build mockups and redlines will be creating annotated, inspectable, web-sharable assets to facilitate the developer hand-off process.")]),e._v(" "),a("h2",{attrs:{id:"developers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developers"}},[e._v("#")]),e._v(" Developers")]),e._v(" "),a("p",[e._v("Developers can jump to the "),a("a",{attrs:{href:"#developer-review"}},[e._v("hand-off")]),e._v(" section of this article.")]),e._v(" "),a("h2",{attrs:{id:"designers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#designers"}},[e._v("#")]),e._v(" Designers")]),e._v(" "),a("p",[e._v("We approach the hand-off process in a standardized way to ensure that any designer can communicate design specifications to any developer. Designs that leverage Cedar’s UI Toolkit are faster to build, easier to maintain, and quicker to hand-off than bespoke designs. Use the tips below to optimize your project hand-off with Cedar.")]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("h3",{attrs:{id:"artboards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#artboards"}},[e._v("#")]),e._v(" Artboards")]),e._v(" "),a("p",[e._v("To cover all supported "),a("RouterLink",{attrs:{to:"/components/grid/#the-basics"}},[e._v("breakpoints")]),e._v(", you will need to use, at minimum, four artboards. We recommend using 400px, 784px, 992px, and 1232px artboard widths. These values play nicely with an eight pixel grid and create whole-number column and gutter integers.")],1),e._v(" "),a("p",[e._v("To make starting your project easier, duplicate our Figma "),a("a",{attrs:{href:"https://www.figma.com/file/JlTaoRS1devxB4A4Xdd0oE/Artboards?node-id=0%3A1",target:"_blank",rel:"noopener noreferrer"}},[e._v("template file"),a("OutboundLink")],1),e._v(". If using device-specific artboard sizes for native applications, be sure to apply a Layout Grid to the frame.")]),e._v(" "),a("figure",[a("cdr-img",{attrs:{alt:"Artboard width examples from our Figma template file in extra small, small, and medium",src:e.$withBase("/getting-started-hand-off/hand-off-artboard-setup.png")}}),e._v(" "),a("figcaption",[a("cdr-caption",{attrs:{summary:"The template file contains the artboard widths you need to get started."}})],1)],1),e._v(" "),a("h2",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),a("p",[e._v("Toolkit libraries are automatically integrated into any new Figma project — simply drag-and-drop components from the asset tab or use shared styles for typography or color.")]),e._v(" "),a("figure",[a("cdr-img",{attrs:{alt:"A cursor drags a text box from the Figma asset panel into a project",src:e.$withBase("/getting-started-hand-off/hand-off-component-example.gif")}}),e._v(" "),a("figcaption",[a("cdr-caption",{attrs:{summary:"Components can be drag-and-dropped into your project from the assets panel in Figma."}})],1)],1),e._v(" "),a("p",[e._v("For more information on getting set up with Figma, visit the "),a("RouterLink",{attrs:{to:"/resources/for-designers/"}},[e._v("For Designers")]),e._v(" guide.")],1),e._v(" "),a("h3",{attrs:{id:"page-headers-and-footers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-headers-and-footers"}},[e._v("#")]),e._v(" Page Headers and Footers")]),e._v(" "),a("p",[e._v("The global header and footer are available as shared components. Look for them under the assets tab in Figma.")]),e._v(" "),a("h2",{attrs:{id:"redlining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redlining"}},[e._v("#")]),e._v(" Redlining")]),e._v(" "),a("p",[e._v("Effectively communicating specifications to a developer is the only way to ensure your design intention shows up in the delivered product. When you incorporate assets from the UI Toolkit into your designs, you’re also using the common language shared between the design assets in Figma and the code used to display them on the web.")]),e._v(" "),a("figure",[a("cdr-img",{attrs:{alt:"Spacing symbols separate components to aid in handoff between designers and developers",src:e.$withBase("/getting-started-hand-off/hand-off-spacing.png")}}),e._v(" "),a("figcaption",[a("cdr-caption",{attrs:{summary:"Here, spacing symbols are used to show separation between components."}})],1)],1),e._v(" "),a("p",[e._v("Component and token names are pre-embedded across the UI Toolkit to minimize the amount of redlining needed during this step. Developers can simply inspect the design assets to reference their coded counterparts.")]),e._v(" "),a("h3",{attrs:{id:"organizing-design-specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organizing-design-specifications"}},[e._v("#")]),e._v(" Organizing Design Specifications")]),e._v(" "),a("p",[e._v("We recommended teams keep all their design specifications together under one project. This lets developers know exactly where to find the most up-to-date assets and aligns closely to the single “source of truth” methodology.")]),e._v(" "),a("ul",[a("li",[e._v("Do keep all design specifications consolidated under one project in Figma")]),e._v(" "),a("li",[e._v("Don’t bury design specs within exploratory project files")])]),e._v(" "),a("h2",{attrs:{id:"hand-off"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hand-off"}},[e._v("#")]),e._v(" Hand-off")]),e._v(" "),a("h3",{attrs:{id:"developer-review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-review"}},[e._v("#")]),e._v(" Developer Review")]),e._v(" "),a("p",[e._v("As developers, you have view access to any project you’re invited to in Figma. The primary tools at your disposal will be the ability to comment and inspect.")]),e._v(" "),a("figure",[a("cdr-img",{attrs:{alt:"A comment from a designer to a developer on a Figma component",src:e.$withBase("/getting-started-hand-off/hand-off-commenting.png")}}),e._v(" "),a("figcaption",[a("cdr-caption",{attrs:{summary:"Commenting directly in Figma is a great way to manage hand-off conversations with your designer."}})],1)],1),e._v(" "),a("figure",[a("cdr-img",{attrs:{alt:"A developer inspects a table header to find its component reference and token",src:e.$withBase("/getting-started-hand-off/hand-off-inspect.png")}}),e._v(" "),a("figcaption",[a("cdr-caption",{attrs:{summary:"Use the inspect feature to discover component references or token names."}})],1)],1),e._v(" "),a("h2",{attrs:{id:"suggestions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suggestions"}},[e._v("#")]),e._v(" Suggestions?")]),e._v(" "),a("p",[e._v("Does this process work for you? Do you have any suggestions for improvement? Please let us know using the "),a("a",{attrs:{href:"https://rei.slack.com/messages/CA58YCGN4",target:"_blank",rel:"noopener noreferrer"}},[e._v("#cedar-user-support"),a("OutboundLink")],1),e._v(" slack channel.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);