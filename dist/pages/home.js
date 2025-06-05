"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHome = renderHome;
function renderHome() {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class=" w-full  bg-[#0A2025] py-9 px-8">
      <div class="mx-auto flex  flex-col items-center lg:flex-row justify-center gap-10 py-40 max-w-[1440px] bg-no-repeat ">
        <div class="w-[660px]  flex-col justify-center items-start gap-20 inline-flex">
          <div class="self-stretch  flex-col justify-start items-start gap-5 flex">
            <h1 class="self-stretch">
              <span class="text-white text-5xl font-bold font-['Roboto']">Redefining Motion:</span><span class="text-[#3e9d26] text-5xl font-bold font-['Roboto']">The Future of Footwear is Here</span>
            </h1>
            <p class="self-stretch text-white text-xl font-normal font-['Roboto']">Experience unparalleled comfort and
              innovative design with our state-of-the-art, futuristic sports shoes. Built for champions, designed for you.
            </p>
          </div>
          <div class="justify-start items-center gap-5 inline-flex">
            <div class="justify-start items-center gap-2.5 flex">
              <p class="text-white text-sm font-normal font-['Roboto']">Step into the Future</p>
              <div data-svg-wrapper="true" class="relative"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z"
                    fill="white"></path>
                </svg></div>
            </div>
            <button class="px-8 py-2.5 bg-[#3e9d26] rounded-[10px] justify-center items-center gap-2.5 flex text-white text-sm font-semibold font-['Roboto']">Shop Now</button>
          </div>
        </div><img class="w-full max-w-[400px]" src="https://iili.io/338c9je.png" alt="">
      </div>
    </section>

    <!-- Services Section -->
    <section class="w-[90%] m-auto mt-10 mb-10 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="text-blue-600 mb-4">
                        <i class="fas fa-laptop-code text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Web Development</h3>
                    <p class="text-gray-600">Custom websites and web applications tailored to your business needs with modern technologies.</p>
                </div>
                
                <!-- Service 2 -->
                <div class="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="text-blue-600 mb-4">
                        <i class="fas fa-mobile-alt text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Mobile Apps</h3>
                    <p class="text-gray-600">iOS and Android applications designed for optimal performance and user experience.</p>
                </div>
                
                <!-- Service 3 -->
                <div class="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="text-blue-600 mb-4">
                        <i class="fas fa-cloud text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Cloud Solutions</h3>
                    <p class="text-gray-600">Scalable cloud infrastructure and services to support your growing business needs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="w-[90%] m-auto mt-10 mb-10 p-5">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">About Cyamunara</h2>
                    <p class="text-gray-600 mb-4">Founded in 2015, Cyamunara has been at the forefront of digital transformation, helping businesses of all sizes navigate the complex world of technology.</p>
                    <p class="text-gray-600 mb-6">Our team of experts combines technical expertise with business acumen to deliver solutions that drive real results.</p>
                    <button class="bg-blue-700 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition duration-300">Read Our Story</button>
                </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team working" class="rounded-lg shadow-lg w-full h-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="mt-10 mb-10 bg-blue-700 text-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="p-6">
                    <div class="text-4xl font-bold mb-2">150+</div>
                    <div class="text-xl">Projects Completed</div>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold mb-2">50+</div>
                    <div class="text-xl">Happy Clients</div>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold mb-2">12</div>
                    <div class="text-xl">Awards Won</div>
                </div>
            </div>
        </div>
  </section>
  <section id="testimonies" class="py-20 bg-slate-900">
    <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                <div
                    class="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                </div>
                <h1 class="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                    It's not just us.
                </h1>
                <p class="text-xl text-gray-100 md:text-center md:text-2xl">
                    Here's what others have to say about us.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul class="space-y-8">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                        <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                        <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul class="hidden space-y-8 sm:block">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                        <p class="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                    semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                    pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                        <p class="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                    semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                    pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul class="hidden space-y-8 lg:block">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                        <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                                    tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                    eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p class="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                        <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                                    tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                    eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p class="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


        </div>
    </div>
  `;
    return div;
}
