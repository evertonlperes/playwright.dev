"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[10521],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),o=a(79443);var r=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,c=e.values,d=e.groupId,g=e.className,m=r(),f=m.tabGroupChoices,h=m.setTabGroupChoices,x=(0,n.useState)(o),w=x[0],k=x[1],y=n.Children.toArray(e.children),v=[];if(null!=d){var b=f[d];null!=b&&b!==w&&c.some((function(e){return e.value===b}))&&k(b)}var T=function(e){var t=e.currentTarget,a=v.indexOf(t),n=c[a].value;k(n),null!=d&&(h(d,n),setTimeout((function(){var e,a,n,o,r,s,i,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,s=window,i=s.innerHeight,u=s.innerWidth,a>=0&&r<=u&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case p:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case u:var o=v.indexOf(e.target)-1;a=v[o]||v[v.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},g)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":w===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:N,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},74184:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),s=a(55064),i=a(58215),l={id:"test-fixtures",title:"Advanced: fixtures"},u=void 0,p={unversionedId:"test-fixtures",id:"test-fixtures",isDocsHomePage:!1,title:"Advanced: fixtures",description:"- Introduction to fixtures",source:"@site/docs/test-fixtures.mdx",sourceDirName:".",slug:"/test-fixtures",permalink:"/docs/next/test-fixtures",version:"current",frontMatter:{id:"test-fixtures",title:"Advanced: fixtures"},sidebar:"docs",previous:{title:"Advanced: configuration",permalink:"/docs/next/test-advanced"},next:{title:"Advanced: TypeScript",permalink:"/docs/next/test-typescript"}},c=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Built-in fixtures",id:"built-in-fixtures",children:[]},{value:"Without fixtures",id:"without-fixtures",children:[]},{value:"With fixtures",id:"with-fixtures",children:[]}]},{value:"Creating a fixture",id:"creating-a-fixture",children:[]},{value:"Using a fixture",id:"using-a-fixture",children:[]},{value:"Overriding fixtures",id:"overriding-fixtures",children:[]},{value:"Worker-scoped fixtures",id:"worker-scoped-fixtures",children:[]},{value:"Automatic fixtures",id:"automatic-fixtures",children:[]},{value:"Fixtures-options",id:"fixtures-options",children:[]}],d={toc:c};function g(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction-to-fixtures"},"Introduction to fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-fixture"},"Creating a fixture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-a-fixture"},"Using a fixture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overriding-fixtures"},"Overriding fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#worker-scoped-fixtures"},"Worker-scoped fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#automatic-fixtures"},"Automatic fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fixtures-options"},"Fixtures-options"))),(0,r.kt)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),(0,r.kt)("p",null,"Playwright Test is based on the concept of test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, instead of their common setup."),(0,r.kt)("h3",{id:"built-in-fixtures"},"Built-in fixtures"),(0,r.kt)("p",null,"You have already used test fixtures in your first test."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"{ page }")," argument tells Playwright Test to setup the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture and provide it to your test function."),(0,r.kt)("p",null,"Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Fixture"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"page"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Isolated page for this test run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"context"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Isolated context for this test run. The ",(0,r.kt)("inlineCode",{parentName:"td"},"page")," fixture belongs to this context as well. Learn how to ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/test-configuration"},"configure context"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"browser"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/class-browser",title:"Browser"},"Browser")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Browsers are shared across tests to optimize resources. Learn how to ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/test-configuration"},"configure browser"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"browserName"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the browser currently running the test. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"chromium"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"firefox")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"webkit"),".")))),(0,r.kt)("h3",{id:"without-fixtures"},"Without fixtures"),(0,r.kt)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one."),(0,r.kt)("p",null,"We assume a ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app, following the ',(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-pom"},"Page Object Model")," pattern. It uses Playwright's ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," internally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// todo.spec.js\nconst { test } = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\ntest.describe('todo tests', () => {\n  let todoPage;\n\n  test.beforeEach(async ({ page }) => {\n    todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n  });\n\n  test.afterEach(async () => {\n    await todoPage.removeAll();\n  });\n\n  test('should add an item', async () => {\n    await todoPage.addToDo('my item');\n    // ...\n  });\n\n  test('should remove an item', async () => {\n    await todoPage.remove('item1');\n    // ...\n  });\n});\n")),(0,r.kt)("h3",{id:"with-fixtures"},"With fixtures"),(0,r.kt)("p",null,"Fixtures have a number of advantages over before/after hooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixtures ",(0,r.kt)("strong",{parentName:"li"},"encapsulate")," setup and teardown in the same place so it is easier to write."),(0,r.kt)("li",{parentName:"ul"},"Fixtures are ",(0,r.kt)("strong",{parentName:"li"},"reusable")," between test files - you can define them once and use in all your tests. That's how Playwright's built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"page")," fixture works."),(0,r.kt)("li",{parentName:"ul"},"Fixtures are ",(0,r.kt)("strong",{parentName:"li"},"on-demand")," - you can define as many fixtures as you'd like, and Playwright Test will setup only the ones needed by your test and nothing else."),(0,r.kt)("li",{parentName:"ul"},"Fixtures are ",(0,r.kt)("strong",{parentName:"li"},"composable")," - they can depend on each other to provide complex behaviors."),(0,r.kt)("li",{parentName:"ul"},"Fixtures are ",(0,r.kt)("strong",{parentName:"li"},"flexible"),". Tests can use any combinations of the fixtures to tailor precise environment they need, without affecting other tests."),(0,r.kt)("li",{parentName:"ul"},"Fixtures simplify ",(0,r.kt)("strong",{parentName:"li"},"grouping"),". You no longer need to wrap tests in ",(0,r.kt)("inlineCode",{parentName:"li"},"describe"),"s that set up environment, and are free to group your tests by their meaning instead.")),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\n\n// Extend basic test by providing a \"todoPage\" fixture.\nconst test = base.extend<{ todoPage: TodoPage }>({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// todo.spec.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\n// Extend basic test by providing a \"todoPage\" fixture.\nconst test = base.test.extend({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n")))),(0,r.kt)("h2",{id:"creating-a-fixture"},"Creating a fixture"),(0,r.kt)("p",null,"To create your own fixture, use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-extend"},"test.extend(fixtures)")," to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," object that will include it."),(0,r.kt)("p",null,"Below we create two fixtures ",(0,r.kt)("inlineCode",{parentName:"p"},"todoPage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"settingsPage")," that follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-pom"},"Page Object Model")," pattern."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\nimport { SettingsPage } from './settings-page';\n\n// Declare the types of your fixtures.\ntype MyFixtures = {\n  todoPage: TodoPage;\n  settingsPage: SettingsPage;\n};\n\n// Extend base test by providing \"todoPage\" and \"settingsPage\".\n// This new \"test\" can be used in multiple test files, and each of them will get the fixtures.\nexport const test = base.extend<MyFixtures>({\n  todoPage: async ({ page }, use) => {\n    // Set up the fixture.\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n\n    // Use the fixture value in the test.\n    await use(todoPage);\n\n    // Clean up the fixture.\n    await todoPage.removeAll();\n  },\n\n  settingsPage: async ({ page }, use) => {\n    await use(new SettingsPage(page));\n  },\n});\nexport { expect } from '@playwright/test';\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\nconst { SettingsPage } = require('./settings-page');\n\n// Extend base test by providing \"todoPage\" and \"settingsPage\".\n// This new \"test\" can be used in multiple test files, and each of them will get the fixtures.\nexports.test = base.test.extend({\n  todoPage: async ({ page }, use) => {\n    // Set up the fixture.\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n\n    // Use the fixture value in the test.\n    await use(todoPage);\n\n    // Clean up the fixture.\n    await todoPage.removeAll();\n  },\n\n  settingsPage: async ({ page }, use) => {\n    await use(new SettingsPage(page));\n  },\n});\nexports.expect = base.expect;\n")))),(0,r.kt)("h2",{id:"using-a-fixture"},"Using a fixture"),(0,r.kt)("p",null,"Just mention fixture in your test function argument, and test runner will take care of it. Fixtures are also available in hooks and other fixtures. If you use TypeScript, fixtures will have the right type."),(0,r.kt)("p",null,"Below we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"todoPage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"settingsPage")," fixtures defined above."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from './my-test';\n\ntest.beforeEach(async ({ settingsPage }) => {\n  await settingsPage.switchToDarkMode();\n});\n\ntest('basic test', async ({ todoPage, page }) => {\n  await todoPage.addToDo('something nice');\n  await expect(page.locator('.todo-item')).toContainText(['something nice']);\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('./my-test');\n\ntest.beforeEach(async ({ settingsPage }) => {\n  await settingsPage.switchToDarkMode();\n});\n\ntest('basic test', async ({ todoPage, page }) => {\n  await todoPage.addToDo('something nice');\n  await expect(page.locator('.todo-item')).toContainText(['something nice']);\n});\n")))),(0,r.kt)("h2",{id:"overriding-fixtures"},"Overriding fixtures"),(0,r.kt)("p",null,"In addition to creating your own fixtures, you can also override existing fixtures to fit your needs. Consider the following example which overrides the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture by automatically navigating to some ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL"),":"),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n")))),(0,r.kt)("p",null,"Notice that in this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture is able to depend on other built-in fixtures such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions#test-options-base-url"},"testOptions.baseURL"),". We can now configure ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," in the configuration file, or locally in the test file with ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-use"},"test.use(options)"),"."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\ntest.use({ baseURL: 'https://playwright.dev' });\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n\ntest.use({ baseURL: 'https://playwright.dev' });\n")))),(0,r.kt)("p",null,"Fixtures can also be overridden where the base fixture is completely replaced with something different. For example, we could override the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions#test-options-storage-state"},"testOptions.storageState")," fixture to provide our own data."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n")))),(0,r.kt)("h2",{id:"worker-scoped-fixtures"},"Worker-scoped fixtures"),(0,r.kt)("p",null,"Playwright Test uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-parallel"},"worker processes")," to run test files. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),(0,r.kt)("p",null,"Below we'll create an ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," fixture that will be shared by all tests in the same worker, and override the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture to login into this account for each test. To generate unique accounts, we'll use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-workerinfo#worker-info-worker-index"},"workerInfo.workerIndex")," that is available to any test or fixture. Note the tuple-like syntax for the worker fixture - we have to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"{scope: 'worker'}")," so that test runner sets up this fixture once per worker."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport { test as base } from '@playwright/test';\n\ntype Account = {\n  username: string;\n  password: string;\n};\n\n// Note that we pass worker fixture types as a second template parameter.\nexport const test = base.extend<{}, { account: Account }>({\n  account: [async ({ browser }, use, workerInfo) => {\n    // Unique username.\n    const username = 'user' + workerInfo.workerIndex;\n    const password = 'verysecure';\n\n    // Create the account with Playwright.\n    const page = await browser.newPage();\n    await page.goto('/signup');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign up').click();\n    // Make sure everything is ok.\n    await expect(page.locator('#result')).toHaveText('Success');\n    // Do not forget to cleanup.\n    await page.close();\n\n    // Use the account value.\n    await use({ username, password });\n  }, { scope: 'worker' }],\n\n  page: async ({ page, account }, use) => {\n    // Sign in with our account.\n    await page.goto('/signin');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign in').click();\n    await expect(page.locator('#userinfo')).toHaveText(username);\n\n    // Use signed-in page in the test.\n    await use(page);\n  },\n});\nexport { expect } from '@playwright/test';\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  account: [async ({ browser }, use, workerInfo) => {\n    // Unique username.\n    const username = 'user' + workerInfo.workerIndex;\n    const password = 'verysecure';\n\n    // Create the account with Playwright.\n    const page = await browser.newPage();\n    await page.goto('/signup');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign up').click();\n    // Make sure everything is ok.\n    await expect(page.locator('#result')).toHaveText('Success');\n    // Do not forget to cleanup.\n    await page.close();\n\n    // Use the account value.\n    await use({ username, password });\n  }, { scope: 'worker' }],\n\n  page: async ({ page, account }, use) => {\n    // Sign in with our account.\n    await page.goto('/signin');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign in').click();\n    await expect(page.locator('#userinfo')).toHaveText(username);\n\n    // Use signed-in page in the test.\n    await use(page);\n  },\n});\nexports.expect = base.expect;\n")))),(0,r.kt)("h2",{id:"automatic-fixtures"},"Automatic fixtures"),(0,r.kt)("p",null,"Automatic fixtures are set up for each test/worker, even when the test does not list them directly. To create an automatic fixture, use the tuple syntax and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"{ auto: true }"),"."),(0,r.kt)("p",null,"Here is an example fixture that automatically attaches debug logs when the test fails, so we can later review the logs in the reporter. Note how it uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo",title:"TestInfo"},"TestInfo")," object that is available in each test/fixture to retrieve metadata about the test being run."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport * as debug from 'debug';\nimport * as fs from 'fs';\nimport { test as base } from '@playwright/test';\n\nexport const test = base.extend<{ saveLogs: void }>({\n  saveLogs: [async ({}, use, testInfo) => {\n    // Collecting logs during the test.\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('myserver');\n\n    await use();\n\n    // After the test we can check whether the test passed or failed.\n    if (testInfo.status !== testInfo.expectedStatus) {\n      // outputPath() API guarantees a unique file name.\n      const logFile = testInfo.outputPath('logs.txt');\n      await fs.promises.writeFile(logFile, logs.join('\\n'), 'utf8');\n      testInfo.attachments.push({ name: 'logs', contentType: 'text/plain', path: logFile });\n    }\n  }, { auto: true }],\n});\nexport { expect } from '@playwright/test';\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst debug = require('debug');\nconst fs = require('fs');\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  saveLogs: [async ({}, use, testInfo) => {\n    // Collecting logs during the test.\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('myserver');\n\n    await use();\n\n    // After the test we can check whether the test passed or failed.\n    if (testInfo.status !== testInfo.expectedStatus) {\n      // outputPath() API guarantees a unique file name.\n      const logFile = testInfo.outputPath('logs.txt');\n      await fs.promises.writeFile(logFile, logs.join('\\n'), 'utf8');\n      testInfo.attachments.push({ name: 'logs', contentType: 'text/plain', path: logFile });\n    }\n  }, { auto: true }],\n});\n")))),(0,r.kt)("h2",{id:"fixtures-options"},"Fixtures-options"),(0,r.kt)("p",null,'Playwright Test supports running multiple test projects that can be separately configured. You can use "option" fixtures to make your configuration options declarative and type-checked. Learn more about ',(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-parameterize"},"parametrizing tests"),"."),(0,r.kt)("p",null,"Below we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultItem")," option in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"todoPage")," fixture from other examples. This option will be set in configuration file. Note the tuple syntax and ",(0,r.kt)("inlineCode",{parentName:"p"},"{ option: true }")," argument."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\n\n// Declare your options to type-check your configuration.\nexport type MyOptions = {\n  defaultItem: string;\n};\ntype MyFixtures = {\n  todoPage: TodoPage;\n};\n\n// Specify both option and fixture types.\nexport const test = base.extend<MyOptions & MyFixtures>({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  defaultItem: ['Something nice', { option: true }],\n\n  // Our \"todoPage\" fixture depends on the option.\n  todoPage: async ({ page, defaultItem }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo(defaultItem);\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\nexport { expect } from '@playwright/test';\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\nexports.test = base.test.extend({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  defaultItem: ['Something nice', { option: true }],\n\n  // Our \"todoPage\" fixture depends on the option.\n  todoPage: async ({ page, defaultItem }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo(defaultItem);\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\nexports.expect = base.expect;\n")))),(0,r.kt)("p",null,"We can now use ",(0,r.kt)("inlineCode",{parentName:"p"},"todoPage")," fixture as usual, and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultItem")," option in the config file."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport { MyOptions } from './my-test';\n\nconst config: PlaywrightTestConfig<MyOptions> = {\n  projects: [\n    {\n      name: 'shopping',\n      use: { defaultItem: 'Buy milk' },\n    },\n    {\n      name: 'wellbeing',\n      use: { defaultItem: 'Exercise!' },\n    },\n  ]\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig<{ defaultItem: string }>} */\nconst config = {\n  projects: [\n    {\n      name: 'shopping',\n      use: { defaultItem: 'Buy milk' },\n    },\n    {\n      name: 'wellbeing',\n      use: { defaultItem: 'Exercise!' },\n    },\n  ]\n};\n\nmodule.exports = config;\n")))))}g.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);