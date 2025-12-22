---
title: 'Configurar pago con Zoop'
id: 5bRYiUjX1sewZuON8HA6Ld
status: PUBLISHED
createdAt: 2023-02-13T18:17:14.240Z
updatedAt: 2024-01-23T21:58:29.652Z
publishedAt: 2024-01-23T21:58:29.652Z
firstPublishedAt: 2023-02-13T18:50:09.746Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-zoop
legacySlug: configurar-pago-con-zoop
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Zoop. Con este proveedor, tu tienda puede realizar ventas a través de tarjetas de crédito y  boletos bancarios.

Para configurar Zoop, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Zoop__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Zoop.
5. En **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
- **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

6. En **¿Activar split y enviar receptores?**, seleccione si los pagos divididos estarán disponibles para el marketplace y sellers.
7. Haga clic en `Guardar`.

Para configurar las condiciones de pago, acceda a [Configurar condiciones de pago](/es/tutorial/condiciones-de-pago#).

Después de seguir los pasos indicados, Zoop puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
