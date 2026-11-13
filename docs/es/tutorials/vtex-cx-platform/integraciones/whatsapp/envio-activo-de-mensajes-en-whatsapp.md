---
title: "Envío activo de mensajes en WhatsApp"
id: 20E0eUtogj84N0vf6nZeia
status: PUBLISHED
createdAt: 2025-09-15T15:27:41.354Z
updatedAt: 2026-11-13T14:40:00.000Z
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

El envío activo y el envío pasivo difieren en quién inicia la conversación.

El **envío pasivo** ocurre cuando el usuario final se pone en contacto con la empresa de forma voluntaria. En ese momento, se inicia un flujo de conversación a partir del primer mensaje enviado por el usuario a la empresa.

Por otro lado, el **envío activo** ocurre cuando la empresa toma la iniciativa de iniciar una conversación con el usuario. Para realizar el envío activo, el mensaje a enviar debe pasar por un proceso de validación guiado por Meta y, solo después de su preaprobación, es posible enviarlo a los usuarios. En la VTEX CX Platform, llamamos a este modelo de mensaje "Template Message".

## Enviar por el módulo de flujos

Después de la preaprobación del Template Message, se puede comenzar a construir el flujo conversacional. El primer paso es agregar la tarjeta "Actualizar Contacto" y elegir la opción "Canal", ya que esta definirá desde qué canal se realizará el envío. En esta etapa, elige tu canal de WhatsApp.

El **segundo paso** es agregar la tarjeta "Enviar mensaje", en la casilla de texto escribe la siguiente expresión: `@(“”)`.

La expresión anterior indica que se enviará un Template Message (modelo de mensaje) y que este campo no será tomado en cuenta, ya que el modelo de mensaje a enviar a los clientes puede seleccionarse en la pestaña "WhatsApp", ubicada en la misma tarjeta de "Enviar Mensaje". Al hacer clic en la pestaña "WhatsApp", es posible acceder a los mensajes que han sido preaprobados y seleccionarlos para su envío.

También puedes añadir variables en el modelo. `@contact.name` inserta el nombre del contacto registrado en WhatsApp.

### Variables que el agente completa en Live Desk

`@contact.name` se completa automáticamente con los datos del contacto. Para que el agente edite una variable al disparar el flujo desde Live Desk, ingresa `@trigger.params.variable_name` en el campo de esa variable en la pestaña **WhatsApp**. Sustituye `variable_name` por el nombre que debe aparecer en **Mapeo de variables**. Tú defines este nombre en el flujo. No necesita ser un campo de contacto.

Por ejemplo, en la plantilla `retornar_contato`, los campos de variable pueden ser `@trigger.params.contact_name` y `@trigger.params.atendente`. En Live Desk, la pantalla de mapeo identifica estos campos como **Variable contact_name** y **Variable atendente**.

Si el flujo incluye más de una plantilla con variables, usa `@trigger.params.variable_name` en todas las variables que el agente deba completar.

Para saber cómo el agente completa estos valores antes del envío, consulta [Disparo activo de flujos](https://help.vtex.com/es/docs/tutorials/utilizando-el-disparo-activo-de-flujos).

Este proceso siempre se realiza para el primer mensaje y es exclusivo para el canal de WhatsApp. Después de la entrega del Template Message, si el usuario responde, la empresa puede continuar el flujo con las demás tarjetas de acción. Para que el usuario pueda responder, agrega una tarjeta de esperar respuesta.

Después de seleccionar el mensaje, haz clic en el botón "Enviar Flujo", ubicado en la esquina superior derecha de la pantalla, y realizar el envío a un contacto específico o a un grupo de contactos.

Para comprobar el envío, ve a **Estudio** y abre la pestaña **Flujo**. El historial muestra los errores y los flujos iniciados.

## Enviar desde el módulo de estudio

También es posible enviar un Template Message desde el módulo "Estudio", seleccionando el contacto al que deseas enviar el mensaje y haciendo clic en el menú de opciones, ubicado en la esquina superior derecha. Luego, selecciona "Iniciar en el Flujo", elige el flujo y envía. Esta es otra posibilidad que ofrece la VTEX CX Platform para realizar el envío activo.

El proceso de envío activo es el mismo para todos los canales de comunicación, pero la creación del Template Message es exclusiva para el canal de WhatsApp. Esto significa que, mientras que el uso del Template Message no es necesario para otros canales, en WhatsApp solo es posible enviar un modelo de mensaje (inicio del flujo). En los demás canales, es posible enviar más de un mensaje sin limitaciones previas.
