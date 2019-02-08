(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{215:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"using-z-os-services-rest-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-z-os-services-rest-apis","aria-hidden":"true"}},[e._v("#")]),e._v(" Using z/OS Services REST APIs")]),e._v(" "),n("p",[e._v("Access and modify your z/OS resources such as jobs, data sets, z/OS UNIX System Services files by using APIs. Zowe provides a range of REST APIs through a Swagger defined description, and a simple interface to specify API endpoint parameters and request bodies along with the response body and return code.")]),e._v(" "),n("p",[e._v("The APIs are available on the API catalog available for you to try within a browser.  The API catalog links to the swagger documentation.")]),e._v(" "),n("p",[n("code",[e._v("https://youhost:apicatalogport/ui/v1/apicatalog/#/dashboard")])]),e._v(" "),n("p",[e._v("From the catalog you will see z/OS Jobs services and z/OS Data Set services.  Selecting these will navigate to the swagger catalog that allows you to view and try out the APIs.")]),e._v(" "),n("h2",{attrs:{id:"programming-rest-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#programming-rest-apis","aria-hidden":"true"}},[e._v("#")]),e._v(" Programming REST APIs")]),e._v(" "),n("p",[e._v("You can program explorer server REST APIs by referring to the examples in this section.")]),e._v(" "),n("h3",{attrs:{id:"sending-a-get-request-in-java"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-get-request-in-java","aria-hidden":"true"}},[e._v("#")]),e._v(" Sending a "),n("code",[e._v("GET")]),e._v(" request in Java")]),e._v(" "),n("p",[e._v("Here is sample code to send a "),n("code",[e._v("GET")]),e._v(" request to explorer server in Java™.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public class JobListener implements Runnable {\n\n\n    /*\n    *   Perform an HTTPs GET at the given jobs URL and credentials\n    *   targetURL e.g "https://host:port/api/v1/jobs?owner=IBMUSER&prefix=*"         \n    *   credentials in the form of base64 encoded string of user:password\n    */     \n    private String executeGET(String targetURL, String credentials) {\n        HttpURLConnection connection = null;         \n        try {             \n            //Create connection             \n            URL url = new URL(targetURL);             \n            connection = (HttpURLConnection) url.openConnection();\n            connection.setRequestMethod("GET");             \n            connection.setRequestProperty("Authorization", credentials);\n\n            //Get Response               \n            InputStream inputStream = connection.getInputStream();\n            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));                             \n            StringBuilder response = new StringBuilder();             \n            String line;                          \n\n            //Process the response line by line             \n            while ((line = bufferedReader.readLine()) != null) {\n                System.out.println(line);             \n            }              \n\n            //Cleanup             \n            bufferedReader.close();              \n\n            //Return the response message             \n            return response.toString();         \n        } catch (Exception e) {             \n            //handle any error(s)         \n        } finally {             \n            //Cleanup             \n            if (connection != null) {                 \n                connection.disconnect();             \n            }         \n        }     \n    }\n}\n')])])]),n("h3",{attrs:{id:"sending-a-get-request-in-javascript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-get-request-in-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" Sending a "),n("code",[e._v("GET")]),e._v(" request in JavaScript")]),e._v(" "),n("p",[e._v("Here is sample code written in JavaScript™ using features from ES6 to send a "),n("code",[e._v("GET")]),e._v("request to explorer server.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const BASE_URL = \'hostname.com:port/api/v1\';\n\n// Call the jobs GET api to get all jobs with the userID IBMUSER\nfunction getJobs(){\n    let parameters = "prefix=*&owner=IBMUSER";     \n    let contentURL = `${BASE_URL}/jobs?${parameters}`;     \n    let result = fetch(contentURL, {credentials: "include"})\n                    .then(response => response.json())\n                        .catch((e) => {                             \n                            //handle any error                             \n                            console.log("An error occoured: " + e);      \n                        });     \n     return result;\n}\n')])])]),n("h3",{attrs:{id:"sending-a-post-request-in-javascript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-post-request-in-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" Sending a "),n("code",[e._v("POST")]),e._v(" request in JavaScript")]),e._v(" "),n("p",[e._v("Here is sample code written in JavaScript™ using features from ES6 to send a "),n("code",[e._v("POST")]),e._v(" request to explorer server.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Call the jobs POST api to submit a job from a data set (ATLAS.TEST.JCL(TSTJ0001))                \nfunction submitJob(){\n    let payload = "{\\"file\\":\\"\'ATLAS.TEST.JCL(TSTJ0001)\'\\"}";\n    let contentURL = `${BASE_URL}/jobs`;\n    let result = fetch(contentURL,\n                    {\n                        credentials: "include",\n                        method: "POST",\n                        body:   payload\n                    })\n                        .then(response => response.json())\n                            .catch((e) => {\n                                //handle any error\n                                console.log("An error occoured: " + e);\n                        });\n    return result;\n}\n')])])]),n("h3",{attrs:{id:"extended-api-sample-in-javascript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extended-api-sample-in-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" Extended API sample in JavaScript")]),e._v(" "),n("p",[e._v("Here is an extended API sample that is written using JavaScript™ with features from ES62015 (map).")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('/////////////////////////////////////////////////////////////////////////////\n// Extended API Sample\n// This Sample is written using Javascript with features from ES62015 (map).\n// The sample is also written using JSX giving the ability to return HTML elements\n// with Javascript variables embedded. This sample is based upon the codebase of the\n// sample UI (see- hostname:port/explorer-mvs) which is written using Facebook\'s React, Redux,\n// Router and Google\'s material-ui\n/////////////////////////////////////////////////////////////////////////////\n\n// Return a table with rows detailing the name and jobID of all jobs matching      \n// the specified parameters\nfunction displayJobNamesTable(){\n    let jobsJSON = getJobs("*","IBMUSER");\n    return  (<table>\n                {jobsJSON.map(job => {\n                    return <tr><td>{job.name}</td><td>{job.id}</td></tr>\n                })}\n            </table>);\n}\n\n// Call the jobs GET api to get all jobs with the userID IBMUSER\nfunction getJobs(owner, prefix){\n    const BASE_URL = \'hostname.com:port/api/v1\';\n    let parameters = "prefix=" + prefix + "&owner=" + owner;     \n    let contentURL = `${BASE_URL}/jobs?${parameters}`;     \n    let result = fetch(contentURL, {credentials: "include"})                     \n                    .then(response => response.json())                         \n                        .catch((e) => {                             \n                            //handle any error                             \n                            console.log("An error occoured: " + e);                                           \n                        });     \n     return result;\n}\n')])])]),n("h2",{attrs:{id:"using-explorer-server-websocket-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-explorer-server-websocket-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Using explorer server WebSocket services")]),e._v(" "),n("p",[e._v("The explorer server provides WebSocket services that can be accessed by using the WSS scheme.\nWith explorer server WebSocket services, you can view the system log in the System log UI\nthat is refreshed automatically when messages are written. You can also open a JES\nspool file for an active job and view its contents that refresh through a web socket.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Server Endpoint")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Prerequisites")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("/api/sockets/jobs/{jobname}/ids/{jobid}/files/{fileid}")])]),e._v(" "),n("td",[e._v("Tail the output of an active job. Use this WSS endpoint to read the tail of an active job's output file in real time.")]),e._v(" "),n("td",[e._v("z/OSMF restjobs")])])])])])}],!1,null,null,null);s.options.__file="usingapis.md";t.default=s.exports}}]);