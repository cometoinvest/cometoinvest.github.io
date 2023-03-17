if (!self.define) {
    let e, s = {};
    const a = (a,i)=>(a = new URL(a + ".js",i).href,
    s[a] || new Promise((s=>{
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = a,
            e.onload = s,
            document.head.appendChild(e)
        } else
            e = a,
            importScripts(a),
            s()
    }
    )).then((()=>{
        let e = s[a];
        if (!e)
            throw new Error(`Module ${a} didn’t register its module`);
        return e
    }
    )));
    self.define = (i,c)=>{
        const n = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (s[n])
            return;
        let o = {};
        const f = e=>a(e, n)
          , d = {
            module: {
                uri: n
            },
            exports: o,
            require: f
        };
        s[n] = Promise.all(i.map((e=>d[e] || f(e)))).then((e=>(c(...e),
        o)))
    }
}
define(["./workbox-3ed17b10"], (function(e) {
    "use strict";
    self.addEventListener("message", (e=>{
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    }
    )),
    e.precacheAndRoute([{
        url: "apple-touch-icon.png",
        revision: "6007b6c2d16476b7bd0c4a69a482c7ea"
    }, {
        url: "assets/css/_fallback-77b97264.css",
        revision: "2a6c66d921dd6820131331c4cddeba4b"
    }, {
        url: "assets/css/index-7b2d7ab7.css",
        revision: "70e189af76c721683e13295452f746a8"
    }, {
        url: "assets/css/index-8f5fe313.css",
        revision: "9c5e0701782982295a44332758350b52"
    }, {
        url: "assets/css/index-9047ca06.css",
        revision: "8587af42efe73c75eabc44799487c87c"
    }, {
        url: "assets/css/nav.svelte_svelte_type_style_lang-c85a3aa9.css",
        revision: "833c36a7753c0392fe81b34e06d34efc"
    }, {
        url: "assets/css/soon.min.css",
        revision: "3098331c01eb0c567eb05d236de56e58"
    }, {
        url: "assets/fonts/bello.woff",
        revision: "d4750efa1e1a4a23c4281443fcc3ef20"
    }, {
        url: "assets/fonts/bello.woff2",
        revision: "dcf0853794769424f1b4fc8dd986db9f"
    }, {
        url: "assets/fonts/icomoon.woff",
        revision: "3771d6a2e85e08d594090e5f80e95ade"
    }, {
        url: "assets/fonts/icomoon.woff2",
        revision: "6edc0c25e8423dc6d20cd678d5ba4bf4"
    }, {
        url: "assets/icon-fonts/iconfont.woff",
        revision: "4ef01e64609908c22bdb882d68a77f3e"
    }, {
        url: "assets/icon-fonts/iconfont.woff2",
        revision: "23ca8f958c2340954d0226c59c391fe8"
    }, {
        url: "assets/images/background-login@2x.webp",
        revision: "02032d5e73295a7fb0a0e56ba139265a"
    }, {
        url: "assets/images/bg-circuito.svg",
        revision: "4e9af36d45ef4dfa2039d3d7e154d269"
    }, {
        url: "assets/images/loading.svg",
        revision: "b3f287e625965e0a70a09c8ab296a7ab"
    }, {
        url: "assets/js/_fallback-a4cdb020.js",
        revision: "314efdfe8319a4c28de881d99320a6e1"
    }, {
        url: "assets/js/_layout-5598d2be.js",
        revision: "46c7094f55680dde85a17d91a9be7a4c"
    }, {
        url: "assets/js/_nombre_-5d8d48ac.js",
        revision: "eb8e2aa40b3b5492ecbc00e92f812aa7"
    }, {
        url: "assets/js/_reset-9756fc88.js",
        revision: "e3602d769afff0dc33552f54f1eb6877"
    }, {
        url: "assets/js/index-548253aa.js",
        revision: "440afb6c6e765dca7ba16e064b4cb9e9"
    }, {
        url: "assets/js/index-9008156a.js",
        revision: "94bf65bc3875d289a77e92482aefe044"
    }, {
        url: "assets/js/index-f073ef58.js",
        revision: "a6cd403d0b95c0cfdf7f52cbd34b1ebf"
    }, {
        url: "assets/js/jquery-1.8.0.min.js",
        revision: "d53212f01bd742b0675a1301f522a5e7"
    }, {
        url: "assets/js/nav-8ca55836.js",
        revision: "7ecdfaaf3bf72462eefb3a6860617bce"
    }, {
        url: "assets/js/soon.min.js",
        revision: "a4a0fd69228ff77e54ed43571cba6c8f"
    }, {
        url: "assets/js/umbrella.min-b3aeeb29.js",
        revision: "c02bacdd87166e59d3fc9d0629c110dd"
    }, {
        url: "assets/js/vendor-c8db6aee.js",
        revision: "994e54946634098fd623fe968c409db9"
    }, {
        url: "favicon.ico",
        revision: "d4b4b0d3e9dfdc0f6b8119c396cefded"
    }, {
        url: "favicon.png",
        revision: "42162840df7beec060059b4d9a7f3e57"
    }, {
        url: "favicon.svg",
        revision: "5ecaba0ec0cf7c652f225e379d6a9bf6"
    }, {
        url: "fonts/billetera.svg",
        revision: "9b49efa4f2fb919725775b3d0b85fa29"
    }, {
        url: "fonts/check.svg",
        revision: "43b34caa8a4b68ea1b4530a3ab3c947a"
    }, {
        url: "fonts/facebook.svg",
        revision: "dba5bd4a7357ed21d2d96ac78845b0e0"
    }, {
        url: "fonts/font.css",
        revision: "1bfda128469dd11f386f03a4e480ca15"
    }, {
        url: "fonts/icon-font-template.hbs",
        revision: "b8aae5dbd11d291b06acfc89a7700d17"
    }, {
        url: "fonts/jsanchez.svg",
        revision: "6c198964a4529851e834360cc5a28a07"
    }, {
        url: "fonts/llama.svg",
        revision: "f3f9aedeb912ef9683bdb9a452835fa2"
    }, {
        url: "fonts2/iconfont.css",
        revision: "03dae7d59f8bddb46e24cb09a19d1158"
    }, {
        url: "fonts2/iconfont.html",
        revision: "6b95921f5e0957941bd407ea687dab2a"
    }, {
        url: "fonts2/iconfont.woff",
        revision: "4ef01e64609908c22bdb882d68a77f3e"
    }, {
        url: "fonts2/iconfont.woff2",
        revision: "23ca8f958c2340954d0226c59c391fe8"
    }, {
        url: "images/logo-mwcmd.svg",
        revision: "2f99e3dd3372c09af80f851172f5bf2b"
    }, {
        url: "index.html",
        revision: "e8418c15aa9c016316bdb06447f6248e"
    }, {
        url: "manifest.webmanifest",
        revision: "1147ec133b5ac69ae73474159bd45111"
    }, {
        url: "pwa-192x192.png",
        revision: "42162840df7beec060059b4d9a7f3e57"
    }, {
        url: "pwa-512x512.png",
        revision: "d67dbab5053868be9b018e5bb1017cc1"
    }, {
        url: "robots.txt",
        revision: "5e0bd1c281a62a380d7a948085bfe2d1"
    }, {
        url: "vane.jpg",
        revision: "b5d29b7a2783256a906b425014ed1440"
    }, {
        url: "favicon.svg",
        revision: "5ecaba0ec0cf7c652f225e379d6a9bf6"
    }, {
        url: "favicon.ico",
        revision: "d4b4b0d3e9dfdc0f6b8119c396cefded"
    }, {
        url: "robots.txt",
        revision: "5e0bd1c281a62a380d7a948085bfe2d1"
    }, {
        url: "apple-touch-icon.png",
        revision: "6007b6c2d16476b7bd0c4a69a482c7ea"
    }, {
        url: "pwa-192x192.png",
        revision: "42162840df7beec060059b4d9a7f3e57"
    }, {
        url: "pwa-512x512.png",
        revision: "d67dbab5053868be9b018e5bb1017cc1"
    }, {
        url: "manifest.webmanifest",
        revision: "1147ec133b5ac69ae73474159bd45111"
    }], {}),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),
    e.registerRoute(/^https:\/\/enki-v1-production\.dev\/.*/i, new e.NetworkOnly({
        plugins: [new e.BackgroundSyncPlugin("myQueueName",{
            maxRetentionTime: 31536e3
        })]
    }), "POST"),
    e.registerRoute(/^https:\/\/api-heroes-colombia\.asiquedo\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "api-contenido",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 1e3,
            maxAgeSeconds: 31536e3
        }), new e.CacheableResponsePlugin({
            statuses: [0, 200]
        })]
    }), "GET"),
    e.registerRoute(/^https:\/\/static\.tvmaze\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "imagen-contenido",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 10,
            maxAgeSeconds: 31536e3
        }), new e.CacheableResponsePlugin({
            statuses: [0, 200]
        })]
    }), "GET")
}
));
