webpackJsonp([39],{"4SbA":function(t,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=d("QEzc"),r=d("pUJf"),a=d("VU/8")(e.a,r.a,!1,null,null,null);a.options.__file="pages/CdrImg/CdrImg-0.0.1.vue",n.default=a.exports},"77tS":function(t,n){t.exports='<section><h1><span class="display-name">CdrImg</span></h1>\n<p><span class="file">src/components/image/cdrImg.vue<span></p>\n<p>Cedar 2 component for image</p>\n<p><span class="modifiers">Modifiers</span></p>\n<p>{responsive, rounded, circle, thumbnail}</p>\n<h3><button class=\'title\'>PROPS, METHODS, EVENTS, SLOTS</button></h3>\n<table>\n<thead>\n<tr>\n<th>Prop Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Require</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>string</td>\n<td>n/a</td>\n<td>true</td>\n<td>Required. Image source url.</td>\n</tr>\n<tr>\n<td>alt</td>\n<td>string</td>\n<td>&quot; &quot;</td>\n<td>false</td>\n<td>Required. Image alt text.</td>\n</tr>\n<tr>\n<td>lazy</td>\n<td>boolean</td>\n<td>n/a</td>\n<td>false</td>\n<td>Enable lazy loading.</td>\n</tr>\n<tr>\n<td>lazyOpts</td>\n<td>object</td>\n<td>function() {}</td>\n<td>false</td>\n<td>Object of lazy options</td>\n</tr>\n<tr>\n<td>ratio</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Aspect ratio of the media container. {auto, square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}</td>\n</tr>\n<tr>\n<td>ratioSm</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>sm breakpoint and above</td>\n</tr>\n<tr>\n<td>ratioMd</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>md breakpoint and above</td>\n</tr>\n<tr>\n<td>ratioLg</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>lg breakpoint and above</td>\n</tr>\n<tr>\n<td>crop</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Requires a <code>ratio</code>. Area to crop the image overflow to. {top, y-center, bottom} {left, x-center, right}</td>\n</tr>\n<tr>\n<td>cover</td>\n<td>boolean</td>\n<td>n/a</td>\n<td>false</td>\n<td>Requires a <code>ratio</code>. Scale the image to be as large as possible to fill the area (background-position: cover;)</td>\n</tr>\n<tr>\n<td>radius</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Sets a border radius to an element {square, top, right, bottom, left}</td>\n</tr>\n</tbody>\n</table>\n</section>\n'},QEzc:function(t,n,d){"use strict";var e=d("77tS"),r=d.n(e);n.a={name:"CdrImg-0-0-1",computed:{md:function(){return r.a}}}},pUJf:function(t,n,d){"use strict";var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{attrs:{id:"cedar-comp"},domProps:{innerHTML:this._s(this.md)}})])};e._withStripped=!0;var r={render:e,staticRenderFns:[]};n.a=r}});