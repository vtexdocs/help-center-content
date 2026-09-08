---
title: 'Configurar pago con Wompi-Nequi'
createdAt: 2023-04-20T16:43:45.032Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompi-nequi
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos Wompi-Nequi. Con este proveedor, su tienda puede realizar ventas a través de Nequi (sistema de pago colombiano).

Para configurar Wompi-Nequi, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Wompi-Nequi** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Wompi-Nequi.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Wompi-Nequi en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, rellene los campos **Llave publica (produccion) - Wompi**, **Llave privada (produccion) - Wompi**, **Llave publica (prueba) - Wompi** y **Llave privada (prueba) - Wompi** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Wompi-Nequi**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si lo desea, también puede [configurar condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Wompi-Nequi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
