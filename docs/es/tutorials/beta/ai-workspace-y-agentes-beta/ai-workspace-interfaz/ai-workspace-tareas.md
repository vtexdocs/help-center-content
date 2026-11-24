---
title: 'AI Workspace - Tareas'
createdAt: 2026-11-24T12:00:00.000Z
updatedAt: 2026-11-24T12:00:00.000Z
contentType: tutorial
productTeam: AI Workspace
slugEN: ai-workspace-tasks
locale: es
---

> ⚠️ AI Workspace solo está disponible para cuentas seleccionadas.

En AI Workspace, una **tarea** es una unidad de trabajo de una [iniciativa](https://help.vtex.com/es/docs/tutorials/ai-workspace-iniciativas) y tiene un objetivo específico. Por ejemplo: *Mejora los títulos de los 500 productos más visitados*.

Cada tarea tiene un **responsable** que la ejecuta, que puede ser una persona o un agente de IA. El responsable es elegido por el [**Líder de la iniciativa**](https://help.vtex.com/es/docs/tutorials/ai-workspace-glosario#lider-de-la-iniciativa).

Las tareas existen solo dentro de las iniciativas y pueden crearse de dos formas:

- Junto con la creación de una iniciativa.
- Al interactuar con un agente de IA en un [chat](https://help.vtex.com/es/docs/tutorials/ai-workspace-chat).

## Página Tareas

Puedes acceder a la página **Tareas** a través del ítem **Tareas** del [menú de navegación](https://help.vtex.com/es/docs/tutorials/ai-workspace-menu-navegacion) lateral. Esta página reúne todas las tareas de tu operación, agrupadas por status.

![AI Workspace página de tareas ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/ai-workspace-y-agentes-beta/ai-workspace-interfaz/ai-workspace-tareas.png)

La página tiene un tablero que organiza las tareas en columnas, según el status de cada una:

- **Abiertas:** tareas que aún no se han iniciado.
- **En ejecución:** tareas en curso.
- **Esperando acción:** tareas que dependen de una interacción para avanzar.
- **Completadas:** tareas finalizadas.

Las columnas contienen tarjetas que representan las tareas, y cada una muestra los siguientes detalles:

- **Título:** nombre de la tarea.
- **Iniciativa:** iniciativa a la que pertenece la tarea.
- **Ícono del responsable:** identificación visual de la persona o del agente de IA responsable de la tarea.
- **Ícono del status:** indicación visual del status actual, presente solo en las tareas con status **Trabajando** y **Esperando acción**.

## Detalles de la tarea (canvas)

En los [detalles de la iniciativa en el canvas](https://help.vtex.com/es/docs/tutorials/ai-workspace-iniciativas#detalles-de-la-iniciativa-canvas), se muestra la lista de todas sus tareas. Al hacer clic en una tarea, sus detalles se muestran en el [**canvas**](https://help.vtex.com/es/docs/tutorials/ai-workspace-glosario#canvas).

![AI Workspace detalles de la tarea en el canvas ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/ai-workspace-y-agentes-beta/ai-workspace-interfaz/ai-workspace-tarea-canvas.png)

El canvas de la tarea presenta las siguientes secciones:

- **Título:** nombre de la tarea.
- **Encabezado:** información general de la tarea:
  - **Asignada a:** usuario o agente de IA responsable de ejecutar la tarea.
  - **Status:** situación actual de la tarea. La visualización del status varía según la etapa:
    - **Abierta:** muestra el botón **Ejecutar tarea**.
    - **Trabajando:** muestra una animación de carga acompañada de **Planificando...**, **Explorando...** o **Analizando...**.
    - **Esperando acción:** muestra **🔵 Requiere atención**.
    - **Completa:** muestra **✔️ Completado**.
- **Descripción:** explicación de lo que realiza la tarea.
- **Alcance:** conjunto de ítems sobre los que actúa la tarea.
- **Proceso manual:** acciones que un usuario debe realizar en la tarea. Esta sección no aparece en tareas asignadas a agentes de IA.

## Chat de la tarea

Cada tarea tiene un **chat**, en el que es posible interactuar con agentes de IA para obtener información y ejecutar acciones relacionadas con la tarea. Para obtener más información sobre cómo funciona la interacción con los agentes, consulta el artículo [AI Workspace - Chat](https://help.vtex.com/es/docs/tutorials/ai-workspace-chat).

![AI Workspace chat de la tarea ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/ai-workspace-y-agentes-beta/ai-workspace-interfaz/ai-workspace-tarea-chat.png)
