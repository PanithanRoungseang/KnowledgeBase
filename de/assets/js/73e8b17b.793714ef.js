"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4426],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||n;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),i=(r(7294),r(4137));const n={title:"\u0421ertificate installation issues on devices with Android 11+",sidebar_position:12},o=void 0,l={unversionedId:"adguard-for-android/solving-problems/manual-certificate",id:"adguard-for-android/solving-problems/manual-certificate",title:"\u0421ertificate installation issues on devices with Android 11+",description:"To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to install it manually.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/manual-certificate.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/manual-certificate",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/manual-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/manual-certificate.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\u0421ertificate installation issues on devices with Android 11+",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Manual installation of the security certificate into the Firefox browser",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/firefox-certificates"},next:{title:"Moving CA certificate to System store on rooted devices",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/https-certificate-for-rooted"}},s={},c=[{value:"Certificate installation in a <em>Secure folder</em>",id:"certificate-installation-in-a-secure-folder",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to ",(0,i.kt)("a",{parentName:"p",href:"../../overview"},"install it manually"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/Android/3-5/cert-en.gif",alt:"Certificate *mobile_border"})),(0,i.kt)("p",null,"If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can find possible solutions below."),(0,i.kt)("h2",{id:"certificate-installation-in-a-secure-folder"},"Certificate installation in a ",(0,i.kt)("em",{parentName:"h2"},"Secure folder")),(0,i.kt)("p",null,"If you use ",(0,i.kt)("a",{parentName:"p",href:"https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/"},"the ",(0,i.kt)("em",{parentName:"a"},"Secure folder")," on your Android")," (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is that the ",(0,i.kt)("em",{parentName:"p"},"Secure folder")," has its own storage where the certificates are stored. However, in case you do everything according to the instructions ",(0,i.kt)("a",{parentName:"p",href:"../../overview#https-filtering"},"described here"),", the certificate is installed into the main storage and plays no role for your ad blocker in the ",(0,i.kt)("em",{parentName:"p"},"Secure folder"),". So, in order to resolve this issue and install the certificate for your AdGuard for Android into the ",(0,i.kt)("em",{parentName:"p"},"Secure folder's")," storage, follow this instruction:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After installing the application and connecting to VPN tap ",(0,i.kt)("em",{parentName:"li"},"Turn on")," next to the ",(0,i.kt)("em",{parentName:"li"},"HTTPS filtering is off")," message."),(0,i.kt)("li",{parentName:"ol"},"Tap ",(0,i.kt)("em",{parentName:"li"},"Next")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Next")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Save it now")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Allow"),"."),(0,i.kt)("li",{parentName:"ol"},"Save the certificate (at this stage, you can rename it to make it easier to find)."),(0,i.kt)("li",{parentName:"ol"},"After the ",(0,i.kt)("em",{parentName:"li"},"How to install a certificate?")," screen appears, DO NOT tap ",(0,i.kt)("em",{parentName:"li"},"Open Settings"),"."),(0,i.kt)("li",{parentName:"ol"},"Minimize the application and go to the secure folder."),(0,i.kt)("li",{parentName:"ol"},"Tap the three-dot menu and go to additional security settings."),(0,i.kt)("li",{parentName:"ol"},"Tap ",(0,i.kt)("em",{parentName:"li"},"Install from memory")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"CA certificate")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Install anyway")," \u2192 Enter a graphic key/password/fingerprint \u2192 Find the saved certificate and select it."),(0,i.kt)("li",{parentName:"ol"},'Return to the AdGuard application and close the screen "How to install a certificate?" by tapping the cross button.'),(0,i.kt)("li",{parentName:"ol"},"Done! The certificate has been installed.")))}u.isMDXComponent=!0}}]);