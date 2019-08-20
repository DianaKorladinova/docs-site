(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{308:function(t,e,s){"use strict";s.r(e);var i=s(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Get started with Zowe CLI quickly and easily.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" This section assumes some prerequisite knowledge of command-line tools and writing scripts. If you prefer more detailed instructions, see "),s("router-link",{attrs:{to:"./../user-guide/cli-installcli.html"}},[t._v("Installing Zowe CLI.")])],1),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Before you install Zowe CLI, download and install "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js and npm."),s("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._m(6),t._v(" "),t._m(7),s("p",[t._v("The command installs the IBM CICS plug-in, but the IBM Db2 plug-in requires "),s("router-link",{attrs:{to:"./../user-guide/cli-db2plugin.html#installing"}},[t._v("additional configuration to install")]),t._v(".")],1),t._v(" "),s("p",[t._v("For more information, see "),s("router-link",{attrs:{to:"./../user-guide/cli-installplugins.html"}},[t._v("Installing plug-ins")]),t._v(".")],1),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),s("p",[t._v("See "),s("router-link",{attrs:{to:"./../user-guide/cli-usingcli.html#zowe-cli-command-groups"}},[t._v("Command Groups")]),t._v(" for a list of available functionality.")],1),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("Zowe profiles let you store configuration details such as username, password, host, and port for a mainframe system. Switch between profiles to quickly target different subsystems and avoid typing connection details on every command.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),s("p",[t._v("For detailed information about issuing commands, using profiles, and storing variables as environment variables, see "),s("router-link",{attrs:{to:"./../user-guide/cli-configuringcli.html#defining-zowe-cli-connection-details"}},[t._v("Defining Zowe CLI connection details.")])],1),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("You can write Zowe CLI scripts to streamline your daily development processes or conduct mainframe actions from an off-platform automation tool such as Jenkins or TravisCI.")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),s("p",[t._v("For more information, see "),s("router-link",{attrs:{to:"./../user-guide/cli-usingcli.html#writing-scripts-to-automate-mainframe-actions"}},[t._v("Writing scripts to automate mainframe actions.")])],1),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("You successfully installed Zowe CLI, issued your first commands, and wrote a simple script! Next, you might want to:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Review "),s("router-link",{attrs:{to:"./../user-guide/cli-usingcli.html#zowe-cli-command-groups"}},[t._v("Command Groups")]),t._v(" to learn what functionality is available, and explore the in-product help.")],1)]),t._v(" "),s("li",[s("p",[t._v("Learn about "),s("router-link",{attrs:{to:"./../user-guide/cli-configuringcli.html#defining-environment-variables"}},[t._v("using environment variables")]),t._v(" to store configuration options.")],1)]),t._v(" "),t._m(29),t._v(" "),s("li",[s("p",[t._v("See what "),s("router-link",{attrs:{to:"./../user-guide/cli-extending.html"}},[t._v("plug-ins are available")]),t._v(" for the CLI.")],1)]),t._v(" "),s("li",[s("p",[t._v("Learn about "),s("router-link",{attrs:{to:"./../extend/extend-cli/cli-developing-a-plugin.html"}},[t._v("developing for the CLI")]),t._v(" (contributing to core and developing plug-ins).")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"zowe-cli-quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zowe-cli-quick-start","aria-hidden":"true"}},[this._v("#")]),this._v(" Zowe CLI quick start")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#installing"}},[t._v("Installing")]),s("ul",[s("li",[s("a",{attrs:{href:"#installing-zowe-cli-core"}},[t._v("Installing Zowe CLI core")])]),s("li",[s("a",{attrs:{href:"#installing-cli-plug-ins"}},[t._v("Installing CLI plug-ins")])])])]),s("li",[s("a",{attrs:{href:"#issuing-your-first-commands"}},[t._v("Issuing your first commands")]),s("ul",[s("li",[s("a",{attrs:{href:"#listing-all-data-sets-under-a-high-level-qualifier-hlq"}},[t._v("Listing all data sets under a high-level qualifier (HLQ)")])]),s("li",[s("a",{attrs:{href:"#downloading-a-partitioned-data-set-pds-member-to-local-file"}},[t._v("Downloading a partitioned data-set (PDS) member to local file")])])])]),s("li",[s("a",{attrs:{href:"#using-profiles"}},[t._v("Using profiles")]),s("ul",[s("li",[s("a",{attrs:{href:"#profile-types"}},[t._v("Profile types")])]),s("li",[s("a",{attrs:{href:"#creating-a-zosmf-profile"}},[t._v("Creating a zosmf profile")])]),s("li",[s("a",{attrs:{href:"#using-a-zosmf-profile"}},[t._v("Using a zosmf profile")])])])]),s("li",[s("a",{attrs:{href:"#writing-scripts"}},[t._v("Writing scripts")]),s("ul",[s("li",[s("a",{attrs:{href:"#example"}},[t._v("Example:")])])])]),s("li",[s("a",{attrs:{href:"#next-steps"}},[t._v("Next Steps")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-zowe-cli-core"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-core","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Zowe CLI core")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install @brightside/core@lts-incremental -g\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-cli-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-cli-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing CLI plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins install @brightside/cics@lts-incremental\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"issuing-your-first-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issuing-your-first-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Issuing your first commands")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Issue "),e("code",[this._v("zowe --help")]),this._v(" to display full command help. Append "),e("code",[this._v("--help")]),this._v(" (alias "),e("code",[this._v("-h")]),this._v(") to any command to see available command actions and options.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To interact with the mainframe, type "),e("code",[this._v("zowe")]),this._v(" followed by a command group, action, and object. Use options to specify your connection details such as password and system name.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"listing-all-data-sets-under-a-high-level-qualifier-hlq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listing-all-data-sets-under-a-high-level-qualifier-hlq","aria-hidden":"true"}},[this._v("#")]),this._v(" Listing all data sets under a high-level qualifier (HLQ)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('zowe zos-files list data-set "MY.DATASET.*" --host my.company.com --port 123 --user myusername123 --pass mypassword123\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"downloading-a-partitioned-data-set-pds-member-to-local-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#downloading-a-partitioned-data-set-pds-member-to-local-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Downloading a partitioned data-set (PDS) member to local file")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('zowe zos-files download data-set "MY.DATA.SET(member)" -f "mylocalfile.txt" --host my.company.com --port 123 --user myusername123 --pass mypassword123\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-profiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-profiles","aria-hidden":"true"}},[this._v("#")]),this._v(" Using profiles")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"profile-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#profile-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Profile types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Most command groups require a "),e("code",[this._v("zosmf-profile")]),this._v(", but some plug-ins add their own profile types. For example, the CICS plug-in has a "),e("code",[this._v("cics-profile")]),this._v(". The profile type that a command requires is defined in the "),e("code",[this._v("PROFILE OPTIONS")]),this._v(" section of the help response.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tip:")]),this._v(" The first "),e("code",[this._v("zosmf")]),this._v(" profile that you create becomes your default profile. If you don't specify any options on a command, the default profile is used. Issue "),e("code",[this._v("zowe profiles -h")]),this._v(" to learn about listing profiles and setting defaults.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"creating-a-zosmf-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-zosmf-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a zosmf profile")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe profiles create zosmf-profile myprofile123 --host my.company.com --port 123 --user myusername123 --password mypassword123\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" The port defaults to 443 if you omit the "),e("code",[this._v("--port")]),this._v(" option. Specify a different port if your host system does not use port 443.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-a-zosmf-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-zosmf-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a zosmf profile")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('zowe zos-files download data-set "MY.DATA.SET(member)" -f "mylocalfile.txt" --zosmf-profile myprofile123\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"writing-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-scripts","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing scripts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You want to delete a list of temporary datasets. Use Zowe CLI to download the list, loop through the list, and delete each data set using the "),e("code",[this._v("zowe zos-files delete")]),this._v(" command.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('#!/bin/bash\n\nset -e\n\n# Obtain the list of temporary project data sets \ndslist=$(zowe zos-files list dataset "my.project.ds*")\n\n# Delete each data set in the list\nIFS=$\'\\n\'\nfor ds in $dslist\ndo\n     echo "Deleting Temporary Project Dataset: $ds"\n     zowe files delete ds "$ds" -f\ndone\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Next Steps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Integrate your scripts with an automation server like Jenkins.")])])}],!1,null,null,null);a.options.__file="cli-getting-started.md";e.default=a.exports}}]);