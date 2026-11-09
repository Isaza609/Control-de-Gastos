# Proyecto base: control de gastos

Punto de partida para la práctica de la clase de agentes de IA. La página todavía no tiene funciones de gastos: se construyen en clase, con un agente.

## Cómo empezar

1. Descargar el proyecto con **Code → Download ZIP**.
2. Extraer el archivo con clic derecho → **Extraer todo**. No se trabaja dentro del ZIP.
3. Abrir la carpeta extraída en VS Code o Cursor con **Archivo → Abrir carpeta**.
4. Abrir **Terminal → Nueva terminal** y ejecutar:

```text
npm install
```

Conservar el ZIP: si algo se daña, se extrae de nuevo y se vuelve a empezar.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Abre la aplicación en el navegador, en la dirección que muestra la terminal |
| `npm test` | Ejecuta las pruebas |
| `npm run build` | Genera la versión final |

Para detener `npm run dev`, presionar `Ctrl + C` en la terminal.

## Abrir el agente

En la terminal del editor:

```text
opencode
```

Si la terminal indica que un archivo `.ps1` no se puede cargar, abrir el selector de la terminal del editor y elegir **Command Prompt**.

## Plantillas

La carpeta `plantillas` trae una guía para crear cada documento con ayuda de un LLM. Para usar una, pedirle al agente:

```text
Lee plantillas/plantilla-contexto.md y sigue sus instrucciones.
```

| Plantilla | Crea |
|---|---|
| `plantilla-contexto.md` | `docs/01-contexto.md` |
| `plantilla-spec.md` | `SPEC.md` |
| `plantilla-agents.md` | `AGENTS.md` |
| `plantilla-regla.md` | Una regla dentro de `AGENTS.md` |
| `plantilla-skill.md` | `.agents/skills/implementar-spec/SKILL.md` |

Lo que genere el LLM siempre se lee y se corrige antes de aceptarlo.
