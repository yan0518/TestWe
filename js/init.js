!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Flexible = t() : e.Flexible = t()
} (this,
function() {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var o = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.p = "",
        t(0)
    } ([function(e, t) {
        "use strict";
        function i() {
            var e = o.getBoundingClientRect().width;
            e / d > 540 && (e = 540 * d);
            var t = e / 10;
            o.style.fontSize = t + "px",
            p.rem = window.rem = t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = window.document,
        o = n.documentElement,
        r = n.querySelector('meta[name="viewport"]'),
        a = n.querySelector('meta[name="flexible"]'),
        d = 0,
        s = 0,
        l = void 0,
        p = {};
        if (t.default = p, r) {
            console.info("Will be based on the existing meta tags to set the zoom ratio");
            var m = r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
            m && (s = parseFloat(m[1]), d = parseInt(1 / s))
        } else if (a) {
            var c = a.getAttribute("content");
            if (c) {
                var u = c.match(/initial\-dpr=([\d\.]+)/),
                f = c.match(/maximum\-dpr=([\d\.]+)/);
                u && (d = parseFloat(u[1]), s = parseFloat((1 / d).toFixed(2))),
                f && (d = parseFloat(f[1]), s = parseFloat((1 / d).toFixed(2)))
            }
        }
        if (!d && !s) {
            var x = (window.navigator.appVersion.match(/android/gi), window.navigator.appVersion.match(/iphone/gi)),
            v = window.devicePixelRatio;
            d = x ? v >= 3 && (!d || d >= 3) ? 3 : v >= 2 && (!d || d >= 2) ? 2 : 1 : 1,
            s = 1 / d
        }
        if (o.setAttribute("data-dpr", d), !r) 
            if (r = n.createElement("meta"), r.setAttribute("name", "viewport"), r.setAttribute("content", "initial-scale=" + s + ", maximum-scale=" + s + ", minimum-scale=" + s + ", user-scalable=no"), o.firstElementChild)
                o.firstElementChild.appendChild(r);
        else {
            var w = n.createElement("div");
            w.appendChild(r),
            n.write(w.innerHTML)
        }
        window.addEventListener("resize",
            function() {
                clearTimeout(l),
                l = setTimeout(i, 300)
            }, 
        !1),
        window.addEventListener("pageshow",
        function(e) {
            e.persisted && (clearTimeout(l), l = setTimeout(i, 300))
        },
        !1),
        "complete" === n.readyState ? n.body.style.fontSize = 12 * d + "px": n.addEventListener("DOMContentLoaded",
        function(e) {
            n.body.style.fontSize = 12 * d + "px"
        },
        !1),
        i(),
        p.dpr = window.dpr = d,
        p.refreshRem = i,
        p.rem2px = function(e) {
            var t = parseFloat(e) * this.rem;
            return "string" == typeof e && e.match(/rem$/) && (t += "px"),
            t
        },
        p.px2rem = function(e) {
            var t = parseFloat(e) / this.rem;
            return "string" == typeof e && e.match(/px$/) && (t += "rem"),
            t
        },
        e.exports = t.default
    }])
});