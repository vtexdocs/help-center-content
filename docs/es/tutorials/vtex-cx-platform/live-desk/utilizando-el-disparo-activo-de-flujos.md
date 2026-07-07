---
title: "Utilizando el disparo activo de flujos"
id: 2G7HPM4mD3vuxPHUgtexb7
status: PUBLISHED
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2026-07-07T00:00:00.000Z
publishedAt: 2025-10-03T14:22:54.202Z
firstPublishedAt: 2025-10-03T14:22:54.202Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-active-triggering-of-flows
legacySlug: utilizando-el-disparo-activo-de-flujos
locale: es
subcategoryId: 6Jkw23mYV23p4V33O1Hjdh
---

El disparo activo de flujos permite que los agentes inicien conversaciones en Live Desk enviando flujos a contactos o grupos de contactos. Esta función es útil para comunicaciones activas, como avisos, confirmaciones o seguimientos, y puede utilizar plantillas de mensajes aprobadas por WhatsApp cuando la conversación comienza por este canal.

En este artículo aprenderás cómo:

- [Habilitar un flujo existente para envío en Live Desk](#habilitar-un-flujo-existente-para-envio-en-live-desk)
- [Crear un flujo con envío de plantilla de mensaje](#crear-un-flujo-con-envio-de-plantilla-de-mensaje)
- [Activar el disparo de flujos en Live Desk](#activar-el-disparo-de-flujos-en-live-desk)
- [Disparar un flujo](#disparar-un-flujo)

## Habilitar un flujo existente para envío en Live Desk

Para que un flujo aparezca como opción de envío en Live Desk, debe estar identificado con la etiqueta `chats`. Utiliza esta etiqueta en los flujos que los agentes podrán disparar durante el chat de soporte:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Flujo de automatización**.
3. Marca la casilla junto al flujo deseado.
4. Haz clic en la pestaña **Etiquetar** y luego en `Nueva Etiqueta`.
5. En **Nombre**, ingresa `chats`.
6. Haz clic en `Crear`.


> ℹ️ Si la etiqueta `chats` ya existe, selecciona el flujo deseado, haz clic en la pestaña **Etiquetar** y marca la casilla `chats`.


## Crear un flujo con envío de plantilla de mensaje

Solo los usuarios con permiso de administrador, moderador o colaborador pueden crear flujos. Al crear un flujo para disparo activo, incluye un bloque de envío de mensaje y selecciona una plantilla de mensaje aprobada para iniciar la conversación por WhatsApp.

Antes de configurar el flujo, verifica que la plantilla de mensaje ya esté registrada y aprobada por WhatsApp. Para más información, consulta [WhatsApp: Cómo crear Template Messages](https://help.vtex.com/pt/docs/tutorials/whatsapp-como-criar-template-messages).

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en el ícono **Flujo de automatización**.
3. Haz clic en `Crear Flujos`.
4. Completa los campos de nombre, tipo de flujo y, si es necesario, palabras clave de los disparadores globales.
5. Haz clic en `Crear`.
6. Para insertar un bloque, haz clic en el botón `Crear bloque`.
7. Completa la información necesaria para tu bloque.
8. Haz clic en `Confirme`.
9. Continúa creando la cantidad de bloques según las características del flujo que deseas disponibilizar en la tienda.


## Activar el disparo de flujos en Live Desk

Además de habilitar el flujo con la etiqueta `chats`, es necesario activar el disparo de flujos en el sector de Live Desk. Esta configuración define qué sectores tendrán la función disponible para los agentes:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Configuración**.
3. Haz clic en **Live Desk**.
4. Haz clic en la pestaña **Sectores**.

> ℹ️ Si aún no existen sectores configurados en Live Desk, haz clic en `Nuevo sector` y completa la información solicitada en la página **Nuevo sector**.

5. En el sector deseado, haz clic en el botón de acciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
6. Haz clic en `Editar`.
7. En **Opciones adicionales**, activa la opción **Envío de plantillas de mensajes**.
8. Haz clic en `Guardar cambios`.


## Disparar un flujo

Después de que el flujo esté habilitado y el sector permita disparos activos, los agentes podrán seleccionar los contactos y enviar el flujo por Live Desk:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Live Desk**.
3. Haz clic en `Opciones`.
4. Haz clic en `Flujos`.
5. Marca las casillas de los contactos a los que deseas disparar el flujo.
6. Haz clic en `Continuar`.
7. En **Seleccionar flujo**, elige el flujo deseado.
8. Haz clic en `Enviar`.

Los contactos seleccionados recibirán el flujo. Cuando un contacto responda, la conversación quedará disponible para chat de soporte en Live Desk.