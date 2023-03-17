var h = {
    exports: {}
};
(function(f) {
    var n = function(t, e) {
        return this instanceof n ? t instanceof n ? t : ((t = typeof t == "string" ? this.select(t, e) : t) && t.nodeName && (t = [t]),
        void (this.nodes = this.slice(t))) : new n(t,e)
    };
    n.prototype = {
        get length() {
            return this.nodes.length
        }
    },
    n.prototype.nodes = [],
    n.prototype.addClass = function() {
        return this.eacharg(arguments, function(t, e) {
            t.classList.add(e)
        })
    }
    ,
    n.prototype.adjacent = function(t, e, r) {
        return typeof e == "number" && (e = e === 0 ? [] : new Array(e).join().split(",").map(Number.call, Number)),
        this.each(function(o, u) {
            var c = document.createDocumentFragment();
            n(e || {}).map(function(s, i) {
                return i = typeof t == "function" ? t.call(this, s, i, o, u) : t,
                typeof i == "string" ? this.generate(i) : n(i)
            }).each(function(s) {
                this.isInPage(s) ? c.appendChild(n(s).clone().first()) : c.appendChild(s)
            }),
            r.call(this, o, c)
        })
    }
    ,
    n.prototype.after = function(t, e) {
        return this.adjacent(t, e, function(r, o) {
            r.parentNode.insertBefore(o, r.nextSibling)
        })
    }
    ,
    n.prototype.append = function(t, e) {
        return this.adjacent(t, e, function(r, o) {
            r.appendChild(o)
        })
    }
    ,
    n.prototype.args = function(t, e, r) {
        return (t = typeof (t = typeof t == "function" ? t(e, r) : t) != "string" ? this.slice(t).map(this.str(e, r)) : t).toString().split(/[\s,]+/).filter(function(o) {
            return o.length
        })
    }
    ,
    n.prototype.array = function(t) {
        var e = this;
        return this.nodes.reduce(function(r, o, u) {
            var c;
            return t ? (c = typeof (c = (c = t.call(e, o, u)) || !1) == "string" ? n(c) : c)instanceof n && (c = c.nodes) : c = o.innerHTML,
            r.concat(c !== !1 ? c : [])
        }, [])
    }
    ,
    n.prototype.attr = function(t, e, r) {
        return r = r ? "data-" : "",
        this.pairs(t, e, function(o, u) {
            return o.getAttribute(r + u)
        }, function(o, u, c) {
            c ? o.setAttribute(r + u, c) : o.removeAttribute(r + u)
        })
    }
    ,
    n.prototype.before = function(t, e) {
        return this.adjacent(t, e, function(r, o) {
            r.parentNode.insertBefore(o, r)
        })
    }
    ,
    n.prototype.children = function(t) {
        return this.map(function(e) {
            return this.slice(e.children)
        }).filter(t)
    }
    ,
    n.prototype.clone = function() {
        return this.map(function(t, e) {
            var r = t.cloneNode(!0)
              , o = this.getAll(r);
            return this.getAll(t).each(function(u, c) {
                for (var s in this.mirror)
                    this.mirror[s] && this.mirror[s](u, o.nodes[c])
            }),
            r
        })
    }
    ,
    n.prototype.getAll = function(t) {
        return n([t].concat(n("*", t).nodes))
    }
    ,
    n.prototype.mirror = {},
    n.prototype.mirror.events = function(t, e) {
        if (t._e)
            for (var r in t._e)
                t._e[r].forEach(function(o) {
                    n(e).on(r, o.callback)
                })
    }
    ,
    n.prototype.mirror.select = function(t, e) {
        n(t).is("select") && (e.value = t.value)
    }
    ,
    n.prototype.mirror.textarea = function(t, e) {
        n(t).is("textarea") && (e.value = t.value)
    }
    ,
    n.prototype.closest = function(t) {
        return this.map(function(e) {
            do
                if (n(e).is(t))
                    return e;
            while ((e = e.parentNode) && e !== document)
        })
    }
    ,
    n.prototype.data = function(t, e) {
        return this.attr(t, e, !0)
    }
    ,
    n.prototype.each = function(t) {
        return this.nodes.forEach(t.bind(this)),
        this
    }
    ,
    n.prototype.eacharg = function(t, e) {
        return this.each(function(r, o) {
            this.args(t, r, o).forEach(function(u) {
                e.call(this, r, u)
            }, this)
        })
    }
    ,
    n.prototype.empty = function() {
        return this.each(function(t) {
            for (; t.firstChild; )
                t.removeChild(t.firstChild)
        })
    }
    ,
    n.prototype.filter = function(t) {
        var e = t instanceof n ? function(r) {
            return t.nodes.indexOf(r) !== -1
        }
        : typeof t == "function" ? t : function(r) {
            return r.matches = r.matches || r.msMatchesSelector || r.webkitMatchesSelector,
            r.matches(t || "*")
        }
        ;
        return n(this.nodes.filter(e))
    }
    ,
    n.prototype.find = function(t) {
        return this.map(function(e) {
            return n(t || "*", e)
        })
    }
    ,
    n.prototype.first = function() {
        return this.nodes[0] || !1
    }
    ,
    n.prototype.generate = function(t) {
        return /^\s*<tr[> ]/.test(t) ? n(document.createElement("table")).html(t).children().children().nodes : /^\s*<t(h|d)[> ]/.test(t) ? n(document.createElement("table")).html(t).children().children().children().nodes : /^\s*</.test(t) ? n(document.createElement("div")).html(t).children().nodes : document.createTextNode(t)
    }
    ,
    n.prototype.handle = function() {
        var t = this.slice(arguments).map(function(e) {
            return typeof e == "function" ? function(r) {
                r.preventDefault(),
                e.apply(this, arguments)
            }
            : e
        }, this);
        return this.on.apply(this, t)
    }
    ,
    n.prototype.hasClass = function() {
        return this.is("." + this.args(arguments).join("."))
    }
    ,
    n.prototype.html = function(t) {
        return t === void 0 ? this.first().innerHTML || "" : this.each(function(e) {
            e.innerHTML = t
        })
    }
    ,
    n.prototype.is = function(t) {
        return 0 < this.filter(t).length
    }
    ,
    n.prototype.isInPage = function(t) {
        return t !== document.body && document.body.contains(t)
    }
    ,
    n.prototype.last = function() {
        return this.nodes[this.length - 1] || !1
    }
    ,
    n.prototype.map = function(t) {
        return t ? n(this.array(t)).unique() : this
    }
    ,
    n.prototype.not = function(t) {
        return this.filter(function(e) {
            return !n(e).is(t || !0)
        })
    }
    ,
    n.prototype.off = function(t, e, r) {
        var o = e == null && r == null
          , u = null
          , c = e;
        return typeof e == "string" && (u = e,
        c = r),
        this.eacharg(t, function(s, i) {
            n(s._e ? s._e[i] : []).each(function(a) {
                (o || a.orig_callback === c && a.selector === u) && s.removeEventListener(i, a.callback)
            })
        })
    }
    ,
    n.prototype.on = function(t, e, r) {
        function o(i, a) {
            try {
                Object.defineProperty(i, "currentTarget", {
                    value: a,
                    configurable: !0
                })
            } catch {}
        }
        var u = null
          , c = e;
        typeof e == "string" && (u = e,
        c = r,
        e = function(i) {
            var a = arguments;
            n(i.currentTarget).find(u).each(function(p) {
                var l;
                p.contains(i.target) && (l = i.currentTarget,
                o(i, p),
                r.apply(p, a),
                o(i, l))
            })
        }
        );
        function s(i) {
            return e.apply(this, [i].concat(i.detail || []))
        }
        return this.eacharg(t, function(i, a) {
            i.addEventListener(a, s),
            i._e = i._e || {},
            i._e[a] = i._e[a] || [],
            i._e[a].push({
                callback: s,
                orig_callback: c,
                selector: u
            })
        })
    }
    ,
    n.prototype.pairs = function(t, e, r, o) {
        var u;
        return e !== void 0 && (u = t,
        (t = {})[u] = e),
        typeof t == "object" ? this.each(function(c, s) {
            for (var i in t)
                typeof t[i] == "function" ? o(c, i, t[i](c, s)) : o(c, i, t[i])
        }) : this.length ? r(this.first(), t) : ""
    }
    ,
    n.prototype.param = function(t) {
        return Object.keys(t).map(function(e) {
            return this.uri(e) + "=" + this.uri(t[e])
        }
        .bind(this)).join("&")
    }
    ,
    n.prototype.parent = function(t) {
        return this.map(function(e) {
            return e.parentNode
        }).filter(t)
    }
    ,
    n.prototype.prepend = function(t, e) {
        return this.adjacent(t, e, function(r, o) {
            r.insertBefore(o, r.firstChild)
        })
    }
    ,
    n.prototype.remove = function() {
        return this.each(function(t) {
            t.parentNode && t.parentNode.removeChild(t)
        })
    }
    ,
    n.prototype.removeClass = function() {
        return this.eacharg(arguments, function(t, e) {
            t.classList.remove(e)
        })
    }
    ,
    n.prototype.replace = function(t, e) {
        var r = [];
        return this.adjacent(t, e, function(o, u) {
            r = r.concat(this.slice(u.children)),
            o.parentNode.replaceChild(u, o)
        }),
        n(r)
    }
    ,
    n.prototype.scroll = function() {
        return this.first().scrollIntoView({
            behavior: "smooth"
        }),
        this
    }
    ,
    n.prototype.select = function(t, e) {
        return t = t.replace(/^\s*/, "").replace(/\s*$/, ""),
        /^</.test(t) ? n().generate(t) : (e || document).querySelectorAll(t)
    }
    ,
    n.prototype.serialize = function() {
        var t = this;
        return this.slice(this.first().elements).reduce(function(e, r) {
            return !r.name || r.disabled || r.type === "file" || /(checkbox|radio)/.test(r.type) && !r.checked ? e : r.type === "select-multiple" ? (n(r.options).each(function(o) {
                o.selected && (e += "&" + t.uri(r.name) + "=" + t.uri(o.value))
            }),
            e) : e + "&" + t.uri(r.name) + "=" + t.uri(r.value)
        }, "").slice(1)
    }
    ,
    n.prototype.siblings = function(t) {
        return this.parent().children(t).not(this)
    }
    ,
    n.prototype.size = function() {
        return this.first().getBoundingClientRect()
    }
    ,
    n.prototype.slice = function(t) {
        return t && t.length !== 0 && typeof t != "string" && t.toString() !== "[object Function]" ? t.length ? [].slice.call(t.nodes || t) : [t] : []
    }
    ,
    n.prototype.str = function(t, e) {
        return function(r) {
            return typeof r == "function" ? r.call(this, t, e) : r.toString()
        }
    }
    ,
    n.prototype.text = function(t) {
        return t === void 0 ? this.first().textContent || "" : this.each(function(e) {
            e.textContent = t
        })
    }
    ,
    n.prototype.toggleClass = function(t, e) {
        return !!e === e ? this[e ? "addClass" : "removeClass"](t) : this.eacharg(t, function(r, o) {
            r.classList.toggle(o)
        })
    }
    ,
    n.prototype.trigger = function(t) {
        var e = this.slice(arguments).slice(1);
        return this.eacharg(t, function(r, o) {
            var u, c = {
                bubbles: !0,
                cancelable: !0,
                detail: e
            };
            try {
                u = new window.CustomEvent(o,c)
            } catch {
                (u = document.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, e)
            }
            r.dispatchEvent(u)
        })
    }
    ,
    n.prototype.unique = function() {
        return n(this.nodes.reduce(function(t, e) {
            return e != null && e !== !1 && t.indexOf(e) === -1 ? t.concat(e) : t
        }, []))
    }
    ,
    n.prototype.uri = function(t) {
        return encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
    }
    ,
    n.prototype.wrap = function(t) {
        return this.map(function(e) {
            return n(t).each(function(r) {
                (function(o) {
                    for (; o.firstElementChild; )
                        o = o.firstElementChild;
                    return n(o)
                }
                )(r).append(e.cloneNode(!0)),
                e.parentNode.replaceChild(r, e)
            })
        })
    }
    ,
    f.exports && (f.exports = n,
    f.exports.u = n)
}
)(h);
var d = h.exports;
export {d as u};
