"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5621],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={title:"Problems caused by using a Restricted Mode profile",sidebar_position:10},i=void 0,s={unversionedId:"android/solving-problems/restricted-profile",id:"android/solving-problems/restricted-profile",title:"Problems caused by using a Restricted Mode profile",description:"The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using a profile with Restricted Mode. If you have such a profile, AdGuard, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a local VPN mode. Also, one of the reasons for this situation may be using Dual app/Dual messenger profile on your device. Below are described the recommendations that you can apply when this problem occurs.",source:"@site/docs/android/solving-problems/restricted-profile.md",sourceDirName:"android/solving-problems",slug:"/android/solving-problems/restricted-profile",permalink:"/KnowledgeBase/android/solving-problems/restricted-profile",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/android/solving-problems/restricted-profile.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Problems caused by using a Restricted Mode profile",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"How to protect AdGuard from being disabled by the system",permalink:"/KnowledgeBase/android/solving-problems/background-work"},next:{title:"Manual installation of the security certificate into the Firefox browser",permalink:"/KnowledgeBase/android/solving-problems/firefox-certificates"}},l={},p=[{value:"Solutions",id:"solutions",level:3},{value:"Option 1: Grant permissions to AdGuard using ADB",id:"option-1-grant-permissions-to-adguard-using-adb",level:4},{value:"Option 2: Remove <em>restricted user account</em>",id:"option-2-remove-restricted-user-account",level:4},{value:"Option 3: Use AdGuard in <em>Local HTTP proxy mode</em> (requires root)",id:"option-3-use-adguard-in-local-http-proxy-mode-requires-root",level:4},{value:"LG and Samsung devices",id:"lg-and-samsung-devices",level:3},{value:"Samsung",id:"samsung",level:4},{value:"LG",id:"lg",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using ",(0,a.kt)("strong",{parentName:"p"},"a profile with Restricted Mode"),". If you have such a profile, ",(0,a.kt)("strong",{parentName:"p"},"AdGuard"),", like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a ",(0,a.kt)("strong",{parentName:"p"},"local VPN mode"),". Also, one of the reasons for this situation may be using ",(0,a.kt)("strong",{parentName:"p"},"Dual app/Dual messenger profile")," on your device. Below are described the recommendations that you can apply when this problem occurs."),(0,a.kt)("h3",{id:"solutions"},"Solutions"),(0,a.kt)("p",null,"You have three ways to solve the issue:"),(0,a.kt)("h4",{id:"option-1-grant-permissions-to-adguard-using-adb"},"Option 1: Grant permissions to AdGuard using ADB"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note, that this approach is available starting from ",(0,a.kt)("strong",{parentName:"p"},"AdGuard v3.5 nightly 6"),". If you're using an older version, you can get the nightly version ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/en/beta.html"},"here"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Activate the ",(0,a.kt)("strong",{parentName:"li"},"developer mode")," and enable ",(0,a.kt)("strong",{parentName:"li"},"USB debugging"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("strong",{parentName:"li"},"Settings")," application on your phone;"),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"System")," section (last item in the settings menu). In this section find sub-item ",(0,a.kt)("strong",{parentName:"li"},"About phone"),";"),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Build number")," line 7 times. After that, you will receive a notification that ",(0,a.kt)("strong",{parentName:"li"},"You are now a developer")," (If necessary, enter an unlock code for the device);"),(0,a.kt)("li",{parentName:"ul"},"Open ",(0,a.kt)("strong",{parentName:"li"},"System Settings")," > ",(0,a.kt)("strong",{parentName:"li"},"Developer Options")," > Scroll down and enable ",(0,a.kt)("strong",{parentName:"li"},"USB debugging")," > Confirm debugging is enabled in the window ",(0,a.kt)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," If you have any difficulties or additional questions, full instructions can be found ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"here"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," adb; ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"On the Windows platform, ",(0,a.kt)("strong",{parentName:"p"},"Samsung")," owners may need to install ",(0,a.kt)("a",{parentName:"p",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),"."))),(0,a.kt)("li",{parentName:"ol"},"Connect your device using a ",(0,a.kt)("strong",{parentName:"li"},"USB cable")," to the computer or laptop on which you installed ",(0,a.kt)("strong",{parentName:"li"},"ADB"),";"),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"the command line")," on your PC: ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cmd.exe")," if you are using ",(0,a.kt)("strong",{parentName:"li"},"Windows"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Terminal")," if you are using ",(0,a.kt)("strong",{parentName:"li"},"macOS"),";")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Enter the command ",(0,a.kt)("inlineCode",{parentName:"li"},"adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS")," and press ",(0,a.kt)("strong",{parentName:"li"},"Enter"),".")),(0,a.kt)("h4",{id:"option-2-remove-restricted-user-account"},"Option 2: Remove ",(0,a.kt)("em",{parentName:"h4"},"restricted user account")),(0,a.kt)("p",null,"About how to manage user accounts from an Android device you can ",(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/6223444?hl=en"},"find here"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note, that in some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual messenger or Dual app features on ",(0,a.kt)("strong",{parentName:"p"},"Samsung")," or ",(0,a.kt)("strong",{parentName:"p"},"LG")," devices. You can read below how to fix the issue in these cases.")),(0,a.kt)("h4",{id:"option-3-use-adguard-in-local-http-proxy-mode-requires-root"},"Option 3: Use AdGuard in ",(0,a.kt)("em",{parentName:"h4"},"Local HTTP proxy mode")," (requires root)"),(0,a.kt)("p",null,"To enable this mode open ",(0,a.kt)("strong",{parentName:"p"},"AdGuard Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Network")," > ",(0,a.kt)("strong",{parentName:"p"},"Filtering method")," > ",(0,a.kt)("strong",{parentName:"p"},"Local HTTP proxy")),(0,a.kt)("h3",{id:"lg-and-samsung-devices"},"LG and Samsung devices"),(0,a.kt)("p",null,"Owners of ",(0,a.kt)("strong",{parentName:"p"},"LG")," or ",(0,a.kt)("strong",{parentName:"p"},"Samsung")," phones may also encounter a similar issue. It can be caused by using ",(0,a.kt)("strong",{parentName:"p"},"Dual app/Dual messenger")," function (which automatically creates a restricted profile).\nTo solve this issue, you need to disable this feature."),(0,a.kt)("h4",{id:"samsung"},"Samsung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Settings"),";"),(0,a.kt)("li",{parentName:"ul"},"Press ",(0,a.kt)("strong",{parentName:"li"},"Advanced"),";"),(0,a.kt)("li",{parentName:"ul"},"Scroll down, and then press ",(0,a.kt)("strong",{parentName:"li"},"Dual messenger"),";"),(0,a.kt)("li",{parentName:"ul"},"Disable the ",(0,a.kt)("strong",{parentName:"li"},"Dual messenger")," for all applications;"),(0,a.kt)("li",{parentName:"ul"},"Lock the device for 5 minutes;"),(0,a.kt)("li",{parentName:"ul"},"Unlock the screen and try again to create the VPN profile.")),(0,a.kt)("h4",{id:"lg"},"LG"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Settings"),";"),(0,a.kt)("li",{parentName:"ul"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"General")," tab;"),(0,a.kt)("li",{parentName:"ul"},"Scroll down, and then press ",(0,a.kt)("strong",{parentName:"li"},"Dual app"),";"),(0,a.kt)("li",{parentName:"ul"},"Remove all applications from the list;"),(0,a.kt)("li",{parentName:"ul"},"Reboot your device.")))}d.isMDXComponent=!0}}]);