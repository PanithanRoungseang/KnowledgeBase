"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4163],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(4137));const i={title:"L\xf6sung von Installationsproblemen",sidebar_position:5},l=void 0,o={unversionedId:"adguard-for-mac/solving-problems/installation-issues",id:"adguard-for-mac/solving-problems/installation-issues",title:"L\xf6sung von Installationsproblemen",description:"Fehler \u201eInstallation fehlgeschlagen\u201c in macOS Catalina",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/installation-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/installation-issues",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/installation-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/installation-issues.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"L\xf6sung von Installationsproblemen",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kompatibilit\xe4tsprobleme mit verschiedenen macOS-Versionen",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/big-sur-issues"},next:{title:"Startprobleme unter macOS",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/launch-issues"}},s={},d=[{value:"Fehler \u201eInstallation fehlgeschlagen\u201c in macOS Catalina",id:"fehler-installation-fehlgeschlagen-in-macos-catalina",level:2}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fehler-installation-fehlgeschlagen-in-macos-catalina"},"Fehler \u201eInstallation fehlgeschlagen\u201c in macOS Catalina"),(0,a.kt)("p",null,"W\xe4hrend der Installation kann ein Fehler wie dieser auftreten:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg",alt:"Installationsfehlerbildschirm"})),(0,a.kt)("p",null,"Folgen Sie dieser Anleitung, um das Problem zu l\xf6sen:"),(0,a.kt)("p",null,"1) Starten Sie Ihren Mac neu; 2) Halten Sie beim Neustart Ihres Mac die Tasten ",(0,a.kt)("em",{parentName:"p"},"Command(\u2318) + R")," sofort, wenn Sie den Startton h\xf6ren. Halten Sie die Tasten gedr\xfcckt, bis das Apple-Logo erscheint, um den Computer in den Wiederherstellungsmodus zu versetzen. 3) W\xe4hlen Sie in der oberen Leiste ",(0,a.kt)("em",{parentName:"p"},"Utilities")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"Terminal")," und f\xfchren Sie diesen Befehl aus: ",(0,a.kt)("inlineCode",{parentName:"p"},"csrutil disable"),"; 4) Starten Sie den Mac neu und melden Sie sich beim Administratorprofil an; 5) \xd6ffnen Sie das Finder-Fenster und w\xe4hlen Sie in der oberen Leiste ",(0,a.kt)("em",{parentName:"p"},"Go"),"  \u2192 ",(0,a.kt)("em",{parentName:"p"},"Go to Folder")," und geben Sie ",(0,a.kt)("inlineCode",{parentName:"p"},"~/private/")," ein; 6) Erstellen Sie einen Ordner namens ",(0,a.kt)("em",{parentName:"p"},"tmp")," und geben Sie Ihr Passwort ein. 7) Starten Sie die AdGuard-Installation"),(0,a.kt)("p",null,"Wenn die Installation abgeschlossen ist, starten Sie Ihren Mac im Wiederherstellungsmodus mithilfe der obigen Anweisungen neu und f\xfchren Sie den Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"csrutil enable")," im Terminal aus, um den Systemschutz zu aktivieren."))}c.isMDXComponent=!0}}]);