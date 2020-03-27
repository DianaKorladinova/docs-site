(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{328:function(e,t,o){"use strict";o.r(t);var r=o(3),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"system-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System requirements")]),e._v(" "),o("p",[e._v("Before installing Zowe™, ensure that your environment meets the prerequisites.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#common-system-requirements"}},[e._v("Common sytem requirements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#zowe-application-framework-requirements"}},[e._v("Zowe Application Framework requirements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#zowe-cli-requirements"}},[e._v("Zowe CLI requirements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#multi-factor-authentication-for-zowe-desktop"}},[e._v("Multi-Factor Authentication for Zowe Desktop")])])]),e._v(" "),o("h2",{attrs:{id:"common-z-os-system-requirements-host"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-z-os-system-requirements-host"}},[e._v("#")]),e._v(" Common z/OS system requirements (host)")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("z/OS Version 2.2 or later.")])]),e._v(" "),o("li",[o("p",[e._v("IBM z/OS Management Facility (z/OSMF) Version 2.2, Version 2.3 or Version 2.4.")]),e._v(" "),o("p",[e._v("z/OSMF is an optional prerequisite for Zowe.  It is recomended that z/OSMF is present to fully exploit Zowe's capabilities.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("ul",[o("li",[e._v('For non-production use of Zowe (such as development, proof-of-concept, demo),  you can customize the configuration of z/OSMF to create what is known as "z/OS MF Lite" that simplifies the setup of z/OSMF. As z/OS MF Lite only supports selected REST services (JES, DataSet/File, TSO and Workflow), you will observe considerable improvements in start up time as well as a reduction in the efforts involved in setting up z/OSMF. For information about how to set up z/OSMF Lite, see '),o("router-link",{attrs:{to:"/user-guide/systemrequirements-zosmf-lite.html"}},[e._v("Configuring z/OSMF Lite (non-production environment)")])],1),e._v(" "),o("li",[e._v("For production use of Zowe, see "),o("router-link",{attrs:{to:"/user-guide/systemrequirements-zosmf.html"}},[e._v("Configuring z/OSMF")]),e._v(".")],1)])])])]),e._v(" "),o("h3",{attrs:{id:"zowe-application-framework-requirements-host"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-application-framework-requirements-host"}},[e._v("#")]),e._v(" Zowe Application Framework requirements (host)")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Node.js")]),e._v(" "),o("ul",[o("li",[e._v("On z/OS: Node.js v6.x starting with v6.14.4, v8.x (except v8.16.1), and v12.x. Note when using v12.x, it is highly recommended that plugins used are tagged. For more information, see "),o("router-link",{attrs:{to:"/extend/extend-desktop/mvd-buildingplugins.html#tagging-plugin-files-on-z-os"}},[e._v("Tagging on z/OS")])],1),e._v(" "),o("li",[e._v("Off z/OS: The Application Framework supports Node.js v6.14 through v12.x.")])]),e._v(" "),o("p",[e._v("To install Node.js on z/OS, follow the instructions in "),o("router-link",{attrs:{to:"/user-guide/install-nodejs-zos.html"}},[e._v("Installing Node.js on z/OS")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("IBM SDK for Java Technology Edition V8 or later")])]),e._v(" "),o("li",[o("p",[e._v("833 MB of zFS file space")])]),e._v(" "),o("li",[o("p",[e._v("(client) Supported browsers:")]),e._v(" "),o("ul",[o("li",[e._v("Google Chrome V66 or later")]),e._v(" "),o("li",[e._v("Mozilla Firefox V60 or later")]),e._v(" "),o("li",[e._v("Safari V12.0 or later")]),e._v(" "),o("li",[e._v("Microsoft Edge 17 (Windows 10)")])]),e._v(" "),o("p",[e._v("Each release of the Zowe Application Framework is tested to work on the current releases of Chrome, Firefox, Safari, and Edge, as well as the oldest release within a 1 year time span, unless the current release is also older than 1 year. For Firefox, the oldest supported release will also be from the Extended Support Release (ESR) version of Firefox, to ensure compatibility in those enterprise environments. This scheme for browser support is to ensure that Zowe works on the vast majority of browsers that people are currently using, while still allowing for use of new features and security that browsers constantly add.")])])]),e._v(" "),o("p",[e._v("If you do not see your product listed here, please contact the Zowe community so that it can be validated and included.")]),e._v(" "),o("h3",{attrs:{id:"multi-factor-authentication-for-zowe-desktop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication-for-zowe-desktop"}},[e._v("#")]),e._v(" Multi-Factor Authentication for Zowe Desktop")]),e._v(" "),o("p",[e._v("To enable multi-factor authentication, you must install "),o("a",{attrs:{href:"https://www.ibm.com/us-en/marketplace/ibm-multifactor-authentication-for-zos",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Z Multi-Factor Authentication"),o("OutboundLink")],1),e._v(". For information on using MFA in Zowe, see "),o("router-link",{attrs:{to:"/user-guide/mvd-configuration.html#multi-factor-authentication-configuration"}},[e._v("Multi-Factor Authentication")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"zowe-cli-requirements-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-cli-requirements-client"}},[e._v("#")]),e._v(" Zowe CLI requirements (client)")]),e._v(" "),o("p",[e._v("Zowe CLI is supported on platforms where Node.js 8.0 or 10 is available, including Windows, Linux, and Mac operating systems. Zowe CLI was also tested and confirmed to run on Unix System Services (USS) on z/OS.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Install "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js V8.0 or higher LTS versions"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),o("code",[e._v("node --version")]),e._v(" to verify that Node.js is installed.")])]),e._v(" "),o("li",[o("p",[e._v("Install a version of "),o("strong",[e._v("Node Package Manager (npm)")]),e._v(" that is compatible with your version of Node.js. For a list of compatible versions, see "),o("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Previous Releases"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" npm is included with the Node.js installation. Issue the command "),o("code",[e._v("npm --version")]),e._v(" to verify the version of npm that is installed.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" If you plan to install plug-ins, review the "),o("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for CLI plug-ins")]),e._v(".")],1)])]),e._v(" "),o("h3",{attrs:{id:"free-disk-space"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#free-disk-space"}},[e._v("#")]),e._v(" Free disk space")]),e._v(" "),o("p",[e._v("Zowe CLI requires approximately "),o("strong",[e._v("100 MB")]),e._v(" of free disk space. The actual quantity of free disk space consumed might vary depending on the operating system where you install Zowe CLI.")])])}),[],!1,null,null,null);t.default=s.exports}}]);