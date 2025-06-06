import { fetchProducts } from '../api';
import { Card } from '../components/Card';

export async function renderProducts(): Promise<HTMLElement> {
  const container = document.createElement('div');
  container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4';

  try {
    const products = await fetchProducts();
    products.forEach(product => {
      const cardElement = Card(product);
      container.appendChild(cardElement);
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Failed to load products.';
    container.appendChild(errorMsg);
  }

  return container;
}
