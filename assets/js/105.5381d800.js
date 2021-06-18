(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{597:function(e,a,s){"use strict";s.r(a);var t=s(4),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[s("h2",{attrs:{id:"developing-for-mobile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developing-for-mobile"}},[e._v("#")]),e._v(" Developing for Mobile")]),e._v(" "),s("p",[e._v("Currently development for iOS and Android is through the usage of Cedar Tokens as documented below.")]),e._v(" "),s("p",[e._v("Our mobile development packages include fonts that are licensed and proprietary to REI. For more information or questions regarding Cedar’s support for external consumers using the mobile development packages on GitHub or NPM, please reach out to "),s("a",{attrs:{href:"mailto:cedar@rei.com"}},[e._v("cedar@rei.com")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"ios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" iOS")]),e._v(" "),s("h4",{attrs:{id:"cocoapods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods"}},[e._v("#")]),e._v(" CocoaPods")]),e._v(" "),s("p",[e._v("The preferred way to consume Cedar for iOS is through CocoaPods.  View "),s("a",{attrs:{href:"https://www.cocoapods.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.cocoapods.org"),s("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),s("p",[e._v("To find out if Cocoapods is already installed, open the terminal and run:")]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("pod --version\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If “command not found” is returned then Cocoapods in not installed.")]),e._v(" "),s("p",[e._v("To install Cocoapods:")]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" gem "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cocoapods\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("To set up Cocoapods from the project/workspace directory, run:")]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("pod init\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The above command will create a Podfile in your current directory.")]),e._v(" "),s("p",[e._v("The Podfile must be modified with the following to include Cedar as a dependency:")]),e._v(" "),s("p",[s("strong",[e._v("1. Prior to the Targets Section of the Podfile:")])]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://git.rei.com/projects/CDR/repos/cedar-iosl/CedarPodSpec.git'")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("2. In the Targets Section of the Podfile:")])]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("pod "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'CedarTokens'")]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'~> 0.2.0'")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("Full Podfile Example for Reference:")])]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("project "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'CedarIOSCocoaPodDemo.xcodeproj/'")]),e._v("\n\nplatform :ios, "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'12.0'")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://git.rei.com/projects/CDR/repos/cedar-ios-podspec/CedarPodSpec.git'")]),e._v("\n\ntarget "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'CedarIOSCocoaPodDemo'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Pods for CedarIOSCocoaPodDemo")]),e._v("\n  pod "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'CedarTokens'")]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'~> 0.2.0'")]),e._v("\n\nend\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("hr"),e._v(" "),s("h4",{attrs:{id:"manual-consumption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-consumption"}},[e._v("#")]),e._v(" Manual Consumption")]),e._v(" "),s("p",[e._v("If you don’t use Cocoapods, you can manually import files into your iOS project/workspace.")]),e._v(" "),s("h5",{attrs:{id:"colors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colors"}},[e._v("#")]),e._v(" Colors")]),e._v(" "),s("p",[e._v("Color Sets in a .xcasset file.  Import the file by dragging the "),s("code",[e._v("Cedar.xcassets > Colors")]),e._v(" folder into your project's asset folder.")]),e._v(" "),s("p",[e._v("You can set the colors in Interface Builder, or by:")]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Button1.backgroundColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" UIColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("named: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cdr_color_text_primary"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h5",{attrs:{id:"text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[e._v("#")]),e._v(" Text")]),e._v(" "),s("p",[e._v("The package includes Sentinel and Roboto font source files along with Swift Classes for applying Apple's Dynamic Type behavior to the font.")]),e._v(" "),s("p",[e._v("Importing the source font is done by creating a group under your target in xcode and dragging the font files into that group.  Add the fonts to the info.plist under "),s("code",[e._v("Fonts provided by application")]),e._v(".")]),e._v(" "),s("p",[e._v("Finally, import the CedarFont.swift file along with the CedarTextStyles.plist.  This will allow you to set the fonts by:")]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("  // Button Title "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" Style\n  Button1.titleLabel?.font "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" CedarFont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(".getCedarFont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("forTextStyle: .title1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Button1.titleLabel?.adjustsFontForContentSizeCategory "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h5",{attrs:{id:"icons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icons"}},[e._v("#")]),e._v(" Icons")]),e._v(" "),s("p",[e._v("Cedar provides icons  in vector PDF format for iOS scaling.  According to initial investigation, only one file per icon is needed in this format. There is no need for @1x, @2x, and @3x variants.")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"android"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[e._v("#")]),e._v(" Android")]),e._v(" "),s("h4",{attrs:{id:"maven"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[e._v("#")]),e._v(" Maven")]),e._v(" "),s("p",[e._v("The preferred way to consume Cedar Tokens on Android is to use Maven.")]),e._v(" "),s("p",[e._v("Add the following to the build.gradle file in your Android project:")]),e._v(" "),s("p",[s("em",[e._v("Terminal")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Implementation mvnrepos.rei.com:cedar-android.aar:0.2.0\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"manual-consumption-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-consumption-2"}},[e._v("#")]),e._v(" Manual Consumption")]),e._v(" "),s("p",[e._v("If you don’t use Maven, you can import the Cedar Tokens into your Android project/workspace manually by dragging the resources into your project within Android Studio.  The resources are located at the "),s("a",{attrs:{href:"https://git.rei.com/projects/CDR/repos/cedar-android",target:"_blank",rel:"noopener noreferrer"}},[e._v("cedar-android repository on Bitbucket"),s("OutboundLink")],1)]),e._v(" "),s("hr")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);