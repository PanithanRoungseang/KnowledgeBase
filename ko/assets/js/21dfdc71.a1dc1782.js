"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6683],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(r),c=n,g=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"How to get Logcat log",sidebar_position:4},l=void 0,p={unversionedId:"adguard-for-android/solving-problems/logcat",id:"adguard-for-android/solving-problems/logcat",title:"How to get Logcat log",description:"\uc77c\ubc18 \uc9c0\uce68",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/logcat.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/logcat",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/logcat",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/logcat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to get Logcat log",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/tasker"},next:{title:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/har"}},i={},d=[{value:"\uc77c\ubc18 \uc9c0\uce68",id:"\uc77c\ubc18-\uc9c0\uce68",level:2},{value:"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30",id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30",level:2},{value:"\ucd94\uac00 \uc9c0\uce68(Android \uad6c \ubc84\uc804\uc6a9)",id:"\ucd94\uac00-\uc9c0\uce68android-\uad6c-\ubc84\uc804\uc6a9",level:2}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\uc77c\ubc18-\uc9c0\uce68"},"\uc77c\ubc18 \uc9c0\uce68"),(0,n.kt)("p",null,"\ucda9\ub3cc \ubb38\uc81c \ud574\uacb0 \uc2dc \uc77c\ubc18 \ub85c\uadf8 \uc218\uc9d1\uc73c\ub85c\ub294 \ucda9\ubd84\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uc2a4\ud15c \ub85c\uadf8 \uc218\uc9d1\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ub85c\uadf8 \uc218\uc9d1 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30"},"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30"),(0,n.kt)("p",null,"\uae30\uae30\uc5d0\uc11c \uc9c1\uc811 \ubc84\uadf8 \ubcf4\uace0\uc11c\ub97c \ubc1b\uc73c\ub824\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device.html#developer-device-options"},"\uac1c\ubc1c\uc790 \uc635\uc158"),"\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uac1c\ubc1c\uc790 \uc635\uc158"),"\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\ubc84\uadf8 \uc2e0\uace0"),"\ub97c \ud0ed\ud569\ub2c8\ub2e4."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png",alt:"\ubc84\uadf8 \uc2e0\uace0"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\ubc84\uadf8 \ubcf4\uace0\uc11c\uc758 \uc720\ud615\uc744 \uc120\ud0dd\ud558\uace0 ",(0,n.kt)("strong",{parentName:"li"},"\uc2e0\uace0"),"\ub97c \ub204\ub985\ub2c8\ub2e4. >\uc7a0\uc2dc \ud6c4 \ubc84\uadf8 \ubcf4\uace0\uc11c\uac00 \uc900\ube44\ub418\uc5c8\ub2e4\ub294 \uc54c\ub9bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png",alt:"\ubc84\uadf8 \uc2e0\uace0"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\uc54c\ub9bc\uc744 \ub204\ub985\ub2c8\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png",alt:"\ubc84\uadf8 \uc2e0\uace0"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Send this log to our support team.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\ucc38\uace0: \uba54\uc2dc\uc9c0\uc5d0 \ud5ec\ud504 \ub370\uc2a4\ud06c \ud2f0\ucf13 \ubc88\ud638 \ub610\ub294 GitHub \ubb38\uc81c \ubc88\ud638\ub97c \ucca8\ubd80\ud558\uba74 \uc9c0\uc6d0\ud300\uc774 \ud2f0\ucf13\uc744 \ub354 \ube60\ub974\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,n.kt)("h2",{id:"\ucd94\uac00-\uc9c0\uce68android-\uad6c-\ubc84\uc804\uc6a9"},"\ucd94\uac00 \uc9c0\uce68(Android \uad6c \ubc84\uc804\uc6a9)"),(0,n.kt)("p",null,"\uad6c\ud615 Android \uae30\uae30\uc5d0\uc11c\ub294 \ubc84\uadf8\ub97c \uc790\ub3d9\uc73c\ub85c \uc81c\ubcf4\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc218\ub3d9\uc73c\ub85c \uc218\ud589\ud574 \uc8fc\uc138\uc694."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1\ub2e8\uacc4: \uae30\uae30 \uc900\ube44")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch device to the developer mode. ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815"),">",(0,n.kt)("strong",{parentName:"p"}," \uc815\ubcf4"),"\ub85c \uc774\ub3d9\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\ube4c\ub4dc \ubc88\ud638")," \uc904\uc744 7\ubc88 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uac1c\ubc1c\uc790 \uc635\uc158"),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"USB \ub514\ubc84\uae45"),"\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Increase ",(0,n.kt)("strong",{parentName:"p"},"Logger buffer")," sizes to 4MB per log buffer."))),(0,n.kt)("p",null,"4MB should be enough for storing the logs we need until you're able to do the second part (getting log from the device);"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\uc911\uc694"),": \ubc18\ub4dc\uc2dc \uccab \ubc88\uc9f8 \ub2e8\uacc4\ub97c \uc644\ub8cc\ud55c \ud6c4 \ubb38\uc81c\ub97c \uc7ac\ud604\ud574 \uc8fc\uc2ed\uc2dc\uc624!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2\ub2e8\uacc4: \ub85c\uadf8 \uac00\uc838 \uc624\uae30")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"USB \ucf00\uc774\ube14\ub85c \uae30\uae30\ub97c PC\uc5d0 \uc5f0\uacb0\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ucd5c\uc18c ADB\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc124\uce58\ud569\ub2c8\ub2e4."))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://forum.xda-developers.com/showthread.php?t=2317790"},"http://forum.xda-developers.com/showthread.php?t=2317790")),(0,n.kt)("p",null,"\uc9c1\uc811 \ub2e4\uc6b4\ub85c\ub4dc \ub9c1\ud06c:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.androidfilehost.com/?fid=24052804347803384"},"https://www.androidfilehost.com/?fid=24052804347803384")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\ucf58\uc194\uc5d0\uc11c \uc774 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4(\uc124\uce58 \ud6c4 \uc5f4\ub9bc):",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"adb logcat -v threadtime -d> C:\\logcat.txt")))),(0,n.kt)("p",null,"\uc9c0\uc6d0 \ud300\uc5d0 \ubb38\uc758\ud558\uac70\ub098 \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \uc774 \ub85c\uadf8\ub97c \ubcf4\ub0b4 \uc8fc\uc138\uc694."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ROOT \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \ub300\uccb4 \ubc29\ubc95")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and run ",(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.nolanlawson.logcat&noprocess"},"Logcat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uba54\ub274\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\ub179\uc74c"),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. \ub85c\uadf8 \ud30c\uc77c\uc758 \uc774\ub984\uc744 \uc785\ub825\ud558\uac70\ub098 ",(0,n.kt)("strong",{parentName:"p"},"\ud655\uc778"),"\uc744 \ub204\ub985\ub2c8\ub2e4. \uc774\uc81c ",(0,n.kt)("strong",{parentName:"p"},"\ud648")," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 CatLog\uac00 \ub85c\uadf8\uc778 \ubc30\uacbd\uc744 \uacc4\uc18d \uae30\ub85d\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ubb38\uc81c\ub97c \uc7ac\ud604\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CatLog\ub97c \uc5f4\uace0 \uba54\ub274\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\uae30\ub85d \uc911\uc9c0"),"\ub97c \ub204\ub985\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Send this log to our support team."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\ucc38\uace0: \uba54\uc2dc\uc9c0\uc5d0 \ud5ec\ud504 \ub370\uc2a4\ud06c \ud2f0\ucf13 \ubc88\ud638 \ub610\ub294 GitHub \ubb38\uc81c \ubc88\ud638\ub97c \ucca8\ubd80\ud558\uba74 \uc9c0\uc6d0\ud300\uc774 \ud2f0\ucf13\uc744 \ub354 \ube60\ub974\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))))}u.isMDXComponent=!0}}]);