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

En VTEX es posible la integración con el proveedor de pagos PagBankV3. A través de este proveedor, su tienda puede realizar ventas mediante boleto, PIX, tarjetas de débito y crédito.

Para configurar PagBankV3, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagBankV3__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, haga clic en __Autorizar com OAuth__. En este punto, serás redirigido a la página de PagBank, donde deberás acceder a tu cuenta y autorizar la conexión de VTEX a tu cuenta de PagBank. Luego del proceso de autorización, regresará automáticamente al VTEX Admin.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagBankV3 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Liquidación automática__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li>**Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li>**Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
   		<li>**Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
9. En __Campos del proveedor__, seleccione los campos __Prazo para captura do pagamento
__, __Gostaria de ativar o repasse do liable das transações para o seller com maior valor a receber?__, __Prazo de expiração do QR Code PIX__, y __Ativar 3DS__ según las instrucciones del proveedor.
10. Haga clic en __Guardar__.

> ⚠️ PagBank también ofrece la opción de captura automática programada hasta en 5 días. Si desea utilizarlo en su tienda, siga los pasos indicados en esta [documentación](https://help.vtex.com/es/known-issues/no-aparece-la-captura-automatica-programada--1cuvGbgUvd1ATeHEG6Il98).

Para configurar los métodos de pago a procesar por PagBankV3, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PagBankV3 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
