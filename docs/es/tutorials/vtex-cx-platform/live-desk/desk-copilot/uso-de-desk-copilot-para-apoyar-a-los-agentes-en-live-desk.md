---
title: 'Uso de Desk Copilot para apoyar a los agentes en Live Desk'
createdAt: 2026-11-17T12:00:00.000Z
updatedAt: 2026-11-17T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: using-desk-copilot-to-support-agents-in-live-desk
locale: es
---

**Desk Copilot** ofrece sugerencias de respuestas y acciones para apoyar a los representantes humanos durante las conversaciones con los clientes en [Live Desk](https://help.vtex.com/es/docs/tutorials/informacion-general-de-live-desk). En este artículo, aprenderás a configurar los agentes de **Desk Copilot** y a utilizar sus sugerencias durante la atención.

## Permitir que los agentes de IA transfieran conversaciones al soporte humano

1. Accede a **Configuración > Live Desk > General**.
2. Activa la opción **Permitir que los agentes de IA transfieran conversaciones al soporte humano**.
3. En el campo de escenarios o criterios, describe cuándo debe ocurrir la transferencia. Por ejemplo: "Cada vez que el agente de IA no encuentre un producto o no tenga conocimiento sobre un tema, transfiere la solicitud al soporte humano".
4. Haz clic en `Guardar`.

> ℹ️ Puedes cambiar los criterios de transferencia en cualquier momento haciendo clic en el ícono de edición <i class="fa-regular fa-pen-to-square" aria-hidden="true"></i>.

## Agregar agentes a Desk Copilot

Puedes asignar agentes al proyecto de **Desk Copilot** para que sus funcionalidades estén disponibles durante la atención.

1. En el proyecto de Copilot, accede a **Mis agentes**.
2. Haz clic en `Asignar nuevos agentes`.
3. Selecciona los agentes que deseas poner a disposición de **Desk Copilot**.
4. Configura cada agente.

> ℹ️ Para saber más sobre los agentes, consulta [Mis agentes](https://help.vtex.com/es/docs/tutorials/asignar-y-probar-agentes).

## Usar Desk Copilot durante la atención

1. En Live Desk, selecciona la conversación que te fue transferida y toma el control de la atención. El panel de **Desk Copilot** se muestra junto al chat, con dos pestañas:
   - **Desk Copilot:** resumen de la conversación y sugerencias.
   - **Información:** detalles del contacto y de la atención.
2. Lee el resumen de la conversación y las sugerencias. Pueden ser:
   - **Respuesta lista:** texto con el tono adecuado, con los botones `Copiar` y `Enviar`.
   - **Búsqueda de productos:** resultados con tarjetas de producto, precio e imagen.
   - **Carrito armado:** artículos reunidos para el cliente.
   - **Consulta de pedido:** información de un pedido del cliente.
   - **Enlace de pago:** un enlace para que el cliente finalice la compra.
3. Para solicitar algo específico, escribe en el campo **Pregúntale al asistente**.
4. Para utilizar una sugerencia de respuesta, elige una de las opciones:
   - **Copiar:** inserta la sugerencia en el campo de mensaje, permitiéndote revisar o editar el texto antes de enviarlo.
   - **Enviar:** envía la respuesta sugerida directamente al cliente, sin cambios.

Desk Copilot actualiza el resumen y las sugerencias conforme el cliente envía nuevos mensajes durante la atención.

> ℹ️ **Desk Copilot** no envía mensajes automáticamente. El representante decide qué sugerencias utilizar y cuándo enviar las respuestas.

## Diferencia entre Desk Copilot y Mejorar respuesta con IA

| Función | Qué hace | Cuándo usarla |
| --- | --- | --- |
| **Desk Copilot** | Propone la siguiente acción con base en la conversación, incluyendo resúmenes, respuestas, productos, carritos, pedidos y enlaces de pago. | Cuando el representante necesita sugerencias para responder al cliente o realizar acciones durante la atención. |
| **Mejorar respuesta con IA** | Revisa un texto que el representante ya escribió, corrigiendo la gramática, ajustando el tono o reescribiéndolo. | Cuando el representante ya escribió una respuesta y desea refinarla. |
