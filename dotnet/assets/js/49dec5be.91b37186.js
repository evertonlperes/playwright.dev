"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4739],{5336:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return h}});var s=n(7462),r=n(3366),a=(n(7294),n(3905)),o=(n(6396),n(8215),["components"]),l={id:"screenshots",title:"Screenshots"},c=void 0,i={unversionedId:"screenshots",id:"screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/docs/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/dotnet/docs/next/screenshots",tags:[],version:"current",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"docs",previous:{title:"Page Object Models",permalink:"/dotnet/docs/next/pom"},next:{title:"Selectors",permalink:"/dotnet/docs/next/selectors"}},u=[{value:"Full page screenshots",id:"full-page-screenshots",children:[],level:2},{value:"Capture into buffer",id:"capture-into-buffer",children:[],level:2},{value:"Element screenshot",id:"element-screenshot",children:[],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,a.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#full-page-screenshots"},"Full page screenshots")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#capture-into-buffer"},"Capture into buffer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#element-screenshot"},"Element screenshot"))),(0,a.kt)("h2",{id:"full-page-screenshots"},"Full page screenshots"),(0,a.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,a.kt)("h2",{id:"capture-into-buffer"},"Capture into buffer"),(0,a.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var bytes = await page.ScreenshotAsync();\n")),(0,a.kt)("h2",{id:"element-screenshot"},"Element screenshot"),(0,a.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.Locator(".header").ScreenshotAsync(new ElementHandleScreenshotOptions { Path = "screenshot.png" });\n')))}h.isMDXComponent=!0}}]);