define(["exports"], (function(t) {
    "use strict";
    try {
        self["workbox:core:6.5.2"] && _()
    } catch (t) {}
    const e = (t,...e)=>{
        let s = t;
        return e.length > 0 && (s += ` :: ${JSON.stringify(e)}`),
        s
    }
    ;
    class s extends Error {
        constructor(t, s) {
            super(e(t, s)),
            this.name = t,
            this.details = s
        }
    }
    try {
        self["workbox:routing:6.5.2"] && _()
    } catch (t) {}
    const n = t=>t && "object" == typeof t ? t : {
        handle: t
    };
    class i {
        constructor(t, e, s="GET") {
            this.handler = n(e),
            this.match = t,
            this.method = s
        }
        setCatchHandler(t) {
            this.catchHandler = n(t)
        }
    }
    class r extends i {
        constructor(t, e, s) {
            super((({url: e})=>{
                const s = t.exec(e.href);
                if (s && (e.origin === location.origin || 0 === s.index))
                    return s.slice(1)
            }
            ), e, s)
        }
    }
    class a {
        constructor() {
            this.t = new Map,
            this.i = new Map
        }
        get routes() {
            return this.t
        }
        addFetchListener() {
            self.addEventListener("fetch", (t=>{
                const {request: e} = t
                  , s = this.handleRequest({
                    request: e,
                    event: t
                });
                s && t.respondWith(s)
            }
            ))
        }
        addCacheListener() {
            self.addEventListener("message", (t=>{
                if (t.data && "CACHE_URLS" === t.data.type) {
                    const {payload: e} = t.data
                      , s = Promise.all(e.urlsToCache.map((e=>{
                        "string" == typeof e && (e = [e]);
                        const s = new Request(...e);
                        return this.handleRequest({
                            request: s,
                            event: t
                        })
                    }
                    )));
                    t.waitUntil(s),
                    t.ports && t.ports[0] && s.then((()=>t.ports[0].postMessage(!0)))
                }
            }
            ))
        }
        handleRequest({request: t, event: e}) {
            const s = new URL(t.url,location.href);
            if (!s.protocol.startsWith("http"))
                return;
            const n = s.origin === location.origin
              , {params: i, route: r} = this.findMatchingRoute({
                event: e,
                request: t,
                sameOrigin: n,
                url: s
            });
            let a = r && r.handler;
            const c = t.method;
            if (!a && this.i.has(c) && (a = this.i.get(c)),
            !a)
                return;
            let o;
            try {
                o = a.handle({
                    url: s,
                    request: t,
                    event: e,
                    params: i
                })
            } catch (t) {
                o = Promise.reject(t)
            }
            const h = r && r.catchHandler;
            return o instanceof Promise && (this.o || h) && (o = o.catch((async n=>{
                if (h)
                    try {
                        return await h.handle({
                            url: s,
                            request: t,
                            event: e,
                            params: i
                        })
                    } catch (t) {
                        t instanceof Error && (n = t)
                    }
                if (this.o)
                    return this.o.handle({
                        url: s,
                        request: t,
                        event: e
                    });
                throw n
            }
            ))),
            o
        }
        findMatchingRoute({url: t, sameOrigin: e, request: s, event: n}) {
            const i = this.t.get(s.method) || [];
            for (const r of i) {
                let i;
                const a = r.match({
                    url: t,
                    sameOrigin: e,
                    request: s,
                    event: n
                });
                if (a)
                    return i = a,
                    (Array.isArray(i) && 0 === i.length || a.constructor === Object && 0 === Object.keys(a).length || "boolean" == typeof a) && (i = void 0),
                    {
                        route: r,
                        params: i
                    }
            }
            return {}
        }
        setDefaultHandler(t, e="GET") {
            this.i.set(e, n(t))
        }
        setCatchHandler(t) {
            this.o = n(t)
        }
        registerRoute(t) {
            this.t.has(t.method) || this.t.set(t.method, []),
            this.t.get(t.method).push(t)
        }
        unregisterRoute(t) {
            if (!this.t.has(t.method))
                throw new s("unregister-route-but-not-found-with-method",{
                    method: t.method
                });
            const e = this.t.get(t.method).indexOf(t);
            if (!(e > -1))
                throw new s("unregister-route-route-not-registered");
            this.t.get(t.method).splice(e, 1)
        }
    }
    let c;
    const o = ()=>(c || (c = new a,
    c.addFetchListener(),
    c.addCacheListener()),
    c);
    function h(t, e, n) {
        let a;
        if ("string" == typeof t) {
            const s = new URL(t,location.href);
            a = new i((({url: t})=>t.href === s.href),e,n)
        } else if (t instanceof RegExp)
            a = new r(t,e,n);
        else if ("function" == typeof t)
            a = new i(t,e,n);
        else {
            if (!(t instanceof i))
                throw new s("unsupported-route-type",{
                    moduleName: "workbox-routing",
                    funcName: "registerRoute",
                    paramName: "capture"
                });
            a = t
        }
        return o().registerRoute(a),
        a
    }
    function u() {
        return u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
            }
            return t
        }
        ,
        u.apply(this, arguments)
    }
    let l, f;
    const w = new WeakMap
      , d = new WeakMap
      , y = new WeakMap
      , p = new WeakMap
      , m = new WeakMap;
    let g = {
        get(t, e, s) {
            if (t instanceof IDBTransaction) {
                if ("done" === e)
                    return d.get(t);
                if ("objectStoreNames" === e)
                    return t.objectStoreNames || y.get(t);
                if ("store" === e)
                    return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
            }
            return b(t[e])
        },
        set: (t,e,s)=>(t[e] = s,
        !0),
        has: (t,e)=>t instanceof IDBTransaction && ("done" === e || "store" === e) || e in t
    };
    function R(t) {
        return t !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (f || (f = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
            return t.apply(v(this), e),
            b(w.get(this))
        }
        : function(...e) {
            return b(t.apply(v(this), e))
        }
        : function(e, ...s) {
            const n = t.call(v(this), e, ...s);
            return y.set(n, e.sort ? e.sort() : [e]),
            b(n)
        }
    }
    function q(t) {
        return "function" == typeof t ? R(t) : (t instanceof IDBTransaction && function(t) {
            if (d.has(t))
                return;
            const e = new Promise(((e,s)=>{
                const n = ()=>{
                    t.removeEventListener("complete", i),
                    t.removeEventListener("error", r),
                    t.removeEventListener("abort", r)
                }
                  , i = ()=>{
                    e(),
                    n()
                }
                  , r = ()=>{
                    s(t.error || new DOMException("AbortError","AbortError")),
                    n()
                }
                ;
                t.addEventListener("complete", i),
                t.addEventListener("error", r),
                t.addEventListener("abort", r)
            }
            ));
            d.set(t, e)
        }(t),
        e = t,
        (l || (l = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((t=>e instanceof t)) ? new Proxy(t,g) : t);
        var e
    }
    function b(t) {
        if (t instanceof IDBRequest)
            return function(t) {
                const e = new Promise(((e,s)=>{
                    const n = ()=>{
                        t.removeEventListener("success", i),
                        t.removeEventListener("error", r)
                    }
                      , i = ()=>{
                        e(b(t.result)),
                        n()
                    }
                      , r = ()=>{
                        s(t.error),
                        n()
                    }
                    ;
                    t.addEventListener("success", i),
                    t.addEventListener("error", r)
                }
                ));
                return e.then((e=>{
                    e instanceof IDBCursor && w.set(e, t)
                }
                )).catch((()=>{}
                )),
                m.set(e, t),
                e
            }(t);
        if (p.has(t))
            return p.get(t);
        const e = q(t);
        return e !== t && (p.set(t, e),
        m.set(e, t)),
        e
    }
    const v = t=>m.get(t);
    function D(t, e, {blocked: s, upgrade: n, blocking: i, terminated: r}={}) {
        const a = indexedDB.open(t, e)
          , c = b(a);
        return n && a.addEventListener("upgradeneeded", (t=>{
            n(b(a.result), t.oldVersion, t.newVersion, b(a.transaction))
        }
        )),
        s && a.addEventListener("blocked", (()=>s())),
        c.then((t=>{
            r && t.addEventListener("close", (()=>r())),
            i && t.addEventListener("versionchange", (()=>i()))
        }
        )).catch((()=>{}
        )),
        c
    }
    const E = ["get", "getKey", "getAll", "getAllKeys", "count"]
      , x = ["put", "add", "delete", "clear"]
      , U = new Map;
    function I(t, e) {
        if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e)
            return;
        if (U.get(e))
            return U.get(e);
        const s = e.replace(/FromIndex$/, "")
          , n = e !== s
          , i = x.includes(s);
        if (!(s in (n ? IDBIndex : IDBObjectStore).prototype) || !i && !E.includes(s))
            return;
        const r = async function(t, ...e) {
            const r = this.transaction(t, i ? "readwrite" : "readonly");
            let a = r.store;
            return n && (a = a.index(e.shift())),
            (await Promise.all([a[s](...e), i && r.done]))[0]
        };
        return U.set(e, r),
        r
    }
    g = (t=>u({}, t, {
        get: (e,s,n)=>I(e, s) || t.get(e, s, n),
        has: (e,s)=>!!I(e, s) || t.has(e, s)
    }))(g);
    try {
        self["workbox:background-sync:6.5.2"] && _()
    } catch (t) {}
    const k = "requests"
      , B = "queueName";
    class L {
        constructor() {
            this.h = null
        }
        async addEntry(t) {
            const e = (await this.getDb()).transaction(k, "readwrite", {
                durability: "relaxed"
            });
            await e.store.add(t),
            await e.done
        }
        async getFirstEntryId() {
            const t = await this.getDb()
              , e = await t.transaction(k).store.openCursor();
            return null == e ? void 0 : e.value.id
        }
        async getAllEntriesByQueueName(t) {
            const e = await this.getDb()
              , s = await e.getAllFromIndex(k, B, IDBKeyRange.only(t));
            return s || new Array
        }
        async getEntryCountByQueueName(t) {
            return (await this.getDb()).countFromIndex(k, B, IDBKeyRange.only(t))
        }
        async deleteEntry(t) {
            const e = await this.getDb();
            await e.delete(k, t)
        }
        async getFirstEntryByQueueName(t) {
            return await this.getEndEntryFromIndex(IDBKeyRange.only(t), "next")
        }
        async getLastEntryByQueueName(t) {
            return await this.getEndEntryFromIndex(IDBKeyRange.only(t), "prev")
        }
        async getEndEntryFromIndex(t, e) {
            const s = await this.getDb()
              , n = await s.transaction(k).store.index(B).openCursor(t, e);
            return null == n ? void 0 : n.value
        }
        async getDb() {
            return this.h || (this.h = await D("workbox-background-sync", 3, {
                upgrade: this.u
            })),
            this.h
        }
        u(t, e) {
            e > 0 && e < 3 && t.objectStoreNames.contains(k) && t.deleteObjectStore(k);
            t.createObjectStore(k, {
                autoIncrement: !0,
                keyPath: "id"
            }).createIndex(B, B, {
                unique: !1
            })
        }
    }
    class N {
        constructor(t) {
            this.l = t,
            this.p = new L
        }
        async pushEntry(t) {
            delete t.id,
            t.queueName = this.l,
            await this.p.addEntry(t)
        }
        async unshiftEntry(t) {
            const e = await this.p.getFirstEntryId();
            e ? t.id = e - 1 : delete t.id,
            t.queueName = this.l,
            await this.p.addEntry(t)
        }
        async popEntry() {
            return this.m(await this.p.getLastEntryByQueueName(this.l))
        }
        async shiftEntry() {
            return this.m(await this.p.getFirstEntryByQueueName(this.l))
        }
        async getAll() {
            return await this.p.getAllEntriesByQueueName(this.l)
        }
        async size() {
            return await this.p.getEntryCountByQueueName(this.l)
        }
        async deleteEntry(t) {
            await this.p.deleteEntry(t)
        }
        async m(t) {
            return t && await this.deleteEntry(t.id),
            t
        }
    }
    const C = ["method", "referrer", "referrerPolicy", "mode", "credentials", "cache", "redirect", "integrity", "keepalive"];
    class O {
        constructor(t) {
            "navigate" === t.mode && (t.mode = "same-origin"),
            this.g = t
        }
        static async fromRequest(t) {
            const e = {
                url: t.url,
                headers: {}
            };
            "GET" !== t.method && (e.body = await t.clone().arrayBuffer());
            for (const [s,n] of t.headers.entries())
                e.headers[s] = n;
            for (const s of C)
                void 0 !== t[s] && (e[s] = t[s]);
            return new O(e)
        }
        toObject() {
            const t = Object.assign({}, this.g);
            return t.headers = Object.assign({}, this.g.headers),
            t.body && (t.body = t.body.slice(0)),
            t
        }
        toRequest() {
            return new Request(this.g.url,this.g)
        }
        clone() {
            return new O(this.toObject())
        }
    }
    const T = "workbox-background-sync"
      , j = new Set
      , M = t=>{
        const e = {
            request: new O(t.requestData).toRequest(),
            timestamp: t.timestamp
        };
        return t.metadata && (e.metadata = t.metadata),
        e
    }
    ;
    class P {
        constructor(t, {forceSyncFallback: e, onSync: n, maxRetentionTime: i}={}) {
            if (this.R = !1,
            this.q = !1,
            j.has(t))
                throw new s("duplicate-queue-name",{
                    name: t
                });
            j.add(t),
            this.v = t,
            this.D = n || this.replayRequests,
            this._ = i || 10080,
            this.U = Boolean(e),
            this.I = new N(this.v),
            this.k()
        }
        get name() {
            return this.v
        }
        async pushRequest(t) {
            await this.B(t, "push")
        }
        async unshiftRequest(t) {
            await this.B(t, "unshift")
        }
        async popRequest() {
            return this.L("pop")
        }
        async shiftRequest() {
            return this.L("shift")
        }
        async getAll() {
            const t = await this.I.getAll()
              , e = Date.now()
              , s = [];
            for (const n of t) {
                const t = 60 * this._ * 1e3;
                e - n.timestamp > t ? await this.I.deleteEntry(n.id) : s.push(M(n))
            }
            return s
        }
        async size() {
            return await this.I.size()
        }
        async B({request: t, metadata: e, timestamp: s=Date.now()}, n) {
            const i = {
                requestData: (await O.fromRequest(t.clone())).toObject(),
                timestamp: s
            };
            switch (e && (i.metadata = e),
            n) {
            case "push":
                await this.I.pushEntry(i);
                break;
            case "unshift":
                await this.I.unshiftEntry(i)
            }
            this.R ? this.q = !0 : await this.registerSync()
        }
        async L(t) {
            const e = Date.now();
            let s;
            switch (t) {
            case "pop":
                s = await this.I.popEntry();
                break;
            case "shift":
                s = await this.I.shiftEntry()
            }
            if (s) {
                const n = 60 * this._ * 1e3;
                return e - s.timestamp > n ? this.L(t) : M(s)
            }
        }
        async replayRequests() {
            let t;
            for (; t = await this.shiftRequest(); )
                try {
                    await fetch(t.request.clone())
                } catch (e) {
                    throw await this.unshiftRequest(t),
                    new s("queue-replay-failed",{
                        name: this.v
                    })
                }
        }
        async registerSync() {
            if ("sync"in self.registration && !this.U)
                try {
                    await self.registration.sync.register(`${T}:${this.v}`)
                } catch (t) {}
        }
        k() {
            "sync"in self.registration && !this.U ? self.addEventListener("sync", (t=>{
                if (t.tag === `${T}:${this.v}`) {
                    const e = async()=>{
                        let e;
                        this.R = !0;
                        try {
                            await this.D({
                                queue: this
                            })
                        } catch (t) {
                            if (t instanceof Error)
                                throw e = t,
                                e
                        } finally {
                            !this.q || e && !t.lastChance || await this.registerSync(),
                            this.R = !1,
                            this.q = !1
                        }
                    }
                    ;
                    t.waitUntil(e())
                }
            }
            )) : this.D({
                queue: this
            })
        }
        static get N() {
            return j
        }
    }
    function S(t) {
        return new Promise((e=>setTimeout(e, t)))
    }
    const W = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" != typeof registration ? registration.scope : ""
    }
      , K = t=>[W.prefix, t, W.suffix].filter((t=>t && t.length > 0)).join("-")
      , A = t=>t || K(W.precache)
      , F = t=>t || K(W.runtime);
    function $(t, e) {
        const s = new URL(t);
        for (const t of e)
            s.searchParams.delete(t);
        return s.href
    }
    class H {
        constructor() {
            this.promise = new Promise(((t,e)=>{
                this.resolve = t,
                this.reject = e
            }
            ))
        }
    }
    const Q = new Set;
    try {
        self["workbox:strategies:6.5.2"] && _()
    } catch (t) {}
    function G(t) {
        return "string" == typeof t ? new Request(t) : t
    }
    class z {
        constructor(t, e) {
            this.C = {},
            Object.assign(this, e),
            this.event = e.event,
            this.O = t,
            this.T = new H,
            this.j = [],
            this.M = [...t.plugins],
            this.P = new Map;
            for (const t of this.M)
                this.P.set(t, {});
            this.event.waitUntil(this.T.promise)
        }
        async fetch(t) {
            const {event: e} = this;
            let n = G(t);
            if ("navigate" === n.mode && e instanceof FetchEvent && e.preloadResponse) {
                const t = await e.preloadResponse;
                if (t)
                    return t
            }
            const i = this.hasCallback("fetchDidFail") ? n.clone() : null;
            try {
                for (const t of this.iterateCallbacks("requestWillFetch"))
                    n = await t({
                        request: n.clone(),
                        event: e
                    })
            } catch (t) {
                if (t instanceof Error)
                    throw new s("plugin-error-request-will-fetch",{
                        thrownErrorMessage: t.message
                    })
            }
            const r = n.clone();
            try {
                let t;
                t = await fetch(n, "navigate" === n.mode ? void 0 : this.O.fetchOptions);
                for (const s of this.iterateCallbacks("fetchDidSucceed"))
                    t = await s({
                        event: e,
                        request: r,
                        response: t
                    });
                return t
            } catch (t) {
                throw i && await this.runCallbacks("fetchDidFail", {
                    error: t,
                    event: e,
                    originalRequest: i.clone(),
                    request: r.clone()
                }),
                t
            }
        }
        async fetchAndCachePut(t) {
            const e = await this.fetch(t)
              , s = e.clone();
            return this.waitUntil(this.cachePut(t, s)),
            e
        }
        async cacheMatch(t) {
            const e = G(t);
            let s;
            const {cacheName: n, matchOptions: i} = this.O
              , r = await this.getCacheKey(e, "read")
              , a = Object.assign(Object.assign({}, i), {
                cacheName: n
            });
            s = await caches.match(r, a);
            for (const t of this.iterateCallbacks("cachedResponseWillBeUsed"))
                s = await t({
                    cacheName: n,
                    matchOptions: i,
                    cachedResponse: s,
                    request: r,
                    event: this.event
                }) || void 0;
            return s
        }
        async cachePut(t, e) {
            const n = G(t);
            await S(0);
            const i = await this.getCacheKey(n, "write");
            if (!e)
                throw new s("cache-put-with-no-response",{
                    url: (r = i.url,
                    new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`), ""))
                });
            var r;
            const a = await this.S(e);
            if (!a)
                return !1;
            const {cacheName: c, matchOptions: o} = this.O
              , h = await self.caches.open(c)
              , u = this.hasCallback("cacheDidUpdate")
              , l = u ? await async function(t, e, s, n) {
                const i = $(e.url, s);
                if (e.url === i)
                    return t.match(e, n);
                const r = Object.assign(Object.assign({}, n), {
                    ignoreSearch: !0
                })
                  , a = await t.keys(e, r);
                for (const e of a)
                    if (i === $(e.url, s))
                        return t.match(e, n)
            }(h, i.clone(), ["__WB_REVISION__"], o) : null;
            try {
                await h.put(i, u ? a.clone() : a)
            } catch (t) {
                if (t instanceof Error)
                    throw "QuotaExceededError" === t.name && await async function() {
                        for (const t of Q)
                            await t()
                    }(),
                    t
            }
            for (const t of this.iterateCallbacks("cacheDidUpdate"))
                await t({
                    cacheName: c,
                    oldResponse: l,
                    newResponse: a.clone(),
                    request: i,
                    event: this.event
                });
            return !0
        }
        async getCacheKey(t, e) {
            const s = `${t.url} | ${e}`;
            if (!this.C[s]) {
                let n = t;
                for (const t of this.iterateCallbacks("cacheKeyWillBeUsed"))
                    n = G(await t({
                        mode: e,
                        request: n,
                        event: this.event,
                        params: this.params
                    }));
                this.C[s] = n
            }
            return this.C[s]
        }
        hasCallback(t) {
            for (const e of this.O.plugins)
                if (t in e)
                    return !0;
            return !1
        }
        async runCallbacks(t, e) {
            for (const s of this.iterateCallbacks(t))
                await s(e)
        }
        *iterateCallbacks(t) {
            for (const e of this.O.plugins)
                if ("function" == typeof e[t]) {
                    const s = this.P.get(e)
                      , n = n=>{
                        const i = Object.assign(Object.assign({}, n), {
                            state: s
                        });
                        return e[t](i)
                    }
                    ;
                    yield n
                }
        }
        waitUntil(t) {
            return this.j.push(t),
            t
        }
        async doneWaiting() {
            let t;
            for (; t = this.j.shift(); )
                await t
        }
        destroy() {
            this.T.resolve(null)
        }
        async S(t) {
            let e = t
              , s = !1;
            for (const t of this.iterateCallbacks("cacheWillUpdate"))
                if (e = await t({
                    request: this.request,
                    response: e,
                    event: this.event
                }) || void 0,
                s = !0,
                !e)
                    break;
            return s || e && 200 !== e.status && (e = void 0),
            e
        }
    }
    class V {
        constructor(t={}) {
            this.cacheName = F(t.cacheName),
            this.plugins = t.plugins || [],
            this.fetchOptions = t.fetchOptions,
            this.matchOptions = t.matchOptions
        }
        handle(t) {
            const [e] = this.handleAll(t);
            return e
        }
        handleAll(t) {
            t instanceof FetchEvent && (t = {
                event: t,
                request: t.request
            });
            const e = t.event
              , s = "string" == typeof t.request ? new Request(t.request) : t.request
              , n = "params"in t ? t.params : void 0
              , i = new z(this,{
                event: e,
                request: s,
                params: n
            })
              , r = this.W(i, s, e);
            return [r, this.K(r, i, s, e)]
        }
        async W(t, e, n) {
            let i;
            await t.runCallbacks("handlerWillStart", {
                event: n,
                request: e
            });
            try {
                if (i = await this.A(e, t),
                !i || "error" === i.type)
                    throw new s("no-response",{
                        url: e.url
                    })
            } catch (s) {
                if (s instanceof Error)
                    for (const r of t.iterateCallbacks("handlerDidError"))
                        if (i = await r({
                            error: s,
                            event: n,
                            request: e
                        }),
                        i)
                            break;
                if (!i)
                    throw s
            }
            for (const s of t.iterateCallbacks("handlerWillRespond"))
                i = await s({
                    event: n,
                    request: e,
                    response: i
                });
            return i
        }
        async K(t, e, s, n) {
            let i, r;
            try {
                i = await t
            } catch (r) {}
            try {
                await e.runCallbacks("handlerDidRespond", {
                    event: n,
                    request: s,
                    response: i
                }),
                await e.doneWaiting()
            } catch (t) {
                t instanceof Error && (r = t)
            }
            if (await e.runCallbacks("handlerDidComplete", {
                event: n,
                request: s,
                response: i,
                error: r
            }),
            e.destroy(),
            r)
                throw r
        }
    }
    function J(t) {
        t.then((()=>{}
        ))
    }
    try {
        self["workbox:expiration:6.5.2"] && _()
    } catch (t) {}
    const X = "cache-entries"
      , Y = t=>{
        const e = new URL(t,location.href);
        return e.hash = "",
        e.href
    }
    ;
    class Z {
        constructor(t) {
            this.h = null,
            this.F = t
        }
        u(t) {
            const e = t.createObjectStore(X, {
                keyPath: "id"
            });
            e.createIndex("cacheName", "cacheName", {
                unique: !1
            }),
            e.createIndex("timestamp", "timestamp", {
                unique: !1
            })
        }
        $(t) {
            this.u(t),
            this.F && function(t, {blocked: e}={}) {
                const s = indexedDB.deleteDatabase(t);
                e && s.addEventListener("blocked", (()=>e())),
                b(s).then((()=>{}
                ))
            }(this.F)
        }
        async setTimestamp(t, e) {
            const s = {
                url: t = Y(t),
                timestamp: e,
                cacheName: this.F,
                id: this.H(t)
            }
              , n = (await this.getDb()).transaction(X, "readwrite", {
                durability: "relaxed"
            });
            await n.store.put(s),
            await n.done
        }
        async getTimestamp(t) {
            const e = await this.getDb()
              , s = await e.get(X, this.H(t));
            return null == s ? void 0 : s.timestamp
        }
        async expireEntries(t, e) {
            const s = await this.getDb();
            let n = await s.transaction(X).store.index("timestamp").openCursor(null, "prev");
            const i = [];
            let r = 0;
            for (; n; ) {
                const s = n.value;
                s.cacheName === this.F && (t && s.timestamp < t || e && r >= e ? i.push(n.value) : r++),
                n = await n.continue()
            }
            const a = [];
            for (const t of i)
                await s.delete(X, t.id),
                a.push(t.url);
            return a
        }
        H(t) {
            return this.F + "|" + Y(t)
        }
        async getDb() {
            return this.h || (this.h = await D("workbox-expiration", 1, {
                upgrade: this.$.bind(this)
            })),
            this.h
        }
    }
    class tt {
        constructor(t, e={}) {
            this.G = !1,
            this.V = !1,
            this.J = e.maxEntries,
            this.X = e.maxAgeSeconds,
            this.Y = e.matchOptions,
            this.F = t,
            this.Z = new Z(t)
        }
        async expireEntries() {
            if (this.G)
                return void (this.V = !0);
            this.G = !0;
            const t = this.X ? Date.now() - 1e3 * this.X : 0
              , e = await this.Z.expireEntries(t, this.J)
              , s = await self.caches.open(this.F);
            for (const t of e)
                await s.delete(t, this.Y);
            this.G = !1,
            this.V && (this.V = !1,
            J(this.expireEntries()))
        }
        async updateTimestamp(t) {
            await this.Z.setTimestamp(t, Date.now())
        }
        async isURLExpired(t) {
            if (this.X) {
                const e = await this.Z.getTimestamp(t)
                  , s = Date.now() - 1e3 * this.X;
                return void 0 === e || e < s
            }
            return !1
        }
        async delete() {
            this.V = !1,
            await this.Z.expireEntries(1 / 0)
        }
    }
    try {
        self["workbox:cacheable-response:6.5.2"] && _()
    } catch (t) {}
    class et {
        constructor(t={}) {
            this.tt = t.statuses,
            this.et = t.headers
        }
        isResponseCacheable(t) {
            let e = !0;
            return this.tt && (e = this.tt.includes(t.status)),
            this.et && e && (e = Object.keys(this.et).some((e=>t.headers.get(e) === this.et[e]))),
            e
        }
    }
    const st = {
        cacheWillUpdate: async({response: t})=>200 === t.status || 0 === t.status ? t : null
    };
    function nt(t, e) {
        const s = e();
        return t.waitUntil(s),
        s
    }
    try {
        self["workbox:precaching:6.5.2"] && _()
    } catch (t) {}
    function it(t) {
        if (!t)
            throw new s("add-to-cache-list-unexpected-type",{
                entry: t
            });
        if ("string" == typeof t) {
            const e = new URL(t,location.href);
            return {
                cacheKey: e.href,
                url: e.href
            }
        }
        const {revision: e, url: n} = t;
        if (!n)
            throw new s("add-to-cache-list-unexpected-type",{
                entry: t
            });
        if (!e) {
            const t = new URL(n,location.href);
            return {
                cacheKey: t.href,
                url: t.href
            }
        }
        const i = new URL(n,location.href)
          , r = new URL(n,location.href);
        return i.searchParams.set("__WB_REVISION__", e),
        {
            cacheKey: i.href,
            url: r.href
        }
    }
    class rt {
        constructor() {
            this.updatedURLs = [],
            this.notUpdatedURLs = [],
            this.handlerWillStart = async({request: t, state: e})=>{
                e && (e.originalRequest = t)
            }
            ,
            this.cachedResponseWillBeUsed = async({event: t, state: e, cachedResponse: s})=>{
                if ("install" === t.type && e && e.originalRequest && e.originalRequest instanceof Request) {
                    const t = e.originalRequest.url;
                    s ? this.notUpdatedURLs.push(t) : this.updatedURLs.push(t)
                }
                return s
            }
        }
    }
    class at {
        constructor({precacheController: t}) {
            this.cacheKeyWillBeUsed = async({request: t, params: e})=>{
                const s = (null == e ? void 0 : e.cacheKey) || this.st.getCacheKeyForURL(t.url);
                return s ? new Request(s,{
                    headers: t.headers
                }) : t
            }
            ,
            this.st = t
        }
    }
    let ct, ot;
    async function ht(t, e) {
        let n = null;
        if (t.url) {
            n = new URL(t.url).origin
        }
        if (n !== self.location.origin)
            throw new s("cross-origin-copy-response",{
                origin: n
            });
        const i = t.clone()
          , r = {
            headers: new Headers(i.headers),
            status: i.status,
            statusText: i.statusText
        }
          , a = e ? e(r) : r
          , c = function() {
            if (void 0 === ct) {
                const t = new Response("");
                if ("body"in t)
                    try {
                        new Response(t.body),
                        ct = !0
                    } catch (t) {
                        ct = !1
                    }
                ct = !1
            }
            return ct
        }() ? i.body : await i.blob();
        return new Response(c,a)
    }
    class ut extends V {
        constructor(t={}) {
            t.cacheName = A(t.cacheName),
            super(t),
            this.nt = !1 !== t.fallbackToNetwork,
            this.plugins.push(ut.copyRedirectedCacheableResponsesPlugin)
        }
        async A(t, e) {
            const s = await e.cacheMatch(t);
            return s || (e.event && "install" === e.event.type ? await this.it(t, e) : await this.rt(t, e))
        }
        async rt(t, e) {
            let n;
            const i = e.params || {};
            if (!this.nt)
                throw new s("missing-precache-entry",{
                    cacheName: this.cacheName,
                    url: t.url
                });
            {
                const s = i.integrity
                  , r = t.integrity
                  , a = !r || r === s;
                n = await e.fetch(new Request(t,{
                    integrity: r || s
                })),
                s && a && (this.at(),
                await e.cachePut(t, n.clone()))
            }
            return n
        }
        async it(t, e) {
            this.at();
            const n = await e.fetch(t);
            if (!await e.cachePut(t, n.clone()))
                throw new s("bad-precaching-response",{
                    url: t.url,
                    status: n.status
                });
            return n
        }
        at() {
            let t = null
              , e = 0;
            for (const [s,n] of this.plugins.entries())
                n !== ut.copyRedirectedCacheableResponsesPlugin && (n === ut.defaultPrecacheCacheabilityPlugin && (t = s),
                n.cacheWillUpdate && e++);
            0 === e ? this.plugins.push(ut.defaultPrecacheCacheabilityPlugin) : e > 1 && null !== t && this.plugins.splice(t, 1)
        }
    }
    ut.defaultPrecacheCacheabilityPlugin = {
        cacheWillUpdate: async({response: t})=>!t || t.status >= 400 ? null : t
    },
    ut.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: async({response: t})=>t.redirected ? await ht(t) : t
    };
    class lt {
        constructor({cacheName: t, plugins: e=[], fallbackToNetwork: s=!0}={}) {
            this.ct = new Map,
            this.ot = new Map,
            this.ht = new Map,
            this.O = new ut({
                cacheName: A(t),
                plugins: [...e, new at({
                    precacheController: this
                })],
                fallbackToNetwork: s
            }),
            this.install = this.install.bind(this),
            this.activate = this.activate.bind(this)
        }
        get strategy() {
            return this.O
        }
        precache(t) {
            this.addToCacheList(t),
            this.ut || (self.addEventListener("install", this.install),
            self.addEventListener("activate", this.activate),
            this.ut = !0)
        }
        addToCacheList(t) {
            const e = [];
            for (const n of t) {
                "string" == typeof n ? e.push(n) : n && void 0 === n.revision && e.push(n.url);
                const {cacheKey: t, url: i} = it(n)
                  , r = "string" != typeof n && n.revision ? "reload" : "default";
                if (this.ct.has(i) && this.ct.get(i) !== t)
                    throw new s("add-to-cache-list-conflicting-entries",{
                        firstEntry: this.ct.get(i),
                        secondEntry: t
                    });
                if ("string" != typeof n && n.integrity) {
                    if (this.ht.has(t) && this.ht.get(t) !== n.integrity)
                        throw new s("add-to-cache-list-conflicting-integrities",{
                            url: i
                        });
                    this.ht.set(t, n.integrity)
                }
                if (this.ct.set(i, t),
                this.ot.set(i, r),
                e.length > 0) {
                    const t = `Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                    console.warn(t)
                }
            }
        }
        install(t) {
            return nt(t, (async()=>{
                const e = new rt;
                this.strategy.plugins.push(e);
                for (const [e,s] of this.ct) {
                    const n = this.ht.get(s)
                      , i = this.ot.get(e)
                      , r = new Request(e,{
                        integrity: n,
                        cache: i,
                        credentials: "same-origin"
                    });
                    await Promise.all(this.strategy.handleAll({
                        params: {
                            cacheKey: s
                        },
                        request: r,
                        event: t
                    }))
                }
                const {updatedURLs: s, notUpdatedURLs: n} = e;
                return {
                    updatedURLs: s,
                    notUpdatedURLs: n
                }
            }
            ))
        }
        activate(t) {
            return nt(t, (async()=>{
                const t = await self.caches.open(this.strategy.cacheName)
                  , e = await t.keys()
                  , s = new Set(this.ct.values())
                  , n = [];
                for (const i of e)
                    s.has(i.url) || (await t.delete(i),
                    n.push(i.url));
                return {
                    deletedURLs: n
                }
            }
            ))
        }
        getURLsToCacheKeys() {
            return this.ct
        }
        getCachedURLs() {
            return [...this.ct.keys()]
        }
        getCacheKeyForURL(t) {
            const e = new URL(t,location.href);
            return this.ct.get(e.href)
        }
        getIntegrityForCacheKey(t) {
            return this.ht.get(t)
        }
        async matchPrecache(t) {
            const e = t instanceof Request ? t.url : t
              , s = this.getCacheKeyForURL(e);
            if (s) {
                return (await self.caches.open(this.strategy.cacheName)).match(s)
            }
        }
        createHandlerBoundToURL(t) {
            const e = this.getCacheKeyForURL(t);
            if (!e)
                throw new s("non-precached-url",{
                    url: t
                });
            return s=>(s.request = new Request(t),
            s.params = Object.assign({
                cacheKey: e
            }, s.params),
            this.strategy.handle(s))
        }
    }
    const ft = ()=>(ot || (ot = new lt),
    ot);
    class wt extends i {
        constructor(t, e) {
            super((({request: s})=>{
                const n = t.getURLsToCacheKeys();
                for (const i of function*(t, {ignoreURLParametersMatching: e=[/^utm_/, /^fbclid$/], directoryIndex: s="index.html", cleanURLs: n=!0, urlManipulation: i}={}) {
                    const r = new URL(t,location.href);
                    r.hash = "",
                    yield r.href;
                    const a = function(t, e=[]) {
                        for (const s of [...t.searchParams.keys()])
                            e.some((t=>t.test(s))) && t.searchParams.delete(s);
                        return t
                    }(r, e);
                    if (yield a.href,
                    s && a.pathname.endsWith("/")) {
                        const t = new URL(a.href);
                        t.pathname += s,
                        yield t.href
                    }
                    if (n) {
                        const t = new URL(a.href);
                        t.pathname += ".html",
                        yield t.href
                    }
                    if (i) {
                        const t = i({
                            url: r
                        });
                        for (const e of t)
                            yield e.href
                    }
                }(s.url, e)) {
                    const e = n.get(i);
                    if (e) {
                        return {
                            cacheKey: e,
                            integrity: t.getIntegrityForCacheKey(e)
                        }
                    }
                }
            }
            ), t.strategy)
        }
    }
    t.BackgroundSyncPlugin = class {
        constructor(t, e) {
            this.fetchDidFail = async({request: t})=>{
                await this.lt.pushRequest({
                    request: t
                })
            }
            ,
            this.lt = new P(t,e)
        }
    }
    ,
    t.CacheableResponsePlugin = class {
        constructor(t) {
            this.cacheWillUpdate = async({response: t})=>this.ft.isResponseCacheable(t) ? t : null,
            this.ft = new et(t)
        }
    }
    ,
    t.ExpirationPlugin = class {
        constructor(t={}) {
            this.cachedResponseWillBeUsed = async({event: t, request: e, cacheName: s, cachedResponse: n})=>{
                if (!n)
                    return null;
                const i = this.wt(n)
                  , r = this.dt(s);
                J(r.expireEntries());
                const a = r.updateTimestamp(e.url);
                if (t)
                    try {
                        t.waitUntil(a)
                    } catch (t) {}
                return i ? n : null
            }
            ,
            this.cacheDidUpdate = async({cacheName: t, request: e})=>{
                const s = this.dt(t);
                await s.updateTimestamp(e.url),
                await s.expireEntries()
            }
            ,
            this.yt = t,
            this.X = t.maxAgeSeconds,
            this.gt = new Map,
            t.purgeOnQuotaError && function(t) {
                Q.add(t)
            }((()=>this.deleteCacheAndMetadata()))
        }
        dt(t) {
            if (t === F())
                throw new s("expire-custom-caches-only");
            let e = this.gt.get(t);
            return e || (e = new tt(t,this.yt),
            this.gt.set(t, e)),
            e
        }
        wt(t) {
            if (!this.X)
                return !0;
            const e = this.Rt(t);
            if (null === e)
                return !0;
            return e >= Date.now() - 1e3 * this.X
        }
        Rt(t) {
            if (!t.headers.has("date"))
                return null;
            const e = t.headers.get("date")
              , s = new Date(e).getTime();
            return isNaN(s) ? null : s
        }
        async deleteCacheAndMetadata() {
            for (const [t,e] of this.gt)
                await self.caches.delete(t),
                await e.delete();
            this.gt = new Map
        }
    }
    ,
    t.NavigationRoute = class extends i {
        constructor(t, {allowlist: e=[/./], denylist: s=[]}={}) {
            super((t=>this.qt(t)), t),
            this.bt = e,
            this.vt = s
        }
        qt({url: t, request: e}) {
            if (e && "navigate" !== e.mode)
                return !1;
            const s = t.pathname + t.search;
            for (const t of this.vt)
                if (t.test(s))
                    return !1;
            return !!this.bt.some((t=>t.test(s)))
        }
    }
    ,
    t.NetworkOnly = class extends V {
        constructor(t={}) {
            super(t),
            this.Dt = t.networkTimeoutSeconds || 0
        }
        async A(t, e) {
            let n, i;
            try {
                const s = [e.fetch(t)];
                if (this.Dt) {
                    const t = S(1e3 * this.Dt);
                    s.push(t)
                }
                if (i = await Promise.race(s),
                !i)
                    throw new Error(`Timed out the network response after ${this.Dt} seconds.`)
            } catch (t) {
                t instanceof Error && (n = t)
            }
            if (!i)
                throw new s("no-response",{
                    url: t.url,
                    error: n
                });
            return i
        }
    }
    ,
    t.StaleWhileRevalidate = class extends V {
        constructor(t={}) {
            super(t),
            this.plugins.some((t=>"cacheWillUpdate"in t)) || this.plugins.unshift(st)
        }
        async A(t, e) {
            const n = e.fetchAndCachePut(t).catch((()=>{}
            ));
            e.waitUntil(n);
            let i, r = await e.cacheMatch(t);
            if (r)
                ;
            else
                try {
                    r = await n
                } catch (t) {
                    t instanceof Error && (i = t)
                }
            if (!r)
                throw new s("no-response",{
                    url: t.url,
                    error: i
                });
            return r
        }
    }
    ,
    t.cleanupOutdatedCaches = function() {
        self.addEventListener("activate", (t=>{
            const e = A();
            t.waitUntil((async(t,e="-precache-")=>{
                const s = (await self.caches.keys()).filter((s=>s.includes(e) && s.includes(self.registration.scope) && s !== t));
                return await Promise.all(s.map((t=>self.caches.delete(t)))),
                s
            }
            )(e).then((t=>{}
            )))
        }
        ))
    }
    ,
    t.createHandlerBoundToURL = function(t) {
        return ft().createHandlerBoundToURL(t)
    }
    ,
    t.precacheAndRoute = function(t, e) {
        !function(t) {
            ft().precache(t)
        }(t),
        function(t) {
            const e = ft();
            h(new wt(e,t))
        }(e)
    }
    ,
    t.registerRoute = h
}
));
