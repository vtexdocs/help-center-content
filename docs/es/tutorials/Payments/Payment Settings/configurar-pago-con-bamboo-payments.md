---
title: 'Configurar pago con Bamboo-Payments'
id: 33TDZBp1wmgzJdiZtvu1xY
status: PUBLISHED
createdAt: 2022-08-12T20:06:37.117Z
updatedAt: 2025-02-26T15:02:53.268Z
publishedAt: 2025-02-26T15:02:53.268Z
firstPublishedAt: 2022-08-12T20:13:31.863Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-bamboo-payments
locale: es
legacySlug: configurar-pago-con-bamboo-payments
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Bamboo-Payments. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de credito, debito, private y cobranded labels, y boletos.

Para configurar Bamboo-Payments, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Bamboo-Payments__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Bamboo-Payments.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Bamboo-Payments en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
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
8. En __Campos del proveedor__, llena el campo __Ingrese su llave privada__ con los datos de tu cuenta Bamboo-Payments.
9. En __Habilitar autorización y captura__, __País de operación__, __Límite Superior de Captura Permitido (%)__ y __Límite Inferior de Captura Permitido (%)__ seleccione las opciones deseadas.
10. Haga clic en __Guardar__.

Para configurar los métodos de pago a procesar por Bamboo-Payments, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Bamboo-Payments puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
