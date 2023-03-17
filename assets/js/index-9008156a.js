import {b as _, S as f, i as v, s as h, R as g, c as y, m as x, n as E, t as L, a as P, d as b, v as R, e as w, H as I} from "./vendor-c8db6aee.js";
const O = function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        r(e);
    new MutationObserver(e=>{
        for (const o of e)
            if (o.type === "childList")
                for (const n of o.addedNodes)
                    n.tagName === "LINK" && n.rel === "modulepreload" && r(n)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(e) {
        const o = {};
        return e.integrity && (o.integrity = e.integrity),
        e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
        e.crossorigin === "use-credentials" ? o.credentials = "include" : e.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const o = a(e);
        fetch(e.href, o)
    }
};
O();
const A = "modulepreload"
  , c = {}
  , D = "/"
  , u = function(i, a) {
    return !a || a.length === 0 ? i() : Promise.all(a.map(r=>{
        if (r = `${D}${r}`,
        r in c)
            return;
        c[r] = !0;
        const e = r.endsWith(".css")
          , o = e ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${r}"]${o}`))
            return;
        const n = document.createElement("link");
        if (n.rel = e ? "stylesheet" : A,
        e || (n.as = "script",
        n.crossOrigin = ""),
        n.href = r,
        document.head.appendChild(n),
        e)
            return new Promise((l,d)=>{
                n.addEventListener("load", l),
                n.addEventListener("error", d)
            }
            )
    }
    )).then(()=>i())
}
  , S = {
    root: !0,
    ownMeta: {
        preload: "proximity"
    },
    children: [{
        isFallback: !0,
        meta: {
            recursive: !0,
            preload: "proximity",
            prerender: !0
        },
        path: "/_fallback",
        component: ()=>u(()=>import("./_fallback-a4cdb020.js"), ["assets/js/_fallback-a4cdb020.js", "assets/css/_fallback-77b97264.css", "assets/js/vendor-c8db6aee.js"]).then(t=>t.default)
    }, {
        isDir: !0,
        ext: "",
        children: [{
            isPage: !0,
            meta: {
                recursive: !0,
                preload: "proximity",
                prerender: !0
            },
            path: "/contacto/:nombre",
            id: "_contacto__nombre",
            component: ()=>u(()=>import("./_nombre_-5d8d48ac.js"), ["assets/js/_nombre_-5d8d48ac.js", "assets/js/vendor-c8db6aee.js"]).then(t=>t.default)
        }],
        meta: {
            recursive: !0,
            preload: "proximity",
            prerender: !0
        },
        path: "/contacto"
    }, {
        isIndex: !0,
        isPage: !0,
        meta: {
            recursive: !0,
            preload: "proximity",
            prerender: !0
        },
        path: "/index",
        id: "_index",
        component: ()=>u(()=>import("./index-f073ef58.js"), ["assets/js/index-f073ef58.js", "assets/css/index-7b2d7ab7.css", "assets/css/nav.svelte_svelte_type_style_lang-c85a3aa9.css", "assets/js/vendor-c8db6aee.js", "assets/js/umbrella.min-b3aeeb29.js"]).then(t=>t.default)
    }, {
        isDir: !0,
        children: [{
            isIndex: !0,
            isPage: !0,
            meta: {
                recursive: !0,
                preload: "proximity",
                prerender: !0
            },
            path: "/login/index",
            id: "_login_index",
            component: ()=>u(()=>import("./index-548253aa.js"), ["assets/js/index-548253aa.js", "assets/css/index-8f5fe313.css", "assets/js/vendor-c8db6aee.js", "assets/js/umbrella.min-b3aeeb29.js"]).then(t=>t.default)
        }, {
            isDir: !0,
            ext: "",
            children: [],
            meta: {
                recursive: !0,
                preload: "proximity",
                prerender: !0
            },
            path: "/login/styl"
        }],
        isLayout: !0,
        isReset: !0,
        meta: {
            recursive: !0,
            preload: "proximity",
            prerender: !0
        },
        path: "/login",
        id: "_login__reset",
        component: ()=>u(()=>import("./_reset-9756fc88.js"), ["assets/js/_reset-9756fc88.js", "assets/js/vendor-c8db6aee.js"]).then(t=>t.default)
    }, {
        isPage: !0,
        meta: {
            recursive: !0,
            preload: "proximity",
            prerender: !0
        },
        path: "/nav",
        id: "_nav",
        component: ()=>u(()=>import("./nav-8ca55836.js"), ["assets/js/nav-8ca55836.js", "assets/css/nav.svelte_svelte_type_style_lang-c85a3aa9.css", "assets/js/vendor-c8db6aee.js"]).then(t=>t.default)
    }],
    isLayout: !0,
    meta: {
        preload: "proximity",
        recursive: !0,
        prerender: !0
    },
    path: "/",
    id: "__layout",
    component: ()=>u(()=>import("./_layout-5598d2be.js"), ["assets/js/_layout-5598d2be.js", "assets/js/vendor-c8db6aee.js"]).then(t=>t.default)
}
  , {tree: W, routes: $} = _(S);
function j(t) {
    let i, a;
    return i = new g({
        props: {
            routes: $
        }
    }),
    {
        c() {
            y(i.$$.fragment)
        },
        m(r, e) {
            x(i, r, e),
            a = !0
        },
        p: E,
        i(r) {
            a || (L(i.$$.fragment, r),
            a = !0)
        },
        o(r) {
            P(i.$$.fragment, r),
            a = !1
        },
        d(r) {
            b(i, r)
        }
    }
}
class k extends f {
    constructor(i) {
        super();
        v(this, i, null, j, h, {})
    }
}
function p(t={}) {
    const {immediate: i=!1, onNeedRefresh: a, onOfflineReady: r, onRegistered: e, onRegisterError: o} = t;
    let n, l;
    const d = async(s=!0)=>{
        s && (n == null || n.addEventListener("controlling", m=>{
            m.isUpdate && window.location.reload()
        }
        )),
        l && l.waiting && await w(l.waiting, {
            type: "SKIP_WAITING"
        })
    }
    ;
    if ("serviceWorker"in navigator) {
        n = new R("/sw.js",{
            scope: "/",
            type: "classic"
        }),
        n.addEventListener("activated", s=>{
            s.isUpdate || r == null || r()
        }
        );
        {
            const s = ()=>{
                a == null || a()
            }
            ;
            n.addEventListener("waiting", s),
            n.addEventListener("externalwaiting", s)
        }
        n.register({
            immediate: i
        }).then(s=>{
            l = s,
            e == null || e(s)
        }
        ).catch(s=>{
            o == null || o(s)
        }
        )
    }
    return d
}
p();
const T = 60 * 60 * 1e3;
p({
    onRegistered(t) {
        t && setInterval(()=>{
            t.update()
        }
        , T)
    }
});
I(k, {
    target: document.body
}, "nigma-app");
