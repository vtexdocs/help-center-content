---
title: 'Configurar pago con KlarnaPayments'
id:
status: PUBLISHED
createdAt: 2026-06-16T00:00:00.000Z
updatedAt: 026-06-16T00:00:00.000Z
publishedAt: 026-06-16T00:00:00.000Z
firstPublishedAt: 026-06-16T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paymentezv2
legacySlug: configurar-pago-con-paymentezv2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos KlarnaPayments. Con este proveedor, su tienda puede realizar ventas a través de Klarna.

Para configurar KlarnaPayments, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **KlarnaPayments** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta KlarnaPayments.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor KlarnaPayments en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. Haga clic en `Guardar`.

## Configurar la condición de pago Klarna

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haz clic en el botón `+`.
3. Haz clic en la opción **Klarna**.
4. En la pantalla de configuración, activa la condición haciendo clic en **Status**.
5. Si deseas utilizar un sistema antifraude, selecciona la opción **Utilizar antifraude**.
6. Si lo deseas, también puedes [configurar condiciones de pago especiales](https://help.vtex.com/es/docs/tutorials/condiciones-especiales).
7. Haz clic en `Guardar`.

Después de seguir los pasos indicados, KlarnaPayments puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
