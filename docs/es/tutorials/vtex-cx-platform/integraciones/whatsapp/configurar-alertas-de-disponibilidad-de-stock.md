---
title: 'Configurar alertas de disponibilidad de stock'
createdAt: 2026-11-11T12:00:00.000Z
updatedAt: 2026-11-11T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-back-in-stock-alerts
locale: es
seeAlso:
  - "/es/docs/tutorials/shopping-assistant-preguntas-sugeridas"
  - "/es/docs/tutorials/configurar-la-opcion-avisame"
---

Las **alertas de disponibilidad de stock** permiten a los compradores solicitar una notificación de WhatsApp cuando un ítem sin stock vuelve a estar disponible. Los compradores se suscriben a través del Shopping Assistant ingresando su nombre y número de WhatsApp, sin necesidad de tener una cuenta en la tienda. Cuando el SKU está activo y disponible nuevamente, se envía el template **Back in stock** al número proporcionado.

> ℹ️ Las páginas de producto sin stock también permiten a los compradores explorar productos similares con el **Shopping Assistant**. Esto puede iniciar una conversación con el agente y ayudar al comprador a encontrar otro producto que satisfaga sus necesidades, en lugar de abandonar la página sin ningún hallazgo.

> ⚠️ La alerta de WhatsApp es independiente de la opción de email [Avísame](https://help.vtex.com/es/docs/tutorials/configurar-la-opcion-avisame). Ambas opciones pueden aparecer en la misma página de producto, pero una suscripción por email no suscribe al comprador a las alertas de WhatsApp.

## Antes de empezar

Antes de configurar la alerta, verifica lo siguiente:
- Tu tienda usa **FastStore** o **Store Framework**, y el **Shopping Assistant** está activo y configurado. La alerta solo aparece cuando el Shopping Assistant está configurado.
    - En **FastStore**, agrega el componente **Shopping Assistant** mediante **Global Sections** en el [CMS](https://help.vtex.com/es/docs/tutorials/cms-overview). Este componente agrega el script `agentic-cx` a la tienda. Luego, activa el **Shopping Assistant** en la aplicación VTEX CX.
- WhatsApp está conectado a la aplicación VTEX CX.
- La automatización **WhatsApp Back in Stock** está conectada.
- Meta aprobó el template de WhatsApp **Back in stock**. Espera hasta que el status del template cambie a **Approved** antes de activar la alerta, ya que los mensajes no se pueden enviar mientras el template esté pendiente o rechazado.

## Mostrar la alerta en las páginas de producto

Para mostrar el diálogo de suscripción en las páginas de producto sin stock, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > VTEX CX Platform > CX Dashboard**.
2. Ve a **Settings > Shopping Assistant**.
3. En **Back in stock alert**, activa **Show on out-of-stock product pages**.

El status de **Back in stock alert** cambia a **Active**, y los compradores pueden suscribirse en las páginas de producto elegibles.

Para dejar de mostrar el diálogo, desactiva **Show on out-of-stock product pages**.

> ⚠️ Desconectar la automatización **WhatsApp Back in Stock** también desactiva la alerta.

## Editar el template de WhatsApp

El template **Back in stock** define el mensaje de WhatsApp que los compradores reciben cuando un producto vuelve a estar disponible. Puedes personalizar su contenido, pero no puedes cambiar el nombre del template.

Para editar el template, sigue los pasos a continuación:

1. En la aplicación VTEX CX, accede a **Settings > WhatsApp > WhatsApp Back in Stock**.
2. Haz clic en `View details`.
3. En el template **Back in stock**, haz clic en `Edit template`.
4. Actualiza cualquiera de los siguientes elementos del template:
    - Idioma del mensaje.
    - Texto del mensaje.
    - Contenido multimedia del encabezado.
    - Pie de página.
    - Etiquetas de los botones. El template incluye un botón que abre el producto y otro que detiene los mensajes promocionales.
    - URL del botón del producto. La URL contiene una sección editable seguida de una variable fija `{{1}}`.
5. Revisa las variables que aparecen en el editor. Cada variable incluye su significado y un texto de fallback.
6. Mantén completada la condición de inicio. Esta condición determina cuándo se envía el mensaje.
7. Haz clic en `Save`.

> ⚠️ Mantén el texto del mensaje dentro de los 1.024 caracteres, el pie de página dentro de los 60 caracteres y cada etiqueta de botón dentro de los 25 caracteres. La URL del botón no puede contener espacios. El editor no valida estos límites antes de guardar, pero Meta rechaza los templates que los superan.

El texto del mensaje es obligatorio, y `Save` permanece no disponible cuando este campo está vacío. No puedes agregar más botones porque `Add element` no está disponible para este template.

Después de guardar los cambios, el template se envía a Meta para su revisión, lo que puede tardar hasta 24 horas. Durante este período, el template tiene un status pendiente. Una vez completada la revisión, el status cambia a aprobado o rechazado. Si Meta rechaza el template, la lista de templates muestra el status rechazado sin el motivo.

## Comportamiento de la alerta

En una página de producto sin stock, el Shopping Assistant muestra el diálogo **Get notified when it's back in stock**. El diálogo explica que el comprador recibirá un mensaje de WhatsApp cuando el producto esté disponible. Suscribirse no inicia el proceso de checkout.

Después de ingresar su **Name** y **WhatsApp number**, el comprador puede:

- Hacer clic en `Notify me` para suscribirse a la alerta.
- Hacer clic en `Not now` para cerrar el diálogo sin suscribirse.

> ⚠️ Los compradores reciben una alerta solo después de enviar el formulario de suscripción. Tener una cuenta en la tienda o un número de WhatsApp guardado en su perfil no los suscribe automáticamente.

Cada número de teléfono recibe una alerta por cada suscripción de producto. Enviar el formulario nuevamente para el mismo producto no crea otra alerta, mientras que suscribirse a un producto diferente crea una alerta independiente para ese producto.
