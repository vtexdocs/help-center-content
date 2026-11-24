---
title: 'Configurar pago con Serfinsa'
createdAt: 2026-07-26T00:00:00.000Z
updatedAt: 2026-07-26T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-serfinsa
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos Serfinsa. Con este proveedor, su tienda puede realizar ventas a través de Serfinsa.

Para configurar Serfinsa, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Serfinsa** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Serfinsa.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Serfinsa en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Serfinsa**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/docs/tutorials/condiciones-especiales).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Serfinsa puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
