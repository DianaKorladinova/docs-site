(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{339:function(e,t,o){"use strict";o.r(t);var s=o(3),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"z-osmf-troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#z-osmf-troubleshooting"}},[e._v("#")]),e._v(" z/OSMF troubleshooting")]),e._v(" "),o("p",[e._v("The core command groups use the z/OSMF REST APIs which can experience any number of problems.")]),e._v(" "),o("p",[e._v("If you encounter HTTP 500 errors with the CLI, consider gathering the following information:")]),e._v(" "),o("ol",[o("li",[e._v("The IZU* (IZUSVR and IZUANG) joblogs (z/OSMF server)")]),e._v(" "),o("li",[e._v("z/OSMF USS logs (default location: /global/zosmf/data/logs - but may change depending on installation)")])]),e._v(" "),o("p",[e._v("If you encounter HTTP 401 errors with the CLI, consider gathering the following information:")]),e._v(" "),o("ol",[o("li",[e._v("Any security violations for the TSO user in SYSLOG")])]),e._v(" "),o("h2",{attrs:{id:"alternate-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alternate-methods"}},[e._v("#")]),e._v(" Alternate methods")]),e._v(" "),o("p",[e._v("At times, it may be beneficial to test z/OSMF outside of the CLI. You can use the CLI tool "),o("code",[e._v("curl")]),e._v(' or a REST tool such as "Postman" to isolate areas where the problem might be occurring (CLI configuration, server-side, etc.).')]),e._v(" "),o("p",[e._v("Example "),o("code",[e._v("curl")]),e._v(" command to "),o("code",[e._v("GET /zosmf/info")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('curl -k -H "Accept: application/json" -H "X-CSRF-ZOSMF-HEADER: true"  "https://zosmf.hostname.net:443/zosmf/info"\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);