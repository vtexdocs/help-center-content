---
title: 'Configurar pago con Worldpay-Payments-Via-WPG'
id: 7GCtigwhNYMi604UM0KeO6
status: PUBLISHED
createdAt: 2018-02-28T22:09:45.321Z
updatedAt: 2024-03-18T17:20:43.467Z
publishedAt: 2024-03-18T17:20:43.467Z
firstPublishedAt: 2018-02-28T22:38:14.737Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-the-worldpay-acquirer
locale: es
legacySlug: configurar-el-adquirente-worldpay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Worldpay es un [adquirente](/es/tutorial/que-es-un-adquirente) de actuación global, capaz de procesar pagos en los más diversos tipos de monedas y tarjetas.

Para configurar Worldpay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Worldpay-Payments-Via-WPG__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta Worldpay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Worldpay en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Liquidación automática__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li><b>Utiliza comportamiento recomendado por el procesador de pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Liquidación automática inmediatamente después de la autorización del pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Liquidación automática inmediatamente después del análisis antifraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
   		<li><b>Desactivado</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).

9. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.

10. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por WorldPay, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, WorldPay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
