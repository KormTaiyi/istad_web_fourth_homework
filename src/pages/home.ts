import { fetchProducts } from "../api";
import { Card, Product } from "../components/Card";

export async function renderHome() {
  const res = await fetchProducts();
  const products: Product[] = Array.isArray(res) ? res : res.products;

  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean)));

  const categoryCards: HTMLDivElement[] = categories
    .map(category => {
      const product = products.find(p => p.category === category);
      if (!product) return null;
      const card = document.createElement("div");
      card.className = "bg-white border border-gray-200 shadow-xl rounded-xl";
      card.innerHTML = `
        <img class="w-full h-52 object-contain rounded-t-xl" src="${product.image}" alt="${product.title}">
        <div class="p-4">
          <h3 class="text-lg font-bold text-gray-800">${category}</h3>
          <p class="mt-1 text-gray-500">${product.title.slice(0,40)}...</p>
          <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700" href="/product?category=${encodeURIComponent(category ?? '')}">Shop ${category ?? ''}</a>
        </div>
      `;
      return card;
    })
    .filter((card): card is HTMLDivElement => card !== null);

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
            <a href="/product" data-link class="px-5 py-2.5 bg-gray-500 rounded-[10px]">Shop now</a>
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
      <div class="w-full">
        <div class="mb-10 text-center">
          <div class="inline-block border-[1px] border-gray-400 py-1 px-4 rounded-2xl mb-4">Shop by Category</div>
          <h2 class="text-4xl font-semibold mb-4">Find Your Perfect Gadget</h2>
          <p>Browse through our carefully curated categories and discover the latest in technology.<br> From everyday essentials to cutting-edge innovations.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 gap-4" id="category-container"></div>
        <div class="text-center mt-10">
          <a href="/product" class="px-5 py-2 rounded border-blue-500 hover:text-blue-900 text-blue-500 border-2">View All Categories <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  `;

  const categoryContainer = div.querySelector("#category-container");
  if (categoryContainer) {
    categoryCards.forEach(card => categoryContainer.appendChild(card));
  }

  return div;
}

renderHome().then(home => {
  document.body.innerHTML = "";
  document.body.appendChild(home);
});

document.addEventListener('click', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'A' && target.hasAttribute('data-link')) {
    e.preventDefault();
  }
});
