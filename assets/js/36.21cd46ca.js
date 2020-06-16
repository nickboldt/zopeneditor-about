(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{254:function(e,t,o){"use strict";o.r(t);var n=o(0),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"setting-up-integrations-to-interact-with-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-integrations-to-interact-with-z-os","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up integrations to interact with z/OS")]),e._v(" "),o("p",[e._v("You can use IBM Z Open Editor by itself on your computer without any connection to z/OS and get files manually by using FTP or any other means. However, you can augment the capabilities of IBM Z Open Editor and enjoy a seamless integration of z/OS with IBM Remote System Explorer API (RSE API) or the "),o("a",{attrs:{href:"https://zowe.org/home/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe"),o("OutboundLink")],1),e._v(" open source project. The Zowe project provides great tools that work perfectly with the IBM Z Open Editor.")]),e._v(" "),o("p",[e._v("When using IBM Z Open Editor, you can choose how to interact with z/OS with regard to the following aspects:")]),e._v(" "),o("ul",[o("li",[e._v("Using RSE API or the Zowe default z/OSMF as the host component")]),e._v(" "),o("li",[e._v("Using the command line or graphical interface to interact with z/OS")])]),e._v(" "),o("p",[e._v("Next, you can use the following client-side tools based on your decision:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Available host component")]),e._v(" "),o("th",[e._v("To use command line, install...")]),e._v(" "),o("th",[e._v("To use graphical interface, install...")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("RSE API")]),e._v(" "),o("td",[o("ul",[o("li",[e._v("Zowe CLI, and")]),o("li",[e._v("IBM RSE API Plug-in for Zowe CLI")])])]),e._v(" "),o("td",[o("ul",[o("li",[e._v("Zowe CLI")]),o("li",[e._v("IBM RSE API Plug-in for Zowe CLI, and")]),o("li",[e._v("Zowe Explorer")])])])]),e._v(" "),o("tr",[o("td",[e._v("z/OSMF")]),e._v(" "),o("td",[e._v("Zowe CLI")]),e._v(" "),o("td",[e._v("Zowe Explorer")])])])]),e._v(" "),o("p",[e._v("Detailed information about these tools are as follows:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("IBM RSE API Plug-in for Zowe CLI (RSE CLI plug-in) enables you to interact with z/OS remotely via command line. RSE CLI plug-in interacts with z/OS using RSE API instead of using the Zowe default z/OSMF. See "),o("a",{attrs:{href:"#installing-ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("Installing IBM RSE API Plug-in for Zowe CLI")]),e._v(" to get started. To use RSE CLI plug-in, see "),o("router-link",{attrs:{to:"/Docs/interact_zos_zowe_explorer.html#using-rse-api-in-zowe-explorer"}},[e._v("Using RSE API in Zowe Explorer")]),e._v(" and "),o("router-link",{attrs:{to:"/Docs/interact_zos_cli.html#using-rse-cli-plug-in-commands"}},[e._v("Using RSE CLI plug-in commands")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Zowe CLI enables you to interact with z/OS remotely via command line. After installation as described in "),o("a",{attrs:{href:"#installing-zowe-cli"}},[e._v("Installing Zowe CLI")]),e._v(", you must "),o("router-link",{attrs:{to:"/Docs/interact_zos_cli.html#creating-a-zowe-cli-z-osmf-profile"}},[e._v("create a Zowe CLI z/OSMF user profile")]),e._v(" that stores your personal connection information. To use Zowe CLI with IBM Z Open Editor, see "),o("router-link",{attrs:{to:"/Docs/interact_zos_cli.html#using-zowe-cli-z-osmf-commands"}},[e._v("Using Zowe CLI z/OSMF commands")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("The Zowe Explorer VS Code extension (Zowe Explorer) provides you with graphical views to explore MVS, USS, and JES remotely. When you install IBM Z Open Editor from the VS Code Marketplace into your VS Code, the latest version of the Zowe Explorer VS Code extension is automatically co-installed. For more information about its capabilities and usage, see "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Explorer in the VS Code Marketplace"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-vscodeplugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Docs"),o("OutboundLink")],1),e._v(". To use Zowe Explorer with IBM Z Open Editor, see "),o("router-link",{attrs:{to:"/Docs/interact_zos_zowe_explorer.html"}},[e._v("Using the Zowe Explorer views")]),e._v(".")],1)])]),e._v(" "),o("h2",{attrs:{id:"installing-ibm-rse-api-plug-in-for-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-ibm-rse-api-plug-in-for-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing IBM RSE API Plug-in for Zowe CLI")]),e._v(" "),o("h3",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Before installing IBM RSE API Plug-in for Zowe CLI on your development machine, you must install Zowe CLI for command-line operations. If you would like to use RSE API for UI operations, the Zowe Explorer VS Code extension is required in addition to Zowe CLI. Note that Zowe Explorer is co-installed with IBM Z Open Editor. For more information about installing Zowe CLI, see "),o("a",{attrs:{href:"#installing-zowe-cli"}},[e._v("Installing Zowe CLI")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"installing-the-requisite-ibm-rse-api-z-os-host-component"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-requisite-ibm-rse-api-z-os-host-component","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing the requisite IBM RSE API z/OS host component")]),e._v(" "),o("p",[e._v("Confirm with your system administrator that the following host components are installed and configured on the z/OS host system:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The host component of z/OS Explorer V3.1.1 or V3.2, which is the prerequisite of the RSE API host component.")])]),e._v(" "),o("li",[o("p",[e._v("The RSE API host component, which provides a collection of REST APIs that allow a client to work with various components on the z/OS host system, including MVS data sets, z/OS UNIX files and commands, JES jobs, and more.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" Even if your system administrator has installed RSE on your z/OS before, an update is needed to get the capabilities described here.")])])]),e._v(" "),o("p",[e._v("For information about installing and configuring the RSE API host component, see "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSBDYH_3.1.1/com.ibm.rseapi.doc/rseapi_overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSE API documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" Even if you have installed RSE on your z/OS before, you need to install an update to get the capabilities described here.")]),e._v(" "),o("h3",{attrs:{id:"installing-the-ibm-rse-api-plug-in-for-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-ibm-rse-api-plug-in-for-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing the IBM RSE API Plug-in for Zowe CLI")]),e._v(" "),o("p",[e._v("After installing and configuring the prerequisites and the host component, on the client you can download the "),o("a",{attrs:{href:"https://developer.ibm.com/mainframe/products/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM RSE API Plug-in for Zowe CLI"),o("OutboundLink")],1),e._v(", which now comes packaged with the VS Code download for IBM Developer for z/OS Enterprise Edition. Then, install the plug-in by entering the following command in the terminal:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe plugins "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" path/to/download/ibm-rse-api-for-zowe-cli-1.0.0.tgz\n")])])]),o("p",[e._v("where "),o("code",[e._v("path/to/download/ibm-rse-api-for-zowe-cli-1.0.0.tgz")]),e._v(" should be defined with your own file path.")]),e._v(" "),o("h4",{attrs:{id:"validating-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validating-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Validating installation")]),e._v(" "),o("p",[e._v("If the installation was successful, you can see the following message printed in the terminal:")]),e._v(" "),o("div",{staticClass:"language-terminal extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Installed plugin name = '@ibm/ibm-rse-api-for-zowe-cli'\n\n_____ Validation results for plugin '@ibm/ibm-rse-api-for-zowe-cli' _____\nThis plugin was successfully validated. Enjoy the plugin.\n")])])]),o("h4",{attrs:{id:"getting-help"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-help","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting help")]),e._v(" "),o("p",[e._v("After installing the RSE CLI plug-in, you can see all the command options of the plug-in by entering the command "),o("code",[e._v("zowe rse --help")]),e._v(" into the terminal.")]),e._v(" "),o("h2",{attrs:{id:"installing-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Zowe CLI")]),e._v(" "),o("p",[e._v("The prerequisites for installing Zowe CLI are as follows:")]),e._v(" "),o("ul",[o("li",[e._v("Client: Install "),o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v(" version 10, or a later version")]),e._v(" "),o("li",[e._v("Host (select one or both):\n"),o("ul",[o("li",[e._v("Configure z/OSMF if you plan to use Zowe CLI without RSE CLI plug-in")]),e._v(" "),o("li",[e._v("Install and configure "),o("a",{attrs:{href:"#installing-the-requisite-ibm-rse-api-z-os-host-component"}},[e._v("IBM Remote System Explorer API")]),e._v(" if you plan to use Zowe CLI along with RSE CLI plug-in to extend Zowe CLI")])])])]),e._v(" "),o("p",[e._v("For more information about how to get started, see "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-installcli.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing Zowe CLI on Zowe Docs"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",[e._v("IBM recommends installing Secure Credential Store Plug-in for Zowe CLI to encrypt the credentials stored in your Zowe CLI profiles. For more information, see "),o("a",{attrs:{href:"https://www.npmjs.com/package/@zowe/secure-credential-store-for-zowe-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("Instead of downloading Zowe CLI from the "),o("a",{attrs:{href:"https://www.zowe.org/#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe.org"),o("OutboundLink")],1),e._v(" website or the "),o("a",{attrs:{href:"https://www.npmjs.com/package/@zowe/cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("npmjs.org"),o("OutboundLink")],1),e._v(" npm package registry, you can get a certified IBM Zowe distribution from the "),o("a",{attrs:{href:"https://developer.ibm.com/mainframe/products/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Mainframe DEV"),o("OutboundLink")],1),e._v(". You can also purchase technical support for Zowe from IBM for this distribution.")])])}),[],!1,null,null,null);t.default=i.exports}}]);