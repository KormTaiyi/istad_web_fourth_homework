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
exports.Card = Card;
const api_1 = require("../api");
function Card(category) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield (0, api_1.fetchProducts)();
            let products = Array.isArray(res) ? res : res.products;
            if (category) {
                products = products.filter((product) => product.category === category);
            }
            if (!products || products.length === 0) {
                const emptyDiv = document.createElement("div");
                emptyDiv.textContent = "No products available.";
                return emptyDiv;
            }
            const container = document.createElement("div");
            container.className =
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4";
            products.forEach((product) => {
                const card = document.createElement("div");
                card.className =
                    "flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl";
                card.innerHTML = `
        <img class="w-full h-48 object-cover rounded-t-xl" src="${product.image}" alt="${product.title}">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">${product.title}</h3>
          <p class="mt-1 text-gray-500">${product.description.slice(0, 100)}...</p>
          <p class="mt-1 text-sm text-blue-600 font-semibold">$${product.price}</p>
          <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700" href="#">Buy Now</a>
        </div>
      `;
                container.appendChild(card);
            });
            return container;
        }
        catch (error) {
            console.error("Failed to fetch products:", error);
            const errorDiv = document.createElement("div");
            errorDiv.textContent = "Failed to load products.";
            return errorDiv;
        }
    });
}
