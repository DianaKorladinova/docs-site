(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{243:function(t,e,a){t.exports=a.p+"assets/img/swag.ae488ef5.png"},244:function(t,e,a){t.exports=a.p+"assets/img/struct1.8b10736f.png"},245:function(t,e,a){t.exports=a.p+"assets/img/menu1.4aef2014.png"},412:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-a-restapi-with-swagger-documentation-using-liberty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-restapi-with-swagger-documentation-using-liberty"}},[t._v("#")]),t._v(" Creating a RestAPI with Swagger documentation using Liberty")]),t._v(" "),s("p",[t._v('This tutorial will show you how to develop your own Zowe API\'s with Swagger notation. Although the resulting War file is "dropped into" a Liberty server, the same principles can be applied for other JEE servers.')]),t._v(" "),s("p",[t._v("The source repo for the project can be found at the "),s("a",{attrs:{href:"https://github.com/zowe/rest-api-jzos-sample",target:"_blank",rel:"noopener noreferrer"}},[t._v("rest-api-jzos sample"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This document describes how we can add new function and UI's to run alongside Zowe.")]),t._v(" "),s("p",[t._v("So for example, as a team with an established z/OS application we may want to provide wider access to that functionality so that it can be exploited by different applications and organizations. This can include making functionality available to company DevOps processes or for inclusion in UI's.")]),t._v(" "),s("h2",{attrs:{id:"prerequisite-skills"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-skills"}},[t._v("#")]),t._v(" Prerequisite skills")]),t._v(" "),s("p",[t._v("Developers should be familiar with the following technologies:")]),t._v(" "),s("ul",[s("li",[t._v("Java")]),t._v(" "),s("li",[t._v("Git and GitHub")]),t._v(" "),s("li",[t._v("Maven")])]),t._v(" "),s("p",[t._v("Knowledge of the following development technologies is beneficial:")]),t._v(" "),s("ul",[s("li",[t._v("J2E")]),t._v(" "),s("li",[t._v("Liberty or WebSphere Application Server")]),t._v(" "),s("li",[t._v("Eclipse/z/OS Explorer")]),t._v(" "),s("li",[t._v("RestAPI's")]),t._v(" "),s("li",[t._v("zSystems development")])]),t._v(" "),s("h2",{attrs:{id:"zowe-api-architecture-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zowe-api-architecture-overview"}},[t._v("#")]),t._v(" Zowe API Architecture Overview")]),t._v(" "),s("p",[t._v("Much of the Zowe infrastructure builds upon functionality provided by different applications and systems in z/OS some of which are microservices deployed on a Liberty server running on the Z system. As an example Zowe can access z/OSMF services that are aggregated with other functionality that provides new or more comprehensive functionality that allows new services to be created that also benefit from single-sign using "),s("strong",[t._v("Lightweight Third Party")]),t._v(" Authentication (LTPA) keys and centralized logging functions.")]),t._v(" "),s("p",[t._v("The API for Zowe is written in Java utilizing JAX-RS: Java API for RESTful Web Services (JAX-RS). JAX-RS uses Java annotations to simplify the development and deployment of web service clients and endpoints and ultimately become rendered into swagger interfaces.")]),t._v(" "),s("h2",{attrs:{id:"building-your-own-microservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-your-own-microservice"}},[t._v("#")]),t._v(" Building your own Microservice")]),t._v(" "),s("p",[t._v("There are many publications and blogs regarding Microservice design\navailable and it's beyond our scope to attempt to cover here. Fundamentally, however you have most likely already performed an analysis of your product and have identified several notional business\nareas or components that you are most interested in. One of the recommendations in developing Microservices is not to have one massive service but several services that represent component areas. One reason\nwould be Microservices that are not used or function is considered restricted can be excluded without affecting other function.")]),t._v(" "),s("p",[t._v("Once you have identified areas of the functionality Microservices for the API's can be designed. Once again there are an\nenormous amount of guidelines, Best practices, strict rules and design guides out there and I won't be prescriptive how you do this except to\nsay that you will spend a lot of time teasing out your API object names and considering how the REST functions (GET, PUT, POST and DELETE) apply\nto these objects. Once ready or as long as we have the most basic Get Object API defined we can make a start at coding.")]),t._v(" "),s("p",[t._v("An example below is intended to show how we apply the definitions of\nthe Rest API as Java Annotations around a Java method.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PUT")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{attribute}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Produces")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MediaType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APPLICATION_JSON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Updates the value of an existing environment variable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t              notes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This API uses JZOS to perform the process."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiResponses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Updated the environment variable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Environment variable name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value of an environmental variable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueParameter")]),t._v(" parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tjzosService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('Within the Liberty server we have configured a function "APIDiscovery" which at run time converts this into swagger format.')]),t._v(" "),s("p",[s("img",{attrs:{src:a(243),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"anatomy-of-a-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-a-project"}},[t._v("#")]),t._v(" Anatomy of a project")]),t._v(" "),s("p",[t._v("Using "),s("a",{attrs:{href:"https://github.com/zowe/rest-api-jzos-sample",target:"_blank",rel:"noopener noreferrer"}},[t._v("rest-api-jzos sample"),s("OutboundLink")],1),t._v(" as a guide. Create a Dynamic web project (don't specify it as part of an EAR if using the wizard), or if using a\nMaven archetype choose one containing a simplified sample J2EE application.")]),t._v(" "),s("p",[s("em",[t._v("Alternatively, use the project as a template. Download the code, rename it and use as the basis of your new project.")])]),t._v(" "),s("p",[t._v("The image below indicates the type of structure you should be seeing although this contains more files and folders than you will have\ninitially it should give you the general idea. Don't worry about git or target at this stage they will appear later as you develop your project.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(244),alt:""}})]),t._v(" "),s("p",[t._v("Your project should be developed as a standalone war file and deployed either to a local server if you have no z dependencies (Hint: good to\nstart with). If using Eclipse and not yet using z/OS specific functionality consider setting up a test server within Eclipse and\nautomatically deploying your war to it. Fantastic for debugging.")]),t._v(" "),s("p",[t._v("The alternative is to drop the war into the Dropins folder of an existing Zowe installation.")]),t._v(" "),s("p",[t._v("It is possible to debug remotely using Eclipse but personally I have found this can lead to issues such as corrupt process locks in z/OS\nrequiring SysProg intervention. If you have quick access to SysProg rights you may be comfortable with this but often good old sysout is the\nbest debug support")]),t._v(" "),s("p",[t._v("The example project uses Maven for its build process which will run locally or as part of a Jenkins build process.")]),t._v(" "),s("p",[t._v("Further examples of implementations can be found looking at the code for the Zowe microservice.")]),t._v(" "),s("h3",{attrs:{id:"eclipse-hint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-hint"}},[t._v("#")]),t._v(" Eclipse hint..")]),t._v(" "),s("p",[t._v("Using Maven to build in an Eclipse environment can leave your files full of red x's. Generally this is caused because the Eclipse compiler\nmechanism has no visibility of dependencies described in the pom.xml file. There is a magic function to help with this. Right click on your\nproject and select the Maven Update option. This will allow the Eclipse project to be updated and get rid of many of the x's.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(245),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"generic-jar-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generic-jar-files"}},[t._v("#")]),t._v(" Generic jar files")]),t._v(" "),s("p",[t._v("It is likely that the Zowe team will provide utility jar files that will either be present on the server or require specific inclusion as\ndescribed in 'Additional Jars'. Currently generic jar files such as Zowe utilities should be included in your war file. This may be revised\nlater based upon future requirements.")]),t._v(" "),s("h2",{attrs:{id:"unit-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing"}},[t._v("#")]),t._v(" Unit Testing")]),t._v(" "),s("p",[t._v("Aim for 100% coverage. In many cases it may be impossible or impractical to achieve either because code is auto-generated or covered in other\ntests. Use Jacoco to highlight where there are gaps.")]),t._v(" "),s("p",[t._v("Note the references to Jacoco in the atlas-jzos-sample pom.xml file. Remember it operates in two phases, initializing before the unit tests\nare run and reporting afterwards.")]),t._v(" "),s("p",[t._v("Examples of unit testing, the use of Mockito and PowerMock are in the src/test/java folder for the jzos sample.")]),t._v(" "),s("h3",{attrs:{id:"fv-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fv-testing"}},[t._v("#")]),t._v(" FV testing")]),t._v(" "),s("p",[t._v("For the purpose of testing applications in a live fully configured environment scenario it is necessary to create another testing specific\nproject. You will notice that only the src/main/tests folder is populated. When running a Maven build the tests contained here are\nexercised.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Using the maven-archetype-quickstart as your Maven template or by creating a new Java project and adding the pom.xml file in Eclipse,\ncreate a project to contain FV and/or Integration tests.")])]),t._v(" "),s("li",[s("p",[t._v("Alternatively, you can always download the code, rename it and use as the basis of your new project.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);