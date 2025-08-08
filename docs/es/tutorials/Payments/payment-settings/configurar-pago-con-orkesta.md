---
title: 'Configurar pago con Orkesta'
id: 8SLAr08K4kIfYKMCUS0Wf
status: PUBLISHED
createdAt: 2025-06-12T14:47:02.940Z
updatedAt: 2025-06-12T14:58:26.076Z
publishedAt: 2025-06-12T14:58:26.076Z
firstPublishedAt: 2025-06-12T14:58:26.076Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-orkesta
legacySlug: configurar-pago-con-orkesta
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Orkesta. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito y débito, OrkestaPay Card y OrkestaPay Checkout.

Para configurar Orkesta, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Orkesta** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Orkesta.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Orkesta en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, seleccione el campo **Webhook signing secret** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Orkesta, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).

Después de seguir los pasos indicados, Orkesta puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
