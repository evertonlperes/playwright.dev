(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{247:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),l=(a(0),a(392)),r=a(395),c=a(396),i={id:"class-download",title:"Download"},d={unversionedId:"api/class-download",id:"api/class-download",isDocsHomePage:!1,title:"Download",description:'Download] objects are dispatched by page via the [page.on("download") event.',source:"@site/docs/api/class-download.mdx",slug:"/api/class-download",permalink:"/python/docs/next/api/class-download",version:"current",sidebar:"api",previous:{title:"Dialog",permalink:"/python/docs/next/api/class-dialog"},next:{title:"ElementHandle",permalink:"/python/docs/next/api/class-elementhandle"}},s=[{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.save_as(path)",id:"downloadsave_aspath",children:[]},{value:"download.suggested_filename",id:"downloadsuggested_filename",children:[]},{value:"download.url",id:"downloadurl",children:[]}],p={toc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageondownload"}),'page.on("download")')," event."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"downloadsPath")," isn't specified, all the downloaded files belonging to the browser context are deleted when the browser context is closed. And all downloaded files are deleted when the browser closes."),Object(l.b)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),Object(l.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_download() as download_info:\n    page.click("a")\ndownload = download_info.value\n# wait for download to complete\npath = download.path()\n'))),Object(l.b)(c.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_download() as download_info:\n    await page.click("a")\ndownload = await download_info.value\n# waits for download to complete\npath = await download.path()\n')))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Browser context ",Object(l.b)("strong",{parentName:"p"},"must")," be created with the ",Object(l.b)("inlineCode",{parentName:"p"},"accept_downloads")," set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(l.b)("inlineCode",{parentName:"p"},"accept_downloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-download#downloaddelete"}),"download.delete()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-download#downloadfailure"}),"download.failure()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-download#downloadpath"}),"download.path()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-download#downloadsave_aspath"}),"download.save_as(path)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-download#downloadsuggested_filename"}),"download.suggested_filename")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-download#downloadurl"}),"download.url"))),Object(l.b)("h2",{id:"downloaddelete"},"download.delete()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">")),Object(l.b)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadfailure"},"download.failure()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(l.b)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadpath"},"download.path()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),">")),Object(l.b)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),Object(l.b)("h2",{id:"downloadsave_aspath"},"download.save_as(path)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"path")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","> Path where the download should be copied."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">")),Object(l.b)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadsuggested_filename"},"download.suggested_filename"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(l.b)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(l.b)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(l.b)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(l.b)("h2",{id:"downloadurl"},"download.url"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(l.b)("p",null,"Returns downloaded url."))}b.isMDXComponent=!0},391:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},392:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,h=p["".concat(r,".").concat(u)]||p[u]||b[u]||l;return a?o.a.createElement(h,c(c({ref:t},d),{},{components:a})):o.a.createElement(h,c({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var d=2;d<l;d++)r[d]=a[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},393:function(e,t,a){"use strict";var n=a(0),o=a(394);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},394:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},395:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(393),r=a(391),c=a(53),i=a.n(c),d=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,b=e.groupId,u=e.className,h=Object(l.a)(),f=h.tabGroupChoices,m=h.setTabGroupChoices,w=Object(n.useState)(c),O=w[0],j=w[1],y=n.Children.toArray(e.children);if(null!=b){var v=f[b];null!=v&&v!==O&&p.some((function(e){return e.value===v}))&&j(v)}var g=function(e){j(e),null!=b&&m(b,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},u)},p.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},396:function(e,t,a){"use strict";var n=a(3),o=a(0),l=a.n(o);t.a=function(e){var t=e.children,a=e.hidden,o=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:o}),t)}}}]);