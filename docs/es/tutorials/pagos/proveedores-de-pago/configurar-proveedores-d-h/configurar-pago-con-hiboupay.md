---
title: 'Configurar pago con HibouPay'
createdAt: 2026-10-27T00:00:00.000Z
updatedAt: 2026-10-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-hiboupay
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos HibouPay. Con este proveedor, su tienda puede realizar ventas a través de Promissories.

Para configurar HibouPay, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **HibouPay** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta HibouPay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor HibouPay en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, rellene los campos **API Key**, **Merchant ID** y **Webhook Secret** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por HibouPay, acceda al [Configurar Condiciones de Pago](/es/docs/tutorials/condiciones-de-pago).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/docs/tutorials/condiciones-especiales).

Después de seguir los pasos indicados, HibouPay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
