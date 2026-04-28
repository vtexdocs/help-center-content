---
title: 'Configurar pago con InstaPago'
id: 
status: PUBLISHED
createdAt: 2026-02-19T00:00:00.191Z
updatedAt: 2026-02-19T00:00:00.191Z
publishedAt: 2026-02-19T00:00:00.191Z
firstPublishedAt: 2026-02-19T00:00:00.191Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-instapago
legacySlug: configurar-pago-con-instapago
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos InstaPago. Con este proveedor, su tienda puede realizar ventas a través de InstaPago.

Para configurar InstaPago, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **InstaPago** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta InstaPago.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor InstaPago en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. Si desea utilizar [Split de pagos](https://help.vtex.com/es/docs/tutorials/split-de-pagos) en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **InstaPago**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/docs/tutorials/condiciones-especiales).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, InstaPago puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

