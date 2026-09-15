---
title: 'Auditoría: Conversaciones'
createdAt: 2026-08-05T00:00:00.000Z
updatedAt: 2026-08-05T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-conversations
locale: es
---

En el módulo **Auditoría** puedes acceder a la pestaña **Conversaciones**, donde se registran los mensajes entre tus agentes de IA y tus clientes. En este tutorial aprenderás a navegar por la lista de conversaciones, filtrar y buscar chats de soporte, interpretar los status y el feedback e investigar una conversación en detalle para evaluar la calidad del servicio de tu agente.

**Conversaciones** muestra una tabla con todos los chats de soporte que contiene la siguiente información:

| Dato | Descripción |
| --- | --- |
| **Contacto** | Nombre y número de teléfono del cliente. Las [conversaciones excelentes](#conversaciones-excelentes) se identifican con una tag de estrella en el nombre del contacto. |
| **Status** | Status actual de la conversación. Los status posibles son: <br> `No atendido`: el agente de IA falló en la resolución del chat de soporte (por ejemplo: proporcionó información incorrecta, ignoró una queja, no ejecutó una acción prometida, entre otros). <br> `Atendido por IA`: el agente de IA resolvió el chat de soporte con éxito. <br> `En progreso`: el chat de soporte aún está en curso. <br> `Enviado a soporte humano`: el agente de IA no pudo resolver el chat de soporte y tuvo que enviarlo a un representante humano. |
| **Feedback** | Encuesta de satisfacción (CSAT), del 1 al 5, enviada al final del chat de soporte. Las calificaciones posibles son: <br> 😡`Muy insatisfecho / CSAT: 1` <br> 😔`Insatisfecho / CSAT: 2` <br> 😐`Neutro / CSAT: 3` <br> 😃`Satisfecho / CSAT: 4` <br> 🤩`Muy satisfecho / CSAT: 5` <br> Las conversaciones sin calificación se indican con un guion (`-`). |
| **Fecha** | Fecha de la conversación. |
| **Hora** | Hora de la conversación. |

## Conversaciones excelentes

Las **conversaciones excelentes** son conversaciones que muestran el valor de los agentes de IA al resolver una demanda real de forma eficaz. Al hacer un análisis en el **Backlog de mejoras**, estas conversaciones se marcan con una tag de estrella e indican que el agente realizó acciones relevantes como:

- Resolver una duda o un problema de forma completa utilizando la [base de conocimiento](https://help.vtex.com/es/docs/tutorials/informacion-general-de-agent-builder#base-de-conocimiento), las herramientas o los colaboradores.
- Ejecutar un flujo complejo con éxito (de pedido, cambio, cancelación, entre otros).
- Recopilar solo la información necesaria y ser directo, sin hacer preguntas adicionales.
- Manejar múltiples demandas en la misma conversación con éxito.

Recibir una calificación CSAT alta y un mensaje de satisfacción del cliente también cuenta al destacar una **conversación excelente**.

> ℹ️ Para más información, consulta el artículo [Auditoría: Backlog de mejoras](https://help.vtex.com/es/docs/tutorials/auditoria-backlog-de-mejoras).

## Buscar y filtrar conversaciones

Puedes utilizar los recursos de búsqueda y filtros para localizar chats de soporte específicos.

- Para buscar un chat de soporte por contacto, escribe el nombre del contacto en el campo **Buscar**.
- Para filtrar la lista por criterios como rango de tiempo, status, CSAT, tema o tipo de conversación haz clic en `Filtrar conversaciones` y selecciona las opciones deseadas. Al finalizar haz clic en `Aplicar filtros`.

## Abrir y leer una conversación

Para ver los detalles de una conversación haz clic en la conversación deseada.

En la parte superior del panel se muestran los datos de identificación de la conversación:

- **URN del contacto:** el número de teléfono del cliente.
- **Tema:** el asunto asociado a la conversación, si lo tiene.
- **Detalles de la conversación:** sección expandible con información adicional del chat de soporte.
  - Al hacer clic en `Detalles de la conversación` puedes ver la calificación CSAT (cuando esté disponible) e ir al historial completo de conversaciones con ese cliente. Para navegar al historial, haz clic en `Ver historial completo`. El navegador abrirá una nueva pestaña en la página de **Contactos**.

El cuerpo del panel muestra la conversación completa, en el orden en que ocurrió, con la fecha y la hora de cada mensaje.

## Consultar los logs de un mensaje

En los mensajes enviados por el agente de IA, puedes consultar los registros técnicos que explican cómo se generó esa respuesta. Los logs ayudan a entender el razonamiento y las acciones del agente detrás de cada respuesta, si buscó información en la [base de conocimiento](https://help.vtex.com/es/docs/tutorials/visao-geral-agent-builder#base-de-conhecimento), si buscó a ese cliente entre los contactos existentes, entre otras acciones.

Para consultar los logs, haz clic en `Mostrar logs` en el mensaje deseado.
