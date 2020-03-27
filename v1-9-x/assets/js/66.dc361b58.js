(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{382:function(e,t,r){"use strict";r.r(t);var s=r(3),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"installing-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-plugins"}},[e._v("#")]),e._v(" Installing Plugins")]),e._v(" "),r("p",[e._v("Plugins can be added or removed from the Zowe App Server, as well as upgraded. There are two ways to do these actions: By REST API or by filesystem. The instructions below assume you have administrative permissions either to access the correct REST APIs or to have the necessary permissions to update server directories & files.")]),e._v(" "),r("p",[r("em",[e._v("NOTE:")]),e._v(" To successfully install, you must "),r("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Building-Plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-build"),r("OutboundLink")],1),e._v(" plugins with the correct "),r("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/ZLUX-App-filesystem-structure",target:"_blank",rel:"noopener noreferrer"}},[e._v("directory structure"),r("OutboundLink")],1),e._v(", and meet all dependencies. If a plugin has successfully installed but does not display in the Zowe desktop, see the server log in the "),r("code",[e._v("<INSTANCE_DIR>/log/install-app.log")]),e._v(" directory (for example, "),r("code",[e._v("~/.zowe/log/install-app.log")]),e._v(") to troubleshoot the problem.")]),e._v(" "),r("h2",{attrs:{id:"by-filesystem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#by-filesystem"}},[e._v("#")]),e._v(" By filesystem")]),e._v(" "),r("p",[e._v("The App server uses directories of JSON files, described in the "),r("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Configuration-for-ZLUX-App-Server-&-ZSS#deploy-configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),r("OutboundLink")],1),e._v(". Defaults are located in the folder "),r("code",[e._v("zlux-app-server/defaults/plugins")]),e._v(", but the server reads the list of plugins instead from the instance directory, at "),r("code",[e._v("<INSTANCE_DIR>/workspace/app-server/plugins")]),e._v(" (for example, "),r("code",[e._v("~/.zowe/workspace/app-server/plugins")]),e._v(" which includes JSON files describing where to find a plugin. Adding or removing JSONs from this folder will add or remove plugins upon server restart, or you can use REST APIs and cluster mode to add or remove plugins without restarting).")]),e._v(" "),r("h3",{attrs:{id:"old-plugins-folder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#old-plugins-folder"}},[e._v("#")]),e._v(" Old plugins folder")]),e._v(" "),r("p",[e._v("Prior to Zowe release 1.8.0, the location of the default and instance plugins directory were located within "),r("code",[e._v("zlux-app-server")]),e._v(" folder unless otherwise customized. 1.8.0 has backwards compatibility for the existence of these directories, but they can and should be migrated to take advantage of future enhancements.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Folder")]),e._v(" "),r("th",[e._v("New Location")]),e._v(" "),r("th",[e._v("Old Location")]),e._v(" "),r("th",[e._v("Note")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Default plugins")]),e._v(" "),r("td",[r("code",[e._v("zlux-app-server/defaults/plugins")])]),e._v(" "),r("td",[r("code",[e._v("zlux-app-server/plugins")])]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Instance plugins")]),e._v(" "),r("td",[r("code",[e._v("<INSTANCE_DIR>/workspace/app-server/plugins")])]),e._v(" "),r("td",[r("code",[e._v("zlux-app-server/instance/ZLUX/plugins")])]),e._v(" "),r("td",[e._v("INSTANCE_DIR is ~/.zowe if not otherwise defined")])])])]),e._v(" "),r("h3",{attrs:{id:"adding-installing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adding-installing"}},[e._v("#")]),e._v(" Adding/Installing")]),e._v(" "),r("p",[e._v("To add or install a plugin, run the script "),r("code",[e._v("zlux-app-server/bin/install-app.sh")]),e._v(" providing the location to a plugin folder. For example:")]),e._v(" "),r("p",[r("code",[e._v("./install-app.sh /home/john/zowe/sample-angular-app")])]),e._v(" "),r("p",[e._v("This will generate a JSON file that states the plugin's ID and its location on disk. These JSON files tell the Desktop where to find apps. For example, if we were to install the sample angular-app in the folder "),r("code",[e._v("/home/john/zowe/sample-angular-app")]),e._v(", then the JSON would be:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n  "identifier":"org.zowe.zlux.sample.angular", \n  "location": "/home/john/zowe/sample-angular-app"\n}\n')])])]),r("h3",{attrs:{id:"removing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#removing"}},[e._v("#")]),e._v(" Removing")]),e._v(" "),r("p",[e._v("To remove a plugin, locate the server's instance plugin directory "),r("code",[e._v("<INSTANCE_DIR>/workspace/app-server/plugins")]),e._v(" (for example, "),r("code",[e._v("~/.zowe/workspace/app-server/plugins")]),e._v(") and remove the locator JSON that is associated with that plugin. Remove the plugin's content by deleting it from the file system if applicable.")]),e._v(" "),r("h3",{attrs:{id:"upgrading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),r("p",[e._v("Currently, only one version of a plugin can exist per server. So, to upgrade, you either upgrade the plugin within its pre-existing directory by rebuilding it (with more up to date code), or you alter the locator JSON of that app to point to the content of the upgraded version.")]),e._v(" "),r("h3",{attrs:{id:"modifying-without-server-restart-exercise-to-the-reader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modifying-without-server-restart-exercise-to-the-reader"}},[e._v("#")]),e._v(" Modifying without server restart (Exercise to the reader)")]),e._v(" "),r("p",[e._v("The server's reading of the locator JSONs and initializing of plugins only happens during bootstrapping at startup. However, in cluster mode the bootstrapping happens once per worker process. Therefore, it is possible to manage plugins without a server restart by killing & respawning all worker processes without killing the cluster master process. This is what the REST API does, internally. To do this without the REST API, it may be possible to script knowing the parent process ID, and running a kill command on all child processes of the App server cluster process.")]),e._v(" "),r("h2",{attrs:{id:"by-rest-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#by-rest-api"}},[e._v("#")]),e._v(" By REST API")]),e._v(" "),r("p",[e._v("The server REST APIs allow plugin management without restarting the server - you can add, remove, and upgrade plugins in real-time. However, removal or upgrade must be done carefully as it can disrupt users of those plugins.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/zowe/zlux-app-server/blob/master/doc/swagger/server-plugins-api.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("This swagger file documents the REST API for plugin management"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("The API only works when RBAC is configured, and an RBAC-compatible security plugin is being used. An example of this is "),r("a",{attrs:{href:"https://github.com/zowe/zss-auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("zss-auth"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/mvd-configuration.html#enabling-rbac",target:"_blank",rel:"noopener noreferrer"}},[e._v("use of RBAC"),r("OutboundLink")],1),e._v(" is described in this documentation and in the "),r("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Auth-Plugin-Configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);