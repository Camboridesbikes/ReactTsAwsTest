"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[177], { 7177: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, { amplify_chatbot: function () { return vt; } });
            var o = n(3922), i = n(5069), r = n(9222), a = n(3139), s = n(5489), c = n(7029), u = n(5387), l = function () { return (l = Object.assign || function (e) { for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, d = new i.k("AbstractInteractionsProvider"), f = function () { function e(e) { void 0 === e && (e = {}), this._config = e; } return e.prototype.configure = function (e) { return void 0 === e && (e = {}), this._config = l(l({}, this._config), e), d.debug("configure " + this.getProviderName(), this._config), this.options; }, e.prototype.getCategory = function () { return "Interactions"; }, Object.defineProperty(e.prototype, "options", { get: function () { return l({}, this._config); }, enumerable: !0, configurable: !0 }), e; }(), p = function (e, t) { return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); })(e, t); };
            function m(e, t) { function n() { this.constructor = e; } p(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }
            var h = function () { return (h = Object.assign || function (e) { for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
            function v(e, t, n, o) { return new (n || (n = Promise))((function (i, r) { function a(e) { try {
                c(o.next(e));
            }
            catch (e) {
                r(e);
            } } function s(e) { try {
                c(o.throw(e));
            }
            catch (e) {
                r(e);
            } } function c(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } c((o = o.apply(e, t || [])).next()); })); }
            function g(e, t) { var n, o, i, r, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return r = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (r[Symbol.iterator] = function () { return this; }), r; function s(r) { return function (s) { return function (r) { if (n)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done)
                        return i;
                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4: return a.label++, { value: r[1], done: !1 };
                        case 5:
                            a.label++, o = r[1], r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break;
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1], i = r;
                                break;
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(r);
                                break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    r = t.call(e, a);
                }
                catch (e) {
                    r = [6, e], o = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & r[0])
                throw r[1]; return { value: r[0] ? r[1] : void 0, done: !0 }; }([r, s]); }; } }
            function b(e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
                return e; var o, i, r = n.call(e), a = []; try {
                for (; (void 0 === t || t-- > 0) && !(o = r.next()).done;)
                    a.push(o.value);
            }
            catch (e) {
                i = { error: e };
            }
            finally {
                try {
                    o && !o.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            } return a; }
            Object.create, Object.create;
            var y = JSON.parse('{"u2":"@aws-sdk/client-lex-runtime-service","i8":"1.0.0-rc.4"}');
            var x, w, S, E, T, C, A, I, L, N, k, _, P, z, R, O, F, B, M, U, $, D, j, V, q, H, G, W, J, X, Q, Y, K, Z, ee, te = n(7643), ne = n(4227), oe = n(5582), ie = n(5721), re = n(4104), ae = n(7157), se = n(2795), ce = n(5731), ue = "runtime.lex.{region}.amazonaws.com", le = new Set(["ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1", "eu-north-1", "eu-west-1", "eu-west-2", "eu-west-3", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-west-1", "us-west-2"]), de = new Set(["cn-north-1", "cn-northwest-1"]), fe = new Set(["us-iso-east-1"]), pe = new Set(["us-isob-east-1"]), me = new Set(["us-gov-east-1", "us-gov-west-1"]), he = h(h({}, { apiVersion: "2016-11-28", disableHostPrefix: !1, logger: {}, regionInfoProvider: function (e, t) { var n = void 0; switch (e) {
                    case "eu-west-1":
                        n = { hostname: "runtime.lex.eu-west-1.amazonaws.com", partition: "aws", signingService: "lex" };
                        break;
                    case "us-east-1":
                        n = { hostname: "runtime.lex.us-east-1.amazonaws.com", partition: "aws", signingService: "lex" };
                        break;
                    case "us-west-2":
                        n = { hostname: "runtime.lex.us-west-2.amazonaws.com", partition: "aws", signingService: "lex" };
                        break;
                    default: le.has(e) && (n = { hostname: ue.replace("{region}", e), partition: "aws", signingService: "lex" }), de.has(e) && (n = { hostname: "runtime.lex.{region}.amazonaws.com.cn".replace("{region}", e), partition: "aws-cn" }), fe.has(e) && (n = { hostname: "runtime.lex.{region}.c2s.ic.gov".replace("{region}", e), partition: "aws-iso" }), pe.has(e) && (n = { hostname: "runtime.lex.{region}.sc2s.sgov.gov".replace("{region}", e), partition: "aws-iso-b" }), me.has(e) && (n = { hostname: "runtime.lex.{region}.amazonaws.com".replace("{region}", e), partition: "aws-us-gov" }), void 0 === n && (n = { hostname: ue.replace("{region}", e), partition: "aws", signingService: "lex" });
                } return Promise.resolve(n); }, signingName: "lex" }), { runtime: "browser", base64Decoder: ae.G, base64Encoder: ae.s, bodyLengthChecker: se.W, credentialDefaultProvider: (0, oe.s)("Credential is missing"), defaultUserAgent: (0, ce.f)(y.u2, y.i8), maxAttempts: ie.J, region: (0, oe.s)("Region is missing"), requestHandler: new ne.B, sha256: te.Sha256, streamCollector: ne.C, urlParser: re.e, utf8Decoder: function (e) { return "function" == typeof TextEncoder ? function (e) { return (new TextEncoder).encode(e); }(e) : function (e) { for (var t = [], n = 0, o = e.length; n < o; n++) {
                    var i = e.charCodeAt(n);
                    if (i < 128)
                        t.push(i);
                    else if (i < 2048)
                        t.push(i >> 6 | 192, 63 & i | 128);
                    else if (n + 1 < e.length && 55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                        var r = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++n));
                        t.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
                    }
                    else
                        t.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128);
                } return Uint8Array.from(t); }(e); }, utf8Encoder: function (e) { return "function" == typeof TextDecoder ? function (e) { return new TextDecoder("utf-8").decode(e); }(e) : function (e) { for (var t = "", n = 0, o = e.length; n < o; n++) {
                    var i = e[n];
                    if (i < 128)
                        t += String.fromCharCode(i);
                    else if (192 <= i && i < 224) {
                        var r = e[++n];
                        t += String.fromCharCode((31 & i) << 6 | 63 & r);
                    }
                    else if (240 <= i && i < 365) {
                        var a = "%" + [i, e[++n], e[++n], e[++n]].map((function (e) { return e.toString(16); })).join("%");
                        t += decodeURIComponent(a);
                    }
                    else
                        t += String.fromCharCode((15 & i) << 12 | (63 & e[++n]) << 6 | 63 & e[++n]);
                } return t; }(e); } }), ve = n(9162), ge = n(672), be = n(3273), ye = n(7137), xe = n(7139), we = n(6317), Se = n(3890), Ee = function (e) { function t(t) { var n = this, o = h(h({}, he), t), i = (0, ve.Xb)(o), r = (0, ve.g4)(i), a = (0, xe.A$)(r), s = (0, ie.BC)(a), c = (0, we.er)(s), u = (0, be.S8)(c); return (n = e.call(this, u) || this).config = u, n.middlewareStack.use((0, xe.yt)(n.config)), n.middlewareStack.use((0, ie.NQ)(n.config)), n.middlewareStack.use((0, we.XJ)(n.config)), n.middlewareStack.use((0, ge.VG)(n.config)), n.middlewareStack.use((0, be.G2)(n.config)), n.middlewareStack.use((0, ye.cV)(n.config)), n; } return m(t, e), t.prototype.destroy = function () { e.prototype.destroy.call(this); }, t; }(Se.KU);
            !function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(x || (x = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(w || (w = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(S || (S = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(E || (E = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(T || (T = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(C || (C = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(A || (A = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(I || (I = {})), function (e) { e.FAILED = "Failed", e.FULFILLED = "Fulfilled", e.READY_FOR_FULFILLMENT = "ReadyForFulfillment"; }(L || (L = {})), function (e) { e.COMPOSITE = "Composite", e.CUSTOM_PAYLOAD = "CustomPayload", e.PLAIN_TEXT = "PlainText", e.SSML = "SSML"; }(N || (N = {})), function (e) { e.CLOSE = "Close", e.CONFIRM_INTENT = "ConfirmIntent", e.DELEGATE = "Delegate", e.ELICIT_INTENT = "ElicitIntent", e.ELICIT_SLOT = "ElicitSlot"; }(k || (k = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h(h({}, e), e.slots && { slots: Se.oc }), e.message && { message: Se.oc }); }; }(_ || (_ = {})), function (e) { e.CONFIRMED = "Confirmed", e.DENIED = "Denied", e.NONE = "None"; }(P || (P = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h({}, e), e.slots && { slots: Se.oc }); }; }(z || (z = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h(h(h({}, e), e.dialogAction && { dialogAction: _.filterSensitiveLog(e.dialogAction) }), e.recentIntentSummaryView && { recentIntentSummaryView: e.recentIntentSummaryView.map((function (e) { return z.filterSensitiveLog(e); })) }), e.sessionAttributes && { sessionAttributes: Se.oc }); }; }(R || (R = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(O || (O = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(F || (F = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(B || (B = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(M || (M = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h(h({}, e), e.requestAttributes && { requestAttributes: Se.oc }), e.sessionAttributes && { sessionAttributes: Se.oc }); }; }(U || (U = {})), function (e) { e.CONFIRM_INTENT = "ConfirmIntent", e.ELICIT_INTENT = "ElicitIntent", e.ELICIT_SLOT = "ElicitSlot", e.FAILED = "Failed", e.FULFILLED = "Fulfilled", e.READY_FOR_FULFILLMENT = "ReadyForFulfillment"; }($ || ($ = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h({}, e), e.message && { message: Se.oc }); }; }(D || (D = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(j || (j = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(V || (V = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h(h(h({}, e), e.requestAttributes && { requestAttributes: Se.oc }), e.inputText && { inputText: Se.oc }), e.sessionAttributes && { sessionAttributes: Se.oc }); }; }(q || (q = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(H || (H = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h({}, e), e.slots && { slots: Se.oc }); }; }(G || (G = {})), function (e) { e.GENERIC = "application/vnd.amazonaws.card.generic"; }(W || (W = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(J || (J = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(X || (X = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(Q || (Q = {})), function (e) { e.filterSensitiveLog = function (e) { return h({}, e); }; }(Y || (Y = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h(h(h(h({}, e), e.alternativeIntents && { alternativeIntents: e.alternativeIntents.map((function (e) { return G.filterSensitiveLog(e); })) }), e.message && { message: Se.oc }), e.sessionAttributes && { sessionAttributes: Se.oc }), e.slots && { slots: Se.oc }); }; }(K || (K = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h(h(h({}, e), e.dialogAction && { dialogAction: _.filterSensitiveLog(e.dialogAction) }), e.recentIntentSummaryView && { recentIntentSummaryView: e.recentIntentSummaryView.map((function (e) { return z.filterSensitiveLog(e); })) }), e.sessionAttributes && { sessionAttributes: Se.oc }); }; }(Z || (Z = {})), function (e) { e.filterSensitiveLog = function (e) { return h(h({}, e), e.message && { message: Se.oc }); }; }(ee || (ee = {}));
            var Te = n(8467), Ce = function (e, t) { return v(void 0, void 0, void 0, (function () { var n, o, i, r, a, s, c, u, l, d, f, p, m, v, b, y, x, w; return g(this, (function (g) { switch (g.label) {
                case 0: return o = [h({}, e)], w = {}, [4, Ge(e.body, t)];
                case 1:
                    switch (n = h.apply(void 0, o.concat([(w.body = g.sent(), w)])), r = "UnknownError", r = We(e, n.body)) {
                        case "BadGatewayException":
                        case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3, 2];
                        case "BadRequestException":
                        case "com.amazonaws.lexruntimeservice#BadRequestException": return [3, 4];
                        case "ConflictException":
                        case "com.amazonaws.lexruntimeservice#ConflictException": return [3, 6];
                        case "DependencyFailedException":
                        case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3, 8];
                        case "InternalFailureException":
                        case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3, 10];
                        case "LimitExceededException":
                        case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3, 12];
                        case "LoopDetectedException":
                        case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3, 14];
                        case "NotAcceptableException":
                        case "com.amazonaws.lexruntimeservice#NotAcceptableException": return [3, 16];
                        case "NotFoundException":
                        case "com.amazonaws.lexruntimeservice#NotFoundException": return [3, 18];
                        case "RequestTimeoutException":
                        case "com.amazonaws.lexruntimeservice#RequestTimeoutException": return [3, 20];
                        case "UnsupportedMediaTypeException":
                        case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException": return [3, 22];
                    }
                    return [3, 24];
                case 2: return a = [{}], [4, Ie(n, t)];
                case 3: return i = h.apply(void 0, [h.apply(void 0, a.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 4: return s = [{}], [4, Le(n, t)];
                case 5: return i = h.apply(void 0, [h.apply(void 0, s.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 6: return c = [{}], [4, Ne(n, t)];
                case 7: return i = h.apply(void 0, [h.apply(void 0, c.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 8: return u = [{}], [4, ke(n, t)];
                case 9: return i = h.apply(void 0, [h.apply(void 0, u.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 10: return l = [{}], [4, _e(n, t)];
                case 11: return i = h.apply(void 0, [h.apply(void 0, l.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 12: return d = [{}], [4, Pe(n, t)];
                case 13: return i = h.apply(void 0, [h.apply(void 0, d.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 14: return f = [{}], [4, ze(n, t)];
                case 15: return i = h.apply(void 0, [h.apply(void 0, f.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 16: return p = [{}], [4, Re(n, t)];
                case 17: return i = h.apply(void 0, [h.apply(void 0, p.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 18: return m = [{}], [4, Oe(n, t)];
                case 19: return i = h.apply(void 0, [h.apply(void 0, m.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 20: return v = [{}], [4, Fe(n, t)];
                case 21: return i = h.apply(void 0, [h.apply(void 0, v.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 22: return b = [{}], [4, Be(n, t)];
                case 23: return i = h.apply(void 0, [h.apply(void 0, b.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 25];
                case 24: y = n.body, r = y.code || y.Code || r, i = h(h({}, y), { name: "" + r, message: y.message || y.Message || r, $fault: "client", $metadata: qe(e) }), g.label = 25;
                case 25: return x = i.message || i.Message || r, i.message = x, delete i.Message, [2, Promise.reject(Object.assign(new Error(x), i))];
            } })); })); }, Ae = function (e, t) { return v(void 0, void 0, void 0, (function () { var n, o, i, r, a, s, c, u, l, d, f, p, m, v, b; return g(this, (function (g) { switch (g.label) {
                case 0: return o = [h({}, e)], b = {}, [4, Ge(e.body, t)];
                case 1:
                    switch (n = h.apply(void 0, o.concat([(b.body = g.sent(), b)])), r = "UnknownError", r = We(e, n.body)) {
                        case "BadGatewayException":
                        case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3, 2];
                        case "BadRequestException":
                        case "com.amazonaws.lexruntimeservice#BadRequestException": return [3, 4];
                        case "ConflictException":
                        case "com.amazonaws.lexruntimeservice#ConflictException": return [3, 6];
                        case "DependencyFailedException":
                        case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3, 8];
                        case "InternalFailureException":
                        case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3, 10];
                        case "LimitExceededException":
                        case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3, 12];
                        case "LoopDetectedException":
                        case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3, 14];
                        case "NotFoundException":
                        case "com.amazonaws.lexruntimeservice#NotFoundException": return [3, 16];
                    }
                    return [3, 18];
                case 2: return a = [{}], [4, Ie(n, t)];
                case 3: return i = h.apply(void 0, [h.apply(void 0, a.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 4: return s = [{}], [4, Le(n, t)];
                case 5: return i = h.apply(void 0, [h.apply(void 0, s.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 6: return c = [{}], [4, Ne(n, t)];
                case 7: return i = h.apply(void 0, [h.apply(void 0, c.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 8: return u = [{}], [4, ke(n, t)];
                case 9: return i = h.apply(void 0, [h.apply(void 0, u.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 10: return l = [{}], [4, _e(n, t)];
                case 11: return i = h.apply(void 0, [h.apply(void 0, l.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 12: return d = [{}], [4, Pe(n, t)];
                case 13: return i = h.apply(void 0, [h.apply(void 0, d.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 14: return f = [{}], [4, ze(n, t)];
                case 15: return i = h.apply(void 0, [h.apply(void 0, f.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 16: return p = [{}], [4, Oe(n, t)];
                case 17: return i = h.apply(void 0, [h.apply(void 0, p.concat([g.sent()])), { name: r, $metadata: qe(e) }]), [3, 19];
                case 18: m = n.body, r = m.code || m.Code || r, i = h(h({}, m), { name: "" + r, message: m.message || m.Message || r, $fault: "client", $metadata: qe(e) }), g.label = 19;
                case 19: return v = i.message || i.Message || r, i.message = v, delete i.Message, [2, Promise.reject(Object.assign(new Error(v), i))];
            } })); })); }, Ie = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "BadGatewayException", $fault: "server", $metadata: qe(e), Message: void 0 }, void 0 !== (n = e.body).Message && null !== n.Message && (t.Message = n.Message), [2, t]; })); })); }, Le = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "BadRequestException", $fault: "client", $metadata: qe(e), message: void 0 }, void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, Ne = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "ConflictException", $fault: "client", $metadata: qe(e), message: void 0 }, void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, ke = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "DependencyFailedException", $fault: "client", $metadata: qe(e), Message: void 0 }, void 0 !== (n = e.body).Message && null !== n.Message && (t.Message = n.Message), [2, t]; })); })); }, _e = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "InternalFailureException", $fault: "server", $metadata: qe(e), message: void 0 }, void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, Pe = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "LimitExceededException", $fault: "client", $metadata: qe(e), message: void 0, retryAfterSeconds: void 0 }, void 0 !== e.headers["retry-after"] && (t.retryAfterSeconds = e.headers["retry-after"]), void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, ze = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "LoopDetectedException", $fault: "server", $metadata: qe(e), Message: void 0 }, void 0 !== (n = e.body).Message && null !== n.Message && (t.Message = n.Message), [2, t]; })); })); }, Re = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "NotAcceptableException", $fault: "client", $metadata: qe(e), message: void 0 }, void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, Oe = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "NotFoundException", $fault: "client", $metadata: qe(e), message: void 0 }, void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, Fe = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "RequestTimeoutException", $fault: "client", $metadata: qe(e), message: void 0 }, void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, Be = function (e, t) { return v(void 0, void 0, void 0, (function () { var t, n; return g(this, (function (o) { return t = { name: "UnsupportedMediaTypeException", $fault: "client", $metadata: qe(e), message: void 0 }, void 0 !== (n = e.body).message && null !== n.message && (t.message = n.message), [2, t]; })); })); }, Me = function (e, t) { return Object.entries(e).reduce((function (e, t) { var n, o = b(t, 2), i = o[0], r = o[1]; return h(h({}, e), ((n = {})[i] = r, n)); }), {}); }, Ue = function (e, t) { return (e || []).map((function (e) { return function (e, t) { return { attachmentLinkUrl: void 0 !== e.attachmentLinkUrl && null !== e.attachmentLinkUrl ? e.attachmentLinkUrl : void 0, buttons: void 0 !== e.buttons && null !== e.buttons ? De(e.buttons, t) : void 0, imageUrl: void 0 !== e.imageUrl && null !== e.imageUrl ? e.imageUrl : void 0, subTitle: void 0 !== e.subTitle && null !== e.subTitle ? e.subTitle : void 0, title: void 0 !== e.title && null !== e.title ? e.title : void 0 }; }(e, t); })); }, $e = function (e, t) { return { score: void 0 !== e.score && null !== e.score ? e.score : void 0 }; }, De = function (e, t) { return (e || []).map((function (e) { return function (e, t) { return { text: void 0 !== e.text && null !== e.text ? e.text : void 0, value: void 0 !== e.value && null !== e.value ? e.value : void 0 }; }(e); })); }, je = function (e, t) { return { intentName: void 0 !== e.intentName && null !== e.intentName ? e.intentName : void 0, nluIntentConfidence: void 0 !== e.nluIntentConfidence && null !== e.nluIntentConfidence ? $e(e.nluIntentConfidence) : void 0, slots: void 0 !== e.slots && null !== e.slots ? Ve(e.slots, t) : void 0 }; }, Ve = function (e, t) { return Object.entries(e).reduce((function (e, t) { var n, o = b(t, 2), i = o[0], r = o[1]; return h(h({}, e), ((n = {})[i] = r, n)); }), {}); }, qe = function (e) { return { httpStatusCode: e.statusCode, httpHeaders: e.headers, requestId: e.headers["x-amzn-requestid"] }; }, He = function (e) { return !(void 0 === e || "" === e || Object.getOwnPropertyNames(e).includes("length") && 0 == e.length || Object.getOwnPropertyNames(e).includes("size") && 0 == e.size); }, Ge = function (e, t) { return function (e, t) { return function (e, t) { return void 0 === e && (e = new Uint8Array), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array); }(e, t).then((function (e) { return t.utf8Encoder(e); })); }(e, t).then((function (e) { return e.length ? JSON.parse(e) : {}; })); }, We = function (e, t) { var n, o = function (e) { var t = e; return t.indexOf(":") >= 0 && (t = t.split(":")[0]), t.indexOf("#") >= 0 && (t = t.split("#")[1]), t; }, i = (n = e.headers, "x-amzn-errortype", Object.keys(n).find((function (e) { return e.toLowerCase() === "x-amzn-errortype".toLowerCase(); }))); return void 0 !== i ? o(e.headers[i]) : void 0 !== t.code ? o(t.code) : void 0 !== t.__type ? o(t.__type) : ""; }, Je = n(9718), Xe = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return m(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Je.p2)(t, this.serialize, this.deserialize)); var o = e.concat(this.middlewareStack), i = t.logger, r = "LexRuntimeServiceClient", a = "PostTextCommand", s = { logger: i, clientName: r, commandName: a, inputFilterSensitiveLog: q.filterSensitiveLog, outputFilterSensitiveLog: K.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: r, commandName: a }); var c = t.requestHandler; return o.resolve((function (e) { return c.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return v(void 0, void 0, void 0, (function () { var n, o, i, r, a, s, c, u, l; return g(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = { "Content-Type": "application/json" }, o = "/bot/{botName}/alias/{botAlias}/user/{userId}/text", void 0 === e.userId)
                        throw new Error("No value provided for input HTTP label: userId.");
                    if ((i = e.userId).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    if (o = o.replace("{userId}", (0, Se.jc)(i)), void 0 === e.botAlias)
                        throw new Error("No value provided for input HTTP label: botAlias.");
                    if ((i = e.botAlias).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    if (o = o.replace("{botAlias}", (0, Se.jc)(i)), void 0 === e.botName)
                        throw new Error("No value provided for input HTTP label: botName.");
                    if ((i = e.botName).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    return o = o.replace("{botName}", (0, Se.jc)(i)), r = JSON.stringify(h(h(h({}, void 0 !== e.inputText && { inputText: e.inputText }), void 0 !== e.requestAttributes && { requestAttributes: Me(e.requestAttributes) }), void 0 !== e.sessionAttributes && { sessionAttributes: Me(e.sessionAttributes) })), [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, c = a.protocol, u = void 0 === c ? "https" : c, l = a.port, [2, new Te.aW({ protocol: u, hostname: s, port: l, method: "POST", headers: n, path: o, body: r })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return v(void 0, void 0, void 0, (function () { var n, o; return g(this, (function (i) { switch (i.label) {
                case 0: return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ae(e, t)] : (n = { $metadata: qe(e), alternativeIntents: void 0, botVersion: void 0, dialogState: void 0, intentName: void 0, message: void 0, messageFormat: void 0, nluIntentConfidence: void 0, responseCard: void 0, sentimentResponse: void 0, sessionAttributes: void 0, sessionId: void 0, slotToElicit: void 0, slots: void 0 }, [4, Ge(e.body, t)]);
                case 1: return void 0 !== (o = i.sent()).alternativeIntents && null !== o.alternativeIntents && (n.alternativeIntents = function (e, t) { return (e || []).map((function (e) { return je(e, t); })); }(o.alternativeIntents, t)), void 0 !== o.botVersion && null !== o.botVersion && (n.botVersion = o.botVersion), void 0 !== o.dialogState && null !== o.dialogState && (n.dialogState = o.dialogState), void 0 !== o.intentName && null !== o.intentName && (n.intentName = o.intentName), void 0 !== o.message && null !== o.message && (n.message = o.message), void 0 !== o.messageFormat && null !== o.messageFormat && (n.messageFormat = o.messageFormat), void 0 !== o.nluIntentConfidence && null !== o.nluIntentConfidence && (n.nluIntentConfidence = $e(o.nluIntentConfidence)), void 0 !== o.responseCard && null !== o.responseCard && (n.responseCard = function (e, t) { return { contentType: void 0 !== e.contentType && null !== e.contentType ? e.contentType : void 0, genericAttachments: void 0 !== e.genericAttachments && null !== e.genericAttachments ? Ue(e.genericAttachments, t) : void 0, version: void 0 !== e.version && null !== e.version ? e.version : void 0 }; }(o.responseCard, t)), void 0 !== o.sentimentResponse && null !== o.sentimentResponse && (n.sentimentResponse = function (e, t) { return { sentimentLabel: void 0 !== e.sentimentLabel && null !== e.sentimentLabel ? e.sentimentLabel : void 0, sentimentScore: void 0 !== e.sentimentScore && null !== e.sentimentScore ? e.sentimentScore : void 0 }; }(o.sentimentResponse)), void 0 !== o.sessionAttributes && null !== o.sessionAttributes && (n.sessionAttributes = Ve(o.sessionAttributes, t)), void 0 !== o.sessionId && null !== o.sessionId && (n.sessionId = o.sessionId), void 0 !== o.slotToElicit && null !== o.slotToElicit && (n.slotToElicit = o.slotToElicit), void 0 !== o.slots && null !== o.slots && (n.slots = Ve(o.slots, t)), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Se.mY), Qe = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return m(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Je.p2)(t, this.serialize, this.deserialize)); var o = e.concat(this.middlewareStack), i = t.logger, r = "LexRuntimeServiceClient", a = "PostContentCommand", s = { logger: i, clientName: r, commandName: a, inputFilterSensitiveLog: U.filterSensitiveLog, outputFilterSensitiveLog: D.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: r, commandName: a }); var c = t.requestHandler; return o.resolve((function (e) { return c.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return v(void 0, void 0, void 0, (function () { var n, o, i, r, a, s, c, u, l; return g(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = h(h(h(h({ "Content-Type": "application/octet-stream", "x-amz-content-sha256": "UNSIGNED-PAYLOAD" }, He(e.requestAttributes) && { "x-amz-lex-request-attributes": Se.QT.fromObject(e.requestAttributes) }), He(e.sessionAttributes) && { "x-amz-lex-session-attributes": Se.QT.fromObject(e.sessionAttributes) }), He(e.contentType) && { "Content-Type": e.contentType }), He(e.accept) && { Accept: e.accept }), o = "/bot/{botName}/alias/{botAlias}/user/{userId}/content", void 0 === e.botAlias)
                        throw new Error("No value provided for input HTTP label: botAlias.");
                    if ((i = e.botAlias).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    if (o = o.replace("{botAlias}", (0, Se.jc)(i)), void 0 === e.botName)
                        throw new Error("No value provided for input HTTP label: botName.");
                    if ((i = e.botName).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    if (o = o.replace("{botName}", (0, Se.jc)(i)), void 0 === e.userId)
                        throw new Error("No value provided for input HTTP label: userId.");
                    if ((i = e.userId).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    return o = o.replace("{userId}", (0, Se.jc)(i)), void 0 !== e.inputStream && (r = e.inputStream), [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, c = a.protocol, u = void 0 === c ? "https" : c, l = a.port, [2, new Te.aW({ protocol: u, hostname: s, port: l, method: "POST", headers: n, path: o, body: r })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return v(void 0, void 0, void 0, (function () { var n, o; return g(this, (function (i) { return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ce(e, t)] : (n = { $metadata: qe(e), alternativeIntents: void 0, audioStream: void 0, botVersion: void 0, contentType: void 0, dialogState: void 0, inputTranscript: void 0, intentName: void 0, message: void 0, messageFormat: void 0, nluIntentConfidence: void 0, sentimentResponse: void 0, sessionAttributes: void 0, sessionId: void 0, slotToElicit: void 0, slots: void 0 }, void 0 !== e.headers["x-amz-lex-alternative-intents"] && (n.alternativeIntents = new Se.QT(e.headers["x-amz-lex-alternative-intents"])), void 0 !== e.headers["x-amz-lex-message-format"] && (n.messageFormat = e.headers["x-amz-lex-message-format"]), void 0 !== e.headers["content-type"] && (n.contentType = e.headers["content-type"]), void 0 !== e.headers["x-amz-lex-message"] && (n.message = e.headers["x-amz-lex-message"]), void 0 !== e.headers["x-amz-lex-bot-version"] && (n.botVersion = e.headers["x-amz-lex-bot-version"]), void 0 !== e.headers["x-amz-lex-sentiment"] && (n.sentimentResponse = e.headers["x-amz-lex-sentiment"]), void 0 !== e.headers["x-amz-lex-slots"] && (n.slots = new Se.QT(e.headers["x-amz-lex-slots"])), void 0 !== e.headers["x-amz-lex-input-transcript"] && (n.inputTranscript = e.headers["x-amz-lex-input-transcript"]), void 0 !== e.headers["x-amz-lex-slot-to-elicit"] && (n.slotToElicit = e.headers["x-amz-lex-slot-to-elicit"]), void 0 !== e.headers["x-amz-lex-session-attributes"] && (n.sessionAttributes = new Se.QT(e.headers["x-amz-lex-session-attributes"])), void 0 !== e.headers["x-amz-lex-session-id"] && (n.sessionId = e.headers["x-amz-lex-session-id"]), void 0 !== e.headers["x-amz-lex-dialog-state"] && (n.dialogState = e.headers["x-amz-lex-dialog-state"]), void 0 !== e.headers["x-amz-lex-intent-name"] && (n.intentName = e.headers["x-amz-lex-intent-name"]), void 0 !== e.headers["x-amz-lex-nlu-intent-confidence"] && (n.nluIntentConfidence = new Se.QT(e.headers["x-amz-lex-nlu-intent-confidence"])), o = e.body, n.audioStream = o, [2, Promise.resolve(n)]); })); })); }(e, t); }, t; }(Se.mY), Ye = n(8832), Ke = n(9270), Ze = function (e) { if (e instanceof Blob || e instanceof ReadableStream)
                return new Response(e).arrayBuffer().then((function (e) { return new Uint8Array(e); })); throw new Error("Readable is not supported."); }, et = function () { var e = function (t, n) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]); })(t, n); }; return function (t, n) { function o() { this.constructor = t; } e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o); }; }(), tt = function () { return (tt = Object.assign || function (e) { for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, nt = new i.k("AWSLexProvider"), ot = function (e) { function t(t) { void 0 === t && (t = {}); var n = e.call(this, t) || this; return n._botsCompleteCallback = {}, n; } return et(t, e), t.prototype.getProviderName = function () { return "AWSLexProvider"; }, t.prototype.reportBotStatus = function (e, t) { var n = this; nt.debug("postContent state", e.dialogState), "ReadyForFulfillment" !== e.dialogState && "Fulfilled" !== e.dialogState || ("function" == typeof this._botsCompleteCallback[t] && setTimeout((function () { return n._botsCompleteCallback[t](null, { slots: e.slots }); }), 0), this._config && "function" == typeof this._config[t].onComplete && setTimeout((function () { return n._config[t].onComplete(null, { slots: e.slots }); }), 0)), "Failed" === e.dialogState && ("function" == typeof this._botsCompleteCallback[t] && setTimeout((function () { return n._botsCompleteCallback[t]("Bot conversation failed"); }), 0), this._config && "function" == typeof this._config[t].onComplete && setTimeout((function () { return n._config[t].onComplete("Bot conversation failed"); }), 0)); }, t.prototype.sendMessage = function (e, t) { return n = this, o = void 0, r = function () { var n, o, i, r, a, s, c, u, l, d; return function (e, t) { var n, o, i, r, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return r = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (r[Symbol.iterator] = function () { return this; }), r; function s(r) { return function (s) { return function (r) { if (n)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done)
                        return i;
                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4: return a.label++, { value: r[1], done: !1 };
                        case 5:
                            a.label++, o = r[1], r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break;
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1], i = r;
                                break;
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(r);
                                break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    r = t.call(e, a);
                }
                catch (e) {
                    r = [6, e], o = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & r[0])
                throw r[1]; return { value: r[0] ? r[1] : void 0, done: !0 }; }([r, s]); }; } }(this, (function (f) { switch (f.label) {
                case 0: return this._config[e] ? [4, Ye.cN.get()] : [2, Promise.reject("Bot " + e + " does not exist")];
                case 1:
                    if (!(n = f.sent()))
                        return [2, Promise.reject("No credentials")];
                    if (this.lexRuntimeServiceClient = new Ee({ region: this._config[e].region, credentials: n, customUserAgent: (0, Ke.Zm)() }), "string" != typeof t)
                        return [3, 6];
                    o = { botAlias: this._config[e].alias, botName: e, inputText: t, userId: n.identityId }, nt.debug("postText to lex", t), f.label = 2;
                case 2: return f.trys.push([2, 4, , 5]), i = new Xe(o), [4, this.lexRuntimeServiceClient.send(i)];
                case 3: return u = f.sent(), this.reportBotStatus(u, e), [2, u];
                case 4: return r = f.sent(), [2, Promise.reject(r)];
                case 5: return [3, 11];
                case 6: a = t.content, s = t.options.messageType, o = "voice" === s ? { botAlias: this._config[e].alias, botName: e, contentType: "audio/x-l16; sample-rate=16000", inputStream: a, userId: n.identityId, accept: "audio/mpeg" } : { botAlias: this._config[e].alias, botName: e, contentType: "text/plain; charset=utf-8", inputStream: a, userId: n.identityId, accept: "audio/mpeg" }, nt.debug("postContent to lex", t), f.label = 7;
                case 7: return f.trys.push([7, 10, , 11]), c = new Qe(o), [4, this.lexRuntimeServiceClient.send(c)];
                case 8: return u = f.sent(), [4, Ze(u.audioStream)];
                case 9: return l = f.sent(), this.reportBotStatus(u, e), [2, tt(tt({}, u), { audioStream: l })];
                case 10: return d = f.sent(), [2, Promise.reject(d)];
                case 11: return [2];
            } })); }, new ((i = void 0) || (i = Promise))((function (e, t) { function a(e) { try {
                c(r.next(e));
            }
            catch (e) {
                t(e);
            } } function s(e) { try {
                c(r.throw(e));
            }
            catch (e) {
                t(e);
            } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function (e) { e(n); }))).then(a, s); } c((r = r.apply(n, o || [])).next()); })); var n, o, i, r; }, t.prototype.onComplete = function (e, t) { if (!this._config[e])
                throw new ErrorEvent("Bot " + e + " does not exist"); this._botsCompleteCallback[e] = t; }, t; }(f), it = function () { return (it = Object.assign || function (e) { for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, rt = new i.k("Interactions"), at = new (function () { function e(e) { this._options = e, rt.debug("Interactions Options", this._options), this._pluggables = {}; } return e.prototype.getModuleName = function () { return "Interactions"; }, e.prototype.configure = function (e) { var t = this, n = e ? e.Interactions || e : {}; rt.debug("configure Interactions", { opt: n }), this._options = it(it({ bots: {} }, n), n.Interactions); var o = this._options.aws_bots_config, i = this._options.bots; return !Object.keys(i).length && o && Array.isArray(o) && o.forEach((function (e) { t._options.bots[e.name] = e; })), !this._pluggables.AWSLexProvider && i && Object.keys(i).map((function (e) { return i[e]; })).find((function (e) { return !e.providerName || "AWSLexProvider" === e.providerName; })) && (this._pluggables.AWSLexProvider = new ot), Object.keys(this._pluggables).map((function (e) { t._pluggables[e].configure(t._options.bots); })), this._options; }, e.prototype.addPluggable = function (e) { if (e && "Interactions" === e.getCategory()) {
                if (this._pluggables[e.getProviderName()])
                    throw new Error("Bot " + e.getProviderName() + " already plugged");
                return e.configure(this._options.bots), void (this._pluggables[e.getProviderName()] = e);
            } }, e.prototype.send = function (e, t) { return n = this, o = void 0, r = function () { var n; return function (e, t) { var n, o, i, r, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return r = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (r[Symbol.iterator] = function () { return this; }), r; function s(r) { return function (s) { return function (r) { if (n)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done)
                        return i;
                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4: return a.label++, { value: r[1], done: !1 };
                        case 5:
                            a.label++, o = r[1], r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break;
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1], i = r;
                                break;
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(r);
                                break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    r = t.call(e, a);
                }
                catch (e) {
                    r = [6, e], o = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & r[0])
                throw r[1]; return { value: r[0] ? r[1] : void 0, done: !0 }; }([r, s]); }; } }(this, (function (o) { switch (o.label) {
                case 0:
                    if (!this._options.bots || !this._options.bots[e])
                        throw new Error("Bot " + e + " does not exist");
                    if (n = this._options.bots[e].providerName || "AWSLexProvider", !this._pluggables[n])
                        throw new Error("Bot " + n + " does not have valid pluggin did you try addPluggable first?");
                    return [4, this._pluggables[n].sendMessage(e, t)];
                case 1: return [2, o.sent()];
            } })); }, new ((i = void 0) || (i = Promise))((function (e, t) { function a(e) { try {
                c(r.next(e));
            }
            catch (e) {
                t(e);
            } } function s(e) { try {
                c(r.throw(e));
            }
            catch (e) {
                t(e);
            } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function (e) { e(n); }))).then(a, s); } c((r = r.apply(n, o || [])).next()); })); var n, o, i, r; }, e.prototype.onComplete = function (e, t) { if (!this._options.bots || !this._options.bots[e])
                throw new Error("Bot " + e + " does not exist"); var n = this._options.bots[e].providerName || "AWSLexProvider"; if (!this._pluggables[n])
                throw new Error("Bot " + n + " does not have valid pluggin did you try addPluggable first?"); this._pluggables[n].onComplete(e, t); }, e; }())(null);
            u.dQ.register(at);
            var st, ct, ut, lt = function (e, t, n, o) { return new (n || (n = Promise))((function (i, r) { function a(e) { try {
                c(o.next(e));
            }
            catch (e) {
                r(e);
            } } function s(e) { try {
                c(o.throw(e));
            }
            catch (e) {
                r(e);
            } } function c(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } c((o = o.apply(e, t || [])).next()); })); }, dt = function (e, t) { var n, o, i, r, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return r = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (r[Symbol.iterator] = function () { return this; }), r; function s(r) { return function (s) { return function (r) { if (n)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done)
                        return i;
                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4: return a.label++, { value: r[1], done: !1 };
                        case 5:
                            a.label++, o = r[1], r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break;
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1], i = r;
                                break;
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(r);
                                break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    r = t.call(e, a);
                }
                catch (e) {
                    r = [6, e], o = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & r[0])
                throw r[1]; return { value: r[0] ? r[1] : void 0, done: !0 }; }([r, s]); }; } }, ft = function (e, t, n) { for (var o = 0; o < n.length; o++)
                e.setUint8(t + o, n.charCodeAt(o)); }, pt = function (e, t, n, o) { var i = function (e, t) { var n = 2 * e.length, o = 8 + n, i = new ArrayBuffer(36 + o), r = new DataView(i); return ft(r, 0, "RIFF"), r.setUint32(4, 24 + o, !0), ft(r, 8, "WAVE"), ft(r, 12, "fmt "), r.setUint32(16, 16, !0), r.setUint16(20, 1, !0), r.setUint16(22, 1, !0), r.setUint32(24, t, !0), r.setUint32(28, 2 * t, !0), r.setUint16(32, 2, !0), r.setUint16(34, 16, !0), ft(r, 36, "data"), r.setUint32(40, n, !0), function (e, t, n) { for (var o = 44, i = 0; i < n.length; i++, o += 2) {
                var r = Math.max(-1, Math.min(1, n[i]));
                e.setInt16(o, r < 0 ? 32768 * r : 32767 * r, !0);
            } }(r, 0, e), r; }(function (e, t, n) { if (n === t)
                return e; for (var o = t / n, i = Math.round(e.length / o), r = new Float32Array(i), a = 0, s = 0; a < r.length;) {
                for (var c = Math.round((a + 1) * o), u = 0, l = 0, d = s; d < c && d < e.length; d++)
                    u += e[d], l++;
                r[a] = u / l, a++, s = c;
            } return r; }(function (e, t) { for (var n = new Float32Array(t), o = 0, i = 0; i < e.length; i++)
                n.set(e[i], o), o += e[i].length; return n; }(e, t), n, o), o); return new Blob([i], { type: "application/octet-stream" }); }, mt = new i.k("AudioRecorder"), ht = function () { function e(e) { this.streamBuffer = [], this.streamBufferLength = 0, this.recording = !1, this.options = e; } return e.prototype.init = function () { return lt(this, void 0, void 0, (function () { var e = this; return dt(this, (function (t) { switch (t.label) {
                case 0: return (0, r.lC)().isBrowser ? (window.AudioContext = window.AudioContext || window.webkitAudioContext, this.audioContext = new AudioContext, [4, navigator.mediaDevices.getUserMedia({ audio: !0 }).then((function (t) { e.audioSupported = !0, e.setupAudioNodes(t); })).catch((function () { return e.audioSupported = !1, Promise.reject("Audio is not supported"); }))]) : [3, 2];
                case 1: return t.sent(), [3, 3];
                case 2: return this.audioSupported = !1, [2, Promise.reject("Audio is not supported")];
                case 3: return [2];
            } })); })); }, e.prototype.setupAudioNodes = function (e) { return lt(this, void 0, void 0, (function () { var t, n, o, i, r = this; return dt(this, (function (a) { switch (a.label) {
                case 0: return a.trys.push([0, 2, , 3]), [4, this.audioContext.resume()];
                case 1: return a.sent(), [3, 3];
                case 2: return t = a.sent(), mt.error(t), [3, 3];
                case 3: return n = this.audioContext.createMediaStreamSource(e), (o = this.audioContext.createScriptProcessor(4096, 1, 1)).onaudioprocess = function (e) { if (r.recording) {
                    var t = e.inputBuffer.getChannelData(0);
                    r.streamBuffer.push(new Float32Array(t)), r.streamBufferLength += t.length, r.analyse();
                } }, (i = this.audioContext.createAnalyser()).minDecibels = -90, i.maxDecibels = -10, i.smoothingTimeConstant = .85, n.connect(i), i.connect(o), o.connect(n.context.destination), this.analyserNode = i, [2];
            } })); })); }, e.prototype.startRecording = function (e, t) { return lt(this, void 0, void 0, (function () { var n, o; return dt(this, (function (i) { switch (i.label) {
                case 0:
                    if (this.recording || !this.audioSupported)
                        return [2];
                    this.onSilence = e || function () { }, this.visualizer = t || function () { }, n = this.audioContext, i.label = 1;
                case 1: return i.trys.push([1, 3, , 4]), [4, n.resume()];
                case 2: return i.sent(), [3, 4];
                case 3: return o = i.sent(), mt.error(o), [3, 4];
                case 4: return this.start = Date.now(), this.recording = !0, [2];
            } })); })); }, e.prototype.stopRecording = function () { this.audioSupported && (this.recording = !1); }, e.prototype.clear = function () { this.stopRecording(), this.streamBufferLength = 0, this.streamBuffer = []; }, e.prototype.play = function (e) { var t = this; if (e && this.audioSupported) {
                var n = new Blob([e]);
                return new Promise((function (e, o) { var i = new FileReader; i.onload = function () { t.playbackSource && t.playbackSource.disconnect(), t.playbackSource = t.audioContext.createBufferSource(), t.audioContext.decodeAudioData(i.result, (function (n) { t.playbackSource.buffer = n, t.playbackSource.connect(t.audioContext.destination), t.playbackSource.onended = function () { return e(); }, t.playbackSource.start(0); }), (function (e) { return o(e); })); }, i.onerror = function () { return o(); }, i.readAsArrayBuffer(n); }));
            } }, e.prototype.stop = function () { this.playbackSource && this.playbackSource.stop(); }, e.prototype.analyse = function () { if (this.audioSupported) {
                var e = this.analyserNode;
                e.fftSize = 2048;
                var t = e.fftSize, n = new Uint8Array(t), o = this.options.amplitude, i = this.options.time;
                e.getByteTimeDomainData(n), this.visualizer(n, t);
                for (var r = 0; r < t; r++) {
                    var a = n[r] / 128 - 1;
                    (a > o || a < -1 * o) && (this.start = Date.now());
                }
                Date.now() - this.start > i && this.onSilence();
            } }, e.prototype.exportWAV = function (e) { return void 0 === e && (e = 16e3), lt(this, void 0, void 0, (function () { var t, n; return dt(this, (function (o) { return this.audioSupported ? (t = this.audioContext.sampleRate, n = pt(this.streamBuffer, this.streamBufferLength, t, e), this.clear(), [2, n]) : [2]; })); })); }, e; }();
            !function (e) { e[e.Initial = 0] = "Initial", e[e.Listening = 1] = "Listening", e[e.SendingText = 2] = "SendingText", e[e.SendingVoice = 3] = "SendingVoice", e[e.Error = 4] = "Error"; }(st || (st = {})), function (e) { e.Bot = "bot", e.User = "user"; }(ct || (ct = {})), function (e) { e[e.Recoverable = 0] = "Recoverable", e[e.Unrecoverable = 1] = "Unrecoverable"; }(ut || (ut = {}));
            var vt = function () { function e(e) { var t = this; (0, o.r)(this, e), this.clearOnComplete = !1, this.conversationModeOn = !1, this.botTitle = s.T.CHATBOT_TITLE, this.voiceEnabled = !1, this.textEnabled = !0, this.silenceTime = 1500, this.silenceThreshold = .2, this.messages = [], this.text = "", this.chatState = st.Initial, this.messageJSX = function (e) { var n = e.map((function (e) { return (0, o.h)("div", { class: "bubble " + e.from }, e.content); })); if (t.chatState === st.SendingText || t.chatState === st.SendingVoice) {
                var i = t.chatState === st.SendingText ? ct.Bot : ct.User;
                n.push((0, o.h)("div", { class: "bubble " + i }, (0, o.h)("div", { class: "dot-flashing " + i }, (0, o.h)("span", { class: "dot left" }), (0, o.h)("span", { class: "dot middle" }), (0, o.h)("span", { class: "dot right" }))));
            } return n; }, this.chatCompleted = (0, o.c)(this, "chatCompleted", 7); } return e.prototype.submitHandler = function (e) { this.sendTextMessage(); }, e.prototype.componentWillLoad = function () { if (!at || "function" != typeof at.onComplete)
                throw new Error(c.d); this.validateProps(); }, e.prototype.componentDidRender = function () { var e = this.element.shadowRoot.querySelector(".body"); e.scrollTop = e.scrollHeight; }, e.prototype.validateProps = function () { var e = this; if (this.voiceEnabled || this.textEnabled)
                if (this.botName) {
                    this.welcomeMessage && this.appendToChat(this.welcomeMessage, ct.Bot), this.voiceEnabled && (this.audioRecorder = new ht({ time: this.silenceTime, amplitude: this.silenceThreshold }), this.audioRecorder.init().catch((function (t) { e.setError(t, ut.Recoverable); })));
                    try {
                        at.onComplete(this.botName, (function (t, n) { e.chatCompleted.emit({ data: n, err: t }), e.clearOnComplete ? e.reset() : e.chatState = st.Initial; }));
                    }
                    catch (e) {
                        this.setError(e, ut.Unrecoverable);
                    }
                }
                else
                    this.setError(s.T.NO_BOT_NAME_ERROR, ut.Unrecoverable);
            else
                this.setError(s.T.CHAT_DISABLED_ERROR, ut.Unrecoverable); }, e.prototype.handleMicButton = function () { var e = this; this.chatState === st.Initial && (this.audioRecorder.stop(), this.chatState = st.Listening, this.audioRecorder.startRecording((function () { return e.handleSilence(); }), (function (t, n) { return e.visualizer(t, n); }))); }, e.prototype.handleSilence = function () { var e = this; this.chatState = st.SendingVoice, this.audioRecorder.stopRecording(), this.audioRecorder.exportWAV().then((function (t) { e.sendVoiceMessage(t); })); }, e.prototype.handleTextChange = function (e) { var t = e.target; this.text = t.value; }, e.prototype.handleCancelButton = function () { this.audioRecorder.clear(), this.chatState = st.Initial; }, e.prototype.handleToastClose = function (e) { this.error = void 0, e === ut.Recoverable && (this.chatState = st.Initial); }, e.prototype.visualizer = function (e, t) { !function (e, t, n) { if (n) {
                if (!(0, r.lC)().isBrowser)
                    throw new Error("Visualization is not supported on non-browsers.");
                var o = n.getBoundingClientRect(), i = o.width, a = o.height;
                n.width = i, n.height = a;
                var s = n.getContext("2d");
                s.fillStyle = "white", s.clearRect(0, 0, i, a), requestAnimationFrame((function () { s.fillRect(0, 0, i, a), s.lineWidth = 1; var o = getComputedStyle(document.documentElement).getPropertyValue("--amplify-primary-color"); s.strokeStyle = o && "" !== o ? o : "#ff9900", s.beginPath(); for (var r = 1 * i / t, c = 0, u = 0; u < t || u % 3 == 0; u++) {
                    var l = e[u] / 128 * a / 2;
                    0 === u ? s.moveTo(c, l) : s.lineTo(c, l), c += r;
                } s.lineTo(n.width, n.height / 2), s.stroke(); }));
            } }(e, t, this.element.shadowRoot.querySelector("canvas")); }, e.prototype.sendTextMessage = function () { return lt(this, void 0, void 0, (function () { var e, t, n; return dt(this, (function (o) { switch (o.label) {
                case 0:
                    if (0 === this.text.length || this.chatState !== st.Initial)
                        return [2];
                    e = this.text, this.text = "", this.appendToChat(e, ct.User), this.chatState = st.SendingText, o.label = 1;
                case 1: return o.trys.push([1, 3, , 4]), [4, at.send(this.botName, e)];
                case 2: return t = o.sent(), [3, 4];
                case 3: return n = o.sent(), this.setError(n, ut.Recoverable), [2];
                case 4: return t.message && this.appendToChat(t.message, ct.Bot), this.chatState = st.Initial, [2];
            } })); })); }, e.prototype.sendVoiceMessage = function (e) { return lt(this, void 0, void 0, (function () { var t, n, o, i, r = this; return dt(this, (function (a) { switch (a.label) {
                case 0: t = { content: e, options: { messageType: "voice" } }, a.label = 1;
                case 1: return a.trys.push([1, 3, , 4]), [4, at.send(this.botName, t)];
                case 2: return n = a.sent(), [3, 4];
                case 3: return o = a.sent(), this.setError(o, ut.Recoverable), [2];
                case 4: return this.chatState = st.Initial, i = n.dialogState, n.inputTranscript && this.appendToChat(n.inputTranscript, ct.User), this.appendToChat(n.message, ct.Bot), [4, this.audioRecorder.play(n.audioStream).then((function () { r.conversationModeOn && "Fulfilled" !== i && "Failed" !== i && r.chatState === st.Initial && r.handleMicButton(); })).catch((function (e) { return r.setError(e, ut.Recoverable); }))];
                case 5: return a.sent(), [2];
            } })); })); }, e.prototype.appendToChat = function (e, t) { this.messages = function () { for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length; var o = Array(e), i = 0; for (t = 0; t < n; t++)
                for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++)
                    o[i] = r[a]; return o; }(this.messages, [{ content: e, from: t }]); }, e.prototype.setError = function (e, t) { var n = "string" == typeof e ? e : e.message; this.chatState = st.Error, this.error = { message: n, errorType: t }; }, e.prototype.reset = function () { this.chatState = st.Initial, this.text = "", this.error = void 0, this.messages = [], this.welcomeMessage && this.appendToChat(this.welcomeMessage, ct.Bot), this.audioRecorder && this.audioRecorder.clear(); }, e.prototype.listeningFooterJSX = function () { var e = this; return [(0, o.h)("canvas", { height: "50" }), (0, o.h)("amplify-button", { "data-test": "chatbot-cancel-button", handleButtonClick: function () { return e.handleCancelButton(); }, class: "icon-button", variant: "icon", icon: "ban" })]; }, e.prototype.footerJSX = function () { var e = this; if (this.chatState === st.Listening)
                return this.listeningFooterJSX(); var t = this.textEnabled ? s.T.TEXT_INPUT_PLACEHOLDER : s.T.VOICE_INPUT_PLACEHOLDER; return [(0, o.h)("amplify-input", { placeholder: a.o.get(t), description: "text", handleInputChange: function (t) { return e.handleTextChange(t); }, value: this.text, disabled: this.chatState === st.Error || !this.textEnabled }), this.voiceEnabled && (0, o.h)("amplify-button", { "data-test": "chatbot-mic-button", handleButtonClick: function () { return e.handleMicButton(); }, class: "icon-button", variant: "icon", icon: "microphone", disabled: this.chatState === st.Error || this.chatState !== st.Initial }), this.textEnabled && (0, o.h)("amplify-button", { "data-test": "chatbot-send-button", class: "icon-button", variant: "icon", icon: "send", handleButtonClick: function () { return e.sendTextMessage(); }, disabled: this.chatState === st.Error || this.chatState !== st.Initial })]; }, e.prototype.errorToast = function () { var e = this; if (this.error) {
                var t = this.error, n = t.message, i = t.errorType;
                return (0, o.h)("amplify-toast", { message: a.o.get(n), handleClose: function () { return e.handleToastClose(i); } });
            } }, e.prototype.render = function () { return (0, o.h)(o.H, null, (0, o.h)("div", { class: "amplify-chatbot" }, (0, o.h)("slot", { name: "header" }, (0, o.h)("div", { class: "header", "data-test": "chatbot-header" }, a.o.get(this.botTitle))), (0, o.h)("div", { class: "body", "data-test": "chatbot-body" }, this.messageJSX(this.messages)), (0, o.h)("div", { class: "footer", "data-test": "chatbot-footer" }, this.footerJSX()), this.errorToast())); }, Object.defineProperty(e.prototype, "element", { get: function () { return (0, o.g)(this); }, enumerable: !1, configurable: !0 }), e; }();
            vt.style = ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}";
        } }]);
