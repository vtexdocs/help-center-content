---
title: 'Configurar pago con Niubiz'
id: 6rtGmpkdZUw4AjlRcOePRu
status: PUBLISHED
createdAt: 2024-09-19T20:02:58.068Z
updatedAt: 2025-07-02T20:09:44.245Z
publishedAt: 2025-07-02T20:09:44.245Z
firstPublishedAt: 2024-09-19T20:19:58.405Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-niubiz
locale: es
legacySlug: configurar-pago-con-niubiz
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Niubiz. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito y privatelabels, pagarés y Niubiz.

Para configurar Niubiz, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Niubiz__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Niubiz.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Niubiz en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
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
8. En __Campos del proveedor__, seleccione o complete los campos __tipoFlujoNiubiz__ y __logoComercio__.
9. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Niubiz, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Niubiz puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
