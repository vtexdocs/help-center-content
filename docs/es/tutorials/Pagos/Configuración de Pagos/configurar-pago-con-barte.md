---
title: 'Configurar pago con Barte'
id: 4KYwWluJ0pLKA6BLvNkNRS
status: PUBLISHED
createdAt: 2025-06-11T20:29:38.757Z
updatedAt: 2025-06-11T21:30:35.155Z
publishedAt: 2025-06-11T21:30:35.155Z
firstPublishedAt: 2025-06-11T21:30:35.155Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-barte
legacySlug: configurar-pago-con-barte
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Barte. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, facturas y Pix.

Para configurar Barte, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **VtexBartePaymentProvider** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Barte.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Barte en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. Consulta con el proveedor de Barte si necesitas seleccionar la opción **Requires document**.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Barte, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Barte puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
