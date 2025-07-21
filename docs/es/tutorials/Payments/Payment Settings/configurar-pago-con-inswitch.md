---
title: 'Configurar pago con Inswitch'
id: XxY7tbpg4GMrexGQfto6Q
status: PUBLISHED
createdAt: 2023-07-14T17:56:24.581Z
updatedAt: 2025-01-06T14:23:41.943Z
publishedAt: 2025-01-06T14:23:41.943Z
firstPublishedAt: 2023-07-14T18:11:24.293Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-inswitch
locale: es
legacySlug: configurar-pago-con-inswitch
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Inswitch. Con este proveedor, su tienda puede realizar ventas a través de Inswitch.

Para configurar Inswitch, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Inswitch__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con la información de su cuenta Inswitch.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Inswitch en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Liquidación automática__, seleccione una de las siguientes opciones:
<ul>
    	<li><b>Utiliza comportamiento recomendado por el procesador de pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Liquidación automática inmediatamente después de la autorización del pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
    	<li><b>Liquidación automática inmediatamente después del análisis antifraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
    	<li><b>Desactivado</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>

8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Inswitch__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Inswitch puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
