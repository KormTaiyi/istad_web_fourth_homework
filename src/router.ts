import { createLayout } from './layout';
import { renderAbout } from './pages/about';
import { renderContact } from './pages/contact';
import { renderHome } from './pages/home';
import { renderNotFound } from './pages/notfound';
import { renderProduct } from './pages/products';

export function initRouter(): void {
    window.addEventListener('popstate', renderRoute);

    document.addEventListener('click', e => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' && target.hasAttribute('data-link')) {
            e.preventDefault();
            const href = target.getAttribute('href')!;
            history.pushState(null, '', href);
            renderRoute();
        }
    });
    renderRoute();
}

function renderRoute(): void {
    const pathname = window.location.pathname;

    let contentFn: () => HTMLElement;

    switch (pathname) {
        case '/':
            contentFn = renderHome;
            break;
        case '/about':
            contentFn = renderAbout;
            break;
        case '/product':
            contentFn = renderProduct;
            break;
        case '/contact':
            contentFn = renderContact;
            break;
        default:
            contentFn = renderNotFound;
            break;
    }

    createLayout(contentFn);
}
