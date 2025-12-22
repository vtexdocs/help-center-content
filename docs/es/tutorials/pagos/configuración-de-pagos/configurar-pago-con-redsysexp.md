---
title: 'Configurar pago con RedsysEXP'
id: 7DSQeUbDEgH6yUvtXg4wly
status: PUBLISHED
createdAt: 2024-10-02T18:59:08.362Z
updatedAt: 2025-02-04T16:38:21.481Z
publishedAt: 2025-02-04T16:38:21.481Z
firstPublishedAt: 2024-10-02T19:25:48.987Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-redsysexp
legacySlug: configurar-pago-con-redsysexp
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos RedsysEXP. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito y  Bizum.

Para configurar RedsysEXP, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **RedsysEXP** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta RedsysEXP.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor RedsysEXP en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
- **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

8. En **ampos del proveedor**, complete los campos **Merchant code**, **Signature key** y **Merchant URL** con la información de su cuenta RedsysEXP.
9. En **Terminal**, **Currency**, **Language**, **3DS Enabled**, **Sanbox** y **Permite Tokenizar** seleccione las opciones deseadas.
10. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por RedsysEXP, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, RedsysEXP puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
