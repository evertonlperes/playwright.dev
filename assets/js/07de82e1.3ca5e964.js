"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4090],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),f=n,d=m["".concat(o,".").concat(f)]||m[f]||c[f]||l;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(9443);var l=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,c=e.values,m=e.groupId,f=e.className,d=l(),h=d.tabGroupChoices,k=d.setTabGroupChoices,g=(0,r.useState)(n),y=g[0],v=g[1],w=r.Children.toArray(e.children),b=[];if(null!=m){var N=h[m];null!=N&&N!==y&&c.some((function(e){return e.value===N}))&&v(N)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),r=c[a].value;v(r),null!=m&&(k(m,r),setTimeout((function(){var e,a,r,n,l,i,s,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,l=e.right,i=window,s=i.innerHeight,u=i.innerWidth,a>=0&&l<=u&&n<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case p:var r=b.indexOf(e.target)+1;a=b[r]||b[0];break;case u:var n=b.indexOf(e.target)-1;a=b[n]||b[b.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},f)},c.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:T,onFocus:x,onClick:x},a)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},5012:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=a(5064),s=a(8215),o={id:"test-parallel",title:"Parallelism and sharding"},u=void 0,p={unversionedId:"test-parallel",id:"test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time.",source:"@site/docs/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/docs/next/test-parallel",version:"current",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"},sidebar:"docs",previous:{title:"Page Object Model",permalink:"/docs/next/test-pom"},next:{title:"Parameterize tests",permalink:"/docs/next/test-parameterize"}},c=[{value:"Worker processes",id:"worker-processes",children:[]},{value:"Limit workers",id:"limit-workers",children:[]},{value:"Disable parallelism",id:"disable-parallelism",children:[]},{value:"Parallelize tests in a single file",id:"parallelize-tests-in-a-single-file",children:[]},{value:"Shard tests between multiple machines",id:"shard-tests-between-multiple-machines",children:[]},{value:"Limit failures and fail fast",id:"limit-failures-and-fail-fast",children:[]},{value:"Worker index",id:"worker-index",children:[]}],m={toc:c};function f(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"By default, ",(0,l.kt)("strong",{parentName:"li"},"test files")," are run in parallel. Tests in a single file are run in order, in the same worker process."),(0,l.kt)("li",{parentName:"ul"},"Group tests with ",(0,l.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},(0,l.kt)("inlineCode",{parentName:"a"},"test.describe.parallel"))," to run ",(0,l.kt)("strong",{parentName:"li"},"tests in a single file")," in parallel."),(0,l.kt)("li",{parentName:"ul"},"To ",(0,l.kt)("strong",{parentName:"li"},"disable")," parallelism limit the number of ",(0,l.kt)("a",{parentName:"li",href:"#disable-parallelism"},"workers to one"),".")),(0,l.kt)("p",null,"You can control the number of ",(0,l.kt)("a",{parentName:"p",href:"#limit-workers"},"parallel worker processes")," and ",(0,l.kt)("a",{parentName:"p",href:"#limit-failures-and-fail-fast"},"limit the number of failures")," in the whole test suite for efficiency."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#worker-processes"},"Worker processes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#limit-workers"},"Limit workers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-parallelism"},"Disable parallelism")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},"Parallelize tests in a single file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shard-tests-between-multiple-machines"},"Shard tests between multiple machines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#limit-failures-and-fail-fast"},"Limit failures and fail fast")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#worker-index"},"Worker index"))),(0,l.kt)("h2",{id:"worker-processes"},"Worker processes"),(0,l.kt)("p",null,"All tests run in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,l.kt)("p",null,"You can't communicate between the workers. Playwright Test reuses a single worker as much as it can to make testing faster, so multiple test files are usually run in a single worker one after another."),(0,l.kt)("p",null,"Workers are always shutdown after a ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/test-retries#failures"},"test failure")," to guarantee pristine environment for following tests."),(0,l.kt)("h2",{id:"limit-workers"},"Limit workers"),(0,l.kt)("p",null,"You can control the maximum number of parallel worker processes via ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/test-cli"},"command line")," or in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),"."),(0,l.kt)("p",null,"From the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 4\n")),(0,l.kt)("p",null,"In the configuration file:"),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"disable-parallelism"},"Disable parallelism"),(0,l.kt)("p",null,"You can disable any parallelism by allowing just a single worker at any time. Either set ",(0,l.kt)("inlineCode",{parentName:"p"},"workers: 1")," option in the configuration file or pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--workers=1")," to the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n")),(0,l.kt)("h2",{id:"parallelize-tests-in-a-single-file"},"Parallelize tests in a single file"),(0,l.kt)("p",null,"By default, tests in a single file are run in order. If you have many independent tests in a single file, you might want to run them in parallel with ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-describe-parallel"},"test.describe.parallel(title, callback)"),"."),(0,l.kt)("p",null,"Note that parallel tests are executed in separate worker processes and cannot share any state or global variables. Each test executes all relevant hooks just for itself, including ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"afterAll"),"."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe.parallel('suite', () => {\n  test('runs in parallel 1', async ({ page }) => { /* ... */ });\n  test('runs in parallel 2', async ({ page }) => { /* ... */ });\n});\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe.parallel('suite', () => {\n  test('runs in parallel 1', async ({ page }) => { /* ... */ });\n  test('runs in parallel 2', async ({ page }) => { /* ... */ });\n});\n")))),(0,l.kt)("h2",{id:"shard-tests-between-multiple-machines"},"Shard tests between multiple machines"),(0,l.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")),(0,l.kt)("p",null,"That way your test suite completes 3 times faster."),(0,l.kt)("h2",{id:"limit-failures-and-fail-fast"},"Limit failures and fail fast"),(0,l.kt)("p",null,"You can limit the number of failed tests in the whole test suite by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"maxFailures")," config option or passing ",(0,l.kt)("inlineCode",{parentName:"p"},"--max-failures")," command line flag."),(0,l.kt)("p",null,'When running with "max failures" set, Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.'),(0,l.kt)("p",null,"Passing command line option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --max-failures=10\n")),(0,l.kt)("p",null,"Setting in the configuration file:"),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"worker-index"},"Worker index"),(0,l.kt)("p",null,"Each worker process is assigned a unique id (an index that starts with 1). You can read it from environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX"),", or access through ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-worker-index"},"testInfo.workerIndex"),"."))}f.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);