if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,c,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-a1d82b22"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"error.html",revision:"18c4cb8b3bcc3bd1ee950edfe56193df"},{url:"javascripts/app.js",revision:"84d705b317b5973534c2ab4c05e8aa0f"},{url:"javascripts/cv-app.js",revision:"24ac4f942ad456c4417784421708c61f"},{url:"javascripts/cv-service.mjs",revision:"dc73dd84f4b3b5aef6a306e35894394e"},{url:"javascripts/cv-setup.js",revision:"4ef170cad8451cce62030f82c306646a"},{url:"javascripts/cv.worker.js",revision:"e72462f1b371c807925de2a79b9ed508"},{url:"javascripts/polyfill.js",revision:"cc818888eaa0e17a886ccc786501ccb3"},{url:"javascripts/rectangle-app.js",revision:"d38482a62f9ffdd09b4992f73829b528"},{url:"main.js",revision:"a39080e7a0225665196cd1dbeae6e2be"},{url:"stylesheets/style.css",revision:"557d18c9db1169bebb1003ac0410c56f"},{url:"stylesheets/style.scss",revision:"eabcd8eb7e187e343756474af9d455db"}],{}),e.registerRoute(/^https:\/\/unpkg/g,new e.CacheFirst({cacheName:"cdn-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|css)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:30,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*\.(js|mjs)/,new e.NetworkFirst({cacheName:"javascripts",plugins:[]}),"GET")}));
