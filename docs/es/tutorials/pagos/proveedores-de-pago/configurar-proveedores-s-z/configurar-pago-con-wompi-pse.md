---
title: 'Configurar pago con Wompi-PSE'
createdAt: 2026-08-04T00:00:00.000Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompi-pse
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos Wompi-PSE. Con este proveedor, su tienda puede realizar ventas a través de PSE.

Para configurar Wompi-PSE, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Wompi-PSE** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Wompi-PSE.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Wompi-PSE en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, rellene los campos **Llave publica (produccion) - PSE**, **Llave privada (produccion) - PSE**, **Llave publica (prueba) - PSE** y **Llave privada (prueba) - PSE** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Wompi-PSE**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si lo desea, también puede [configurar condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Wompi-PSE puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
