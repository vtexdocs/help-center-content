---
title: 'Configurar pago con Pagali'
createdAt: 2026-11-19T00:00:00.000Z
updatedAt: 2026-11-19T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-pagali
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos Pagali. Con este proveedor, su tienda puede realizar ventas a través de Pix.

Para configurar Pagali, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Pagali** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Pagali.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Pagali en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, rellene los campos **PIX Field 1 Name**, **PIX Field 1 Value**, **PIX Field 2 Name** y **PIX Field 2 Value** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a **Configuración de la Tienda > Pago > Configuración**, o escriba **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **PIX**.
4. Active la condición en el campo **Status**.
5. En **Procesar con afiliación**, seleccione la opción **_lojaintegrada-pagali-v0**.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Pagali puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
