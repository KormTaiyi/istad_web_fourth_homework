"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLayout = createLayout;
exports.renderHome = renderHome;
const Header_1 = require("./components/Header");
const Footer_1 = require("./components/Footer");
function createLayout(contentFn) {
    const app = document.getElementById('app');
    if (!app)
        return;
    app.innerHTML = '';
    app.appendChild((0, Header_1.Header)());
    Promise.resolve(contentFn()).then(content => {
        app.appendChild(content);
        app.appendChild((0, Footer_1.Footer)());
    });
}
function renderHome() {
    return __awaiter(this, void 0, void 0, function* () {
        const div = document.createElement('div');
        div.innerHTML = '<h1>Home Page</h1>';
        return div;
    });
}
