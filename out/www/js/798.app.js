"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[798], { 9798: function (t, n, e) {
            "use strict";
            e.r(n), e.d(n, { amplify_nav: function () { return c; }, amplify_sign_out: function () { return f; } });
            var r = e(3922), o = e(3139), u = e(5573), a = e(5914), i = e(5489), s = e(7029), l = e(8396), c = function () { function t(t) { (0, r.r)(this, t); } return t.prototype.render = function () { return (0, r.h)("nav", { class: "nav" }, (0, r.h)("slot", null)); }, t; }();
            c.style = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";
            var f = function () { function t(t) { (0, r.r)(this, t), this.handleAuthStateChange = l.d, this.buttonText = i.T.SIGN_OUT; } return t.prototype.signOut = function (t) { return n = this, e = void 0, o = function () { var n; return function (t, n) { var e, r, o, u, a = { label: 0, sent: function () { if (1 & o[0])
                    throw o[1]; return o[1]; }, trys: [], ops: [] }; return u = { next: i(0), throw: i(1), return: i(2) }, "function" == typeof Symbol && (u[Symbol.iterator] = function () { return this; }), u; function i(u) { return function (i) { return function (u) { if (e)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (e = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done)
                        return o;
                    switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4: return a.label++, { value: u[1], done: !1 };
                        case 5:
                            a.label++, r = u[1], u = [0];
                            continue;
                        case 7:
                            u = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                a.label = u[1];
                                break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                                a.label = o[1], o = u;
                                break;
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(u);
                                break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    u = n.call(t, a);
                }
                catch (t) {
                    u = [6, t], r = 0;
                }
                finally {
                    e = o = 0;
                } if (5 & u[0])
                throw u[1]; return { value: u[0] ? u[1] : void 0, done: !0 }; }([u, i]); }; } }(this, (function (e) { switch (e.label) {
                case 0:
                    if (t && t.preventDefault(), !a.g || "function" != typeof a.g.signOut)
                        throw new Error(s.N);
                    e.label = 1;
                case 1: return e.trys.push([1, 3, , 4]), [4, a.g.signOut()];
                case 2: return e.sent(), this.handleAuthStateChange(u.A.SignedOut), [3, 4];
                case 3: return n = e.sent(), (0, l.a)(n), [3, 4];
                case 4: return [2];
            } })); }, new ((r = void 0) || (r = Promise))((function (t, u) { function a(t) { try {
                s(o.next(t));
            }
            catch (t) {
                u(t);
            } } function i(t) { try {
                s(o.throw(t));
            }
            catch (t) {
                u(t);
            } } function s(n) { var e; n.done ? t(n.value) : (e = n.value, e instanceof r ? e : new r((function (t) { t(e); }))).then(a, i); } s((o = o.apply(n, e || [])).next()); })); var n, e, r, o; }, t.prototype.render = function () { var t = this; return (0, r.h)("amplify-button", { slot: "sign-out", onClick: function (n) { return t.signOut(n); }, "data-test": "sign-out-button" }, o.o.get(this.buttonText)); }, t; }();
        } }]);
