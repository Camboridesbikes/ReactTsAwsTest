"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[883], { 8883: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, { amplify_s3_text_picker: function () { return s; } });
            var r = n(3922), i = n(5069), a = n(3139), l = n(9277), c = n(5489), o = (n(7403), n(4614)), u = new i.k("S3TextPicker"), s = function () { function t(t) { (0, r.r)(this, t), this.contentType = "text/*", this.level = l.A.Public, this.fallbackText = c.T.PICKER_TEXT; } return t.prototype.handleInput = function (t) { return e = this, n = void 0, i = function () { var e, n, r, i, a, l, c, s, h; return function (t, e) { var n, r, i, a, l = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
                throw new TypeError("Generator is already executing."); for (; l;)
                try {
                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
                        return i;
                    switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4: return l.label++, { value: a[1], done: !1 };
                        case 5:
                            l.label++, r = a[1], a = [0];
                            continue;
                        case 7:
                            a = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                l = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                l.label = a[1];
                                break;
                            }
                            if (6 === a[0] && l.label < i[1]) {
                                l.label = i[1], i = a;
                                break;
                            }
                            if (i && l.label < i[2]) {
                                l.label = i[2], l.ops.push(a);
                                break;
                            }
                            i[2] && l.ops.pop(), l.trys.pop();
                            continue;
                    }
                    a = e.call(t, l);
                }
                catch (t) {
                    a = [6, t], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & a[0])
                throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }(this, (function (f) { switch (f.label) {
                case 0:
                    if (e = t.target.files[0], r = (n = this).path, i = void 0 === r ? "" : r, a = n.level, l = n.fileToKey, c = n.track, s = i + (0, o.c)(e, l), !e)
                        throw new Error("No file was selected");
                    f.label = 1;
                case 1: return f.trys.push([1, 3, , 4]), [4, (0, o.p)(s, e, a, c, e.type, u)];
                case 2: return f.sent(), this.src = s, [3, 4];
                case 3: throw h = f.sent(), u.debug(h), new Error(h);
                case 4: return [2];
            } })); }, new ((r = void 0) || (r = Promise))((function (t, a) { function l(t) { try {
                o(i.next(t));
            }
            catch (t) {
                a(t);
            } } function c(t) { try {
                o(i.throw(t));
            }
            catch (t) {
                a(t);
            } } function o(e) { var n; e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r((function (t) { t(n); }))).then(l, c); } o((i = i.apply(e, n || [])).next()); })); var e, n, r, i; }, t.prototype.render = function () { var t = this; return (0, r.h)(r.H, null, (0, r.h)("amplify-s3-text", { textKey: this.src, path: this.path, level: this.level, track: this.track, identityId: this.identityId, contentType: this.contentType, fallbackText: a.o.get(this.fallbackText) }), (0, r.h)("amplify-picker", { inputHandler: function (e) { return t.handleInput(e); }, acceptValue: "text/*" })); }, t; }();
        } }]);
