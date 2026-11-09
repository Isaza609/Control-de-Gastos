# Plantilla para crear el contexto del proyecto

## Instrucciones para el LLM

Ayúdame a crear el archivo `docs/01-contexto.md`, siguiendo la estructura de esta plantilla.

1. No escribas código.
2. Pregúntame una cosa a la vez. Empieza por la sección "Lo que debo contarte".
3. No inventes datos. Lo que yo no sepa queda como pendiente.
4. Usa lenguaje sencillo, sin términos técnicos.
5. Explica por qué existe el producto. Las funciones detalladas y sus criterios van en `SPEC.md`, no aquí.
6. El "Resumen para el agente" debe tener máximo 6 líneas.
7. Muéstrame el borrador y espera mi aprobación antes de guardar el archivo.

## Lo que debo contarte

- ¿Qué es el producto, en una frase?
- ¿Para quién es?
- ¿Qué problema tienen hoy y cómo lo resuelven?
- ¿Cómo lo usaría una persona? Da un ejemplo de principio a fin.
- ¿Qué no es este producto?
- ¿Qué palabras propias usa el producto?

## Estructura

```markdown
# Contexto del proyecto

## Resumen para el agente
- Qué es:
- Para quién:
- Problema que resuelve:
- Qué no es:
- Moneda, idioma o región:

## Qué es
[Explicación sencilla.]

## El problema hoy
[Qué ocurre, a quién afecta y cómo lo resuelven actualmente.]

## Para quién es
[Tipo de persona y su situación.]

## Ejemplo de uso
[Una persona, una situación, de principio a fin.]

## Qué no es
- [Lo que el producto no pretende ser.]

## Términos
- [Palabra]: [significado en este producto.]
```

## Lista de revisión para la persona

- [ ] Alguien que no conoce el proyecto entendería para qué sirve.
- [ ] No describe pantallas ni criterios: eso va en la spec.
- [ ] El resumen se puede leer en pocos segundos.
