# Plantilla para crear una skill

## Instrucciones para el LLM

Ayúdame a crear la skill `implementar-spec` en `.agents/skills/implementar-spec/SKILL.md`.

1. Pregúntame una cosa a la vez por lo que falte. No inventes.
2. La carpeta de la skill debe quedar directamente dentro de `.agents/skills/`.
3. La `description` debe decir qué hace la skill y cuándo se usa.
4. Escribe pasos concretos y en orden.
5. Muéstrame el borrador y espera mi aprobación antes de guardar el archivo.

## Lo que debo contarte

- ¿Qué tarea resuelve esta skill?
- ¿En qué situación debe usarse?
- ¿Qué pasos se deben seguir y en qué orden?
- ¿Qué evidencia debe presentar el agente al terminar?

## Estructura

```markdown
---
name: implementar-spec
description: [Qué hace y cuándo se debe usar.]
---

1. [Primer paso.]
2. [Siguiente paso.]
3. [Último paso y evidencia que debe reportar.]
```

## Pasos sugeridos para discutir

Leer la spec y `AGENTS.md` → preguntar lo ambiguo → proponer un plan y esperar aprobación → escribir pruebas → implementar → verificar → reportar evidencia por cada criterio.

## Lista de revisión para la persona

- [ ] La `description` permite saber cuándo usarla.
- [ ] El agente debe esperar aprobación antes de implementar.
- [ ] Exige evidencia real por cada criterio.
