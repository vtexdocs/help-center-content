---
title: 'Configurar pago con K8Bank'
id: 1ewZll1fwjClvp5Wl1uES1
status: PUBLISHED
createdAt: 2023-09-18T13:14:17.375Z
updatedAt: 2024-01-23T17:56:32.780Z
publishedAt: 2024-01-23T17:56:32.780Z
firstPublishedAt: 2023-09-18T13:48:29.694Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-k8bank
legacySlug: configurar-pago-con-k8bank
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos K8Bank. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de credito, debito, private y cobranded labels, boletos y PIX.

Para configurar K8Bank, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **K8Bank** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta K8Bank.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor K8Bank en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
    - **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
    - **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
    - **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
    - **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.
8. Si desea utilizar Split de pagos en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
9. En **Campos del Proveedor**, complete los campos **cnpj** y **CobrancasClientId** según las instrucciones del proveedor.
10. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por K8Bank, acceda a [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda a [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, K8Bank puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
