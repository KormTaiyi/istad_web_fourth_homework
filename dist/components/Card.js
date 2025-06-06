"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
function Card(product) {
    const card = document.createElement('div');
    card.className = 'flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70';
    card.innerHTML = `
    <img class="w-full h-48 object-cover rounded-t-xl" src="${product.image}" alt="${product.title}">
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">${product.title}</h3>
      <p class="mt-1 text-gray-500 dark:text-neutral-400">${product.description.slice(0, 100)}...</p>
      <p class="mt-1 text-sm text-blue-600 font-semibold">$${product.price}</p>
      <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700" href="#">Buy Now</a>
    </div>
  `;
    return card;
}
