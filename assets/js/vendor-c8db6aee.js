var $t = Object.defineProperty
  , xt = Object.defineProperties;
var Et = Object.getOwnPropertyDescriptors;
var Le = Object.getOwnPropertySymbols;
var St = Object.prototype.hasOwnProperty
  , Rt = Object.prototype.propertyIsEnumerable;
var je = (e,t,n)=>t in e ? $t(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , x = (e,t)=>{
    for (var n in t || (t = {}))
        St.call(t, n) && je(e, n, t[n]);
    if (Le)
        for (var n of Le(t))
            Rt.call(t, n) && je(e, n, t[n]);
    return e
}
  , q = (e,t)=>xt(e, Et(t));
function zn(e, t={
    target: document.body
}, n="hmr", r="app-loaded") {
    const o = document.getElementById(n)
      , s = document.createElement("div");
    s.style.visibility = "hidden",
    t.target.appendChild(s),
    o ? addEventListener(r, c) : c();
    function c() {
        removeEventListener(r, c),
        o && o.remove(),
        s.style.visibility = null,
        s.setAttribute("id", n)
    }
    return new e(q(x({}, t), {
        target: s
    }))
}
function L() {}
function Ce(e, t) {
    for (const n in t)
        e[n] = t[n];
    return e
}
function Ie(e) {
    return e()
}
function Oe() {
    return Object.create(null)
}
function B(e) {
    e.forEach(Ie)
}
function me(e) {
    return typeof e == "function"
}
function z(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let ne;
function Te(e, t) {
    return ne || (ne = document.createElement("a")),
    ne.href = t,
    e === ne.href
}
function Lt(e) {
    return Object.keys(e).length === 0
}
function ge(e, ...t) {
    if (e == null)
        return L;
    const n = e.subscribe(...t);
    return n.unsubscribe ? ()=>n.unsubscribe() : n
}
function J(e) {
    let t;
    return ge(e, n=>t = n)(),
    t
}
function W(e, t, n) {
    e.$$.on_destroy.push(ge(t, n))
}
function jt(e, t, n, r) {
    if (e) {
        const o = Ae(e, t, n, r);
        return e[0](o)
    }
}
function Ae(e, t, n, r) {
    return e[1] && r ? Ce(n.ctx.slice(), e[1](r(t))) : n.ctx
}
function Ct(e, t, n, r) {
    if (e[2] && r) {
        const o = e[2](r(n));
        if (t.dirty === void 0)
            return o;
        if (typeof o == "object") {
            const s = []
              , c = Math.max(t.dirty.length, o.length);
            for (let i = 0; i < c; i += 1)
                s[i] = t.dirty[i] | o[i];
            return s
        }
        return t.dirty | o
    }
    return t.dirty
}
function It(e, t, n, r, o, s) {
    if (o) {
        const c = Ae(t, n, r, s);
        e.p(c, o)
    }
}
function Ot(e) {
    if (e.ctx.length > 32) {
        const t = []
          , n = e.ctx.length / 32;
        for (let r = 0; r < n; r++)
            t[r] = -1;
        return t
    }
    return -1
}
function Tt(e, t, n) {
    return e.set(n),
    t
}
function At(e) {
    return e && me(e.destroy) ? e.destroy : L
}
function Jn(e, t) {
    e.appendChild(t)
}
function j(e, t, n) {
    e.insertBefore(t, n || null)
}
function E(e) {
    e.parentNode.removeChild(e)
}
function _e(e) {
    return document.createElement(e)
}
function Me(e) {
    return document.createTextNode(e)
}
function ye() {
    return Me(" ")
}
function Q() {
    return Me("")
}
function Qn(e, t, n, r) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n, r)
}
function G(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function Mt(e) {
    return Array.from(e.childNodes)
}
function Gn(e, t) {
    t = "" + t,
    e.wholeText !== t && (e.data = t)
}
function Vn(e, t) {
    e.value = t == null ? "" : t
}
function Ne(e, t, n, r) {
    e.style.setProperty(t, n, r ? "important" : "")
}
let V;
function Z(e) {
    V = e
}
function re() {
    if (!V)
        throw new Error("Function called outside component initialization");
    return V
}
function Zn(e) {
    re().$$.on_mount.push(e)
}
function Nt(e) {
    re().$$.on_destroy.push(e)
}
function Ue(e, t) {
    re().$$.context.set(e, t)
}
function Fe(e) {
    return re().$$.context.get(e)
}
const X = []
  , qe = []
  , oe = []
  , Be = []
  , We = Promise.resolve();
let we = !1;
function He() {
    we || (we = !0,
    We.then(Ke))
}
function Ut() {
    return He(),
    We
}
function be(e) {
    oe.push(e)
}
const ve = new Set;
let se = 0;
function Ke() {
    const e = V;
    do {
        for (; se < X.length; ) {
            const t = X[se];
            se++,
            Z(t),
            Ft(t.$$)
        }
        for (Z(null),
        X.length = 0,
        se = 0; qe.length; )
            qe.pop()();
        for (let t = 0; t < oe.length; t += 1) {
            const n = oe[t];
            ve.has(n) || (ve.add(n),
            n())
        }
        oe.length = 0
    } while (X.length);
    for (; Be.length; )
        Be.pop()();
    we = !1,
    ve.clear(),
    Z(e)
}
function Ft(e) {
    if (e.fragment !== null) {
        e.update(),
        B(e.before_update);
        const t = e.dirty;
        e.dirty = [-1],
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(be)
    }
}
const ie = new Set;
let M;
function H() {
    M = {
        r: 0,
        c: [],
        p: M
    }
}
function K() {
    M.r || B(M.c),
    M = M.p
}
function w(e, t) {
    e && e.i && (ie.delete(e),
    e.i(t))
}
function P(e, t, n, r) {
    if (e && e.o) {
        if (ie.has(e))
            return;
        ie.add(e),
        M.c.push(()=>{
            ie.delete(e),
            r && (n && e.d(1),
            r())
        }
        ),
        e.o(t)
    }
}
function qt(e, t) {
    e.d(1),
    t.delete(e.key)
}
function Bt(e, t) {
    P(e, 1, 1, ()=>{
        t.delete(e.key)
    }
    )
}
function De(e, t, n, r, o, s, c, i, a, u, l, f) {
    let d = e.length
      , p = s.length
      , h = d;
    const g = {};
    for (; h--; )
        g[e[h].key] = h;
    const b = []
      , R = new Map
      , I = new Map;
    for (h = p; h--; ) {
        const y = f(o, s, h)
          , $ = n(y);
        let m = c.get($);
        m ? r && m.p(y, t) : (m = u($, y),
        m.c()),
        R.set($, b[h] = m),
        $in g && I.set($, Math.abs(h - g[$]))
    }
    const U = new Set
      , te = new Set;
    function F(y) {
        w(y, 1),
        y.m(i, l),
        c.set(y.key, y),
        l = y.first,
        p--
    }
    for (; d && p; ) {
        const y = b[p - 1]
          , $ = e[d - 1]
          , m = y.key
          , k = $.key;
        y === $ ? (l = y.first,
        d--,
        p--) : R.has(k) ? !c.has(m) || U.has(m) ? F(y) : te.has(k) ? d-- : I.get(m) > I.get(k) ? (te.add(m),
        F(y)) : (U.add(k),
        d--) : (a($, c),
        d--)
    }
    for (; d--; ) {
        const y = e[d];
        R.has(y.key) || a(y, c)
    }
    for (; p; )
        F(b[p - 1]);
    return b
}
function Wt(e, t) {
    const n = {}
      , r = {}
      , o = {
        $$scope: 1
    };
    let s = e.length;
    for (; s--; ) {
        const c = e[s]
          , i = t[s];
        if (i) {
            for (const a in c)
                a in i || (r[a] = 1);
            for (const a in i)
                o[a] || (n[a] = i[a],
                o[a] = 1);
            e[s] = i
        } else
            for (const a in c)
                o[a] = 1
    }
    for (const c in r)
        c in n || (n[c] = void 0);
    return n
}
function Ht(e) {
    return typeof e == "object" && e !== null ? e : {}
}
function N(e) {
    e && e.c()
}
function O(e, t, n, r) {
    const {fragment: o, on_mount: s, on_destroy: c, after_update: i} = e.$$;
    o && o.m(t, n),
    r || be(()=>{
        const a = s.map(Ie).filter(me);
        c ? c.push(...a) : B(a),
        e.$$.on_mount = []
    }
    ),
    i.forEach(be)
}
function T(e, t) {
    const n = e.$$;
    n.fragment !== null && (B(n.on_destroy),
    n.fragment && n.fragment.d(t),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function Kt(e, t) {
    e.$$.dirty[0] === -1 && (X.push(e),
    He(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function ce(e, t, n, r, o, s, c, i=[-1]) {
    const a = V;
    Z(e);
    const u = e.$$ = {
        fragment: null,
        ctx: null,
        props: s,
        update: L,
        not_equal: o,
        bound: Oe(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (a ? a.$$.context : [])),
        callbacks: Oe(),
        dirty: i,
        skip_bound: !1,
        root: t.target || a.$$.root
    };
    c && c(u.root);
    let l = !1;
    if (u.ctx = n ? n(e, t.props || {}, (f,d,...p)=>{
        const h = p.length ? p[0] : d;
        return u.ctx && o(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h),
        l && Kt(e, f)),
        d
    }
    ) : [],
    u.update(),
    l = !0,
    B(u.before_update),
    u.fragment = r ? r(u.ctx) : !1,
    t.target) {
        if (t.hydrate) {
            const f = Mt(t.target);
            u.fragment && u.fragment.l(f),
            f.forEach(E)
        } else
            u.fragment && u.fragment.c();
        t.intro && w(e.$$.fragment),
        O(e, t.target, t.anchor, t.customElement),
        Ke()
    }
    Z(a)
}
class ae {
    $destroy() {
        T(this, 1),
        this.$destroy = L
    }
    $on(t, n) {
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n),
        ()=>{
            const o = r.indexOf(n);
            o !== -1 && r.splice(o, 1)
        }
    }
    $set(t) {
        this.$$set && !Lt(t) && (this.$$.skip_bound = !0,
        this.$$set(t),
        this.$$.skip_bound = !1)
    }
}
var C = {
    queryHandler: {
        parse: e=>Dt(new URLSearchParams(e)),
        stringify: e=>"?" + new URLSearchParams(e).toString()
    },
    urlTransform: {
        apply: e=>e,
        remove: e=>e
    },
    useHash: !1
};
function Dt(e) {
    return [...e].reduce((t,[n,r])=>(t[n] = r,
    t), {})
}
const ze = RegExp(/\:([^/()]+)/g);
function zt(e, t) {
    if (navigator.userAgent.includes("jsdom"))
        return !1;
    t && Je(e),
    Jt()
}
function Jt() {
    if (navigator.userAgent.includes("jsdom"))
        return !1;
    const {hash: e} = window.location;
    if (e && /^[A-Za-z]+[\w\-\:\.]*$/.test(e.substring(1))) {
        const n = document.querySelector(e);
        n && n.scrollIntoView()
    }
}
function Je(e) {
    e && e.scrollTo && e.dataset.routify !== "scroll-lock" && e.dataset["routify-scroll"] !== "lock" && (e.style["scroll-behavior"] = "auto",
    e.scrollTo({
        top: 0,
        behavior: "auto"
    }),
    e.style["scroll-behavior"] = "",
    Je(e.parentElement))
}
const Qt = (e,t)=>{
    const n = t ? "" : "/?$";
    return e = e.replace(/\/_fallback?$/, "(/|$)"),
    e = e.replace(/\/index$/, "(/index)?"),
    e = e.replace(ze, "([^/]+)") + n,
    e = `^${e}`,
    e
}
  , Qe = e=>{
    const t = [];
    let n;
    for (; n = ze.exec(e); )
        t.push(n[1]);
    return t
}
  , Gt = ({path: e})=>e.split("/").filter(Boolean).map(t=>t === "_fallback" ? "A" : t.startsWith(":") ? "B" : "C").join("");
function ue(e, t) {
    ue._console = ue._console || {
        log: console.log,
        warn: console.warn
    };
    const {_console: n} = ue
      , r = e.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, e.component.shortPath.split("/").pop()).replace(/^./, s=>s.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D")
      , o = [`<${r}> received an unexpected slot "default".`, `<${r}> was created with unknown prop 'scoped'`, `<${r}> was created with unknown prop 'scopedSync'`];
    for (const s of ["log", "warn"])
        console[s] = (...c)=>{
            o.includes(c[0]) || n[s](...c)
        }
        ,
        t().then(()=>{
            console[s] = n[s]
        }
        )
}
function le() {
    let e = window.location.pathname + window.location.search + window.location.hash;
    const {url: t, options: n} = Vt(e)
      , r = Pe(t);
    return q(x({}, r), {
        options: n
    })
}
function Vt(e) {
    const [t,n] = e.split("__[[routify_url_options]]__")
      , r = JSON.parse(decodeURIComponent(n || "") || "{}");
    return window.routify = window.routify || {},
    window.routify.prefetched = r.prefetch,
    {
        url: t,
        options: r
    }
}
function Pe(e) {
    C.useHash && (e = e.replace(/.*#(.+)/, "$1"));
    const t = e.startsWith("/") ? window.location.origin : void 0
      , n = new URL(e,t)
      , r = n.pathname + n.search + n.hash;
    return {
        url: n,
        fullpath: r
    }
}
function fe(e, t, n) {
    const r = C.useHash ? "#" : "";
    let o;
    return o = Zt(e, t, n),
    o = C.urlTransform.apply(o),
    o = r + o,
    o
}
function Zt(e, t, n) {
    const r = Object.assign({}, n, t)
      , o = Xt(e, t);
    for (const [s,c] of Object.entries(r))
        e = e.replace(`:${s}`, c);
    return `${e}${o}`
}
function Xt(e, t) {
    if (!C.queryHandler)
        return "";
    const n = Qe(e)
      , r = {};
    return t && Object.entries(t).forEach(([o,s])=>{
        n.includes(o) || (r[o] = s)
    }
    ),
    C.queryHandler.stringify(r).replace(/\?$/, "")
}
function Yt(e) {
    let t;
    const n = e[2].default
      , r = jt(n, e, e[1], null);
    return {
        c() {
            r && r.c()
        },
        m(o, s) {
            r && r.m(o, s),
            t = !0
        },
        p(o, [s]) {
            r && r.p && (!t || s & 2) && It(r, n, o, o[1], t ? Ct(n, o[1], s, null) : Ot(o[1]), null)
        },
        i(o) {
            t || (w(r, o),
            t = !0)
        },
        o(o) {
            P(r, o),
            t = !1
        },
        d(o) {
            r && r.d(o)
        }
    }
}
function en(e, t, n) {
    let {$$slots: r={}, $$scope: o} = t
      , {scoped: s={}} = t;
    return e.$$set = c=>{
        "scoped"in c && n(0, s = c.scoped),
        "$$scope"in c && n(1, o = c.$$scope)
    }
    ,
    [s, o, r]
}
class tn extends ae {
    constructor(t) {
        super();
        ce(this, t, en, Yt, z, {
            scoped: 0
        })
    }
}
const D = [];
function nn(e, t) {
    return {
        subscribe: A(e, t).subscribe
    }
}
function A(e, t=L) {
    let n;
    const r = new Set;
    function o(i) {
        if (z(e, i) && (e = i,
        n)) {
            const a = !D.length;
            for (const u of r)
                u[1](),
                D.push(u, e);
            if (a) {
                for (let u = 0; u < D.length; u += 2)
                    D[u][0](D[u + 1]);
                D.length = 0
            }
        }
    }
    function s(i) {
        o(i(e))
    }
    function c(i, a=L) {
        const u = [i, a];
        return r.add(u),
        r.size === 1 && (n = t(o) || L),
        i(e),
        ()=>{
            r.delete(u),
            r.size === 0 && (n(),
            n = null)
        }
    }
    return {
        set: o,
        update: s,
        subscribe: c
    }
}
function ke(e, t, n) {
    const r = !Array.isArray(e)
      , o = r ? [e] : e
      , s = t.length < 2;
    return nn(n, c=>{
        let i = !1;
        const a = [];
        let u = 0
          , l = L;
        const f = ()=>{
            if (u)
                return;
            l();
            const p = t(r ? a[0] : a, c);
            s ? c(p) : l = me(p) ? p : L
        }
          , d = o.map((p,h)=>ge(p, g=>{
            a[h] = g,
            u &= ~(1 << h),
            i && f()
        }
        , ()=>{
            u |= 1 << h
        }
        ));
        return i = !0,
        f(),
        function() {
            B(d),
            l()
        }
    }
    )
}
window.routify = window.routify || {};
const Y = A(null)
  , de = A([]);
de.subscribe(e=>window.routify.routes = e);
let Ge = A({
    component: {
        params: {}
    }
});
const rn = A(null)
  , Ve = A(!0);
async function on({page: e, metatags: t, afterPageLoad: n, parentNode: r}) {
    const o = e.last !== e;
    setTimeout(()=>zt(r, o));
    const {path: s} = e
      , {options: c} = le()
      , i = c.prefetch;
    for (const a of n._hooks)
        a && await a(e.api);
    t.update(),
    dispatchEvent(new CustomEvent("app-loaded")),
    parent.postMessage({
        msg: "app-loaded",
        prefetched: window.routify.prefetched,
        path: s,
        prefetchId: i
    }, "*"),
    window.routify.appLoaded = !0,
    window.routify.stopAutoReady = !1
}
function $e(e, t=!1) {
    e = C.urlTransform.remove(e);
    let {pathname: n, search: r} = Pe(e).url;
    const o = J(de)
      , s = o.find(l=>n === l.meta.name) || o.find(l=>n.match(l.regex));
    if (!s)
        throw new Error(`Route could not be found for "${n}".`);
    const c = t ? Object.create(s) : s
      , {route: i, redirectPath: a, rewritePath: u} = Ze(c, o);
    return u && ({pathname: n, search: r} = Pe(fe(u, i.params)).url,
    a && (i.redirectTo = fe(a, i.params || {}))),
    C.queryHandler && (i.params = Object.assign({}, C.queryHandler.parse(r))),
    sn(i, n),
    i.leftover = e.replace(new RegExp(i.regex), ""),
    i
}
function sn(e, t) {
    if (e.paramKeys) {
        const n = cn(e.layouts)
          , r = t.split("/").filter(Boolean);
        an(e.path).forEach((s,c)=>{
            s && (e.params[s] = r[c],
            n[c] ? n[c].param = {
                [s]: r[c]
            } : e.param = {
                [s]: r[c]
            })
        }
        )
    }
}
function Ze(e, t, n, r) {
    const {redirect: o, rewrite: s} = e.meta;
    if (o || s) {
        n = o ? o.path || o : n,
        r = s ? s.path || s : n;
        const c = o && o.params
          , i = s && s.params
          , a = t.find(u=>u.path.replace(/\/index$/, "") === r);
        return a === e && console.error(`${r} is redirecting to itself`),
        a || console.error(`${e.path} is redirecting to non-existent path: ${r}`),
        (c || i) && (a.params = Object.assign({}, a.params, c, i)),
        Ze(a, t, n, r)
    }
    return {
        route: e,
        redirectPath: n,
        rewritePath: r
    }
}
function cn(e) {
    const t = [];
    return e.forEach(n=>{
        t[n.path.split("/").filter(Boolean).length - 1] = n
    }
    ),
    t
}
function an(e) {
    return e.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t && t[1])
}
function Xe(e, t, n) {
    const r = e.slice();
    return r[1] = t[n],
    r
}
function Ye(e, t) {
    let n, r;
    return {
        key: e,
        first: null,
        c() {
            n = _e("iframe"),
            Te(n.src, r = t[1].url) || G(n, "src", r),
            G(n, "frameborder", "0"),
            G(n, "title", "routify prefetcher"),
            this.first = n
        },
        m(o, s) {
            j(o, n, s)
        },
        p(o, s) {
            t = o,
            s & 1 && !Te(n.src, r = t[1].url) && G(n, "src", r)
        },
        d(o) {
            o && E(n)
        }
    }
}
function un(e) {
    let t, n = [], r = new Map, o = e[0];
    const s = c=>c[1].options.prefetch;
    for (let c = 0; c < o.length; c += 1) {
        let i = Xe(e, o, c)
          , a = s(i);
        r.set(a, n[c] = Ye(a, i))
    }
    return {
        c() {
            t = _e("div");
            for (let c = 0; c < n.length; c += 1)
                n[c].c();
            G(t, "id", "__routify_iframes"),
            Ne(t, "display", "none")
        },
        m(c, i) {
            j(c, t, i);
            for (let a = 0; a < n.length; a += 1)
                n[a].m(t, null)
        },
        p(c, [i]) {
            i & 1 && (o = c[0],
            n = De(n, i, s, 1, c, o, r, t, qt, Ye, null, Xe))
        },
        i: L,
        o: L,
        d(c) {
            c && E(t);
            for (let i = 0; i < n.length; i += 1)
                n[i].d()
        }
    }
}
const ln = 2
  , xe = A([])
  , et = ke(xe, e=>e.slice(0, ln));
et.subscribe(e=>e.forEach(({options: t})=>{
    setTimeout(()=>tt(t.prefetch), t.timeout)
}
));
function tt(e) {
    const t = e.data ? e.data.prefetchId : e;
    if (!t)
        return null;
    const n = J(xe).find(r=>r && r.options.prefetch == t);
    if (n) {
        const {gracePeriod: r} = n.options
          , o = new Promise(c=>setTimeout(c, r))
          , s = new Promise(c=>{
            window.requestIdleCallback ? window.requestIdleCallback(c) : setTimeout(c, r + 1e3)
        }
        );
        Promise.all([o, s]).then(()=>{
            xe.update(c=>c.filter(i=>i.options.prefetch != t))
        }
        )
    }
}
addEventListener("message", tt, !1);
function fn(e, t, n) {
    let r;
    return W(e, et, o=>n(0, r = o)),
    [r]
}
class dn extends ae {
    constructor(t) {
        super();
        ce(this, t, fn, un, z, {})
    }
}
function Ee() {
    return Fe("routify") || Ge
}
const pn = {
    _hooks: [e=>Ve.set(!1)],
    subscribe: nt
}
  , hn = {
    _hooks: [],
    subscribe: nt
};
function nt(e) {
    const t = this._hooks
      , n = t.length;
    return e(r=>{
        t[n] = r
    }
    ),
    (...r)=>{
        delete t[n],
        e(...r)
    }
}
const Xn = {
    subscribe(e) {
        const t = Ee();
        return ke(t, n=>n.route.params).subscribe(e)
    }
}
  , Yn = {
    subscribe(e) {
        const t = Ee();
        return ke(t, n=>mn(n, n.route, n.routes)).subscribe(e)
    }
};
function mn(e, t, n) {
    return function(o, s={}, c) {
        const {component: i} = e
          , a = Object.assign({}, t.params, i.params);
        let u = o && o.nodeType && o;
        u && (o = o.getAttribute("href")),
        o = o ? p(o) : i.shortPath;
        const l = n.find(h=>[h.shortPath || "/", h.path].includes(o));
        if (l && l.meta.preload === "proximity" && window.requestIdleCallback) {
            const h = routify.appLoaded ? 0 : 1500;
            setTimeout(()=>{
                window.requestIdleCallback(()=>l.api.preload())
            }
            , h)
        }
        c && c.strict !== !1 || (o = o.replace(/index$/, ""));
        let d = fe(o, s, a);
        if (u)
            return u.href = d,
            {
                update(h) {
                    u.href = fe(o, h, a)
                }
            };
        return d;
        function p(h) {
            if (h.match(/^\.\.?\//)) {
                let[,g,b] = h.match(/^([\.\/]+)(.*)/)
                  , R = i.path.replace(/\/$/, "");
                const I = g.match(/\.\.\//g) || [];
                i.isPage && I.push(null),
                I.forEach(()=>R = R.replace(/\/[^\/]+\/?$/, "")),
                h = `${R}/${b}`.replace(/\/$/, ""),
                h = h || "/"
            } else if (!h.match(/^\//)) {
                const g = n.find(b=>b.meta.name === h);
                g && (h = g.shortPath)
            }
            return h
        }
    }
}
const v = {
    subscribe(e) {
        return this._origin = this.getOrigin(),
        e(pe)
    },
    props: {},
    templates: {},
    services: {
        plain: {
            propField: "name",
            valueField: "content"
        },
        twitter: {
            propField: "name",
            valueField: "content"
        },
        og: {
            propField: "property",
            valueField: "content"
        }
    },
    plugins: [{
        name: "applyTemplate",
        condition: ()=>!0,
        action: (e,t)=>{
            const n = v.getLongest(v.templates, e) || (r=>r);
            return [e, n(t)]
        }
    }, {
        name: "createMeta",
        condition: ()=>!0,
        action(e, t) {
            v.writeMeta(e, t)
        }
    }, {
        name: "createOG",
        condition: e=>!e.match(":"),
        action(e, t) {
            v.writeMeta(`og:${e}`, t)
        }
    }, {
        name: "createTitle",
        condition: e=>e === "title",
        action(e, t) {
            document.title = t
        }
    }],
    getLongest(e, t) {
        const n = e[t];
        if (n) {
            const r = J(Y).path
              , c = Object.keys(e[t]).filter(i=>r.includes(i)).sort((i,a)=>a.length - i.length)[0];
            return n[c]
        }
    },
    writeMeta(e, t) {
        const n = document.getElementsByTagName("head")[0]
          , r = e.match(/(.+)\:/)
          , o = r && r[1] || "plain"
          , {propField: s, valueField: c} = pe.services[o] || pe.services.plain
          , i = document.querySelector(`meta[${s}='${e}']`);
        i && i.remove();
        const a = document.createElement("meta");
        a.setAttribute(s, e),
        a.setAttribute(c, t),
        a.setAttribute("data-origin", "routify"),
        n.appendChild(a)
    },
    set(e, t) {
        typeof e == "string" && v.plugins.forEach(n=>{
            n.condition(e, t) && ([e,t] = n.action(e, t) || [e, t])
        }
        )
    },
    clear() {
        const e = document.querySelector("meta");
        e && e.remove()
    },
    template(e, t) {
        const n = v.getOrigin;
        v.templates[e] = v.templates[e] || {},
        v.templates[e][n] = t
    },
    update() {
        Object.keys(v.props).forEach(e=>{
            let t = v.getLongest(v.props, e);
            v.plugins.forEach(n=>{
                n.condition(e, t) && ([e,t] = n.action(e, t) || [e, t])
            }
            )
        }
        )
    },
    batchedUpdate() {
        v._pendingUpdate || (v._pendingUpdate = !0,
        setTimeout(()=>{
            v._pendingUpdate = !1,
            this.update()
        }
        ))
    },
    _updateQueued: !1,
    _origin: !1,
    getOrigin() {
        if (this._origin)
            return this._origin;
        const e = Ee();
        return e && J(e).path || "/"
    },
    _pendingUpdate: !1
}
  , pe = new Proxy(v,{
    set(e, t, n, r) {
        const {props: o} = e;
        return Reflect.has(e, t) ? Reflect.set(e, t, n, r) : (o[t] = o[t] || {},
        o[t][e.getOrigin()] = n),
        window.routify.appLoaded && e.batchedUpdate(),
        !0
    }
});
function rt(e, t, n) {
    const r = e.slice();
    return r[21] = t[n].component,
    r[22] = t[n].componentFile,
    r[2] = t[n].decorator,
    r[1] = t[n].nodes,
    r
}
function ot(e) {
    let t = [], n = new Map, r, o, s = [e[4]];
    const c = i=>i[7];
    for (let i = 0; i < 1; i += 1) {
        let a = rt(e, s, i)
          , u = c(a);
        n.set(u, t[i] = it(u, a))
    }
    return {
        c() {
            for (let i = 0; i < 1; i += 1)
                t[i].c();
            r = Q()
        },
        m(i, a) {
            for (let u = 0; u < 1; u += 1)
                t[u].m(i, a);
            j(i, r, a),
            o = !0
        },
        p(i, a) {
            a & 33554621 && (s = [i[4]],
            H(),
            t = De(t, a, c, 1, i, s, n, r.parentNode, Bt, it, r, rt),
            K())
        },
        i(i) {
            if (!o) {
                for (let a = 0; a < 1; a += 1)
                    w(t[a]);
                o = !0
            }
        },
        o(i) {
            for (let a = 0; a < 1; a += 1)
                P(t[a]);
            o = !1
        },
        d(i) {
            for (let a = 0; a < 1; a += 1)
                t[a].d(i);
            i && E(r)
        }
    }
}
function st(e) {
    let t, n;
    return t = new at({
        props: {
            decorator: e[2],
            nodes: e[1],
            scoped: x(x({}, e[0]), e[25])
        }
    }),
    {
        c() {
            N(t.$$.fragment)
        },
        m(r, o) {
            O(t, r, o),
            n = !0
        },
        p(r, o) {
            const s = {};
            o & 4 && (s.decorator = r[2]),
            o & 16 && (s.nodes = r[1]),
            o & 33554433 && (s.scoped = x(x({}, r[0]), r[25])),
            t.$set(s)
        },
        i(r) {
            n || (w(t.$$.fragment, r),
            n = !0)
        },
        o(r) {
            P(t.$$.fragment, r),
            n = !1
        },
        d(r) {
            T(t, r)
        }
    }
}
function gn(e) {
    let t, n, r = e[21] && e[1].length && st(e);
    return {
        c() {
            r && r.c(),
            t = Q()
        },
        m(o, s) {
            r && r.m(o, s),
            j(o, t, s),
            n = !0
        },
        p(o, s) {
            o[21] && o[1].length ? r ? (r.p(o, s),
            s & 16 && w(r, 1)) : (r = st(o),
            r.c(),
            w(r, 1),
            r.m(t.parentNode, t)) : r && (H(),
            P(r, 1, 1, ()=>{
                r = null
            }
            ),
            K())
        },
        i(o) {
            n || (w(r),
            n = !0)
        },
        o(o) {
            P(r),
            n = !1
        },
        d(o) {
            r && r.d(o),
            o && E(t)
        }
    }
}
function _n(e) {
    let t, n, r;
    const o = [{
        scoped: e[0]
    }, {
        scopedSync: e[5]
    }, e[3].param || {}];
    var s = e[22];
    function c(i) {
        let a = {
            $$slots: {
                default: [gn, ({scoped: u, decorator: l})=>({
                    25: u,
                    2: l
                }), ({scoped: u, decorator: l})=>(u ? 33554432 : 0) | (l ? 4 : 0)]
            },
            $$scope: {
                ctx: i
            }
        };
        for (let u = 0; u < o.length; u += 1)
            a = Ce(a, o[u]);
        return {
            props: a
        }
    }
    return s && (t = new s(c(e))),
    {
        c() {
            t && N(t.$$.fragment),
            n = ye()
        },
        m(i, a) {
            t && O(t, i, a),
            j(i, n, a),
            r = !0
        },
        p(i, a) {
            const u = a & 41 ? Wt(o, [a & 1 && {
                scoped: i[0]
            }, a & 32 && {
                scopedSync: i[5]
            }, a & 8 && Ht(i[3].param || {})]) : {};
            if (a & 100663317 && (u.$$scope = {
                dirty: a,
                ctx: i
            }),
            s !== (s = i[22])) {
                if (t) {
                    H();
                    const l = t;
                    P(l.$$.fragment, 1, 0, ()=>{
                        T(l, 1)
                    }
                    ),
                    K()
                }
                s ? (t = new s(c(i)),
                N(t.$$.fragment),
                w(t.$$.fragment, 1),
                O(t, n.parentNode, n)) : t = null
            } else
                s && t.$set(u)
        },
        i(i) {
            r || (t && w(t.$$.fragment, i),
            r = !0)
        },
        o(i) {
            t && P(t.$$.fragment, i),
            r = !1
        },
        d(i) {
            t && T(t, i),
            i && E(n)
        }
    }
}
function it(e, t) {
    let n, r, o, s;
    var c = t[2];
    function i(a) {
        return {
            props: {
                scoped: a[0],
                $$slots: {
                    default: [_n]
                },
                $$scope: {
                    ctx: a
                }
            }
        }
    }
    return c && (r = new c(i(t))),
    {
        key: e,
        first: null,
        c() {
            n = Q(),
            r && N(r.$$.fragment),
            o = Q(),
            this.first = n
        },
        m(a, u) {
            j(a, n, u),
            r && O(r, a, u),
            j(a, o, u),
            s = !0
        },
        p(a, u) {
            t = a;
            const l = {};
            if (u & 1 && (l.scoped = t[0]),
            u & 67108925 && (l.$$scope = {
                dirty: u,
                ctx: t
            }),
            c !== (c = t[2])) {
                if (r) {
                    H();
                    const f = r;
                    P(f.$$.fragment, 1, 0, ()=>{
                        T(f, 1)
                    }
                    ),
                    K()
                }
                c ? (r = new c(i(t)),
                N(r.$$.fragment),
                w(r.$$.fragment, 1),
                O(r, o.parentNode, o)) : r = null
            } else
                c && r.$set(l)
        },
        i(a) {
            s || (r && w(r.$$.fragment, a),
            s = !0)
        },
        o(a) {
            r && P(r.$$.fragment, a),
            s = !1
        },
        d(a) {
            a && E(n),
            a && E(o),
            r && T(r, a)
        }
    }
}
function ct(e) {
    let t, n, r, o;
    return {
        c() {
            t = _e("div"),
            Ne(t, "display", "contents")
        },
        m(s, c) {
            j(s, t, c),
            r || (o = At(n = e[10].call(null, t)),
            r = !0)
        },
        d(s) {
            s && E(t),
            r = !1,
            o()
        }
    }
}
function yn(e) {
    let t, n, r, o = e[4] && ot(e), s = !e[6] && ct(e);
    return {
        c() {
            o && o.c(),
            t = ye(),
            s && s.c(),
            n = Q()
        },
        m(c, i) {
            o && o.m(c, i),
            j(c, t, i),
            s && s.m(c, i),
            j(c, n, i),
            r = !0
        },
        p(c, [i]) {
            c[4] ? o ? (o.p(c, i),
            i & 16 && w(o, 1)) : (o = ot(c),
            o.c(),
            w(o, 1),
            o.m(t.parentNode, t)) : o && (H(),
            P(o, 1, 1, ()=>{
                o = null
            }
            ),
            K()),
            c[6] ? s && (s.d(1),
            s = null) : s || (s = ct(c),
            s.c(),
            s.m(n.parentNode, n))
        },
        i(c) {
            r || (w(o),
            r = !0)
        },
        o(c) {
            P(o),
            r = !1
        },
        d(c) {
            o && o.d(c),
            c && E(t),
            s && s.d(c),
            c && E(n)
        }
    }
}
function wn(e, t, n) {
    let r, o, s, c, i;
    W(e, Y, m=>n(14, s = m)),
    W(e, de, m=>n(16, i = m));
    let {nodes: a=[]} = t, {scoped: u={}} = t, {decorator: l=void 0} = t, f = null, d = null, p = {}, h, g = 1;
    const b = A(null);
    W(e, b, m=>n(4, o = m));
    const R = Fe("routify") || Ge;
    W(e, R, m=>n(15, c = m));
    const I = m=>n(6, h = m.parentNode);
    Ue("routify", b);
    let U = [];
    function te(m) {
        let k = m.component();
        k instanceof Promise ? k.then(F) : F(k)
    }
    function F(m) {
        n(5, p = x({}, u));
        const k = q(x({}, o), {
            nodes: d,
            decorator: l || tn,
            layout: f.isLayout ? f : c.layout,
            component: f,
            route: s,
            routes: i,
            componentFile: m,
            parentNode: h || c.parentNode
        });
        b.set(k),
        Tt(R, c.child = f, c),
        d.length === 0 && y()
    }
    async function y() {
        await new Promise(k=>setTimeout(k));
        const m = o.component.path === s.path;
        !window.routify.stopAutoReady && m && on({
            page: o.component,
            metatags: pe,
            afterPageLoad: pn,
            parentNode: h
        })
    }
    function $({meta: m, path: k, param: Pt, params: kt}) {
        return JSON.stringify({
            path: k,
            invalidate: g,
            param: (m["param-is-page"] || m["slug-is-page"]) && Pt,
            queryParams: m["query-params-is-page"] && kt
        })
    }
    return e.$$set = m=>{
        "nodes"in m && n(1, a = m.nodes),
        "scoped"in m && n(0, u = m.scoped),
        "decorator"in m && n(2, l = m.decorator)
    }
    ,
    e.$$.update = ()=>{
        e.$$.dirty & 6146 && U !== a && (n(12, U = a),
        n(3, [f,...d] = [...a], f),
        n(3, f.api.reset = ()=>n(11, g++, g), f)),
        e.$$.dirty & 8 && te(f),
        e.$$.dirty & 2064 && n(7, r = o && g && $(o.component)),
        e.$$.dirty & 16 && o && ue(o, Ut)
    }
    ,
    [u, a, l, f, o, p, h, r, b, R, I, g, U]
}
class at extends ae {
    constructor(t) {
        super();
        ce(this, t, wn, yn, z, {
            nodes: 1,
            scoped: 0,
            decorator: 2
        })
    }
}
function bn(e, t) {
    let n = !1;
    function r(s, c) {
        const i = s || le().fullpath
          , a = $e(i);
        a.redirectTo && (history.replaceStateNative({}, null, a.redirectTo),
        delete a.redirectTo);
        const f = [...(c && $e(le().fullpath, e) || a).layouts, a];
        n && delete n.last,
        a.last = n,
        n = a,
        s || rn.set(a),
        Y.set(a),
        a.api.preload().then(()=>{
            Ve.set(!0),
            t(f)
        }
        )
    }
    const o = vn(r);
    return {
        updatePage: r,
        destroy: o
    }
}
function vn(e) {
    ["pushState", "replaceState"].forEach(o=>{
        history[o + "Native"] || (history[o + "Native"] = history[o]),
        history[o] = async function(s={}, c, i) {
            const a = location.pathname + location.search + location.hash;
            if (i === a)
                return !1;
            const {id: u, path: l, params: f} = J(Y);
            s = x({
                id: u,
                path: l,
                params: f
            }, s);
            const d = new Event(o.toLowerCase());
            if (Object.assign(d, {
                state: s,
                title: c,
                url: i
            }),
            await ut(d, i))
                return history[o + "Native"].apply(this, [s, c, i]),
                dispatchEvent(d)
        }
    }
    );
    let t = !1;
    const n = {
        click: Pn,
        pushstate: ()=>e(),
        replacestate: ()=>e(),
        popstate: async o=>{
            t ? t = !1 : await ut(o, le().fullpath) ? e() : (t = !0,
            o.preventDefault(),
            history.go(1))
        }
    };
    return Object.entries(n).forEach(o=>addEventListener(...o)),
    ()=>{
        Object.entries(n).forEach(o=>removeEventListener(...o))
    }
}
function Pn(e) {
    const t = e.target.closest("a")
      , n = t && t.href;
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button || e.defaultPrevented || !n || t.target || t.host !== location.host)
        return;
    const r = new URL(n)
      , o = r.pathname + r.search + r.hash;
    e.preventDefault(),
    history.pushState({}, "", o)
}
async function ut(e, t) {
    const n = $e(t).api;
    for (const r of hn._hooks.filter(Boolean))
        if (!await r(e, n, {
            url: t
        }))
            return !1;
    return !0
}
function lt(e) {
    let t, n;
    return t = new at({
        props: {
            nodes: e[0]
        }
    }),
    {
        c() {
            N(t.$$.fragment)
        },
        m(r, o) {
            O(t, r, o),
            n = !0
        },
        p(r, o) {
            const s = {};
            o & 1 && (s.nodes = r[0]),
            t.$set(s)
        },
        i(r) {
            n || (w(t.$$.fragment, r),
            n = !0)
        },
        o(r) {
            P(t.$$.fragment, r),
            n = !1
        },
        d(r) {
            T(t, r)
        }
    }
}
function kn(e) {
    let t, n, r, o = e[0] && e[1] !== null && lt(e);
    return n = new dn({}),
    {
        c() {
            o && o.c(),
            t = ye(),
            N(n.$$.fragment)
        },
        m(s, c) {
            o && o.m(s, c),
            j(s, t, c),
            O(n, s, c),
            r = !0
        },
        p(s, [c]) {
            s[0] && s[1] !== null ? o ? (o.p(s, c),
            c & 3 && w(o, 1)) : (o = lt(s),
            o.c(),
            w(o, 1),
            o.m(t.parentNode, t)) : o && (H(),
            P(o, 1, 1, ()=>{
                o = null
            }
            ),
            K())
        },
        i(s) {
            r || (w(o),
            w(n.$$.fragment, s),
            r = !0)
        },
        o(s) {
            P(o),
            P(n.$$.fragment, s),
            r = !1
        },
        d(s) {
            o && o.d(s),
            s && E(t),
            T(n, s)
        }
    }
}
function $n(e, t, n) {
    let r;
    W(e, Y, p=>n(1, r = p));
    let {routes: o} = t, {config: s={}} = t, c, i;
    window.routify = window.routify || {},
    window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"),
    Object.assign(C, s),
    Ue("routifyupdatepage", (...p)=>i && i.updatePage(...p));
    const u = p=>n(0, c = p)
      , l = ()=>{
        !i || (i.destroy(),
        i = null)
    }
    ;
    let f = null;
    const d = ()=>{
        clearTimeout(f),
        f = setTimeout(()=>{
            l(),
            i = bn(o, u),
            de.set(o),
            i.updatePage()
        }
        )
    }
    ;
    return Nt(l),
    e.$$set = p=>{
        "routes"in p && n(2, o = p.routes),
        "config"in p && n(3, s = p.config)
    }
    ,
    e.$$.update = ()=>{
        e.$$.dirty & 4 && o && d()
    }
    ,
    [c, r, o, s]
}
class er extends ae {
    constructor(t) {
        super();
        ce(this, t, $n, kn, z, {
            routes: 2,
            config: 3
        })
    }
}
function S(e) {
    const t = async function(r) {
        return await ft(e, {
            file: r.tree,
            state: {
                treePayload: r
            },
            scope: {}
        })
    };
    return t.sync = function(r) {
        return dt(e, {
            file: r.tree,
            state: {
                treePayload: r
            },
            scope: {}
        })
    }
    ,
    t
}
async function ft(e, t) {
    const n = await e(t);
    if (n === !1)
        return !1;
    const r = n || t.file;
    if (r.children) {
        const o = await Promise.all(r.children.map(async s=>ft(e, {
            state: t.state,
            scope: pt(t.scope || {}),
            parent: t.file,
            file: await s
        })));
        r.children = o.filter(Boolean)
    }
    return r
}
function dt(e, t) {
    const n = e(t);
    if (n === !1)
        return !1;
    const r = n || t.file;
    if (r.children) {
        const o = r.children.map(s=>dt(e, {
            state: t.state,
            scope: pt(t.scope || {}),
            parent: t.file,
            file: s
        }));
        r.children = o.filter(Boolean)
    }
    return r
}
function pt(e) {
    return JSON.parse(JSON.stringify(e))
}
const xn = S(({file: e})=>{
    (e.isPage || e.isFallback) && (e.regex = Qt(e.path, e.isFallback))
}
)
  , En = S(({file: e})=>{
    e.paramKeys = Qe(e.path)
}
)
  , Sn = S(({file: e})=>{
    e.isFallback || e.isIndex ? e.shortPath = e.path.replace(/\/[^/]+$/, "") : e.shortPath = e.path
}
)
  , Rn = S(({file: e})=>{
    e.ranking = Gt(e)
}
)
  , Ln = S(({file: e})=>{
    const t = e
      , n = e.meta && e.meta.children || [];
    n.length && (t.children = t.children || [],
    t.children.push(...n.map(r=>q(x({
        isMeta: !0
    }, r), {
        meta: r
    }))))
}
)
  , jn = S(e=>{
    const {file: t} = e
      , {isFallback: n, meta: r} = t
      , o = t.path.split("/").pop().startsWith(":")
      , s = t.path.endsWith("/index")
      , c = r.index || r.index === 0
      , i = r.index === !1;
    t.isIndexable = c || !n && !o && !s && !i,
    t.isNonIndexable = !t.isIndexable
}
)
  , Cn = S(({file: e, parent: t})=>{
    Object.defineProperty(e, "parent", {
        get: ()=>t
    }),
    Object.defineProperty(e, "nextSibling", {
        get: ()=>mt(e, 1)
    }),
    Object.defineProperty(e, "prevSibling", {
        get: ()=>mt(e, -1)
    }),
    Object.defineProperty(e, "lineage", {
        get: ()=>ht(t)
    })
}
);
function ht(e, t=[]) {
    return e && (t.unshift(e),
    ht(e.parent, t)),
    t
}
function mt(e, t) {
    if (!e.root) {
        const n = e.parent.children.filter(o=>o.isIndexable)
          , r = n.indexOf(e);
        return n[r + t]
    }
}
const In = S(({file: e, parent: t})=>{
    e.isIndex && Object.defineProperty(t, "index", {
        get: ()=>e
    })
}
)
  , On = S(({file: e, scope: t})=>{
    Object.defineProperty(e, "layouts", {
        get: ()=>n(e)
    });
    function n(r) {
        if (!r.isLayout && r.meta.reset)
            return [];
        const {parent: o} = r
          , s = o && o.component && o
          , c = s && (s.isReset || s.meta.reset)
          , i = o && !c && n(o) || [];
        return s && i.push(s),
        i
    }
}
)
  , Tn = e=>{
    S(t=>{
        (t.file.isPage || t.file.isFallback) && t.state.treePayload.routes.push(t.file)
    }
    ).sync(e),
    e.routes.sort((t,n)=>t.ranking >= n.ranking ? -1 : 1)
}
  , An = S(({file: e})=>{
    const t = e.root ? a : e.children ? e.isPage ? c : r : e.isReset ? i : e.isLayout ? n : e.isFallback ? o : s;
    Object.setPrototypeOf(e, t.prototype);
    function n() {}
    function r() {}
    function o() {}
    function s() {}
    function c() {}
    function i() {}
    function a() {}
}
);
var Mn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    setRegex: xn,
    setParamKeys: En,
    setShortPath: Sn,
    setRank: Rn,
    addMetaChildren: Ln,
    setIsIndexable: jn,
    assignRelations: Cn,
    assignIndex: In,
    assignLayout: On,
    createFlatList: Tn,
    setPrototype: An
});
const Nn = {
    isDir: !1,
    ext: "svelte",
    isLayout: !1,
    isReset: !1,
    isIndex: !1,
    isFallback: !1,
    isPage: !1,
    ownMeta: {},
    meta: {
        recursive: !0,
        preload: !1,
        prerender: !0
    },
    id: "__fallback"
};
function gt(e) {
    return Object.entries(Nn).forEach(([t,n])=>{
        typeof e[t] == "undefined" && (e[t] = n)
    }
    ),
    e.children && (e.children = e.children.map(gt)),
    e
}
const Un = S(({file: e})=>{
    e.api = new Fn(e)
}
);
class Fn {
    constructor(t) {
        this.__file = t,
        Object.defineProperty(this, "__file", {
            enumerable: !1
        }),
        this.isMeta = !!t.isMeta,
        this.path = t.path,
        this.title = qn(t),
        this.meta = t.meta
    }
    get parent() {
        return !this.__file.root && this.__file.parent.api
    }
    get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter(t=>!t.isNonIndexable).sort((t,n)=>t.isMeta && n.isMeta ? 0 : (t = (t.meta.index || t.meta.title || t.path).toString(),
        n = (n.meta.index || n.meta.title || n.path).toString(),
        t.localeCompare(n, void 0, {
            numeric: !0,
            sensitivity: "base"
        }))).map(({api: t})=>t)
    }
    get next() {
        return _t(this, 1)
    }
    get prev() {
        return _t(this, -1)
    }
    async preload() {
        const t = [...this.__file.layouts, this.__file, this.index && this.index.__file].filter(Boolean).map(n=>n.component());
        await Promise.all(t)
    }
    get component() {
        return this.__file.component ? this.__file.component() : this.__file.index ? this.__file.index.component() : !1
    }
    get componentWithIndex() {
        return new Promise(t=>Promise.all([this.component, this.index && this.index.component]).then(n=>t(n)))
    }
    get index() {
        const t = this.__file.children && this.__file.children.find(n=>n.isIndex);
        return t && t.api
    }
}
function _t(e, t) {
    if (!e.__file.root) {
        const r = e.parent.children.indexOf(e);
        return e.parent.children[r + t]
    }
}
function qn(e) {
    return typeof e.meta.title != "undefined" ? e.meta.title : (e.shortPath || e.path).split("/").pop().replace(/-/g, " ")
}
const yt = q(x({}, Mn), {
    restoreDefaults: ({tree: e})=>gt(e),
    assignAPI: Un
});
function tr(e) {
    const t = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"]
      , n = {
        tree: e,
        routes: []
    };
    for (let r of t)
        (yt[r].sync || yt[r])(n);
    return n
}
try {
    self["workbox:window:6.5.2"] && _()
} catch {}
function wt(e, t) {
    return new Promise(function(n) {
        var r = new MessageChannel;
        r.port1.onmessage = function(o) {
            n(o.data)
        }
        ,
        e.postMessage(t, [r.port2])
    }
    )
}
function Bn(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function bt(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Wn(e, t) {
    var n;
    if (typeof Symbol == "undefined" || e[Symbol.iterator] == null) {
        if (Array.isArray(e) || (n = function(o, s) {
            if (o) {
                if (typeof o == "string")
                    return bt(o, s);
                var c = Object.prototype.toString.call(o).slice(8, -1);
                return c === "Object" && o.constructor && (c = o.constructor.name),
                c === "Map" || c === "Set" ? Array.from(o) : c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? bt(o, s) : void 0
            }
        }(e)) || t && e && typeof e.length == "number") {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    return (n = e[Symbol.iterator]()).next.bind(n)
}
try {
    self["workbox:core:6.5.2"] && _()
} catch {}
var Se = function() {
    var e = this;
    this.promise = new Promise(function(t, n) {
        e.resolve = t,
        e.reject = n
    }
    )
};
function Re(e, t) {
    var n = location.href;
    return new URL(e,n).href === new URL(t,n).href
}
var ee = function(e, t) {
    this.type = e,
    Object.assign(this, t)
};
function he(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)),
    t ? e.then(t) : e)
}
function Hn() {}
var Kn = {
    type: "SKIP_WAITING"
};
function vt(e, t) {
    if (!t)
        return e && e.then ? e.then(Hn) : Promise.resolve()
}
var nr = function(e) {
    var t, n;
    function r(i, a) {
        var u, l;
        return a === void 0 && (a = {}),
        (u = e.call(this) || this).nn = {},
        u.tn = 0,
        u.rn = new Se,
        u.en = new Se,
        u.on = new Se,
        u.un = 0,
        u.an = new Set,
        u.cn = function() {
            var f = u.fn
              , d = f.installing;
            u.tn > 0 || !Re(d.scriptURL, u.sn.toString()) || performance.now() > u.un + 6e4 ? (u.vn = d,
            f.removeEventListener("updatefound", u.cn)) : (u.hn = d,
            u.an.add(d),
            u.rn.resolve(d)),
            ++u.tn,
            d.addEventListener("statechange", u.ln)
        }
        ,
        u.ln = function(f) {
            var d = u.fn
              , p = f.target
              , h = p.state
              , g = p === u.vn
              , b = {
                sw: p,
                isExternal: g,
                originalEvent: f
            };
            !g && u.mn && (b.isUpdate = !0),
            u.dispatchEvent(new ee(h,b)),
            h === "installed" ? u.wn = self.setTimeout(function() {
                h === "installed" && d.waiting === p && u.dispatchEvent(new ee("waiting",b))
            }, 200) : h === "activating" && (clearTimeout(u.wn),
            g || u.en.resolve(p))
        }
        ,
        u.dn = function(f) {
            var d = u.hn
              , p = d !== navigator.serviceWorker.controller;
            u.dispatchEvent(new ee("controlling",{
                isExternal: p,
                originalEvent: f,
                sw: d,
                isUpdate: u.mn
            })),
            p || u.on.resolve(d)
        }
        ,
        u.gn = (l = function(f) {
            var d = f.data
              , p = f.ports
              , h = f.source;
            return he(u.getSW(), function() {
                u.an.has(h) && u.dispatchEvent(new ee("message",{
                    data: d,
                    originalEvent: f,
                    ports: p,
                    sw: h
                }))
            })
        }
        ,
        function() {
            for (var f = [], d = 0; d < arguments.length; d++)
                f[d] = arguments[d];
            try {
                return Promise.resolve(l.apply(this, f))
            } catch (p) {
                return Promise.reject(p)
            }
        }
        ),
        u.sn = i,
        u.nn = a,
        navigator.serviceWorker.addEventListener("message", u.gn),
        u
    }
    n = e,
    (t = r).prototype = Object.create(n.prototype),
    t.prototype.constructor = t,
    t.__proto__ = n;
    var o, s, c = r.prototype;
    return c.register = function(i) {
        var a = (i === void 0 ? {} : i).immediate
          , u = a !== void 0 && a;
        try {
            var l = this;
            return function(f, d) {
                var p = f();
                return p && p.then ? p.then(d) : d(p)
            }(function() {
                if (!u && document.readyState !== "complete")
                    return vt(new Promise(function(f) {
                        return window.addEventListener("load", f)
                    }
                    ))
            }, function() {
                return l.mn = Boolean(navigator.serviceWorker.controller),
                l.yn = l.pn(),
                he(l.bn(), function(f) {
                    l.fn = f,
                    l.yn && (l.hn = l.yn,
                    l.en.resolve(l.yn),
                    l.on.resolve(l.yn),
                    l.yn.addEventListener("statechange", l.ln, {
                        once: !0
                    }));
                    var d = l.fn.waiting;
                    return d && Re(d.scriptURL, l.sn.toString()) && (l.hn = d,
                    Promise.resolve().then(function() {
                        l.dispatchEvent(new ee("waiting",{
                            sw: d,
                            wasWaitingBeforeRegister: !0
                        }))
                    }).then(function() {})),
                    l.hn && (l.rn.resolve(l.hn),
                    l.an.add(l.hn)),
                    l.fn.addEventListener("updatefound", l.cn),
                    navigator.serviceWorker.addEventListener("controllerchange", l.dn),
                    l.fn
                })
            })
        } catch (f) {
            return Promise.reject(f)
        }
    }
    ,
    c.update = function() {
        try {
            return this.fn ? vt(this.fn.update()) : void 0
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    c.getSW = function() {
        return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise
    }
    ,
    c.messageSW = function(i) {
        try {
            return he(this.getSW(), function(a) {
                return wt(a, i)
            })
        } catch (a) {
            return Promise.reject(a)
        }
    }
    ,
    c.messageSkipWaiting = function() {
        this.fn && this.fn.waiting && wt(this.fn.waiting, Kn)
    }
    ,
    c.pn = function() {
        var i = navigator.serviceWorker.controller;
        return i && Re(i.scriptURL, this.sn.toString()) ? i : void 0
    }
    ,
    c.bn = function() {
        try {
            var i = this;
            return function(a, u) {
                try {
                    var l = a()
                } catch (f) {
                    return u(f)
                }
                return l && l.then ? l.then(void 0, u) : l
            }(function() {
                return he(navigator.serviceWorker.register(i.sn, i.nn), function(a) {
                    return i.un = performance.now(),
                    a
                })
            }, function(a) {
                throw a
            })
        } catch (a) {
            return Promise.reject(a)
        }
    }
    ,
    o = r,
    (s = [{
        key: "active",
        get: function() {
            return this.en.promise
        }
    }, {
        key: "controlling",
        get: function() {
            return this.on.promise
        }
    }]) && Bn(o.prototype, s),
    r
}(function() {
    function e() {
        this.Pn = new Map
    }
    var t = e.prototype;
    return t.addEventListener = function(n, r) {
        this.Sn(n).add(r)
    }
    ,
    t.removeEventListener = function(n, r) {
        this.Sn(n).delete(r)
    }
    ,
    t.dispatchEvent = function(n) {
        n.target = this;
        for (var r, o = Wn(this.Sn(n.type)); !(r = o()).done; )
            (0,
            r.value)(n)
    }
    ,
    t.Sn = function(n) {
        return this.Pn.has(n) || this.Pn.set(n, new Set),
        this.Pn.get(n)
    }
    ,
    e
}());
export {B as A, jt as B, It as C, Ot as D, Ct as E, Te as F, zn as H, er as R, ae as S, P as a, tr as b, N as c, T as d, wt as e, _e as f, ye as g, Me as h, ce as i, G as j, j as k, Jn as l, O as m, L as n, E as o, W as p, Gn as q, Xn as r, z as s, w as t, Yn as u, nr as v, Zn as w, Nt as x, Vn as y, Qn as z};
