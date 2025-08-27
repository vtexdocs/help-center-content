---
title: 'Configurar pago con Worldline Global Online Pay'
id: 5LAfBIreDXYspNC0OScnL9
status: PUBLISHED
createdAt: 2025-07-02T14:54:36.207Z
updatedAt: 2025-07-02T18:05:48.881Z
publishedAt: 2025-07-02T18:05:48.881Z
firstPublishedAt: 2025-07-02T18:05:48.881Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-worldline-global-online-pay
legacySlug: configurar-pago-con-worldline-global-online-pay
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Worldline Global Online Pay. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, PayPal, Worldline Global Online Pay, MultiBanco, Bizum, Klarna Pay Later, Klarna, and Klarna Pay Now.

Para configurar Worldline Global Online Pay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Worldline Global Online Pay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Worldline Global Online Pay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Worldline Global Online Pay en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
<ul>
    	<li>**Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
    	<li>**Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
    	<li>**Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>

8. En **Campos del Proveedor**, seleccione o complete los campos **Environment, Merchant ID, Webhooks Key, Webhooks Secret, Payment action, Automatic capture, Enable 3-D secure authentication, Request authentication exemption for low-value baskets, Enforce strong customer authentication for every payment, Enable group cards, Template file name, Oney3x4x payment option, Session Timeout, Direct Debit Recurrence Type, Direct Debit Signature Type, Bank transfer by Worldline Instant payment only** según las instrucciones del proveedor.
9. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Worldline Global Online Pay, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Worldline Global Online Pay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
