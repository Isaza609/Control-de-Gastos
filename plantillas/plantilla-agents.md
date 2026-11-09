# Plantilla para crear AGENTS.md

## Instrucciones para el LLM

Ayúdame a crear el archivo `AGENTS.md` en la raíz del proyecto, siguiendo la estructura de esta plantilla.

1. Lee `package.json`, `docs/01-contexto.md` y `SPEC.md` antes de preguntar.
2. Pregúntame una cosa a la vez por lo que no puedas deducir. No inventes.
3. Incluye solo lo que un agente necesita saber en cada sesión y no puede deducir del código.
4. Escribe instrucciones concretas y comprobables.
5. Mantén el archivo corto: máximo 40 líneas.
6. Muéstrame el borrador y espera mi aprobación antes de guardar el archivo.

## Lo que debo contarte

- ¿Para qué existe el proyecto?
- ¿Qué tecnologías se pueden usar y cuáles no?
- ¿Qué no debe tocar o hacer el agente?
- ¿Qué se debe cumplir para considerar terminado un trabajo?

## Estructura

```markdown
# [Nombre del proyecto]

## Propósito
[Una o dos frases.]

## Dónde está la información
- Contexto del producto: `docs/01-contexto.md`
- Qué construir: `SPEC.md`

## Stack
- [Tecnología permitida.]

## Comandos
- Ejecutar: [comando]
- Probar: [comando]
- Compilar: [comando]

## Límites
- [Lo que el agente no debe hacer.]

## Reglas
- [Regla concreta y comprobable.]

## Definición de terminado
- [Condición que se debe cumplir.]
```

## Lista de revisión para la persona

- [ ] Los comandos funcionan.
- [ ] Cada instrucción es concreta.
- [ ] No repite lo que dicen `SPEC.md` ni `docs/01-contexto.md`: indica dónde encontrarlo.
- [ ] No hay información que el agente pueda deducir del código.
