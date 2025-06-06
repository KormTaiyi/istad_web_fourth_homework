import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function createLayout(contentFn: () => Promise<HTMLElement>) {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = '';
  app.appendChild(Header());

  contentFn().then(content => {
    app.appendChild(content);
    app.appendChild(Footer());
  });
}
