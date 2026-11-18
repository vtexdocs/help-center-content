---
title: "Tarjeta de mensaje de WhatsApp"
id: 4IsU6gP2dUx1F1A5AMKN4D
status: PUBLISHED
createdAt: 2025-09-17T14:17:04.971Z
updatedAt: 2026-11-13T13:47:00.000Z
publishedAt: 2025-10-03T14:20:03.619Z
firstPublishedAt: 2025-10-03T14:20:03.619Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-message-card
legacySlug: tarjeta-de-mensaje-de-whatsapp
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
seeAlso:
  - /es/docs/tutorials/cartas-de-accion
---

La tarjeta de mensaje de WhatsApp te permite crear interacciones específicas de WhatsApp en un [flujo de automatización](/es/docs/tutorials/introduccion-a-los-flujos). Úsala cuando el flujo necesite enviar un mensaje y ofrecer al contacto una forma estructurada de responder o continuar la conversación. Puedes enviar un mensaje simple o configurar un mensaje interactivo con respuestas rápidas, una lista de opciones, una solicitud de ubicación o un botón de URL.

## Antes de comenzar

Antes de añadir la tarjeta, ten en cuenta los siguientes requisitos:

- El contacto debe tener una URN de WhatsApp. La URN identifica al contacto en un canal de comunicación.
- En las conversaciones iniciadas por tu empresa, esta tarjeta no sustituye un mensaje de plantilla aprobado por Meta. Para más información, consulta [Mensajes de plantilla de WhatsApp: Obstáculos y configuraciones](/es/docs/tutorials/mensajes-de-plantilla-de-whatsapp-obstaculos-y-configuraciones).

## Añadir la tarjeta al flujo

Para añadir la tarjeta al flujo, sigue estos pasos:

1. En el proyecto, ve a **Agent Builder > Flujo de automatización**.
2. Abre un flujo existente o crea uno nuevo.
3. Haz clic en `Crear Bloque`.
4. Selecciona **Mensaje de WhatsApp**.

En los mensajes simples, puedes subir archivos multimedia, aplicar formato al texto e insertar emojis. Para consultar las instrucciones y los límites de carga, consulta [Agregar mídias a su mensaje](/es/docs/tutorials/agregar-midias-a-su-mensaje). Para añadir un mensaje interactivo, configura una de las opciones descritas en las siguientes secciones.

## Configurar un mensaje interactivo

Los mensajes interactivos admiten respuestas rápidas, listas de opciones, solicitudes de ubicación y botones de URL.

### Añadir respuestas rápidas

Las respuestas rápidas permiten que los contactos seleccionen una de hasta 3 respuestas predefinidas. Cada respuesta debe ser diferente de las demás y puede contener hasta 20 caracteres.

Para configurar respuestas rápidas, sigue estos pasos:

1. En **Encabezado**, selecciona **Texto** o **Medio**.
2. Configura el encabezado según la opción seleccionada:
    - Para **Texto**, introduce el texto del encabezado.
    - Para **Medio**, sube un archivo desde tu dispositivo o introduce la URL. El encabezado admite imágenes, videos, archivos PDF y audios.
3. Introduce las respuestas rápidas.
4. (Opcional) Introduce un mensaje en el pie de página.
5. Haz clic en `Confirmar`.

### Añadir una lista de opciones

Una lista puede contener hasta 10 opciones. Cada opción tiene un título y puede incluir una descripción. A diferencia de las respuestas rápidas, la lista de opciones no admite archivos multimedia en el encabezado.

Para configurar una lista de opciones, sigue estos pasos:

1. En **Interacciones**, selecciona **Lista de Opciones**.
2. Completa los campos **Encabezado**, **Cuerpo** y **Pie de página**.
3. Añade las opciones y completa los siguientes campos para cada una:
    - **Título:** Introduce un nombre corto que identifique la opción.
    - **Descripción (opcional):** Introduce detalles que ayuden al contacto a entender la opción.
4. (Opcional) En **Botón de acción**, introduce el texto que aparece en el botón que abre la lista.
5. Haz clic en `Confirmar`.

### Solicitar la ubicación del contacto

Para solicitar la ubicación del contacto, sigue estos pasos:

1. En **Interacciones**, selecciona **Solicitar ubicación**.
2. En el campo de mensaje, introduce el texto que recibirá el contacto con la solicitud.

### Añadir un botón de URL

Un botón de URL dirige al contacto a un enlace. El mensaje también puede incluir texto personalizado en el encabezado y el pie de página.

Para añadir un botón de URL, sigue estos pasos:

1. En **Interacciones**, añade un **Botón de URL**.
2. Introduce la URL de destino.
3. (Opcional) Añade una variable a la URL.
4. (Opcional) Introduce texto para el encabezado y el pie de página.
