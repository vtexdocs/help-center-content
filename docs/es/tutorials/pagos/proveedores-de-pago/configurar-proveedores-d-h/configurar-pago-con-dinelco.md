---
title: 'Configurar pago con Dinelco'
createdAt: 2026-10-27T00:00:00.000Z
updatedAt: 2026-10-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-dinelco
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos Dinelco. Con este proveedor, su tienda puede realizar ventas a través de Dinelco.

Para configurar Dinelco, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Dinelco** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Dinelco.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Dinelco en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, rellene los campos **Dinelco Secret** y **Environment** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Haga clic en __Dinelco__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Dinelco puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
