---
title: "Utilizando el disparo activo de flujos"
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2026-07-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: using-active-triggering-of-flows
locale: es
hidden: false
---

Cuando un contacto inicia un soporte humano en el [Live Desk](https://help.vtex.com/pt/docs/tutorials/vision-de-conjunto-de-live-desk), el chatbot continúa activo en segundo plano. Si no se hace nada, los mensajes automáticos configurados en los activadores pueden activarse durante la conversación e interrumpir el servicio. Para evitar este conflicto, usa un **grupo de control**: un [grupo estático](https://help.vtex.com/es/docs/tutorials/grupos-estaticos) que reúne a todos los contactos que están en soporte humano y que debe ser ignorado por los activadores.

> ⚠️ Si los contactos no se agregan a un grupo de control, el chatbot generará conflictos e interrumpirá el soporte humano, enviando los mensajes predeterminados configurados en tu entorno.

En este artículo aprenderás a:

- [Crear el grupo de control](#crear-el-grupo-de-control)
- [Agregar contactos al grupo de control](#agregar-contactos-al-grupo-de-control)
- [Ignorar el grupo de control en los activadores](#ignorar-el-grupo-de-control-en-los-activadores)
- [Remover contactos del grupo de control](#remover-contactos-del-grupo-de-control)
- [Enviar campos personalizados en el ticket](#enviar-campos-personalizados-en-el-ticket)

## Crear el grupo de control

El grupo de control es un grupo estático, es decir, los contactos se agregan y remueven manualmente o mediante cartas de acción en los flujos. Para crearlo, sigue los pasos a continuación:

1. Accede a la organización y el proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Contactos**.
3. Haz clic en `Crear Grupo`.
4. En la ventana emergente, ingresa el nombre del grupo (por ejemplo, _Soporte Humano_) y haz clic en `Crear`.

El grupo pasará a estar listado junto a las demás categorías de contactos en el menú lateral. Para más detalles, consulta el artículo [Grupos estáticos y grupos dinámicos](https://help.vtex.com/es/docs/tutorials/grupos-estaticos).

## Agregar contactos al grupo de control

El contacto debe entrar al grupo de control en el mismo [flujo de automatización](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos) en el que se abre el ticket de soporte humano. Así, pasa a ser controlado cuando la conversación se dirige a un agente.

En el flujo donde utilizas la carta de acción **Abrir un ticket con un agente humano**, agrega también la carta de acción **Añadir el contacto a un grupo** y selecciona el grupo _Soporte Humano_. Para esto, sigue los pasos a continuación:

1. Accede a la organización y el proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Flujo de automatización**.
3. Haz clic en el nombre del flujo responsable de abrir el ticket.
4. Dentro del flujo, haz clic en el bloque inicial.
5. En la ventana emergente, en **Cuando un contacto llega a este punto en su flujo...**, selecciona la opción **Añadir el contacto a un grupo**.
6. En **Seleccione los grupos a los que se agregará el contacto**, selecciona el grupo `Soporte Humano`.
7. Haz clic en **Confirme**.
8. Posiciona este nuevo bloque junto al bloque **Abrir un ticket con un agente humano**, de modo que el contacto entre al grupo al iniciar el servicio.
9. Guarda los cambios del flujo.

> ⚠️ Si abres tickets en flujos diferentes, es necesario agregar esta carta en todos los flujos que dirigen contactos al soporte humano.

Para saber más sobre estas cartas, consulta el artículo [Cartas de acción](https://help.vtex.com/es/docs/tutorials/cartas-de-accion).

## Ignorar el grupo de control en los activadores

Después de agregar el contacto al grupo, es necesario configurar cada activador del proyecto para ignorar los contactos que están en el grupo _Soporte Humano_. Así, el chatbot no interrumpe el servicio. Para esto, sigue los pasos a continuación:

1. Accede a la organización y el proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Contactos**.
3. Haz clic en **Activadores**.
4. Haz clic en un activador configurado en tu proyecto.
5. En el campo **Grupos para Excluir**, selecciona el grupo _Soporte Humano_.
6. Haz clic en `Guardar cambios`.
7. Repite el proceso para **todos los activadores** del proyecto.

Con esto, mientras el contacto esté en el grupo de control, no será activado por los mensajes automáticos, y el soporte humano continuará sin interrupciones. Para más información sobre activadores, consulta los artículos [Cómo crear un activador](https://help.vtex.com/es/docs/tutorials/como-crear-un-activador) y [Tipos de activadores](https://help.vtex.com/es/docs/tutorials/tipos-de-activadores).

## Remover contactos del grupo de control

Es importante remover el contacto del grupo de control cuando la sesión de soporte humano finalice. De lo contrario, continuará siendo ignorado por los activadores incluso después del fin del servicio.

Esta automatización involucra dos elementos con funciones distintas:

- Un **flujo de cierre**, que remueve el contacto del grupo de control.
- Un **activador**, que inicia ese flujo siempre que se cierra un ticket del Live Desk.

Por esto, primero crea el flujo de cierre y, luego, el activador que lo activa.

### Crear el flujo de cierre

El flujo de cierre requiere solo un bloque con la carta de acción **Eliminar el contacto de un grupo**, responsable de retirar el contacto del grupo de control. Para crearlo, sigue los pasos a continuación:

1. Accede a la organización y el proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Flujo de automatización**.
3. Haz clic en `Crear flujos` e ingresa un nombre para el flujo (por ejemplo, _Cierre de servicio_).
4. Dentro del flujo, haz clic en **Crear bloque**.
5. En la ventana emergente, en **Cuando un contacto llega a este punto en su flujo...**, selecciona la opción **Eliminar el contacto de un grupo**.
6. En **Grupos de los cuales se eliminará el contacto:**, selecciona el grupo _Soporte Humano_.
7. Haz clic en **Ok**.
8. Guarda los cambios del flujo.

### Crear el activador de cierre

Después de crear el flujo, configura el activador que lo inicia automáticamente cuando se cierra un ticket. Para esto, sigue los pasos a continuación:

1. Accede a la organización y el proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Contactos**.
3. Haz clic en **Activadores**.
4. Haz clic en `Crear activador`.
5. Haz clic en **Inicie un flujo después de cerrar un ticket.**.
6. En **Flujo**, selecciona el flujo de cierre creado anteriormente.
7. Deja el campo **Grupos para Excluir** vacío para aplicar el activador a todos los contactos.
8. Haz clic en `Crear activador`.

De esta forma, al cerrar el ticket, el activador inicia el flujo de cierre, que remueve el contacto del grupo de control. Así, el contacto vuelve a interactuar normalmente con el chatbot.

## Enviar campos personalizados en el ticket

Al abrir el ticket con la carta de acción **Abrir un ticket con un agente humano**, puedes enviar campos personalizados para el servicio. Estos campos deben definirse en el cuerpo de esa carta, en formato JSON, con cada campo como atributo de `custom_fields`, representado por su clave y valor.

El ejemplo a continuación configura el campo `origin`, cuyo valor es definido por un resultado de flujo (`origem`). Como el valor es de tipo texto, se informa entre comillas:

```json
{
  "custom_fields": {
    "origin": "@results.origem"
  }
}
