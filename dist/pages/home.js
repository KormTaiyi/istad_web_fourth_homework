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
exports.renderHome = renderHome;
const Card_1 = require("../components/Card");
function renderHome() {
    return __awaiter(this, void 0, void 0, function* () {
        const cart = yield (0, Card_1.Card)();
        const div = document.createElement("div");
        div.innerHTML = `
    <section class="w-full bg-gray-700 py-9 px-8">
      <div class="mx-auto flex flex-col items-center lg:flex-row justify-center gap-10 py-40 max-w-7xl">
        <div class="flex-col justify-center items-start gap-10 inline-flex">
          <div class="w-full lg:max-w-2xl self-stretch flex-col justify-start items-start gap-5 flex">
            <h1 class="self-stretch">
            <span class="text-white text-3xl md:text-5xl font-bold font-['Roboto']">Discover the Latest Gadgets, Devices & Accessories</span>
            </h1>
            <p class="self-stretch text-gray-400 text-lg font-normal font-['Roboto']">
                From cutting-edge smartphones to powerful laptops and must-have accessories find everything you need, all in one place. Trusted brands. Unbeatable prices. Fast delivery.</br>
            </p>
          </div>
          <button class=" text-white text-sm font-semibold font-['Roboto']">
            <a href="/product" class="px-5 py-2.5 bg-gray-500 rounded-[10px]">Shop now</a>
          </button>
        </div>
        <img class="w-full max-w-[400px]" src="https://www.att.com/scmsassets/global/accessories/audio/apple/airpods-max/defaultimage/pink-hero-zoom.png" alt="">
      </div>
    </section>

    <section class="py-10 bg-gray-100">
        <div class="text-center mb-10">
          <div class="inline-block border-[1px] border-gray-400 py-1 px-4 rounded-2xl mb-4">Why Choose Us</div>
          <h2 class="text-4xl font-semibold mb-4">Your Trusted Tech Partner</h2>
          <p>We're committed to providing you with the best technology shopping experience.</br> Here's what makes us different from the rest.</p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3 text-center px-4 sm:px-6">
          <div class="px-2 py-6 shadow-2xl rounded-xl">
            <div class="text-3xl text-red-500"><i class="fa-solid fa-heart"></i></div>
            <h1 class="text-xl font-semibold my-2">Customer Satisfaction</h1>
            <p>Over 50,000 happy customers with 4.9/5 rating and hassle-free returns.</p>
          </div>
          <div class="px-2 py-6 shadow-2xl rounded-xl">
            <div class="text-3xl text-green-500"><i class="fa-solid fa-phone"></i></div>
            <h1 class="text-xl font-semibold my-2">24/7 Support</h1>
            <p>Round-the-clock customer service to help you with any questions or concerns.</p>
          </div>
          <div class="px-2 py-6 shadow-2xl rounded-xl">
            <div class="text-3xl text-blue-500"><i class="fa-solid fa-truck-fast"></i></div>
            <h1 class="text-xl font-semibold my-2">Fast Delivery</h1>
            <p>Get your gadgets delivered within 24-48 hours with our express shipping service.</p>
          </div>
        </div>
    </section>
    <section class="py-10">
        <div>
            <div class="mb-10 text-center">
                <div class="inline-block border-[1px] border-gray-400 py-1 px-4 rounded-2xl mb-4">Shop by Category</div>
                <h2 class="text-4xl font-semibold mb-4">Find Your Perfect Gadget</h2>
                <p>Browse through our carefully curated categories and discover the latest in technology.</br> From everyday essentials to cutting-edge innovations.</p>
            </div>
            <div class="mb-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-2 gap-4" id="card-container">
              
            </div>
            <div class="text-center">
              <a href="/product" class="px-5 py-2 rounded border-blue-500 text-blue-500 border-2">View All Categories <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
  `;
        const cardContainer = div.querySelector("#card-container");
        if (cardContainer) {
            cardContainer.appendChild(cart);
        }
        return div;
    });
}
renderHome().then(home => {
    document.body.innerHTML = "";
    document.body.appendChild(home);
});
