export function renderNotFound(): HTMLElement {
  const div = document.createElement('div');
  div.innerHTML = `
    <section class="flex items-center justify-center min-h-screen">
        <div class="text-center">
            <h1 class="text-7xl font-extrabold text-blue-700 mt-6">Looks Like You're Lost!</h1>
            <p class="text-xl text-gray-700 mt-2">We can't seem to find the page you're looking for.</p>
        </div>
    </section>
  `;
  return div;
}
