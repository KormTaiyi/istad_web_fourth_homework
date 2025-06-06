import { fetchProducts } from "../api";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  category?: string;
}

export async function Card(category?: string): Promise<HTMLElement[]> {
  try {
    const res = await fetchProducts();
    let products: Product[] = Array.isArray(res) ? res : res.products;

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    if (!products || products.length === 0) {
      const emptyDiv = document.createElement("div");
      emptyDiv.textContent = "No products available.";
      return [emptyDiv];
    }

    return products.map((product) => {
      const card = document.createElement("div");
      card.className = "bg-white border border-gray-200 shadow-xl rounded-xl";
      card.innerHTML = `
        <img class="w-full h-52 object-contain rounded-t-xl" src="${product.image}" alt="${product.title}">
        <div class="p-4">
          <h3 class="text-lg font-bold text-gray-800">${product.title.slice(0,40)}...</h3>
          <p class="mt-1 text-gray-500">${product.description.slice(0,60)}...</p>
          <p class="mt-1 text-sm text-blue-600 font-semibold">$${product.price}</p>
          <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700" href="#">Buy Now</a>
        </div>
      `;
      return card;
    });
  } catch (error) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = "Failed to load products.";
    return [errorDiv];
  }
}