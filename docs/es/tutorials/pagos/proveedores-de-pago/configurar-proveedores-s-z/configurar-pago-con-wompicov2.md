---
title: 'Configurar pago con WompiCoV2'
createdAt: 2026-08-04T00:00:00.000Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompicov2
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos WompiCoV2. Con este proveedor, su tienda puede realizar ventas a través de diversos métodos de pago, como American Express, Mastercard, Visa, Mastercard Debit y Visa Electron.

Para configurar WompiCoV2, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **WompiCoV2** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, haga clic en **Autorizar via OAuth**. En este punto, será redirigido a la página del proveedor, donde deberá acceder a su cuenta y autorizar la conexión de VTEX a su cuenta WompiCoV2. Luego del proceso de autorización, regresará automáticamente al Admin VTEX.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor WompiCoV2 en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por WompiCoV2, acceda al [Configurar Condiciones de Pago](/es/docs/tutorials/condiciones-de-pago).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/docs/tutorials/condiciones-especiales).

Después de seguir los pasos indicados, WompiCoV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
