---
title: 'Configurar pago con PagBankV3'
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2024-03-14T18:59:12.645Z
publishedAt: 2024-03-14T18:59:12.645Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-el-pagseguro-v3
locale: es
legacySlug: configurar-el-pagseguro-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PagBankV3. A través de este proveedor, su tienda puede realizar ventas mediante boleto, PIX, tarjetas de débito y crédito.

Para configurar PagBankV3, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagBankV3__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, haga clic en __Autorizar com OAuth__. En este punto, serás redirigido a la página de PagBank, donde deberás acceder a tu cuenta y autorizar la conexión de VTEX a tu cuenta de PagBank. Luego del proceso de autorización, regresará automáticamente al VTEX Admin.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagBankV3 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, en el campo __Liquidación automática__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li><b>Utiliza comportamiento recomendado por el procesador de pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Liquidación automática inmediatamente después de la autorización del pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Liquidación automática inmediatamente después del análisis antifraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
   		<li><b>Desactivado</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
7. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. En __Campos deL proveedor__, en el campo __Prazo para captura do pagamento__, seleccione el período deseado para capturar el pago.
9. Haga clic en __Guardar__.

Para configurar los métodos de pago a procesar por PagBankV3, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PagBankV3 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
