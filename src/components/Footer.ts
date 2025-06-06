export function Footer(): HTMLElement {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="bg-gray-900 text-white py-8 px-4 mt-10">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-bold mb-2">COMPANY</h3>
          <ul>
            <li><a href="/about" data-link>About</a></li>
            <li><a href="/product" data-link>Product</a></li>
            <li><a href="/contact" data-link>Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-2">HELP CENTER</h3>
          <ul>
            <li><a href="#" class="hover:underline">Discord Server</a></li>
            <li><a href="#" class="hover:underline">Twitter</a></li>
            <li><a href="#" class="hover:underline">Facebook</a></li>
            <li><a href="#" class="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-2">LEGAL</h3>
          <ul>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline">Licensing</a></li>
            <li><a href="#" class="hover:underline">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-2">DOWNLOAD</h3>
          <ul>
            <li><a href="#" class="hover:underline">iOS</a></li>
            <li><a href="#" class="hover:underline">Android</a></li>
            <li><a href="#" class="hover:underline">Windows</a></li>
            <li><a href="#" class="hover:underline">MacOS</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-8 text-gray-400 text-sm">
        © 2023 Electronic store. All Rights Reserved.
      </div>
    </div>
  `;
  return footer;
}
