export function renderHome(): HTMLElement {
  const div = document.createElement('div');
  div.innerHTML = `
    <section class="w-full bg-[#0A2025] py-9 px-8">
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
        </div><img class="w-full max-w-[400px]" src="https://iili.io/338c9je.png" alt=""></div>
    </section>
    <section class="py-10 bg-white">
      <div class="">
        <div class="text-center">
          <div class="inline-block border-[1px] border-gray-400 py-1 px-4 rounded-2xl mb-4">Why Choose Us</div>
          <h2 class="text-4xl font-semibold mb-4">Your Trusted Tech Partner</h2>
          <p class="text-lg">
            We're committed to providing you with the best technology shopping
            experience. Here's what makes us different from the rest.
          </p>
        </div>
        <div class="grid grid-cols-4" id="features-container">

        </div>
      </div>
    </section>
    <section id="categories" class="py-10">
        <div class="">
            <div class="">
                <div class="">Shop by Category</div>
                <h2 class="">Find Your Perfect Gadget</h2>
                <p class="">
                    Browse through our carefully curated categories and discover the
                    latest in technology. From everyday essentials to cutting-edge
                    innovations.
                </p>
            </div>
            <div class="grid" id="categories-container">

            </div>
            <div class="text-center">
                <a href="#products" class="btn btn-outline px-5 py-2 rounded-xl bg-blue-500">View All Categories</a>
            </div>
        </div>
    </section>
  `;
  return div;
}