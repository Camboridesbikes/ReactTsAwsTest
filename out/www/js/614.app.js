"use strict";
/*! For license information please see 614.app.js.LICENSE.txt */
(self.webpackChunktest = self.webpackChunktest || []).push([[614], { 7403: function (e, t, n) {
            "use strict";
            n.d(t, { Ke: function () { return ts; } });
            var r = n(5069), i = n(5389), o = n(490), a = n(8832), s = n(9270), u = function (e, t) { return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); })(e, t); };
            function c(e, t) { function n() { this.constructor = e; } u(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }
            var l = function () { return (l = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
            function f(e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
                u(r.next(e));
            }
            catch (e) {
                o(e);
            } } function s(e) { try {
                u(r.throw(e));
            }
            catch (e) {
                o(e);
            } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } u((r = r.apply(e, t || [])).next()); })); }
            function d(e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (n)
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
                    o = t.call(e, a);
                }
                catch (e) {
                    o = [6, e], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & o[0])
                throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } }
            Object.create, Object.create;
            var p, h, v, g, m, y, S, b, w, E, C, x, L, k, N, P, M, T, z, A, _, U, K, O, I, R, j, D, B, q, F, H, V, $, G, W, J, Y, X, Z, Q, ee, te, ne, re, ie, oe, ae, se, ue, ce, le, fe, de, pe, he, ve, ge, me, ye, Se, be, we, Ee, Ce, xe, Le, ke, Ne, Pe, Me, Te, ze, Ae, _e, Ue, Ke, Oe, Ie, Re, je, De, Be, qe, Fe, He, Ve, $e, Ge, We, Je, Ye, Xe, Ze, Qe, et, tt, nt, rt, it, ot, at, st, ut, ct, lt, ft, dt, pt, ht, vt, gt, mt, yt, St, bt, wt, Et, Ct, xt, Lt, kt, Nt, Pt, Mt, Tt, zt, At, _t, Ut, Kt, Ot, It, Rt, jt, Dt, Bt, qt, Ft, Ht, Vt, $t, Gt, Wt, Jt, Yt, Xt, Zt, Qt, en, tn, nn, rn, on, an, sn, un, cn, ln, fn, dn, pn, hn, vn, gn, mn, yn, Sn, bn, wn, En, Cn, xn, Ln, kn, Nn, Pn, Mn, Tn, zn, An, _n, Un, Kn, On, In, Rn, jn, Dn, Bn, qn, Fn, Hn, Vn, $n, Gn, Wn, Jn, Yn, Xn, Zn, Qn, er, tr, nr, rr, ir, or, ar, sr, ur, cr, lr, fr, dr, pr, hr, vr, gr, mr, yr, Sr, br, wr, Er, Cr, xr, Lr, kr, Nr, Pr, Mr, Tr, zr, Ar, _r, Ur, Kr, Or, Ir, Rr, jr, Dr, Br, qr, Fr, Hr, Vr, $r, Gr, Wr, Jr, Yr, Xr = n(3890);
            !function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(p || (p = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(h || (h = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(v || (v = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(g || (g = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(m || (m = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(y || (y = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(S || (S = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(b || (b = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(w || (w = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(E || (E = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(C || (C = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(x || (x = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(L || (L = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(k || (k = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(N || (N = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l(l({}, e), e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Xr.oc }), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(P || (P = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l(l(l(l({}, e), e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Xr.oc }), e.SSECustomerKey && { SSECustomerKey: Xr.oc }), e.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: Xr.oc }), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(M || (M = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(T || (T = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(z || (z = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(A || (A = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(_ || (_ = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(U || (U = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(K || (K = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l(l({}, e), e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Xr.oc }), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(O || (O = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l(l(l({}, e), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }), e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Xr.oc }), e.SSECustomerKey && { SSECustomerKey: Xr.oc }); }; }(I || (I = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(R || (R = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(j || (j = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(D || (D = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(B || (B = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(q || (q = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(F || (F = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(H || (H = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(V || (V = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }($ || ($ = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(G || (G = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(W || (W = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(J || (J = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Y || (Y = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(X || (X = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Z || (Z = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Q || (Q = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ee || (ee = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(te || (te = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ne || (ne = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(re || (re = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ie || (ie = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(oe || (oe = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ae || (ae = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(se || (se = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ue || (ue = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ce || (ce = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(le || (le = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(fe || (fe = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(de || (de = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(pe || (pe = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(he || (he = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ve || (ve = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ge || (ge = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(me || (me = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ye || (ye = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Se || (Se = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(be || (be = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(we || (we = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ee || (Ee = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ce || (Ce = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.KMSMasterKeyID && { KMSMasterKeyID: Xr.oc }); }; }(xe || (xe = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.ApplyServerSideEncryptionByDefault && { ApplyServerSideEncryptionByDefault: xe.filterSensitiveLog(e.ApplyServerSideEncryptionByDefault) }); }; }(Le || (Le = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.Rules && { Rules: e.Rules.map((function (e) { return Le.filterSensitiveLog(e); })) }); }; }(ke || (ke = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.ServerSideEncryptionConfiguration && { ServerSideEncryptionConfiguration: ke.filterSensitiveLog(e.ServerSideEncryptionConfiguration) }); }; }(Ne || (Ne = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Pe || (Pe = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.KeyId && { KeyId: Xr.oc }); }; }(Me || (Me = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Te || (Te = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSEKMS && { SSEKMS: Me.filterSensitiveLog(e.SSEKMS) }); }; }(ze || (ze = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.Encryption && { Encryption: ze.filterSensitiveLog(e.Encryption) }); }; }(Ae || (Ae = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.S3BucketDestination && { S3BucketDestination: Ae.filterSensitiveLog(e.S3BucketDestination) }); }; }(_e || (_e = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ue || (Ue = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ke || (Ke = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.Destination && { Destination: _e.filterSensitiveLog(e.Destination) }); }; }(Oe || (Oe = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.InventoryConfiguration && { InventoryConfiguration: Oe.filterSensitiveLog(e.InventoryConfiguration) }); }; }(Ie || (Ie = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Re || (Re = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(je || (je = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(De || (De = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Be || (Be = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(qe || (qe = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Fe || (Fe = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(He || (He = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ve || (Ve = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }($e || ($e = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ge || (Ge = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(We || (We = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Je || (Je = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ye || (Ye = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Xe || (Xe = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ze || (Ze = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Qe || (Qe = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(et || (et = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(tt || (tt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(nt || (nt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(rt || (rt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(it || (it = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ot || (ot = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(at || (at = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(st || (st = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ut || (ut = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ct || (ct = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(lt || (lt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ft || (ft = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(dt || (dt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(pt || (pt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ht || (ht = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(vt || (vt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(gt || (gt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(mt || (mt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(yt || (yt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(St || (St = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(bt || (bt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(wt || (wt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Et || (Et = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ct || (Ct = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(xt || (xt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Lt || (Lt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(kt || (kt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Nt || (Nt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Pt || (Pt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Mt || (Mt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Tt || (Tt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(zt || (zt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(At || (At = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(_t || (_t = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ut || (Ut = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Kt || (Kt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ot || (Ot = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(It || (It = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Rt || (Rt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(jt || (jt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Dt || (Dt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Bt || (Bt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(qt || (qt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ft || (Ft = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ht || (Ht = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Vt || (Vt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }($t || ($t = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Gt || (Gt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Wt || (Wt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Jt || (Jt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Yt || (Yt = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(Xt || (Xt = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSECustomerKey && { SSECustomerKey: Xr.oc }); }; }(Zt || (Zt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Qt || (Qt = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(en || (en = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(tn || (tn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(nn || (nn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(rn || (rn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(on || (on = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(an || (an = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(sn || (sn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(un || (un = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(cn || (cn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ln || (ln = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(fn || (fn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(dn || (dn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(pn || (pn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(hn || (hn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(vn || (vn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(gn || (gn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(mn || (mn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(yn || (yn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Sn || (Sn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(bn || (bn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(wn || (wn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(En || (En = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(Cn || (Cn = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSECustomerKey && { SSECustomerKey: Xr.oc }); }; }(xn || (xn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ln || (Ln = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(kn || (kn = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.InventoryConfigurationList && { InventoryConfigurationList: e.InventoryConfigurationList.map((function (e) { return Oe.filterSensitiveLog(e); })) }); }; }(Nn || (Nn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Pn || (Pn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Mn || (Mn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Tn || (Tn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(zn || (zn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(An || (An = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(_n || (_n = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Un || (Un = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Kn || (Kn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(On || (On = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(In || (In = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Rn || (Rn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(jn || (jn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Dn || (Dn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Bn || (Bn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(qn || (qn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Fn || (Fn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Hn || (Hn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Vn || (Vn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }($n || ($n = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Gn || (Gn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Wn || (Wn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Jn || (Jn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Yn || (Yn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Xn || (Xn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Zn || (Zn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Qn || (Qn = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(er || (er = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.ServerSideEncryptionConfiguration && { ServerSideEncryptionConfiguration: ke.filterSensitiveLog(e.ServerSideEncryptionConfiguration) }); }; }(tr || (tr = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.InventoryConfiguration && { InventoryConfiguration: Oe.filterSensitiveLog(e.InventoryConfiguration) }); }; }(nr || (nr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(rr || (rr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ir || (ir = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(or || (or = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ar || (ar = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(sr || (sr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ur || (ur = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(cr || (cr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(lr || (lr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(fr || (fr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(dr || (dr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(pr || (pr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(hr || (hr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(vr || (vr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(gr || (gr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(mr || (mr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(yr || (yr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Sr || (Sr = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l(l({}, e), e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Xr.oc }), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(br || (br = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l(l(l({}, e), e.SSECustomerKey && { SSECustomerKey: Xr.oc }), e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Xr.oc }), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(wr || (wr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Er || (Er = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Cr || (Cr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(xr || (xr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Lr || (Lr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(kr || (kr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Nr || (Nr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Pr || (Pr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Mr || (Mr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Tr || (Tr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(zr || (zr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ar || (Ar = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(_r || (_r = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ur || (Ur = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Kr || (Kr = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.KMSKeyId && { KMSKeyId: Xr.oc }); }; }(Or || (Or = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Ir || (Ir = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.Encryption && { Encryption: Or.filterSensitiveLog(e.Encryption) }); }; }(Rr || (Rr = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.S3 && { S3: Rr.filterSensitiveLog(e.S3) }); }; }(jr || (jr = {})), function (e) { e.IGNORE = "IGNORE", e.NONE = "NONE", e.USE = "USE"; }(Dr || (Dr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Br || (Br = {})), function (e) { e.DOCUMENT = "DOCUMENT", e.LINES = "LINES"; }(qr || (qr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Fr || (Fr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Hr || (Hr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Vr || (Vr = {})), function (e) { e.ALWAYS = "ALWAYS", e.ASNEEDED = "ASNEEDED"; }($r || ($r = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Gr || (Gr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Wr || (Wr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Jr || (Jr = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(Yr || (Yr = {}));
            var Zr = n(8467), Qr = n(655), ei = function () { function e(e, t) { void 0 === t && (t = []), this.name = e, this.children = t, this.attributes = {}; } return e.prototype.withName = function (e) { return this.name = e, this; }, e.prototype.addAttribute = function (e, t) { return this.attributes[e] = t, this; }, e.prototype.addChildNode = function (e) { return this.children.push(e), this; }, e.prototype.removeAttribute = function (e) { return delete this.attributes[e], this; }, e.prototype.toString = function () { var e, t, n = Boolean(this.children.length), r = "<" + this.name, i = this.attributes; try {
                for (var o = (0, Qr.__values)(Object.keys(i)), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value, u = i[s];
                    null != u && (r += " " + s + '="' + ("" + u).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") + '"');
                }
            }
            catch (t) {
                e = { error: t };
            }
            finally {
                try {
                    a && !a.done && (t = o.return) && t.call(o);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            } return r + (n ? ">" + this.children.map((function (e) { return e.toString(); })).join("") + "</" + this.name + ">" : "/>"); }, e; }(), ti = function () { function e(e) { this.value = e; } return e.prototype.toString = function () { return ("" + this.value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }, e; }(), ni = n(6965), ri = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c; return d(this, (function (f) { switch (f.label) {
                case 0: return r = [l({}, e)], c = {}, [4, bi(e.body, t)];
                case 1:
                    switch (n = l.apply(void 0, r.concat([(c.body = f.sent(), c)])), o = "UnknownError", o = wi(e, n.body)) {
                        case "NoSuchUpload":
                        case "com.amazonaws.s3#NoSuchUpload": return [3, 2];
                    }
                    return [3, 4];
                case 2: return a = [{}], [4, hi(n, t)];
                case 3: return i = l.apply(void 0, [l.apply(void 0, a.concat([f.sent()])), { name: o, $metadata: mi(e) }]), [3, 5];
                case 4: s = n.body, o = s.code || s.Code || o, i = l(l({}, s), { name: "" + o, message: s.message || s.Message || o, $fault: "client", $metadata: mi(e) }), f.label = 5;
                case 5: return u = i.message || i.Message || o, i.message = u, delete i.Message, [2, Promise.reject(Object.assign(new Error(u), i))];
            } })); })); }, ii = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u; return d(this, (function (c) { switch (c.label) {
                case 0: return r = [l({}, e)], u = {}, [4, bi(e.body, t)];
                case 1: return n = l.apply(void 0, r.concat([(u.body = c.sent(), u)])), o = "UnknownError", o = wi(e, n.body), a = n.body, o = a.code || a.Code || o, i = l(l({}, a), { name: "" + o, message: a.message || a.Message || o, $fault: "client", $metadata: mi(e) }), s = i.message || i.Message || o, i.message = s, delete i.Message, [2, Promise.reject(Object.assign(new Error(s), i))];
            } })); })); }, oi = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u; return d(this, (function (c) { switch (c.label) {
                case 0: return r = [l({}, e)], u = {}, [4, bi(e.body, t)];
                case 1: return n = l.apply(void 0, r.concat([(u.body = c.sent(), u)])), o = "UnknownError", o = wi(e, n.body), a = n.body, o = a.code || a.Code || o, i = l(l({}, a), { name: "" + o, message: a.message || a.Message || o, $fault: "client", $metadata: mi(e) }), s = i.message || i.Message || o, i.message = s, delete i.Message, [2, Promise.reject(Object.assign(new Error(s), i))];
            } })); })); }, ai = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u; return d(this, (function (c) { switch (c.label) {
                case 0: return r = [l({}, e)], u = {}, [4, bi(e.body, t)];
                case 1: return n = l.apply(void 0, r.concat([(u.body = c.sent(), u)])), o = "UnknownError", o = wi(e, n.body), a = n.body, o = a.code || a.Code || o, i = l(l({}, a), { name: "" + o, message: a.message || a.Message || o, $fault: "client", $metadata: mi(e) }), s = i.message || i.Message || o, i.message = s, delete i.Message, [2, Promise.reject(Object.assign(new Error(s), i))];
            } })); })); }, si = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c; return d(this, (function (f) { switch (f.label) {
                case 0: return r = [l({}, e)], c = {}, [4, bi(e.body, t)];
                case 1:
                    switch (n = l.apply(void 0, r.concat([(c.body = f.sent(), c)])), o = "UnknownError", o = wi(e, n.body)) {
                        case "NoSuchKey":
                        case "com.amazonaws.s3#NoSuchKey": return [3, 2];
                    }
                    return [3, 4];
                case 2: return a = [{}], [4, pi(n, t)];
                case 3: return i = l.apply(void 0, [l.apply(void 0, a.concat([f.sent()])), { name: o, $metadata: mi(e) }]), [3, 5];
                case 4: s = n.body, o = s.code || s.Code || o, i = l(l({}, s), { name: "" + o, message: s.message || s.Message || o, $fault: "client", $metadata: mi(e) }), f.label = 5;
                case 5: return u = i.message || i.Message || o, i.message = u, delete i.Message, [2, Promise.reject(Object.assign(new Error(u), i))];
            } })); })); }, ui = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c; return d(this, (function (f) { switch (f.label) {
                case 0: return r = [l({}, e)], c = {}, [4, bi(e.body, t)];
                case 1:
                    switch (n = l.apply(void 0, r.concat([(c.body = f.sent(), c)])), o = "UnknownError", o = wi(e, n.body)) {
                        case "NoSuchBucket":
                        case "com.amazonaws.s3#NoSuchBucket": return [3, 2];
                    }
                    return [3, 4];
                case 2: return a = [{}], [4, di(n, t)];
                case 3: return i = l.apply(void 0, [l.apply(void 0, a.concat([f.sent()])), { name: o, $metadata: mi(e) }]), [3, 5];
                case 4: s = n.body, o = s.code || s.Code || o, i = l(l({}, s), { name: "" + o, message: s.message || s.Message || o, $fault: "client", $metadata: mi(e) }), f.label = 5;
                case 5: return u = i.message || i.Message || o, i.message = u, delete i.Message, [2, Promise.reject(Object.assign(new Error(u), i))];
            } })); })); }, ci = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u; return d(this, (function (c) { switch (c.label) {
                case 0: return r = [l({}, e)], u = {}, [4, bi(e.body, t)];
                case 1: return n = l.apply(void 0, r.concat([(u.body = c.sent(), u)])), o = "UnknownError", o = wi(e, n.body), a = n.body, o = a.code || a.Code || o, i = l(l({}, a), { name: "" + o, message: a.message || a.Message || o, $fault: "client", $metadata: mi(e) }), s = i.message || i.Message || o, i.message = s, delete i.Message, [2, Promise.reject(Object.assign(new Error(s), i))];
            } })); })); }, li = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u; return d(this, (function (c) { switch (c.label) {
                case 0: return r = [l({}, e)], u = {}, [4, bi(e.body, t)];
                case 1: return n = l.apply(void 0, r.concat([(u.body = c.sent(), u)])), o = "UnknownError", o = wi(e, n.body), a = n.body, o = a.code || a.Code || o, i = l(l({}, a), { name: "" + o, message: a.message || a.Message || o, $fault: "client", $metadata: mi(e) }), s = i.message || i.Message || o, i.message = s, delete i.Message, [2, Promise.reject(Object.assign(new Error(s), i))];
            } })); })); }, fi = function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u; return d(this, (function (c) { switch (c.label) {
                case 0: return r = [l({}, e)], u = {}, [4, bi(e.body, t)];
                case 1: return n = l.apply(void 0, r.concat([(u.body = c.sent(), u)])), o = "UnknownError", o = wi(e, n.body), a = n.body, o = a.code || a.Code || o, i = l(l({}, a), { name: "" + o, message: a.message || a.Message || o, $fault: "client", $metadata: mi(e) }), s = i.message || i.Message || o, i.message = s, delete i.Message, [2, Promise.reject(Object.assign(new Error(s), i))];
            } })); })); }, di = function (e, t) { return f(void 0, void 0, void 0, (function () { var t; return d(this, (function (n) { return t = { name: "NoSuchBucket", $fault: "client", $metadata: mi(e) }, e.body, [2, t]; })); })); }, pi = function (e, t) { return f(void 0, void 0, void 0, (function () { var t; return d(this, (function (n) { return t = { name: "NoSuchKey", $fault: "client", $metadata: mi(e) }, e.body, [2, t]; })); })); }, hi = function (e, t) { return f(void 0, void 0, void 0, (function () { var t; return d(this, (function (n) { return t = { name: "NoSuchUpload", $fault: "client", $metadata: mi(e) }, e.body, [2, t]; })); })); }, vi = function (e, t) { return e.map((function (e) { return function (e, t) { var n = new ei("CompletedPart"); if (void 0 !== e.ETag) {
                var r = new ei("ETag").addChildNode(new ti(e.ETag)).withName("ETag");
                n.addChildNode(r);
            } return void 0 !== e.PartNumber && (r = new ei("PartNumber").addChildNode(new ti(String(e.PartNumber))).withName("PartNumber"), n.addChildNode(r)), n; }(e).withName("member"); })); }, gi = function (e, t) { var n = { DisplayName: void 0, ID: void 0 }; return void 0 !== e.DisplayName && (n.DisplayName = e.DisplayName), void 0 !== e.ID && (n.ID = e.ID), n; }, mi = function (e) { return { httpStatusCode: e.statusCode, httpHeaders: e.headers, requestId: e.headers["x-amzn-requestid"] }; }, yi = function (e, t) { return void 0 === e && (e = new Uint8Array), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array); }, Si = function (e) { return !(void 0 === e || "" === e || Object.getOwnPropertyNames(e).includes("length") && 0 == e.length || Object.getOwnPropertyNames(e).includes("size") && 0 == e.size); }, bi = function (e, t) { return function (e, t) { return yi(e, t).then((function (e) { return t.utf8Encoder(e); })); }(e, t).then((function (e) { if (e.length) {
                var t = (0, ni.parse)(e, { attributeNamePrefix: "", ignoreAttributes: !1, parseNodeValue: !1, tagValueProcessor: function (e, t) { return e.replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<"); } }), n = Object.keys(t)[0], r = t[n];
                return r["#text"] && (r[n] = r["#text"], delete r["#text"]), (0, Xr.sT)(r);
            } return {}; })); }, wi = function (e, t) { return void 0 !== t.Code ? t.Code : 404 == e.statusCode ? "NotFound" : ""; }, Ei = function (e) { return "string" == typeof e && 0 === e.indexOf("arn:") && e.split(":").length >= 6; }, Ci = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, xi = /(\d+\.){3}\d+/, Li = /\.\./, ki = /\./, Ni = /^(.+\.)?s3[.-]([a-z0-9-]+)\./, Pi = /^s3(-external-1)?\.amazonaws\.com$/, Mi = "amazonaws.com", Ti = function (e) { return Ai(e) ? e.replace(/fips-|-fips/, "") : e; }, zi = function (e) { var t = e.match(Ni); return [t[2], e.replace(new RegExp("^" + t[0]), "")]; }, Ai = function (e) { return e.startsWith("fips-") || e.endsWith("-fips"); }, _i = function (e, t) { return e === t || Ti(e) === t || e === Ti(t); }, Ui = function (e, t) { if (void 0 === t && (t = { tlsCompatible: !0 }), e.length >= 64 || !/^[a-z0-9][a-z0-9.-]+[a-z0-9]$/.test(e) || /(\d+\.){3}\d+/.test(e) || /[.-]{2}/.test(e) || (null == t ? void 0 : t.tlsCompatible) && ki.test(e))
                throw new Error("Invalid DNS label " + e); }, Ki = function (e) { var t = e.baseHostname; return Ni.test(t) ? function (e) { return "string" == typeof e.bucketName; }(e) ? Ii(e) : Oi(e) : { bucketEndpoint: !1, hostname: t }; }, Oi = function (e) { var t, n = (0, Qr.__read)((t = e.baseHostname, Pi.test(t) ? [t.replace(".amazonaws.com", ""), Mi] : zi(t)), 2), r = n[0], i = n[1], o = e.pathStyleEndpoint, a = e.dualstackEndpoint, s = void 0 !== a && a, u = e.accelerateEndpoint, c = void 0 !== u && u, l = e.tlsCompatible, f = void 0 === l || l, d = e.useArnRegion, p = e.bucketName, h = e.clientPartition, v = void 0 === h ? "aws" : h, g = e.clientSigningRegion, m = void 0 === g ? r : g; !function (e) { if (e.pathStyleEndpoint)
                throw new Error("Path-style S3 endpoint is not supported when bucket is an ARN"); if (e.accelerateEndpoint)
                throw new Error("Accelerate endpoint is not supported when bucket is an ARN"); if (!e.tlsCompatible)
                throw new Error("HTTPS is required when bucket is an ARN"); }({ pathStyleEndpoint: o, accelerateEndpoint: c, tlsCompatible: f }); var y = p.service, S = p.partition, b = p.accountId, w = p.region, E = p.resource; !function (e) { if ("s3" !== e && "s3-outposts" !== e)
                throw new Error("Expect 's3' or 's3-outposts' in ARN service component"); }(y), function (e, t) { if (e !== t.clientPartition)
                throw new Error('Partition in ARN is incompatible, got "' + e + '" but expected "' + t.clientPartition + '"'); }(S, { clientPartition: v }), function (e) { if (!/[0-9]{12}/.exec(e))
                throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'"); }(b), function (e, t) { if ("" === e)
                throw new Error("ARN region is empty"); if (!t.useArnRegion && !_i(e, t.clientRegion) && !_i(e, t.clientSigningRegion))
                throw new Error("Region in ARN is incompatible, got " + e + " but expected " + t.clientRegion); if (t.useArnRegion && Ai(e))
                throw new Error("Endpoint does not support FIPS region"); }(w, { useArnRegion: d, clientRegion: r, clientSigningRegion: m }); var C = function (e) { var t = e.includes(":") ? ":" : "/", n = (0, Qr.__read)(e.split(t)), r = n[0], i = n.slice(1); if ("accesspoint" === r) {
                if (1 !== i.length || "" === i[0])
                    throw new Error("Access Point ARN should have one resource accesspoint" + t + "{accesspointname}");
                return { accesspointName: i[0] };
            } if ("outpost" === r) {
                if (!i[0] || "accesspoint" !== i[1] || !i[2] || 3 !== i.length)
                    throw new Error("Outpost ARN should have resource outpost" + t + "{outpostId}" + t + "accesspoint" + t + "{accesspointName}");
                var o = (0, Qr.__read)(i, 3), a = o[0];
                return o[1], { outpostId: a, accesspointName: o[2] };
            } throw new Error("ARN resource should begin with 'accesspoint" + t + "' or 'outpost" + t + "'"); }(E), x = C.accesspointName, L = C.outpostId; Ui(x + "-" + b, { tlsCompatible: f }); var k = d ? w : r, N = d ? w : m; return L ? (function (e) { if ("s3-outposts" !== e)
                throw new Error("Expect 's3-posts' in Outpost ARN service component"); }(y), Ui(L, { tlsCompatible: f }), function (e) { if (e)
                throw new Error("Dualstack endpoint is not supported with Outpost"); }(s), function (e) { if (Ai(null != e ? e : ""))
                throw new Error("FIPS region is not supported with Outpost, got " + e); }(k), { bucketEndpoint: !0, hostname: x + "-" + b + "." + L + ".s3-outposts." + k + "." + i, signingRegion: N, signingService: "s3-outposts" }) : (function (e) { if ("s3" !== e)
                throw new Error("Expect 's3' in Accesspoint ARN service component"); }(y), { bucketEndpoint: !0, hostname: x + "-" + b + ".s3-accesspoint" + (s ? ".dualstack" : "") + "." + k + "." + i, signingRegion: N }); }, Ii = function (e) { var t, n = e.accelerateEndpoint, r = void 0 !== n && n, i = e.baseHostname, o = e.bucketName, a = e.dualstackEndpoint, s = void 0 !== a && a, u = e.pathStyleEndpoint, c = void 0 !== u && u, l = e.tlsCompatible, f = void 0 === l || l, d = (0, Qr.__read)((t = i, Pi.test(t) ? ["us-east-1", Mi] : zi(t)), 2), p = d[0], h = d[1]; return c || !function (e) { return Ci.test(e) && !xi.test(e) && !Li.test(e); }(o) || f && ki.test(o) ? { bucketEndpoint: !1, hostname: s ? "s3.dualstack." + p + "." + h : i } : (r ? i = "s3-accelerate" + (s ? ".dualstack" : "") + "." + h : s && (i = "s3.dualstack." + p + "." + h), { bucketEndpoint: !0, hostname: o + "." + i }); }, Ri = { tags: ["BUCKET_ENDPOINT"], name: "bucketEndpointMiddleware", relation: "before", toMiddleware: "hostHeaderMiddleware" }, ji = function (e) { return { applyToStack: function (t) { t.addRelativeTo(function (e) { return function (t, n) { return function (r) { return (0, Qr.__awaiter)(void 0, void 0, void 0, (function () { var i, o, a, s, u, c, l, f, d, p, h, v, g, m, y, S, b; return (0, Qr.__generator)(this, (function (w) { switch (w.label) {
                    case 0: return i = r.input.Bucket, o = e.bucketEndpoint, a = r.request, Zr.aW.isInstance(a) ? e.bucketEndpoint ? (a.hostname = i, [3, 6]) : [3, 1] : [3, 7];
                    case 1: return Ei(i) ? (s = function (e) { var t = e.split(":"); if (t.length < 6 || "arn" !== t[0])
                        throw new Error("Malformed ARN"); var n = (0, Qr.__read)(t); return { partition: n[1], service: n[2], region: n[3], accountId: n[4], resource: n.slice(5).join(":") }; }(i), c = Ti, [4, e.region()]) : [3, 5];
                    case 2: return u = c.apply(void 0, [w.sent()]), [4, e.regionInfoProvider(u)];
                    case 3: return l = w.sent() || {}, f = l.partition, d = l.signingRegion, p = void 0 === d ? u : d, [4, e.useArnRegion()];
                    case 4: return h = w.sent(), v = Ki({ bucketName: s, baseHostname: a.hostname, accelerateEndpoint: e.useAccelerateEndpoint, dualstackEndpoint: e.useDualstackEndpoint, pathStyleEndpoint: e.forcePathStyle, tlsCompatible: "https:" === a.protocol, useArnRegion: h, clientPartition: f, clientSigningRegion: p }), S = v.hostname, b = v.bucketEndpoint, g = v.signingRegion, m = v.signingService, g && g !== p && (n.signing_region = g), m && "s3" !== m && (n.signing_service = m), a.hostname = S, o = b, [3, 6];
                    case 5: y = Ki({ bucketName: i, baseHostname: a.hostname, accelerateEndpoint: e.useAccelerateEndpoint, dualstackEndpoint: e.useDualstackEndpoint, pathStyleEndpoint: e.forcePathStyle, tlsCompatible: "https:" === a.protocol }), S = y.hostname, b = y.bucketEndpoint, a.hostname = S, o = b, w.label = 6;
                    case 6: o && (a.path = a.path.replace(/^(\/)?[^\/]+/, ""), "" === a.path && (a.path = "/")), w.label = 7;
                    case 7: return [2, t((0, Qr.__assign)((0, Qr.__assign)({}, r), { request: a }))];
                } })); })); }; }; }(e), Ri); } }; }, Di = n(9718), Bi = { name: "ssecMiddleware", step: "initialize", tags: ["SSE"] }, qi = function (e) { return { applyToStack: function (t) { t.add(function (e) { var t = this; return function (n) { return function (r) { return (0, Qr.__awaiter)(t, void 0, void 0, (function () { var t, i, o, a, s, u, c, l, f, d, p, h, v, g, m, y, S; return (0, Qr.__generator)(this, (function (b) { switch (b.label) {
                    case 0: t = (0, Qr.__assign)({}, r.input), i = [{ target: "SSECustomerKey", hash: "SSECustomerKeyMD5" }, { target: "CopySourceSSECustomerKey", hash: "CopySourceSSECustomerKeyMD5" }], b.label = 1;
                    case 1: b.trys.push([1, 6, 7, 8]), o = (0, Qr.__values)(i), a = o.next(), b.label = 2;
                    case 2: return a.done ? [3, 5] : (s = a.value, (u = t[s.target]) ? (c = ArrayBuffer.isView(u) ? new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : "string" == typeof u ? e.utf8Decoder(u) : new Uint8Array(u), l = e.base64Encoder(c), (f = new e.md5).update(c), d = [(0, Qr.__assign)({}, t)], (S = {})[s.target] = l, p = s.hash, v = (h = e).base64Encoder, [4, f.digest()]) : [3, 4]);
                    case 3: t = Qr.__assign.apply(void 0, d.concat([(S[p] = v.apply(h, [b.sent()]), S)])), b.label = 4;
                    case 4: return a = o.next(), [3, 2];
                    case 5: return [3, 8];
                    case 6: return g = b.sent(), m = { error: g }, [3, 8];
                    case 7:
                        try {
                            a && !a.done && (y = o.return) && y.call(o);
                        }
                        finally {
                            if (m)
                                throw m.error;
                        }
                        return [7];
                    case 8: return [2, n((0, Qr.__assign)((0, Qr.__assign)({}, r), { input: t }))];
                } })); })); }; }; }(e), Bi); } }; }, Fi = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(qi(t)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "GetObjectCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: Zt.filterSensitiveLog, outputFilterSensitiveLog: Xt.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l(l(l(l(l(l(l(l(l({ "Content-Type": "" }, Si(e.SSECustomerKey) && { "x-amz-server-side-encryption-customer-key": e.SSECustomerKey }), Si(e.SSECustomerAlgorithm) && { "x-amz-server-side-encryption-customer-algorithm": e.SSECustomerAlgorithm }), Si(e.SSECustomerKeyMD5) && { "x-amz-server-side-encryption-customer-key-MD5": e.SSECustomerKeyMD5 }), Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), Si(e.IfUnmodifiedSince) && { "If-Unmodified-Since": (0, Xr._w)(e.IfUnmodifiedSince).toString() }), Si(e.IfModifiedSince) && { "If-Modified-Since": (0, Xr._w)(e.IfModifiedSince).toString() }), Si(e.IfNoneMatch) && { "If-None-Match": e.IfNoneMatch }), Si(e.IfMatch) && { "If-Match": e.IfMatch }), Si(e.Range) && { Range: e.Range }), r = "/{Bucket}/{Key+}", void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    if (r = r.replace("{Bucket}", (0, Xr.jc)(i)), void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    return r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), o = l(l(l(l(l(l(l(l({ "x-id": "GetObject" }, void 0 !== e.ResponseContentEncoding && { "response-content-encoding": e.ResponseContentEncoding }), void 0 !== e.ResponseCacheControl && { "response-cache-control": e.ResponseCacheControl }), void 0 !== e.ResponseContentLanguage && { "response-content-language": e.ResponseContentLanguage }), void 0 !== e.ResponseContentDisposition && { "response-content-disposition": e.ResponseContentDisposition }), void 0 !== e.PartNumber && { partNumber: e.PartNumber.toString() }), void 0 !== e.VersionId && { versionId: e.VersionId }), void 0 !== e.ResponseExpires && { "response-expires": (e.ResponseExpires.toISOString().split(".")[0] + "Z").toString() }), void 0 !== e.ResponseContentType && { "response-content-type": e.ResponseContentType }), [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, u = a.protocol, c = void 0 === u ? "https" : u, f = a.port, [2, new Zr.aW({ protocol: c, hostname: s, port: f, method: "GET", headers: n, path: r, query: o, body: void 0 })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r; return d(this, (function (i) { return 200 !== e.statusCode && e.statusCode >= 300 ? [2, si(e, t)] : (n = { $metadata: mi(e), AcceptRanges: void 0, Body: void 0, CacheControl: void 0, ContentDisposition: void 0, ContentEncoding: void 0, ContentLanguage: void 0, ContentLength: void 0, ContentRange: void 0, ContentType: void 0, DeleteMarker: void 0, ETag: void 0, Expiration: void 0, Expires: void 0, LastModified: void 0, Metadata: void 0, MissingMeta: void 0, ObjectLockLegalHoldStatus: void 0, ObjectLockMode: void 0, ObjectLockRetainUntilDate: void 0, PartsCount: void 0, ReplicationStatus: void 0, RequestCharged: void 0, Restore: void 0, SSECustomerAlgorithm: void 0, SSECustomerKeyMD5: void 0, SSEKMSKeyId: void 0, ServerSideEncryption: void 0, StorageClass: void 0, TagCount: void 0, VersionId: void 0, WebsiteRedirectLocation: void 0 }, void 0 !== e.headers["x-amz-object-lock-mode"] && (n.ObjectLockMode = e.headers["x-amz-object-lock-mode"]), void 0 !== e.headers["content-language"] && (n.ContentLanguage = e.headers["content-language"]), void 0 !== e.headers["content-disposition"] && (n.ContentDisposition = e.headers["content-disposition"]), void 0 !== e.headers["cache-control"] && (n.CacheControl = e.headers["cache-control"]), void 0 !== e.headers["content-type"] && (n.ContentType = e.headers["content-type"]), void 0 !== e.headers["content-range"] && (n.ContentRange = e.headers["content-range"]), void 0 !== e.headers["x-amz-server-side-encryption-aws-kms-key-id"] && (n.SSEKMSKeyId = e.headers["x-amz-server-side-encryption-aws-kms-key-id"]), void 0 !== e.headers["content-length"] && (n.ContentLength = parseInt(e.headers["content-length"], 10)), void 0 !== e.headers["x-amz-object-lock-retain-until-date"] && (n.ObjectLockRetainUntilDate = new Date(e.headers["x-amz-object-lock-retain-until-date"])), void 0 !== e.headers["x-amz-object-lock-legal-hold"] && (n.ObjectLockLegalHoldStatus = e.headers["x-amz-object-lock-legal-hold"]), void 0 !== e.headers["x-amz-delete-marker"] && (n.DeleteMarker = "true" === e.headers["x-amz-delete-marker"]), void 0 !== e.headers["x-amz-storage-class"] && (n.StorageClass = e.headers["x-amz-storage-class"]), void 0 !== e.headers["content-encoding"] && (n.ContentEncoding = e.headers["content-encoding"]), void 0 !== e.headers["x-amz-restore"] && (n.Restore = e.headers["x-amz-restore"]), void 0 !== e.headers["x-amz-website-redirect-location"] && (n.WebsiteRedirectLocation = e.headers["x-amz-website-redirect-location"]), void 0 !== e.headers["x-amz-server-side-encryption"] && (n.ServerSideEncryption = e.headers["x-amz-server-side-encryption"]), void 0 !== e.headers["x-amz-mp-parts-count"] && (n.PartsCount = parseInt(e.headers["x-amz-mp-parts-count"], 10)), void 0 !== e.headers["x-amz-server-side-encryption-customer-algorithm"] && (n.SSECustomerAlgorithm = e.headers["x-amz-server-side-encryption-customer-algorithm"]), void 0 !== e.headers["accept-ranges"] && (n.AcceptRanges = e.headers["accept-ranges"]), void 0 !== e.headers["x-amz-version-id"] && (n.VersionId = e.headers["x-amz-version-id"]), void 0 !== e.headers.expires && (n.Expires = new Date(e.headers.expires)), void 0 !== e.headers["x-amz-expiration"] && (n.Expiration = e.headers["x-amz-expiration"]), void 0 !== e.headers["x-amz-missing-meta"] && (n.MissingMeta = parseInt(e.headers["x-amz-missing-meta"], 10)), void 0 !== e.headers["x-amz-replication-status"] && (n.ReplicationStatus = e.headers["x-amz-replication-status"]), void 0 !== e.headers["x-amz-tagging-count"] && (n.TagCount = parseInt(e.headers["x-amz-tagging-count"], 10)), void 0 !== e.headers["x-amz-server-side-encryption-customer-key-md5"] && (n.SSECustomerKeyMD5 = e.headers["x-amz-server-side-encryption-customer-key-md5"]), void 0 !== e.headers["last-modified"] && (n.LastModified = new Date(e.headers["last-modified"])), void 0 !== e.headers.etag && (n.ETag = e.headers.etag), void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), Object.keys(e.headers).forEach((function (t) { void 0 === n.Metadata && (n.Metadata = {}), t.startsWith("x-amz-meta-") && (n.Metadata[t.substring(11)] = e.headers[t]); })), r = e.body, n.Body = r, [2, Promise.resolve(n)]); })); })); }(e, t); }, t; }(Xr.mY), Hi = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "DeleteObjectCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: X.filterSensitiveLog, outputFilterSensitiveLog: Y.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l(l(l({ "Content-Type": "" }, Si(e.MFA) && { "x-amz-mfa": e.MFA }), Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), Si(e.BypassGovernanceRetention) && { "x-amz-bypass-governance-retention": e.BypassGovernanceRetention.toString() }), Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), r = "/{Bucket}/{Key+}", void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    if (r = r.replace("{Bucket}", (0, Xr.jc)(i)), void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    return r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), o = l({ "x-id": "DeleteObject" }, void 0 !== e.VersionId && { versionId: e.VersionId }), [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, u = a.protocol, c = void 0 === u ? "https" : u, f = a.port, [2, new Zr.aW({ protocol: c, hostname: s, port: f, method: "DELETE", headers: n, path: r, query: o, body: void 0 })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n; return d(this, (function (r) { switch (r.label) {
                case 0: return 204 !== e.statusCode && e.statusCode >= 300 ? [2, ai(e, t)] : (n = { $metadata: mi(e), DeleteMarker: void 0, RequestCharged: void 0, VersionId: void 0 }, void 0 !== e.headers["x-amz-delete-marker"] && (n.DeleteMarker = "true" === e.headers["x-amz-delete-marker"]), void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), void 0 !== e.headers["x-amz-version-id"] && (n.VersionId = e.headers["x-amz-version-id"]), [4, yi(e.body, t)]);
                case 1: return r.sent(), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY), Vi = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "ListObjectsCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: Dn.filterSensitiveLog, outputFilterSensitiveLog: jn.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l({ "Content-Type": "" }, Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), r = "/{Bucket}", void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    return r = r.replace("{Bucket}", (0, Xr.jc)(i)), o = l(l(l(l(l({}, void 0 !== e.MaxKeys && { "max-keys": e.MaxKeys.toString() }), void 0 !== e.Marker && { marker: e.Marker }), void 0 !== e.Prefix && { prefix: e.Prefix }), void 0 !== e.Delimiter && { delimiter: e.Delimiter }), void 0 !== e.EncodingType && { "encoding-type": e.EncodingType }), [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, u = a.protocol, c = void 0 === u ? "https" : u, f = a.port, [2, new Zr.aW({ protocol: c, hostname: s, port: f, method: "GET", headers: n, path: r, query: o, body: void 0 })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r; return d(this, (function (i) { switch (i.label) {
                case 0: return 200 !== e.statusCode && e.statusCode >= 300 ? [2, ui(e, t)] : (n = { $metadata: mi(e), CommonPrefixes: void 0, Contents: void 0, Delimiter: void 0, EncodingType: void 0, IsTruncated: void 0, Marker: void 0, MaxKeys: void 0, Name: void 0, NextMarker: void 0, Prefix: void 0 }, [4, bi(e.body, t)]);
                case 1: return "" === (r = i.sent()).CommonPrefixes && (n.CommonPrefixes = []), void 0 !== r.CommonPrefixes && (n.CommonPrefixes = function (e, t) { return (e || []).map((function (e) { return function (e, t) { var n = { Prefix: void 0 }; return void 0 !== e.Prefix && (n.Prefix = e.Prefix), n; }(e); })); }((0, Xr.L)(r.CommonPrefixes))), "" === r.Contents && (n.Contents = []), void 0 !== r.Contents && (n.Contents = function (e, t) { return (e || []).map((function (e) { return function (e, t) { var n = { Size: void 0, ETag: void 0, Owner: void 0, StorageClass: void 0, Key: void 0, LastModified: void 0 }; return void 0 !== e.Size && (n.Size = parseInt(e.Size)), void 0 !== e.ETag && (n.ETag = e.ETag), void 0 !== e.Owner && (n.Owner = gi(e.Owner, t)), void 0 !== e.StorageClass && (n.StorageClass = e.StorageClass), void 0 !== e.Key && (n.Key = e.Key), void 0 !== e.LastModified && (n.LastModified = new Date(e.LastModified)), n; }(e, t); })); }((0, Xr.L)(r.Contents), t)), void 0 !== r.Delimiter && (n.Delimiter = r.Delimiter), void 0 !== r.EncodingType && (n.EncodingType = r.EncodingType), void 0 !== r.IsTruncated && (n.IsTruncated = "true" == r.IsTruncated), void 0 !== r.Marker && (n.Marker = r.Marker), void 0 !== r.MaxKeys && (n.MaxKeys = parseInt(r.MaxKeys)), void 0 !== r.Name && (n.Name = r.Name), void 0 !== r.NextMarker && (n.NextMarker = r.NextMarker), void 0 !== r.Prefix && (n.Prefix = r.Prefix), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY);
            var $i = JSON.parse('{"u2":"@aws-sdk/client-s3","i8":"1.0.0-rc.4"}');
            var Gi = n(7643), Wi = n(4079), Ji = n(5644), Yi = function () { function e(e) { if (this.bytes = e, 8 !== e.byteLength)
                throw new Error("Int64 buffers must be exactly 8 bytes"); } return e.fromNumber = function (t) { if (t > 0x8000000000000000 || t < -0x8000000000000000)
                throw new Error(t + " is too large (or, if negative, too small) to represent as an Int64"); for (var n = new Uint8Array(8), r = 7, i = Math.abs(Math.round(t)); r > -1 && i > 0; r--, i /= 256)
                n[r] = i; return t < 0 && Xi(n), new e(n); }, e.prototype.valueOf = function () { var e = this.bytes.slice(0), t = 128 & e[0]; return t && Xi(e), parseInt((0, Ji.N)(e), 16) * (t ? -1 : 1); }, e.prototype.toString = function () { return String(this.valueOf()); }, e; }();
            function Xi(e) { for (var t = 0; t < 8; t++)
                e[t] ^= 255; for (t = 7; t > -1 && (e[t]++, 0 === e[t]); t--)
                ; }
            var Zi, Qi = function () { function e(e, t) { this.toUtf8 = e, this.fromUtf8 = t; } return e.prototype.format = function (e) { var t, n, r, i, o = []; try {
                for (var a = (0, Qr.__values)(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
                    var u = s.value, c = this.fromUtf8(u);
                    o.push(Uint8Array.from([c.byteLength]), c, this.formatHeaderValue(e[u]));
                }
            }
            catch (e) {
                t = { error: e };
            }
            finally {
                try {
                    s && !s.done && (n = a.return) && n.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } var l = new Uint8Array(o.reduce((function (e, t) { return e + t.byteLength; }), 0)), f = 0; try {
                for (var d = (0, Qr.__values)(o), p = d.next(); !p.done; p = d.next()) {
                    var h = p.value;
                    l.set(h, f), f += h.byteLength;
                }
            }
            catch (e) {
                r = { error: e };
            }
            finally {
                try {
                    p && !p.done && (i = d.return) && i.call(d);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            } return l; }, e.prototype.formatHeaderValue = function (e) { switch (e.type) {
                case "boolean": return Uint8Array.from([e.value ? 0 : 1]);
                case "byte": return Uint8Array.from([2, e.value]);
                case "short":
                    var t = new DataView(new ArrayBuffer(3));
                    return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
                case "integer":
                    var n = new DataView(new ArrayBuffer(5));
                    return n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer);
                case "long":
                    var r = new Uint8Array(9);
                    return r[0] = 5, r.set(e.value.bytes, 1), r;
                case "binary":
                    var i = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                    i.setUint8(0, 6), i.setUint16(1, e.value.byteLength, !1);
                    var o = new Uint8Array(i.buffer);
                    return o.set(e.value, 3), o;
                case "string":
                    var a = this.fromUtf8(e.value), s = new DataView(new ArrayBuffer(3 + a.byteLength));
                    s.setUint8(0, 7), s.setUint16(1, a.byteLength, !1);
                    var u = new Uint8Array(s.buffer);
                    return u.set(a, 3), u;
                case "timestamp":
                    var c = new Uint8Array(9);
                    return c[0] = 8, c.set(Yi.fromNumber(e.value.valueOf()).bytes, 1), c;
                case "uuid":
                    if (!co.test(e.value))
                        throw new Error("Invalid UUID received: " + e.value);
                    var l = new Uint8Array(17);
                    return l[0] = 9, l.set((0, Ji.H)(e.value.replace(/\-/g, "")), 1), l;
            } }, e.prototype.parse = function (e) { for (var t = {}, n = 0; n < e.byteLength;) {
                var r = e.getUint8(n++), i = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, r));
                switch (n += r, e.getUint8(n++)) {
                    case 0:
                        t[i] = { type: eo, value: !0 };
                        break;
                    case 1:
                        t[i] = { type: eo, value: !1 };
                        break;
                    case 2:
                        t[i] = { type: to, value: e.getInt8(n++) };
                        break;
                    case 3:
                        t[i] = { type: no, value: e.getInt16(n, !1) }, n += 2;
                        break;
                    case 4:
                        t[i] = { type: ro, value: e.getInt32(n, !1) }, n += 4;
                        break;
                    case 5:
                        t[i] = { type: io, value: new Yi(new Uint8Array(e.buffer, e.byteOffset + n, 8)) }, n += 8;
                        break;
                    case 6:
                        var o = e.getUint16(n, !1);
                        n += 2, t[i] = { type: oo, value: new Uint8Array(e.buffer, e.byteOffset + n, o) }, n += o;
                        break;
                    case 7:
                        var a = e.getUint16(n, !1);
                        n += 2, t[i] = { type: ao, value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, a)) }, n += a;
                        break;
                    case 8:
                        t[i] = { type: so, value: new Date(new Yi(new Uint8Array(e.buffer, e.byteOffset + n, 8)).valueOf()) }, n += 8;
                        break;
                    case 9:
                        var s = new Uint8Array(e.buffer, e.byteOffset + n, 16);
                        n += 16, t[i] = { type: uo, value: (0, Ji.N)(s.subarray(0, 4)) + "-" + (0, Ji.N)(s.subarray(4, 6)) + "-" + (0, Ji.N)(s.subarray(6, 8)) + "-" + (0, Ji.N)(s.subarray(8, 10)) + "-" + (0, Ji.N)(s.subarray(10)) };
                        break;
                    default: throw new Error("Unrecognized header type tag");
                }
            } return t; }, e; }();
            !function (e) { e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid"; }(Zi || (Zi = {}));
            var eo = "boolean", to = "byte", no = "short", ro = "integer", io = "long", oo = "binary", ao = "string", so = "timestamp", uo = "uuid", co = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/, lo = function () { function e(e, t) { this.headerMarshaller = new Qi(e, t); } return e.prototype.marshall = function (e) { var t = e.headers, n = e.body, r = this.headerMarshaller.format(t), i = r.byteLength + n.byteLength + 16, o = new Uint8Array(i), a = new DataView(o.buffer, o.byteOffset, o.byteLength), s = new Wi.Bi; return a.setUint32(0, i, !1), a.setUint32(4, r.byteLength, !1), a.setUint32(8, s.update(o.subarray(0, 8)).digest(), !1), o.set(r, 12), o.set(n, r.byteLength + 12), a.setUint32(i - 4, s.update(o.subarray(8, i - 4)).digest(), !1), o; }, e.prototype.unmarshall = function (e) { var t = function (e) { var t = e.byteLength, n = e.byteOffset, r = e.buffer; if (t < 16)
                throw new Error("Provided message too short to accommodate event stream message overhead"); var i = new DataView(r, n, t), o = i.getUint32(0, !1); if (t !== o)
                throw new Error("Reported message length does not match received message length"); var a = i.getUint32(4, !1), s = i.getUint32(8, !1), u = i.getUint32(t - 4, !1), c = (new Wi.Bi).update(new Uint8Array(r, n, 8)); if (s !== c.digest())
                throw new Error("The prelude checksum specified in the message (" + s + ") does not match the calculated CRC32 checksum (" + c.digest() + ")"); if (c.update(new Uint8Array(r, n + 8, t - 12)), u !== c.digest())
                throw new Error("The message checksum (" + c.digest() + ") did not match the expected value of " + u); return { headers: new DataView(r, n + 8 + 4, a), body: new Uint8Array(r, n + 8 + 4 + a, o - a - 16) }; }(e), n = t.headers, r = t.body; return { headers: this.headerMarshaller.parse(n), body: r }; }, e.prototype.formatHeaders = function (e) { return this.headerMarshaller.format(e); }, e; }(), fo = function () { function e(e) { var t = e.utf8Encoder, n = e.utf8Decoder; this.eventMarshaller = new lo(t, n), this.utfEncoder = t; } return e.prototype.deserialize = function (e, t) { var n, r, i, o, a, s, u; return function (e, t) { var n; return (n = {})[Symbol.asyncIterator] = function () { return (0, Qr.__asyncGenerator)(this, arguments, (function () { var n, r, i, o, a, s, u, c, l, f, d, p, h, v, g, m, y; return (0, Qr.__generator)(this, (function (S) { switch (S.label) {
                case 0: S.trys.push([0, 12, 13, 18]), n = (0, Qr.__asyncValues)(e), S.label = 1;
                case 1: return [4, (0, Qr.__await)(n.next())];
                case 2:
                    if ((r = S.sent()).done)
                        return [3, 11];
                    if (i = r.value, o = t.eventMarshaller.unmarshall(i), "error" !== (a = o.headers[":message-type"].value))
                        return [3, 3];
                    throw (s = new Error(o.headers[":error-message"].value || "UnknownError")).name = o.headers[":error-code"].value, s;
                case 3: return "exception" !== a ? [3, 5] : (u = o.headers[":exception-type"].value, (v = {})[u] = o, c = v, [4, (0, Qr.__await)(t.deserializer(c))]);
                case 4:
                    if ((l = S.sent()).$unknown)
                        throw (f = new Error(t.toUtf8(o.body))).name = u, f;
                    throw l[u];
                case 5: return "event" !== a ? [3, 9] : ((g = {})[o.headers[":event-type"].value] = o, d = g, [4, (0, Qr.__await)(t.deserializer(d))]);
                case 6: return (p = S.sent()).$unknown ? [3, 10] : [4, (0, Qr.__await)(p)];
                case 7: return [4, S.sent()];
                case 8: return S.sent(), [3, 10];
                case 9: throw Error("Unrecognizable event type: " + o.headers[":event-type"].value);
                case 10: return [3, 1];
                case 11: return [3, 18];
                case 12: return h = S.sent(), m = { error: h }, [3, 18];
                case 13: return S.trys.push([13, , 16, 17]), r && !r.done && (y = n.return) ? [4, (0, Qr.__await)(y.call(n))] : [3, 15];
                case 14: S.sent(), S.label = 15;
                case 15: return [3, 17];
                case 16:
                    if (m)
                        throw m.error;
                    return [7];
                case 17: return [7];
                case 18: return [2];
            } })); })); }, n; }((n = e, i = 0, o = 0, a = null, s = null, u = function (e) { if ("number" != typeof e)
                throw new Error("Attempted to allocate an event message where size was not a number: " + e); i = e, o = 4, a = new Uint8Array(e), new DataView(a.buffer).setUint32(0, e, !1); }, (r = {})[Symbol.asyncIterator] = function () { return (0, Qr.__asyncGenerator)(this, arguments, (function () { var e, t, r, c, l, f, d, p; return (0, Qr.__generator)(this, (function (h) { switch (h.label) {
                case 0: e = n[Symbol.asyncIterator](), h.label = 1;
                case 1: return [4, (0, Qr.__await)(e.next())];
                case 2: return t = h.sent(), r = t.value, t.done ? i ? [3, 4] : [4, (0, Qr.__await)(void 0)] : [3, 10];
                case 3: return [2, h.sent()];
                case 4: return i !== o ? [3, 7] : [4, (0, Qr.__await)(a)];
                case 5: return [4, h.sent()];
                case 6: return h.sent(), [3, 8];
                case 7: throw new Error("Truncated event message received.");
                case 8: return [4, (0, Qr.__await)(void 0)];
                case 9: return [2, h.sent()];
                case 10: c = r.length, l = 0, h.label = 11;
                case 11:
                    if (!(l < c))
                        return [3, 15];
                    if (!a) {
                        if (f = c - l, s || (s = new Uint8Array(4)), d = Math.min(4 - o, f), s.set(r.slice(l, l + d), o), l += d, (o += d) < 4)
                            return [3, 15];
                        u(new DataView(s.buffer).getUint32(0, !1)), s = null;
                    }
                    return p = Math.min(i - o, c - l), a.set(r.slice(l, l + p), o), o += p, l += p, i && i === o ? [4, (0, Qr.__await)(a)] : [3, 14];
                case 12: return [4, h.sent()];
                case 13: h.sent(), a = null, i = 0, o = 0, h.label = 14;
                case 14: return [3, 11];
                case 15: return [3, 1];
                case 16: return [2];
            } })); })); }, r), { eventMarshaller: this.eventMarshaller, deserializer: t, toUtf8: this.utfEncoder }); }, e.prototype.serialize = function (e, t) { var n, r = this; return (n = {})[Symbol.asyncIterator] = function () { return (0, Qr.__asyncGenerator)(this, arguments, (function () { var n, i, o, a, s, u, c; return (0, Qr.__generator)(this, (function (l) { switch (l.label) {
                case 0: l.trys.push([0, 7, 8, 13]), n = (0, Qr.__asyncValues)(e), l.label = 1;
                case 1: return [4, (0, Qr.__await)(n.next())];
                case 2: return (i = l.sent()).done ? [3, 6] : (o = i.value, a = r.eventMarshaller.marshall(t(o)), [4, (0, Qr.__await)(a)]);
                case 3: return [4, l.sent()];
                case 4: l.sent(), l.label = 5;
                case 5: return [3, 1];
                case 6: return [3, 13];
                case 7: return s = l.sent(), u = { error: s }, [3, 13];
                case 8: return l.trys.push([8, , 11, 12]), i && !i.done && (c = n.return) ? [4, (0, Qr.__await)(c.call(n))] : [3, 10];
                case 9: l.sent(), l.label = 10;
                case 10: return [3, 12];
                case 11:
                    if (u)
                        throw u.error;
                    return [7];
                case 12: return [7];
                case 13: return [4, (0, Qr.__await)(new Uint8Array(0))];
                case 14: return [4, l.sent()];
                case 15: return l.sent(), [2];
            } })); })); }, n; }, e; }(), po = function () { function e(e) { var t = e.utf8Encoder, n = e.utf8Decoder; this.eventMarshaller = new lo(t, n), this.universalMarshaller = new fo({ utf8Decoder: n, utf8Encoder: t }); } return e.prototype.deserialize = function (e, t) { var n, r, i = ho(e) ? (n = e, (r = {})[Symbol.asyncIterator] = function () { return (0, Qr.__asyncGenerator)(this, arguments, (function () { var e, t, r, i; return (0, Qr.__generator)(this, (function (o) { switch (o.label) {
                case 0: e = n.getReader(), o.label = 1;
                case 1: o.trys.push([1, , 9, 10]), o.label = 2;
                case 2: return [4, (0, Qr.__await)(e.read())];
                case 3: return t = o.sent(), r = t.done, i = t.value, r ? [4, (0, Qr.__await)(void 0)] : [3, 5];
                case 4: return [2, o.sent()];
                case 5: return [4, (0, Qr.__await)(i)];
                case 6: return [4, o.sent()];
                case 7: return o.sent(), [3, 2];
                case 8: return [3, 10];
                case 9: return e.releaseLock(), [7];
                case 10: return [2];
            } })); })); }, r) : e; return this.universalMarshaller.deserialize(i, t); }, e.prototype.serialize = function (e, t) { var n, r = this.universalMarshaller.serialize(e, t); return "function" == typeof ReadableStream ? (n = r[Symbol.asyncIterator](), new ReadableStream({ pull: function (e) { return (0, Qr.__awaiter)(this, void 0, void 0, (function () { var t, r, i; return (0, Qr.__generator)(this, (function (o) { switch (o.label) {
                    case 0: return [4, n.next()];
                    case 1: return t = o.sent(), r = t.done, i = t.value, r ? [2, e.close()] : (e.enqueue(i), [2]);
                } })); })); } })) : r; }, e; }(), ho = function (e) { return "function" == typeof ReadableStream && e instanceof ReadableStream; }, vo = n(4227);
            function go(e, t, n) { return void 0 === n && (n = 1048576), new Promise((function (r, i) { var o = new FileReader; o.addEventListener("error", i), o.addEventListener("abort", i); var a = e.size, s = 0; function u() { s >= a ? r() : o.readAsArrayBuffer(e.slice(s, Math.min(a, s + n))); } o.addEventListener("load", (function (e) { var n = e.target.result; t(new Uint8Array(n)), s += n.byteLength, u(); })), u(); })); }
            var mo = n(5582), yo = [1732584193, 4023233417, 2562383102, 271733878], So = function () { function e() { this.state = Uint32Array.from(yo), this.buffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return e.prototype.update = function (e) { if (!function (e) { return "string" == typeof e ? 0 === e.length : 0 === e.byteLength; }(e)) {
                if (this.finished)
                    throw new Error("Attempted to update an already finished hash.");
                var t = function (e) { return "string" == typeof e ? (t = e, "function" == typeof TextEncoder ? function (e) { return (new TextEncoder).encode(e); }(t) : function (e) { for (var t = [], n = 0, r = e.length; n < r; n++) {
                    var i = e.charCodeAt(n);
                    if (i < 128)
                        t.push(i);
                    else if (i < 2048)
                        t.push(i >> 6 | 192, 63 & i | 128);
                    else if (n + 1 < e.length && 55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                        var o = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++n));
                        t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128);
                    }
                    else
                        t.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128);
                } return Uint8Array.from(t); }(t)) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e); var t; }(e), n = 0, r = t.byteLength;
                for (this.bytesHashed += r; r > 0;)
                    this.buffer.setUint8(this.bufferLength++, t[n++]), r--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0);
            } }, e.prototype.digest = function () { return (0, Qr.__awaiter)(this, void 0, void 0, (function () { var e, t, n, r, i, o, a; return (0, Qr.__generator)(this, (function (s) { if (!this.finished) {
                if (t = (e = this).buffer, n = e.bufferLength, r = e.bytesHashed, i = 8 * r, t.setUint8(this.bufferLength++, 128), n % 64 >= 56) {
                    for (a = this.bufferLength; a < 64; a++)
                        t.setUint8(a, 0);
                    this.hashBuffer(), this.bufferLength = 0;
                }
                for (a = this.bufferLength; a < 56; a++)
                    t.setUint8(a, 0);
                t.setUint32(56, i >>> 0, !0), t.setUint32(60, Math.floor(i / 4294967296), !0), this.hashBuffer(), this.finished = !0;
            } for (o = new DataView(new ArrayBuffer(16)), a = 0; a < 4; a++)
                o.setUint32(4 * a, this.state[a], !0); return [2, new Uint8Array(o.buffer, o.byteOffset, o.byteLength)]; })); })); }, e.prototype.hashBuffer = function () { var e = this.buffer, t = this.state, n = t[0], r = t[1], i = t[2], o = t[3]; n = wo(n, r, i, o, e.getUint32(0, !0), 7, 3614090360), o = wo(o, n, r, i, e.getUint32(4, !0), 12, 3905402710), i = wo(i, o, n, r, e.getUint32(8, !0), 17, 606105819), r = wo(r, i, o, n, e.getUint32(12, !0), 22, 3250441966), n = wo(n, r, i, o, e.getUint32(16, !0), 7, 4118548399), o = wo(o, n, r, i, e.getUint32(20, !0), 12, 1200080426), i = wo(i, o, n, r, e.getUint32(24, !0), 17, 2821735955), r = wo(r, i, o, n, e.getUint32(28, !0), 22, 4249261313), n = wo(n, r, i, o, e.getUint32(32, !0), 7, 1770035416), o = wo(o, n, r, i, e.getUint32(36, !0), 12, 2336552879), i = wo(i, o, n, r, e.getUint32(40, !0), 17, 4294925233), r = wo(r, i, o, n, e.getUint32(44, !0), 22, 2304563134), n = wo(n, r, i, o, e.getUint32(48, !0), 7, 1804603682), o = wo(o, n, r, i, e.getUint32(52, !0), 12, 4254626195), i = wo(i, o, n, r, e.getUint32(56, !0), 17, 2792965006), n = Eo(n, r = wo(r, i, o, n, e.getUint32(60, !0), 22, 1236535329), i, o, e.getUint32(4, !0), 5, 4129170786), o = Eo(o, n, r, i, e.getUint32(24, !0), 9, 3225465664), i = Eo(i, o, n, r, e.getUint32(44, !0), 14, 643717713), r = Eo(r, i, o, n, e.getUint32(0, !0), 20, 3921069994), n = Eo(n, r, i, o, e.getUint32(20, !0), 5, 3593408605), o = Eo(o, n, r, i, e.getUint32(40, !0), 9, 38016083), i = Eo(i, o, n, r, e.getUint32(60, !0), 14, 3634488961), r = Eo(r, i, o, n, e.getUint32(16, !0), 20, 3889429448), n = Eo(n, r, i, o, e.getUint32(36, !0), 5, 568446438), o = Eo(o, n, r, i, e.getUint32(56, !0), 9, 3275163606), i = Eo(i, o, n, r, e.getUint32(12, !0), 14, 4107603335), r = Eo(r, i, o, n, e.getUint32(32, !0), 20, 1163531501), n = Eo(n, r, i, o, e.getUint32(52, !0), 5, 2850285829), o = Eo(o, n, r, i, e.getUint32(8, !0), 9, 4243563512), i = Eo(i, o, n, r, e.getUint32(28, !0), 14, 1735328473), n = Co(n, r = Eo(r, i, o, n, e.getUint32(48, !0), 20, 2368359562), i, o, e.getUint32(20, !0), 4, 4294588738), o = Co(o, n, r, i, e.getUint32(32, !0), 11, 2272392833), i = Co(i, o, n, r, e.getUint32(44, !0), 16, 1839030562), r = Co(r, i, o, n, e.getUint32(56, !0), 23, 4259657740), n = Co(n, r, i, o, e.getUint32(4, !0), 4, 2763975236), o = Co(o, n, r, i, e.getUint32(16, !0), 11, 1272893353), i = Co(i, o, n, r, e.getUint32(28, !0), 16, 4139469664), r = Co(r, i, o, n, e.getUint32(40, !0), 23, 3200236656), n = Co(n, r, i, o, e.getUint32(52, !0), 4, 681279174), o = Co(o, n, r, i, e.getUint32(0, !0), 11, 3936430074), i = Co(i, o, n, r, e.getUint32(12, !0), 16, 3572445317), r = Co(r, i, o, n, e.getUint32(24, !0), 23, 76029189), n = Co(n, r, i, o, e.getUint32(36, !0), 4, 3654602809), o = Co(o, n, r, i, e.getUint32(48, !0), 11, 3873151461), i = Co(i, o, n, r, e.getUint32(60, !0), 16, 530742520), n = xo(n, r = Co(r, i, o, n, e.getUint32(8, !0), 23, 3299628645), i, o, e.getUint32(0, !0), 6, 4096336452), o = xo(o, n, r, i, e.getUint32(28, !0), 10, 1126891415), i = xo(i, o, n, r, e.getUint32(56, !0), 15, 2878612391), r = xo(r, i, o, n, e.getUint32(20, !0), 21, 4237533241), n = xo(n, r, i, o, e.getUint32(48, !0), 6, 1700485571), o = xo(o, n, r, i, e.getUint32(12, !0), 10, 2399980690), i = xo(i, o, n, r, e.getUint32(40, !0), 15, 4293915773), r = xo(r, i, o, n, e.getUint32(4, !0), 21, 2240044497), n = xo(n, r, i, o, e.getUint32(32, !0), 6, 1873313359), o = xo(o, n, r, i, e.getUint32(60, !0), 10, 4264355552), i = xo(i, o, n, r, e.getUint32(24, !0), 15, 2734768916), r = xo(r, i, o, n, e.getUint32(52, !0), 21, 1309151649), n = xo(n, r, i, o, e.getUint32(16, !0), 6, 4149444226), o = xo(o, n, r, i, e.getUint32(44, !0), 10, 3174756917), i = xo(i, o, n, r, e.getUint32(8, !0), 15, 718787259), r = xo(r, i, o, n, e.getUint32(36, !0), 21, 3951481745), t[0] = n + t[0] & 4294967295, t[1] = r + t[1] & 4294967295, t[2] = i + t[2] & 4294967295, t[3] = o + t[3] & 4294967295; }, e; }();
            function bo(e, t, n, r, i, o) { return ((t = (t + e & 4294967295) + (r + o & 4294967295) & 4294967295) << i | t >>> 32 - i) + n & 4294967295; }
            function wo(e, t, n, r, i, o, a) { return bo(t & n | ~t & r, e, t, i, o, a); }
            function Eo(e, t, n, r, i, o, a) { return bo(t & r | n & ~r, e, t, i, o, a); }
            function Co(e, t, n, r, i, o, a) { return bo(t ^ n ^ r, e, t, i, o, a); }
            function xo(e, t, n, r, i, o, a) { return bo(n ^ (t | ~r), e, t, i, o, a); }
            var Lo = n(5721), ko = n(4104), No = n(7157), Po = n(2795), Mo = n(5731), To = "s3.{region}.amazonaws.com", zo = new Set(["ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1", "eu-north-1", "eu-west-1", "eu-west-2", "eu-west-3", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-west-1", "us-west-2"]), Ao = new Set(["cn-north-1", "cn-northwest-1"]), _o = new Set(["us-iso-east-1"]), Uo = new Set(["us-isob-east-1"]), Ko = new Set(["us-gov-east-1", "us-gov-west-1"]), Oo = l(l({}, { apiVersion: "2006-03-01", disableHostPrefix: !1, logger: {}, regionInfoProvider: function (e, t) { var n = void 0; switch (e) {
                    case "ap-east-1":
                        n = { hostname: "s3.ap-east-1.amazonaws.com", partition: "aws" };
                        break;
                    case "ap-northeast-1":
                        n = { hostname: "s3.ap-northeast-1.amazonaws.com", partition: "aws" };
                        break;
                    case "ap-northeast-2":
                        n = { hostname: "s3.ap-northeast-2.amazonaws.com", partition: "aws" };
                        break;
                    case "ap-south-1":
                        n = { hostname: "s3.ap-south-1.amazonaws.com", partition: "aws" };
                        break;
                    case "ap-southeast-1":
                        n = { hostname: "s3.ap-southeast-1.amazonaws.com", partition: "aws" };
                        break;
                    case "ap-southeast-2":
                        n = { hostname: "s3.ap-southeast-2.amazonaws.com", partition: "aws" };
                        break;
                    case "ca-central-1":
                        n = { hostname: "s3.ca-central-1.amazonaws.com", partition: "aws" };
                        break;
                    case "cn-north-1":
                        n = { hostname: "s3.cn-north-1.amazonaws.com.cn", partition: "aws-cn" };
                        break;
                    case "cn-northwest-1":
                        n = { hostname: "s3.cn-northwest-1.amazonaws.com.cn", partition: "aws-cn" };
                        break;
                    case "eu-central-1":
                        n = { hostname: "s3.eu-central-1.amazonaws.com", partition: "aws" };
                        break;
                    case "eu-north-1":
                        n = { hostname: "s3.eu-north-1.amazonaws.com", partition: "aws" };
                        break;
                    case "eu-west-1":
                        n = { hostname: "s3.eu-west-1.amazonaws.com", partition: "aws" };
                        break;
                    case "eu-west-2":
                        n = { hostname: "s3.eu-west-2.amazonaws.com", partition: "aws" };
                        break;
                    case "eu-west-3":
                        n = { hostname: "s3.eu-west-3.amazonaws.com", partition: "aws" };
                        break;
                    case "fips-us-gov-west-1":
                        n = { hostname: "s3-fips-us-gov-west-1.amazonaws.com", partition: "aws-us-gov", signingRegion: "us-gov-west-1" };
                        break;
                    case "me-south-1":
                        n = { hostname: "s3.me-south-1.amazonaws.com", partition: "aws" };
                        break;
                    case "s3-external-1":
                        n = { hostname: "s3-external-1.amazonaws.com", partition: "aws", signingRegion: "us-east-1" };
                        break;
                    case "sa-east-1":
                        n = { hostname: "s3.sa-east-1.amazonaws.com", partition: "aws" };
                        break;
                    case "us-east-1":
                        n = { hostname: "s3.amazonaws.com", partition: "aws" };
                        break;
                    case "us-east-2":
                        n = { hostname: "s3.us-east-2.amazonaws.com", partition: "aws" };
                        break;
                    case "us-gov-east-1":
                        n = { hostname: "s3.us-gov-east-1.amazonaws.com", partition: "aws-us-gov" };
                        break;
                    case "us-gov-west-1":
                        n = { hostname: "s3.us-gov-west-1.amazonaws.com", partition: "aws-us-gov" };
                        break;
                    case "us-iso-east-1":
                        n = { hostname: "s3.us-iso-east-1.c2s.ic.gov", partition: "aws-iso" };
                        break;
                    case "us-isob-east-1":
                        n = { hostname: "s3.us-isob-east-1.sc2s.sgov.gov", partition: "aws-iso-b" };
                        break;
                    case "us-west-1":
                        n = { hostname: "s3.us-west-1.amazonaws.com", partition: "aws" };
                        break;
                    case "us-west-2":
                        n = { hostname: "s3.us-west-2.amazonaws.com", partition: "aws" };
                        break;
                    default: zo.has(e) && (n = { hostname: To.replace("{region}", e), partition: "aws" }), Ao.has(e) && (n = { hostname: "s3.{region}.amazonaws.com.cn".replace("{region}", e), partition: "aws-cn" }), _o.has(e) && (n = { hostname: "s3.{region}.c2s.ic.gov".replace("{region}", e), partition: "aws-iso" }), Uo.has(e) && (n = { hostname: "s3.{region}.sc2s.sgov.gov".replace("{region}", e), partition: "aws-iso-b" }), Ko.has(e) && (n = { hostname: "s3.{region}.amazonaws.com".replace("{region}", e), partition: "aws-us-gov" }), void 0 === n && (n = { hostname: To.replace("{region}", e), partition: "aws" });
                } return Promise.resolve(n); }, signingEscapePath: !1, signingName: "s3", useArnRegion: !1 }), { runtime: "browser", base64Decoder: No.G, base64Encoder: No.s, bodyLengthChecker: Po.W, credentialDefaultProvider: (0, mo.s)("Credential is missing"), defaultUserAgent: (0, Mo.f)($i.u2, $i.i8), eventStreamSerdeProvider: function (e) { return new po(e); }, maxAttempts: Lo.J, md5: So, region: (0, mo.s)("Region is missing"), requestHandler: new vo.B, sha256: Gi.Sha256, streamCollector: vo.C, streamHasher: function (e, t) { return (0, Qr.__awaiter)(this, void 0, void 0, (function () { var n; return (0, Qr.__generator)(this, (function (r) { switch (r.label) {
                    case 0: return n = new e, [4, go(t, (function (e) { n.update(e); }))];
                    case 1: return r.sent(), [2, n.digest()];
                } })); })); }, urlParser: ko.e, utf8Decoder: function (e) { return "function" == typeof TextEncoder ? function (e) { return (new TextEncoder).encode(e); }(e) : function (e) { for (var t = [], n = 0, r = e.length; n < r; n++) {
                    var i = e.charCodeAt(n);
                    if (i < 128)
                        t.push(i);
                    else if (i < 2048)
                        t.push(i >> 6 | 192, 63 & i | 128);
                    else if (n + 1 < e.length && 55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                        var o = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++n));
                        t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128);
                    }
                    else
                        t.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128);
                } return Uint8Array.from(t); }(e); }, utf8Encoder: function (e) { return "function" == typeof TextDecoder ? function (e) { return new TextDecoder("utf-8").decode(e); }(e) : function (e) { for (var t = "", n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    if (i < 128)
                        t += String.fromCharCode(i);
                    else if (192 <= i && i < 224) {
                        var o = e[++n];
                        t += String.fromCharCode((31 & i) << 6 | 63 & o);
                    }
                    else if (240 <= i && i < 365) {
                        var a = "%" + [i, e[++n], e[++n], e[++n]].map((function (e) { return e.toString(16); })).join("%");
                        t += decodeURIComponent(a);
                    }
                    else
                        t += String.fromCharCode((15 & i) << 12 | (63 & e[++n]) << 6 | 63 & e[++n]);
                } return t; }(e); } }), Io = n(9162), Ro = n(672), jo = { step: "build", tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"], name: "addExpectContinueMiddleware" }, Do = n(3273), Bo = n(7137), qo = { step: "initialize", tags: ["VALIDATE_BUCKET_NAME"], name: "validateBucketNameMiddleware" }, Fo = { step: "build", tags: ["USE_REGIONAL_ENDPOINT", "S3"], name: "useRegionalEndpointMiddleware" }, Ho = n(7139), Vo = n(6317), $o = function (e) { function t(t) { var n, r, i, o, a, s, u, c, f, d, p, h, v, g = this, m = l(l({}, Oo), t), y = (0, Io.Xb)(m), S = (0, Io.g4)(y), b = (0, Ho.A$)(S), w = (0, Lo.BC)(b), E = (i = void 0 !== (r = (n = (0, Vo.er)(w)).bucketEndpoint) && r, a = void 0 !== (o = n.forcePathStyle) && o, u = void 0 !== (s = n.useAccelerateEndpoint) && s, f = void 0 !== (c = n.useDualstackEndpoint) && c, d = n.useArnRegion, p = void 0 !== d && d, (0, Qr.__assign)((0, Qr.__assign)({}, n), { bucketEndpoint: i, forcePathStyle: a, useAccelerateEndpoint: u, useDualstackEndpoint: f, useArnRegion: "function" == typeof p ? p : function () { return Promise.resolve(p); } })), C = function (e) { return (0, Qr.__assign)((0, Qr.__assign)({}, e), { eventStreamMarshaller: e.eventStreamSerdeProvider(e) }); }((0, Do.S8)(E)); return (g = e.call(this, C) || this).config = C, g.middlewareStack.use((0, Ho.yt)(g.config)), g.middlewareStack.use((0, Lo.NQ)(g.config)), g.middlewareStack.use((0, Vo.XJ)(g.config)), g.middlewareStack.use((0, Ro.VG)(g.config)), g.middlewareStack.use((g.config, { applyToStack: function (e) { e.add(function () { var e = this; return function (t) { return function (n) { return (0, Qr.__awaiter)(e, void 0, void 0, (function () { var e, r; return (0, Qr.__generator)(this, (function (i) { if ("string" == typeof (e = n.input.Bucket) && !Ei(e) && e.indexOf("/") >= 0)
                    throw (r = new Error("Bucket name shouldn't contain '/', received '" + e + "'")).name = "InvalidBucketName", r; return [2, t((0, Qr.__assign)({}, n))]; })); })); }; }; }(), qo); } })), g.middlewareStack.use((v = g.config, { applyToStack: function (e) { e.add(function (e) { return function (t) { return function (n) { return (0, Qr.__awaiter)(void 0, void 0, void 0, (function () { var r, i; return (0, Qr.__generator)(this, (function (o) { switch (o.label) {
                    case 0: return r = n.request, !Zr.aW.isInstance(r) || e.isCustomEndpoint ? [2, t((0, Qr.__assign)({}, n))] : "s3.amazonaws.com" !== r.hostname ? [3, 1] : (r.hostname = "s3.us-east-1.amazonaws.com", [3, 3]);
                    case 1: return i = "aws-global", [4, e.region()];
                    case 2: i === o.sent() && (r.hostname = "s3.amazonaws.com"), o.label = 3;
                    case 3: return [2, t((0, Qr.__assign)({}, n))];
                } })); })); }; }; }(v), Fo); } })), g.middlewareStack.use((h = g.config, { applyToStack: function (e) { e.add(function (e) { var t = this; return function (n) { return function (r) { return (0, Qr.__awaiter)(t, void 0, void 0, (function () { var t; return (0, Qr.__generator)(this, (function (i) { return t = r.request, Zr.aW.isInstance(t) && t.body && "node" === e.runtime && (t.headers = (0, Qr.__assign)((0, Qr.__assign)({}, t.headers), { Expect: "100-continue" })), [2, n((0, Qr.__assign)((0, Qr.__assign)({}, r), { request: t }))]; })); })); }; }; }(h), jo); } })), g.middlewareStack.use((0, Do.G2)(g.config)), g.middlewareStack.use((0, Bo.cV)(g.config)), g; } return c(t, e), t.prototype.destroy = function () { e.prototype.destroy.call(this); }, t; }(Xr.KU), Go = n(9444);
            function Wo(e) { var t = e.port, n = e.query, r = e.protocol, i = e.path, o = e.hostname; r && ":" !== r.substr(-1) && (r += ":"), t && (o += ":" + t), i && "/" !== i.charAt(0) && (i = "/" + i); var a = n ? (0, Go.I)(n) : ""; return a && "?" !== a[0] && (a = "?" + a), r + "//" + o + i + a; }
            function Jo(e, t) { return (0, Qr.__awaiter)(this, void 0, void 0, (function () { var n, r, i = this; return (0, Qr.__generator)(this, (function (o) { switch (o.label) {
                case 0: return n = function (e) { return function (e) { return (0, Qr.__awaiter)(i, void 0, void 0, (function () { return (0, Qr.__generator)(this, (function (t) { return [2, { output: { request: e.request }, response: void 0 }]; })); })); }; }, (r = e.middlewareStack.clone()).add(n, { step: "build", priority: "low" }), [4, t.resolveMiddleware(r, e.config, void 0)(t).then((function (e) { return e.output.request; }))];
                case 1: return [2, o.sent()];
            } })); })); }
            var Yo = n(7856), Xo = function () { function e(e) { var t = (0, Qr.__assign)({ service: e.signingName || e.service || "s3", uriEscapePath: e.uriEscapePath || !1 }, e); this.signer = new Yo.L1(t); } return e.prototype.presign = function (e, t) { void 0 === t && (t = {}); var n = t.unsignableHeaders, r = void 0 === n ? new Set : n, i = (0, Qr.__rest)(t, ["unsignableHeaders"]); return (0, Qr.__awaiter)(this, void 0, void 0, (function () { return (0, Qr.__generator)(this, (function (t) { return r.add("content-type"), e.headers["X-Amz-Content-Sha256"] = "UNSIGNED-PAYLOAD", [2, this.signer.presign(e, (0, Qr.__assign)({ expiresIn: 900, unsignableHeaders: r }, i))]; })); })); }, e; }(), Zo = n(9669), Qo = n.n(Zo), ea = new r.k("axios-http-handler"), ta = "sendProgress", na = function () { function e(e, t) { void 0 === e && (e = {}), this.httpOptions = e, this.emitter = t; } return e.prototype.destroy = function () { }, e.prototype.handle = function (e, t) { var n = this.httpOptions.requestTimeout, r = this.emitter, i = e.path; if (e.query) {
                var o = (0, Go.I)(e.query);
                o && (i += "?" + o);
            } var a = e.port, s = e.protocol + "//" + e.hostname + (a ? ":" + a : "") + i, u = {}; u.url = s, u.method = e.method, u.headers = e.headers, delete u.headers.host, e.body ? u.data = e.body : u.headers["Content-Type"] && (u.data = null), r && (u.onUploadProgress = function (e) { r.emit(ta, e), ea.debug(e); }), u.responseType = "blob"; var c, l = [Qo().request(u).then((function (e) { return { response: new Zr.Zn({ headers: e.headers, statusCode: e.status, body: e.data }) }; })).catch((function (e) { throw ea.error(e), e; })), (c = n, void 0 === c && (c = 0), new Promise((function (e, t) { c && setTimeout((function () { var e = new Error("Request did not complete within " + c + " ms"); e.name = "TimeoutError", t(e); }), c); })))]; return Promise.race(l); }, e; }();
            var ra, ia, oa, aa, sa, ua, ca, la, fa, da, pa, ha, va, ga, ma, ya, Sa, ba, wa, Ea, Ca = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(qi(t)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "PutObjectCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: wr.filterSensitiveLog, outputFilterSensitiveLog: br.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f, p, h; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l({ "Content-Type": "application/octet-stream" }, Si(e.GrantFullControl) && { "x-amz-grant-full-control": e.GrantFullControl }), Si(e.ContentEncoding) && { "Content-Encoding": e.ContentEncoding }), Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), Si(e.GrantReadACP) && { "x-amz-grant-read-acp": e.GrantReadACP }), Si(e.SSECustomerKeyMD5) && { "x-amz-server-side-encryption-customer-key-MD5": e.SSECustomerKeyMD5 }), Si(e.CacheControl) && { "Cache-Control": e.CacheControl }), Si(e.WebsiteRedirectLocation) && { "x-amz-website-redirect-location": e.WebsiteRedirectLocation }), Si(e.ObjectLockLegalHoldStatus) && { "x-amz-object-lock-legal-hold": e.ObjectLockLegalHoldStatus }), Si(e.GrantWriteACP) && { "x-amz-grant-write-acp": e.GrantWriteACP }), Si(e.ContentLength) && { "Content-Length": e.ContentLength.toString() }), Si(e.ObjectLockRetainUntilDate) && { "x-amz-object-lock-retain-until-date": (e.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString() }), Si(e.SSECustomerAlgorithm) && { "x-amz-server-side-encryption-customer-algorithm": e.SSECustomerAlgorithm }), Si(e.ContentDisposition) && { "Content-Disposition": e.ContentDisposition }), Si(e.SSECustomerKey) && { "x-amz-server-side-encryption-customer-key": e.SSECustomerKey }), Si(e.SSEKMSEncryptionContext) && { "x-amz-server-side-encryption-context": e.SSEKMSEncryptionContext }), Si(e.Tagging) && { "x-amz-tagging": e.Tagging }), Si(e.Expires) && { Expires: (0, Xr._w)(e.Expires).toString() }), Si(e.StorageClass) && { "x-amz-storage-class": e.StorageClass }), Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), Si(e.ContentMD5) && { "Content-MD5": e.ContentMD5 }), Si(e.ServerSideEncryption) && { "x-amz-server-side-encryption": e.ServerSideEncryption }), Si(e.ObjectLockMode) && { "x-amz-object-lock-mode": e.ObjectLockMode }), Si(e.SSEKMSKeyId) && { "x-amz-server-side-encryption-aws-kms-key-id": e.SSEKMSKeyId }), Si(e.ContentLanguage) && { "Content-Language": e.ContentLanguage }), Si(e.GrantRead) && { "x-amz-grant-read": e.GrantRead }), Si(e.ACL) && { "x-amz-acl": e.ACL }), Si(e.ContentType) && { "Content-Type": e.ContentType }), void 0 !== e.Metadata && Object.keys(e.Metadata).reduce((function (t, n) { return t["x-amz-meta-" + n] = e.Metadata[n], t; }), {})), r = "/{Bucket}/{Key+}", void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    if (r = r.replace("{Bucket}", (0, Xr.jc)(i)), void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    return r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), o = { "x-id": "PutObject" }, void 0 !== e.Body && (s = e.Body, a = s), [4, t.endpoint()];
                case 1: return u = d.sent(), c = u.hostname, f = u.protocol, p = void 0 === f ? "https" : f, h = u.port, [2, new Zr.aW({ protocol: p, hostname: c, port: h, method: "PUT", headers: n, path: r, query: o, body: a })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n; return d(this, (function (r) { switch (r.label) {
                case 0: return 200 !== e.statusCode && e.statusCode >= 300 ? [2, li(e, t)] : (n = { $metadata: mi(e), ETag: void 0, Expiration: void 0, RequestCharged: void 0, SSECustomerAlgorithm: void 0, SSECustomerKeyMD5: void 0, SSEKMSEncryptionContext: void 0, SSEKMSKeyId: void 0, ServerSideEncryption: void 0, VersionId: void 0 }, void 0 !== e.headers["x-amz-server-side-encryption-context"] && (n.SSEKMSEncryptionContext = e.headers["x-amz-server-side-encryption-context"]), void 0 !== e.headers["x-amz-expiration"] && (n.Expiration = e.headers["x-amz-expiration"]), void 0 !== e.headers["x-amz-server-side-encryption-customer-key-md5"] && (n.SSECustomerKeyMD5 = e.headers["x-amz-server-side-encryption-customer-key-md5"]), void 0 !== e.headers.etag && (n.ETag = e.headers.etag), void 0 !== e.headers["x-amz-server-side-encryption-customer-algorithm"] && (n.SSECustomerAlgorithm = e.headers["x-amz-server-side-encryption-customer-algorithm"]), void 0 !== e.headers["x-amz-version-id"] && (n.VersionId = e.headers["x-amz-version-id"]), void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), void 0 !== e.headers["x-amz-server-side-encryption-aws-kms-key-id"] && (n.SSEKMSKeyId = e.headers["x-amz-server-side-encryption-aws-kms-key-id"]), void 0 !== e.headers["x-amz-server-side-encryption"] && (n.ServerSideEncryption = e.headers["x-amz-server-side-encryption"]), [4, yi(e.body, t)]);
                case 1: return r.sent(), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY), xa = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(qi(t)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "CreateMultipartUploadCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: I.filterSensitiveLog, outputFilterSensitiveLog: O.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l({ "Content-Type": "" }, Si(e.GrantFullControl) && { "x-amz-grant-full-control": e.GrantFullControl }), Si(e.SSECustomerKeyMD5) && { "x-amz-server-side-encryption-customer-key-MD5": e.SSECustomerKeyMD5 }), Si(e.SSECustomerAlgorithm) && { "x-amz-server-side-encryption-customer-algorithm": e.SSECustomerAlgorithm }), Si(e.SSEKMSKeyId) && { "x-amz-server-side-encryption-aws-kms-key-id": e.SSEKMSKeyId }), Si(e.ObjectLockLegalHoldStatus) && { "x-amz-object-lock-legal-hold": e.ObjectLockLegalHoldStatus }), Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), Si(e.GrantRead) && { "x-amz-grant-read": e.GrantRead }), Si(e.GrantWriteACP) && { "x-amz-grant-write-acp": e.GrantWriteACP }), Si(e.WebsiteRedirectLocation) && { "x-amz-website-redirect-location": e.WebsiteRedirectLocation }), Si(e.ContentType) && { "Content-Type": e.ContentType }), Si(e.ContentLanguage) && { "Content-Language": e.ContentLanguage }), Si(e.CacheControl) && { "Cache-Control": e.CacheControl }), Si(e.GrantReadACP) && { "x-amz-grant-read-acp": e.GrantReadACP }), Si(e.Tagging) && { "x-amz-tagging": e.Tagging }), Si(e.SSEKMSEncryptionContext) && { "x-amz-server-side-encryption-context": e.SSEKMSEncryptionContext }), Si(e.ACL) && { "x-amz-acl": e.ACL }), Si(e.SSECustomerKey) && { "x-amz-server-side-encryption-customer-key": e.SSECustomerKey }), Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), Si(e.Expires) && { Expires: (0, Xr._w)(e.Expires).toString() }), Si(e.ObjectLockRetainUntilDate) && { "x-amz-object-lock-retain-until-date": (e.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString() }), Si(e.ServerSideEncryption) && { "x-amz-server-side-encryption": e.ServerSideEncryption }), Si(e.ContentDisposition) && { "Content-Disposition": e.ContentDisposition }), Si(e.ObjectLockMode) && { "x-amz-object-lock-mode": e.ObjectLockMode }), Si(e.StorageClass) && { "x-amz-storage-class": e.StorageClass }), Si(e.ContentEncoding) && { "Content-Encoding": e.ContentEncoding }), void 0 !== e.Metadata && Object.keys(e.Metadata).reduce((function (t, n) { return t["x-amz-meta-" + n] = e.Metadata[n], t; }), {})), r = "/{Bucket}/{Key+}", void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    if (r = r.replace("{Bucket}", (0, Xr.jc)(i)), void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    return r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), o = { uploads: "" }, [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, u = a.protocol, c = void 0 === u ? "https" : u, f = a.port, [2, new Zr.aW({ protocol: c, hostname: s, port: f, method: "POST", headers: n, path: r, query: o, body: void 0 })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r; return d(this, (function (i) { switch (i.label) {
                case 0: return 200 !== e.statusCode && e.statusCode >= 300 ? [2, oi(e, t)] : (n = { $metadata: mi(e), AbortDate: void 0, AbortRuleId: void 0, Bucket: void 0, Key: void 0, RequestCharged: void 0, SSECustomerAlgorithm: void 0, SSECustomerKeyMD5: void 0, SSEKMSEncryptionContext: void 0, SSEKMSKeyId: void 0, ServerSideEncryption: void 0, UploadId: void 0 }, void 0 !== e.headers["x-amz-server-side-encryption-context"] && (n.SSEKMSEncryptionContext = e.headers["x-amz-server-side-encryption-context"]), void 0 !== e.headers["x-amz-server-side-encryption"] && (n.ServerSideEncryption = e.headers["x-amz-server-side-encryption"]), void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), void 0 !== e.headers["x-amz-abort-date"] && (n.AbortDate = new Date(e.headers["x-amz-abort-date"])), void 0 !== e.headers["x-amz-server-side-encryption-customer-algorithm"] && (n.SSECustomerAlgorithm = e.headers["x-amz-server-side-encryption-customer-algorithm"]), void 0 !== e.headers["x-amz-server-side-encryption-aws-kms-key-id"] && (n.SSEKMSKeyId = e.headers["x-amz-server-side-encryption-aws-kms-key-id"]), void 0 !== e.headers["x-amz-abort-rule-id"] && (n.AbortRuleId = e.headers["x-amz-abort-rule-id"]), void 0 !== e.headers["x-amz-server-side-encryption-customer-key-md5"] && (n.SSECustomerKeyMD5 = e.headers["x-amz-server-side-encryption-customer-key-md5"]), [4, bi(e.body, t)]);
                case 1: return void 0 !== (r = i.sent()).Bucket && (n.Bucket = r.Bucket), void 0 !== r.Key && (n.Key = r.Key), void 0 !== r.UploadId && (n.UploadId = r.UploadId), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY);
            !function (e) { e.SELECT = "SELECT"; }(ra || (ra = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.OutputLocation && { OutputLocation: jr.filterSensitiveLog(e.OutputLocation) }); }; }(ia || (ia = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.RestoreRequest && { RestoreRequest: ia.filterSensitiveLog(e.RestoreRequest) }); }; }(oa || (oa = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(aa || (aa = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(sa || (sa = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ua || (ua = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ca || (ca = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(la || (la = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(fa || (fa = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(da || (da = {})), function (e) { e.visit = function (e, t) { return void 0 !== e.Cont ? t.Cont(e.Cont) : void 0 !== e.Progress ? t.Progress(e.Progress) : void 0 !== e.Stats ? t.Stats(e.Stats) : void 0 !== e.End ? t.End(e.End) : void 0 !== e.Records ? t.Records(e.Records) : t._(e.$unknown[0], e.$unknown[1]); }, e.filterSensitiveLog = function (e) { var t; return void 0 !== e.Cont ? { Cont: aa.filterSensitiveLog(e.Cont) } : void 0 !== e.Progress ? { Progress: ca.filterSensitiveLog(e.Progress) } : void 0 !== e.Stats ? { Stats: da.filterSensitiveLog(e.Stats) } : void 0 !== e.End ? { End: sa.filterSensitiveLog(e.End) } : void 0 !== e.Records ? { Records: la.filterSensitiveLog(e.Records) } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0; }; }(pa || (pa = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.Payload && { Payload: "STREAMING_CONTENT" }); }; }(ha || (ha = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(va || (va = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ga || (ga = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSECustomerKey && { SSECustomerKey: Xr.oc }); }; }(ma || (ma = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(ya || (ya = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSECustomerKey && { SSECustomerKey: Xr.oc }); }; }(Sa || (Sa = {})), function (e) { e.filterSensitiveLog = function (e) { return l({}, e); }; }(ba || (ba = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l({}, e), e.SSEKMSKeyId && { SSEKMSKeyId: Xr.oc }); }; }(wa || (wa = {})), function (e) { e.filterSensitiveLog = function (e) { return l(l(l({}, e), e.SSECustomerKey && { SSECustomerKey: Xr.oc }), e.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: Xr.oc }); }; }(Ea || (Ea = {}));
            var La = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(qi(t)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "UploadPartCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: Sa.filterSensitiveLog, outputFilterSensitiveLog: ya.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f, p, h; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l(l(l(l(l(l({ "Content-Type": "application/octet-stream" }, Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), Si(e.ContentLength) && { "Content-Length": e.ContentLength.toString() }), Si(e.SSECustomerKey) && { "x-amz-server-side-encryption-customer-key": e.SSECustomerKey }), Si(e.SSECustomerAlgorithm) && { "x-amz-server-side-encryption-customer-algorithm": e.SSECustomerAlgorithm }), Si(e.SSECustomerKeyMD5) && { "x-amz-server-side-encryption-customer-key-MD5": e.SSECustomerKeyMD5 }), Si(e.ContentMD5) && { "Content-MD5": e.ContentMD5 }), r = "/{Bucket}/{Key+}", void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    if (r = r.replace("{Bucket}", (0, Xr.jc)(i)), void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    return r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), o = l(l({ "x-id": "UploadPart" }, void 0 !== e.PartNumber && { partNumber: e.PartNumber.toString() }), void 0 !== e.UploadId && { uploadId: e.UploadId }), void 0 !== e.Body && (s = e.Body, a = s), [4, t.endpoint()];
                case 1: return u = d.sent(), c = u.hostname, f = u.protocol, p = void 0 === f ? "https" : f, h = u.port, [2, new Zr.aW({ protocol: p, hostname: c, port: h, method: "PUT", headers: n, path: r, query: o, body: a })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n; return d(this, (function (r) { switch (r.label) {
                case 0: return 200 !== e.statusCode && e.statusCode >= 300 ? [2, fi(e, t)] : (n = { $metadata: mi(e), ETag: void 0, RequestCharged: void 0, SSECustomerAlgorithm: void 0, SSECustomerKeyMD5: void 0, SSEKMSKeyId: void 0, ServerSideEncryption: void 0 }, void 0 !== e.headers["x-amz-server-side-encryption-customer-key-md5"] && (n.SSECustomerKeyMD5 = e.headers["x-amz-server-side-encryption-customer-key-md5"]), void 0 !== e.headers["x-amz-server-side-encryption"] && (n.ServerSideEncryption = e.headers["x-amz-server-side-encryption"]), void 0 !== e.headers["x-amz-server-side-encryption-aws-kms-key-id"] && (n.SSEKMSKeyId = e.headers["x-amz-server-side-encryption-aws-kms-key-id"]), void 0 !== e.headers["x-amz-server-side-encryption-customer-algorithm"] && (n.SSECustomerAlgorithm = e.headers["x-amz-server-side-encryption-customer-algorithm"]), void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), void 0 !== e.headers.etag && (n.ETag = e.headers.etag), [4, yi(e.body, t)]);
                case 1: return r.sent(), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY), ka = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "CompleteMultipartUploadCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: k.filterSensitiveLog, outputFilterSensitiveLog: C.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f, p, h; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l({ "Content-Type": "application/xml" }, Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), r = "/{Bucket}/{Key+}", void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    if (r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    return r = r.replace("{Bucket}", (0, Xr.jc)(i)), o = l({}, void 0 !== e.UploadId && { uploadId: e.UploadId }), void 0 !== e.MultipartUpload && (s = function (e, t) { var n = new ei("CompletedMultipartUpload"); return void 0 !== e.Parts && vi(e.Parts, t).map((function (e) { e = e.withName("Part"), n.addChildNode(e); })), n; }(e.MultipartUpload, t), a = '<?xml version="1.0" encoding="UTF-8"?>', s.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/"), a += s.toString()), [4, t.endpoint()];
                case 1: return u = d.sent(), c = u.hostname, f = u.protocol, p = void 0 === f ? "https" : f, h = u.port, [2, new Zr.aW({ protocol: p, hostname: c, port: h, method: "POST", headers: n, path: r, query: o, body: a })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r; return d(this, (function (i) { switch (i.label) {
                case 0: return 200 !== e.statusCode && e.statusCode >= 300 ? [2, ii(e, t)] : (n = { $metadata: mi(e), Bucket: void 0, ETag: void 0, Expiration: void 0, Key: void 0, Location: void 0, RequestCharged: void 0, SSEKMSKeyId: void 0, ServerSideEncryption: void 0, VersionId: void 0 }, void 0 !== e.headers["x-amz-expiration"] && (n.Expiration = e.headers["x-amz-expiration"]), void 0 !== e.headers["x-amz-server-side-encryption"] && (n.ServerSideEncryption = e.headers["x-amz-server-side-encryption"]), void 0 !== e.headers["x-amz-server-side-encryption-aws-kms-key-id"] && (n.SSEKMSKeyId = e.headers["x-amz-server-side-encryption-aws-kms-key-id"]), void 0 !== e.headers["x-amz-version-id"] && (n.VersionId = e.headers["x-amz-version-id"]), void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), [4, bi(e.body, t)]);
                case 1: return void 0 !== (r = i.sent()).Bucket && (n.Bucket = r.Bucket), void 0 !== r.ETag && (n.ETag = r.ETag), void 0 !== r.Key && (n.Key = r.Key), void 0 !== r.Location && (n.Location = r.Location), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY), Na = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "AbortMultipartUploadCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: v.filterSensitiveLog, outputFilterSensitiveLog: h.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l({ "Content-Type": "" }, Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), r = "/{Bucket}/{Key+}", void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    if (r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    return r = r.replace("{Bucket}", (0, Xr.jc)(i)), o = l({ "x-id": "AbortMultipartUpload" }, void 0 !== e.UploadId && { uploadId: e.UploadId }), [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, u = a.protocol, c = void 0 === u ? "https" : u, f = a.port, [2, new Zr.aW({ protocol: c, hostname: s, port: f, method: "DELETE", headers: n, path: r, query: o, body: void 0 })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n; return d(this, (function (r) { switch (r.label) {
                case 0: return 204 !== e.statusCode && e.statusCode >= 300 ? [2, ri(e, t)] : (n = { $metadata: mi(e), RequestCharged: void 0 }, void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), [4, yi(e.body, t)]);
                case 1: return r.sent(), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY), Pa = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return c(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, Di.p2)(t, this.serialize, this.deserialize)), this.middlewareStack.use(ji(t)); var r = e.concat(this.middlewareStack), i = t.logger, o = "S3Client", a = "ListPartsCommand", s = { logger: i, clientName: o, commandName: a, inputFilterSensitiveLog: Jn.filterSensitiveLog, outputFilterSensitiveLog: Wn.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: a }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), s); }, t.prototype.serialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, f; return d(this, (function (d) { switch (d.label) {
                case 0:
                    if (n = l(l({ "Content-Type": "" }, Si(e.RequestPayer) && { "x-amz-request-payer": e.RequestPayer }), Si(e.ExpectedBucketOwner) && { "x-amz-expected-bucket-owner": e.ExpectedBucketOwner }), r = "/{Bucket}/{Key+}", void 0 === e.Bucket)
                        throw new Error("No value provided for input HTTP label: Bucket.");
                    if ((i = e.Bucket).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Bucket.");
                    if (r = r.replace("{Bucket}", (0, Xr.jc)(i)), void 0 === e.Key)
                        throw new Error("No value provided for input HTTP label: Key.");
                    if ((i = e.Key).length <= 0)
                        throw new Error("Empty value provided for input HTTP label: Key.");
                    return r = r.replace("{Key+}", i.split("/").map((function (e) { return (0, Xr.jc)(e); })).join("/")), o = l(l(l({ "x-id": "ListParts" }, void 0 !== e.UploadId && { uploadId: e.UploadId }), void 0 !== e.MaxParts && { "max-parts": e.MaxParts.toString() }), void 0 !== e.PartNumberMarker && { "part-number-marker": e.PartNumberMarker.toString() }), [4, t.endpoint()];
                case 1: return a = d.sent(), s = a.hostname, u = a.protocol, c = void 0 === u ? "https" : u, f = a.port, [2, new Zr.aW({ protocol: c, hostname: s, port: f, method: "GET", headers: n, path: r, query: o, body: void 0 })];
            } })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return f(void 0, void 0, void 0, (function () { var n, r; return d(this, (function (i) { switch (i.label) {
                case 0: return 200 !== e.statusCode && e.statusCode >= 300 ? [2, ci(e, t)] : (n = { $metadata: mi(e), AbortDate: void 0, AbortRuleId: void 0, Bucket: void 0, Initiator: void 0, IsTruncated: void 0, Key: void 0, MaxParts: void 0, NextPartNumberMarker: void 0, Owner: void 0, PartNumberMarker: void 0, Parts: void 0, RequestCharged: void 0, StorageClass: void 0, UploadId: void 0 }, void 0 !== e.headers["x-amz-abort-rule-id"] && (n.AbortRuleId = e.headers["x-amz-abort-rule-id"]), void 0 !== e.headers["x-amz-request-charged"] && (n.RequestCharged = e.headers["x-amz-request-charged"]), void 0 !== e.headers["x-amz-abort-date"] && (n.AbortDate = new Date(e.headers["x-amz-abort-date"])), [4, bi(e.body, t)]);
                case 1: return void 0 !== (r = i.sent()).Bucket && (n.Bucket = r.Bucket), void 0 !== r.Initiator && (n.Initiator = function (e, t) { var n = { ID: void 0, DisplayName: void 0 }; return void 0 !== e.ID && (n.ID = e.ID), void 0 !== e.DisplayName && (n.DisplayName = e.DisplayName), n; }(r.Initiator)), void 0 !== r.IsTruncated && (n.IsTruncated = "true" == r.IsTruncated), void 0 !== r.Key && (n.Key = r.Key), void 0 !== r.MaxParts && (n.MaxParts = parseInt(r.MaxParts)), void 0 !== r.NextPartNumberMarker && (n.NextPartNumberMarker = parseInt(r.NextPartNumberMarker)), void 0 !== r.Owner && (n.Owner = gi(r.Owner, t)), void 0 !== r.PartNumberMarker && (n.PartNumberMarker = parseInt(r.PartNumberMarker)), "" === r.Part && (n.Parts = []), void 0 !== r.Part && (n.Parts = function (e, t) { return (e || []).map((function (e) { return function (e, t) { var n = { Size: void 0, LastModified: void 0, PartNumber: void 0, ETag: void 0 }; return void 0 !== e.Size && (n.Size = parseInt(e.Size)), void 0 !== e.LastModified && (n.LastModified = new Date(e.LastModified)), void 0 !== e.PartNumber && (n.PartNumber = parseInt(e.PartNumber)), void 0 !== e.ETag && (n.ETag = e.ETag), n; }(e); })); }((0, Xr.L)(r.Part))), void 0 !== r.StorageClass && (n.StorageClass = r.StorageClass), void 0 !== r.UploadId && (n.UploadId = r.UploadId), [2, Promise.resolve(n)];
            } })); })); }(e, t); }, t; }(Xr.mY), Ma = n(7187), Ta = n(1085), za = n(8575), Aa = function (e) { var t, n = (0, za.Qc)(e), r = n.hostname, i = void 0 === r ? "localhost" : r, o = n.pathname, a = void 0 === o ? "/" : o, s = n.port, u = n.protocol, c = void 0 === u ? "https:" : u, l = n.search; return l && (t = (0, Ta.d)(l)), { hostname: i, port: s ? parseInt(s) : void 0, protocol: c, path: a, query: t }; }, _a = function () { return (_a = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, Ua = function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
                u(r.next(e));
            }
            catch (e) {
                o(e);
            } } function s(e) { try {
                u(r.throw(e));
            }
            catch (e) {
                o(e);
            } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } u((r = r.apply(e, t || [])).next()); })); }, Ka = function (e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (n)
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
                    o = t.call(e, a);
                }
                catch (e) {
                    o = [6, e], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & o[0])
                throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } }, Oa = new r.k("AWSS3ProviderManagedUpload"), Ia = function () { function e(e, t, n) { this.minPartSize = 5242880, this.queueSize = 4, this.body = null, this.params = null, this.opts = null, this.multiPartMap = [], this.cancel = !1, this.bytesUploaded = 0, this.totalBytesToUpload = 0, this.emitter = null, this.params = e, this.opts = t, this.emitter = n; } return e.prototype.upload = function () { return Ua(this, void 0, void 0, (function () { var e, t, n, r, i, o; return Ka(this, (function (a) { switch (a.label) {
                case 0: return e = this, [4, this.validateAndSanitizeBody(this.params.Body)];
                case 1: return e.body = a.sent(), this.totalBytesToUpload = this.byteLength(this.body), this.totalBytesToUpload <= this.minPartSize ? (this.params.Body = this.body, t = new Ca(this.params), [4, this._createNewS3Client(this.opts, this.emitter)]) : [3, 3];
                case 2: return [2, a.sent().send(t)];
                case 3: return [4, this.createMultiPartUpload()];
                case 4: n = a.sent(), r = Math.ceil(this.totalBytesToUpload / this.minPartSize), i = 0, a.label = 5;
                case 5: return i < r ? [4, this.checkIfUploadCancelled(n)] : [3, 10];
                case 6: return a.sent(), o = this.createParts(i), [4, this.uploadParts(n, o)];
                case 7: return a.sent(), [4, this.checkIfUploadCancelled(n)];
                case 8: a.sent(), a.label = 9;
                case 9: return i += this.queueSize, [3, 5];
                case 10: return [4, this.finishMultiPartUpload(n)];
                case 11: return [2, a.sent()];
            } })); })); }, e.prototype.createParts = function (e) { for (var t = [], n = e, r = e * this.minPartSize; r < this.totalBytesToUpload && t.length < this.queueSize;) {
                var i = Math.min(r + this.minPartSize, this.totalBytesToUpload);
                t.push({ bodyPart: this.body.slice(r, i), partNumber: ++n, emitter: new Ma.EventEmitter, _lastUploadedBytes: 0 }), r += this.minPartSize;
            } return t; }, e.prototype.createMultiPartUpload = function () { return Ua(this, void 0, void 0, (function () { var e, t; return Ka(this, (function (n) { switch (n.label) {
                case 0: return e = new xa(this.params), [4, this._createNewS3Client(this.opts)];
                case 1: return [4, n.sent().send(e)];
                case 2: return t = n.sent(), Oa.debug(t.UploadId), [2, t.UploadId];
            } })); })); }, e.prototype.uploadParts = function (e, t) { return Ua(this, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, l, f, d, p, h; return Ka(this, (function (v) { switch (v.label) {
                case 0: n = [], v.label = 1;
                case 1: v.trys.push([1, 6, 7, 8]), r = function (e) { var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0; if (n)
                    return n.call(e); if (e && "number" == typeof e.length)
                    return { next: function () { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined."); }(t), i = r.next(), v.label = 2;
                case 2: return i.done ? [3, 5] : (o = i.value, this.setupEventListener(o), a = { PartNumber: o.partNumber, Body: o.bodyPart, UploadId: e, Key: this.params.Key, Bucket: this.params.Bucket }, s = new La(a), [4, this._createNewS3Client(this.opts, o.emitter)]);
                case 3: u = v.sent(), n.push(u.send(s)), v.label = 4;
                case 4: return i = r.next(), [3, 2];
                case 5: return [3, 8];
                case 6: return c = v.sent(), p = { error: c }, [3, 8];
                case 7:
                    try {
                        i && !i.done && (h = r.return) && h.call(r);
                    }
                    finally {
                        if (p)
                            throw p.error;
                    }
                    return [7];
                case 8: return v.trys.push([8, 10, , 11]), [4, Promise.all(n)];
                case 9:
                    for (l = v.sent(), f = 0; f < l.length; f++)
                        this.multiPartMap.push({ PartNumber: t[f].partNumber, ETag: l[f].ETag });
                    return [3, 11];
                case 10: return d = v.sent(), Oa.error("error happened while uploading a part. Cancelling the multipart upload", d), this.cancelUpload(), [2];
                case 11: return [2];
            } })); })); }, e.prototype.finishMultiPartUpload = function (e) { return Ua(this, void 0, void 0, (function () { var t, n, r, i; return Ka(this, (function (o) { switch (o.label) {
                case 0: return t = { Bucket: this.params.Bucket, Key: this.params.Key, UploadId: e, MultipartUpload: { Parts: this.multiPartMap } }, n = new ka(t), [4, this._createNewS3Client(this.opts)];
                case 1: r = o.sent(), o.label = 2;
                case 2: return o.trys.push([2, 4, , 5]), [4, r.send(n)];
                case 3: return [2, o.sent().Key];
                case 4: return i = o.sent(), Oa.error("error happened while finishing the upload. Cancelling the multipart upload", i), this.cancelUpload(), [2];
                case 5: return [2];
            } })); })); }, e.prototype.checkIfUploadCancelled = function (e) { return Ua(this, void 0, void 0, (function () { var t, n; return Ka(this, (function (r) { switch (r.label) {
                case 0:
                    if (!this.cancel)
                        return [3, 5];
                    t = "Upload was cancelled.", r.label = 1;
                case 1: return r.trys.push([1, 3, , 4]), [4, this.cleanup(e)];
                case 2: return r.sent(), [3, 4];
                case 3: return n = r.sent(), t += n.errorMessage, [3, 4];
                case 4: throw new Error(t);
                case 5: return [2];
            } })); })); }, e.prototype.cancelUpload = function () { this.cancel = !0; }, e.prototype.cleanup = function (e) { return Ua(this, void 0, void 0, (function () { var t, n, r; return Ka(this, (function (i) { switch (i.label) {
                case 0: return this.body = null, this.multiPartMap = [], this.bytesUploaded = 0, this.totalBytesToUpload = 0, t = { Bucket: this.params.Bucket, Key: this.params.Key, UploadId: e }, [4, this._createNewS3Client(this.opts)];
                case 1: return [4, (n = i.sent()).send(new Na(t))];
                case 2: return i.sent(), [4, n.send(new Pa(t))];
                case 3:
                    if ((r = i.sent()) && r.Parts && r.Parts.length > 0)
                        throw new Error("Multi Part upload clean up failed");
                    return [2];
            } })); })); }, e.prototype.setupEventListener = function (e) { var t = this; e.emitter.on(ta, (function (n) { t.progressChanged(e.partNumber, n.loaded - e._lastUploadedBytes), e._lastUploadedBytes = n.loaded; })); }, e.prototype.progressChanged = function (e, t) { this.bytesUploaded += t, this.emitter.emit(ta, { loaded: this.bytesUploaded, total: this.totalBytesToUpload, part: e, key: this.params.Key }); }, e.prototype.byteLength = function (e) { if (null == e)
                return 0; if ("number" == typeof e.byteLength)
                return e.byteLength; if ("number" == typeof e.length)
                return e.length; if ("number" == typeof e.size)
                return e.size; if ("string" != typeof e.path)
                throw new Error("Cannot determine length of " + e); }, e.prototype.validateAndSanitizeBody = function (e) { return Ua(this, void 0, void 0, (function () { return Ka(this, (function (t) { switch (t.label) {
                case 0: return this.isGenericObject(e) ? [2, JSON.stringify(e)] : [3, 1];
                case 1: return this.isBlob(e) ? s.t4.isReactNative ? [4, (0, vo.C)(e)] : [3, 3] : [3, 4];
                case 2: return [2, t.sent()];
                case 3:
                case 4: return [2, e];
            } })); })); }, e.prototype.isBlob = function (e) { return "undefined" != typeof Blob && e instanceof Blob; }, e.prototype.isGenericObject = function (e) { if (null !== e && "object" == typeof e)
                try {
                    return !(this.byteLength(e) >= 0);
                }
                catch (e) {
                    return !0;
                } return !1; }, e.prototype._createNewS3Client = function (e, t) { return Ua(this, void 0, void 0, (function () { var n, r, i, o, a; return Ka(this, (function (u) { switch (u.label) {
                case 0: return [4, this._getCredentials()];
                case 1: return n = u.sent(), r = e.region, i = e.dangerouslyConnectToHttpEndpointForTesting, o = {}, i && (o = { endpoint: "http://localhost:20005", tls: !1, bucketEndpoint: !1, forcePathStyle: !0 }), (a = new $o(_a(_a({ region: r, credentials: n }, o), { requestHandler: new na({}, t), customUserAgent: (0, s.Zm)(), urlParser: Aa }))).middlewareStack.remove("contentLengthMiddleware"), [2, a];
            } })); })); }, e.prototype._getCredentials = function () { return a.cN.get().then((function (e) { if (!e)
                return !1; var t = a.cN.shear(e); return Oa.debug("set credentials for storage", t), t; })).catch((function (e) { return Oa.warn("ensure credentials error", e), !1; })); }, e; }(), Ra = function () { return (Ra = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, ja = function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
                u(r.next(e));
            }
            catch (e) {
                o(e);
            } } function s(e) { try {
                u(r.throw(e));
            }
            catch (e) {
                o(e);
            } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } u((r = r.apply(e, t || [])).next()); })); }, Da = function (e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (n)
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
                    o = t.call(e, a);
                }
                catch (e) {
                    o = [6, e], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & o[0])
                throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } }, Ba = new r.k("AWSS3Provider"), qa = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default", Fa = function (e, t, n, r, i) { if (e) {
                var a = { attrs: n };
                r && (a.metrics = r), o.Xb.dispatch("storage", { event: t, data: a, message: i }, "Storage", qa);
            } }, Ha = function () { function e(e) { this._config = e || {}, Ba.debug("Storage Options", this._config); } return e.prototype.getCategory = function () { return e.CATEGORY; }, e.prototype.getProviderName = function () { return e.PROVIDER_NAME; }, e.prototype.configure = function (e) { if (Ba.debug("configure Storage", e), !e)
                return this._config; var t = i._b.parseMobilehubConfig(e); return this._config = Object.assign({}, this._config, t.Storage), this._config.bucket || Ba.debug("Do not have bucket yet"), this._config; }, e.prototype.get = function (e, t) { return ja(this, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, l, f, d, p, h, v, g, m, y, S, b, w, E, C; return Da(this, (function (x) { switch (x.label) {
                case 0: return [4, this._ensureCredentials()];
                case 1:
                    if (!x.sent())
                        return [2, Promise.reject("No credentials")];
                    if (n = Object.assign({}, this._config, t), r = n.bucket, i = n.download, o = n.cacheControl, a = n.contentDisposition, s = n.contentEncoding, u = n.contentLanguage, c = n.contentType, l = n.expires, f = n.track, d = this._prefix(n), p = d + e, h = this._createNewS3Client(n), Ba.debug("get " + e + " from " + p), v = { Bucket: r, Key: p }, o && (v.ResponseCacheControl = o), a && (v.ResponseContentDisposition = a), s && (v.ResponseContentEncoding = s), u && (v.ResponseContentLanguage = u), c && (v.ResponseContentType = c), !0 !== i)
                        return [3, 5];
                    g = new Fi(v), x.label = 2;
                case 2: return x.trys.push([2, 4, , 5]), [4, h.send(g)];
                case 3: return m = x.sent(), Fa(f, "download", { method: "get", result: "success" }, { fileSize: Number(m.Body.size || m.Body.length) }, "Download success for " + e), [2, m];
                case 4: throw y = x.sent(), Fa(f, "download", { method: "get", result: "failed" }, null, "Download failed with " + y.message), y;
                case 5: v.Expires = l || 900, x.label = 6;
                case 6: return x.trys.push([6, 9, , 10]), S = new Xo(Ra({}, h.config)), [4, Jo(h, new Fi(v))];
                case 7: return b = x.sent(), E = Wo, [4, S.presign(b, { expiresIn: v.Expires })];
                case 8: return w = E.apply(void 0, [x.sent()]), Fa(f, "getSignedUrl", { method: "get", result: "success" }, null, "Signed URL: " + w), [2, w];
                case 9: throw C = x.sent(), Ba.warn("get signed url error", C), Fa(f, "getSignedUrl", { method: "get", result: "failed" }, null, "Could not get a signed URL for " + e), C;
                case 10: return [2];
            } })); })); }, e.prototype.put = function (e, t, n) { return ja(this, void 0, void 0, (function () { var r, i, o, a, s, u, c, l, f, d, p, h, v, g, m, y, S, b, w, E, C, x, L, k; return Da(this, (function (N) { switch (N.label) {
                case 0: return [4, this._ensureCredentials()];
                case 1:
                    if (!N.sent())
                        return [2, Promise.reject("No credentials")];
                    r = Object.assign({}, this._config, n), i = r.bucket, o = r.track, a = r.progressCallback, s = r.contentType, u = r.contentDisposition, c = r.cacheControl, l = r.expires, f = r.metadata, d = r.tagging, p = r.acl, h = r.serverSideEncryption, v = r.SSECustomerAlgorithm, g = r.SSECustomerKey, m = r.SSECustomerKeyMD5, y = r.SSEKMSKeyId, S = s || "binary/octet-stream", b = this._prefix(r), w = b + e, Ba.debug("put " + e + " to " + w), E = { Bucket: i, Key: w, Body: t, ContentType: S }, c && (E.CacheControl = c), u && (E.ContentDisposition = u), l && (E.Expires = l), f && (E.Metadata = f), d && (E.Tagging = d), h && (E.ServerSideEncryption = h, v && (E.SSECustomerAlgorithm = v), g && (E.SSECustomerKey = g), m && (E.SSECustomerKeyMD5 = m), y && (E.SSEKMSKeyId = y)), C = new Ma.EventEmitter, x = new Ia(E, r, C), p && (E.ACL = p), N.label = 2;
                case 2: return N.trys.push([2, 4, , 5]), C.on("sendProgress", (function (e) { a && ("function" == typeof a ? a(e) : Ba.warn("progressCallback should be a function, not a " + typeof a)); })), [4, x.upload()];
                case 3: return L = N.sent(), Ba.debug("upload result", L), Fa(o, "upload", { method: "put", result: "success" }, null, "Upload success for " + e), [2, { key: e }];
                case 4: throw k = N.sent(), Ba.warn("error uploading", k), Fa(o, "upload", { method: "put", result: "failed" }, null, "Error uploading " + e), k;
                case 5: return [2];
            } })); })); }, e.prototype.remove = function (e, t) { return ja(this, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, l; return Da(this, (function (f) { switch (f.label) {
                case 0: return [4, this._ensureCredentials()];
                case 1:
                    if (!f.sent())
                        return [2, Promise.reject("No credentials")];
                    n = Object.assign({}, this._config, t), r = n.bucket, i = n.track, o = this._prefix(n), a = o + e, s = this._createNewS3Client(n), Ba.debug("remove " + e + " from " + a), u = new Hi({ Bucket: r, Key: a }), f.label = 2;
                case 2: return f.trys.push([2, 4, , 5]), [4, s.send(u)];
                case 3: return c = f.sent(), Fa(i, "delete", { method: "remove", result: "success" }, null, "Deleted " + e + " successfully"), [2, c];
                case 4: throw l = f.sent(), Fa(i, "delete", { method: "remove", result: "failed" }, null, "Deletion of " + e + " failed with " + l), l;
                case 5: return [2];
            } })); })); }, e.prototype.list = function (e, t) { return ja(this, void 0, void 0, (function () { var n, r, i, o, a, s, u, c, l, f, d; return Da(this, (function (p) { switch (p.label) {
                case 0: return [4, this._ensureCredentials()];
                case 1:
                    if (!p.sent())
                        return [2, Promise.reject("No credentials")];
                    n = Object.assign({}, this._config, t), r = n.bucket, i = n.track, o = n.maxKeys, a = this._prefix(n), s = a + e, u = this._createNewS3Client(n), Ba.debug("list " + e + " from " + s), c = new Vi({ Bucket: r, Prefix: s, MaxKeys: o }), p.label = 2;
                case 2: return p.trys.push([2, 4, , 5]), [4, u.send(c)];
                case 3: return l = p.sent(), f = [], l && l.Contents && (f = l.Contents.map((function (e) { return { key: e.Key.substr(a.length), eTag: e.ETag, lastModified: e.LastModified, size: e.Size }; }))), Fa(i, "list", { method: "list", result: "success" }, null, f.length + " items returned from list operation"), Ba.debug("list", f), [2, f];
                case 4: throw d = p.sent(), Ba.warn("list error", d), Fa(i, "list", { method: "list", result: "failed" }, null, "Listing items failed: " + d.message), d;
                case 5: return [2];
            } })); })); }, e.prototype._ensureCredentials = function () { var e = this; return a.cN.get().then((function (t) { if (!t)
                return !1; var n = a.cN.shear(t); return Ba.debug("set credentials for storage", n), e._config.credentials = n, !0; })).catch((function (e) { return Ba.warn("ensure credentials error", e), !1; })); }, e.prototype._prefix = function (e) { var t = e.credentials, n = e.level, r = e.customPrefix || {}, i = e.identityId || t.identityId, o = (void 0 !== r.private ? r.private : "private/") + i + "/", a = (void 0 !== r.protected ? r.protected : "protected/") + i + "/", s = void 0 !== r.public ? r.public : "public/"; switch (n) {
                case "private": return o;
                case "protected": return a;
                default: return s;
            } }, e.prototype._createNewS3Client = function (e, t) { var n = e.region, r = e.credentials, i = {}; return e.dangerouslyConnectToHttpEndpointForTesting && (i = { endpoint: "http://localhost:20005", tls: !1, bucketEndpoint: !1, forcePathStyle: !0 }), new $o(Ra(Ra({ region: n, credentials: r, customUserAgent: (0, s.Zm)() }, i), { requestHandler: new na({}, t) })); }, e.CATEGORY = "Storage", e.PROVIDER_NAME = "AWSS3", e; }(), Va = function () { return (Va = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, $a = function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
                u(r.next(e));
            }
            catch (e) {
                o(e);
            } } function s(e) { try {
                u(r.throw(e));
            }
            catch (e) {
                o(e);
            } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } u((r = r.apply(e, t || [])).next()); })); }, Ga = function (e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (n)
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
                    o = t.call(e, a);
                }
                catch (e) {
                    o = [6, e], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & o[0])
                throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } }, Wa = new r.k("StorageClass"), Ja = "AWSS3", Ya = function () { function e() { this._config = {}, this._pluggables = [], Wa.debug("Storage Options", this._config), this.get = this.get.bind(this), this.put = this.put.bind(this), this.remove = this.remove.bind(this), this.list = this.list.bind(this); } return e.prototype.getModuleName = function () { return "Storage"; }, e.prototype.addPluggable = function (e) { if (e && "Storage" === e.getCategory())
                return this._pluggables.push(e), e.configure(this._config[e.getProviderName()]); }, e.prototype.getPluggable = function (e) { var t = this._pluggables.find((function (t) { return t.getProviderName() === e; })); return void 0 === t ? (Wa.debug("No plugin found with providerName", e), null) : t; }, e.prototype.removePluggable = function (e) { this._pluggables = this._pluggables.filter((function (t) { return t.getProviderName() !== e; })); }, e.prototype.configure = function (e) { var t = this; if (Wa.debug("configure Storage"), !e)
                return this._config; var n = i._b.parseMobilehubConfig(e), r = Object.keys(n.Storage), o = ["bucket", "region", "level", "track", "customPrefix", "serverSideEncryption", "SSECustomerAlgorithm", "SSECustomerKey", "SSECustomerKeyMD5", "SSEKMSKeyId"], a = function (e) { return o.some((function (t) { return t === e; })); }; return r && r.find((function (e) { return a(e); })) && !n.Storage.AWSS3 && (n.Storage.AWSS3 = {}), Object.entries(n.Storage).map((function (e) { var t = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
                return e; var r, i, o = n.call(e), a = []; try {
                for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                    a.push(r.value);
            }
            catch (e) {
                i = { error: e };
            }
            finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            } return a; }(e, 2), r = t[0], i = t[1]; r && a(r) && void 0 !== i && (n.Storage.AWSS3[r] = i, delete n.Storage[r]); })), Object.keys(n.Storage).forEach((function (e) { "string" != typeof n.Storage[e] && (t._config[e] = Va(Va({}, t._config[e]), n.Storage[e])); })), this._pluggables.forEach((function (e) { e.configure(t._config[e.getProviderName()]); })), 0 === this._pluggables.length && this.addPluggable(new Ha), this._config; }, e.prototype.get = function (e, t) { return $a(this, void 0, void 0, (function () { var n, r, i; return Ga(this, (function (o) { return n = (t || {}).provider, r = void 0 === n ? Ja : n, void 0 === (i = this._pluggables.find((function (e) { return e.getProviderName() === r; }))) && (Wa.debug("No plugin found with providerName", r), Promise.reject("No plugin found in Storage for the provider")), [2, i.get(e, t)]; })); })); }, e.prototype.put = function (e, t, n) { return $a(this, void 0, void 0, (function () { var r, i, o; return Ga(this, (function (a) { return r = (n || {}).provider, i = void 0 === r ? Ja : r, void 0 === (o = this._pluggables.find((function (e) { return e.getProviderName() === i; }))) && (Wa.debug("No plugin found with providerName", i), Promise.reject("No plugin found in Storage for the provider")), [2, o.put(e, t, n)]; })); })); }, e.prototype.remove = function (e, t) { return $a(this, void 0, void 0, (function () { var n, r, i; return Ga(this, (function (o) { return n = (t || {}).provider, r = void 0 === n ? Ja : n, void 0 === (i = this._pluggables.find((function (e) { return e.getProviderName() === r; }))) && (Wa.debug("No plugin found with providerName", r), Promise.reject("No plugin found in Storage for the provider")), [2, i.remove(e, t)]; })); })); }, e.prototype.list = function (e, t) { return $a(this, void 0, void 0, (function () { var n, r, i; return Ga(this, (function (o) { return n = (t || {}).provider, r = void 0 === n ? Ja : n, void 0 === (i = this._pluggables.find((function (e) { return e.getProviderName() === r; }))) && (Wa.debug("No plugin found with providerName", r), Promise.reject("No plugin found in Storage for the provider")), [2, i.list(e, t)]; })); })); }, e; }(), Xa = n(5387), Za = function () { return (Za = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, Qa = new r.k("Storage"), es = null, ts = function () { if (es)
                return es; Qa.debug("Create Storage Instance, debug"), (es = new Ya).vault = new Ya; var e = es.configure; return es.configure = function (t) { Qa.debug("storage configure called"); var n = Za({}, e.call(es, t)); Object.keys(n).forEach((function (e) { "string" != typeof n[e] && (n[e] = Za(Za({}, n[e]), { level: "private" })); })), Qa.debug("storage vault configure called"), es.vault.configure(n); }, es; }();
            Xa.dQ.register(ts);
        }, 4614: function (e, t, n) {
            "use strict";
            n.d(t, { a: function () { return l; }, c: function () { return u; }, g: function () { return c; }, i: function () { return s; }, p: function () { return f; } });
            var r = n(7029), i = n(7403), o = function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
                u(r.next(e));
            }
            catch (e) {
                o(e);
            } } function s(e) { try {
                u(r.throw(e));
            }
            catch (e) {
                o(e);
            } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } u((r = r.apply(e, t || [])).next()); })); }, a = function (e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (n)
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
                    o = t.call(e, a);
                }
                catch (e) {
                    o = [6, e], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & o[0])
                throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } }, s = new Set(["apng", "bmp", "gif", "ico", "cur", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "svg", "tif", "tiff", "webp"]), u = function (e, t) { var n = e.name, r = e.size, i = e.type, o = encodeURI(n); return t && ((o = "string" == typeof t ? t : "function" == typeof t ? t({ name: n, size: r, type: i }) : encodeURI(JSON.stringify(t))) || (o = "empty_key")), o.replace(/\s/g, "_"); }, c = function (e, t, n, s, u) { return o(void 0, void 0, void 0, (function () { var o, c; return a(this, (function (a) { switch (a.label) {
                case 0:
                    if (!i.Ke || "function" != typeof i.Ke.get)
                        throw new Error(r.e);
                    a.label = 1;
                case 1: return a.trys.push([1, 3, , 4]), [4, i.Ke.get(e, { level: t, track: n, identityId: s })];
                case 2: return o = a.sent(), u.debug("Storage image get", o), [2, o];
                case 3: throw c = a.sent(), new Error(c);
                case 4: return [2];
            } })); })); }, l = function (e, t, n, s, u) { return o(void 0, void 0, void 0, (function () { var o, c; return a(this, (function (a) { switch (a.label) {
                case 0:
                    if (!i.Ke || "function" != typeof i.Ke.get)
                        throw new Error(r.e);
                    a.label = 1;
                case 1: return a.trys.push([1, 4, , 5]), [4, i.Ke.get(e, { download: !0, level: t, track: n, identityId: s })];
                case 2: return o = a.sent(), u.debug(o), [4, (l = o.Body, new Promise((function (e, t) { var n = new FileReader; n.onload = function () { e(n.result); }, n.onerror = function () { t("Failed to read file!"), n.abort(); }, n.readAsText(l); })))];
                case 3: return [2, a.sent()];
                case 4: throw c = a.sent(), new Error(c);
                case 5: return [2];
            } var l; })); })); }, f = function (e, t, n, s, u, c) { return o(void 0, void 0, void 0, (function () { var o, l; return a(this, (function (a) { switch (a.label) {
                case 0:
                    if (!i.Ke || "function" != typeof i.Ke.put)
                        throw new Error(r.e);
                    a.label = 1;
                case 1: return a.trys.push([1, 3, , 4]), [4, i.Ke.put(e, t, { contentType: u, level: n, track: s })];
                case 2: return o = a.sent(), c.debug("Upload data", o), [3, 4];
                case 3: throw l = a.sent(), new Error(l);
                case 4: return [2];
            } })); })); };
        }, 4079: function (e, t, n) {
            "use strict";
            t.Bi = void 0;
            var r = n(655), i = function () { function e() { this.checksum = 4294967295; } return e.prototype.update = function (e) { var t, n; try {
                for (var i = r.__values(e), a = i.next(); !a.done; a = i.next()) {
                    var s = a.value;
                    this.checksum = this.checksum >>> 8 ^ o[255 & (this.checksum ^ s)];
                }
            }
            catch (e) {
                t = { error: e };
            }
            finally {
                try {
                    a && !a.done && (n = i.return) && n.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } return this; }, e.prototype.digest = function () { return (4294967295 ^ this.checksum) >>> 0; }, e; }();
            t.Bi = i;
            var o = Uint32Array.from([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
        }, 9669: function (e, t, n) { e.exports = n(1609); }, 5448: function (e, t, n) {
            "use strict";
            var r = n(4867), i = n(6026), o = n(5327), a = n(4109), s = n(7985), u = n(5061);
            e.exports = function (e) { return new Promise((function (t, c) { var l = e.data, f = e.headers; r.isFormData(l) && delete f["Content-Type"]; var d = new XMLHttpRequest; if (e.auth) {
                var p = e.auth.username || "", h = e.auth.password || "";
                f.Authorization = "Basic " + btoa(p + ":" + h);
            } if (d.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function () { if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null, r = { data: e.responseType && "text" !== e.responseType ? d.response : d.responseText, status: d.status, statusText: d.statusText, headers: n, config: e, request: d };
                i(t, c, r), d = null;
            } }, d.onabort = function () { d && (c(u("Request aborted", e, "ECONNABORTED", d)), d = null); }, d.onerror = function () { c(u("Network Error", e, null, d)), d = null; }, d.ontimeout = function () { c(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null; }, r.isStandardBrowserEnv()) {
                var v = n(4372), g = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                g && (f[e.xsrfHeaderName] = g);
            } if ("setRequestHeader" in d && r.forEach(f, (function (e, t) { void 0 === l && "content-type" === t.toLowerCase() ? delete f[t] : d.setRequestHeader(t, e); })), e.withCredentials && (d.withCredentials = !0), e.responseType)
                try {
                    d.responseType = e.responseType;
                }
                catch (t) {
                    if ("json" !== e.responseType)
                        throw t;
                } "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function (e) { d && (d.abort(), c(e), d = null); })), void 0 === l && (l = null), d.send(l); })); };
        }, 1609: function (e, t, n) {
            "use strict";
            var r = n(4867), i = n(1849), o = n(321), a = n(7185);
            function s(e) { var t = new o(e), n = i(o.prototype.request, t); return r.extend(n, o.prototype, t), r.extend(n, t), n; }
            var u = s(n(5655));
            u.Axios = o, u.create = function (e) { return s(a(u.defaults, e)); }, u.Cancel = n(5263), u.CancelToken = n(4972), u.isCancel = n(6502), u.all = function (e) { return Promise.all(e); }, u.spread = n(8713), e.exports = u, e.exports.default = u;
        }, 5263: function (e) {
            "use strict";
            function t(e) { this.message = e; }
            t.prototype.toString = function () { return "Cancel" + (this.message ? ": " + this.message : ""); }, t.prototype.__CANCEL__ = !0, e.exports = t;
        }, 4972: function (e, t, n) {
            "use strict";
            var r = n(5263);
            function i(e) { if ("function" != typeof e)
                throw new TypeError("executor must be a function."); var t; this.promise = new Promise((function (e) { t = e; })); var n = this; e((function (e) { n.reason || (n.reason = new r(e), t(n.reason)); })); }
            i.prototype.throwIfRequested = function () { if (this.reason)
                throw this.reason; }, i.source = function () { var e; return { token: new i((function (t) { e = t; })), cancel: e }; }, e.exports = i;
        }, 6502: function (e) {
            "use strict";
            e.exports = function (e) { return !(!e || !e.__CANCEL__); };
        }, 321: function (e, t, n) {
            "use strict";
            var r = n(4867), i = n(5327), o = n(782), a = n(3572), s = n(7185);
            function u(e) { this.defaults = e, this.interceptors = { request: new o, response: new o }; }
            u.prototype.request = function (e) { "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get"; var t = [a, void 0], n = Promise.resolve(e); for (this.interceptors.request.forEach((function (e) { t.unshift(e.fulfilled, e.rejected); })), this.interceptors.response.forEach((function (e) { t.push(e.fulfilled, e.rejected); })); t.length;)
                n = n.then(t.shift(), t.shift()); return n; }, u.prototype.getUri = function (e) { return e = s(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, ""); }, r.forEach(["delete", "get", "head", "options"], (function (e) { u.prototype[e] = function (t, n) { return this.request(r.merge(n || {}, { method: e, url: t })); }; })), r.forEach(["post", "put", "patch"], (function (e) { u.prototype[e] = function (t, n, i) { return this.request(r.merge(i || {}, { method: e, url: t, data: n })); }; })), e.exports = u;
        }, 782: function (e, t, n) {
            "use strict";
            var r = n(4867);
            function i() { this.handlers = []; }
            i.prototype.use = function (e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1; }, i.prototype.eject = function (e) { this.handlers[e] && (this.handlers[e] = null); }, i.prototype.forEach = function (e) { r.forEach(this.handlers, (function (t) { null !== t && e(t); })); }, e.exports = i;
        }, 5061: function (e, t, n) {
            "use strict";
            var r = n(481);
            e.exports = function (e, t, n, i, o) { var a = new Error(e); return r(a, t, n, i, o); };
        }, 3572: function (e, t, n) {
            "use strict";
            var r = n(4867), i = n(8527), o = n(6502), a = n(5655), s = n(1793), u = n(7303);
            function c(e) { e.cancelToken && e.cancelToken.throwIfRequested(); }
            e.exports = function (e) { return c(e), e.baseURL && !s(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) { delete e.headers[t]; })), (e.adapter || a.adapter)(e).then((function (t) { return c(e), t.data = i(t.data, t.headers, e.transformResponse), t; }), (function (t) { return o(t) || (c(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t); })); };
        }, 481: function (e) {
            "use strict";
            e.exports = function (e, t, n, r, i) { return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code }; }, e; };
        }, 7185: function (e, t, n) {
            "use strict";
            var r = n(4867);
            e.exports = function (e, t) { t = t || {}; var n = {}; return r.forEach(["url", "method", "params", "data"], (function (e) { void 0 !== t[e] && (n[e] = t[e]); })), r.forEach(["headers", "auth", "proxy"], (function (i) { r.isObject(t[i]) ? n[i] = r.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : r.isObject(e[i]) ? n[i] = r.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i]); })), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], (function (r) { void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]); })), n; };
        }, 6026: function (e, t, n) {
            "use strict";
            var r = n(5061);
            e.exports = function (e, t, n) { var i = n.config.validateStatus; !i || i(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n)); };
        }, 8527: function (e, t, n) {
            "use strict";
            var r = n(4867);
            e.exports = function (e, t, n) { return r.forEach(n, (function (n) { e = n(e, t); })), e; };
        }, 5655: function (e, t, n) {
            "use strict";
            var r = n(4867), i = n(6016), o = { "Content-Type": "application/x-www-form-urlencoded" };
            function a(e, t) { !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t); }
            var s, u = { adapter: (("undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) || "undefined" != typeof XMLHttpRequest) && (s = n(5448)), s), transformRequest: [function (e, t) { return i(t, "Accept"), i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e; }], transformResponse: [function (e) { if ("string" == typeof e)
                        try {
                            e = JSON.parse(e);
                        }
                        catch (e) { } return e; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function (e) { return e >= 200 && e < 300; }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
            r.forEach(["delete", "get", "head"], (function (e) { u.headers[e] = {}; })), r.forEach(["post", "put", "patch"], (function (e) { u.headers[e] = r.merge(o); })), e.exports = u;
        }, 1849: function (e) {
            "use strict";
            e.exports = function (e, t) { return function () { for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                n[r] = arguments[r]; return e.apply(t, n); }; };
        }, 5327: function (e, t, n) {
            "use strict";
            var r = n(4867);
            function i(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]"); }
            e.exports = function (e, t, n) { if (!t)
                return e; var o; if (n)
                o = n(t);
            else if (r.isURLSearchParams(t))
                o = t.toString();
            else {
                var a = [];
                r.forEach(t, (function (e, t) { null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function (e) { r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(i(t) + "=" + i(e)); }))); })), o = a.join("&");
            } if (o) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + o;
            } return e; };
        }, 7303: function (e) {
            "use strict";
            e.exports = function (e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e; };
        }, 4372: function (e, t, n) {
            "use strict";
            var r = n(4867);
            e.exports = r.isStandardBrowserEnv() ? { write: function (e, t, n, i, o, a) { var s = []; s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; "); }, read: function (e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null; }, remove: function (e) { this.write(e, "", Date.now() - 864e5); } } : { write: function () { }, read: function () { return null; }, remove: function () { } };
        }, 1793: function (e) {
            "use strict";
            e.exports = function (e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e); };
        }, 7985: function (e, t, n) {
            "use strict";
            var r = n(4867);
            e.exports = r.isStandardBrowserEnv() ? function () { var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"); function i(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname }; } return e = i(window.location.href), function (t) { var n = r.isString(t) ? i(t) : t; return n.protocol === e.protocol && n.host === e.host; }; }() : function () { return !0; };
        }, 6016: function (e, t, n) {
            "use strict";
            var r = n(4867);
            e.exports = function (e, t) { r.forEach(e, (function (n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]); })); };
        }, 4109: function (e, t, n) {
            "use strict";
            var r = n(4867), i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function (e) { var t, n, o, a = {}; return e ? (r.forEach(e.split("\n"), (function (e) { if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
                if (a[t] && i.indexOf(t) >= 0)
                    return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n;
            } })), a) : a; };
        }, 8713: function (e) {
            "use strict";
            e.exports = function (e) { return function (t) { return e.apply(null, t); }; };
        }, 4867: function (e, t, n) {
            "use strict";
            var r = n(1849), i = n(8738), o = Object.prototype.toString;
            function a(e) { return "[object Array]" === o.call(e); }
            function s(e) { return null !== e && "object" == typeof e; }
            function u(e) { return "[object Function]" === o.call(e); }
            function c(e, t) { if (null != e)
                if ("object" != typeof e && (e = [e]), a(e))
                    for (var n = 0, r = e.length; n < r; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e); }
            e.exports = { isArray: a, isArrayBuffer: function (e) { return "[object ArrayBuffer]" === o.call(e); }, isBuffer: i, isFormData: function (e) { return "undefined" != typeof FormData && e instanceof FormData; }, isArrayBufferView: function (e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer; }, isString: function (e) { return "string" == typeof e; }, isNumber: function (e) { return "number" == typeof e; }, isObject: s, isUndefined: function (e) { return void 0 === e; }, isDate: function (e) { return "[object Date]" === o.call(e); }, isFile: function (e) { return "[object File]" === o.call(e); }, isBlob: function (e) { return "[object Blob]" === o.call(e); }, isFunction: u, isStream: function (e) { return s(e) && u(e.pipe); }, isURLSearchParams: function (e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams; }, isStandardBrowserEnv: function () { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document; }, forEach: c, merge: function e() { var t = {}; function n(n, r) { "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n; } for (var r = 0, i = arguments.length; r < i; r++)
                    c(arguments[r], n); return t; }, deepMerge: function e() { var t = {}; function n(n, r) { "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n; } for (var r = 0, i = arguments.length; r < i; r++)
                    c(arguments[r], n); return t; }, extend: function (e, t, n) { return c(t, (function (t, i) { e[i] = n && "function" == typeof t ? r(t, n) : t; })), e; }, trim: function (e) { return e.replace(/^\s*/, "").replace(/\s*$/, ""); } };
        }, 7187: function (e) {
            "use strict";
            var t, n = "object" == typeof Reflect ? Reflect : null, r = n && "function" == typeof n.apply ? n.apply : function (e, t, n) { return Function.prototype.apply.call(e, t, n); };
            t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function (e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)); } : function (e) { return Object.getOwnPropertyNames(e); };
            var i = Number.isNaN || function (e) { return e != e; };
            function o() { o.init.call(this); }
            e.exports = o, e.exports.once = function (e, t) { return new Promise((function (n, r) { function i() { void 0 !== o && e.removeListener("error", o), n([].slice.call(arguments)); } var o; "error" !== t && (o = function (n) { e.removeListener(t, i), r(n); }, e.once("error", o)), e.once(t, i); })); }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
            var a = 10;
            function s(e) { if ("function" != typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e); }
            function u(e) { return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners; }
            function c(e, t, n, r) { var i, o, a, c; if (s(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]), void 0 === a)
                a = o[t] = n, ++e._eventsCount;
            else if ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (i = u(e)) > 0 && a.length > i && !a.warned) {
                a.warned = !0;
                var l = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = a.length, c = l, console && console.warn && console.warn(c);
            } return e; }
            function l() { if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments); }
            function f(e, t, n) { var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, i = l.bind(r); return i.listener = n, r.wrapFn = i, i; }
            function d(e, t, n) { var r = e._events; if (void 0 === r)
                return []; var i = r[t]; return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n]; return t; }(i) : h(i, i.length); }
            function p(e) { var t = this._events; if (void 0 !== t) {
                var n = t[e];
                if ("function" == typeof n)
                    return 1;
                if (void 0 !== n)
                    return n.length;
            } return 0; }
            function h(e, t) { for (var n = new Array(t), r = 0; r < t; ++r)
                n[r] = e[r]; return n; }
            Object.defineProperty(o, "defaultMaxListeners", { enumerable: !0, get: function () { return a; }, set: function (e) { if ("number" != typeof e || e < 0 || i(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."); a = e; } }), o.init = function () { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, o.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || i(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this; }, o.prototype.getMaxListeners = function () { return u(this); }, o.prototype.emit = function (e) { for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]); var i = "error" === e, o = this._events; if (void 0 !== o)
                i = i && void 0 === o.error;
            else if (!i)
                return !1; if (i) {
                var a;
                if (t.length > 0 && (a = t[0]), a instanceof Error)
                    throw a;
                var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                throw s.context = a, s;
            } var u = o[e]; if (void 0 === u)
                return !1; if ("function" == typeof u)
                r(u, this, t);
            else {
                var c = u.length, l = h(u, c);
                for (n = 0; n < c; ++n)
                    r(l[n], this, t);
            } return !0; }, o.prototype.addListener = function (e, t) { return c(this, e, t, !1); }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function (e, t) { return c(this, e, t, !0); }, o.prototype.once = function (e, t) { return s(t), this.on(e, f(this, e, t)), this; }, o.prototype.prependOnceListener = function (e, t) { return s(t), this.prependListener(e, f(this, e, t)), this; }, o.prototype.removeListener = function (e, t) { var n, r, i, o, a; if (s(t), void 0 === (r = this._events))
                return this; if (void 0 === (n = r[e]))
                return this; if (n === t || n.listener === t)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (i = -1, o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        a = n[o].listener, i = o;
                        break;
                    }
                if (i < 0)
                    return this;
                0 === i ? n.shift() : function (e, t) { for (; t + 1 < e.length; t++)
                    e[t] = e[t + 1]; e.pop(); }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t);
            } return this; }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function (e) { var t, n, r; if (void 0 === (n = this._events))
                return this; if (void 0 === n.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this; if (0 === arguments.length) {
                var i, o = Object.keys(n);
                for (r = 0; r < o.length; ++r)
                    "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
            } if ("function" == typeof (t = n[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                    this.removeListener(e, t[r]); return this; }, o.prototype.listeners = function (e) { return d(this, e, !0); }, o.prototype.rawListeners = function (e) { return d(this, e, !1); }, o.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t); }, o.prototype.listenerCount = p, o.prototype.eventNames = function () { return this._eventsCount > 0 ? t(this._events) : []; };
        }, 259: function (e, t, n) {
            "use strict";
            var r = n(7849).buildOptions, i = { attributeNamePrefix: "@_", attrNodeName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataTagName: !1, cdataPositionChar: "\\c", format: !1, indentBy: "  ", supressEmptyNode: !1, tagValueProcessor: function (e) { return e; }, attrValueProcessor: function (e) { return e; } }, o = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "cdataTagName", "cdataPositionChar", "format", "indentBy", "supressEmptyNode", "tagValueProcessor", "attrValueProcessor"];
            function a(e) { this.options = r(e, i, o), this.options.ignoreAttributes || this.options.attrNodeName ? this.isAttribute = function () { return !1; } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h), this.options.cdataTagName ? this.isCDATA = v : this.isCDATA = function () { return !1; }, this.replaceCDATAstr = s, this.replaceCDATAarr = u, this.options.format ? (this.indentate = p, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () { return ""; }, this.tagEndChar = ">", this.newLine = ""), this.options.supressEmptyNode ? (this.buildTextNode = d, this.buildObjNode = l) : (this.buildTextNode = f, this.buildObjNode = c), this.buildTextValNode = f, this.buildObjectNode = c; }
            function s(e, t) { return e = this.options.tagValueProcessor("" + e), "" === this.options.cdataPositionChar || "" === e ? e + "<![CDATA[" + t + "]]" + this.tagEndChar : e.replace(this.options.cdataPositionChar, "<![CDATA[" + t + "]]" + this.tagEndChar); }
            function u(e, t) { if (e = this.options.tagValueProcessor("" + e), "" === this.options.cdataPositionChar || "" === e)
                return e + "<![CDATA[" + t.join("]]><![CDATA[") + "]]" + this.tagEndChar; for (var n_1 in t)
                e = e.replace(this.options.cdataPositionChar, "<![CDATA[" + t[n_1] + "]]>"); return e + this.newLine; }
            function c(e, t, n, r) { return n && !e.includes("<") ? this.indentate(r) + "<" + t + n + ">" + e + "</" + t + this.tagEndChar : this.indentate(r) + "<" + t + n + this.tagEndChar + e + this.indentate(r) + "</" + t + this.tagEndChar; }
            function l(e, t, n, r) { return "" !== e ? this.buildObjectNode(e, t, n, r) : this.indentate(r) + "<" + t + n + "/" + this.tagEndChar; }
            function f(e, t, n, r) { return this.indentate(r) + "<" + t + n + ">" + this.options.tagValueProcessor(e) + "</" + t + this.tagEndChar; }
            function d(e, t, n, r) { return "" !== e ? this.buildTextValNode(e, t, n, r) : this.indentate(r) + "<" + t + n + "/" + this.tagEndChar; }
            function p(e) { return this.options.indentBy.repeat(e); }
            function h(e) { return !!e.startsWith(this.options.attributeNamePrefix) && e.substr(this.attrPrefixLen); }
            function v(e) { return e === this.options.cdataTagName; }
            a.prototype.parse = function (e) { return this.j2x(e, 0).val; }, a.prototype.j2x = function (e, t) { var n = "", r = ""; var i = Object.keys(e), o = i.length; for (var a_1 = 0; a_1 < o; a_1++) {
                var o_1 = i[a_1];
                if (void 0 === e[o_1])
                    ;
                else if (null === e[o_1])
                    r += this.indentate(t) + "<" + o_1 + "/" + this.tagEndChar;
                else if (e[o_1] instanceof Date)
                    r += this.buildTextNode(e[o_1], o_1, "", t);
                else if ("object" != typeof e[o_1]) {
                    var i_1 = this.isAttribute(o_1);
                    i_1 ? n += " " + i_1 + '="' + this.options.attrValueProcessor("" + e[o_1]) + '"' : this.isCDATA(o_1) ? e[this.options.textNodeName] ? r += this.replaceCDATAstr(e[this.options.textNodeName], e[o_1]) : r += this.replaceCDATAstr("", e[o_1]) : o_1 === this.options.textNodeName ? e[this.options.cdataTagName] || (r += this.options.tagValueProcessor("" + e[o_1])) : r += this.buildTextNode(e[o_1], o_1, "", t);
                }
                else if (Array.isArray(e[o_1]))
                    if (this.isCDATA(o_1))
                        r += this.indentate(t), e[this.options.textNodeName] ? r += this.replaceCDATAarr(e[this.options.textNodeName], e[o_1]) : r += this.replaceCDATAarr("", e[o_1]);
                    else {
                        var n_2 = e[o_1].length;
                        for (var i_2 = 0; i_2 < n_2; i_2++) {
                            var n_3 = e[o_1][i_2];
                            if (void 0 === n_3)
                                ;
                            else if (null === n_3)
                                r += this.indentate(t) + "<" + o_1 + "/" + this.tagEndChar;
                            else if ("object" == typeof n_3) {
                                var e_1 = this.j2x(n_3, t + 1);
                                r += this.buildObjNode(e_1.val, o_1, e_1.attrStr, t);
                            }
                            else
                                r += this.buildTextNode(n_3, o_1, "", t);
                        }
                    }
                else if (this.options.attrNodeName && o_1 === this.options.attrNodeName) {
                    var t_1 = Object.keys(e[o_1]), r_1 = t_1.length;
                    for (var i_3 = 0; i_3 < r_1; i_3++)
                        n += " " + t_1[i_3] + '="' + this.options.attrValueProcessor("" + e[o_1][t_1[i_3]]) + '"';
                }
                else {
                    var n_4 = this.j2x(e[o_1], t + 1);
                    r += this.buildObjNode(n_4.val, o_1, n_4.attrStr, t);
                }
            } return { attrStr: n, val: r }; }, e.exports = a;
        }, 8398: function (e, t, n) {
            "use strict";
            var r = function (e) { return String.fromCharCode(e); }, i = { nilChar: r(176), missingChar: r(201), nilPremitive: r(175), missingPremitive: r(200), emptyChar: r(178), emptyValue: r(177), boundryChar: r(179), objStart: r(198), arrStart: r(204), arrayEnd: r(185) }, o = [i.nilChar, i.nilPremitive, i.missingChar, i.missingPremitive, i.boundryChar, i.emptyChar, i.emptyValue, i.arrayEnd, i.objStart, i.arrStart], a = function (e, t, n) { if ("string" == typeof t)
                return e && e[0] && void 0 !== e[0].val ? s(e[0].val, t) : s(e, t); {
                var o_2 = void 0 === (r = e) ? i.missingChar : null === r ? i.nilChar : !(r.child && 0 === Object.keys(r.child).length && (!r.attrsMap || 0 === Object.keys(r.attrsMap).length)) || i.emptyChar;
                if (!0 === o_2) {
                    var r_2 = "";
                    if (Array.isArray(t)) {
                        r_2 += i.arrStart;
                        var o_3 = t[0], c_1 = e.length;
                        if ("string" == typeof o_3)
                            for (var t_2 = 0; t_2 < c_1; t_2++) {
                                var n_5 = s(e[t_2].val, o_3);
                                r_2 = u(r_2, n_5);
                            }
                        else
                            for (var t_3 = 0; t_3 < c_1; t_3++) {
                                var i_4 = a(e[t_3], o_3, n);
                                r_2 = u(r_2, i_4);
                            }
                        r_2 += i.arrayEnd;
                    }
                    else {
                        r_2 += i.objStart;
                        var o_4 = Object.keys(t);
                        Array.isArray(e) && (e = e[0]);
                        for (var i_5 in o_4) {
                            var s_1 = o_4[i_5];
                            var c_2 = void 0;
                            c_2 = !n.ignoreAttributes && e.attrsMap && e.attrsMap[s_1] ? a(e.attrsMap[s_1], t[s_1], n) : s_1 === n.textNodeName ? a(e.val, t[s_1], n) : a(e.child[s_1], t[s_1], n), r_2 = u(r_2, c_2);
                        }
                    }
                    return r_2;
                }
                return o_2;
            } var r; }, s = function (e) { switch (e) {
                case void 0: return i.missingPremitive;
                case null: return i.nilPremitive;
                case "": return i.emptyValue;
                default: return e;
            } }, u = function (e, t) { return c(t[0]) || c(e[e.length - 1]) || (e += i.boundryChar), e + t; }, c = function (e) { return -1 !== o.indexOf(e); }, l = n(3543), f = n(7849).buildOptions;
            t.convert2nimn = function (e, t, n) { return n = f(n, l.defaultOptions, l.props), a(e, t, n); };
        }, 284: function (e, t, n) {
            "use strict";
            var r = n(7849), i = function (e, t) { var n = {}; if (!(e.child && !r.isEmptyObject(e.child) || e.attrsMap && !r.isEmptyObject(e.attrsMap)))
                return r.isExist(e.val) ? e.val : ""; r.isExist(e.val) && ("string" != typeof e.val || "" !== e.val && e.val !== t.cdataPositionChar) && ("strict" === t.arrayMode ? n[t.textNodeName] = [e.val] : n[t.textNodeName] = e.val), r.merge(n, e.attrsMap, t.arrayMode); var o = Object.keys(e.child); for (var r_3 = 0; r_3 < o.length; r_3++) {
                var a = o[r_3];
                if (e.child[a] && e.child[a].length > 1)
                    for (var s in n[a] = [], e.child[a])
                        e.child[a].hasOwnProperty(s) && n[a].push(i(e.child[a][s], t));
                else if (!0 === t.arrayMode) {
                    var r_4 = i(e.child[a][0], t);
                    n[a] = "object" == typeof r_4 ? [r_4] : r_4;
                }
                else
                    "strict" === t.arrayMode ? n[a] = [i(e.child[a][0], t)] : n[a] = i(e.child[a][0], t);
            } return n; };
            t.convertToJson = i;
        }, 7702: function (e, t, n) {
            "use strict";
            var r = n(7849), i = n(7849).buildOptions, o = n(3543), a = function (e, t, n) { var i = "{"; var o = Object.keys(e.child); for (var n_6 = 0; n_6 < o.length; n_6++) {
                var s = o[n_6];
                if (e.child[s] && e.child[s].length > 1) {
                    for (var u in i += '"' + s + '" : [ ', e.child[s])
                        i += a(e.child[s][u], t) + " , ";
                    i = i.substr(0, i.length - 1) + " ] ";
                }
                else
                    i += '"' + s + '" : ' + a(e.child[s][0], t) + " ,";
            } return r.merge(i, e.attrsMap), r.isEmptyObject(i) ? r.isExist(e.val) ? e.val : "" : (r.isExist(e.val) && ("string" != typeof e.val || "" !== e.val && e.val !== t.cdataPositionChar) && (i += '"' + t.textNodeName + '" : ' + (!0 !== (c = e.val) && !1 !== c && isNaN(c) ? '"' + c + '"' : c)), "," === i[i.length - 1] && (i = i.substr(0, i.length - 2)), i + "}"); var c; };
            t.convertToJsonString = function (e, t) { return (t = i(t, o.defaultOptions, o.props)).indentBy = t.indentBy || "", a(e, t, 0); };
        }, 6965: function (e, t, n) {
            "use strict";
            var r = n(284), i = n(3543), o = n(3543), a = n(7849).buildOptions, s = n(8501);
            t.parse = function (e, t, n) { if (n) {
                !0 === n && (n = {});
                var t_4 = s.validate(e, n);
                if (!0 !== t_4)
                    throw Error(t_4.err.msg);
            } t = a(t, o.defaultOptions, o.props); var u = i.getTraversalObj(e, t); return r.convertToJson(u, t); }, t.convertTonimn = n(8398).convert2nimn, t.getTraversalObj = i.getTraversalObj, t.convertToJson = r.convertToJson, t.convertToJsonString = n(7702).convertToJsonString, t.validate = s.validate, t.j2xParser = n(259), t.parseToNimn = function (e, n, r) { return t.convertTonimn(t.getTraversalObj(e, r), n, r); };
        }, 7849: function (e, t) {
            "use strict";
            var n = "[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*", r = new RegExp("^" + n + "$");
            t.isExist = function (e) { return void 0 !== e; }, t.isEmptyObject = function (e) { return 0 === Object.keys(e).length; }, t.merge = function (e, t, n) { if (t) {
                var r_5 = Object.keys(t), i = r_5.length;
                for (var o = 0; o < i; o++)
                    e[r_5[o]] = "strict" === n ? [t[r_5[o]]] : t[r_5[o]];
            } }, t.getValue = function (e) { return t.isExist(e) ? e : ""; }, t.buildOptions = function (e, t, n) { var r = {}; if (!e)
                return t; for (var i = 0; i < n.length; i++)
                void 0 !== e[n[i]] ? r[n[i]] = e[n[i]] : r[n[i]] = t[n[i]]; return r; }, t.isName = function (e) { return !(null == r.exec(e)); }, t.getAllMatches = function (e, t) { var n = []; var r = t.exec(e); for (; r;) {
                var i = [], o = r.length;
                for (var e_2 = 0; e_2 < o; e_2++)
                    i.push(r[e_2]);
                n.push(i), r = t.exec(e);
            } return n; }, t.nameRegexp = n;
        }, 8501: function (e, t, n) {
            "use strict";
            var r = n(7849), i = { allowBooleanAttributes: !1 }, o = ["allowBooleanAttributes"];
            function a(e, t) { for (var n = t; t < e.length; t++)
                if ("?" != e[t] && " " != e[t])
                    ;
                else {
                    var r = e.substr(n, t - n);
                    if (t > 5 && "xml" === r)
                        return d("InvalidXml", "XML declaration allowed only at the start of the document.", h(e, t));
                    if ("?" == e[t] && ">" == e[t + 1]) {
                        t++;
                        break;
                    }
                } return t; }
            function s(e, t) { if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
                for (t += 3; t < e.length; t++)
                    if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
                        t += 2;
                        break;
                    }
            }
            else if (e.length > t + 8 && "D" === e[t + 1] && "O" === e[t + 2] && "C" === e[t + 3] && "T" === e[t + 4] && "Y" === e[t + 5] && "P" === e[t + 6] && "E" === e[t + 7]) {
                var n_7 = 1;
                for (t += 8; t < e.length; t++)
                    if ("<" === e[t])
                        n_7++;
                    else if (">" === e[t] && (n_7--, 0 === n_7))
                        break;
            }
            else if (e.length > t + 9 && "[" === e[t + 1] && "C" === e[t + 2] && "D" === e[t + 3] && "A" === e[t + 4] && "T" === e[t + 5] && "A" === e[t + 6] && "[" === e[t + 7])
                for (t += 8; t < e.length; t++)
                    if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
                        t += 2;
                        break;
                    } return t; }
            function u(e, t) { var n = "", r = "", i = !1; for (; t < e.length; t++) {
                if ('"' === e[t] || "'" === e[t])
                    if ("" === r)
                        r = e[t];
                    else {
                        if (r !== e[t])
                            continue;
                        r = "";
                    }
                else if (">" === e[t] && "" === r) {
                    i = !0;
                    break;
                }
                n += e[t];
            } return "" === r && { value: n, index: t, tagClosed: i }; }
            t.validate = function (e, t) { t = r.buildOptions(t, i, o); var n = []; var c = !1, p = !1; "\ufeff" === e[0] && (e = e.substr(1)); for (var i_6 = 0; i_6 < e.length; i_6++) {
                if ("<" !== e[i_6]) {
                    if (" " === e[i_6] || "\t" === e[i_6] || "\n" === e[i_6] || "\r" === e[i_6])
                        continue;
                    return d("InvalidChar", "char '" + e[i_6] + "' is not expected.", h(e, i_6));
                }
                if (i_6++, "?" === e[i_6]) {
                    if (i_6 = a(e, ++i_6), i_6.err)
                        return i_6;
                }
                else {
                    if ("!" === e[i_6]) {
                        i_6 = s(e, i_6);
                        continue;
                    }
                    {
                        var o_5 = !1;
                        "/" === e[i_6] && (o_5 = !0, i_6++);
                        var a_2 = "";
                        for (; i_6 < e.length && ">" !== e[i_6] && " " !== e[i_6] && "\t" !== e[i_6] && "\n" !== e[i_6] && "\r" !== e[i_6]; i_6++)
                            a_2 += e[i_6];
                        if (a_2 = a_2.trim(), "/" === a_2[a_2.length - 1] && (a_2 = a_2.substring(0, a_2.length - 1), i_6--), v = a_2, !r.isName(v)) {
                            var t_5 = void 0;
                            return t_5 = 0 === a_2.trim().length ? "There is an unnecessary space between tag name and backward slash '</ ..'." : "Tag '" + a_2 + "' is an invalid name.", d("InvalidTag", t_5, h(e, i_6));
                        }
                        var g = u(e, i_6);
                        if (!1 === g)
                            return d("InvalidAttr", "Attributes for '" + a_2 + "' have open quote.", h(e, i_6));
                        var m = g.value;
                        if (i_6 = g.index, "/" === m[m.length - 1]) {
                            m = m.substring(0, m.length - 1);
                            var n_8 = l(m, t);
                            if (!0 !== n_8)
                                return d(n_8.err.code, n_8.err.msg, h(e, i_6 - m.length + n_8.err.line));
                            c = !0;
                        }
                        else if (o_5) {
                            if (!g.tagClosed)
                                return d("InvalidTag", "Closing tag '" + a_2 + "' doesn't have proper closing.", h(e, i_6));
                            if (m.trim().length > 0)
                                return d("InvalidTag", "Closing tag '" + a_2 + "' can't have attributes or invalid starting.", h(e, i_6));
                            {
                                var t_6 = n.pop();
                                if (a_2 !== t_6)
                                    return d("InvalidTag", "Closing tag '" + t_6 + "' is expected inplace of '" + a_2 + "'.", h(e, i_6));
                                0 == n.length && (p = !0);
                            }
                        }
                        else {
                            var r_6 = l(m, t);
                            if (!0 !== r_6)
                                return d(r_6.err.code, r_6.err.msg, h(e, i_6 - m.length + r_6.err.line));
                            if (!0 === p)
                                return d("InvalidXml", "Multiple possible root nodes found.", h(e, i_6));
                            n.push(a_2), c = !0;
                        }
                        for (i_6++; i_6 < e.length; i_6++) {
                            if ("<" === e[i_6]) {
                                if ("!" === e[i_6 + 1]) {
                                    i_6++, i_6 = s(e, i_6);
                                    continue;
                                }
                                break;
                            }
                            if ("&" === e[i_6]) {
                                var t_7 = f(e, i_6);
                                if (-1 == t_7)
                                    return d("InvalidChar", "char '&' is not expected.", h(e, i_6));
                                i_6 = t_7;
                            }
                        }
                        "<" === e[i_6] && i_6--;
                    }
                }
            } var v; return c ? !(n.length > 0) || d("InvalidXml", "Invalid '" + JSON.stringify(n, null, 4).replace(/\r?\n/g, "") + "' found.", 1) : d("InvalidXml", "Start tag expected.", 1); };
            var c = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
            function l(e, t) { var n = r.getAllMatches(e, c), i = {}; for (var r_7 = 0; r_7 < n.length; r_7++) {
                if (0 === n[r_7][1].length)
                    return d("InvalidAttr", "Attribute '" + n[r_7][2] + "' has no space in starting.", v(e, n[r_7][0]));
                if (void 0 === n[r_7][3] && !t.allowBooleanAttributes)
                    return d("InvalidAttr", "boolean attribute '" + n[r_7][2] + "' is not allowed.", v(e, n[r_7][0]));
                var o_6 = n[r_7][2];
                if (!p(o_6))
                    return d("InvalidAttr", "Attribute '" + o_6 + "' is an invalid name.", v(e, n[r_7][0]));
                if (i.hasOwnProperty(o_6))
                    return d("InvalidAttr", "Attribute '" + o_6 + "' is repeated.", v(e, n[r_7][0]));
                i[o_6] = 1;
            } return !0; }
            function f(e, t) { if (";" === e[++t])
                return -1; if ("#" === e[t])
                return function (e, t) { var n = /\d/; for ("x" === e[t] && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
                    if (";" === e[t])
                        return t;
                    if (!e[t].match(n))
                        break;
                } return -1; }(e, ++t); var n = 0; for (; t < e.length; t++, n++)
                if (!(e[t].match(/\w/) && n < 20)) {
                    if (";" === e[t])
                        break;
                    return -1;
                } return t; }
            function d(e, t, n) { return { err: { code: e, msg: t, line: n } }; }
            function p(e) { return r.isName(e); }
            function h(e, t) { return e.substring(0, t).split(/\r?\n/).length; }
            function v(e, t) { return e.indexOf(t) + t.length; }
        }, 6468: function (e) {
            "use strict";
            e.exports = function (e, t, n) { this.tagname = e, this.parent = t, this.child = {}, this.attrsMap = {}, this.val = n, this.addChild = function (e) { Array.isArray(this.child[e.tagname]) ? this.child[e.tagname].push(e) : this.child[e.tagname] = [e]; }; };
        }, 3543: function (e, t, n) {
            "use strict";
            var r = n(7849), i = n(7849).buildOptions, o = n(6468);
            "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, r.nameRegexp), !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
            var a = { attributeNamePrefix: "@_", attrNodeName: !1, textNodeName: "#text", ignoreAttributes: !0, ignoreNameSpace: !1, allowBooleanAttributes: !1, parseNodeValue: !0, parseAttributeValue: !1, arrayMode: !1, trimValues: !0, cdataTagName: !1, cdataPositionChar: "\\c", tagValueProcessor: function (e, t) { return e; }, attrValueProcessor: function (e, t) { return e; }, stopNodes: [] };
            t.defaultOptions = a;
            var s = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "ignoreNameSpace", "allowBooleanAttributes", "parseNodeValue", "parseAttributeValue", "arrayMode", "trimValues", "cdataTagName", "cdataPositionChar", "tagValueProcessor", "attrValueProcessor", "parseTrueNumberOnly", "stopNodes"];
            function u(e, t, n) { return t && (n.trimValues && (t = t.trim()), t = l(t = n.tagValueProcessor(t, e), n.parseNodeValue, n.parseTrueNumberOnly)), t; }
            function c(e, t) { if (t.ignoreNameSpace) {
                var t_8 = e.split(":"), n_9 = "/" === e.charAt(0) ? "/" : "";
                if ("xmlns" === t_8[0])
                    return "";
                2 === t_8.length && (e = n_9 + t_8[1]);
            } return e; }
            function l(e, t, n) { if (t && "string" == typeof e) {
                var t_9;
                return "" === e.trim() || isNaN(e) ? t_9 = "true" === e || "false" !== e && e : (-1 !== e.indexOf("0x") ? t_9 = Number.parseInt(e, 16) : -1 !== e.indexOf(".") ? (t_9 = Number.parseFloat(e), e = e.replace(/\.?0+$/, "")) : t_9 = Number.parseInt(e, 10), n && (t_9 = String(t_9) === e ? t_9 : e)), t_9;
            } return r.isExist(e) ? e : ""; }
            t.props = s;
            var f = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");
            function d(e, t) { if (!t.ignoreAttributes && "string" == typeof e) {
                e = e.replace(/\r?\n/g, " ");
                var n_10 = r.getAllMatches(e, f), i_7 = n_10.length, o_7 = {};
                for (var e_3 = 0; e_3 < i_7; e_3++) {
                    var r_8 = c(n_10[e_3][1], t);
                    r_8.length && (void 0 !== n_10[e_3][4] ? (t.trimValues && (n_10[e_3][4] = n_10[e_3][4].trim()), n_10[e_3][4] = t.attrValueProcessor(n_10[e_3][4], r_8), o_7[t.attributeNamePrefix + r_8] = l(n_10[e_3][4], t.parseAttributeValue, t.parseTrueNumberOnly)) : t.allowBooleanAttributes && (o_7[t.attributeNamePrefix + r_8] = !0));
                }
                if (!Object.keys(o_7).length)
                    return;
                if (t.attrNodeName) {
                    var e_4 = {};
                    return e_4[t.attrNodeName] = o_7, e_4;
                }
                return o_7;
            } }
            function p(e, t) { var n, r = ""; for (var i_8 = t; i_8 < e.length; i_8++) {
                var t_10 = e[i_8];
                if (n)
                    t_10 === n && (n = "");
                else if ('"' === t_10 || "'" === t_10)
                    n = t_10;
                else {
                    if (">" === t_10)
                        return { data: r, index: i_8 };
                    "\t" === t_10 && (t_10 = " ");
                }
                r += t_10;
            } }
            function h(e, t, n, r) { var i = e.indexOf(t, n); if (-1 === i)
                throw new Error(r); return i + t.length - 1; }
            t.getTraversalObj = function (e, t) { e = e.replace(/\r\n?/g, "\n"), t = i(t, a, s); var n = new o("!xml"); var c = n, l = ""; for (var n_11 = 0; n_11 < e.length; n_11++)
                if ("<" === e[n_11])
                    if ("/" === e[n_11 + 1]) {
                        var i_9 = h(e, ">", n_11, "Closing Tag is not closed.");
                        var o_8 = e.substring(n_11 + 2, i_9).trim();
                        if (t.ignoreNameSpace) {
                            var e_5 = o_8.indexOf(":");
                            -1 !== e_5 && (o_8 = o_8.substr(e_5 + 1));
                        }
                        c && (c.val ? c.val = r.getValue(c.val) + "" + u(o_8, l, t) : c.val = u(o_8, l, t)), t.stopNodes.length && t.stopNodes.includes(c.tagname) && (c.child = [], null == c.attrsMap && (c.attrsMap = {}), c.val = e.substr(c.startIndex + 1, n_11 - c.startIndex - 1)), c = c.parent, l = "", n_11 = i_9;
                    }
                    else if ("?" === e[n_11 + 1])
                        n_11 = h(e, "?>", n_11, "Pi Tag is not closed.");
                    else if ("!--" === e.substr(n_11 + 1, 3))
                        n_11 = h(e, "--\x3e", n_11, "Comment is not closed.");
                    else if ("!D" === e.substr(n_11 + 1, 2)) {
                        var t_11 = h(e, ">", n_11, "DOCTYPE is not closed.");
                        n_11 = e.substring(n_11, t_11).indexOf("[") >= 0 ? e.indexOf("]>", n_11) + 1 : t_11;
                    }
                    else if ("![" === e.substr(n_11 + 1, 2)) {
                        var i_10 = h(e, "]]>", n_11, "CDATA is not closed.") - 2, a_3 = e.substring(n_11 + 9, i_10);
                        if (l && (c.val = r.getValue(c.val) + "" + u(c.tagname, l, t), l = ""), t.cdataTagName) {
                            var e_6 = new o(t.cdataTagName, c, a_3);
                            c.addChild(e_6), c.val = r.getValue(c.val) + t.cdataPositionChar, a_3 && (e_6.val = a_3);
                        }
                        else
                            c.val = (c.val || "") + (a_3 || "");
                        n_11 = i_10 + 2;
                    }
                    else {
                        var i_11 = p(e, n_11 + 1);
                        var a_4 = i_11.data;
                        var s_2 = i_11.index, f_1 = a_4.indexOf(" ");
                        var h_1 = a_4;
                        if (-1 !== f_1 && (h_1 = a_4.substr(0, f_1).replace(/\s\s*$/, ""), a_4 = a_4.substr(f_1 + 1)), t.ignoreNameSpace) {
                            var e_7 = h_1.indexOf(":");
                            -1 !== e_7 && (h_1 = h_1.substr(e_7 + 1));
                        }
                        if (c && l && "!xml" !== c.tagname && (c.val = r.getValue(c.val) + "" + u(c.tagname, l, t)), a_4.length > 0 && a_4.lastIndexOf("/") === a_4.length - 1) {
                            "/" === h_1[h_1.length - 1] ? (h_1 = h_1.substr(0, h_1.length - 1), a_4 = h_1) : a_4 = a_4.substr(0, a_4.length - 1);
                            var e_8 = new o(h_1, c, "");
                            h_1 !== a_4 && (e_8.attrsMap = d(a_4, t)), c.addChild(e_8);
                        }
                        else {
                            var e_9 = new o(h_1, c);
                            t.stopNodes.length && t.stopNodes.includes(e_9.tagname) && (e_9.startIndex = s_2), h_1 !== a_4 && (e_9.attrsMap = d(a_4, t)), c.addChild(e_9), c = e_9;
                        }
                        l = "", n_11 = s_2;
                    }
                else
                    l += e[n_11]; return n; };
        }, 8738: function (e) { e.exports = function (e) { return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e); }; } }]);
