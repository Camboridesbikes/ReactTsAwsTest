"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[575], { 3575: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, { amplify_s3_image: function () { return l; } });
            var r = n(3922), i = n(5069), o = n(9277), a = (n(7403), n(4614)), u = function (t, e, n, r) { return new (n || (n = Promise))((function (i, o) { function a(t) { try {
                c(r.next(t));
            }
            catch (t) {
                o(t);
            } } function u(t) { try {
                c(r.throw(t));
            }
            catch (t) {
                o(t);
            } } function c(t) { var e; t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) { t(e); }))).then(a, u); } c((r = r.apply(t, e || [])).next()); })); }, c = function (t, e) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function u(o) { return function (u) { return function (o) { if (n)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                        return i;
                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4: return a.label++, { value: o[1], done: !1 };
                        case 5:
                            a.label++, r = o[1], o = [0];
                            continue;
                        case 7:
                            o = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                a.label = o[1];
                                break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                                a.label = i[1], i = o;
                                break;
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(o);
                                break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    o = e.call(t, a);
                }
                catch (t) {
                    o = [6, t], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & o[0])
                throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u]); }; } }, s = new i.k("S3Image"), l = function () { function t(t) { (0, r.r)(this, t), this.contentType = "binary/octet-stream", this.level = o.A.Public; } return t.prototype.watchHandler = function () { return u(this, void 0, void 0, (function () { return c(this, (function (t) { switch (t.label) {
                case 0: return [4, this.load()];
                case 1: return t.sent(), [2];
            } })); })); }, t.prototype.componentWillLoad = function () { return u(this, void 0, void 0, (function () { return c(this, (function (t) { switch (t.label) {
                case 0: return [4, this.load()];
                case 1: return t.sent(), [2];
            } })); })); }, t.prototype.load = function () { return u(this, void 0, void 0, (function () { var t, e, n, r, i, o, u, l, h, f, d; return c(this, (function (c) { switch (c.label) {
                case 0:
                    if (e = (t = this).imgKey, n = t.path, r = t.body, i = t.contentType, o = t.level, u = t.track, l = t.identityId, !e && !n)
                        return s.debug("empty imgKey and path"), [2];
                    h = e || n, s.debug("loading " + h + "..."), c.label = 1;
                case 1: return c.trys.push([1, 5, , 6]), r ? [4, (0, a.p)(e, r, o, u, i, s)] : [3, 3];
                case 2: c.sent(), c.label = 3;
                case 3: return f = this, [4, (0, a.g)(h, o, u, l, s)];
                case 4: return f.src = c.sent(), [3, 6];
                case 5: throw d = c.sent(), s.debug(d), new Error(d);
                case 6: return [2];
            } })); })); }, t.prototype.render = function () { return (0, r.h)(r.H, null, this.src && (0, r.h)("img", { src: this.src, onLoad: this.handleOnLoad, onError: this.handleOnError })); }, Object.defineProperty(t, "watchers", { get: function () { return { body: ["watchHandler"] }; }, enumerable: !1, configurable: !0 }), t; }();
            l.style = ":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}";
        } }]);
