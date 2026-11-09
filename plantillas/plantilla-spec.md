# Plantilla para crear SPEC.md

## Instrucciones para el LLM

Ayúdame a crear el archivo `SPEC.md` en la raíz del proyecto, siguiendo la estructura de esta plantilla.

1. Lee `docs/01-contexto.md` si existe, para no preguntarme lo que ya está escrito. No escribas código.
2. Pregúntame una cosa a la vez. Empieza por la sección "Lo que debo contarte".
3. No inventes datos ni decisiones. Lo que yo no haya decidido va en "Preguntas abiertas".
4. Describe comportamientos que se puedan observar, no la solución técnica.
5. Escribe cada criterio de aceptación con un identificador (CA-01, CA-02…) de modo que se pueda comprobar si se cumple o no.
6. Si uso palabras ambiguas como "fácil", "rápido" o "bonito", avísame y propón una versión verificable.
7. Incluye los casos de error y los límites.
8. Muéstrame el borrador y espera mi aprobación antes de guardar el archivo.

## Lo que debo contarte

- ¿Para quién es y qué problema resuelve?
- ¿Qué debe poder hacer la persona?
- ¿Qué queda fuera de alcance?
- ¿Qué reglas se deben cumplir siempre?
- ¿Cómo debe comportarse la aplicación cuando todo sale bien y cuando algo falla?

## Estructura

```markdown
# [Nombre del proyecto]

## Objetivo
[Para quién es y qué problema resuelve.]

## Alcance
[Lo que sí incluye.]

## Fuera de alcance
[Lo que no se debe construir.]

## Reglas de negocio
- [Condición que siempre se cumple.]

## Criterios de aceptación
- CA-01: [Comportamiento observable.]
- CA-02: [Comportamiento observable.]

## Preguntas abiertas
- [Lo que aún no está decidido.]
```

## Lista de revisión para la persona

- [ ] Leí la spec completa.
- [ ] Cada criterio se puede probar y da un resultado claro.
- [ ] Está escrito lo que queda fuera de alcance.
- [ ] Los casos de error están cubiertos.
- [ ] Describe lo que debe ocurrir y no cómo programarlo.
