(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(n,e,t){var content=t(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(54).default)("438e1f7c",content,!0,{sourceMap:!1})},187:function(n,e,t){"use strict";var o={name:"Default",data:function(){return{}}},r=(t(232),t(43)),component=Object(r.a)(o,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},190:function(n,e,t){t(191),n.exports=t(192)},228:function(n,e,t){var content=t(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(54).default)("382a115c",content,!0,{sourceMap:!1})},229:function(n,e,t){var o=t(53)((function(i){return i[1]}));o.push([n.i,'/*! tailwindcss v2.1.0 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t\'Segoe UI\',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t\'Apple Color Emoji\',\n\t\t\'Segoe UI Emoji\';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd \'em\' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t\'Liberation Mono\',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent \'sub\' and \'sup\' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type=\'button\'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional \':invalid\' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out \'fieldset\' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \'inherit\' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user\'s configured `sans` font-family (with Tailwind\'s default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind\'s default "normal" line-height so the user isn\'t forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it\'s border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don\'t inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured \'mono\' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * \'mono\' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that\'s\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.prose{\n  color:#374151;\n  max-width:65ch;\n}\n\n.prose a{\n  color:#111827;\n  text-decoration:underline;\n  font-weight:500;\n}\n\n.prose strong{\n  color:#111827;\n  font-weight:600;\n}\n\n.prose ol[type="a"]{\n  --list-counter-style:lower-alpha;\n}\n\n.prose ol[type="i"]{\n  --list-counter-style:lower-roman;\n}\n\n.prose ol[type="1"]{\n  --list-counter-style:decimal;\n}\n\n.prose ol > li{\n  position:relative;\n  padding-left:1.75em;\n}\n\n.prose ol > li::before{\n  content:counter(list-item, var(--list-counter-style, decimal)) ".";\n  position:absolute;\n  font-weight:400;\n  color:#6b7280;\n  left:0;\n}\n\n.prose ul > li{\n  position:relative;\n  padding-left:1.75em;\n}\n\n.prose ul > li::before{\n  content:"";\n  position:absolute;\n  background-color:#d1d5db;\n  border-radius:50%;\n  width:0.375em;\n  height:0.375em;\n  top:calc(0.875em - 0.1875em);\n  left:0.25em;\n}\n\n.prose hr{\n  border-color:#e5e7eb;\n  border-top-width:1px;\n  margin-top:3em;\n  margin-bottom:3em;\n}\n\n.prose blockquote{\n  font-weight:500;\n  font-style:italic;\n  color:#111827;\n  border-left-width:0.25rem;\n  border-left-color:#e5e7eb;\n  quotes:"\\201C""\\201D""\\2018""\\2019";\n  margin-top:1.6em;\n  margin-bottom:1.6em;\n  padding-left:1em;\n}\n\n.prose blockquote p:first-of-type::before{\n  content:open-quote;\n}\n\n.prose blockquote p:last-of-type::after{\n  content:close-quote;\n}\n\n.prose h1{\n  color:#111827;\n  font-weight:800;\n  font-size:2.25em;\n  margin-top:0;\n  margin-bottom:0.8888889em;\n  line-height:1.1111111;\n}\n\n.prose h2{\n  color:#111827;\n  font-weight:700;\n  font-size:1.5em;\n  margin-top:2em;\n  margin-bottom:1em;\n  line-height:1.3333333;\n}\n\n.prose h3{\n  color:#111827;\n  font-weight:600;\n  font-size:1.25em;\n  margin-top:1.6em;\n  margin-bottom:0.6em;\n  line-height:1.6;\n}\n\n.prose h4{\n  color:#111827;\n  font-weight:600;\n  margin-top:1.5em;\n  margin-bottom:0.5em;\n  line-height:1.5;\n}\n\n.prose figure figcaption{\n  color:#6b7280;\n  font-size:0.875em;\n  line-height:1.4285714;\n  margin-top:0.8571429em;\n}\n\n.prose code{\n  color:#111827;\n  font-weight:600;\n  font-size:0.875em;\n}\n\n.prose code::before{\n  content:"`";\n}\n\n.prose code::after{\n  content:"`";\n}\n\n.prose a code{\n  color:#111827;\n}\n\n.prose pre{\n  color:#e5e7eb;\n  background-color:#1f2937;\n  overflow-x:auto;\n  font-size:0.875em;\n  line-height:1.7142857;\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n  border-radius:0.375rem;\n  padding-top:0.8571429em;\n  padding-right:1.1428571em;\n  padding-bottom:0.8571429em;\n  padding-left:1.1428571em;\n}\n\n.prose pre code{\n  background-color:transparent;\n  border-width:0;\n  border-radius:0;\n  padding:0;\n  font-weight:400;\n  color:inherit;\n  font-size:inherit;\n  font-family:inherit;\n  line-height:inherit;\n}\n\n.prose pre code::before{\n  content:none;\n}\n\n.prose pre code::after{\n  content:none;\n}\n\n.prose table{\n  width:100%;\n  table-layout:auto;\n  text-align:left;\n  margin-top:2em;\n  margin-bottom:2em;\n  font-size:0.875em;\n  line-height:1.7142857;\n}\n\n.prose thead{\n  color:#111827;\n  font-weight:600;\n  border-bottom-width:1px;\n  border-bottom-color:#d1d5db;\n}\n\n.prose thead th{\n  vertical-align:bottom;\n  padding-right:0.5714286em;\n  padding-bottom:0.5714286em;\n  padding-left:0.5714286em;\n}\n\n.prose tbody tr{\n  border-bottom-width:1px;\n  border-bottom-color:#e5e7eb;\n}\n\n.prose tbody tr:last-child{\n  border-bottom-width:0;\n}\n\n.prose tbody td{\n  vertical-align:top;\n  padding-top:0.5714286em;\n  padding-right:0.5714286em;\n  padding-bottom:0.5714286em;\n  padding-left:0.5714286em;\n}\n\n.prose{\n  font-size:1rem;\n  line-height:1.75;\n}\n\n.prose p{\n  margin-top:1.25em;\n  margin-bottom:1.25em;\n}\n\n.prose img{\n  margin-top:2em;\n  margin-bottom:2em;\n}\n\n.prose video{\n  margin-top:2em;\n  margin-bottom:2em;\n}\n\n.prose figure{\n  margin-top:2em;\n  margin-bottom:2em;\n}\n\n.prose figure > *{\n  margin-top:0;\n  margin-bottom:0;\n}\n\n.prose h2 code{\n  font-size:0.875em;\n}\n\n.prose h3 code{\n  font-size:0.9em;\n}\n\n.prose ol{\n  margin-top:1.25em;\n  margin-bottom:1.25em;\n}\n\n.prose ul{\n  margin-top:1.25em;\n  margin-bottom:1.25em;\n}\n\n.prose li{\n  margin-top:0.5em;\n  margin-bottom:0.5em;\n}\n\n.prose > ul > li p{\n  margin-top:0.75em;\n  margin-bottom:0.75em;\n}\n\n.prose > ul > li > *:first-child{\n  margin-top:1.25em;\n}\n\n.prose > ul > li > *:last-child{\n  margin-bottom:1.25em;\n}\n\n.prose > ol > li > *:first-child{\n  margin-top:1.25em;\n}\n\n.prose > ol > li > *:last-child{\n  margin-bottom:1.25em;\n}\n\n.prose ul ul, .prose ul ol, .prose ol ul, .prose ol ol{\n  margin-top:0.75em;\n  margin-bottom:0.75em;\n}\n\n.prose hr + *{\n  margin-top:0;\n}\n\n.prose h2 + *{\n  margin-top:0;\n}\n\n.prose h3 + *{\n  margin-top:0;\n}\n\n.prose h4 + *{\n  margin-top:0;\n}\n\n.prose thead th:first-child{\n  padding-left:0;\n}\n\n.prose thead th:last-child{\n  padding-right:0;\n}\n\n.prose tbody td:first-child{\n  padding-left:0;\n}\n\n.prose tbody td:last-child{\n  padding-right:0;\n}\n\n.prose > :first-child{\n  margin-top:0;\n}\n\n.prose > :last-child{\n  margin-bottom:0;\n}\n\n.prose-sm{\n  font-size:0.875rem;\n  line-height:1.7142857;\n}\n\n.prose-sm p{\n  margin-top:1.1428571em;\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm blockquote{\n  margin-top:1.3333333em;\n  margin-bottom:1.3333333em;\n  padding-left:1.1111111em;\n}\n\n.prose-sm h1{\n  font-size:2.1428571em;\n  margin-top:0;\n  margin-bottom:0.8em;\n  line-height:1.2;\n}\n\n.prose-sm h2{\n  font-size:1.4285714em;\n  margin-top:1.6em;\n  margin-bottom:0.8em;\n  line-height:1.4;\n}\n\n.prose-sm h3{\n  font-size:1.2857143em;\n  margin-top:1.5555556em;\n  margin-bottom:0.4444444em;\n  line-height:1.5555556;\n}\n\n.prose-sm h4{\n  margin-top:1.4285714em;\n  margin-bottom:0.5714286em;\n  line-height:1.4285714;\n}\n\n.prose-sm img{\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n}\n\n.prose-sm video{\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n}\n\n.prose-sm figure{\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n}\n\n.prose-sm figure > *{\n  margin-top:0;\n  margin-bottom:0;\n}\n\n.prose-sm figure figcaption{\n  font-size:0.8571429em;\n  line-height:1.3333333;\n  margin-top:0.6666667em;\n}\n\n.prose-sm code{\n  font-size:0.8571429em;\n}\n\n.prose-sm h2 code{\n  font-size:0.9em;\n}\n\n.prose-sm h3 code{\n  font-size:0.8888889em;\n}\n\n.prose-sm pre{\n  font-size:0.8571429em;\n  line-height:1.6666667;\n  margin-top:1.6666667em;\n  margin-bottom:1.6666667em;\n  border-radius:0.25rem;\n  padding-top:0.6666667em;\n  padding-right:1em;\n  padding-bottom:0.6666667em;\n  padding-left:1em;\n}\n\n.prose-sm ol{\n  margin-top:1.1428571em;\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm ul{\n  margin-top:1.1428571em;\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm li{\n  margin-top:0.2857143em;\n  margin-bottom:0.2857143em;\n}\n\n.prose-sm ol > li{\n  padding-left:1.5714286em;\n}\n\n.prose-sm ol > li::before{\n  left:0;\n}\n\n.prose-sm ul > li{\n  padding-left:1.5714286em;\n}\n\n.prose-sm ul > li::before{\n  height:0.3571429em;\n  width:0.3571429em;\n  top:calc(0.8571429em - 0.1785714em);\n  left:0.2142857em;\n}\n\n.prose-sm > ul > li p{\n  margin-top:0.5714286em;\n  margin-bottom:0.5714286em;\n}\n\n.prose-sm > ul > li > *:first-child{\n  margin-top:1.1428571em;\n}\n\n.prose-sm > ul > li > *:last-child{\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm > ol > li > *:first-child{\n  margin-top:1.1428571em;\n}\n\n.prose-sm > ol > li > *:last-child{\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm ul ul, .prose-sm ul ol, .prose-sm ol ul, .prose-sm ol ol{\n  margin-top:0.5714286em;\n  margin-bottom:0.5714286em;\n}\n\n.prose-sm hr{\n  margin-top:2.8571429em;\n  margin-bottom:2.8571429em;\n}\n\n.prose-sm hr + *{\n  margin-top:0;\n}\n\n.prose-sm h2 + *{\n  margin-top:0;\n}\n\n.prose-sm h3 + *{\n  margin-top:0;\n}\n\n.prose-sm h4 + *{\n  margin-top:0;\n}\n\n.prose-sm table{\n  font-size:0.8571429em;\n  line-height:1.5;\n}\n\n.prose-sm thead th{\n  padding-right:1em;\n  padding-bottom:0.6666667em;\n  padding-left:1em;\n}\n\n.prose-sm thead th:first-child{\n  padding-left:0;\n}\n\n.prose-sm thead th:last-child{\n  padding-right:0;\n}\n\n.prose-sm tbody td{\n  padding-top:0.6666667em;\n  padding-right:1em;\n  padding-bottom:0.6666667em;\n  padding-left:1em;\n}\n\n.prose-sm tbody td:first-child{\n  padding-left:0;\n}\n\n.prose-sm tbody td:last-child{\n  padding-right:0;\n}\n\n.prose-sm > :first-child{\n  margin-top:0;\n}\n\n.prose-sm > :last-child{\n  margin-bottom:0;\n}\n\n.border{\n  border-width:1px;\n}\n\n.table{\n  display:table;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.static{\n  position:static;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px){\n  .sm\\:prose{\n    color:#374151;\n    max-width:65ch;\n  }\n\n  .sm\\:prose a{\n    color:#111827;\n    text-decoration:underline;\n    font-weight:500;\n  }\n\n  .sm\\:prose strong{\n    color:#111827;\n    font-weight:600;\n  }\n\n  .sm\\:prose ol[type="a"]{\n    --list-counter-style:lower-alpha;\n  }\n\n  .sm\\:prose ol[type="i"]{\n    --list-counter-style:lower-roman;\n  }\n\n  .sm\\:prose ol[type="1"]{\n    --list-counter-style:decimal;\n  }\n\n  .sm\\:prose ol > li{\n    position:relative;\n    padding-left:1.75em;\n  }\n\n  .sm\\:prose ol > li::before{\n    content:counter(list-item, var(--list-counter-style, decimal)) ".";\n    position:absolute;\n    font-weight:400;\n    color:#6b7280;\n    left:0;\n  }\n\n  .sm\\:prose ul > li{\n    position:relative;\n    padding-left:1.75em;\n  }\n\n  .sm\\:prose ul > li::before{\n    content:"";\n    position:absolute;\n    background-color:#d1d5db;\n    border-radius:50%;\n    width:0.375em;\n    height:0.375em;\n    top:calc(0.875em - 0.1875em);\n    left:0.25em;\n  }\n\n  .sm\\:prose hr{\n    border-color:#e5e7eb;\n    border-top-width:1px;\n    margin-top:3em;\n    margin-bottom:3em;\n  }\n\n  .sm\\:prose blockquote{\n    font-weight:500;\n    font-style:italic;\n    color:#111827;\n    border-left-width:0.25rem;\n    border-left-color:#e5e7eb;\n    quotes:"\\201C""\\201D""\\2018""\\2019";\n    margin-top:1.6em;\n    margin-bottom:1.6em;\n    padding-left:1em;\n  }\n\n  .sm\\:prose blockquote p:first-of-type::before{\n    content:open-quote;\n  }\n\n  .sm\\:prose blockquote p:last-of-type::after{\n    content:close-quote;\n  }\n\n  .sm\\:prose h1{\n    color:#111827;\n    font-weight:800;\n    font-size:2.25em;\n    margin-top:0;\n    margin-bottom:0.8888889em;\n    line-height:1.1111111;\n  }\n\n  .sm\\:prose h2{\n    color:#111827;\n    font-weight:700;\n    font-size:1.5em;\n    margin-top:2em;\n    margin-bottom:1em;\n    line-height:1.3333333;\n  }\n\n  .sm\\:prose h3{\n    color:#111827;\n    font-weight:600;\n    font-size:1.25em;\n    margin-top:1.6em;\n    margin-bottom:0.6em;\n    line-height:1.6;\n  }\n\n  .sm\\:prose h4{\n    color:#111827;\n    font-weight:600;\n    margin-top:1.5em;\n    margin-bottom:0.5em;\n    line-height:1.5;\n  }\n\n  .sm\\:prose figure figcaption{\n    color:#6b7280;\n    font-size:0.875em;\n    line-height:1.4285714;\n    margin-top:0.8571429em;\n  }\n\n  .sm\\:prose code{\n    color:#111827;\n    font-weight:600;\n    font-size:0.875em;\n  }\n\n  .sm\\:prose code::before{\n    content:"`";\n  }\n\n  .sm\\:prose code::after{\n    content:"`";\n  }\n\n  .sm\\:prose a code{\n    color:#111827;\n  }\n\n  .sm\\:prose pre{\n    color:#e5e7eb;\n    background-color:#1f2937;\n    overflow-x:auto;\n    font-size:0.875em;\n    line-height:1.7142857;\n    margin-top:1.7142857em;\n    margin-bottom:1.7142857em;\n    border-radius:0.375rem;\n    padding-top:0.8571429em;\n    padding-right:1.1428571em;\n    padding-bottom:0.8571429em;\n    padding-left:1.1428571em;\n  }\n\n  .sm\\:prose pre code{\n    background-color:transparent;\n    border-width:0;\n    border-radius:0;\n    padding:0;\n    font-weight:400;\n    color:inherit;\n    font-size:inherit;\n    font-family:inherit;\n    line-height:inherit;\n  }\n\n  .sm\\:prose pre code::before{\n    content:none;\n  }\n\n  .sm\\:prose pre code::after{\n    content:none;\n  }\n\n  .sm\\:prose table{\n    width:100%;\n    table-layout:auto;\n    text-align:left;\n    margin-top:2em;\n    margin-bottom:2em;\n    font-size:0.875em;\n    line-height:1.7142857;\n  }\n\n  .sm\\:prose thead{\n    color:#111827;\n    font-weight:600;\n    border-bottom-width:1px;\n    border-bottom-color:#d1d5db;\n  }\n\n  .sm\\:prose thead th{\n    vertical-align:bottom;\n    padding-right:0.5714286em;\n    padding-bottom:0.5714286em;\n    padding-left:0.5714286em;\n  }\n\n  .sm\\:prose tbody tr{\n    border-bottom-width:1px;\n    border-bottom-color:#e5e7eb;\n  }\n\n  .sm\\:prose tbody tr:last-child{\n    border-bottom-width:0;\n  }\n\n  .sm\\:prose tbody td{\n    vertical-align:top;\n    padding-top:0.5714286em;\n    padding-right:0.5714286em;\n    padding-bottom:0.5714286em;\n    padding-left:0.5714286em;\n  }\n\n  .sm\\:prose{\n    font-size:1rem;\n    line-height:1.75;\n  }\n\n  .sm\\:prose p{\n    margin-top:1.25em;\n    margin-bottom:1.25em;\n  }\n\n  .sm\\:prose img{\n    margin-top:2em;\n    margin-bottom:2em;\n  }\n\n  .sm\\:prose video{\n    margin-top:2em;\n    margin-bottom:2em;\n  }\n\n  .sm\\:prose figure{\n    margin-top:2em;\n    margin-bottom:2em;\n  }\n\n  .sm\\:prose figure > *{\n    margin-top:0;\n    margin-bottom:0;\n  }\n\n  .sm\\:prose h2 code{\n    font-size:0.875em;\n  }\n\n  .sm\\:prose h3 code{\n    font-size:0.9em;\n  }\n\n  .sm\\:prose ol{\n    margin-top:1.25em;\n    margin-bottom:1.25em;\n  }\n\n  .sm\\:prose ul{\n    margin-top:1.25em;\n    margin-bottom:1.25em;\n  }\n\n  .sm\\:prose li{\n    margin-top:0.5em;\n    margin-bottom:0.5em;\n  }\n\n  .sm\\:prose > ul > li p{\n    margin-top:0.75em;\n    margin-bottom:0.75em;\n  }\n\n  .sm\\:prose > ul > li > *:first-child{\n    margin-top:1.25em;\n  }\n\n  .sm\\:prose > ul > li > *:last-child{\n    margin-bottom:1.25em;\n  }\n\n  .sm\\:prose > ol > li > *:first-child{\n    margin-top:1.25em;\n  }\n\n  .sm\\:prose > ol > li > *:last-child{\n    margin-bottom:1.25em;\n  }\n\n  .sm\\:prose ul ul, .sm\\:prose ul ol, .sm\\:prose ol ul, .sm\\:prose ol ol{\n    margin-top:0.75em;\n    margin-bottom:0.75em;\n  }\n\n  .sm\\:prose hr + *{\n    margin-top:0;\n  }\n\n  .sm\\:prose h2 + *{\n    margin-top:0;\n  }\n\n  .sm\\:prose h3 + *{\n    margin-top:0;\n  }\n\n  .sm\\:prose h4 + *{\n    margin-top:0;\n  }\n\n  .sm\\:prose thead th:first-child{\n    padding-left:0;\n  }\n\n  .sm\\:prose thead th:last-child{\n    padding-right:0;\n  }\n\n  .sm\\:prose tbody td:first-child{\n    padding-left:0;\n  }\n\n  .sm\\:prose tbody td:last-child{\n    padding-right:0;\n  }\n\n  .sm\\:prose > :first-child{\n    margin-top:0;\n  }\n\n  .sm\\:prose > :last-child{\n    margin-bottom:0;\n  }\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n  .lg\\:prose-lg{\n    font-size:1.125rem;\n    line-height:1.7777778;\n  }\n\n  .lg\\:prose-lg p{\n    margin-top:1.3333333em;\n    margin-bottom:1.3333333em;\n  }\n\n  .lg\\:prose-lg blockquote{\n    margin-top:1.6666667em;\n    margin-bottom:1.6666667em;\n    padding-left:1em;\n  }\n\n  .lg\\:prose-lg h1{\n    font-size:2.6666667em;\n    margin-top:0;\n    margin-bottom:0.8333333em;\n    line-height:1;\n  }\n\n  .lg\\:prose-lg h2{\n    font-size:1.6666667em;\n    margin-top:1.8666667em;\n    margin-bottom:1.0666667em;\n    line-height:1.3333333;\n  }\n\n  .lg\\:prose-lg h3{\n    font-size:1.3333333em;\n    margin-top:1.6666667em;\n    margin-bottom:0.6666667em;\n    line-height:1.5;\n  }\n\n  .lg\\:prose-lg h4{\n    margin-top:1.7777778em;\n    margin-bottom:0.4444444em;\n    line-height:1.5555556;\n  }\n\n  .lg\\:prose-lg img{\n    margin-top:1.7777778em;\n    margin-bottom:1.7777778em;\n  }\n\n  .lg\\:prose-lg video{\n    margin-top:1.7777778em;\n    margin-bottom:1.7777778em;\n  }\n\n  .lg\\:prose-lg figure{\n    margin-top:1.7777778em;\n    margin-bottom:1.7777778em;\n  }\n\n  .lg\\:prose-lg figure > *{\n    margin-top:0;\n    margin-bottom:0;\n  }\n\n  .lg\\:prose-lg figure figcaption{\n    font-size:0.8888889em;\n    line-height:1.5;\n    margin-top:1em;\n  }\n\n  .lg\\:prose-lg code{\n    font-size:0.8888889em;\n  }\n\n  .lg\\:prose-lg h2 code{\n    font-size:0.8666667em;\n  }\n\n  .lg\\:prose-lg h3 code{\n    font-size:0.875em;\n  }\n\n  .lg\\:prose-lg pre{\n    font-size:0.8888889em;\n    line-height:1.75;\n    margin-top:2em;\n    margin-bottom:2em;\n    border-radius:0.375rem;\n    padding-top:1em;\n    padding-right:1.5em;\n    padding-bottom:1em;\n    padding-left:1.5em;\n  }\n\n  .lg\\:prose-lg ol{\n    margin-top:1.3333333em;\n    margin-bottom:1.3333333em;\n  }\n\n  .lg\\:prose-lg ul{\n    margin-top:1.3333333em;\n    margin-bottom:1.3333333em;\n  }\n\n  .lg\\:prose-lg li{\n    margin-top:0.6666667em;\n    margin-bottom:0.6666667em;\n  }\n\n  .lg\\:prose-lg ol > li{\n    padding-left:1.6666667em;\n  }\n\n  .lg\\:prose-lg ol > li::before{\n    left:0;\n  }\n\n  .lg\\:prose-lg ul > li{\n    padding-left:1.6666667em;\n  }\n\n  .lg\\:prose-lg ul > li::before{\n    width:0.3333333em;\n    height:0.3333333em;\n    top:calc(0.8888889em - 0.1666667em);\n    left:0.2222222em;\n  }\n\n  .lg\\:prose-lg > ul > li p{\n    margin-top:0.8888889em;\n    margin-bottom:0.8888889em;\n  }\n\n  .lg\\:prose-lg > ul > li > *:first-child{\n    margin-top:1.3333333em;\n  }\n\n  .lg\\:prose-lg > ul > li > *:last-child{\n    margin-bottom:1.3333333em;\n  }\n\n  .lg\\:prose-lg > ol > li > *:first-child{\n    margin-top:1.3333333em;\n  }\n\n  .lg\\:prose-lg > ol > li > *:last-child{\n    margin-bottom:1.3333333em;\n  }\n\n  .lg\\:prose-lg ul ul, .lg\\:prose-lg ul ol, .lg\\:prose-lg ol ul, .lg\\:prose-lg ol ol{\n    margin-top:0.8888889em;\n    margin-bottom:0.8888889em;\n  }\n\n  .lg\\:prose-lg hr{\n    margin-top:3.1111111em;\n    margin-bottom:3.1111111em;\n  }\n\n  .lg\\:prose-lg hr + *{\n    margin-top:0;\n  }\n\n  .lg\\:prose-lg h2 + *{\n    margin-top:0;\n  }\n\n  .lg\\:prose-lg h3 + *{\n    margin-top:0;\n  }\n\n  .lg\\:prose-lg h4 + *{\n    margin-top:0;\n  }\n\n  .lg\\:prose-lg table{\n    font-size:0.8888889em;\n    line-height:1.5;\n  }\n\n  .lg\\:prose-lg thead th{\n    padding-right:0.75em;\n    padding-bottom:0.75em;\n    padding-left:0.75em;\n  }\n\n  .lg\\:prose-lg thead th:first-child{\n    padding-left:0;\n  }\n\n  .lg\\:prose-lg thead th:last-child{\n    padding-right:0;\n  }\n\n  .lg\\:prose-lg tbody td{\n    padding-top:0.75em;\n    padding-right:0.75em;\n    padding-bottom:0.75em;\n    padding-left:0.75em;\n  }\n\n  .lg\\:prose-lg tbody td:first-child{\n    padding-left:0;\n  }\n\n  .lg\\:prose-lg tbody td:last-child{\n    padding-right:0;\n  }\n\n  .lg\\:prose-lg > :first-child{\n    margin-top:0;\n  }\n\n  .lg\\:prose-lg > :last-child{\n    margin-bottom:0;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:prose-2xl{\n    font-size:1.5rem;\n    line-height:1.6666667;\n  }\n\n  .xl\\:prose-2xl p{\n    margin-top:1.3333333em;\n    margin-bottom:1.3333333em;\n  }\n\n  .xl\\:prose-2xl blockquote{\n    margin-top:1.7777778em;\n    margin-bottom:1.7777778em;\n    padding-left:1.1111111em;\n  }\n\n  .xl\\:prose-2xl h1{\n    font-size:2.6666667em;\n    margin-top:0;\n    margin-bottom:0.875em;\n    line-height:1;\n  }\n\n  .xl\\:prose-2xl h2{\n    font-size:2em;\n    margin-top:1.5em;\n    margin-bottom:0.8333333em;\n    line-height:1.0833333;\n  }\n\n  .xl\\:prose-2xl h3{\n    font-size:1.5em;\n    margin-top:1.5555556em;\n    margin-bottom:0.6666667em;\n    line-height:1.2222222;\n  }\n\n  .xl\\:prose-2xl h4{\n    margin-top:1.6666667em;\n    margin-bottom:0.6666667em;\n    line-height:1.5;\n  }\n\n  .xl\\:prose-2xl img{\n    margin-top:2em;\n    margin-bottom:2em;\n  }\n\n  .xl\\:prose-2xl video{\n    margin-top:2em;\n    margin-bottom:2em;\n  }\n\n  .xl\\:prose-2xl figure{\n    margin-top:2em;\n    margin-bottom:2em;\n  }\n\n  .xl\\:prose-2xl figure > *{\n    margin-top:0;\n    margin-bottom:0;\n  }\n\n  .xl\\:prose-2xl figure figcaption{\n    font-size:0.8333333em;\n    line-height:1.6;\n    margin-top:1em;\n  }\n\n  .xl\\:prose-2xl code{\n    font-size:0.8333333em;\n  }\n\n  .xl\\:prose-2xl h2 code{\n    font-size:0.875em;\n  }\n\n  .xl\\:prose-2xl h3 code{\n    font-size:0.8888889em;\n  }\n\n  .xl\\:prose-2xl pre{\n    font-size:0.8333333em;\n    line-height:1.8;\n    margin-top:2em;\n    margin-bottom:2em;\n    border-radius:0.5rem;\n    padding-top:1.2em;\n    padding-right:1.6em;\n    padding-bottom:1.2em;\n    padding-left:1.6em;\n  }\n\n  .xl\\:prose-2xl ol{\n    margin-top:1.3333333em;\n    margin-bottom:1.3333333em;\n  }\n\n  .xl\\:prose-2xl ul{\n    margin-top:1.3333333em;\n    margin-bottom:1.3333333em;\n  }\n\n  .xl\\:prose-2xl li{\n    margin-top:0.5em;\n    margin-bottom:0.5em;\n  }\n\n  .xl\\:prose-2xl ol > li{\n    padding-left:1.6666667em;\n  }\n\n  .xl\\:prose-2xl ol > li::before{\n    left:0;\n  }\n\n  .xl\\:prose-2xl ul > li{\n    padding-left:1.6666667em;\n  }\n\n  .xl\\:prose-2xl ul > li::before{\n    width:0.3333333em;\n    height:0.3333333em;\n    top:calc(0.8333333em - 0.1666667em);\n    left:0.25em;\n  }\n\n  .xl\\:prose-2xl > ul > li p{\n    margin-top:0.8333333em;\n    margin-bottom:0.8333333em;\n  }\n\n  .xl\\:prose-2xl > ul > li > *:first-child{\n    margin-top:1.3333333em;\n  }\n\n  .xl\\:prose-2xl > ul > li > *:last-child{\n    margin-bottom:1.3333333em;\n  }\n\n  .xl\\:prose-2xl > ol > li > *:first-child{\n    margin-top:1.3333333em;\n  }\n\n  .xl\\:prose-2xl > ol > li > *:last-child{\n    margin-bottom:1.3333333em;\n  }\n\n  .xl\\:prose-2xl ul ul, .xl\\:prose-2xl ul ol, .xl\\:prose-2xl ol ul, .xl\\:prose-2xl ol ol{\n    margin-top:0.6666667em;\n    margin-bottom:0.6666667em;\n  }\n\n  .xl\\:prose-2xl hr{\n    margin-top:3em;\n    margin-bottom:3em;\n  }\n\n  .xl\\:prose-2xl hr + *{\n    margin-top:0;\n  }\n\n  .xl\\:prose-2xl h2 + *{\n    margin-top:0;\n  }\n\n  .xl\\:prose-2xl h3 + *{\n    margin-top:0;\n  }\n\n  .xl\\:prose-2xl h4 + *{\n    margin-top:0;\n  }\n\n  .xl\\:prose-2xl table{\n    font-size:0.8333333em;\n    line-height:1.4;\n  }\n\n  .xl\\:prose-2xl thead th{\n    padding-right:0.6em;\n    padding-bottom:0.8em;\n    padding-left:0.6em;\n  }\n\n  .xl\\:prose-2xl thead th:first-child{\n    padding-left:0;\n  }\n\n  .xl\\:prose-2xl thead th:last-child{\n    padding-right:0;\n  }\n\n  .xl\\:prose-2xl tbody td{\n    padding-top:0.8em;\n    padding-right:0.6em;\n    padding-bottom:0.8em;\n    padding-left:0.6em;\n  }\n\n  .xl\\:prose-2xl tbody td:first-child{\n    padding-left:0;\n  }\n\n  .xl\\:prose-2xl tbody td:last-child{\n    padding-right:0;\n  }\n\n  .xl\\:prose-2xl > :first-child{\n    margin-top:0;\n  }\n\n  .xl\\:prose-2xl > :last-child{\n    margin-bottom:0;\n  }\n}\n\n@media (min-width: 1536px){\n}',""]),n.exports=o},232:function(n,e,t){"use strict";t(159)},233:function(n,e,t){var o=t(53)((function(i){return i[1]}));o.push([n.i,"",""]),n.exports=o}},[[190,6,1,7]]]);