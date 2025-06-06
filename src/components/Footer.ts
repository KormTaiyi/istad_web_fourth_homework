export function Footer(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'bg-white dark:bg-gray-800 flex justify-center items-center w-full';
  footer.innerHTML = `
  <footer class="bg-white w-full dark:bg-gray-900">
    <div class="w-full">
      <div class="mx-auto max-w-7xl grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="/about" class=" hover:underline">About</a>
            </li>
            <li class="mb-4">
              <a href="/product" class="hover:underline">Product</a>
            </li>
            <li class="mb-4">
              <a href="/contact" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Discord Server</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Twitter</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Facebook</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Licensing</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">iOS</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Android</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Windows</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">MacOS</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-gray-100 py-6 px-2 dark:bg-gray-700">
      <span class="text-sm text-left text-gray-200 dark:text-gray-300 sm:text-center">© 2023 <a href="">Electronic store</a>. All Rights Reserved.</span></div>
    </div>
  </footer>`;
  return footer;
}
