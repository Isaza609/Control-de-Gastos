import { describe, expect, it } from 'vitest';
import { renderizarApp } from './main.js';

describe('proyecto base', () => {
  it('muestra el título de la página', () => {
    const contenedor = document.createElement('div');

    renderizarApp(contenedor);

    expect(contenedor.querySelector('h1').textContent).toBe('Proyecto base');
  });
});
