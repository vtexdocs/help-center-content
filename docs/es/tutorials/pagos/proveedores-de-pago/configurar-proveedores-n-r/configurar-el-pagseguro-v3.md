---
title: 'Configurar pago con PagBankV3'
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2025-08-18T13:11:08.593Z
publishedAt: 2025-08-18T13:11:08.593Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-pagseguro-v3
legacySlug: configurar-el-pagseguro-v3
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PagBankV3. A través de este proveedor, su tienda puede realizar ventas mediante boleto, PIX, Pagar com PagBank, tarjetas de débito y crédito.

Para configurar PagBankV3, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **PagBankV3** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, haga clic en **Autorizar com OAuth**. En este punto, serás redirigido a la página de PagBank, donde deberás acceder a tu cuenta y autorizar la conexión de VTEX a tu cuenta de PagBank. Luego del proceso de autorización, regresará automáticamente al VTEX Admin.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagBankV3 en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en _**Activar modo de prueba**.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
- **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

8. Si desea utilizar [Split de pagos](/es/docs/tutorials/split-de-pagos) en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
9. En **Campos del proveedor**, seleccione los campos **Prazo para captura do pagamento**, **Gostaria de ativar o repasse do liable das transações para o seller com maior valor a receber?**, **Prazo de expiração do QR Code PIX**, **Ativar 3DS**, y  **Nome da Loja - Descrição na fatura do comprador** según las instrucciones del proveedor.
10. Haga clic en **Guardar**.

> ⚠️ PagBank también ofrece la opción de captura automática programada hasta en 5 días. Si desea utilizarlo en su tienda, siga los pasos indicados en esta [documentación](/es/known-issues/no-aparece-la-captura-automatica-programada--1cuvGbgUvd1ATeHEG6Il98).

Para configurar los métodos de pago a procesar por PagBankV3, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PagBankV3 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
