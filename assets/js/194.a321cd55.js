(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{479:function(e,s,n){"use strict";n.r(s);var t=n(43),a=Object(t.a)({},function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h4",{attrs:{id:"debug-azure-functions-with-visual-studio-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debug-azure-functions-with-visual-studio-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Debug Azure Functions with Visual Studio Code")]),e._v(" "),n("p",[e._v("Yesterday, we looked at adding an Azure Function project to Visual Studio Code in this "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip50.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("post"),n("OutboundLink")],1),e._v(". Today, we'll take that same app and look at debugging it locally.")]),e._v(" "),n("p",[e._v("All you need to do is to place your break point and hit F5 to start debugging.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/azfuncdebug1.png")}}),e._v(" "),n("p",[e._v("If you click on the terminal tab, then you can see what is happening behind the scenes such as: Reading the host files, starting up the node instance, and the URL that the app is running on (if you selected the HttpTrigger tempate).")]),e._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n> Executing task: func host start <\n\n\n                  %%%%%%\n                 %%%%%%\n            @   %%%%%%    @\n          @@   %%%%%%      @@\n       @@@    %%%%%%%%%%%    @@@\n     @@      %%%%%%%%%%        @@\n       @@         %%%%       @@\n         @@      %%%       @@\n           @@    %%      @@\n                %%\n                %\n\n[11/13/17 12:53:27 AM] Reading host configuration file '/Users/mbcrump/Documents/mynewfunction/host.json'\n[11/13/17 12:53:27 AM] Host configuration file read:\n[11/13/17 12:53:27 AM] {}\n[11/13/17 12:53:27 AM]\ninfo: Worker.Node.2e8cfb1a-5cef-47c1-b47c-0b7168edea6e[0]\n      Start Process: node  --inspect=5858 \"/Users/mbcrump/.azurefunctions/bin/workers/Node/dist/src/nodejsWorker.js\" --host 127.0.0.1 --port 63468 --workerId 2e8cfb1a-5cef-47c1-b47c-0b7168edea6e --requestId 69492e6d-71c4-42a7-a778-8d81848dd250\ninfo: Worker.Node.2e8cfb1a-5cef-47c1-b47c-0b7168edea6e[0]\n      Debugger listening on ws://127.0.0.1:5858/ec787873-bfd8-4460-ab16-4bed4cad4d7e\ninfo: Worker.Node.2e8cfb1a-5cef-47c1-b47c-0b7168edea6e[0]\n      For help see https://nodejs.org/en/docs/inspector\n[11/13/17 12:53:28 AM] Generating 1 job function(s)\n[11/13/17 12:53:28 AM] Starting Host (HostId=michaelsmacbookpro-656556677, Version=2.0.11308.0, ProcessId=12876, Debug=False, Attempt=0)\nListening on http://localhost:7071/\nHit CTRL-C to exit...\n\nHttp Functions:\n\n        HttpTriggerJS: http://localhost:7071/api/HttpTriggerJS\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br")])]),n("p",[e._v("Copy the URL the app is running on and paste it in a browser and your breakpoint will fire. If you step through the breakpoint, then you'll see the function is expecting a parameter.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/azfuncdebug2.png")}}),e._v(" "),n("p",[e._v("You can look back at the terminal inside of Visual Studio Code to see the log.")]),e._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("11/13/17 1:07:06 AM] JavaScript HTTP trigger function processed a request.\n[11/13/17 1:07:06 AM] Function completed (Success, Id=0f906094-215c-4997-80ac-3f382155ab26, Duration=46547ms)\n[11/13/17 1:07:06 AM] Executed 'Functions.HttpTriggerJS' (Succeeded, Id=0f906094-215c-4997-80ac-3f382155ab26)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])])])},[],!1,null,null,null);s.default=a.exports}}]);