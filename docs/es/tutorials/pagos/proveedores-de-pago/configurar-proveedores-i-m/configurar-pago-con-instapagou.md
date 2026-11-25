---
title: 'Configurar pago con InstaPagoU'
createdAt: 2026-10-28T00:00:00.000Z
updatedAt: 2026-10-28T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-instapagou
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos InstaPagoU. Con este proveedor, su tienda puede realizar ventas a través de InstapagoU.

Para configurar InstaPagoU, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **InstaPagoU** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta InstaPagoU.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor InstaPagoU en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. Si desea utilizar [split de pagos](/es/docs/tutorials/split-de-pagos) en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **InstaPagoU**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si desea, puede [configurar condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, InstaPagoU puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
