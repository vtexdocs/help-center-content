---
title: 'Agent Builder: más control al configurar los agentes y la base de conocimiento'
slug: '2026-10-08-agent-builder-mas-control-al-configurar-los-agentes-y-la-base-de-conocimiento'
createdAt: 2026-10-08T12:00:00.000Z
updatedAt: 2026-10-08T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: '2026-10-08-agent-builder-more-control-over-agent-and-knowledge-base-configuration'
locale: es
announcementSynopsisES: 'Agent Builder recibió siete optimizaciones que reducen la dependencia de la interfaz de línea de comandos (CLI) y dan más control sobre proveedores de IA, mensajes, componentes y base de conocimiento.'
tags:
  - Optimizaciones
  - VTEX CX Platform
---

**Agent Builder** de VTEX CX Platform recibió un conjunto de optimizaciones que brindan mayor flexibilidad y visibilidad en la configuración de agentes de IA.

## ¿Qué cambió?

- **Elección del proveedor de IA:** en la sección **Manager**, puedes usar una clave de API propia de **OpenAI** o de **Google Gemini**, en lugar del motor nativo de la plataforma.
- **Mensaje de error personalizable:** el texto enviado al cliente cuando un error de API impide la respuesta del agente ahora puede editarse por proyecto.
- **Componentes interactivos en Manager 2.7:** el orquestador ahora envía de forma nativa respuestas rápidas, botones de acción y listas de mensajes; solo debes mencionar el componente en las instrucciones del agente.
- **Constantes en la asignación de agentes personalizados:** las constantes enviadas mediante la CLI se pueden ver y configurar directamente en la interfaz al asignar un agente personalizado.
- **Fechas en las tarjetas de agentes personalizados:** las tarjetas muestran la fecha de creación y de la última actualización del agente.
- **Filtro de temas sin clasificar:** en **Auditoría** puedes filtrar conversaciones sin clasificación de tema e identificar asuntos que aún no están mapeados.
- **Organización de textos en la base de conocimiento:** la pestaña **Textos** ahora admite varios segmentos con nombre, que se pueden buscar y editar. El comportamiento del agente no cambia.

## ¿Por qué realizamos este cambio?

Varias configuraciones de Agent Builder requerían el uso de la CLI o intervención técnica, y algunos datos, como el historial de cambios de un agente o el mensaje enviado en caso de error, no podían controlarse desde la interfaz. Estas optimizaciones reducen esa dependencia y centralizan la gestión de los agentes en VTEX CX Platform.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción. Las optimizaciones ya están disponibles en todos los proyectos. Para saber más, consulta los artículos [Información general de Agent Builder](https://help.vtex.com/es/docs/tutorials/informacion-general-de-agent-builder), [Asignar y probar agentes](https://help.vtex.com/es/docs/tutorials/asignar-y-probar-agentes) y [Auditoría: Conversaciones](https://help.vtex.com/es/docs/tutorials/auditoria-conversaciones).
