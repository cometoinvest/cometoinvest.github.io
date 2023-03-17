import {S as l, i, s as r, B as u, C as f, D as _, E as c, t as d, a as p, w as m, x as$} from "./vendor-c8db6aee.js";
function g(a) {
    let s;
    const o = a[1].default
      , e = u(o, a, a[0], null);
    return {
        c() {
            e && e.c()
        },
        m(t, n) {
            e && e.m(t, n),
            s = !0
        },
        p(t, [n]) {
            e && e.p && (!s || n & 1) && f(e, o, t, t[0], s ? c(o, t[0], n, null) : _(t[0]), null)
        },
        i(t) {
            s || (d(e, t),
            s = !0)
        },
        o(t) {
            p(e, t),
            s = !1
        },
        d(t) {
            e && e.d(t)
        }
    }
}
function b(a, s, o) {
    let {$$slots: e={}, $$scope: t} = s;
    return m(()=>{}
    ),
    $(function() {}),
    a.$$set = n=>{
        "$$scope"in n && o(0, t = n.$$scope)
    }
    ,
    [t, e]
}
class v extends l {
    constructor(s) {
        super();
        i(this, s, b, g, r, {})
    }
}
export {v as default};
