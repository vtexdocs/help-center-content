---
title: 'Configurar pago con Inswitch'
id: XxY7tbpg4GMrexGQfto6Q
status: PUBLISHED
createdAt: 2023-07-14T17:56:24.581Z
updatedAt: 2024-01-24T17:44:57.275Z
publishedAt: 2024-01-24T17:44:57.275Z
firstPublishedAt: 2023-07-14T18:11:24.293Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-inswitch
locale: es
legacySlug: configurar-pago-con-inswitch
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Inswitch. Con este proveedor, su tienda puede realizar ventas a través de diferentes de Inswitch.

Para configurar Inswitch, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Inswitch__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por el Inswitch.
5. En el campo __Captura automática de pago__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li><b>Utiliza El Comportamiento Recomendado Por El Procesador de Pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Imediatamente: Captura Automática Al Autorizar El Pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Imediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Captura automática al autorizar el pago").</li>
   		<li><b>Programado: Establece Cuándo Se Realizará La Captura Automática</b>: al seleccionar esta opción, se mostrará el campo <b>Periodo de tiempo programado en horas para la captura automática</b>, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.</li>        
   		<li><b>Desactivado: No Capturado Automáticamente</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
6. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda__ > __Pago__ > __Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Elige la condición de pago __Inswitch__.
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Inswitch puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
