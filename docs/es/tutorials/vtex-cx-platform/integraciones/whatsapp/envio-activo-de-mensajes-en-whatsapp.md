---
title: "Envío activo de mensajes en WhatsApp"
id: 20E0eUtogj84N0vf6nZeia
status: PUBLISHED
createdAt: 2025-09-15T15:27:41.354Z
updatedAt: 2026-11-13T18:56:00.000Z
publishedAt: 2025-10-03T14:20:32.448Z
firstPublishedAt: 2025-10-03T14:20:32.448Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: active-message-dispatch-on-whatsapp
legacySlug: envio-activo-de-mensajes-en-whatsapp
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

El envío activo es cuando inicias una conversación con un contacto, por ejemplo para enviar una notificación, una confirmación o un seguimiento. Es distinto del envío pasivo, que empieza cuando el contacto te envía el primer mensaje.

En WhatsApp, el envío activo requiere una plantilla de mensaje. Meta debe aprobar cada plantilla antes de que puedas enviarla. VTEX CX Platform usa el mismo proceso de envío activo en todos los canales, pero solo WhatsApp requiere una plantilla de mensaje. En los demás canales, la plantilla no es necesaria y puedes enviar más de un mensaje.

## Antes de comenzar

Antes de comenzar, confirma que:

- El canal de WhatsApp está conectado. Para más información, consulta [WhatsApp: Integración con VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/whatsapp-integracion-con-vtex-cx-platform).
- La plantilla de mensaje que quieres enviar está aprobada por Meta. Para crear una, consulta [WhatsApp: Cómo crear mensajes de plantilla](https://help.vtex.com/es/docs/tutorials/whatsapp-como-crear-mensajes-de-plantilla).
- Tu rol permite crear flujos. Solo los usuarios con permiso de administrador, moderador o colaborador pueden crear flujos.

## Crear un flujo que empieza con una plantilla de mensaje

> ⚠️ En WhatsApp, el primer mensaje del flujo debe ser una plantilla de mensaje. Los demás tipos de mensaje no llegan a un contacto que no te ha escrito en las últimas 24 horas.

Para crear el flujo, sigue estos pasos:

1. Agrega una carta **Actualizar contacto** al flujo.
2. En la opción **Canal**, selecciona tu canal de WhatsApp. Esta opción define el canal desde el que se envía el mensaje.
3. Agrega una carta **Enviar mensaje** después de la carta **Actualizar contacto**.
4. En el cuadro de texto de la carta **Enviar mensaje**, ingresa `@(“”)`.

    Esta expresión no modifica el mensaje. La plantilla de mensaje se selecciona en la pestaña **WhatsApp** de la misma carta.

5. En la carta **Enviar mensaje**, haz clic en la pestaña **WhatsApp**. Selecciona la plantilla de mensaje que quieres enviar. La pestaña muestra solo las plantillas aprobadas por Meta.
6. (Opcional) Agrega variables para personalizar el mensaje. Por ejemplo, `@contact.name` inserta el nombre del contacto.
7. (Opcional) Agrega el resto del flujo después de la carta **Enviar mensaje**. Para que el contacto pueda responder, agrega una carta **Esperar respuesta**.

## Permitir que el agente complete variables en Live Desk

Si un agente de Live Desk necesita ingresar un valor antes de que se envíe la plantilla, configura la variable de esta forma:

1. En el campo de la variable, en la pestaña **WhatsApp**, ingresa `@trigger.params.variable_name`. Sustituye `variable_name` por el nombre que debe aparecer en **Mapeo de variables**. Tú defines este nombre en el flujo. No necesita corresponder a un campo de contacto.
2. Si el flujo incluye más de una plantilla de mensaje con variables, repite el paso 1 para cada variable que el agente deba completar.

Las variables que usan otras expresiones, como `@contact.name`, se completan automáticamente y no aparecen para edición.

Por ejemplo, una plantilla llamada `retornar_contacto` puede tener las variables `@trigger.params.nombre_contacto` y `@trigger.params.agente`. En Live Desk, la pantalla de mapeo muestra estos campos como **Variable nombre_contacto** y **Variable agente**.

Para saber cómo el agente completa estos valores antes del envío, consulta [Disparo activo de flujos](https://help.vtex.com/es/docs/tutorials/utilizando-el-disparo-activo-de-flujos).

## Disparar el flujo

Para enviar el flujo a los contactos, sigue estos pasos:

1. Haz clic en `Enviar flujo` en la esquina superior derecha de la pantalla.
2. Selecciona el contacto o el grupo de contactos que debe recibir el flujo y envíalo.

## Enviar desde el módulo de Contactos

También puedes iniciar un flujo para un solo contacto desde el módulo **Contactos**:

1. Selecciona el contacto que debe recibir el mensaje.
2. Haz clic en el menú de opciones en la esquina superior derecha.
3. Haz clic en `Iniciar en el flujo`, selecciona el flujo y envíalo.

## Más información

- [Mensajes de plantilla de WhatsApp: Obstáculos y configuraciones](https://help.vtex.com/es/docs/tutorials/mensajes-de-plantilla-de-whatsapp-obstaculos-y-configuraciones): Aprende a resolver plantillas de mensaje rechazadas o desactivadas.
- [Flujo de automatización](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos)
