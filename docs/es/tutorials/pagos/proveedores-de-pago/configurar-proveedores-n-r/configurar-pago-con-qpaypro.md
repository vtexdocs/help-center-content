---
title: 'Configurar pago con QPayPro'
createdAt: 2026-11-27T00:00:00.000Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-qpaypro
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos QPayPro. Con este proveedor, su tienda puede realizar ventas a través de QPayPro.

Para configurar QPayPro, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **QPayPro** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta QPayPro.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor QPayPro en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, rellene los campos **Public key**, **Private key**, **Api secret** y **Merchant ID** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **QPayPro**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.Para configurar los métodos de pago a procesar por QPayPro, acceda al [Configurar Condiciones de Pago](/es/docs/tutorials/condiciones-de-pago).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/docs/tutorials/condiciones-especiales).

Después de seguir los pasos indicados, QPayPro puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
