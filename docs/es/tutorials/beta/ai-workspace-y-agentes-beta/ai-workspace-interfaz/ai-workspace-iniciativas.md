---
title: 'AI Workspace - Iniciativas'
createdAt: 2026-11-24T12:00:00.000Z
updatedAt: 2026-11-24T12:00:00.000Z
contentType: tutorial
productTeam: AI Workspace
slugEN: ai-workspace-initiatives
locale: es
---

> ⚠️ AI Workspace solo está disponible para cuentas seleccionadas.

En AI Workspace, una **iniciativa** es el punto de partida para la ejecución de tareas. Cada iniciativa tiene un objetivo más amplio y agrupa múltiples tareas, cada una con un alcance menor, que contribuyen a alcanzarlo.

Cada iniciativa se identifica con un código que comienza con `IN` seguido de números (por ejemplo, `IN6270`). Las iniciativas pueden crearse **a partir de interacciones con agentes de IA**, que identifican problemas y oportunidades de mejora en la tienda y proponen acciones para abordarlos.

Puedes acceder a la página **Mis iniciativas** a través del ítem **Mis iniciativas** del [menú de navegación](https://help.vtex.com/es/docs/tutorials/ai-workspace-menu-navegacion) lateral. Esta página reúne todas las iniciativas de tu operación y te permite monitorearlas y gestionarlas.

## Tabla de iniciativas

![AI Workspace tabla de iniciativas ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/ai-workspace-y-agentes-beta/ai-workspace-interfaz/ai-workspace-tabla-iniciativas.png)

La tabla de iniciativas muestra los detalles de cada iniciativa con las siguientes columnas:

- **Iniciativa:** código (por ejemplo, `IN6270`), título y descripción de la iniciativa.
- **Severidad:** nivel de prioridad de la iniciativa (Baja, Media o Alta).
- **Fecha:** fecha de creación de la iniciativa.
- **Líder:** responsable de la iniciativa.

### Ordenación por columna

Puedes ordenar la lista haciendo clic en el encabezado de una columna. Cada clic alterna el criterio de ordenación de esa columna, siguiendo este ciclo:

1. **Ascendente**.
2. **Descendente**.
3. **Sin ordenación** (elimina la ordenación aplicada).

### Expansión de iniciativas

Al hacer clic en la flecha a la izquierda de una iniciativa, esta se expande y muestra sus tareas justo debajo. Cada tarea presenta un ícono que indica su status actual, lo que permite monitorear el progreso de la iniciativa directamente en la lista. Para contraer la iniciativa, haz clic nuevamente en la flecha.

## Detalles de la iniciativa (canvas)

Al hacer clic en una iniciativa, en cualquier modo de visualización, se abre el [**canvas**](https://help.vtex.com/es/docs/tutorials/ai-workspace-glosario#canvas) a la derecha con los detalles completos de la iniciativa.

![AI Workspace canvas de la iniciativa ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/ai-workspace-y-agentes-beta/ai-workspace-interfaz/ai-workspace-iniciativa-canvas.png)

En la parte superior del canvas, el botón **Abrir chat** permite abrir un [chat](https://help.vtex.com/es/docs/tutorials/ai-workspace-chat) relacionado con la iniciativa.

El canvas se organiza en las siguientes secciones:

- **Título:** nombre de la iniciativa.
- **Encabezado:** información general de la iniciativa:
  - **Status:** situación actual de la iniciativa. Los status posibles son **Triaje**, **Activa**, **Archivada** y **Completada**.
  - **Severidad:** nivel de prioridad de la iniciativa.
  - **Líder de la iniciativa:** responsable de conducir la iniciativa.
  - **Participantes:** demás personas involucradas en la iniciativa.
  - **Reportado por:** agente que reportó la iniciativa, con fecha y hora.
- **Diagnóstico:** análisis de la situación que originó la iniciativa, que detalla el problema o la oportunidad identificada.
- **Tareas:** lista de tareas que componen la iniciativa. Cada tarea presenta:
  - **Status de ejecución:** un ícono o botón que representa el estado actual de la tarea. Los status posibles son:
    - **Abierta:** muestra el botón 🔼 para iniciar la tarea.
    - **En ejecución:** muestra el ícono de carga 🔁, que indica que un agente está procesando la tarea.
    - **Esperando acción:** muestra el ícono 🔵, que indica que la tarea espera una interacción del usuario para continuar.
    - **Completada:** muestra el ícono ✔️, que indica que la tarea se completó.
  - **Título:** nombre de la tarea.
  - **Botón "↳ Ver conversación":** disponible cuando la tarea requiere interacción. El botón abre el chat de la tarea.
  - **Responsable:** se muestra como un menú desplegable antes de la ejecución, lo que permite definir quién ejecutará la tarea (usuario o agente). Después de iniciar la tarea, solo se muestra la imagen del responsable.
- **Actividad:** historial de las acciones realizadas en la iniciativa, que registra el responsable de la acción, la acción ejecutada, el receptor (cuando lo haya) y la fecha y hora.
