"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = Header;
function Header() {
    const header = document.createElement('header');
    header.className = 'bg-blue-900 text-white';
    header.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                    <a href="/" class="text-2xl font-bold">Tailwind </a>
                </div>

                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="/service" data-link class="hover:text-gray-300 transition-all">Services</a>
                    <a href="/about" data-link class="hover:text-gray-300 transition-all">About Us</a>
                    <a href="/contact" data-link class="hover:text-gray-300 transition-all">Contact</a>
                </nav>

                <div class="hidden md:block">
                    <a href="#contact" class="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all">
                        Get in Touch
                    </a>
                </div>

                <div class="md:hidden flex items-center">
                    <button id="menu-button" class="text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="md:hidden mt-5 hidden space-y-4">
                <a href="/service" class="block text-lg hover:text-gray-300 transition-all">Services</a>
                <a href="/about" class="block text-lg hover:text-gray-300 transition-all">About Us</a>
                <a href="/contact" class="block text-lg hover:text-gray-300 transition-all">Contact</a>
            </div>
        </div>
  `;
    const menuButton = header.querySelector('#menu-button');
    const mobileMenu = header.querySelector('#mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    return header;
}
