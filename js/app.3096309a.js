(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],c=0,m=[];c<s.length;c++)i=s[c],r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function s(e){return l.p+"js/"+({about:"about",commands:"commands"}[e]||e)+"."+{about:"326900a4",commands:"2af66819"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1,commands:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({about:"about",commands:"commands"}[e]||e)+"."+{about:"675d5aa2",commands:"d557d1b0"}[e]+".css",r=l.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===r))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],c=u.getAttribute("data-href");if(c===a||c===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete i[e],d.parentNode.removeChild(d),n(o)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){i[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e),u=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[e]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/wiki/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("1356"),i=n.n(a);i.a},1356:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=n("bb71");n("da64");a["a"].use(i["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-toolbar",{attrs:{dark:"",color:"purple",app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("Hammann Line Bot")]),a("span",{staticClass:"font-weight-light"}),a("v-btn",{attrs:{color:"black",dark:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("\n        Menu\n      ")])],1),a("v-spacer"),a("v-btn",{attrs:{flat:"",href:"https://www.patreon.com/hammann",target:"_blank"}},[a("span",{staticClass:"mr-2"},[e._v("Patreon")]),a("v-icon",[e._v("open_in_new")])],1)],1),a("v-content",[a("v-navigation-drawer",{attrs:{"mini-variant":e.mini,absolute:"",dark:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{staticClass:"pa-1"},[e.mini?a("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[a("v-list-tile-action",[a("v-icon",[e._v("chevron_right")])],1)],1):e._e(),a("v-list-tile",{attrs:{avatar:"",tag:"div"}},[a("v-list-tile-avatar",[a("img",{attrs:{src:n("8d19")}})]),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Hammann rank: 225")])],1),a("v-list-tile-action",[a("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[a("v-icon",[e._v("chevron_left")])],1)],1)],1)],1),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider",{attrs:{light:""}}),e._l(e.groups,function(t){return a("v-list-group",{key:t.title,attrs:{"prepend-icon":t.icon,value:!1},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-tile",[t.route?a("router-link",{attrs:{to:t.route}},[a("v-list-tile-title",[e._v(e._s(t.title))])],1):a("v-list-tile-title",[e._v(e._s(t.title))])],1)]},proxy:!0}],null,!0)},e._l(t.commands,function(t){return a("v-list-group",{key:t.title,attrs:{"sub-group":"","no-action":"",value:!1},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-title",[e._v(e._s(t.title))])],1)]},proxy:!0}],null,!0)},e._l(t.commands,function(t){return a("v-list-group",{key:t.title,attrs:{"no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-title",[e._v(e._s(t.title))])],1)]},proxy:!0}],null,!0)})}),1)}),1)})],2)],1),a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},o=[],s=n("d297"),l={name:"App",data:function(){return{drawer:!1,mini:!1,groups:s["a"]}}},u=l,c=(n("034f"),n("2877")),m=n("6544"),d=n.n(m),p=n("7496"),f=n("8336"),g=n("a523"),v=n("549c"),h=n("ce7e"),b=n("132d"),x=n("8860"),y=n("56b0"),w=n("ba95"),k=n("40fe"),_=n("c954"),C=n("5d23"),j=n("f774"),V=n("9910"),S=n("71d9"),L=n("2a7f"),T=Object(c["a"])(u,r,o,!1,null,null,null),H=T.exports;d()(T,{VApp:p["a"],VBtn:f["a"],VContainer:g["a"],VContent:v["a"],VDivider:h["a"],VIcon:b["a"],VList:x["a"],VListGroup:y["a"],VListTile:w["a"],VListTileAction:k["a"],VListTileAvatar:_["a"],VListTileContent:C["a"],VListTileTitle:C["b"],VNavigationDrawer:j["a"],VSpacer:V["a"],VToolbar:S["a"],VToolbarTitle:L["a"]});var P=n("8c4f"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("home")},E=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("a9d0"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to Hammann Line Bot\n      ")]),a("div",{staticClass:"subheading font-weight-regular"},[a("br"),e._v("For help and collaboration with Hammann developers,\n        "),a("br"),e._v("please join our groups\n        "),a("br"),e._v("Azur Lane: "),a("a",{staticClass:"headline font-weight-bold mb-1",attrs:{href:"http://line.me/R/ti/g/6rVq5K3Fi6",target:"_blank"}},[e._v("Here.")]),a("br"),e._v("Granblue Fantasy: "),a("a",{staticClass:"headline font-weight-bold mb-1",attrs:{href:"http://line.me/R/ti/g/DuCC",target:"_blank"}},[e._v("Here.")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Hamamans!!~~ henn~tai!!~~")])]),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("v-layout",{attrs:{"justify-center":""}},[a("router-link",{staticClass:"subheading mx-3",attrs:{to:"about"}},[e._v("About")]),a("router-link",{staticClass:"subheading mx-3",attrs:{to:"commands"}},[e._v("Commands")])],1)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Developer Links")]),a("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1)],1)],1)},M=[],z={data:function(){return{ecosystem:[{text:"BlackMix",href:"https://github.com/BlackMix"},{text:"vue-genesis-forms",href:"https://github.com/BlackMix/vue-genesis-forms"},{text:"kawaii-jwt",href:"https://github.com/KawaiiWaifus/kawaii-jwt"}]}}},B=z,Y=n("0e8f"),F=n("adda"),D=n("a722"),N=Object(c["a"])(B,O,M,!1,null,null,null),q=N.exports;d()(N,{VContainer:g["a"],VFlex:Y["a"],VImg:F["a"],VLayout:D["a"]});var R={components:{Home:q}},$=R,I=Object(c["a"])($,A,E,!1,null,null,null),J=I.exports;a["a"].use(P["a"]);var W=new P["a"]({routes:[{path:"*",redirect:"home"},{path:"/home",name:"home",component:J},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/commands",name:"commands",component:function(){return n.e("commands").then(n.bind(null,"af8b"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:W,render:function(e){return e(H)}}).$mount("#app")},"8d19":function(e,t,n){e.exports=n.p+"img/hammann-sleep.1a0ee0f7.png"},a9d0:function(e,t,n){e.exports=n.p+"img/hammann.f6d76a9a.jpg"},d297:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=[{title:"Home",icon:"dashboard",route:"home"},{title:"About",icon:"question_answer",route:"about"},{title:"Commands",icon:"subject",route:"commands",commands:[{title:"animes",commands:[{title:"anime",info:"Search animes/mangas by titles.",usage:"<prefix>a [anime or manga] [title]",description:"You can <prefix>anime guilty crown"}]},{title:"azurlane",commands:[{title:"azur",info:"Find botes.",usage:"<prefix>azurlane name",description:"You can use <prefix>azur hammann and u get best bote ~~hen~tai!!"}]},{title:"games",commands:[{title:"slots",info:"Play game slot",usage:"<prefix>slot",description:""}]},{title:"info",commands:[{title:"commands",info:"Commands List",usage:"<prefix>commands",description:"Lista all commands or by group using: <prefix>commands gbf or azurlane"},{title:"help",info:"Help Command",usage:"<prefix>help command_name",description:"You get all infos about command."}]},{title:"others",commands:[{title:"choose",info:"Makes a choice for you. max 5",usage:"<prefix>choose option1, option2",description:"You want roll or dont roll? <prefix>choose roll, dont roll"},{title:"gender",info:"Determines the gender of a name.",usage:"<prefix>gender [name]",description:"Some times u need know if Yuel is Male or Female name lol"},{title:"say",info:"Say something..",usage:"<prefix>say something",description:""}]},{title:"patreon",commands:[{title:"patreon",info:"Help to pay server XD",usage:"<prefix>patreon",description:"Shoe link patreon"}]},{title:"reminders",commands:[{title:"addreminder",info:"Adds a reminder that triggers at the given time and tells you.",usage:"<prefix>addreminder [1day or 16hours] [group or pm] [command or message] [command [options] or message]",description:"example: <prefix>addre 10h group message today was in one event of botes lewd. or <prefix>addre 5h group command azurlane hammann You can add last argument --every to repeat every day same time. Minimum time is 5m"},{title:"reminders",info:"List all your reminders.",usage:"<prefix>relist",description:"List all your reminders and show infos about."},{title:"deletereminder",info:"Delete your reminder.",usage:"<prefix>redel [number]",description:"When you list your reminder give number by id, just use thats id to delete"}]},{title:"stickers",commands:[{title:"emo",info:"Send stickers/emoji",usage:"<prefix>emo code_sticker",description:""},{title:"sticker",info:"Custom sticker/emo.",usage:"<prefix>s [get, set, remove] [sticker] [url-link-image]",description:"You can easy add emo now, Image size are fine 500x500 or 1040x1040, you cant add gifs image, after added u uses: <prefix>s [sticker], examples: \nadd: <prefix>s set hammann [url-link-image] \nlist: <prefix>s \nusage: <prefix>s hammann \nremove: <prefix>s remove hammann"},{title:"stickers",info:"List all stickers",usage:"<prefix>stickers",description:"you can use <prefix>stickers [category] to list only that [category]."}]},{title:"utils",commands:[{title:"setlang",info:"List languages or set language",usage:"<prefix>lang [lang]",description:"Hammann have languages English, Japanese"},{title:"name",info:"Add a group name for Hammann to know when to interact in commands",usage:"<prefix>name [name]",description:"Hammann can save name for your group and use it later for news commands."},{title:"prefix",info:"Show current prefix or replace it",usage:"<prefix>prefix [new prefix]",description:"You can set custom prefix for your group."},{title:"replace",info:"Replace text",usage:"<prefix>replace [it] [to] [text]",description:"Your can replace some texts: <prefix>replace warspite hammann best bote is warspite, result: best bote is hammann"},{title:"reverse",info:"Reverse text.",usage:"<prefix>reverse [text]",description:""},{title:"tags",info:"Short some text or create tags",usage:"<prefix>tags [get, set, remove] [tag] [text]",description:"Example: <prefix>tag set wiki link-of-azurlane \n<prefix>tag wiki \nresult: link-of-azurlane"}]},{title:"web",commands:[{title:"danbooru",info:"Search image with tags in danbooru",usage:"<prefix>danbooru tags",description:""},{title:"gelbooru",info:"Search image with tags in gelbooru",usage:"<prefix>gelbooru tags",description:""},{title:"konachan",info:"Search image with tags in konachan",usage:"<prefix>konachan tags",description:""},{title:"saucenao",info:"Find sauces.",usage:"<prefix>sauce [url-image]",description:""},{title:"youtube",info:"Find videos.",usage:"<prefix>youtube title",description:""}]}]}]}});
//# sourceMappingURL=app.3096309a.js.map