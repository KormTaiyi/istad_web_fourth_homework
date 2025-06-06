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
exports.renderProducts = renderProducts;
const api_1 = require("../api");
const Card_1 = require("../components/Card");
function renderProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.createElement('div');
        container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4';
        try {
            const products = yield (0, api_1.fetchProducts)();
            products.forEach(product => {
                const cardElement = (0, Card_1.Card)(product);
                container.appendChild(cardElement);
            });
        }
        catch (error) {
            console.error('Error fetching products:', error);
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'Failed to load products.';
            container.appendChild(errorMsg);
        }
        return container;
    });
}
