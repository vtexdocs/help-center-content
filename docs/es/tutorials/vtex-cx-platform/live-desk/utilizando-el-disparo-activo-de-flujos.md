---
title: "Disparo activo de flujos"
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2026-07-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: using-active-triggering-of-flows
locale: es
hidden: false
---

El disparo activo de flujos permite que los agentes inicien conversaciones en Live Desk enviando flujos a contactos o grupos de contactos. Este recurso es útil para comunicaciones activas, como avisos, confirmaciones o seguimientos, y puede usar modelos de mensaje aprobados por WhatsApp cuando la conversación comienza por ese canal.

En este artículo se describe cómo:

- [Activar flujo existente para envío en Live Desk](#activar-un-flujo-existente-para-envio-en-live-desk)
- [Crear flujo con envío de mensajes de plantilla](#crear-flujo-con-envio-de-mensajes-de-plantilla)
- [Activar disparo de flujos en Live Desk](#activar-disparo-de-flujos-en-live-desk)
- [Disparar flujo](#disparar-flujo)

## Activar flujo existente para envío en Live Desk

Para que un flujo se muestre como opción de envío en Live Desk debe estar identificado con la etiqueta `chats`. Debes usar esta etiqueta en los flujos que los agentes pueden disparar durante los chats de soporte:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Flujo de automatización**.
3. Marca la casilla de selección junto al flujo deseado.
4. Haz clic en la pestaña **Etiquetar** y luego en `Nueva etiqueta`.
5. En **Nombre**, ingresa `chats`.
6. Haz clic en `Crear`.

> ℹ️ Si la etiqueta `chats` ya existe, selecciona el flujo deseado, haz clic en la pestaña **Etiqueta** y marca la casilla de selección `chats`.

## Crear flujo con envío de mensajes de plantilla

Solo los usuarios con permiso de administrador, moderador o colaborador pueden crear flujos. Al crear un flujo para disparo activo debes incluir un bloque de envío de mensaje y seleccionar una plantilla de mensaje aprobada para iniciar la conversación por WhatsApp.

Antes de configurar el flujo, verifica si la plantilla de mensaje ya está registrada y aprobada por WhatsApp. Para más información, consulta [WhatsApp: Cómo crear mensajes de plantilla](https://help.vtex.com/es/docs/tutorials/whatsapp-como-crear-mensajes-de-plantilla).

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en el ícono **Flujo de automatización**.
3. Haz clic en `Crear flujo`.
4. Completa los campos de nombre, tipo de flujo y, si es necesario, palabras clave de los disparadores globales.
5. Haz clic en `Crear`.
6. Para insertar un bloque, haz clic en el botón `Crear bloque`.
7. Completa la información necesaria para tu bloque.
8. Haz clic en `Confirmar`.
9. Continúa creando la cantidad de bloques según las características del flujo que deseas disponibilizar en la tienda.

## Activar disparo de flujos en Live Desk

Además de activar el flujo con la etiqueta `chats`, debes activar el disparo de flujos en el departamento de Live Desk. Esta configuración define los departamentos que tendrán el recurso disponible para los agentes:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Configuración**.
3. Haz clic en **Live Desk**.
4. Haz clic en la pestaña **Departamentos**.

> ℹ️ Si aún no hay departamentos configurados en Live Desk, haz clic en `Nuevo departamento` y completa la información solicitada en la página **Nuevo departamento**.

5. En el departamento deseado, haz clic en el botón de acciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
6. Haz clic en `Editar`.
7. En **Opciones adicionales**, activa la opción **Envío de plantillas de mensajes**.
8. Haz clic en `Guardar`.

## Disparar flujo

Una vez que el flujo está activado y el departamento permite disparos activos, los agentes pueden seleccionar los contactos y enviar el flujo desde Live Desk:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Live Desk**.
3. Haz clic en `Opciones`.
4. Haz clic en `Flujos`.
5. Marca las casillas de selección de los contactos a los que deseas disparar el flujo.
6. Haz clic en `Continuar`.
7. En **Seleccionar flujo**, elige el flujo deseado.
8. Haz clic en `Enviar`.

Los contactos seleccionados recibirán el flujo. Cuando los contactos respondan, las conversaciones estarán disponibles como chats de soporte en Live Desk.
