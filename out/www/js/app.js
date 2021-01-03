"use strict";
/*! For license information please see app.js.LICENSE.txt */
(function () { var e, t, n, r, i = { 5914: function (e, t, n) {
        "use strict";
        var r, i;
        function o(e) { return e && !!["provider"].find((function (t) { return e.hasOwnProperty(t); })); }
        function s(e) { return void 0 !== e.redirectSignIn; }
        n.d(t, { g: function () { return J; } }), function (e) { e.Cognito = "COGNITO", e.Google = "Google", e.Facebook = "Facebook", e.Amazon = "LoginWithAmazon", e.Apple = "SignInWithApple"; }(r || (r = {})), function (e) { e.NoConfig = "noConfig", e.MissingAuthConfig = "missingAuthConfig", e.EmptyUsername = "emptyUsername", e.InvalidUsername = "invalidUsername", e.EmptyPassword = "emptyPassword", e.EmptyCode = "emptyCode", e.SignUpError = "signUpError", e.NoMFA = "noMFA", e.InvalidMFA = "invalidMFA", e.EmptyChallengeResponse = "emptyChallengeResponse", e.NoUserSession = "noUserSession", e.Default = "default"; }(i || (i = {}));
        var a = n(6489);
        function u(e, t) { void 0 === t && (t = {}); var n = function (e) { return e && "j" === e[0] && ":" === e[1] ? e.substr(2) : e; }(e); if (function (e, t) { return void 0 === t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]), !t; }(n, t.doNotParse))
            try {
                return JSON.parse(n);
            }
            catch (e) { } return e; }
        var c = function () { return (c = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
        var l = function () { function e(e, t) { var n = this; this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = function (e, t) { return "string" == typeof e ? a.Q(e, t) : "object" == typeof e && null !== e ? e : {}; }(e, t), new Promise((function () { n.HAS_DOCUMENT_COOKIE = "object" == typeof document && "string" == typeof document.cookie; })).catch((function () { })); } return e.prototype._updateBrowserValues = function (e) { this.HAS_DOCUMENT_COOKIE && (this.cookies = a.Q(document.cookie, e)); }, e.prototype._emitChange = function (e) { for (var t = 0; t < this.changeListeners.length; ++t)
            this.changeListeners[t](e); }, e.prototype.get = function (e, t, n) { return void 0 === t && (t = {}), this._updateBrowserValues(n), u(this.cookies[e], t); }, e.prototype.getAll = function (e, t) { void 0 === e && (e = {}), this._updateBrowserValues(t); var n = {}; for (var r in this.cookies)
            n[r] = u(this.cookies[r], e); return n; }, e.prototype.set = function (e, t, n) { var r; "object" == typeof t && (t = JSON.stringify(t)), this.cookies = c(c({}, this.cookies), ((r = {})[e] = t, r)), this.HAS_DOCUMENT_COOKIE && (document.cookie = a.q(e, t, n)), this._emitChange({ name: e, value: t, options: n }); }, e.prototype.remove = function (e, t) { var n = t = c(c({}, t), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }); this.cookies = c({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = a.q(e, "", n)), this._emitChange({ name: e, value: void 0, options: t }); }, e.prototype.addChangeListener = function (e) { this.changeListeners.push(e); }, e.prototype.removeChangeListener = function (e) { var t = this.changeListeners.indexOf(e); t >= 0 && this.changeListeners.splice(t, 1); }, e; }();
        var f = n(9222), h = (0, f.lC)().isBrowser, d = function () { function e(e) { void 0 === e && (e = {}), this.cookies = new l, this.store = h ? window.localStorage : Object.create(null), this.cookies = e.req ? new l(e.req.headers.cookie) : new l, Object.assign(this.store, this.cookies.getAll()); } return Object.defineProperty(e.prototype, "length", { get: function () { return Object.entries(this.store).length; }, enumerable: !0, configurable: !0 }), e.prototype.clear = function () { var e = this; Array.from(new Array(this.length)).map((function (t, n) { return e.key(n); })).forEach((function (t) { return e.removeItem(t); })); }, e.prototype.getItem = function (e) { return this.getLocalItem(e); }, e.prototype.getLocalItem = function (e) { return Object.prototype.hasOwnProperty.call(this.store, e) ? this.store[e] : null; }, e.prototype.getUniversalItem = function (e) { return this.cookies.get(e); }, e.prototype.key = function (e) { return Object.keys(this.store)[e]; }, e.prototype.removeItem = function (e) { this.removeLocalItem(e), this.removeUniversalItem(e); }, e.prototype.removeLocalItem = function (e) { delete this.store[e]; }, e.prototype.removeUniversalItem = function (e) { this.cookies.remove(e, { path: "/" }); }, e.prototype.setItem = function (e, t) { switch (this.setLocalItem(e, t), e.split(".").pop()) {
            case "LastAuthUser":
            case "accessToken":
            case "idToken": this.setUniversalItem(e, t);
        } }, e.prototype.setLocalItem = function (e, t) { this.store[e] = t; }, e.prototype.setUniversalItem = function (e, t) { this.cookies.set(e, t, { path: "/", sameSite: !0, secure: "localhost" !== window.location.hostname }); }, e; }(), p = n(5069), g = n(490), y = n(8832), m = n(5389), v = n(6648), w = n(5387), b = n(2043), _ = n(8575), S = function (e) { var t = window.open(e, "_self"); return t ? Promise.resolve(t) : Promise.reject(); }, A = n(2153), E = n.n(A), C = n(8269), I = n.n(C), T = function () { return (T = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, P = function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); }, U = function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }, O = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }, R = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default", k = function (e, t, n) { g.Xb.dispatch("auth", { event: e, data: t, message: n }, "Auth", R); }, x = new p.k("OAuth");
        var D = function () { function e(e) { var t = e.config, n = e.cognitoClientId, r = e.scopes, i = void 0 === r ? [] : r; if (this._urlOpener = t.urlOpener || S, this._config = t, this._cognitoClientId = n, !this.isValidScopes(i))
            throw Error("scopes must be a String Array"); this._scopes = i; } return e.prototype.isValidScopes = function (e) { return Array.isArray(e) && e.every((function (e) { return "string" == typeof e; })); }, e.prototype.oauthSignIn = function (e, t, n, i, o, s) { void 0 === e && (e = "code"), void 0 === o && (o = r.Cognito); var a = this._generateState(32), u = s ? a + "-" + s.split("").map((function (e) { return e.charCodeAt(0).toString(16).padStart(2, "0"); })).join("") : a; !function (e) { window.sessionStorage.setItem("oauth_state", e); }(u); var c, l = this._generateRandom(128); c = l, window.sessionStorage.setItem("ouath_pkce_key", c); var f = this._generateChallenge(l), h = this._scopes.join(" "), d = "https://" + t + "/oauth2/authorize?" + Object.entries(T(T({ redirect_uri: n, response_type: e, client_id: i, identity_provider: o, scope: h, state: u }, "code" === e ? { code_challenge: f } : {}), "code" === e ? { code_challenge_method: "S256" } : {})).map((function (e) { var t = O(e, 2), n = t[0], r = t[1]; return encodeURIComponent(n) + "=" + encodeURIComponent(r); })).join("&"); x.debug("Redirecting to " + d), this._urlOpener(d, n); }, e.prototype._handleCodeFlow = function (e) { return P(this, void 0, void 0, (function () { var t, n, r, i, o, a, u, c, l, f, h, d; return U(this, (function (p) { switch (p.label) {
            case 0: return (t = ((0, _.Qc)(e).query || "").split("&").map((function (e) { return e.split("="); })).reduce((function (e, t) { var n, r = O(t, 2), i = r[0], o = r[1]; return T(T({}, e), ((n = {})[i] = o, n)); }), { code: void 0 }).code) && (0, _.Qc)(e).pathname === (0, _.Qc)(this._config.redirectSignIn).pathname ? (n = "https://" + this._config.domain + "/oauth2/token", k("codeFlow", {}, "Retrieving tokens from " + n), r = s(this._config) ? this._cognitoClientId : this._config.clientID, i = s(this._config) ? this._config.redirectSignIn : this._config.redirectUri, g = window.sessionStorage.getItem("ouath_pkce_key"), window.sessionStorage.removeItem("ouath_pkce_key"), a = T({ grant_type: "authorization_code", code: t, client_id: r, redirect_uri: i }, (o = g) ? { code_verifier: o } : {}), x.debug("Calling token endpoint: " + n + " with", a), u = Object.entries(a).map((function (e) { var t = O(e, 2), n = t[0], r = t[1]; return encodeURIComponent(n) + "=" + encodeURIComponent(r); })).join("&"), [4, fetch(n, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: u })]) : [2];
            case 1: return [4, p.sent().json()];
            case 2:
                if (c = p.sent(), l = c.access_token, f = c.refresh_token, h = c.id_token, d = c.error)
                    throw new Error(d);
                return [2, { accessToken: l, refreshToken: f, idToken: h }];
        } var g; })); })); }, e.prototype._handleImplicitFlow = function (e) { return P(this, void 0, void 0, (function () { var t, n, r; return U(this, (function (i) { return t = ((0, _.Qc)(e).hash || "#").substr(1).split("&").map((function (e) { return e.split("="); })).reduce((function (e, t) { var n, r = O(t, 2), i = r[0], o = r[1]; return T(T({}, e), ((n = {})[i] = o, n)); }), { id_token: void 0, access_token: void 0 }), n = t.id_token, r = t.access_token, k("implicitFlow", {}, "Got tokens from " + e), x.debug("Retrieving implicit tokens from " + e + " with"), [2, { accessToken: r, idToken: n, refreshToken: null }]; })); })); }, e.prototype.handleAuthResponse = function (e) { return P(this, void 0, void 0, (function () { var t, n, r, i, o, s, a; return U(this, (function (u) { switch (u.label) {
            case 0:
                if (u.trys.push([0, 5, , 6]), t = e ? T(T({}, ((0, _.Qc)(e).hash || "#").substr(1).split("&").map((function (e) { return e.split("="); })).reduce((function (e, t) { var n = O(t, 2), r = n[0], i = n[1]; return e[r] = i, e; }), {})), ((0, _.Qc)(e).query || "").split("&").map((function (e) { return e.split("="); })).reduce((function (e, t) { var n = O(t, 2), r = n[0], i = n[1]; return e[r] = i, e; }), {})) : {}, n = t.error, r = t.error_description, n)
                    throw new Error(r);
                return i = this._validateState(t), x.debug("Starting " + this._config.responseType + " flow with " + e), "code" !== this._config.responseType ? [3, 2] : (o = [{}], [4, this._handleCodeFlow(e)]);
            case 1: return [2, T.apply(void 0, [T.apply(void 0, o.concat([u.sent()])), { state: i }])];
            case 2: return s = [{}], [4, this._handleImplicitFlow(e)];
            case 3: return [2, T.apply(void 0, [T.apply(void 0, s.concat([u.sent()])), { state: i }])];
            case 4: return [3, 6];
            case 5: throw a = u.sent(), x.error("Error handling auth response.", a), a;
            case 6: return [2];
        } })); })); }, e.prototype._validateState = function (e) { if (e) {
            var t, n = (t = window.sessionStorage.getItem("oauth_state"), window.sessionStorage.removeItem("oauth_state"), t), r = e.state;
            if (n && n !== r)
                throw new Error("Invalid state in OAuth flow");
            return r;
        } }, e.prototype.signOut = function () { return P(this, void 0, void 0, (function () { var e, t, n; return U(this, (function (r) { return e = "https://" + this._config.domain + "/logout?", t = s(this._config) ? this._cognitoClientId : this._config.oauth.clientID, n = s(this._config) ? this._config.redirectSignOut : this._config.returnTo, e += Object.entries({ client_id: t, logout_uri: encodeURIComponent(n) }).map((function (e) { var t = O(e, 2); return t[0] + "=" + t[1]; })).join("&"), k("oAuthSignOut", { oAuth: "signOut" }, "Signing out from " + e), x.debug("Signing out from " + e), [2, this._urlOpener(e)]; })); })); }, e.prototype._generateState = function (e) { for (var t = "", n = e, r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; n > 0; --n)
            t += r[Math.round(Math.random() * (r.length - 1))]; return t; }, e.prototype._generateChallenge = function (e) { return this._base64URL(E()(e)); }, e.prototype._base64URL = function (e) { return e.toString(I()).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"); }, e.prototype._generateRandom = function (e) { var t = new Uint8Array(e); if ("undefined" != typeof window && window.crypto)
            window.crypto.getRandomValues(t);
        else
            for (var n = 0; n < e; n += 1)
                t[n] = Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".length | 0; return this._bufferToString(t); }, e.prototype._bufferToString = function (e) { for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = [], r = 0; r < e.byteLength; r += 1) {
            var i = e[r] % t.length;
            n.push(t[i]);
        } return n.join(""); }, e; }();
        var L, N = n(3926), $ = (L = function (e, t) { return (L = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function n() { this.constructor = e; } L(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }), M = new p.k("AuthError"), F = function (e) { function t(n) { var r = this, i = B[n], o = i.message, s = i.log; return (r = e.call(this, o) || this).constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "AuthError", r.log = s || o, M.error(r.log), r; } return $(t, e), t; }(Error), j = function (e) { function t(n) { var r = e.call(this, n) || this; return r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "NoUserPoolError", r; } return $(t, e), t; }(F), B = { noConfig: { message: N.A.DEFAULT_MSG, log: "\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of aws-amplify or amplify packages in your node_modules.\n                Try deleting your node_modules folder and reinstalling the dependencies with `yarn install`\n        " }, missingAuthConfig: { message: N.A.DEFAULT_MSG, log: "\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties. \n            Did you run `amplify push` after adding auth via `amplify add auth`?\n            See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n        " }, emptyUsername: { message: N.A.EMPTY_USERNAME }, invalidUsername: { message: N.A.INVALID_USERNAME }, emptyPassword: { message: N.A.EMPTY_PASSWORD }, emptyCode: { message: N.A.EMPTY_CODE }, signUpError: { message: N.A.SIGN_UP_ERROR, log: "The first parameter should either be non-null string or object" }, noMFA: { message: N.A.NO_MFA }, invalidMFA: { message: N.A.INVALID_MFA }, emptyChallengeResponse: { message: N.A.EMPTY_CHALLENGE }, noUserSession: { message: N.A.NO_USER_SESSION }, default: { message: N.A.DEFAULT_MSG } }, H = function () { return (H = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, q = function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); }, K = function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }, V = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }, W = new p.k("AuthClass"), z = "aws.cognito.signin.user.admin", G = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default", Y = function (e, t, n) { g.Xb.dispatch("auth", { event: e, data: t, message: n }, "Auth", G); }, J = new (function () { function e(e) { var t = this; this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.Credentials = y.cN, this.wrapRefreshSessionCallback = function (e) { return function (t, n) { return n ? Y("tokenRefresh", void 0, "New token retrieved") : Y("tokenRefresh_failure", t, "Failed to retrieve new token"), e(t, n); }; }, this.configure(e), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), g.Xb.listen("auth", (function (e) { switch (e.payload.event) {
            case "signIn":
                t._storage.setItem("amplify-signin-with-hostedUI", "false");
                break;
            case "signOut":
                t._storage.removeItem("amplify-signin-with-hostedUI");
                break;
            case "cognitoHostedUI": t._storage.setItem("amplify-signin-with-hostedUI", "true");
        } })); } return e.prototype.getModuleName = function () { return "Auth"; }, e.prototype.configure = function (e) { var t = this; if (!e)
            return this._config || {}; W.debug("configure Auth"); var n = Object.assign({}, this._config, m._b.parseMobilehubConfig(e).Auth, e); this._config = n; var r = this._config, i = r.userPoolId, o = r.userPoolWebClientId, a = r.cookieStorage, u = r.oauth, c = r.region, l = r.identityPoolId, h = r.mandatorySignIn, p = r.refreshHandlers, g = r.identityPoolRegion, y = r.clientMetadata, w = r.endpoint; if (this._config.storage) {
            if (!this._isValidAuthStorage(this._config.storage))
                throw W.error("The storage in the Auth config is not valid!"), new Error("Empty storage object");
            this._storage = this._config.storage;
        }
        else
            this._storage = a ? new b.eR(a) : e.ssr ? new d : (new v.c4).getStorage(); if (this._storageSync = Promise.resolve(), "function" == typeof this._storage.sync && (this._storageSync = this._storage.sync()), i) {
            var _ = { UserPoolId: i, ClientId: o, endpoint: w };
            _.Storage = this._storage, this.userPool = new b.AM(_, this.wrapRefreshSessionCallback);
        } this.Credentials.configure({ mandatorySignIn: h, region: g || c, userPoolId: i, identityPoolId: l, refreshHandlers: p, storage: this._storage }); var S = u ? s(this._config.oauth) ? u : u.awsCognito : void 0; if (S) {
            var A = Object.assign({ cognitoClientId: o, UserPoolId: i, domain: S.domain, scopes: S.scope, redirectSignIn: S.redirectSignIn, redirectSignOut: S.redirectSignOut, responseType: S.responseType, Storage: this._storage, urlOpener: S.urlOpener, clientMetadata: y }, S.options);
            this._oAuthHandler = new D({ scopes: A.scopes, config: A, cognitoClientId: A.cognitoClientId });
            var E = {};
            !function (e) { if (f.JS.browserOrNode().isBrowser && window.location)
                !function (e) { var n = e.url; E[n] || (E[n] = !0, t._handleAuthResponse(n)); }({ url: window.location.href });
            else if (!f.JS.browserOrNode().isNode)
                throw new Error("Not supported"); }();
        } return Y("configured", null, "The Auth category has been configured successfully"), this._config; }, e.prototype.signUp = function (e) { for (var t = this, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r]; if (!this.userPool)
            return this.rejectNoUserPool(); var o, s = null, a = null, u = [], c = null; if (e && "string" == typeof e) {
            s = e, a = n ? n[0] : null;
            var l = n ? n[1] : null, f = n ? n[2] : null;
            l && u.push({ Name: "email", Value: l }), f && u.push({ Name: "phone_number", Value: f });
        }
        else {
            if (!e || "object" != typeof e)
                return this.rejectAuthError(i.SignUpError);
            s = e.username, a = e.password, e && e.clientMetadata ? o = e.clientMetadata : this._config.clientMetadata && (o = this._config.clientMetadata);
            var h = e.attributes;
            h && Object.keys(h).map((function (e) { var t = { Name: e, Value: h[e] }; u.push(t); })), c = e.validationData || null;
        } return s ? a ? (W.debug("signUp attrs:", u), W.debug("signUp validation data:", c), new Promise((function (e, n) { t.userPool.signUp(s, a, u, c, (function (t, r) { t ? (Y("signUp_failure", t, s + " failed to signup"), n(t)) : (Y("signUp", r, s + " has signed up successfully"), e(r)); }), o); }))) : this.rejectAuthError(i.EmptyPassword) : this.rejectAuthError(i.EmptyUsername); }, e.prototype.confirmSignUp = function (e, t, n) { if (!this.userPool)
            return this.rejectNoUserPool(); if (!e)
            return this.rejectAuthError(i.EmptyUsername); if (!t)
            return this.rejectAuthError(i.EmptyCode); var r, o = this.createCognitoUser(e), s = !n || "boolean" != typeof n.forceAliasCreation || n.forceAliasCreation; return n && n.clientMetadata ? r = n.clientMetadata : this._config.clientMetadata && (r = this._config.clientMetadata), new Promise((function (e, n) { o.confirmRegistration(t, s, (function (t, r) { t ? n(t) : e(r); }), r); })); }, e.prototype.resendSignUp = function (e, t) { if (void 0 === t && (t = this._config.clientMetadata), !this.userPool)
            return this.rejectNoUserPool(); if (!e)
            return this.rejectAuthError(i.EmptyUsername); var n = this.createCognitoUser(e); return new Promise((function (e, r) { n.resendConfirmationCode((function (t, n) { t ? r(t) : e(n); }), t); })); }, e.prototype.signIn = function (e, t, n) { if (void 0 === n && (n = this._config.clientMetadata), !this.userPool)
            return this.rejectNoUserPool(); var r = null, o = null, s = {}; if ("string" == typeof e)
            r = e, o = t;
        else {
            if (!e.username)
                return this.rejectAuthError(i.InvalidUsername);
            void 0 !== t && W.warn("The password should be defined under the first parameter object!"), r = e.username, o = e.password, s = e.validationData;
        } if (!r)
            return this.rejectAuthError(i.EmptyUsername); var a = new b.sD({ Username: r, Password: o, ValidationData: s, ClientMetadata: n }); return o ? this.signInWithPassword(a) : this.signInWithoutPassword(a); }, e.prototype.authCallbacks = function (e, t, n) { var r = this, i = this; return { onSuccess: function (o) { return q(r, void 0, void 0, (function () { var r, s, a, u; return K(this, (function (c) { switch (c.label) {
                case 0: W.debug(o), delete e.challengeName, delete e.challengeParam, c.label = 1;
                case 1: return c.trys.push([1, 4, 5, 9]), [4, this.Credentials.clear()];
                case 2: return c.sent(), [4, this.Credentials.set(o, "session")];
                case 3: return r = c.sent(), W.debug("succeed to get cognito credentials", r), [3, 9];
                case 4: return s = c.sent(), W.debug("cannot get cognito credentials", s), [3, 9];
                case 5: return c.trys.push([5, 7, , 8]), [4, this.currentUserPoolUser()];
                case 6: return a = c.sent(), i.user = a, Y("signIn", a, "A user " + e.getUsername() + " has been signed in"), t(a), [3, 8];
                case 7: return u = c.sent(), W.error("Failed to get the signed in user", u), n(u), [3, 8];
                case 8: return [7];
                case 9: return [2];
            } })); })); }, onFailure: function (t) { W.debug("signIn failure", t), Y("signIn_failure", t, e.getUsername() + " failed to signin"), n(t); }, customChallenge: function (n) { W.debug("signIn custom challenge answer required"), e.challengeName = "CUSTOM_CHALLENGE", e.challengeParam = n, t(e); }, mfaRequired: function (n, r) { W.debug("signIn MFA required"), e.challengeName = n, e.challengeParam = r, t(e); }, mfaSetup: function (n, r) { W.debug("signIn mfa setup", n), e.challengeName = n, e.challengeParam = r, t(e); }, newPasswordRequired: function (n, r) { W.debug("signIn new password"), e.challengeName = "NEW_PASSWORD_REQUIRED", e.challengeParam = { userAttributes: n, requiredAttributes: r }, t(e); }, totpRequired: function (n, r) { W.debug("signIn totpRequired"), e.challengeName = n, e.challengeParam = r, t(e); }, selectMFAType: function (n, r) { W.debug("signIn selectMFAType", n), e.challengeName = n, e.challengeParam = r, t(e); } }; }, e.prototype.signInWithPassword = function (e) { var t = this; if (this.pendingSignIn)
            throw new Error("Pending sign-in attempt already in progress"); var n = this.createCognitoUser(e.getUsername()); return this.pendingSignIn = new Promise((function (r, i) { n.authenticateUser(e, t.authCallbacks(n, (function (e) { t.pendingSignIn = null, r(e); }), (function (e) { t.pendingSignIn = null, i(e); }))); })), this.pendingSignIn; }, e.prototype.signInWithoutPassword = function (e) { var t = this, n = this.createCognitoUser(e.getUsername()); return n.setAuthenticationFlowType("CUSTOM_AUTH"), new Promise((function (r, i) { n.initiateAuth(e, t.authCallbacks(n, r, i)); })); }, e.prototype.getMFAOptions = function (e) { return new Promise((function (t, n) { e.getMFAOptions((function (e, r) { if (e)
            return W.debug("get MFA Options failed", e), void n(e); W.debug("get MFA options success", r), t(r); })); })); }, e.prototype.getPreferredMFA = function (e, t) { var n = this; return new Promise((function (r, i) { var o = !!t && t.bypassCache; e.getUserData((function (e, t) { if (e)
            return W.debug("getting preferred mfa failed", e), void i(e); var o = n._getMfaTypeFromUserData(t); return o ? void r(o) : void i("invalid MFA Type"); }), { bypassCache: o }); })); }, e.prototype._getMfaTypeFromUserData = function (e) { var t = null, n = e.PreferredMfaSetting; if (n)
            t = n;
        else {
            var r = e.UserMFASettingList;
            r ? 0 === r.length ? t = "NOMFA" : W.debug("invalid case for getPreferredMFA", e) : t = e.MFAOptions ? "SMS_MFA" : "NOMFA";
        } return t; }, e.prototype._getUserData = function (e, t) { return new Promise((function (n, r) { e.getUserData((function (e, t) { return e ? (W.debug("getting user data failed", e), void r(e)) : void n(t); }), t); })); }, e.prototype.setPreferredMFA = function (e, t) { return q(this, void 0, void 0, (function () { var n, r, o, s, a; return K(this, (function (u) { switch (u.label) {
            case 0: return [4, this._getUserData(e, { bypassCache: !0 })];
            case 1:
                switch (n = u.sent(), r = null, o = null, t) {
                    case "TOTP": return [3, 2];
                    case "SMS": return [3, 3];
                    case "NOMFA": return [3, 4];
                }
                return [3, 6];
            case 2: return o = { PreferredMfa: !0, Enabled: !0 }, [3, 7];
            case 3: return r = { PreferredMfa: !0, Enabled: !0 }, [3, 7];
            case 4: return s = n.UserMFASettingList, [4, this._getMfaTypeFromUserData(n)];
            case 5:
                if ("NOMFA" === (a = u.sent()))
                    return [2, Promise.resolve("No change for mfa type")];
                if ("SMS_MFA" === a)
                    r = { PreferredMfa: !1, Enabled: !1 };
                else {
                    if ("SOFTWARE_TOKEN_MFA" !== a)
                        return [2, this.rejectAuthError(i.InvalidMFA)];
                    o = { PreferredMfa: !1, Enabled: !1 };
                }
                return s && 0 !== s.length && s.forEach((function (e) { "SMS_MFA" === e ? r = { PreferredMfa: !1, Enabled: !1 } : "SOFTWARE_TOKEN_MFA" === e && (o = { PreferredMfa: !1, Enabled: !1 }); })), [3, 7];
            case 6: return W.debug("no validmfa method provided"), [2, this.rejectAuthError(i.NoMFA)];
            case 7: return [2, new Promise((function (t, n) { e.setUserMfaPreference(r, o, (function (r, i) { if (r)
                    return W.debug("Set user mfa preference error", r), n(r); W.debug("Set user mfa success", i), W.debug("Caching the latest user data into local"), e.getUserData((function (e, r) { return e ? (W.debug("getting user data failed", e), n(e)) : t(i); }), { bypassCache: !0 }); })); }))];
        } })); })); }, e.prototype.disableSMS = function (e) { return new Promise((function (t, n) { e.disableMFA((function (e, r) { if (e)
            return W.debug("disable mfa failed", e), void n(e); W.debug("disable mfa succeed", r), t(r); })); })); }, e.prototype.enableSMS = function (e) { return new Promise((function (t, n) { e.enableMFA((function (e, r) { if (e)
            return W.debug("enable mfa failed", e), void n(e); W.debug("enable mfa succeed", r), t(r); })); })); }, e.prototype.setupTOTP = function (e) { return new Promise((function (t, n) { e.associateSoftwareToken({ onFailure: function (e) { W.debug("associateSoftwareToken failed", e), n(e); }, associateSecretCode: function (e) { W.debug("associateSoftwareToken sucess", e), t(e); } }); })); }, e.prototype.verifyTotpToken = function (e, t) { return W.debug("verfication totp token", e, t), new Promise((function (n, r) { e.verifySoftwareToken(t, "My TOTP device", { onFailure: function (e) { W.debug("verifyTotpToken failed", e), r(e); }, onSuccess: function (t) { Y("signIn", e, "A user " + e.getUsername() + " has been signed in"), W.debug("verifyTotpToken success", t), n(t); } }); })); }, e.prototype.confirmSignIn = function (e, t, n, r) { var o = this; if (void 0 === r && (r = this._config.clientMetadata), !t)
            return this.rejectAuthError(i.EmptyCode); var s = this; return new Promise((function (i, a) { e.sendMFACode(t, { onSuccess: function (t) { return q(o, void 0, void 0, (function () { var n, r; return K(this, (function (o) { switch (o.label) {
                case 0: W.debug(t), o.label = 1;
                case 1: return o.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                case 2: return o.sent(), [4, this.Credentials.set(t, "session")];
                case 3: return n = o.sent(), W.debug("succeed to get cognito credentials", n), [3, 6];
                case 4: return r = o.sent(), W.debug("cannot get cognito credentials", r), [3, 6];
                case 5: return s.user = e, Y("signIn", e, "A user " + e.getUsername() + " has been signed in"), i(e), [7];
                case 6: return [2];
            } })); })); }, onFailure: function (e) { W.debug("confirm signIn failure", e), a(e); } }, n, r); })); }, e.prototype.completeNewPassword = function (e, t, n, r) { var o = this; if (void 0 === n && (n = {}), void 0 === r && (r = this._config.clientMetadata), !t)
            return this.rejectAuthError(i.EmptyPassword); var s = this; return new Promise((function (i, a) { e.completeNewPasswordChallenge(t, n, { onSuccess: function (t) { return q(o, void 0, void 0, (function () { var n, r; return K(this, (function (o) { switch (o.label) {
                case 0: W.debug(t), o.label = 1;
                case 1: return o.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                case 2: return o.sent(), [4, this.Credentials.set(t, "session")];
                case 3: return n = o.sent(), W.debug("succeed to get cognito credentials", n), [3, 6];
                case 4: return r = o.sent(), W.debug("cannot get cognito credentials", r), [3, 6];
                case 5: return s.user = e, Y("signIn", e, "A user " + e.getUsername() + " has been signed in"), i(e), [7];
                case 6: return [2];
            } })); })); }, onFailure: function (e) { W.debug("completeNewPassword failure", e), Y("completeNewPassword_failure", e, o.user + " failed to complete the new password flow"), a(e); }, mfaRequired: function (t, n) { W.debug("signIn MFA required"), e.challengeName = t, e.challengeParam = n, i(e); }, mfaSetup: function (t, n) { W.debug("signIn mfa setup", t), e.challengeName = t, e.challengeParam = n, i(e); }, totpRequired: function (t, n) { W.debug("signIn mfa setup", t), e.challengeName = t, e.challengeParam = n, i(e); } }, r); })); }, e.prototype.sendCustomChallengeAnswer = function (e, t, n) { var r = this; return void 0 === n && (n = this._config.clientMetadata), this.userPool ? t ? new Promise((function (i, o) { e.sendCustomChallengeAnswer(t, r.authCallbacks(e, i, o), n); })) : this.rejectAuthError(i.EmptyChallengeResponse) : this.rejectNoUserPool(); }, e.prototype.updateUserAttributes = function (e, t, n) { void 0 === n && (n = this._config.clientMetadata); var r = [], i = this; return new Promise((function (o, s) { i.userSession(e).then((function (i) { for (var a in t)
            if ("sub" !== a && a.indexOf("_verified") < 0) {
                var u = { Name: a, Value: t[a] };
                r.push(u);
            } e.updateAttributes(r, (function (e, t) { return e ? s(e) : o(t); }), n); })); })); }, e.prototype.userAttributes = function (e) { var t = this; return new Promise((function (n, r) { t.userSession(e).then((function (t) { e.getUserAttributes((function (e, t) { e ? r(e) : n(t); })); })); })); }, e.prototype.verifiedContact = function (e) { var t = this; return this.userAttributes(e).then((function (e) { var n = t.attributesToObject(e), r = {}, i = {}; return n.email && (n.email_verified ? i.email = n.email : r.email = n.email), n.phone_number && (n.phone_number_verified ? i.phone_number = n.phone_number : r.phone_number = n.phone_number), { verified: i, unverified: r }; })); }, e.prototype.currentUserPoolUser = function (e) { var t = this; return this.userPool ? new Promise((function (n, r) { t._storageSync.then((function () { return q(t, void 0, void 0, (function () { var t, i = this; return K(this, (function (o) { switch (o.label) {
            case 0: return this.isOAuthInProgress() ? (W.debug("OAuth signIn in progress, waiting for resolution..."), [4, new Promise((function (e) { var t = setTimeout((function () { W.debug("OAuth signIn in progress timeout"), g.Xb.remove("auth", n), e(); }), 1e4); function n(r) { var i = r.payload.event; "cognitoHostedUI" !== i && "cognitoHostedUI_failure" !== i || (W.debug("OAuth signIn resolved: " + i), clearTimeout(t), g.Xb.remove("auth", n), e()); } g.Xb.listen("auth", n); }))]) : [3, 2];
            case 1: o.sent(), o.label = 2;
            case 2: return (t = this.userPool.getCurrentUser()) ? (t.getSession((function (o, s) { return q(i, void 0, void 0, (function () { var i, a, u = this; return K(this, (function (c) { switch (c.label) {
                case 0: return o ? (W.debug("Failed to get the user session", o), r(o), [2]) : (i = !!e && e.bypassCache) ? [4, this.Credentials.clear()] : [3, 2];
                case 1: c.sent(), c.label = 2;
                case 2: return (void 0 === (a = s.getAccessToken().decodePayload().scope) ? "" : a).split(" ").includes(z) ? (t.getUserData((function (e, i) { if (e)
                    return W.debug("getting user data failed", e), void ("User is disabled." === e.message || "User does not exist." === e.message || "Access Token has been revoked" === e.message ? r(e) : n(t)); for (var o = i.PreferredMfaSetting || "NOMFA", s = [], a = 0; a < i.UserAttributes.length; a++) {
                    var c = { Name: i.UserAttributes[a].Name, Value: i.UserAttributes[a].Value }, l = new b.KC(c);
                    s.push(l);
                } var f = u.attributesToObject(s); return Object.assign(t, { attributes: f, preferredMFA: o }), n(t); }), { bypassCache: i }), [2]) : (W.debug("Unable to get the user data because the " + z + " is not in the scopes of the access token"), [2, n(t)]);
            } })); })); })), [2]) : (W.debug("Failed to get user from user pool"), r("No current user"), [2]);
        } })); })); })).catch((function (e) { return W.debug("Failed to sync cache info into memory", e), r(e); })); })) : this.rejectNoUserPool(); }, e.prototype.isOAuthInProgress = function () { return this.oAuthFlowInProgress; }, e.prototype.currentAuthenticatedUser = function (e) { return q(this, void 0, void 0, (function () { var t, n, r, i, o; return K(this, (function (s) { switch (s.label) {
            case 0: W.debug("getting current authenticated user"), t = null, s.label = 1;
            case 1: return s.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2: return s.sent(), [3, 4];
            case 3: throw n = s.sent(), W.debug("Failed to sync cache info into memory", n), n;
            case 4:
                try {
                    (r = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"))) && (t = H(H({}, r.user), { token: r.token }));
                }
                catch (e) {
                    W.debug("cannot load federated user from auth storage");
                }
                return t ? (this.user = t, W.debug("get current authenticated federated user", this.user), [2, this.user]) : [3, 5];
            case 5: W.debug("get current authenticated userpool user"), i = null, s.label = 6;
            case 6: return s.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser(e)];
            case 7: return i = s.sent(), [3, 9];
            case 8: return "No userPool" === (o = s.sent()) && W.error("Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"), W.debug("The user is not authenticated by the error", o), [2, Promise.reject("The user is not authenticated")];
            case 9: return this.user = i, [2, this.user];
        } })); })); }, e.prototype.currentSession = function () { var e = this; return W.debug("Getting current session"), this.userPool ? new Promise((function (t, n) { e.currentUserPoolUser().then((function (r) { e.userSession(r).then((function (e) { t(e); })).catch((function (e) { W.debug("Failed to get the current session", e), n(e); })); })).catch((function (e) { W.debug("Failed to get the current user", e), n(e); })); })) : Promise.reject(); }, e.prototype.userSession = function (e) { return e ? new Promise((function (t, n) { W.debug("Getting the session from this user:", e), e.getSession((function (r, i) { return r ? (W.debug("Failed to get the session from user", e), void n(r)) : (W.debug("Succeed to get the user session", i), void t(i)); })); })) : (W.debug("the user is null"), this.rejectAuthError(i.NoUserSession)); }, e.prototype.currentUserCredentials = function () { return q(this, void 0, void 0, (function () { var e, t, n = this; return K(this, (function (r) { switch (r.label) {
            case 0: W.debug("Getting current user credentials"), r.label = 1;
            case 1: return r.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2: return r.sent(), [3, 4];
            case 3: throw e = r.sent(), W.debug("Failed to sync cache info into memory", e), e;
            case 4:
                t = null;
                try {
                    t = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"));
                }
                catch (e) {
                    W.debug("failed to get or parse item aws-amplify-federatedInfo", e);
                }
                return t ? [2, this.Credentials.refreshFederatedToken(t)] : [2, this.currentSession().then((function (e) { return W.debug("getting session success", e), n.Credentials.set(e, "session"); })).catch((function (e) { return W.debug("getting session failed", e), n.Credentials.set(null, "guest"); }))];
        } })); })); }, e.prototype.currentCredentials = function () { return W.debug("getting current credentials"), this.Credentials.get(); }, e.prototype.verifyUserAttribute = function (e, t, n) { return void 0 === n && (n = this._config.clientMetadata), new Promise((function (r, i) { e.getAttributeVerificationCode(t, { onSuccess: function () { return r(); }, onFailure: function (e) { return i(e); } }, n); })); }, e.prototype.verifyUserAttributeSubmit = function (e, t, n) { return n ? new Promise((function (r, i) { e.verifyAttribute(t, n, { onSuccess: function (e) { r(e); }, onFailure: function (e) { i(e); } }); })) : this.rejectAuthError(i.EmptyCode); }, e.prototype.verifyCurrentUserAttribute = function (e) { var t = this; return t.currentUserPoolUser().then((function (n) { return t.verifyUserAttribute(n, e); })); }, e.prototype.verifyCurrentUserAttributeSubmit = function (e, t) { var n = this; return n.currentUserPoolUser().then((function (r) { return n.verifyUserAttributeSubmit(r, e, t); })); }, e.prototype.cognitoIdentitySignOut = function (e, t) { return q(this, void 0, void 0, (function () { var n, r, i = this; return K(this, (function (o) { switch (o.label) {
            case 0: return o.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1: return o.sent(), [3, 3];
            case 2: throw n = o.sent(), W.debug("Failed to sync cache info into memory", n), n;
            case 3: return r = this._oAuthHandler && "true" === this._storage.getItem("amplify-signin-with-hostedUI"), [2, new Promise((function (n, o) { if (e && e.global)
                    W.debug("user global sign out", t), t.getSession((function (e, s) { if (e)
                        return W.debug("failed to get the user session", e), o(e); t.globalSignOut({ onSuccess: function (e) { if (W.debug("global sign out success"), !r)
                            return n(); i.oAuthSignOutRedirect(n, o); }, onFailure: function (e) { return W.debug("global sign out failed", e), o(e); } }); }));
                else {
                    if (W.debug("user sign out", t), t.signOut(), !r)
                        return n();
                    i.oAuthSignOutRedirect(n, o);
                } }))];
        } })); })); }, e.prototype.oAuthSignOutRedirect = function (e, t) { f.JS.browserOrNode().isBrowser ? this.oAuthSignOutRedirectOrReject(t) : this.oAuthSignOutAndResolve(e); }, e.prototype.oAuthSignOutAndResolve = function (e) { this._oAuthHandler.signOut(), e(); }, e.prototype.oAuthSignOutRedirectOrReject = function (e) { this._oAuthHandler.signOut(), setTimeout((function () { return e("Signout timeout fail"); }), 3e3); }, e.prototype.signOut = function (e) { return q(this, void 0, void 0, (function () { var t; return K(this, (function (n) { switch (n.label) {
            case 0: return n.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()];
            case 1: return n.sent(), [3, 3];
            case 2: return n.sent(), W.debug("failed to clear cached items"), [3, 3];
            case 3: return this.userPool ? (t = this.userPool.getCurrentUser()) ? [4, this.cognitoIdentitySignOut(e, t)] : [3, 5] : [3, 7];
            case 4: return n.sent(), [3, 6];
            case 5: W.debug("no current Cognito user"), n.label = 6;
            case 6: return [3, 8];
            case 7: W.debug("no Congito User pool"), n.label = 8;
            case 8: return Y("signOut", this.user, "A user has been signed out"), this.user = null, [2];
        } })); })); }, e.prototype.cleanCachedItems = function () { return q(this, void 0, void 0, (function () { return K(this, (function (e) { switch (e.label) {
            case 0: return [4, this.Credentials.clear()];
            case 1: return e.sent(), [2];
        } })); })); }, e.prototype.changePassword = function (e, t, n, r) { var i = this; return void 0 === r && (r = this._config.clientMetadata), new Promise((function (o, s) { i.userSession(e).then((function (i) { e.changePassword(t, n, (function (e, t) { return e ? (W.debug("change password failure", e), s(e)) : o(t); }), r); })); })); }, e.prototype.forgotPassword = function (e, t) { if (void 0 === t && (t = this._config.clientMetadata), !this.userPool)
            return this.rejectNoUserPool(); if (!e)
            return this.rejectAuthError(i.EmptyUsername); var n = this.createCognitoUser(e); return new Promise((function (r, i) { n.forgotPassword({ onSuccess: function () { r(); }, onFailure: function (t) { W.debug("forgot password failure", t), Y("forgotPassword_failure", t, e + " forgotPassword failed"), i(t); }, inputVerificationCode: function (t) { Y("forgotPassword", n, e + " has initiated forgot password flow"), r(t); } }, t); })); }, e.prototype.forgotPasswordSubmit = function (e, t, n, r) { if (void 0 === r && (r = this._config.clientMetadata), !this.userPool)
            return this.rejectNoUserPool(); if (!e)
            return this.rejectAuthError(i.EmptyUsername); if (!t)
            return this.rejectAuthError(i.EmptyCode); if (!n)
            return this.rejectAuthError(i.EmptyPassword); var o = this.createCognitoUser(e); return new Promise((function (i, s) { o.confirmPassword(t, n, { onSuccess: function () { Y("forgotPasswordSubmit", o, e + " forgotPasswordSubmit successful"), i(); }, onFailure: function (t) { Y("forgotPasswordSubmit_failure", t, e + " forgotPasswordSubmit failed"), s(t); } }, r); })); }, e.prototype.currentUserInfo = function () { return q(this, void 0, void 0, (function () { var e, t, n, r, i, o, s; return K(this, (function (a) { switch (a.label) {
            case 0: return (e = this.Credentials.getCredSource()) && "aws" !== e && "userPool" !== e ? [3, 9] : [4, this.currentUserPoolUser().catch((function (e) { return W.debug(e); }))];
            case 1:
                if (!(s = a.sent()))
                    return [2, null];
                a.label = 2;
            case 2: return a.trys.push([2, 8, , 9]), [4, this.userAttributes(s)];
            case 3: t = a.sent(), n = this.attributesToObject(t), r = null, a.label = 4;
            case 4: return a.trys.push([4, 6, , 7]), [4, this.currentCredentials()];
            case 5: return r = a.sent(), [3, 7];
            case 6: return i = a.sent(), W.debug("Failed to retrieve credentials while getting current user info", i), [3, 7];
            case 7: return [2, { id: r ? r.identityId : void 0, username: s.getUsername(), attributes: n }];
            case 8: return o = a.sent(), W.debug("currentUserInfo error", o), [2, {}];
            case 9: return "federated" === e ? [2, (s = this.user) || {}] : [2];
        } })); })); }, e.prototype.federatedSignIn = function (e, t, n) { return q(this, void 0, void 0, (function () { var i, a, u, c, l, f, h, d, p, g, y; return K(this, (function (m) { switch (m.label) {
            case 0:
                if (!this._config.identityPoolId && !this._config.userPoolId)
                    throw new Error("Federation requires either a User Pool or Identity Pool in config");
                if (void 0 === e && this._config.identityPoolId && !this._config.userPoolId)
                    throw new Error("Federation with Identity Pools requires tokens passed as arguments");
                return o(e) || (v = e) && ["customProvider"].find((function (e) { return v.hasOwnProperty(e); })) || function (e) { return e && !!["customState"].find((function (t) { return e.hasOwnProperty(t); })); }(e) || void 0 === e ? (i = e || { provider: r.Cognito }, l = o(i) ? i.provider : i.customProvider, o(i), a = i.customState, this._config.userPoolId && (u = s(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, c = s(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, c, u, l, a)), [3, 4]) : [3, 1];
            case 1:
                l = e;
                try {
                    (f = JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user)) && W.warn("There is already a signed in user: " + f + " in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior.");
                }
                catch (e) { }
                return h = t.token, d = t.identity_id, p = t.expires_at, [4, this.Credentials.set({ provider: l, token: h, identity_id: d, user: n, expires_at: p }, "federation")];
            case 2: return g = m.sent(), [4, this.currentAuthenticatedUser()];
            case 3: return y = m.sent(), Y("signIn", y, "A user " + y.username + " has been signed in"), W.debug("federated sign in credentials", g), [2, g];
            case 4: return [2];
        } var v; })); })); }, e.prototype._handleAuthResponse = function (e) { return q(this, void 0, void 0, (function () { var t, n, r, i, o, s, a, u, c, l, h, d, p, g; return K(this, (function (y) { switch (y.label) {
            case 0:
                if (this.oAuthFlowInProgress)
                    return W.debug("Skipping URL " + e + " current flow in progress"), [2];
                y.label = 1;
            case 1:
                if (y.trys.push([1, , 8, 9]), this.oAuthFlowInProgress = !0, !this._config.userPoolId)
                    throw new Error("OAuth responses require a User Pool defined in config");
                if (Y("parsingCallbackUrl", { url: e }, "The callback url is being parsed"), t = e || (f.JS.browserOrNode().isBrowser ? window.location.href : ""), n = !!((0, _.Qc)(t).query || "").split("&").map((function (e) { return e.split("="); })).find((function (e) { var t = V(e, 1)[0]; return "code" === t || "error" === t; })), r = !!((0, _.Qc)(t).hash || "#").substr(1).split("&").map((function (e) { return e.split("="); })).find((function (e) { var t = V(e, 1)[0]; return "access_token" === t || "error" === t; })), !n && !r)
                    return [3, 7];
                this._storage.setItem("amplify-redirected-from-hosted-ui", "true"), y.label = 2;
            case 2: return y.trys.push([2, 6, , 7]), [4, this._oAuthHandler.handleAuthResponse(t)];
            case 3: return i = y.sent(), o = i.accessToken, s = i.idToken, a = i.refreshToken, u = i.state, c = new b.MZ({ IdToken: new b.xk({ IdToken: s }), RefreshToken: new b.bR({ RefreshToken: a }), AccessToken: new b.ZA({ AccessToken: o }) }), l = void 0, this._config.identityPoolId ? [4, this.Credentials.set(c, "session")] : [3, 5];
            case 4: l = y.sent(), W.debug("AWS credentials", l), y.label = 5;
            case 5: return h = /-/.test(u), (d = this.createCognitoUser(c.getIdToken().decodePayload()["cognito:username"])).setSignInUserSession(c), window && void 0 !== window.history && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), Y("signIn", d, "A user " + d.getUsername() + " has been signed in"), Y("cognitoHostedUI", d, "A user " + d.getUsername() + " has been signed in via Cognito Hosted UI"), h && (p = u.split("-").splice(1).join("-"), Y("customOAuthState", p.match(/.{2}/g).map((function (e) { return String.fromCharCode(parseInt(e, 16)); })).join(""), "State for user " + d.getUsername())), [2, l];
            case 6: return g = y.sent(), W.debug("Error in cognito hosted auth response", g), Y("signIn_failure", g, "The OAuth response flow failed"), Y("cognitoHostedUI_failure", g, "A failure occurred when returning to the Cognito Hosted UI"), Y("customState_failure", g, "A failure occurred when returning state"), [3, 7];
            case 7: return [3, 9];
            case 8: return this.oAuthFlowInProgress = !1, [7];
            case 9: return [2];
        } })); })); }, e.prototype.essentialCredentials = function (e) { return { accessKeyId: e.accessKeyId, sessionToken: e.sessionToken, secretAccessKey: e.secretAccessKey, identityId: e.identityId, authenticated: e.authenticated }; }, e.prototype.attributesToObject = function (e) { var t = {}; return e && e.map((function (e) { "email_verified" === e.Name || "phone_number_verified" === e.Name ? t[e.Name] = "true" === e.Value || !0 === e.Value : t[e.Name] = e.Value; })), t; }, e.prototype.createCognitoUser = function (e) { var t = { Username: e, Pool: this.userPool }; t.Storage = this._storage; var n = this._config.authenticationFlowType, r = new b.ws(t); return n && r.setAuthenticationFlowType(n), r; }, e.prototype._isValidAuthStorage = function (e) { return !!e && "function" == typeof e.getItem && "function" == typeof e.setItem && "function" == typeof e.removeItem && "function" == typeof e.clear; }, e.prototype.noUserPoolErrorHandler = function (e) { return !e || e.userPoolId && e.identityPoolId ? i.NoConfig : i.MissingAuthConfig; }, e.prototype.rejectAuthError = function (e) { return Promise.reject(new F(e)); }, e.prototype.rejectNoUserPool = function () { var e = this.noUserPoolErrorHandler(this._config); return Promise.reject(new j(e)); }, e; }())(null);
        w.dQ.register(J);
    }, 3926: function (e, t, n) {
        "use strict";
        var r;
        n.d(t, { A: function () { return r; } }), function (e) { e.DEFAULT_MSG = "Authentication Error", e.EMPTY_USERNAME = "Username cannot be empty", e.INVALID_USERNAME = "The username should either be a string or one of the sign in types", e.EMPTY_PASSWORD = "Password cannot be empty", e.EMPTY_CODE = "Confirmation code cannot be empty", e.SIGN_UP_ERROR = "Error creating account", e.NO_MFA = "No valid MFA method provided", e.INVALID_MFA = "Invalid MFA type", e.EMPTY_CHALLENGE = "Challenge response cannot be empty", e.NO_USER_SESSION = "Failed to get the session because the user is empty"; }(r || (r = {}));
    }, 5387: function (e, t, n) {
        "use strict";
        n.d(t, { dQ: function () { return o; } });
        var r = n(5069), i = new r.k("Amplify"), o = new (function () { function e() { this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Logger = r.k, this.ServiceWorker = null; } return e.prototype.register = function (e) { i.debug("component registered in amplify", e), this._components.push(e), "function" == typeof e.getModuleName ? (this._modules[e.getModuleName()] = e, this[e.getModuleName()] = e) : i.debug("no getModuleName method for component", e), e.configure(this._config); }, e.prototype.configure = function (e) { var t = this; return e ? (this._config = Object.assign(this._config, e), i.debug("amplify config", this._config), Object.entries(this._modules).forEach((function (e) { var n = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }(e, 2), r = (n[0], n[1]); Object.keys(r).forEach((function (e) { t._modules[e] && (r[e] = t._modules[e]); })); })), this._components.map((function (e) { e.configure(t._config); })), this._config) : this._config; }, e.prototype.addPluggable = function (e) { e && e.getCategory && "function" == typeof e.getCategory && this._components.map((function (t) { t.addPluggable && "function" == typeof t.addPluggable && t.addPluggable(e); })); }, e; }());
    }, 8832: function (e, t, n) {
        "use strict";
        n.d(t, { cN: function () { return jt; } });
        var r = n(5069), i = n(6648), o = n(9222), s = function () { var e = function (t, n) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(t, n); }; return function (t, n) { function r() { this.constructor = t; } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }(), a = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }, u = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(a(arguments[t])); return e; }, c = new r.k("Util"), l = function (e) { function t(t) { var n = e.call(this, t) || this; return n.nonRetryable = !0, n; } return s(t, e), t; }(Error);
        function f(e, t, n, r) { return void 0 === r && (r = 1), i = this, o = void 0, a = function () { var i, o; return function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }(this, (function (s) { switch (s.label) {
            case 0:
                if ("function" != typeof e)
                    throw Error("functionToRetry must be a function");
                c.debug(e.name + " attempt #" + r + " with this vars: " + JSON.stringify(t)), s.label = 1;
            case 1: return s.trys.push([1, 3, , 8]), [4, e.apply(void 0, u(t))];
            case 2: return [2, s.sent()];
            case 3:
                if (i = s.sent(), c.debug("error on " + e.name, i), (a = i) && a.nonRetryable)
                    throw c.debug(e.name + " non retryable error", i), i;
                return o = n(r, t, i), c.debug(e.name + " retrying in " + o + " ms"), !1 === o ? [3, 6] : [4, new Promise((function (e) { return setTimeout(e, o); }))];
            case 4: return s.sent(), [4, f(e, t, n, r + 1)];
            case 5: return [2, s.sent()];
            case 6: throw i;
            case 7: return [3, 8];
            case 8: return [2];
        } var a; })); }, new ((s = void 0) || (s = Promise))((function (e, t) { function n(e) { try {
            u(a.next(e));
        }
        catch (e) {
            t(e);
        } } function r(e) { try {
            u(a.throw(e));
        }
        catch (e) {
            t(e);
        } } function u(t) { var i; t.done ? e(t.value) : (i = t.value, i instanceof s ? i : new s((function (e) { e(i); }))).then(n, r); } u((a = a.apply(i, o || [])).next()); })); var i, o, s, a; }
        var h = new r.k("CognitoCredentials"), d = new Promise((function (e, t) { return (0, o.lC)().isBrowser ? window.gapi && window.gapi.auth2 && window.gapi.auth2 ? (h.debug("google api already loaded"), e()) : void setTimeout((function () { return e(); }), 2e3) : (h.debug("not in the browser, directly resolved"), e()); })), p = function () { function e() { this.initialized = !1, this.refreshGoogleToken = this.refreshGoogleToken.bind(this), this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this); } return e.prototype.refreshGoogleToken = function () { return e = this, t = void 0, r = function () { return function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }(this, (function (e) { switch (e.label) {
            case 0: return this.initialized ? [3, 2] : (h.debug("need to wait for the Google SDK loaded"), [4, d]);
            case 1: e.sent(), this.initialized = !0, h.debug("finish waiting"), e.label = 2;
            case 2: return [2, this._refreshGoogleTokenImpl()];
        } })); }, new ((n = void 0) || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); var e, t, n, r; }, e.prototype._refreshGoogleTokenImpl = function () { var e = null; return (0, o.lC)().isBrowser && (e = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), e ? new Promise((function (t, n) { e.getAuthInstance().then((function (e) { e || (h.debug("google Auth undefined"), n(new l("google Auth undefined"))); var r = e.currentUser.get(); r.isSignedIn() ? (h.debug("refreshing the google access token"), r.reloadAuthResponse().then((function (e) { var n = e.id_token, r = e.expires_at; t({ token: n, expires_at: r }); })).catch((function (e) { e && "network_error" === e.error ? n("Network error reloading google auth response") : n(new l("Failed to reload google auth response")); }))) : n(new l("User is not signed in with Google")); })).catch((function (e) { h.debug("Failed to refresh google token", e), n(new l("Failed to refresh google token")); })); })) : (h.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available")); }, e; }(), g = new r.k("CognitoCredentials"), y = new Promise((function (e, t) { return (0, o.lC)().isBrowser ? window.FB ? (g.debug("FB SDK already loaded"), e()) : void setTimeout((function () { return e(); }), 2e3) : (g.debug("not in the browser, directly resolved"), e()); })), m = function () { function e() { this.initialized = !1, this.refreshFacebookToken = this.refreshFacebookToken.bind(this), this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this); } return e.prototype.refreshFacebookToken = function () { return e = this, t = void 0, r = function () { return function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }(this, (function (e) { switch (e.label) {
            case 0: return this.initialized ? [3, 2] : (g.debug("need to wait for the Facebook SDK loaded"), [4, y]);
            case 1: e.sent(), this.initialized = !0, g.debug("finish waiting"), e.label = 2;
            case 2: return [2, this._refreshFacebookTokenImpl()];
        } })); }, new ((n = void 0) || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); var e, t, n, r; }, e.prototype._refreshFacebookTokenImpl = function () { var e = null; if ((0, o.lC)().isBrowser && (e = window.FB), !e) {
            var t = "no fb sdk available";
            return g.debug(t), Promise.reject(new l(t));
        } return new Promise((function (t, n) { e.getLoginStatus((function (e) { if (e && e.authResponse) {
            var r = e.authResponse, i = r.accessToken, o = 1e3 * r.expiresIn + (new Date).getTime();
            i || (s = "the jwtToken is undefined", g.debug(s), n(new l(s))), t({ token: i, expires_at: o });
        }
        else {
            var s = "no response from facebook when refreshing the jwt token";
            g.debug(s), n(new l(s));
        } }), { scope: "public_profile,email" }); })); }, e; }(), v = new p, w = new m, b = n(9270), _ = n(5387), S = n(655), A = function (e, t) { return (A = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); })(e, t); };
        function E(e, t) { function n() { this.constructor = e; } A(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }
        var C, I, T, P, U, O, R, k, x, D, L, N, $, M, F, j, B, H, q, K, V, W, z, G, Y, J, Z, X, Q, ee, te, ne, re, ie, oe, se, ae, ue, ce, le, fe, he, de, pe, ge, ye, me, ve, we, be, _e, Se, Ae, Ee, Ce, Ie, Te, Pe = function () { return (Pe = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
        function Ue(e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); }
        function Oe(e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }
        Object.create, Object.create, function (e) { e.AUTHENTICATED_ROLE = "AuthenticatedRole", e.DENY = "Deny"; }(C || (C = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(I || (I = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(T || (T = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(P || (P = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(U || (U = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(O || (O = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(R || (R = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(k || (k = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(x || (x = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(D || (D = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(L || (L = {})), function (e) { e.ACCESS_DENIED = "AccessDenied", e.INTERNAL_SERVER_ERROR = "InternalServerError"; }(N || (N = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }($ || ($ = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(M || (M = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(F || (F = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(j || (j = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(B || (B = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(H || (H = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(q || (q = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(K || (K = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(V || (V = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(W || (W = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(z || (z = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(G || (G = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Y || (Y = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(J || (J = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Z || (Z = {})), function (e) { e.CONTAINS = "Contains", e.EQUALS = "Equals", e.NOT_EQUAL = "NotEqual", e.STARTS_WITH = "StartsWith"; }(X || (X = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Q || (Q = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ee || (ee = {})), function (e) { e.RULES = "Rules", e.TOKEN = "Token"; }(te || (te = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ne || (ne = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(re || (re = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ie || (ie = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(oe || (oe = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(se || (se = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ae || (ae = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ue || (ue = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ce || (ce = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(le || (le = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(fe || (fe = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(he || (he = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(de || (de = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(pe || (pe = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ge || (ge = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ye || (ye = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(me || (me = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(ve || (ve = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(we || (we = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(be || (be = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(_e || (_e = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Se || (Se = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Ae || (Ae = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Ee || (Ee = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Ce || (Ce = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Ie || (Ie = {})), function (e) { e.filterSensitiveLog = function (e) { return Pe({}, e); }; }(Te || (Te = {}));
        var Re = n(8467), ke = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r, i, o, s, a, u, c, l, f, h, d, p, g, y, m; return Oe(this, (function (v) { switch (v.label) {
            case 0: return r = [Pe({}, e)], m = {}, [4, nt(e.body, t)];
            case 1:
                switch (n = Pe.apply(void 0, r.concat([(m.body = v.sent(), m)])), o = "UnknownError", s = n.body.__type.split("#"), o = void 0 === s[1] ? s[0] : s[1]) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException": return [3, 2];
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException": return [3, 4];
                    case "InvalidIdentityPoolConfigurationException":
                    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException": return [3, 6];
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException": return [3, 8];
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException": return [3, 10];
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException": return [3, 12];
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException": return [3, 14];
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException": return [3, 16];
                }
                return [3, 18];
            case 2: return a = [{}], [4, De(n, t)];
            case 3: return i = Pe.apply(void 0, [Pe.apply(void 0, a.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 4: return u = [{}], [4, Le(n, t)];
            case 5: return i = Pe.apply(void 0, [Pe.apply(void 0, u.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 6: return c = [{}], [4, Ne(n, t)];
            case 7: return i = Pe.apply(void 0, [Pe.apply(void 0, c.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 8: return l = [{}], [4, $e(n, t)];
            case 9: return i = Pe.apply(void 0, [Pe.apply(void 0, l.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 10: return f = [{}], [4, Fe(n, t)];
            case 11: return i = Pe.apply(void 0, [Pe.apply(void 0, f.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 12: return h = [{}], [4, je(n, t)];
            case 13: return i = Pe.apply(void 0, [Pe.apply(void 0, h.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 14: return d = [{}], [4, Be(n, t)];
            case 15: return i = Pe.apply(void 0, [Pe.apply(void 0, d.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 16: return p = [{}], [4, He(n, t)];
            case 17: return i = Pe.apply(void 0, [Pe.apply(void 0, p.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 18: g = n.body, o = g.code || g.Code || o, i = Pe(Pe({}, g), { name: "" + o, message: g.message || g.Message || o, $fault: "client", $metadata: et(e) }), v.label = 19;
            case 19: return y = i.message || i.Message || o, i.message = y, delete i.Message, [2, Promise.reject(Object.assign(new Error(y), i))];
        } })); })); }, xe = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r, i, o, s, a, u, c, l, f, h, d, p, g, y, m; return Oe(this, (function (v) { switch (v.label) {
            case 0: return r = [Pe({}, e)], m = {}, [4, nt(e.body, t)];
            case 1:
                switch (n = Pe.apply(void 0, r.concat([(m.body = v.sent(), m)])), o = "UnknownError", s = n.body.__type.split("#"), o = void 0 === s[1] ? s[0] : s[1]) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException": return [3, 2];
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException": return [3, 4];
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException": return [3, 6];
                    case "LimitExceededException":
                    case "com.amazonaws.cognitoidentity#LimitExceededException": return [3, 8];
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException": return [3, 10];
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException": return [3, 12];
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException": return [3, 14];
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException": return [3, 16];
                }
                return [3, 18];
            case 2: return a = [{}], [4, De(n, t)];
            case 3: return i = Pe.apply(void 0, [Pe.apply(void 0, a.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 4: return u = [{}], [4, Le(n, t)];
            case 5: return i = Pe.apply(void 0, [Pe.apply(void 0, u.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 6: return c = [{}], [4, $e(n, t)];
            case 7: return i = Pe.apply(void 0, [Pe.apply(void 0, c.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 8: return l = [{}], [4, Me(n, t)];
            case 9: return i = Pe.apply(void 0, [Pe.apply(void 0, l.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 10: return f = [{}], [4, Fe(n, t)];
            case 11: return i = Pe.apply(void 0, [Pe.apply(void 0, f.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 12: return h = [{}], [4, je(n, t)];
            case 13: return i = Pe.apply(void 0, [Pe.apply(void 0, h.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 14: return d = [{}], [4, Be(n, t)];
            case 15: return i = Pe.apply(void 0, [Pe.apply(void 0, d.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 16: return p = [{}], [4, He(n, t)];
            case 17: return i = Pe.apply(void 0, [Pe.apply(void 0, p.concat([v.sent()])), { name: o, $metadata: et(e) }]), [3, 19];
            case 18: g = n.body, o = g.code || g.Code || o, i = Pe(Pe({}, g), { name: "" + o, message: g.message || g.Message || o, $fault: "client", $metadata: et(e) }), v.label = 19;
            case 19: return y = i.message || i.Message || o, i.message = y, delete i.Message, [2, Promise.reject(Object.assign(new Error(y), i))];
        } })); })); }, De = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = Ve(n, t), [2, Pe({ name: "ExternalServiceException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, Le = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = We(n, t), [2, Pe({ name: "InternalErrorException", $fault: "server", $metadata: et(e) }, r)]; })); })); }, Ne = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = ze(n, t), [2, Pe({ name: "InvalidIdentityPoolConfigurationException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, $e = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = Ge(n, t), [2, Pe({ name: "InvalidParameterException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, Me = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = Ye(n, t), [2, Pe({ name: "LimitExceededException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, Fe = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = Je(n, t), [2, Pe({ name: "NotAuthorizedException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, je = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = Ze(n, t), [2, Pe({ name: "ResourceConflictException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, Be = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = Xe(n, t), [2, Pe({ name: "ResourceNotFoundException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, He = function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = e.body, r = Qe(n, t), [2, Pe({ name: "TooManyRequestsException", $fault: "client", $metadata: et(e) }, r)]; })); })); }, qe = function (e, t) { return Object.entries(e).reduce((function (e, t) { var n, r = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }(t, 2), i = r[0], o = r[1]; return Pe(Pe({}, e), ((n = {})[i] = o, n)); }), {}); }, Ke = function (e, t) { return { AccessKeyId: void 0 !== e.AccessKeyId && null !== e.AccessKeyId ? e.AccessKeyId : void 0, Expiration: void 0 !== e.Expiration && null !== e.Expiration ? new Date(Math.round(1e3 * e.Expiration)) : void 0, SecretKey: void 0 !== e.SecretKey && null !== e.SecretKey ? e.SecretKey : void 0, SessionToken: void 0 !== e.SessionToken && null !== e.SessionToken ? e.SessionToken : void 0 }; }, Ve = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, We = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, ze = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, Ge = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, Ye = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, Je = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, Ze = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, Xe = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, Qe = function (e, t) { return { message: void 0 !== e.message && null !== e.message ? e.message : void 0 }; }, et = function (e) { return { httpStatusCode: e.statusCode, httpHeaders: e.headers, requestId: e.headers["x-amzn-requestid"] }; }, tt = function (e, t, n, r, i) { return Ue(void 0, void 0, void 0, (function () { var o, s, a, u, c, l; return Oe(this, (function (f) { switch (f.label) {
            case 0: return [4, e.endpoint()];
            case 1: return o = f.sent(), s = o.hostname, a = o.protocol, u = void 0 === a ? "https" : a, c = o.port, l = { protocol: u, hostname: s, port: c, method: "POST", path: n, headers: t }, void 0 !== r && (l.hostname = r), void 0 !== i && (l.body = i), [2, new Re.aW(l)];
        } })); })); }, nt = function (e, t) { return function (e, t) { return function (e, t) { return void 0 === e && (e = new Uint8Array), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array); }(e, t).then((function (e) { return t.utf8Encoder(e); })); }(e, t).then((function (e) { return e.length ? JSON.parse(e) : {}; })); }, rt = n(9718), it = n(3890), ot = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return E(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, rt.p2)(t, this.serialize, this.deserialize)); var r = e.concat(this.middlewareStack), i = t.logger, o = "CognitoIdentityClient", s = "GetCredentialsForIdentityCommand", a = { logger: i, clientName: o, commandName: s, inputFilterSensitiveLog: V.filterSensitiveLog, outputFilterSensitiveLog: z.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: s }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), a); }, t.prototype.serialize = function (e, t) { return function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = { "Content-Type": "application/x-amz-json-1.1", "X-Amz-Target": "AWSCognitoIdentityService.GetCredentialsForIdentity" }, r = JSON.stringify(function (e, t) { return Pe(Pe(Pe({}, void 0 !== e.CustomRoleArn && { CustomRoleArn: e.CustomRoleArn }), void 0 !== e.IdentityId && { IdentityId: e.IdentityId }), void 0 !== e.Logins && { Logins: qe(e.Logins, t) }); }(e, t)), [2, tt(t, n, "/", void 0, r)]; })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r, i; return Oe(this, (function (o) { switch (o.label) {
            case 0: return e.statusCode >= 300 ? [2, ke(e, t)] : [4, nt(e.body, t)];
            case 1: return n = o.sent(), r = function (e, t) { return { Credentials: void 0 !== e.Credentials && null !== e.Credentials ? Ke(e.Credentials) : void 0, IdentityId: void 0 !== e.IdentityId && null !== e.IdentityId ? e.IdentityId : void 0 }; }(n), i = Pe({ $metadata: et(e) }, r), [2, Promise.resolve(i)];
        } })); })); }(e, t); }, t; }(it.mY), st = function (e) { function t(t, n) { void 0 === n && (n = !0); var r = e.call(this, t) || this; return r.tryNextLink = n, r; } return (0, S.__extends)(t, e), t; }(Error);
        function at(e) { return Promise.all(Object.keys(e).reduce((function (t, n) { var r = e[n]; return "string" == typeof r ? t.push([n, r]) : t.push(r().then((function (e) { return [n, e]; }))), t; }), [])).then((function (e) { return e.reduce((function (e, t) { var n = (0, S.__read)(t, 2), r = n[0], i = n[1]; return e[r] = i, e; }), {}); })); }
        function ut(e) { var t = this; return function () { return (0, S.__awaiter)(t, void 0, void 0, (function () { var t, n, r, i, o, s, a, u, c, l, f, h, d; return (0, S.__generator)(this, (function (p) { switch (p.label) {
            case 0: return l = (c = e.client).send, f = ot.bind, d = { CustomRoleArn: e.customRoleArn, IdentityId: e.identityId }, e.logins ? [4, at(e.logins)] : [3, 2];
            case 1: return h = p.sent(), [3, 3];
            case 2: h = void 0, p.label = 3;
            case 3: return [4, l.apply(c, [new (f.apply(ot, [void 0, (d.Logins = h, d)]))])];
            case 4: return t = p.sent().Credentials, n = void 0 === t ? function () { throw new st("Response from Amazon Cognito contained no credentials"); }() : t, r = n.AccessKeyId, i = void 0 === r ? function () { throw new st("Response from Amazon Cognito contained no access key ID"); }() : r, o = n.Expiration, s = n.SecretKey, a = void 0 === s ? function () { throw new st("Response from Amazon Cognito contained no secret key"); }() : s, u = n.SessionToken, [2, { identityId: e.identityId, accessKeyId: i, secretAccessKey: a, sessionToken: u, expiration: o }];
        } })); })); }; }
        var ct = function (e) { function t(t) { var n = e.call(this) || this; return n.input = t, n; } return E(t, e), t.prototype.resolveMiddleware = function (e, t, n) { this.middlewareStack.use((0, rt.p2)(t, this.serialize, this.deserialize)); var r = e.concat(this.middlewareStack), i = t.logger, o = "CognitoIdentityClient", s = "GetIdCommand", a = { logger: i, clientName: o, commandName: s, inputFilterSensitiveLog: Y.filterSensitiveLog, outputFilterSensitiveLog: J.filterSensitiveLog }; "function" == typeof i.info && i.info({ clientName: o, commandName: s }); var u = t.requestHandler; return r.resolve((function (e) { return u.handle(e.request, n || {}); }), a); }, t.prototype.serialize = function (e, t) { return function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r; return Oe(this, (function (i) { return n = { "Content-Type": "application/x-amz-json-1.1", "X-Amz-Target": "AWSCognitoIdentityService.GetId" }, r = JSON.stringify(function (e, t) { return Pe(Pe(Pe({}, void 0 !== e.AccountId && { AccountId: e.AccountId }), void 0 !== e.IdentityPoolId && { IdentityPoolId: e.IdentityPoolId }), void 0 !== e.Logins && { Logins: qe(e.Logins, t) }); }(e, t)), [2, tt(t, n, "/", void 0, r)]; })); })); }(e, t); }, t.prototype.deserialize = function (e, t) { return function (e, t) { return Ue(void 0, void 0, void 0, (function () { var n, r, i; return Oe(this, (function (o) { switch (o.label) {
            case 0: return e.statusCode >= 300 ? [2, xe(e, t)] : [4, nt(e.body, t)];
            case 1: return n = o.sent(), r = function (e, t) { return { IdentityId: void 0 !== e.IdentityId && null !== e.IdentityId ? e.IdentityId : void 0 }; }(n), i = Pe({ $metadata: et(e) }, r), [2, Promise.resolve(i)];
        } })); })); }(e, t); }, t; }(it.mY), lt = "IdentityIds", ft = function () { function e(e) { void 0 === e && (e = "aws:cognito-identity-ids"), this.dbName = e; } return e.prototype.getItem = function (e) { return this.withObjectStore("readonly", (function (t) { var n = t.get(e); return new Promise((function (e) { n.onerror = function () { return e(null); }, n.onsuccess = function () { return e(n.result ? n.result.value : null); }; })); })).catch((function () { return null; })); }, e.prototype.removeItem = function (e) { return this.withObjectStore("readwrite", (function (t) { var n = t.delete(e); return new Promise((function (e, t) { n.onerror = function () { return t(n.error); }, n.onsuccess = function () { return e(); }; })); })); }, e.prototype.setItem = function (e, t) { return this.withObjectStore("readwrite", (function (n) { var r = n.put({ id: e, value: t }); return new Promise((function (e, t) { r.onerror = function () { return t(r.error); }, r.onsuccess = function () { return e(); }; })); })); }, e.prototype.getDb = function () { var e = self.indexedDB.open(this.dbName, 1); return new Promise((function (t, n) { e.onsuccess = function () { t(e.result); }, e.onerror = function () { n(e.error); }, e.onblocked = function () { n(new Error("Unable to access DB")); }, e.onupgradeneeded = function () { var t = e.result; t.onerror = function () { n(new Error("Failed to create object store")); }, t.createObjectStore(lt, { keyPath: "id" }); }; })); }, e.prototype.withObjectStore = function (e, t) { return this.getDb().then((function (n) { var r = n.transaction(lt, e); return r.oncomplete = function () { return n.close(); }, new Promise((function (e, n) { r.onerror = function () { return n(r.error); }, e(t(r.objectStore(lt))); })).catch((function (e) { throw n.close(), e; })); })); }, e; }(), ht = new (function () { function e(e) { void 0 === e && (e = {}), this.store = e; } return e.prototype.getItem = function (e) { return e in this.store ? this.store[e] : null; }, e.prototype.removeItem = function (e) { delete this.store[e]; }, e.prototype.setItem = function (e, t) { this.store[e] = t; }, e; }());
        var dt = JSON.parse('{"u2":"@aws-sdk/client-cognito-identity","i8":"1.0.0-rc.4"}');
        var pt = n(7643), gt = n(4227), yt = n(5582), mt = n(5721), vt = n(4104), wt = n(7157), bt = n(2795), _t = n(5731), St = "cognito-identity.{region}.amazonaws.com", At = new Set(["ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1", "eu-north-1", "eu-west-1", "eu-west-2", "eu-west-3", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-west-1", "us-west-2"]), Et = new Set(["cn-north-1", "cn-northwest-1"]), Ct = new Set(["us-iso-east-1"]), It = new Set(["us-isob-east-1"]), Tt = new Set(["us-gov-east-1", "us-gov-west-1"]), Pt = Pe(Pe({}, { apiVersion: "2014-06-30", disableHostPrefix: !1, logger: {}, regionInfoProvider: function (e, t) { var n = void 0; switch (e) {
                case "ap-northeast-1":
                    n = { hostname: "cognito-identity.ap-northeast-1.amazonaws.com", partition: "aws" };
                    break;
                case "ap-northeast-2":
                    n = { hostname: "cognito-identity.ap-northeast-2.amazonaws.com", partition: "aws" };
                    break;
                case "ap-south-1":
                    n = { hostname: "cognito-identity.ap-south-1.amazonaws.com", partition: "aws" };
                    break;
                case "ap-southeast-1":
                    n = { hostname: "cognito-identity.ap-southeast-1.amazonaws.com", partition: "aws" };
                    break;
                case "ap-southeast-2":
                    n = { hostname: "cognito-identity.ap-southeast-2.amazonaws.com", partition: "aws" };
                    break;
                case "ca-central-1":
                    n = { hostname: "cognito-identity.ca-central-1.amazonaws.com", partition: "aws" };
                    break;
                case "cn-north-1":
                    n = { hostname: "cognito-identity.cn-north-1.amazonaws.com.cn", partition: "aws-cn" };
                    break;
                case "eu-central-1":
                    n = { hostname: "cognito-identity.eu-central-1.amazonaws.com", partition: "aws" };
                    break;
                case "eu-west-1":
                    n = { hostname: "cognito-identity.eu-west-1.amazonaws.com", partition: "aws" };
                    break;
                case "eu-west-2":
                    n = { hostname: "cognito-identity.eu-west-2.amazonaws.com", partition: "aws" };
                    break;
                case "us-east-1":
                    n = { hostname: "cognito-identity.us-east-1.amazonaws.com", partition: "aws" };
                    break;
                case "us-east-2":
                    n = { hostname: "cognito-identity.us-east-2.amazonaws.com", partition: "aws" };
                    break;
                case "us-west-2":
                    n = { hostname: "cognito-identity.us-west-2.amazonaws.com", partition: "aws" };
                    break;
                default: At.has(e) && (n = { hostname: St.replace("{region}", e), partition: "aws" }), Et.has(e) && (n = { hostname: "cognito-identity.{region}.amazonaws.com.cn".replace("{region}", e), partition: "aws-cn" }), Ct.has(e) && (n = { hostname: "cognito-identity.{region}.c2s.ic.gov".replace("{region}", e), partition: "aws-iso" }), It.has(e) && (n = { hostname: "cognito-identity.{region}.sc2s.sgov.gov".replace("{region}", e), partition: "aws-iso-b" }), Tt.has(e) && (n = { hostname: "cognito-identity.{region}.amazonaws.com".replace("{region}", e), partition: "aws-us-gov" }), void 0 === n && (n = { hostname: St.replace("{region}", e), partition: "aws" });
            } return Promise.resolve(n); }, signingName: "cognito-identity" }), { runtime: "browser", base64Decoder: wt.G, base64Encoder: wt.s, bodyLengthChecker: bt.W, credentialDefaultProvider: function () { }, defaultUserAgent: (0, _t.f)(dt.u2, dt.i8), maxAttempts: mt.J, region: (0, yt.s)("Region is missing"), requestHandler: new gt.B, sha256: pt.Sha256, streamCollector: gt.C, urlParser: vt.e, utf8Decoder: function (e) { return "function" == typeof TextEncoder ? function (e) { return (new TextEncoder).encode(e); }(e) : function (e) { for (var t = [], n = 0, r = e.length; n < r; n++) {
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
                    var s = "%" + [i, e[++n], e[++n], e[++n]].map((function (e) { return e.toString(16); })).join("%");
                    t += decodeURIComponent(s);
                }
                else
                    t += String.fromCharCode((15 & i) << 12 | (63 & e[++n]) << 6 | 63 & e[++n]);
            } return t; }(e); } }), Ut = n(9162), Ot = n(672), Rt = n(3273), kt = n(7137), xt = n(7139), Dt = n(6317), Lt = function (e) { function t(t) { var n = this, r = Pe(Pe({}, Pt), t), i = (0, Ut.Xb)(r), o = (0, Ut.g4)(i), s = (0, xt.A$)(o), a = (0, mt.BC)(s), u = (0, Dt.er)(a), c = (0, Rt.S8)(u); return (n = e.call(this, c) || this).config = c, n.middlewareStack.use((0, mt.NQ)(n.config)), n.middlewareStack.use((0, Dt.XJ)(n.config)), n.middlewareStack.use((0, Ot.VG)(n.config)), n.middlewareStack.use((0, Rt.G2)(n.config)), n.middlewareStack.use((0, kt.cV)(n.config)), n; } return E(t, e), t.prototype.destroy = function () { e.prototype.destroy.call(this); }, t; }(it.KU), Nt = function () { return (Nt = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, $t = function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); }, Mt = function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }, Ft = new r.k("Credentials"), jt = new (function () { function e(e) { this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(e), this._refreshHandlers.google = v.refreshGoogleToken, this._refreshHandlers.facebook = w.refreshFacebookToken; } return e.prototype.getModuleName = function () { return "Credentials"; }, e.prototype.getCredSource = function () { return this._credentials_source; }, e.prototype.configure = function (e) { if (!e)
            return this._config || {}; this._config = Object.assign({}, this._config, e); var t = this._config.refreshHandlers; return t && (this._refreshHandlers = Nt(Nt({}, this._refreshHandlers), t)), this._storage = this._config.storage, this._storage || (this._storage = (new i.c4).getStorage()), this._storageSync = Promise.resolve(), "function" == typeof this._storage.sync && (this._storageSync = this._storage.sync()), this._config; }, e.prototype.get = function () { return Ft.debug("getting credentials"), this._pickupCredentials(); }, e.prototype._pickupCredentials = function () { return Ft.debug("picking up credentials"), this._gettingCredPromise && this._gettingCredPromise.isPending() ? Ft.debug("getting old cred promise") : (Ft.debug("getting new cred promise"), this._gettingCredPromise = (0, o.ML)(this._keepAlive())), this._gettingCredPromise; }, e.prototype._keepAlive = function () { return $t(this, void 0, void 0, (function () { var e, t, n, r, i, o, s; return Mt(this, (function (a) { switch (a.label) {
            case 0:
                if (Ft.debug("checking if credentials exists and not expired"), (e = this._credentials) && !this._isExpired(e) && !this._isPastTTL())
                    return Ft.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(e)];
                if (Ft.debug("need to get a new credential or refresh the existing one"), t = this.Auth, !(n = void 0 === t ? _.dQ.Auth : t) || "function" != typeof n.currentUserCredentials)
                    return [2, Promise.reject("No Auth module registered in Amplify")];
                if (this._isExpired(e) || !this._isPastTTL())
                    return [3, 6];
                Ft.debug("ttl has passed but token is not yet expired"), a.label = 1;
            case 1: return a.trys.push([1, 5, , 6]), [4, n.currentUserPoolUser()];
            case 2: return r = a.sent(), [4, n.currentSession()];
            case 3: return i = a.sent(), o = i.refreshToken, [4, new Promise((function (e, t) { r.refreshSession(o, (function (n, r) { return n ? t(n) : e(r); })); }))];
            case 4: return a.sent(), [3, 6];
            case 5: return s = a.sent(), Ft.debug("Error attempting to refreshing the session", s), [3, 6];
            case 6: return [2, n.currentUserCredentials()];
        } })); })); }, e.prototype.refreshFederatedToken = function (e) { Ft.debug("Getting federated credentials"); var t = e.provider, n = e.user, r = e.token, i = e.identity_id, o = e.expires_at; o = 1970 === new Date(o).getFullYear() ? 1e3 * o : o; var s = this; return Ft.debug("checking if federated jwt token expired"), o > (new Date).getTime() ? (Ft.debug("token not expired"), this._setCredentialsFromFederation({ provider: t, token: r, user: n, identity_id: i, expires_at: o })) : s._refreshHandlers[t] && "function" == typeof s._refreshHandlers[t] ? (Ft.debug("getting refreshed jwt token from federation provider"), this._providerRefreshWithRetry({ refreshHandler: s._refreshHandlers[t], provider: t, user: n })) : (Ft.debug("no refresh handler for provider:", t), this.clear(), Promise.reject("no refresh handler for provider")); }, e.prototype._providerRefreshWithRetry = function (e) { var t, n, r, i = this, o = e.refreshHandler, s = e.provider, a = e.user; return (t = o, n = [], r = 1e4, void 0 === r && (r = 3e5), f(t, n, function (e) { return function (t) { var n = 100 * Math.pow(2, t) + 100 * Math.random(); return !(n > e) && n; }; }(r))).then((function (e) { return Ft.debug("refresh federated token sucessfully", e), i._setCredentialsFromFederation({ provider: s, token: e.token, user: a, identity_id: e.identity_id, expires_at: e.expires_at }); })).catch((function (e) { return "string" == typeof e && 0 === e.toLowerCase().lastIndexOf("network error", e.length) || i.clear(), Ft.debug("refresh federated token failed", e), Promise.reject("refreshing federation token failed: " + e); })); }, e.prototype._isExpired = function (e) { if (!e)
            return Ft.debug("no credentials for expiration check"), !0; Ft.debug("are these credentials expired?", e); var t = Date.now(); return e.expiration.getTime() <= t; }, e.prototype._isPastTTL = function () { return this._nextCredentialsRefresh <= Date.now(); }, e.prototype._setCredentialsForGuest = function () { return $t(this, void 0, void 0, (function () { var e, t, n, r, i, o, s, a = this; return Mt(this, (function (u) { switch (u.label) {
            case 0:
                if (Ft.debug("setting credentials for guest"), e = this._config, t = e.identityPoolId, n = e.region, e.mandatorySignIn)
                    return [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")];
                if (!t)
                    return Ft.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")];
                if (!n)
                    return Ft.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")];
                r = void 0, u.label = 1;
            case 1: return u.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2: return u.sent(), r = this._storage.getItem("CognitoIdentityId-" + t), this._identityId = r, [3, 4];
            case 3: return i = u.sent(), Ft.debug("Failed to get the cached identityId", i), [3, 4];
            case 4: return o = new Lt({ region: n, customUserAgent: (0, b.Zm)() }), s = void 0, s = r ? ut({ identityId: r, client: o })() : $t(a, void 0, void 0, (function () { var e; return Mt(this, (function (n) { switch (n.label) {
                case 0: return [4, o.send(new ct({ IdentityPoolId: t }))];
                case 1: return e = n.sent().IdentityId, this._identityId = e, [2, ut({ client: o, identityId: e })()];
            } })); })).catch((function (e) { return $t(a, void 0, void 0, (function () { return Mt(this, (function (t) { throw e; })); })); })), [2, this._loadCredentials(s, "guest", !1, null).then((function (e) { return e; })).catch((function (e) { return $t(a, void 0, void 0, (function () { var n = this; return Mt(this, (function (i) { return "ResourceNotFoundException" === e.name && e.message === "Identity '" + r + "' not found." ? (Ft.debug("Failed to load guest credentials"), this._storage.removeItem("CognitoIdentityId-" + t), s = $t(n, void 0, void 0, (function () { var e; return Mt(this, (function (n) { switch (n.label) {
                    case 0: return [4, o.send(new ct({ IdentityPoolId: t }))];
                    case 1: return e = n.sent().IdentityId, this._identityId = e, [2, ut({ client: o, identityId: e })()];
                } })); })).catch((function (e) { return $t(n, void 0, void 0, (function () { return Mt(this, (function (t) { throw e; })); })); })), [2, this._loadCredentials(s, "guest", !1, null)]) : [2, e]; })); })); }))];
        } })); })); }, e.prototype._setCredentialsFromFederation = function (e) { var t = e.provider, n = e.token, r = e.identity_id, i = { google: "accounts.google.com", facebook: "graph.facebook.com", amazon: "www.amazon.com", developer: "cognito-identity.amazonaws.com" }[t] || t; if (!i)
            return Promise.reject("You must specify a federated provider"); var o = {}; o[i] = n; var s = this._config, a = s.identityPoolId, u = s.region; if (!a)
            return Ft.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided"); if (!u)
            return Ft.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials"); var c = new Lt({ region: u, customUserAgent: (0, b.Zm)() }), l = void 0; return l = r ? ut({ identityId: r, logins: o, client: c })() : function (e) { var t = this, n = e.accountId, r = e.cache, i = void 0 === r ? "object" == typeof self && self.indexedDB ? new ft : "object" == typeof window && window.localStorage ? window.localStorage : ht : r, o = e.client, s = e.customRoleArn, a = e.identityPoolId, u = e.logins, c = e.userIdentifier, l = void 0 === c ? u && 0 !== Object.keys(u).length ? void 0 : "ANONYMOUS" : c, f = l ? "aws:cognito-identity-credentials:" + a + ":" + l : void 0, h = function () { return (0, S.__awaiter)(t, void 0, void 0, (function () { var e, t, r, c, l, d, p, g, y; return (0, S.__generator)(this, (function (m) { switch (m.label) {
            case 0: return (t = f) ? [4, i.getItem(f)] : [3, 2];
            case 1: t = m.sent(), m.label = 2;
            case 2: return (e = t) ? [3, 7] : (d = (l = o).send, p = ct.bind, y = { AccountId: n, IdentityPoolId: a }, u ? [4, at(u)] : [3, 4]);
            case 3: return g = m.sent(), [3, 5];
            case 4: g = void 0, m.label = 5;
            case 5: return [4, d.apply(l, [new (p.apply(ct, [void 0, (y.Logins = g, y)]))])];
            case 6: r = m.sent().IdentityId, c = void 0 === r ? function () { throw new st("Response from Amazon Cognito contained no identity ID"); }() : r, e = c, f && Promise.resolve(i.setItem(f, e)).catch((function () { })), m.label = 7;
            case 7: return [2, (h = ut({ client: o, customRoleArn: s, logins: u, identityId: e }))()];
        } })); })); }; return function () { return h().catch((function (e) { return (0, S.__awaiter)(t, void 0, void 0, (function () { return (0, S.__generator)(this, (function (t) { throw f && Promise.resolve(i.removeItem(f)).catch((function () { })), e; })); })); })); }; }({ logins: o, identityPoolId: a, client: c })(), this._loadCredentials(l, "federated", !0, e); }, e.prototype._setCredentialsFromSession = function (e) { var t = this; Ft.debug("set credentials from session"); var n = e.getIdToken().getJwtToken(), r = this._config, i = r.region, o = r.userPoolId, s = r.identityPoolId; if (!s)
            return Ft.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided"); if (!i)
            return Ft.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials"); var a = {}; a["cognito-idp." + i + ".amazonaws.com/" + o] = n; var u = new Lt({ region: i, customUserAgent: (0, b.Zm)() }), c = $t(t, void 0, void 0, (function () { var e; return Mt(this, (function (t) { switch (t.label) {
            case 0: return [4, u.send(new ct({ IdentityPoolId: s, Logins: a }))];
            case 1: return e = t.sent().IdentityId, this._identityId = e, [2, ut({ client: u, logins: a, identityId: e })()];
        } })); })).catch((function (e) { return $t(t, void 0, void 0, (function () { return Mt(this, (function (t) { throw e; })); })); })); return this._loadCredentials(c, "userPool", !0, null); }, e.prototype._loadCredentials = function (e, t, n, r) { var i = this, o = this, s = this._config.identityPoolId; return new Promise((function (a, u) { e.then((function (e) { return $t(i, void 0, void 0, (function () { var i, u, c, l, f, h; return Mt(this, (function (d) { switch (d.label) {
            case 0:
                if (Ft.debug("Load credentials successfully", e), this._identityId && !e.identityId && (e.identityId = this._identityId), o._credentials = e, o._credentials.authenticated = n, o._credentials_source = t, o._nextCredentialsRefresh = (new Date).getTime() + 3e6, "federated" === t) {
                    i = Object.assign({ id: this._credentials.identityId }, r.user), u = r.provider, c = r.token, l = r.expires_at, f = r.identity_id;
                    try {
                        this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({ provider: u, token: c, user: i, expires_at: l, identity_id: f }));
                    }
                    catch (e) {
                        Ft.debug("Failed to put federated info into auth storage", e);
                    }
                }
                if ("guest" !== t)
                    return [3, 4];
                d.label = 1;
            case 1: return d.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2: return d.sent(), this._storage.setItem("CognitoIdentityId-" + s, e.identityId), [3, 4];
            case 3: return h = d.sent(), Ft.debug("Failed to cache identityId", h), [3, 4];
            case 4: return a(o._credentials), [2];
        } })); })); })).catch((function (t) { if (t)
            return Ft.debug("Failed to load credentials", e), Ft.debug("Error loading credentials", t), void u(t); })); })); }, e.prototype.set = function (e, t) { return "session" === t ? this._setCredentialsFromSession(e) : "federation" === t ? this._setCredentialsFromFederation(e) : "guest" === t ? this._setCredentialsForGuest() : (Ft.debug("no source specified for setting credentials"), Promise.reject("invalid source")); }, e.prototype.clear = function () { return $t(this, void 0, void 0, (function () { return Mt(this, (function (e) { return this._credentials = null, this._credentials_source = null, Ft.debug("removing aws-amplify-federatedInfo from storage"), this._storage.removeItem("aws-amplify-federatedInfo"), [2]; })); })); }, e.prototype.shear = function (e) { return { accessKeyId: e.accessKeyId, sessionToken: e.sessionToken, secretAccessKey: e.secretAccessKey, identityId: e.identityId, authenticated: e.authenticated }; }, e; }())(null);
        _.dQ.register(jt);
    }, 490: function (e, t, n) {
        "use strict";
        n.d(t, { Xb: function () { return c; } });
        var r = n(5069), i = function () { return (i = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, o = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }, s = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t])); return e; }, a = new r.k("Hub"), u = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default", c = new (function () { function e(e) { this.listeners = [], this.patterns = [], this.protectedChannels = ["core", "auth", "api", "analytics", "interactions", "pubsub", "storage", "xr"], this.name = e; } return e.prototype.remove = function (e, t) { if (e instanceof RegExp) {
            var n = this.patterns.find((function (t) { return t.pattern.source === e.source; }));
            if (!n)
                return void a.warn("No listeners for " + e);
            this.patterns = s(this.patterns.filter((function (e) { return e !== n; })));
        }
        else {
            var r = this.listeners[e];
            if (!r)
                return void a.warn("No listeners for " + e);
            this.listeners[e] = s(r.filter((function (e) { return e.callback !== t; })));
        } }, e.prototype.dispatch = function (e, t, n, r) { void 0 === n && (n = ""), this.protectedChannels.indexOf(e) > -1 && (r === u || a.warn("WARNING: " + e + " is protected and dispatching on it can have unintended consequences")); var o = { channel: e, payload: i({}, t), source: n, patternInfo: [] }; try {
            this._toListeners(o);
        }
        catch (e) {
            a.error(e);
        } }, e.prototype.listen = function (e, t, n) { var r, i = this; if (void 0 === n && (n = "noname"), function (e) { return void 0 !== e.onHubCapsule; }(t))
            a.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), r = t.onHubCapsule.bind(t);
        else {
            if ("function" != typeof t)
                throw new Error("No callback supplied to Hub");
            r = t;
        } if (e instanceof RegExp)
            this.patterns.push({ pattern: e, callback: r });
        else {
            var o = this.listeners[e];
            o || (o = [], this.listeners[e] = o), o.push({ name: n, callback: r });
        } return function () { i.remove(e, r); }; }, e.prototype._toListeners = function (e) { var t = e.channel, n = e.payload, r = this.listeners[t]; if (r && r.forEach((function (r) { a.debug("Dispatching to " + t + " with ", n); try {
            r.callback(e);
        }
        catch (e) {
            a.error(e);
        } })), this.patterns.length > 0) {
            if (!n.message)
                return void a.warn("Cannot perform pattern matching without a message key");
            var s = n.message;
            this.patterns.forEach((function (t) { var n = s.match(t.pattern); if (n) {
                var r = o(n).slice(1), u = i(i({}, e), { patternInfo: r });
                try {
                    t.callback(u);
                }
                catch (e) {
                    a.error(e);
                }
            } }));
        } }, e; }())("__default__");
    }, 3139: function (e, t, n) {
        "use strict";
        n.d(t, { o: function () { return l; } });
        var r = n(5069), i = new r.k("I18n"), o = function () { function e(e) { this._options = null, this._lang = null, this._dict = {}, this._options = Object.assign({}, e), this._lang = this._options.language, !this._lang && "undefined" != typeof window && window && window.navigator && (this._lang = window.navigator.language), i.debug(this._lang); } return e.prototype.setLanguage = function (e) { this._lang = e; }, e.prototype.get = function (e, t) { if (void 0 === t && (t = void 0), !this._lang)
            return void 0 !== t ? t : e; var n = this._lang, r = this.getByLanguage(e, n); return r || (n.indexOf("-") > 0 && (r = this.getByLanguage(e, n.split("-")[0])), r || (void 0 !== t ? t : e)); }, e.prototype.getByLanguage = function (e, t, n) { if (void 0 === n && (n = null), !t)
            return n; var r = this._dict[t]; return r ? r[e] : n; }, e.prototype.putVocabulariesForLanguage = function (e, t) { var n = this._dict[e]; n || (n = this._dict[e] = {}), Object.assign(n, t); }, e.prototype.putVocabularies = function (e) { var t = this; Object.keys(e).map((function (n) { t.putVocabulariesForLanguage(n, e[n]); })); }, e; }(), s = n(5387), a = new r.k("I18n"), u = null, c = null, l = function () { function e() { } return e.configure = function (t) { return a.debug("configure I18n"), t ? (u = Object.assign({}, u, t.I18n || t), e.createInstance(), u) : u; }, e.getModuleName = function () { return "I18n"; }, e.createInstance = function () { a.debug("create I18n instance"), c || (c = new o(u)); }, e.setLanguage = function (t) { return e.checkConfig(), c.setLanguage(t); }, e.get = function (t, n) { return e.checkConfig() ? c.get(t, n) : void 0 === n ? t : n; }, e.putVocabulariesForLanguage = function (t, n) { return e.checkConfig(), c.putVocabulariesForLanguage(t, n); }, e.putVocabularies = function (t) { return e.checkConfig(), c.putVocabularies(t); }, e.checkConfig = function () { return c || (c = new o(u)), !0; }, e; }();
        s.dQ.register(l);
    }, 9222: function (e, t, n) {
        "use strict";
        n.d(t, { xb: function () { return i; }, rI: function () { return a; }, ML: function () { return l; }, lC: function () { return h; }, JS: function () { return y; } });
        var r = [{ type: "text/plain", ext: "txt" }, { type: "text/html", ext: "html" }, { type: "text/javascript", ext: "js" }, { type: "text/css", ext: "css" }, { type: "text/csv", ext: "csv" }, { type: "text/yaml", ext: "yml" }, { type: "text/yaml", ext: "yaml" }, { type: "text/calendar", ext: "ics" }, { type: "text/calendar", ext: "ical" }, { type: "image/apng", ext: "apng" }, { type: "image/bmp", ext: "bmp" }, { type: "image/gif", ext: "gif" }, { type: "image/x-icon", ext: "ico" }, { type: "image/x-icon", ext: "cur" }, { type: "image/jpeg", ext: "jpg" }, { type: "image/jpeg", ext: "jpeg" }, { type: "image/jpeg", ext: "jfif" }, { type: "image/jpeg", ext: "pjp" }, { type: "image/jpeg", ext: "pjpeg" }, { type: "image/png", ext: "png" }, { type: "image/svg+xml", ext: "svg" }, { type: "image/tiff", ext: "tif" }, { type: "image/tiff", ext: "tiff" }, { type: "image/webp", ext: "webp" }, { type: "application/json", ext: "json" }, { type: "application/xml", ext: "xml" }, { type: "application/x-sh", ext: "sh" }, { type: "application/zip", ext: "zip" }, { type: "application/x-rar-compressed", ext: "rar" }, { type: "application/x-tar", ext: "tar" }, { type: "application/x-bzip", ext: "bz" }, { type: "application/x-bzip2", ext: "bz2" }, { type: "application/pdf", ext: "pdf" }, { type: "application/java-archive", ext: "jar" }, { type: "application/msword", ext: "doc" }, { type: "application/vnd.ms-excel", ext: "xls" }, { type: "application/vnd.ms-excel", ext: "xlsx" }, { type: "message/rfc822", ext: "eml" }], i = function (e) { return void 0 === e && (e = {}), 0 === Object.keys(e).length; }, o = function (e, t, n) { if (!e || !e.sort)
            return !1; var r = n && "desc" === n ? -1 : 1; return e.sort((function (e, n) { var i = e[t], o = n[t]; return void 0 === o ? void 0 === i ? 0 : 1 * r : void 0 === i || i < o ? -1 * r : i > o ? 1 * r : 0; })), !0; }, s = function (e, t) { var n = Object.assign({}, e); return t && ("string" == typeof t ? delete n[t] : t.forEach((function (e) { delete n[e]; }))), n; }, a = function (e, t) { void 0 === t && (t = "application/octet-stream"); var n = e.toLowerCase(), i = r.filter((function (e) { return n.endsWith("." + e.ext); })); return i.length > 0 ? i[0].type : t; }, u = function (e) { var t = e.toLowerCase(); return !!t.startsWith("text/") || "application/json" === t || "application/xml" === t || "application/sh" === t; }, c = function () { for (var e = "", t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = 32; n > 0; n -= 1)
            e += t[Math.floor(Math.random() * t.length)]; return e; }, l = function (e) { if (e.isResolved)
            return e; var t = !0, n = !1, r = !1, i = e.then((function (e) { return r = !0, t = !1, e; }), (function (e) { throw n = !0, t = !1, e; })); return i.isFullfilled = function () { return r; }, i.isPending = function () { return t; }, i.isRejected = function () { return n; }, i; }, f = function () { if ("undefined" == typeof self)
            return !1; var e = self; return void 0 !== e.WorkerGlobalScope && self instanceof e.WorkerGlobalScope; }, h = function () { return { isBrowser: "undefined" != typeof window && void 0 !== window.document, isNode: "undefined" != typeof process && null != process.versions && null != process.versions.node }; }, d = function (e, t, n) { if (void 0 === t && (t = []), void 0 === n && (n = []), !g(e))
            return e; var r = {}; for (var i in e)
            e.hasOwnProperty(i) && (r[t.includes(i) ? i : i[0].toLowerCase() + i.slice(1)] = n.includes(i) ? e[i] : d(e[i], t, n)); return r; }, p = function (e, t, n) { if (void 0 === t && (t = []), void 0 === n && (n = []), !g(e))
            return e; var r = {}; for (var i in e)
            e.hasOwnProperty(i) && (r[t.includes(i) ? i : i[0].toUpperCase() + i.slice(1)] = n.includes(i) ? e[i] : p(e[i], t, n)); return r; }, g = function (e) { return !(!(e instanceof Object) || e instanceof Array || e instanceof Function || e instanceof Number || e instanceof String || e instanceof Boolean); }, y = function () { function e() { } return e.isEmpty = i, e.sortByField = o, e.objectLessAttributes = s, e.filenameToContentType = a, e.isTextFile = u, e.generateRandomString = c, e.makeQuerablePromise = l, e.isWebWorker = f, e.browserOrNode = h, e.transferKeyToLowerCase = d, e.transferKeyToUpperCase = p, e.isStrictObject = g, e; }();
    }, 5069: function (e, t, n) {
        "use strict";
        n.d(t, { k: function () { return s; } });
        var r = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }, i = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t])); return e; }, o = { VERBOSE: 1, DEBUG: 2, INFO: 3, WARN: 4, ERROR: 5 }, s = function () { function e(e, t) { void 0 === t && (t = "WARN"), this.name = e, this.level = t; } return e.prototype._padding = function (e) { return e < 10 ? "0" + e : "" + e; }, e.prototype._ts = function () { var e = new Date; return [this._padding(e.getMinutes()), this._padding(e.getSeconds())].join(":") + "." + e.getMilliseconds(); }, e.prototype._log = function (t) { for (var n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r]; var i = this.level; e.LOG_LEVEL && (i = e.LOG_LEVEL), "undefined" != typeof window && window.LOG_LEVEL && (i = window.LOG_LEVEL); var s = o[i], a = o[t]; if (a >= s) {
            var u = console.log.bind(console);
            "ERROR" === t && console.error && (u = console.error.bind(console)), "WARN" === t && console.warn && (u = console.warn.bind(console));
            var c = "[" + t + "] " + this._ts() + " " + this.name;
            if (1 === n.length && "string" == typeof n[0])
                u(c + " - " + n[0]);
            else if (1 === n.length)
                u(c, n[0]);
            else if ("string" == typeof n[0]) {
                var l = n.slice(1);
                1 === l.length && (l = l[0]), u(c + " - " + n[0], l);
            }
            else
                u(c, n);
        } }, e.prototype.log = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; this._log.apply(this, i(["INFO"], e)); }, e.prototype.info = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; this._log.apply(this, i(["INFO"], e)); }, e.prototype.warn = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; this._log.apply(this, i(["WARN"], e)); }, e.prototype.error = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; this._log.apply(this, i(["ERROR"], e)); }, e.prototype.debug = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; this._log.apply(this, i(["DEBUG"], e)); }, e.prototype.verbose = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; this._log.apply(this, i(["VERBOSE"], e)); }, e.LOG_LEVEL = null, e; }();
    }, 5389: function (e, t, n) {
        "use strict";
        n.d(t, { _b: function () { return o; } });
        var r = new (n(5069).k)("Parser"), i = function (e) { var t, n = {}; if (e.aws_mobile_analytics_app_id) {
            var i = { AWSPinpoint: { appId: e.aws_mobile_analytics_app_id, region: e.aws_mobile_analytics_app_region } };
            n.Analytics = i;
        } return (e.aws_cognito_identity_pool_id || e.aws_user_pools_id) && (n.Auth = { userPoolId: e.aws_user_pools_id, userPoolWebClientId: e.aws_user_pools_web_client_id, region: e.aws_cognito_region, identityPoolId: e.aws_cognito_identity_pool_id, identityPoolRegion: e.aws_cognito_region, mandatorySignIn: "enable" === e.aws_mandatory_sign_in }), t = e.aws_user_files_s3_bucket ? { AWSS3: { bucket: e.aws_user_files_s3_bucket, region: e.aws_user_files_s3_bucket_region, dangerouslyConnectToHttpEndpointForTesting: e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing } } : e ? e.Storage || e : {}, n.Analytics = Object.assign({}, n.Analytics, e.Analytics), n.Auth = Object.assign({}, n.Auth, e.Auth), n.Storage = Object.assign({}, t), r.debug("parse config", e, "to amplifyconfig", n), n; }, o = function () { function e() { } return e.parseMobilehubConfig = i, e; }();
    }, 9270: function (e, t, n) {
        "use strict";
        n.d(t, { t4: function () { return i; }, Zm: function () { return o; } });
        var r = "aws-amplify/3.8.7", i = { userAgent: r + " js", product: "", navigator: null, isReactNative: !1 };
        if ("undefined" != typeof navigator && navigator.product)
            switch (i.product = navigator.product || "", i.navigator = navigator || null, navigator.product) {
                case "ReactNative":
                    i.userAgent = r + " react-native", i.isReactNative = !0;
                    break;
                default: i.userAgent = r + " js", i.isReactNative = !1;
            }
        var o = function () { return i.userAgent; };
    }, 6648: function (e, t, n) {
        "use strict";
        n.d(t, { c4: function () { return o; } });
        var r = {}, i = function () { function e() { } return e.setItem = function (e, t) { return r[e] = t, r[e]; }, e.getItem = function (e) { return Object.prototype.hasOwnProperty.call(r, e) ? r[e] : void 0; }, e.removeItem = function (e) { return delete r[e]; }, e.clear = function () { return r = {}; }, e; }(), o = function () { function e() { try {
            this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls");
        }
        catch (e) {
            this.storageWindow = i;
        } } return e.prototype.getStorage = function () { return this.storageWindow; }, e; }();
    }, 5489: function (e, t, n) {
        "use strict";
        n.d(t, { T: function () { return s; } });
        var r, i, o = n(3926);
        !function (e) { e.BACK_TO_SIGN_IN = "Back to Sign In", e.CHANGE_PASSWORD_ACTION = "Change", e.CHANGE_PASSWORD = "Change Password", e.CODE_LABEL = "Verification code", e.CODE_PLACEHOLDER = "Enter code", e.CONFIRM_SIGN_UP_CODE_LABEL = "Confirmation Code", e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER = "Enter your code", e.CONFIRM_SIGN_UP_HEADER_TEXT = "Confirm Sign up", e.CONFIRM_SIGN_UP_LOST_CODE = "Lost your code?", e.CONFIRM_SIGN_UP_RESEND_CODE = "Resend Code", e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT = "Confirm", e.CONFIRM_SMS_CODE = "Confirm SMS Code", e.CONFIRM_TOTP_CODE = "Confirm TOTP Code", e.CONFIRM = "Confirm", e.CREATE_ACCOUNT_TEXT = "Create account", e.EMAIL_LABEL = "Email Address *", e.EMAIL_PLACEHOLDER = "Enter your email address", e.FORGOT_PASSWORD_TEXT = "Forgot your password?", e.LESS_THAN_TWO_MFA_VALUES_MESSAGE = "Less than two mfa types available", e.NEW_PASSWORD_LABEL = "New password", e.NEW_PASSWORD_PLACEHOLDER = "Enter your new password", e.NO_ACCOUNT_TEXT = "No account?", e.PASSWORD_LABEL = "Password *", e.PASSWORD_PLACEHOLDER = "Enter your password", e.PHONE_LABEL = "Phone Number *", e.PHONE_PLACEHOLDER = "(555) 555-1212", e.QR_CODE_ALT = "qrcode", e.RESET_PASSWORD_TEXT = "Reset password", e.RESET_YOUR_PASSWORD = "Reset your password", e.SELECT_MFA_TYPE_HEADER_TEXT = "Select MFA Type", e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT = "Verify", e.SEND_CODE = "Send Code", e.SUBMIT = "Submit", e.SETUP_TOTP_REQUIRED = "TOTP needs to be configured", e.SIGN_IN_ACTION = "Sign In", e.SIGN_IN_HEADER_TEXT = "Sign in to your account", e.SIGN_IN_TEXT = "Sign in", e.SIGN_IN_WITH_AMAZON = "Sign in with Amazon", e.SIGN_IN_WITH_AUTH0 = "Sign in with Auth0", e.SIGN_IN_WITH_AWS = "Sign in with AWS", e.SIGN_IN_WITH_FACEBOOK = "Sign in with Facebook", e.SIGN_IN_WITH_GOOGLE = "Sign in with Google", e.SIGN_OUT = "Sign Out", e.SIGN_UP_EMAIL_PLACEHOLDER = "Email", e.SIGN_UP_HAVE_ACCOUNT_TEXT = "Have an account?", e.SIGN_UP_HEADER_TEXT = "Create a new account", e.SIGN_UP_PASSWORD_PLACEHOLDER = "Password", e.SIGN_UP_SUBMIT_BUTTON_TEXT = "Create Account", e.SIGN_UP_USERNAME_PLACEHOLDER = "Username", e.SUCCESS_MFA_TYPE = "Success! Your MFA Type is now:", e.TOTP_HEADER_TEXT = "Scan then enter verification code", e.TOTP_LABEL = "Enter Security Code:", e.TOTP_ISSUER = "AWSCognito", e.TOTP_SETUP_FAILURE = "TOTP Setup has failed", e.TOTP_SUBMIT_BUTTON_TEXT = "Verify Security Token", e.TOTP_SUCCESS_MESSAGE = "Setup TOTP successfully!", e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME = "Failed! Unable to configure MFA at this time", e.USERNAME_LABEL = "Username *", e.USERNAME_PLACEHOLDER = "Enter your username", e.VERIFY_CONTACT_EMAIL_LABEL = "Email", e.VERIFY_CONTACT_HEADER_TEXT = "Account recovery requires verified contact information", e.VERIFY_CONTACT_PHONE_LABEL = "Phone Number", e.VERIFY_CONTACT_SUBMIT_LABEL = "Submit", e.VERIFY_CONTACT_VERIFY_LABEL = "Verify", e.ADDRESS_LABEL = "Address", e.ADDRESS_PLACEHOLDER = "Enter your address", e.NICKNAME_LABEL = "Nickname", e.NICKNAME_PLACEHOLDER = "Enter your nickname", e.BIRTHDATE_LABEL = "Birthday", e.BIRTHDATE_PLACEHOLDER = "Enter your birthday", e.PICTURE_LABEL = "Picture URL", e.PICTURE_PLACEHOLDER = "Enter your picture URL", e.FAMILY_NAME_LABEL = "Family Name", e.FAMILY_NAME_PLACEHOLDER = "Enter your family name", e.PREFERRED_USERNAME_LABEL = "Preferred Username", e.PREFERRED_USERNAME_PLACEHOLDER = "Enter your preferred username", e.GENDER_LABEL = "Gender", e.GENDER_PLACEHOLDER = "Enter your gender", e.PROFILE_LABEL = "Profile URL", e.PROFILE_PLACEHOLDER = "Enter your profile URL", e.GIVEN_NAME_LABEL = "First Name", e.GIVEN_NAME_PLACEHOLDER = "Enter your first name", e.ZONEINFO_LABEL = "Time zone", e.ZONEINFO_PLACEHOLDER = "Enter your time zone", e.LOCALE_LABEL = "Locale", e.LOCALE_PLACEHOLDER = "Enter your locale", e.UPDATED_AT_LABEL = "Updated At", e.UPDATED_AT_PLACEHOLDER = "Enter the time the information was last updated", e.MIDDLE_NAME_LABEL = "Middle Name", e.MIDDLE_NAME_PLACEHOLDER = "Enter your middle name", e.WEBSITE_LABEL = "Website", e.WEBSITE_PLACEHOLDER = "Enter your website", e.NAME_LABEL = "Full Name", e.NAME_PLACEHOLDER = "Enter your full name", e.PHOTO_PICKER_TITLE = "Picker Title", e.PHOTO_PICKER_HINT = "Ancillary text or content may occupy this space here", e.PHOTO_PICKER_PLACEHOLDER_HINT = "Placeholder hint", e.PHOTO_PICKER_BUTTON_TEXT = "Button", e.IMAGE_PICKER_TITLE = "Add Profile Photo", e.IMAGE_PICKER_HINT = "Preview the image before upload", e.IMAGE_PICKER_PLACEHOLDER_HINT = "Tap to image select", e.IMAGE_PICKER_BUTTON_TEXT = "Upload", e.PICKER_TEXT = "Pick a file", e.TEXT_FALLBACK_CONTENT = "Fallback Content", e.CONFIRM_SIGN_UP_FAILED = "Confirm Sign Up Failed", e.SIGN_UP_FAILED = "Sign Up Failed"; }(r || (r = {})), function (e) { e.CHATBOT_TITLE = "ChatBot Lex", e.TEXT_INPUT_PLACEHOLDER = "Write a message", e.VOICE_INPUT_PLACEHOLDER = "Click mic to speak", e.CHAT_DISABLED_ERROR = "Error: Either voice or text must be enabled for the chatbot", e.NO_BOT_NAME_ERROR = "Error: Bot name must be provided to ChatBot"; }(i || (i = {}));
        var s = Object.assign(Object.assign(Object.assign({}, r), o.A), i);
    }, 5573: function (e, t, n) {
        "use strict";
        var r, i, o, s, a;
        n.d(t, { A: function () { return r; }, C: function () { return o; }, M: function () { return i; }, U: function () { return a; }, a: function () { return s; } }), function (e) { e.SignUp = "signup", e.SignOut = "signout", e.SignIn = "signin", e.Loading = "loading", e.SignedOut = "signedout", e.SignedIn = "signedin", e.SigningUp = "signingup", e.ConfirmSignUp = "confirmSignUp", e.confirmingSignUpCustomFlow = "confirmsignupcustomflow", e.ConfirmSignIn = "confirmSignIn", e.confirmingSignInCustomFlow = "confirmingsignincustomflow", e.VerifyingAttributes = "verifyingattributes", e.ForgotPassword = "forgotpassword", e.ResetPassword = "resettingpassword", e.SettingMFA = "settingMFA", e.TOTPSetup = "TOTPSetup", e.CustomConfirmSignIn = "customConfirmSignIn", e.VerifyContact = "verifyContact"; }(r || (r = {})), function (e) { e.TOTP = "TOTP", e.SMS = "SMS", e.NOMFA = "NOMFA"; }(i || (i = {})), function (e) { e.SoftwareTokenMFA = "SOFTWARE_TOKEN_MFA", e.SMSMFA = "SMS_MFA", e.NewPasswordRequired = "NEW_PASSWORD_REQUIRED", e.MFASetup = "MFA_SETUP", e.CustomChallenge = "CUSTOM_CHALLENGE"; }(o || (o = {})), function (e) { e.Password = "password"; }(s || (s = {})), function (e) { e.username = "username", e.email = "email", e.phone_number = "phone_number"; }(a || (a = {}));
    }, 7029: function (e, t, n) {
        "use strict";
        n.d(t, { A: function () { return _; }, C: function () { return u; }, E: function () { return i; }, N: function () { return p; }, P: function () { return d; }, R: function () { return f; }, S: function () { return m; }, T: function () { return A; }, U: function () { return S; }, a: function () { return E; }, b: function () { return s; }, c: function () { return h; }, d: function () { return y; }, e: function () { return g; }, f: function () { return v; }, g: function () { return w; }, h: function () { return c; }, i: function () { return b; }, j: function () { return l; }, k: function () { return o; }, l: function () { return a; }, m: function () { return r; } });
        var r = "username", i = "email", o = "code", s = "phone", a = "password", u = "country-dial-code-select", c = "+1", l = "amplify-auth-source", f = "amplify-redirected-from-hosted-ui", h = "amplify-authenticator-authState", d = "Phone number can not be empty", p = "No Auth module found, please ensure @aws-amplify/auth is imported", g = "No Storage module found, please ensure @aws-amplify/storage is imported", y = "No Interactions module found, please ensure @aws-amplify/interactions is imported", m = "SETUP_TOTP", v = "User has not set up software token mfa", w = "User has not verified software token mfa", b = "SUCCESS", _ = "auth", S = "UI Auth", A = "ToastAuthError", E = "AuthStateChange";
    }, 8396: function (e, t, n) {
        "use strict";
        n.d(t, { a: function () { return d; }, b: function () { return g; }, c: function () { return y; }, d: function () { return p; }, e: function () { return h; }, h: function () { return b; }, i: function () { return v; }, o: function () { return m; }, r: function () { return w; } });
        var r = n(5069), i = n(490), o = n(3139), s = n(5573), a = n(5914);
        n(2043);
        var u = a.g;
        var c = n(5489), l = n(7029), f = new r.k("helpers"), h = function (e) { return !!e.shadowRoot && !!e.attachShadow; }, d = function (e) { i.Xb.dispatch(l.U, { event: l.T, message: o.o.get(e.message) }); }, p = function (e, t) { i.Xb.dispatch(l.U, { event: l.a, message: e, data: t }); }, g = function (e) { if (!e.phoneNumberValue)
            throw new Error(l.P); var t = e.phoneNumberValue.replace(/[-()\s]/g, ""); return "" + e.countryDialCodeValue + t; }, y = function (e) { if (!(e in s.U))
            throw new Error("Invalid username Alias - " + e + ". Instead use " + Object.values(s.U)); }, m = function (e) { var t = function (t) { return n = void 0, r = void 0, o = function () { var n, r; return function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }(this, (function (i) { switch (i.label) {
            case 0:
                switch ((n = t.payload).event) {
                    case l.a: return [3, 1];
                }
                return [3, 8];
            case 1:
                if (!n.message)
                    return [3, 7];
                if (n.message !== s.A.SignedIn)
                    return [3, 6];
                i.label = 2;
            case 2: return i.trys.push([2, 4, , 5]), [4, u.currentAuthenticatedUser()];
            case 3: return r = i.sent(), e(n.message, r), [3, 5];
            case 4: return i.sent(), f.error("User is not authenticated"), [3, 5];
            case 5: return [3, 7];
            case 6: e(n.message, n.data), i.label = 7;
            case 7: return [3, 8];
            case 8: return [2];
        } })); }, new ((i = void 0) || (i = Promise))((function (e, t) { function s(e) { try {
            u(o.next(e));
        }
        catch (e) {
            t(e);
        } } function a(e) { try {
            u(o.throw(e));
        }
        catch (e) {
            t(e);
        } } function u(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function (e) { e(n); }))).then(s, a); } u((o = o.apply(n, r || [])).next()); })); var n, r, i, o; }; return i.Xb.listen(l.U, t), function () { return i.Xb.remove(l.U, t); }; }, v = function (e) { return !(null === e.hint || "string" == typeof e.hint); }, w = { address: { label: o.o.get(c.T.ADDRESS_LABEL), placeholder: o.o.get(c.T.ADDRESS_PLACEHOLDER) }, nickname: { label: o.o.get(c.T.NICKNAME_LABEL), placeholder: o.o.get(c.T.NICKNAME_PLACEHOLDER) }, birthdate: { label: o.o.get(c.T.BIRTHDATE_LABEL), placeholder: o.o.get(c.T.BIRTHDATE_PLACEHOLDER) }, phone_number: { label: o.o.get(c.T.PHONE_LABEL), placeholder: o.o.get(c.T.PHONE_PLACEHOLDER) }, email: { lable: o.o.get(c.T.EMAIL_LABEL), placeholder: o.o.get(c.T.EMAIL_PLACEHOLDER) }, picture: { label: o.o.get(c.T.PICTURE_LABEL), placeholder: o.o.get(c.T.PICTURE_PLACEHOLDER) }, family_name: { label: o.o.get(c.T.FAMILY_NAME_LABEL), placeholder: o.o.get(c.T.FAMILY_NAME_PLACEHOLDER) }, preferred_username: { label: o.o.get(c.T.PREFERRED_USERNAME_LABEL), placeholder: o.o.get(c.T.PREFERRED_USERNAME_PLACEHOLDER) }, gender: { label: o.o.get(c.T.GENDER_LABEL), placeholder: o.o.get(c.T.GENDER_PLACEHOLDER) }, profile: { label: o.o.get(c.T.PROFILE_LABEL), placeholder: o.o.get(c.T.PROFILE_PLACEHOLDER) }, given_name: { label: o.o.get(c.T.GIVEN_NAME_LABEL), placeholder: o.o.get(c.T.GIVEN_NAME_LABEL) }, zoneinfo: { label: o.o.get(c.T.ZONEINFO_LABEL), placeholder: o.o.get(c.T.ZONEINFO_PLACEHOLDER) }, locale: { label: o.o.get(c.T.LOCALE_LABEL), placeholder: o.o.get(c.T.LOCALE_PLACEHOLDER) }, updated_at: { label: o.o.get(c.T.UPDATED_AT_LABEL), placeholder: o.o.get(c.T.UPDATED_AT_PLACEHOLDER) }, middle_name: { label: o.o.get(c.T.MIDDLE_NAME_LABEL), placeholder: o.o.get(c.T.MIDDLE_NAME_PLACEHOLDER) }, website: { label: o.o.get(c.T.WEBSITE_LABEL), placeholder: o.o.get(c.T.WEBSITE_PLACEHOLDER) }, name: { label: o.o.get(c.T.NAME_LABEL), placeholder: o.o.get(c.T.NAME_PLACEHOLDER) } };
        function b(e, t) { var n = e.target.name, r = e.target.value; n === l.C && (t.countryDialCodeValue = r), n === l.b && (t.phoneNumberValue = r); }
    }, 3922: function (e, t, n) {
        "use strict";
        n.d(t, { C: function () { return g; }, H: function () { return x; }, a: function () { return w; }, b: function () { return he; }, c: function () { return X; }, g: function () { return Z; }, h: function () { return R; }, p: function () { return m; }, r: function () { return ge; }, w: function () { return p; } });
        var r, i, o, s, a = (r = function (e, t) { return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function n() { this.constructor = e; } r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }), u = !1, c = !1, l = !1, f = !1, h = 0, d = !1, p = "undefined" != typeof window ? window : {}, g = p.CSS, y = p.document || { head: {} }, m = { $flags$: 0, $resourcesUrl$: "", jmp: function (e) { return e(); }, raf: function (e) { return requestAnimationFrame(e); }, ael: function (e, t, n, r) { return e.addEventListener(t, n, r); }, rel: function (e, t, n, r) { return e.removeEventListener(t, n, r); } }, v = function () { return (y.head.attachShadow + "").indexOf("[native") > -1; }(), w = function (e) { return Promise.resolve(e); }, b = function () { try {
            return new CSSStyleSheet, !0;
        }
        catch (e) { } return !1; }(), _ = function (e, t, n, r) { n && n.map((function (n) { var r = n[0], i = n[1], o = n[2], s = e, a = S(t, o), u = A(r); m.ael(s, i, a, u), (t.$rmListeners$ = t.$rmListeners$ || []).push((function () { return m.rel(s, i, a, u); })); })); }, S = function (e, t) { return function (n) { 256 & e.$flags$ ? e.$lazyInstance$[t](n) : (e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, n]); }; }, A = function (e) { return 0 != (2 & e); }, E = "http://www.w3.org/1999/xlink", C = function (e, t) { return void 0 === t && (t = ""), function () { }; }, I = new WeakMap, T = function (e) { var t = e.$cmpMeta$, n = e.$hostElement$, r = t.$flags$, i = C(0, t.$tagName$), o = function (e, t, n, r) { var i = P(t), o = _e.get(i); if (e = 11 === e.nodeType ? e : y, o)
            if ("string" == typeof o) {
                e = e.head || e;
                var s = I.get(e), a = void 0;
                if (s || I.set(e, s = new Set), !s.has(i)) {
                    if (m.$cssShim$) {
                        var u = (a = m.$cssShim$.createHostStyle(r, i, o, !!(10 & t.$flags$)))["s-sc"];
                        u && (i = u, s = null);
                    }
                    else
                        (a = y.createElement("style")).innerHTML = o;
                    e.insertBefore(a, e.querySelector("link")), s && s.add(i);
                }
            }
            else
                e.adoptedStyleSheets.includes(o) || (e.adoptedStyleSheets = function () { for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length; var r = Array(e), i = 0; for (t = 0; t < n; t++)
                    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
                        r[i] = o[s]; return r; }(e.adoptedStyleSheets, [o])); return i; }(v && n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$, n); 10 & r && (n["s-sc"] = o, n.classList.add(o + "-h"), 2 & r && n.classList.add(o + "-s")), i(); }, P = function (e, t) { return "sc-" + e.$tagName$; }, U = {}, O = function (e) { return "object" == (e = typeof e) || "function" === e; }, R = function (e, t) { for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r]; var i = null, o = null, s = null, a = !1, u = !1, c = [], l = function (t) { for (var n = 0; n < t.length; n++)
            i = t[n], Array.isArray(i) ? l(i) : null != i && "boolean" != typeof i && ((a = "function" != typeof e && !O(i)) && (i = String(i)), a && u ? c[c.length - 1].$text$ += i : c.push(a ? k(null, i) : i), u = a); }; if (l(n), t) {
            t.key && (o = t.key), t.name && (s = t.name);
            var f = t.className || t.class;
            f && (t.class = "object" != typeof f ? f : Object.keys(f).filter((function (e) { return f[e]; })).join(" "));
        } var h = k(e, null); return h.$attrs$ = t, c.length > 0 && (h.$children$ = c), h.$key$ = o, h.$name$ = s, h; }, k = function (e, t) { return { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null, $attrs$: null, $key$: null, $name$: null }; }, x = {}, D = function (e, t, n, r, i, o) { if (n !== r) {
            var s = me(e, t), a = t.toLowerCase();
            if ("class" === t) {
                var u = e.classList, c = N(n), l = N(r);
                u.remove.apply(u, c.filter((function (e) { return e && !l.includes(e); }))), u.add.apply(u, l.filter((function (e) { return e && !c.includes(e); })));
            }
            else if ("style" === t) {
                for (var f in n)
                    r && null != r[f] || (f.includes("-") ? e.style.removeProperty(f) : e.style[f] = "");
                for (var f in r)
                    n && r[f] === n[f] || (f.includes("-") ? e.style.setProperty(f, r[f]) : e.style[f] = r[f]);
            }
            else if ("key" === t)
                ;
            else if ("ref" === t)
                r && r(e);
            else if (s || "o" !== t[0] || "n" !== t[1]) {
                var h = O(r);
                if ((s || h && null !== r) && !i)
                    try {
                        if (e.tagName.includes("-"))
                            e[t] = r;
                        else {
                            var d = null == r ? "" : r;
                            "list" === t ? s = !1 : null != n && e[t] == d || (e[t] = d);
                        }
                    }
                    catch (e) { }
                var g = !1;
                a !== (a = a.replace(/^xlink\:?/, "")) && (t = a, g = !0), null == r || !1 === r ? !1 === r && "" !== e.getAttribute(t) || (g ? e.removeAttributeNS(E, t) : e.removeAttribute(t)) : (!s || 4 & o || i) && !h && (r = !0 === r ? "" : r, g ? e.setAttributeNS(E, t, r) : e.setAttribute(t, r));
            }
            else
                t = "-" === t[2] ? t.slice(3) : me(p, a) ? a.slice(2) : a[2] + t.slice(3), n && m.rel(e, t, n, !1), r && m.ael(e, t, r, !1);
        } }, L = /\s/, N = function (e) { return e ? e.split(L) : []; }, $ = function (e, t, n, r) { var i = 11 === t.$elm$.nodeType && t.$elm$.host ? t.$elm$.host : t.$elm$, o = e && e.$attrs$ || U, s = t.$attrs$ || U; for (r in o)
            r in s || D(i, r, o[r], void 0, n, t.$flags$); for (r in s)
            D(i, r, o[r], s[r], n, t.$flags$); }, M = function (e, t, n, r) { var a, c, h, d = t.$children$[n], p = 0; if (u || (l = !0, "slot" === d.$tag$ && (i && r.classList.add(i + "-s"), d.$flags$ |= d.$children$ ? 2 : 1)), null !== d.$text$)
            a = d.$elm$ = y.createTextNode(d.$text$);
        else if (1 & d.$flags$)
            a = d.$elm$ = y.createTextNode("");
        else {
            if (f || (f = "svg" === d.$tag$), a = d.$elm$ = y.createElementNS(f ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", 2 & d.$flags$ ? "slot-fb" : d.$tag$), f && "foreignObject" === d.$tag$ && (f = !1), $(null, d, f), null != i && a["s-si"] !== i && a.classList.add(a["s-si"] = i), d.$children$)
                for (p = 0; p < d.$children$.length; ++p)
                    (c = M(e, d, p, a)) && a.appendChild(c);
            "svg" === d.$tag$ ? f = !1 : "foreignObject" === a.tagName && (f = !0);
        } return a["s-hn"] = s, 3 & d.$flags$ && (a["s-sr"] = !0, a["s-cr"] = o, a["s-sn"] = d.$name$ || "", (h = e && e.$children$ && e.$children$[n]) && h.$tag$ === d.$tag$ && e.$elm$ && F(e.$elm$, !1)), a; }, F = function (e, t) { m.$flags$ |= 1; for (var n = e.childNodes, r = n.length - 1; r >= 0; r--) {
            var i = n[r];
            i["s-hn"] !== s && i["s-ol"] && (K(i).insertBefore(i, q(i)), i["s-ol"].remove(), i["s-ol"] = void 0, l = !0), t && F(i, t);
        } m.$flags$ &= -2; }, j = function (e, t, n, r, i, o) { var a, u = e["s-cr"] && e["s-cr"].parentNode || e; for (u.shadowRoot && u.tagName === s && (u = u.shadowRoot); i <= o; ++i)
            r[i] && (a = M(null, n, i, e)) && (r[i].$elm$ = a, u.insertBefore(a, q(t))); }, B = function (e, t, n, r, i) { for (; t <= n; ++t)
            (r = e[t]) && (i = r.$elm$, J(r), c = !0, i["s-ol"] ? i["s-ol"].remove() : F(i, !0), i.remove()); }, H = function (e, t) { return e.$tag$ === t.$tag$ && ("slot" === e.$tag$ ? e.$name$ === t.$name$ : e.$key$ === t.$key$); }, q = function (e) { return e && e["s-ol"] || e; }, K = function (e) { return (e["s-ol"] ? e["s-ol"] : e).parentNode; }, V = function (e, t) { var n, r = t.$elm$ = e.$elm$, i = e.$children$, o = t.$children$, s = t.$tag$, a = t.$text$; null === a ? (f = "svg" === s || "foreignObject" !== s && f, "slot" === s || $(e, t, f), null !== i && null !== o ? function (e, t, n, r) { for (var i, o, s = 0, a = 0, u = 0, c = 0, l = t.length - 1, f = t[0], h = t[l], d = r.length - 1, p = r[0], g = r[d]; s <= l && a <= d;)
            if (null == f)
                f = t[++s];
            else if (null == h)
                h = t[--l];
            else if (null == p)
                p = r[++a];
            else if (null == g)
                g = r[--d];
            else if (H(f, p))
                V(f, p), f = t[++s], p = r[++a];
            else if (H(h, g))
                V(h, g), h = t[--l], g = r[--d];
            else if (H(f, g))
                "slot" !== f.$tag$ && "slot" !== g.$tag$ || F(f.$elm$.parentNode, !1), V(f, g), e.insertBefore(f.$elm$, h.$elm$.nextSibling), f = t[++s], g = r[--d];
            else if (H(h, p))
                "slot" !== f.$tag$ && "slot" !== g.$tag$ || F(h.$elm$.parentNode, !1), V(h, p), e.insertBefore(h.$elm$, f.$elm$), h = t[--l], p = r[++a];
            else {
                for (u = -1, c = s; c <= l; ++c)
                    if (t[c] && null !== t[c].$key$ && t[c].$key$ === p.$key$) {
                        u = c;
                        break;
                    }
                u >= 0 ? ((o = t[u]).$tag$ !== p.$tag$ ? i = M(t && t[a], n, u, e) : (V(o, p), t[u] = void 0, i = o.$elm$), p = r[++a]) : (i = M(t && t[a], n, a, e), p = r[++a]), i && K(f.$elm$).insertBefore(i, q(f.$elm$));
            } s > l ? j(e, null == r[d + 1] ? null : r[d + 1].$elm$, n, r, a, d) : a > d && B(t, s, l); }(r, i, t, o) : null !== o ? (null !== e.$text$ && (r.textContent = ""), j(r, null, t, o, 0, o.length - 1)) : null !== i && B(i, 0, i.length - 1), f && "svg" === s && (f = !1)) : (n = r["s-cr"]) ? n.parentNode.textContent = a : e.$text$ !== a && (r.data = a); }, W = function (e) { var t, n, r, i, o, s, a = e.childNodes; for (n = 0, r = a.length; n < r; n++)
            if (1 === (t = a[n]).nodeType) {
                if (t["s-sr"])
                    for (o = t["s-sn"], t.hidden = !1, i = 0; i < r; i++)
                        if (a[i]["s-hn"] !== t["s-hn"])
                            if (s = a[i].nodeType, "" !== o) {
                                if (1 === s && o === a[i].getAttribute("slot")) {
                                    t.hidden = !0;
                                    break;
                                }
                            }
                            else if (1 === s || 3 === s && "" !== a[i].textContent.trim()) {
                                t.hidden = !0;
                                break;
                            }
                W(t);
            } }, z = [], G = function (e) { for (var t, n, r, i, o, s, a = 0, u = e.childNodes, l = u.length; a < l; a++) {
            if ((t = u[a])["s-sr"] && (n = t["s-cr"]))
                for (r = n.parentNode.childNodes, i = t["s-sn"], s = r.length - 1; s >= 0; s--)
                    (n = r[s])["s-cn"] || n["s-nr"] || n["s-hn"] === t["s-hn"] || (Y(n, i) ? (o = z.find((function (e) { return e.$nodeToRelocate$ === n; })), c = !0, n["s-sn"] = n["s-sn"] || i, o ? o.$slotRefNode$ = t : z.push({ $slotRefNode$: t, $nodeToRelocate$: n }), n["s-sr"] && z.map((function (e) { Y(e.$nodeToRelocate$, n["s-sn"]) && (o = z.find((function (e) { return e.$nodeToRelocate$ === n; }))) && !e.$slotRefNode$ && (e.$slotRefNode$ = o.$slotRefNode$); }))) : z.some((function (e) { return e.$nodeToRelocate$ === n; })) || z.push({ $nodeToRelocate$: n }));
            1 === t.nodeType && G(t);
        } }, Y = function (e, t) { return 1 === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t; }, J = function (e) { e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(J); }, Z = function (e) { return pe(e).$hostElement$; }, X = function (e, t, n) { var r = Z(e); return { emit: function (e) { return Q(r, t, { bubbles: !!(4 & n), composed: !!(2 & n), cancelable: !!(1 & n), detail: e }); } }; }, Q = function (e, t, n) { var r = new CustomEvent(t, n); return e.dispatchEvent(r), r; }, ee = function (e, t) { t && !e.$onRenderResolve$ && t["s-p"] && t["s-p"].push(new Promise((function (t) { return e.$onRenderResolve$ = t; }))); }, te = function (e, t) { if (e.$flags$ |= 16, !(4 & e.$flags$))
            return ee(e, e.$ancestorComponent$), Ue((function () { return ne(e, t); })); e.$flags$ |= 512; }, ne = function (e, t) { var n, r = C(0, e.$cmpMeta$.$tagName$), i = e.$lazyInstance$; return t && (e.$flags$ |= 256, e.$queuedListeners$ && (e.$queuedListeners$.map((function (e) { var t = e[0], n = e[1]; return ae(i, t, n); })), e.$queuedListeners$ = null), n = ae(i, "componentWillLoad")), r(), ue(n, (function () { return re(e, i, t); })); }, re = function (e, t, n) { var r = e.$hostElement$, a = C(0, e.$cmpMeta$.$tagName$), f = r["s-rc"]; n && T(e); var h = C(0, e.$cmpMeta$.$tagName$); (function (e, t) { var n, r = e.$hostElement$, a = e.$cmpMeta$, f = e.$vnode$ || k(null, null), h = (n = t) && n.$tag$ === x ? t : R(null, null, t); if (s = r.tagName, h.$tag$ = null, h.$flags$ |= 4, e.$vnode$ = h, h.$elm$ = f.$elm$ = r.shadowRoot || r, i = r["s-sc"], o = r["s-cr"], u = v && 0 != (1 & a.$flags$), c = !1, V(f, h), m.$flags$ |= 1, l) {
            G(h.$elm$);
            for (var d = void 0, p = void 0, g = void 0, w = void 0, b = void 0, _ = void 0, S = 0; S < z.length; S++)
                (p = (d = z[S]).$nodeToRelocate$)["s-ol"] || ((g = y.createTextNode(""))["s-nr"] = p, p.parentNode.insertBefore(p["s-ol"] = g, p));
            for (S = 0; S < z.length; S++)
                if (p = (d = z[S]).$nodeToRelocate$, d.$slotRefNode$) {
                    for (w = d.$slotRefNode$.parentNode, b = d.$slotRefNode$.nextSibling, g = p["s-ol"]; g = g.previousSibling;)
                        if ((_ = g["s-nr"]) && _["s-sn"] === p["s-sn"] && w === _.parentNode && (!(_ = _.nextSibling) || !_["s-nr"])) {
                            b = _;
                            break;
                        }
                    (!b && w !== p.parentNode || p.nextSibling !== b) && p !== b && (!p["s-hn"] && p["s-ol"] && (p["s-hn"] = p["s-ol"].parentNode.nodeName), w.insertBefore(p, b));
                }
                else
                    1 === p.nodeType && (p.hidden = !0);
        } c && W(h.$elm$), m.$flags$ &= -2, z.length = 0; })(e, ie(e, t)), m.$cssShim$ && m.$cssShim$.updateHost(r), f && (f.map((function (e) { return e(); })), r["s-rc"] = void 0), h(), a(); var d = r["s-p"], p = function () { return oe(e); }; 0 === d.length ? p() : (Promise.all(d).then(p), e.$flags$ |= 4, d.length = 0); }, ie = function (e, t) { try {
            t = t.render(), e.$flags$ &= -17, e.$flags$ |= 2;
        }
        catch (e) {
            ve(e);
        } return t; }, oe = function (e) { var t = e.$cmpMeta$.$tagName$, n = e.$hostElement$, r = C(0, t), i = e.$lazyInstance$, o = e.$ancestorComponent$; ae(i, "componentDidRender"), 64 & e.$flags$ ? r() : (e.$flags$ |= 64, ce(n), r(), e.$onReadyResolve$(n), o || se()), e.$onRenderResolve$ && (e.$onRenderResolve$(), e.$onRenderResolve$ = void 0), 512 & e.$flags$ && Pe((function () { return te(e, !1); })), e.$flags$ &= -517; }, se = function (e) { ce(y.documentElement), m.$flags$ |= 2, Pe((function () { return Q(p, "appload", { detail: { namespace: "amplify-ui-components" } }); })); }, ae = function (e, t, n) { if (e && e[t])
            try {
                return e[t](n);
            }
            catch (e) {
                ve(e);
            } }, ue = function (e, t) { return e && e.then ? e.then(t) : t(); }, ce = function (e) { return e.classList.add("hydrated"); }, le = function (e, t, n) { if (t.$members$) {
            e.watchers && (t.$watchers$ = e.watchers);
            var r = Object.entries(t.$members$), i = e.prototype;
            if (r.map((function (e) { var r = e[0], o = e[1][0]; (31 & o || 2 & n && 32 & o) && Object.defineProperty(i, r, { get: function () { return e = r, pe(this).$instanceValues$.get(e); var e; }, set: function (e) { !function (e, t, n, r) { var i, o, s = pe(e), a = s.$instanceValues$.get(t), u = s.$flags$, c = s.$lazyInstance$; if (i = n, o = r.$members$[t][0], n = null == i || O(i) ? i : 4 & o ? "false" !== i && ("" === i || !!i) : 2 & o ? parseFloat(i) : 1 & o ? String(i) : i, !(8 & u && void 0 !== a || n === a) && (s.$instanceValues$.set(t, n), c)) {
                    if (r.$watchers$ && 128 & u) {
                        var l = r.$watchers$[t];
                        l && l.map((function (e) { try {
                            c[e](n, a, t);
                        }
                        catch (e) {
                            ve(e);
                        } }));
                    }
                    2 == (18 & u) && te(s, !1);
                } }(this, r, e, t); }, configurable: !0, enumerable: !0 }); })), 1 & n) {
                var o = new Map;
                i.attributeChangedCallback = function (e, t, n) { var r = this; m.jmp((function () { var t = o.get(e); r[t] = (null !== n || "boolean" != typeof r[t]) && n; })); }, e.observedAttributes = r.filter((function (e) { return e[0], 15 & e[1][0]; })).map((function (e) { var t = e[0], n = e[1][1] || t; return o.set(n, t), n; }));
            }
        } return e; }, fe = function (e, t, r, i, o) { return s = void 0, a = void 0, c = function () { var e, i, s, a, u, c, l; return function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }(this, (function (f) { switch (f.label) {
            case 0: return 0 != (32 & t.$flags$) ? [3, 5] : (t.$flags$ |= 32, (o = be(r)).then ? (e = function () { }, [4, o]) : [3, 2]);
            case 1: o = f.sent(), e(), f.label = 2;
            case 2:
                o.isProxied || (r.$watchers$ = o.watchers, le(o, r, 2), o.isProxied = !0), i = C(0, r.$tagName$), t.$flags$ |= 8;
                try {
                    new o(t);
                }
                catch (e) {
                    ve(e);
                }
                return t.$flags$ &= -9, t.$flags$ |= 128, i(), o.style ? (s = o.style, a = P(r), _e.has(a) ? [3, 5] : (u = C(0, r.$tagName$), 8 & r.$flags$ ? [4, n.e(315).then(n.bind(n, 5315)).then((function (e) { return e.scopeCss(s, a, !1); }))] : [3, 4])) : [3, 5];
            case 3: s = f.sent(), f.label = 4;
            case 4: !function (e, t, n) { var r = _e.get(e); b && n ? (r = r || new CSSStyleSheet).replace(t) : r = t, _e.set(e, r); }(a, s, !!(1 & r.$flags$)), u(), f.label = 5;
            case 5: return c = t.$ancestorComponent$, l = function () { return te(t, !0); }, c && c["s-rc"] ? c["s-rc"].push(l) : l(), [2];
        } })); }, new ((u = void 0) || (u = Promise))((function (e, t) { function n(e) { try {
            i(c.next(e));
        }
        catch (e) {
            t(e);
        } } function r(e) { try {
            i(c.throw(e));
        }
        catch (e) {
            t(e);
        } } function i(t) { var i; t.done ? e(t.value) : (i = t.value, i instanceof u ? i : new u((function (e) { e(i); }))).then(n, r); } i((c = c.apply(s, a || [])).next()); })); var s, a, u, c; }, he = function (e, t) { void 0 === t && (t = {}); var n, r = C(), i = [], o = t.exclude || [], s = p.customElements, u = y.head, c = u.querySelector("meta[charset]"), l = y.createElement("style"), f = [], h = !0; Object.assign(m, t), m.$resourcesUrl$ = new URL(t.resourcesUrl || "./", y.baseURI).href, t.syncQueue && (m.$flags$ |= 4), e.map((function (e) { return e[1].map((function (t) { var r = { $flags$: t[0], $tagName$: t[1], $members$: t[2], $listeners$: t[3] }; r.$members$ = t[2], r.$listeners$ = t[3], r.$watchers$ = {}, !v && 1 & r.$flags$ && (r.$flags$ |= 8); var u = r.$tagName$, c = function (e) { function t(t) { var n = e.call(this, t) || this; return ye(t = n, r), 1 & r.$flags$ && (v ? t.attachShadow({ mode: "open" }) : "shadowRoot" in t || (t.shadowRoot = t)), n; } return a(t, e), t.prototype.connectedCallback = function () { var e = this; n && (clearTimeout(n), n = null), h ? f.push(this) : m.jmp((function () { return function (e) { if (0 == (1 & m.$flags$)) {
            var t = pe(e), n = t.$cmpMeta$, r = C(0, n.$tagName$);
            if (1 & t.$flags$)
                _(e, t, n.$listeners$);
            else {
                t.$flags$ |= 1, 12 & n.$flags$ && function (e) { var t = e["s-cr"] = y.createComment(""); t["s-cn"] = !0, e.insertBefore(t, e.firstChild); }(e);
                for (var i = e; i = i.parentNode || i.host;)
                    if (i["s-p"]) {
                        ee(t, t.$ancestorComponent$ = i);
                        break;
                    }
                n.$members$ && Object.entries(n.$members$).map((function (t) { var n = t[0]; if (31 & t[1][0] && e.hasOwnProperty(n)) {
                    var r = e[n];
                    delete e[n], e[n] = r;
                } })), fe(0, t, n);
            }
            r();
        } }(e); })); }, t.prototype.disconnectedCallback = function () { var e = this; m.jmp((function () { return function (e) { if (0 == (1 & m.$flags$)) {
            var t = pe(e);
            t.$rmListeners$ && (t.$rmListeners$.map((function (e) { return e(); })), t.$rmListeners$ = void 0), m.$cssShim$ && m.$cssShim$.removeHost(e);
        } }(e); })); }, t.prototype.forceUpdate = function () { var e; (e = pe(this)).$hostElement$.isConnected && 2 == (18 & e.$flags$) && te(e, !1); }, t.prototype.componentOnReady = function () { return pe(this).$onReadyPromise$; }, t; }(HTMLElement); r.$lazyBundleId$ = e[0], o.includes(u) || s.get(u) || (i.push(u), s.define(u, le(c, r, 1))); })); })), l.innerHTML = i + "{visibility:hidden}.hydrated{visibility:inherit}", l.setAttribute("data-styles", ""), u.insertBefore(l, c ? c.nextSibling : u.firstChild), h = !1, f.length ? f.map((function (e) { return e.connectedCallback(); })) : m.jmp((function () { return n = setTimeout(se, 30); })), r(); }, de = new WeakMap, pe = function (e) { return de.get(e); }, ge = function (e, t) { return de.set(t.$lazyInstance$ = e, t); }, ye = function (e, t) { var n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map }; return n.$onReadyPromise$ = new Promise((function (e) { return n.$onReadyResolve$ = e; })), e["s-p"] = [], e["s-rc"] = [], _(e, n, t.$listeners$), de.set(e, n); }, me = function (e, t) { return t in e; }, ve = function (e) { return console.error(e); }, we = new Map, be = function (e, t, r) { var i = e.$tagName$.replace(/-/g, "_"), o = e.$lazyBundleId$, s = we.get(o); return s ? s[i] : n(1766)("./" + o + ".entry.js").then((function (e) { return we.set(o, e), e[i]; }), ve); }, _e = new Map, Se = [], Ae = [], Ee = [], Ce = function (e, t) { return function (n) { e.push(n), d || (d = !0, t && 4 & m.$flags$ ? Pe(Te) : m.raf(Te)); }; }, Ie = function (e, t) { for (var n = 0, r = 0; n < e.length && (r = performance.now()) < t;)
            try {
                e[n++](r);
            }
            catch (e) {
                ve(e);
            } n === e.length ? e.length = 0 : 0 !== n && e.splice(0, n); }, Te = function () { h++, function (e) { for (var t = 0; t < e.length; t++)
            try {
                e[t](performance.now());
            }
            catch (e) {
                ve(e);
            } e.length = 0; }(Se); var e = 2 == (6 & m.$flags$) ? performance.now() + 14 * Math.ceil(.1 * h) : 1 / 0; Ie(Ae, e), Ie(Ee, e), Ae.length > 0 && (Ee.push.apply(Ee, Ae), Ae.length = 0), (d = Se.length + Ae.length + Ee.length > 0) ? m.raf(Te) : h = 0; }, Pe = function (e) { return w().then(e); }, Ue = Ce(Ae, !0);
    }, 9277: function (e, t, n) {
        "use strict";
        var r;
        n.d(t, { A: function () { return r; } }), function (e) { e.Public = "public", e.Private = "private", e.Protected = "protected"; }(r || (r = {}));
    }, 1766: function (e, t, n) { var r = { "./amplify-amazon-button_5.entry.js": [2265, 265], "./amplify-auth-fields_9.entry.js": [3763, 763], "./amplify-authenticator.entry.js": [2146, 146], "./amplify-button_3.entry.js": [8473, 473], "./amplify-chatbot.entry.js": [7177, 177], "./amplify-checkbox.entry.js": [1523, 523], "./amplify-confirm-sign-in_7.entry.js": [5208, 208], "./amplify-container.entry.js": [4131, 131], "./amplify-federated-buttons_2.entry.js": [885, 885], "./amplify-federated-sign-in.entry.js": [7611, 611], "./amplify-form-field_4.entry.js": [801, 801], "./amplify-greetings.entry.js": [9616, 616], "./amplify-icon-button.entry.js": [6063, 63], "./amplify-icon.entry.js": [2831, 831], "./amplify-link.entry.js": [8870, 870], "./amplify-nav_2.entry.js": [9798, 798], "./amplify-photo-picker.entry.js": [5819, 819], "./amplify-picker.entry.js": [5401, 401], "./amplify-radio-button_2.entry.js": [2610, 610], "./amplify-s3-album.entry.js": [2890, 614, 890], "./amplify-s3-image-picker.entry.js": [1324, 614, 742], "./amplify-s3-image.entry.js": [3575, 614, 575], "./amplify-s3-text-picker.entry.js": [8883, 614, 883], "./amplify-s3-text.entry.js": [5905, 614, 905], "./amplify-select-mfa-type.entry.js": [8384, 384], "./amplify-sign-in-button.entry.js": [5574, 574], "./amplify-toast.entry.js": [2165, 165], "./amplify-tooltip.entry.js": [1223, 223] }; function i(e) { if (!n.o(r, e))
        return Promise.resolve().then((function () { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t; })); var t = r[e], i = t[0]; return Promise.all(t.slice(1).map(n.e)).then((function () { return n(i); })); } i.keys = function () { return Object.keys(r); }, i.id = 1766, e.exports = i; }, 3908: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, { AmplifyAmazonButton: function () { return y; }, AmplifyAuth0Button: function () { return v; }, AmplifyAuthFields: function () { return m; }, AmplifyAuthenticator: function () { return w; }, AmplifyButton: function () { return b; }, AmplifyChatbot: function () { return _; }, AmplifyCheckbox: function () { return S; }, AmplifyCodeField: function () { return A; }, AmplifyConfirmSignIn: function () { return E; }, AmplifyConfirmSignUp: function () { return C; }, AmplifyContainer: function () { return I; }, AmplifyCountryDialCode: function () { return T; }, AmplifyEmailField: function () { return P; }, AmplifyFacebookButton: function () { return U; }, AmplifyFederatedButtons: function () { return O; }, AmplifyFederatedSignIn: function () { return R; }, AmplifyForgotPassword: function () { return k; }, AmplifyFormField: function () { return x; }, AmplifyFormSection: function () { return D; }, AmplifyGoogleButton: function () { return L; }, AmplifyGreetings: function () { return N; }, AmplifyHint: function () { return $; }, AmplifyIcon: function () { return M; }, AmplifyIconButton: function () { return F; }, AmplifyInput: function () { return j; }, AmplifyLabel: function () { return B; }, AmplifyLink: function () { return H; }, AmplifyLoadingSpinner: function () { return q; }, AmplifyNav: function () { return K; }, AmplifyOauthButton: function () { return V; }, AmplifyPasswordField: function () { return W; }, AmplifyPhoneField: function () { return z; }, AmplifyPhotoPicker: function () { return G; }, AmplifyPicker: function () { return Y; }, AmplifyRadioButton: function () { return J; }, AmplifyRequireNewPassword: function () { return Z; }, AmplifyS3Album: function () { return X; }, AmplifyS3Image: function () { return Q; }, AmplifyS3ImagePicker: function () { return ee; }, AmplifyS3Text: function () { return te; }, AmplifyS3TextPicker: function () { return ne; }, AmplifySection: function () { return re; }, AmplifySelect: function () { return ie; }, AmplifySelectMfaType: function () { return oe; }, AmplifySignIn: function () { return se; }, AmplifySignInButton: function () { return ae; }, AmplifySignOut: function () { return ue; }, AmplifySignUp: function () { return ce; }, AmplifyStrike: function () { return le; }, AmplifyToast: function () { return fe; }, AmplifyTooltip: function () { return he; }, AmplifyTotpSetup: function () { return de; }, AmplifyUsernameField: function () { return pe; }, AmplifyVerifyContact: function () { return ge; }, withAuthenticator: function () { return Ae; } });
        var r = n(804), i = n.n(r), o = function () { return (o = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
        function s(e, t) { void 0 === t && (t = document); var n = "on" + e, r = n in t; if (!r) {
            var i = t.createElement("div");
            i.setAttribute(n, "return;"), r = "function" == typeof i[n];
        } return r; }
        function a(e) { var t = new Map; return e.forEach((function (e) { return t.set(e, e); })), t; }
        var u, c = (u = function (e, t) { return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function n() { this.constructor = e; } u(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }), l = function () { return (l = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, f = function (e) { var t = e.toLowerCase().split("-").map((function (e) { return e.charAt(0).toUpperCase() + e.slice(1); })).join(""); return function (e, t) { var n = function (t, n) { return i().createElement(e, o({}, t, { forwardedRef: n })); }; return n.displayName = t, i().forwardRef(n); }(function (n) { function r(e) { var t = n.call(this, e) || this; return t.ref = i().createRef(), t; } return c(r, n), r.prototype.componentDidMount = function () { this.componentDidUpdate(this.props); }, r.prototype.componentDidUpdate = function (e) { !function (e, t, n) { void 0 === n && (n = {}); var r = function (e, t, n) { var r = a(e), i = a(t.className ? t.className.split(" ") : []), o = a(n.className ? n.className.split(" ") : []), s = []; return r.forEach((function (e) { i.has(e) ? (s.push(e), i.delete(e)) : o.has(e) || s.push(e); })), i.forEach((function (e) { return s.push(e); })), s.join(" "); }(e.classList, t, n); r && (e.className = r), Object.keys(t).forEach((function (n) { if ("children" !== n && "style" !== n && "ref" !== n && "className" !== n)
            if (0 === n.indexOf("on") && n[2] === n[2].toUpperCase()) {
                var r = n.substring(2), i = r[0].toLowerCase() + r.substring(1);
                s(i) || function (e, t, n) { var r = e.__events || (e.__events = {}), i = r[t]; i && e.removeEventListener(t, i), null != n && e.addEventListener(t, r[t] = function (e) { n.call(this, e); }); }(e, i, t[n]);
            }
            else
                e[n] = t[n]; })); }(this.ref.current, this.props, e); }, r.prototype.render = function () { var t = this.props, n = t.children, r = (t.forwardedRef, t.style), o = t.className, a = (t.ref, function (e, t) { var n = {}; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        } return n; }(t, ["children", "forwardedRef", "style", "className", "ref"])), u = Object.keys(a).reduce((function (e, t) { var n = 0 === t.indexOf("on") && t[2] === t[2].toUpperCase(), r = 0 === t.indexOf("data-"), i = 0 === t.indexOf("aria-"); if (n) {
            var o = t.substring(2).toLowerCase();
            "undefined" != typeof document && s(o) && (e[t] = a[t]);
        }
        else
            (r || i) && (e[t] = a[t]); return e; }), {}), c = l(l({}, u), { ref: this.ref, style: r, className: o }); return i().createElement(e, c, n); }, Object.defineProperty(r, "displayName", { get: function () { return t; }, enumerable: !0, configurable: !0 }), r; }(i().Component), t); }, h = n(3922);
        if ((0, n(9222).lC)().isBrowser) {
            var d = document.createElement("style");
            d.appendChild(document.createTextNode("\n    :root {\n      /* Typography */\n      --amplify-font-family: 'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n\n      --amplify-text-xxs: 0.75rem;\n      --amplify-text-xs: 0.81rem;\n      --amplify-text-sm: 0.875rem;\n      --amplify-text-md: 1rem;\n      --amplify-text-md-sub: 1.15rem;\n      --amplify-text-lg: 1.5rem;\n      --amplify-text-xl: 2rem;\n      --amplify-text-xxl: 2.5rem;\n\n      /* Colors */\n      --amplify-primary-color: #ff9900;\n      --amplify-primary-contrast: var(--amplify-white);\n      --amplify-primary-tint: #ffac31;\n      --amplify-primary-shade: #e88b01;\n\n      --amplify-secondary-color: #152939;\n      --amplify-secondary-contrast: var(--amplify-white);\n      --amplify-secondary-tint: #31465f;\n      --amplify-secondary-shade: #1F2A37;\n\n      --amplify-tertiary-color: #5d8aff;\n      --amplify-tertiary-contrast: var(--amplify-white);\n      --amplify-tertiary-tint: #7da1ff;\n      --amplify-tertiary-shade: #537BE5;\n\n      --amplify-background-color: var(--amplify-white);\n\n      /* Neutral */\n      --amplify-grey: #828282;\n      --amplify-light-grey: #c4c4c4;\n      --amplify-white: #ffffff;\n      --amplify-smoke-white: #f5f5f5;\n      --amplify-red: #dd3f5b;\n      --amplify-blue: #099ac8;\n    }\n  "));
            var p = document.getElementsByTagName("head")[0], g = p.firstChild;
            p.insertBefore(d, g);
        }
        !function () { if ("undefined" != typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
            var e = HTMLElement;
            window.HTMLElement = function () { return Reflect.construct(e, [], this.constructor); }, HTMLElement.prototype = e.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e);
        } }(), function () { var e = []; if ("undefined" != typeof window) {
            var t = window;
            t.customElements && (!t.Element || t.Element.prototype.closest && t.Element.prototype.matches && t.Element.prototype.remove && t.Element.prototype.getRootNode) || e.push(n.e(748).then(n.t.bind(n, 5378, 23))), "function" == typeof Object.assign && Object.entries && Array.prototype.find && Array.prototype.includes && String.prototype.startsWith && String.prototype.endsWith && (!t.NodeList || t.NodeList.prototype.forEach) && t.fetch && function () { try {
                var e = new URL("b", "http://a");
                return e.pathname = "c%20d", "http://a/c%20d" === e.href && e.searchParams;
            }
            catch (e) {
                return !1;
            } }() && "undefined" != typeof WeakMap || e.push(n.e(214).then(n.t.bind(n, 261, 23)));
        } return Promise.all(e); }().then((function () { return "undefined" == typeof window ? Promise.resolve() : (h.C && h.C.supports && h.C.supports("color", "var(--c)") ? (0, h.a)() : n.e(843).then(n.t.bind(n, 1041, 23)).then((function () { return (h.p.$cssShim$ = h.w.__cssshim) ? h.p.$cssShim$.i() : 0; }))).then((function () { return (0, h.b)([["amplify-icon", [[2, "amplify-icon", { name: [1] }]]], ["amplify-authenticator", [[1, "amplify-authenticator", { initialAuthState: [1, "initial-auth-state"], federated: [16], usernameAlias: [1, "username-alias"], handleAuthStateChange: [16], authState: [32], authData: [32], toastMessage: [32] }]]], ["amplify-federated-sign-in", [[1, "amplify-federated-sign-in", { authState: [1, "auth-state"], federated: [8] }]]], ["amplify-select-mfa-type", [[1, "amplify-select-mfa-type", { MFATypes: [16], authData: [16], handleSubmit: [16], TOTPSetup: [32], selectMessage: [32], MFAMethod: [32], isTOTP: [32], isNoMFA: [32], isSMS: [32], loading: [32] }]]], ["amplify-s3-image-picker", [[4, "amplify-s3-image-picker", { path: [1], contentType: [1, "content-type"], level: [1], track: [4], identityId: [1, "identity-id"], fileToKey: [16], headerTitle: [1, "header-title"], headerHint: [1, "header-hint"], placeholderHint: [1, "placeholder-hint"], buttonText: [1, "button-text"], src: [32] }]]], ["amplify-chatbot", [[1, "amplify-chatbot", { botName: [1, "bot-name"], clearOnComplete: [4, "clear-on-complete"], conversationModeOn: [4, "conversation-mode-on"], welcomeMessage: [1, "welcome-message"], botTitle: [1, "bot-title"], voiceEnabled: [4, "voice-enabled"], textEnabled: [4, "text-enabled"], silenceTime: [2, "silence-time"], silenceThreshold: [2, "silence-threshold"], messages: [32], text: [32], chatState: [32], error: [32] }, [[0, "formSubmit", "submitHandler"]]]]], ["amplify-greetings", [[1, "amplify-greetings", { username: [1], logo: [16], handleAuthStateChange: [16] }]]], ["amplify-s3-album", [[1, "amplify-s3-album", { path: [1], contentType: [1, "content-type"], level: [1], track: [4], identityId: [1, "identity-id"], fileToKey: [16], filter: [16], sort: [16], picker: [4], handleOnLoad: [16], handleOnError: [16], pickerText: [1, "picker-text"], albumItems: [32] }]]], ["amplify-s3-text-picker", [[1, "amplify-s3-text-picker", { path: [1], contentType: [1, "content-type"], level: [1], track: [4], identityId: [1, "identity-id"], fileToKey: [16], fallbackText: [1, "fallback-text"], src: [32] }]]], ["amplify-tooltip", [[1, "amplify-tooltip", { text: [1], shouldAutoShow: [4, "should-auto-show"] }]]], ["amplify-icon-button", [[1, "amplify-icon-button", { name: [1], tooltip: [1], autoShowTooltip: [4, "auto-show-tooltip"] }]]], ["amplify-checkbox", [[1, "amplify-checkbox", { name: [1], value: [1], fieldId: [1, "field-id"], label: [1], checked: [4], disabled: [4] }]]], ["amplify-container", [[1, "amplify-container"]]], ["amplify-link", [[1, "amplify-link", { role: [1] }]]], ["amplify-photo-picker", [[1, "amplify-photo-picker", { headerTitle: [1, "header-title"], headerHint: [1, "header-hint"], placeholderHint: [1, "placeholder-hint"], buttonText: [1, "button-text"], previewSrc: [1, "preview-src"], handleClick: [16], previewState: [32], file: [32] }]]], ["amplify-s3-image", [[1, "amplify-s3-image", { imgKey: [1, "img-key"], path: [1], body: [16], contentType: [1, "content-type"], level: [1], track: [4], identityId: [1, "identity-id"], handleOnLoad: [16], handleOnError: [16], src: [32] }]]], ["amplify-s3-text", [[1, "amplify-s3-text", { textKey: [1, "text-key"], path: [1], body: [16], contentType: [1, "content-type"], level: [1], track: [4], identityId: [1, "identity-id"], fallbackText: [1, "fallback-text"], src: [32] }]]], ["amplify-button_3", [[1, "amplify-loading-spinner"], [1, "amplify-section", { role: [1] }], [1, "amplify-button", { type: [1], variant: [1], handleButtonClick: [16], disabled: [4], icon: [1] }]]], ["amplify-nav_2", [[1, "amplify-sign-out", { handleAuthStateChange: [16], buttonText: [1, "button-text"] }], [1, "amplify-nav"]]], ["amplify-toast", [[1, "amplify-toast", { handleClose: [16], message: [1] }]]], ["amplify-picker", [[1, "amplify-picker", { pickerText: [1, "picker-text"], acceptValue: [1, "accept-value"], inputHandler: [16] }]]], ["amplify-form-field_4", [[1, "amplify-form-field", { fieldId: [1, "field-id"], label: [1], description: [1], hint: [1], type: [1], required: [4], handleInputChange: [16], placeholder: [1], name: [1], value: [1], inputProps: [16], disabled: [4] }], [1, "amplify-hint"], [0, "amplify-input", { fieldId: [1, "field-id"], description: [1], type: [1], handleInputChange: [16], placeholder: [1], name: [1], value: [1], inputProps: [16], disabled: [4] }, [[0, "keydown", "handleKeyDown"]]], [1, "amplify-label", { htmlFor: [1, "html-for"] }]]], ["amplify-radio-button_2", [[1, "amplify-totp-setup", { user: [16], handleAuthStateChange: [16], headerText: [1, "header-text"], issuer: [1], code: [32], setupMessage: [32], qrCodeImageSource: [32], qrCodeInput: [32], loading: [32] }], [0, "amplify-radio-button", { handleInputChange: [16], name: [1], value: [1], placeholder: [1], fieldId: [1, "field-id"], label: [1], checked: [4], disabled: [4], inputProps: [16] }]]], ["amplify-sign-in-button", [[6, "amplify-sign-in-button", { provider: [1] }]]], ["amplify-amazon-button_5", [[1, "amplify-amazon-button", { clientId: [1, "client-id"], handleAuthStateChange: [16] }], [1, "amplify-auth0-button", { config: [16], handleAuthStateChange: [16] }], [1, "amplify-facebook-button", { appId: [1, "app-id"], handleAuthStateChange: [16] }], [1, "amplify-google-button", { handleAuthStateChange: [16], clientId: [1, "client-id"] }], [1, "amplify-oauth-button", { config: [16] }]]], ["amplify-federated-buttons_2", [[6, "amplify-strike"], [1, "amplify-federated-buttons", { authState: [1, "auth-state"], federated: [16], handleAuthStateChange: [16] }]]], ["amplify-auth-fields_9", [[1, "amplify-auth-fields", { formFields: [16] }], [1, "amplify-phone-field", { fieldId: [1, "field-id"], label: [1], placeholder: [1], hint: [1], required: [4], handleInputChange: [16], value: [1], inputProps: [16], disabled: [4], dialCode: [8, "dial-code"] }], [1, "amplify-code-field", { fieldId: [1, "field-id"], label: [1], placeholder: [1], hint: [1], required: [4], handleInputChange: [16], value: [1], inputProps: [16], disabled: [4] }], [1, "amplify-email-field", { fieldId: [1, "field-id"], label: [1], placeholder: [1], required: [4], handleInputChange: [16], value: [1], inputProps: [16], disabled: [4] }], [1, "amplify-password-field", { fieldId: [1, "field-id"], label: [1], placeholder: [1], hint: [1], required: [4], handleInputChange: [16], value: [1], inputProps: [16], disabled: [4] }], [1, "amplify-username-field", { fieldId: [1, "field-id"], label: [1], placeholder: [1], required: [4], handleInputChange: [16], value: [1], inputProps: [16], disabled: [4] }], [1, "amplify-country-dial-code", { fieldId: [1, "field-id"], options: [16], handleInputChange: [16], dialCode: [8, "dial-code"] }], [1, "amplify-select", { options: [16], fieldId: [1, "field-id"], handleInputChange: [16], selected: [8] }], [1, "amplify-form-section", { handleSubmit: [16], submitButtonText: [1, "submit-button-text"], headerText: [1, "header-text"], testDataPrefix: [1, "test-data-prefix"], loading: [4], secondaryFooterContent: [1, "secondary-footer-content"] }, [[0, "formSubmit", "handleFormSubmit"]]]]], ["amplify-confirm-sign-in_7", [[1, "amplify-sign-in", { handleSubmit: [16], headerText: [1, "header-text"], submitButtonText: [1, "submit-button-text"], federated: [16], handleAuthStateChange: [16], usernameAlias: [1, "username-alias"], formFields: [16], hideSignUp: [4, "hide-sign-up"], loading: [32], signInAttributes: [32] }], [1, "amplify-confirm-sign-in", { handleSubmit: [16], headerText: [1, "header-text"], submitButtonText: [1, "submit-button-text"], handleAuthStateChange: [16], formFields: [16], user: [16], mfaOption: [32], loading: [32], code: [32] }], [1, "amplify-confirm-sign-up", { handleSubmit: [16], headerText: [1, "header-text"], submitButtonText: [1, "submit-button-text"], formFields: [16], handleAuthStateChange: [16], user: [16], usernameAlias: [1, "username-alias"], code: [32], loading: [32], userInput: [32] }], [1, "amplify-forgot-password", { headerText: [1, "header-text"], sendButtonText: [1, "send-button-text"], submitButtonText: [1, "submit-button-text"], formFields: [16], handleSend: [16], handleSubmit: [16], handleAuthStateChange: [16], usernameAlias: [1, "username-alias"], delivery: [32], loading: [32], forgotPasswordAttrs: [32] }], [1, "amplify-require-new-password", { headerText: [1, "header-text"], submitButtonText: [1, "submit-button-text"], handleSubmit: [16], handleAuthStateChange: [16], user: [16], formFields: [16], currentUser: [32], password: [32], loading: [32] }], [1, "amplify-sign-up", { handleSubmit: [16], validationErrors: [1, "validation-errors"], headerText: [1, "header-text"], submitButtonText: [1, "submit-button-text"], haveAccountText: [1, "have-account-text"], signInText: [1, "sign-in-text"], formFields: [16], handleAuthStateChange: [16], usernameAlias: [1, "username-alias"], loading: [32], signUpAttributes: [32] }], [1, "amplify-verify-contact", { handleAuthStateChange: [16], user: [16], verifyAttr: [32], loading: [32], code: [32], contact: [32] }]]]], e); })); var e; }));
        var y = f("amplify-amazon-button"), m = f("amplify-auth-fields"), v = f("amplify-auth0-button"), w = f("amplify-authenticator"), b = f("amplify-button"), _ = f("amplify-chatbot"), S = f("amplify-checkbox"), A = f("amplify-code-field"), E = f("amplify-confirm-sign-in"), C = f("amplify-confirm-sign-up"), I = f("amplify-container"), T = f("amplify-country-dial-code"), P = f("amplify-email-field"), U = f("amplify-facebook-button"), O = f("amplify-federated-buttons"), R = f("amplify-federated-sign-in"), k = f("amplify-forgot-password"), x = f("amplify-form-field"), D = f("amplify-form-section"), L = f("amplify-google-button"), N = f("amplify-greetings"), $ = f("amplify-hint"), M = f("amplify-icon"), F = f("amplify-icon-button"), j = f("amplify-input"), B = f("amplify-label"), H = f("amplify-link"), q = f("amplify-loading-spinner"), K = f("amplify-nav"), V = f("amplify-oauth-button"), W = f("amplify-password-field"), z = f("amplify-phone-field"), G = f("amplify-photo-picker"), Y = f("amplify-picker"), J = f("amplify-radio-button"), Z = f("amplify-require-new-password"), X = f("amplify-s3-album"), Q = f("amplify-s3-image"), ee = f("amplify-s3-image-picker"), te = f("amplify-s3-text"), ne = f("amplify-s3-text-picker"), re = f("amplify-section"), ie = f("amplify-select"), oe = f("amplify-select-mfa-type"), se = f("amplify-sign-in"), ae = f("amplify-sign-in-button"), ue = f("amplify-sign-out"), ce = f("amplify-sign-up"), le = f("amplify-strike"), fe = f("amplify-toast"), he = f("amplify-tooltip"), de = f("amplify-totp-setup"), pe = f("amplify-username-field"), ge = f("amplify-verify-contact"), ye = n(2043), me = n(5914), ve = n(5573), we = (n(9277), n(5489), n(8396)), be = n(5069), _e = function () { return (_e = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); }, Se = new be.k("withAuthenticator");
        function Ae(e, t) { return function (n) { var r = function (e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }(i().useState(!1), 2), o = r[0], s = r[1]; return i().useEffect((function () { return (0, ye.Ib)("withAuthenticator"), function () { var e, t, n, r; e = this, t = void 0, r = function () { var e; return function (e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }(this, (function (t) { switch (t.label) {
            case 0: return t.trys.push([0, 2, , 3]), [4, me.g.currentAuthenticatedUser()];
            case 1: return t.sent() && s(!0), [3, 3];
            case 2: return e = t.sent(), Se.debug(e), [3, 3];
            case 3: return [2];
        } })); }, new ((n = void 0) || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); }(), (0, we.o)((function (e) { e === ve.A.SignedIn ? s(!0) : e === ve.A.SignedOut && s(!1); })); }), []), o ? i().createElement(e, null) : i().createElement(I, null, i().createElement(w, _e({}, t, n))); }; }
    }, 8260: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
    }, 6665: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
    }, 5470: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
    }, 969: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
    }, 5287: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.isMsWindow = void 0;
        var n = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
        t.isMsWindow = function (e) { if (function (e) { return "MSInputMethodContext" in e && "msCrypto" in e; }(e) && void 0 !== e.msCrypto.subtle) {
            var t = e.msCrypto, r = t.getRandomValues, i = t.subtle;
            return n.map((function (e) { return i[e]; })).concat(r).every((function (e) { return "function" == typeof e; }));
        } return !1; };
    }, 87: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(655);
        r.__exportStar(n(8260), t), r.__exportStar(n(6665), t), r.__exportStar(n(5470), t), r.__exportStar(n(969), t), r.__exportStar(n(5287), t);
    }, 7333: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.EMPTY_DATA_SHA_256 = t.SHA_256_HMAC_ALGO = t.SHA_256_HASH = void 0, t.SHA_256_HASH = { name: "SHA-256" }, t.SHA_256_HMAC_ALGO = { name: "HMAC", hash: t.SHA_256_HASH }, t.EMPTY_DATA_SHA_256 = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
    }, 2769: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Sha256 = void 0;
        var r = n(3479), i = n(8889), o = n(3137), s = n(21), a = n(87), u = n(1135), c = function () { function e(e) { s.supportsWebCrypto(u.locateWindow()) ? this.hash = new i.Sha256(e) : a.isMsWindow(u.locateWindow()) ? this.hash = new r.Sha256(e) : this.hash = new o.Sha256(e); } return e.prototype.update = function (e, t) { this.hash.update(e, t); }, e.prototype.digest = function () { return this.hash.digest(); }, e; }();
        t.Sha256 = c;
    }, 3479: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Sha256 = void 0;
        var r = n(8036), i = n(7333), o = n(8668), s = n(1135), a = function () { function e(e) { e ? (this.operation = function (e) { return new Promise((function (t, n) { var r = s.locateWindow().msCrypto.subtle.importKey("raw", u(e), i.SHA_256_HMAC_ALGO, !1, ["sign"]); r.oncomplete = function () { r.result && t(r.result), n("ImportKey completed without importing key."); }, r.onerror = function () { n("ImportKey failed to import key."); }; })); }(e).then((function (e) { return s.locateWindow().msCrypto.subtle.sign(i.SHA_256_HMAC_ALGO, e); })), this.operation.catch((function () { }))) : this.operation = Promise.resolve(s.locateWindow().msCrypto.subtle.digest("SHA-256")); } return e.prototype.update = function (e) { var t = this; r.isEmptyData(e) || (this.operation = this.operation.then((function (n) { return n.onerror = function () { t.operation = Promise.reject(new Error("Error encountered updating hash")); }, n.process(u(e)), n; })), this.operation.catch((function () { }))); }, e.prototype.digest = function () { return this.operation.then((function (e) { return new Promise((function (t, n) { e.onerror = function () { n("Error encountered finalizing hash"); }, e.oncomplete = function () { e.result && t(new Uint8Array(e.result)), n("Error encountered finalizing hash"); }, e.finish(); })); })); }, e; }();
        function u(e) { return "string" == typeof e ? o.fromUtf8(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e); }
        t.Sha256 = a;
    }, 7643: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), n(655).__exportStar(n(2769), t);
        var r = n(3479);
        Object.defineProperty(t, "Ie11Sha256", { enumerable: !0, get: function () { return r.Sha256; } });
        var i = n(8889);
        Object.defineProperty(t, "WebCryptoSha256", { enumerable: !0, get: function () { return i.Sha256; } });
    }, 8036: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.isEmptyData = void 0, t.isEmptyData = function (e) { return "string" == typeof e ? 0 === e.length : 0 === e.byteLength; };
    }, 8889: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Sha256 = void 0;
        var r = n(8668), i = n(8036), o = n(7333), s = n(1135), a = function () { function e(e) { this.toHash = new Uint8Array(0), void 0 !== e && (this.key = new Promise((function (t, n) { s.locateWindow().crypto.subtle.importKey("raw", u(e), o.SHA_256_HMAC_ALGO, !1, ["sign"]).then(t, n); })), this.key.catch((function () { }))); } return e.prototype.update = function (e) { if (!i.isEmptyData(e)) {
            var t = u(e), n = new Uint8Array(this.toHash.byteLength + t.byteLength);
            n.set(this.toHash, 0), n.set(t, this.toHash.byteLength), this.toHash = n;
        } }, e.prototype.digest = function () { var e = this; return this.key ? this.key.then((function (t) { return s.locateWindow().crypto.subtle.sign(o.SHA_256_HMAC_ALGO, t, e.toHash).then((function (e) { return new Uint8Array(e); })); })) : i.isEmptyData(this.toHash) ? Promise.resolve(o.EMPTY_DATA_SHA_256) : Promise.resolve().then((function () { return s.locateWindow().crypto.subtle.digest(o.SHA_256_HASH, e.toHash); })).then((function (e) { return Promise.resolve(new Uint8Array(e)); })); }, e; }();
        function u(e) { return "string" == typeof e ? r.fromUtf8(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e); }
        t.Sha256 = a;
    }, 9558: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RawSha256 = void 0;
        var r = n(4750), i = function () { function e() { this.state = Int32Array.from(r.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return e.prototype.update = function (e) { if (this.finished)
            throw new Error("Attempted to update an already finished hash."); var t = 0, n = e.byteLength; if (this.bytesHashed += n, 8 * this.bytesHashed > r.MAX_HASHABLE_LENGTH)
            throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; n > 0;)
            this.buffer[this.bufferLength++] = e[t++], n--, this.bufferLength === r.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0); }, e.prototype.digest = function () { if (!this.finished) {
            var e = 8 * this.bytesHashed, t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), n = this.bufferLength;
            if (t.setUint8(this.bufferLength++, 128), n % r.BLOCK_SIZE >= r.BLOCK_SIZE - 8) {
                for (var i = this.bufferLength; i < r.BLOCK_SIZE; i++)
                    t.setUint8(i, 0);
                this.hashBuffer(), this.bufferLength = 0;
            }
            for (i = this.bufferLength; i < r.BLOCK_SIZE - 8; i++)
                t.setUint8(i, 0);
            t.setUint32(r.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0), t.setUint32(r.BLOCK_SIZE - 4, e), this.hashBuffer(), this.finished = !0;
        } var o = new Uint8Array(r.DIGEST_LENGTH); for (i = 0; i < 8; i++)
            o[4 * i] = this.state[i] >>> 24 & 255, o[4 * i + 1] = this.state[i] >>> 16 & 255, o[4 * i + 2] = this.state[i] >>> 8 & 255, o[4 * i + 3] = this.state[i] >>> 0 & 255; return o; }, e.prototype.hashBuffer = function () { for (var e = this.buffer, t = this.state, n = t[0], i = t[1], o = t[2], s = t[3], a = t[4], u = t[5], c = t[6], l = t[7], f = 0; f < r.BLOCK_SIZE; f++) {
            if (f < 16)
                this.temp[f] = (255 & e[4 * f]) << 24 | (255 & e[4 * f + 1]) << 16 | (255 & e[4 * f + 2]) << 8 | 255 & e[4 * f + 3];
            else {
                var h = this.temp[f - 2], d = (h >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10, p = ((h = this.temp[f - 15]) >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3;
                this.temp[f] = (d + this.temp[f - 7] | 0) + (p + this.temp[f - 16] | 0);
            }
            var g = (((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & u ^ ~a & c) | 0) + (l + (r.KEY[f] + this.temp[f] | 0) | 0) | 0, y = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & i ^ n & o ^ i & o) | 0;
            l = c, c = u, u = a, a = s + g | 0, s = o, o = i, i = n, n = g + y | 0;
        } t[0] += n, t[1] += i, t[2] += o, t[3] += s, t[4] += a, t[5] += u, t[6] += c, t[7] += l; }, e; }();
        t.RawSha256 = i;
    }, 4750: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.MAX_HASHABLE_LENGTH = t.INIT = t.KEY = t.DIGEST_LENGTH = t.BLOCK_SIZE = void 0, t.BLOCK_SIZE = 64, t.DIGEST_LENGTH = 32, t.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), t.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], t.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
    }, 3137: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), n(655).__exportStar(n(3020), t);
    }, 3020: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Sha256 = void 0;
        var r = n(655), i = n(4750), o = n(9558), s = n(8668), a = function () { function e(e) { if (this.hash = new o.RawSha256, e) {
            this.outer = new o.RawSha256;
            var t = function (e) { var t = u(e); if (t.byteLength > i.BLOCK_SIZE) {
                var n = new o.RawSha256;
                n.update(t), t = n.digest();
            } var r = new Uint8Array(i.BLOCK_SIZE); return r.set(t), r; }(e), n = new Uint8Array(i.BLOCK_SIZE);
            n.set(t);
            for (var r = 0; r < i.BLOCK_SIZE; r++)
                t[r] ^= 54, n[r] ^= 92;
            for (this.hash.update(t), this.outer.update(n), r = 0; r < t.byteLength; r++)
                t[r] = 0;
        } } return e.prototype.update = function (e) { if (!(t = e, ("string" == typeof t ? 0 === t.length : 0 === t.byteLength) || this.error))
            try {
                this.hash.update(u(e));
            }
            catch (e) {
                this.error = e;
            } var t; }, e.prototype.digestSync = function () { if (this.error)
            throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, e.prototype.digest = function () { return r.__awaiter(this, void 0, void 0, (function () { return r.__generator(this, (function (e) { return [2, this.digestSync()]; })); })); }, e; }();
        function u(e) { return "string" == typeof e ? s.fromUtf8(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e); }
        t.Sha256 = a;
    }, 21: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), n(655).__exportStar(n(7787), t);
    }, 7787: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.supportsZeroByteGCM = t.supportsSubtleCrypto = t.supportsSecureRandom = t.supportsWebCrypto = void 0;
        var r = n(655), i = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
        function o(e) { return "object" == typeof e && "object" == typeof e.crypto && "function" == typeof e.crypto.getRandomValues; }
        function s(e) { return e && i.every((function (t) { return "function" == typeof e[t]; })); }
        t.supportsWebCrypto = function (e) { return !(!o(e) || "object" != typeof e.crypto.subtle) && s(e.crypto.subtle); }, t.supportsSecureRandom = o, t.supportsSubtleCrypto = s, t.supportsZeroByteGCM = function (e) { return r.__awaiter(this, void 0, void 0, (function () { var t; return r.__generator(this, (function (n) { switch (n.label) {
            case 0:
                if (!s(e))
                    return [2, !1];
                n.label = 1;
            case 1: return n.trys.push([1, 4, , 5]), [4, e.generateKey({ name: "AES-GCM", length: 128 }, !1, ["encrypt"])];
            case 2: return t = n.sent(), [4, e.encrypt({ name: "AES-GCM", iv: new Uint8Array(Array(12)), additionalData: new Uint8Array(Array(16)), tagLength: 128 }, t, new Uint8Array(0))];
            case 3: return [2, 16 === n.sent().byteLength];
            case 4: return n.sent(), [2, !1];
            case 5: return [2];
        } })); })); };
    }, 9162: function (e, t, n) {
        "use strict";
        n.d(t, { g4: function () { return i; }, Xb: function () { return a; } });
        var r = n(655), i = function (e) { var t; return (0, r.__assign)((0, r.__assign)({}, e), { tls: null === (t = e.tls) || void 0 === t || t, endpoint: e.endpoint ? o(e) : function () { return s(e); }, isCustomEndpoint: !!e.endpoint }); }, o = function (e) { var t = e.endpoint, n = e.urlParser; if ("string" == typeof t) {
            var r = Promise.resolve(n(t));
            return function () { return r; };
        } if ("object" == typeof t) {
            var i = Promise.resolve(t);
            return function () { return i; };
        } return t; }, s = function (e) { return (0, r.__awaiter)(void 0, void 0, void 0, (function () { var t, n, i, o, s; return (0, r.__generator)(this, (function (r) { switch (r.label) {
            case 0: return t = e.tls, n = void 0 === t || t, [4, e.region()];
            case 1:
                if (i = r.sent(), !new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(i))
                    throw new Error("Invalid region in client config");
                return [4, e.regionInfoProvider(i)];
            case 2:
                if (!(o = (null !== (s = r.sent()) && void 0 !== s ? s : {}).hostname))
                    throw new Error("Cannot resolve hostname from client config");
                return [2, e.urlParser((n ? "https:" : "http:") + "//" + o)];
        } })); })); }, a = function (e) { if (!e.region)
            throw new Error("Region is missing"); return (0, r.__assign)((0, r.__assign)({}, e), { region: u(e.region) }); }, u = function (e) { if ("string" == typeof e) {
            var t = Promise.resolve(e);
            return function () { return t; };
        } return e; };
    }, 4227: function (e, t, n) {
        "use strict";
        n.d(t, { B: function () { return s; }, C: function () { return u; } });
        var r = n(655), i = n(8467), o = n(9444), s = function () { function e(e) { void 0 === e && (e = {}), this.httpOptions = e; } return e.prototype.destroy = function () { }, e.prototype.handle = function (e, t) { var n = null == t ? void 0 : t.abortSignal, s = this.httpOptions.requestTimeout; if (null == n ? void 0 : n.aborted) {
            var a = new Error("Request aborted");
            return a.name = "AbortError", Promise.reject(a);
        } var u = e.path; if (e.query) {
            var c = (0, o.I)(e.query);
            c && (u += "?" + c);
        } var l = e.port, f = e.protocol + "//" + e.hostname + (l ? ":" + l : "") + u, h = { body: e.body, headers: new Headers(e.headers), method: e.method }; "undefined" != typeof AbortController && (h.signal = n); var d, p = new Request(f, h), g = [fetch(p).then((function (e) { var t, n, o = e.headers, s = {}; try {
                for (var a = (0, r.__values)(o.entries()), u = a.next(); !u.done; u = a.next()) {
                    var c = u.value;
                    s[c[0]] = c[1];
                }
            }
            catch (e) {
                t = { error: e };
            }
            finally {
                try {
                    u && !u.done && (n = a.return) && n.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } return void 0 !== e.body ? { response: new i.Zn({ headers: s, statusCode: e.status, body: e.body }) } : e.blob().then((function (t) { return { response: new i.Zn({ headers: s, statusCode: e.status, body: t }) }; })); })), (d = s, void 0 === d && (d = 0), new Promise((function (e, t) { d && setTimeout((function () { var e = new Error("Request did not complete within " + d + " ms"); e.name = "TimeoutError", t(e); }), d); })))]; return n && g.push(new Promise((function (e, t) { n.onabort = function () { var e = new Error("Request aborted"); e.name = "AbortError", t(e); }; }))), Promise.race(g); }, e; }(), a = n(7157), u = function (e) { return "function" == typeof Blob && e instanceof Blob ? function (e) { return (0, r.__awaiter)(this, void 0, void 0, (function () { var t, n; return (0, r.__generator)(this, (function (r) { switch (r.label) {
            case 0: return [4, c(e)];
            case 1: return t = r.sent(), n = (0, a.G)(t), [2, new Uint8Array(n)];
        } })); })); }(e) : function (e) { return (0, r.__awaiter)(this, void 0, void 0, (function () { var t, n, i, o, s, a, u; return (0, r.__generator)(this, (function (r) { switch (r.label) {
            case 0: t = new Uint8Array(0), n = e.getReader(), i = !1, r.label = 1;
            case 1: return i ? [3, 3] : [4, n.read()];
            case 2: return o = r.sent(), s = o.done, (a = o.value) && (u = t, (t = new Uint8Array(u.length + a.length)).set(u), t.set(a, u.length)), i = s, [3, 1];
            case 3: return [2, t];
        } })); })); }(e); };
        function c(e) { return new Promise((function (t, n) { var r = new FileReader; r.onloadend = function () { var e; if (2 !== r.readyState)
            return n(new Error("Reader aborted too early")); var i = null !== (e = r.result) && void 0 !== e ? e : "", o = i.indexOf(","), s = o > -1 ? o + 1 : i.length; t(i.substring(s)); }, r.onabort = function () { return n(new Error("Read aborted")); }, r.onerror = function () { return n(r.error); }, r.readAsDataURL(e); })); }
    }, 5582: function (e, t, n) {
        "use strict";
        n.d(t, { s: function () { return r; } });
        var r = function (e) { return function () { throw new Error(e); }; };
    }, 672: function (e, t, n) {
        "use strict";
        n.d(t, { VG: function () { return s; } });
        var r = n(655), i = n(8467), o = { step: "build", tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"], name: "contentLengthMiddleware" }, s = function (e) { return { applyToStack: function (t) { t.add(function (e) { var t = this; return function (n) { return function (o) { return (0, r.__awaiter)(t, void 0, void 0, (function () { var t, s, a, u, c; return (0, r.__generator)(this, (function (l) { return t = o.request, i.aW.isInstance(t) && (s = t.body, a = t.headers, s && -1 === Object.keys(a).map((function (e) { return e.toLowerCase(); })).indexOf("content-length") && void 0 !== (u = e(s)) && (t.headers = (0, r.__assign)((0, r.__assign)({}, t.headers), ((c = {})["content-length"] = String(u), c)))), [2, n((0, r.__assign)((0, r.__assign)({}, o), { request: t }))]; })); })); }; }; }(e.bodyLengthChecker), o); } }; };
    }, 3273: function (e, t, n) {
        "use strict";
        n.d(t, { S8: function () { return o; }, G2: function () { return a; } });
        var r = n(655), i = n(8467);
        function o(e) { return e; }
        var s = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"] }, a = function (e) { return { applyToStack: function (t) { t.add(function (e) { return function (t) { return function (n) { return (0, r.__awaiter)(void 0, void 0, void 0, (function () { var o, s; return (0, r.__generator)(this, (function (r) { return i.aW.isInstance(n.request) ? (o = n.request, (void 0 === (s = (e.requestHandler.metadata || {}).handlerProtocol) ? "" : s).indexOf("h2") >= 0 && !o.headers[":authority"] ? (delete o.headers.host, o.headers[":authority"] = "") : o.headers.host || (o.headers.host = o.hostname), [2, t(n)]) : [2, t(n)]; })); })); }; }; }(e), s); } }; };
    }, 7137: function (e, t, n) {
        "use strict";
        n.d(t, { cV: function () { return o; } });
        var r = n(655), i = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize" }, o = function (e) { return { applyToStack: function (e) { e.add((function (e, t) { return function (n) { return (0, r.__awaiter)(void 0, void 0, void 0, (function () { var i, o, s, a; return (0, r.__generator)(this, (function (r) { switch (r.label) {
                case 0: return i = t.logger, [4, e(n)];
                case 1: return o = r.sent(), i ? (s = o.response, "function" == typeof i.info && i.info({ metadata: { statusCode: s.statusCode, requestId: null !== (a = s.headers["x-amzn-requestid"]) && void 0 !== a ? a : s.headers["x-amzn-request-id"], extendedRequestId: s.headers["x-amz-id-2"], cfId: s.headers["x-amz-cf-id"] } }), [2, o]) : [2, o];
            } })); })); }; }), i); } }; };
    }, 5721: function (e, t, n) {
        "use strict";
        n.d(t, { J: function () { return g; }, NQ: function () { return o; }, BC: function () { return m; } });
        var r = n(655), i = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high" }, o = function (e) { return { applyToStack: function (t) { t.add(function (e) { return function (t) { return function (n) { return (0, r.__awaiter)(void 0, void 0, void 0, (function () { return (0, r.__generator)(this, (function (r) { return [2, e.retryStrategy.retry(t, n)]; })); })); }; }; }(e), i); } }; }, s = n(8467), a = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"], u = ["Throttling", "ThrottlingException", "ThrottledException", "RequestThrottledException", "TooManyRequestsException", "ProvisionedThroughputExceededException", "TransactionInProgressException", "RequestLimitExceeded", "BandwidthLimitExceeded", "LimitExceededException", "RequestThrottled", "SlowDown", "PriorRequestNotComplete", "EC2ThrottledException"], c = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"], l = [500, 502, 503, 504], f = function (e) { var t; return u.includes(e.name) || 1 == (null === (t = e.$retryable) || void 0 === t ? void 0 : t.throttling); }, h = n(4776), d = function (e, t) { return Math.floor(Math.min(2e4, Math.random() * Math.pow(2, t) * e)); }, p = function (e) { return !!e && (function (e) { return void 0 !== e.$retryable; }(e) || function (e) { return a.includes(e.name); }(e) || f(e) || function (e) { var t; return c.includes(e.name) || l.includes((null === (t = e.$metadata) || void 0 === t ? void 0 : t.httpStatusCode) || 0); }(e)); }, g = 3, y = function () { function e(e, t) { var n, r, i, o, s, a, u; this.maxAttemptsProvider = e, this.retryDecider = null !== (n = null == t ? void 0 : t.retryDecider) && void 0 !== n ? n : p, this.delayDecider = null !== (r = null == t ? void 0 : t.delayDecider) && void 0 !== r ? r : d, this.retryQuota = null !== (i = null == t ? void 0 : t.retryQuota) && void 0 !== i ? i : (o = 500, s = 500, a = function (e) { return "TimeoutError" === e.name ? 10 : 5; }, u = function (e) { return a(e) <= s; }, Object.freeze({ hasRetryTokens: u, retrieveRetryTokens: function (e) { if (!u(e))
                throw new Error("No retry token available"); var t = a(e); return s -= t, t; }, releaseRetryTokens: function (e) { s += null != e ? e : 1, s = Math.min(s, o); } })); } return e.prototype.shouldRetry = function (e, t, n) { return t < n && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e); }, e.prototype.getMaxAttempts = function () { return (0, r.__awaiter)(this, void 0, void 0, (function () { var e; return (0, r.__generator)(this, (function (t) { switch (t.label) {
            case 0: return t.trys.push([0, 2, , 3]), [4, this.maxAttemptsProvider()];
            case 1: return e = t.sent(), [3, 3];
            case 2: return t.sent(), e = g, [3, 3];
            case 3: return [2, e];
        } })); })); }, e.prototype.retry = function (e, t) { return (0, r.__awaiter)(this, void 0, void 0, (function () { var n, i, o, a, u, c, l, d; return (0, r.__generator)(this, (function (p) { switch (p.label) {
            case 0: return i = 0, o = 0, [4, this.getMaxAttempts()];
            case 1: a = p.sent(), u = t.request, s.aW.isInstance(u) && (u.headers["amz-sdk-invocation-id"] = (0, h.v4)()), c = function () { var c, h, d, p, g; return (0, r.__generator)(this, (function (r) { switch (r.label) {
                case 0: return r.trys.push([0, 2, , 5]), s.aW.isInstance(u) && (u.headers["amz-sdk-request"] = "attempt=" + (i + 1) + "; max=" + a), [4, e(t)];
                case 1: return c = r.sent(), h = c.response, d = c.output, l.retryQuota.releaseRetryTokens(n), d.$metadata.attempts = i + 1, d.$metadata.totalRetryDelay = o, [2, { value: { response: h, output: d } }];
                case 2: return p = r.sent(), i++, l.shouldRetry(p, i, a) ? (n = l.retryQuota.retrieveRetryTokens(p), g = l.delayDecider(f(p) ? 500 : 100, i), o += g, [4, new Promise((function (e) { return setTimeout(e, g); }))]) : [3, 4];
                case 3: return r.sent(), [2, "continue"];
                case 4: throw p.$metadata || (p.$metadata = {}), p.$metadata.attempts = i, p.$metadata.totalRetryDelay = o, p;
                case 5: return [2];
            } })); }, l = this, p.label = 2;
            case 2: return [5, c()];
            case 3: return "object" == typeof (d = p.sent()) ? [2, d.value] : [3, 2];
            case 4: return [2];
        } })); })); }, e; }(), m = function (e) { var t = v(e.maxAttempts); return (0, r.__assign)((0, r.__assign)({}, e), { maxAttempts: t, retryStrategy: e.retryStrategy || new y(t) }); }, v = function (e) { if (void 0 === e && (e = g), "number" == typeof e) {
            var t = Promise.resolve(e);
            return function () { return t; };
        } return e; };
    }, 4776: function (e, t, n) { var r = n(2694), i = n(9946), o = i; o.v1 = r, o.v4 = i, e.exports = o; }, 8724: function (e) { for (var t = [], n = 0; n < 256; ++n)
        t[n] = (n + 256).toString(16).substr(1); e.exports = function (e, n) { var r = n || 0, i = t; return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join(""); }; }, 4488: function (e) { var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto); if (t) {
        var n = new Uint8Array(16);
        e.exports = function () { return t(n), n; };
    }
    else {
        var r = new Array(16);
        e.exports = function () { for (var e, t = 0; t < 16; t++)
            0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255; return r; };
    } }, 2694: function (e, t, n) { var r, i, o = n(4488), s = n(8724), a = 0, u = 0; e.exports = function (e, t, n) { var c = t && n || 0, l = t || [], f = (e = e || {}).node || r, h = void 0 !== e.clockseq ? e.clockseq : i; if (null == f || null == h) {
        var d = o();
        null == f && (f = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == h && (h = i = 16383 & (d[6] << 8 | d[7]));
    } var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(), g = void 0 !== e.nsecs ? e.nsecs : u + 1, y = p - a + (g - u) / 1e4; if (y < 0 && void 0 === e.clockseq && (h = h + 1 & 16383), (y < 0 || p > a) && void 0 === e.nsecs && (g = 0), g >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec"); a = p, u = g, i = h; var m = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296; l[c++] = m >>> 24 & 255, l[c++] = m >>> 16 & 255, l[c++] = m >>> 8 & 255, l[c++] = 255 & m; var v = p / 4294967296 * 1e4 & 268435455; l[c++] = v >>> 8 & 255, l[c++] = 255 & v, l[c++] = v >>> 24 & 15 | 16, l[c++] = v >>> 16 & 255, l[c++] = h >>> 8 | 128, l[c++] = 255 & h; for (var w = 0; w < 6; ++w)
        l[c + w] = f[w]; return t || s(l); }; }, 9946: function (e, t, n) { var r = n(4488), i = n(8724); e.exports = function (e, t, n) { var o = t && n || 0; "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null); var s = (e = e || {}).random || (e.rng || r)(); if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
        for (var a = 0; a < 16; ++a)
            t[o + a] = s[a]; return t || i(s); }; }, 9718: function (e, t, n) {
        "use strict";
        n.d(t, { p2: function () { return s; } });
        var r = n(655), i = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"] }, o = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"] };
        function s(e, t, n) { return { applyToStack: function (s) { s.add(function (e, t) { return function (n, i) { return function (o) { return (0, r.__awaiter)(void 0, void 0, void 0, (function () { var s, a, u, c, l; return (0, r.__generator)(this, (function (f) { switch (f.label) {
                case 0: return s = i.logger, a = i.outputFilterSensitiveLog, [4, n(o)];
                case 1: return u = f.sent().response, "function" == typeof (null == s ? void 0 : s.debug) && s.debug({ httpResponse: u }), [4, t(u, e)];
                case 2: return (c = f.sent()).$metadata, l = (0, r.__rest)(c, ["$metadata"]), "function" == typeof (null == s ? void 0 : s.info) && s.info({ output: a(l) }), [2, { response: u, output: c }];
            } })); })); }; }; }(e, n), i), s.add(function (e, t) { return function (n, i) { return function (o) { return (0, r.__awaiter)(void 0, void 0, void 0, (function () { var s, a, u; return (0, r.__generator)(this, (function (c) { switch (c.label) {
                case 0: return s = i.logger, a = i.inputFilterSensitiveLog, "function" == typeof (null == s ? void 0 : s.info) && s.info({ input: a(o.input) }), [4, t(o.input, e)];
                case 1: return u = c.sent(), "function" == typeof (null == s ? void 0 : s.debug) && s.debug({ httpRequest: u }), [2, n((0, r.__assign)((0, r.__assign)({}, o), { request: u }))];
            } })); })); }; }; }(e, t), o); } }; }
    }, 7139: function (e, t, n) {
        "use strict";
        n.d(t, { yt: function () { return l; }, A$: function () { return o; } });
        var r = n(655), i = n(7856);
        function o(e) { var t, n = this, o = s(e.credentials || e.credentialDefaultProvider(e)), a = e.signingEscapePath, u = void 0 === a || a, c = e.systemClockOffset, l = void 0 === c ? e.systemClockOffset || 0 : c, f = e.sha256; return t = e.signer ? s(e.signer) : function () { return s(e.region)().then((function (t) { return (0, r.__awaiter)(n, void 0, void 0, (function () { return (0, r.__generator)(this, (function (n) { switch (n.label) {
            case 0: return [4, e.regionInfoProvider(t)];
            case 1: return [2, [n.sent() || {}, t]];
        } })); })); })).then((function (t) { var n = (0, r.__read)(t, 2), s = n[0], a = n[1], c = s.signingRegion, l = void 0 === c ? e.signingRegion : c, h = s.signingService, d = void 0 === h ? e.signingName : h; return e.signingRegion = e.signingRegion || l || a, e.signingName = e.signingName || d, new i.L1({ credentials: o, region: e.signingRegion, service: e.signingName, sha256: f, uriEscapePath: u }); })); }, (0, r.__assign)((0, r.__assign)({}, e), { systemClockOffset: l, signingEscapePath: u, credentials: o, signer: t }); }
        function s(e) { if ("object" == typeof e) {
            var t = Promise.resolve(e);
            return function () { return t; };
        } return e; }
        var a = n(8467);
        function u(e) { return function (t, n) { return function (i) { return (0, r.__awaiter)(this, void 0, void 0, (function () { var o, s, u, c, l, f, h, d, p; return (0, r.__generator)(this, (function (g) { switch (g.label) {
            case 0: return a.aW.isInstance(i.request) ? "function" != typeof e.signer ? [3, 2] : [4, e.signer()] : [2, t(i)];
            case 1: return s = g.sent(), [3, 3];
            case 2: s = e.signer, g.label = 3;
            case 3: return o = s, c = t, l = [(0, r.__assign)({}, i)], p = {}, [4, o.sign(i.request, { signingDate: new Date(Date.now() + e.systemClockOffset), signingRegion: n.signing_region, signingService: n.signing_service })];
            case 4: return [4, c.apply(void 0, [r.__assign.apply(void 0, l.concat([(p.request = g.sent(), p)]))])];
            case 5: return u = g.sent(), f = u.response.headers, (h = f && (f.date || f.Date)) && (y = d = Date.parse(h), m = e.systemClockOffset, Math.abs(function (e) { return new Date(Date.now() + e); }(m).getTime() - y) >= 3e5 && (e.systemClockOffset = d - Date.now())), [2, u];
        } var y, m; })); })); }; }; }
        var c = { name: "awsAuthMiddleware", tags: ["SIGNATURE", "AWSAUTH"], relation: "after", toMiddleware: "retryMiddleware" }, l = function (e) { return { applyToStack: function (t) { t.addRelativeTo(u(e), c); } }; };
    }, 6317: function (e, t, n) {
        "use strict";
        function r(e) { return e; }
        n.d(t, { XJ: function () { return a; }, er: function () { return r; } });
        var i = n(655), o = n(8467), s = { name: "getUserAgentMiddleware", step: "build", tags: ["SET_USER_AGENT", "USER_AGENT"] }, a = function (e) { return { applyToStack: function (t) { var n; t.add((n = e, function (e) { return function (t) { var r = t.request; if (!o.aW.isInstance(r))
                return e(t); var s = r.headers, a = "node" === n.runtime ? "user-agent" : "x-amz-user-agent"; return s[a] ? s[a] += " " + n.defaultUserAgent : s[a] = "" + n.defaultUserAgent, n.customUserAgent && (s[a] += " " + n.customUserAgent), e((0, i.__assign)((0, i.__assign)({}, t), { request: r })); }; }), s); } }; };
    }, 8467: function (e, t, n) {
        "use strict";
        n.d(t, { aW: function () { return o; }, Zn: function () { return r; } });
        var r = function () { function e(e) { this.statusCode = e.statusCode, this.headers = e.headers || {}, this.body = e.body; } return e.isInstance = function (e) { if (!e)
            return !1; var t = e; return "number" == typeof t.statusCode && "object" == typeof t.headers; }, e; }(), i = n(655), o = function () { function e(e) { this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.substr(-1) ? e.protocol + ":" : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? "/" + e.path : e.path : "/"; } return e.isInstance = function (e) { if (!e)
            return !1; var t = e; return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers; }, e.prototype.clone = function () { var t, n = new e((0, i.__assign)((0, i.__assign)({}, this), { headers: (0, i.__assign)({}, this.headers) })); return n.query && (n.query = (t = n.query, Object.keys(t).reduce((function (e, n) { var r, o = t[n]; return (0, i.__assign)((0, i.__assign)({}, e), ((r = {})[n] = Array.isArray(o) ? (0, i.__spread)(o) : o, r)); }), {}))), n; }, e; }();
    }, 9444: function (e, t, n) {
        "use strict";
        n.d(t, { I: function () { return o; } });
        var r = n(655), i = n(8143);
        function o(e) { var t, n, o = []; try {
            for (var s = (0, r.__values)(Object.keys(e).sort()), a = s.next(); !a.done; a = s.next()) {
                var u = a.value, c = e[u];
                if (u = (0, i.i)(u), Array.isArray(c))
                    for (var l = 0, f = c.length; l < f; l++)
                        o.push(u + "=" + (0, i.i)(c[l]));
                else {
                    var h = u;
                    (c || "string" == typeof c) && (h += "=" + (0, i.i)(c)), o.push(h);
                }
            }
        }
        catch (e) {
            t = { error: e };
        }
        finally {
            try {
                a && !a.done && (n = s.return) && n.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        } return o.join("&"); }
    }, 1085: function (e, t, n) {
        "use strict";
        n.d(t, { d: function () { return i; } });
        var r = n(655);
        function i(e) { var t, n, i = {}; if (e = e.replace(/^\?/, ""))
            try {
                for (var o = (0, r.__values)(e.split("&")), s = o.next(); !s.done; s = o.next()) {
                    var a = s.value, u = (0, r.__read)(a.split("="), 2), c = u[0], l = u[1], f = void 0 === l ? null : l;
                    c = decodeURIComponent(c), f && (f = decodeURIComponent(f)), c in i ? Array.isArray(i[c]) ? i[c].push(f) : i[c] = [i[c], f] : i[c] = f;
                }
            }
            catch (e) {
                t = { error: e };
            }
            finally {
                try {
                    s && !s.done && (n = o.return) && n.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } return i; }
    }, 7856: function (e, t, n) {
        "use strict";
        n.d(t, { L1: function () { return T; } });
        var r = n(655), i = "X-Amz-Signature", o = "X-Amz-Security-Token", s = "authorization", a = "X-Amz-Date".toLowerCase(), u = [s, a, "date"], c = i.toLowerCase(), l = "x-amz-content-sha256", f = o.toLowerCase(), h = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, d = /^proxy-/, p = /^sec-/, g = "AWS4-HMAC-SHA256-PAYLOAD", y = "aws4_request", m = {}, v = [];
        function w(e, t, n) { return e + "/" + t + "/" + n + "/" + y; }
        var b = n(5644);
        function _(e, t, n) { var i, o, s = e.headers, a = {}; try {
            for (var u = (0, r.__values)(Object.keys(s).sort()), c = u.next(); !c.done; c = u.next()) {
                var l = c.value, f = l.toLowerCase();
                (f in h || (null == t ? void 0 : t.has(f)) || d.test(f) || p.test(f)) && (!n || n && !n.has(f)) || (a[f] = s[l].trim().replace(/\s+/g, " "));
            }
        }
        catch (e) {
            i = { error: e };
        }
        finally {
            try {
                c && !c.done && (o = u.return) && o.call(u);
            }
            finally {
                if (i)
                    throw i.error;
            }
        } return a; }
        var S = n(8143);
        function A(e, t) { var n = e.headers, i = e.body; return (0, r.__awaiter)(this, void 0, void 0, (function () { var e, o, s, a, u, c, f; return (0, r.__generator)(this, (function (h) { switch (h.label) {
            case 0:
                try {
                    for (e = (0, r.__values)(Object.keys(n)), o = e.next(); !o.done; o = e.next())
                        if ((s = o.value).toLowerCase() === l)
                            return [2, n[s]];
                }
                catch (e) {
                    c = { error: e };
                }
                finally {
                    try {
                        o && !o.done && (f = e.return) && f.call(e);
                    }
                    finally {
                        if (c)
                            throw c.error;
                    }
                }
                return null != i ? [3, 1] : [2, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"];
            case 1: return "string" == typeof i || ArrayBuffer.isView(i) || (d = i, "function" == typeof ArrayBuffer && d instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(d)) ? ((a = new t).update(i), u = b.N, [4, a.digest()]) : [3, 3];
            case 2: return [2, u.apply(void 0, [h.sent()])];
            case 3: return [2, "UNSIGNED-PAYLOAD"];
        } var d; })); })); }
        function E(e) { var t = e.headers, n = e.query, i = (0, r.__rest)(e, ["headers", "query"]); return (0, r.__assign)((0, r.__assign)({}, i), { headers: (0, r.__assign)({}, t), query: n ? C(n) : void 0 }); }
        function C(e) { return Object.keys(e).reduce((function (t, n) { var i, o = e[n]; return (0, r.__assign)((0, r.__assign)({}, t), ((i = {})[n] = Array.isArray(o) ? (0, r.__spread)(o) : o, i)); }), {}); }
        function I(e) { var t, n; e = "function" == typeof e.clone ? e.clone() : E(e); try {
            for (var i = (0, r.__values)(Object.keys(e.headers)), o = i.next(); !o.done; o = i.next()) {
                var s = o.value;
                u.indexOf(s.toLowerCase()) > -1 && delete e.headers[s];
            }
        }
        catch (e) {
            t = { error: e };
        }
        finally {
            try {
                o && !o.done && (n = i.return) && n.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        } return e; }
        var T = function () { function e(e) { var t = e.applyChecksum, n = e.credentials, r = e.region, i = e.service, o = e.sha256, s = e.uriEscapePath, a = void 0 === s || s; this.service = i, this.sha256 = o, this.uriEscapePath = a, this.applyChecksum = "boolean" != typeof t || t, this.regionProvider = O(r), this.credentialProvider = R(n); } return e.prototype.presign = function (e, t) { return void 0 === t && (t = {}), (0, r.__awaiter)(this, void 0, void 0, (function () { var n, s, a, u, c, l, f, h, d, p, g, y, m, v, b, S, C, T, O, R, k, x, D; return (0, r.__generator)(this, (function (L) { switch (L.label) {
            case 0: return n = t.signingDate, s = void 0 === n ? new Date : n, a = t.expiresIn, u = void 0 === a ? 3600 : a, c = t.unsignableHeaders, l = t.signableHeaders, f = t.signingRegion, h = t.signingService, [4, this.credentialProvider()];
            case 1: return d = L.sent(), null == f ? [3, 2] : (g = f, [3, 4]);
            case 2: return [4, this.regionProvider()];
            case 3: g = L.sent(), L.label = 4;
            case 4: return p = g, y = P(s), m = y.longDate, v = y.shortDate, u > 604800 ? [2, Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future")] : (b = w(v, p, null != h ? h : this.service), S = function (e) { var t, n, i = "function" == typeof e.clone ? e.clone() : E(e), o = i.headers, s = i.query, a = void 0 === s ? {} : s; try {
                for (var u = (0, r.__values)(Object.keys(o)), c = u.next(); !c.done; c = u.next()) {
                    var l = c.value;
                    "x-amz-" === l.toLowerCase().substr(0, 6) && (a[l] = o[l], delete o[l]);
                }
            }
            catch (e) {
                t = { error: e };
            }
            finally {
                try {
                    c && !c.done && (n = u.return) && n.call(u);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            } return (0, r.__assign)((0, r.__assign)({}, e), { headers: o, query: a }); }(I(e)), d.sessionToken && (S.query[o] = d.sessionToken), S.query["X-Amz-Algorithm"] = "AWS4-HMAC-SHA256", S.query["X-Amz-Credential"] = d.accessKeyId + "/" + b, S.query["X-Amz-Date"] = m, S.query["X-Amz-Expires"] = u.toString(10), C = _(S, c, l), S.query["X-Amz-SignedHeaders"] = U(C), T = S.query, O = i, R = this.getSignature, k = [m, b, this.getSigningKey(d, p, v, h)], x = this.createCanonicalRequest, D = [S, C], [4, A(e, this.sha256)]);
            case 5: return [4, R.apply(this, k.concat([x.apply(this, D.concat([L.sent()]))]))];
            case 6: return T[O] = L.sent(), [2, S];
        } })); })); }, e.prototype.sign = function (e, t) { return (0, r.__awaiter)(this, void 0, void 0, (function () { return (0, r.__generator)(this, (function (n) { return "string" == typeof e ? [2, this.signString(e, t)] : e.headers && e.payload ? [2, this.signEvent(e, t)] : [2, this.signRequest(e, t)]; })); })); }, e.prototype.signEvent = function (e, t) { var n = e.headers, i = e.payload, o = t.signingDate, s = void 0 === o ? new Date : o, a = t.priorSignature, u = t.signingRegion, c = t.signingService; return (0, r.__awaiter)(this, void 0, void 0, (function () { var e, t, o, l, f, h, d, p, y, m, v; return (0, r.__generator)(this, (function (r) { switch (r.label) {
            case 0: return null == u ? [3, 1] : (t = u, [3, 3]);
            case 1: return [4, this.regionProvider()];
            case 2: t = r.sent(), r.label = 3;
            case 3: return e = t, o = P(s), l = o.shortDate, f = o.longDate, h = w(l, e, null != c ? c : this.service), [4, A({ headers: {}, body: i }, this.sha256)];
            case 4: return d = r.sent(), (p = new this.sha256).update(n), m = b.N, [4, p.digest()];
            case 5: return y = m.apply(void 0, [r.sent()]), v = [g, f, h, a, y, d].join("\n"), [2, this.signString(v, { signingDate: s, signingRegion: e, signingService: c })];
        } })); })); }, e.prototype.signString = function (e, t) { var n = void 0 === t ? {} : t, i = n.signingDate, o = void 0 === i ? new Date : i, s = n.signingRegion, a = n.signingService; return (0, r.__awaiter)(this, void 0, void 0, (function () { var t, n, i, u, c, l, f, h; return (0, r.__generator)(this, (function (r) { switch (r.label) {
            case 0: return [4, this.credentialProvider()];
            case 1: return t = r.sent(), null == s ? [3, 2] : (i = s, [3, 4]);
            case 2: return [4, this.regionProvider()];
            case 3: i = r.sent(), r.label = 4;
            case 4: return n = i, u = P(o).shortDate, f = (l = this.sha256).bind, [4, this.getSigningKey(t, n, u, a)];
            case 5: return (c = new (f.apply(l, [void 0, r.sent()]))).update(e), h = b.N, [4, c.digest()];
            case 6: return [2, h.apply(void 0, [r.sent()])];
        } })); })); }, e.prototype.signRequest = function (e, t) { var n = void 0 === t ? {} : t, i = n.signingDate, o = void 0 === i ? new Date : i, u = n.signableHeaders, c = n.unsignableHeaders, h = n.signingRegion, d = n.signingService; return (0, r.__awaiter)(this, void 0, void 0, (function () { var t, n, i, p, g, y, m, v, b, S, E; return (0, r.__generator)(this, (function (C) { switch (C.label) {
            case 0: return [4, this.credentialProvider()];
            case 1: return t = C.sent(), null == h ? [3, 2] : (i = h, [3, 4]);
            case 2: return [4, this.regionProvider()];
            case 3: i = C.sent(), C.label = 4;
            case 4: return n = i, p = I(e), g = P(o), y = g.longDate, m = g.shortDate, v = w(m, n, null != d ? d : this.service), p.headers[a] = y, t.sessionToken && (p.headers[f] = t.sessionToken), [4, A(p, this.sha256)];
            case 5: return b = C.sent(), !function (e, t) { var n, i; e = e.toLowerCase(); try {
                for (var o = (0, r.__values)(Object.keys(t)), s = o.next(); !s.done; s = o.next())
                    if (e === s.value.toLowerCase())
                        return !0;
            }
            catch (e) {
                n = { error: e };
            }
            finally {
                try {
                    s && !s.done && (i = o.return) && i.call(o);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            } return !1; }(l, p.headers) && this.applyChecksum && (p.headers[l] = b), S = _(p, c, u), [4, this.getSignature(y, v, this.getSigningKey(t, n, m, d), this.createCanonicalRequest(p, S, b))];
            case 6: return E = C.sent(), p.headers[s] = "AWS4-HMAC-SHA256 Credential=" + t.accessKeyId + "/" + v + ", SignedHeaders=" + U(S) + ", Signature=" + E, [2, p];
        } })); })); }, e.prototype.createCanonicalRequest = function (e, t, n) { var i = Object.keys(t).sort(); return e.method + "\n" + this.getCanonicalPath(e) + "\n" + function (e) { var t, n, i = e.query, o = void 0 === i ? {} : i, s = [], a = {}, u = function (e) { if (e.toLowerCase() === c)
            return "continue"; s.push(e); var t = o[e]; "string" == typeof t ? a[e] = (0, S.i)(e) + "=" + (0, S.i)(t) : Array.isArray(t) && (a[e] = t.slice(0).sort().reduce((function (t, n) { return t.concat([(0, S.i)(e) + "=" + (0, S.i)(n)]); }), []).join("&")); }; try {
            for (var l = (0, r.__values)(Object.keys(o).sort()), f = l.next(); !f.done; f = l.next())
                u(f.value);
        }
        catch (e) {
            t = { error: e };
        }
        finally {
            try {
                f && !f.done && (n = l.return) && n.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        } return s.map((function (e) { return a[e]; })).filter((function (e) { return e; })).join("&"); }(e) + "\n" + i.map((function (e) { return e + ":" + t[e]; })).join("\n") + "\n\n" + i.join(";") + "\n" + n; }, e.prototype.createStringToSign = function (e, t, n) { return (0, r.__awaiter)(this, void 0, void 0, (function () { var i, o; return (0, r.__generator)(this, (function (r) { switch (r.label) {
            case 0: return (i = new this.sha256).update(n), [4, i.digest()];
            case 1: return o = r.sent(), [2, "AWS4-HMAC-SHA256\n" + e + "\n" + t + "\n" + (0, b.N)(o)];
        } })); })); }, e.prototype.getCanonicalPath = function (e) { var t = e.path; return this.uriEscapePath ? "/" + encodeURIComponent(t.replace(/^\//, "")).replace(/%2F/g, "/") : t; }, e.prototype.getSignature = function (e, t, n, i) { return (0, r.__awaiter)(this, void 0, void 0, (function () { var o, s, a, u, c; return (0, r.__generator)(this, (function (r) { switch (r.label) {
            case 0: return [4, this.createStringToSign(e, t, i)];
            case 1: return o = r.sent(), u = (a = this.sha256).bind, [4, n];
            case 2: return (s = new (u.apply(a, [void 0, r.sent()]))).update(o), c = b.N, [4, s.digest()];
            case 3: return [2, c.apply(void 0, [r.sent()])];
        } })); })); }, e.prototype.getSigningKey = function (e, t, n, i) { return function (e, t, n, i, o) { var s = n + ":" + i + ":" + o + ":" + t.accessKeyId + ":" + t.sessionToken; if (s in m)
            return m[s]; for (v.push(s); v.length > 50;)
            delete m[v.shift()]; return m[s] = new Promise((function (a, u) { var c, l, f = Promise.resolve("AWS4" + t.secretAccessKey), h = function (t) { (f = f.then((function (n) { return r = t, (i = new e(n)).update(r), i.digest(); var r, i; }))).catch((function () { })); }; try {
            for (var d = (0, r.__values)([n, i, o, y]), p = d.next(); !p.done; p = d.next())
                h(p.value);
        }
        catch (e) {
            c = { error: e };
        }
        finally {
            try {
                p && !p.done && (l = d.return) && l.call(d);
            }
            finally {
                if (c)
                    throw c.error;
            }
        } f.then(a, (function (e) { delete m[s], u(e); })); })); }(this.sha256, e, n, t, i || this.service); }, e; }(), P = function (e) { var t, n = (t = e, function (e) { return "number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? Number(e) ? new Date(1e3 * Number(e)) : new Date(e) : e; }(t).toISOString().replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, ""); return { longDate: n, shortDate: n.substr(0, 8) }; }, U = function (e) { return Object.keys(e).sort().join(";"); }, O = function (e) { if ("string" == typeof e) {
            var t = Promise.resolve(e);
            return function () { return t; };
        } return e; }, R = function (e) { if ("object" == typeof e) {
            var t = Promise.resolve(e);
            return function () { return t; };
        } return e; };
    }, 3890: function (e, t, n) {
        "use strict";
        n.d(t, { KU: function () { return a; }, mY: function () { return u; }, QT: function () { return d; }, oc: function () { return m; }, _w: function () { return y; }, jc: function () { return c; }, L: function () { return l; }, sT: function () { return f; } });
        var r = n(655), i = function () { var e = [], t = [], n = new Set, a = function (n) { return e.forEach((function (e) { n.add(e.middleware, (0, r.__assign)({}, e)); })), t.forEach((function (e) { n.addRelativeTo(e.middleware, (0, r.__assign)({}, e)); })), n; }, u = function (e) { var t = []; return e.before.forEach((function (e) { 0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push.apply(t, (0, r.__spread)(u(e))); })), t.push(e), e.after.reverse().forEach((function (e) { 0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push.apply(t, (0, r.__spread)(u(e))); })), t; }, c = { add: function (t, i) { void 0 === i && (i = {}); var o = i.name, s = (0, r.__assign)({ step: "initialize", priority: "normal", middleware: t }, i); if (o) {
                if (n.has(o))
                    throw new Error("Duplicate middleware name '" + o + "'");
                n.add(o);
            } e.push(s); }, addRelativeTo: function (e, i) { var o = i.name, s = (0, r.__assign)({ middleware: e }, i); if (o) {
                if (n.has(o))
                    throw new Error("Duplicated middleware name '" + o + "'");
                n.add(o);
            } t.push(s); }, clone: function () { return a(i()); }, use: function (e) { e.applyToStack(c); }, remove: function (r) { return "string" == typeof r ? function (r) { var i = !1, o = function (e) { return !e.name || e.name !== r || (i = !0, n.delete(r), !1); }; return e = e.filter(o), t = t.filter(o), i; }(r) : function (r) { var i = !1, o = function (e) { return e.middleware !== r || (i = !0, e.name && n.delete(e.name), !1); }; return e = e.filter(o), t = t.filter(o), i; }(r); }, removeByTag: function (r) { var i = !1, o = function (e) { var t = e.tags, o = e.name; return !t || !t.includes(r) || (o && n.delete(o), i = !0, !1); }; return e = e.filter(o), t = t.filter(o), i; }, concat: function (e) { var t = a(i()); return t.use(e), t; }, applyToStack: a, resolve: function (n, i) { var a, c; try {
                for (var l = (0, r.__values)(function () { var n, i = [], a = [], c = {}; return e.forEach((function (e) { var t = (0, r.__assign)((0, r.__assign)({}, e), { before: [], after: [] }); t.name && (c[t.name] = t), i.push(t); })), t.forEach((function (e) { var t = (0, r.__assign)((0, r.__assign)({}, e), { before: [], after: [] }); t.name && (c[t.name] = t), a.push(t); })), a.forEach((function (e) { if (e.toMiddleware) {
                    var t = c[e.toMiddleware];
                    if (void 0 === t)
                        throw new Error(e.toMiddleware + " is not found when adding " + (e.name || "anonymous") + " middleware " + e.relation + " " + e.toMiddleware);
                    "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e);
                } })), (n = i, n.sort((function (e, t) { return o[t.step] - o[e.step] || s[t.priority || "normal"] - s[e.priority || "normal"]; }))).map(u).reduce((function (e, t) { return e.push.apply(e, (0, r.__spread)(t)), e; }), []).map((function (e) { return e.middleware; })); }().reverse()), f = l.next(); !f.done; f = l.next())
                    n = (0, f.value)(n, i);
            }
            catch (e) {
                a = { error: e };
            }
            finally {
                try {
                    f && !f.done && (c = l.return) && c.call(l);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            } return n; } }; return c; }, o = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 }, s = { high: 3, normal: 2, low: 1 }, a = function () { function e(e) { this.middlewareStack = i(), this.config = e; } return e.prototype.send = function (e, t, n) { var r = "function" != typeof t ? t : void 0, i = "function" == typeof t ? t : n, o = e.resolveMiddleware(this.middlewareStack, this.config, r); if (!i)
            return o(e).then((function (e) { return e.output; })); o(e).then((function (e) { return i(null, e.output); }), (function (e) { return i(e); })).catch((function () { })); }, e.prototype.destroy = function () { this.config.requestHandler.destroy && this.config.requestHandler.destroy(); }, e; }(), u = function () { this.middlewareStack = i(); };
        function c(e) { return encodeURIComponent(e).replace(/[!'()*]/g, (function (e) { return "%" + e.charCodeAt(0).toString(16); })); }
        var l = function (e) { return Array.isArray(e) ? e : [e]; }, f = function (e) { for (var t in e)
            e.hasOwnProperty(t) && void 0 !== e[t]["#text"] ? e[t] = e[t]["#text"] : "object" == typeof e[t] && null !== e[t] && (e[t] = f(e[t])); return e; }, h = function () { var e = Object.getPrototypeOf(this).constructor, t = Function.bind.apply(String, (0, r.__spread)([null], arguments)), n = new t; return Object.setPrototypeOf(n, e.prototype), n; };
        h.prototype = Object.create(String.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), Object.setPrototypeOf(h, String);
        var d = function (e) { function t() { return null !== e && e.apply(this, arguments) || this; } return (0, r.__extends)(t, e), t.prototype.deserializeJSON = function () { return JSON.parse(e.prototype.toString.call(this)); }, t.prototype.toJSON = function () { return e.prototype.toString.call(this); }, t.fromObject = function (e) { return e instanceof t ? e : new t(e instanceof String || "string" == typeof e ? e : JSON.stringify(e)); }, t; }(h), p = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function y(e) { var t = e.getUTCFullYear(), n = e.getUTCMonth(), r = e.getUTCDay(), i = e.getUTCDate(), o = e.getUTCHours(), s = e.getUTCMinutes(), a = e.getUTCSeconds(); return p[r] + ", " + (i < 10 ? "0" + i : "" + i) + " " + g[n] + " " + t + " " + (o < 10 ? "0" + o : "" + o) + ":" + (s < 10 ? "0" + s : "" + s) + ":" + (a < 10 ? "0" + a : "" + a) + " GMT"; }
        var m = "***SensitiveInformation***";
    }, 4104: function (e, t, n) {
        "use strict";
        n.d(t, { e: function () { return i; } });
        var r = n(1085), i = function (e) { var t, n = new URL(e), i = n.hostname, o = n.pathname, s = n.port, a = n.protocol, u = n.search; return u && (t = (0, r.d)(u)), { hostname: i, port: s ? parseInt(s) : void 0, protocol: a, path: o, query: t }; };
    }, 7157: function (e, t, n) {
        "use strict";
        n.d(t, { G: function () { return l; }, s: function () { return f; } });
        for (var r = {}, i = new Array(64), o = 0, s = "A".charCodeAt(0), a = "Z".charCodeAt(0); o + s <= a; o++) {
            var u = String.fromCharCode(o + s);
            r[u] = o, i[o] = u;
        }
        for (o = 0, s = "a".charCodeAt(0), a = "z".charCodeAt(0); o + s <= a; o++) {
            u = String.fromCharCode(o + s);
            var c = o + 26;
            r[u] = c, i[c] = u;
        }
        for (o = 0; o < 10; o++)
            r[o.toString(10)] = o + 52, u = o.toString(10), c = o + 52, r[u] = c, i[c] = u;
        function l(e) { var t = e.length / 4 * 3; "==" === e.substr(-2) ? t -= 2 : "=" === e.substr(-1) && t--; for (var n = new ArrayBuffer(t), i = new DataView(n), o = 0; o < e.length; o += 4) {
            for (var s = 0, a = 0, u = o, c = o + 3; u <= c; u++)
                "=" !== e[u] ? (s |= r[e[u]] << 6 * (c - u), a += 6) : s >>= 6;
            var l = o / 4 * 3;
            s >>= a % 8;
            for (var f = Math.floor(a / 8), h = 0; h < f; h++) {
                var d = 8 * (f - h - 1);
                i.setUint8(l + h, (s & 255 << d) >> d);
            }
        } return new Uint8Array(n); }
        function f(e) { for (var t = "", n = 0; n < e.length; n += 3) {
            for (var r = 0, o = 0, s = n, a = Math.min(n + 3, e.length); s < a; s++)
                r |= e[s] << 8 * (a - s - 1), o += 8;
            var u = Math.ceil(o / 6);
            r <<= 6 * u - o;
            for (var c = 1; c <= u; c++) {
                var l = 6 * (u - c);
                t += i[(r & 63 << l) >> l];
            }
            t += "==".slice(0, 4 - u);
        } return t; }
        r["+"] = 62, i[62] = "+", r["/"] = 63, i[63] = "/";
    }, 2795: function (e, t, n) {
        "use strict";
        function r(e) { if ("string" == typeof e) {
            for (var t = e.length, n = t - 1; n >= 0; n--) {
                var r = e.charCodeAt(n);
                r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2);
            }
            return t;
        } return "number" == typeof e.byteLength ? e.byteLength : "number" == typeof e.size ? e.size : void 0; }
        n.d(t, { W: function () { return r; } });
    }, 5644: function (e, t, n) {
        "use strict";
        n.d(t, { H: function () { return a; }, N: function () { return u; } });
        for (var r = {}, i = {}, o = 0; o < 256; o++) {
            var s = o.toString(16).toLowerCase();
            1 === s.length && (s = "0" + s), r[o] = s, i[s] = o;
        }
        function a(e) { if (e.length % 2 != 0)
            throw new Error("Hex encoded strings must have an even number length"); for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2) {
            var r = e.substr(n, 2).toLowerCase();
            if (!(r in i))
                throw new Error("Cannot decode unrecognized sequence " + r + " as hexadecimal");
            t[n / 2] = i[r];
        } return t; }
        function u(e) { for (var t = "", n = 0; n < e.byteLength; n++)
            t += r[e[n]]; return t; }
    }, 1135: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, { locateWindow: function () { return i; } });
        var r = {};
        function i() { return "undefined" != typeof window ? window : "undefined" != typeof self ? self : r; }
    }, 8143: function (e, t, n) {
        "use strict";
        n.d(t, { i: function () { return r; } });
        var r = function (e) { return encodeURIComponent(e).replace(/[!'()*]/g, i); }, i = function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase(); };
    }, 5731: function (e, t, n) {
        "use strict";
        function r(e, t) { return "aws-sdk-js-v3-" + e + "/" + t + " " + ("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""); }
        n.d(t, { f: function () { return r; } });
    }, 8668: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, { fromUtf8: function () { return r; }, toUtf8: function () { return i; } });
        var r = function (e) { return "function" == typeof TextEncoder ? function (e) { return (new TextEncoder).encode(e); }(e) : function (e) { for (var t = [], n = 0, r = e.length; n < r; n++) {
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
        } return Uint8Array.from(t); }(e); }, i = function (e) { return "function" == typeof TextDecoder ? function (e) { return new TextDecoder("utf-8").decode(e); }(e) : function (e) { for (var t = "", n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            if (i < 128)
                t += String.fromCharCode(i);
            else if (192 <= i && i < 224) {
                var o = e[++n];
                t += String.fromCharCode((31 & i) << 6 | 63 & o);
            }
            else if (240 <= i && i < 365) {
                var s = "%" + [i, e[++n], e[++n], e[++n]].map((function (e) { return e.toString(16); })).join("%");
                t += decodeURIComponent(s);
            }
            else
                t += String.fromCharCode((15 & i) << 12 | (63 & e[++n]) << 6 | 63 & e[++n]);
        } return t; }(e); };
    }, 2043: function (e, t, n) {
        "use strict";
        n.d(t, { sD: function () { return i; }, ZA: function () { return O; }, xk: function () { return R; }, bR: function () { return k; }, ws: function () { return K; }, KC: function () { return F; }, AM: function () { return te; }, MZ: function () { return L; }, eR: function () { return re; }, Ib: function () { return W; } });
        var r, i = function () { function e(e) { var t = e || {}, n = t.ValidationData, r = t.Username, i = t.Password, o = t.AuthParameters, s = t.ClientMetadata; this.validationData = n || {}, this.authParameters = o || {}, this.clientMetadata = s || {}, this.username = r, this.password = i; } var t = e.prototype; return t.getUsername = function () { return this.username; }, t.getPassword = function () { return this.password; }, t.getValidationData = function () { return this.validationData; }, t.getAuthParameters = function () { return this.authParameters; }, t.getClientMetadata = function () { return this.clientMetadata; }, e; }(), o = n(8764), s = n(8249), a = n.n(s), u = (n(4433), n(2153)), c = n.n(u), l = n(8010), f = n.n(l);
        if ("undefined" != typeof window && window.crypto && (r = window.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && void 0 !== n.g && n.g.crypto && (r = n.g.crypto), !r)
            try {
                r = n(Object(function () { var e = new Error("Cannot find module 'crypto'"); throw e.code = "MODULE_NOT_FOUND", e; }()));
            }
            catch (e) { }
        function h() { if (r) {
            if ("function" == typeof r.getRandomValues)
                try {
                    return r.getRandomValues(new Uint32Array(1))[0];
                }
                catch (e) { }
            if ("function" == typeof r.randomBytes)
                try {
                    return r.randomBytes(4).readInt32LE();
                }
                catch (e) { }
        } throw new Error("Native crypto module could not be used to get secure random number."); }
        var d = function () { function e(e, t) { e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length; } var t = e.prototype; return t.random = function (t) { for (var n = [], r = 0; r < t; r += 4)
            n.push(h()); return new e(n, t); }, t.toString = function () { return function (e) { for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
        } return r.join(""); }(this); }, e; }();
        var p = g;
        function g(e, t) { null != e && this.fromString(e, t); }
        function y() { return new g(null); }
        var m, v = "undefined" != typeof navigator;
        v && "Microsoft Internet Explorer" == navigator.appName ? (g.prototype.am = function (e, t, n, r, i, o) { for (var s = 32767 & t, a = t >> 15; --o >= 0;) {
            var u = 32767 & this[e], c = this[e++] >> 15, l = a * u + c * s;
            i = ((u = s * u + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>> 30) + (l >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & u;
        } return i; }, m = 30) : v && "Netscape" != navigator.appName ? (g.prototype.am = function (e, t, n, r, i, o) { for (; --o >= 0;) {
            var s = t * this[e++] + n[r] + i;
            i = Math.floor(s / 67108864), n[r++] = 67108863 & s;
        } return i; }, m = 26) : (g.prototype.am = function (e, t, n, r, i, o) { for (var s = 16383 & t, a = t >> 14; --o >= 0;) {
            var u = 16383 & this[e], c = this[e++] >> 14, l = a * u + c * s;
            i = ((u = s * u + ((16383 & l) << 14) + n[r] + i) >> 28) + (l >> 14) + a * c, n[r++] = 268435455 & u;
        } return i; }, m = 28), g.prototype.DB = m, g.prototype.DM = (1 << m) - 1, g.prototype.DV = 1 << m, g.prototype.FV = Math.pow(2, 52), g.prototype.F1 = 52 - m, g.prototype.F2 = 2 * m - 52;
        var w, b, _ = new Array;
        for (w = "0".charCodeAt(0), b = 0; b <= 9; ++b)
            _[w++] = b;
        for (w = "a".charCodeAt(0), b = 10; b < 36; ++b)
            _[w++] = b;
        for (w = "A".charCodeAt(0), b = 10; b < 36; ++b)
            _[w++] = b;
        function S(e) { return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e); }
        function A(e, t) { var n = _[e.charCodeAt(t)]; return null == n ? -1 : n; }
        function E(e) { var t = y(); return t.fromInt(e), t; }
        function C(e) { var t, n = 1; return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n; }
        function I(e) { this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t; }
        I.prototype.convert = function (e) { var t = y(); return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(g.ZERO) > 0 && this.m.subTo(t, t), t; }, I.prototype.revert = function (e) { var t = y(); return e.copyTo(t), this.reduce(t), t; }, I.prototype.reduce = function (e) { for (; e.t <= this.mt2;)
            e[e.t++] = 0; for (var t = 0; t < this.m.t; ++t) {
            var n = 32767 & e[t], r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
            for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV;)
                e[n] -= e.DV, e[++n]++;
        } e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e); }, I.prototype.mulTo = function (e, t, n) { e.multiplyTo(t, n), this.reduce(n); }, I.prototype.sqrTo = function (e, t) { e.squareTo(t), this.reduce(t); }, g.prototype.copyTo = function (e) { for (var t = this.t - 1; t >= 0; --t)
            e[t] = this[t]; e.t = this.t, e.s = this.s; }, g.prototype.fromInt = function (e) { this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0; }, g.prototype.fromString = function (e, t) { var n; if (16 == t)
            n = 4;
        else if (8 == t)
            n = 3;
        else if (2 == t)
            n = 1;
        else if (32 == t)
            n = 5;
        else {
            if (4 != t)
                throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
            n = 2;
        } this.t = 0, this.s = 0; for (var r = e.length, i = !1, o = 0; --r >= 0;) {
            var s = A(e, r);
            s < 0 ? "-" == e.charAt(r) && (i = !0) : (i = !1, 0 == o ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, (o += n) >= this.DB && (o -= this.DB));
        } this.clamp(), i && g.ZERO.subTo(this, this); }, g.prototype.clamp = function () { for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;)
            --this.t; }, g.prototype.dlShiftTo = function (e, t) { var n; for (n = this.t - 1; n >= 0; --n)
            t[n + e] = this[n]; for (n = e - 1; n >= 0; --n)
            t[n] = 0; t.t = this.t + e, t.s = this.s; }, g.prototype.drShiftTo = function (e, t) { for (var n = e; n < this.t; ++n)
            t[n - e] = this[n]; t.t = Math.max(this.t - e, 0), t.s = this.s; }, g.prototype.lShiftTo = function (e, t) { var n, r = e % this.DB, i = this.DB - r, o = (1 << i) - 1, s = Math.floor(e / this.DB), a = this.s << r & this.DM; for (n = this.t - 1; n >= 0; --n)
            t[n + s + 1] = this[n] >> i | a, a = (this[n] & o) << r; for (n = s - 1; n >= 0; --n)
            t[n] = 0; t[s] = a, t.t = this.t + s + 1, t.s = this.s, t.clamp(); }, g.prototype.rShiftTo = function (e, t) { t.s = this.s; var n = Math.floor(e / this.DB); if (n >= this.t)
            t.t = 0;
        else {
            var r = e % this.DB, i = this.DB - r, o = (1 << r) - 1;
            t[0] = this[n] >> r;
            for (var s = n + 1; s < this.t; ++s)
                t[s - n - 1] |= (this[s] & o) << i, t[s - n] = this[s] >> r;
            r > 0 && (t[this.t - n - 1] |= (this.s & o) << i), t.t = this.t - n, t.clamp();
        } }, g.prototype.subTo = function (e, t) { for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
            r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB; if (e.t < this.t) {
            for (r -= e.s; n < this.t;)
                r += this[n], t[n++] = r & this.DM, r >>= this.DB;
            r += this.s;
        }
        else {
            for (r += this.s; n < e.t;)
                r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
            r -= e.s;
        } t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r), t.t = n, t.clamp(); }, g.prototype.multiplyTo = function (e, t) { var n = this.abs(), r = e.abs(), i = n.t; for (t.t = i + r.t; --i >= 0;)
            t[i] = 0; for (i = 0; i < r.t; ++i)
            t[i + n.t] = n.am(0, r[i], t, i, 0, n.t); t.s = 0, t.clamp(), this.s != e.s && g.ZERO.subTo(t, t); }, g.prototype.squareTo = function (e) { for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;)
            e[n] = 0; for (n = 0; n < t.t - 1; ++n) {
            var r = t.am(n, t[n], e, 2 * n, 0, 1);
            (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1);
        } e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp(); }, g.prototype.divRemTo = function (e, t, n) { var r = e.abs(); if (!(r.t <= 0)) {
            var i = this.abs();
            if (i.t < r.t)
                return null != t && t.fromInt(0), void (null != n && this.copyTo(n));
            null == n && (n = y());
            var o = y(), s = this.s, a = e.s, u = this.DB - C(r[r.t - 1]);
            u > 0 ? (r.lShiftTo(u, o), i.lShiftTo(u, n)) : (r.copyTo(o), i.copyTo(n));
            var c = o.t, l = o[c - 1];
            if (0 != l) {
                var f = l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0), h = this.FV / f, d = (1 << this.F1) / f, p = 1 << this.F2, m = n.t, v = m - c, w = null == t ? y() : t;
                for (o.dlShiftTo(v, w), n.compareTo(w) >= 0 && (n[n.t++] = 1, n.subTo(w, n)), g.ONE.dlShiftTo(c, w), w.subTo(o, o); o.t < c;)
                    o[o.t++] = 0;
                for (; --v >= 0;) {
                    var b = n[--m] == l ? this.DM : Math.floor(n[m] * h + (n[m - 1] + p) * d);
                    if ((n[m] += o.am(0, b, n, v, 0, c)) < b)
                        for (o.dlShiftTo(v, w), n.subTo(w, n); n[m] < --b;)
                            n.subTo(w, n);
                }
                null != t && (n.drShiftTo(c, t), s != a && g.ZERO.subTo(t, t)), n.t = c, n.clamp(), u > 0 && n.rShiftTo(u, n), s < 0 && g.ZERO.subTo(n, n);
            }
        } }, g.prototype.invDigit = function () { if (this.t < 1)
            return 0; var e = this[0]; if (0 == (1 & e))
            return 0; var t = 3 & e; return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t; }, g.prototype.addTo = function (e, t) { for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
            r += this[n] + e[n], t[n++] = r & this.DM, r >>= this.DB; if (e.t < this.t) {
            for (r += e.s; n < this.t;)
                r += this[n], t[n++] = r & this.DM, r >>= this.DB;
            r += this.s;
        }
        else {
            for (r += this.s; n < e.t;)
                r += e[n], t[n++] = r & this.DM, r >>= this.DB;
            r += e.s;
        } t.s = r < 0 ? -1 : 0, r > 0 ? t[n++] = r : r < -1 && (t[n++] = this.DV + r), t.t = n, t.clamp(); }, g.prototype.toString = function (e) { if (this.s < 0)
            return "-" + this.negate().toString(e); var t; if (16 == e)
            t = 4;
        else if (8 == e)
            t = 3;
        else if (2 == e)
            t = 1;
        else if (32 == e)
            t = 5;
        else {
            if (4 != e)
                throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
            t = 2;
        } var n, r = (1 << t) - 1, i = !1, o = "", s = this.t, a = this.DB - s * this.DB % t; if (s-- > 0)
            for (a < this.DB && (n = this[s] >> a) > 0 && (i = !0, o = S(n)); s >= 0;)
                a < t ? (n = (this[s] & (1 << a) - 1) << t - a, n |= this[--s] >> (a += this.DB - t)) : (n = this[s] >> (a -= t) & r, a <= 0 && (a += this.DB, --s)), n > 0 && (i = !0), i && (o += S(n)); return i ? o : "0"; }, g.prototype.negate = function () { var e = y(); return g.ZERO.subTo(this, e), e; }, g.prototype.abs = function () { return this.s < 0 ? this.negate() : this; }, g.prototype.compareTo = function (e) { var t = this.s - e.s; if (0 != t)
            return t; var n = this.t; if (0 != (t = n - e.t))
            return this.s < 0 ? -t : t; for (; --n >= 0;)
            if (0 != (t = this[n] - e[n]))
                return t; return 0; }, g.prototype.bitLength = function () { return this.t <= 0 ? 0 : this.DB * (this.t - 1) + C(this[this.t - 1] ^ this.s & this.DM); }, g.prototype.mod = function (e) { var t = y(); return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(g.ZERO) > 0 && e.subTo(t, t), t; }, g.prototype.equals = function (e) { return 0 == this.compareTo(e); }, g.prototype.add = function (e) { var t = y(); return this.addTo(e, t), t; }, g.prototype.subtract = function (e) { var t = y(); return this.subTo(e, t), t; }, g.prototype.multiply = function (e) { var t = y(); return this.multiplyTo(e, t), t; }, g.prototype.divide = function (e) { var t = y(); return this.divRemTo(e, t, null), t; }, g.prototype.modPow = function (e, t, n) { var r, i = e.bitLength(), o = E(1), s = new I(t); if (i <= 0)
            return o; r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6; var a = new Array, u = 3, c = r - 1, l = (1 << r) - 1; if (a[1] = s.convert(this), r > 1) {
            var f = y();
            for (s.sqrTo(a[1], f); u <= l;)
                a[u] = y(), s.mulTo(f, a[u - 2], a[u]), u += 2;
        } var h, d, p = e.t - 1, g = !0, m = y(); for (i = C(e[p]) - 1; p >= 0;) {
            for (i >= c ? h = e[p] >> i - c & l : (h = (e[p] & (1 << i + 1) - 1) << c - i, p > 0 && (h |= e[p - 1] >> this.DB + i - c)), u = r; 0 == (1 & h);)
                h >>= 1, --u;
            if ((i -= u) < 0 && (i += this.DB, --p), g)
                a[h].copyTo(o), g = !1;
            else {
                for (; u > 1;)
                    s.sqrTo(o, m), s.sqrTo(m, o), u -= 2;
                u > 0 ? s.sqrTo(o, m) : (d = o, o = m, m = d), s.mulTo(m, a[h], o);
            }
            for (; p >= 0 && 0 == (e[p] & 1 << i);)
                s.sqrTo(o, m), d = o, o = m, m = d, --i < 0 && (i = this.DB - 1, --p);
        } var v = s.revert(o); return n(null, v), v; }, g.ZERO = E(0), g.ONE = E(1);
        var T = function (e) { return o.lW.from((new d).random(e).toString(), "hex"); }, P = function () { function e(e) { this.N = new p("FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF", 16), this.g = new p("2", 16), this.k = new p(this.hexHash("00" + this.N.toString(16) + "0" + this.g.toString(16)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue((function () { })), this.infoBits = o.lW.from("Caldera Derived Key", "utf8"), this.poolName = e; } var t = e.prototype; return t.getSmallAValue = function () { return this.smallAValue; }, t.getLargeAValue = function (e) { var t = this; this.largeAValue ? e(null, this.largeAValue) : this.calculateA(this.smallAValue, (function (n, r) { n && e(n, null), t.largeAValue = r, e(null, t.largeAValue); })); }, t.generateRandomSmallA = function () { var e = T(128).toString("hex"); return new p(e, 16).mod(this.N); }, t.generateRandomString = function () { return T(40).toString("base64"); }, t.getRandomPassword = function () { return this.randomPassword; }, t.getSaltDevices = function () { return this.SaltToHashDevices; }, t.getVerifierDevices = function () { return this.verifierDevices; }, t.generateHashDevice = function (e, t, n) { var r = this; this.randomPassword = this.generateRandomString(); var i = "" + e + t + ":" + this.randomPassword, o = this.hash(i), s = T(16).toString("hex"); this.SaltToHashDevices = this.padHex(new p(s, 16)), this.g.modPow(new p(this.hexHash(this.SaltToHashDevices + o), 16), this.N, (function (e, t) { e && n(e, null), r.verifierDevices = r.padHex(t), n(null, null); })); }, t.calculateA = function (e, t) { var n = this; this.g.modPow(e, this.N, (function (e, r) { e && t(e, null), r.mod(n.N).equals(p.ZERO) && t(new Error("Illegal paramater. A mod N cannot be 0."), null), t(null, r); })); }, t.calculateU = function (e, t) { return this.UHexHash = this.hexHash(this.padHex(e) + this.padHex(t)), new p(this.UHexHash, 16); }, t.hash = function (e) { var t = e instanceof o.lW ? a().lib.WordArray.create(e) : e, n = c()(t).toString(); return new Array(64 - n.length).join("0") + n; }, t.hexHash = function (e) { return this.hash(o.lW.from(e, "hex")); }, t.computehkdf = function (e, t) { var n = a().lib.WordArray.create(o.lW.concat([this.infoBits, o.lW.from(String.fromCharCode(1), "utf8")])), r = e instanceof o.lW ? a().lib.WordArray.create(e) : e, i = t instanceof o.lW ? a().lib.WordArray.create(t) : t, s = f()(r, i), u = f()(n, s); return o.lW.from(u.toString(), "hex").slice(0, 16); }, t.getPasswordAuthenticationKey = function (e, t, n, r, i) { var s = this; if (n.mod(this.N).equals(p.ZERO))
            throw new Error("B cannot be zero."); if (this.UValue = this.calculateU(this.largeAValue, n), this.UValue.equals(p.ZERO))
            throw new Error("U cannot be zero."); var a = "" + this.poolName + e + ":" + t, u = this.hash(a), c = new p(this.hexHash(this.padHex(r) + u), 16); this.calculateS(c, n, (function (e, t) { e && i(e, null); var n = s.computehkdf(o.lW.from(s.padHex(t), "hex"), o.lW.from(s.padHex(s.UValue.toString(16)), "hex")); i(null, n); })); }, t.calculateS = function (e, t, n) { var r = this; this.g.modPow(e, this.N, (function (i, o) { i && n(i, null), t.subtract(r.k.multiply(o)).modPow(r.smallAValue.add(r.UValue.multiply(e)), r.N, (function (e, t) { e && n(e, null), n(null, t.mod(r.N)); })); })); }, t.getNewPasswordRequiredChallengeUserAttributePrefix = function () { return "userAttributes."; }, t.padHex = function (e) { var t = e.toString(16); return t.length % 2 == 1 ? t = "0" + t : -1 !== "89ABCDEFabcdef".indexOf(t[0]) && (t = "00" + t), t; }, e; }(), U = function () { function e(e) { this.jwtToken = e || "", this.payload = this.decodePayload(); } var t = e.prototype; return t.getJwtToken = function () { return this.jwtToken; }, t.getExpiration = function () { return this.payload.exp; }, t.getIssuedAt = function () { return this.payload.iat; }, t.decodePayload = function () { var e = this.jwtToken.split(".")[1]; try {
            return JSON.parse(o.lW.from(e, "base64").toString("utf8"));
        }
        catch (e) {
            return {};
        } }, e; }(), O = function (e) { var t, n; function r(t) { var n = (void 0 === t ? {} : t).AccessToken; return e.call(this, n || "") || this; } return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r; }(U), R = function (e) { var t, n; function r(t) { var n = (void 0 === t ? {} : t).IdToken; return e.call(this, n || "") || this; } return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r; }(U), k = function () { function e(e) { var t = (void 0 === e ? {} : e).RefreshToken; this.token = t || ""; } return e.prototype.getToken = function () { return this.token; }, e; }(), x = n(8269), D = n.n(x), L = function () { function e(e) { var t = void 0 === e ? {} : e, n = t.IdToken, r = t.RefreshToken, i = t.AccessToken, o = t.ClockDrift; if (null == i || null == n)
            throw new Error("Id token and Access Token must be present."); this.idToken = n, this.refreshToken = r, this.accessToken = i, this.clockDrift = void 0 === o ? this.calculateClockDrift() : o; } var t = e.prototype; return t.getIdToken = function () { return this.idToken; }, t.getRefreshToken = function () { return this.refreshToken; }, t.getAccessToken = function () { return this.accessToken; }, t.getClockDrift = function () { return this.clockDrift; }, t.calculateClockDrift = function () { return Math.floor(new Date / 1e3) - Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt()); }, t.isValid = function () { var e = Math.floor(new Date / 1e3) - this.clockDrift; return e < this.accessToken.getExpiration() && e < this.idToken.getExpiration(); }, e; }(), N = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], $ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], M = function () { function e() { } return e.prototype.getNowString = function () { var e = new Date, t = $[e.getUTCDay()], n = N[e.getUTCMonth()], r = e.getUTCDate(), i = e.getUTCHours(); i < 10 && (i = "0" + i); var o = e.getUTCMinutes(); o < 10 && (o = "0" + o); var s = e.getUTCSeconds(); return s < 10 && (s = "0" + s), t + " " + n + " " + r + " " + i + ":" + o + ":" + s + " UTC " + e.getUTCFullYear(); }, e; }(), F = function () { function e(e) { var t = void 0 === e ? {} : e, n = t.Name, r = t.Value; this.Name = n || "", this.Value = r || ""; } var t = e.prototype; return t.getValue = function () { return this.Value; }, t.setValue = function (e) { return this.Value = e, this; }, t.getName = function () { return this.Name; }, t.setName = function (e) { return this.Name = e, this; }, t.toString = function () { return JSON.stringify(this); }, t.toJSON = function () { return { Name: this.Name, Value: this.Value }; }, e; }(), j = {}, B = function () { function e() { } return e.setItem = function (e, t) { return j[e] = t, j[e]; }, e.getItem = function (e) { return Object.prototype.hasOwnProperty.call(j, e) ? j[e] : void 0; }, e.removeItem = function (e) { return delete j[e]; }, e.clear = function () { return j = {}; }, e; }(), H = function () { function e() { try {
            this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls");
        }
        catch (e) {
            this.storageWindow = B;
        } } return e.prototype.getStorage = function () { return this.storageWindow; }, e; }(), q = "undefined" != typeof navigator ? navigator.userAgent : "nodejs", K = function () { function e(e) { if (null == e || null == e.Username || null == e.Pool)
            throw new Error("Username and Pool information are required."); this.username = e.Username || "", this.pool = e.Pool, this.Session = null, this.client = e.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = e.Storage || (new H).getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData"; } var t = e.prototype; return t.setSignInUserSession = function (e) { this.clearCachedUserData(), this.signInUserSession = e, this.cacheTokens(); }, t.getSignInUserSession = function () { return this.signInUserSession; }, t.getUsername = function () { return this.username; }, t.getAuthenticationFlowType = function () { return this.authenticationFlowType; }, t.setAuthenticationFlowType = function (e) { this.authenticationFlowType = e; }, t.initiateAuth = function (e, t) { var n = this, r = e.getAuthParameters(); r.USERNAME = this.username; var i = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(), o = { AuthFlow: "CUSTOM_AUTH", ClientId: this.pool.getClientId(), AuthParameters: r, ClientMetadata: i }; this.getUserContextData() && (o.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", o, (function (e, r) { if (e)
            return t.onFailure(e); var i = r.ChallengeName, o = r.ChallengeParameters; return "CUSTOM_CHALLENGE" === i ? (n.Session = r.Session, t.customChallenge(o)) : (n.signInUserSession = n.getCognitoUserSession(r.AuthenticationResult), n.cacheTokens(), t.onSuccess(n.signInUserSession)); })); }, t.authenticateUser = function (e, t) { return "USER_PASSWORD_AUTH" === this.authenticationFlowType ? this.authenticateUserPlainUsernamePassword(e, t) : "USER_SRP_AUTH" === this.authenticationFlowType || "CUSTOM_AUTH" === this.authenticationFlowType ? this.authenticateUserDefaultAuth(e, t) : t.onFailure(new Error("Authentication flow type is invalid.")); }, t.authenticateUserDefaultAuth = function (e, t) { var n, r, i = this, s = new P(this.pool.getUserPoolId().split("_")[1]), u = new M, c = {}; null != this.deviceKey && (c.DEVICE_KEY = this.deviceKey), c.USERNAME = this.username, s.getLargeAValue((function (l, h) { l && t.onFailure(l), c.SRP_A = h.toString(16), "CUSTOM_AUTH" === i.authenticationFlowType && (c.CHALLENGE_NAME = "SRP_A"); var d = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(), g = { AuthFlow: i.authenticationFlowType, ClientId: i.pool.getClientId(), AuthParameters: c, ClientMetadata: d }; i.getUserContextData(i.username) && (g.UserContextData = i.getUserContextData(i.username)), i.client.request("InitiateAuth", g, (function (c, l) { if (c)
            return t.onFailure(c); var h = l.ChallengeParameters; i.username = h.USER_ID_FOR_SRP, n = new p(h.SRP_B, 16), r = new p(h.SALT, 16), i.getCachedDeviceKeyAndPassword(), s.getPasswordAuthenticationKey(i.username, e.getPassword(), n, r, (function (e, n) { e && t.onFailure(e); var r = u.getNowString(), c = a().lib.WordArray.create(o.lW.concat([o.lW.from(i.pool.getUserPoolId().split("_")[1], "utf8"), o.lW.from(i.username, "utf8"), o.lW.from(h.SECRET_BLOCK, "base64"), o.lW.from(r, "utf8")])), p = a().lib.WordArray.create(n), g = D().stringify(f()(c, p)), y = {}; y.USERNAME = i.username, y.PASSWORD_CLAIM_SECRET_BLOCK = h.SECRET_BLOCK, y.TIMESTAMP = r, y.PASSWORD_CLAIM_SIGNATURE = g, null != i.deviceKey && (y.DEVICE_KEY = i.deviceKey); var m = { ChallengeName: "PASSWORD_VERIFIER", ClientId: i.pool.getClientId(), ChallengeResponses: y, Session: l.Session, ClientMetadata: d }; i.getUserContextData() && (m.UserContextData = i.getUserContextData()), function e(t, n) { return i.client.request("RespondToAuthChallenge", t, (function (r, o) { return r && "ResourceNotFoundException" === r.code && -1 !== r.message.toLowerCase().indexOf("device") ? (y.DEVICE_KEY = null, i.deviceKey = null, i.randomPassword = null, i.deviceGroupKey = null, i.clearCachedDeviceKeyAndPassword(), e(t, n)) : n(r, o); })); }(m, (function (e, n) { return e ? t.onFailure(e) : i.authenticateUserInternal(n, s, t); })); })); })); })); }, t.authenticateUserPlainUsernamePassword = function (e, t) { var n = this, r = {}; if (r.USERNAME = this.username, r.PASSWORD = e.getPassword(), r.PASSWORD) {
            var i = new P(this.pool.getUserPoolId().split("_")[1]);
            this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (r.DEVICE_KEY = this.deviceKey);
            var o = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(), s = { AuthFlow: "USER_PASSWORD_AUTH", ClientId: this.pool.getClientId(), AuthParameters: r, ClientMetadata: o };
            this.getUserContextData(this.username) && (s.UserContextData = this.getUserContextData(this.username)), this.client.request("InitiateAuth", s, (function (e, r) { return e ? t.onFailure(e) : n.authenticateUserInternal(r, i, t); }));
        }
        else
            t.onFailure(new Error("PASSWORD parameter is required")); }, t.authenticateUserInternal = function (e, t, n) { var r = this, i = e.ChallengeName, s = e.ChallengeParameters; if ("SMS_MFA" === i)
            return this.Session = e.Session, n.mfaRequired(i, s); if ("SELECT_MFA_TYPE" === i)
            return this.Session = e.Session, n.selectMFAType(i, s); if ("MFA_SETUP" === i)
            return this.Session = e.Session, n.mfaSetup(i, s); if ("SOFTWARE_TOKEN_MFA" === i)
            return this.Session = e.Session, n.totpRequired(i, s); if ("CUSTOM_CHALLENGE" === i)
            return this.Session = e.Session, n.customChallenge(s); if ("NEW_PASSWORD_REQUIRED" === i) {
            this.Session = e.Session;
            var a = null, u = null, c = [], l = t.getNewPasswordRequiredChallengeUserAttributePrefix();
            if (s && (a = JSON.parse(e.ChallengeParameters.userAttributes), u = JSON.parse(e.ChallengeParameters.requiredAttributes)), u)
                for (var f = 0; f < u.length; f++)
                    c[f] = u[f].substr(l.length);
            return n.newPasswordRequired(a, c);
        } if ("DEVICE_SRP_AUTH" !== i) {
            this.signInUserSession = this.getCognitoUserSession(e.AuthenticationResult), this.challengeName = i, this.cacheTokens();
            var h = e.AuthenticationResult.NewDeviceMetadata;
            if (null == h)
                return n.onSuccess(this.signInUserSession);
            t.generateHashDevice(e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, e.AuthenticationResult.NewDeviceMetadata.DeviceKey, (function (i) { if (i)
                return n.onFailure(i); var s = { Salt: o.lW.from(t.getSaltDevices(), "hex").toString("base64"), PasswordVerifier: o.lW.from(t.getVerifierDevices(), "hex").toString("base64") }; r.verifierDevices = s.PasswordVerifier, r.deviceGroupKey = h.DeviceGroupKey, r.randomPassword = t.getRandomPassword(), r.client.request("ConfirmDevice", { DeviceKey: h.DeviceKey, AccessToken: r.signInUserSession.getAccessToken().getJwtToken(), DeviceSecretVerifierConfig: s, DeviceName: q }, (function (t, i) { return t ? n.onFailure(t) : (r.deviceKey = e.AuthenticationResult.NewDeviceMetadata.DeviceKey, r.cacheDeviceKeyAndPassword(), !0 === i.UserConfirmationNecessary ? n.onSuccess(r.signInUserSession, i.UserConfirmationNecessary) : n.onSuccess(r.signInUserSession)); })); }));
        }
        else
            this.getDeviceResponse(n); }, t.completeNewPasswordChallenge = function (e, t, n, r) { var i = this; if (!e)
            return n.onFailure(new Error("New password is required.")); var o = new P(this.pool.getUserPoolId().split("_")[1]), s = o.getNewPasswordRequiredChallengeUserAttributePrefix(), a = {}; t && Object.keys(t).forEach((function (e) { a[s + e] = t[e]; })), a.NEW_PASSWORD = e, a.USERNAME = this.username; var u = { ChallengeName: "NEW_PASSWORD_REQUIRED", ClientId: this.pool.getClientId(), ChallengeResponses: a, Session: this.Session, ClientMetadata: r }; this.getUserContextData() && (u.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", u, (function (e, t) { return e ? n.onFailure(e) : i.authenticateUserInternal(t, o, n); })); }, t.getDeviceResponse = function (e, t) { var n = this, r = new P(this.deviceGroupKey), i = new M, s = {}; s.USERNAME = this.username, s.DEVICE_KEY = this.deviceKey, r.getLargeAValue((function (u, c) { u && e.onFailure(u), s.SRP_A = c.toString(16); var l = { ChallengeName: "DEVICE_SRP_AUTH", ClientId: n.pool.getClientId(), ChallengeResponses: s, ClientMetadata: t }; n.getUserContextData() && (l.UserContextData = n.getUserContextData()), n.client.request("RespondToAuthChallenge", l, (function (t, s) { if (t)
            return e.onFailure(t); var u = s.ChallengeParameters, c = new p(u.SRP_B, 16), l = new p(u.SALT, 16); r.getPasswordAuthenticationKey(n.deviceKey, n.randomPassword, c, l, (function (t, r) { if (t)
            return e.onFailure(t); var c = i.getNowString(), l = a().lib.WordArray.create(o.lW.concat([o.lW.from(n.deviceGroupKey, "utf8"), o.lW.from(n.deviceKey, "utf8"), o.lW.from(u.SECRET_BLOCK, "base64"), o.lW.from(c, "utf8")])), h = a().lib.WordArray.create(r), d = D().stringify(f()(l, h)), p = {}; p.USERNAME = n.username, p.PASSWORD_CLAIM_SECRET_BLOCK = u.SECRET_BLOCK, p.TIMESTAMP = c, p.PASSWORD_CLAIM_SIGNATURE = d, p.DEVICE_KEY = n.deviceKey; var g = { ChallengeName: "DEVICE_PASSWORD_VERIFIER", ClientId: n.pool.getClientId(), ChallengeResponses: p, Session: s.Session }; n.getUserContextData() && (g.UserContextData = n.getUserContextData()), n.client.request("RespondToAuthChallenge", g, (function (t, r) { return t ? e.onFailure(t) : (n.signInUserSession = n.getCognitoUserSession(r.AuthenticationResult), n.cacheTokens(), e.onSuccess(n.signInUserSession)); })); })); })); })); }, t.confirmRegistration = function (e, t, n, r) { var i = { ClientId: this.pool.getClientId(), ConfirmationCode: e, Username: this.username, ForceAliasCreation: t, ClientMetadata: r }; this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("ConfirmSignUp", i, (function (e) { return e ? n(e, null) : n(null, "SUCCESS"); })); }, t.sendCustomChallengeAnswer = function (e, t, n) { var r = this, i = {}; i.USERNAME = this.username, i.ANSWER = e; var o = new P(this.pool.getUserPoolId().split("_")[1]); this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (i.DEVICE_KEY = this.deviceKey); var s = { ChallengeName: "CUSTOM_CHALLENGE", ChallengeResponses: i, ClientId: this.pool.getClientId(), Session: this.Session, ClientMetadata: n }; this.getUserContextData() && (s.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", s, (function (e, n) { return e ? t.onFailure(e) : r.authenticateUserInternal(n, o, t); })); }, t.sendMFACode = function (e, t, n, r) { var i = this, s = {}; s.USERNAME = this.username, s.SMS_MFA_CODE = e; var a = n || "SMS_MFA"; "SOFTWARE_TOKEN_MFA" === a && (s.SOFTWARE_TOKEN_MFA_CODE = e), null != this.deviceKey && (s.DEVICE_KEY = this.deviceKey); var u = { ChallengeName: a, ChallengeResponses: s, ClientId: this.pool.getClientId(), Session: this.Session, ClientMetadata: r }; this.getUserContextData() && (u.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", u, (function (e, n) { if (e)
            return t.onFailure(e); if ("DEVICE_SRP_AUTH" !== n.ChallengeName) {
            if (i.signInUserSession = i.getCognitoUserSession(n.AuthenticationResult), i.cacheTokens(), null == n.AuthenticationResult.NewDeviceMetadata)
                return t.onSuccess(i.signInUserSession);
            var r = new P(i.pool.getUserPoolId().split("_")[1]);
            r.generateHashDevice(n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, n.AuthenticationResult.NewDeviceMetadata.DeviceKey, (function (e) { if (e)
                return t.onFailure(e); var s = { Salt: o.lW.from(r.getSaltDevices(), "hex").toString("base64"), PasswordVerifier: o.lW.from(r.getVerifierDevices(), "hex").toString("base64") }; i.verifierDevices = s.PasswordVerifier, i.deviceGroupKey = n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, i.randomPassword = r.getRandomPassword(), i.client.request("ConfirmDevice", { DeviceKey: n.AuthenticationResult.NewDeviceMetadata.DeviceKey, AccessToken: i.signInUserSession.getAccessToken().getJwtToken(), DeviceSecretVerifierConfig: s, DeviceName: q }, (function (e, r) { return e ? t.onFailure(e) : (i.deviceKey = n.AuthenticationResult.NewDeviceMetadata.DeviceKey, i.cacheDeviceKeyAndPassword(), !0 === r.UserConfirmationNecessary ? t.onSuccess(i.signInUserSession, r.UserConfirmationNecessary) : t.onSuccess(i.signInUserSession)); })); }));
        }
        else
            i.getDeviceResponse(t); })); }, t.changePassword = function (e, t, n, r) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n(new Error("User is not authenticated"), null); this.client.request("ChangePassword", { PreviousPassword: e, ProposedPassword: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), ClientMetadata: r }, (function (e) { return e ? n(e, null) : n(null, "SUCCESS"); })); }, t.enableMFA = function (e) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error("User is not authenticated"), null); var t = []; t.push({ DeliveryMedium: "SMS", AttributeName: "phone_number" }), this.client.request("SetUserSettings", { MFAOptions: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (t) { return t ? e(t, null) : e(null, "SUCCESS"); })); }, t.setUserMfaPreference = function (e, t, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n(new Error("User is not authenticated"), null); this.client.request("SetUserMFAPreference", { SMSMfaSettings: e, SoftwareTokenMfaSettings: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (e) { return e ? n(e, null) : n(null, "SUCCESS"); })); }, t.disableMFA = function (e) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error("User is not authenticated"), null); this.client.request("SetUserSettings", { MFAOptions: [], AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (t) { return t ? e(t, null) : e(null, "SUCCESS"); })); }, t.deleteUser = function (e, t) { var n = this; if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error("User is not authenticated"), null); this.client.request("DeleteUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), ClientMetadata: t }, (function (t) { return t ? e(t, null) : (n.clearCachedUser(), e(null, "SUCCESS")); })); }, t.updateAttributes = function (e, t, n) { var r = this; if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t(new Error("User is not authenticated"), null); this.client.request("UpdateUserAttributes", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), UserAttributes: e, ClientMetadata: n }, (function (e) { return e ? t(e, null) : r.getUserData((function () { return t(null, "SUCCESS"); }), { bypassCache: !0 }); })); }, t.getUserAttributes = function (e) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error("User is not authenticated"), null); this.client.request("GetUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (t, n) { if (t)
            return e(t, null); for (var r = [], i = 0; i < n.UserAttributes.length; i++) {
            var o = { Name: n.UserAttributes[i].Name, Value: n.UserAttributes[i].Value }, s = new F(o);
            r.push(s);
        } return e(null, r); })); }, t.getMFAOptions = function (e) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e(new Error("User is not authenticated"), null); this.client.request("GetUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (t, n) { return t ? e(t, null) : e(null, n.MFAOptions); })); }, t.createGetUserRequest = function () { return this.client.promisifyRequest("GetUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }); }, t.refreshSessionIfPossible = function () { var e = this; return new Promise((function (t) { var n = e.signInUserSession.getRefreshToken(); n && n.getToken() ? e.refreshSession(n, t) : t(); })); }, t.getUserData = function (e, t) { var n = this; if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return this.clearCachedUserData(), e(new Error("User is not authenticated"), null); var r = this.getUserDataFromCache(); if (r)
            if (this.isFetchUserDataAndTokenRequired(t))
                this.fetchUserData().then((function (e) { return n.refreshSessionIfPossible().then((function () { return e; })); })).then((function (t) { return e(null, t); })).catch(e);
            else
                try {
                    return void e(null, JSON.parse(r));
                }
                catch (t) {
                    return this.clearCachedUserData(), void e(t, null);
                }
        else
            this.fetchUserData().then((function (t) { e(null, t); })).catch(e); }, t.getUserDataFromCache = function () { return this.storage.getItem(this.userDataKey); }, t.isFetchUserDataAndTokenRequired = function (e) { var t = (e || {}).bypassCache; return void 0 !== t && t; }, t.fetchUserData = function () { var e = this; return this.createGetUserRequest().then((function (t) { return e.cacheUserData(t), t; })); }, t.deleteAttributes = function (e, t) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t(new Error("User is not authenticated"), null); this.client.request("DeleteUserAttributes", { UserAttributeNames: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (e) { return e ? t(e, null) : t(null, "SUCCESS"); })); }, t.resendConfirmationCode = function (e, t) { var n = { ClientId: this.pool.getClientId(), Username: this.username, ClientMetadata: t }; this.client.request("ResendConfirmationCode", n, (function (t, n) { return t ? e(t, null) : e(null, n); })); }, t.getSession = function (e) { if (null == this.username)
            return e(new Error("Username is null. Cannot retrieve a new session"), null); if (null != this.signInUserSession && this.signInUserSession.isValid())
            return e(null, this.signInUserSession); var t = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, n = t + ".idToken", r = t + ".accessToken", i = t + ".refreshToken", o = t + ".clockDrift"; if (this.storage.getItem(n)) {
            var s = new R({ IdToken: this.storage.getItem(n) }), a = new O({ AccessToken: this.storage.getItem(r) }), u = new k({ RefreshToken: this.storage.getItem(i) }), c = parseInt(this.storage.getItem(o), 0) || 0, l = new L({ IdToken: s, AccessToken: a, RefreshToken: u, ClockDrift: c });
            if (l.isValid())
                return this.signInUserSession = l, e(null, this.signInUserSession);
            if (!u.getToken())
                return e(new Error("Cannot retrieve a new session. Please authenticate."), null);
            this.refreshSession(u, e);
        }
        else
            e(new Error("Local storage is missing an ID Token, Please authenticate"), null); }, t.refreshSession = function (e, t, n) { var r = this, i = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(t) : t, o = {}; o.REFRESH_TOKEN = e.getToken(); var s = "CognitoIdentityServiceProvider." + this.pool.getClientId(), a = s + ".LastAuthUser"; if (this.storage.getItem(a)) {
            this.username = this.storage.getItem(a);
            var u = s + "." + this.username + ".deviceKey";
            this.deviceKey = this.storage.getItem(u), o.DEVICE_KEY = this.deviceKey;
        } var c = { ClientId: this.pool.getClientId(), AuthFlow: "REFRESH_TOKEN_AUTH", AuthParameters: o, ClientMetadata: n }; this.getUserContextData() && (c.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", c, (function (t, n) { if (t)
            return "NotAuthorizedException" === t.code && r.clearCachedUser(), i(t, null); if (n) {
            var o = n.AuthenticationResult;
            return Object.prototype.hasOwnProperty.call(o, "RefreshToken") || (o.RefreshToken = e.getToken()), r.signInUserSession = r.getCognitoUserSession(o), r.cacheTokens(), i(null, r.signInUserSession);
        } })); }, t.cacheTokens = function () { var e = "CognitoIdentityServiceProvider." + this.pool.getClientId(), t = e + "." + this.username + ".idToken", n = e + "." + this.username + ".accessToken", r = e + "." + this.username + ".refreshToken", i = e + "." + this.username + ".clockDrift", o = e + ".LastAuthUser"; this.storage.setItem(t, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(n, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(r, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(i, "" + this.signInUserSession.getClockDrift()), this.storage.setItem(o, this.username); }, t.cacheUserData = function (e) { this.storage.setItem(this.userDataKey, JSON.stringify(e)); }, t.clearCachedUserData = function () { this.storage.removeItem(this.userDataKey); }, t.clearCachedUser = function () { this.clearCachedTokens(), this.clearCachedUserData(); }, t.cacheDeviceKeyAndPassword = function () { var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, t = e + ".deviceKey", n = e + ".randomPasswordKey", r = e + ".deviceGroupKey"; this.storage.setItem(t, this.deviceKey), this.storage.setItem(n, this.randomPassword), this.storage.setItem(r, this.deviceGroupKey); }, t.getCachedDeviceKeyAndPassword = function () { var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, t = e + ".deviceKey", n = e + ".randomPasswordKey", r = e + ".deviceGroupKey"; this.storage.getItem(t) && (this.deviceKey = this.storage.getItem(t), this.randomPassword = this.storage.getItem(n), this.deviceGroupKey = this.storage.getItem(r)); }, t.clearCachedDeviceKeyAndPassword = function () { var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, t = e + ".deviceKey", n = e + ".randomPasswordKey", r = e + ".deviceGroupKey"; this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(r); }, t.clearCachedTokens = function () { var e = "CognitoIdentityServiceProvider." + this.pool.getClientId(), t = e + "." + this.username + ".idToken", n = e + "." + this.username + ".accessToken", r = e + "." + this.username + ".refreshToken", i = e + ".LastAuthUser", o = e + "." + this.username + ".clockDrift"; this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(r), this.storage.removeItem(i), this.storage.removeItem(o); }, t.getCognitoUserSession = function (e) { var t = new R(e), n = new O(e), r = new k(e); return new L({ IdToken: t, AccessToken: n, RefreshToken: r }); }, t.forgotPassword = function (e, t) { var n = { ClientId: this.pool.getClientId(), Username: this.username, ClientMetadata: t }; this.getUserContextData() && (n.UserContextData = this.getUserContextData()), this.client.request("ForgotPassword", n, (function (t, n) { return t ? e.onFailure(t) : "function" == typeof e.inputVerificationCode ? e.inputVerificationCode(n) : e.onSuccess(n); })); }, t.confirmPassword = function (e, t, n, r) { var i = { ClientId: this.pool.getClientId(), Username: this.username, ConfirmationCode: e, Password: t, ClientMetadata: r }; this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("ConfirmForgotPassword", i, (function (e) { return e ? n.onFailure(e) : n.onSuccess(); })); }, t.getAttributeVerificationCode = function (e, t, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t.onFailure(new Error("User is not authenticated")); this.client.request("GetUserAttributeVerificationCode", { AttributeName: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), ClientMetadata: n }, (function (e, n) { return e ? t.onFailure(e) : "function" == typeof t.inputVerificationCode ? t.inputVerificationCode(n) : t.onSuccess(); })); }, t.verifyAttribute = function (e, t, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n.onFailure(new Error("User is not authenticated")); this.client.request("VerifyUserAttribute", { AttributeName: e, Code: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (e) { return e ? n.onFailure(e) : n.onSuccess("SUCCESS"); })); }, t.getDevice = function (e) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error("User is not authenticated")); this.client.request("GetDevice", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: this.deviceKey }, (function (t, n) { return t ? e.onFailure(t) : e.onSuccess(n); })); }, t.forgetSpecificDevice = function (e, t) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return t.onFailure(new Error("User is not authenticated")); this.client.request("ForgetDevice", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: e }, (function (e) { return e ? t.onFailure(e) : t.onSuccess("SUCCESS"); })); }, t.forgetDevice = function (e) { var t = this; this.forgetSpecificDevice(this.deviceKey, { onFailure: e.onFailure, onSuccess: function (n) { return t.deviceKey = null, t.deviceGroupKey = null, t.randomPassword = null, t.clearCachedDeviceKeyAndPassword(), e.onSuccess(n); } }); }, t.setDeviceStatusRemembered = function (e) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error("User is not authenticated")); this.client.request("UpdateDeviceStatus", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: this.deviceKey, DeviceRememberedStatus: "remembered" }, (function (t) { return t ? e.onFailure(t) : e.onSuccess("SUCCESS"); })); }, t.setDeviceStatusNotRemembered = function (e) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error("User is not authenticated")); this.client.request("UpdateDeviceStatus", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: this.deviceKey, DeviceRememberedStatus: "not_remembered" }, (function (t) { return t ? e.onFailure(t) : e.onSuccess("SUCCESS"); })); }, t.listDevices = function (e, t, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return n.onFailure(new Error("User is not authenticated")); var r = { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), Limit: e }; t && (r.PaginationToken = t), this.client.request("ListDevices", r, (function (e, t) { return e ? n.onFailure(e) : n.onSuccess(t); })); }, t.globalSignOut = function (e) { var t = this; if (null == this.signInUserSession || !this.signInUserSession.isValid())
            return e.onFailure(new Error("User is not authenticated")); this.client.request("GlobalSignOut", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (n) { return n ? e.onFailure(n) : (t.clearCachedUser(), e.onSuccess("SUCCESS")); })); }, t.signOut = function () { this.signInUserSession = null, this.clearCachedUser(); }, t.sendMFASelectionAnswer = function (e, t) { var n = this, r = {}; r.USERNAME = this.username, r.ANSWER = e; var i = { ChallengeName: "SELECT_MFA_TYPE", ChallengeResponses: r, ClientId: this.pool.getClientId(), Session: this.Session }; this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", i, (function (r, i) { return r ? t.onFailure(r) : (n.Session = i.Session, "SMS_MFA" === e ? t.mfaRequired(i.ChallengeName, i.ChallengeParameters) : "SOFTWARE_TOKEN_MFA" === e ? t.totpRequired(i.ChallengeName, i.ChallengeParameters) : void 0); })); }, t.getUserContextData = function () { return this.pool.getUserContextData(this.username); }, t.associateSoftwareToken = function (e) { var t = this; null != this.signInUserSession && this.signInUserSession.isValid() ? this.client.request("AssociateSoftwareToken", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, (function (t, n) { return t ? e.onFailure(t) : e.associateSecretCode(n.SecretCode); })) : this.client.request("AssociateSoftwareToken", { Session: this.Session }, (function (n, r) { return n ? e.onFailure(n) : (t.Session = r.Session, e.associateSecretCode(r.SecretCode)); })); }, t.verifySoftwareToken = function (e, t, n) { var r = this; null != this.signInUserSession && this.signInUserSession.isValid() ? this.client.request("VerifySoftwareToken", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), UserCode: e, FriendlyDeviceName: t }, (function (e, t) { return e ? n.onFailure(e) : n.onSuccess(t); })) : this.client.request("VerifySoftwareToken", { Session: this.Session, UserCode: e, FriendlyDeviceName: t }, (function (e, t) { if (e)
            return n.onFailure(e); r.Session = t.Session; var i = {}; i.USERNAME = r.username; var o = { ChallengeName: "MFA_SETUP", ClientId: r.pool.getClientId(), ChallengeResponses: i, Session: r.Session }; r.getUserContextData() && (o.UserContextData = r.getUserContextData()), r.client.request("RespondToAuthChallenge", o, (function (e, t) { return e ? n.onFailure(e) : (r.signInUserSession = r.getCognitoUserSession(t.AuthenticationResult), r.cacheTokens(), n.onSuccess(r.signInUserSession)); })); })); }, e; }();
        function V() { }
        n(204), V.prototype.userAgent = "aws-amplify/0.1.x js";
        var W = function (e) { e && (V.prototype.userAgent && !V.prototype.userAgent.includes(e) && (V.prototype.userAgent = V.prototype.userAgent.concat(" ", e)), V.prototype.userAgent && "" !== V.prototype.userAgent || (V.prototype.userAgent = e)); };
        var z = V;
        function G(e) { var t = "function" == typeof Map ? new Map : void 0; return (G = function (e) { if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]")))
            return e; var n; if ("function" != typeof e)
            throw new TypeError("Super expression must either be null or a function"); if (void 0 !== t) {
            if (t.has(e))
                return t.get(e);
            t.set(e, r);
        } function r() { return Y(e, arguments, X(this).constructor); } return r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Z(r, e); })(e); }
        function Y(e, t, n) { return (Y = J() ? Reflect.construct : function (e, t, n) { var r = [null]; r.push.apply(r, t); var i = new (Function.bind.apply(e, r)); return n && Z(i, n.prototype), i; }).apply(null, arguments); }
        function J() { if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1; if (Reflect.construct.sham)
            return !1; if ("function" == typeof Proxy)
            return !0; try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0;
        }
        catch (e) {
            return !1;
        } }
        function Z(e, t) { return (Z = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; })(e, t); }
        function X(e) { return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); })(e); }
        var Q = function (e) { var t, n; function r(t, n, r, i) { var o; return (o = e.call(this, t) || this).code = n, o.name = r, o.statusCode = i, o; } return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r; }(G(Error)), ee = function () { function e(e, t, n) { this.endpoint = t || "https://cognito-idp." + e + ".amazonaws.com/"; var r = (n || {}).credentials; this.fetchOptions = r ? { credentials: r } : {}; } var t = e.prototype; return t.promisifyRequest = function (e, t) { var n = this; return new Promise((function (r, i) { n.request(e, t, (function (e, t) { e ? i(new Q(e.message, e.code, e.name, e.statusCode)) : r(t); })); })); }, t.request = function (e, t, n) { var r, i = { "Content-Type": "application/x-amz-json-1.1", "X-Amz-Target": "AWSCognitoIdentityProviderService." + e, "X-Amz-User-Agent": z.prototype.userAgent }, o = Object.assign({}, this.fetchOptions, { headers: i, method: "POST", mode: "cors", cache: "no-cache", body: JSON.stringify(t) }); fetch(this.endpoint, o).then((function (e) { return r = e, e; }), (function (e) { if (e instanceof TypeError)
            throw new Error("Network error"); throw e; })).then((function (e) { return e.json().catch((function () { return {}; })); })).then((function (e) { if (r.ok)
            return n(null, e); var t = (e.__type || e.code).split("#").pop(), i = { code: t, name: t, message: e.message || e.Message || null }; return n(i); })).catch((function (e) { if (!(r && r.headers && r.headers.get("x-amzn-errortype"))) {
            if (e instanceof Error && "Network error" === e.message) {
                var t = { code: "NetworkError", name: e.name, message: e.message };
                return n(t);
            }
            return n(e);
        } try {
            var i = r.headers.get("x-amzn-errortype").split(":")[0], o = { code: i, name: i, statusCode: r.status, message: r.status ? r.status.toString() : null };
            return n(o);
        }
        catch (t) {
            return n(e);
        } })); }, e; }(), te = function () { function e(e, t) { var n = e || {}, r = n.UserPoolId, i = n.ClientId, o = n.endpoint, s = n.fetchOptions, a = n.AdvancedSecurityDataCollectionFlag; if (!r || !i)
            throw new Error("Both UserPoolId and ClientId are required."); if (!/^[\w-]+_.+$/.test(r))
            throw new Error("Invalid UserPoolId format."); var u = r.split("_")[0]; this.userPoolId = r, this.clientId = i, this.client = new ee(u, o, s), this.advancedSecurityDataCollectionFlag = !1 !== a, this.storage = e.Storage || (new H).getStorage(), t && (this.wrapRefreshSessionCallback = t); } var t = e.prototype; return t.getUserPoolId = function () { return this.userPoolId; }, t.getClientId = function () { return this.clientId; }, t.signUp = function (e, t, n, r, i, o) { var s = this, a = { ClientId: this.clientId, Username: e, Password: t, UserAttributes: n, ValidationData: r, ClientMetadata: o }; this.getUserContextData(e) && (a.UserContextData = this.getUserContextData(e)), this.client.request("SignUp", a, (function (t, n) { if (t)
            return i(t, null); var r = { Username: e, Pool: s, Storage: s.storage }, o = { user: new K(r), userConfirmed: n.UserConfirmed, userSub: n.UserSub, codeDeliveryDetails: n.CodeDeliveryDetails }; return i(null, o); })); }, t.getCurrentUser = function () { var e = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser", t = this.storage.getItem(e); if (t) {
            var n = { Username: t, Pool: this, Storage: this.storage };
            return new K(n);
        } return null; }, t.getUserContextData = function (e) { if ("undefined" != typeof AmazonCognitoAdvancedSecurityData) {
            var t = AmazonCognitoAdvancedSecurityData;
            if (this.advancedSecurityDataCollectionFlag) {
                var n = t.getData(e, this.userPoolId, this.clientId);
                if (n)
                    return { EncodedData: n };
            }
            return {};
        } }, e; }(), ne = n(6808), re = function () { function e(e) { if (!e.domain)
            throw new Error("The domain of cookieStorage can not be undefined."); if (this.domain = e.domain, e.path ? this.path = e.path : this.path = "/", Object.prototype.hasOwnProperty.call(e, "expires") ? this.expires = e.expires : this.expires = 365, Object.prototype.hasOwnProperty.call(e, "secure") ? this.secure = e.secure : this.secure = !0, Object.prototype.hasOwnProperty.call(e, "sameSite")) {
            if (!["strict", "lax", "none"].includes(e.sameSite))
                throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
            if ("none" === e.sameSite && !this.secure)
                throw new Error("sameSite = None requires the Secure attribute in latest browser versions.");
            this.sameSite = e.sameSite;
        }
        else
            this.sameSite = null; } var t = e.prototype; return t.setItem = function (e, t) { var n = { path: this.path, expires: this.expires, domain: this.domain, secure: this.secure }; return this.sameSite && (n.sameSite = this.sameSite), ne.set(e, t, n), ne.get(e); }, t.getItem = function (e) { return ne.get(e); }, t.removeItem = function (e) { var t = { path: this.path, expires: this.expires, domain: this.domain, secure: this.secure }; return this.sameSite && (t.sameSite = this.sameSite), ne.remove(e, t); }, t.clear = function () { var e, t = ne.get(); for (e = 0; e < t.length; ++e)
            ne.remove(t[e]); return {}; }, e; }();
    }, 9742: function (e, t) {
        "use strict";
        t.byteLength = function (e) { var t = u(e), n = t[0], r = t[1]; return 3 * (n + r) / 4 - r; }, t.toByteArray = function (e) { var t, n, o = u(e), s = o[0], a = o[1], c = new i(function (e, t, n) { return 3 * (t + n) / 4 - n; }(0, s, a)), l = 0, f = a > 0 ? s - 4 : s; for (n = 0; n < f; n += 4)
            t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], c[l++] = t >> 16 & 255, c[l++] = t >> 8 & 255, c[l++] = 255 & t; return 2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, c[l++] = 255 & t), 1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, c[l++] = t >> 8 & 255, c[l++] = 255 & t), c; }, t.fromByteArray = function (e) { for (var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, u = r - i; a < u; a += s)
            o.push(c(e, a, a + s > u ? u : a + s)); return 1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")), o.join(""); };
        for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s)
            n[s] = o[s], r[o.charCodeAt(s)] = s;
        function u(e) { var t = e.length; if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4"); var n = e.indexOf("="); return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]; }
        function c(e, t, r) { for (var i, o, s = [], a = t; a < r; a += 3)
            i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]); return s.join(""); }
        r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
    }, 8764: function (e, t, n) {
        "use strict";
        var r = n(9742), i = n(645), o = n(5826);
        function s() { return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823; }
        function a(e, t) { if (s() < t)
            throw new RangeError("Invalid typed array length"); return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e; }
        function u(e, t, n) { if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(e, t, n); if ("number" == typeof e) {
            if ("string" == typeof t)
                throw new Error("If encoding is specified then the first argument must be a string");
            return f(this, e);
        } return c(this, e, t, n); }
        function c(e, t, n, r) { if ("number" == typeof t)
            throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) { if (t.byteLength, n < 0 || t.byteLength < n)
            throw new RangeError("'offset' is out of bounds"); if (t.byteLength < n + (r || 0))
            throw new RangeError("'length' is out of bounds"); return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = h(e, t), e; }(e, t, n, r) : "string" == typeof t ? function (e, t, n) { if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n))
            throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | p(t, n), i = (e = a(e, r)).write(t, n); return i !== r && (e = e.slice(0, i)), e; }(e, t, n) : function (e, t) { if (u.isBuffer(t)) {
            var n = 0 | d(t.length);
            return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n), e;
        } if (t) {
            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t)
                return "number" != typeof t.length || (r = t.length) != r ? a(e, 0) : h(e, t);
            if ("Buffer" === t.type && o(t.data))
                return h(e, t.data);
        } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."); }(e, t); }
        function l(e) { if ("number" != typeof e)
            throw new TypeError('"size" argument must be a number'); if (e < 0)
            throw new RangeError('"size" argument must not be negative'); }
        function f(e, t) { if (l(t), e = a(e, t < 0 ? 0 : 0 | d(t)), !u.TYPED_ARRAY_SUPPORT)
            for (var n = 0; n < t; ++n)
                e[n] = 0; return e; }
        function h(e, t) { var n = t.length < 0 ? 0 : 0 | d(t.length); e = a(e, n); for (var r = 0; r < n; r += 1)
            e[r] = 255 & t[r]; return e; }
        function d(e) { if (e >= s())
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes"); return 0 | e; }
        function p(e, t) { if (u.isBuffer(e))
            return e.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
            return e.byteLength; "string" != typeof e && (e = "" + e); var n = e.length; if (0 === n)
            return 0; for (var r = !1;;)
            switch (t) {
                case "ascii":
                case "latin1":
                case "binary": return n;
                case "utf8":
                case "utf-8":
                case void 0: return j(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le": return 2 * n;
                case "hex": return n >>> 1;
                case "base64": return B(e).length;
                default:
                    if (r)
                        return j(e).length;
                    t = ("" + t).toLowerCase(), r = !0;
            } }
        function g(e, t, n) { var r = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length)
            return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
            return ""; if ((n >>>= 0) <= (t >>>= 0))
            return ""; for (e || (e = "utf8");;)
            switch (e) {
                case "hex": return O(this, t, n);
                case "utf8":
                case "utf-8": return I(this, t, n);
                case "ascii": return P(this, t, n);
                case "latin1":
                case "binary": return U(this, t, n);
                case "base64": return C(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le": return R(this, t, n);
                default:
                    if (r)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), r = !0;
            } }
        function y(e, t, n) { var r = e[t]; e[t] = e[n], e[n] = r; }
        function m(e, t, n, r, i) { if (0 === e.length)
            return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
            if (i)
                return -1;
            n = e.length - 1;
        }
        else if (n < 0) {
            if (!i)
                return -1;
            n = 0;
        } if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t))
            return 0 === t.length ? -1 : v(e, t, n, r, i); if ("number" == typeof t)
            return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, i); throw new TypeError("val must be string, number or Buffer"); }
        function v(e, t, n, r, i) { var o, s = 1, a = e.length, u = t.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2)
                return -1;
            s = 2, a /= 2, u /= 2, n /= 2;
        } function c(e, t) { return 1 === s ? e[t] : e.readUInt16BE(t * s); } if (i) {
            var l = -1;
            for (o = n; o < a; o++)
                if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                    if (-1 === l && (l = o), o - l + 1 === u)
                        return l * s;
                }
                else
                    -1 !== l && (o -= o - l), l = -1;
        }
        else
            for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
                for (var f = !0, h = 0; h < u; h++)
                    if (c(e, o + h) !== c(t, h)) {
                        f = !1;
                        break;
                    }
                if (f)
                    return o;
            } return -1; }
        function w(e, t, n, r) { n = Number(n) || 0; var i = e.length - n; r ? (r = Number(r)) > i && (r = i) : r = i; var o = t.length; if (o % 2 != 0)
            throw new TypeError("Invalid hex string"); r > o / 2 && (r = o / 2); for (var s = 0; s < r; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a))
                return s;
            e[n + s] = a;
        } return s; }
        function b(e, t, n, r) { return H(j(t, e.length - n), e, n, r); }
        function _(e, t, n, r) { return H(function (e) { for (var t = [], n = 0; n < e.length; ++n)
            t.push(255 & e.charCodeAt(n)); return t; }(t), e, n, r); }
        function S(e, t, n, r) { return _(e, t, n, r); }
        function A(e, t, n, r) { return H(B(t), e, n, r); }
        function E(e, t, n, r) { return H(function (e, t) { for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
            r = (n = e.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r); return o; }(t, e.length - n), e, n, r); }
        function C(e, t, n) { return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n)); }
        function I(e, t, n) { n = Math.min(e.length, n); for (var r = [], i = t; i < n;) {
            var o, s, a, u, c = e[i], l = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + f <= n)
                switch (f) {
                    case 1:
                        c < 128 && (l = c);
                        break;
                    case 2:
                        128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                        break;
                    case 3:
                        o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                        break;
                    case 4: o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u);
                }
            null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f;
        } return function (e) { var t = e.length; if (t <= T)
            return String.fromCharCode.apply(String, e); for (var n = "", r = 0; r < t;)
            n += String.fromCharCode.apply(String, e.slice(r, r += T)); return n; }(r); }
        t.lW = u, t.h2 = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== n.g.TYPED_ARRAY_SUPPORT ? n.g.TYPED_ARRAY_SUPPORT : function () { try {
            var e = new Uint8Array(1);
            return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42; } }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
        }
        catch (e) {
            return !1;
        } }(), s(), u.poolSize = 8192, u._augment = function (e) { return e.__proto__ = u.prototype, e; }, u.from = function (e, t, n) { return c(null, e, t, n); }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })), u.alloc = function (e, t, n) { return function (e, t, n, r) { return l(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t); }(null, e, t, n); }, u.allocUnsafe = function (e) { return f(null, e); }, u.allocUnsafeSlow = function (e) { return f(null, e); }, u.isBuffer = function (e) { return !(null == e || !e._isBuffer); }, u.compare = function (e, t) { if (!u.isBuffer(e) || !u.isBuffer(t))
            throw new TypeError("Arguments must be Buffers"); if (e === t)
            return 0; for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
            if (e[i] !== t[i]) {
                n = e[i], r = t[i];
                break;
            } return n < r ? -1 : r < n ? 1 : 0; }, u.isEncoding = function (e) { switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return !0;
            default: return !1;
        } }, u.concat = function (e, t) { if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length)
            return u.alloc(0); var n; if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n)
                t += e[n].length; var r = u.allocUnsafe(t), i = 0; for (n = 0; n < e.length; ++n) {
            var s = e[n];
            if (!u.isBuffer(s))
                throw new TypeError('"list" argument must be an Array of Buffers');
            s.copy(r, i), i += s.length;
        } return r; }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function () { var e = this.length; if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2)
            y(this, t, t + 1); return this; }, u.prototype.swap32 = function () { var e = this.length; if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4)
            y(this, t, t + 3), y(this, t + 1, t + 2); return this; }, u.prototype.swap64 = function () { var e = this.length; if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8)
            y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4); return this; }, u.prototype.toString = function () { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : g.apply(this, arguments); }, u.prototype.equals = function (e) { if (!u.isBuffer(e))
            throw new TypeError("Argument must be a Buffer"); return this === e || 0 === u.compare(this, e); }, u.prototype.inspect = function () { var e = "", n = t.h2; return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"; }, u.prototype.compare = function (e, t, n, r, i) { if (!u.isBuffer(e))
            throw new TypeError("Argument must be a Buffer"); if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length)
            throw new RangeError("out of range index"); if (r >= i && t >= n)
            return 0; if (r >= i)
            return -1; if (t >= n)
            return 1; if (this === e)
            return 0; for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = e.slice(t, n), f = 0; f < a; ++f)
            if (c[f] !== l[f]) {
                o = c[f], s = l[f];
                break;
            } return o < s ? -1 : s < o ? 1 : 0; }, u.prototype.includes = function (e, t, n) { return -1 !== this.indexOf(e, t, n); }, u.prototype.indexOf = function (e, t, n) { return m(this, e, t, n, !0); }, u.prototype.lastIndexOf = function (e, t, n) { return m(this, e, t, n, !1); }, u.prototype.write = function (e, t, n, r) { if (void 0 === t)
            r = "utf8", n = this.length, t = 0;
        else if (void 0 === n && "string" == typeof t)
            r = t, n = this.length, t = 0;
        else {
            if (!isFinite(t))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        } var i = this.length - t; if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length)
            throw new RangeError("Attempt to write outside buffer bounds"); r || (r = "utf8"); for (var o = !1;;)
            switch (r) {
                case "hex": return w(this, e, t, n);
                case "utf8":
                case "utf-8": return b(this, e, t, n);
                case "ascii": return _(this, e, t, n);
                case "latin1":
                case "binary": return S(this, e, t, n);
                case "base64": return A(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le": return E(this, e, t, n);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0;
            } }, u.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; };
        var T = 4096;
        function P(e, t, n) { var r = ""; n = Math.min(e.length, n); for (var i = t; i < n; ++i)
            r += String.fromCharCode(127 & e[i]); return r; }
        function U(e, t, n) { var r = ""; n = Math.min(e.length, n); for (var i = t; i < n; ++i)
            r += String.fromCharCode(e[i]); return r; }
        function O(e, t, n) { var r, i = e.length; (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i); for (var o = "", s = t; s < n; ++s)
            o += (r = e[s]) < 16 ? "0" + r.toString(16) : r.toString(16); return o; }
        function R(e, t, n) { for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]); return i; }
        function k(e, t, n) { if (e % 1 != 0 || e < 0)
            throw new RangeError("offset is not uint"); if (e + t > n)
            throw new RangeError("Trying to access beyond buffer length"); }
        function x(e, t, n, r, i, o) { if (!u.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length)
            throw new RangeError("Index out of range"); }
        function D(e, t, n, r) { t < 0 && (t = 65535 + t + 1); for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
            e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i); }
        function L(e, t, n, r) { t < 0 && (t = 4294967295 + t + 1); for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
            e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255; }
        function N(e, t, n, r, i, o) { if (n + r > e.length)
            throw new RangeError("Index out of range"); if (n < 0)
            throw new RangeError("Index out of range"); }
        function $(e, t, n, r, o) { return o || N(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4; }
        function M(e, t, n, r, o) { return o || N(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8; }
        u.prototype.slice = function (e, t) { var n, r = this.length; if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)
            (n = this.subarray(e, t)).__proto__ = u.prototype;
        else {
            var i = t - e;
            n = new u(i, void 0);
            for (var o = 0; o < i; ++o)
                n[o] = this[o + e];
        } return n; }, u.prototype.readUIntLE = function (e, t, n) { e |= 0, t |= 0, n || k(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);)
            r += this[e + o] * i; return r; }, u.prototype.readUIntBE = function (e, t, n) { e |= 0, t |= 0, n || k(e, t, this.length); for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);)
            r += this[e + --t] * i; return r; }, u.prototype.readUInt8 = function (e, t) { return t || k(e, 1, this.length), this[e]; }, u.prototype.readUInt16LE = function (e, t) { return t || k(e, 2, this.length), this[e] | this[e + 1] << 8; }, u.prototype.readUInt16BE = function (e, t) { return t || k(e, 2, this.length), this[e] << 8 | this[e + 1]; }, u.prototype.readUInt32LE = function (e, t) { return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]; }, u.prototype.readUInt32BE = function (e, t) { return t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]); }, u.prototype.readIntLE = function (e, t, n) { e |= 0, t |= 0, n || k(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);)
            r += this[e + o] * i; return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r; }, u.prototype.readIntBE = function (e, t, n) { e |= 0, t |= 0, n || k(e, t, this.length); for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);)
            o += this[e + --r] * i; return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o; }, u.prototype.readInt8 = function (e, t) { return t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]; }, u.prototype.readInt16LE = function (e, t) { t || k(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n; }, u.prototype.readInt16BE = function (e, t) { t || k(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n; }, u.prototype.readInt32LE = function (e, t) { return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24; }, u.prototype.readInt32BE = function (e, t) { return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]; }, u.prototype.readFloatLE = function (e, t) { return t || k(e, 4, this.length), i.read(this, e, !0, 23, 4); }, u.prototype.readFloatBE = function (e, t) { return t || k(e, 4, this.length), i.read(this, e, !1, 23, 4); }, u.prototype.readDoubleLE = function (e, t) { return t || k(e, 8, this.length), i.read(this, e, !0, 52, 8); }, u.prototype.readDoubleBE = function (e, t) { return t || k(e, 8, this.length), i.read(this, e, !1, 52, 8); }, u.prototype.writeUIntLE = function (e, t, n, r) { e = +e, t |= 0, n |= 0, r || x(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var i = 1, o = 0; for (this[t] = 255 & e; ++o < n && (i *= 256);)
            this[t + o] = e / i & 255; return t + n; }, u.prototype.writeUIntBE = function (e, t, n, r) { e = +e, t |= 0, n |= 0, r || x(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var i = n - 1, o = 1; for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);)
            this[t + i] = e / o & 255; return t + n; }, u.prototype.writeUInt8 = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1; }, u.prototype.writeUInt16LE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2; }, u.prototype.writeUInt16BE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2; }, u.prototype.writeUInt32LE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : L(this, e, t, !0), t + 4; }, u.prototype.writeUInt32BE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4; }, u.prototype.writeIntLE = function (e, t, n, r) { if (e = +e, t |= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            x(this, e, t, n, i - 1, -i);
        } var o = 0, s = 1, a = 0; for (this[t] = 255 & e; ++o < n && (s *= 256);)
            e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255; return t + n; }, u.prototype.writeIntBE = function (e, t, n, r) { if (e = +e, t |= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            x(this, e, t, n, i - 1, -i);
        } var o = n - 1, s = 1, a = 0; for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);)
            e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255; return t + n; }, u.prototype.writeInt8 = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1; }, u.prototype.writeInt16LE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2; }, u.prototype.writeInt16BE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2; }, u.prototype.writeInt32LE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : L(this, e, t, !0), t + 4; }, u.prototype.writeInt32BE = function (e, t, n) { return e = +e, t |= 0, n || x(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4; }, u.prototype.writeFloatLE = function (e, t, n) { return $(this, e, t, !0, n); }, u.prototype.writeFloatBE = function (e, t, n) { return $(this, e, t, !1, n); }, u.prototype.writeDoubleLE = function (e, t, n) { return M(this, e, t, !0, n); }, u.prototype.writeDoubleBE = function (e, t, n) { return M(this, e, t, !1, n); }, u.prototype.copy = function (e, t, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n)
            return 0; if (0 === e.length || 0 === this.length)
            return 0; if (t < 0)
            throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds"); if (r < 0)
            throw new RangeError("sourceEnd out of bounds"); r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n); var i, o = r - n; if (this === e && n < t && t < r)
            for (i = o - 1; i >= 0; --i)
                e[i + t] = this[i + n];
        else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i)
                e[i + t] = this[i + n];
        else
            Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t); return o; }, u.prototype.fill = function (e, t, n, r) { if ("string" == typeof e) {
            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
            }
            if (void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !u.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
        }
        else
            "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index"); if (n <= t)
            return this; var o; if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
            for (o = t; o < n; ++o)
                this[o] = e;
        else {
            var s = u.isBuffer(e) ? e : j(new u(e, r).toString()), a = s.length;
            for (o = 0; o < n - t; ++o)
                this[o + t] = s[o % a];
        } return this; };
        var F = /[^+\/0-9A-Za-z-_]/g;
        function j(e, t) { var n; t = t || 1 / 0; for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
            if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                if (!i) {
                    if (n > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    }
                    if (s + 1 === r) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    }
                    i = n;
                    continue;
                }
                if (n < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                    continue;
                }
                n = 65536 + (i - 55296 << 10 | n - 56320);
            }
            else
                i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, n < 128) {
                if ((t -= 1) < 0)
                    break;
                o.push(n);
            }
            else if (n < 2048) {
                if ((t -= 2) < 0)
                    break;
                o.push(n >> 6 | 192, 63 & n | 128);
            }
            else if (n < 65536) {
                if ((t -= 3) < 0)
                    break;
                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
            }
            else {
                if (!(n < 1114112))
                    throw new Error("Invalid code point");
                if ((t -= 4) < 0)
                    break;
                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
            }
        } return o; }
        function B(e) { return r.toByteArray(function (e) { if ((e = function (e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ""); }(e).replace(F, "")).length < 2)
            return ""; for (; e.length % 4 != 0;)
            e += "="; return e; }(e)); }
        function H(e, t, n, r) { for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
            t[i + n] = e[i]; return i; }
    }, 6489: function (e, t) {
        "use strict";
        t.Q = function (e, t) { if ("string" != typeof e)
            throw new TypeError("argument str must be a string"); for (var r = {}, o = t || {}, a = e.split(i), u = o.decode || n, c = 0; c < a.length; c++) {
            var l = a[c], f = l.indexOf("=");
            if (!(f < 0)) {
                var h = l.substr(0, f).trim(), d = l.substr(++f, l.length).trim();
                '"' == d[0] && (d = d.slice(1, -1)), null == r[h] && (r[h] = s(d, u));
            }
        } return r; }, t.q = function (e, t, n) { var i = n || {}, s = i.encode || r; if ("function" != typeof s)
            throw new TypeError("option encode is invalid"); if (!o.test(e))
            throw new TypeError("argument name is invalid"); var a = s(t); if (a && !o.test(a))
            throw new TypeError("argument val is invalid"); var u = e + "=" + a; if (null != i.maxAge) {
            var c = i.maxAge - 0;
            if (isNaN(c) || !isFinite(c))
                throw new TypeError("option maxAge is invalid");
            u += "; Max-Age=" + Math.floor(c);
        } if (i.domain) {
            if (!o.test(i.domain))
                throw new TypeError("option domain is invalid");
            u += "; Domain=" + i.domain;
        } if (i.path) {
            if (!o.test(i.path))
                throw new TypeError("option path is invalid");
            u += "; Path=" + i.path;
        } if (i.expires) {
            if ("function" != typeof i.expires.toUTCString)
                throw new TypeError("option expires is invalid");
            u += "; Expires=" + i.expires.toUTCString();
        } if (i.httpOnly && (u += "; HttpOnly"), i.secure && (u += "; Secure"), i.sameSite)
            switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                case !0:
                    u += "; SameSite=Strict";
                    break;
                case "lax":
                    u += "; SameSite=Lax";
                    break;
                case "strict":
                    u += "; SameSite=Strict";
                    break;
                case "none":
                    u += "; SameSite=None";
                    break;
                default: throw new TypeError("option sameSite is invalid");
            } return u; };
        var n = decodeURIComponent, r = encodeURIComponent, i = /; */, o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function s(e, t) { try {
            return t(e);
        }
        catch (t) {
            return e;
        } }
    }, 8249: function (e, t) { var n; e.exports = n = n || function (e, t) { var n = Object.create || function () { function e() { } return function (t) { var n; return e.prototype = t, n = new e, e.prototype = null, n; }; }(), r = {}, i = r.lib = {}, o = i.Base = { extend: function (e) { var t = n(this); return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () { t.$super.init.apply(this, arguments); }), t.init.prototype = t, t.$super = this, t; }, create: function () { var e = this.extend(); return e.init.apply(e, arguments), e; }, init: function () { }, mixIn: function (e) { for (var t in e)
            e.hasOwnProperty(t) && (this[t] = e[t]); e.hasOwnProperty("toString") && (this.toString = e.toString); }, clone: function () { return this.init.prototype.extend(this); } }, s = i.WordArray = o.extend({ init: function (e, t) { e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length; }, toString: function (e) { return (e || u).stringify(this); }, concat: function (e) { var t = this.words, n = e.words, r = this.sigBytes, i = e.sigBytes; if (this.clamp(), r % 4)
            for (var o = 0; o < i; o++) {
                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8;
            }
        else
            for (o = 0; o < i; o += 4)
                t[r + o >>> 2] = n[o >>> 2]; return this.sigBytes += i, this; }, clamp: function () { var t = this.words, n = this.sigBytes; t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4); }, clone: function () { var e = o.clone.call(this); return e.words = this.words.slice(0), e; }, random: function (t) { for (var n, r = [], i = function (t) { t = t; var n = 987654321, r = 4294967295; return function () { var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r; return i /= 4294967296, (i += .5) * (e.random() > .5 ? 1 : -1); }; }, o = 0; o < t; o += 4) {
            var a = i(4294967296 * (n || e.random()));
            n = 987654071 * a(), r.push(4294967296 * a() | 0);
        } return new s.init(r, t); } }), a = r.enc = {}, u = a.Hex = { stringify: function (e) { for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
        } return r.join(""); }, parse: function (e) { for (var t = e.length, n = [], r = 0; r < t; r += 2)
            n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4; return new s.init(n, t / 2); } }, c = a.Latin1 = { stringify: function (e) { for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push(String.fromCharCode(o));
        } return r.join(""); }, parse: function (e) { for (var t = e.length, n = [], r = 0; r < t; r++)
            n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8; return new s.init(n, t); } }, l = a.Utf8 = { stringify: function (e) { try {
            return decodeURIComponent(escape(c.stringify(e)));
        }
        catch (e) {
            throw new Error("Malformed UTF-8 data");
        } }, parse: function (e) { return c.parse(unescape(encodeURIComponent(e))); } }, f = i.BufferedBlockAlgorithm = o.extend({ reset: function () { this._data = new s.init, this._nDataBytes = 0; }, _append: function (e) { "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes; }, _process: function (t) { var n = this._data, r = n.words, i = n.sigBytes, o = this.blockSize, a = i / (4 * o), u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o, c = e.min(4 * u, i); if (u) {
            for (var l = 0; l < u; l += o)
                this._doProcessBlock(r, l);
            var f = r.splice(0, u);
            n.sigBytes -= c;
        } return new s.init(f, c); }, clone: function () { var e = o.clone.call(this); return e._data = this._data.clone(), e; }, _minBufferSize: 0 }), h = (i.Hasher = f.extend({ cfg: o.extend(), init: function (e) { this.cfg = this.cfg.extend(e), this.reset(); }, reset: function () { f.reset.call(this), this._doReset(); }, update: function (e) { return this._append(e), this._process(), this; }, finalize: function (e) { return e && this._append(e), this._doFinalize(); }, blockSize: 16, _createHelper: function (e) { return function (t, n) { return new e.init(n).finalize(t); }; }, _createHmacHelper: function (e) { return function (t, n) { return new h.HMAC.init(e, n).finalize(t); }; } }), r.algo = {}); return r; }(Math); }, 8269: function (e, t, n) { var r, i, o; e.exports = (r = n(8249), o = (i = r).lib.WordArray, i.enc.Base64 = { stringify: function (e) { var t = e.words, n = e.sigBytes, r = this._map; e.clamp(); for (var i = [], o = 0; o < n; o += 3)
            for (var s = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < n; a++)
                i.push(r.charAt(s >>> 6 * (3 - a) & 63)); var u = r.charAt(64); if (u)
            for (; i.length % 4;)
                i.push(u); return i.join(""); }, parse: function (e) { var t = e.length, n = this._map, r = this._reverseMap; if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++)
                r[n.charCodeAt(i)] = i;
        } var s = n.charAt(64); if (s) {
            var a = e.indexOf(s);
            -1 !== a && (t = a);
        } return function (e, t, n) { for (var r = [], i = 0, s = 0; s < t; s++)
            if (s % 4) {
                var a = n[e.charCodeAt(s - 1)] << s % 4 * 2, u = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
                r[i >>> 2] |= (a | u) << 24 - i % 4 * 8, i++;
            } return o.create(r, i); }(e, t, r); }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, r.enc.Base64); }, 8010: function (e, t, n) { var r; e.exports = (r = n(8249), n(2153), n(9824), r.HmacSHA256); }, 9824: function (e, t, n) { var r, i, o; e.exports = (i = (r = n(8249)).lib.Base, o = r.enc.Utf8, void (r.algo.HMAC = i.extend({ init: function (e, t) { e = this._hasher = new e.init, "string" == typeof t && (t = o.parse(t)); var n = e.blockSize, r = 4 * n; t.sigBytes > r && (t = e.finalize(t)), t.clamp(); for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, u = s.words, c = 0; c < n; c++)
            a[c] ^= 1549556828, u[c] ^= 909522486; i.sigBytes = s.sigBytes = r, this.reset(); }, reset: function () { var e = this._hasher; e.reset(), e.update(this._iKey); }, update: function (e) { return this._hasher.update(e), this; }, finalize: function (e) { var t = this._hasher, n = t.finalize(e); return t.reset(), t.finalize(this._oKey.clone().concat(n)); } }))); }, 4433: function (e, t, n) { var r; e.exports = (r = n(8249), function () { if ("function" == typeof ArrayBuffer) {
        var e = r.lib.WordArray, t = e.init;
        (e.init = function (e) { if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
            for (var n = e.byteLength, r = [], i = 0; i < n; i++)
                r[i >>> 2] |= e[i] << 24 - i % 4 * 8;
            t.call(this, r, n);
        }
        else
            t.apply(this, arguments); }).prototype = e;
    } }(), r.lib.WordArray); }, 2153: function (e, t, n) { var r; e.exports = (r = n(8249), function (e) { var t = r, n = t.lib, i = n.WordArray, o = n.Hasher, s = t.algo, a = [], u = []; !function () { function t(t) { for (var n = e.sqrt(t), r = 2; r <= n; r++)
        if (!(t % r))
            return !1; return !0; } function n(e) { return 4294967296 * (e - (0 | e)) | 0; } for (var r = 2, i = 0; i < 64;)
        t(r) && (i < 8 && (a[i] = n(e.pow(r, .5))), u[i] = n(e.pow(r, 1 / 3)), i++), r++; }(); var c = [], l = s.SHA256 = o.extend({ _doReset: function () { this._hash = new i.init(a.slice(0)); }, _doProcessBlock: function (e, t) { for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], l = n[5], f = n[6], h = n[7], d = 0; d < 64; d++) {
            if (d < 16)
                c[d] = 0 | e[t + d];
            else {
                var p = c[d - 15], g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3, y = c[d - 2], m = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
                c[d] = g + c[d - 7] + m + c[d - 16];
            }
            var v = r & i ^ r & o ^ i & o, w = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22), b = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & l ^ ~a & f) + u[d] + c[d];
            h = f, f = l, l = a, a = s + b | 0, s = o, o = i, i = r, r = b + (w + v) | 0;
        } n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + l | 0, n[6] = n[6] + f | 0, n[7] = n[7] + h | 0; }, _doFinalize: function () { var t = this._data, n = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes; return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash; }, clone: function () { var e = o.clone.call(this); return e._hash = this._hash.clone(), e; } }); t.SHA256 = o._createHelper(l), t.HmacSHA256 = o._createHmacHelper(l); }(Math), r.SHA256); }, 645: function (e, t) { t.read = function (e, t, n, r, i) { var o, s, a = 8 * i - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = n ? i - 1 : 0, h = n ? -1 : 1, d = e[t + f]; for (f += h, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + e[t + f], f += h, l -= 8)
        ; for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + f], f += h, l -= 8)
        ; if (0 === o)
        o = 1 - c;
    else {
        if (o === u)
            return s ? NaN : 1 / 0 * (d ? -1 : 1);
        s += Math.pow(2, r), o -= c;
    } return (d ? -1 : 1) * s * Math.pow(2, o - r); }, t.write = function (e, t, n, r, i, o) { var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, f = l >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, p = r ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & a, d += p, a /= 256, i -= 8)
        ; for (s = s << i | a, c += i; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8)
        ; e[n + d - p] |= 128 * g; }; }, 5826: function (e) { var t = {}.toString; e.exports = Array.isArray || function (e) { return "[object Array]" == t.call(e); }; }, 204: function (e, t, n) { e.exports = self.fetch || (self.fetch = n(5869).default || n(5869)); }, 6808: function (e, t, n) { var r, i, o; void 0 === (i = "function" == typeof (r = o = function () { function e() { for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
            t[r] = n[r];
    } return t; } function t(e) { return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent); } return function n(r) { function i() { } function o(t, n, o) { if ("undefined" != typeof document) {
        "number" == typeof (o = e({ path: "/" }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
        try {
            var s = JSON.stringify(n);
            /^[\{\[]/.test(s) && (n = s);
        }
        catch (e) { }
        n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var a = "";
        for (var u in o)
            o[u] && (a += "; " + u, !0 !== o[u] && (a += "=" + o[u].split(";")[0]));
        return document.cookie = t + "=" + n + a;
    } } function s(e, n) { if ("undefined" != typeof document) {
        for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
            var a = o[s].split("="), u = a.slice(1).join("=");
            n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
            try {
                var c = t(a[0]);
                if (u = (r.read || r)(u, c) || t(u), n)
                    try {
                        u = JSON.parse(u);
                    }
                    catch (e) { }
                if (i[c] = u, e === c)
                    break;
            }
            catch (e) { }
        }
        return e ? i[e] : i;
    } } return i.set = o, i.get = function (e) { return s(e, !1); }, i.getJSON = function (e) { return s(e, !0); }, i.remove = function (t, n) { o(t, "", e(n, { expires: -1 })); }, i.defaults = {}, i.withConverter = n, i; }((function () { })); }) ? r.call(t, n, t, e) : r) || (e.exports = i), e.exports = o(); }, 2587: function (e) {
        "use strict";
        function t(e, t) { return Object.prototype.hasOwnProperty.call(e, t); }
        e.exports = function (e, n, r, i) { n = n || "&", r = r || "="; var o = {}; if ("string" != typeof e || 0 === e.length)
            return o; var s = /\+/g; e = e.split(n); var a = 1e3; i && "number" == typeof i.maxKeys && (a = i.maxKeys); var u = e.length; a > 0 && u > a && (u = a); for (var c = 0; c < u; ++c) {
            var l, f, h, d, p = e[c].replace(s, "%20"), g = p.indexOf(r);
            g >= 0 ? (l = p.substr(0, g), f = p.substr(g + 1)) : (l = p, f = ""), h = decodeURIComponent(l), d = decodeURIComponent(f), t(o, h) ? Array.isArray(o[h]) ? o[h].push(d) : o[h] = [o[h], d] : o[h] = d;
        } return o; };
    }, 2361: function (e) {
        "use strict";
        var t = function (e) { switch (typeof e) {
            case "string": return e;
            case "boolean": return e ? "true" : "false";
            case "number": return isFinite(e) ? e : "";
            default: return "";
        } };
        e.exports = function (e, n, r, i) { return n = n || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map((function (i) { var o = encodeURIComponent(t(i)) + r; return Array.isArray(e[i]) ? e[i].map((function (e) { return o + encodeURIComponent(t(e)); })).join(n) : o + encodeURIComponent(t(e[i])); })).join(n) : i ? encodeURIComponent(t(i)) + r + encodeURIComponent(t(e)) : ""; };
    }, 7673: function (e, t, n) {
        "use strict";
        t.decode = t.parse = n(2587), t.encode = t.stringify = n(2361);
    }, 655: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, { __extends: function () { return i; }, __assign: function () { return o; }, __rest: function () { return s; }, __decorate: function () { return a; }, __param: function () { return u; }, __metadata: function () { return c; }, __awaiter: function () { return l; }, __generator: function () { return f; }, __createBinding: function () { return h; }, __exportStar: function () { return d; }, __values: function () { return p; }, __read: function () { return g; }, __spread: function () { return y; }, __spreadArrays: function () { return m; }, __await: function () { return v; }, __asyncGenerator: function () { return w; }, __asyncDelegator: function () { return b; }, __asyncValues: function () { return _; }, __makeTemplateObject: function () { return S; }, __importStar: function () { return A; }, __importDefault: function () { return E; }, __classPrivateFieldGet: function () { return C; }, __classPrivateFieldSet: function () { return I; } });
        var r = function (e, t) { return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); };
        function i(e, t) { function n() { this.constructor = e; } r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }
        var o = function () { return (o = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
        function s(e, t) { var n = {}; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        } return n; }
        function a(e, t, n, r) { var i, o = arguments.length, s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, n, r);
        else
            for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s); return o > 3 && s && Object.defineProperty(t, n, s), s; }
        function u(e, t) { return function (n, r) { t(n, r, e); }; }
        function c(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(e, t); }
        function l(e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function s(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function a(e) { try {
            u(r.throw(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } u((r = r.apply(e, t || [])).next()); })); }
        function f(e, t) { var n, r, i, o, s = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function a(o) { return function (a) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return s.label++, { value: o[1], done: !1 };
                    case 5:
                        s.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                        }
                        if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                o = t.call(e, s);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, a]); }; } }
        function h(e, t, n, r) { void 0 === r && (r = n), e[r] = t[n]; }
        function d(e, t) { for (var n in e)
            "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]); }
        function p(e) { var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0; if (n)
            return n.call(e); if (e && "number" == typeof e.length)
            return { next: function () { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined."); }
        function g(e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n)
            return e; var r, i, o = n.call(e), s = []; try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)
                s.push(r.value);
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
        } return s; }
        function y() { for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(g(arguments[t])); return e; }
        function m() { for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length; var r = Array(e), i = 0; for (t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
                r[i] = o[s]; return r; }
        function v(e) { return this instanceof v ? (this.v = e, this) : new v(e); }
        function w(e, t, n) { if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined."); var r, i = n.apply(e, t || []), o = []; return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function () { return this; }, r; function s(e) { i[e] && (r[e] = function (t) { return new Promise((function (n, r) { o.push([e, t, n, r]) > 1 || a(e, t); })); }); } function a(e, t) { try {
            (n = i[e](t)).value instanceof v ? Promise.resolve(n.value.v).then(u, c) : l(o[0][2], n);
        }
        catch (e) {
            l(o[0][3], e);
        } var n; } function u(e) { a("next", e); } function c(e) { a("throw", e); } function l(e, t) { e(t), o.shift(), o.length && a(o[0][0], o[0][1]); } }
        function b(e) { var t, n; return t = {}, r("next"), r("throw", (function (e) { throw e; })), r("return"), t[Symbol.iterator] = function () { return this; }, t; function r(r, i) { t[r] = e[r] ? function (t) { return (n = !n) ? { value: v(e[r](t)), done: "return" === r } : i ? i(t) : t; } : i; } }
        function _(e) { if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined."); var t, n = e[Symbol.asyncIterator]; return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () { return this; }, t); function r(n) { t[n] = e[n] && function (t) { return new Promise((function (r, i) { !function (e, t, n, r) { Promise.resolve(r).then((function (t) { e({ value: t, done: n }); }), t); }(r, i, (t = e[n](t)).done, t.value); })); }; } }
        function S(e, t) { return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e; }
        function A(e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t; }
        function E(e) { return e && e.__esModule ? e : { default: e }; }
        function C(e, t) { if (!t.has(e))
            throw new TypeError("attempted to get private field on non-instance"); return t.get(e); }
        function I(e, t, n) { if (!t.has(e))
            throw new TypeError("attempted to set private field on non-instance"); return t.set(e, n), n; }
    }, 5869: function (e, t, n) {
        "use strict";
        function r(e, t) { return t = t || {}, new Promise((function (n, r) { var i = new XMLHttpRequest, o = [], s = [], a = {}, u = function () { return { ok: 2 == (i.status / 100 | 0), statusText: i.statusText, status: i.status, url: i.responseURL, text: function () { return Promise.resolve(i.responseText); }, json: function () { return Promise.resolve(i.responseText).then(JSON.parse); }, blob: function () { return Promise.resolve(new Blob([i.response])); }, clone: u, headers: { keys: function () { return o; }, entries: function () { return s; }, get: function (e) { return a[e.toLowerCase()]; }, has: function (e) { return e.toLowerCase() in a; } } }; }; for (var c in i.open(t.method || "get", e, !0), i.onload = function () { i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function (e, t, n) { o.push(t = t.toLowerCase()), s.push([t, n]), a[t] = a[t] ? a[t] + "," + n : n; })), n(u()); }, i.onerror = r, i.withCredentials = "include" == t.credentials, t.headers)
            i.setRequestHeader(c, t.headers[c]); i.send(t.body || null); })); }
        n.r(t), n.d(t, { default: function () { return r; } });
    }, 2511: function (e, t, n) { var r; e = n.nmd(e), function (i) { t && t.nodeType, e && e.nodeType; var o = "object" == typeof n.g && n.g; o.global !== o && o.window !== o && o.self; var s, a = 2147483647, u = 36, c = /^xn--/, l = /[^\x20-\x7E]/, f = /[\x2E\u3002\uFF0E\uFF61]/g, h = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, d = Math.floor, p = String.fromCharCode; function g(e) { throw RangeError(h[e]); } function y(e, t) { for (var n = e.length, r = []; n--;)
        r[n] = t(e[n]); return r; } function m(e, t) { var n = e.split("@"), r = ""; return n.length > 1 && (r = n[0] + "@", e = n[1]), r + y((e = e.replace(f, ".")).split("."), t).join("."); } function v(e) { for (var t, n, r = [], i = 0, o = e.length; i < o;)
        (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t); return r; } function w(e) { return y(e, (function (e) { var t = ""; return e > 65535 && (t += p((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + p(e); })).join(""); } function b(e, t) { return e + 22 + 75 * (e < 26) - ((0 != t) << 5); } function _(e, t, n) { var r = 0; for (e = n ? d(e / 700) : e >> 1, e += d(e / t); e > 455; r += u)
        e = d(e / 35); return d(r + 36 * e / (e + 38)); } function S(e) { var t, n, r, i, o, s, c, l, f, h, p, y = [], m = e.length, v = 0, b = 128, S = 72; for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r)
        e.charCodeAt(r) >= 128 && g("not-basic"), y.push(e.charCodeAt(r)); for (i = n > 0 ? n + 1 : 0; i < m;) {
        for (o = v, s = 1, c = u; i >= m && g("invalid-input"), ((l = (p = e.charCodeAt(i++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : u) >= u || l > d((a - v) / s)) && g("overflow"), v += l * s, !(l < (f = c <= S ? 1 : c >= S + 26 ? 26 : c - S)); c += u)
            s > d(a / (h = u - f)) && g("overflow"), s *= h;
        S = _(v - o, t = y.length + 1, 0 == o), d(v / t) > a - b && g("overflow"), b += d(v / t), v %= t, y.splice(v++, 0, b);
    } return w(y); } function A(e) { var t, n, r, i, o, s, c, l, f, h, y, m, w, S, A, E = []; for (m = (e = v(e)).length, t = 128, n = 0, o = 72, s = 0; s < m; ++s)
        (y = e[s]) < 128 && E.push(p(y)); for (r = i = E.length, i && E.push("-"); r < m;) {
        for (c = a, s = 0; s < m; ++s)
            (y = e[s]) >= t && y < c && (c = y);
        for (c - t > d((a - n) / (w = r + 1)) && g("overflow"), n += (c - t) * w, t = c, s = 0; s < m; ++s)
            if ((y = e[s]) < t && ++n > a && g("overflow"), y == t) {
                for (l = n, f = u; !(l < (h = f <= o ? 1 : f >= o + 26 ? 26 : f - o)); f += u)
                    A = l - h, S = u - h, E.push(p(b(h + A % S, 0))), l = d(A / S);
                E.push(p(b(l, 0))), o = _(n, w, r == i), n = 0, ++r;
            }
        ++n, ++t;
    } return E.join(""); } s = { version: "1.3.2", ucs2: { decode: v, encode: w }, decode: S, encode: A, toASCII: function (e) { return m(e, (function (e) { return l.test(e) ? "xn--" + A(e) : e; })); }, toUnicode: function (e) { return m(e, (function (e) { return c.test(e) ? S(e.slice(4).toLowerCase()) : e; })); } }, void 0 === (r = function () { return s; }.call(t, n, t, e)) || (e.exports = r); }(); }, 8575: function (e, t, n) {
        "use strict";
        var r = n(2511), i = n(2502);
        function o() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null; }
        t.Qc = w;
        var s = /^([a-z0-9.+-]+:)/i, a = /:[0-9]*$/, u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), l = ["'"].concat(c), f = ["%", "/", "?", ";", "#"].concat(l), h = ["/", "?", "#"], d = /^[+a-z0-9A-Z_-]{0,63}$/, p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, g = { javascript: !0, "javascript:": !0 }, y = { javascript: !0, "javascript:": !0 }, m = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, v = n(7673);
        function w(e, t, n) { if (e && i.isObject(e) && e instanceof o)
            return e; var r = new o; return r.parse(e, t, n), r; }
        o.prototype.parse = function (e, t, n) { if (!i.isString(e))
            throw new TypeError("Parameter 'url' must be a string, not " + typeof e); var o = e.indexOf("?"), a = -1 !== o && o < e.indexOf("#") ? "?" : "#", c = e.split(a); c[0] = c[0].replace(/\\/g, "/"); var w = e = c.join(a); if (w = w.trim(), !n && 1 === e.split("#").length) {
            var b = u.exec(w);
            if (b)
                return this.path = w, this.href = w, this.pathname = b[1], b[2] ? (this.search = b[2], this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
        } var _ = s.exec(w); if (_) {
            var S = (_ = _[0]).toLowerCase();
            this.protocol = S, w = w.substr(_.length);
        } if (n || _ || w.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var A = "//" === w.substr(0, 2);
            !A || _ && y[_] || (w = w.substr(2), this.slashes = !0);
        } if (!y[_] && (A || _ && !m[_])) {
            for (var E, C, I = -1, T = 0; T < h.length; T++)
                -1 !== (P = w.indexOf(h[T])) && (-1 === I || P < I) && (I = P);
            for (-1 !== (C = -1 === I ? w.lastIndexOf("@") : w.lastIndexOf("@", I)) && (E = w.slice(0, C), w = w.slice(C + 1), this.auth = decodeURIComponent(E)), I = -1, T = 0; T < f.length; T++) {
                var P;
                -1 !== (P = w.indexOf(f[T])) && (-1 === I || P < I) && (I = P);
            }
            -1 === I && (I = w.length), this.host = w.slice(0, I), w = w.slice(I), this.parseHost(), this.hostname = this.hostname || "";
            var U = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!U)
                for (var O = this.hostname.split(/\./), R = (T = 0, O.length); T < R; T++) {
                    var k = O[T];
                    if (k && !k.match(d)) {
                        for (var x = "", D = 0, L = k.length; D < L; D++)
                            k.charCodeAt(D) > 127 ? x += "x" : x += k[D];
                        if (!x.match(d)) {
                            var N = O.slice(0, T), $ = O.slice(T + 1), M = k.match(p);
                            M && (N.push(M[1]), $.unshift(M[2])), $.length && (w = "/" + $.join(".") + w), this.hostname = N.join(".");
                            break;
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), U || (this.hostname = r.toASCII(this.hostname));
            var F = this.port ? ":" + this.port : "", j = this.hostname || "";
            this.host = j + F, this.href += this.host, U && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== w[0] && (w = "/" + w));
        } if (!g[S])
            for (T = 0, R = l.length; T < R; T++) {
                var B = l[T];
                if (-1 !== w.indexOf(B)) {
                    var H = encodeURIComponent(B);
                    H === B && (H = escape(B)), w = w.split(B).join(H);
                }
            } var q = w.indexOf("#"); -1 !== q && (this.hash = w.substr(q), w = w.slice(0, q)); var K = w.indexOf("?"); if (-1 !== K ? (this.search = w.substr(K), this.query = w.substr(K + 1), t && (this.query = v.parse(this.query)), w = w.slice(0, K)) : t && (this.search = "", this.query = {}), w && (this.pathname = w), m[S] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            F = this.pathname || "";
            var V = this.search || "";
            this.path = F + V;
        } return this.href = this.format(), this; }, o.prototype.format = function () { var e = this.auth || ""; e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@"); var t = this.protocol || "", n = this.pathname || "", r = this.hash || "", o = !1, s = ""; this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (s = v.stringify(this.query)); var a = this.search || s && "?" + s || ""; return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || m[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), t + o + (n = n.replace(/[?#]/g, (function (e) { return encodeURIComponent(e); }))) + (a = a.replace("#", "%23")) + r; }, o.prototype.resolve = function (e) { return this.resolveObject(w(e, !1, !0)).format(); }, o.prototype.resolveObject = function (e) { if (i.isString(e)) {
            var t = new o;
            t.parse(e, !1, !0), e = t;
        } for (var n = new o, r = Object.keys(this), s = 0; s < r.length; s++) {
            var a = r[s];
            n[a] = this[a];
        } if (n.hash = e.hash, "" === e.href)
            return n.href = n.format(), n; if (e.slashes && !e.protocol) {
            for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                var l = u[c];
                "protocol" !== l && (n[l] = e[l]);
            }
            return m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
        } if (e.protocol && e.protocol !== n.protocol) {
            if (!m[e.protocol]) {
                for (var f = Object.keys(e), h = 0; h < f.length; h++) {
                    var d = f[h];
                    n[d] = e[d];
                }
                return n.href = n.format(), n;
            }
            if (n.protocol = e.protocol, e.host || y[e.protocol])
                n.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift());)
                    ;
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/");
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var g = n.pathname || "", v = n.search || "";
                n.path = g + v;
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
        } var w = n.pathname && "/" === n.pathname.charAt(0), b = e.host || e.pathname && "/" === e.pathname.charAt(0), _ = b || w || n.host && e.pathname, S = _, A = n.pathname && n.pathname.split("/") || [], E = (p = e.pathname && e.pathname.split("/") || [], n.protocol && !m[n.protocol]); if (E && (n.hostname = "", n.port = null, n.host && ("" === A[0] ? A[0] = n.host : A.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), _ = _ && ("" === p[0] || "" === A[0])), b)
            n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, A = p;
        else if (p.length)
            A || (A = []), A.pop(), A = A.concat(p), n.search = e.search, n.query = e.query;
        else if (!i.isNullOrUndefined(e.search))
            return E && (n.hostname = n.host = A.shift(), (U = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = U.shift(), n.host = n.hostname = U.shift())), n.search = e.search, n.query = e.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n; if (!A.length)
            return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n; for (var C = A.slice(-1)[0], I = (n.host || e.host || A.length > 1) && ("." === C || ".." === C) || "" === C, T = 0, P = A.length; P >= 0; P--)
            "." === (C = A[P]) ? A.splice(P, 1) : ".." === C ? (A.splice(P, 1), T++) : T && (A.splice(P, 1), T--); if (!_ && !S)
            for (; T--; T)
                A.unshift(".."); !_ || "" === A[0] || A[0] && "/" === A[0].charAt(0) || A.unshift(""), I && "/" !== A.join("/").substr(-1) && A.push(""); var U, O = "" === A[0] || A[0] && "/" === A[0].charAt(0); return E && (n.hostname = n.host = O ? "" : A.length ? A.shift() : "", (U = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = U.shift(), n.host = n.hostname = U.shift())), (_ = _ || n.host && A.length) && !O && A.unshift(""), A.length ? n.pathname = A.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n; }, o.prototype.parseHost = function () { var e = this.host, t = a.exec(e); t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e); };
    }, 2502: function (e) {
        "use strict";
        e.exports = { isString: function (e) { return "string" == typeof e; }, isObject: function (e) { return "object" == typeof e && null !== e; }, isNull: function (e) { return null === e; }, isNullOrUndefined: function (e) { return null == e; } };
    }, 153: function (e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) { void 0 === r && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function () { return t[n]; } }); } : function (e, t, n, r) { void 0 === r && (r = n), e[r] = t[n]; }), i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }); } : function (e, t) { e.default = t; }), o = this && this.__importStar || function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var n in e)
                "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n); return i(t, e), t; }, s = this && this.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = o(n(804)), u = n(196), c = s(n(930));
        u.render(a.createElement(a.Fragment, null, " ", a.createElement(c.default, null), " "), document.querySelector("#app"));
    }, 930: function (e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(n(804)), o = n(3908);
        t.default = o.withAuthenticator((function (e) { return i.default.createElement("div", { classname: "App" }, i.default.createElement("p", null, "Hello World... With Auth"), i.default.createElement(o.AmplifySignout, null)); }));
    }, 804: function (e) {
        "use strict";
        e.exports = React;
    }, 196: function (e) {
        "use strict";
        e.exports = ReactDOM;
    } }, o = {}; function s(e) { if (o[e])
    return o[e].exports; var t = o[e] = { id: e, loaded: !1, exports: {} }; return i[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports; } s.m = i, s.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return s.d(t, { a: t }), t; }, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, s.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
    return n; if ("object" == typeof n && n) {
    if (4 & r && n.__esModule)
        return n;
    if (16 & r && "function" == typeof n.then)
        return n;
} var i = Object.create(null); s.r(i); var o = {}; e = e || [null, t({}), t([]), t(t)]; for (var a = 2 & r && n; "object" == typeof a && !~e.indexOf(a); a = t(a))
    Object.getOwnPropertyNames(a).forEach((function (e) { return o[e] = function () { return n[e]; }; })); return o.default = function () { return n; }, s.d(i, o), i; }, s.d = function (e, t) { for (var n in t)
    s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, s.f = {}, s.e = function (e) { return Promise.all(Object.keys(s.f).reduce((function (t, n) { return (s.f[n](e, t), t); }), [])); }, s.u = function (e) { return e + ".app.js"; }, s.g = function () { if ("object" == typeof globalThis)
    return globalThis; try {
    return this || new Function("return this")();
}
catch (e) {
    if ("object" == typeof window)
        return window;
} }(), s.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "test:", s.l = function (e, t, i) { if (n[e])
    n[e].push(t);
else {
    var o, a;
    if (void 0 !== i)
        for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
            var l = u[c];
            if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + i) {
                o = l;
                break;
            }
        }
    o || (a = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, s.nc && o.setAttribute("nonce", s.nc), o.setAttribute("data-webpack", r + i), o.src = e), n[e] = [t];
    var f = function (t, r) { o.onerror = o.onload = null, clearTimeout(h); var i = n[e]; if (delete n[e], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((function (e) { return e(r); })), t)
        return t(r); }, h = setTimeout(f.bind(null, void 0, { type: "timeout", target: o }), 12e4);
    o.onerror = f.bind(null, o.onerror), o.onload = f.bind(null, o.onload), a && document.head.appendChild(o);
} }, s.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, s.nmd = function (e) { return (e.paths = [], e.children || (e.children = []), e); }, (function () { var e; s.g.importScripts && (e = s.g.location + ""); var t = s.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
    var n = t.getElementsByTagName("script");
    n.length && (e = n[n.length - 1].src);
} if (!e)
    throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e; })(), (function () { var e = { 179: 0 }; s.f.j = function (t, n) { var r = s.o(e, t) ? e[t] : void 0; if (0 !== r)
    if (r)
        n.push(r[2]);
    else {
        var i = new Promise((function (n, i) { r = e[t] = [n, i]; }));
        n.push(r[2] = i);
        var o = s.p + s.u(t), a = new Error;
        s.l(o, (function (n) { if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
            var i = n && ("load" === n.type ? "missing" : n.type), o = n && n.target && n.target.src;
            a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", a.name = "ChunkLoadError", a.type = i, a.request = o, r[1](a);
        } }), "chunk-" + t);
    } }; var t = function (t, n) { for (var r, i, o = n[0], a = n[1], u = n[2], c = 0, l = []; c < o.length; c++)
    i = o[c], s.o(e, i) && e[i] && l.push(e[i][0]), e[i] = 0; for (r in a)
    s.o(a, r) && (s.m[r] = a[r]); for (u && u(s), t && t(n); l.length;)
    l.shift()(); }, n = self.webpackChunktest = self.webpackChunktest || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })(), s(153); })();
