---
title: 'Configurar pago con Koin-Payments'
id: 5nTQFgTLGkPcJrqi7PKlO1
status: PUBLISHED
createdAt: 2022-08-18T12:40:14.512Z
updatedAt: 2024-03-11T17:58:22.260Z
publishedAt: 2024-03-11T17:58:22.260Z
firstPublishedAt: 2022-08-18T12:56:36.170Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-koin-payments
locale: es
legacySlug: configurar-pago-con-koin-payments
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Koin-Payments. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito y débito, PIX y BoletoParceladoKoin.

Para configurar Koin-Payments, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Koin-Payments__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Koin-Payments.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Koin-Payments en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en__ Activar modo de prueba__.
7. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Koin-Payments, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Koin-Payments puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
