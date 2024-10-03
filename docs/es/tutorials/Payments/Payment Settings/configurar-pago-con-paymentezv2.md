---
title: 'Configurar pago con PaymentezV2'
id: 6MQiFTLnSaQoCswRUN1SVe
status: ARCHIVED
createdAt: 2024-03-14T12:48:31.013Z
updatedAt: 2024-10-03T16:08:43.031Z
publishedAt: 
firstPublishedAt: 2024-03-14T13:10:44.458Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paymentezv2
locale: es
legacySlug: configurar-pago-con-paymentezv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PaymentezV2. Con este proveedor, su tienda puede realizar ventas a través de TuyaPay, tarjetas (crédito, tienda cobranded, tienda red propia) y pagarés.

Para configurar PaymentezV2, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PaymentezV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por PaymentezV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PaymentezV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por PaymentezV2, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PaymentezV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
