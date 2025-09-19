---
title: 'Configurar pago con Powerpay'
id: 4v3ohBfSTxIyi06aqvlrPp
status: PUBLISHED
createdAt: 2023-09-08T18:31:43.851Z
updatedAt: 2024-01-23T21:22:03.339Z
publishedAt: 2024-01-23T21:22:03.339Z
firstPublishedAt: 2023-09-08T19:50:37.486Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-powerpay
legacySlug: configurar-pago-con-powerpay
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Powerpay. Con este proveedor, su tienda puede realizar ventas a través de diferentes de Powerpay.

Para configurar Powerpay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Powerpay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__, __Application Token__, __secretKey__ y __merchant_id__ con los datos proporcionados por el Powerpay.
5. En el campo __Captura automática de pago__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li>**Utiliza El Comportamiento Recomendado Por El Procesador de Pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Imediatamente: Captura Automática Al Autorizar El Pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li>**Imediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Captura automática al autorizar el pago").</li>
   		<li>**Programado: Establece Cuándo Se Realizará La Captura Automática**: al seleccionar esta opción, se mostrará el campo **Periodo de tiempo programado en horas para la captura automática**, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.</li>        
   		<li>**Desactivado: No Capturado Automáticamente**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
6. En __¿Activar split y enviar receptores?__, seleccione si los pagos divididos estarán disponibles para el marketplace y sellers.

7. Haga clic en __Salvar__.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda__ > __Pago__ > __Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elige la condición de pago __Powerpay__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en __Guardar__.

Después de seguir los pasos indicados, Powerpay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
