(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{327:function(e,t,s){"use strict";s.r(t);var r=s(3),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"troubleshooting-z-os-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-z-os-services"}},[e._v("#")]),e._v(" Troubleshooting z/OS Services")]),e._v(" "),s("p",[e._v("The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior installing and using Zowe™ z/OS Services.")]),e._v(" "),s("h2",{attrs:{id:"unable-to-generate-unique-ceatso-apptag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-generate-unique-ceatso-apptag"}},[e._v("#")]),e._v(" Unable to generate unique CeaTso APPTAG")]),e._v(" "),s("p",[s("strong",[e._v("Symptom:")])]),e._v(" "),s("p",[e._v("When you request a Zowe data set or z/OS Files API, you receive a response code 500 - 'Internal Server Error', with a message \"Unable to generate unique CeaTso APPTAG\".")]),e._v(" "),s("p",[s("strong",[e._v("Solution:")])]),e._v(" "),s("p",[e._v("Check z/OSMF settings of REST API of file. You must define "),s("code",[e._v("RESTAPI_FILE")]),e._v(" in IZUPRMxx by the following statement:")]),e._v(" "),s("p",[s("code",[e._v("RESTAPI_FILE ACCT(IZUACCT) REGION(32768) PROC(IZUFPROC)")])]),e._v(" "),s("p",[e._v("The default IZUFPROC can be found in SYS1.PPROCLIB. And the proper authorization is needed to get IZUFPROC work successfully.")]),e._v(" "),s("h2",{attrs:{id:"z-os-services-are-unavailable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-os-services-are-unavailable"}},[e._v("#")]),e._v(" z/OS Services are unavailable")]),e._v(" "),s("p",[e._v("If the z/OS Services are unavailable, take the following corrective actions.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Ensure that the z/OSMF REST API services are working. Check the z/OSMF IZUSVR1 task output for errors and confirm that the z/OSMF RESTFILES services are started successfully. If no errors occur, you can see the following message in the IZUSVR1 job output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CWWKZ0001I: Application IzuManagementFacilityRestFiles started in n.nnn seconds.\n")])])]),s("p",[e._v("To test z/OSMF REST APIs you can run curl scripts from your workstation.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl --user <username>:<password> -k -X GET --header 'Accept: application/json' --header 'X-CSRF-ZOSMF-HEADER: true' \"https://<z/os host name>:<securezosmfport>/zosmf/restjobs/jobs?prefix=*&owner=*\"\n")])])]),s("p",[e._v("where the "),s("em",[e._v("securezosmfport")]),e._v(" is 443 by default. You can verify the port number by checking the "),s("em",[e._v("izu.https.port")]),e._v(" variable assignment in the z/OSMF "),s("code",[e._v("bootstrap.properties")]),e._v(" file.")]),e._v(" "),s("p",[e._v("If z/OSMF returns jobs correctly, you can test whether it is able to returns files by using the following curl scripts:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl --user <username>:<password> -k -X GET --header 'Accept: application/json' --header 'X-CSRF-ZOSMF-HEADER: true' \"https://<z/os host name>:<securezosmfport>/zosmf/restfiles/ds?dslevel=SYS1\"\n")])])]),s("p",[e._v("If the restfiles curl statement returns a TSO SERVLET EXCEPTION error, check that the the z/OSMF installation step of creating a valid IZUFPROC procedure in your system PROCLIB has been completed. For more information, see the "),s("a",{attrs:{href:"https://www-01.ibm.com/servers/resourcelink/svc00100.nsf/pages/zOSV2R3sc278419?OpenDocument",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OSMF Configuration Guide"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The IZUFPROC member resides in your system PROCLIB, which is similar to the following sample:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//IZUFPROC PROC ROOT='/usr/lpp/zosmf'  /* zOSMF INSTALL ROOT     */\n//IZUFPROC EXEC PGM=IKJEFT01,DYNAMNBR=200                          \n//SYSEXEC  DD DISP=SHR,DSN=ISP.SISPEXEC                            \n//         DD DISP=SHR,DSN=SYS1.SBPXEXEC                           \n//SYSPROC  DD DISP=SHR,DSN=ISP.SISPCLIB                            \n//         DD DISP=SHR,DSN=SYS1.SBPXEXEC                           \n//ISPLLIB  DD DISP=SHR,DSN=SYS1.SIEALNKE                           \n//ISPPLIB  DD DISP=SHR,DSN=ISP.SISPPENU                            \n//ISPTLIB  DD RECFM=FB,LRECL=80,SPACE=(TRK,(1,0,1))                \n//         DD DISP=SHR,DSN=ISP.SISPTENU                            \n//ISPSLIB  DD DISP=SHR,DSN=ISP.SISPSENU                            \n//ISPMLIB  DD DISP=SHR,DSN=ISP.SISPMENU                            \n//ISPPROF  DD DISP=NEW,UNIT=SYSDA,SPACE=(TRK,(15,15,5)),            \n//         DCB=(RECFM=FB,LRECL=80,BLKSIZE=3120)                     \n//IZUSRVMP DD PATH='&ROOT./defaults/izurf.tsoservlet.mapping.json'  \n//SYSOUT   DD SYSOUT=H                                              \n//CEEDUMP  DD SYSOUT=H                                              \n//SYSUDUMP DD SYSOUT=H                                              \n//                                                                 \n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" You might need to change paths and data sets names to match your installation.")]),e._v(" "),s("p",[e._v("A known issue and workaround for RESTFILES API can be found at "),s("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?crawler=1&uid=isg1PI63398",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSO SERVLET EXCEPTION ATTEMPTING TO USE RESTFILE INTERFACE"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Check your system console log for related error messages and respond to them.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);