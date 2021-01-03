"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[208], { 5208: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, { amplify_confirm_sign_in: function () { return m; }, amplify_confirm_sign_up: function () { return g; }, amplify_forgot_password: function () { return y; }, amplify_require_new_password: function () { return F; }, amplify_sign_in: function () { return v; }, amplify_sign_up: function () { return w; }, amplify_verify_contact: function () { return A; } });
            var r = n(3922), i = n(3139), a = n(5069), s = n(9222), o = n(5573), u = n(5914), h = n(5489), l = n(7029), d = n(8396), p = n(7958), c = function (e, t, n, r) { return new (n || (n = Promise))((function (i, a) { function s(e) { try {
                u(r.next(e));
            }
            catch (e) {
                a(e);
            } } function o(e) { try {
                u(r.throw(e));
            }
            catch (e) {
                a(e);
            } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, o); } u((r = r.apply(e, t || [])).next()); })); }, f = function (e, t) { var n, r, i, a, s = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function o(a) { return function (o) { return function (a) { if (n)
                throw new TypeError("Generator is already executing."); for (; s;)
                try {
                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
                        return i;
                    switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4: return s.label++, { value: a[1], done: !1 };
                        case 5:
                            s.label++, r = a[1], a = [0];
                            continue;
                        case 7:
                            a = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                s.label = a[1];
                                break;
                            }
                            if (6 === a[0] && s.label < i[1]) {
                                s.label = i[1], i = a;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(a);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    a = t.call(e, s);
                }
                catch (e) {
                    a = [6, e], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & a[0])
                throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, o]); }; } }, m = function () { function e(e) { var t = this; (0, r.r)(this, e), this.handleSubmit = function (e) { return t.confirm(e); }, this.headerText = h.T.CONFIRM_SMS_CODE, this.submitButtonText = h.T.CONFIRM, this.handleAuthStateChange = d.d, this.formFields = [{ type: "code", required: !0, handleInputChange: function (e) { return t.handleCodeChange(e); } }], this.mfaOption = o.M.SMS, this.loading = !1; } return e.prototype.componentWillLoad = function () { this.user && this.user.challengeName === o.C.SoftwareTokenMFA && (this.mfaOption = o.M.TOTP, this.headerText === h.T.CONFIRM_SMS_CODE && (this.headerText = h.T.CONFIRM_TOTP_CODE)); }, e.prototype.handleCodeChange = function (e) { this.code = e.target.value; }, e.prototype.confirm = function (e) { return c(this, void 0, void 0, (function () { var t, n; return f(this, (function (r) { switch (r.label) {
                case 0:
                    if (e && e.preventDefault(), t = this.user.challengeName === o.C.SoftwareTokenMFA ? o.C.SoftwareTokenMFA : null, !u.g || "function" != typeof u.g.confirmSignIn)
                        throw new Error(l.N);
                    this.loading = !0, r.label = 1;
                case 1: return r.trys.push([1, 4, 5, 6]), [4, u.g.confirmSignIn(this.user, this.code, t)];
                case 2: return r.sent(), [4, (0, p.c)(this.user, this.handleAuthStateChange)];
                case 3: return r.sent(), [3, 6];
                case 4: return n = r.sent(), (0, d.a)(n), [3, 6];
                case 5: return this.loading = !1, [7];
                case 6: return [2];
            } })); })); }, e.prototype.render = function () { var e = this; return (0, r.h)(r.H, null, (0, r.h)("amplify-form-section", { headerText: i.o.get(this.headerText), handleSubmit: this.handleSubmit, submitButtonText: i.o.get(this.submitButtonText), loading: this.loading, secondaryFooterContent: (0, r.h)("span", null, (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.SignIn); } }, i.o.get(h.T.BACK_TO_SIGN_IN))) }, (0, r.h)("amplify-auth-fields", { formFields: this.formFields }))); }, e; }(), g = function () { function e(e) { var t = this; (0, r.r)(this, e), this.handleSubmit = function (e) { return t.confirmSignUp(e); }, this.headerText = h.T.CONFIRM_SIGN_UP_HEADER_TEXT, this.submitButtonText = h.T.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT, this.formFields = [], this.handleAuthStateChange = d.d, this.usernameAlias = "username", this.loading = !1, this.userInput = this.user ? this.user.username : null, this._signUpAttrs = this.user && this.user.signUpAttrs ? this.user.signUpAttrs : null, this.newFormFields = [], this.phoneNumber = { countryDialCodeValue: l.h, phoneNumberValue: null }; } return e.prototype.componentWillLoad = function () { (0, d.c)(this.usernameAlias), this.buildFormFields(); }, e.prototype.formFieldsHandler = function () { this.buildFormFields(); }, e.prototype.buildDefaultFormFields = function () { var e = this; this.newFormFields = [{ type: "" + this.usernameAlias, required: !0, handleInputChange: this.handleFormFieldInputChange("" + this.usernameAlias), value: this.userInput, disabled: !!this.userInput }, { type: "code", label: i.o.get(h.T.CONFIRM_SIGN_UP_CODE_LABEL), placeholder: i.o.get(h.T.CONFIRM_SIGN_UP_CODE_PLACEHOLDER), required: !0, hint: (0, r.h)("div", null, i.o.get(h.T.CONFIRM_SIGN_UP_LOST_CODE), " ", (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.resendConfirmCode(); } }, i.o.get(h.T.CONFIRM_SIGN_UP_RESEND_CODE))), handleInputChange: this.handleFormFieldInputChange("code") }]; }, e.prototype.buildFormFields = function () { var e = this; if (0 === this.formFields.length)
                this.buildDefaultFormFields();
            else {
                var t = [];
                this.formFields.forEach((function (n) { var a = Object.assign({}, n); "code" === a.type && (a.hint = (0, d.i)(a) ? (0, r.h)("div", null, i.o.get(h.T.CONFIRM_SIGN_UP_LOST_CODE), " ", (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.resendConfirmCode(); } }, i.o.get(h.T.CONFIRM_SIGN_UP_RESEND_CODE))) : a.hint), a.handleInputChange = function (t) { return e.handleFormFieldInputWithCallback(t, n); }, t.push(a); })), this.newFormFields = t;
            } }, e.prototype.handleFormFieldInputChange = function (e) { var t = this; switch (e) {
                case "username":
                case "email": return function (e) { return t.userInput = e.target.value; };
                case "phone_number": return function (e) { return (0, d.h)(e, t.phoneNumber); };
                case "code": return function (e) { return t.code = e.target.value; };
                default: return;
            } }, e.prototype.setFieldValue = function (e) { switch (e.type) {
                case "username":
                case "email":
                    void 0 === e.value ? this.userInput = "" : this.userInput = e.value;
                    break;
                case "phone_number": e.dialCode && (this.phoneNumber.countryDialCodeValue = e.dialCode), this.phoneNumber.phoneNumberValue = e.value;
            } }, e.prototype.handleFormFieldInputWithCallback = function (e, t) { (t.handleInputChange ? t.handleInputChange : function (e, t) { t(e); })(e, this.handleFormFieldInputChange(t.type).bind(this)); }, e.prototype.resendConfirmCode = function () { return c(this, void 0, void 0, (function () { var e; return f(this, (function (t) { switch (t.label) {
                case 0:
                    if (event && event.preventDefault(), !u.g || "function" != typeof u.g.resendSignUp)
                        throw new Error(l.N);
                    t.label = 1;
                case 1:
                    if (t.trys.push([1, 3, , 4]), !this.userInput)
                        throw new Error("Username can not be empty");
                    return [4, u.g.resendSignUp(this.userInput)];
                case 2: return t.sent(), this.handleAuthStateChange(o.A.ConfirmSignUp), [3, 4];
                case 3: return e = t.sent(), (0, d.a)(e), [3, 4];
                case 4: return [2];
            } })); })); }, e.prototype.confirmSignUp = function (e) { return c(this, void 0, void 0, (function () { var t; return f(this, (function (n) { switch (n.label) {
                case 0:
                    if (e && e.preventDefault(), !u.g || "function" != typeof u.g.confirmSignUp)
                        throw new Error(l.N);
                    switch (this.loading = !0, this.usernameAlias) {
                        case "phone_number": try {
                            this.userInput = (0, d.b)(this.phoneNumber);
                        }
                        catch (e) {
                            (0, d.a)(e);
                        }
                    }
                    n.label = 1;
                case 1: return n.trys.push([1, 6, 7, 8]), [4, u.g.confirmSignUp(this.userInput, this.code)];
                case 2:
                    if (!n.sent())
                        throw new Error(i.o.get(h.T.CONFIRM_SIGN_UP_FAILED));
                    return this._signUpAttrs && this._signUpAttrs.password && "" !== this._signUpAttrs.password ? [4, (0, p.h)(this.userInput, this._signUpAttrs.password, this.handleAuthStateChange)] : [3, 4];
                case 3: return n.sent(), [3, 5];
                case 4: this.handleAuthStateChange(o.A.SignIn), n.label = 5;
                case 5: return [3, 8];
                case 6: return t = n.sent(), (0, d.a)(t), [3, 8];
                case 7: return this.loading = !1, [7];
                case 8: return [2];
            } })); })); }, e.prototype.render = function () { var e = this; return (0, r.h)(r.H, null, (0, r.h)("amplify-form-section", { headerText: i.o.get(this.headerText), submitButtonText: i.o.get(this.submitButtonText), handleSubmit: this.handleSubmit, secondaryFooterContent: (0, r.h)("div", null, (0, r.h)("span", null, (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.SignIn); } }, i.o.get(h.T.BACK_TO_SIGN_IN)))) }, (0, r.h)("amplify-auth-fields", { formFields: this.newFormFields }))); }, Object.defineProperty(e, "watchers", { get: function () { return { formFields: ["formFieldsHandler"] }; }, enumerable: !1, configurable: !0 }), e; }(), b = new a.k("ForgotPassword"), y = function () { function e(e) { var t = this; (0, r.r)(this, e), this.headerText = h.T.RESET_YOUR_PASSWORD, this.sendButtonText = h.T.SEND_CODE, this.submitButtonText = h.T.SUBMIT, this.formFields = [], this.handleSend = function (e) { return t.send(e); }, this.handleSubmit = function (e) { return t.submit(e); }, this.handleAuthStateChange = d.d, this.usernameAlias = "username", this.delivery = null, this.loading = !1, this.phoneNumber = { countryDialCodeValue: l.h, phoneNumberValue: null }, this.newFormFields = [], this.forgotPasswordAttrs = { userInput: "", password: "", code: "" }; } return e.prototype.componentWillLoad = function () { (0, d.c)(this.usernameAlias), this.buildFormFields(); }, e.prototype.formFieldsHandler = function () { this.buildFormFields(); }, e.prototype.buildFormFields = function () { var e = this; 0 === this.formFields.length ? this.buildDefaultFormFields() : this.formFields.forEach((function (t) { var n = Object.assign({}, t); n.handleInputChange = function (n) { return e.handleFormFieldInputWithCallback(n, t); }, e.newFormFields.push(n); })); }, e.prototype.buildDefaultFormFields = function () { switch (this.usernameAlias) {
                case "email":
                    this.newFormFields = [{ type: "email", required: !0, handleInputChange: this.handleFormFieldInputChange("email"), inputProps: { "data-test": "forgot-password-email-input" } }];
                    break;
                case "phone_number":
                    this.newFormFields = [{ type: "phone_number", required: !0, handleInputChange: this.handleFormFieldInputChange("phone_number"), inputProps: { "data-test": "forgot-password-phone-number-input" } }];
                    break;
                case "username":
                default: this.newFormFields = [{ type: "username", required: !0, handleInputChange: this.handleFormFieldInputChange("username"), inputProps: { "data-test": "forgot-password-username-input" } }];
            } }, e.prototype.handleFormFieldInputChange = function (e) { var t = this; switch (e) {
                case "username":
                case "email": return function (e) { return t.forgotPasswordAttrs.userInput = e.target.value; };
                case "phone_number": return function (e) { return (0, d.h)(e, t.phoneNumber); };
                case "password":
                case "code": return function (n) { return t.forgotPasswordAttrs[e] = n.target.value; };
                default: return;
            } }, e.prototype.setFieldValue = function (e, t) { switch (e.type) {
                case "username":
                case "email":
                    void 0 === e.value ? t.userInput = "" : t.userInput = e.value;
                    break;
                case "phone_number":
                    e.dialCode && (this.phoneNumber.countryDialCodeValue = e.dialCode), this.phoneNumber.phoneNumberValue = e.value;
                    break;
                case "password":
                case "code": void 0 === e.value ? t[e.type] = "" : t[e.type] = e.value;
            } }, e.prototype.handleFormFieldInputWithCallback = function (e, t) { (t.handleInputChange ? t.handleInputChange : function (e, t) { t(e); })(e, this.handleFormFieldInputChange(t.type).bind(this)); }, e.prototype.send = function (e) { return c(this, void 0, void 0, (function () { var t, n; return f(this, (function (r) { switch (r.label) {
                case 0:
                    if (e && e.preventDefault(), !u.g || "function" != typeof u.g.forgotPassword)
                        throw new Error(l.N);
                    switch (this.loading = !0, this.usernameAlias) {
                        case "phone_number": try {
                            this.forgotPasswordAttrs.userInput = (0, d.b)(this.phoneNumber);
                        }
                        catch (e) {
                            (0, d.a)(e);
                        }
                    }
                    r.label = 1;
                case 1: return r.trys.push([1, 3, 4, 5]), [4, u.g.forgotPassword(this.forgotPasswordAttrs.userInput)];
                case 2: return t = r.sent(), b.debug(t), this.newFormFields = [{ type: "code", required: !0, handleInputChange: this.handleFormFieldInputChange("code"), inputProps: { "data-test": "forgot-password-code-input" } }, { type: "password", required: !0, handleInputChange: this.handleFormFieldInputChange("password"), label: i.o.get(h.T.NEW_PASSWORD_LABEL), placeholder: i.o.get(h.T.NEW_PASSWORD_PLACEHOLDER) }], this.delivery = t.CodeDeliveryDetails, [3, 5];
                case 3: return n = r.sent(), (0, d.a)(n), [3, 5];
                case 4: return this.loading = !1, [7];
                case 5: return [2];
            } })); })); }, e.prototype.submit = function (e) { return c(this, void 0, void 0, (function () { var t, n, r, i, a, s; return f(this, (function (h) { switch (h.label) {
                case 0:
                    if (e && e.preventDefault(), !u.g || "function" != typeof u.g.forgotPasswordSubmit)
                        throw new Error(l.N);
                    this.loading = !0, h.label = 1;
                case 1: return h.trys.push([1, 3, 4, 5]), t = this.forgotPasswordAttrs, n = t.userInput, r = t.code, i = t.password, [4, u.g.forgotPasswordSubmit(n, r, i)];
                case 2: return a = h.sent(), b.debug(a), this.handleAuthStateChange(o.A.SignIn), this.delivery = null, [3, 5];
                case 3: return s = h.sent(), (0, d.a)(s), [3, 5];
                case 4: return this.loading = !1, [7];
                case 5: return [2];
            } })); })); }, e.prototype.render = function () { var e = this, t = this.delivery ? function (t) { return e.handleSubmit(t); } : function (t) { return e.handleSend(t); }, n = this.delivery ? this.submitButtonText : this.sendButtonText; return (0, r.h)(r.H, null, (0, r.h)("amplify-form-section", { headerText: i.o.get(this.headerText), handleSubmit: t, loading: this.loading, secondaryFooterContent: (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.SignIn); }, "data-test": "forgot-password-back-to-sign-in-link" }, i.o.get(h.T.BACK_TO_SIGN_IN)), testDataPrefix: "forgot-password", submitButtonText: i.o.get(n) }, (0, r.h)("amplify-auth-fields", { formFields: this.newFormFields }))); }, Object.defineProperty(e, "watchers", { get: function () { return { formFields: ["formFieldsHandler"] }; }, enumerable: !1, configurable: !0 }), e; }(), C = new a.k("amplify-require-new-password"), F = function () { function e(e) { var t = this; (0, r.r)(this, e), this.headerText = h.T.CHANGE_PASSWORD, this.submitButtonText = h.T.CHANGE_PASSWORD_ACTION, this.handleSubmit = function (e) { return t.completeNewPassword(e); }, this.handleAuthStateChange = d.d, this.formFields = [{ type: o.a.Password, required: !0, handleInputChange: function (e) { return t.handlePasswordChange(e); }, label: i.o.get(h.T.NEW_PASSWORD_LABEL), placeholder: i.o.get(h.T.NEW_PASSWORD_PLACEHOLDER), inputProps: { "data-test": "require-new-password-password-input" } }], this.currentUser = this.user, this.loading = !1, this.requiredAttributes = {}, this.newFormFields = this.formFields; } return e.prototype.handleRequiredAttributeInputChange = function (e, t) { this.requiredAttributes[e] = t.target.value; }, e.prototype.componentWillLoad = function () { return c(this, void 0, void 0, (function () { var e, t, n = this; return f(this, (function (r) { switch (r.label) {
                case 0:
                    if (this.user)
                        return [3, 4];
                    r.label = 1;
                case 1: return r.trys.push([1, 3, , 4]), [4, u.g.currentAuthenticatedUser()];
                case 2: return (e = r.sent()) && (this.currentUser = e), [3, 4];
                case 3: return t = r.sent(), (0, d.a)(t), [3, 4];
                case 4: return this.currentUser && this.currentUser.challengeParam.requiredAttributes && this.currentUser.challengeParam.requiredAttributes.forEach((function (e) { var t = { type: e, required: !0, label: d.r[e].label, placeholder: d.r[e].placeholder, handleInputChange: function (t) { return n.handleRequiredAttributeInputChange(e, t); }, inputProps: { "data-test": "require-new-password-" + e + "-input" } }; n.newFormFields.push(t); })), [2];
            } })); })); }, e.prototype.handlePasswordChange = function (e) { this.password = e.target.value; }, e.prototype.completeNewPassword = function (e) { return c(this, void 0, void 0, (function () { var t, n; return f(this, (function (r) { switch (r.label) {
                case 0:
                    if (e && e.preventDefault(), !u.g || "function" != typeof u.g.completeNewPassword)
                        throw new Error(l.N);
                    this.loading = !0, r.label = 1;
                case 1: return r.trys.push([1, 8, 9, 10]), [4, u.g.completeNewPassword(this.currentUser, this.password, this.requiredAttributes)];
                case 2:
                    switch (t = r.sent(), C.debug("complete new password", t), t.challengeName) {
                        case o.C.SMSMFA: return [3, 3];
                        case o.C.MFASetup: return [3, 4];
                    }
                    return [3, 5];
                case 3: return this.handleAuthStateChange(o.A.ConfirmSignIn, t), [3, 7];
                case 4: return C.debug("TOTP setup", t.challengeParam), this.handleAuthStateChange(o.A.TOTPSetup, t), [3, 7];
                case 5: return [4, (0, p.c)(t, this.handleAuthStateChange)];
                case 6: r.sent(), r.label = 7;
                case 7: return [3, 10];
                case 8: return n = r.sent(), (0, d.a)(n), [3, 10];
                case 9: return this.loading = !1, [7];
                case 10: return [2];
            } })); })); }, e.prototype.render = function () { var e = this; return (0, r.h)(r.H, null, (0, r.h)("amplify-form-section", { headerText: i.o.get(this.headerText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.SignIn); } }, i.o.get(h.T.BACK_TO_SIGN_IN)), submitButtonText: i.o.get(this.submitButtonText) }, (0, r.h)("amplify-auth-fields", { formFields: this.newFormFields }))); }, e; }(), v = function () { function e(e) { var t = this; (0, r.r)(this, e), this.handleSubmit = function (e) { return t.signIn(e); }, this.headerText = h.T.SIGN_IN_HEADER_TEXT, this.submitButtonText = h.T.SIGN_IN_ACTION, this.handleAuthStateChange = d.d, this.usernameAlias = "username", this.formFields = [], this.hideSignUp = !1, this.newFormFields = [], this.loading = !1, this.phoneNumber = { countryDialCodeValue: l.h, phoneNumberValue: null }, this.signInAttributes = { userInput: "", password: "" }; } return e.prototype.componentWillLoad = function () { (0, d.c)(this.usernameAlias), this.buildFormFields(); }, e.prototype.formFieldsHandler = function () { this.buildFormFields(); }, e.prototype.handleFormFieldInputChange = function (e) { var t = this; switch (e) {
                case "username":
                case "email": return function (e) { return t.signInAttributes.userInput = e.target.value; };
                case "phone_number": return function (e) { return (0, d.h)(e, t.phoneNumber); };
                case "password": return function (e) { return t.signInAttributes.password = e.target.value; };
            } }, e.prototype.handleFormFieldInputWithCallback = function (e, t) { (t.handleInputChange ? t.handleInputChange : function (e, t) { t(e); })(e, this.handleFormFieldInputChange(t.type).bind(this)); }, e.prototype.signIn = function (e) { return c(this, void 0, void 0, (function () { return f(this, (function (t) { switch (t.label) {
                case 0:
                    switch (e && e.preventDefault(), this.loading = !0, this.usernameAlias) {
                        case "phone_number": try {
                            this.signInAttributes.userInput = (0, d.b)(this.phoneNumber);
                        }
                        catch (e) {
                            (0, d.a)(e);
                        }
                    }
                    return [4, (0, p.h)(this.signInAttributes.userInput, this.signInAttributes.password, this.handleAuthStateChange)];
                case 1: return t.sent(), this.loading = !1, [2];
            } })); })); }, e.prototype.buildDefaultFormFields = function () { var e = this, t = []; switch (this.usernameAlias) {
                case "email":
                    t.push({ type: "email", required: !0, handleInputChange: this.handleFormFieldInputChange("email"), inputProps: { "data-test": "sign-in-email-input" } });
                    break;
                case "phone_number":
                    t.push({ type: "phone_number", required: !0, handleInputChange: this.handleFormFieldInputChange("phone_number"), inputProps: { "data-test": "sign-in-phone-number-input" } });
                    break;
                case "username":
                default: t.push({ type: "username", required: !0, handleInputChange: this.handleFormFieldInputChange("username"), inputProps: { "data-test": "sign-in-username-input" } });
            } t.push({ type: "password", hint: (0, r.h)("div", null, i.o.get(h.T.FORGOT_PASSWORD_TEXT), " ", (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.ForgotPassword); }, "data-test": "sign-in-forgot-password-link" }, i.o.get(h.T.RESET_PASSWORD_TEXT))), required: !0, handleInputChange: this.handleFormFieldInputChange("password"), inputProps: { "data-test": "sign-in-password-input" } }), this.newFormFields = function () { for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length; var r = Array(e), i = 0; for (t = 0; t < n; t++)
                for (var a = arguments[t], s = 0, o = a.length; s < o; s++, i++)
                    r[i] = a[s]; return r; }(t); }, e.prototype.buildFormFields = function () { var e = this; if (0 === this.formFields.length)
                this.buildDefaultFormFields();
            else {
                var t = [];
                this.formFields.forEach((function (n) { var a = Object.assign({}, n); "password" === a.type && (a.hint = (0, d.i)(a) ? (0, r.h)("div", null, i.o.get(h.T.FORGOT_PASSWORD_TEXT), " ", (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.ForgotPassword); }, "data-test": "sign-in-forgot-password-link" }, i.o.get(h.T.RESET_PASSWORD_TEXT))) : a.hint), a.handleInputChange = function (t) { return e.handleFormFieldInputWithCallback(t, n); }, e.setFieldValue(a, e.signInAttributes), t.push(a); })), this.newFormFields = t;
            } }, e.prototype.setFieldValue = function (e, t) { switch (e.type) {
                case "username":
                case "email":
                    void 0 === e.value ? t.userInput = "" : t.userInput = e.value;
                    break;
                case "phone_number":
                    e.dialCode && (this.phoneNumber.countryDialCodeValue = e.dialCode), this.phoneNumber.phoneNumberValue = e.value;
                    break;
                case "password": void 0 === e.value ? t.password = "" : t.password = e.value;
            } }, e.prototype.render = function () { var e = this; return (0, r.h)(r.H, null, (0, r.h)("amplify-form-section", { headerText: i.o.get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: "sign-in" }, (0, r.h)("div", { slot: "subtitle" }, (0, r.h)("slot", { name: "header-subtitle" })), (0, r.h)("slot", { name: "federated-buttons" }, (0, r.h)("amplify-federated-buttons", { handleAuthStateChange: this.handleAuthStateChange, federated: this.federated })), !(0, s.xb)(this.federated) && (0, r.h)("amplify-strike", null, "or"), (0, r.h)("amplify-auth-fields", { formFields: this.newFormFields }), (0, r.h)("div", { slot: "amplify-form-section-footer", class: "sign-in-form-footer" }, (0, r.h)("slot", { name: "footer" }, (0, r.h)("slot", { name: "secondary-footer-content" }, this.hideSignUp ? (0, r.h)("span", null) : (0, r.h)("span", null, i.o.get(h.T.NO_ACCOUNT_TEXT), " ", (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.SignUp); }, "data-test": "sign-in-create-account-link" }, i.o.get(h.T.CREATE_ACCOUNT_TEXT)))), (0, r.h)("slot", { name: "primary-footer-content" }, (0, r.h)("amplify-button", { type: "submit", disabled: this.loading, "data-test": "sign-in-sign-in-button" }, this.loading ? (0, r.h)("amplify-loading-spinner", null) : (0, r.h)("span", null, i.o.get(this.submitButtonText)))))))); }, Object.defineProperty(e, "watchers", { get: function () { return { formFields: ["formFieldsHandler"] }; }, enumerable: !1, configurable: !0 }), e; }();
            v.style = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";
            var w = function () { function e(e) { var t = this; (0, r.r)(this, e), this.handleSubmit = function (e) { return t.signUp(e); }, this.headerText = h.T.SIGN_UP_HEADER_TEXT, this.submitButtonText = h.T.SIGN_UP_SUBMIT_BUTTON_TEXT, this.haveAccountText = h.T.SIGN_UP_HAVE_ACCOUNT_TEXT, this.signInText = h.T.SIGN_IN_TEXT, this.formFields = [], this.handleAuthStateChange = d.d, this.usernameAlias = "username", this.newFormFields = [], this.phoneNumber = { countryDialCodeValue: l.h, phoneNumberValue: null }, this.loading = !1, this.signUpAttributes = { username: "", password: "", attributes: {} }; } return e.prototype.handleFormFieldInputChange = function (e) { var t = this; switch (e) {
                case "username": return function (e) { return t.signUpAttributes.username = e.target.value; };
                case "password": return function (e) { return t.signUpAttributes.password = e.target.value; };
                case "email": return function (e) { return t.signUpAttributes.attributes.email = e.target.value; };
                case "phone_number": return function (e) { return (0, d.h)(e, t.phoneNumber); };
                default: return function (n) { return t.signUpAttributes.attributes[e] = n.target.value; };
            } }, e.prototype.handleFormFieldInputWithCallback = function (e, t) { (t.handleInputChange ? t.handleInputChange : function (e, t) { t(e); })(e, this.handleFormFieldInputChange(t.type).bind(this)); }, e.prototype.signUp = function (e) { return c(this, void 0, void 0, (function () { var t, n, r; return f(this, (function (i) { switch (i.label) {
                case 0:
                    if (e && e.preventDefault(), !u.g || "function" != typeof u.g.signUp)
                        throw new Error(l.N);
                    if (this.phoneNumber.phoneNumberValue)
                        try {
                            this.signUpAttributes.attributes.phone_number = (0, d.b)(this.phoneNumber);
                        }
                        catch (e) {
                            (0, d.a)(e);
                        }
                    switch (this.usernameAlias) {
                        case "email":
                        case "phone_number": this.signUpAttributes.username = this.signUpAttributes.attributes[this.usernameAlias];
                    }
                    i.label = 1;
                case 1: return i.trys.push([1, 6, , 7]), [4, u.g.signUp(this.signUpAttributes)];
                case 2:
                    if (!(t = i.sent()))
                        throw new Error(h.T.SIGN_UP_FAILED);
                    return t.userConfirmed ? [4, (0, p.h)(this.signUpAttributes.username, this.signUpAttributes.password, this.handleAuthStateChange)] : [3, 4];
                case 3: return i.sent(), [3, 5];
                case 4: n = Object.assign({}, this.signUpAttributes), this.handleAuthStateChange(o.A.ConfirmSignUp, Object.assign(Object.assign({}, t.user), { signUpAttrs: n })), i.label = 5;
                case 5: return [3, 7];
                case 6: return r = i.sent(), (0, d.a)(r), [3, 7];
                case 7: return [2];
            } })); })); }, e.prototype.buildDefaultFormFields = function () { switch (this.usernameAlias) {
                case "email":
                    this.newFormFields = [{ type: "email", placeholder: i.o.get(h.T.SIGN_UP_EMAIL_PLACEHOLDER), required: !0, handleInputChange: this.handleFormFieldInputChange("email"), inputProps: { "data-test": "sign-up-email-input" } }, { type: "password", placeholder: i.o.get(h.T.SIGN_UP_PASSWORD_PLACEHOLDER), required: !0, handleInputChange: this.handleFormFieldInputChange("password"), inputProps: { "data-test": "sign-up-password-input" } }, { type: "phone_number", required: !0, handleInputChange: this.handleFormFieldInputChange("phone_number"), inputProps: { "data-test": "sign-up-phone-number-input" } }];
                    break;
                case "phone_number":
                    this.newFormFields = [{ type: "phone_number", required: !0, handleInputChange: this.handleFormFieldInputChange("phone_number"), inputProps: { "data-test": "sign-up-phone-number-input" } }, { type: "password", placeholder: i.o.get(h.T.SIGN_UP_PASSWORD_PLACEHOLDER), required: !0, handleInputChange: this.handleFormFieldInputChange("password"), inputProps: { "data-test": "sign-up-password-input" } }, { type: "email", placeholder: i.o.get(h.T.SIGN_UP_EMAIL_PLACEHOLDER), required: !0, handleInputChange: this.handleFormFieldInputChange("email"), inputProps: { "data-test": "sign-up-email-input" } }];
                    break;
                case "username":
                default: this.newFormFields = [{ type: "username", placeholder: i.o.get(h.T.SIGN_UP_USERNAME_PLACEHOLDER), required: !0, handleInputChange: this.handleFormFieldInputChange("username"), inputProps: { "data-test": "sign-up-username-input" } }, { type: "password", placeholder: i.o.get(h.T.SIGN_UP_PASSWORD_PLACEHOLDER), required: !0, handleInputChange: this.handleFormFieldInputChange("password"), inputProps: { "data-test": "sign-up-password-input" } }, { type: "email", placeholder: i.o.get(h.T.SIGN_UP_EMAIL_PLACEHOLDER), required: !0, handleInputChange: this.handleFormFieldInputChange("email"), inputProps: { "data-test": "sign-up-email-input" } }, { type: "phone_number", required: !0, handleInputChange: this.handleFormFieldInputChange("phone_number"), inputProps: { "data-test": "sign-up-phone-number-input" } }];
            } }, e.prototype.buildFormFields = function () { var e = this; if (0 === this.formFields.length)
                this.buildDefaultFormFields();
            else {
                var t = [];
                this.formFields.forEach((function (n) { var r = Object.assign({}, n); r.handleInputChange = function (t) { return e.handleFormFieldInputWithCallback(t, n); }, e.setFieldValue(n, e.signUpAttributes), t.push(r); })), this.newFormFields = t;
            } }, e.prototype.setFieldValue = function (e, t) { switch (e.type) {
                case "username":
                    void 0 === e.value ? t.username = "" : t.username = e.value;
                    break;
                case "password":
                    void 0 === e.value ? t.password = "" : t.password = e.value;
                    break;
                case "email":
                    t.attributes.email = e.value;
                    break;
                case "phone_number":
                    e.dialCode && (this.phoneNumber.countryDialCodeValue = e.dialCode), this.phoneNumber.phoneNumberValue = e.value;
                    break;
                default: t.attributes[e.type] = e.value;
            } }, e.prototype.componentWillLoad = function () { (0, d.c)(this.usernameAlias), this.buildFormFields(); }, e.prototype.formFieldsHandler = function () { this.buildFormFields(); }, e.prototype.render = function () { var e = this; return (0, r.h)(r.H, null, (0, r.h)("amplify-form-section", { headerText: i.o.get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: "sign-up" }, (0, r.h)("div", { slot: "subtitle" }, (0, r.h)("slot", { name: "header-subtitle" })), (0, r.h)("amplify-auth-fields", { formFields: this.newFormFields }), (0, r.h)("div", { class: "sign-up-form-footer", slot: "amplify-form-section-footer" }, (0, r.h)("slot", { name: "footer" }, (0, r.h)("slot", { name: "secondary-footer-content" }, (0, r.h)("span", null, i.o.get(this.haveAccountText), " ", (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.SignIn); }, "data-test": "sign-up-sign-in-link" }, i.o.get(this.signInText)))), (0, r.h)("slot", { name: "primary-footer-content" }, (0, r.h)("amplify-button", { type: "submit", "data-test": "sign-up-create-account-button" }, this.loading ? (0, r.h)("amplify-loading-spinner", null) : (0, r.h)("span", null, i.o.get(this.submitButtonText)))))))); }, Object.defineProperty(e, "watchers", { get: function () { return { formFields: ["formFieldsHandler"] }; }, enumerable: !1, configurable: !0 }), e; }();
            w.style = ":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";
            var I = new a.k("AmplifyVerifyContact"), A = function () { function e(e) { (0, r.r)(this, e), this.handleAuthStateChange = d.d, this.loading = !1; } return e.prototype.handleSubmit = function (e) { e.preventDefault(), this.verifyAttr ? this.submit(this.code) : this.verify(this.contact); }, e.prototype.submit = function (e) { return c(this, void 0, void 0, (function () { var t, n, r; return f(this, (function (i) { switch (i.label) {
                case 0:
                    if (t = this.verifyAttr, !u.g || "function" != typeof u.g.verifyCurrentUserAttributeSubmit)
                        throw new Error(l.N);
                    this.loading = !0, i.label = 1;
                case 1: return i.trys.push([1, 3, 4, 5]), [4, u.g.verifyCurrentUserAttributeSubmit(t, e)];
                case 2: return n = i.sent(), I.debug(n), this.handleAuthStateChange(o.A.SignedIn, this.user), this.verifyAttr = null, [3, 5];
                case 3: return r = i.sent(), (0, d.a)(r), I.error(r), [3, 5];
                case 4: return this.loading = !1, [7];
                case 5: return [2];
            } })); })); }, e.prototype.verify = function (e) { return c(this, void 0, void 0, (function () { var t, n; return f(this, (function (r) { switch (r.label) {
                case 0:
                    if (!e)
                        return I.error("Neither Email nor Phone Number selected"), [2];
                    if (!u.g || "function" != typeof u.g.verifyCurrentUserAttribute)
                        throw new Error(l.N);
                    this.loading = !0, r.label = 1;
                case 1: return r.trys.push([1, 3, 4, 5]), [4, u.g.verifyCurrentUserAttribute(e)];
                case 2: return t = r.sent(), I.debug(t), this.verifyAttr = e, [3, 5];
                case 3: return n = r.sent(), (0, d.a)(n), I.error(n), [3, 5];
                case 4: return this.loading = !1, [7];
                case 5: return [2];
            } })); })); }, e.prototype.handleInputChange = function (e) { var t = e.target.name; "code" === t ? this.code = e.target.value : "contact" === t && (this.contact = e.target.value); }, e.prototype.renderSubmit = function () { var e = this; return (0, r.h)("div", null, (0, r.h)("amplify-input", { inputProps: { autocomplete: "off", "data-test": "verify-contact-code-input" }, name: "code", placeholder: i.o.get(h.T.CODE_PLACEHOLDER), handleInputChange: function (t) { return e.handleInputChange(t); } })); }, e.prototype.renderVerify = function () { var e = this, t = this.user; if (!t)
                return I.debug("No user to verify"), null; var n = t.unverified; if (!n)
                return I.debug("Unverified variable does not exist on user"), null; var a = n.email, s = n.phone_number; return (0, r.h)("div", null, a && (0, r.h)("amplify-radio-button", { label: i.o.get(h.T.VERIFY_CONTACT_EMAIL_LABEL), key: "email", name: "contact", value: "email", handleInputChange: function (t) { return e.handleInputChange(t); }, inputProps: { "data-test": "verify-contact-email-radio" } }), s && (0, r.h)("amplify-radio-button", { label: i.o.get(h.T.VERIFY_CONTACT_PHONE_LABEL), key: "phone_number", name: "contact", value: "phone_number", handleInputChange: function (t) { return e.handleInputChange(t); }, inputProps: { "data-test": "verify-contact-email-radio" } })); }, e.prototype.render = function () { var e = this; return (0, r.h)(r.H, null, (0, r.h)("amplify-form-section", { handleSubmit: function (t) { return e.handleSubmit(t); }, headerText: i.o.get(h.T.VERIFY_CONTACT_HEADER_TEXT), loading: this.loading, secondaryFooterContent: (0, r.h)("span", null, (0, r.h)("amplify-button", { variant: "anchor", onClick: function () { return e.handleAuthStateChange(o.A.SignedIn, e.user); } }, "Skip")), submitButtonText: this.verifyAttr ? i.o.get(h.T.VERIFY_CONTACT_SUBMIT_LABEL) : i.o.get(h.T.VERIFY_CONTACT_VERIFY_LABEL) }, this.verifyAttr ? this.renderSubmit() : this.renderVerify())); }, e; }();
        }, 7958: function (e, t, n) {
            "use strict";
            n.d(t, { c: function () { return c; }, h: function () { return f; } });
            var r = n(5069), i = n(9222), a = n(5573), s = n(5914), o = n(5489), u = n(7029), h = n(8396), l = function (e, t, n, r) { return new (n || (n = Promise))((function (i, a) { function s(e) { try {
                u(r.next(e));
            }
            catch (e) {
                a(e);
            } } function o(e) { try {
                u(r.throw(e));
            }
            catch (e) {
                a(e);
            } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, o); } u((r = r.apply(e, t || [])).next()); })); }, d = function (e, t) { var n, r, i, a, s = { label: 0, sent: function () { if (1 & i[0])
                    throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function o(a) { return function (o) { return function (a) { if (n)
                throw new TypeError("Generator is already executing."); for (; s;)
                try {
                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
                        return i;
                    switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4: return s.label++, { value: a[1], done: !1 };
                        case 5:
                            s.label++, r = a[1], a = [0];
                            continue;
                        case 7:
                            a = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                s.label = a[1];
                                break;
                            }
                            if (6 === a[0] && s.label < i[1]) {
                                s.label = i[1], i = a;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(a);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    a = t.call(e, s);
                }
                catch (e) {
                    a = [6, e], r = 0;
                }
                finally {
                    n = i = 0;
                } if (5 & a[0])
                throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, o]); }; } }, p = new r.k("auth-helpers");
            function c(e, t) { return l(this, void 0, void 0, (function () { var n, r, o; return d(this, (function (l) { switch (l.label) {
                case 0:
                    if (!s.g || "function" != typeof s.g.verifiedContact)
                        throw new Error(u.N);
                    l.label = 1;
                case 1: return l.trys.push([1, 3, , 4]), [4, s.g.verifiedContact(e)];
                case 2: return n = l.sent(), !(0, i.xb)(n.verified) || (0, i.xb)(n.unverified) ? t(a.A.SignedIn, e) : (r = Object.assign(e, n), t(a.A.VerifyContact, r)), [3, 4];
                case 3: return o = l.sent(), (0, h.a)(o), [3, 4];
                case 4: return [2];
            } })); })); }
            var f = function (e, t, n) { return l(void 0, void 0, void 0, (function () { var r, i; return d(this, (function (l) { switch (l.label) {
                case 0:
                    if (!s.g || "function" != typeof s.g.signIn)
                        throw new Error(u.N);
                    l.label = 1;
                case 1: return l.trys.push([1, 9, , 10]), [4, s.g.signIn(e, t)];
                case 2: return r = l.sent(), p.debug(r), r.challengeName !== a.C.SMSMFA && r.challengeName !== a.C.SoftwareTokenMFA ? [3, 3] : (p.debug("confirm user with " + r.challengeName), n(a.A.ConfirmSignIn, r), [3, 8]);
                case 3: return r.challengeName !== a.C.NewPasswordRequired ? [3, 4] : (p.debug("require new password", r.challengeParam), n(a.A.ResetPassword, r), [3, 8]);
                case 4: return r.challengeName !== a.C.MFASetup ? [3, 5] : (p.debug("TOTP setup", r.challengeParam), n(a.A.TOTPSetup, r), [3, 8]);
                case 5: return r.challengeName === a.C.CustomChallenge && r.challengeParam && "true" === r.challengeParam.trigger ? (p.debug("custom challenge", r.challengeParam), n(a.A.CustomConfirmSignIn, r), [3, 8]) : [3, 6];
                case 6: return [4, c(r, n)];
                case 7: l.sent(), l.label = 8;
                case 8: return [3, 10];
                case 9: return "UserNotConfirmedException" === (i = l.sent()).code ? (p.debug("the user is not confirmed"), n(a.A.ConfirmSignUp, { username: e })) : "PasswordResetRequiredException" === i.code ? (p.debug("the user requires a new password"), n(a.A.ForgotPassword, { username: e })) : "InvalidParameterException" === i.code && "" === t && (p.debug("Password cannot be empty"), i.message = o.T.EMPTY_PASSWORD), (0, h.a)(i), [3, 10];
                case 10: return [2];
            } })); })); };
        } }]);
