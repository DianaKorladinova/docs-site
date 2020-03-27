(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{361:function(e,t,s){"use strict";s.r(t);var a=s(3),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"zowe-cli-quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zowe-cli-quick-start"}},[e._v("#")]),e._v(" Zowe CLI quick start")]),e._v(" "),s("p",[e._v("Get started with Zowe™ CLI quickly and easily.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" This section assumes some prerequisite knowledge of command-line tools and writing scripts. If you prefer more detailed instructions, see "),s("router-link",{attrs:{to:"/user-guide/cli-installcli.html"}},[e._v("Installing Zowe CLI.")])],1),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#installing"}},[e._v("Installing")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#installing-zowe-cli-core"}},[e._v("Installing Zowe CLI core")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#installing-cli-plug-ins"}},[e._v("Installing CLI plug-ins")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#issuing-your-first-commands"}},[e._v("Issuing your first commands")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#listing-all-data-sets-under-a-high-level-qualifier-hlq"}},[e._v("Listing all data sets under a high-level qualifier (HLQ)")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#downloading-a-partitioned-data-set-pds-member-to-local-file"}},[e._v("Downloading a partitioned data-set (PDS) member to local file")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#using-profiles"}},[e._v("Using profiles")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#profile-types"}},[e._v("Profile types")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#creating-a-zosmf-profile"}},[e._v("Creating a zosmf profile")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#using-a-zosmf-profile"}},[e._v("Using a zosmf profile")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#writing-scripts"}},[e._v("Writing scripts")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#example"}},[e._v("Example:")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")])])]),e._v(" "),s("h2",{attrs:{id:"installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),s("p",[e._v("Before you install Zowe CLI, download and install "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js and npm."),s("OutboundLink")],1)]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Use an LTS version of Node.js that is compatible with your version of npm. For a list of compatible versions, see "),s("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Previous Releases"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"installing-zowe-cli-core-from-public-npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-core-from-public-npm"}},[e._v("#")]),e._v(" Installing Zowe CLI core from public npm")]),e._v(" "),s("p",[e._v("Issue the following commands in sequence to install the core CLI.")]),e._v(" "),s("p",[e._v('The "core" includes Zowe CLI and Secure Credential Store, which enhances security by encrpyting your username and password.')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install @zowe/cli@zowe-v1-lts -g\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe plugins install @zowe/secure-credential-store-for-zowe-cli@zowe-v1-lts\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" On Linux, install "),s("a",{attrs:{href:"https://github.com/GNOME/libsecret",target:"_blank",rel:"noopener noreferrer"}},[e._v("libsecret"),s("OutboundLink")],1),e._v(" before you use the Secure Credential Store.")]),e._v(" "),s("h3",{attrs:{id:"installing-cli-plug-ins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-cli-plug-ins"}},[e._v("#")]),e._v(" Installing CLI plug-ins")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe plugins install @zowe/cics-for-zowe-cli@zowe-v1-lts @zowe/db2-for-zowe-cli@zowe-v1-lts @zowe/ims-for-zowe-cli@zowe-v1-lts @zowe/mq-for-zowe-cli@zowe-v1-lts @zowe/zos-ftp-for-zowe-cli@zowe-v1-lts\n")])])]),s("p",[e._v("The command installs most open-source plug-ins, but the IBM Db2 plug-in requires "),s("router-link",{attrs:{to:"/user-guide/cli-db2plugin.html#installing"}},[e._v("additional configuration to install")]),e._v(".")],1),e._v(" "),s("p",[e._v("For more information, see "),s("router-link",{attrs:{to:"/user-guide/cli-installplugins.html"}},[e._v("Installing plug-ins")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"issuing-your-first-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issuing-your-first-commands"}},[e._v("#")]),e._v(" Issuing your first commands")]),e._v(" "),s("p",[e._v("Issue "),s("code",[e._v("zowe --help")]),e._v(" to display full command help. Append "),s("code",[e._v("--help")]),e._v(" (alias "),s("code",[e._v("-h")]),e._v(") to any command to see available command actions and options.")]),e._v(" "),s("p",[e._v("To interact with the mainframe, type "),s("code",[e._v("zowe")]),e._v(" followed by a command group, action, and object. Use options to specify your connection details such as password and system name.")]),e._v(" "),s("h3",{attrs:{id:"listing-all-data-sets-under-a-high-level-qualifier-hlq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listing-all-data-sets-under-a-high-level-qualifier-hlq"}},[e._v("#")]),e._v(" Listing all data sets under a high-level qualifier (HLQ)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('zowe zos-files list data-set "MY.DATASET.*" --host my.company.com --port 123 --user myusername123 --pass mypassword123\n')])])]),s("h3",{attrs:{id:"downloading-a-partitioned-data-set-pds-member-to-local-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading-a-partitioned-data-set-pds-member-to-local-file"}},[e._v("#")]),e._v(" Downloading a partitioned data-set (PDS) member to local file")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('zowe zos-files download data-set "MY.DATA.SET(member)" -f "mylocalfile.txt" --host my.company.com --port 123 --user myusername123 --pass mypassword123\n')])])]),s("p",[e._v("See "),s("router-link",{attrs:{to:"/user-guide/cli-usingcli.html#zowe-cli-command-groups"}},[e._v("Command Groups")]),e._v(" for a list of available functionality.")],1),e._v(" "),s("h2",{attrs:{id:"using-profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-profiles"}},[e._v("#")]),e._v(" Using profiles")]),e._v(" "),s("p",[e._v("Zowe profiles let you store configuration details such as username, password, host, and port for a mainframe system. Switch between profiles to quickly target different subsystems and avoid typing connection details on every command.")]),e._v(" "),s("h3",{attrs:{id:"profile-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profile-types"}},[e._v("#")]),e._v(" Profile types")]),e._v(" "),s("p",[e._v("Most command groups require a "),s("code",[e._v("zosmf-profile")]),e._v(", but some plug-ins add their own profile types. For example, the CICS plug-in has a "),s("code",[e._v("cics-profile")]),e._v(". The profile type that a command requires is defined in the "),s("code",[e._v("PROFILE OPTIONS")]),e._v(" section of the help response.")]),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v(" The first "),s("code",[e._v("zosmf")]),e._v(" profile that you create becomes your default profile. If you don't specify any options on a command, the default profile is used. Issue "),s("code",[e._v("zowe profiles -h")]),e._v(" to learn about listing profiles and setting defaults.")]),e._v(" "),s("h3",{attrs:{id:"creating-a-zosmf-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-zosmf-profile"}},[e._v("#")]),e._v(" Creating a zosmf profile")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe profiles create zosmf-profile myprofile123 --host my.company.com --port 123 --user myusername123 --password mypassword123\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" The port defaults to 443 if you omit the "),s("code",[e._v("--port")]),e._v(" option. Specify a different port if your host system does not use port 443.")]),e._v(" "),s("h3",{attrs:{id:"using-a-zosmf-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-zosmf-profile"}},[e._v("#")]),e._v(" Using a zosmf profile")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('zowe zos-files download data-set "MY.DATA.SET(member)" -f "mylocalfile.txt" --zosmf-profile myprofile123\n')])])]),s("p",[e._v("For detailed information about issuing commands, using profiles, and storing variables as environment variables, see "),s("router-link",{attrs:{to:"/user-guide/cli-configuringcli.html#defining-zowe-cli-connection-details"}},[e._v("Defining Zowe CLI connection details.")])],1),e._v(" "),s("h2",{attrs:{id:"writing-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-scripts"}},[e._v("#")]),e._v(" Writing scripts")]),e._v(" "),s("p",[e._v("You can write Zowe CLI scripts to streamline your daily development processes or conduct mainframe actions from an off-platform automation tool such as Jenkins or TravisCI.")]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),s("p",[e._v("You want to delete a list of temporary datasets. Use Zowe CLI to download the list, loop through the list, and delete each data set using the "),s("code",[e._v("zowe zos-files delete")]),e._v(" command.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('#!/bin/bash\n\nset -e\n\n# Obtain the list of temporary project data sets\ndslist=$(zowe zos-files list dataset "my.project.ds*")\n\n# Delete each data set in the list\nIFS=$\'\\n\'\nfor ds in $dslist\ndo\n     echo "Deleting Temporary Project Dataset: $ds"\n     zowe files delete ds "$ds" -f\ndone\n')])])]),s("p",[e._v("For more information, see "),s("router-link",{attrs:{to:"/user-guide/cli-usingcli.html#writing-scripts-to-automate-mainframe-actions"}},[e._v("Writing scripts to automate mainframe actions.")])],1),e._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),s("p",[e._v("You successfully installed Zowe CLI, issued your first commands, and wrote a simple script! Next, you might want to:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Review "),s("router-link",{attrs:{to:"/user-guide/cli-usingcli.html#zowe-cli-command-groups"}},[e._v("Command Groups")]),e._v(" to learn what functionality is available, and explore the in-product help.")],1)]),e._v(" "),s("li",[s("p",[e._v("Learn about "),s("router-link",{attrs:{to:"/user-guide/cli-configuringcli.html#defining-environment-variables"}},[e._v("using environment variables")]),e._v(" to store configuration options.")],1)]),e._v(" "),s("li",[s("p",[e._v("Integrate your scripts with an automation server like Jenkins.")])]),e._v(" "),s("li",[s("p",[e._v("See what "),s("router-link",{attrs:{to:"/user-guide/cli-extending.html"}},[e._v("plug-ins are available")]),e._v(" for the CLI.")],1)]),e._v(" "),s("li",[s("p",[e._v("Learn about "),s("router-link",{attrs:{to:"/extend/extend-cli/cli-developing-a-plugin.html"}},[e._v("developing for the CLI")]),e._v(" (contributing to core and developing plug-ins).")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);