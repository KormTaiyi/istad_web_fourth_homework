export function Header(): HTMLElement {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <div class="bg-blue-600 p-4 flex justify-between items-center">
      <a href="/" class="text-white text-xl font-bold" data-link>Electronic store</a>
      <div class="flex gap-6">
        <a href="/" class="text-white" data-link>Home</a>
        <a href="/about" class="text-white" data-link>About Us</a>
        <a href="/product" class="text-white" data-link>Products</a>
        <a href="/contact" class="text-white" data-link>Contact</a>
      </div>
    </div>
  `;
  return nav;
}
