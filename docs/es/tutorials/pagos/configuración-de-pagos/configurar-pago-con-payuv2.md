---
title: 'Configurar pago con PayUv2'
id: 7twMgKUZZtJGmR72wS1k3n
status: PUBLISHED
createdAt: 2024-03-08T18:30:40.587Z
updatedAt: 2024-03-13T15:35:06.533Z
publishedAt: 2024-03-13T15:35:06.533Z
firstPublishedAt: 2024-03-08T18:47:05.125Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payuv2
legacySlug: configurar-pago-con-payuv2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PayUv2. Con este proveedor, su tienda puede realizar ventas a través de tarjetas (crédito, débito, tienda cobranded, tienda red propia), pagarés y boletos.

Para configurar PayUv2 siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **PayUv2** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta PayUv2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PayUv2 en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
- **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

8. Si desea utilizar [Split de pagos](/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
9. En **Campos de proveedor**, en el campo **Tipo Autorizacion**, seleccione si sus transacciones de pago se ejecutan en flujos de uno o dos pasos. Para flujos de un solo paso, seleccione **Autorización y Captura**. Para flujos de dos pasos, seleccione **Pre-Autorizacion**.
10. En **Public Key**, ingresa tu clave API de PayU.
11. En **Idioma**, seleccione qué idioma se debe utilizar en el sistema PayU.
12. En **Expiración pago (días)**, seleccione el período en el que desea configurar el vencimiento de los pagos realizados mediante pagarés.
13. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por PayUv2, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PayUv2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
