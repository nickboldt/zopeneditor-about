(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{248:function(e,t,o){"use strict";o.r(t);var i=o(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting-known-issues-and-limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-known-issues-and-limitations","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting, known issues and limitations")]),e._v(" "),o("p",[e._v("The IBM Z® Open Editor extension has some known issues and limitations. This page provides the status of the current release. Also review the list of open issues and enhancement requests in our "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github repository"),o("OutboundLink")],1),e._v(". It might list issues that are not yet documented here.")]),e._v(" "),o("h2",{attrs:{id:"java™-sdk-required"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java™-sdk-required","aria-hidden":"true"}},[e._v("#")]),e._v(" Java™ SDK required")]),e._v(" "),o("p",[e._v("The language servers provided with this extension require a valid Java SDK to start correctly. Currently, they will not work with a Java Client Runtime Environment. They require either a Server Runtime Environment or better a full SDK to function correctly.")]),e._v(" "),o("p",[e._v("If the right version of Java cannot be found in the current user's path or if no "),o("code",[e._v("JAVA_HOME")]),e._v(" environment variable was defined, you might see error messages in the Output view of VS Code. Such errors could also be caused by other reasons such as not enough free memory for Java on your system.")]),e._v(" "),o("p",[e._v("Go through all the steps described in the "),o("a",{attrs:{href:"./getting_started"}},[e._v("Getting Started")]),e._v(" page for configuring Java to try out different options.")]),e._v(" "),o("h2",{attrs:{id:"troubleshooting-using-log-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-using-log-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting using log files")]),e._v(" "),o("p",[e._v("You can enable logging for IBM Z Open Editor to produce detailed logs that can be used to troubleshoot problems. Logs can be valuable inputs when you file defects or contact the technical support (if you are entitled to). You can enable logging via a "),o("router-link",{attrs:{to:"/Docs/setting_preferences.html#user-preferences"}},[e._v("user preference setting")]),e._v(" called "),o("code",[e._v("zopeneditor.logger")]),e._v(". In the VS Code Preferences editor, select from the allowed values: "),o("code",[e._v("DEBUG")]),e._v(", "),o("code",[e._v("INFO")]),e._v(", "),o("code",[e._v("WARNING")]),e._v(", "),o("code",[e._v("ERROR")]),e._v(" and "),o("code",[e._v("OFF")]),e._v(" (default). Once it is enabled, you can find the logging output in two places:")],1),e._v(" "),o("ul",[o("li",[e._v("In the VS Code Output panel, where a drop-down tab called "),o("code",[e._v("IBM Z Open Editor")]),e._v(" is created; and")]),e._v(" "),o("li",[e._v("A log file written to your disk. The Output panel tells you at the top when it is activated for the first time the exact path location of the log file, which is platform dependent, .")])]),e._v(" "),o("p",[e._v("If you use IBM Z Open Editor with Eclipse Che or Red Hat CodeReady Workspaces, you can also enable logging by specifying the same user preference setting, "),o("code",[e._v("zopeneditor.logger")]),e._v(". To find the generated log file, open a Terminal window in the container called "),o("strong",[e._v("ibm-wazi???")]),e._v(", with the question marks being replaced by randomly generated characters. Do not mistake that with the default user content container called "),o("strong",[e._v("wazi")]),e._v(", which you use for coding.")]),e._v(" "),o("h2",{attrs:{id:"resetting-language-servers-or-vs-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resetting-language-servers-or-vs-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Resetting Language Servers or VS Code")]),e._v(" "),o("p",[e._v("It might happen that the language servers provided by IBM Z Open Editor become inconsistent and do not behave as expected. For example, one language server might stop reporting syntax errors, or it cannot resolve copybooks anymore. Instead of quitting and restarting VS Code completely, you can try pressing the F1 key and type the following commands to reset one or more language servers.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("IBM Z Open Editor: Pause the COBOL Language Server")]),e._v(": Stops the COBOL language server and restarts it when you open a COBOL file again.")]),e._v(" "),o("li",[o("code",[e._v("IBM Z Open Editor: Pause the PL/I Language Server")]),e._v(": Stops the PL/I language server and restarts it when you open a PL/I file again.")]),e._v(" "),o("li",[o("code",[e._v("IBM Z Open Editor: Pause the Assembler Language Server")]),e._v(": Stops the HLASM language server and restarts it when you open an HLASM file again.")]),e._v(" "),o("li",[o("code",[e._v("IBM Z Open Editor: Reload Zowe Profiles")]),e._v(": If you have changed the password of your Zowe CLI profile that is used to load your remote include files such as copybooks, you need to run this command to refresh the Zowe profile.")]),e._v(" "),o("li",[o("code",[e._v("Developer: Reload Window")]),e._v(": Restarts the current VS Code window and all of its extensions. If you have many editor windows open at the same time, you can use this command to reset just the current window in which you run the command.")])]),e._v(" "),o("h2",{attrs:{id:"no-conversions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-conversions","aria-hidden":"true"}},[e._v("#")]),e._v(" No Conversions")]),e._v(" "),o("p",[e._v("Currently the editor relies on third party tools such as Zowe CLI for conversions of program files encoded in EBCDIC on z/OS to the format for editing. Only Codepages supported by VS Code natively can be used. The recommended format for all local files is "),o("code",[e._v("UTF-8")]),e._v(".")]),e._v(" "),o("p",[e._v("If you are using Git to manage your sources on your local client as well as z/OS USS, we recommend managing a "),o("a",{attrs:{href:"https://git-scm.com/docs/gitattributes",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v(".gitattributes")]),e._v(" file"),o("OutboundLink")],1),e._v(" that will drive the conversion through Git. See "),o("a",{attrs:{href:"https://forum.rocketsoftware.com/t/important-notice-for-users-of-the-rocket-port-of-git-for-z-os/1102",target:"_blank",rel:"noopener noreferrer"}},[e._v("this post"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://aws1.discourse-cdn.com/standard17/uploads/rocketsoftware/original/1X/5e3e4f18f9cbaa3a13d9cdcafdcdc9b276900d1f.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("this document"),o("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),o("h2",{attrs:{id:"limitations-for-visual-studio-code-multi-root-workspaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-for-visual-studio-code-multi-root-workspaces","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations for Visual Studio Code Multi-Root Workspaces")]),e._v(" "),o("p",[e._v("IBM Z® Open Editor supports "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code multi-root workspaces"),o("OutboundLink")],1),e._v("; however, be aware that property groups defining path names for COBOL, PL/I, and HLASM resource dependencies are managed as so-called Window-level VS Code settings. This means that these property groups need to be defined for multi-root workspaces for the entire workspace. Project-level settings will be ignored. If you intent to use a project as part of a workspace as well as independent of the workspace, then you need to have two copies of your property groups in each location. When you work in the workspace, the editor will look for property groups in the "),o("code",[e._v(".code-workspace")]),e._v(" file. When you work just in a project directory outside of a workspace, it will look for property groups in the workspace "),o("code",[e._v(".vscode/settings.json")]),e._v(" file.")]),e._v(" "),o("p",[e._v("See more details about this limitation in "),o("router-link",{attrs:{to:"/Docs/setting_propertygroup.html#quick-tips-for-setting-ibm-z-open-editor-property-groups-local-files-only"}},[e._v("this section")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"limitations-of-using-z-open-editor-with-eclipse-che-and-red-hat-codeready-workspaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-using-z-open-editor-with-eclipse-che-and-red-hat-codeready-workspaces","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations of using Z Open Editor with Eclipse Che and Red Hat CodeReady Workspaces")]),e._v(" "),o("p",[e._v("Almost all capabilities described in this documentation are available when you use IBM Z Open Editor with Eclipse Che or Red Hat CodeReady Workspaces. However, be noted about the following limitation.")]),e._v(" "),o("ul",[o("li",[o("p",[o("router-link",{attrs:{to:"/Docs/snippets.html"}},[e._v("Code snippets")]),e._v(": The extensive IBM Z Open Editor code snippet library is not supported if you use IBM Z Open Editor with Eclipse Che or Red Hat CodeReady Workspaces. It is available only in VS Code at the moment.")],1),e._v(" "),o("p",[e._v("The Theia editor utilized in Eclipse Che and CodeReady Workspaces does not provide a snippet gallery as VS Code does. Therefore, you cannot define your own custom code snippets with the Theida editor. In VS Code, code snippets provided by VS Code extensions, such as the IBM Z Open Editor, can normally be inserted via the code completion features using the Ctrl+Space shortcut. However, that capability currently has a "),o("a",{attrs:{href:"https://github.com/eclipse/che/issues/16502",target:"_blank",rel:"noopener noreferrer"}},[e._v("known defect in Eclipse Che"),o("OutboundLink")],1),e._v(" and therefore is not supported in CodeReady Workspaces neither. This defect prevents the code snippets from appearing at all.")])])]),e._v(" "),o("h2",{attrs:{id:"language-specific-features-and-limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#language-specific-features-and-limitations","aria-hidden":"true"}},[e._v("#")]),e._v(" Language-specific features and limitations")]),e._v(" "),o("h3",{attrs:{id:"jcl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jcl","aria-hidden":"true"}},[e._v("#")]),e._v(" JCL")]),e._v(" "),o("p",[e._v("There is currently no language server for JCL. When you open JCL files, syntax highlighting is enabled, but no additional language server capabilities are available for these files. The observable limitations include:")]),e._v(" "),o("ul",[o("li",[e._v("No contents are shown in the Outline view.")]),e._v(" "),o("li",[e._v("Ctrl+Space shows code templates, but no syntactical completions.")]),e._v(" "),o("li",[e._v("Many menu options are unavailable.")])]),e._v(" "),o("h3",{attrs:{id:"cobol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cobol","aria-hidden":"true"}},[e._v("#")]),e._v(" COBOL")]),e._v(" "),o("p",[e._v("The following lists show the implementation status of the COBOL language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-cobol-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-cobol-program-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabled features of COBOL program files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Syntax errors")]),e._v(" "),o("li",[e._v("Document highlighting")]),e._v(" "),o("li",[e._v("Hover")]),e._v(" "),o("li",[e._v("Go to declaration")]),e._v(" "),o("li",[e._v("Find all references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Peek references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Rename symbol in file and across the multiple files")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Snippets")]),e._v(" "),o("li",[e._v("Copybook resolving and copybook hover support")]),e._v(" "),o("li",[e._v("Document link support to open copybook by using Ctrl+Click (Windows) or Cmd+Click (Mac)")]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS®, and DLI")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-cobol-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-cobol-program-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations of COBOL program files")]),e._v(" "),o("p",[e._v("False unreachable code warnings: In some cases, the editor incorrectly reports that code is unreachable in embedded CICS statements such as "),o("code",[e._v("EXEC CICS HANDLE")]),e._v(". One such case is reported in "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/52",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(". You can use a user setting to disable warnings for unreachable code completely as described in "),o("router-link",{attrs:{to:"/Docs/setting_unreachablecodewarnings.html"}},[e._v("Enabling and disabling unreachable COBOL code warnings")]),e._v(".")],1),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-cobol-copybook-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-cobol-copybook-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabled features of COBOL copybook files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax errors")]),e._v(" "),o("li",[e._v("Find all references in file")]),e._v(" "),o("li",[e._v("Peek references in file")]),e._v(" "),o("li",[e._v("Rename symbol in file")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Snippets")]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-cobol-copybook-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-cobol-copybook-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations of COBOL copybook files")]),e._v(" "),o("ul",[o("li",[e._v("No support for Hover")]),e._v(" "),o("li",[e._v("No support for Go to declaration")]),e._v(" "),o("li",[e._v("No support for Find all references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Peek references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Rename symbol across the multiple files")])]),e._v(" "),o("h3",{attrs:{id:"pl-i"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pl-i","aria-hidden":"true"}},[e._v("#")]),e._v(" PL/I")]),e._v(" "),o("p",[e._v("The following lists show the implementation status of the PL/I language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-pl-i-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-pl-i-program-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabled features of PL/I program files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Syntax errors")]),e._v(" "),o("li",[e._v("Document highlighting")]),e._v(" "),o("li",[e._v("Hover")]),e._v(" "),o("li",[e._v("Go to declaration")]),e._v(" "),o("li",[e._v("Find all references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Peek references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Rename symbol in file and across the multiple files")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Include file resolving and include file hover support")]),e._v(" "),o("li",[e._v("Document link support to open include file by using Ctrl+Click (Windows) or Cmd+Click (Mac)")]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")]),e._v(" "),o("li",[o("code",[e._v("*process")]),e._v(" (or "),o("code",[e._v("%process")]),e._v(") compile options statements, such as:\n"),o("ul",[o("li",[o("code",[e._v("*process source MARGINS(2,120);")])]),e._v(" "),o("li",[o("code",[e._v("*process SYSTEM(CIS, DB2);")])]),e._v(" "),o("li",[o("code",[e._v("*process LIST TEST;")])]),e._v(" "),o("li",[e._v("Syntax and other supported compiler options can be found in:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSY2V3_5.3.0/com.ibm.ent.pl1.zos.doc/lr/ctlproc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("%PROCESS directive"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSY2V3_5.3.0/com.ibm.ent.pl1.zos.doc/pg/optns.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compile-time option descriptions"),o("OutboundLink")],1)])])])])])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-pl-i-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-pl-i-program-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations of PL/I program files")]),e._v(" "),o("ul",[o("li",[e._v("No support for macros")])]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-pl-i-include-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-pl-i-include-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabled features of PL/I include files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax errors (lexing and parsing)")]),e._v(" "),o("li",[e._v("Find all references in file")]),e._v(" "),o("li",[e._v("Peek references in file")]),e._v(" "),o("li",[e._v("Rename symbol in file")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-pl-i-include-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-pl-i-include-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations of PL/I include files")]),e._v(" "),o("ul",[o("li",[e._v("No support for showing syntax errors for resolving variables")]),e._v(" "),o("li",[e._v("No support for Hover")]),e._v(" "),o("li",[e._v("No support for Go to declaration")]),e._v(" "),o("li",[e._v("No support for Find all references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Peek references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Rename symbol across the multiple files")])]),e._v(" "),o("h3",{attrs:{id:"hlasm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hlasm","aria-hidden":"true"}},[e._v("#")]),e._v(" HLASM")]),e._v(" "),o("p",[e._v("The following lists show the implementation status of the HLASM language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-hlasm-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-hlasm-program-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabled features of HLASM program files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Syntax errors which also include the following:\n"),o("ul",[o("li",[e._v("Copy statements not resolved")]),e._v(" "),o("li",[e._v("Spaces in continuation line")])])]),e._v(" "),o("li",[e._v("Document highlighting")]),e._v(" "),o("li",[e._v("Hover on operations and operands")]),e._v(" "),o("li",[e._v("Go to declaration")]),e._v(" "),o("li",[e._v("Find all references in file")]),e._v(" "),o("li",[e._v("Peek references in file")]),e._v(" "),o("li",[e._v("Outline view for macros, CSECTs, and DSECTs")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Copybook file resolving and copybook file hover support")]),e._v(" "),o("li",[e._v("Document link support to open copybook file by using Ctrl+Click (Windows) or Cmd+Click (Mac)")]),e._v(" "),o("li",[e._v("Quick fix hints for lines that are too long and spaces in the continuation line")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-hlasm-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-hlasm-program-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations of HLASM program files")]),e._v(" "),o("ul",[o("li",[e._v("No support for symbols defined in different files")]),e._v(" "),o("li",[e._v("Syntax highlighting limitations for continuation lines")])]),e._v(" "),o("h2",{attrs:{id:"ibm-rse-api-plug-in-for-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibm-rse-api-plug-in-for-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" IBM RSE API Plug-in for Zowe CLI")]),e._v(" "),o("h3",{attrs:{id:"rse-api-support-in-the-zowe-explorer-vs-code-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rse-api-support-in-the-zowe-explorer-vs-code-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" RSE API support in the Zowe Explorer VS Code extension")]),e._v(" "),o("h4",{attrs:{id:"mvs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mvs","aria-hidden":"true"}},[e._v("#")]),e._v(" MVS")]),e._v(" "),o("p",[e._v("The following features are not implemented yet:")]),e._v(" "),o("ul",[o("li",[e._v("Copy and paste a data set member")]),e._v(" "),o("li",[e._v("Create a Binary Data Set type")])]),e._v(" "),o("h4",{attrs:{id:"jes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jes","aria-hidden":"true"}},[e._v("#")]),e._v(" JES")]),e._v(" "),o("p",[e._v("The following features are not implemented yet:")]),e._v(" "),o("ul",[o("li",[e._v("Issue a Modify command")]),e._v(" "),o("li",[e._v("Issue a Stop command")])]),e._v(" "),o("h4",{attrs:{id:"known-issues-with-uss"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#known-issues-with-uss","aria-hidden":"true"}},[e._v("#")]),e._v(" Known issues with USS")]),e._v(" "),o("ul",[o("li",[e._v('An error occurs when you specify uss path "/u/userid" in the Windows Git Bash terminal due to a known issue with '),o("a",{attrs:{href:"https://github.com/git-for-windows/msys2-runtime/pull/11",target:"_blank",rel:"noopener noreferrer"}},[e._v("git-for-windows"),o("OutboundLink")],1),e._v(". To solve the issue, add a variable "),o("code",[e._v("MSYS_NO_PATHCONV")]),e._v(" with a value of "),o("code",[e._v("1")]),e._v(" to User Variables in Environment Variables and restart terminal.")])]),e._v(" "),o("h2",{attrs:{id:"reporting-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reporting-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Reporting issues")]),e._v(" "),o("p",[e._v("If you want to provide feedback or report an issue, open an issue in the "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repository"),o("OutboundLink")],1),e._v(". Any report and feedback is appreciated.")])])}),[],!1,null,null,null);t.default=r.exports}}]);