(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{376:function(e,t,o){"use strict";o.r(t);var a=o(3),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"logging-utility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-utility"}},[e._v("#")]),e._v(" Logging utility")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("zlux-shared")]),e._v(" repository provides a logging utility for use by dataservices and web content for an application plug-in.")]),e._v(" "),o("h2",{attrs:{id:"logging-objects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-objects"}},[e._v("#")]),e._v(" Logging objects")]),e._v(" "),o("p",[e._v("The logging utility is based on the following objects:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Component Loggers")]),e._v(": Objects that log messages for an individual component of the environment, such as a REST API for an application plug-in or to log user access.")]),e._v(" "),o("li",[o("strong",[e._v("Destinations")]),e._v(": Objects that are called when a component logger requests a message to be logged. Destinations determine how something is logged, for example, to a file or to a console, and what formatting is applied.")]),e._v(" "),o("li",[o("strong",[e._v("Logger")]),e._v(": Central logging object, which can spawn component loggers and attach destinations.")])]),e._v(" "),o("h2",{attrs:{id:"logger-ids"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logger-ids"}},[e._v("#")]),e._v(" Logger IDs")]),e._v(" "),o("p",[e._v("Because Zowe™ application plug-ins have unique identifiers, both dataservices and an application plug-in's web content are provided with a component logger that knows this unique ID such that messages that are logged can be prefixed with the ID. With the association of logging to IDs, you can control verbosity of logs by setting log verbosity by ID.")]),e._v(" "),o("h2",{attrs:{id:"accessing-logger-objects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-logger-objects"}},[e._v("#")]),e._v(" Accessing logger objects")]),e._v(" "),o("h3",{attrs:{id:"logger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[e._v("#")]),e._v(" Logger")]),e._v(" "),o("p",[e._v("The core logger object is attached as a global for low-level access.")]),e._v(" "),o("h4",{attrs:{id:"app-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-server"}},[e._v("#")]),e._v(" App Server")]),e._v(" "),o("p",[e._v("NodeJS uses "),o("code",[e._v("global")]),e._v(" as its global object, so the logger is attached to:\n"),o("code",[e._v("global.COM_RS_COMMON_LOGGER")])]),e._v(" "),o("h4",{attrs:{id:"web"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[e._v("#")]),e._v(" Web")]),e._v(" "),o("p",[e._v("Browsers use "),o("code",[e._v("window")]),e._v(" as the global object, so the logger is attached to:\n"),o("code",[e._v("window.COM_RS_COMMON_LOGGER")])]),e._v(" "),o("h3",{attrs:{id:"component-logger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-logger"}},[e._v("#")]),e._v(" Component logger")]),e._v(" "),o("p",[e._v("Component loggers are created from the core logger object, but when working with an application plug-in, allow the application plug-in framework to create these loggers for you. An application plug-in's component logger is presented to dataservices or web content as follows.")]),e._v(" "),o("h4",{attrs:{id:"app-server-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-server-2"}},[e._v("#")]),e._v(" App Server")]),e._v(" "),o("p",[e._v("See "),o("strong",[e._v("Router Dataservice Context")]),e._v(" in the topic "),o("router-link",{attrs:{to:"/extend/extend-desktop/mvd-dataservices.html"}},[e._v("Dataservices")]),e._v(".")],1),e._v(" "),o("h4",{attrs:{id:"web-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web-2"}},[e._v("#")]),e._v(" Web")]),e._v(" "),o("p",[e._v("(Angular App Instance Injectible). See "),o("strong",[e._v("Logger")]),e._v(" in "),o("router-link",{attrs:{to:"/extend/extend-desktop/mvd-desktopandwindowmgt.html"}},[e._v("Zowe Desktop and window management")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"using-log-message-ids"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-log-message-ids"}},[e._v("#")]),e._v(" Using log message IDs")]),e._v(" "),o("p",[e._v("To make technical support for your application easier, create IDs for common log messages and use substitution to generate them. When you use IDs, people fielding support calls can identify and solve problems more quickly. IDs are particularly helpful if your application is translated, because it avoids users having to explain problems using language that the tech support person might not understand.")]),e._v(" "),o("p",[e._v("To use log message IDs, take the following steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Depending on how your application is structured, create message files in the following locations:")]),e._v(" "),o("ul",[o("li",[e._v("Web log messages: "),o("code",[e._v("\\src\\assets\\i18n\\log\\messages_{language}.json")])]),e._v(" "),o("li",[e._v("App server log messages: "),o("code",[e._v("\\lib\\assets\\i18n\\log\\messages_{language}.json")])])])]),e._v(" "),o("li",[o("p",[e._v("In the files, create ID-message pairs using the following format:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{ "id1": "value1", "id2": "value2" [...] }\n')])])]),o("p",[e._v('Where "id#" is the message ID and "value#" is the text. For example:')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{ "A001": "Application created.", "A002": "Application deleted." [...] }\n')])])])]),e._v(" "),o("li",[o("p",[e._v("Reference the IDs in your code, for example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('this.log.info("A0001")\n')])])]),o("p",[e._v("Which compiles to:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("DATE TIME:TIME:TIME.TIME <ZWED:> username INFO (org.zowe.app.name,:) A0001 - Application created.\n")])])]),o("p",[e._v("Or in another supported language, such as Russian:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("DATE TIME:TIME:TIME.TIME <ZWED:> username INFO (org.zowe.app.name,:) A0001 - Приложение создано.\n")])])])])]),e._v(" "),o("h2",{attrs:{id:"logger-api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logger-api"}},[e._v("#")]),e._v(" Logger API")]),e._v(" "),o("p",[e._v("The following constants and functions are available on the central logging object.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Attribute")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Arguments")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("makeComponentLogger")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Returns an existing logger of this name, or creates a new component logger if no logger of the specified name exists - Automatically done by the application framework for dataservices and web content")]),e._v(" "),o("td",[o("code",[e._v("componentIDString")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("setLogLevelForComponentName")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Sets the verbosity of an existing component logger")]),e._v(" "),o("td",[o("code",[e._v("componentIDString")]),e._v(", "),o("code",[e._v("logLevel")])])])])]),e._v(" "),o("h2",{attrs:{id:"component-logger-api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-logger-api"}},[e._v("#")]),e._v(" Component Logger API")]),e._v(" "),o("p",[e._v("The following constants and functions are available to each component logger.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Attribute")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Arguments")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("SEVERE")])]),e._v(" "),o("td",[e._v("const")]),e._v(" "),o("td",[e._v("Is a const for "),o("code",[e._v("logLevel")])]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[o("code",[e._v("WARNING")])]),e._v(" "),o("td",[e._v("const")]),e._v(" "),o("td",[e._v("Is a const for "),o("code",[e._v("logLevel")])]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[o("code",[e._v("INFO")])]),e._v(" "),o("td",[e._v("const")]),e._v(" "),o("td",[e._v("Is a const for "),o("code",[e._v("logLevel")])]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[o("code",[e._v("FINE")])]),e._v(" "),o("td",[e._v("const")]),e._v(" "),o("td",[e._v("Is a const for "),o("code",[e._v("logLevel")])]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[o("code",[e._v("FINER")])]),e._v(" "),o("td",[e._v("const")]),e._v(" "),o("td",[e._v("Is a const for "),o("code",[e._v("logLevel")])]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[o("code",[e._v("FINEST")])]),e._v(" "),o("td",[e._v("const")]),e._v(" "),o("td",[e._v("Is a const for "),o("code",[e._v("logLevel")])]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[o("code",[e._v("log")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Used to write a log, specifying the log level")]),e._v(" "),o("td",[o("code",[e._v("logLevel")]),e._v(", "),o("code",[e._v("messageString")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("severe")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Used to write a SEVERE log.")]),e._v(" "),o("td",[o("code",[e._v("messageString")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("warn")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Used to write a WARNING log.")]),e._v(" "),o("td",[o("code",[e._v("messageString")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("info")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Used to write an INFO log.")]),e._v(" "),o("td",[o("code",[e._v("messageString")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("debug")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Used to write a FINE log.")]),e._v(" "),o("td",[o("code",[e._v("messageString")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("makeSublogger")])]),e._v(" "),o("td",[e._v("function")]),e._v(" "),o("td",[e._v("Creates a new component logger with an ID appended by the string given")]),e._v(" "),o("td",[o("code",[e._v("componentNameSuffix")])])])])]),e._v(" "),o("h2",{attrs:{id:"log-levels"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log-levels"}},[e._v("#")]),e._v(" Log Levels")]),e._v(" "),o("p",[e._v("An enum, "),o("code",[e._v("LogLevel")]),e._v(", exists for specifying the verbosity level of a logger. The mapping is:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Level")]),e._v(" "),o("th",[e._v("Number")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("SEVERE")]),e._v(" "),o("td",[e._v("0")])]),e._v(" "),o("tr",[o("td",[e._v("WARNING")]),e._v(" "),o("td",[e._v("1")])]),e._v(" "),o("tr",[o("td",[e._v("INFO")]),e._v(" "),o("td",[e._v("2")])]),e._v(" "),o("tr",[o("td",[e._v("FINE")]),e._v(" "),o("td",[e._v("3")])]),e._v(" "),o("tr",[o("td",[e._v("FINER")]),e._v(" "),o("td",[e._v("4")])]),e._v(" "),o("tr",[o("td",[e._v("FINEST")]),e._v(" "),o("td",[e._v("5")])])])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" The default log level for a logger is "),o("strong",[e._v("INFO")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"logging-verbosity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-verbosity"}},[e._v("#")]),e._v(" Logging verbosity")]),e._v(" "),o("p",[e._v("Using the component logger API, loggers can dictate at which level of verbosity a log message should be visible.\nYou can configure the server or client to show more or less verbose messages by using the core logger's API objects.")]),e._v(" "),o("p",[e._v("Example: You want to set the verbosity of the org.zowe.foo application plug-in's dataservice, bar to show debugging information.")]),e._v(" "),o("p",[o("code",[e._v("logger.setLogLevelForComponentName('org.zowe.foo.bar',LogLevel.DEBUG)")])]),e._v(" "),o("h3",{attrs:{id:"configuring-logging-verbosity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-logging-verbosity"}},[e._v("#")]),e._v(" Configuring logging verbosity")]),e._v(" "),o("p",[e._v("The application plug-in framework provides ways to specify what component loggers you would like to set default verbosity for, such that you can easily turn logging on or off.")]),e._v(" "),o("h4",{attrs:{id:"server-startup-logging-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#server-startup-logging-configuration"}},[e._v("#")]),e._v(" Server startup logging configuration")]),e._v(" "),o("p",[e._v("The server configuration file allows for specification of default log levels, as a top-level attribute "),o("code",[e._v("logLevel")]),e._v(", which takes key-value pairs where the key is a regex pattern for component IDs, and the value is an integer for the log levels.")]),e._v(" "),o("p",[e._v("For example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('"logLevel": {\n    "com.rs.configjs.data.access": 2,\n    //the string given is a regex pattern string, so .* at the end here will cover that service and its subloggers.\n    "com.rs.myplugin.myservice.*": 4\n    //\n    // \'_\' char reserved, and \'_\' at beginning reserved for server. Just as we reserve\n    // \'_internal\' for plugin config data for config service.\n    // _unp = universal node proxy core logging\n    //"_unp.dsauth": 2\n  },\n')])])]),o("p",[e._v("For more information about the server configuration file, see "),o("router-link",{attrs:{to:"/user-guide/mvd-configuration.html#zowe-application-framework-configuration"}},[e._v("Zowe Application Framework (zLUX) configuration")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);