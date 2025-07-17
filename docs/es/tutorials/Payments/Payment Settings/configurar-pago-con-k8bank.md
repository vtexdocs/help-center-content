---
title: 'Configurar pago con K8Bank'
id: 1ewZll1fwjClvp5Wl1uES1
status: PUBLISHED
createdAt: 2023-09-18T13:14:17.375Z
updatedAt: 2024-01-23T17:56:32.780Z
publishedAt: 2024-01-23T17:56:32.780Z
firstPublishedAt: 2023-09-18T13:48:29.694Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-k8bank
locale: es
legacySlug: configurar-pago-con-k8bank
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos K8Bank. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de credito, debito, private y cobranded labels, boletos y PIX.

Para configurar K8Bank, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __K8Bank__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__, __Application Token__, __cnpj__ y __CobrancasClientId__ con los datos proporcionados por el K8Bank.
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
6. En __¿Activar split y enviar receptores?__, seleccione si los pagos divididos estarán disponibles para el marketplace y sellers.

7. Haga clic en `Salvar`.

Para configurar los métodos de pago a procesar por K8Bank, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, K8Bank puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
