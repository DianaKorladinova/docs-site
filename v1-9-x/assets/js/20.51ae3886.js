(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{239:function(t,s,a){t.exports=a.p+"assets/img/overview.c5ca117d.png"},401:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"creating-a-zowe-integrated-reactjs-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-zowe-integrated-reactjs-ui"}},[t._v("#")]),t._v(" Creating a Zowe integrated ReactJS UI")]),t._v(" "),e("p",[t._v("One of the great things about working with Zowe is that you can include any UI's that you have already developed in your Zowe Virtual Desktop. In this blog we look at how we do this and also show how to take advantage of a Restful API created on a JEE server within the Zowe environment.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(239),alt:""}})]),t._v(" "),e("p",[t._v("Take a look at the "),e("router-link",{attrs:{to:"/extend/extend-api/libertyAPI.html"}},[t._v("Creating a RestAPI with Swagger documentation using Liberty")]),t._v(" tutorial for the background to the Restful API with Swagger documentation we will be using.")],1),t._v(" "),e("h2",{attrs:{id:"prerequisite-skills"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-skills"}},[t._v("#")]),t._v(" Prerequisite skills")]),t._v(" "),e("p",[t._v("Knowledge of the following development technologies is beneficial:")]),t._v(" "),e("ul",[e("li",[t._v("React")]),t._v(" "),e("li",[t._v("Redux")]),t._v(" "),e("li",[t._v("Consuming Rest API's")])]),t._v(" "),e("h2",{attrs:{id:"examining-the-app-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examining-the-app-structure"}},[t._v("#")]),t._v(" Examining the App Structure")]),t._v(" "),e("p",[t._v("First download the sample app found "),e("a",{attrs:{href:"https://github.com/zowe/webui-scenarios/tree/master/basic-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(". We will not be examining the entire sample, but it is included as an example and boilerplate that can be built off of.")]),t._v(" "),e("p",[t._v("Looking at the sample app their are 2 main sections that are important to us:")]),t._v(" "),e("ul",[e("li",[t._v("Constants.js")]),t._v(" "),e("li",[t._v("actions/actions.js.")])]),t._v(" "),e("h3",{attrs:{id:"constants-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constants-js"}},[t._v("#")]),t._v(" Constants.js")]),t._v(" "),e("p",[t._v("Lets first examine Constants.js.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" host "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<host>:<port>'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hostname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hostname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    host "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_SERVER_URL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" host\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("host"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_WS_URL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("wss://")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("host"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),e("p",[t._v("Notice that here we are setting our 'host' for the app. We are connecting to hypothetical server and the default port for the MVD 7445. This host then gets wrapped in a 'BASE_URL' constant that we can use in other sections of our app. Change this line to connect to your own server and port.")]),t._v(" "),e("h3",{attrs:{id:"actions-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions-js"}},[t._v("#")]),t._v(" Actions.js")]),t._v(" "),e("p",[t._v("Next lets look at calling our API created in the "),e("router-link",{attrs:{to:"/extend/extend-api/libertyAPI.html"}},[t._v("creating a RestAPI with Swagger documentation using Liberty")]),t._v(" tutorial. Following Redux structure, this call will be in our action.js file. We won't be looking at the entire file, but instead the relevant fetch request.")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchPosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("subreddit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dispatch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subreddit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" header "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Headers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multipart/form-data'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/jzos/environmentVariable")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      header"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" header"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      credentials"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'include'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("receivePosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subreddit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Note that we are using the "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("fetch api"),e("OutboundLink")],1),t._v(" to the grab the "),e("code",[t._v("environmentVariable")]),t._v(" from the host that we defined before. We then make the rest of our app aware of the response using Redux's 'dispatch' method.")]),t._v(" "),e("h2",{attrs:{id:"adding-your-app-to-the-mvd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-your-app-to-the-mvd"}},[t._v("#")]),t._v(" Adding your App to the MVD")]),t._v(" "),e("p",[t._v('While the zlux environment comes with predefined "apps" and explorers, you also have the ability to extend the system and add your own apps.')]),t._v(" "),e("h3",{attrs:{id:"building-your-app-for-the-mvd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-your-app-for-the-mvd"}},[t._v("#")]),t._v(" Building your App for the MVD.")]),t._v(" "),e("p",[t._v("Before we can place our app on the MVD, we need to first 'build' a production version of it and place it in a folder where Zowe can read it.\nZowe looks in a folder called 'web' when looking for an entry point to new apps.")]),t._v(" "),e("p",[t._v("In order to build and prepare your app:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Run the "),e("code",[t._v("build")]),t._v(" script in "),e("code",[t._v("package.json")]),t._v(" using:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("npm run build")])])])]),t._v(" "),e("li",[e("p",[t._v("Create a folder for your project and a new "),e("code",[t._v("web")]),t._v(" folder inside it.")]),t._v(" "),e("ul",[e("li",[t._v("EX: /Desktop/<Your_Project_Name> and Desktop/<Your_Project_Name>/web")])])]),t._v(" "),e("li",[e("p",[t._v("Copy built project into "),e("code",[t._v("Desktop/<Your_Project_Name>/web")])]),t._v(" "),e("ul",[e("li",[t._v("If using the sample, copy "),e("code",[t._v("app.min.js")]),t._v(" , "),e("code",[t._v("index.html")]),t._v(" , "),e("code",[t._v("icon.png")]),t._v(" and "),e("code",[t._v("css")]),t._v(" into to "),e("code",[t._v("/Desktop/<Your_Project_Name>/web/")])])])])]),t._v(" "),e("h3",{attrs:{id:"configuring-your-app-for-zowe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-your-app-for-zowe"}},[t._v("#")]),t._v(" Configuring your app for Zowe")]),t._v(" "),e("p",[t._v("In order for Zowe to be aware of an app, a pluginDefintion.json file must be included in the root of the project. This file lets Zowe know information about the framework used, reference files, and basic configuration for the app. Lets take a look at our pluginDefinition:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"identifier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.rs.basic-react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apiVersion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginVersion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webContent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"framework"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iframe"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"launchDefinition"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginShortNameKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"basic-react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginShortNameDefault"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IFrame"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imageSrc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon.png"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"descriptionKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sample App Showcasing IFrame Adapter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"descriptionDefault"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sample App Showcasing IFrame Adapter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"startingPage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isSingleWindowApp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultWindowStyle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"width"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("420")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"x"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"y"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dataServices"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Next add this pluginDefinition to the root of your project:")]),t._v(" "),e("ul",[e("li",[t._v("EX: "),e("code",[t._v("Desktop/<Your_Project_Name>/")])])]),t._v(" "),e("h3",{attrs:{id:"explaining-the-plugin-file-system"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explaining-the-plugin-file-system"}},[t._v("#")]),t._v(" Explaining the Plugin file system")]),t._v(" "),e("p",[t._v("To add new apps, files must be added in two locations.")]),t._v(" "),e("ul",[e("li",[t._v("Zowe root ("),e("code",[t._v("/zaas1/zowe/<build-number>")]),t._v(")")]),t._v(" "),e("li",[t._v("Plugins Folder ("),e("code",[t._v("/zaas1/zowe/<build-number>/zlux-example-server/plugins")]),t._v(")")])]),t._v(" "),e("p",[t._v("Inside the 'Plugins Folder' we will add our identifier named "),e("code",[t._v("com.basic-react.json")]),t._v(". Inside this json file the "),e("strong",[t._v("plugin location")]),t._v(" and the "),e("strong",[t._v("identifier name")]),t._v(" are specified. Our identifier will look like this:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"identifier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.rs.basic-react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginLocation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../<basic-react>"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("To add our app to the file system:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Copy project from "),e("code",[t._v("/Desktop")]),t._v(" to "),e("code",[t._v("<zowe_base>/")]),t._v(" on your server")]),t._v(" "),e("ul",[e("li",[t._v("Use "),e("code",[t._v("scp <userID>@<server> /Users/path/to/files <zowe_base>/")])]),t._v(" "),e("li",[t._v("Alternatively this can be done using SFTP or the ZOS Explorer in binary mode.")])])]),t._v(" "),e("li",[e("p",[t._v("Create our identifier within the plugins folder ("),e("code",[t._v("<zowe_base>/zlux-example-server/plugins")]),t._v("):")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("touch com.basic-react.json")])])])]),t._v(" "),e("li",[e("p",[t._v("Edit file with vi to read:")])])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"identifier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.<basic-react>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginLocation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../<basic-react>"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"deploying-your-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-your-app"}},[t._v("#")]),t._v(" Deploying your App")]),t._v(" "),e("p",[t._v("In order to deploy our newly added app,")]),t._v(" "),e("ol",[e("li",[t._v("Run "),e("code",[t._v("./deploy.sh")]),t._v(" found in "),e("code",[t._v("/zaas1/zowe/<build-number>/zlux-build")])]),t._v(" "),e("li",[t._v("Run "),e("code",[t._v("./zowe-stop.sh")]),t._v(" found in "),e("code",[t._v("/zaas1/zowe/<build-number>/scripts")])]),t._v(" "),e("li",[t._v("Run "),e("code",[t._v("./zowe-start.sh")]),t._v(" found in "),e("code",[t._v("/zaas1/zowe/<build-number>/scripts")])])]),t._v(" "),e("h2",{attrs:{id:"setting-up-the-server-for-development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-server-for-development"}},[t._v("#")]),t._v(" Setting up the server for Development")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This next section should only be changed for development purposes.")])]),t._v(" "),e("p",[t._v("While not necessary depending on your system configuration, often will need to allow our server to accept incoming connections and avoid CORS errors.")]),t._v(" "),e("p",[t._v("In order to update the server to accept all connections:")]),t._v(" "),e("ul",[e("li",[t._v("Navigate to "),e("code",[t._v("<zowe-base>/explorer-server/wlp/usr/servers/Atlas/server.xml")])]),t._v(" "),e("li",[t._v("Open the file with vi and paste the following code in.")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FOR")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TESTING")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ONLY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cors allowCredentials"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" allowedMethods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET, DELETE, POST, PUT, OPTIONS"')]),t._v(" allowedOrigins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" allowedHeaders"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FOR")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TESTING")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ONLY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("After adding this section, navigate to "),e("code",[t._v("https://<base>:<port>/ZLUX/plugins/com.rs.mvd/web/")]),t._v(" and you should see your new app added to the MVD!")])])}),[],!1,null,null,null);s.default=n.exports}}]);