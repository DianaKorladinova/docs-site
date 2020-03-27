(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{428:function(e,t,s){"use strict";s.r(t);var a=s(3),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ibm®-ims™-plug-in-for-zowe-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ibm®-ims™-plug-in-for-zowe-cli"}},[e._v("#")]),e._v(" IBM® IMS™ Plug-in for Zowe CLI")]),e._v(" "),s("p",[e._v("The IBM IMS Plug-in for Zowe CLI lets you extend Zowe CLI such that it can interact with IMS resources (regions, programs and transactions). You can use the plug-in to start, stop, and query regions and start, stop, query, and update programs and transactions.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" For more information about IMS, see "),s("a",{attrs:{href:"https://www.ibm.com/it-infrastructure/z/ims",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Information Management System (IMS)"),s("OutboundLink")],1),e._v(" on the IBM  Knowledge Center.")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#use-cases"}},[e._v("Use cases")])]),s("li",[s("a",{attrs:{href:"#commands"}},[e._v("Commands")])]),s("li",[s("a",{attrs:{href:"#software-requirements"}},[e._v("Software requirements")])]),s("li",[s("a",{attrs:{href:"#installing"}},[e._v("Installing")])]),s("li",[s("a",{attrs:{href:"#creating-user-profiles"}},[e._v("Creating user profiles")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),s("p",[e._v("As an application developer or DevOps administrator, you can use IBM IMS Plug-in for Zowe CLI to perform the following tasks:")]),e._v(" "),s("ul",[s("li",[e._v("Refresh IMS transactions, programs, and dependent IMS regions.")]),e._v(" "),s("li",[e._v("Deploy application code into IMS production or test systems.")]),e._v(" "),s("li",[e._v("Write scripts to automate IMS actions that you traditionally perform using ISPF editors, TSO, and SPOC.")])]),e._v(" "),s("h2",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),s("p",[e._v("For detailed documentation on commands, actions, and options available in this plug-in, see our Web Help. It is available for download in three formats: a PDF document, an interactive online version, and a ZIP file containing the HTML for the online version.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"../web_help/index.html",target:"_blank"}},[e._v("Browse Online")])]),e._v(" "),s("li",[s("a",{attrs:{href:"../zowe_web_help.zip"}},[e._v("Download (ZIP)")])]),e._v(" "),s("li",[s("a",{attrs:{href:"../CLIReference_Zowe.pdf"}},[e._v("Download (PDF)")])])]),e._v(" "),s("h2",{attrs:{id:"software-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[e._v("#")]),e._v(" Software requirements")]),e._v(" "),s("p",[e._v("Before you install the plug-in, meet the software requirements in "),s("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for Zowe CLI plug-ins")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),s("p",[e._v("Use one of the following methods to install or update the plug-in:")]),e._v(" "),s("ul",[s("li",[s("p",[s("router-link",{attrs:{to:"/user-guide/cli-installplugins.html#installing-plug-ins-from-an-online-registry"}},[e._v("Installing plug-ins from an online registry")])],1)]),e._v(" "),s("li",[s("p",[s("router-link",{attrs:{to:"/user-guide/cli-installplugins.html#installing-plug-ins-from-a-local-package"}},[e._v("Installing plug-ins from a local package")])],1)])]),e._v(" "),s("h2",{attrs:{id:"creating-user-profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-user-profiles"}},[e._v("#")]),e._v(" Creating user profiles")]),e._v(" "),s("p",[e._v("You can set up an "),s("code",[e._v("ims")]),e._v(" profile to retain your credentials, host, and port name. You can create multiple profiles and switch between them as needed. Issue the following command to create an "),s("code",[e._v("ims")]),e._v(" profile:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe profiles create ims-profile <profileName> --host <hostname> --port <portnumber> --ims-connect-host <ims-hostname> --ims-connect-port <ims-portnumber> --user <username> --password <password>\n")])])]),s("p",[s("strong",[e._v("Example: Setting up an IMS profile")])]),e._v(" "),s("p",[e._v("The following example creates an ims profile named 'ims123' to connect to IMS APIs at host zos123 and port 1490. The name of the IMS plex in this example is 'PLEX1' and the IMS region we want to communicate with has a host of zos124 and a port of 1491:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe profiles create ims-profile ims123 --host zos123 --port 1490 --user ibmuser --password myp4ss --plex PLEX1 --ich zos124 --icp 1491\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" For more information, issue the command "),s("code",[e._v("zowe profiles create ims-profile --help")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);