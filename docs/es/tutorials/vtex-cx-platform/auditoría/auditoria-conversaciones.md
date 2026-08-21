---
title: 'Auditoría: Conversaciones'
createdAt: 2026-08-12T00:00:00.000Z
updatedAt: 2026-08-12T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-conversations
locale: es
---

En el módulo **Auditoría**, puedes acceder a la pestaña **Conversaciones**, donde se registran los mensajes entre tus agentes de IA y tus clientes. En este tutorial aprenderás a navegar por la lista de conversaciones, filtrar y buscar chats de soporte, interpretar los estados y el feedback, e investigar una conversación en detalle para evaluar la calidad del servicio de tu agente.

**Conversaciones** muestra una tabla con todos los chats de soporte, con la siguiente información:

| Datos | Descripción |
| --- | --- |
| **Contacto** | Nombre y número de teléfono del cliente. Las [Conversaciones increíbles](#conversaciones-increíbles) se identifican con una etiqueta de estrella en el nombre del contacto. |
| **Estado** | Situación actual de la conversación. Los estados posibles son: <br> `No atendido`: El chat de soporte no se resolvió debido a un fallo del agente de IA (por ejemplo: proporcionó información incorrecta, ignoró una reclamación, no ejecutó una acción prometida, entre otros). <br> `Atendido por IA`: El chat de soporte fue resuelto correctamente por el agente de IA. <br> `En progreso`: El chat de soporte aún está en curso. <br> `Escalado a soporte humano`: El chat de soporte no pudo ser resuelto por el agente de IA y tuvo que escalarse a un representante humano. |
| **Feedback** | Calificación de satisfacción (CSAT), de 1 a 5, enviada al final del chat de soporte. Las calificaciones posibles son: <br> 😡`Muy insatisfecho / CSAT: 1` <br> 😔`Insatisfecho / CSAT: 2` <br> 😐`Neutral / CSAT: 3` <br> 😃`Satisfecho / CSAT: 4` <br> 🤩`Muy satisfecho / CSAT: 5` <br> Las conversaciones no calificadas reciben un guion (`-`). |
| **Fecha** | Fecha de la conversación. |
| **Hora** | Hora de la conversación. |

## Conversaciones increíbles

Las **Conversaciones increíbles** son conversaciones que muestran el valor de los agentes de IA al resolver una demanda real de manera eficaz. Al realizar un análisis en el **Backlog de mejoras**, estas conversaciones reciben una etiqueta de estrella e indican que el agente realizó acciones relevantes, como:

- Resolver una pregunta o un problema de forma completa, utilizando la [base de conocimiento](https://help.vtex.com/es/docs/tutorials/vision-general-agent-builder#base-de-conocimiento), las herramientas o los colaboradores.
- Conducir un flujo complejo con éxito (de pedido, cambio, cancelación, entre otros).
- Recopilar solo la información necesaria y ser directo, sin hacer preguntas adicionales.
- Manejar múltiples demandas en la misma conversación con éxito.

Recibir una calificación CSAT alta y un mensaje de satisfacción del cliente también cuenta al determinar una **Conversación increíble**.

> ℹ️ Para obtener más información, consulta nuestro artículo [Auditoría: Backlog de mejoras](https://help.vtex.com/es/tutorial/audit-improvements-backlog).

## Buscar y filtrar conversaciones

Para encontrar chats de soporte específicos, puedes utilizar las funciones de búsqueda y filtro.

- Para localizar un chat de soporte por contacto, escribe el nombre del contacto en el campo **Buscar**.
- Para filtrar la lista por criterios como intervalo de tiempo, estado, CSAT, tema o tipo de conversación, haz clic en `Filtrar conversaciones` y selecciona las opciones deseadas. Al finalizar, haz clic en `Aplicar filtros`.

## Abrir y leer una conversación

Para ver los detalles de una conversación, haz clic en la conversación deseada.

En la parte superior del panel encontrarás los datos de identificación de la conversación:

- **URN del contacto:** el número de teléfono del cliente.
- **Tema:** el asunto asociado a la conversación, cuando exista.
- **Detalles de la conversación:** sección expandible con información adicional del chat de soporte.
  - Al hacer clic en `Detalles de la conversación`, podrás ver la calificación CSAT (cuando exista) y podrás ir al historial completo de conversaciones con ese cliente. Para visitar el historial, haz clic en `Ver historial completo`. El navegador abrirá una nueva pestaña en la página **Contactos**.

El cuerpo del panel muestra la conversación completa, en el orden en que ocurrió, con la fecha y hora de cada mensaje.

## Consultar los logs de un mensaje

En los mensajes enviados por el agente de IA, puedes consultar los registros técnicos que explican cómo se generó esa respuesta. Los logs ayudan a entender el razonamiento y las acciones del agente detrás de cada respuesta, si buscó información en la [base de conocimiento](https://help.vtex.com/es/docs/tutorials/vision-general-agent-builder#base-de-conocimiento), si buscó a ese cliente entre los contactos existentes, entre otras acciones.

Para consultar los logs, haz clic en `Mostrar logs` en el mensaje deseado.