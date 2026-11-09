export function renderizarApp(contenedor) {
  contenedor.innerHTML = '<h1>Proyecto base</h1>';
}

const contenedor = document.querySelector('#app');

if (contenedor) {
  renderizarApp(contenedor);
}
