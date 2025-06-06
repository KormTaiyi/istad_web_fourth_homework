import { renderProducts } from './pages/products';

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');
  if (app) {
    const productsElement = await renderProducts();
    app.appendChild(productsElement);
  }
});
