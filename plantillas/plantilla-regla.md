# Plantilla para crear una regla

## Instrucciones para el LLM

Ayúdame a convertir un error que quiero evitar en una regla dentro de la sección `## Reglas` de `AGENTS.md`.

1. Pregúntame qué error ocurrió o quiero evitar y cuál es el resultado correcto.
2. Si te falta un dato, pregúntalo. No lo inventes.
3. Escribe una sola instrucción, concreta y comprobable, con un ejemplo si ayuda.
4. Muéstrame la regla y espera mi aprobación antes de agregarla.

## Lo que debo contarte

- ¿Qué salió mal o qué se quiere evitar?
- ¿Cómo debería ser el resultado?
- ¿En qué casos aplica?

## Ejemplo

| Vaga | Concreta |
|---|---|
| Mostrar bien el dinero | Formatear el valor como `$ 1.250.000`, en COP y sin decimales |

## Lista de revisión para la persona

- [ ] Otra persona podría comprobar si se cumple.
- [ ] Viene de un error real o de un requisito claro.
- [ ] No contradice otra regla.
