---
title: 'Configurar pago con Pay-me'
id: 17wyyNSVSQ9RYnuoCUWZIl
status: PUBLISHED
createdAt: 2024-10-18T18:38:17.444Z
updatedAt: 2025-01-09T20:03:22.289Z
publishedAt: 2025-01-09T20:03:22.289Z
firstPublishedAt: 2024-10-18T18:41:53.033Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pay-me
locale: es
legacySlug: configurar-pago-con-pay-me
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Pay-me. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito y débito, y Flex.

Para configurar Pay-me, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Pay-me__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Pay-me.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Pay-me en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Liquidación automática__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li><b>Utilizar comportamiento recomendado por el procesador de pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Liquidación automática inmediatamente después de la autorización del pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Liquidación automática inmediatamente después del análisis antifraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
   		<li><b>Desactivado</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. Si desea utilizar [Split de pagos](/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
9. En __Campos del proveedor__, seleccione o complete los campos __Merchant Code__, __Aceptar pagos con Tarjetas__, __Aceptar pagos con Billeteras Móviles (QR)__, __Aceptar pagos con Yape__ , __Aceptar pagos con Cuotéalo__, __Aceptar pagos con Transferencia Bancaria__ y __Aceptar pagos con PagoEfectivo__ según las instrucciones del proveedor.
10. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Pay-me, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Pay-me puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
