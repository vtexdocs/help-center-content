---
title: 'Configurar pago con Lifemiles'
id: 2lDOH2llXO9dQukJfWkwzD
status: PUBLISHED
createdAt: 2025-08-25T12:17:16.100Z
updatedAt: 2025-08-25T12:40:56.814Z
publishedAt: 2025-08-25T12:40:56.814Z
firstPublishedAt: 2025-08-25T12:40:48.557Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-lifemiles
legacySlug: configurar-pago-con-lifemiles
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Lifemiles. Con este proveedor, tu tienda puede realizar ventas a través de pagarés.

Para configurar Lifemiles, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Lifemiles** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Lifemiles.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Lifemiles en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, seleccione o complete los campos **Partner Code**, **Payment currency 1**, **Website currency identifier 1**, **Payment currency 2**, **Website currency identifier 2**, **Payment currency 3**, **Website currency identifier 3**, y **Webhook Status** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar la condición de pago Pagaré

Si aún no has configurado los pagarés como método de pago en otros conectores de tu tienda, accede a [Configurar pagos con Pagaré](/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ).

Luego siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. En **Pago personalizado**, haga clic en el botón correspondiente al nombre utilizado para el método de pago del pagaré (configurado en la sección anterior).
4. Active la condición en el campo **Status**.
5. En **Procesar con proveedor**, seleccione **lifemilespartnerco-lifemiles-v0**.
6. Si lo desea, también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Lifemiles puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

