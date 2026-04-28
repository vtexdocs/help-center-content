---
title: 'Configurar pago con Worldline Global Collect'
id:
status: PUBLISHED
createdAt: 2025-12-03T00:00:00.000Z
updatedAt: 2025-12-03T00:00:00.000Z
publishedAt: 2025-12-03T00:00:00.000Z
firstPublishedAt: 2025-12-03T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-worldline-global-collect
legacySlug: configurar-pago-con-worldline-global-collect
locale: es
subcategoryId:

---

En VTEX es posible la integración con el proveedor de pagos Worldline Global Collect. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito y débito, PIX, Apple Pay y Worldline Global Collect.

Para configurar Worldline Global Collect, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **worldline.globalcollect** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Worldline Global Collect.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Worldline Global Collect en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, seleccione o complete los campos **Environment**, **Merchant ID**, **Webhook Key ID**, **Webhook Secret Key**, **Capture type**, **Payment Sub-domain**, **3DS mode**, y **Soft Descriptor** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Worldline Global Collect, acceda al [Configurar Condiciones de Pago](/es/docs/tutorials/condiciones-de-pago).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/docs/tutorials/condiciones-especiales).

Después de seguir los pasos indicados, Worldline Global Collect puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

