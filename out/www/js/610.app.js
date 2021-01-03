"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[610], { 2610: function (t, e, r) {
            "use strict";
            r.r(e), r.d(e, { amplify_radio_button: function () { return p; }, amplify_totp_setup: function () { return Yt; } });
            var n = r(3922), o = r(5069), i = r(3139), a = r(5573), u = r(5914), s = r(5489), f = r(7029), h = r(8396), c = r(7958), l = r(8764), g = function (t, e, r, n) { return new (r || (r = Promise))((function (o, i) { function a(t) { try {
                s(n.next(t));
            }
            catch (t) {
                i(t);
            } } function u(t) { try {
                s(n.throw(t));
            }
            catch (t) {
                i(t);
            } } function s(t) { var e; t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) { t(e); }))).then(a, u); } s((n = n.apply(t, e || [])).next()); })); }, d = function (t, e) { var r, n, o, i, a = { label: 0, sent: function () { if (1 & o[0])
                    throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function u(i) { return function (u) { return function (i) { if (r)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done)
                        return o;
                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                        case 0:
                        case 1:
                            o = i;
                            break;
                        case 4: return a.label++, { value: i[1], done: !1 };
                        case 5:
                            a.label++, n = i[1], i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                a.label = i[1];
                                break;
                            }
                            if (6 === i[0] && a.label < o[1]) {
                                a.label = o[1], o = i;
                                break;
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(i);
                                break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    i = e.call(t, a);
                }
                catch (t) {
                    i = [6, t], n = 0;
                }
                finally {
                    r = o = 0;
                } if (5 & i[0])
                throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, u]); }; } }, p = function () { function t(t) { (0, n.r)(this, t), this.placeholder = "", this.checked = !1, this.disabled = !1; } return t.prototype.render = function () { return (0, n.h)("span", { class: "radio-button" }, (0, n.h)("input", Object.assign({ type: "radio", name: this.name, value: this.value, onInput: this.handleInputChange, placeholder: this.placeholder, id: this.fieldId, checked: this.checked, disabled: this.disabled }, this.inputProps)), (0, n.h)("amplify-label", { htmlFor: this.fieldId }, this.label)); }, t; }();
            p.style = ":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";
            var v = function () { return "function" == typeof Promise && Promise.prototype && Promise.prototype.then; }, y = {}.toString, w = Array.isArray || function (t) { return "[object Array]" == y.call(t); };
            b.TYPED_ARRAY_SUPPORT = function () { try {
                var t = new Uint8Array(1);
                return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42; } }, 42 === t.foo();
            }
            catch (t) {
                return !1;
            } }();
            var m = b.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            function b(t, e, r) { return b.TYPED_ARRAY_SUPPORT || this instanceof b ? "number" == typeof t ? A(this, t) : function (t, e, r, n) { if ("number" == typeof e)
                throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) { if (r < 0 || e.byteLength < r)
                throw new RangeError("'offset' is out of bounds"); if (e.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds"); var o; return o = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), b.TYPED_ARRAY_SUPPORT ? o.__proto__ = b.prototype : o = P(t, o), o; }(t, e, r, n) : "string" == typeof e ? function (t, e) { var r = 0 | C(e), n = T(t, r), o = n.write(e); return o !== r && (n = n.slice(0, o)), n; }(t, e) : function (t, e) { if (b.isBuffer(e)) {
                var r = 0 | E(e.length), n = T(t, r);
                return 0 === n.length || e.copy(n, 0, 0, r), n;
            } if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e)
                    return "number" != typeof e.length || (o = e.length) != o ? T(t, 0) : P(t, e);
                if ("Buffer" === e.type && Array.isArray(e.data))
                    return P(t, e.data);
            } var o; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."); }(t, e); }(this, t, e, r) : new b(t, e, r); }
            function E(t) { if (t >= m)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + m.toString(16) + " bytes"); return 0 | t; }
            function T(t, e) { var r; return b.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e)).__proto__ = b.prototype : (null === (r = t) && (r = new b(e)), r.length = e), r; }
            function A(t, e) { var r = T(t, e < 0 ? 0 : 0 | E(e)); if (!b.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < e; ++n)
                    r[n] = 0; return r; }
            function P(t, e) { for (var r = e.length < 0 ? 0 : 0 | E(e.length), n = T(t, r), o = 0; o < r; o += 1)
                n[o] = 255 & e[o]; return n; }
            function R(t, e) { var r; e = e || 1 / 0; for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
                if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!o) {
                        if (r > 56319) {
                            (e -= 3) > -1 && i.push(239, 191, 189);
                            continue;
                        }
                        if (a + 1 === n) {
                            (e -= 3) > -1 && i.push(239, 191, 189);
                            continue;
                        }
                        o = r;
                        continue;
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                        continue;
                    }
                    r = 65536 + (o - 55296 << 10 | r - 56320);
                }
                else
                    o && (e -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, r < 128) {
                    if ((e -= 1) < 0)
                        break;
                    i.push(r);
                }
                else if (r < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    i.push(r >> 6 | 192, 63 & r | 128);
                }
                else if (r < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
                }
                else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((e -= 4) < 0)
                        break;
                    i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
                }
            } return i; }
            function C(t) { return b.isBuffer(t) ? t.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" != typeof t && (t = "" + t), 0 === t.length ? 0 : R(t).length); }
            b.TYPED_ARRAY_SUPPORT && (b.prototype.__proto__ = Uint8Array.prototype, b.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && b[Symbol.species] === b && Object.defineProperty(b, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 })), b.prototype.write = function (t, e, r) { void 0 === e || void 0 === r && "string" == typeof e ? (r = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(r) ? r |= 0 : r = void 0); var n = this.length - e; if ((void 0 === r || r > n) && (r = n), t.length > 0 && (r < 0 || e < 0) || e > this.length)
                throw new RangeError("Attempt to write outside buffer bounds"); return function (t, e, r, n) { return function (t, e, r, n) { for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
                e[o + r] = t[o]; return o; }(R(e, t.length - r), t, r, n); }(this, t, e, r); }, b.prototype.slice = function (t, e) { var r, n = this.length; if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), b.TYPED_ARRAY_SUPPORT)
                (r = this.subarray(t, e)).__proto__ = b.prototype;
            else {
                var o = e - t;
                r = new b(o, void 0);
                for (var i = 0; i < o; ++i)
                    r[i] = this[i + t];
            } return r; }, b.prototype.copy = function (t, e, r, n) { if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r)
                return 0; if (0 === t.length || 0 === this.length)
                return 0; if (e < 0)
                throw new RangeError("targetStart out of bounds"); if (r < 0 || r >= this.length)
                throw new RangeError("sourceStart out of bounds"); if (n < 0)
                throw new RangeError("sourceEnd out of bounds"); n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r); var o, i = n - r; if (this === t && r < e && e < n)
                for (o = i - 1; o >= 0; --o)
                    t[o + e] = this[o + r];
            else if (i < 1e3 || !b.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o)
                    t[o + e] = this[o + r];
            else
                Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e); return i; }, b.prototype.fill = function (t, e, r) { if ("string" == typeof t) {
                if ("string" == typeof e ? (e = 0, r = this.length) : "string" == typeof r && (r = this.length), 1 === t.length) {
                    var n = t.charCodeAt(0);
                    n < 256 && (t = n);
                }
            }
            else
                "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index"); if (r <= e)
                return this; var o; if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                for (o = e; o < r; ++o)
                    this[o] = t;
            else {
                var i = b.isBuffer(t) ? t : new b(t), a = i.length;
                for (o = 0; o < r - e; ++o)
                    this[o + e] = i[o % a];
            } return this; }, b.concat = function (t, e) { if (!w(t))
                throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length)
                return T(null, 0); var r; if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r)
                    e += t[r].length; var n = A(null, e), o = 0; for (r = 0; r < t.length; ++r) {
                var i = t[r];
                if (!b.isBuffer(i))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                i.copy(n, o), o += i.length;
            } return n; }, b.byteLength = C, b.prototype._isBuffer = !0, b.isBuffer = function (t) { return !(null == t || !t._isBuffer); };
            var I, B = function (t) { var e = new b(t); return e.fill(0), e; }, _ = function (t) { return new b(t); }, M = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706], N = function (t) { if (!t)
                throw new Error('"version" cannot be null or undefined'); if (t < 1 || t > 40)
                throw new Error('"version" should be in range from 1 to 40'); return 4 * t + 17; }, S = function (t) { return M[t]; }, x = function (t) { for (var e = 0; 0 !== t;)
                e++, t >>>= 1; return e; }, L = function () { return void 0 !== I; }, U = function (t) { return I(t); };
            function k(t, e, r) { return t(r = { path: e, exports: {}, require: function (t, e) { return function () { throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs"); }(); } }, r.exports), r.exports; }
            var O = k((function (t, e) { e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 }, e.isValid = function (t) { return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4; }, e.from = function (t, r) { if (e.isValid(t))
                return t; try {
                return function (t) { if ("string" != typeof t)
                    throw new Error("Param is not a string"); switch (t.toLowerCase()) {
                    case "l":
                    case "low": return e.L;
                    case "m":
                    case "medium": return e.M;
                    case "q":
                    case "quartile": return e.Q;
                    case "h":
                    case "high": return e.H;
                    default: throw new Error("Unknown EC Level: " + t);
                } }(t);
            }
            catch (t) {
                return r;
            } }; }));
            function Y() { this.buffer = [], this.length = 0; }
            Y.prototype = { get: function (t) { var e = Math.floor(t / 8); return 1 == (this.buffer[e] >>> 7 - t % 8 & 1); }, put: function (t, e) { for (var r = 0; r < e; r++)
                    this.putBit(1 == (t >>> e - r - 1 & 1)); }, getLengthInBits: function () { return this.length; }, putBit: function (t) { var e = Math.floor(this.length / 8); this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++; } };
            var F = Y;
            function D(t) { if (!t || t < 1)
                throw new Error("BitMatrix size must be defined and greater than 0"); this.size = t, this.data = B(t * t), this.reservedBit = B(t * t); }
            D.prototype.set = function (t, e, r, n) { var o = t * this.size + e; this.data[o] = r, n && (this.reservedBit[o] = !0); }, D.prototype.get = function (t, e) { return this.data[t * this.size + e]; }, D.prototype.xor = function (t, e, r) { this.data[t * this.size + e] ^= r; }, D.prototype.isReserved = function (t, e) { return this.reservedBit[t * this.size + e]; };
            var q = D, z = k((function (t, e) { var r = N; e.getRowColCoords = function (t) { if (1 === t)
                return []; for (var e = Math.floor(t / 7) + 2, n = r(t), o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)), i = [n - 7], a = 1; a < e - 1; a++)
                i[a] = i[a - 1] - o; return i.push(6), i.reverse(); }, e.getPositions = function (t) { for (var r = [], n = e.getRowColCoords(t), o = n.length, i = 0; i < o; i++)
                for (var a = 0; a < o; a++)
                    0 === i && 0 === a || 0 === i && a === o - 1 || i === o - 1 && 0 === a || r.push([n[i], n[a]]); return r; }; })), H = N, J = k((function (t, e) { e.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }; function r(t, r, n) { switch (t) {
                case e.Patterns.PATTERN000: return (r + n) % 2 == 0;
                case e.Patterns.PATTERN001: return r % 2 == 0;
                case e.Patterns.PATTERN010: return n % 3 == 0;
                case e.Patterns.PATTERN011: return (r + n) % 3 == 0;
                case e.Patterns.PATTERN100: return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
                case e.Patterns.PATTERN101: return r * n % 2 + r * n % 3 == 0;
                case e.Patterns.PATTERN110: return (r * n % 2 + r * n % 3) % 2 == 0;
                case e.Patterns.PATTERN111: return (r * n % 3 + (r + n) % 2) % 2 == 0;
                default: throw new Error("bad maskPattern:" + t);
            } } e.isValid = function (t) { return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7; }, e.from = function (t) { return e.isValid(t) ? parseInt(t, 10) : void 0; }, e.getPenaltyN1 = function (t) { for (var e = t.size, r = 0, n = 0, o = 0, i = null, a = null, u = 0; u < e; u++) {
                n = o = 0, i = a = null;
                for (var s = 0; s < e; s++) {
                    var f = t.get(u, s);
                    f === i ? n++ : (n >= 5 && (r += n - 5 + 3), i = f, n = 1), (f = t.get(s, u)) === a ? o++ : (o >= 5 && (r += o - 5 + 3), a = f, o = 1);
                }
                n >= 5 && (r += n - 5 + 3), o >= 5 && (r += o - 5 + 3);
            } return r; }, e.getPenaltyN2 = function (t) { for (var e = t.size, r = 0, n = 0; n < e - 1; n++)
                for (var o = 0; o < e - 1; o++) {
                    var i = t.get(n, o) + t.get(n, o + 1) + t.get(n + 1, o) + t.get(n + 1, o + 1);
                    4 !== i && 0 !== i || r++;
                } return 3 * r; }, e.getPenaltyN3 = function (t) { for (var e = t.size, r = 0, n = 0, o = 0, i = 0; i < e; i++) {
                n = o = 0;
                for (var a = 0; a < e; a++)
                    n = n << 1 & 2047 | t.get(i, a), a >= 10 && (1488 === n || 93 === n) && r++, o = o << 1 & 2047 | t.get(a, i), a >= 10 && (1488 === o || 93 === o) && r++;
            } return 40 * r; }, e.getPenaltyN4 = function (t) { for (var e = 0, r = t.data.length, n = 0; n < r; n++)
                e += t.data[n]; return 10 * Math.abs(Math.ceil(100 * e / r / 5) - 10); }, e.applyMask = function (t, e) { for (var n = e.size, o = 0; o < n; o++)
                for (var i = 0; i < n; i++)
                    e.isReserved(i, o) || e.xor(i, o, r(t, i, o)); }, e.getBestMask = function (t, r) { for (var n = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, a = 0; a < n; a++) {
                r(a), e.applyMask(a, t);
                var u = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                e.applyMask(a, t), u < i && (i = u, o = a);
            } return o; }; })), K = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81], Q = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430], j = function (t, e) { switch (e) {
                case O.L: return K[4 * (t - 1) + 0];
                case O.M: return K[4 * (t - 1) + 1];
                case O.Q: return K[4 * (t - 1) + 2];
                case O.H: return K[4 * (t - 1) + 3];
                default: return;
            } }, V = function (t, e) { switch (e) {
                case O.L: return Q[4 * (t - 1) + 0];
                case O.M: return Q[4 * (t - 1) + 1];
                case O.Q: return Q[4 * (t - 1) + 2];
                case O.H: return Q[4 * (t - 1) + 3];
                default: return;
            } }, $ = B(512), W = B(256);
            !function () { for (var t = 1, e = 0; e < 255; e++)
                $[e] = t, W[t] = e, 256 & (t <<= 1) && (t ^= 285); for (e = 255; e < 512; e++)
                $[e] = $[e - 255]; }();
            var X = function (t, e) { return 0 === t || 0 === e ? 0 : $[W[t] + W[e]]; }, G = k((function (t, e) { e.mul = function (t, e) { for (var r = B(t.length + e.length - 1), n = 0; n < t.length; n++)
                for (var o = 0; o < e.length; o++)
                    r[n + o] ^= X(t[n], e[o]); return r; }, e.mod = function (t, e) { for (var r = _(t); r.length - e.length >= 0;) {
                for (var n = r[0], o = 0; o < e.length; o++)
                    r[o] ^= X(e[o], n);
                for (var i = 0; i < r.length && 0 === r[i];)
                    i++;
                r = r.slice(i);
            } return r; }, e.generateECPolynomial = function (t) { for (var r = _([1]), n = 0; n < t; n++)
                r = e.mul(r, [1, (o = n, $[o])]); var o; return r; }; })), Z = l.lW;
            function tt(t) { this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree); }
            tt.prototype.initialize = function (t) { this.degree = t, this.genPoly = G.generateECPolynomial(this.degree); }, tt.prototype.encode = function (t) { if (!this.genPoly)
                throw new Error("Encoder not initialized"); var e = B(this.degree), r = Z.concat([t, e], t.length + this.degree), n = G.mod(r, this.genPoly), o = this.degree - n.length; if (o > 0) {
                var i = B(this.degree);
                return n.copy(i, o), i;
            } return n; };
            var et = tt, rt = function (t) { return !isNaN(t) && t >= 1 && t <= 40; }, nt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+", ot = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (nt = nt.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+", it = new RegExp(nt, "g"), at = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), ut = new RegExp(ot, "g"), st = new RegExp("[0-9]+", "g"), ft = new RegExp("[A-Z $%*+\\-./:]+", "g"), ht = new RegExp("^" + nt + "$"), ct = new RegExp("^[0-9]+$"), lt = new RegExp("^[A-Z0-9 $%*+\\-./:]+$"), gt = { KANJI: it, BYTE_KANJI: at, BYTE: ut, NUMERIC: st, ALPHANUMERIC: ft, testKanji: function (t) { return ht.test(t); }, testNumeric: function (t) { return ct.test(t); }, testAlphanumeric: function (t) { return lt.test(t); } }, dt = k((function (t, e) { e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }, e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }, e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }, e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }, e.MIXED = { bit: -1 }, e.getCharCountIndicator = function (t, e) { if (!t.ccBits)
                throw new Error("Invalid mode: " + t); if (!rt(e))
                throw new Error("Invalid version: " + e); return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]; }, e.getBestModeForData = function (t) { return gt.testNumeric(t) ? e.NUMERIC : gt.testAlphanumeric(t) ? e.ALPHANUMERIC : gt.testKanji(t) ? e.KANJI : e.BYTE; }, e.toString = function (t) { if (t && t.id)
                return t.id; throw new Error("Invalid mode"); }, e.isValid = function (t) { return t && t.bit && t.ccBits; }, e.from = function (t, r) { if (e.isValid(t))
                return t; try {
                return function (t) { if ("string" != typeof t)
                    throw new Error("Param is not a string"); switch (t.toLowerCase()) {
                    case "numeric": return e.NUMERIC;
                    case "alphanumeric": return e.ALPHANUMERIC;
                    case "kanji": return e.KANJI;
                    case "byte": return e.BYTE;
                    default: throw new Error("Unknown mode: " + t);
                } }(t);
            }
            catch (t) {
                return r;
            } }; })), pt = k((function (t, e) { var r = x(7973); function n(t, e) { return dt.getCharCountIndicator(t, e) + 4; } function o(t, e) { var r = 0; return t.forEach((function (t) { var o = n(t.mode, e); r += o + t.getBitsLength(); })), r; } e.from = function (t, e) { return rt(t) ? parseInt(t, 10) : e; }, e.getCapacity = function (t, e, r) { if (!rt(t))
                throw new Error("Invalid QR Code version"); void 0 === r && (r = dt.BYTE); var o = 8 * (S(t) - V(t, e)); if (r === dt.MIXED)
                return o; var i = o - n(r, t); switch (r) {
                case dt.NUMERIC: return Math.floor(i / 10 * 3);
                case dt.ALPHANUMERIC: return Math.floor(i / 11 * 2);
                case dt.KANJI: return Math.floor(i / 13);
                case dt.BYTE:
                default: return Math.floor(i / 8);
            } }, e.getBestVersionForData = function (t, r) { var n, i = O.from(r, O.M); if (w(t)) {
                if (t.length > 1)
                    return function (t, r) { for (var n = 1; n <= 40; n++)
                        if (o(t, n) <= e.getCapacity(n, r, dt.MIXED))
                            return n; }(t, i);
                if (0 === t.length)
                    return 1;
                n = t[0];
            }
            else
                n = t; return function (t, r, n) { for (var o = 1; o <= 40; o++)
                if (r <= e.getCapacity(o, n, t))
                    return o; }(n.mode, n.getLength(), i); }, e.getEncodedBits = function (t) { if (!rt(t) || t < 7)
                throw new Error("Invalid QR Code version"); for (var e = t << 12; x(e) - r >= 0;)
                e ^= 7973 << x(e) - r; return t << 12 | e; }; })), vt = x(1335);
            function yt(t) { this.mode = dt.NUMERIC, this.data = t.toString(); }
            yt.getBitsLength = function (t) { return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0); }, yt.prototype.getLength = function () { return this.data.length; }, yt.prototype.getBitsLength = function () { return yt.getBitsLength(this.data.length); }, yt.prototype.write = function (t) { var e, r, n; for (e = 0; e + 3 <= this.data.length; e += 3)
                r = this.data.substr(e, 3), n = parseInt(r, 10), t.put(n, 10); var o = this.data.length - e; o > 0 && (r = this.data.substr(e), n = parseInt(r, 10), t.put(n, 3 * o + 1)); };
            var wt = yt, mt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
            function bt(t) { this.mode = dt.ALPHANUMERIC, this.data = t; }
            bt.getBitsLength = function (t) { return 11 * Math.floor(t / 2) + t % 2 * 6; }, bt.prototype.getLength = function () { return this.data.length; }, bt.prototype.getBitsLength = function () { return bt.getBitsLength(this.data.length); }, bt.prototype.write = function (t) { var e; for (e = 0; e + 2 <= this.data.length; e += 2) {
                var r = 45 * mt.indexOf(this.data[e]);
                r += mt.indexOf(this.data[e + 1]), t.put(r, 11);
            } this.data.length % 2 && t.put(mt.indexOf(this.data[e]), 6); };
            var Et = bt;
            function Tt(t) { this.mode = dt.BYTE, this.data = _(t); }
            Tt.getBitsLength = function (t) { return 8 * t; }, Tt.prototype.getLength = function () { return this.data.length; }, Tt.prototype.getBitsLength = function () { return Tt.getBitsLength(this.data.length); }, Tt.prototype.write = function (t) { for (var e = 0, r = this.data.length; e < r; e++)
                t.put(this.data[e], 8); };
            var At = Tt;
            function Pt(t) { this.mode = dt.KANJI, this.data = t; }
            Pt.getBitsLength = function (t) { return 13 * t; }, Pt.prototype.getLength = function () { return this.data.length; }, Pt.prototype.getBitsLength = function () { return Pt.getBitsLength(this.data.length); }, Pt.prototype.write = function (t) { var e; for (e = 0; e < this.data.length; e++) {
                var r = U(this.data[e]);
                if (r >= 33088 && r <= 40956)
                    r -= 33088;
                else {
                    if (!(r >= 57408 && r <= 60351))
                        throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    r -= 49472;
                }
                r = 192 * (r >>> 8 & 255) + (255 & r), t.put(r, 13);
            } };
            var Rt = Pt, Ct = k((function (t) { var e = { single_source_shortest_paths: function (t, r, n) { var o = {}, i = {}; i[r] = 0; var a, u, s, f, h, c, l, g = e.PriorityQueue.make(); for (g.push(r, 0); !g.empty();)
                    for (s in u = (a = g.pop()).value, f = a.cost, h = t[u] || {})
                        h.hasOwnProperty(s) && (c = f + h[s], l = i[s], (void 0 === i[s] || l > c) && (i[s] = c, g.push(s, c), o[s] = u)); if (void 0 !== n && void 0 === i[n]) {
                    var d = ["Could not find a path from ", r, " to ", n, "."].join("");
                    throw new Error(d);
                } return o; }, extract_shortest_path_from_predecessor_list: function (t, e) { for (var r = [], n = e; n;)
                    r.push(n), n = t[n]; return r.reverse(), r; }, find_path: function (t, r, n) { var o = e.single_source_shortest_paths(t, r, n); return e.extract_shortest_path_from_predecessor_list(o, n); }, PriorityQueue: { make: function (t) { var r, n = e.PriorityQueue, o = {}; for (r in t = t || {}, n)
                        n.hasOwnProperty(r) && (o[r] = n[r]); return o.queue = [], o.sorter = t.sorter || n.default_sorter, o; }, default_sorter: function (t, e) { return t.cost - e.cost; }, push: function (t, e) { var r = { value: t, cost: e }; this.queue.push(r), this.queue.sort(this.sorter); }, pop: function () { return this.queue.shift(); }, empty: function () { return 0 === this.queue.length; } } }; t.exports = e; })), It = k((function (t, e) { function r(t) { return unescape(encodeURIComponent(t)).length; } function n(t, e, r) { for (var n, o = []; null !== (n = t.exec(r));)
                o.push({ data: n[0], index: n.index, mode: e, length: n[0].length }); return o; } function o(t) { var e, r, o = n(gt.NUMERIC, dt.NUMERIC, t), i = n(gt.ALPHANUMERIC, dt.ALPHANUMERIC, t); return L() ? (e = n(gt.BYTE, dt.BYTE, t), r = n(gt.KANJI, dt.KANJI, t)) : (e = n(gt.BYTE_KANJI, dt.BYTE, t), r = []), o.concat(i, e, r).sort((function (t, e) { return t.index - e.index; })).map((function (t) { return { data: t.data, mode: t.mode, length: t.length }; })); } function i(t, e) { switch (e) {
                case dt.NUMERIC: return wt.getBitsLength(t);
                case dt.ALPHANUMERIC: return Et.getBitsLength(t);
                case dt.KANJI: return Rt.getBitsLength(t);
                case dt.BYTE: return At.getBitsLength(t);
            } } function a(t, e) { var r, n = dt.getBestModeForData(t); if ((r = dt.from(e, n)) !== dt.BYTE && r.bit < n.bit)
                throw new Error('"' + t + '" cannot be encoded with mode ' + dt.toString(r) + ".\n Suggested mode is: " + dt.toString(n)); switch (r !== dt.KANJI || L() || (r = dt.BYTE), r) {
                case dt.NUMERIC: return new wt(t);
                case dt.ALPHANUMERIC: return new Et(t);
                case dt.KANJI: return new Rt(t);
                case dt.BYTE: return new At(t);
            } } e.fromArray = function (t) { return t.reduce((function (t, e) { return "string" == typeof e ? t.push(a(e, null)) : e.data && t.push(a(e.data, e.mode)), t; }), []); }, e.fromString = function (t, n) { for (var a = function (t, e) { for (var r = {}, n = { start: {} }, o = ["start"], a = 0; a < t.length; a++) {
                for (var u = t[a], s = [], f = 0; f < u.length; f++) {
                    var h = u[f], c = "" + a + f;
                    s.push(c), r[c] = { node: h, lastCount: 0 }, n[c] = {};
                    for (var l = 0; l < o.length; l++) {
                        var g = o[l];
                        r[g] && r[g].node.mode === h.mode ? (n[g][c] = i(r[g].lastCount + h.length, h.mode) - i(r[g].lastCount, h.mode), r[g].lastCount += h.length) : (r[g] && (r[g].lastCount = h.length), n[g][c] = i(h.length, h.mode) + 4 + dt.getCharCountIndicator(h.mode, e));
                    }
                }
                o = s;
            } for (l = 0; l < o.length; l++)
                n[o[l]].end = 0; return { map: n, table: r }; }(function (t) { for (var e = [], n = 0; n < t.length; n++) {
                var o = t[n];
                switch (o.mode) {
                    case dt.NUMERIC:
                        e.push([o, { data: o.data, mode: dt.ALPHANUMERIC, length: o.length }, { data: o.data, mode: dt.BYTE, length: o.length }]);
                        break;
                    case dt.ALPHANUMERIC:
                        e.push([o, { data: o.data, mode: dt.BYTE, length: o.length }]);
                        break;
                    case dt.KANJI:
                        e.push([o, { data: o.data, mode: dt.BYTE, length: r(o.data) }]);
                        break;
                    case dt.BYTE: e.push([{ data: o.data, mode: dt.BYTE, length: r(o.data) }]);
                }
            } return e; }(o(t, L())), n), u = Ct.find_path(a.map, "start", "end"), s = [], f = 1; f < u.length - 1; f++)
                s.push(a.table[u[f]].node); return e.fromArray(s.reduce((function (t, e) { var r = t.length - 1 >= 0 ? t[t.length - 1] : null; return r && r.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t); }), [])); }, e.rawSplit = function (t) { return e.fromArray(o(t, L())); }; }));
            function Bt(t, e, r) { var n, o, i = t.size, a = function (t, e) { for (var r = t.bit << 3 | e, n = r << 10; x(n) - vt >= 0;)
                n ^= 1335 << x(n) - vt; return 21522 ^ (r << 10 | n); }(e, r); for (n = 0; n < 15; n++)
                o = 1 == (a >> n & 1), n < 6 ? t.set(n, 8, o, !0) : n < 8 ? t.set(n + 1, 8, o, !0) : t.set(i - 15 + n, 8, o, !0), n < 8 ? t.set(8, i - n - 1, o, !0) : n < 9 ? t.set(8, 15 - n - 1 + 1, o, !0) : t.set(8, 15 - n - 1, o, !0); t.set(i - 8, 8, 1, !0); }
            function _t(t, e, r, n) { var o; if (w(t))
                o = It.fromArray(t);
            else {
                if ("string" != typeof t)
                    throw new Error("Invalid data");
                var i = e;
                if (!i) {
                    var a = It.rawSplit(t);
                    i = pt.getBestVersionForData(a, r);
                }
                o = It.fromString(t, i || 40);
            } var u = pt.getBestVersionForData(o, r); if (!u)
                throw new Error("The amount of data is too big to be stored in a QR Code"); if (e) {
                if (e < u)
                    throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + u + ".\n");
            }
            else
                e = u; var s = function (t, e, r) { var n = new F; r.forEach((function (e) { n.put(e.mode.bit, 4), n.put(e.getLength(), dt.getCharCountIndicator(e.mode, t)), e.write(n); })); var o = 8 * (S(t) - V(t, e)); for (n.getLengthInBits() + 4 <= o && n.put(0, 4); n.getLengthInBits() % 8 != 0;)
                n.putBit(0); for (var i = (o - n.getLengthInBits()) / 8, a = 0; a < i; a++)
                n.put(a % 2 ? 17 : 236, 8); return function (t, e, r) { for (var n = S(e), o = n - V(e, r), i = j(e, r), a = i - n % i, u = Math.floor(n / i), s = Math.floor(o / i), f = s + 1, h = u - s, c = new et(h), l = 0, g = new Array(i), d = new Array(i), p = 0, v = _(t.buffer), y = 0; y < i; y++) {
                var w = y < a ? s : f;
                g[y] = v.slice(l, l + w), d[y] = c.encode(g[y]), l += w, p = Math.max(p, w);
            } var m, b, E = B(n), T = 0; for (m = 0; m < p; m++)
                for (b = 0; b < i; b++)
                    m < g[b].length && (E[T++] = g[b][m]); for (m = 0; m < h; m++)
                for (b = 0; b < i; b++)
                    E[T++] = d[b][m]; return E; }(n, t, e); }(e, r, o), f = N(e), h = new q(f); return function (t, e) { for (var r = t.size, n = function (t) { var e = H(t); return [[0, 0], [e - 7, 0], [0, e - 7]]; }(e), o = 0; o < n.length; o++)
                for (var i = n[o][0], a = n[o][1], u = -1; u <= 7; u++)
                    if (!(i + u <= -1 || r <= i + u))
                        for (var s = -1; s <= 7; s++)
                            a + s <= -1 || r <= a + s || (u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 2 && u <= 4 && s >= 2 && s <= 4 ? t.set(i + u, a + s, !0, !0) : t.set(i + u, a + s, !1, !0)); }(h, e), function (t) { for (var e = t.size, r = 8; r < e - 8; r++) {
                var n = r % 2 == 0;
                t.set(r, 6, n, !0), t.set(6, r, n, !0);
            } }(h), function (t, e) { for (var r = z.getPositions(e), n = 0; n < r.length; n++)
                for (var o = r[n][0], i = r[n][1], a = -2; a <= 2; a++)
                    for (var u = -2; u <= 2; u++)
                        -2 === a || 2 === a || -2 === u || 2 === u || 0 === a && 0 === u ? t.set(o + a, i + u, !0, !0) : t.set(o + a, i + u, !1, !0); }(h, e), Bt(h, r, 0), e >= 7 && function (t, e) { for (var r, n, o, i = t.size, a = pt.getEncodedBits(e), u = 0; u < 18; u++)
                r = Math.floor(u / 3), n = u % 3 + i - 8 - 3, o = 1 == (a >> u & 1), t.set(r, n, o, !0), t.set(n, r, o, !0); }(h, e), function (t, e) { for (var r = t.size, n = -1, o = r - 1, i = 7, a = 0, u = r - 1; u > 0; u -= 2)
                for (6 === u && u--;;) {
                    for (var s = 0; s < 2; s++)
                        if (!t.isReserved(o, u - s)) {
                            var f = !1;
                            a < e.length && (f = 1 == (e[a] >>> i & 1)), t.set(o, u - s, f), -1 == --i && (a++, i = 7);
                        }
                    if ((o += n) < 0 || r <= o) {
                        o -= n, n = -n;
                        break;
                    }
                } }(h, s), isNaN(n) && (n = J.getBestMask(h, Bt.bind(null, h, r))), J.applyMask(n, h), Bt(h, r, n), { modules: h, version: e, errorCorrectionLevel: r, maskPattern: n, segments: o }; }
            var Mt = function (t, e) { if (void 0 === t || "" === t)
                throw new Error("No input text"); var r, n, o = O.M; return void 0 !== e && (o = O.from(e.errorCorrectionLevel, O.M), r = pt.from(e.version), n = J.from(e.maskPattern), e.toSJISFunc && function (t) { if ("function" != typeof t)
                throw new Error('"toSJISFunc" is not a valid function.'); I = t; }(e.toSJISFunc)), _t(t, r, o, n); }, Nt = k((function (t, e) { function r(t) { if ("number" == typeof t && (t = t.toString()), "string" != typeof t)
                throw new Error("Color should be defined as hex string"); var e = t.slice().replace("#", "").split(""); if (e.length < 3 || 5 === e.length || e.length > 8)
                throw new Error("Invalid hex color: " + t); 3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function (t) { return [t, t]; })))), 6 === e.length && e.push("F", "F"); var r = parseInt(e.join(""), 16); return { r: r >> 24 & 255, g: r >> 16 & 255, b: r >> 8 & 255, a: 255 & r, hex: "#" + e.slice(0, 6).join("") }; } e.getOptions = function (t) { t || (t = {}), t.color || (t.color = {}); var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin, n = t.width && t.width >= 21 ? t.width : void 0, o = t.scale || 4; return { width: n, scale: n ? 4 : o, margin: e, color: { dark: r(t.color.dark || "#000000ff"), light: r(t.color.light || "#ffffffff") }, type: t.type, rendererOpts: t.rendererOpts || {} }; }, e.getScale = function (t, e) { return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale; }, e.getImageWidth = function (t, r) { var n = e.getScale(t, r); return Math.floor((t + 2 * r.margin) * n); }, e.qrToImageData = function (t, r, n) { for (var o = r.modules.size, i = r.modules.data, a = e.getScale(o, n), u = Math.floor((o + 2 * n.margin) * a), s = n.margin * a, f = [n.color.light, n.color.dark], h = 0; h < u; h++)
                for (var c = 0; c < u; c++) {
                    var l = 4 * (h * u + c), g = n.color.light;
                    h >= s && c >= s && h < u - s && c < u - s && (g = f[i[Math.floor((h - s) / a) * o + Math.floor((c - s) / a)] ? 1 : 0]), t[l++] = g.r, t[l++] = g.g, t[l++] = g.b, t[l] = g.a;
                } }; })), St = k((function (t, e) { e.render = function (t, e, r) { var n = r, o = e; void 0 !== n || e && e.getContext || (n = e, e = void 0), e || (o = function () { try {
                return document.createElement("canvas");
            }
            catch (t) {
                throw new Error("You need to specify a canvas element");
            } }()), n = Nt.getOptions(n); var i = Nt.getImageWidth(t.modules.size, n), a = o.getContext("2d"), u = a.createImageData(i, i); return Nt.qrToImageData(u.data, t, n), function (t, e, r) { t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = r, e.width = r, e.style.height = r + "px", e.style.width = r + "px"; }(a, o, i), a.putImageData(u, 0, 0), o; }, e.renderToDataURL = function (t, r, n) { var o = n; void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {}); var i = e.render(t, r, o), a = o.type || "image/png", u = o.rendererOpts || {}; return i.toDataURL(a, u.quality); }; }));
            function xt(t, e) { var r = t.a / 255, n = e + '="' + t.hex + '"'; return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n; }
            function Lt(t, e, r) { var n = t + e; return void 0 !== r && (n += " " + r), n; }
            function Ut(t, e, r, n, o) { var i = [].slice.call(arguments, 1), a = i.length, u = "function" == typeof i[a - 1]; if (!u && !v())
                throw new Error("Callback required as last argument"); if (!u) {
                if (a < 1)
                    throw new Error("Too few arguments provided");
                return 1 === a ? (r = e, e = n = void 0) : 2 !== a || e.getContext || (n = r, r = e, e = void 0), new Promise((function (o, i) { try {
                    var a = Mt(r, n);
                    o(t(a, e, n));
                }
                catch (t) {
                    i(t);
                } }));
            } if (a < 2)
                throw new Error("Too few arguments provided"); 2 === a ? (o = r, r = e, e = n = void 0) : 3 === a && (e.getContext && void 0 === o ? (o = n, n = void 0) : (o = n, n = r, r = e, e = void 0)); try {
                var s = Mt(r, n);
                o(null, t(s, e, n));
            }
            catch (t) {
                o(t);
            } }
            var kt = { create: Mt, toCanvas: Ut.bind(null, St.render), toDataURL: Ut.bind(null, St.renderToDataURL), toString: Ut.bind(null, (function (t, e, r) { return function (t, e, r) { var n = Nt.getOptions(e), o = t.modules.size, i = t.modules.data, a = o + 2 * n.margin, u = n.color.light.a ? "<path " + xt(n.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "", s = "<path " + xt(n.color.dark, "stroke") + ' d="' + function (t, e, r) { for (var n = "", o = 0, i = !1, a = 0, u = 0; u < t.length; u++) {
                    var s = Math.floor(u % e), f = Math.floor(u / e);
                    s || i || (i = !0), t[u] ? (a++, u > 0 && s > 0 && t[u - 1] || (n += i ? Lt("M", s + r, .5 + f + r) : Lt("m", o, 0), o = 0, i = !1), s + 1 < e && t[u + 1] || (n += Lt("h", a), a = 0)) : o++;
                } return n; }(i, o, n.margin) + '"/>', f = 'viewBox="0 0 ' + a + " " + a + '"', h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + u + s + "</svg>\n"; return "function" == typeof r && r(null, h), h; }(t, r); })) }, Ot = new o.k("TOTP"), Yt = function () { function t(t) { (0, n.r)(this, t), this.inputProps = { autoFocus: !0 }, this.handleAuthStateChange = h.d, this.headerText = s.T.TOTP_HEADER_TEXT, this.issuer = s.T.TOTP_ISSUER, this.code = null, this.setupMessage = null, this.qrCodeInput = null, this.loading = !1; } return t.prototype.componentWillLoad = function () { this.setup(); }, t.prototype.buildOtpAuthPath = function (t, e, r) { return "otpauth://totp/" + e + ":" + t.username + "?secret=" + r + "&issuer=" + e; }, t.prototype.onTOTPEvent = function (t, e, r) { return g(this, void 0, void 0, (function () { return d(this, (function (n) { switch (n.label) {
                case 0: return Ot.debug("on totp event", t, e), t !== f.S || e !== f.i ? [3, 2] : [4, (0, c.c)(r, this.handleAuthStateChange)];
                case 1: n.sent(), n.label = 2;
                case 2: return [2];
            } })); })); }, t.prototype.handleTotpInputChange = function (t) { this.setupMessage = null, this.qrCodeInput = t.target.value; }, t.prototype.generateQRCode = function (t) { return g(this, void 0, void 0, (function () { var e, r; return d(this, (function (n) { switch (n.label) {
                case 0: return n.trys.push([0, 2, , 3]), e = this, [4, kt.toDataURL(t)];
                case 1: return e.qrCodeImageSource = n.sent(), [3, 3];
                case 2: return r = n.sent(), (0, h.a)(r), [3, 3];
                case 3: return [2];
            } })); })); }, t.prototype.setup = function () { return g(this, void 0, void 0, (function () { var t, e, r; return d(this, (function (n) { switch (n.label) {
                case 0:
                    if (this.setupMessage = null, t = encodeURI(i.o.get(this.issuer)), !u.g || "function" != typeof u.g.setupTOTP)
                        throw new Error(f.N);
                    this.loading = !0, n.label = 1;
                case 1: return n.trys.push([1, 3, 4, 5]), [4, u.g.setupTOTP(this.user)];
                case 2: return e = n.sent(), Ot.debug("secret key", e), this.code = this.buildOtpAuthPath(this.user, t, e), this.generateQRCode(this.code), [3, 5];
                case 3: return r = n.sent(), (0, h.a)(r), Ot.debug(i.o.get(s.T.TOTP_SETUP_FAILURE), r), [3, 5];
                case 4: return this.loading = !1, [7];
                case 5: return [2];
            } })); })); }, t.prototype.verifyTotpToken = function (t) { return g(this, void 0, void 0, (function () { var e, r; return d(this, (function (n) { switch (n.label) {
                case 0:
                    if (t && t.preventDefault(), !this.qrCodeInput)
                        return Ot.debug("No TOTP Code provided"), [2];
                    if (e = this.user, !u.g || "function" != typeof u.g.verifyTotpToken || "function" != typeof u.g.setPreferredMFA)
                        throw new Error(f.N);
                    n.label = 1;
                case 1: return n.trys.push([1, 5, , 6]), [4, u.g.verifyTotpToken(e, this.qrCodeInput)];
                case 2: return n.sent(), [4, u.g.setPreferredMFA(e, a.M.TOTP)];
                case 3: return n.sent(), this.setupMessage = i.o.get(s.T.TOTP_SUCCESS_MESSAGE), Ot.debug(i.o.get(s.T.TOTP_SUCCESS_MESSAGE)), [4, this.onTOTPEvent(f.S, f.i, e)];
                case 4: return n.sent(), [3, 6];
                case 5: return r = n.sent(), this.setupMessage = i.o.get(s.T.TOTP_SETUP_FAILURE), Ot.error(r), [3, 6];
                case 6: return [2];
            } })); })); }, t.prototype.render = function () { var t = this; return (0, n.h)(n.H, null, (0, n.h)("amplify-form-section", { headerText: i.o.get(this.headerText), submitButtonText: i.o.get(s.T.TOTP_SUBMIT_BUTTON_TEXT), handleSubmit: function (e) { return t.verifyTotpToken(e); }, loading: this.loading }, (0, n.h)("div", { class: "totp-setup" }, (0, n.h)("img", { src: this.qrCodeImageSource, alt: i.o.get(s.T.QR_CODE_ALT) }), (0, n.h)("amplify-form-field", { label: i.o.get(s.T.TOTP_LABEL), inputProps: this.inputProps, fieldId: "totpCode", name: "totpCode", handleInputChange: function (e) { return t.handleTotpInputChange(e); } })))); }, t; }();
            Yt.style = ".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}";
        }, 7958: function (t, e, r) {
            "use strict";
            r.d(e, { c: function () { return g; }, h: function () { return d; } });
            var n = r(5069), o = r(9222), i = r(5573), a = r(5914), u = r(5489), s = r(7029), f = r(8396), h = function (t, e, r, n) { return new (r || (r = Promise))((function (o, i) { function a(t) { try {
                s(n.next(t));
            }
            catch (t) {
                i(t);
            } } function u(t) { try {
                s(n.throw(t));
            }
            catch (t) {
                i(t);
            } } function s(t) { var e; t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) { t(e); }))).then(a, u); } s((n = n.apply(t, e || [])).next()); })); }, c = function (t, e) { var r, n, o, i, a = { label: 0, sent: function () { if (1 & o[0])
                    throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function u(i) { return function (u) { return function (i) { if (r)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done)
                        return o;
                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                        case 0:
                        case 1:
                            o = i;
                            break;
                        case 4: return a.label++, { value: i[1], done: !1 };
                        case 5:
                            a.label++, n = i[1], i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                a.label = i[1];
                                break;
                            }
                            if (6 === i[0] && a.label < o[1]) {
                                a.label = o[1], o = i;
                                break;
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(i);
                                break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    i = e.call(t, a);
                }
                catch (t) {
                    i = [6, t], n = 0;
                }
                finally {
                    r = o = 0;
                } if (5 & i[0])
                throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, u]); }; } }, l = new n.k("auth-helpers");
            function g(t, e) { return h(this, void 0, void 0, (function () { var r, n, u; return c(this, (function (h) { switch (h.label) {
                case 0:
                    if (!a.g || "function" != typeof a.g.verifiedContact)
                        throw new Error(s.N);
                    h.label = 1;
                case 1: return h.trys.push([1, 3, , 4]), [4, a.g.verifiedContact(t)];
                case 2: return r = h.sent(), !(0, o.xb)(r.verified) || (0, o.xb)(r.unverified) ? e(i.A.SignedIn, t) : (n = Object.assign(t, r), e(i.A.VerifyContact, n)), [3, 4];
                case 3: return u = h.sent(), (0, f.a)(u), [3, 4];
                case 4: return [2];
            } })); })); }
            var d = function (t, e, r) { return h(void 0, void 0, void 0, (function () { var n, o; return c(this, (function (h) { switch (h.label) {
                case 0:
                    if (!a.g || "function" != typeof a.g.signIn)
                        throw new Error(s.N);
                    h.label = 1;
                case 1: return h.trys.push([1, 9, , 10]), [4, a.g.signIn(t, e)];
                case 2: return n = h.sent(), l.debug(n), n.challengeName !== i.C.SMSMFA && n.challengeName !== i.C.SoftwareTokenMFA ? [3, 3] : (l.debug("confirm user with " + n.challengeName), r(i.A.ConfirmSignIn, n), [3, 8]);
                case 3: return n.challengeName !== i.C.NewPasswordRequired ? [3, 4] : (l.debug("require new password", n.challengeParam), r(i.A.ResetPassword, n), [3, 8]);
                case 4: return n.challengeName !== i.C.MFASetup ? [3, 5] : (l.debug("TOTP setup", n.challengeParam), r(i.A.TOTPSetup, n), [3, 8]);
                case 5: return n.challengeName === i.C.CustomChallenge && n.challengeParam && "true" === n.challengeParam.trigger ? (l.debug("custom challenge", n.challengeParam), r(i.A.CustomConfirmSignIn, n), [3, 8]) : [3, 6];
                case 6: return [4, g(n, r)];
                case 7: h.sent(), h.label = 8;
                case 8: return [3, 10];
                case 9: return "UserNotConfirmedException" === (o = h.sent()).code ? (l.debug("the user is not confirmed"), r(i.A.ConfirmSignUp, { username: t })) : "PasswordResetRequiredException" === o.code ? (l.debug("the user requires a new password"), r(i.A.ForgotPassword, { username: t })) : "InvalidParameterException" === o.code && "" === e && (l.debug("Password cannot be empty"), o.message = u.T.EMPTY_PASSWORD), (0, f.a)(o), [3, 10];
                case 10: return [2];
            } })); })); };
        } }]);
