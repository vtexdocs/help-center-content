---
title: 'Configurar pago con MSC Payment'
id: 6hPTXSe57DSCuo7i2r3cjV
status: ARCHIVED
createdAt: 2023-09-11T14:04:54.926Z
updatedAt: 2024-10-03T15:22:05.758Z
publishedAt: 
firstPublishedAt: 2023-09-11T14:17:31.484Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-msc-payment
locale: es
legacySlug: configurar-pago-con-msc-payment
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos MSC Payment. Con este proveedor, su tienda puede realizar ventas a través de diferentes de MSC Payment.

Para configurar MSC Payment, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __MSC-Payment__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__, __Application Token__ y __tasaCambio__ con los datos proporcionados por el MSC Payment.
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

6. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.

7. Haga clic en __Salvar__.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda__ > __Pago__ > __Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elige la condición de pago __MSC Payment__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en __Guardar__.

Después de seguir los pasos indicados, MSC Payment puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
