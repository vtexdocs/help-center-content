---
title: 'Configurar pago con LyraNetwork'
id: 1FlJmbVEqF8KJ5ueZUpCWM
status: PUBLISHED
createdAt: 2022-10-18T13:23:05.314Z
updatedAt: 2025-10-17T14:02:46.504Z
publishedAt: 2025-10-17T14:02:46.504Z
firstPublishedAt: 2022-10-18T16:31:23.474Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-lyra
legacySlug: configurar-pago-con-lyra
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos LyraNetwork.

Con este proveedor, su tienda puede realizar ventas a través de Lyra.

Para configurar LyraNetwork, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **LyraNetwork** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Lyra.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Lyra en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
- **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

8. En **Campos del Proveedor**, seleccione o complete los campos **Clave pública, Clave HMAC-SHA-256, Pago por token, Modo de ingreso de datos de pago, Número de intentos de pago con tarjeta, Tema, Modo compacto** según las instrucciones del proveedor.
9. Haga clic en `Guardar`.

## Configurar la condición de pago Lyra

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
3. Haz clic en la opción __Lyra__.
4. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
5. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
6. Si lo deseas, también puedes [configurar condiciones de pago especiales](/es/tutorial/condiciones-especiales--tutorials_456).
7. Haz clic en `Guardar`.

Después de seguir los pasos indicados, Lyra puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
