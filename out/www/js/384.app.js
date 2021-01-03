"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[384], { 8384: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, { amplify_select_mfa_type: function () { return c; } });
            var i = n(3922), s = n(5069), r = n(3139), a = n(5573), o = n(5914), u = n(5489), l = n(7029), h = new s.k("SelectMFAType"), c = function () { function e(e) { var t = this; (0, i.r)(this, e), this.handleSubmit = function (e) { return t.verify(e); }, this.TOTPSetup = !1, this.selectMessage = null, this.MFAMethod = null, this.isTOTP = !1, this.isNoMFA = !1, this.isSMS = !1, this.loading = !1; } return e.prototype.handleRadioButtonChange = function (e) { this.TOTPSetup = !1, this.selectMessage = null, this.isNoMFA = !1, this.isTOTP = !1, this.isSMS = !1; var t = e.target, n = t.value, i = t.type, s = t.checked, r = ["radio", "checkbox"].includes(i); n === a.M.SMS && r && (this.isSMS = s), n === a.M.TOTP && r && (this.isTOTP = s), n === a.M.NOMFA && r && (this.isNoMFA = s); }, e.prototype.verify = function (e) { return t = this, n = void 0, s = function () { var t, n, i, s; return function (e, t) { var n, i, s, r, a = { label: 0, sent: function () { if (1 & s[0])
                    throw s[1]; return s[1]; }, trys: [], ops: [] }; return r = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (r[Symbol.iterator] = function () { return this; }), r; function o(r) { return function (o) { return function (r) { if (n)
                throw new TypeError("Generator is already executing."); for (; a;)
                try {
                    if (n = 1, i && (s = 2 & r[0] ? i.return : r[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, r[1])).done)
                        return s;
                    switch (i = 0, s && (r = [2 & r[0], s.value]), r[0]) {
                        case 0:
                        case 1:
                            s = r;
                            break;
                        case 4: return a.label++, { value: r[1], done: !1 };
                        case 5:
                            a.label++, i = r[1], r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((s = (s = a.trys).length > 0 && s[s.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === r[0] && (!s || r[1] > s[0] && r[1] < s[3])) {
                                a.label = r[1];
                                break;
                            }
                            if (6 === r[0] && a.label < s[1]) {
                                a.label = s[1], s = r;
                                break;
                            }
                            if (s && a.label < s[2]) {
                                a.label = s[2], a.ops.push(r);
                                break;
                            }
                            s[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    r = t.call(e, a);
                }
                catch (e) {
                    r = [6, e], i = 0;
                }
                finally {
                    n = s = 0;
                } if (5 & r[0])
                throw r[1]; return { value: r[0] ? r[1] : void 0, done: !0 }; }([r, o]); }; } }(this, (function (c) { switch (c.label) {
                case 0:
                    if (e && e.preventDefault(), h.debug("MFA Type Values", { TOTP: this.isTOTP, SMS: this.isSMS, "No MFA": this.isNoMFA }), this.isTOTP ? this.MFAMethod = a.M.TOTP : this.isSMS ? this.MFAMethod = a.M.SMS : this.isNoMFA && (this.MFAMethod = a.M.NOMFA), t = this.authData, !o.g || "function" != typeof o.g.setPreferredMFA)
                        throw new Error(l.N);
                    this.loading = !0, c.label = 1;
                case 1: return c.trys.push([1, 3, 4, 5]), [4, o.g.setPreferredMFA(t, this.MFAMethod)];
                case 2: return n = c.sent(), h.debug("Set Preferred MFA Succeeded", n), this.selectMessage = r.o.get(u.T.SUCCESS_MFA_TYPE) + " " + this.MFAMethod, [3, 5];
                case 3: return i = c.sent(), (s = i.message) === l.f || s === l.g ? (this.TOTPSetup = !0, this.selectMessage = r.o.get(u.T.SETUP_TOTP_REQUIRED)) : (h.debug("Set Preferred MFA failed", i), this.selectMessage = r.o.get(u.T.UNABLE_TO_SETUP_MFA_AT_THIS_TIME)), [3, 5];
                case 4: return this.loading = !1, [7];
                case 5: return [2];
            } })); }, new ((i = void 0) || (i = Promise))((function (e, r) { function a(e) { try {
                u(s.next(e));
            }
            catch (e) {
                r(e);
            } } function o(e) { try {
                u(s.throw(e));
            }
            catch (e) {
                r(e);
            } } function u(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function (e) { e(n); }))).then(a, o); } u((s = s.apply(t, n || [])).next()); })); var t, n, i, s; }, e.prototype.contentBuilder = function () { var e = this; if (!this.MFATypes || Object.keys(this.MFATypes).length < 2)
                return h.debug(r.o.get(u.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE)), (0, i.h)("div", null, (0, i.h)("a", null, r.o.get(u.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE))); var t = this.MFATypes, n = t.SMS, s = t.TOTP, a = t.Optional; return (0, i.h)("amplify-form-section", { submitButtonText: r.o.get(u.T.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT), headerText: r.o.get(u.T.SELECT_MFA_TYPE_HEADER_TEXT), handleSubmit: function (t) { return e.handleSubmit(t); }, loading: this.loading }, n ? (0, i.h)("amplify-radio-button", { key: "sms", name: "MFAType", value: "SMS", label: "SMS", handleInputChange: function (t) { return e.handleRadioButtonChange(t); } }) : null, s ? (0, i.h)("amplify-radio-button", { key: "totp", name: "MFAType", value: "TOTP", label: "TOTP", handleInputChange: function (t) { return e.handleRadioButtonChange(t); } }) : null, a ? (0, i.h)("amplify-radio-button", { key: "noMFA", name: "MFAType", value: "NOMFA", label: "No MFA", handleInputChange: function (t) { return e.handleRadioButtonChange(t); } }) : null); }, e.prototype.render = function () { return (0, i.h)("div", null, this.contentBuilder(), this.TOTPSetup ? (0, i.h)("amplify-totp-setup", { user: this.authData }) : null); }, e; }();
        } }]);
