"use strict";
/*! For license information please see 315.app.js.LICENSE.txt */
(self.webpackChunktest = self.webpackChunktest || []).push([[315], { 5315: function (t, e, r) {
            "use strict";
            r.r(e), r.d(e, { scopeCss: function () { return j; } });
            var n = "-shadowcsshost", s = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)", o = new RegExp("(-shadowcsshost" + s, "gim"), c = new RegExp("(-shadowcsscontext" + s, "gim"), a = new RegExp("(-shadowcssslotted" + s, "gim"), i = "-shadowcsshost-no-combinator", u = /-shadowcsshost-no-combinator([^\s]*)/, l = [/::shadow/g, /::content/g], h = /-shadowcsshost/gim, f = /:host/gim, p = /::slotted/gim, g = /:host-context/gim, d = /\/\*\s*[\s\S]*?\*\//g, v = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g, m = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g, x = /([{}])/g, w = "%BLOCK%", _ = function (t, e) { var r = b(t), n = 0; return r.escapedString.replace(m, (function () { for (var t = [], s = 0; s < arguments.length; s++)
                t[s] = arguments[s]; var o = t[2], c = "", a = t[4], i = ""; a && a.startsWith("{%BLOCK%") && (c = r.blocks[n++], a = a.substring(w.length + 1), i = "{"); var u = { selector: o, content: c }, l = e(u); return "" + t[1] + l.selector + t[3] + i + l.content + a; })); }, b = function (t) { for (var e = t.split(x), r = [], n = [], s = 0, o = [], c = 0; c < e.length; c++) {
                var a = e[c];
                "}" === a && s--, s > 0 ? o.push(a) : (o.length > 0 && (n.push(o.join("")), r.push(w), o = []), r.push(a)), "{" === a && s++;
            } return o.length > 0 && (n.push(o.join("")), r.push(w)), { escapedString: r.join(""), blocks: n }; }, S = function (t, e, r) { return t.replace(e, (function () { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; if (t[2]) {
                for (var n = t[2].split(","), s = [], o = 0; o < n.length; o++) {
                    var c = n[o].trim();
                    if (!c)
                        break;
                    s.push(r(i, c, t[3]));
                }
                return s.join(",");
            } return i + t[3]; })); }, O = function (t, e, r) { return t + e.replace(n, "") + r; }, W = function (t, e, r) { return e.indexOf(n) > -1 ? O(t, e, r) : t + e + r + ", " + e + " " + t + r; }, k = function (t, e, r, n, s) { return _(t, (function (t) { var s = t.selector, o = t.content; return "@" !== t.selector[0] ? s = function (t, e, r, n) { return t.split(",").map((function (t) { return n && t.indexOf("." + n) > -1 ? t.trim() : function (t, e) { return !function (t) { return t = t.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), new RegExp("^(" + t + ")([>\\s~+[.,{:][\\s\\S]*)?$", "m"); }(e).test(t); }(t, e) ? function (t, e, r) { for (var n, s = "." + (e = e.replace(/\[is=([^\]]*)\]/g, (function (t) { for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r]; return e[0]; }))), o = function (t) { var n = t.trim(); if (!n)
                return ""; if (t.indexOf(i) > -1)
                n = function (t, e, r) { if (h.lastIndex = 0, h.test(t)) {
                    var n = "." + r;
                    return t.replace(u, (function (t, e) { return e.replace(/([^:]*)(:*)(.*)/, (function (t, e, r, s) { return e + n + r + s; })); })).replace(h, n + " ");
                } return e + " " + t; }(t, e, r);
            else {
                var o = t.replace(h, "");
                if (o.length > 0) {
                    var c = o.match(/([^:]*)(:*)(.*)/);
                    c && (n = c[1] + s + c[2] + c[3]);
                }
            } return n; }, c = function (t) { var e = [], r = 0; return { content: (t = t.replace(/(\[[^\]]*\])/g, (function (t, n) { var s = "__ph-" + r + "__"; return e.push(n), r++, s; }))).replace(/(:nth-[-\w]+)(\([^)]+\))/g, (function (t, n, s) { var o = "__ph-" + r + "__"; return e.push(s), r++, n + o; })), placeholders: e }; }(t), a = "", l = 0, f = /( |>|\+|~(?!=))\s*/g, p = !((t = c.content).indexOf(i) > -1); null !== (n = f.exec(t));) {
                var g = n[1], d = t.slice(l, n.index).trim();
                a += ((p = p || d.indexOf(i) > -1) ? o(d) : d) + " " + g + " ", l = f.lastIndex;
            } var v, m = t.substring(l); return a += (p = p || m.indexOf(i) > -1) ? o(m) : m, v = c.placeholders, a.replace(/__ph-(\d+)__/g, (function (t, e) { return v[+e]; })); }(t, e, r).trim() : t.trim(); })).join(", "); }(t.selector, e, r, n) : (t.selector.startsWith("@media") || t.selector.startsWith("@supports") || t.selector.startsWith("@page") || t.selector.startsWith("@document")) && (o = k(t.content, e, r, n)), { selector: s.replace(/\s{2,}/g, " ").trim(), content: o }; })); }, j = function (t, e, r) { var s = e + "-h", u = e + "-s", h = t.match(v) || []; t = t.replace(d, ""); var m = []; if (r) {
                var x = function (t) { var e = "/*!@___" + m.length + "___*/", r = "/*!@" + t.selector + "*/"; return m.push({ placeholder: e, comment: r }), t.selector = e + t.selector, t; };
                t = _(t, (function (t) { return "@" !== t.selector[0] ? x(t) : t.selector.startsWith("@media") || t.selector.startsWith("@supports") || t.selector.startsWith("@page") || t.selector.startsWith("@document") ? (t.content = _(t.content, x), t) : t; }));
            } var w = function (t, e, r, s, u) { var h = function (t, e) { var r = "." + e + " > ", n = []; return t = t.replace(a, (function () { for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]; if (t[2]) {
                for (var s = t[2].trim(), o = t[3], c = r + s + o, a = "", u = t[4] - 1; u >= 0; u--) {
                    var l = t[5][u];
                    if ("}" === l || "," === l)
                        break;
                    a = l + a;
                }
                var h = a + c, f = "" + a.trimRight() + c.trim();
                if (h.trim() !== f.trim()) {
                    var p = f + ", " + h;
                    n.push({ orgSelector: h, updatedSelector: p });
                }
                return c;
            } return i + t[3]; })), { selectors: n, cssText: t }; }(t = function (t) { return S(t, c, W); }(t = function (t) { return S(t, o, O); }(t = t.replace(g, "-shadowcsscontext").replace(f, n).replace(p, "-shadowcssslotted"))), s); return t = function (t) { return l.reduce((function (t, e) { return t.replace(e, " "); }), t); }(t = h.cssText), e && (t = k(t, e, r, s)), { cssText: (t = (t = t.replace(/-shadowcsshost-no-combinator/g, "." + r)).replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ")).trim(), slottedSelectors: h.selectors }; }(t, e, s, u); return t = function () { for (var t = 0, e = 0, r = arguments.length; e < r; e++)
                t += arguments[e].length; var n = Array(t), s = 0; for (e = 0; e < r; e++)
                for (var o = arguments[e], c = 0, a = o.length; c < a; c++, s++)
                    n[s] = o[c]; return n; }([w.cssText], h).join("\n"), r && m.forEach((function (e) { var r = e.placeholder, n = e.comment; t = t.replace(r, n); })), w.slottedSelectors.forEach((function (e) { t = t.replace(e.orgSelector, e.updatedSelector); })), t; };
        } }]);
