---
title: "Disparo activo de flujos"
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2026-11-10T19:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: using-active-triggering-of-flows
locale: es
hidden: false
---

El disparo activo de flujos permite que los agentes inicien conversaciones en Live Desk enviando flujos a contactos o grupos de contactos. Este recurso es útil para comunicaciones activas, como avisos, confirmaciones o seguimientos, y puede usar modelos de mensaje aprobados por WhatsApp cuando la conversación comienza por ese canal.

Cuando una plantilla incluye variables configuradas para edición, el agente completa esos valores antes del envío.

En este artículo se describe cómo:

- [Activar flujo existente para envío en Live Desk](#activar-un-flujo-existente-para-envio-en-live-desk)
- [Crear flujo con envío de mensajes de plantilla](#crear-flujo-con-envio-de-mensajes-de-plantilla)
- [Activar disparo de flujos en Live Desk](#activar-disparo-de-flujos-en-live-desk)
- [Disparar flujo](#disparar-flujo)
- [Mapear variables de la plantilla](#mapear-variables-de-la-plantilla)

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
3. Haz clic en `Crear flujos`.
4. Completa los campos de nombre, tipo de flujo y, si es necesario, palabras clave de los disparadores globales.
5. Haz clic en `Crear`.
6. Para insertar un bloque, haz clic en el botón `Crear bloque`.
7. Completa la información necesaria para tu bloque.
8. Haz clic en `Confirmar`.
9. Continúa creando la cantidad de bloques según las características del flujo que deseas disponibilizar en la tienda.

Para que el agente edite una variable de la plantilla en Live Desk, completa esa variable en la pestaña **WhatsApp** de la tarjeta de enviar mensaje con `@trigger.params.variable_name`. Sustituye `variable_name` por el nombre que debe aparecer en **Mapeo de variables**. Una variable completada con otra expresión, como `@contact.name`, se aplica automáticamente y no se muestra para edición. Para saber cómo completar estos campos, consulta [Envío activo de mensajes en WhatsApp](https://help.vtex.com/es/docs/tutorials/envio-activo-de-mensajes-en-whatsapp).

## Activar disparo de flujos en Live Desk

Además de activar el flujo con la etiqueta `chats`, debes activar el disparo de flujos en el departamento de Live Desk. Esta configuración define los departamentos que tendrán el recurso disponible para los agentes:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Configuración**.
3. Haz clic en **Live Desk**.
4. Haz clic en la pestaña **Sectores**.

> ℹ️ Si aún no hay sectores configurados en Live Desk, haz clic en `Nuevo sector` y completa la información solicitada en la página **Nuevo departamento**.

5. En el departamento deseado, haz clic en el botón de acciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
6. Haz clic en `Editar`.
7. En **Opciones adicionales**, activa la opción **Envío de plantillas de mensajes**.
8. Haz clic en `Guardar`.

## Disparar flujo

Una vez que el flujo está activado y el departamento permite disparos activos, los agentes pueden seleccionar los contactos y enviar el flujo desde Live Desk:

1. Accede a tu organización en el dashboard de [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Live Desk**.
3. Haz clic en `Ver opciones`.
4. Haz clic en `Flujos`.
5. Busca un contacto por número de teléfono.
        > ℹ️ Para un número de teléfono brasileño, la búsqueda encuentra el contacto tanto si el número está guardado con el noveno dígito como sin él. No se requiere ninguna configuración.
6. Marca las casillas de selección de los contactos a los que deseas disparar el flujo.
7. Haz clic en `Continuar`.
8. En **Seleccionar flujo**, elige el flujo deseado.
9. Si el flujo no tiene variables de plantilla configuradas con `@trigger.params`, haz clic en `Enviar`.

Los contactos seleccionados recibirán el flujo. Cuando los contactos respondan, las conversaciones estarán disponibles como chats de soporte en Live Desk.

## Mapear variables de la plantilla

Si las plantillas de WhatsApp del flujo incluyen variables definidas como `@trigger.params.variable_name`, Live Desk abre **Mapeo de variables** después de que seleccionas el flujo. El nombre después de `params.` es la etiqueta de cada campo. Para saber cómo configurar estas variables, consulta [Envío activo de mensajes en WhatsApp](https://help.vtex.com/es/docs/tutorials/envio-activo-de-mensajes-en-whatsapp).

1. Para cada variable, selecciona un campo de contacto o escribe un valor de texto. El campo muestra `Selecciona un campo correspondiente o escribe un texto`.
2. Revisa **Vista previa de la 1.ª plantilla**. Las variables que hacen referencia a campos de contacto se muestran con valores de ejemplo de los contactos seleccionados.
3. Cuando el flujo tiene más de una plantilla con variables, la pantalla muestra la plantilla actual, como **Plantilla 1 de 3**, en **Define las variables de la 1.ª plantilla**. Haz clic en `Siguiente plantilla` y repite el mapeo de cada plantilla.
4. Selecciona `Lo revisé y estoy listo para enviarlo.`
5. Haz clic en `Enviar`.

La plantilla enviada a cada contacto usa los valores de este mapeo. Cuando un contacto responda, la conversación estará disponible como chat de soporte en Live Desk.
