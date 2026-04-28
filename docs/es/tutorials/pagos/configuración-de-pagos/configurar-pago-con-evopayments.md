---
title: 'Configurar pago con EvoPayments'
id: 7CxSgoftps0DHsfR8otQMf
status: PUBLISHED
createdAt: 2024-03-11T17:36:12.910Z
updatedAt: 2024-03-14T16:37:46.611Z
publishedAt: 2024-03-14T16:37:46.611Z
firstPublishedAt: 2024-03-11T18:19:00.757Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-evopayments
legacySlug: configurar-pago-con-evopayments
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos EVO Payments. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, débito, private y cobranded labels, y boletos.

Para configurar EVO Payments, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **EvoPayments** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por EVO Payments.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor EVO Payments en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Habilitar autenticación 3DS**, seleccione si habilitar la validación de seguridad 3DS.
8. En **Habilitar autorización y captura**, seleccione si desea activar esta función.
9. En **Habilitar plan Iphone For Life**, selecciona si deseas activar esta opción.
10. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por EVO Payments, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, EVO Payments puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
