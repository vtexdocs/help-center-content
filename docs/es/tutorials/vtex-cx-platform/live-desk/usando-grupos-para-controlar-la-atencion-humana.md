---
title: 'Usar grupos para controlar el soporte humano'
createdAt: 2025-09-12T16:48:55.585Z
updatedAt: 2026-07-28T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: using-groups-to-organize-human-attendance
locale: es
hidden: false
---

Cuando un contacto inicia un chat de soporte humano en [Live Desk](https://help.vtex.com/es/docs/tutorials/informacion-general-de-live-desk) el chatbot sigue activo en segundo plano. Si no se hace nada, los mensajes automáticos configurados en los triggers pueden activarse durante la conversación e interrumpir el chat de soporte. Para evitar ese conflicto usa un **grupo de control**: un [grupo estático](https://help.vtex.com/es/docs/tutorials/grupos-estaticos) que reúne a todos los contactos que están en chats de soporte humano y que los triggers deben ignorar.

> ⚠️ Si los contactos no se agregan a un grupo de control, el chatbot generará un conflicto e interrumpirá el chat de soporte humano, enviando los mensajes predeterminados configurados en tu entorno.

Este artículo describe cómo:

- [Crear el grupo de control](#crear-el-grupo-de-control)
- [Agregar contactos al grupo de control](#agregar-contactos-al-grupo-de-control)
- [Ignorar el grupo de control en los triggers](#ignorar-el-grupo-de-control-en-los-triggers)
- [Remover contactos del grupo de control](#remover-contactos-del-grupo-de-control)
- [Enviar campos personalizados en el ticket](#enviar-campos-personalizados-en-el-ticket)

## Crear el grupo de control

El grupo de control es un grupo estático, es decir, los contactos se agregan y se remueven manualmente o mediante tarjetas de acción en los flujos. Lo puedes crear siguiendo los pasos a continuación:

1. Accede a la organización y al proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral haz clic en **Contactos**.
3. Haz clic en `Crear grupo`.
4. En la ventana emergente ingresa el nombre del grupo (por ejemplo, _Soporte humano_) y haz clic en `Crear`.

El grupo se mostrará junto con las demás categorías de contactos en el menú lateral. Para más detalles consulta el artículo [Grupos estáticos](https://help.vtex.com/es/docs/tutorials/grupos-estaticos).

## Agregar contactos al grupo de control

El contacto debe ingresar al grupo de control en el mismo [flujo de automatización](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos) en el que se abre el ticket de soporte humano. Así se controla el momento en que la conversación se dirige a un representante.

En el flujo donde utilizas la tarjeta de acción **Abrir un ticket con un representante humano** agrega también la tarjeta de acción **Agregar un contacto al grupo** y selecciona el grupo _Soporte humano_. Para agregar la tarjeta sigue los pasos a continuación:

1. Accede a la organización y al proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral haz clic en **Flujo de automatización**.
3. Haz clic en el nombre del flujo que abre el ticket.
4. Dentro del flujo haz clic en el bloque inicial.
5. En la ventana emergente, en **Cuando un contacto llegue a este punto del flujo...**, selecciona la opción **Agregar el contacto a un grupo**.
6. En **Selecciona los grupos para agregar el contacto** selecciona el grupo `Soporte humano`.
7. Haz clic en **Confirmar**.
8. Coloca este nuevo bloque junto al bloque **Abrir un ticket con un representante humano**, de modo que el contacto ingrese al grupo al iniciar el chat de soporte.
9. Guarda los cambios del flujo.

> ⚠️ Si abres tickets en flujos diferentes es necesario agregar esta tarjeta en todos los flujos que dirigen contactos a soporte humano.

Para más información sobre las tarjetas, consulta el artículo [Tarjetas de acción](https://help.vtex.com/es/docs/tutorials/cartas-de-accion).

## Ignorar el grupo de control en los triggers

Después de agregar el contacto al grupo es necesario configurar cada trigger del proyecto para que ignore a los contactos que están en el grupo _Soporte humano_. Así el chatbot no interrumpe el chat de soporte. Para configurar los triggers sigue los pasos a continuación:

1. Accede a la organización y al proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral haz clic en **Contactos**.
3. Haz clic en **Triggers**.
4. Haz clic en un trigger configurado en tu proyecto.
5. En el campo **Grupos a excluir** selecciona el grupo _Soporte humano_.
6. Haz clic en `Guardar cambios`.
7. Repite el proceso para **todos los triggers** del proyecto.

Mientras el contacto esté en el grupo de control no recibirá mensajes automáticos y el soporte humano continuará sin interrupciones. Para más información sobre triggers, consulta los artículos [Cómo crear un trigger](https://help.vtex.com/es/docs/tutorials/como-crear-un-activador) y [Tipos de trigger](https://help.vtex.com/es/docs/tutorials/tipos-de-activadores).

## Remover contactos del grupo de control

Es importante remover el contacto del grupo de control cuando finalice la sesión de soporte humano. De lo contrario, los triggers lo ignorarán incluso después de finalizar el chat de soporte.

Esta automatización utiliza dos elementos con funciones distintas:

- Un **flujo de cierre**, que remueve el contacto del grupo de control.
- Un **trigger**, que inicia el flujo cada vez que se cierra un ticket de Live Desk.

Primero crea el flujo de cierre y luego el trigger que lo activa.

### Crear el flujo de cierre

El flujo de cierre requiere un solo bloque con la tarjeta de acción **Remover contacto de un grupo**, que remueve el contacto del grupo de control. Para crearlo, sigue los pasos a continuación:

1. Accede a la organización y el proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral haz clic en **Flujo de automatización**.
3. Haz clic en `Crear flujo` e ingresa un nombre para el flujo (por ejemplo, _Cerrar chat de soporte_).
4. Dentro del flujo haz clic en **Crear bloque**.
5. En la ventana emergente, en **Cuando un contacto llegue a este punto del flujo...**, selecciona la opción **Remover el contacto de un grupo**.
6. En **Grupos de donde se removerá el contacto:**, selecciona el grupo _Soporte humano_.
7. Haz clic en **OK**.
8. Guarda los cambios del flujo.

### Crear el trigger de cierre

Después de crear el flujo configura el trigger que lo inicia automáticamente cuando se cierra un ticket siguiendo los pasos a continuación:

1. Accede a la organización y el proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral haz clic en **Contactos**.
3. Haz clic en **Triggers**.
4. Haz clic en `Crear trigger`.
5. Haz clic en **Iniciar un flujo después de cerrar un ticket.**.
6. En **Flujo**, selecciona el flujo de cierre creado anteriormente.
7. Deja el campo **Grupos a excluir** vacío para aplicar el trigger a todos los contactos.
8. Haz clic en `Crear trigger`.

De esta forma, al cerrar el ticket el trigger inicia el flujo de cierre que remueve al contacto del grupo de control. Así, el contacto vuelve a interactuar normalmente con el chatbot.

## Enviar campos personalizados en el ticket

Al abrir el ticket con la tarjeta de acción **Abrir un ticket con un representante humano** puedes enviar campos personalizados para el chat de soporte. Estos campos deben definirse en el cuerpo de la tarjeta en formato JSON y cada campo como atributo de `custom_fields`, representado por su clave y valor.

El siguiente ejemplo configura el campo `origin`, cuyo valor se define mediante un resultado de flujo (`origen`). Como el valor es de tipo texto se indica entre comillas:

```json
{
  "custom_fields": {
    "origin": "@results.origen"
  }
}
```

> ℹ️ Los valores de texto deben indicarse entre comillas. Los valores numéricos o booleanos pueden indicarse sin comillas.
