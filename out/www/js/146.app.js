"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[146], { 2146: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, { amplify_authenticator: function () { return p; } });
            var a = n(3922), r = n(5069), i = n(490), s = n(5573), o = n(2043), u = n(5914), c = (n(5489), n(7029)), h = n(8396), l = n(7958), f = function (t, e, n, a) { return new (n || (n = Promise))((function (r, i) { function s(t) { try {
                u(a.next(t));
            }
            catch (t) {
                i(t);
            } } function o(t) { try {
                u(a.throw(t));
            }
            catch (t) {
                i(t);
            } } function u(t) { var e; t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) { t(e); }))).then(s, o); } u((a = a.apply(t, e || [])).next()); })); }, d = function (t, e) { var n, a, r, i, s = { label: 0, sent: function () { if (1 & r[0])
                    throw r[1]; return r[1]; }, trys: [], ops: [] }; return i = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function o(i) { return function (o) { return function (i) { if (n)
                throw new TypeError("Generator is already executing."); for (; s;)
                try {
                    if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done)
                        return r;
                    switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4: return s.label++, { value: i[1], done: !1 };
                        case 5:
                            s.label++, a = i[1], i = [0];
                            continue;
                        case 7:
                            i = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                s.label = i[1];
                                break;
                            }
                            if (6 === i[0] && s.label < r[1]) {
                                s.label = r[1], r = i;
                                break;
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2], s.ops.push(i);
                                break;
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    i = e.call(t, s);
                }
                catch (t) {
                    i = [6, t], a = 0;
                }
                finally {
                    n = r = 0;
                } if (5 & i[0])
                throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, o]); }; } }, g = new r.k("Authenticator"), p = function () { function t(t) { var e = this; (0, a.r)(this, t), this.initialAuthState = s.A.SignIn, this.handleAuthStateChange = function () { }, this.authState = s.A.Loading, this.toastMessage = "", this.handleExternalAuthEvent = function (t) { var n = t.payload; switch (n.event) {
                case "cognitoHostedUI":
                case "signIn":
                    (0, l.c)(n.data, h.d);
                    break;
                case "cognitoHostedUI_failure":
                case "parsingUrl_failure":
                case "signOut":
                case "customGreetingSignOut": return (0, h.d)(e.initialAuthState);
            } }, this.handleToastEvent = function (t) { var n = t.payload; switch (n.event) {
                case c.T: n.message && (e.toastMessage = n.message);
            } }; } return t.prototype.componentWillLoad = function () { return f(this, void 0, void 0, (function () { var t, e = this; return d(this, (function (n) { switch (n.label) {
                case 0: return (0, h.o)((function (t, n) { e.onAuthStateChange(t, n), e.toastMessage = ""; })), i.Xb.listen(c.U, this.handleToastEvent), i.Xb.listen(c.A, this.handleExternalAuthEvent), (0, o.Ib)("amplify-authenticator"), t = localStorage.getItem(c.R), localStorage.removeItem(c.R), "true" === t ? [3, 2] : [4, this.checkUser()];
                case 1: n.sent(), n.label = 2;
                case 2: return [2];
            } })); })); }, t.prototype.checkUser = function () { return f(this, void 0, void 0, (function () { var t = this; return d(this, (function (e) { if (!u.g || "function" != typeof u.g.currentAuthenticatedUser)
                throw new Error(c.N); return [2, u.g.currentAuthenticatedUser().then((function (t) { (0, h.d)(s.A.SignedIn, t); })).catch((function () { return f(t, void 0, void 0, (function () { var t, e; return d(this, (function (n) { switch (n.label) {
                    case 0:
                        t = null;
                        try {
                            t = localStorage.getItem(c.c);
                        }
                        catch (t) {
                            g.debug("Failed to get the auth state from local storage", t);
                        }
                        n.label = 1;
                    case 1: return n.trys.push([1, 4, , 5]), t !== s.A.SignedIn ? [3, 3] : [4, u.g.signOut()];
                    case 2: n.sent(), n.label = 3;
                    case 3: return (0, h.d)(this.initialAuthState), [3, 5];
                    case 4: return e = n.sent(), g.debug("Failed to sign out", e), [3, 5];
                    case 5: return [2];
                } })); })); }))]; })); })); }, t.prototype.onAuthStateChange = function (t, e) { return f(this, void 0, void 0, (function () { return d(this, (function (n) { return void 0 === t ? [2, g.error("nextAuthState cannot be undefined")] : (g.info("Inside onAuthStateChange Method current authState:", this.authState), t === s.A.SignedOut ? this.authState = this.initialAuthState : this.authState = t, this.authData = e, this.authData && g.log("Auth Data was set:", this.authData), this.authState === t && (this.handleAuthStateChange(this.authState, this.authData), g.info("authState has been updated to " + this.authState)), [2]); })); })); }, t.prototype.renderAuthComponent = function (t) { switch (t) {
                case s.A.SignIn: return (0, a.h)("slot", { name: "sign-in" }, (0, a.h)("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias }));
                case s.A.ConfirmSignIn: return (0, a.h)("slot", { name: "confirm-sign-in" }, (0, a.h)("amplify-confirm-sign-in", { user: this.authData }));
                case s.A.SignUp: return (0, a.h)("slot", { name: "sign-up" }, (0, a.h)("amplify-sign-up", { usernameAlias: this.usernameAlias }));
                case s.A.ConfirmSignUp: return (0, a.h)("slot", { name: "confirm-sign-up" }, (0, a.h)("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias }));
                case s.A.ForgotPassword: return (0, a.h)("slot", { name: "forgot-password" }, (0, a.h)("amplify-forgot-password", { usernameAlias: this.usernameAlias }));
                case s.A.ResetPassword: return (0, a.h)("slot", { name: "require-new-password" }, (0, a.h)("amplify-require-new-password", { user: this.authData }));
                case s.A.VerifyContact: return (0, a.h)("slot", { name: "verify-contact" }, (0, a.h)("amplify-verify-contact", { user: this.authData }));
                case s.A.TOTPSetup: return (0, a.h)("slot", { name: "totp-setup" }, (0, a.h)("amplify-totp-setup", { user: this.authData }));
                case s.A.Loading: return (0, a.h)("slot", { name: "loading" }, (0, a.h)("div", null, "Loading..."));
                case s.A.SignedIn: return [(0, a.h)("slot", { name: "greetings" }), (0, a.h)("slot", null)];
                default: throw new Error("Unhandled auth state: " + t);
            } }, t.prototype.componentWillUnload = function () { return i.Xb.remove(c.A, this.handleExternalAuthEvent), i.Xb.remove(c.U, this.handleToastEvent), h.o; }, t.prototype.render = function () { var t = this; return (0, a.h)(a.H, null, this.toastMessage ? (0, a.h)("amplify-toast", { message: this.toastMessage, handleClose: function () { t.toastMessage = ""; }, "data-test": "authenticator-error" }) : null, this.authState === s.A.SignedIn ? this.renderAuthComponent(this.authState) : (0, a.h)("div", { class: "auth-container" }, this.renderAuthComponent(this.authState))); }, t; }();
            p.style = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";
        }, 7958: function (t, e, n) {
            "use strict";
            n.d(e, { c: function () { return d; }, h: function () { return g; } });
            var a = n(5069), r = n(9222), i = n(5573), s = n(5914), o = n(5489), u = n(7029), c = n(8396), h = function (t, e, n, a) { return new (n || (n = Promise))((function (r, i) { function s(t) { try {
                u(a.next(t));
            }
            catch (t) {
                i(t);
            } } function o(t) { try {
                u(a.throw(t));
            }
            catch (t) {
                i(t);
            } } function u(t) { var e; t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) { t(e); }))).then(s, o); } u((a = a.apply(t, e || [])).next()); })); }, l = function (t, e) { var n, a, r, i, s = { label: 0, sent: function () { if (1 & r[0])
                    throw r[1]; return r[1]; }, trys: [], ops: [] }; return i = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function o(i) { return function (o) { return function (i) { if (n)
                throw new TypeError("Generator is already executing."); for (; s;)
                try {
                    if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done)
                        return r;
                    switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4: return s.label++, { value: i[1], done: !1 };
                        case 5:
                            s.label++, a = i[1], i = [0];
                            continue;
                        case 7:
                            i = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                s.label = i[1];
                                break;
                            }
                            if (6 === i[0] && s.label < r[1]) {
                                s.label = r[1], r = i;
                                break;
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2], s.ops.push(i);
                                break;
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    i = e.call(t, s);
                }
                catch (t) {
                    i = [6, t], a = 0;
                }
                finally {
                    n = r = 0;
                } if (5 & i[0])
                throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, o]); }; } }, f = new a.k("auth-helpers");
            function d(t, e) { return h(this, void 0, void 0, (function () { var n, a, o; return l(this, (function (h) { switch (h.label) {
                case 0:
                    if (!s.g || "function" != typeof s.g.verifiedContact)
                        throw new Error(u.N);
                    h.label = 1;
                case 1: return h.trys.push([1, 3, , 4]), [4, s.g.verifiedContact(t)];
                case 2: return n = h.sent(), !(0, r.xb)(n.verified) || (0, r.xb)(n.unverified) ? e(i.A.SignedIn, t) : (a = Object.assign(t, n), e(i.A.VerifyContact, a)), [3, 4];
                case 3: return o = h.sent(), (0, c.a)(o), [3, 4];
                case 4: return [2];
            } })); })); }
            var g = function (t, e, n) { return h(void 0, void 0, void 0, (function () { var a, r; return l(this, (function (h) { switch (h.label) {
                case 0:
                    if (!s.g || "function" != typeof s.g.signIn)
                        throw new Error(u.N);
                    h.label = 1;
                case 1: return h.trys.push([1, 9, , 10]), [4, s.g.signIn(t, e)];
                case 2: return a = h.sent(), f.debug(a), a.challengeName !== i.C.SMSMFA && a.challengeName !== i.C.SoftwareTokenMFA ? [3, 3] : (f.debug("confirm user with " + a.challengeName), n(i.A.ConfirmSignIn, a), [3, 8]);
                case 3: return a.challengeName !== i.C.NewPasswordRequired ? [3, 4] : (f.debug("require new password", a.challengeParam), n(i.A.ResetPassword, a), [3, 8]);
                case 4: return a.challengeName !== i.C.MFASetup ? [3, 5] : (f.debug("TOTP setup", a.challengeParam), n(i.A.TOTPSetup, a), [3, 8]);
                case 5: return a.challengeName === i.C.CustomChallenge && a.challengeParam && "true" === a.challengeParam.trigger ? (f.debug("custom challenge", a.challengeParam), n(i.A.CustomConfirmSignIn, a), [3, 8]) : [3, 6];
                case 6: return [4, d(a, n)];
                case 7: h.sent(), h.label = 8;
                case 8: return [3, 10];
                case 9: return "UserNotConfirmedException" === (r = h.sent()).code ? (f.debug("the user is not confirmed"), n(i.A.ConfirmSignUp, { username: t })) : "PasswordResetRequiredException" === r.code ? (f.debug("the user requires a new password"), n(i.A.ForgotPassword, { username: t })) : "InvalidParameterException" === r.code && "" === e && (f.debug("Password cannot be empty"), r.message = o.T.EMPTY_PASSWORD), (0, c.a)(r), [3, 10];
                case 10: return [2];
            } })); })); };
        } }]);
