---
title: 'Configurar pago con Wabi'
id: 2H3myi3n1MQ60UN5QFpLsN
status: PUBLISHED
createdAt: 2025-02-26T18:23:04.579Z
updatedAt: 2025-02-26T18:55:43.933Z
publishedAt: 2025-02-26T18:55:43.933Z
firstPublishedAt: 2025-02-26T18:55:43.933Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-wabi
legacySlug: configurar-pago-con-wabi
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Wabi. Con este proveedor, tu tienda puede realizar ventas a través de pagarés.

Para configurar Wabi, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Wabi** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Wabi.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Wabi en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. Haga clic en `Guardar`.

## Configurar la condición de pago Pagaré

Si aún no has configurado los pagarés como método de pago en otros conectores de tu tienda, accede a [Configurar pagos con Pagaré](https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ).

Luego siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. En **Pago personalizado**, haga clic en el botón correspondiente al nombre utilizado para el método de pago del pagaré (configurado en la sección anterior).
4. Active la condición en el campo **Status**.
5. En **Procesar con proveedor**, seleccione **wabipartnerbo-wabi-v0**.
6. Si lo desea, también puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Wabi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

