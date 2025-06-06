"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRouter = initRouter;
const layout_1 = require("./layout");
const about_1 = require("./pages/about");
const contact_1 = require("./pages/contact");
const home_1 = require("./pages/home");
const notfound_1 = require("./pages/notfound");
const products_1 = require("./pages/products");
function initRouter() {
    window.addEventListener('popstate', renderRoute);
    document.addEventListener('click', e => {
        const target = e.target;
        if (target.tagName === 'A' && target.hasAttribute('data-link')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            history.pushState(null, '', href);
            renderRoute();
        }
    });
    renderRoute();
}
function renderRoute() {
    const pathname = window.location.pathname;
    let contentFn;
    switch (pathname) {
        case '/':
            contentFn = home_1.renderHome;
            break;
        case '/about':
            contentFn = about_1.renderAbout;
            break;
        case '/product':
            contentFn = products_1.renderProducts;
            break;
        case '/contact':
            contentFn = contact_1.renderContact;
            break;
        default:
            contentFn = notfound_1.renderNotFound;
            break;
    }
    (0, layout_1.createLayout)(contentFn);
}
