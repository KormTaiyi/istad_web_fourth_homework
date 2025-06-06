export function renderNotFound(): HTMLElement {
  const div = document.createElement('div');
  div.innerHTML = `
    <section class="flex items-center justify-center min-h-screen">
        <div class="text-center">
            <h1 class="text-6xl font-extrabold text-blue-500 mb-10">404 Page not found :)</h1>
        </div>
    </section>
  `;
  return div;
}
