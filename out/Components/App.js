"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ui_react_1 = require("@aws-amplify/ui-react");
var App = function (_a) {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("p", null, "Hello World... With Auth"),
        react_1.default.createElement(ui_react_1.AmplifySignOut, null)));
};
exports.default = ui_react_1.withAuthenticator(App);
