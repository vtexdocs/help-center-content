---
title: 'Configurar pago con PagoEfectivoV2'
id: 63Raoh7hlWoWbMJOAacfMV
status: PUBLISHED
createdAt: 2024-02-06T11:22:25.720Z
updatedAt: 2024-03-13T15:08:00.716Z
publishedAt: 2024-03-13T15:08:00.716Z
firstPublishedAt: 2024-02-06T11:40:45.294Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pagoefectivov2
legacySlug: configurar-pago-con-pagoefectivov2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PagoEfectivoV2. Con este proveedor, su tienda puede realizar ventas a través de PagoEfectivoV2.

Para configurar PagoEfectivoV2 siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagoEfectivoV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta PagoEfectivoV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagoEfectivoV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
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
8. En __Campos del Proveedor__, ingrese la información __TradeID__, __TradeName__, __TradeEmail__ y __MaxActiveCipTime__ según la información de su cuenta PagoEfectivoV2.

9. En __Country__, seleccione el país donde se realizará la transacción de pago.

10. En __Currency__, seleccione la moneda que se utilizará en la transacción de pago.

11. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __PagoEfectivo__ o __Cuotealo__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, PagoEfectivoV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
