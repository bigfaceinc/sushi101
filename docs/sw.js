if(!self.define){let e,n={};const s=(s,a)=>(s=new URL(s+".js",a).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let t={};const r=e=>s(e,c),o={module:{uri:c},exports:t,require:r};n[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-2f9c3875"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"c27d7dcf77346986f7dcae4bf4924063"},{url:"/_next/server/middleware-manifest.json",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/171-32e9b48207c7276b.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/197-07605bf9a41ad841.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/main-2233bf9350f24156.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/pages/_app-92d4725ef0cac8ed.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/pages/index-a56d8b3043d0c6a6.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/pages/lunch-75134b5359bbc730.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/pages/menu-6291ed272f50e063.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/pages/takeout-6cb96b92111d9641.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/chunks/webpack-378e68e29c265886.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/css/7275e2eb15e14dba.css",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/images/dine-in-menu-background-cropped-8e92e4090fe33b28b7e03a718edb5d41.jpg",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/images/landing-image-fb346f7fda19283a6afa0f0b0aae2859.jpg",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/images/logo-15d2404a431170be2f5c1d0af512fe5b.png",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/images/logo-white-9e69b7be6173f5b7aa5ef172ed9fc715.png",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/images/lunch-special-menu-background-cropped-07149c956dff9afd921614a568c75cb8.jpg",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/images/story-background-ad872def969dfa2dc09cb218d88e62c4.jpg",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/images/take-out-menu-background-cropped-0886c1a01c22efdf6e6a9557caf11e50.jpg",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/k6Mc7zWELGynBOdqURWbO/_buildManifest.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/k6Mc7zWELGynBOdqURWbO/_middlewareManifest.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/_next/static/k6Mc7zWELGynBOdqURWbO/_ssgManifest.js",revision:"k6Mc7zWELGynBOdqURWbO"},{url:"/android-chrome-192x192.png",revision:"ddeafe58560baaac4e76aaafbfe491c7"},{url:"/android-chrome-512x512.png",revision:"790b4adc1a8c71a36053fd2044ff0056"},{url:"/apple-touch-icon.png",revision:"3109201af5a3c179605cab76bb0d004e"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"b10eadc00b45728569d8a4a801face76"},{url:"/favicon-32x32.png",revision:"854f25f60d48233d9e71177f92688607"},{url:"/favicon.ico",revision:"cc3eb7da028c64270194f606a8752e29"},{url:"/manifest.json",revision:"8ae586f4a4c2baf4bc7c3ad75a4fc381"},{url:"/mstile-150x150.png",revision:"1923b1fefe709603918969c6193a8151"},{url:"/safari-pinned-tab.svg",revision:"7a7be8f8684afa1cc7eb105546a75631"},{url:"/site.webmanifest",revision:"1682fd662659f31fc6c583cb53283c49"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
